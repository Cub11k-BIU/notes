---
{"publish":true,"created":"28/04/25, 17:04","modified":"2025-11-21T21:10:14.392+02:00","tags":["Academia","Lecture","Infi-2"],"cssclasses":""}
---

## Absolute and conditional convergence #definition 
$$
\displaylines{
\int f \text{ is called absolutely convergent if } \int \left\lvert f \right\rvert \text{ converges} \\
\int f \text{ is called conditionally convergent if } \int f \text{ converges but } \int \left\lvert f \right\rvert \text{ diverges} \\ 
}
$$
## Absolute convergence preserves "regular" convergence #lemma 
$$
\displaylines{
\text{If } \int \left\lvert f \right\rvert \text{ converges, then } \int f \text{ also converges} \\
\\
\text{Proof:} \\
\text{Let } \int \left\lvert f \right\rvert \text{ converges} \\
\text{Let } f_{+} = \left\{\begin{array}{}
f & f \geq 0 \\
0 & f < 0 \\
\end{array}\right. \\
\text{Let } f_{-} = \left\{\begin{array}{}
0 & f \geq 0 \\
-f & f < 0 \\
\end{array}\right. \\
\\
0 \leq f_{+} \leq \left\lvert f \right\rvert \implies \int f_{+} \text{ converges} \\
0 \leq f_{-} \leq \left\lvert f \right\rvert \implies \int f_{-} \text{ converges} \\
\int f = \int (f_{+} - f_{-}) = \underbrace{ \int f_{+} }_{ \text{Converges} } - \underbrace{ \int f_{-} }_{ \text{Converges} } \implies \boxed{ \int f \text{ converges} } \\
}
$$
## Dirichlet's convergence test for integrals #theorem 
$$
\displaylines{
\text{Let } f \text{ be a continuously differentiable, monotonically decreasing function} \\
\lim_{ x \to \infty } f(x) = 0 \\
\text{Let } g \text{ be continuous} \\
\text{Let } G(x) = \int_{a}^{x} g(t) \, dt \text{ be bounded} \\
\text{Then } \int_{a}^{\infty} f(x)g(x) \, dx \text{ converges} \\
\\
\text{Proof:} \\
\text{Let } f \text{ be a continuously differentiable, monotonically decreasing function} \\
\lim_{ x \to \infty } f(x) = 0 \\
\text{Let } g \text{ be continuous} \\
\text{Let } G(x) = \int_{a}^{x} g(t) \, dt \text{ be bounded} \\
\int_{a}^{\infty} f(x)g(x) \, dx = \lim_{ b \to \infty } \int_{a}^{b} f(x)g(x) \, dx \\
\int_{a}^{b} f(x)g(x) \, dx = \int_{a}^{b} f(x)G'(x) \, dx = f(x)G(x)\Bigg|^{x=b}_{x=a} - \int_{a}^{b} f'(x)G(x) \, dx \\
f(x)G(x)\Bigg|^{x=b}_{x=a} = \underbrace{ f(b) }_{ \to 0 }\underbrace{ G(b) }_{ \text{Bounded} } - f(a)\underbrace{ G(a) }_{ \int^{a}_{a} = 0 } \underset{ b \to \infty }{ \to } 0 \\
\text{It is now enough to show that } \int_{a}^{\infty} f'(x)G(x) \, dx \text{ converges} \\
\text{Consequently, we can just show that } \int_{a}^{\infty} \left\lvert f'(x)G(x) \right\rvert  \, dx \text{ converges} \\
\left\lvert G(x) \right\rvert \leq M \implies \int_{a}^{\infty} \left\lvert f'(x)G(x) \right\rvert  \, dx \leq M\int_{a}^{\infty} \left\lvert f'(x) \right\rvert \, dx \\
f \text{ is monotonically decreasing} \implies f'(x) < 0 \\
\implies M\int_{a}^{\infty} \left\lvert f'(x) \right\rvert \, dx = -M \int_{a}^{\infty} f'(x) \, dx = -M \lim_{ b \to \infty } \int_{a}^{b} f'(x) \, dx = -M \lim_{ b \to \infty } f(x)\Bigg|^{x=b}_{x=a} = \\
= -M \lim_{ b \to \infty } (\underbrace{ f(b) }_{ \to 0 } - f(a)) = Mf(a) \\
\implies \int_{a}^{\infty} \left\lvert f'(x)G(x) \right\rvert \text{ converges} \\
\implies \boxed{ \int_{a}^{\infty} f(x)g(x) \, dx \text{ converges} } \\
}
$$
