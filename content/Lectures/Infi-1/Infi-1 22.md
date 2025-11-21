---
{"publish":true,"created":"15/01/25, 10:01","modified":"2025-11-21T21:10:14.227+02:00","tags":["Academia","Lecture","Infi-1"],"cssclasses":""}
---

# Infi-1 22
## Inverse function #definition 
$$
\displaylines{
f: A \to B \\
f^{-1}: B \to A \\
f(x) = y \iff x = f^{-1}(y) \\
}
$$
$$
\displaylines{
\arcsin : [-1, 1] \to \left[ -\frac{\pi}{2}, \frac{\pi}{2} \right] \\
\arccos : [-1, 1] \to [0, \pi] \\
\arctan : \mathbb{R} \to \left( -\frac{\pi}{2}, \frac{\pi}{2} \right) \\
\\
\lim_{ x \to \pm \infty } \arctan x = \pm \frac{\pi}{2} \\
}
$$
---
## Continuity of the inverse function #theorem 
$$
\displaylines{
\text{Let } f: [a, b] \to [c, d] \text{ be continuous and invertible} \\
\text{Then } f^{-1}: [c, d] \to [a, b] \text{ is continuous} \\
\\
\text{Proof:} \\
\text{Let } y \in [c, d] \\
\text{Let } y_{n} \to y \\
\text{Let } x = f^{-1}(y) \\
\implies y = f(x) \\
\text{Let } x_{n} = f^{-1}(y_{n}) \\
x_{n} \to L \implies f(x_{n}) \to f(L) \\
f^{-1}(y_{n}) = x_{n} \implies f(x_{n}) = y_{n} \\
y_{n} \to y \implies f(x_{n}) \to y \\
\implies y = f(L) \implies f(x) = f(L) \\
\underbrace{ \implies }_{ f \text{ is injective} } x = L \\
\implies x_{n} \to x \\
\implies f^{-1}(y_{n}) \to f^{-1}(y) \\
\implies f^{-1} \text{ is continuous at } y \\
}
$$
---
## Derivative of the the inverse function #theorem 
$$
\displaylines{
\text{Let } f: [a, b] \to [c, d] \text{ be continuous and invertible} \\
\text{Let } y \in (c, d) \\
\text{Let } f \text{ be differentiable at } f^{-1}(y) \text{ and } f'(f^{-1}(y)) \neq 0 \\
\text{Then } f^{-1} \text{ is differentiable at } y \text{ and } (f^{-1})'(y) = \frac{1}{f'(f^{-1}(y))} \\
\\
\text{Proof:} \\
(f^{-1})'(y) = \lim_{ t \to y } \frac{f^{-1}(t)-f^{-1}(y)}{t-y} \\
\\
\text{Let } x = f^{-1}(y), z = f^{-1}(t) \\
y = f(x), t = f(z) \\
t \to y \implies f(z) \to f(x) \\
\implies f^{-1}(f(z)) \to f^{-1}(f(x)) \implies z \to x \\
(f^{-1})'(y) = \lim_{ t \to y } \frac{f^{-1}(t)-f^{-1}(y)}{t-y} = \\
= \lim_{ z \to x } \frac{z-x}{f(z)-f(x)} = \lim_{ z \to x } \frac{1}{\frac{f(z)-f(x)}{z-x}} \\
f'(x) = f'(f^{-1}(y)) = \lim_{ z \to x } \frac{f(z)-f(x)}{z-x} \neq 0 \\
\implies (f^{-1})'(y) = \lim_{ z \to x } \frac{1}{\frac{f(z)-f(x)}{z-x}} = \frac{1}{f'(x)} = \frac{1}{f'(f^{-1}(y))} \\
}
$$
---
$$
\displaylines{
(\arctan y)' = \frac{1}{y^{2}+1} \\
\text{Proof:} \\
(\cos x)^{2} = \frac{1}{(\tan x)^{2} + 1} \\
(\tan x)' = \frac{1}{(\cos x)^{2}} = (\tan x)^{2} + 1 \geq 1 \implies (\tan x)' \neq 0 \\
\implies (\arctan y)' = \frac{1}{(\tan(\arctan y))'} = \frac{1}{(\tan(\arctan y))^{2} + 1} = \frac{1}{y^{2} + 1} \\
}
$$
---
$$
\displaylines{
(\arcsin y)' = \frac{1}{\sqrt{ 1-y^{2} }} \\
(\arccos y)' = \frac{-1}{\sqrt{ 1-y^{2} }} \\
}
$$
---
