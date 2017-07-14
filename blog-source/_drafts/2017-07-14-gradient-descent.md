---
layout: post 
title: "A Brief Primer: (Stochastic) Gradient Descent"
date: 2017-07-14
comments: true
---

Many machine learning papers reference various flavors of stochastic gradient descent (SGD) - [parallel](http://martin.zinkevich.org/publications/nips2010.pdf) SGD, [asynchronous](https://static.googleusercontent.com/media/research.google.com/en//archive/large_deep_networks_nips2012.pdf) SGD, and [lock-free parallel](https://people.eecs.berkeley.edu/~brecht/papers/hogwildTR.pdf) SGD, to name a few. 

To orient future discussion of these papers, I thought it might be useful to dedicate one blog post to briefly developing stochastic gradient descent from "first principles." This discussion is supposed to be illustrative, and errs in favor of clarity, over rigor.

### Optimization algorithms

Stochastic gradient descent is an optimization algorithm. In machine learning, what exactly does a optimization algorithm optimize?

As you may be familiar, supervised machine learning generally consists of two phases[^1]: training (generating a model) and inference (making predictions based on that model). Training involves finding values for a model's *parameters*, $\theta$, such that two, often conflicting, goals are met: 1) error on the set of training examples is minimized, and 2) the model generalizes to new data.

Optimization algorithms are the means used to find these *optimal* parameters, and develop robust models. Some examples of optimization algorithms include gradient descent (for simpler linear models), the conjugate gradient method, BFGS, L-BFGS, and backpropagation (for neural networks).

### From the beginning

Let's begin with stochastic gradient desecent's predecessor and cousin: **gradient descent**. Gradient descent is an algorithm that iteratively tweaks a model's parameters, with the goal of minimizing the discrepancy between the model's predictions and the "true" labels associated with a set of training examples.

This discrepancy is commonly termed "cost" or "loss" and is quantified in a *cost function*. Here's a common cost function used with gradient descent:
$$
\begin{aligned}
J(\theta) = \frac{1}{2m} \sum_{i=1}^{m} (h_{\theta}(x^{(i)}) - y^{(i)})^2
\end{aligned}
$$

Let's unpack this. Here \\(m\\) is the number of training examples, \\(x^{(i)}\\) is the \\(i\\)th training example, \\(y^{(i)}\\) is the \\(i\\)th corresponding label, and $\theta$ is a vector representation of our model's parameters. So $h_{\theta}(x^{(i)})$ is the prediction our model $h_{\theta}$ makes on example \\(x^{(i)}\\).

Then $(h_{\theta}(x^{(i)}) - y^{(i)})^2$ is the square of the difference between our model's prediction and the actual label for the \\(i\\)th training example. We sum over all the training examples, and divide by \\(m\\) to compute the average, squared-error.

So is $J(\theta)$ just one $\frac{1}{2}$ of the *mean-squared error* on the training examples.

Note that we could to aim to minimize any multiple of the mean-squared error, and we'd still be minimizing the actual mean-squared error in the process. Thus, it's reasonable to take $J(\theta)$ as our particular cost function.

Now back to gradient descent. At each iteration, we perform the following update step:
$$
\begin{aligned}
\theta \leftarrow \theta - \gamma \nabla J(\theta) \\
\end{aligned}
$$

Here is $\gamma$ is the learning rate, or step-size. Recall that $\nabla J(\theta)$ is the vector derivative of $J(\theta)$, and points in the direction in which $J(\theta)$ rises most rapidly. So to minimize $J(\theta)$, we simply take a step of size $\gamma$ in the exact opposite direction. 

We do this repeatedly until we arrive at a point where $\nabla J(\theta) = 0$. This represents a local or global minimum of our cost function $J(\theta)$. At such a point, we say gradient descent has *converged*. Note that if $J(\theta)$ has certain properties, notably convexity, and $\gamma$ is properly tuned, gradient descent will in fact converge at the global minimum.

### Stochastic Gradient Descent

Gradient descent has a problem. Computing the gradient of the cost function, $\nabla J(\theta)$, is very costly in practice. Recall
$$
\begin{aligned}
\nabla J(\theta) = (\frac{\partial}{\partial \theta_1} J(\theta), \frac{\partial}{\partial \theta_2} J(\theta), ..., \frac{\partial}{\partial \theta_n} J(\theta))
\end{aligned}
$$

where the subscripts represent an index on features. (So our model consists of \\(n\\) features.) Each partial derivative in this vector involves computing a sum over *every training example*:
$$
\begin{aligned}
\frac{\partial}{\partial \theta_j} J(\theta) 
&= \frac{\partial}{\partial \theta_j} \left( \frac{1}{2m} \sum_{i=1}^{m} (h_{\theta}(x^{(i)}) - y^{(i)})^2 \right) \\
&= \frac{1}{m} \sum_{i=1}^{m} (h_{\theta}(x^{(i)}) - y^{(i)}) \frac{\partial}{\partial \theta_j} h_{\theta}(x^{(i)})
\end{aligned}
$$

For large training sets (as most are), this is prohibitively expensive. The key idea in stochastic gradient descent is to drop the sum, and use the following as a very rough proxy for the left-hand side:
$$
\begin{aligned}
(h_{\theta}(x^{(i)}) - y^{(i)}) \frac{\partial}{\partial \theta_j} h_{\theta}(x^{(i)})
\end{aligned}
$$
where $(x^{(i)}, y^{(i)})$ is any one particular training example.

Then, in stochastic gradient descent, instead of summing over every training example at each step, and iterating until convergence, we cycle through the training examples in random order, using a *single* one at each iteration[^2]:
$$
\begin{aligned}
& \text{for } i := 1, 2, ..., m \space \{ \\
& \quad \theta \leftarrow \theta - \gamma \left( (h_{\theta}(x^{(i)}) - y^{(i)}) \nabla h_{\theta}(x^{(i)}) \right) \\
& \}
\end{aligned}
$$

Though it may not be imminently obvious, theory assures us that if the learning rate $\gamma$ is reduced appropriately over time, and the cost function satisfies certain properties, stochastic gradient descent will *also* converge.

### Footnotes

[^1]: There is also an important intermediate stage: validation, used to determine the values of our model's hyperparameters. Hyperparameters are meta-parameters that dictate how we construct a particular model. In gradient descent, the learning rate $\gamma$ is a key hyperparameter.

[^2]: Note that there is a middle-ground beteen gradient descent and stochastic gradient descent, called mini-batch gradient descent, that uses a small subset of training examples at each iteration.
