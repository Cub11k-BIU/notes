---
{"publish":true,"created":"12/05/25, 12:05","modified":"2025-11-21T21:10:14.409+02:00","tags":["Academia","Lecture","Infi-2"],"cssclasses":""}
---

## Uniform convergence of function series
$$
\displaylines{
S_{N} \rightrightarrows S \\
\iff d_{N} = \sup_{x \in A} \left\lvert S_{N}(x) - S(x) \right\rvert = \sup_{x \in A} \left\lvert \sum_{n=1}^{N} f_{n}(x) - \sum_{n=1}^{\infty} f_{n}(x) \right\rvert = \\
= \sup_{x \in A} \left\lvert \sum_{n=N+1}^{\infty} f_{n}(x) \right\rvert = \sup_{x \in A} \left\lvert r_{N} \right\rvert \\
}
$$
$$
\displaylines{
\sum_{n=0}^{\infty} x^{n} = \frac{1}{1 - x}, \quad x \in (-1, 1) \\
d_{N} = \sup_{x \in (-1, 1)} \left\lvert \sum_{n=N+1}^{\infty} x^{n} \right\rvert \\
\sum_{n=N+1}^{\infty} x^{n} = x^{N+1} + x^{N+2} + \dots = x^{N+1} \cdot \sum_{n=0}^{\infty} x^{n} = \frac{x^{N+1}}{1-x} \\
\implies d_{N} = \sup_{x \in (-1, 1)} \left\lvert \frac{x^{N+1}}{1-x} \right\rvert \\
x \to 1 \implies \frac{x^{N+1}}{1-x} \to \infty \implies d_{N} \not\to 0 \implies \sum_{n=0}^{\infty} x^{n} \not\rightrightarrows \frac{1}{1-x} \\
}
$$
$$
\displaylines{
x \in \left[ 0, \frac{1}{23} \right] \implies d_{N} = \sup_{x \in \left[ 0, \frac{1}{23} \right]} \left\lvert \frac{x^{N+1}}{1-x} \right\rvert = \frac{\left( \frac{1}{23} \right)^{N+1}}{1 - \frac{1}{23}} \to 0 \\
}
$$
## Weierstrass M-test #theorem 
$$
\displaylines{
\text{Let } \sum_{n=1}^{\infty} f_{n}(x) \\
\text{Let } \sum_{n=1}^{\infty} a_{n} \to M \\
\text{Let } \forall n \in \mathbb{N}, \forall x \in A: \left\lvert f_{n} \right\rvert \leq a_{n} \\
\text{Then } \sum_{n=1}^{\infty} f_{n}(x) \rightrightarrows S(x) \\
\text{And } \sum_{n=1}^{\infty} \left\lvert f_{n}(x) \right\rvert  \rightrightarrows S(x) \\
\\
\text{Proof:} \\
\sum_{n=1}^{\infty} a_{n} \text{ converges} \implies \forall \varepsilon > 0: \exists N_{\varepsilon}: \forall M > N > N_{\varepsilon}: S_{M} - S_{N} < \frac{\varepsilon}{2} \\
\text{Let } \varepsilon > 0 \\
\forall x \in A: \forall m > n > N_{\varepsilon}: \left\lvert S_{M}(x) - S_{N}(x) \right\rvert = \left\lvert \sum_{n=N+1}^{M} f_{n}(x) \right\rvert \leq \sum_{n=N+1}^{M} \left\lvert f_{n}(x) \right\rvert \leq \\
\leq \sum_{n=N+1}^{M} a_{n} = S_{M} - S_{N} < \frac{\varepsilon}{2} \\
\text{Let } N > N_{\varepsilon} \\
\left\lvert S(x) - S_{N}(x) \right\rvert = \left\lvert \lim_{ M \to \infty } S_{M}(x) - S_{N}(x) \right\rvert = \lim_{ M \to \infty } \left\lvert S_{M}(x) - S_{N}(x) \right\rvert \leq \frac{\varepsilon}{2} < \varepsilon \\
\implies S_{N}(x) \rightrightarrows S(x) \implies \boxed{ \sum_{n=1}^{\infty} f_{n}(x) \rightrightarrows S(x) } \\
\text{Similar proof for } \sum_{n=1}^{\infty} \left\lvert f_{n}(x) \right\rvert \rightrightarrows S(x) \\
}
$$
$$
\displaylines{
\sum_{n=0}^{\infty} x^{n} = \frac{1}{1-x} \\
\implies \sum_{n=0}^{\infty} nx^{n-1} = \frac{1}{(1-x)^{2}} \\
\implies \sum_{n=0}^{\infty} nx^{n} = \frac{x}{(1-x)^{2}} \\
x = \frac{1}{2} \implies \sum_{n=0}^{\infty} \frac{n}{2^{n}} = \frac{\frac{1}{2}}{\left( \frac{1}{2} \right)^{2}} = 2 \\
\text{Why can we do this?} \\
\\
\text{If } \\
\sum_{n=0}^{\infty} (x^{n})' \rightrightarrows g(x), x \in A \\
\exists x_{0} \in A: \sum_{n=0}^{\infty} x_{0}^{n} \to M \\
\text{Then } \sum_{n=0}^{\infty} (x^{n})' \rightrightarrows \left( \frac{1}{1-x} \right)' \\
\text{Let } A = \left[ 0, \frac{1}{2} \right] \\
\boxed{ \forall x_{0} \in A: \sum_{n=0}^{\infty} x_{0}^{n} \to M_{x_{0}} } \\
\forall n \in \mathbb{N}, \forall x \in A: \left\lvert nx^{n-1} \right\rvert = nx^{n-1} \leq n \cdot \left( \frac{1}{2} \right)^{n-1} = \frac{n}{2^{n-1}} \\
\lim_{ n \to \infty } \sqrt[n]{ \frac{n}{2^{n-1}} } = \lim_{ n \to \infty } \frac{\sqrt[n]{ 2 } \cdot \sqrt[n]{ n }}{\sqrt[n]{ 2^{n} }} = \frac{1 \cdot 1}{2} = \frac{1}{2} \\
\implies \sum_{n=0}^{\infty} \frac{n}{2^{n-1}} \to M \implies \text{By the Weierstrass M-test } \boxed{ \sum_{n=0}^{\infty} nx^{n-1} \rightrightarrows g(x) } \\
\implies \sum_{n=0}^{\infty} (x^{n})' \rightrightarrows \left( \frac{1}{1-x} \right)' \\
}
$$
