---
{"publish":true,"created":"13/01/25, 12:01","modified":"2025-11-21T21:10:14.223+02:00","tags":["Academia","Lecture","Infi-1"],"cssclasses":""}
---

# Infi-1 21
## Differentiability #definition 
$$
\displaylines{
f'(a) = \lim_{ x \to a } \frac{f(x)-f(a)}{x-a} \\
f'(a) = \lim_{ h \to 0 } \frac{f(a+h)-f(a)}{h} \\
}
$$
$$
\displaylines{
\lim_{ x \to a } f(x) = L \iff \forall x_{n}: x_{n} \to a \land x_{n} \neq a \implies f(x_{n}) \to L \\
}
$$
$$
\displaylines{
\text{If function is differentiable at } a \text{, then it is also continuous at } a \\
}
$$
---
# Chain rule #theorem 
$$
\displaylines{
(\sin(x^{2}))' = \cos(x^{2}) \cdot 2x \\
(f \circ g)'(x) = f'(g(x)) \cdot g'(x) \\
}
$$
$$
\displaylines{
\text{Let } f, g \text{ functions} \\
g \text{ is differentiable at } a \\
f \text{ is differentiable at } g(a) \\
\implies (f \circ g) \text{ is differentiable at } a \\
\text{and } (f \circ g)'(a) = f'(g(a)) \cdot g'(a) \\
\\
\text{Proof:} \\
(f \circ g)'(a) = \lim_{ x \to a } \frac{(f \circ g)(x)-(f \circ g)(a)}{x-a} = \lim_{ x \to a } \frac{f(g(x))-f(g(a))}{x-a} = \\
= \lim_{ x \to a } \frac{(f(g(x))-f(g(a)))(g(x)-g(a))}{(g(x)-g(a))(x-a)} = \lim_{ x \to a } \frac{f(g(x))-f(g(a))}{g(x)-g(a)} \cdot \frac{g(x)-g(a)}{x-a} = \\
= \underbrace{ \lim_{ x \to a } \frac{f(g(x))-f(g(a))}{g(x)-g(a)} }_{ x \to a, g \text{ is continuous at } a \implies g(x) \to g(a) } \cdot \lim_{ x \to a } \frac{g(x)-g(a)}{x-a} = f'(g(a)) \cdot g'(a) \\
}
$$
---
$$
\displaylines{
\log_{a}(x) = \frac{\ln x}{\ln a} = \ln x \cdot \frac{1}{\ln a} \\
(\ln x)' = \frac{1}{x} \\
\implies (\log_{a}(x))' = \frac{1}{x\ln a} \\
}
$$
---
$$
\displaylines{
(\ln x)' = \frac{1}{x} \\
\\
\text{Proof:} \\
\frac{1}{t} \to \infty \implies (1+t)^{1/t} = \left( 1+\frac{1}{\frac{1}{t}} \right)^{1/t} \to e \\
\lim_{ t \to 0 } \frac{1}{t} \cdot \ln(1+t) = \lim_{ t \to 0 } \ln((1+t)^{1/t}) = \lim_{ t \to 0 } \ln(e) = 1 \\
\implies \lim_{ t \to 0 } \frac{\ln(1+t)}{t} = 1 \\
(\ln x)' = \lim_{ h \to 0 } \frac{\ln(x+h)-\ln(x)}{h} = \lim_{ h \to 0 } \frac{\ln\left( \frac{x+h}{x} \right)}{h} = \lim_{ h \to 0 } \frac{\ln\left( 1+\frac{h}{x} \right)}{h} = \\
= \lim_{ h \to 0 } \frac{\ln\left( 1+\frac{h}{x} \right)}{\frac{h}{x}} \cdot \frac{1}{x} = 1 \cdot \frac{1}{x} = \frac{1}{x} \\
}
$$
---
$$
\displaylines{
(a^{x})' = a^{x} \ln a \\
(e^{x})' = e^{x} \\
\\
\text{Proof:} \\
t \to 0 \implies a^{t} \to 1 \implies w \to 0 \\
w = a^{t} - 1 \\
a^{t} = w+1 \implies \ln(a^{t}) = \ln(w+1) \implies t = \frac{\ln(w+1)}{\ln(a)} \\
\lim_{ t \to 0 } \frac{a^{t}-1}{t} = \lim_{ w \to 0 } \frac{w \ln(a)}{\ln(w+1)} = \ln(a) \cdot \lim_{ w \to 0 } \frac{w}{\ln(w+1)} = \ln(a) \cdot \lim_{ w \to 0 } \frac{1}{\frac{\ln(w+1)}{w}} = \ln(a) \\
\implies \lim_{ t \to 0 } \frac{a^{t}-1}{t} = \ln a \\
(a^{x})' = \lim_{ h \to 0 } \frac{a^{x+h} - a^{x}}{h} = \lim_{ h \to 0 } \frac{a^{x}(a^{h}-1)}{h} = a^{x} \lim_{ h \to 0 } \frac{a^{h}-1}{h} = a^{x} \ln a \\
(e^{x})' = e^{x} \ln e = e^{x} \\
}
$$
---
$$
\displaylines{
(x^{a})' = ax^{a-1} \\
\\
\text{Explanation:} \\
(x^{a})' = (e^{\ln(x^{a})})' = e^{\ln(x^{a})} \cdot \underbrace{ (\ln(x^{a}))' }_{ (a\ln x)' = a (\ln x)' } = e^{\ln(a^{x})} \cdot \frac{a}{x} = x^{a} \cdot a \cdot \frac{1}{x} = a \cdot x^{a-1} \\
}
$$
---
$$
\displaylines{
\left( \frac{f}{g} \right)' = \frac{f'g - fg'}{g^{2}} \\
(\tan x)' = \left( \frac{\sin x}{\cos x} \right)' = \frac{\cos^{2}(x) + \sin^{2}(x)}{\cos^{2}(x)} = \frac{1}{\cos^{2}(x)} \\
\\
\text{Let } f, g \text{ functions} \\
f, g \text{ differentiable at } a \\
\implies \frac{f}{g} \text{ is differentiable at } a \\
\text{and } \left( \frac{f}{g} \right)'(a) = \frac{f'(a)g(a) - f(a)g'(a)}{(g(a))^{2}} \\
\\
\text{Proof:} \\
\left( \frac{f}{g} \right)' = (f \cdot g^{-1})' = f'g^{-1} + f(g^{-1})' = f' \cdot g^{-1} + f \cdot (-1) \cdot g^{-1-1} \cdot g' = \\
= \frac{f'g}{g^{2}} - \frac{fg'}{g^{2}} = \frac{f'g-fg'}{g^{2}} \\
}
$$
---
$$
\displaylines{
f^{g} = e^{\ln(f^{g})} = e^{g\ln f} \\
}
$$
---
