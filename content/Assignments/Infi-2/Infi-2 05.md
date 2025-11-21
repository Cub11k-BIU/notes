---
{"publish":true,"created":"29/04/25, 16:04","modified":"2025-11-21T21:10:02.436+02:00","tags":["Academia","Assignment","Infi-2"],"cssclasses":""}
---

# 1a
$$
\displaylines{
\int_{-\infty}^{\infty} \frac{e^{x}}{1+e^{2x}} \, dx \\
\\
\int_{-\infty}^{\infty} \frac{e^{x}}{1+e^{2x}} \, dx = \int_{-\infty}^{0} \frac{e^{x}}{1+e^{2x}} \, dx + \int_{0}^{\infty} \frac{e^{x}}{1+e^{2x}} \, dx \\
\int_{-a}^{0} \frac{e^{x}}{1+e^{2x}} \, dx = \left\{\begin{array}{}
t = e^{x} \\
dt = e^{x}dx \\
x = 0 \implies t = 1 \\
x = -a \implies t = e^{-a} \\
\end{array}\right\} = \int_{e^{-a}}^{1} \frac{1}{1+t^{2}} \, dt = \arctan(t)\Bigg|^{t=1}_{t=e^{-a}} = \\
= \frac{\pi}{4} - \arctan(e^{-a}) \\
\int_{0}^{a} \frac{e^{x}}{1+e^{2x}} \, dx = \left\{\begin{array}{}
t = e^{x} \\
dt = e^{x}dx \\
x = a \implies t = e^{a} \\
x = 0 \implies t = 1 \\
\end{array}\right\} = \int_{1}^{e^{a}} \frac{1}{1+t^{2}} \, dt = \arctan(t)\Bigg|^{t=e^{a}}_{t=1} = \\
= \arctan(e^{a}) - \frac{\pi}{4} \\
\\
\int_{-\infty}^{0} \frac{e^{x}}{1+e^{2x}} \, dx = \lim_{ a \to \infty } \int_{-a}^{0} \frac{e^{x}}{1+e^{2x}} \, dx = \lim_{ a \to \infty } \left( \frac{\pi}{4} - \underbrace{ \arctan(\underbrace{ e^{-a} }_{ \to 0 }) }_{ \to 0 } \right) = \frac{\pi}{4} \\
\int_{0}^{\infty} \frac{e^{x}}{1+e^{2x}} \, dx = \lim_{ a \to \infty } \int_{0}^{a} \frac{e^{x}}{1+e^{2x}} \, dx = \lim_{ a \to \infty } \left( \underbrace{ \arctan(\underbrace{ e^{a} }_{ \to \infty }) }_{ \to \frac{\pi}{2} } - \frac{\pi}{4} \right) = \frac{\pi}{4} \\
\boxed{ \int_{-\infty}^{\infty} \frac{e^{x}}{1+e^{2x}} \, dx = \int_{-\infty}^{0} \frac{e^{x}}{1+e^{2x}} \, dx + \int_{0}^{\infty} \frac{e^{x}}{1+e^{2x}} \, dx = \frac{\pi}{4} + \frac{\pi}{4} = \frac{\pi}{2} } \\
}
$$
# 1b
$$
\displaylines{
\int_{0}^{\infty} xe^{-x} \, dx \\
\\
\int_{0}^{\infty} xe^{-x} \, dx = \lim_{ a \to \infty } \int_{0}^{a} xe^{-x} \, dx \\
\int_{0}^{a} xe^{-x} \, dx = -xe^{-x}\Bigg|^{x=a}_{x=0} + \int_{0}^{a} e^{-x} \, dx = -ae^{-a} - e^{-x}\Bigg|^{x=a}_{x=0} = \\
= -ae^{-a} - e^{-a} + 1 = (a-1)e^{-a} + 1 \\
\lim_{ a \to \infty } \int_{0}^{a} xe^{-x} \, dx = \lim_{ a \to \infty } \underbrace{ \frac{a-1}{e^{a}} }_{ \implies 0 } + 1 = 1 \\
\boxed{ \int_{0}^{\infty} xe^{-x} \, dx = 1 } \\
}
$$
# 1c
$$
\displaylines{
\int_{-\infty}^{\infty} \cos(2x) \, dx \\
\\
\int_{-\infty}^{\infty} \cos(2x) \, dx = \int_{-\infty}^{0} \cos(2x) \, dx + \int_{0}^{\infty} \cos(2x) \, dx \\
\int_{-a}^{0} \cos(2x) \, dx = \frac{\sin(2x)}{2}\Bigg|^{x=0}_{x=-a} = -\frac{\sin(-2a)}{2} \\
\int_{0}^{a} \cos(2x) \, dx = \frac{\sin(2x)}{2}\Bigg|^{x=a}_{x=0} = \frac{\sin(2a)}{2} \\
\int_{-\infty}^{0} \cos(2x) \, dx = \lim_{ a \to \infty } \int_{-a}^{0} \cos(2x) \, dx = \lim_{ a \to \infty } -\frac{\sin(-2a)}{2} - \text{Limit does not exist} \\
\int_{0}^{a} \cos(2x) \, dx = \lim_{ a \to \infty } \int_{0}^{a} \cos(2x) \, dx = \lim_{ a \to \infty } \frac{\sin(2a)}{2} - \text{Limit does not exist} \\
\implies \boxed{ \int_{-\infty}^{\infty} \cos(2x) \, dx \text{ diverges} } \\
}
$$
# 1d
$$
\displaylines{
\int_{3}^{\infty} \frac{x+1}{x^{2}(1-x)} \, dx \\
\\
\int_{3}^{\infty} \frac{x+1}{x^{2}(1-x)} \, dx = \lim_{ a \to \infty } \int_{3}^{a} \frac{x+1}{x^{2}(1-x)} \, dx \\
\frac{x+1}{x^{2}(1-x)} = \frac{A}{x} + \frac{B}{x^{2}} + \frac{C}{1-x} \\
x+1 = Ax(1-x) + B(1-x) + Cx^{2} \\
\implies \left\{\begin{array}{}
-A + C = 0 \\
A - B = 1 \\
B = 1 \\
\end{array}\right. \implies \left\{\begin{array}{}
A = 2 \\
B = 1 \\
C = 2 \\
\end{array}\right. \\
\implies \int_{3}^{a} \frac{x+1}{x^{2}(1-x)} \, dx = \int_{3}^{a} \frac{2}{x} + \frac{1}{x^{2}} - \frac{2}{x-1} \, dx = \\
= \left( 2\ln \left\lvert x \right\rvert - \frac{1}{x} - 2\ln \left\lvert x-1 \right\rvert  \right) \Bigg|^{x=a}_{x=3} = \\
= 2\ln \left\lvert a \right\rvert - \frac{1}{a} - 2\ln \left\lvert a-1 \right\rvert - 2\ln(3) + \frac{1}{3} + 2\ln(2) \\
\implies \int_{3}^{\infty} \frac{x+1}{x^{2}(1-x)} \, dx = \lim_{ a \to \infty } \int_{3}^{a} \frac{x+1}{x^{2}(1-x)} \, dx = \\
= \lim_{ a \to \infty } \left( 2\ln \left\lvert a \right\rvert - \frac{1}{a} - 2\ln \left\lvert a-1 \right\rvert - 2\ln(3) + \frac{1}{3} + 2\ln(2) \right) = \\
= \frac{1}{3} + 2\ln(2) - 2\ln(3) + \lim_{ a \to \infty } \left( 2\ln(a)-2\ln(a-1) - \underbrace{ \frac{1}{a} }_{ \to 0 } \right) = \\
= \frac{1}{3} + 2\ln(2) - 2\ln(3) + 2\lim_{ a \to \infty } \underbrace{ \ln\left( \underbrace{ \frac{a}{a-1} }_{ \to 1^{+} } \right) }_{ \to 0 } = \boxed{ \frac{1}{3} + 2\ln(2) - 2\ln(3) } \\
}
$$
# 1e
$$
\displaylines{
\int_{4}^{\infty} \ln\left( \frac{1}{x} \right) \, dx \\
\\
\int_{4}^{\infty} \ln\left( \frac{1}{x} \right) \, dx = \lim_{ a \to \infty } \int_{4}^{a} \ln\left( \frac{1}{x} \right) \, dx \\
\int_{4}^{a} \ln\left( \frac{1}{x} \right) \, dx = \int_{4}^{a} -\ln(x) \, dx = -(x\ln(x)-x)\Bigg|^{x=a}_{x=4} = \\
= a - a\ln(a) - 4 + 4\ln(4) \\
\implies \int_{4}^{\infty} \ln\left( \frac{1}{x} \right) \, dx = \lim_{ a \to \infty } \int_{4}^{a} \ln\left( \frac{1}{x} \right) \, dx = \lim_{ a \to \infty } (a(1-\ln(a)) - 4 + 4\ln(4)) = \\
= \lim_{ a \to \infty } \underbrace{ a }_{ \to \infty }(\underbrace{ 1-\ln(a) }_{ \to \infty }) - 4 + \ln(4) = -\infty - 4 + \ln(4) = -\infty \\
\implies \boxed{ \int_{4}^{\infty} \ln\left( \frac{1}{x} \right) \, dx \text{ diverges} } \\
}
$$
# 1f
$$
\displaylines{
\int_{2}^{\infty} \frac{x^{3}}{\sqrt{ x^{4}-1 }} \, dx \\
\\
\int_{2}^{\infty} \frac{x^{3}}{\sqrt{ x^{4}-1 }} \, dx = \lim_{ a \to \infty } \int_{2}^{a} \frac{x^{3}}{\sqrt{ x^{4}-1 }} \, dx \\
\int_{2}^{a} \frac{x^{3}}{\sqrt{ x^{4}-1 }} \, dx = \left\{\begin{array}{}
t = x^{4} \\
dt = 4x^{3}dx \\
x = a \implies t = a^{4} \\
x = 2 \implies t = 16 \\
\end{array}\right\} = \frac{1}{4} \int_{16}^{a^{4}} \frac{1}{\sqrt{ t-1 }} \, dt = \\
= \frac{1}{2} \sqrt{ t-1 } \Bigg|^{t=a^{4}}_{t=16} = \frac{\sqrt{ a^{4}-1 }}{2} - \frac{\sqrt{ 15 }}{2} \\
\implies \int_{2}^{\infty} \frac{x^{3}}{\sqrt{ x^{4}-1 }} \, dx = \lim_{ a \to \infty } \int_{2}^{a} \frac{x^{3}}{\sqrt{ x^{4}-1 }} \, dx = \\
= \lim_{ a \to \infty } \frac{\sqrt{ a^{4}-1 }}{2} - \frac{\sqrt{ 15 }}{2} = \infty \\
\implies \boxed{ \int_{2}^{\infty} \frac{x^{3}}{\sqrt{ x^{4}-1 }} \, dx \text{ diverges} } \\
}
$$
# 2a
$$
\displaylines{
\int_{1}^{\infty} \sin\left( \frac{1}{x} \right) \, dx \\
\\
x \geq 1 \implies \sin\left( \frac{1}{x} \right) \geq 0 \\
\lim_{ x \to \infty } \frac{\sin\left( \frac{1}{x} \right)}{\frac{1}{x}} = \lim_{ t \to 0 } \frac{\sin(t)}{t} = 1 \\
\implies \text{By the limit comparison test: } \int_{1}^{\infty} \sin\left( \frac{1}{x} \right) \, dx \text{ converges} \iff \int_{1}^{\infty} \frac{1}{x} \, dx \text{ converges} \\
\frac{1}{x^{p}} = \frac{1}{x} \implies p = 1 \implies \int_{1}^{\infty} \frac{1}{x} \, dx \text{ diverges} \implies \boxed{ \int_{1}^{\infty} \sin\left( \frac{1}{x} \right) \, dx \text{ diverges} } \\
}
$$
# 2b
$$
\displaylines{
\int_{1}^{\infty} \frac{3x^{3}-5x+2\sqrt{ x }}{x^{6}+x^{2}+1} \, dx \\
\\
x \geq 1 \implies 3x^{3} - 5x + 2\sqrt{ x } \overset{ t = \sqrt{ x } }{ = } 3t^{6} - 5t^{2} + 2t = t(3t^{5}-5t+2) = \\
= t(t-1)(\underbrace{ 3t^{4}+3t^{3}+3t^{2}+3t }_{ \geq 12 }-2) \geq 0 \\
\implies \frac{3x^{3}-5x+2\sqrt{ x }}{x^{6}+x^{2}+1} \geq 0 \\
\lim_{ x \to \infty } \frac{\frac{3x^{3}-5x+2\sqrt{ x }}{x^{6}+x^{2}+1}}{\frac{1}{x^{3}}} = \lim_{ x \to \infty } \frac{3x^{6}-5x^{4}+2x^{7/2}}{x^{6}+x^{2}+1} = \lim_{ x \to \infty } \frac{3 - \frac{5}{x^{2}} + \frac{2}{x^{5/2}}}{1 + \frac{1}{x^{4}} + \frac{1}{x^{6}}} = 3 \\
\implies \text{By the limit comparison test:} \\
\int_{1}^{\infty} \frac{3x^{3}-5x+2\sqrt{ x }}{x^{6}+x^{2}+1} \, dx \text{ converges} \iff \int_{1}^{\infty} \frac{1}{x^{3}} \, dx \text{ converges} \\
\frac{1}{x^{p}} = \frac{1}{x^{3}} \implies p = 3 \implies \int_{1}^{\infty} \frac{1}{x^{3}} \, dx \text{ converges} \\
\implies \boxed{ \int_{1}^{\infty} \frac{3x^{3}-5x+2\sqrt{ x }}{x^{6}+x^{2}+1} \, dx \text{ converges} }
}
$$
# 2c
$$
\displaylines{
\int_{1}^{\infty} \frac{\arctan(x)\sin(2x)}{x^{2}} \, dx \\
\\
\left\lvert \arctan(x)\sin(2x) \right\rvert \leq \frac{\pi}{2} \\
\implies 0 \leq \left\lvert \frac{\arctan(x)\sin(2x)}{x^{2}} \right\rvert \leq \frac{\pi}{2} \cdot \frac{1}{x^{2}} \\
\implies \text{By the comparison test:} \\
\int_{1}^{\infty} \frac{1}{x^{2}} \, dx \text{ converges} \implies \int_{1}^{\infty} \left\lvert \frac{\arctan(x)\sin(2x)}{x^{2}} \right\rvert  \, dx \text{ converges} \\
\frac{1}{x^{p}} = \frac{1}{x^{2}} \implies p = 2 \implies \int_{1}^{\infty} \frac{1}{x^{2}} \, dx \text{ converges} \\ 
\implies \int_{1}^{\infty} \left\lvert \frac{\arctan(x)\sin(2x)}{x^{2}} \right\rvert  \, dx \text{ converges} \implies \boxed{ \int_{1}^{\infty} \frac{\arctan(x)\sin(2x)}{x^{2}} \, dx \text{ converges} } \\
}
$$
# 2d
$$
\displaylines{
\int_{2}^{\infty} \frac{x+7}{\sqrt{ x^{5}-3x }} \, dx \\
\\
x \geq 2 \implies x + 7 \geq 9 > 0 \\
x \geq 2 \implies \sqrt{ x^{5} - 3x } = \sqrt{ x(\underbrace{ x^{4}-3 }_{ \geq 13 }) } > 0 \\
\lim_{ x \to \infty } \frac{\frac{x+7}{\sqrt{ x^{5}-3x }}}{\frac{1}{x^{3/2}}} = \lim_{ x \to \infty } \frac{x^{5/2}+7x^{3/2}}{\sqrt{ x^{5} - 3x }} = \lim_{ x \to \infty } \frac{1 + \frac{7}{x}}{\sqrt{ 1 - \frac{3}{x^{4}} }} = 1 \\
\implies \int_{2}^{\infty} \frac{x+7}{\sqrt{ x^{5}-3x }} \, dx \text{ converges} \iff \int_{2}^{\infty} \frac{1}{x^{3/2}} \, dx \text{ converges} \\
\frac{1}{x^{p}} = \frac{1}{x^{3/2}} \implies p = \frac{3}{2} \implies \int_{1}^{\infty} \frac{1}{x^{3/2}} \, dx \text{ converges} \implies \boxed{ \int_{2}^{\infty} \frac{x+7}{\sqrt{ x^{5}-3x }} \, dx \text{ converges} } \\
}
$$
# 2e
$$
\displaylines{
\int_{2}^{\infty} \frac{\sin^{3}(x)}{x^{3}} \, dx \\
\\
0 \leq \left\lvert \frac{\sin^{3}(x)}{x^{3}} \right\rvert \leq \frac{1}{x^{3}} \\
\int_{2}^{\infty} \frac{1}{x^{3}} \, dx \text{ converges} \implies \int_{2}^{\infty} \left\lvert \frac{\sin^{3}(x)}{x^{3}} \right\rvert \, dx \text{ converges} \\
\implies \boxed{ \int_{2}^{\infty} \frac{\sin^{3}(x)}{x^{3}} \, dx \text{ converges} } \\
}
$$
# 2f
$$
\displaylines{
\int_{1}^{\infty} \ln(1+e^{x}) - x \, dx \\
\\
\ln(1+e^{x}) - x = \ln(1 + e^{x}) - \ln(e^{x}) = \ln\left( \frac{1+e^{x}}{e^{x}} \right) = \ln(1 + e^{-x}) > 0 \\
\lim_{ x \to \infty } \frac{\ln(1 + e^{-x})}{e^{-x}} \overset{ t = e^{-x} }{ = } \lim_{ t \to 0 } \frac{\ln(1 + t)}{t} = 1 \\
\implies \int_{1}^{\infty} \ln(1+e^{x}) - x \, dx \text{ converges} \iff \int_{1}^{\infty} e^{-x} \, dx \text{ converges} \\
\int_{1}^{\infty} e^{-x} \, dx = \lim_{ a \to \infty } \int_{1}^{a} e^{-x} \, dx = \lim_{ a \to \infty } -e^{-x}\Bigg|^{x=a}_{x=1} = \lim_{ a \to \infty } (e^{-1} - e^{-a}) = e^{-1} \\
\implies \int_{1}^{\infty} e^{-x} \, dx \text{ converges} \implies \boxed{ \int_{1}^{\infty} \ln(1+e^{x}) - x \, dx \text{ converges} } \\
}
$$
# 3a
$$
\displaylines{
\int_{1}^{\infty} \frac{\sin(7x)\cos(6x+5)}{x\sqrt[3]{ x }} \, dx \\
\\
0 \leq \left\lvert \frac{\sin(7x)\cos(6x+5)}{x\sqrt[3]{ x }} \right\rvert \leq \frac{1}{x\sqrt[3]{ x }} \\
p = \frac{4}{3} \implies \int_{1}^{\infty} \frac{1}{x\sqrt[3]{ x }} \, dx \text{ converges} \\
\implies \text{By the comparison test } \boxed{ \int_{1}^{\infty} \frac{\sin(7x)\cos(6x+5)}{x\sqrt[3]{ x }} \, dx \text{ converges absolutely} } \\
}
$$
# 3b
$$
\displaylines{
\int_{1}^{\infty} \frac{\cos(x)}{\sqrt{ x }} \, dx \\
\\
\frac{1}{\sqrt{ x }}, -\frac{1}{2\sqrt{ x^{3} }} \text{ are continuous} \\
\frac{1}{\sqrt{ x }} \text{ ismonotonically decreasing and } \lim_{ x \to \infty } \frac{1}{\sqrt{ x }} = 0 \\
\cos(x) \text{ is continuous and } \int_{1}^{x} \cos(t) \, dt = \sin(x)-\sin(1) \text{ is bounded} \\
\implies \text{By the Dirichlet's test } \int_{1}^{\infty} \frac{\cos(x)}{\sqrt{ x }} \, dx \text{ converges} \\
\\
\left\lvert \frac{\cos(x)}{\sqrt{ x }} \right\rvert \geq \frac{\cos^{2}(x)}{\sqrt{ x }} = \frac{\cos(2x)}{2\sqrt{ x }} + \frac{1}{2\sqrt{ x }} \\
\int_{1}^{\infty} \frac{\cos(2x)}{2\sqrt{ x }} \, dx + \int_{1}^{\infty} 
\frac{1}{\sqrt{ x }} \, dx \\
\\
\text{Let } f(x) = \frac{1}{2\sqrt{ x }}, f'(x) = -\frac{1}{4\sqrt{ x^{3} }} \\
f(x), f'(x) \text{ are continuous} \\
f(x) \text{ is monotonically decreasing, } \lim_{ x \to \infty } f(x) = 0 \\
\text{Let } g(x) = \cos(2x) \\
g \text{ is continuous} \\
G(x) = \int_{1}^{\infty} \cos(2t) \, dt = \frac{\sin(2x)-\sin(2)}{2} \text{ is bounded} \\
\implies \text{By the Dirichlet's test } \int_{1}^{\infty} \frac{\cos(2x)}{2\sqrt{ x }} \, dx \text{ converges} \\
\frac{1}{2} \cdot \frac{1}{\sqrt{ x }} \implies p = \frac{1}{2} \implies \int_{1}^{\infty} \frac{1}{\sqrt{ x }} \, dx \text{ doverges} \\
\implies \int_{1}^{\infty} \left\lvert \frac{\cos(x)}{\sqrt{ x }} \right\rvert  \, dx \text{ diverges} \\
\implies \boxed{ \int_{1}^{\infty} \frac{\cos(x)}{\sqrt{ x }} \, dx \text{ converges conditionally} } \\
}
$$
# 3c
$$
\displaylines{
\int_{1}^{\infty} \frac{1+\sin(2x)}{x+\sqrt{ x }} \, dx \\
\\
\int_{1}^{\infty} \frac{1+\sin(2x)}{x+\sqrt{ x }} \, dx = \int_{1}^{\infty} \frac{1}{x+\sqrt{ x }} \, dx + \int_{1}^{\infty} \frac{\sin(2x)}{x+\sqrt{ x }} \, dx \\
\lim_{ x \to \infty } \frac{\frac{1}{x+\sqrt{ x }}}{\frac{1}{x}} = 1 \\
p = 1 \implies \int_{1}^{\infty} \frac{1}{x} \, dx \text{ diverges} \implies \int_{1}^{\infty} \frac{1}{x+\sqrt{ x }} \, dx \text{ diverges} \\
\\
\text{Let } f(x) = \frac{1}{x+\sqrt{ x }}, f'(x) = \frac{\left( -1-\frac{1}{2\sqrt{ x }} \right)}{(x+\sqrt{ x })^{2}} \\
f(x), f'(x) \text{ are continuous} \\
f(x) \text{ is monotonically decreasing and } \lim_{ x \to \infty } f(x) = 0 \\
\text{Let } g(x) = \sin(2x) \\
G(x) = \int_{1}^{\infty} \sin(2x) \, dx = \frac{\cos(2)-\cos(2x)}{2} \text{ is bounded} \\
\implies \text{By the dirichlet's test } \int_{1}^{\infty} \frac{\sin(2x)}{x+\sqrt{ x }} \, dx \text{ converges} \\
\implies \boxed{ \int_{1}^{\infty} \frac{1+\sin(2x)}{x+\sqrt{ x }} \, dx \text{ diverges} } \\
}
$$
# 3d
$$
\displaylines{
\int_{1}^{\infty} \frac{(-1)^{\lfloor x \rfloor }}{\lfloor x \rfloor } \, dx \\
\\
\left\lvert \frac{(-1)^{\lfloor x \rfloor }}{\lfloor x \rfloor } \right\rvert = \frac{1}{\lfloor x \rfloor } \\
\int_{1}^{\infty} \frac{1}{\lfloor x \rfloor } \, dx = \sum_{n=1}^{\infty} \int_{n}^{n+1} \frac{1}{n} \, dx = \sum_{n=1}^{\infty} \frac{1}{n} \text{ which diverges} \\
\\
\int_{1}^{\infty} \frac{(-1)^{\lfloor x \rfloor }}{\lfloor x \rfloor } \, dx = \sum_{n=1}^{\infty} \int_{n}^{n+1} \frac{(-1)^{n}}{n} \, dx = \\
= \sum_{n=1}^{\infty} \frac{(-1)^{n}(n+1 - n)}{n} = \sum_{n=1}^{\infty} \frac{(-1)^{n}}{n} \\
\sum_{n=1}^{\infty} \frac{(-1)^{n}}{n} \text{ converges by the Leibniz test} \\
\implies \boxed{ \int_{1}^{\infty} \frac{(-1)^{\lfloor x \rfloor }}{\lfloor x \rfloor } \, dx \text{ converges conditionally} } \\
}
$$
