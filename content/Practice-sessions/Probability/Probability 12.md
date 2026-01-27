---
{"publish":true,"created":"18/01/26, 18:08","modified":"2026-01-26T08:26:45.905+02:00","tags":["Academia","#Practice","Probability"],"cssclasses":""}
---

## Generalized random variable
$$
\displaylines{
\text{Random variable } X: \Omega \to \mathbb{R} \\
\text{Generalized random variable } X: \Omega \to S \text{ where } S \text{ is some set} \\
\text{e.g. } S = \mathbb{R}^{n}, S = \mathbb{C}, S = \mathbb{R}^{\mathbb{R}}, S = \mathbb{R}^{\mathbb{N}}, \text{etc.} \\
}
$$
## Pushforward measure or distribution
$$
\displaylines{
\text{Let } X: \Omega \to S \\
\text{Let } \mu: \mathcal{P}(S) \to [0, 1], \mu(A) = P(X \in A) = P(X^{-1}[A]) \\
\mu \text{ is then a probability measure on } S \\
}
$$
## Function of RV and inverse image
$$
\displaylines{
\text{Let } X: \Omega \to S \\
\text{Let } g: S \to T \\
g \circ X: \Omega \to T \\
g \circ X \text{ is then also a generalized random variable} \\
\text{Let } B \subseteq T \\
P(g(X) \in B) = P(X \in g^{-1}[B]) = P(X^{-1}[g^{-1}[B]]) \\
}
$$
### Example
$$
\displaylines{
\text{Let } X \sim Exp(1), Y = \ln X \\
P(Y \leq t) = P(\ln X \leq t) = P(\ln X \in (-\infty, t]) = \\
= P(X \in \ln^{-1}[(-\infty, t]]) = P(X \in (0, e^{t}]) = P(0 \leq X \leq e^{t}) = \\
= F_{X}(e^{t}) - F_{X}(0) = F_{X}(e^{t}) \\
}
$$
### Example
$$
\displaylines{
\text{Let } \theta \in [0, \pi] \text{ be uniformly random} \\
\text{Let } Y = \sin\theta \\
\text{Find } f_{Y}, F_{Y}, E[Y], Var(Y) \\
\\
\text{Solution:} \\
F_{Y}(t) = P(Y \leq t) = \begin{cases}
0 & t < 0 \\
\dots & t \in [0, 1] \\
1 & t > 1 \\
\end{cases} \\
P(Y \leq t) = P(\sin\theta \in (-\infty, t]) = P(\theta \in \sin^{-1}[(-\infty, t]]) = \\
= P(\theta \in [0, \arcsin t] \cup [\pi-\arcsin t, \pi]) = \frac{\arcsin t}{\pi} + \frac{\pi-(\pi-\arcsin t)}{\pi} = \frac{2\arcsin t}{\pi} \\
\implies \boxed{ F_{Y}(t) = \begin{cases}
0 & t < 0 \\
\frac{2\arcsin t}{\pi} & t \in [0, 1] \\
1 & t > 1 \\
\end{cases} } \\
\implies \boxed{ f_{Y}(t) = \begin{cases}
\frac{2}{\pi \sqrt{ 1-t^{2} }} & t \in [0, 1] \\
0 & \text{otherwise} \\
\end{cases} } \\
E[Y] = \int_{-\infty}^{\infty} tf_{Y}(t) \, dt = \dots \\
\text{or} \\
E[Y] = E[\sin\theta] = \int_{0}^{\pi} \sin\theta \, d\theta = \dots \\
E[Y^{2}] = \int_{-\infty}^{\infty} t^{2}f_{Y}(t) \, dt = \dots \\
\text{or} \\
E[Y^{2}] = E[\sin^{2}\theta] = \int_{0}^{\pi} \sin^{2}\theta \, d\theta \\
}
$$
### Example
$$
\displaylines{
\text{Let } \forall i \in [n]: X_{i} \text{ is a random variable, } P(X_{i} = 1) = P(X_{i} = -1) = \frac{1}{2} \\
\text{Let } s_{0} = \text{starting position} \\
\text{Let } Y = s_{0} + \sum_{i=1}^{n} X_{i} \\
\text{Let } W = \text{number of positive steps}, W \sim Bin\left( n, \frac{1}{2} \right) \\
\implies Y = s_{0} + W - (n-W) \\
\text{For large } n, Y \text{ is similar to the normal distribution!} \\
\text{Note: a more general statement is the central limit theorem} \\
\text{Calculate } \mu, \sigma^{2} \text{ such that } Y \sim \mathcal{N}(\mu, \sigma^{2}) \\
\text{Calculate } P(Y \in [a, b]) \text{ for } a < b \\
\\
\text{Solution:} \\
\mu = E[Y] = s_{0} + \sum_{i=1}^{n} E[X_{i}] = s_{0} \\
\sigma^{2} = Var(Y) = \sum_{i=1}^{n} Var(X_{i}) = \sum_{i=1}^{n} E[X_{i}^{2}] = n \\
\implies Y \sim \mathcal{N}(s_{0}, n) \\
\\
Z \sim \mathcal{N}(0, 1) \implies F_{X}(t) = \phi(t) = \text{tabular value for } t \geq 0 \\
t < 0 \implies P(Z \leq t) = P(Z \geq -t) = 1 - P(Z \leq -t) = 1 - \phi(-t) \\
\\
\implies P(Y \in [a, b]) = P\left( \frac{Y-s_{0}}{\sqrt{ n }} \in \left[ \frac{a-s_{0}}{\sqrt{ n }}, \frac{b-s_{0}}{\sqrt{ n }} \right] \right) = \phi \lrp{\frac{b-s_{0}}{\sqrt{ n }}} - \phi \lrp{\frac{b-s_{0}}{\sqrt{ n }}} \\
\text{or adjusted for negative values} \\
}
$$
### Example
$$
\displaylines{
\text{Let } (X, Y) \in [0, 1]^{2} \text{ be uniformly random} \\
\text{Calculate } E[X+Y] \\
\\
\text{Solution:} \\
E[X+Y] = E[X] + E[Y] \\
f_{X,Y}(x, y) = 1 \\
\implies \begin{eqsys}
f_{X}(x) = \int_{0}^{1} \, dy = 1 \text{ for } x \in [0, 1] \\
f_{Y}(y) = \int_{0}^{1}  \, dx = 1 \text{ for } y \in [0, 1] \\
\end{eqsys} \\
\implies E[X] = E[Y] = \int_{0}^{1} x \, dx = \frac{1}{2} \\
\implies \boxed{ E[X+Y] = \frac{1}{2} + \frac{1}{2} = 1 } \\
\\
\text{Alternative solution:} \\
E[X+Y] = \iint_{\mathbb{R}^{2}} (x+y)f_{X,Y}(x,y) \, dxdy = \\
= \int_{0}^{1} \int_{0}^{1} (x+y) \, dx \, dy = \int_{0}^{1} \int_{0}^{1} x \, dx \, dy + \int_{0}^{1} \int_{0}^{1} y \, dy \, dx = \frac{1}{2} + \frac{1}{2} = 1 \\
}
$$
### Example
$$
\displaylines{
\text{Let } \pi \text{ be a uniformly random permutation of } [n] \\
\text{Let } X = \text{number of fixed points of } \pi (\pi(i) = i) \\
\text{Calculate } E[X] \\
\\
\text{Solution:} \\
\text{Let } \forall i \in [1, n]: X_{i} = \begin{cases}
1 & \pi(i) = i \\
0 & \pi(i) \neq i \\
\end{cases} \\
E[X_{i}] = P(X_{i} = 1) = \frac{(n-1)!}{n!} = \frac{1}{n} \\
X = \sum_{i=1}^{n} X_{i} \implies \boxed{ E[X] = \sum_{i=1}^{n} E[X_{i}] = \sum_{i=1}^{n} \frac{1}{n} = 1 } \\
}
$$
### Example
$$
\displaylines{
\text{Let } (X, Y) \text{ be uniformly distributed on } D = \Set{ (x, y) | 0 \leq y \leq x \leq 1 } \\
\text{Calculate } E[X + Y] \\
\\
\text{Solution:} \\
\abs{D} = \frac{1}{2} \implies f_{X,Y}(x, y) = \begin{cases}
\frac{1}{\abs{D}} & (x, y) \in D \\
0 & \text{otherwise} \\
\end{cases} = \begin{cases}
2 & (x, y) \in D \\
0 & \text{otherwise} \\
\end{cases} \\
f_{X}(x) = \int_{-\infty}^{\infty} f_{X,Y}(x,y) \, dy = \int_{0}^{x} 2 \, dy = 2x \implies f_{X}(x) = \begin{cases}
2x & x \in [0, 1] \\
0 & \text{otherwise} \\
\end{cases} \\
f_{Y}(y) = \int_{-\infty}^{\infty} f_{X,Y}(x, y) \, dx = \int_{y}^{1} 2 \, dx = 2 - 2y \implies f_{Y}(y) = \begin{cases}
2(1-y) & y \in [0, 1] \\
0 & \text{otherwise} \\
\end{cases} \\
\implies E[X+Y] = E[X] + E[Y] = \int_{0}^{1} 2x^{2} \, dx + \int_{0}^{1} 2y(1-y) \, dy = \dots \\ 
}
$$
