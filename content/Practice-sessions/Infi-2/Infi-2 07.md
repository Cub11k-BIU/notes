---
{"publish":true,"created":"05/05/25, 14:05","modified":"2025-11-21T21:10:24.896+02:00","tags":["Academia","Practice","Infi-2"],"cssclasses":""}
---

$$
\displaylines{
a_{n}: \mathbb{N} \to \mathbb{R} \\
f_{n}: \mathbb{N} \to \mathbb{R}^{D} \\
}
$$
## Pointwise convergence
$$
\displaylines{
f_{n} \to f \\
\forall x \in D: \forall \varepsilon > 0: \exists N_{x,\varepsilon}: \forall n \geq N_{x, \varepsilon}: \left\lvert f_{n}(x) - f(x) \right\rvert < \varepsilon \\
}
$$
---
$$
\displaylines{
(0, \infty) \\
f_{n}(x) = n(\sqrt[n]{ x } - 1) \\
\lim_{ n \to \infty } f_{n}(x) = \lim_{ n \to \infty } \frac{\sqrt[n]{ x } - 1}{\frac{1}{n}} \overset{ t = \frac{1}{n} }{ = } \lim_{ t \to 0 } \frac{x^{t} - 1}{t} = \ln(x) \\
}
$$
---
$$
\displaylines{
f_{n}(x) = \frac{n^{2}}{1 + n^{2}x^{2}} \\
\lim_{ n \to \infty } f_{n}(x) = \lim_{ n \to \infty } \frac{1}{\frac{1}{n^{2}} +  x^{2}}- = \frac{1}{x^{2}} \\
}
$$
---
$$
\displaylines{
\text{Let } \Set{ f_{n}(x) } \to f(x) \text{ on } [a, b] \\
\text{Let } \forall n, x \in [a, b]: f_{n}(x) \text{ is bounded} \\
\text{Then not necessarily } f \text{ is bounded} \\
}
$$
---
## Uniform convergence
$$
\displaylines{
f_{n} \rightrightarrows f \\
\forall \varepsilon > 0: \exists N_{\varepsilon}: \forall n \geq N_{\varepsilon}: \forall x \in D: \left\lvert f_{n}(x) - f(x) \right\rvert < \varepsilon \\
\\
\text{Let } d_{n} = \sup_{x \in D} \left\lvert f_{n}(x) - f(x) \right\rvert \\
f_{n} \rightrightarrows f \iff d_{n} \to 0 \\
}
$$
---
$$
\displaylines{
f_{n} \rightrightarrows f \text{ and } f_{n} \text{ is continuous} \implies f \text{ is continuous} \\
}
$$
---
$$
\displaylines{
\text{Let } f_{n} \rightrightarrows f \text{ and } f_{n}(x) \text{ be bounded} \\
\implies f \text{ is bounded} \\
\text{And exists } M \text{ that bounds } f_{n} \text{ for every } n \\
\forall n \geq N: \left\lvert f_{n} \right\rvert \leq \left\lvert f_{n} - f \right\rvert + \left\lvert f - f_{N} \right\rvert + \left\lvert f_{N} \right\rvert < 2 + M_{N} \\
\implies \forall n \in \mathbb{N}: \left\lvert f_{n} \right\rvert \leq \max\{M_{1}, M_{2}, \dots, M_{N-1}, 2 + M_{N}\} \\
}
$$
---
$$
\displaylines{
[0, 1] \\
f_{n}(x) = \frac{x}{1 + n^{2}x^{2}} \\
f_{n} \to 0 \\
d_{n} = \sup_{x \in [0, 1]} \frac{x}{1 + n^{2}x^{2}} = \max_{x \in [0, 1]} \frac{x}{1 + n^{2}x^{2}} \\
x = 0 \implies d_{n} = 0 \\
x = 1 \implies d_{n} = \frac{1}{1+n^{2}} \\
0 = \left( \frac{x}{1+n^{2}x^{2}} \right)' = \frac{(1+n^{2}x^{2}) - 2n^{2}x^{2}}{(1 + n^{2}x^{2})^{2}} =\frac{1 - n^{2}x^{2}}{(1 + n^{2}x^{2})^{2}} \\
\implies x^{2} = \frac{1}{n^{2}} \implies x = \frac{1}{n} \\
f_{n}\left( \frac{1}{n} \right) = \frac{1}{2n} \\
\implies d_{n} = \frac{1}{2n} \to 0 \\
\implies \boxed{ f_{n} \rightrightarrows 0 } \\
}
$$
---
