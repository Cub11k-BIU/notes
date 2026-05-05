---
{"publish":true,"created":"31/07/25, 12:07","modified":"2026-03-24T15:00:40.049+02:00","tags":["Academia","Lecture","Infi-2"],"cssclasses":""}
---

# 1a
$$
\displaylines{
\int e^{x}\sin(3x) \, dx \\
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
\int x\tan^{2}x \, dx \\
\\
\text{Solution:} \\
f(x) = x \implies f'(x) = 1 \\
g'(x) = \tan^{2}(x) = \frac{1}{\cos^{2}x} - 1 \implies g(x) = \tan(x) - x \\
\implies \int f(x)g'(x) \, dx = f(x)g(x) - \int f'(x)g(x) \, dx = \\
= x\tan x - x^{2} - \int \tan x - x \, dx = x\tan x - x^{2} - \int \tan x \, dx + \frac{x^{2}}{2} = \\
= x\tan x - \frac{x^{2}}{2} - \int \tan x \, dx \\
\int \tan x \, dx = \left\{\begin{array}{}
t = \cos x \\
dt = -\sin xdx \\
\end{array}\right\} = - \int \frac{1}{t} \, dt = -\ln \left\lvert t \right\rvert = -\ln \left\lvert \cos x \right\rvert + C \\
\implies \int x\tan^{2}x \, dx = x\tan x - \frac{x^{2}}{2} + \ln \left\lvert \cos x \right\rvert + C \\
}
$$
# 1c
$$
\displaylines{
\int \frac{x + \sqrt[3]{ x^{2} } + \sqrt[6]{ x }}{x(1+\sqrt[3]{ x })} \, dx \\
\\
\text{Solution:} \\
\frac{x + x^{2/3} + x^{1/6}}{x + x^{4/3}} = \frac{x^{1/6}(x^{5/6} + x^{1/2} + 1)}{x(1+x^{1/3})} = \frac{x^{5/6} + x^{1/2} + 1}{x^{5/6}(1+x^{1/3})} \\
\text{Let } t = x^{1/6} \implies dt = \frac{1}{6x^{5/6}}dx \\
x^{1/3} = t^{2} \\
x^{5/6} = t^{5} \\
x^{1/2} = t^{3} \\
\implies \int \frac{x + \sqrt[3]{ x^{2} } + \sqrt[6]{ x }}{x(1+\sqrt[3]{ x })} \, dx = \left\{\begin{array}{}
t = x^{1/6} \\
dt = \frac{1}{6x^{5/6}}dx \\
\end{array}\right\} = \int \frac{6t^{5}(t^{6}+t^{4}+t)}{t^{6}(1+t^{2})} \, dt = \\
= 6\int \frac{t^{5} + t^{3} + 1}{1 + t^{2}} \, dt \\
\frac{t^{5} + t^{3} + 1}{1 + t^{2}} = t^{3} + \frac{1}{1+t^{2}} \\
\implies 6\int \frac{t^{5} + t^{3} + 1}{1 + t^{2}} \, dt = 6 \int t^{3} \, dt + 6\int \frac{1}{1+t^{2}} \, dt = \\
= 6 \frac{t^{4}}{4} + 6\arctan(t) = \frac{6x^{2/3}}{4} + 6\arctan(x^{1/6}) + C \\
}
$$
# 2a
$$
\displaylines{
\int_{1}^{\infty} \frac{\cos(x)}{\sqrt{ x }} \, dx \text{ converges absolutely, contidionally or diverges?} \\
\\
\text{Solution:} \\
G(x) = \int_{1}^{x} \cos(t) \, dt = -\sin(t) \Bigg|^{t=x}_{t=1} = -\sin(x) + \sin(1) \text{ is bounded} \\
\frac{1}{\sqrt{ x }} \text{ is monotonically decreasing to zero} \\
\implies \int_{1}^{\infty} \frac{\cos(x)}{\sqrt{ x }} \, dx \text{ converges by Dirichlet's test} \\
\left\lvert \frac{\cos(x)}{\sqrt{ x }} \right\rvert \geq \frac{\cos^{2}(x)}{\sqrt{ x }} = \frac{1 + \cos(2x)}{2\sqrt{ x }} \\
\int_{1}^{\infty} \frac{\cos(2x)}{2\sqrt{ x }} \, dx \text{ converges by Dirichlet's test} \\
\int_{1}^{\infty} \frac{1}{2\sqrt{ x }} \, dx \text{ diverges by p-test} \\
\implies \int_{1}^{\infty} \left\lvert \frac{\cos(x)}{\sqrt{ x }} \right\rvert \, dx \text{ diverges} \\
\implies \int_{1}^{\infty} \frac{\cos(x)}{\sqrt{ x }} \, dx \text{ converges conditionally} \\
}
$$
# 2b
$$
\displaylines{
\text{Prove: } x = \int_{0}^{x} \sin^{100}(t) \, dt \text{ has one solution on } [-1, 1] \\
\\
\text{Proof:} \\
\text{Let } f(x) = \int_{0}^{x} \sin^{100}(t) \, dt - x \\
f(-1) = \int_{0}^{-1} \sin^{100}(t) \, dt + 1 = 1 - \underbrace{ \int_{-1}^{0} \sin^{100}(t) \, dt }_{ \leq (0 - (-1)) \cdot 1 = 1 } \geq 0 \\
f(1) = \int_{0}^{1} \sin^{100}(t) \, dt - 1 \leq 0 \setminus
f \text{ is continuous} \implies \exists c \in [-1, 1]: f(c) = 0 \\
f'(x) = (x-0)' \cdot (\sin^{100}(x) - \sin^{100}(0)) - 1 = \sin^{100}(x) - 1 < 0 \\
\implies \exists! c \in [-1, 1]: f(c) = 0 \\
}
$$
# 5
$$
\displaylines{
\text{Find local extremums of } f(x, y) = 3x^{2}y + y^{3} - 3x^{2} - 3y^{2} - 2 \\
\\
\text{Solution:} \\
f_{x} = 6xy - 6x = 0 \implies x(y-1) = 0 \\
f_{y} = 3x^{2} + 3y^{2} - 6y = 0 \implies x^{2} + y^{2} - 2y = 0 \\
x = 0 \implies y^{2} - 2y = 0 \implies y = 0, y = 2 \\
y = 1 \implies x^{2} - 1 = 0 \implies x = \pm 1 \\
\implies \text{Critical points are:} \\
(0, 0), (0, 2), (\pm 1, 1) \\
\\
f_{xx} = 6y - 6 \\
f_{xy} = f_{yx} = 6x \\
f_{yy} = 6y - 6 \\
\implies \det(M_{1}) = 6y - 6 \\
\implies \det(M_{2}) = (6y-6)^{2} - (6x)^{2} \\
(0, 0) \implies M_{1} < 0, M_{2} > 0 \implies \text{Local maximum} \\
(0, 2) \implies M_{1} > 0, M_{2} > 0 \implies \text{Local minimum} \\
(\pm 1, 1) \implies M_{1} = 0, M_{2} < 0 \implies \text{Saddle} \\
}
$$
