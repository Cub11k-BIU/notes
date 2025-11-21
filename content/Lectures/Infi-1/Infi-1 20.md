---
{"publish":true,"created":"08/01/25, 10:01","modified":"2025-11-21T21:10:14.215+02:00","tags":["Academia","Lecture","Infi-1"],"cssclasses":""}
---

# Derivative #definition 
$$
\displaylines{
\text{Let } a \in Dom(f) \\
\text{Function is called differentiable at } a \text{ if exists} \\
f'(a) = \lim_{ h \to 0 } \frac{f(a+h)-f(a)}{h} \\
}
$$
## Remark
$$
\displaylines{
\text{Definition can be written as:} \\
f'(x) = \lim_{ x \to a } \frac{f(x)-f(a)}{x-a} \\
}
$$
## Remark
$$
\displaylines{
\text{If } f \text{ is differentiable at } a, \text{ then it is continuous at } a \\
\\
\text{Proof:} \\
\exists f'(a) \implies \exists \lim_{ x \to a } \frac{f(x)-f(a)}{x-a} \\
x-a \to 0 \implies f(x)-f(a) \to 0 \implies f(x) \to f(a) \\
\implies f \text{ is continuous at } a \\
}
$$
$$
\displaylines{
f(x) = \lvert x \rvert \\
f'(0) = \lim_{ h \to 0 } \frac{f(0+h)-f(0)}{h} = \lim_{ h \to 0 } \frac{\lvert h \rvert}{h} \\
}
$$
---
# Trigonometric functions derivatives #lemma 
$$
\displaylines{
x \in \mathbb{R} \\
(\sin x)' = \cos x \\
(\cos x)' = -\sin x \\
\\
\text{Proof:} \\
\lim_{ t \to 0 } \frac{\sin t}{t} = 1 \\
\lim_{ t \to 0 } \frac{1-\cos t}{t} = 0 \\
\sin(x+h) = \sin x\cos h + \sin h\cos x \\
\cos(x+h) = \cos x\cosh - \sin x\sin h \\
\\
(\sin x)' = \lim_{ h \to 0 } \frac{\sin(x+h)-\sin x}{h} = \lim_{ h \to 0 } \frac{\sin x\cos h + \sin h \cos x - \sin x}{h} = \\
= \lim_{ h \to 0 } \frac{\sin x(\cos h - 1) + \sin h \cos x}{h} = \lim_{ h \to 0 } \sin x\underbrace{ \frac{(\cos h - 1)}{h} }_{ \to 0 } + \cos x\underbrace{ \frac{(\sin h)}{h} }_{ \to 1 } = \cos x \\
\\
(\cos x)' = \lim_{ h \to 0 } \frac{\cos(x+h)-\cos x}{h} = \lim_{ h \to 0 } \frac{\cos x\cos h - \sin h \sin x - \cos x}{h} = \\
= \lim_{ h \to 0 } \frac{\cos x(\cos h - 1) + \sin h \sin x}{h} = \lim_{ h \to 0 } \cos x\underbrace{ \frac{(\cos h - 1)}{h} }_{ \to 0 } - \sin x\underbrace{ \frac{(\sin h)}{h} }_{ \to 1 } = -\sin x \\
}
$$
# Sum of differentiable functions #lemma 
$$
\displaylines{
\text{Let } f, g \text{ functions} \\
a, C \in \mathbb{R} \\
\text{If } f, g \text{ are differentiable at } a, \text{ then } f+g \text{ is also differentioable at } a \text{ and:} \\
(f+g)'(a) = f'(a) + g'(a) \\
\text{If } f \text{ is differentiable at } a, \text{ then } Cf \text{ is also differentiable at } a \text{ and:} \\
(Cf)'(a) = Cf'(a) \\
\\
\text{Proof:} \\
(f+g)'(a) = \lim_{ x \to a } \frac{(f+g)(x)-(f+g)(a)}{x-a} = \lim_{ x \to a } \frac{f(x)+g(x)-(f(a)+g(a))}{x-a} = \\
= \lim_{ x \to a } \frac{f(x)-f(a)}{x-a} + \lim_{ x \to a } \frac{g(x)-g(a)}{x-a} = f'(a)+g'(a) \\
(Cf)'(a) = \lim_{ x \to a } \frac{(Cf)(x) - (Cf)(a)}{x-a} = \lim_{ x \to a } \frac{Cf(x) - Cf(a)}{x-a} = C\lim_{ x \to a } \frac{f(x) - f(a)}{x-a} = \\
= Cf'(a) \\
}
$$
## Product of differentiable functions #lemma 
$$
\displaylines{
\text{Let } f, g \text{ functions} \\
a \in \mathbb{R} \\
\text{If } f, g \text{ are differentiable at } a, \text{ then } f\cdot g \text{ is also differentiable at } a \text{ and:} \\
(f\cdot g)'(a) = f'(a)g(a) + f(a)g'(a) \\
\\
\text{Proof:} \\
(f\cdot g)'(a) = \lim_{ h \to 0 } \frac{(f\cdot g)(a+h)-(f\cdot g)(a)}{h} = \lim_{ h \to 0 } \frac{f(a+h)\cdot g(a+h)-f(a)\cdot g(a)}{h} = \\
= \lim_{ h \to 0 } \frac{f(a+h)\cdot g(a+h) - f(a)g(a+h) + f(a)g(a+h) -f(a)\cdot g(a)}{h} = \\
= \lim_{ h \to 0 } \frac{g(a+h)(f(a+h) - f(a)) + f(a)(g(a+h) - g(a))}{h} = \\
= \lim_{ h \to 0 } \frac{g(a+h)(f(a+h) - f(a)) + f(a)(g(a+h) - g(a))}{h} = \\
= \lim_{ h \to 0 } \left( \underbrace{ g(a+h) }_{ \to g(a) } \frac{f(a+h) - f(a)}{h} + f(a) \frac{g(a+h) - g(a)}{h} \right) = \\
= f'(a)g(a) + f(a)g'(a) \\
}
$$
##### Remark
$$
\displaylines{
h \to 0 \implies a+h \to a \\
g \text{ is differentiable at } a \implies g \text{ is continuous at } a \\
\implies [a+h \to a \implies g(a+h) \to g(a)] \\
}
$$
---
$$
\displaylines{
(x^{3}\cos x)' = (x^{3})'\cos x + x^{3}(\cos x)' = 3x^{2}\cos x - x^{3}\sin x \\
}
$$
