---
{"publish":true,"created":"12/05/25, 14:05","modified":"2025-11-21T21:10:24.907+02:00","tags":["Academia","Practice","Infi-2"],"cssclasses":""}
---

$$
\displaylines{
\sum_{n=0}^{\infty} \frac{2^{n}x^{n}}{n!} \\
\\
\lim_{ n \to \infty } \frac{\frac{2^{n+1}x^{n+1}}{(n+1)!}}{\frac{2^{n}x^{n}}{n!}} = \lim_{ n \to \infty } \frac{2x}{n+1} = 0 \\
\forall x \in \mathbb{R}: \sum_{n=0}^{\infty} \frac{2^{n}x^{n}}{n!} \to S(x) \\
}
$$
---
$$
\displaylines{
\sum_{n=1}^{\infty} \frac{\sin(n!x)}{n^{3}+n+1}, x \in [-2\pi, 2] \\
\left\lvert \frac{\sin(n!x)}{n^{3}+n+1} \right\rvert \leq \frac{1}{n^{3}+n+1} \leq \frac{1}{n^{3}} \\
\sum_{n=1}^{\infty} \frac{1}{n} \to M \implies \sum_{n=1}^{\infty} \frac{\sin(n!x)}{n^{3}+n+1} \rightrightarrows S(x) \\
}
$$
---
$$
\displaylines{
\sum_{n=2}^{\infty} \frac{x^{4}+x^{2}}{n\ln ^{2}(n)}, x \in [-7, 2] \\
\left\lvert \frac{x^{4} + x^{2}}{n\ln^{2}(n)} \right\rvert \leq \frac{7^{4}+7^{2}}{n\ln^{2}(n)} \\
\sum_{n=2}^{\infty} \frac{1}{n\ln^{2}(n)} \to M \text{ by the Cauchy's condensation test} \\
\implies \sum_{n=2}^{\infty} \frac{x^{4}+x^{2}}{n\ln^{2}(n)} \rightrightarrows S(x) \\
}
$$
---
$$
\displaylines{
\sum_{n=0}^{\infty} \frac{\sin(x)}{(1+x)^{n}} \\
\sum_{n=0}^{\infty} \frac{\sin(x)}{(1+x)^{n}} = \sin(x) \cdot \sum_{n=0}^{\infty} t^{n} = \frac{1}{1 - \frac{1}{1+x}} = \sin(x) \cdot \frac{1 + x}{x} \\
\text{Let } f(x) = \left\{\begin{array}{}
\sin(x) \cdot \frac{1+x}{x} & x \neq 0 \\
0 & x = 0 \\
\end{array}\right. \\
f \text{ is not continuous} \implies x \in [0, \pi) \implies \sum_{n=0}^{\infty} \frac{\sin(x)}{(1+x)^{n}} \not\rightrightarrows f(x) \\
\text{Let } d_{N} = \sup_{x \in (0, \pi)} \left\lvert S_{N}(x) - f(x) \right\rvert \\
d_{N}' = \sup_{x \in [0, \pi)} \left\lvert S_{N}(x) - f(x) \right\rvert = \max\{d_{N}, \left\lvert S_{N}(0) - f(0) \right\rvert \} = d_{N} \\
d_{n}' \not\to 0 \implies d_{n} \not\to 0 \implies x \in (0, \pi) \implies \sum_{n=0}^{\infty} \frac{\sin(x)}{(1+x)^{n}} \not\rightrightarrows f(x) \\
}
$$
---
$$
\displaylines{
\sum_{n=1}^{\infty} \frac{1}{n \cdot 3^{n}} \\
\text{Let } x = \frac{1}{3} \\
\sum_{n=1}^{\infty} \frac{1}{n} \cdot x^{n} = \sum_{n=1}^{\infty} \int_{0}^{x} t^{n-1} \, dt \underset{ \sum_{n=1}^{\infty} t^{n-1} \rightrightarrows S(x) }{ \overset{ t \in \left[ -\frac{1}{2}, \frac{1}{2} \right] }{ = } } \int_{0}^{x} \sum_{n=1}^{\infty} t^{n-1} \, dt = \int_{0}^{x} \frac{1}{1-t} \, dt = -\ln \left\lvert 1-x \right\rvert \\
\implies \sum_{n=1}^{\infty} \frac{1}{n \cdot 3^{n}} = \ln\left( \frac{3}{2} \right) \\
}
$$
---
$$
\displaylines{
\sum_{n=1}^{\infty} nx^{n} \\
\sum_{n=1}^{\infty} nx^{n} = x \cdot \sum_{n=1}^{\infty} nx^{n-1} = \frac{x}{(1-x)^{2}} \\
}
$$
---
