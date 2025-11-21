---
{"publish":true,"created":"27/01/25, 16:01","modified":"2025-11-21T21:10:02.348+02:00","tags":["Academia","Assignment","Infi-1"],"cssclasses":""}
---

# 1a
$$
\displaylines{
\text{Prove by definition: } \lim_{ x \to 4 } \frac{x^{3}-3x-\sqrt{ x }+1}{2x^{2}+\sqrt{ x }+17} = 1 \\
\\
\text{Proof:} \\
\text{Let } x_{n} \neq 4, x_{n} \to 4 \\
\text{Then } f(x_{n}) = \frac{x_{n}^{3} - 3x_{n} - \sqrt{ x_{n} } + 1}{2x_{n}^{2} + \sqrt{ x_{n} } + 17} \\
\lim_{ n \to \infty } \underbrace{ 2x_{n}^{2} }_{ \to 2\cdot 4^{2} = 32 } + \underbrace{ \sqrt{ x_{n} } }_{ \to \sqrt{ 4 } = 2 } + 17 = 51 \neq 0 \\
\implies \lim_{ n \to \infty } \frac{x_{n}^{3} - 3x_{n} - \sqrt{ x_{n} } + 1}{2x_{n}^{2} + \sqrt{ x_{n} } + 17} = \frac{\lim_{ n \to \infty } x_{n}^{3}-3x_{n}-\sqrt{ x_{n} }+1}{\lim_{ n \to \infty } 2x_{n}^{2} + \sqrt{ x_{n} } + 17} = \\
= \frac{1}{51} \cdot \lim_{ n \to \infty } \underbrace{ x_{n}^{3} }_{ \to 4^{3} = 64 }-\underbrace{ 3x_{n} }_{ \to 3 \cdot 4 = 12 }-\underbrace{ \sqrt{ x_{n} } }_{ \to \sqrt{ 4 }=2 }+1 = \frac{1}{51} \cdot 51 = 1 \\
\implies \boxed{ \lim_{ x \to 4 } \frac{x^{3}-3x-\sqrt{ x }+1}{2x^{2}+\sqrt{ x }+17} = 1 } \\
}
$$
# 1b
$$
\displaylines{
\text{Let } f(x) = \begin{cases}
x^{2}+8 & x < 2 \\
8x^{2}+2 & x \geq 2 \\
\end{cases} \\
\text{Prove by definition: } \not\exists \lim_{ x \to 2 } f(x) \\
\\
\text{Proof:} \\
\text{Let } x_{n} < 2, x_{n} \to 2 \\
\lim_{ n \to \infty } f(x_{n}) \underbrace{ = }_{ x_{n} < 2 } \lim_{ n \to \infty } \underbrace{ x_{n}^{2} }_{ \to 2^{2} = 4 } + 8 = 12 \\
\text{Let } y_{n} > 2, y_{n} \to 2 \\
\lim_{ n \to \infty } f(y_{n}) \underbrace{ = }_{ y_{n} > 2 } \lim_{ n \to \infty } \underbrace{ 8y_{n}^{2} }_{ \to 8 \cdot 2^{2} = 32 } + 2 = 34 \\
x_{n} \to 2 \implies f(x_{n}) \to 12 \\
y_{n} \to 2 \implies f(y_{n}) \to 34 \\
\implies \text{By definition: } \boxed{ \not\exists \lim_{ x \to 2 } f(x) } \\
}
$$
# 1c
$$
\displaylines{
\text{Prove by definition: } \not\exists \lim_{ x \to 1 } \sin\left( \frac{1}{(x-1)^{2}} \right) \\
\\
\text{Proof:} \\
\text{Let } x_{n} \neq 1, x_{n} \to 1 \\
x_{n} \to 1 \implies x_{n} - 1 \to 0 \implies (x_{n}-1)^{2} \to 0^{+} \\
\implies \frac{1}{(x_{n}-1)^{2}} = \infty \implies \not\exists \lim_{ n \to \infty } \sin\left( \frac{1}{(x_{n}-1)^{2}} \right) \\
\implies \text{By definition: } \boxed{ \not\exists \lim_{ x \to 1 } \sin\left( \frac{1}{(x-1)^{2}} \right) } \\
}
$$
---

# 2a
$$
\displaylines{
\lim_{ x \to 0 } \frac{\sqrt{ 36-x }-6}{16x} \\
\\
\text{Solution:} \\
\lim_{ x \to 0 } \frac{\sqrt{ 36-x }-6}{16x} = \lim_{ x \to 0 } \frac{(\sqrt{ 36-x }-6)(\sqrt{ 36 - x }+6)}{16x(\sqrt{ 36-x }+6)} = \\
= \lim_{ x \to 0 } \frac{36- x - 36}{16x(\sqrt{ 36-x }+6)} = \lim_{ x \to 0 } \frac{-1}{16(\underbrace{ \sqrt{ 36-x } }_{ \to \sqrt{ 36 }=6 }+6)} = \frac{-1}{16 \cdot 12} = \frac{-1}{192} \\
\implies \boxed{ \lim_{ x \to 0 } \frac{\sqrt{ 36-x }-6}{16x} = \frac{-1}{192} } \\
}
$$
# 2b
$$
\displaylines{
\lim_{ x \to 8 } \frac{9-x}{4-\sqrt[3]{ x }} \\
\\
\text{Solution:} \\
\lim_{ x \to 8 } 4-\underbrace{ \sqrt[3]{ x } }_{ \to 2 } = 2 \neq 0 \\
\implies \lim_{ x \to 8 } \frac{9-x}{4-\sqrt[3]{ x }} = \frac{\lim_{ x \to 8 } 9-x}{\lim_{ x \to 8 } 4-\sqrt[3]{ x }} = \frac{1}{2} \cdot \lim_{ x \to 8 } 9 - x = \frac{1}{2} \\
\implies \boxed{ \lim_{ x \to 8 } \frac{9-x}{4-\sqrt[3]{ x }} = \frac{1}{2} } \\
}
$$
# 2c
$$
\displaylines{
\lim_{ x \to \infty } x^{1/x} \\
\\
\text{Solution:} \\
\lim_{ x \to \infty } x^{1/x} = \lim_{ x \to \infty } e^{\ln(x)/x} \\
\lim_{ x \to \infty } \frac{\ln(x)}{x} = 0 \implies \lim_{ x \to \infty } e^{\ln(x)/x} = e^{0} = 1 \\
\implies \boxed{ \lim_{ x \to \infty } x^{1/x} = 1 } \\
}
$$
# 2d
$$
\displaylines{
\lim_{ x \to 0 } \frac{\sqrt{ 36+x }+\sqrt{ 9+x }+\sqrt{ 4+x }}{x^{2} + x^{4}} \\
\\
\text{Solution:} \\
x \to 0 \implies x^{2} + x^{4} > 0, x^{2} + x^{4} \to 0^{+} \\
x \to 0 \implies \sqrt{ 36+x } \to \sqrt{ 36 } = 6 \\
x \to 0 \implies \sqrt{ 9+x } \to \sqrt{ 9 } = 3 \\
x \to 0 \implies \sqrt{ 4+x } \to \sqrt{ 4 } = 2 \\
\implies \lim_{ x \to 0 } \sqrt{ 36+x }+\sqrt{ 9+x }+\sqrt{ 4+x } = 6+3+2 = 11 \\
\implies \boxed{ \lim_{ x \to 0 } \frac{\sqrt{ 36+x }+\sqrt{ 9+x }+\sqrt{ 4+x }}{x^{2} + x^{4}} = \infty } \\
}
$$
# 2e
$$
\displaylines{
\lim_{ x \to \frac{\pi}{2}^{+} } \frac{\tan x}{\tan x + 2^{\tan x}} \\
\\
\text{Solution:} \\
\text{Let } t = -\tan x \\
x \to \frac{\pi}{2}^{+} \implies t \to \infty \\
\lim_{ t \to \infty } \frac{-t}{-t+2^{-t}} = \lim_{ t \to \infty } \frac{t}{t-2^{-t}} = \lim_{ t \to \infty } \frac{1}{1-\frac{2^{-t}}{t}} \\
\lim_{ t \to \infty } \frac{\overbrace{ 2^{-t} }^{ \to 0^{+} }}{\underbrace{ t }_{ \to \infty }} = 0 \\
\implies \lim_{ t \to \infty } \frac{1}{1-\underbrace{ \frac{2^{-t}}{t} }_{ \to 0 }} = 1 \\
\implies \boxed{ \lim_{ x \to \frac{\pi}{2}^{+} } \frac{\tan x}{\tan x + 2^{\tan x}} = 1 } \\
}
$$
# 2f
$$
\displaylines{
\lim_{ x \to 3 } \frac{\sin(x-3)}{\sin(9x^{2}-27x)} \\
\\
\text{Solution:} \\
\lim_{ x \to 3 } \frac{\sin(x-3)}{\sin(9x^{2}-27x)} = \lim_{ x \to 3 } \frac{\overbrace{ \frac{\sin(x-3)}{x-3} }^{ \to 1 }(x-3)}{(9x^{2}-27x) \underbrace{ \frac{\sin(9x^{2}-27x)}{9x^{2}-27x} }_{ \to 1 }} = \\
= \lim_{ x \to 3 } \frac{x-3}{9x^{2}-27x} = \lim_{ x \to 3 } \frac{1}{9x} = \frac{1}{27} \\
\implies \boxed{ \lim_{ x \to 3 } \frac{\sin(x-3)}{\sin(9x^{2}-27x)} = \frac{1}{27} } \\
}
$$
# 2g
$$
\displaylines{
\lim_{ x \to 0 } \frac{x^{8}e^{\sin(65x)}(1-\cos(x^{2}))}{7\sin(x^{6})} \\
\text{Solution:} \\
\lim_{ x \to 0 } \frac{x^{8}e^{\sin(65x)}(1-\cos(x^{2}))}{7\sin(x^{6})} = \lim_{ x \to 0 } \frac{x^{8}e^{\sin(65x)}(1-\cos(x^{2}))}{7x^{6}\underbrace{ \frac{\sin(x^{6})}{x^{6}} }_{ \to 1 }} = \\
= \frac{1}{7} \lim_{ x \to 0 } x^{2}e^{\sin(65x)}(1-\cos(x^{2})) \\
\lim_{ x \to 0 } \underbrace{ x^{2} }_{ \to 0 }e^{\overbrace{ \sin(65x) }^{ \to 0 }}\underbrace{ (1-\underbrace{ \cos(x^{2}) }_{ \to 1 }) }_{ \to 0 } = 0 \cdot e^{0} \cdot 0 = 0 \\
\implies \boxed{ \lim_{ x \to 0 } \frac{x^{8}e^{\sin(65x)}(1-\cos(x^{2}))}{7\sin(x^{6})} = \frac{1}{7} \cdot 0 = 0 } \\
}
$$
# 2h
$$
\displaylines{
\lim_{ x \to 0 } (\cos x)^{1/x} \\
\\
\text{Solution:} \\
\lim_{ x \to 0 } (\cos x)^{1/x} = \lim_{ x \to 0 } e^{\ln(\cos x)/x} \\
\lim_{ x \to 0 } \frac{\ln(\cos x)}{x} = \lim_{ x \to 0 } \underbrace{ \frac{\ln(1 + (\cos x - 1))}{\cos x - 1} }_{ \to 1 } \cdot \frac{\cos x - 1}{x} = \lim_{ x \to 0 } \frac{\cos x - 1}{x} = \\
= - \lim_{ x \to 0 } \frac{1-\cos x}{x} = -0 = 0 \\
\implies \lim_{ x \to 0 } e^{\ln(\cos x)/x} = e^{0} = 1 \\
\implies \boxed{ \lim_{ x \to 0 } (\cos x)^{1/x} = 1 } \\
}
$$
# 2i
$$
\displaylines{
\lim_{ x \to \infty } \left( \frac{1+x}{2+x} \right)^{\frac{1-\sqrt{ x }}{1-x}} \\
\\
\text{Solution:} \\
\lim_{ x \to \infty } \left( \frac{1+x}{2+x} \right)^{\frac{1-\sqrt{ x }}{1-x}} = \lim_{ x \to \infty } e^{\ln\left( \frac{1+x}{2+x} \right) \frac{1-\sqrt{ x }}{1-x}} \\
\lim_{ x \to \infty } \frac{1+x}{2+x} = \lim_{ x \to \infty } \frac{1}{1 + \underbrace{ \frac{1}{1+x} }_{ \to 0 }} = 1 \implies \lim_{ x \to \infty } \ln\left( \frac{1+x}{2+x} \right) = \ln(1) = 0 \\
\lim_{ x \to \infty } \frac{1-\sqrt{ x }}{1-x} = \lim_{ x \to \infty } \frac{1-x}{(1-x)(1+\sqrt{ x })} = \lim_{ x \to \infty } \frac{1}{1+\sqrt{ x }} = 0 \\
\implies \lim_{ x \to \infty } \ln\left( \frac{1+x}{2+x} \right) \frac{1-\sqrt{ x }}{1-x} = 0 \cdot 0 = 0 \\
\implies \lim_{ x \to \infty } e^{\ln\left( \frac{1+x}{2+x} \right) \frac{1-\sqrt{ x }}{1-x}} = e^{0} = 1 \\
\implies \boxed{ \lim_{ x \to \infty } \left( \frac{1+x}{2+x} \right)^{\frac{1-\sqrt{ x }}{1-x}} = 1 } \\
}
$$
# 2j
$$
\displaylines{
\lim_{ x \to \infty } \left( \frac{1+x}{2+x} \right)^{\frac{1-x}{1-\sqrt{ x }}} \\
\\
\text{Solution:} \\
\lim_{ x \to \infty } \frac{1+x}{2+x} = \lim_{ x \to \infty } \frac{1}{1 + \underbrace{ \frac{1}{1+x} }_{ \to 0 }} = 1 \\
\lim_{ x \to \infty } \frac{1-x}{1-\sqrt{ x }} = \lim_{ x \to \infty } \frac{(1-x)(1+\sqrt{ x })}{1-x} = \lim_{ x \to \infty } 1+\sqrt{ x } = \infty \\
\implies \lim_{ x \to \infty } \left( \frac{1+x}{2+x} \right)^{\frac{1-x}{1-\sqrt{ x }}} = e^{\lim_{ x \to \infty } \frac{1-x}{1-\sqrt{ x }} \cdot \frac{1+x-(2+x)}{2+x}} \\
\lim_{ x \to \infty } \frac{1-x}{1-\sqrt{ x }} \cdot \frac{1+x-(2+x)}{2+x} = - \lim_{ x \to \infty } \frac{1+\sqrt{ x }}{2+x} = - \lim_{ x \to \infty } \frac{\overbrace{ \frac{1}{x} }^{ \to 0 }+\overbrace{ \frac{1}{\sqrt{ x }} }^{ \to 0 }}{\underbrace{ \frac{2}{x}+1 }_{ \to 1 }} = -0 = 0 \\
\implies \boxed{ \lim_{ x \to \infty } \left( \frac{1+x}{2+x} \right)^{\frac{1-x}{1-\sqrt{ x }}} = e^{0} = 1 } \\
}
$$
---

# 3a
$$
\displaylines{
\text{Does there exist } a \in \mathbb{R} \text{ such that} \\
f(x) = \begin{cases}
a & x = 1 \\
\frac{1}{1+e^{\frac{1}{x-1}}} & x \neq 1 \\
\end{cases} \quad \text{is continuous on } \mathbb{R}? \\
\\
\text{Solution:} \\
\lim_{ x \to 1 } f(x) = \lim_{ x \to 1 } \frac{1}{1+e^{\frac{1}{x-1}}} \\
\text{Let } x \to 1^{+} \\
\implies x > 1 \implies x-1 \to 0^{+} \implies \frac{1}{x-1} \to \infty \\
\implies e^{\frac{1}{x-1}} \to \infty \implies 1 + e^{\frac{1}{x-1}} \to \infty \\
\implies \lim_{ x \to 1^{+} } \frac{1}{1+e^{\frac{1}{x-1}}} = 0 \\
\text{Let } x \to 1^{-} \\
x < 1 \implies x - 1 \to 0^{-} \implies \frac{1}{x-1} \to -\infty \\
\implies e^{\frac{1}{x-1}} \to 0 \implies \lim_{ x \to 1^{-} } \frac{1}{1+e^{\frac{1}{x-1}}} = 1 \\
\implies \lim_{ x \to 1^{-} } f(x) \neq \lim_{ x \to 1^{+} } f(x) \\
\implies \boxed{ f \text{ is not continuous at } 1 \text{ for any } a } \\
\implies \boxed{ f \text{ is not continuous on } \mathbb{R} } \\
}
$$
# 3b
$$
\displaylines{
\text{Find } a, b, c \in \mathbb{R} \text{ such that} \\
f(x) = \begin{cases}
a + \frac{\sin(e^{x})}{e^{\sin x}} & x < 0 \\
b & x = 0 \\
\frac{\sqrt{ 9+x }-c}{x} & x > 0 \\
\end{cases} \quad \text{ is continuous on } \mathbb{R} \\
\\
\text{Solution:} \\
e^{\sin x} \neq 0 \implies a + \frac{\sin(e^{x})}{e^{\sin x}} \text{ is continuous} \\
x > 0 \implies \frac{\sqrt{ 9+x } - c}{x} \text{ is continuous} \\
\implies \text{The only problematic point is } 0 \\
\lim_{ x \to 0^{-} } f(x) = \lim_{ x \to 0^{-} } a + \frac{\sin(e^{x})}{e^{\sin x}} \\
x \to 0^{-} \implies e^{x} \to e^{0} = 1 \implies \sin(e^{x}) \to \sin(1) \\
x \to 0^{-} \implies \sin x \to 0 \implies e^{\sin x} \to e^{0} = 1 \\
\implies \lim_{ x \to 0^{-} } a + \frac{\sin(e^{x})}{e^{\sin x}} = a + \sin(1) \\
\lim_{ x \to 0^{+} } f(x) = \lim_{ x \to 0^{+} } \frac{\sqrt{ 9+x }-c}{x} = \lim_{ x \to 0^{+} } \frac{9+x-c^{2}}{x(\sqrt{ 9+x }+c)} \\
\text{Let } c \neq 3 \\
\implies \sqrt{ 9+x }-c \not\to 0 \implies \lim_{ x \to 0^{+} } f(x) = \infty \\
\implies c = 3 \\
\implies \lim_{ x \to 0^{+} } \frac{9+x-9}{x(\sqrt{ 9+x }+3)} = \lim_{ x \to 0^{+} } \frac{1}{\sqrt{ 9+x }+3} = \frac{1}{6} \\
f \text{ is continuous at } 0 \text{ if and only if: } \\
\lim_{ x \to 0^{-} } f(x) = \lim_{ x \to 0^{+} } f(x) = f(0) \\
\implies a + \sin(1) = \frac{1}{6} = b \\
\implies \boxed{ \left\{\begin{array}{}
a = \frac{1}{6}-\sin(1) \\
b = \frac{1}{6} \\
c = 3 \\
\end{array}\right. \implies f \text{ is continuous at } 0 \implies f \text{ is continuous on } \mathbb{R} } \\
}
$$
---

# 4a
$$
\displaylines{
\text{Find discontinuities of } f(x) = e^{\frac{-1}{x^{3}}} \\
\\
\text{Solution:} \\
e^{g(x)} \text{ is continuous at } x_{0} \iff g(x) \text{ is continuous at } x_{0} \\
\implies \text{Discontinuities of } f \text{ are discontinuities of } \frac{-1}{x^{3}} \\
\frac{-1}{x^{3}} \text{ is continuous on } \mathbb{R} \setminus \Set{ 0 } \\
f(x) \text{ is undefined at } 0 \\
\lim_{ x \to 0^{-} } f(x) = \lim_{ x \to 0^{-} } e^{\overbrace{ \frac{-1}{x^{3}} }^{ \to \infty }} = \infty \\
\implies \boxed{ 0 \text{ is an essential (second kind) discontinuity of } f } \\
}
$$
# 4b
$$
\displaylines{
\text{Find discontinuities of } f(x) = \frac{\lvert x^{3}+x^{5}+x^{7} \rvert}{x^{3}+x^{5}+x^{7}} \\
\\
\text{Solution:} \\
x < 0 \implies x^{3} + x^{5} + x^{7} < 0 \implies f(x) = -1 \\
x > 0 \implies x^{3} + x^{5} + x^{7} > 0 \implies f(x) = 1 \\
f(x) \text{ is undefined at } 0 \\
\lim_{ x \to 0^{+} } f(x) = \lim_{ x \to 0^{+} } \frac{x^{3}+x^{5}+x^{7}}{x^{3}+x^{5}+x^{7}} = 1 \\
\lim_{ x \to 0^{-} } f(x) = \lim_{ x \to 0^{-} } -\frac{x^{3}+x^{5}+x^{7}}{x^{3}+x^{5}+x^{7}} = -1 \\
\left\{\begin{array}{}
\lim_{ x \to 0^{+} } f(x) \in \mathbb{R} \\
\lim_{ x \to 0^{-} } f(x) \in \mathbb{R} \\
\lim_{ x \to 0^{+} } f(x) \neq \lim_{ x \to 0^{-} } f(x)
\end{array}\right. \implies \boxed{ 0 \text{ is a jump discontinuity of } f } \\
}
$$
# 4c
$$
\displaylines{
\text{Find discontinuities of } f(x) = \frac{1+x}{1+x^{3}} \\
\\
\text{Solution:} \\
1 + x^{3} = (1+x)(1-x+x^{2}) \\
1-x+x^{2} > 0 \\
f(x) \text{ is undefined at } -1 \\
\lim_{ x \to -1 } \frac{1+x}{1+x^{3}} = \lim_{ x \to -1 } \frac{1}{1-x+x^{2}} = \frac{1}{3} \\
\implies \boxed{ -1 \text{ is a removable discontinuity of } f } \\
}
$$
# 4d
$$
\displaylines{
\text{Find discontinuities of } f(x) = \frac{\sin x}{\lvert x \rvert } \\
\\
\text{Solution:} \\
\sin x \text{ is continuous on } \mathbb{R} \\
\frac{1}{\lvert x \rvert} \text{ is continuous on } \mathbb{R} \setminus \Set{ 0 } \\
\implies f(x) \text{ is continuous on } \mathbb{R} \setminus \Set{ 0 } \\
\lim_{ x \to 0^{+} } f(x) = \lim_{ x \to 0^{+} } \frac{\sin(x)}{x} = 1 \\
\lim_{ x \to 0^{-} } f(x) = \lim_{ x \to 0^{-} } \frac{\sin(x)}{-x} = -1 \\
\left\{\begin{array}{}
\lim_{ x \to 0^{+} } f(x) \in \mathbb{R} \\
\lim_{ x \to 0^{-} } f(x) \in \mathbb{R} \\
\lim_{ x \to 0^{+} } f(x) \neq \lim_{ x \to 0^{-} } f(x)
\end{array}\right. \implies \boxed{ 0 \text{ is a jump discontinuity of } f } \\
}
$$
# 4e
$$
\displaylines{
\text{Find discontinuities of } f(x) = \frac{\sqrt{ x^{2}+1 }-1}{x} \\
\\
\text{Solution:} \\
\sqrt{ x^{2}+1 }-1 \text{ is continuous on } \mathbb{R} \\
\frac{1}{x} \text{ is continuous on } \mathbb{R} \setminus \Set{ 0 } \\
\implies f(x) \text{ is continuous on } \mathbb{R} \setminus \Set{ 0 } \\
f(x) \text{ is undefined at } 0 \\
\lim_{ x \to 0 } f(x) = \lim_{ x \to 0 } \frac{\sqrt{ x^{2}+1 }-1}{x} = \lim_{ x \to 0 } \frac{x^{2}+1-1}{x(\sqrt{ x^{2}+1 }+1)} = \\
= \lim_{ x \to 0 } \frac{x}{\sqrt{ x^{2}+1 }+1} = 0 \\
\implies \boxed{ 0 \text{ is a removable discontinuity of } f } \\
}
$$
# 4f
$$
\displaylines{
\text{Find discontinuities of } f(x) = \begin{cases}
\frac{\sqrt{ 7+x }-3}{x^{2}-4} & x \leq 9 \\
\frac{x^{2}+81}{x^{2}-81} & x > 9 \\
\end{cases} \\
\\
\text{Solution:} \\
\text{Let } g(x) = \frac{\sqrt{ 7+x }-3}{x^{2}-4} \\
g(x) \text{ is undefined on } (-\infty, -7) \\
\implies g(x) \text{ is also undefined for } x \to -7^{-} \\
\implies \text{Limit of } g(x) \text{ when } x \to -7^{-} \text{ is also undefined} \\
\implies g \text{ can be considered continuous at -7, as } \lim_{ x \to -7^{+} } g(x) = g(-7) = \frac{-1}{15} \\
\forall x \leq 9: f(x) = g(x) \implies \boxed{ f \text{ can be considered continuous at -7} } \\
\sqrt{ 7+x }-3 \text{ is continuous on } (-7, \infty) \\
\frac{1}{x^{2}-4} \text{ is continuous on } \mathbb{R} \setminus \Set{ -2, 2 } \\
\implies g(x) \text{ is continuous on } [-7, -2) \cup (-2, 2) \cup (2, \infty) \\
\lim_{ x \to -2^{+} } \frac{\sqrt{ 7+x }-3}{x^{2}-4} = \infty \\
\implies -2 \text{ is an essential (second kind) discontinuity of } g \\
\forall x \leq 9: f(x) = g(x) \implies \boxed{ -2 \text{ is an essential (second kind) discontinuity of } f } \\
\lim_{ x \to 2 } \frac{\sqrt{ 7+x }-3}{x^{2}-4} = \lim_{ x \to 2 } \frac{7+x-9}{(x-2)(x+2)(\sqrt{ 7+x }+3)} = \lim_{ x \to 2 } \frac{1}{(x+2)(\sqrt{ 7+x }+3)} = \frac{1}{24} \\
\implies 2 \text{ is a removable discontinuity of } g \\
\forall x \leq 9: f(x) = g(x) \implies \boxed{ 2 \text{ is a removable discontinuity of } f } \\
x^{2} + 81 \text{ is continuous on } \mathbb{R} \\
\frac{1}{x^{2} - 81} \text{ is continuous on } \mathbb{R} \setminus \Set{ -9, 9 } \\
\lim_{ x \to 9+ } f(x) = \lim_{ x \to 9^{+} } \frac{x^{2}+81}{x^{2}-81} = \infty \\
\implies \boxed{ 9 \text{ is an essential (second kind) discontinuity of } f } \\
\implies \boxed{ \begin{cases}
f(x) \text{ is undefined for } x < -7 \\
-2 \text{ is an essential (second kind) discontinuity of } f \\
2 \text{ is a removable discontinuity of } f \\
9 \text{ is an essential (second kind) discontinuity of } f
\end{cases} } \\
}
$$
---
