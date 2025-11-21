---
{"publish":true,"created":"31/07/25, 17:07","modified":"2025-11-21T21:10:14.326+02:00","tags":["Academia","Lecture","Infi-2"],"cssclasses":""}
---

# 1a
$$
\displaylines{
\int \ln(x^{x}) \, dx \\
\\
\text{Solution:} \\
\int \ln(x^{x}) \, dx = \int x\ln(x) \, dx = \frac{x^{2}\ln(x)}{2} - \int \frac{x}{2} \, dx = \\
= \frac{x^{2}\ln(x)}{2} - \frac{x^{2}}{4} + C \\
}
$$
# 1b
$$
\displaylines{
\text{Let } f(x) = \frac{x^{3}}{6} + \frac{1}{2x} \\
\text{Find length of the arc of } f \text{ on } [e, \pi] \\
\\
\text{Solution:} \\
f'(x) = \frac{x^{2}}{2} - \frac{1}{2x^{2}} \\
\sqrt{ 1 + (f'(x))^{2} } = \sqrt{ 1 + \left( \frac{x^{2}}{2} - \frac{1}{2x^{2}} \right)^{2} } = \sqrt{ 1 + \frac{x^{4}}{4} - \frac{1}{2} + \frac{1}{4x^{4}} } = \sqrt{ \frac{4x^{4} + x^{8} - 2x^{4} + 1}{4x^{4}} } = \\
= \frac{x^{4}+1}{2x^{2}} = \frac{x^{2}}{2} + \frac{1}{2x^{2}} \\
\implies L(f) = \int_{e}^{\pi} \sqrt{ 1 + (f'(x))^{2} } \, dx = \int_{e}^{\pi} \frac{x^{2}}{2} + \frac{1}{2x^{2}} \, dx = \\
= \frac{x^{3}}{6} - \frac{1}{2x}\Bigg|^{x=\pi}_{x=e} = \boxed{ \frac{\pi^{3}}{6} - \frac{1}{2\pi} - \frac{e^{3}}{6} + \frac{1}{2e} } \\
}
$$
# 2
$$
\displaylines{
\text{Give a counter example for:} \\
\text{Let } f \text{ be a non-negative continuous function on } [0, \infty) \\
\text{Let } \int_{0}^{\infty} f(x) \, dx \text{ covnerges} \\
\text{Then } f \text{ is bounded on } [0, \infty) \\
\\
\text{Solution:} \\
\text{Triangles function, height } n, \text{ base } \frac{1}{n^{3}} \\
\implies \int_{0}^{\infty} f(x) \, dx = \sum_{n=1}^{\infty} \frac{1}{n^{2}} \text{ converges} \\
}
$$
# 3
$$
\displaylines{
f_{n}(x) = \sqrt{ n + 1 }\sin^{n}(x)\cos(x) \text{ determine whether } f_{n}(x) \text{ converges uniformly on } [0, \pi] \\
\\
\text{Solution:} \\
x = \pi k \implies \sin(x) = 0 \implies f_{n}(x) = 0 \to 0 \\
x = \frac{\pi}{2} + \pi k \implies \cos(x) = 0 \implies f_{n}(x) = 0 \to 0 \\
\sin(x) \neq 0, \cos(x) \neq 0 \implies \left\lvert \sin(x) \right\rvert < 1, \left\lvert \cos(x) \right\rvert < 1 \\
\implies \sin^{n}(x) \to 0 \\
\implies \left\lvert \frac{1}{\sin(x)} \right\rvert > 1 \\
\text{Let } a = \frac{1}{\sin x} \implies \left\lvert a \right\rvert > 1 \\
\implies \frac{\sqrt{ n + 1 }}{a^{n}} \to 0 \\
\lim_{ n \to \infty } f_{n}(x) = \lim_{ n \to \infty } \sqrt{ n + 1 }\sin^{n}(x)\cos(x) = 0 \\
\implies f_{n}(x) \to 0 \text{ on } \mathbb{R} \\
\\
d_{n} = \sup_{x \in [0, \pi]} \left\lvert f_{n}(x) - f(x) \right\rvert = \sup_{x \in [0, \pi]} \left\lvert f_{n}(x) \right\rvert \\
\text{Let } g(x) = f_{n}(x) = \sqrt{ n+1 }\sin^{n}x\cos x \\
\implies g'(x) = \sqrt{ n + 1 }(n\cos^{2}x\sin^{n-1}x - \sin^{n+1}x) \\
g'(x) = 0 \iff n\cos x\sin^{n-1}x - \sin^{n+1}x = 0 \iff \sin^{n-1}x(n\cos^{2}x - \sin^{2}x) = 0 \\
\iff x = 0, \pi \text{ or } (n\cos^{2}x - \sin^{2}x) = 0 \iff \left[\begin{array}{}
x = 0 \\
x = \pi \\
\cos^{2}x = \frac{1}{n+1} \implies \sin^{2}x = \frac{n}{n+1} \\
\end{array}\right. \\
\text{Third case } \implies g(x) = \sqrt{ n+1 } \cdot \frac{1}{\sqrt{ n+1 }} \cdot \sqrt{ \frac{n}{n+1} }^{n} = \sqrt{ \frac{n}{n+1} }^{n} = \\
= \sqrt{ \left( 1 - \frac{1}{n} \right)^{n} } = \sqrt{ \frac{1}{e} } \neq 0 \\
\implies \lim_{ n \to \infty } d_{n} \geq \frac{1}{\sqrt{ e }} \implies f_{n}(x) \not\rightrightarrows 0 \\
}
$$
# 4a
$$
\displaylines{
\text{Calculate } \sum_{n=0}^{\infty} \frac{1}{(2n+1)!} \\
\\
\text{Solution:} \\
e^{x} = \sum_{n=0}^{\infty} \frac{x^{n}}{n!} = \sum_{n=0}^{\infty} \frac{x^{2n}}{(2n)!} + \sum_{n=0}^{\infty} \frac{x^{2n+1}}{(2n+1)!} \\
e^{-x} = \sum_{n=0}^{\infty} \frac{(-1)^{n}x^{n}}{n!} \\
\implies e^{x} - e^{-x} = \sum_{n=0}^{\infty} \frac{(1 - (-1)^{n})x^{n}}{n!} = 2\sum_{n=0}^{\infty} \frac{x^{2n+1}}{(2n+1)!} \\
\implies \sum_{n=0}^{\infty} \frac{1}{(2n+1)!} = \frac{e-e^{-1}}{2} \\
}
$$
# 4b
$$
\displaylines{
\text{Calculate } \sum_{n=0}^{\infty} \frac{1}{4^{n}(2n+1)!} \\
\\
\text{Solution:} \\
e^{x} = \sum_{n=0}^{\infty} \frac{x^{n}}{n!} = \sum_{n=0}^{\infty} \frac{x^{2n}}{(2n)!} + \sum_{n=0}^{\infty} \frac{x^{2n+1}}{(2n+1)!} \\
e^{-x} = \sum_{n=0}^{\infty} \frac{(-1)^{n}x^{n}}{n!} \\
\implies e^{x} - e^{-x} = \sum_{n=0}^{\infty} \frac{(1 - (-1)^{n})x^{n}}{n!} = 2\sum_{n=0}^{\infty} \frac{x^{2n+1}}{(2n+1)!} \\
\implies \frac{e^{x}-e^{-x}}{2x} = \sum_{n=0}^{\infty} \frac{x^{2n}}{(2n+1)!} \\
\implies \sum_{n=0}^{\infty} \frac{1}{4^{n}(2n+1)!} = e^{1/2}-e^{-1/2} \\
}
$$
# 4
$$
\displaylines{
\text{Find global extremums of } f(x, y) = x^{3} + 4xy^{2} \\
\text{Limited by } x^{2} + y^{2} \leq 16 \\
\\
\text{Solution:} \\
\text{Critical points within the limits:} \\
f_{x} = 3x^{2} + 4y^{2} = 0 \implies x = y = 0 \\
f_{y} = 8xy = 0 \implies x = 0 \text{ or } y = 0 \\
\implies \text{The only critical point within the limits is } (0, 0) \\
\\
\text{Critical points on border:} \\
\text{Let } g(x, y) = x^{2} + y^{2} - 16 \\
\left\{\begin{array}{}
f_{x} = \lambda g_{x} \\
f_{y} = \lambda g_{y} \\
g = 0 \\
\end{array}\right. \implies \left\{\begin{array}{}
3x^{2} + 4y^{2} = 2\lambda x \\
8xy = 2\lambda y \\
x^{2} + y^{2} - 16 = 0 \\
\end{array}\right. \\
\implies \left\{\begin{array}{}
y^{2} - 2\lambda x + 48 = 0 \\
y(4x-\lambda) = 0 \\
x^{2} + y^{2} - 16 = 0 \\
\end{array}\right. \\
y = 0 \implies x = \pm 4 \\
x = \frac{\lambda}{4} \implies \left\{\begin{array}{}
y^{2} = \frac{\lambda^{2}}{2} - 48 \\
\frac{\lambda^{2}}{16} + \frac{\lambda^{2}}{2} - 48 - 16 = 0 \\
\end{array}\right. \implies \lambda^{2} = \frac{2^{10}}{9} \implies \lambda = \pm \frac{2^{5}}{3} \\
\implies x = \pm \frac{8}{3} \implies y^{2} = \frac{2^{9}}{9} - 48 = \frac{80}{9} \implies y = \pm \frac{4\sqrt{ 5 }}{3} \\
\implies \text{Critical points on border are:} \\
(\pm 4, 0), \left( \pm \frac{8}{3}, \pm \frac{4\sqrt{ 5 }}{3} \right) \\
f(0, 0) = 0 \\
f(4, 0) = 64 \\
f(-4, 0) = -64 \\
f\left( \frac{8}{3}, \pm \frac{4\sqrt{ 5 }}{3} \right) = \frac{512}{27} + \frac{32 \cdot 80}{27} = \frac{3072}{27} > 64 \\
f\left( -\frac{8}{3}, \pm \frac{4\sqrt{ 5 }}{3} \right) = -\frac{512}{27} - \frac{32 \cdot 80}{27} = \frac{-3072}{27} < -64 \\
\implies \begin{array}{}
\text{Global maximums are } f\left( \frac{8}{3}, \pm \frac{4\sqrt{ 5 }}{3} \right) = \frac{3072}{27} \\
\text{Global minimums are } f\left( -\frac{8}{3}, \pm \frac{4\sqrt{ 5 }}{3} \right) = \frac{-3072}{27} \\
\end{array} \\
}
$$
