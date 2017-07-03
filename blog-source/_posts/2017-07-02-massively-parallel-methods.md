---
layout: post 
title: "Massively Parallel Methods for Deep Reinforcement Learning"
date: 2017-7-2
comments: false 
---

In this post, I introduce the Google DeepMind [paper](https://arxiv.org/pdf/1507.04296.pdf) "Massively Parallel Methods for Deep Reinforcement Learning," published in ICML 2015, and discuss the motivation behind developing parallel implementations of powerful algorithms.

### Paper contributions
This paper presents a distributed implementation, called Gorila, of the Deep Q-Network (DQN) algorithm, which applies deep neural networks to the problem of reinforcement learning (RL). The algorithm, which was [published](https://deepmind.com/research/dqn/) in *Nature*, uses a deep convolutional network to approximate the optimal action-value function, which guides an RL agent's behavior. The core breakthrough: the agent was trained to play a set of Atari 2600 computer games based solely on the pixels of still frames and associated scores, and yet beat all previous implementations, achieving a level of performance comparable to that of professional human players.

The authors of *this* paper used Gorila to play 49 Atari 2600 games in two different test settings, and did even better, beating the non-distributed DQN implementation in 31 out of 49 games in the first, and 41 out of 49 games in the second. Notably, to reach these results, their system was trained for a wall-clock time that was roughly an *order of magnitude* less than that required by the single GPU implementation.

### Parallelization

Gorila achieves these results by introducing parallelization along three axes:

  1. Actors - In an RL algorithm, actors are the agents that explore an environment, and reap rewards for doing so. Gorila supports \\(N_{act}\\) actors which operate in parallel on \\(N_{act}\\) instantiations of the *same* environment. Each actor generates its own trajectory of experience on the environment, which can be stored both in local memory and in a global memory.

  2. Learners - Learners sample experience from the local or global store, and apply an RL algorithm such as DQN to it, generating a gradient vector \\(g_i\\) to be communicated to the parameter server (see below). The parameter server uses these gradient vectors to update a master copy of the Q-network. Gorila supports \\(N_{learn}\\) concurrent learner processes, each of which contains a replica of the Q-network, and computes a gradient update from an independently drawn sample of experience at each iteration.

  3. Parameter server - The parameter server, which serves the role of a master node, maintains a distributed representation of the Q-network, with the parameter vector $\theta$ split across the \\(N_{param}\\) machines of the server. The parameter server receives gradient updates from the learner; each of the \\(N_{param}\\) machines applies the appropriate updates to the subset of $\theta$ that is is responsible for. This process of applying updates in a distributed manner follows an asynchronous variant of stochastic gradient descent.

### So what?

Why is this significant? It seems obvious that if you throw more computational power at a problem (i.e. by running the algorithm on a cluster of CPUs, as opposed to a single node), performance (as measured by accuracy or head-to-head performance, given comparable training time) should improve, or alternatively, that the required training time should decrease (given comparable results). In general, what is the point of a paper that presents a distributed implementation of a well-known algorithm, and claims that performance improved?

Actually, the contribution can be of one of two flavors:

  1. Demonstrating that a particular algorithm *can* be implemented in a distributed fashion. Emphatically, this is not always the case. Such a paper might show that the throughput of the system scales linearly with the level of parallelization (e.g. number of concurrent processes used), which suggests that a large portion of the computation is parallelizable. Notably, even a sub-linear improvement can be a win. Such results are particularly valued when there are particular, demanding performance objectives that must be met. Monitoring a large data stream in real-time to flag anomalies (e.g. to issue crime alerts) may require greater processing throughput than a single node system can support; supporting interactive queries on a massive data set (e.g. to visualize consumer data) may necessitate lower response latencies than a non-parallel implementation can guarantee. In machine learning, in particular, there are often significant returns to improved performance, with faster training times allowing for rapid iteration during model development, or simply the use of more training data.

    Secondly, the ability to parallelize computation often allows for significant cost savings. The canonical example of this is Google's early decision to execute search indexing on clusters of commodity machines, as opposed to expensive mainframes. Today, the relevant comparison may be the tradeoff between running a data-parallel computation on a cluster of CPUs versus on one or more high-performance GPUs. Using Amazon EC2 on-demand [pricing](https://aws.amazon.com/ec2/pricing/on-demand/) as a rough proxy for hardware and power costs, renting a starter-tier GPU instance, the p2.xlarge, costs $0.90 per hour, while a comparable general-purpose CPU instance, the m4.xlarge, costs only $0.20 per hour.[^1] This is admittedly a coarse comparison, but the almost 5x price spread suggests that outside of a few highly specialized applications, CPU clusters may still be the way to go. Note that analysis does not even include the software challenges of rewriting code to take advantage of a GPU's single-purpose, SIMD architecture.

  2. Demonstrating that the distributed variant of an algorithm can yield a superlinear speedup. This is rarer, but often possible. A relevant example of this is found in another DeepMind [paper](https://arxiv.org/pdf/1602.01783.pdf), "Asynchronous Methods for Deep Reinforcement Learning," from ICML 2016, which, as a side note, presents an *asynchronous 1-step Q-learning* algorithm that achieves a 24x performance improvement, using 16 threads, over a single-threaded implementation.

    How is superlinear speedup possible? Here's a basic example: if an algorithm involves executing a computation on a large data set, parallelizing it (e.g. via a master-worker approach) could reduce or eliminate disk accesses, if the resulting data partitions now fit into each worker machine's main memory.

    In the case of reinforcement learning, the experiments with asynchronous 1-step Q-learning showed that less training data was needed in aggregate to reach score parity as more parallel actor-learners were used. The authors believe this superlinear behavior stems from the use of different exploration policies on different processes, which leads to parameter updates that are less correlated in time than if a single agent were to explore the environment sequentially. In other words, using more actor-learners leads to collecting experience that is more "diverse," leading to faster convergence of stochastic gradient descent.

    As these examples indicate, superlinearity can stem from both systems and algorithmic optimizations unlocked by parallelization. Such papers are valuable because they suggest avenues toward substantially better (e.g. "10x") system architectures or algorithms.

    Note also that by Amdahl's law, superlinearity can only hold for so long; as the number of processors grows, the speedup achieved by parallelization approaches a fixed constant, with the non-parallelizable component of the task becoming the bottleneck. Even if a particular computation is completely parallelizable, the speedup factor approaches a linear asymptote.

### Footnotes

[^1] Specifications for the p2.xlarge (GPU instance) include 4 vCPUs and 12 ECUs, versus 4 vCPUs and 13 ECUs for the m4.xlarge (CPU instance). Here ECU is an abbreviation for Elastic Compute Unit, which Amazon is phasing out for the more standard vCPU (virtual CPU) designation. Note that the r3.xlarge, a comparable memory-optimized CPU instance (4 vCPUs, 13 ECUs), costs $0.333 per hour.