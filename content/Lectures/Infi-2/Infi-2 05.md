---
{"publish":true,"created":"30/03/25, 11:03","modified":"2025-11-21T21:10:14.373+02:00","tags":["Academia","Lecture","Infi-2"],"cssclasses":""}
---

## Linearity of definite integral #lemma 
$$
\displaylines{
\int_{a}^{b} (\alpha f + g)(x)dx = \alpha \int_{a}^{b} f(x)dx + \int_{a}^{b} g(x)dx \\
\\
\text{Proof:} \\
\sum (\alpha f+g)(c_{i})\Delta x_{i} = \alpha \sum f(c_{i})\Delta x_{i} + \sum g(c_{i})\Delta x_{i} \\
}
$$
## Monotonicity of definite integral #lemma 
$$
\displaylines{
f(x) \leq g(x) \implies \int_{a}^{b} f(x)dx \leq \int_{a}^{b} g(x)dx \\
0 \leq f(x) \implies 0 \leq \int_{a}^{b} f(x)dx \\
m \leq f(x) \leq M \implies m(b-a) \leq \int_{a}^{b} f(x)dx \leq M(b-a) \\
}
$$
## Summation of definite integrals #lemma 
$$
\displaylines{
\int_{a}^{b} f(x)dx + \int_{b}^{c}f(x)dx = \int_{a}^{c} f(x)dx \\
}
$$
## Absolute value of definite integral #lemma 
$$
\displaylines{
\left\lvert \int_{a}^{b} f(x)dx \right\rvert \leq \int_{a}^{b} \left\lvert f(x) \right\rvert dx \\
\\
}
$$
$$
\displaylines{
\int_{0}^{2\pi} \sin(x)dx = 0 \\
\int_{0}^{2\pi} \left\lvert \sin(x) \right\rvert dx = 4 \\
}
$$
---
## Continuous function is Riemann-integrable #theorem 
$$
\displaylines{
\text{Let } f \text{ be a continuous function on } [a, b] \\
\text{Then } f \text{ is Riemann-integrable} \\
\\
\text{Proof:} \\
\text{Let } \Set{ a_{n} }, \Set{ b_{n} } \subseteq [a, b] : a_{n} - b_{n} \to 0 \\
f \text{ is continuous} \implies f(a_{n}) - f(b_{n}) \to 0 \\
\\
\text{Let } \Set{ P_{n} }: \lambda(P_{n}) \to 0 \\
\\
\text{Let } \omega_{k} \text{ be a maximal oscilate in } P_{n} \\
\implies \sum \omega_{i}\Delta x_{i} \leq \sum \omega_{k}\Delta x_{i} = \omega_{k} \sum \Delta x_{i} = \omega_{k}(b-a) \\
0 \leq \sum \omega_{i}\Delta x_{i} \leq \omega_{k}(b-a) \\
\omega_{k} = \sup_{[x_{k-1}, x_{k}]} f - \inf_{[x_{k-1}, x_{k}]} f \\
\text{By Weierstrass theorem: } \left\{\begin{array}{}
\sup_{[x_{k-1}, x_{k}]} f = \max_{[x_{k-1}, x_{k}]} f \\
\inf_{[x_{k-1}, x_{k}]} f = \min_{[x_{k-1}, x_{k}]} f \\
\end{array}\right. \\
\implies \exists m_{k}, M_{k} \in [x_{k-1}, x_{k}] : \omega_{k} = \sup_{[x_{k-1}, x_{k}]} f - \inf_{[x_{k-1}, x_{k}]} f = f(M_{k}) - f(m_{k}) \\
\lambda(P_{n}) \to 0 \\
0 \leq x_{k} - x_{k-1} \leq \lambda(P_{n}) \implies x_{k} - x_{k-1} \to 0 \\
0 \leq \left\lvert M_{k} - m_{k} \right\rvert \leq x_{k} - x_{k-1} \implies \left\lvert M_{k} - m_{k} \right\rvert \to 0 \implies M_{k} - m_{k} \to 0 \\
\implies f(M_{k}) - f(m_{k}) \to 0 \implies \omega_{k} \to 0 \\
\implies \omega_{k}(b-a) \to 0 \implies \sum \omega_{i}\Delta x_{i} \to 0 \\
\implies \text{By Lebesgue criterion: } \boxed{ f \text{ is Riemann-integrable} } \\
}
$$

## Bounded function with a finite number of discontinuities is Riemann-integrable #theorem 
$$
\displaylines{
f \text{ is Riemann-integrable } \iff f \text{ is bounded and has a finite number of discontinuities} \\
\\
\text{Explanation (not proof):} \\
\boxed{ \implies } \text{ Let } f \text{ be bounded} \\
\text{Let there be one discontinuity } C \\
\text{Let } \Set{ P_{n} }: \lambda(P_{n}) \to 0 \\
\\
\text{Let } C \in [x_{k-1}, x_{k}] \\
\sum \omega_{i}\Delta x_{i} = \sum_{i < k} \omega_{i}\Delta x_{i} + \omega_{k}\Delta x_{k} + \sum_{i > k} \omega_{i}\Delta x_{i} \\
f \text{ is bounded} \implies \omega_{k} \text{ is finite} \\
\Delta x_{k} \to 0 \implies \omega_{k}\Delta x_{k} \to 0 \\
\sum_{i < k} \omega_{i}\Delta x_{i} \to 0 \text{ (see previous theorem)} \\
\sum_{i > k} \omega_{i}\Delta x_{i} \to 0 \text{ (see previous theorem)} \\
\implies \sum \omega_{i}\Delta x_{i} \to 0 \\
\text{If number of discontinuities is finite, there is a finite number of such } \omega_{k_{j}}\Delta x_{k_{j}} \\
\text{that all tend to } 0 \implies \text{Their sum also tends to } 0 \\
\implies f \text{ is Riemann-integrable} \\
\\
\boxed{ \impliedby } \text{ Let } f \text{ be Riemann-integrable} \\
\text{Let } \Set{ P_{n} }: \lambda(P_{n}) \to 0 \\
\implies \sum \omega_{i}\Delta x_{i} \to 0 \\
\text{Let } D = \Set{ k } \subseteq [1, n] \text{ be a set of intervals with discontinuities} \\
\sum \omega_{i}\Delta x_{i} = \sum_{i \not\in D } \omega_{i}\Delta x_{i} + \sum_{k \in D} \omega_{k}\Delta x_{k} \\
\sum_{i \not\in D } \omega_{i}\Delta x_{i} \to 0 \implies \sum_{k \in D} \omega_{k}\Delta x_{k} \to 0 \\
\text{And this is only possible when number of discontinuitites is finite} \\
}
$$
