---
{"publish":true,"created":"19/05/25, 14:05","modified":"2025-11-21T21:10:24.918+02:00","tags":["Academia","Practice","Infi-2"],"cssclasses":""}
---

$$
\displaylines{
\sum_{n=1}^{\infty} \frac{n^{2}2^{n}}{n^{n}+2}(x-5)^{n} \\
\lim_{ n \to \infty } \sqrt[n]{ \frac{n^{2}2^{n}}{n^{4}+2} } = \lim_{ n \to \infty } \frac{\sqrt[n]{ n }^{2} \cdot 2}{\sqrt[n]{ n }^{4}\sqrt[n]{ 1 + \frac{2}{n^{4}} }} = 2 \implies R = \frac{1}{2} \\
x = 5.5 \implies \sum_{n=1}^{\infty} \frac{n^{2}}{n^{4}+2} \text{ converges} \\
x = 4.5 \implies \sum_{n=1}^{\infty} (-1)^{n}\frac{n^{2}}{n^{4}+2} \text{ converges} \\
\\
\sum_{n=1}^{\infty} a_{n}(\sqrt{ x } - 5)^{n} \\
t = \sqrt{ x } \\
t \in [4.5, 5.5] \implies x \in [4.5^{2}, 5.5^{2}] \\
}
$$
---
$$
\displaylines{
\text{Let } \sum_{n=0}^{\infty} a_{n} \text{ diverges} \\
a_{n} \to 0 \text{ monotonic} \\
x = 1 \implies \sum_{n=0}^{\infty} a_{n}x^{n} = \sum_{n=0}^{\infty} a_{n} \text{ diverges} \implies R \leq 1 \\
x = -1 \implies \sum_{n=0}^{\infty} a_{n}x^{n} = \sum_{n=0}^{\infty} (-1)^{n}a_{n} \text{ converges by Leibniz} \implies R \geq 1 \\
\implies R = 1 \implies x \in [-1, 1) \\
}
$$
---
## Taylor series
$$
\displaylines{
\text{Let } f \text{ be infinitely differentiable} \\
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^{n} \\
\\
\text{For example:} \\
e^{x} = \sum_{n=0}^{\infty} \frac{x^{n}}{n!} \\
}
$$
---
$$
\displaylines{
\sin(x) = \sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2n+1)!}x^{2n+1} \\
}
$$
---
$$
\displaylines{
\left( \frac{1}{1-x} \right)^{(n)}(0) = n! \\
\frac{1}{1-x} = \sum_{n=0}^{\infty} x^{n} \\
\frac{\left( \frac{1}{1-x} \right)^{(n)}(0)}{n!} = 1 \implies \left( \frac{1}{1-x} \right)^{(n)}(0) = n! \\
}
$$
---
$$
\displaylines{
f(x) = \sin^{2}(x) \quad x = 0 \\
\sin^{2}(x) = \frac{1-\cos 2x}{2} = \frac{1}{2}\left( 1 - \sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2n)!}(2x)^{2n} \right) = \frac{1}{2} \sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{(2n)!}(2x)^{2n} = \\
= \sum_{n=1}^{\infty} \frac{(-1)^{n+1}2^{2n-1}x^{2n}}{(2n)!} \\
}
$$
---
$$
\displaylines{
f(x) = \frac{1}{x+17} = \frac{1}{17 - (-x)} = \frac{1}{17} \cdot \frac{1}{1 - \frac{-x}{17}} \\
t = -\frac{x}{17} \implies -1 < t < 1 \\
\implies \frac{1}{17} \sum_{n=0}^{\infty} t^{n} = \sum_{n=0}^{\infty} \frac{(-1)^{n}x^{n}}{17^{n+1}} \quad x \in (-17, 17) \\
}
$$
---
$$
\displaylines{
\frac{1}{(17+x)^{2}} = - \left( \frac{1}{17+x} \right)' = \sum_{n=0}^{\infty} \frac{(-1)^{n+1}nx^{n-1}}{17^{n+1}} \\
}
$$
---
$$
\displaylines{
\frac{1}{x^{2}+x-2} = \frac{1}{(x-1)(x+2)} = \frac{A}{x-1} + \frac{B}{x+2} = \\
= \frac{-1}{3} \left( \frac{1}{1-x} \right) - \frac{1}{3} \cdot \frac{1}{2} \cdot \frac{1}{1-\frac{-x}{2}} = \\
= -\frac{1}{3} \left( \sum_{n=0}^{\infty} x^{n} + \sum_{n=0}^{\infty} \frac{(-1)^{n}x^{n}}{2^{n+1}} \right) = \\
= \sum_{n=0}^{\infty} \frac{((-1)^{n+1} - 2^{n+1})x^{n}}{3 \cdot 2^{n+1}} \quad x \in (-1, 1) \\
}
$$
---
