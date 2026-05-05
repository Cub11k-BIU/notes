---
{"publish":true,"created":"30/07/25, 17:07","modified":"2026-03-24T15:00:40.090+02:00","tags":["Academia","Lecture","Infi-2"],"cssclasses":""}
---

# 1a
$$
\displaylines{
\int \frac{x\sin x}{\cos^{2}x} \, dx \\
\\
\text{Solution:} \\
f(x) = x \implies f'(x) = 1 \\
g'(x) = \frac{\sin x}{\cos^{2}x} \implies g(x) = \int \frac{\sin x}{\cos^{2}x} \, dx \\
\int \frac{\sin x}{\cos^{2}x} \, dx = \left\{\begin{array}{}
t = \cos x \\
dt = -\sin xdx \\
\end{array}\right\} = - \int \frac{1}{t^{2}} \, dt = \frac{1}{t} = \frac{1}{\cos x} + C \\
\text{Let } C = 0 \\
\\
\implies \int f(x)g'(x) \, dx = f(x)g(x) - \int f'(x)g(x) \, dx = \\
= \frac{x}{\cos x} - \int \frac{1}{\cos x} \, dx \\
\int \frac{1}{\cos x} \, dx = \left\{\begin{array}{}
t = \tan \frac{x}{2} \\
dt = \frac{1+t^{2}}{2}dx \\
\cos x = \frac{1-t^{2}}{1+t^{2}} \\
\end{array}\right\} = 2 \int \frac{1}{1-t^{2}} \, dt = \int \frac{1}{1-t} + \frac{1}{1+t} \, dt = \\
= - \ln \left\lvert 1 - t \right\rvert + \ln \left\lvert 1 + t \right\rvert = \ln \left\lvert 1 + \tan \frac{x}{2} \right\rvert - \ln \left\lvert 1 - \tan \frac{x}{2} \right\rvert + C \\
\implies \int \frac{x\sin x}{\cos^{2}x} \, dx = \frac{x}{\cos x} - \ln \left\lvert 1 + \tan \frac{x}{2} \right\rvert + \ln \left\lvert 1 - \tan \frac{x}{2} \right\rvert + C \\
}
$$
# 1b
$$
\displaylines{
\int \ln(\sin x)\cos^{3}x \, dx \\
\\
\text{Solution:} \\
\int \ln(\sin x)\cos^{3}x \, dx = \left\{\begin{array}{}
t = \sin x \\
dt = \cos xdx \\
\end{array}\right\} = \int \ln(t)(1-t^{2}) \, dt \\
f(t) = \ln(t) \implies f'(t) = \frac{1}{t} \\
g'(t) = 1-t^{2} \implies g(t) = t - \frac{t^{3}}{3} \\
\implies \int \ln(t)(1-t^{2}) \, dt = \ln(t)\left( t-\frac{t^{3}}{3} \right) - \int 1 - \frac{t^{2}}{3} \, dt = \\
= t\ln(t) - \frac{t^{3}\ln(t)}{3} - t + \frac{t^{3}}{9} = \\
= \sin x\ln(\sin x) - \frac{\sin^{3}x\ln(\sin x)}{3} - \sin x + \frac{\sin^{3}x}{9} + C \\
}
$$
# 2
$$
\displaylines{
\text{Let } f \text{ be a function defined on } [a, b] \\
\text{Let } S \in \mathbb{R}: \forall n \in \mathbb{N}: \forall \Set{ x_{0}, \dots, x_{n} } \text{ partition of } [a, b]: \sum_{k=1}^{n} f(x_{k-1})(x_{k}-x_{k-1}) = S \\
}
$$
## 2a
$$
\displaylines{
\text{Prove or disprove: } f \text{ is integrable on } [a, b] \implies \int_{a}^{b} f(x) \, dx = f(a) \cdot (b-a) \\
\\
\text{Proof:} \\
\text{Let } \Set{ a, b } \text{ be a partition of } [a, b] \\
\implies f(a) \cdot (b-a) = S \\
f \text{ is integrable} \implies \int_{a}^{b} f(x) \, dx = \lim_{ \Delta x_{k} \to 0 } \sum_{k=1}^{n} f(x_{k-1}) \cdot \Delta x_{k} = \\
= \lim_{ \Delta x_{k} \to 0 } \sum_{k=1}^{n} f(x_{k-1})(x_{k}-x_{k-1}) = \lim_{ \Delta x_{k} \to 0 } S = S = f(a) \cdot (b-a) \\
}
$$
## 2b
$$
\displaylines{
\text{Prove or disprove: } f \text{ is constant} \\
\\
\text{Disproof:} \\
\text{Let } a = 0, b = 1 \\
\text{Let } S = 1 \\
\text{Let } f(x) = \left\{\begin{array}{}
1 & x \neq 1 \\
0 & x = 1 \\
\end{array}\right. \\
\forall \Set{ x_{k} } \text{ partitions of } [a, b]: \sum_{k=1}^{n} f(x_{k-1})(x_{k}-x_{k-1}) = \sum_{k=1}^{n} (x_{k}-x_{k-1}) = \\
= x_{n} - x_{0} = 1 - 0 = 1 = S \\
}
$$
# 3a
$$
\displaylines{
\lim_{ n \to \infty } \sum_{k=0}^{n} \frac{k}{n^{2}+nk} \\
\\
\text{Solution:} \\
x_{k} = \frac{k}{n} \\
\Delta x_{k} = \frac{1}{n} \\
\lim_{ n \to \infty } \sum_{k=0}^{n} f\left( \frac{k}{n} \right) \cdot \frac{1}{n} \\
\implies f\left( \frac{k}{n} \right) = \frac{k}{n+\underbrace{ k }_{ = \frac{nk}{n} }} = \frac{k}{n\left( 1 + \frac{k}{n} \right)} \implies f(x) = \frac{x}{1+x} \\
f \text{ is continuous and bounded on } [0, 1] \implies f \text{ is integrable on } [0, 1] \\
\implies \lim_{ n \to \infty } \sum_{k=0}^{n} \frac{k}{n^{2}+nk} = \int_{0}^{1} f(x) \, dx = \int_{0}^{1} \frac{x}{1+x} \, dx = \\
= \int_{0}^{1} 1 - \frac{1}{1+x} \, dx = 1 - \int_{0}^{1} \frac{1}{1+x} \, dx = \boxed{ 1 - \ln 2 } \\
}
$$
# 3b
$$
\displaylines{
\text{Let } f(x) = \ln(\cos x) \\
\text{Find length of its graph on } \left[ \frac{\pi}{3}, \frac{\pi}{2} \right] \\
\\
\text{Solution:} \\
f'(x) = \frac{-\sin x}{\cos x} = -\tan x \\
\implies L(f) = \int_{\pi/3}^{\pi/2} \sqrt{ 1 + \tan^{2}x } \, dx = \int_{\pi/3}^{\pi/2} \sqrt{ \frac{\cos^{2}x + \sin^{2}x}{\cos^{2}x} } \, dx = \int_{\pi/3}^{\pi/2} \frac{1}{\cos x} \, dx \\
\int \frac{1}{\cos x} \, dx = \left\{\begin{array}{}
t = \tan \frac{x}{2} \\
dt = \frac{1+t^{2}}{2}dx \\
\cos x = \frac{1-t^{2}}{1+t^{2}} \\
\end{array}\right\} = 2 \int \frac{1}{1-t^{2}} \, dt = \int \frac{1}{1-t} + \frac{1}{1+t} \, dt = \\
= - \ln \left\lvert 1 - t \right\rvert + \ln \left\lvert 1 + t \right\rvert = \ln \left\lvert 1 + \tan \frac{x}{2} \right\rvert - \ln \left\lvert 1 - \tan \frac{x}{2} \right\rvert + C \\
\implies L(f) = \ln \left\lvert 1 + \tan \frac{\pi}{4} \right\rvert - \underbrace{ \ln \left\lvert 1 - \tan \frac{\pi}{4} \right\rvert }_{ = \ln 0 \implies \text{We will take limit instead} } - \ln \left\lvert 1 + \tan \frac{\pi}{6} \right\rvert + \ln \left\lvert  1 - \tan \frac{\pi}{6} \right\rvert \\
x \to \frac{\pi}{2}^{-} \implies \ln \left\lvert 1 - \tan \frac{x}{2} \right\rvert \underbrace{ \to }_{ \ln 0 } -\infty \\
\implies L(f) = \ln 2 - \text{"$-\infty$"} - \ln\left( 1+\frac{1}{\sqrt{ 3 }} \right) + \ln\left( 1-\frac{1}{\sqrt{ 3 }} \right) = C + \infty = \infty \\
}
$$
# 4
$$
\displaylines{
\sum_{n=0}^{\infty} \frac{1}{9^{n}(2n)!} \\
\\
\text{Solution:} \\
e^{x} = \sum_{n=0}^{\infty} \frac{x^{n}}{n!} \\
e^{-x} = \sum_{n=0}^{\infty} \frac{(-1)^{n}x^{n}}{n!} \\
\text{Both of these converge absolutely on } \mathbb{R} \implies \text{We can sum them and reorder terms:} \\
\implies e^{x} + e^{-x} = \sum_{n=0}^{\infty} \frac{(1 + (-1)^{n})x^{n}}{n!} = \sum_{n=0}^{\infty} \frac{2x^{2n}}{(2n)!} \\
\text{Let } x = \frac{1}{3} \implies \sum_{n=0}^{\infty} \frac{1}{9^{n}(2n)!} = \frac{1}{2}\sum_{n=0}^{\infty} \frac{2\left( \frac{1}{3} \right)^{2n}}{(2n)!} = \frac{e^{1/3}+e^{-1/3}}{2} \\
}
$$
# 5
$$
\displaylines{
\text{Find global extremums of } f(x, y) = 2x^{4} + y^{4} - x^{2} - y^{2} \\
\text{Limited by } x^{2} + y^{2} \leq 2 \\
\\
\text{Solution:} \\
\text{First let's find critical points within the limits} \\
f_{x} = 8x^{3} - 2x = 0 \implies x(8x^{2}-2) = 0 \implies x(2x-1)(2x+1) = 0 \\
f_{y} = 4y^{3} - 2y = 0 \implies y(\sqrt{ 2 }y - 1)(\sqrt{ 2 }y + 1) = 0 \\
\implies \begin{array}{}
x = 0, \frac{1}{2}, -\frac{1}{2} \\
y = 0, \frac{1}{\sqrt{ 2 }}, -\frac{1}{\sqrt{ 2 }} \\
\end{array} \\
\text{All combinations of these are within the domain} \\
f(0, 0) = 0 \\
f\left( 0, \pm \frac{1}{\sqrt{ 2 }} \right) = 2 \\
f\left( \pm \frac{1}{2}, 0 \right) = -\frac{1}{8} \\
f\left( \pm \frac{1}{2}, \pm \frac{1}{\sqrt{ 2 }} \right) = -\frac{3}{8} \\
\\
\text{Let us now examine points on the border:} \\
\text{Let } g(x, y) = x^{2} + y^{2} - 2 \\
\left\{\begin{array}{}
f_{x} = \lambda g_{x} \\
f_{y} = \lambda g_{y} \\
g = 0 \\
\end{array}\right. \implies \left\{\begin{array}{}
8x^{3}-2x = 2\lambda x \implies x(4x^{2}-1-\lambda) = 0 \\
4y^{3}-2y = 2\lambda y \implies y(2y^{2}-1-\lambda) = 0 \\
x^{2} + y^{2} - 2 = 0 \\
\end{array}\right. \\
x = 0, y = 0 \text{ is not on the border} \\
x = 0 \implies y^{2} = 2 \implies y = \pm \sqrt{ 2 } \\
y = 0 \implies x^{2} = 2 \implies x = \pm \sqrt{ 2 } \\
4x^{2} - 1 - \lambda = 0, 2y^{2} - 1 - \lambda = 0 \implies 4x^{2} = 2y^{2} \implies x^{2} = \frac{1}{2}y^{2} \\
\implies \frac{3}{2}y^{2} = 2 \implies y^{2} = \frac{4}{3} \implies y = \pm \frac{2}{\sqrt{ 3 }} \implies x = \pm \frac{\sqrt{ 2 }}{\sqrt{ 3 }} \\
\text{All critical points on the border are then: } \\
(0, \pm \sqrt{ 2 }), (\pm \sqrt{ 2 }, 0), \left( \frac{\pm \sqrt{ 2 }}{\sqrt{ 3 }}, \frac{\pm 2}{\sqrt{ 3 }} \right) \\
f(0, \pm \sqrt{ 2 }) = 2 \\
f(\pm \sqrt{ 2 }, 0) = 6 \\
f\left( \frac{\pm \sqrt{ 2 }}{\sqrt{ 3 }}, \frac{\pm 2}{\sqrt{ 3 }} \right) = \frac{8}{9} + \frac{16}{9} - \frac{6}{9} - \frac{12}{9} = \frac{6}{9} \\
\implies \left\{\begin{array}{}
\text{Global maximums are } f(\pm \sqrt{ 2 }, 0) = 6 \\
\text{Global minimums are } f\left( \pm \frac{1}{2}, \pm \frac{1}{\sqrt{ 2 }} \right) = -\frac{3}{8} \\
\end{array}\right. \\
}
$$
