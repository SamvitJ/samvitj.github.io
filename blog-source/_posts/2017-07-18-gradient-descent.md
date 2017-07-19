---
layout: post 
title: "A Brief Primer: Stochastic Gradient Descent"
date: 2017-07-18
comments: true
---

Many machine learning papers reference various flavors of stochastic gradient descent (SGD) - [parallel](http://martin.zinkevich.org/publications/nips2010.pdf) SGD, [asynchronous](https://static.googleusercontent.com/media/research.google.com/en//archive/large_deep_networks_nips2012.pdf) SGD, [lock-free parallel](https://people.eecs.berkeley.edu/~brecht/papers/hogwildTR.pdf) SGD, and even [distributed synchronous](https://research.fb.com/wp-content/uploads/2017/06/imagenet1kin1h5.pdf?) SGD, to name a few.

This topic isn't just a theoretical curiosity. Parallelizing important optimization algorithms, like SGD, is the key to fast training and, by extension, fast model development. Not surprisingly, three out of the four papers I just referenced came out of industry research.

To orient a discussion of these papers, I thought it would be useful to dedicate one blog post to briefly developing stochastic gradient descent from "first principles." This discussion is supposed to be illustrative, and errs in favor of pedagogical clarity, over mathematical rigor.

### Optimization

Stochastic gradient descent is an optimization algorithm. In machine learning, what exactly does an optimization algorithm optimize?

As you may know, supervised machine learning generally consists of two phases[^1]: training (generating a model) and inference (making predictions with that model). Training involves finding values for a model's *parameters*, $\theta$, such that two, often conflicting, goals are met: 1) error on the set of training examples is minimized, and 2) the model generalizes to new data.

Optimization algorithms are the means used to find these *optimal* parameters, and develop robust models. Some examples of optimization algorithms include gradient descent (for simpler linear models), the conjugate gradient method, BFGS, L-BFGS, and backpropagation (for neural networks).

### From the beginning

Let's begin with stochastic gradient descent's predecessor and cousin: **gradient descent**. Gradient descent is an algorithm that iteratively tweaks a model's parameters, with the goal of minimizing the discrepancy between the model's predictions and the "true" labels associated with a set of training examples.

This discrepancy is commonly termed "cost" or "loss" and is quantified in a *cost function*. Here's a common cost function used with gradient descent:
$$
\begin{aligned}
J(\theta) = \frac{1}{2m} \sum_{i=1}^{m} (h_{\theta}(x^{(i)}) - y^{(i)})^2
\end{aligned}
$$

Let's unpack this. Here \\(m\\) is the number of training examples, \\(x^{(i)}\\) is the \\(i\\)th training example, \\(y^{(i)}\\) is the \\(i\\)th corresponding label, and $\theta$ is a vector representation of our model's parameters. So $h_{\theta}(x^{(i)})$ is the prediction our model $h_{\theta}$ makes on example \\(x^{(i)}\\).

Then $(h_{\theta}(x^{(i)}) - y^{(i)})^2$ is the square of the difference between our model's prediction and the actual label for the \\(i\\)th training example. We sum over all the training examples, and divide by \\(m\\) to compute the average, squared-error.

So is $J(\theta)$ just one-half of the *mean-squared error* on the training examples.

Note that we could aim to minimize any multiple of the mean-squared error, and we'd still be minimizing the actual mean-squared error in the process. Thus, it's reasonable to take $J(\theta)$ as our particular cost function.

Now back to gradient descent. At each iteration, we perform an update operation on our parameter vector $\theta$. The full algorithm:

&nbsp;&nbsp;&nbsp;&nbsp;[Gradient Descent]{style="font-variant:small-caps;"}
$$
\begin{aligned}
& \text{repeat until convergence } \{ \\
& \quad \theta \leftarrow \theta - \gamma \nabla J(\theta) \\
& \}
\end{aligned}
$$

Here is $\gamma$ is the learning rate, or step-size. Recall that $\nabla J(\theta)$ is the vector derivative of $J(\theta)$, and points in the direction in which $J(\theta)$ rises most rapidly. So to minimize $J(\theta)$, we simply take a step of size $\gamma$ in the exact opposite direction.

We do this repeatedly until we arrive at a point where $\nabla J(\theta) = 0$. This represents a local or global minimum of our cost function $J(\theta)$. At such a point, we say gradient descent has *converged*. Note that if $J(\theta)$ has certain properties, notably convexity, and $\gamma$ is properly tuned, gradient descent will in fact converge at the global minimum.

![<sup>**Figure 1**: An illustration of gradient descent. Note that, at each iteration, the algorithm moves the black marker (a representation of the parameter vector $\theta$) in the direction of *steepest descent*. This process continues until the marker arrives at a local minimum. Note also how influential the initial value of $\theta$ is to the final outcome in this particular, non-convex gradient map. On such a terrain, a slight initial perturbation can lead to convergence at an entirely different minimum point. (Source: [Machine Learning | Coursera](https://www.coursera.org/learn/machine-learning/))</sup>](../assets/gradient-descent/gradient-descent.png){ width=100% }

To be totally clear, the update operation $\theta - \gamma \nabla J(\theta)$ is a *vector subtraction*. Both the parameter vector, $\theta$, and the gradient, $\nabla J(\theta)$, are \\(n\\)-dimensional vectors, where \\(n\\) denotes the number of features in our model. So every update operation in gradient descent is performed on the \\(n\\)-dimensional feature space of our model.

### Stochastic Gradient Descent

Gradient descent has a problem. Computing the gradient of the cost function, $\nabla J(\theta)$, is very costly in practice. Recall
$$
\begin{aligned}
\nabla J(\theta) = (\frac{\partial}{\partial \theta_1} J(\theta), \frac{\partial}{\partial \theta_2} J(\theta), ..., \frac{\partial}{\partial \theta_n} J(\theta))
\end{aligned}
$$

where the subscripts represent an index on features. Each partial derivative in this vector involves computing a sum over *every training example*:
$$
\begin{aligned}
\frac{\partial}{\partial \theta_j} J(\theta) 
&= \frac{\partial}{\partial \theta_j} \left( \frac{1}{2m} \sum_{i=1}^{m} (h_{\theta}(x^{(i)}) - y^{(i)})^2 \right) \\
&= \frac{1}{m} \sum_{i=1}^{m} (h_{\theta}(x^{(i)}) - y^{(i)}) \frac{\partial}{\partial \theta_j} h_{\theta}(x^{(i)})
\end{aligned}
$$

(Note that we are using a different index, \\(j\\), for the partial derivatives, as they are taken with respect to the model's \\(n\\) features. The index \\(i\\) refers to the training examples.)

For large training sets (as most are), this is prohibitively expensive. The key idea in stochastic gradient descent is to drop the sum, and use the following as a very rough proxy for our partial derivative:
$$
\begin{aligned}
\frac{\partial}{\partial \theta_j} J(\theta) \approx (h_{\theta}(x^{(i)}) - y^{(i)}) \frac{\partial}{\partial \theta_j} h_{\theta}(x^{(i)})
\end{aligned}
$$
where $(x^{(i)}, y^{(i)})$ is any one particular training example.

Then, in stochastic gradient descent, instead of summing over every training example at each step, and iterating until convergence, we cycle through the training examples in random order, using a *single* one at each iteration in our cost function:

&nbsp;&nbsp;&nbsp;&nbsp;[Stochastic Gradient Descent]{style="font-variant:small-caps;"}
$$
\begin{aligned}
& \text{repeat until convergence } \{ \\
& \quad \text{for } i := 1, 2, ..., m \space \{ \\
& \quad \quad \theta \leftarrow \theta - \gamma \nabla J(\theta; x^{(i)}; y^{(i)}) \\
& \quad \} \\
& \}
\end{aligned}
$$

where we have, from above:
$$
\begin{aligned}
\nabla J(\theta; x^{(i)}; y^{(i)}) = (h_{\theta}(x^{(i)}) - y^{(i)}) \nabla h_{\theta}(x^{(i)})
\end{aligned}
$$

Note that, in practice, the number of times we have to run the inner loop depends on the size of the training set. If the number of training examples is huge, a single iteration through the training examples can suffice. Most data sets require between 1 to 10 runs though the inner loop.

![<sup>**Figure 2**: Unlike in gradient descent, the value of the cost function does not necessarily decrease with each iteration in stochastic gradient descent. Even if the error on one particular training example is reduced, it is possible (and in the beginning, almost as likely) that the error on the *entire* training set will increase. With proper tuning of the learning rate, however, stochastic gradient descent will approach the same minimum as gradient descent. (Source: [BogoToBogo](http://www.bogotobogo.com/python/scikit-learn/images/Batch-vs-Stochastic-Gradient-Descent/stochastic-vs-batch-gradient-descent.png))</sup>](../assets/gradient-descent/comparison.png){ width=80% }

Though it may not be imminently obvious, theory assures us that if the learning rate $\gamma$ is reduced appropriately over time, and the cost function satisfies certain properties, stochastic gradient descent will *also* converge.

Finally, it is worth noting that there is a middle-ground between gradient descent and stochastic gradient descent, called mini-batch gradient descent. Mini-batch gradient descent uses a randomly selected subset, or *mini-batch*, of \\(b\\) training examples at each iteration, instead of just one. Some definitions of SGD actually refer to minibatch gradient descent. In practice, batching can lead to a more stable trajectory than in SGD, and, perhaps surprisingly, better performance as well, given that the gradient computation is properly vectorized.[^2]

### Parallelization?

Note that stochastic gradient descent, as we have described it thus far, is a sequential algorithm. Each update operation involves both 1) reading the current parameter vector $\theta$, and 2) writing to $\theta$ a modified value. So we cannot just naively execute a series of update operations in parallel.

How would we go about parallelizing SGD? One could imagine an approach in which slightly stale reads of the parameter vector are tolerated, and updates based on a given read are periodically merged in a synchronization step.

![<sup>**Figure 3**: Synchronous parallel SGD (Source: [Stanford](http://stanford.edu/~imit/tuneyourmomentum/theory/))</sup>](../assets/gradient-descent/parallel-sync.png){ width=50% }

Alternatively, we could get rid of the synchronization step altogether, and have worker threads (or processes) read the parameter vector from a shared memory bus, compute a gradient, and then send back an update to a master. It would then be the master node's responsibility to incorporate the updates in some sensible total ordering.

![<sup>**Figure 4**: Asynchronous parallel SGD (Source: [Stanford](http://stanford.edu/~imit/tuneyourmomentum/theory/))</sup>](../assets/gradient-descent/parallel-async.png){ width=50% }

Is there any guarantee that SGD with stale reads (approach 1) or asynchronous writes (approach 2) would converge? What would be the impact on performance?

These are the questions that the literature on parallelizing stochastic gradient descent seeks to answer.

### Footnotes

[^1]: There is also an important intermediate stage: validation, used to determine the values of our model's hyperparameters. Hyperparameters are meta-parameters that dictate how a particular model is constructed. In gradient descent, the learning rate $\gamma$ is a key hyperparameter.

[^2]: Assuming the appropriate vectorization libraries are present, it may be possible to compute the following batch gradient in parallel on a multi-core machine:
$$
\begin{aligned}
\nabla J(B) = \frac{1}{|B|} \sum_{i=1}^{|B|} (h_{\theta}(x^{(i)}) - y^{(i)}) \nabla h_{\theta}(x^{(i)})
\end{aligned}
$$
In a [recent paper](https://research.fb.com/publications/ImageNet1kIn1h/), Facebook AI Research took this idea to the extreme, training ImageNet in 1 hour with a minibatch size of 8192 images on 256 GPUs.

