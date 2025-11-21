---
{"publish":true,"created":"05/05/25, 12:05","modified":"2025-11-21T21:10:14.402+02:00","tags":["Academia","Lecture","Infi-2"],"cssclasses":""}
---

## Uniform convergence #definition 
$$
\displaylines{
\Set{ f_{n}(x) } \text{ is called point-convergent on set} A \text{ if} \\
\forall \varepsilon > 0: \exists N_{\varepsilon}: \forall n > N_{\varepsilon}: \forall x_{0} \in A: \left\lvert f_{n}(x_{0}) - f(x_{0}) \right\rvert < \varepsilon \\
f(x) \text{ is then called a uniform limit of } f_{n} \\
f_{n} \rightrightarrows f \\
\\
\text{Note: } N_{\varepsilon} \text{ only depends on } \varepsilon \text{ and works for all } x \in A \\
\text{Hence uniform convergence which is much stronger than pointwise convergence} \\
}
$$
## Equivalent definitions of uniform convergence #theorem 
$$
\displaylines{
\text{The following are equivalent:} \\
1. \quad f_{n} \rightrightarrows f \text{ on } A \\
2. \quad \text{Equivalent definition via sequences} \\
3. \quad \text{Equivalent definition by Cauchy} \\
4. \quad d_{n} = \sup_{x \in A} \left\lvert f_{n}(x) - f(x) \right\rvert, d_{n} \to 0 \\
}
$$
---
$$
\displaylines{
f_{n}(x) = x^{n} - x^{2n} \text{ on } [0, 1] \\
f_{n}(x) \to 0 \\
\sup_{x \in [0, 1]} \left\lvert f_{n}(x) - f(x) \right\rvert = \sup_{x \in [0, 1]} \left\lvert x^{n} - x^{2n} \right\rvert = \sup_{x \in [0, 1]} (x^{n} - x^{2n}) = \max_{x \in [0, 1]} (x^{n} - x^{2n}) \\
0^{n} - 0^{2n} = 0 \\
1^{n} - 1^{2n} = 0 \\
(x^{n} - x^{2n})' = nx^{n-1} - 2nx^{2n-1} = nx^{n-1}(1 - 2x^{n}) \\
(x^{n} - x^{2n})' = 0 \iff \left\{\begin{array}{}
x = 0 \\
x = \sqrt[n]{ \frac{1}{2} } \\
\end{array}\right. \implies d_{n} = \left( \frac{1}{2} - \frac{1}{4} \right) = \frac{1}{4} \neq 0 \implies f_{n} \not\rightrightarrows f \\
}
$$
## Properties of uniform limit #theorem 
$$
\displaylines{
\text{Let } f_{n} \rightrightarrows f \\
1. \quad \text{Continuity} \\
\text{Let } \forall n : f_{n} \text{ is continuous} \\
\text{Then } f \text{ is continuous} \\
2. \quad \text{Integral} \\
\text{Let } f_{n} \text{ be integrable on } [a, b] \\
\text{Then } f \text{ is integrable on } [a, b] \text{ and } \forall x \in [a, b]: \int_{a}^{x} f_{n}(t) \, dt \to \int_{a}^{x} f(t) \, dt \\
3. \quad \text{Differentiability} \\
\text{Let } f_{n}, f \text{ be differentiable} \\
\text{Then not necessarily }f_{n}' \to f' \\
\text{Let } \exists x_{0} \in A: f_{n}(x_{0}) \text{ converges} \\
\text{Let } \exists g: f_{n}' \rightrightarrows  g \\
\text{Then } \exists f: f_{n} \rightrightarrows f \text{ and } f' = g \\
}
$$
$$
\displaylines{
\text{Proof for 1.} \\
\text{Let } f_{n} \rightrightarrows f \\
\text{Let } f_{n} \text{ be continuous} \\
\text{Let } x_{0} \in A \\
\text{Let } x_{n}: x_{n} \to x_{0} \\
\text{Let } \varepsilon_{1}, \varepsilon_{2}, \varepsilon_{3} > 0: \varepsilon_{1} + \varepsilon_{2} + \varepsilon_{3} = \varepsilon > 0 \\
f_{n} \rightrightarrows f \implies \exists N_{1} : \forall n > N_{1}: \forall x \in A: \left\lvert f(x_{n}) - f_{n}(x_{n}) \right\rvert < \varepsilon_{1} \\
f_{n} \text{ is continuous} \implies \exists N_{2} : \forall n > N_{2}: \forall x \in A: \left\lvert f_{n}(x_{n}) - f_{n}(x_{0}) \right\rvert < \varepsilon_{2} \\
f_{n} \to f \implies \exists N_{3} : \forall n > N_{3}: \forall x \in A: \left\lvert f_{n}(x_{0}) - f(x_{0}) \right\rvert < \varepsilon_{3} \\
\\
\implies \left\lvert f(x_{n}) - f(x_{0}) \right\rvert = \left\lvert f(x_{n}) - f_{n}(x_{n}) + f_{n}(x_{n}) - f_{n}(x_{0}) + f_{n}(x_{0}) - f(x_{0}) \right\rvert \leq \\
\leq \left\lvert f(x_{n}) - f_{n}(x_{n}) \right\rvert + \left\lvert f_{n}(x_{n}) - f_{n}(x_{0}) \right\rvert + \left\lvert f_{n}(x_{0}) - f(x_{0}) \right\rvert < \varepsilon \\
\implies \boxed{ f \text{ is continuous} } \\
}
$$
