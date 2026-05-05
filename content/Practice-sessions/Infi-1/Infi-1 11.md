---
{"publish":true,"created":"15/01/25, 17:01","modified":"2026-03-24T14:59:15.055+02:00","tags":["Academia","Practice","Infi-1"],"cssclasses":""}
---

# Infi-1 11
## Exercise
$$
\displaylines{
\text{Let } f(x) > 0 \\
\forall x \in \mathbb{R}: \exists f(x) \\
\lim_{ x \to 0 } f(x) = 0 \\
\text{Prove: } \\
1. \quad \lim_{ n \to \infty } f\left( \frac{1}{n} \right) = 0 \\
2. \quad \lim_{ n \to \infty } f\left( f\left( \frac{1}{n} \right) \right) = 0 \\
\\
\text{Proof:} \\
\lim_{ x \to 0 } f(x) = 0 \implies \forall x_{n}: [x_{n} \to 0, x_{n} \neq 0 \implies f(x_{n}) \to 0] \\
\text{Let } x_{n} = \frac{1}{n}, x_{n} \to 0, x_{n} \neq 0 \\
\implies f(x_{n}) = \boxed{ f\left( \frac{1}{n} \right) \to 0 } \\
\text{Let } x_{n} = f\left( \frac{1}{n} \right), x_{n} \to 0, x_{n} \neq 0 \\
\implies f(x_{n}) = \boxed{ f\left( f\left( \frac{1}{n} \right) \right) \to 0 } \\
}
$$
---
## Side limits
$$
\displaylines{
\lim_{ x \to x_{0}^{+} } f(x) = L \iff \forall x_{n}: [x_{n} \to x_{0}, x_{n} > x_{0} \implies f(x_{n}) \to L] \\
\lim_{ x \to x_{0}^{-} } f(x) = L \iff \forall x_{n}: [x_{n} \to x_{0}, x_{n} < x_{0} \implies f(x_{n}) \to L] \\
}
$$
---
## Exercise
$$
\displaylines{
\lim_{ x \to 1^{-} } \frac{1-x}{\lvert x-1 \rvert } = 1 \\
\\
\text{Proof:} \\
\text{Let } x_{n} \to 1, x_{n} < 1 \\
\implies \lim_{ n \to \infty } f(x_{n}) = \lim_{ n \to \infty } \frac{1-x_{n}}{\lvert x_{n}-1 \rvert } \underset{ x_{n} < 1 }{ = } \lim_{ n \to \infty } \frac{1-x_{n}}{1-x_{n}} = \lim_{ n \to \infty } 1 = 1 \\
}
$$
---
## Exercise
$$
\displaylines{
\lim_{ x \to 0 } \frac{x\sin x}{\sqrt{ 2 }-\sqrt{ 1+\cos x }} = \lim_{ x \to 0 } \frac{x\sin x(\sqrt{ 2 }+\sqrt{ 1+\cos x })}{1-\cos x} = \\
= \lim_{ x \to 0 } x^{2} \frac{\frac{\sin x}{x}(\sqrt{ 2 }+\sqrt{ 1+\cos x })}{x^{2}\frac{1-\cos x}{x^{2}}} = \lim_{ x \to 0 } \underbrace{ \frac{\sin x}{x} }_{ \to 1 } \cdot \underbrace{ \frac{1}{\frac{1-\cos x}{x^{2}}} }_{ \to 2 } \cdot (\sqrt{ 2 }+\underbrace{ \sqrt{ 1+\cos x } }_{ \to \sqrt{ 2 } }) = \\
= 1 \cdot 2 \cdot 2\sqrt{ 2 } = 4\sqrt{ 2 } \\
}
$$
---
## Continuity
$$
\displaylines{
\lim_{ x \to x_{0} } f(x) = f(x_{0}) \\
}
$$
---
## Exercise
$$
\displaylines{
\text{Prove or disprove:} \\
f, g \text{ not continuous at } x_{0} \\
1. \quad f+g \text{ not continuous at } x_{0} \\
2. f \cdot g \text{ not continuous at } x_{0} \\
\\
\text{Disproof for 1.} \\
\text{Let } f(x) = D(x) = \begin{cases}
1 & x \in \mathbb{Q} \\
0 & \text{otherwise} \\
\end{cases} \\
\text{Let } g(x) = -D(x) = \begin{cases}
-1 & x \in \mathbb{Q} \\
0  & \text{otherwise} \\
\end{cases} \\
(f+g)(x) = 0 \text{ which is continuous} \\
\\
\text{Disproof for 2.} \\
\text{Let } f(x) = D(x) \\
\text{Let } g(x) = D'(x) = \begin{cases}
0 & x \in \mathbb{Q} \\
1 & \text{otherwise} \\
\end{cases} \\
(f \cdot g)(x) = 0 \text{ which is continuous} \\
}
$$
---
## Exercise
$$
\displaylines{
\text{Let } f \\
\forall x \in \mathbb{R}: \exists f(x) \\
\forall a, b \in \mathbb{R}: f(a+b) = f(a) + f(b) \\
f \text{ is continuous at } 0 \\
\text{Prove:} \\
1. \quad f(0) = 0 \\
2. \quad f \text{ is continuous on } \mathbb{R} \\
\\
\text{Proof:} \\
\text{Let } a = b = 0 \\
f(a+b) = f(a) + f(b) = f(0) = f(0) + f(0) \\
\implies \boxed{f(0) = 0} \\
\\
\forall a \in \mathbb{R}: \lim_{ x \to a } f(x) = f(a) \\
\text{Let } x_{n} \to a, x_{n} \neq a \\
\text{Let } b = -a \\
\lim_{ n \to \infty } f(x_{n}) = \lim_{ n \to \infty } f(x_{n} - a + a) = \\
= \lim_{ n \to \infty } (f(\underbrace{ x_{n}-a }_{ \to 0 }) + f(a)) = f(0) + f(a) = 0 + f(a) = f(a) \\
\implies f \text{ is continuous at } a \implies \boxed{ f \text{ is continuous on } \mathbb{R} } \\
}
$$
---
$$
\displaylines{
\lim_{ x \to 0 } \frac{\ln (1+x)}{x} = 1 \\
\lim_{ x \to 0 } \frac{a^{x} - 1}{x} = \ln a \\
}
$$
## Exercise
$$
\displaylines{
\lim_{ x \to 0 } \frac{\ln(1+x)-\ln(1-x)}{x} = \lim_{ x \to 0 } \left( \frac{\ln(1+x)}{x} - \frac{\ln(1-x)}{x} \right) = \\
= \lim_{ x \to 0 } \frac{\ln(1+x)}{x} + \frac{\ln(1-x)}{-x} = 1 + 1 = 2 \\
}
$$
$$
\displaylines{
\lim_{ x \to 0 } \frac{e^{2x}-1}{e^{3x}-1} = \lim_{ x \to 0 } \frac{\overbrace{ \frac{e^{2x}-1}{2x} }^{ \to 1 } \cdot 2x}{\underbrace{ \frac{e^{3x}-1}{3x} }_{ \to 1 } \cdot 3x} = \frac{2}{3} \\
}
$$
---
## Classification of discontinuities
### Removable
$$
\displaylines{
\exists \lim_{ x \to a } f(x) \in \mathbb{R} \\
\lim_{ x \to a } f(x) \neq f(a) \\
}
$$
### Jump (First kind/type)
$$
\displaylines{
\exists \lim_{ x \to a^{-} } f(x) \in \mathbb{R}, \exists \lim_{ x \to a^{+} } f(x) \in \mathbb{R} \\
\lim_{ x \to a^{-} } f(x) \neq \lim_{ x \to a^{+} } f(x) \\
}
$$
### Essential (Second kind/type)
$$
\displaylines{
\not\exists \lim_{ x \to a^{-} } f(x) \lor \not\exists \lim_{ x \to a^{+} } f(x) \\
\text{Note: not exists or } \pm \infty \\
}
$$
---
## Exercise
$$
\displaylines{
f(x) = \frac{\left( \frac{1}{x}-\frac{1}{x+1} \right)}{\frac{1}{x-1}-\frac{1}{x}} \\
0, \pm 1 \text{ are discontinuities} \\
f(x) = \frac{\frac{x+1-x}{x(x+1)}}{\frac{x-x+1}{x(x-1)}} = \frac{x(x-1)}{x(x+1)} \\
\lim_{ x \to 0 } \frac{x(x-1)}{x(x+1)} = -1 \implies \text{Removable} \\
\lim_{ x \to 1 } \frac{x(x-1)}{x(x+1)} = 0 \implies \text{Removable} \\
\lim_{ x \to (-1)^{-} } \frac{x\overbrace{ (x-1) }^{ \to -2 }}{x\underbrace{ (x+1) }_{ \to 0^{-} }} = \infty \implies \text{Essential} \\
}
$$
---
