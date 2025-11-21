---
{"publish":true,"created":"27/04/25, 00:04","modified":"2025-11-21T21:10:14.388+02:00","tags":["Academia","Lecture","Infi-2"],"cssclasses":""}
---

# Improper integral of the second type
$$
\displaylines{
\text{What if interval is fine, but the function is not bounded on it?} \\
\text{For example, } \int_{0}^{1} \frac{1}{x} \, dx \\
}
$$
## Integrability on non-closed interval #definition 
$$
\displaylines{
\text{Function } f \text{ is called Riemann-integrable on } (a, b] \\
\text{If } \forall c \in (a, b]: f \text{ is Riemann-integrable on } [c, b] \\
\int_{a}^{b} f(x) \, dx = \lim_{ c \to a^{+} } \int_{c}^{b} f(x) \, dx \\
\\
\text{Function } f \text{ is called Riemann-integrable on } [a, b) \\
\text{If } \forall c \in [a, b): f \text{ is Riemann-integrable on } [a, c] \\
\int_{a}^{b} f(x) \, dx = \lim_{ c \to b^{-} } \int_{a}^{c} f(x) \, dx \\
}
$$
---
$$
\displaylines{
\int_{0}^{1/2} \frac{1}{x\ln x} \, dx = \lim_{ c \to 0^{+} } \int_{c}^{1/2} \frac{1}{x\ln x} \, dx = \\
= \lim_{ c \to 0^{+} } \ln \left\lvert \ln x \right\rvert \Bigg|^{1/2}_{c} = \ln \left\lvert \ln\left( \frac{1}{2} \right) \right\rvert - \ln \left\lvert \ln c \right\rvert = -\infty \\
\implies \text{Integral diverges} \\
}
$$
---
$$
\displaylines{
\text{If integral has multiple "problems", or they are in the middle of the interval,} \\
\text{integral is to be calculated as a sum of integrals} \\
\text{Integral then converges iff each additive converges} \\
}
$$
---
$$
\displaylines{
\text{Complex integrals might need a lot of sub-intervals:} \\
\int_{-\infty}^{\infty} \frac{1}{(x-6)(x-23)} \, dx = \\
= \int_{-\infty}^{0} + \int_{0}^{6} + \int_{6}^{8} + \int_{8}^{23} + \int_{23}^{24} + \int_{24}^{\infty} \\
}
$$
## Comparison tests
### p-Integral test for improper integrals of the first type #lemma 
$$
\displaylines{
\int_{a}^{b} \frac{1}{(x-a)^{p}} \, dx \text{ converges} \iff p < 1 \\
}
$$
### Comparison test for improper integrals of the second type #lemma 
$$
\displaylines{
\text{Let } f, g \text{ be Riemann-integrable on } (a, b] \\
\text{Let } 0 \leq f \leq g \\
\text{Then } \int_{a}^{b} g(x) \, dx \text{ converges} \implies \int_{a}^{b} f(x) \, dx \text{ converges} \\
}
$$
### Limit comparison text for improper integrals of the second type #lemma 
$$
\displaylines{
\text{Let } f, g \text{ be Riemann-integrable on } (a, b] \\
\text{Let } 0 \leq f, g \\
L = \lim_{ x \to a^{+} } \frac{f(x)}{g(x)} \\
\begin{array}{}
L = \infty \implies & \left[ \int_{a}^{b} f(x) \, dx \text{ converges} \implies \int_{a}^{b} g(x) \, dx \text{ converges} \right] \\
L = 0 \implies & \left[ \int_{a}^{b} f(x) \, dx \text{ converges} \impliedby \int_{a}^{b} g(x) \, dx \text{ converges} \right] \\
0 < L < \infty \implies & \left[ \int_{a}^{b} f(x) \, dx \text{ converges} \iff \int_{a}^{b} g(x) \, dx \text{ converges} \right]
\end{array}
}
$$

