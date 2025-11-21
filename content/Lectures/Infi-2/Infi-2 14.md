---
{"publish":true,"created":"11/05/25, 11:05","modified":"2025-11-21T21:10:14.405+02:00","tags":["Academia","Lecture","Infi-2"],"cssclasses":""}
---

## Equivalent definitions of uniform convergence (oscillation) #theorem 
$$
\displaylines{
f_{n} \rightrightarrows f \iff d_{n} \to 0 \\
\\
\text{Proof:} \\
\boxed{ \implies } \text{ Let } f_{n} \rightrightarrows f \\
\text{Let } \varepsilon > 0 \\
\forall x \in A: \exists N_{\varepsilon}: \forall n > N_{\varepsilon}: \left\lvert f_{n}(x) - f(x) \right\rvert < \frac{\varepsilon}{2} \\
\implies \exists N_{\varepsilon}: \forall n > N_{\varepsilon}: \sup_{x \in A} \left\lvert f_{n}(x) - f(x) \right\rvert \leq \frac{\varepsilon}{2} \\
\implies \exists N_{\varepsilon}: \forall n > N_{\varepsilon}: \left\lvert d_{n} - 0 \right\rvert \leq \frac{\varepsilon}{2} < \varepsilon \\
\implies d_{n} \to 0 \\
\\
\boxed{ \impliedby } \text{ Let } d_{n} \to 0 \\
\text{Let } \varepsilon > 0 \\
\exists N_{\varepsilon}: \forall n > N_{\varepsilon}: \left\lvert d_{n} - 0 \right\rvert < \varepsilon \\
\implies \exists N_{\varepsilon}: \forall n > N_{\varepsilon}: \sup_{x \in A} \left\lvert f_{n}(x) - f(x) \right\rvert < \varepsilon \\
\implies \forall x \in A: \exists N_{\varepsilon}: \forall n > N_{\varepsilon}: \left\lvert f_{n}(x) - f(x) \right\rvert < \varepsilon \\
\implies \boxed{ f_{n} \rightrightarrows f } \\
}
$$
## Properties of uniform limit (integral) #theorem 
$$
\displaylines{
\text{Let } f_{n} \text{ be integrable on } [a, b] \\
\text{Then } f \text{ is integrable on } [a, b] \text{ and } \forall x \in [a, b]: \int_{a}^{x} f_{n}(t) \, dt \rightrightarrows \int_{a}^{x} f(t) \, dt \\
\\
\text{Proof:} \\
\text{Let } x \in [a, b] \\
\int_{a}^{x} f_{n}(t) \, dt \to \int_{a}^{x} f(t) \, dt \iff \int_{a}^{x} f_{n}(t) \, dt - \int_{a}^{x} f(t) \, dt \to 0 \\
\iff \int_{a}^{x} f_{n}(t) - f(t) \, dt \to 0 \\
\iff \left\lvert \int_{a}^{x} f_{n}(t) - f(t) \, dt \right\rvert \to 0 \\
\overset{ \left\lvert \int f \right\rvert \leq \int \left\lvert f \right\rvert  }{ \iff } \int_{a}^{x} \left\lvert f_{n}(t) - f(t) \right\rvert  \, dt \to 0 \\
\overset{ \left\lvert f_{n}(t) - f(t) \right\rvert \leq d_{n} }{ \iff } \int_{a}^{x} d_{n} \, dt \to 0 = \underbrace{ d_{n} }_{ \to 0 } \cdot ( x - a) \to 0 \\
\left\lvert \int_{a}^{x} f_{n}(t) - f(t) \, dt \right\rvert \leq d_{n}(x-a) \\
\implies \sup_{x \in [a, b]} \left\lvert \int_{a}^{x} f_{n}(t) - f(t) \, dt \right\rvert \leq d_{n}(x-a) \\
\implies \sup_{x \in [a, b]} \left\lvert \int_{a}^{x} f_{n}(t) - f(t) \, dt \right\rvert \to 0 \\
\implies \boxed{ \int_{a}^{x} f_{n}(t) \, dt \rightrightarrows \int_{a}^{x} f(t) \, dt } \\
}
$$
## Function series #definition 
$$
\displaylines{
\sum_{n=1}^{\infty} f_{n}(x) \\
\\
\text{For example: geometric series } \sum_{n=0}^{\infty} x^{n} = \frac{1}{1 - x}, x \in (-1, 1) \\
}
$$
$$
\displaylines{
S_{N}(x) = \sum_{n=1}^{N} f_{n}(x) \\
\lim_{ N \to \infty } S_{N}(x) = S(x) \iff \sum_{n=1}^{\infty} f_{n}(x) = S(x) \\
}
$$
$$
\displaylines{
f_{n} \text{ is continuous/differentiable/integrable} \implies S_{N} \text{ is too} \\
\text{And even more: } \int S_{N} = \int \sum_{n=0}^{N} f_{n} = \sum_{n=0}^{N} \int f_{n} = \left( \sum_{n=0}^{N} f_{n} \right)' = \sum_{n=0}^{N} f_{n}' \\
}
$$
## Properties of series uniform convergence #theorem 
$$
\displaylines{
1. \quad \text{Let } f_{n}(x) \text{ be continuous} \\
\text{Then } S(x) \text{ is also continuous} \\
2. \quad \text{Let } f_{n}(x) \text{ be integrable} \\
\text{Then } S(x) \text{ is also integrable and} \\
\int S_{N}(x) \to \int S(x) \\
\int \sum_{n=0}^{N} f_{n}(x) \to \int \sum_{n=0}^{\infty} f_{n}(x) \\
\int^{x}_{a} \sum_{n=0}^{\infty} f_{n}(t) \, dt = \sum_{n=0}^{\infty} \int_{a}^{x} f_{n}(t) \, dt \\
3. \quad\text{ Let } S_{N}' \rightrightarrows g(x) \\
\text{Let } \exists x_{0} \in A: \sum_{n=0}^{\infty} f_{n}(x) \to M \\
\text{Then } S_{N}'(x) \rightrightarrows S'(x) \\
\text{Or } \sum_{n=0}^{\infty} f_{n}'(x) \rightrightarrows \left( \sum_{n=0}^{\infty} f_{n}(x) \right)' \\
}
$$
