---
{"publish":true,"created":"31/12/25, 13:06","modified":"2026-03-24T15:01:00.178+02:00","tags":["Academia","Lecture","Probability"],"cssclasses":""}
---

## Alternative expectation formula #lemma 
$$
\displaylines{
\text{Let } Y \text{ be a nonnegative random variable} \\
\text{Then } E[Y] = \int_{0}^{\infty} P(Y > y) \, dy \\
\\
\text{Proof:} \\
E[Y] = \int_{-\infty}^{\infty} xp(x) \, dx = \int_{0}^{\infty} xp(x) \, dx = \int_{0}^{\infty} \int_{0}^{x} p(x) \, dy  \, dx \\
\text{This double integral represents area } \mathcal{D} = \Set{ (x, y) \mid 0 < y < x } \\
\implies E[Y] = \int_{0}^{\infty} \int_{y}^{\infty} p(x) \, dx  \, dy = \int_{0}^{\infty} P(Y > y) \, dy \\  
}
$$
## LOTUS (Law of the unconscious statistician) #theorem 
$$
\displaylines{
\text{Let } X \text{ be a continuous random variable} \\
\text{Let } g \text{ be a real-valued function} \\
\text{Then, } E[g(X)] = \int_{-\infty}^{\infty} g(x)p_{X}(x) \, dx \\
\\
\text{Proof:} \\
\text{Let } g \text{ be a non-negative function} \\
\text{By lemma above, } E[g(X)] = \int_{0}^{\infty} P(g(X) > y) \, dy \\
\text{Let } y \\
P(g(X) > y) = \int_{\Set{ x \mid g(x) > y }} p(x) \, dx \\
\implies E[g(X)] = \int_{0}^{\infty} \int_{\Set{ x \mid g(x) > y }} p(x)  \, dx  \, dy \\
\mathcal{D}' = \Set{ (x, y) \mid 0 < y < g(x) } \\
\implies E[g(X)] = \int_{-\infty}^{\infty} \int_{0}^{g(x)} 1 \, dy \, p(x) \, dx = \int_{-\infty}^{\infty} g(x)p(x) \, dx \\
\\
\text{Let } g \text{ now be some function, not necessarily non-negative} \\
\text{Let } g^{+}(x) = \max((g(x)), 0) \\
\text{Let } g^{-}(x) = \max(-g(x), 0) \\
\text{Then, } g(x) = g^{+}(x) - g^{-}(x) \\
\text{Then, } E[g(X)] = E[g^{+}(X) - g^{-}(x)] = E[g^{+}(X)] - E[g^{-}(x)] = \\
= \int_{-\infty}^{\infty} g^{+}(x)p(x) \, dx - \int_{-\infty}^{\infty} g^{-}(x)p(x) \, dx = \int_{-\infty}^{\infty} (g^{+}(x) - g^{-}(x))p(x) \, dx = \\
= \int_{-\infty}^{\infty} g(x)p(x) \, dx \\
\\
\text{Note that this proof omits the fact that } \int_{-\infty}^{\infty} \abs{g(x)}p(x) \, dx \text{ might not exist} \\
}
$$
## Variance of continuous random variables
$$
\displaylines{
\text{Let } X \text{ be a continuous random variable} \\
Var(X) = E[(X-E[X])^{2}] = E[X^{2}] - E[X]^{2} \\
}
$$
### Example
$$
\displaylines{
\text{Let } X: p(x) = 2x, 0 < x < 1 \\
E[X] = \int_{0}^{1} 2x^{2} \, dx = \frac{2}{3} \\
E[X^{2}] = \int_{0}^{1} 2x^{3} \, dx = \frac{1}{2} \\
\implies Var(X) = E[X^{2}] - E[X]^{2} = \frac{1}{2} - \frac{4}{9} = \frac{1}{18} \\
}
$$
### Linearity of variance for continuous random variables
$$
\displaylines{
Var(aX+b) = a^{2}Var(X) \\
\\
\text{Proof:} \\
E[(aX+b-E[aX+b])^{2}] = E[(aX-aE[X])^{2}] = a^{2}E[(X-E[X])^{2}] = a^{2}Var(X) \\
}
$$
## Uniform distribution
$$
\displaylines{
\text{Standard uniform distribution is defined as follows:} \\
p_{uni}(x) = \begin{cases}
1 & 0 < x < 1 \\
0 & \text{otherwise} \\
\end{cases} \\
\\
\forall [a, b] \subseteq (0, 1): P(X \in [a, b]) = b - a \\
\\
\text{A non-standard uniform distribution can be defined as:} \\
p_{uni}(x, \alpha, \beta) = \begin{cases}
\frac{1}{\beta-\alpha} & \alpha < x < \beta \\
0 & \text{otherwise} \\
\end{cases} \\
\\
\text{In both cases,} \\
F_{uni}(a) = P(X \leq a) = \begin{cases}
0 & a < \alpha \\
\frac{a-\alpha}{\beta-\alpha} & a \in [\alpha, \beta) \\
1 & a \geq \beta \\
\end{cases} \\
\\
E[X] = \int_{-\infty}^{\infty} xp(x) \, dx = \int_{\alpha}^{\beta} \frac{x}{\beta-\alpha} \, dx = \frac{\alpha+\beta}{2} \\
E[X^{2}] = \int_{\alpha}^{\beta} \frac{x^{2}}{\beta-\alpha} \, dx = \frac{\alpha^{2}+\alpha\beta+\beta^{2}}{3} \\
Var(X) = E[X^{2}] - E[X]^{2} = \frac{\alpha^{2}+\alpha\beta+\beta^{2}}{3} - \frac{\alpha^{2}+2\alpha\beta+\beta^{2}}{4} = \frac{(\beta-\alpha)^{2}}{12} \\
}
$$
### Example
$$
\displaylines{
\text{Let there be a stick of length } 1 \\
\text{Let it be broken in a unformly random point } u \\
\text{Let there be some point } p \\
\text{Calculate expected length of stick piece contatining point } p \\
\\
\text{Solution:} \\
\text{Let } l(u) = \text{the length of stick piece containing point } p \\
l(u) = \begin{cases}
1-u & u < p \\
u & u \geq p \\
\end{cases} \\
E[l(u)] = \int_{-\infty}^{\infty} l(u)p(u) \, du = \int_{0}^{p} (1-u) \, du + \int_{p}^{1} u \, du = \\
= \frac{1+p-p^{2}}{2} \\
}
$$
### Example
$$
\displaylines{
\text{Let there be a bus that arrives to the stop at 7:00, 7:15 and 7:30} \\
\text{Passenger arrives at time } t_{p}, \text{ uniformly distributed from 7:00 to 7:30} \\
\text{Find } P(\text{passenger waits} \leq 5 \text{ min}) \\
\\
\text{Solution:} \\
P(\text{passenger waits} \leq 5 \text{ min}) = P(t_{p} \in [\text{7:10, 7:15}]) + P(t_{p} \in [\text{7:25, 7:30}]) = \\
= \frac{10}{30} = \frac{1}{3} \\
}
$$
## Exponential distribution
$$
\displaylines{
\text{Exponential distribution is defined as follows:} \\
X \sim Exp(\lambda) \iff p_{\exp}(x) = \begin{cases}
\lambda e^{-\lambda x} & x \geq 0 \\
0 & \text{otherwise} \\
\end{cases} \\
\int_{0}^{a} \lambda e^{-\lambda x} \, dx = -e^{-\lambda x} \Bigg|^{a}_{0} = 1 - e^{-\lambda a} \\
\implies F_{\exp}(a) = \begin{cases}
1-e^{-\lambda a} & a \geq 0 \\
0 & \text{otherwise} \\
\end{cases} \\
\\
E[X] = \int_{-\infty}^{\infty} xp(x) \, dx = \int_{0}^{\infty} x \lambda e^{-\lambda x} \, dx = -xe^{-\lambda x} \Bigg|^{\infty}_{0} + \int_{0}^{\infty} e^{-\lambda x} \, dx = \int_{0}^{\infty} e^{-\lambda x} \, dx = \frac{1}{\lambda} \\
E[X^{2}] = \int_{-\infty}^{\infty} x^{2}p(x) \, dx = \int_{0}^{\infty} x^{2}\lambda e^{-\lambda x} \, dx = -x^{2}e^{-\lambda x}\Bigg|^{\infty}_{0} + \int_{0}^{\infty} 2xe^{-\lambda x} \, dx = \\
= \left( -x^{2}e^{-\lambda x} - \frac{2xe^{-\lambda x}}{\lambda} \right) \Bigg|^{\infty}_{0} + \int_{0}^{\infty} \frac{2e^{-\lambda x}}{\lambda} \, dx = \frac{2}{\lambda^{2}} \\
Var(X) = E[X^{2}] - E[X]^{2} = \frac{1}{\lambda^{2}} \\
\\
\text{The memoryless property} \\
P(X > s+t \mid X > t) = \frac{P(X > s+t)}{P(X > t)} = \frac{e^{-\lambda(s+t)}}{e^{-\lambda t}} = e^{-\lambda s} = P(X > s) \\
}
$$
