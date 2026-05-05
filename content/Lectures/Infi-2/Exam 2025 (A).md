---
{"publish":true,"created":"29/07/25, 14:07","modified":"2026-03-24T15:00:40.101+02:00","tags":["Academia","Lecture","Infi-2"],"cssclasses":""}
---

# 1a
$$
\displaylines{
\int e^{x}\sin(3x)dx \\
\\
\text{Solution:} \\
f(x) = \sin(3x) \implies f'(x) = 3\cos(3x) \\
g'(x) = e^{x} \implies g(x) = e^{x} \\
\\
\implies \int e^{x}\sin(3x)dx = e^{x}\sin(3x) - 3\int e^{x}\cos(3x)dx \\
h(x) = \cos(3x) \implies h'(x) = -3\sin(3x) \\
\int e^{x}\cos(3x)dx = e^{x}\cos(3x) + 3\int e^{x}\sin(3x)dx = e^{x}\cos(3x) + 3e^{x}\sin(3x) - 9\int e^{x}\cos(3x)dx \\
\implies \int e^{x}\cos(3x)dx = \frac{e^{x}(3\sin(3x) + \cos(3x))}{10} + C \\
\implies \int e^{x}\sin(3x)dx = \frac{e^{x}}{10}\left( \sin(3x) - 3 \cos(3x)\right) + C \\
}
$$
# 1b
$$
\displaylines{
\int_{0}^{\pi/2} \frac{\sqrt{ \sin x }}{\sqrt{ \sin x } + \sqrt{ \cos x }} \, dx \\
\\
\text{Solution:} \\
\text{Let } t = \frac{\pi}{2} - x \\
\implies \cos(t) = \sin(x), \sin(t) = \cos(x) \\
\implies \int_{0}^{\pi/2} \frac{\sqrt{ \sin x }}{\sqrt{ \sin x } + \sqrt{ \cos x }} \, dx = \left\{\begin{array}{}
t = \frac{\pi}{2} - x \\
dt = -dx \\
x = 0 \implies t  = \frac{\pi}{2} \\
x = \frac{\pi}{2} \implies t = 0 \\
\end{array}\right\} = \int_{0}^{\pi/2} \frac{\sqrt{ \cos t }}{\sqrt{ \cos t } + \sqrt{ \sin t }} \, dt \\
\implies 2\int_{0}^{\pi/2} \frac{\sqrt{ \sin x }}{\sqrt{ \sin x } + \sqrt{ \cos x }} \, dx = \int_{0}^{\pi/2} \frac{\sqrt{ \sin x }}{\sqrt{ \sin x } + \sqrt{ \cos x }} \, dx + \int_{0}^{\pi/2} \frac{\sqrt{ \cos x }}{\sqrt{ \sin x } + \sqrt{ \cos x }} \, dx = \\
= \int_{0}^{\pi/2} \frac{\sqrt{ \sin x } + \sqrt{ \cos x }}{\sqrt{ \sin x } + \sqrt{ \cos x }} \, dx = \int_{0}^{\pi/2} 1 \, dx = \frac{\pi}{2} \\
\implies \boxed{ \int_{0}^{\pi/2} \frac{\sqrt{ \sin x }}{\sqrt{ \sin x } + \sqrt{ \cos x }} \, dx = \frac{\pi}{4} } \\
}
$$
# 2
$$
\displaylines{
\text{Let } f \text{ be a continuous function defined on } [0, \infty) \\
}
$$
## 2a
$$
\displaylines{
\text{Prove or disprove: } \int_{0}^{\infty} f(x) \, dx \text{ converges} \implies f \text{ is bounded} \\
\\
\text{Disproof:} \\
\text{Let us define a function of "triangles" (starting from n=2):} \\
\forall n \in \mathbb{N} \ \Set{ 1 }: f(x) = \left\{\begin{array}{}
n^{3}\left( x-n+\frac{1}{n^{2}} \right) & x \in \left[ n - \frac{1}{n^{2}}, n \right] \\
n^{3}\left( n+\frac{1}{n^{2}}-x \right) & x \in \left[ n, n + \frac{1}{n^{2}} \right] \\
0 & \text{otherwise} \\
\end{array}\right. \\
\text{Area of each triangle is } \frac{1}{n^{2}} \\
f \text{ is continuous on } [0, \infty) \\
f \text{ is unbounded on } [0, \infty) \\
\int_{0}^{\infty} f(x) \, dx = \sum_{n=2}^{\infty} \frac{1}{n^{2}} \text{ converges} \\
}
$$
## 2b
$$
\displaylines{
\text{Prove or disprove: } f \text{ is monotonically decreasing and } \int_{0}^{\infty} f(x) \, dx \text{ converges} \\
\implies \lim_{ x \to \infty } f(x) = 0 \\
\\
\text{Proof: } \\
\text{Let } \lim_{ x \to \infty } f(x) = L > 0 \\
\implies \forall \varepsilon > 0: \exists x_{0} \in \mathbb{R}: \forall x > x_{0}: \left\lvert f(x) - L \right\rvert < \varepsilon \\
\text{Let } \varepsilon = \frac{L}{2} \\
\text{Let } x_{0} \in \mathbb{R}: \forall x > x_{0}: \left\lvert f(x) - L \right\rvert < \varepsilon \\
\implies \forall x > x_{0}: \frac{L}{2} = L - \varepsilon \leq f(x) \leq L + \varepsilon = \frac{3}{2}L \\
\implies \int_{0}^{\infty} f(x) \, dx = \int_{0}^{x_{0}+1} f(x) \, dx + \int_{x_{0}+1}^{\infty} f(x) \, dx \geq \int_{0}^{x_{0}+1} f(x) \, dx + \underbrace{ \int_{x_{0}+1}^{\infty} \frac{L}{2} \, dx }_{ = \infty } \\
\implies \int_{0}^{\infty} f(x) \, dx \text{ diverges} \\
\text{Let } \lim_{ x \to \infty } f(x) = L < 0 \\
\implies \forall \varepsilon > 0: \exists x_{0} \in \mathbb{R}: \forall x > x_{0}: \left\lvert f(x) - L \right\rvert < \varepsilon \\
\text{Let } \varepsilon = -\frac{L}{2} \\
\text{Let } x_{0} \in \mathbb{R}: \forall x > x_{0}: \left\lvert f(x) - L \right\rvert < \varepsilon \\
\implies \forall x > x_{0}: \frac{3L}{2} = L - \varepsilon \leq f(x) \leq L + \varepsilon = \frac{L}{2} \\
\implies \int_{0}^{\infty} f(x) \, dx = \int_{0}^{x_{0}+1} f(x) \, dx + \int_{x_{0}+1}^{\infty} f(x) \, dx \leq \int_{0}^{x_{0}+1} f(x) \, dx + \underbrace{ \int_{x_{0}+1}^{\infty} \frac{L}{2} \, dx }_{ = -\infty } \\
\implies \int_{0}^{\infty} f(x) \, dx \text{ diverges} \\
\implies \boxed{ \lim_{ x \to \infty } f(x) = 0 } \\
}
$$
# 3a
$$
\displaylines{
\text{Prove or disprove: } \sum f_{n}(x) \text{ converges absolutely on } I \\
\implies \exists \sum a_{n} \text{ convergent}: \forall x \in I: \forall n \in \mathbb{N} : \left\lvert f_{n}(x) \right\rvert \leq a_{n} \\
\\
\text{Disproof:} \\
\text{Let } I = [0, 2\pi] \\
\text{Let } f_{n}(x) = (-1)^{n} \\
\sum_{n=0}^{\infty} f_{n}(x) = \sum_{n=0}^{\infty} (-1)^{n} = 0 \\
\forall x \in I : \forall n \in \mathbb{N}: \left\lvert f_{n}(x) \right\rvert = 1 \\
\implies \forall a_{n}: \forall x \in I : \forall n \in \mathbb{N}: \left\lvert f_{n}(x) \right\rvert \leq a_{n} \implies a_{n} \geq 1 \\
\implies \lim_{ n \to \infty } a_{n} \neq 0 \implies \sum a_{n} \text{ diverges} \\
}
$$
# 3b
$$
\displaylines{
\text{Determine whether } \sum_{n=1}^{\infty} \frac{n^{2}}{\sqrt{ n! }}(x^{n} + x^{-n}) \text{ converges uniformly on } \left[ \frac{1}{2}, 2 \right] \\
\\
\text{Solution:} \\
\frac{1}{2} \leq \left\lvert x \right\rvert \leq 2 \implies \left\{\begin{array}{}
\left\lvert x^{n} \right\rvert \leq 2^{n} \\
\left\lvert x^{-n} \right\rvert \leq 2^{n} \\
\end{array}\right. \\
\left\lvert x^{n} + x^{-n} \right\rvert \leq \left\lvert x^{n} \right\rvert + \left\lvert x^{-n} \right\rvert \leq 2^{n+1} \\
\implies \sum_{n=1}^{\infty} \left\lvert \frac{n^{2}}{\sqrt{ n! }}(x^{n} + x^{-n}) \right\rvert \leq \sum_{n=1}^{\infty} \frac{2^{n+1}n^{2}}{\sqrt{ n! }} \\
\lim_{ n \to \infty } \frac{2^{n+1}(n+1)^{2} \cdot \sqrt{ n! }}{\sqrt{ (n+1)! } \cdot 2^{n} \cdot n^{2}} = \lim_{ n \to \infty } 2e^{2} \cdot \sqrt{ \frac{1}{n+1} } = 0 \\
\implies \text{Series converges} \\
\implies \text{By Weierstrass M-test: } \sum_{n=1}^{\infty} \frac{n^{2}}{\sqrt{ n! }}(x^{n} + x^{-n}) \text{ converges absolutely on } \left[ \frac{1}{2}, 2 \right] \\
}
$$
# 4
$$
\displaylines{
\text{Calculate: } \sum_{n=1}^{\infty} \frac{1}{2^{n}n(n+1)} \\
\\
\text{Solution:} \\
\text{Let } x = \frac{1}{2} \\
\implies \sum_{n=1}^{\infty} \frac{1}{2^{n}n(n+1)} = \sum_{n=1}^{\infty} \frac{1}{n(n+1)}x^{n} \\
\lim_{ n \to \infty } \frac{n(n+1)}{(n+1)(n+2)} = 1 \implies \sum_{n=1}^{\infty} \frac{1}{n(n+1)}x^{n} \text{ converges absolutely on } (-1, 1) \\
\sum_{n=1}^{\infty} x^{n} = \frac{x}{1-x} \implies \sum_{n=1}^{\infty} x^{n-1} = \frac{1}{(1-x)} \\
\implies \int_{0}^{x} \sum_{n=1}^{\infty} t^{n-1} \, dt = \sum_{n=1}^{\infty} \int_{0}^{x} t^{n-1} \, dt = \sum_{n=1}^{\infty} \frac{x^{n}}{n} = \int_{0}^{x} \frac{1}{1-t} \, dt = - \ln \left\lvert x - 1 \right\rvert = \ln(1-x) \\
\\
\int_{0}^{x} \sum_{n=1}^{\infty} \frac{t^{n}}{n} \, dt = \sum_{n=1}^{\infty} \int_{0}^{t} \frac{t^{n}}{n} \, dt = \sum_{n=1}^{\infty} \frac{x^{n+1}}{n(n+1)} = \int_{0}^{x} -\ln(1-t) \, dt \\
\int -\ln(1-t) \, dt \underbrace{ = }_{ u = 1-t } \int \ln(u) \, du = u\ln(u) - u =  (1-t)\ln(1-t) - (1-t) \\
\implies \int_{0}^{x} -\ln(1-t) \, dt = (1-x)\ln(1-x) - (1-x) + 1 = \\
= x + (1-x)\ln(1-x) \\
\implies \sum_{n=1}^{\infty} \frac{x^{n}}{n(n+1)} = 1 + \frac{1-x}{x}\ln(1-x) \\
\implies \sum_{n=1}^{\infty} \frac{1}{2^{n}n(n+1)} = \boxed{ 1 + \ln\left( \frac{1}{2} \right) } \\
}
$$
# 5a
$$
\displaylines{
\text{Find critical points of function:} \\
f(x, y) = xy^{2} - 2x^{2}y - 4xy \\
\\
\text{Solution:} \\
f_{x} = y^{2} - 4xy - 4y = 0 \implies y(y - 4x - 4) = 0 \implies \left[\begin{array}{}
y = 0 \\
y = 4(x+1) \\
\end{array}\right. \\
f_{y} = 2xy - 2x^{2} - 4x \implies x(y-x-2) = 0 \implies \left[\begin{array}{}
x = 0 \\
y = x + 2 \\
\end{array}\right. \\
y = 0 \implies \left[\begin{array}{}
x = 0 \\
x = -2 \\
\end{array}\right. \\
y = 4(x+1) \implies \left[\begin{array}{}
x = 0 \implies y = 4 \\
y = x + 2 \implies 4x + 2 = x \implies x = -\frac{2}{3}, y = \frac{4}{3} \\
\end{array}\right. \\
\implies \text{Critical points are:} \\
(0, 0), (-2, 0), (0, 4), \left( -\frac{2}{3}, \frac{4}{3} \right) \\
\\
f_{xx} = -4y \\
f_{xy} = 2y - 4x - 4 \\
f_{yx} = 2y - 4x - 4 \\
f_{yy} = 2x \\
\implies H_{f} = \begin{pmatrix}
-4y & 2y-4x-4 \\
2y-4x-4 & 2x \\
\end{pmatrix} \\
M_{1} = -4y \\
M_{2} = -8xy - (2y-4x-4)^{2} \\
\\
(0, 0) \to M_{1} = 0, M_{2} = -16 \implies \text{Saddle} \\
(-2, 0) \to M_{1} = 0, M_{2} = -16 \implies \text{Saddle} \\
(0, 4) \to M_{1} = -16, M_{2} = -16 \implies \text{Saddle} \\
\left( -\frac{2}{3}, \frac{4}{3} \right) \to M_{1} = -\frac{16}{3}, M_{2} = \frac{64}{9} - \left( \frac{8}{3}+\frac{8}{3}-4 \right)^{2} = \frac{16}{3} > 0 \implies \text{Local maximum} \\
}
$$
