---
{"publish":true,"created":"06/01/25, 12:01","modified":"2025-11-21T21:10:14.220+02:00","tags":["Academia","Lecture","Infi-1"],"cssclasses":""}
---

# Infi-1 19
$$
\displaylines{
f(x), g(x) \\
f(x) \to 1 \implies \lim f(x)^{g(x)} = e^{\lim g(x)(f(x)-1)} \\ 
}
$$
$$
\displaylines{
\lim_{ x \to 0 } (\cos x)^{1/x} = e^{\lim_{ x \to 0 } (\cos x - 1)/x} = e^{\lim_{ x \to 0 } -(1-\cos x)/x} = e^{0} = 1 \\
??? \\
}
$$
$$
\displaylines{
\text{If } f \text{ is continuous at point $a$, then } \lim_{ x \to a } f(x) = f(a) \\
}
$$
$$
\displaylines{
\lim_{ x \to 0 } \frac{x^{2}+7 \cdot 9^{x^{3}}}{\tan x + \cot x} = \frac{0 + 7 \cdot 9^{0^{3}}}{\tan 0 + \cot 0} = 7 \\
}
$$
$$
\displaylines{
\text{By definition of limit of function: } \\
\lim_{ x \to a } f(x_{n}) = f(a) \\
\forall x_{n}: x_{n} \to a, x_{n} \neq a: f(x_{n}) \to f(a) \\
}
$$
## Continuity of functions #definition 
$$
\displaylines{
\lim_{ x \to a } f(x) = L \implies g(\lim_{ x \to a } f(x)) = g(L) \\
}
$$
---
## Continuity of composition #lemma 
$$
\displaylines{
g \text{ continuous at } a \text{ and } f \text{ continuous at } g(a) \\
\implies (f \circ g) \text{ is continuous at } a \\
}
$$
---
## Continuity on a closed interval #definition 
$$
\displaylines{
f \text{ is called continuous on } [a, b] \text{ iff} \\
1. \quad \forall c \in (a, b): f \text{ is continuous at } c \\
2. \quad \lim_{ n \to a^{+} } f(x) = f(a) \\
3. \quad \lim_{ x \to b^{-} } f(x) = f(b) \\
}
$$
---
## Discontinuities #definition 
$$
\displaylines{
a \text{ is called a discontinuity of } f \text{ iff } f \text{ is not continuous at } a \\
}
$$
## Removable discontinuity (סליקה)
$$
\displaylines{
\exists \lim_{ x \to a } f(x) \\
\lim_{ x \to a } f(x) \neq f(a) \\
}
$$
## Jump or first kind discontinuity (קפיצה)
$$
\displaylines{
\exists \lim_{ x \to a^{-} } f(x), \exists \lim_{ x \to a^{+} } f(x) \\
\lim_{ x \to a^{-} } f(x) \neq \lim_{ x \to a^{+} } f(x) \\
}
$$
## Essential or second kind discontinuity (עיקרית)
$$
\displaylines{
\not\exists \lim_{ x \to a^{-} } f(x) \lor \not\exists \lim_{ x \to a^{+} } f(x) \\
}
$$
---
