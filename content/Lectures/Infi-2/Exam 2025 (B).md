---
{"publish":true,"created":"29/07/25, 18:07","modified":"2025-11-21T21:10:14.355+02:00","tags":["Academia","Lecture","Infi-2"],"cssclasses":""}
---

# 1a
$$
\displaylines{
\int \tan^{3}(x)dx \\
\\
\text{Solution:} \\
\tan^{2}(x) = \frac{\sin^{2}(x)}{\cos^{2}(x)} = \frac{1-\cos^{2}(x)}{\cos^{2}(x)} = \frac{1}{\cos^{2}x} - 1 \\
\implies \int \tan^{3}(x) \, dx = \int \frac{\tan(x)}{\cos^{2}(x)} \, dx - \int \tan(x) \, dx \\
\\
\int \tan(x) \, dx = \left\{\begin{array}{}
t = \cos(x) \\
dt = -\sin(x)dx \\
\end{array}\right\} = -\int \frac{1}{t}dt = -\ln \left\lvert t \right\rvert + C \\
\int \frac{\tan(x)}{\cos^{2}(x)} \, dx = \int \frac{\sin(x)}{\cos^{3}(x)} \, dx = \left\{\begin{array}{}
t = \cos(x) \\
dt = -\sin(x)dx \\
\end{array}\right\} = -\int \frac{1}{t^{3}} \, dt = \frac{1}{2t^{2}} + C \\
\implies \int \tan^{3}(x) \, dx = \frac{1}{2\cos^{2}(x)} + \ln \left\lvert \cos(x) \right\rvert + C \\
}
$$
# 1b
$$
\displaylines{
\text{Determine whether } \int_{0}^{\infty} x\sin(e^{2x}) \, dx \text{ converges} \\
\\
\text{Solution:} \\
\int_{0}^{\infty} x\sin(e^{2x}) \, dx = \left\{\begin{array}{}
t = e^{2x} \\
x = \frac{\ln(t)}{2} \\
dt = 2e^{2x}dx \\
dx = \frac{dt}{2t} \\
x \to \infty \implies t = e^{2x} \to \infty \\
x = 0 \implies t = e^{0} = 1 \\
\end{array}\right\} = \frac{1}{4}\int_{1}^{\infty} \frac{\ln(t)}{t}\sin(t) \, dt \\
\int_{0}^{x} \sin(t) \, dt = -\cos(x) - 1 \text{ is bounded} \\
\frac{\ln(t)}{t} \text{ is monotonically decreasing to } 0 \\
\implies \text{By Dirichlet's test } \int_{0}^{\infty} x\sin(e^{2x}) \, dx \text{ converges} \\
}
$$
# 2a
$$
\displaylines{
\text{Let } f \text{ be a function defined on } I \\
\text{Prove or disprove: } f \text{ has a primitive} \implies f \text{ is integrable on } I \\
\\
\text{Disproof:} \\
\text{Let } F(x) = x^{2}\sin\left( \frac{1}{x^{2}} \right) \\
\implies F'(x) = 2x\sin\left( \frac{1}{x^{2}} \right) + x^{2}\left( \sin\left( \frac{1}{x^{2}} \right) \right)' = 2x\sin\left( \frac{1}{x^{2}} \right) - \frac{2}{x}\cos\left( \frac{1}{x^{2}} \right) \\
\text{Let } f(x) = \left\{\begin{array}{}
F'(x) & x \neq 0 \\
0 & x = 0 \\
\end{array}\right. \\
\text{Let } I = [-1, 1] \\
f \text{ has a primitive, but is not bounded at 0} \implies f \text{ is not integrable} \\
}
$$
# 2b
$$
\displaylines{
\text{Let } f \text{ be a function defined on } I \\
\text{Prove or disprove: } f \text{ is integrable} \implies f \text{ has a primitive} \\
\\
\text{Disproof:} \\
\text{Let } f(x) = \left\{\begin{array}{}
1 & x \in [0, 1] \\
0 & x \in (1, 2] \\
\end{array}\right. \\
f \text{ is bounded and has one discontinuity} \implies \text{It is integrable} \\
f \text{ has a jumo discontinuity} \implies f \text{ has no primitive by Darboux theorem} \\
}
$$
# 3a
$$
\displaylines{
\text{Prove or disprove: } f_{n}(x) = \sqrt[n]{ 1 + x^{n} } \text{ converges uniformly on } [0, \infty) \\
\\
\text{Proof?:} \\
\text{Let } x \leq 1 \implies \underbrace{ \sqrt[n]{ 1 } }_{ \to 1 } \leq f_{n}(x) \leq \underbrace{ \sqrt[n]{ 2 } }_{ \to 1 } \implies f_{n}(x) \to 1 \text{ for } x \in [0, 1] \\
\text{Let } x > 1 \implies x^{n} > 1 \\
\implies \underbrace{ \sqrt[n]{ x^{n} } }_{ \to x } \leq \sqrt[n]{ 1 + x^{n} } \leq \underbrace{ \sqrt[n]{ 2x^{n} } }_{ \to x } \\
\implies f_{n}(x) \to f(x) = \left\{\begin{array}{}
1 & x \in [0, 1] \\
x & x \in (1, \infty) \\
\end{array}\right. \\
d_{n} = \sup_{x \in [0, \infty)} \left\lvert f_{n}(x) - f(x) \right\rvert = \max\{\max_{x \in [0, 1]} \sqrt[n]{ 1 + x^{n} } - 1, \sup_{x \in (1, \infty)} \left\lvert \sqrt[n]{ 1 + x^{n} } - x \right\rvert\} \\
\max_{x \in [0, 1]} \sqrt[n]{ 1 + x^{n} } - 1 = \sqrt[n]{ 2 } - 1 \\
\sup_{x \in (1, \infty)} \left\lvert \sqrt[n]{ 1 + x^{n} } - x \right\rvert \\
\text{Let } t = \frac{1}{x^{n}} \\
x > 1 \implies 0 < t < 1 \\
\sqrt[n]{ 1 + t } = (1+t)^{1/n} \\
\implies 1 < (1+t)^{1/n} \leq 1 + \frac{t}{n} \\
\implies 0 < (1+t)^{1/n} - 1 \leq \frac{t}{n} \implies \left\lvert x\left( 1+\frac{1}{x^{n}} \right)^{1/n} - x \right\rvert \leq \frac{1}{x^{n}n} \\
\implies \left\lvert f_{n}(x) - x \right\rvert \leq \frac{1}{x^{n}n} \leq \frac{1}{n} \\
\implies \sup_{x \in (1, \infty)} \left\lvert \sqrt[n]{ 1 + x^{n} } - x \right\rvert\} \leq \frac{1}{n} \\
\implies d_{n} \leq \max\{\underbrace{ \sqrt[n]{ 2 } - 1 }_{ \to 1 - 1 = 0 }, \underbrace{ \frac{1}{n} }_{ \to 0 }\} \to 0 \\
\implies \boxed{ f_{n}(x) \rightrightarrows f(x) } \\
}
$$
# 3b
$$
\displaylines{
\text{Write down } \ln(13) \text{ as a series of rational numbers} \\
\\
\text{Solution:} \\
\text{Let } x \in (-1, 1) \\
\sum_{n=0}^{\infty} x^{n} = \frac{1}{1-x} \implies \sum_{n=0}^{\infty} \frac{x^{n+1}}{n+1} = -\ln \left\lvert 1 - x \right\rvert \\
\text{Let } x = \frac{12}{13} \\
\implies \sum_{n=0}^{\infty} \frac{12^{n+1}}{13^{n+1}(n+1)} = -\ln \left\lvert 1 - \frac{12}{13} \right\rvert = -\ln\left( \frac{1}{13} \right) = \ln(13) \\
}
$$
# 4
$$
\displaylines{
\sum_{n=0}^{\infty} \frac{1}{16^{n}(4n+1)} \\
\\
\text{Solution:} \\
x \in (-1, 1) \implies \frac{1}{1-x} = \sum_{n=0}^{\infty} x^{n} \\
\implies \frac{1}{1-x^{4}} = \sum_{n=0}^{\infty} x^{4n} \implies \sum_{n=0}^{\infty} \int_{0}^{x} t^{4n} \, dt = \sum_{n=0}^{\infty} \frac{x^{4n+1}}{4n+1} = \int_{0}^{x} \frac{1}{1-t^{4}} \, dt = \\
= \int_{0}^{x} \frac{1}{(1-t)(1+t)(1+t^{2})} \, dt \\
\frac{A}{1-x} + \frac{B}{1+x} + \frac{C}{1+x^{2}} \\
A(1+x)(1+x^{2}) + B(1-x)(1+x^{2}) + C(1-x)(1+x) = 1 \\
\implies \left\{\begin{array}{}
A + B + C = 1 \\
A - B = 0 \\
A + B - C = 0 \\
A - B = 0 \\
\end{array}\right. \implies \left\{\begin{array}{}
A = \frac{1}{4} \\
B = \frac{1}{4} \\
C = \frac{1}{2} \\
\end{array}\right. \\
\implies \sum_{n=0}^{\infty} \frac{x^{4n+1}}{4n+1} = \frac{1}{4}\int_{0}^{x} \frac{1}{1-t} + \frac{1}{1+t} + \frac{2}{(1+t^{2})} \, dt = \\
= \frac{1}{4}(-\ln \left\lvert 1-x \right\rvert + \ln \left\lvert 1+x \right\rvert + 2\arctan(x)) \\
\text{Let } x = \frac{1}{2} \\
\implies \sum_{n=0}^{\infty} \frac{1}{2 \cdot 16^{n}(4n+1)} = \frac{1}{4}\left( -\ln \frac{1}{2} + \ln \frac{3}{2} + 2\arctan\left( \frac{1}{2} \right) \right) \\
\implies \sum_{n=0}^{\infty} \frac{1}{16^{n}(4n+1)} = \frac{1}{2}\left( \ln 3 + 2\arctan \frac{1}{2} \right) \\
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
