---
{"publish":true,"created":"31/01/25, 22:01","modified":"2025-11-21T21:10:02.360+02:00","tags":["Academia","Assignment","Infi-1"],"cssclasses":""}
---

# 1a
$$
\displaylines{
\text{Differntiate by definition: } f(x) = x^{3} - 5x \\
\\
\text{Solution:} \\
f'(x) = \lim_{ h \to 0 } \frac{f(x+h)-f(x)}{h} = \lim_{ h \to 0 } \frac{(x+h)^{3}-5(x+h)-(x^{3}-5x)}{h} = \\
= \lim_{ h \to 0 } \frac{x^{3}+3x^{2}h+3xh^{2}+h^{3}-5x-5h-x^{3}+5x}{h} = \lim_{ h \to 0 } 3x^{2} + 3xh + h^{2} -5 = 3x^{2} - 5 \\
\implies \boxed{ f'(x) = 3x^{2} - 5 }
}
$$
# 1b
$$
\displaylines{
\text{Differentiate by definition: } f(x) = \sqrt{ x^{4} + 1 } \\
\\
\text{Solution:} \\
f'(x) = \lim_{ h \to 0 } \frac{f(x+h)-f(x)}{h} = \lim_{ h \to 0 } \frac{\sqrt{ (x+h)^{4}+1 }-\sqrt{ x^{4}+1 }}{h} = \\
= \lim_{ h \to 0 } \frac{(x+h)^{4}+1-(x^{4}+1)}{h(\sqrt{ (x+h)^{4}+1 }+\sqrt{ x^{4}+1 })} = \lim_{ h \to 0 } \frac{((x+h)^{2}-x^{2})((x+h)^{2}+x^{2})}{h(\sqrt{ (x+h)^{4}+1 }+\sqrt{ x^{4}+1 })} = \\
= \lim_{ h \to 0 } \frac{(x+h-x)(x+h+x)(x^{2}+2xh+h^{2}+x^{2})}{h(\sqrt{ (x+h)^{4}+1 }+\sqrt{ x^{4}+1 })} = \\
= \lim_{ h \to 0 } \frac{(\overbrace{ 2x+h }^{ \to 2x })(\overbrace{ 2x^{2}+2xh+h^{2} }^{ \to 2x^{2} })}{\underbrace{ \sqrt{ (x+h)^{4}+1 } }_{ \to \sqrt{ x^{4} + 1 } }+\sqrt{ x^{4}+1 }} = \frac{2x \cdot 2x^{2}}{2\sqrt{ x^{4}+1 }} = \frac{2x^{3}}{\sqrt{ x^{4} + 1 }} \\
\implies \boxed{ f'(x) = \frac{2x^{3}}{\sqrt{ x^{4} + 1 }} } \\
}
$$
# 1c
$$
\displaylines{
\text{Differentiate by definition: } f(x) = \sqrt[3]{ 2x+5 } \\
\\
\text{Solution:} \\
f'(x) = \lim_{ h \to 0 } \frac{f(x+h)-f(x)}{h} = \lim_{ h \to 0 } \frac{\sqrt[3]{ 2x+2h+5 }-\sqrt[3]{ 2x+5 }}{h} = \\
= \lim_{ h \to 0 } \frac{2x+2h+5 - (2x+5)}{h((\sqrt[3]{ 2x+2h+5 })^{2} + \sqrt[3]{ 2x+2h+5 }\sqrt[3]{ 2x+5 } + (\sqrt[3]{ 2x+5 })^{2})} = \\
\lim_{ h \to 0 } \frac{2}{(\underbrace{ \sqrt[3]{ 2x+2h+5 } }_{ \to \sqrt[3]{ 2x+5 } })^{2} + \underbrace{ \sqrt[3]{ 2x+2h+5 } }_{ \to \sqrt[3]{ 2x+5 } }\sqrt[3]{ 2x+5 } + (\sqrt[3]{ 2x+5 })^{2}} = \frac{2}{3(\sqrt[3]{ 2x+5 })^{2}} \\
\implies \boxed{ f'(x) = \frac{2}{3(\sqrt[3]{ 2x+5 })^{2}} } \\
}
$$
---

# 2a
$$
\displaylines{
\text{Let } f \text{ be differentiable at } x_{0} \text{ and } f'(x_{0}) = a \\
\text{Let } g \text{ be differentiable at } x_{0} \text{ and } g'(x_{0}) = b \\
\text{Prove by definition: } f+g \text{ is differentiable at } x_{0} \text{ and } (f+g)'(x_{0}) = a + b \\
\\
\text{Proof:} \\
f \text{ is differentiable at } x_{0} \implies \exists \lim_{ x \to x_{0} } \frac{f(x)-f(x_{0})}{x-x_{0}} = f'(x_{0}) = a \\
g \text{ is differentiable at } x_{0} \implies \exists \lim_{ x \to x_{0} } \frac{g(x)-g(x_{0})}{x-x_{0}} = g'(x_{0}) = b \\
\implies \text{By the limit arithmetics:} \\
\exists \lim_{ x \to x_{0} } \frac{f(x)-f(x_{0})}{x-x_{0}} + \frac{g(x)-g(x_{0})}{x-x_{0}} = \lim_{ x \to x_{0} } \frac{f(x)+g(x)-(f(x_{0})+g(x_{0}))}{x-x_{0}} = \\
= \lim_{ x \to x_{0} } \frac{(f+g)(x) - (f+g)(x_{0})}{x-x_{0}} = \\
\underset{ \text{By the limit arithmetics} }{ = } \lim_{ x \to x_{0} } \frac{f(x)-f(x_{0})}{x-x_{0}} + \lim_{ x \to x_{0} } \frac{g(x)-g(x_{0})}{x-x_{0}} = a + b \\
\implies \boxed{ (f+g) \text{ is differentiable at } x_{0} \text{ and } (f+g)'(x_{0}) = a + b } \\
}
$$
# 2b
$$
\displaylines{
\text{Prove by definition: } \forall x \neq 0 \in \mathbb{R}: \left( \frac{1}{x} \right)' = \frac{-1}{x^{2}} \\
\text{Infer by the chain rule that if } g(x) \text{ is differentiable at } x_{0} \text{ and } g(x_{0}) \neq 0 \\
\text{then } \left( \frac{1}{g} \right)'(x_{0}) = \frac{-g'(x_{0})}{(g(x_{0}))^{2}} \\
\text{Infer by the multiplication rule that if } f(x) \text{ is also differentiable at } x_{0} \\
\text{then } \left( \frac{f}{g} \right)'(x_{0}) = \frac{f'(x_{0})g(x_{0})-f(x_{0})g'(x_{0})}{(g(x_{0}))^{2}} \\
\\
\text{Proof:} \\
\left( \frac{1}{x} \right)' = \lim_{ h \to 0 } \frac{\left( \frac{1}{x+h}-\frac{1}{x} \right)}{h} = \lim_{ h \to 0 } \frac{\frac{x-(x+h)}{x(x+h)}}{h} = \lim_{ h \to 0 } \frac{-1}{x(\underbrace{ x+h }_{ \to x })} = \boxed{ \frac{-1}{x^{2}} } \\
\text{Let } h(x) = \frac{1}{x} \\
\text{Let } g(x) \text{ be differentiable at } x_{0} \text{ and } g'(x_{0}) \neq 0 \\
\text{Then } \frac{1}{g} = (h \circ g) \\
\implies \left( \frac{1}{g} \right)'(x_{0}) = (h \circ g)'(x_{0}) = h'(g(x_{0})) \cdot g'(x_{0}) \underset{ \text{Given that } g(x_{0}) \neq 0 }{ = } \boxed{ \frac{-1}{(g(x_{0}))^{2}} \cdot g'(x_{0}) } \\
\text{Let } f(x) \text{ be differentiable at } x_{0} \\
\text{Then } \frac{f}{g} = f \cdot \frac{1}{g} \\
\implies \left( \frac{f}{g} \right)'(x_{0}) = \left( f \cdot \frac{1}{g} \right)'(x_{0}) = f'(x_{0}) \cdot \left( \frac{1}{g} \right)(x_{0}) + f(x_{0}) \cdot \left( \frac{1}{g} \right)'(x_{0}) = \\
= \frac{f'(x_{0})}{g(x_{0})} + \frac{f(x_{0})(-g'(x_{0}))}{(g(x_{0}))^{2}} = \boxed{ \frac{f'(x_{0})g(x_{0}) + f(x_{0})g'(x_{0})}{(g(x_{0}))^{2}} } \\
}
$$
# 2c
$$
\displaylines{
\text{Prove by the inverse function theorem: } (\arctan x)' = \frac{1}{1+x^{2}} \\
\\
\text{Proof:} \\
(\arctan x)' = (\tan^{-1}x)' \\
\text{Let } f(y) = \tan y \\
\text{Then by the inverse function theorem } (f^{-1})'(x) = \frac{1}{f'(f^{-1}(x))} \\
f'(y) = (\tan y)' = \frac{1}{\cos^{2}(y)} \implies f'(f^{-1}(x)) = \frac{1}{(\cos(\arctan x))^{2}} \\
\cos^{2}(y) = \frac{1}{\frac{\sin^{2}(y)+\cos^{2}(y)}{\cos^{2}(y)}} = \frac{1}{\tan^{2}(y)+1} \\
\implies f'(f^{-1}(x)) = \frac{1}{\frac{1}{(\tan(\arctan x))^{2} + 1}} = x^{2} + 1 \\
\implies \boxed{ (\arctan x)' = \frac{1}{f'(f^{-1}(x))} = \frac{1}{1 + x^{2}} } \\
}
$$
---

# 3a
$$
\displaylines{
\text{Differentiate } f(x) = (((2x+3)^{4}+5)^{6}+7)^{8} + 9 \\
\\
\text{Solution:} \\
\text{Let } h(x) = (2x+3)^{4}+5 \\
\text{Let } g(x) = x^{6}+7 \\
\implies f(x) = (g(h(x)))^{8} + 9 \\
h'(x) = 4(2x+3)^{3} \cdot (2x + 3)' = 4 \cdot (2x+3)^{3} \cdot 2 \\
(g(h(x)))' = ((h(x))^{6} + 7)' = 6(h(x))^{5} \cdot h'(x) = 6 \cdot (h(x)^{5}) \cdot 4 (2x+3)^{3} \cdot 2 \\
f'(x) = ((g(h(x)))^{8} + 9)' = 8(g(x))^{7} \cdot g'(x) = 8 \cdot (g(x))^{7}\cdot 6 \cdot (h(x)^{5}) \cdot 4 \cdot (2x+3)^{3} \cdot 2 \\
\implies \boxed{ f'(x) = 8 \cdot (((2x+3)^{4}+5)^{6}+7)^{7}\cdot 6 \cdot ((2x+3)^{4}+5)^{5} \cdot 4 \cdot (2x+3)^{3} \cdot 2 } \\
}
$$
# 3b
$$
\displaylines{
\text{Differentiate } f(x) = \ln(\sin(\ln(\cos(x)))) \\
\\
\text{Solution:} \\
f'(x) = (\ln(\sin(\ln(\cos(x)))))' = \frac{1}{\sin(\ln(\cos(x)))} \cdot (\sin(\ln(\cos(x))))' = \\
= \frac{1}{\sin(\ln(\cos(x)))} \cdot \cos(\ln(\cos(x))) \cdot (\ln(\cos(x)))' = \\
= \frac{1}{\sin(\ln(\cos(x)))} \cdot \cos(\ln(\cos(x))) \cdot \frac{1}{\cos(x)} \cdot (\cos(x))' = \boxed{ - \cot(\ln(\cos(x))) \cdot \tan(x) } \\
}
$$
# 3c
$$
\displaylines{
\text{Differentiate } f(x) = \frac{e^{e^{e^{x}}}}{x} \\
\\
\text{Solution:} \\
f'(x) = \frac{(e^{e^{e^{x}}})'x - e^{e^{e^{x}}}}{x^{2}} \\
(e^{e^{e^{x}}})' = e^{e^{e^{x}}} \cdot (e^{e^{x}})' = e^{e^{e^{x}}} \cdot e^{e^{x}} \cdot (e^{x})' = e^{e^{e^{x}}} \cdot e^{e^{x}} \cdot e^{x} = e^{(e^{e^{x}}+e^{x}+x)} \\
\implies \boxed{ f'(x) = \frac{(e^{e^{e^{x}}} \cdot e^{e^{x}} \cdot e^{x})x-e^{e^{e^{x}}}}{x^{2}} = \frac{e^{(e^{e^{x}}+e^{x}+x)}x-e^{e^{e^{x}}}}{x^{2}} } \\
}
$$
# 3d
$$
\displaylines{
\text{Differentiate } f(x) = \sqrt[6]{ 7x^{2} + 3x - 1 } \\
\\
\text{Solution:} \\
f'(x) = \frac{1}{6(\sqrt[6]{ 7x^{2}+3x-1 })^{5}} \cdot (7x^{2}+3x-1)' = \boxed{ \frac{14x+3}{6(\sqrt[6]{ 7x^{2}+3x-1 })^{5}} } \\
}
$$
# 3e
$$
\displaylines{
\text{Differentiate } f(x) = (\sin x)^{\cos x} \\
\\
\text{Solution:} \\
f'(x) = ((\sin x)^{\cos x})' = (e^{\cos(x)\ln(\sin x)})' = e^{\cos(x)\ln(\sin x)} \cdot (\cos(x)\ln(\sin x))' = \\
= e^{\cos(x)\ln(\sin x)} \cdot \left( -\sin(x)\ln(\sin x) + \frac{\cos x}{\sin x} \cdot (\sin x)' \right) = \\
= \boxed{ (\sin x)^{\cos x} \cdot (\cot(x) \cos(x) - \sin(x)\ln(\sin x)) } \\
}
$$
# 3f
$$
\displaylines{
\text{Differentiate } f(x) = \sin(x^{\cos x}) \\
\\
\text{Solution:} \\
f'(x) = \cos(x^{\cos x}) \cdot (x^{\cos x})' \\
(x^{\cos x})' = (e^{\cos(x)\ln(x)})' = e^{\cos(x)\ln(x)} \cdot (\cos(x)\ln(x))' = x^{\cos x} \cdot \left( -\sin(x)\ln(x) + \frac{\cos x}{x} \right) \\
\implies \boxed{ f'(x) = \cos(x^{\cos x}) \cdot x^{\cos x} \cdot \left( \frac{\cos x}{x} - \sin(x)\ln(x) \right) } \\
}
$$
# 3g
$$
\displaylines{
\text{Find } f^{(3)}(x) \text{ where } f(x) = e^{e^{x}} \\
\\
\text{Solution:} \\
f'(x) = (e^{e^{x}})' = e^{e^{x}} \cdot (e^{x})' = f(x) \cdot e^{x} \\
\implies f''(x) = (f'(x))' = (f(x) \cdot e^{x})' = f'(x) \cdot e^{x} + f(x) \cdot (e^{x})' = f(x) \cdot e^{x} \cdot e^{x} + f(x) \cdot e^{x} \\
\implies f''(x) = f'(x) \cdot e^{x} + f'(x) \\
\implies f^{(3)}(x) = (f''(x))' = (f'(x) \cdot e^{x} + f'(x))' = (f'(x) \cdot e^{x})' + f''(x) = \\
f''(x) \cdot e^{x} + f'(x) \cdot (e^{x})' + f''(x) = f''(x) \cdot e^{x} + f''(x) + f'(x) \cdot e^{x} \\
\implies f^{(3)}(x) = (f(x) \cdot e^{x} \cdot e^{x} + f(x) \cdot e^{x}) \cdot e^{x} + f(x) \cdot e^{x} \cdot e^{x} + f(x) \cdot e^{x} + f(x) \cdot e^{x} \cdot e^{x} = \\
= f(x) \cdot e^{3x} + f(x) \cdot e^{2x} + f(x) \cdot e^{2x} + f(x) \cdot e^{2x} + f(x) \cdot e^{x} = \\
= \boxed{ e^{e^{x}} \cdot e^{3x} + 3e^{e^{x}} \cdot e^{2x} + e^{e^{x}} \cdot e^{x} } \\
}
$$
# 3h
$$
\displaylines{
\text{Find } f^{(2022)}(x) \text{ where } f(x) = \sin(2x+3) + 2e^{x} + 7x \\
\\
\text{Solution:} \\
f^{(2022)}(x) = (\sin(2x+3) + 2e^{x} + 7x)^{(2022)} = \\
= (\sin(2x+3))^{(2022)} + (2e^{x})^{(2022)} + (7x)^{(2022)} \\
(7x)^{(2022)} = ((7x)'')^{(2020)} = (0)^{(2020)} = 0 \\
(2e^{x})^{(2022)} = 2(e^{x})^{(2022)} = 2e^{x} \\
(\sin(2x+3))' = 2\cos(2x+3) \\
\implies (\sin(2x+3))'' = -2^{2}\sin(2x+3) \\
\implies (\sin(2x+3))^{(3)} = -2^{3}\cos(2x+3) \\
\implies (\sin(2x+3))^{(4)} = 2^{4}\sin(2x+3) \\
\implies (\sin(2x+3))^{(4k)} = 2^{4k}\sin(2x+3) \\
2022 = 4 \cdot 505 + 2 \\
\implies (\sin(2x+3))^{(2022)} = ((\sin(2x+3))^{(4 \cdot 505)})'' = (2^{2020}\sin(2x+3))'' = \\
= -2^{2022}\sin(2x+3) \\
\implies \boxed{ f^{(2022)}(x) = -2^{2022}\sin(2x+3) + 2e^{x} } \\
}
$$
---

# 4a
$$
\displaylines{
\text{Let } f(x) = \begin{cases}
\sin^{2}(x)\sin\left( \frac{1}{x} \right) & x \neq 0 \\
0 & x = 0 \\
\end{cases} \\
\text{Is } f \text{ continuous on } \mathbb{R}? \\
\text{Is } f \text{ differentiable on } \mathbb{R}? \\
\text{Is } f' \text{ continuous on } \mathbb{R}? \\
}
$$
$$
\displaylines{
\text{Solution:} \\
\sin^{2}(x) \text{ is continuous on } \mathbb{R} \\
\sin\left( \frac{1}{x} \right) \text{ is continuous on } \mathbb{R} \setminus \Set{ 0 } \\
\implies \sin^{2}(x)\sin\left( \frac{1}{x} \right) \text{ is continuous on } \mathbb{R} \setminus \Set{ 0 } \\
\implies f \text{ is continuous on } \mathbb{R} \setminus \Set{ 0 } \\
\lim_{ x \to 0 } f(x) = \lim_{ x \to 0 } \underbrace{ \sin^{2}(x) }_{ \to 0^{2} } \cdot \underbrace{ \sin\left( \frac{1}{x} \right) }_{ -1 \leq \sin\left( \frac{1}{x} \right) \leq 1 } = 0 = f(0) \\
\implies f \text{ is continuous at } 0 \implies \boxed{ f \text{ is continuous on } \mathbb{R} } \\
\lim_{ x \to 0 } \frac{f(x)-f(0)}{x-0} = \frac{\sin^{2}(x)\sin\left( \frac{1}{x} \right)}{x} = \lim_{ x \to 0 } \frac{\sin x}{x} \cdot \lim_{ x \to 0 } \sin(x)\sin\left( \frac{1}{x} \right) = 1 \cdot 0 = 0 \\
\implies \boxed{ f \text{ is differentiable at } 0 \text{ and } f'(0) = 0 } \\
\text{Let } x \neq 0 \\
\implies f(x) = \sin^{2}(x)\sin\left( \frac{1}{x} \right) \text{ which is differentiable at } x \\
\text{and } f'(x) = (\sin^{2}(x))'\sin\left( \frac{1}{x} \right) + \sin^{2}(x)\left( \sin\left( \frac{1}{x} \right) \right)' \\
\implies \boxed{ f'(x) = 2\sin(x)\cos(x)\sin\left( \frac{1}{x} \right) - \frac{\sin^{2}(x)\cos\left( \frac{1}{x} \right)}{x^{2}} } \\
\implies f'(x) = \begin{cases}
2\sin(x)\cos(x)\sin\left( \frac{1}{x} \right) - \frac{\sin^{2}(x)\cos\left( \frac{1}{x} \right)}{x^{2}} & x \neq 0 \\
0 & x = 0 \\
\end{cases} \\
2\sin(x)\cos(x)\sin\left( \frac{1}{x} \right) - \frac{\sin^{2}(x)\cos\left( \frac{1}{x} \right)}{x^{2}} \text{ is continuous on } \mathbb{R} \setminus \Set{ 0 } \\
\implies f'(x) \text{ is continuous on } \mathbb{R} \setminus \Set{ 0 } \\
\lim_{ x \to 0 } f(x) = \lim_{ x \to 0 } 2\underbrace{ \sin(x) }_{ \to 0 }\underbrace{ \cos(x) }_{ \to 1 }\underbrace{ \sin\left( \frac{1}{x} \right) }_{ -1 \leq \sin\left( \frac{1}{x} \right) \leq 1 } - \frac{\sin^{2}(x)\cos\left( \frac{1}{x} \right)}{x^{2}} = \\
= - \lim_{ x \to 0 } \underbrace{ \left( \frac{\sin x}{x} \right)^{2} }_{ \to 1^{2} = 1 } \cos\left( \frac{1}{x} \right) = - \lim_{ x \to 0 } \cos\left( \frac{1}{x} \right) \text{ which does not exist} \\
\implies f' \text{ is not continuous at } 0 \implies \boxed{ f' \text{ is not continuous on } \mathbb{R} } \\
}
$$
# 4b
$$
\displaylines{
\text{Let } f \text{ be a continuous on } \mathbb{R} \\
\text{Let } g(x) = \begin{cases}
\frac{f(x)\sin^{2}(x)}{x} & x \neq 0 \\
0 & x = 0 \\
\end{cases} \\
\text{Is } g \text{ continuous at } 0? \text{ Is } g \text{ differentiable at } 0? \\
\\
\text{Solution:} \\
\lim_{ x \to 0 } g(x) = \lim_{ x \to 0 } \frac{f(x)\sin^{2}(x)}{x} = \lim_{ x \to 0 } \underbrace{ \frac{\sin x}{x} }_{ \to 1 } \cdot \lim_{ x \to 0 } f(x)\sin(x) = \lim_{ x \to 0 } f(x)\sin(x) \\
f \text{ is continuous at } 0 \implies \lim_{ x \to 0 } f(x) = f(0) \in \mathbb{R} \\
\implies \lim_{ x \to 0 } f(x)\sin(x) = \lim_{ x \to 0 } f(x) \cdot \lim_{ x \to 0 } \sin(x) = f(0) \cdot 0 = 0 \implies \lim_{ x \to 0 } g(x) = 0 = g(0) \\
\implies \boxed{ g \text{ is continuous at } 0 } \\
\lim_{ x \to 0 } \frac{g(x)-g(0)}{x-0} = \lim_{ x \to 0 } \frac{f(x)\sin^{2}(x)}{x^{2}} = \lim_{ x \to 0 } f(x) \cdot \lim_{ x \to 0 } \left( \frac{\sin x}{x} \right)^{2} = f(0) \cdot 1^{2} = f(0) \\
\implies \boxed{ g \text{ is differentiable at } 0 } \\
}
$$
---

# 5a
$$
\displaylines{
\text{Calculate } \sqrt[3]{ 26 } \\
\\
\text{Solution: } \\
\text{Let } f(x) = \sqrt[3]{ x } \\
f'(x) = \frac{1}{3(\sqrt[3]{ x })^{2}} \\
f(27) = 3 \\
f'(27) = \frac{1}{3 \cdot 3^{2}} = \frac{1}{27} \\
\implies \text{The "slope" equation at } (27, 3) \text{ is } y-3 = \frac{1}{27}(x-27) \\
\implies y = \frac{x}{27} + 2 \\
\text{Let } x = 26 \\
\implies \boxed{ \sqrt[3]{ 26 } \approx y = 2 + \frac{26}{27} } \\
\text{Let } g(x) = \ln(x) \\
g'(x) = \frac{1}{x} \\
g(1) = 0 \\
g'(1) = \frac{1}{1} = 1 \\
\implies \text{The "slope" equation at } (1, 0) \text{ is } y-0 = 1(x - 1) \\
\implies y = x - 1 \\
\text{Let } x = 1.002 \\
\implies \boxed{ \ln(1.002) \approx y = 1.002 - 1 = 0.002 } \\
}
$$
# 5b
$$
\displaylines{
\text{Prove: } \forall x > 0: \ln(1+x) < x \\
\\
\text{Proof:} \\
\text{Let } x > 0 \\
\text{Let } f(x) = x - \ln(1+x) \\
f(0) = 0 \\
f'(x) = 1 - \frac{1}{1+x} \\
\frac{1}{1+x} \text{ is monotonically decreasing on } [0, \infty) \\
\implies f'(x) \text{ is monotonically increasing on } [0, \infty) \\
\implies \forall x > 0: f(x) > f(0) \implies x - \ln(1+x) > 0 \implies \boxed{ x > \ln(1+x) } \\
}
$$
# 5c
$$
\displaylines{
\text{Find values of } a \text{ such that } f(x) = ax^{3} + 4ax^{2} + 8x \text{ has two local extremums} \\
\\
\text{Solution:} \\
f \text{ has a local extremum at } x_{0} \implies f'(x_{0}) = 0 \\
f \text{ has two local extremums} \implies f'(x) = 0 \text{ has two solutions} \\
f'(x) = 3ax^{2} + 8ax + 8 \\
f'(x) = 0 \iff 3ax^{2} + 8ax + 8 = 0 \\
\text{This equation has two solutions when:} \\ 
D = 64a^{2} - 96a > 0 \\
64a^{2} - 96a = 32a(2a-3) \\
a(2a-3) > 0 \iff \left[\begin{array}{}
a < 0 \\
a > \frac{3}{2} \\
\end{array}\right. \\
\text{Let us now check if these two critical points are in fact extremums} \\
f''(x_{0}) > 0 \implies x_{0} \text{ is a local minimum} \\
f''(x_{0}) < 0 \implies x_{0} \text{ is a local maximum} \\
f''(x) = 6ax + 8a = 2a(3x+4) \\
f''(x) = 0 \iff x = -\frac{4}{3} \\
f'\left( -\frac{4}{3} \right) = 3a\left( \frac{16}{9} \right) - 8a\left( \frac{4}{3} \right)+8 = \frac{16a}{3} - \frac{32a}{3} + 8 = 8 - \frac{16a}{3} \\
f'\left( -\frac{4}{3} \right) = 0 \iff a = \frac{3}{2} \iff f'(x) = 0 \text{ has only one solution} \\
\implies \forall a < 0 \text{ or } a > \frac{3}{2}: f''(x) \neq 0 \\
\implies \boxed{ \left[\begin{array}{}
a < 0 \\
a > \frac{3}{2} \\
\end{array}\right. \implies f \text{ has two local extremums} } \\
}
$$
---

# 6a
$$
\displaylines{
\text{Find local extremums of } f(x) = \sqrt[x]{ x } \text{ for } x > 0 \\
\\
\text{Solution:} \\
f(x) = x^{1/x} = e^{\ln(x)/x} \\
\implies f'(x) = e^{\ln(x)/x} \cdot \left( \frac{\ln(x)}{x} \right)' = \sqrt[x]{ x } \cdot \frac{\frac{1}{x}x - \ln(x)}{x^{2}} = \sqrt[x]{ x } \frac{1-\ln(x)}{x^{2}} \\
f'(x) = 0 \iff \ln(x) = 0 \iff x = e \\
x > e \implies 1-\ln(x) < 0 \implies f'(x) < 0 \implies f(x) < f(e) \\
x < e \implies 1-\ln(x) > 0 \implies f'(x) > 0 \implies f(x) < f(e) \\
\implies \boxed{ x = e \text{ is a local maximum of } f } \\
}
$$
# 6b
$$
\displaylines{
\text{Explain why the local maximum from 6a is also a global maximum of } f \\
\\
\text{Explanation:} \\
\text{Let } x < e \\
x < e \implies 1-\ln(x) > 0 \implies f'(x) > 0 \implies f(x) < f(e) \\
\text{Let } x > e \\
x > e \implies 1-\ln(x) < 0 \implies f'(x) < 0 \implies f(x) < f(e) \\
\implies \forall x \in \mathbb{R} \setminus \Set{ e }: f(x) < f(e) \\
\implies \boxed{ x = e \text{ is also a global maximum of } f } \\
}
$$
# 6c
$$
\displaylines{
\text{Determine which number is larger: } \pi^{e} \text{ or } e^{\pi} \\
\\
\text{Solution:} \\
\text{By 6b } \forall x > 0: f(x) < f(e) \implies x^{1/x} < e^{1/e} \\
\text{Let } x = \pi \\
\pi^{1/\pi} < e^{1/e} \implies \pi < e^{\pi/e} \implies \boxed{ \pi^{e} < e^{\pi} } \\
}
$$
---
