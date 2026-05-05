---
{"publish":true,"created":"28/04/25, 12:04","modified":"2026-03-24T15:00:40.226+02:00","tags":["Academia","Lecture","Infi-2"],"cssclasses":""}
---

## Convergence of integral and series (Integral convergence test) #theorem 
$$
\displaylines{
\text{Let } f \text{ be a continuous, monotonically decreasing and positive function on } [a, \infty) \\
\text{Then } \int_{a}^{\infty} f(x) \, dx \text{ converges} \iff \sum_{n=a}^{\infty} f(n) \text{ converges} \\
\\
\text{Note:} \\
\text{Integral and series might not converge to the same limit(!)} \\
\sum_{n=1}^{\infty} \frac{1}{n^{2}} = \frac{\pi^{2}}{6} \text{ but } \int_{1}^{\infty} \frac{1}{x^{2}} \, dx = 1 \\
\sum_{n=0}^{\infty} e^{-n} = \frac{1}{1-\frac{1}{e}} \text{ but } \int_{0}^{\infty} e^{-x} \, dx = 1 \\
}
$$
---
$$
\displaylines{
\int_{7}^{\infty} \left( 1 - \frac{1}{x} \right)^{x^{2}} \, dx \iff \sum_{n=7}^{\infty} \left( 1-\frac{1}{n} \right)^{n^{2}} \iff \lim_{ n \to \infty } \sqrt[n]{ \left( 1-\frac{1}{n} \right)^{n^{2}} } < 1 \\
\iff \lim_{ n \to \infty } \left( 1-\frac{1}{n} \right)^{n} < 1 \iff e^{-1} < 1 \\
}
$$
---
$$
\displaylines{
\int_{a}^{\infty} f(x) \, dx \text{ converges} \overset{ ? }{ \implies } \lim_{ x \to \infty } f(x) = 0 \\
\text{No} \\
\int_{a}^{\infty} \sin(x^{6}) \, dx \text{ converges, but } \lim_{ x \to \infty } \sin(x^{6}) \neq 0 \\
}
$$
---
