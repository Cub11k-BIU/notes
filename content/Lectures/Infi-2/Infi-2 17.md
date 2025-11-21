---
{"publish":true,"created":"19/05/25, 12:05","modified":"2025-11-21T21:10:14.416+02:00","tags":["Academia","Lecture","Infi-2"],"cssclasses":""}
---

## Uniform convergence of power series #lemma 
$$
\displaylines{
\sum_{n=0}^{\infty} a_{n}(x-a)^{n} \text{ converges at least pointwise on } (a-R, a+R) \\
\text{By Weierstrass M-test, absolute convergence implies uniform convergence} \\
\implies \forall [b, c] \subset (a-R, a+R): \sum_{n=0}^{\infty} a_{n}(x-a)^{n} \text{ converges uniformly on } [b, c] \\
}
$$
## Differentiation and integration of power series #lemma 
$$
\displaylines{
\text{Differentiation and integration of power series does not affect the convergence radius} \\
}
$$
$$
\displaylines{
\sum_{n=0}^{\infty} \frac{n}{2^{n}} = \sum_{n=0}^{\infty} n\left( \frac{1}{2} \right)^{n} \\
\sum_{n=0}^{\infty} x^{n} = \frac{1}{1-x} \\
\implies \sum_{n=0}^{\infty} nx^{n-1} = \frac{1}{(1-x)^{2}} \\
\implies \sum_{n=0}^{\infty} nx^{n} = \frac{x}{(1-x)^{2}} \\
\implies \sum_{n=0}^{\infty} n\left( \frac{1}{2} \right)^{n} = \frac{\frac{1}{2}}{\left( 1-\left( \frac{1}{2} \right) \right)^{2}} = 2 \\
}
$$
---
$$
\displaylines{
\sum_{n=0}^{\infty} x^{n} = \frac{1}{1-x} \quad x \in (-1, 1) \\
\implies \sum_{n=0}^{\infty} \frac{x^{n+1}}{n+1} = -\ln \left\lvert 1-x \right\rvert \\
\text{Series converges for } x = -1 \\
\text{But does it converge to } -\ln \left\lvert 1 - x \right\rvert ? \\
\text{Turns out yes!} \\
S(-1) = \lim_{ x \to -1 } S(x) = \lim_{ x \to -1 } -\ln \left\lvert 1-x \right\rvert = -\ln(2) \\
}
$$
## Uniform convergence on convergence interval edges #lemma 
$$
\displaylines{
\text{Power series converges uniformly on edges of convergence interval too!} \\
}
$$
## Taylor series
$$
\displaylines{
\text{Equality "series = function" allows us to calculate sums} \\
}
$$
#### For example
$$
\displaylines{
e^{x} = \sum_{n=0}^{\infty} \frac{x^{n}}{n!} \quad x \in \mathbb{R} \\
e = \sum_{n=0}^{\infty} \frac{1}{n!} \\
}
$$
---
