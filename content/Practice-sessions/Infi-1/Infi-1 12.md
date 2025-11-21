---
{"publish":true,"created":"22/01/25, 17:01","modified":"2025-11-21T21:10:25.053+02:00","tags":["Academia","Practice","Infi-1"],"cssclasses":""}
---

# Infi-1 12
## Derivative
$$
\displaylines{
f'(x_{0}) = \lim_{ x \to x_{0} } \frac{f(x)-f(x_{0})}{x-x_{0}} \\
f'(x_{0}) = \lim_{ h \to 0 } \frac{f(x_{0}+h)-f(x_{0})}{h} \\ 
}
$$
---
## Exercise
$$
\displaylines{
f(x) = x^{3} \\
f'(x) = ? \\
\\
\text{Solution:} \\
\text{Let } a \in \mathbb{R} \\
f'(a) = \lim_{ h \to 0 } \frac{f(a+h)-f(a)}{h} = \lim_{ h \to 0 } \frac{(a+h)^{3}-a^{3}}{h} = \lim_{ h \to 0 } \frac{a^{3}+3a^{2}h+3ah^{2}+h^{3}-a^{3}}{h} = \\
= \lim_{ h \to 0 } 3a^{2}+3ah+h^{2} = 3a^{2} \\
\implies f'(x) = 3x^{2} \\
}
$$
---
## Exercise
$$
\displaylines{
f(x) = \begin{cases}
x^{2}\sin\left( \frac{1}{x^{2}} \right) & x \neq 0 \\
0 & x = 0 \\
\end{cases} \\
\text{Find } f'(0) \\
\\
\text{Solution:} \\
f'(0) = \lim_{ h \to 0 } \frac{f(0+h) - f(0)}{h} = \lim_{ h \to 0 } \frac{f(h)}{h} \underbrace{ = }_{ h \neq 0 } \lim_{ h \to 0 } \frac{h^{2}\sin\left( \frac{1}{h^{2}} \right)}{h} = \lim_{ h \to 0 } h\underbrace{ \sin\left( \frac{1}{h^{2}} \right) }_{ -1 \leq \sin\left( \frac{1}{h^{2}} \right) \leq 1 } = 0 \\
}
$$
---
## Exercise
$$
\displaylines{
f(x) = \begin{cases}
4x & x \leq 0 \\
\sin(3x) & x > 0 \\
\end{cases} \\
\text{Find } f'(0) \\
\\
\text{Solution:} \\
f'(0) = \lim_{ x \to 0 } \frac{f(x) - f(0)}{x-0} = \lim_{ x \to 0 } \frac{f(x)}{x} \\
\lim_{ x \to 0^{+} } \frac{f(x)}{x} = \lim_{ x \to 0^{+} } \frac{\sin(3x)}{x} = \lim_{ x \to 0^{+} } \frac{\sin(3x)}{3x} \cdot 3 = 3 \\
\lim_{ x \to 0^{-} } \frac{f(x)}{x} = \lim_{ x \to 0^{-} } \frac{4x}{x} = 4 \\
\lim_{ x \to 0^{+} } \frac{f(x)}{x} \neq \lim_{ x \to 0^{-} } \frac{f(x)}{x} \implies \boxed{ \not\exists f'(0) } \\
}
$$
---
$$
\displaylines{
f(x) = \lvert x \rvert \\
f'(0) = \lim_{ h \to 0 } \frac{f(0+h) - f(0)}{h} = \lim_{ h \to 0 } \frac{\lvert h \rvert}{h} \\
\lim_{ h \to 0^{+} } \frac{\lvert h \rvert}{h} = 1 \\
\lim_{ h \to 0^{-} } \frac{\lvert h \rvert}{h} = -1 \\
\lim_{ h \to 0^{+} } \frac{\lvert h \rvert}{h} \neq \lim_{ h \to 0^{-} } \frac{\lvert h \rvert}{h} \\
\implies \boxed{ \not\exists f'(0) } \\
}
$$
---
## Exercise
$$
\displaylines{
f(x) = \begin{cases}
\frac{1}{x}\sin(ax^{2}) & x < 0 \\
2x^{2}+bx+1 & x > 0 \\
0 & x = 0 \\
\end{cases} \\
\text{Find } a, b \in \mathbb{R} \text{ such that } f \text{ is differentiable on } \mathbb{R} \\
\\
\text{Solution:} \\
\lim_{ x \to 0^{+} } f(x) = \lim_{ x \to 0^{+} } 2x^{2} + bx + 1 = 1 \\
\implies \lim_{ x \to 0 } f(x) \neq 0 \implies f \text{ is not continuous at } 0 \text{ for any } a, b \\
\implies \boxed{ f \text{ is not differentiable at } 0 \text{ for all } a, b } \\
}
$$
---
## Exercise
$$
\displaylines{
f(x) = \begin{cases}
ax + 9 & x \geq b \\
bx - x^{2} & x < b \\
\end{cases} \\
\text{Find } a, b \in \mathbb{R} \text{ such that } f \text{ is differentiable on } \mathbb{R} \\
\\
\text{Solution:} \\
\lim_{ x \to b } f(x) \overset{ ? }{ = } f(b) \\
\lim_{ x \to b^{-} } f(x) = \lim_{ x \to b^{-} } bx - x^{2} = x(b-x) = 0 \\
\lim_{ x \to b^{+} } f(x) = \lim_{ x \to b^{+} } ax+9 = ab + 9 \\
ab + 9 = 0 \iff f \text{ is continuous at } b \\
\text{Let } ab + 9 = 0 \\
b = -\frac{9}{a} \\
f'(b) = \lim_{ h \to 0 } \frac{f(b+h)-f(b)}{h} = \lim_{ h \to 0 } \frac{f(b+h)}{h} \\ 
\lim_{ h \to 0^{+} } \frac{f(b+h)}{h} = \lim_{ h \to 0^{+} } \frac{ab+ah+9}{h} = a \\
\lim_{ h \to 0^{-} } \frac{f(b+h)}{h} = \lim_{ h \to 0^{-} } \frac{b(b+h)-(b+h)^{2}}{h} = \lim_{ h \to 0^{-} } = \frac{b^{2}+bh-b^{2}-2bh-h^{2}}{h} = \\
= \lim_{ h \to 0^{-} } \frac{-bh-h^{2}}{h} = -b \\
\exists f'(b) \iff a = -b \\
\left\{\begin{array}{}
ab+9=0 \\
a = -b \\
\end{array}\right. \implies \boxed{ \begin{cases}
a = 3, b = -3 \\
a = -3, b = 3 \\
\end{cases} } \\
}
$$
---
