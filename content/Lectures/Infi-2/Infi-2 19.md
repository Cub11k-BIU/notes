---
{"publish":true,"created":"08/06/25, 11:06","modified":"2026-03-24T15:00:40.301+02:00","tags":["Academia","Lecture","Infi-2"],"cssclasses":""}
---


## Approximations
$$
\displaylines{
\text{We know what to do with alternating power series to determine} \\
\text{how many terms we need or accuracy } \varepsilon \\
\text{But what do we do with series that do not alternate?} \\
}
$$
## Lagrange's remainder #theorem 
$$
\displaylines{
\text{Let } f \text{ be a function} \\
\text{Let } f \text{ be } N+1 \text{ times differentiable at } a \\
\implies P_{N}(a) \text{ exists} \\
\implies R_{N}(a) = f(a) - P_{N}(a) \\
\implies \forall x : \exists c \in (x, a): R_{N}(x) = \frac{\overbrace{ f^{(N+1)}(c) }^{ c \text{ instead of } a }}{(N+1)!}(x-a)^{N+1} \\
}
$$
## Examples
$$
\displaylines{
\text{Find } \sqrt{ 2 } \\
\\
\text{Solution:} \\
\text{Let } a = 0 \\
f(x) = \sqrt{ x + 1 } \to f(0) = 1 \\
f'(x) = \frac{1}{2}(x+1)^{-1/2} \to f'(0) = \frac{1}{2} \\
f''(x) = -\frac{1}{4}(x+1)^{-3/2} \to f''(0) = -\frac{1}{4} \\
f^{(3)}(x) = \frac{3}{8}(x+1)^{-5/2} \to f^{(3)}(0) = \frac{3}{8} \\
f(x) \approx P_{3}(x) \\
\implies \sqrt{ x + 1 } \approx \sum_{n=0}^{3} \frac{f^{(n)}(0)}{n!}x^{n} = f(0) + f'(0)x + \frac{f''(0)}{2}x^{2} + \frac{f^{(3)}(0)}{6}x^{3} = \\
= 1 + \frac{1}{2}x -\frac{1}{4}x^{2} + \frac{3}{8}x^{3} \\
\implies \sqrt{ 2 } \approx 1 + \frac{1}{2} - \frac{1}{8} + \frac{1}{16} = \frac{23}{16} = 1.4375 \\
\\
\text{By Lagrange's remainder theorem } \exists c \in (x, a): R_{N}(x) = \frac{f^{(N+1)}(c)}{(N+1)!}(x-a)^{N+1} \\
\text{In this case: } a = 0, x = 1, N = 3 \\
\implies \exists c \in (0, 1): R_{3}(1) = \frac{f^{(4)}(c)}{4!}(1-0)^{4} = \frac{f^{(4)}(c)}{4!} \\
f^{(4)}(c) = -\frac{15}{16}(c+1)^{-7/2} \\
\implies \left\lvert R_{3}(1) \right\rvert = \left\lvert \frac{-\frac{15}{16}(c+1)^{-7/2}}{24} \right\rvert = \frac{5}{128(c+1)^{7/2}} \\
\implies \left\lvert R_{3}(1) \right\rvert \text{ is monotonically decreasing on } c \in (0, 1) \\
\implies c = 0 \text{ is a maximum(supremum) of } \left\lvert R_{3}(1) \right\rvert \text{ which is } \boxed{ \frac{5}{128} } \\
\text{Or approximately } 0.04 \\
\left\lvert \sqrt{ 2 } - \frac{23}{16} \right\rvert \approx 0.023 \leq 0.04 \\
}
$$
## Analytic function #definition 
$$
\displaylines{
\text{Let } f \text{ be a function on } I \\
\text{Let } f \text{ be infinitely differentiable} \\
\text{If } f(x) \text{ is equal to a power series, it is necessarily Taylor series} \\
\forall x_{0} \in I: f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(x_{0})}{n!}(x-x_{0})^{n} \\
\text{And } f \text{ is then called analytic (real analytic)} \\
}
$$
$$
\displaylines{
f(x) = P_{N}(x) + R_{N}(x) \\
N \to \infty \implies P_{N}(x) \to f(x) \\
N \to \infty \implies R_{N}(x) \to 0 \\
\\
\text{By Lagrange's remainder theorem: } R_{N}(x) = \frac{f^{(N+1)}(c)}{(N+1)!}(x-x_{0})^{N+1} \\
\overset{ ? }{ \implies } \frac{(x-x_{0})^{N+1}}{(N+1)!} \underset{ N \to \infty }{ \to } 0 \\
\text{From this we can conclude:} \\
}
$$
## Taylor's theorem #theorem 
$$
\displaylines{
\text{If } \Set{ f^{(n+1)}(c) } \text{ is bounded on } I \\
\text{Then } f \text{ is equal to its Taylor series on } I \\
}
$$
### Examples
$$
\displaylines{
f(x) = \sin x \implies \forall c \in \mathbb{R}: \left\lvert f^{(N+1)}(c) \right\rvert \leq 1 \\
\implies \sin x \text{ is equal to its Taylor series} \\
}
$$
$$
\displaylines{
f(x) = e^{x} \\
\implies \forall N: f^{(N+1)}(c) = e^{c} \\
\forall c \in [a, b]: \left\lvert f^{(N+1)}(c) \right\rvert \leq e^{b} \\
\implies \forall a, b \in \mathbb{R}: e^{x} \text{ is equal to its Taylor series on } [a, b] \\
}
$$
$$
\displaylines{
\text{An off-topic note:} \\
f(x) = \sqrt{ x + 1 } \\
\implies f^{(n)}(c) = (-1)^{n+1}\frac{1 \cdot 3 \cdot 5 \cdot \ldots \cdot (2n - 3)}{2^{n}}(c+1)^{-(2n-1)/2} \\
}
$$
---
$$
\displaylines{
f(x) = \left\{\begin{array}{}
e^{-1/x^{2}} & x \neq 0 \\
0 & x = 0 \\
\end{array}\right. \\
\dots \\
}
$$
---
