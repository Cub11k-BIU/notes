---
{"publish":true,"created":"25/06/25, 15:06","modified":"2025-11-21T21:10:14.433+02:00","tags":["Academia","Lecture","Infi-2"],"cssclasses":""}
---

## Gradient is the direction of maximum ascent #lemma 
$$
\displaylines{
\text{Prove: } \max_{u \in \mathbb{R}^{n}}\{f_{u}(a)\} = \nabla f(a) \\
\\
\text{Proof:} \\
\text{By Cauchy-Schwarz inequality: } \left\lvert \langle u, \nabla f(a) \rangle \right\rvert \leq \lVert u \rVert \cdot \lVert \nabla f(a) \rVert
\implies \left\lvert f_{u}(a) \right\rvert \leq \lVert \nabla f(a) \rVert \\
\\
f_{\nabla f(a)}(a) = \frac{\langle \nabla f(a), \nabla f(a) \rangle}{\lVert \nabla f(a) \rVert} = \lVert \nabla f(a) \rVert \\
\implies \boxed{ \max_{u \in \mathbb{R}^{n}}\{f_{u}(a)\} = \nabla f(a) } \\
\\
f_{-\nabla f(a)}(a) = \frac{\langle -\nabla f(a), \nabla f(a) \rangle}{\lVert -\nabla f(a) \rVert} = - \frac{\lVert \nabla f(a) \rVert^{2}}{\lVert \nabla f(a) \rVert} = -\lVert \nabla f(a) \rVert \\
\implies \boxed{ \min_{u \in \mathbb{R}^{n}}\{f_{u}(a)\} = -\nabla f(a) } \\
}
$$
---
$$
\displaylines{
\text{For functions of one variable:} \\
f(x) \approx f(a) + f'(a)(x-a) \\
\\
f(x) - f(a) - f'(a)(x-a) \approx 0 \\
x \to a \implies f(x) - f(a) - f'(a)(x-a) \to 0 \\
\text{But is the following true: } \frac{f(x) - f(a) - f'(a)(x-a)}{(x-a)} \overset{ ? }{ \to } 0 \\
}
$$
$$
\displaylines{
\text{The answer is yes:} \\
\lim_{ x \to a } \frac{f(x) - f(a) - f'(a)(x-a)}{(x-a)} = \lim_{ x \to a } \frac{f(x) - f(a)}{(x-a)} - f'(a) = f'(a) - f'(a) = 0 \\
\lim_{ x \to a } \frac{R_{1}(x)}{x-a} = 0 \text{ or } R_{1}(x) = o(x-a) \\
\text{And in general: } \\
\lim_{ x \to a } \frac{R_{k}(x)}{(x-a)^{k}} = 0 \text{ or } R_{k}(x) = o((x-a)^{k}) \\
}
$$
## Differentiability of functions of multiple variables #definition 

$$
\displaylines{
\text{Let } f: \mathbb{R}^{n} \to \mathbb{R} \\
f \text{ is then called differentiable at point } a \text{ if} \\
\lim_{ h \to 0 } \frac{f(a+h) - f(a) - \nabla f(a) \cdot h}{\lVert h \rVert} = 0 \\
}
$$
$$
\displaylines{
1. & \text{Differentiable} \implies \text{Partial derivatives exist} \\
2. & \text{Differentiable} \implies \text{Continuous} \\
3. & \text{All partial derivatives are continuous at } a \implies \text{Differentiable at } a \\
}
$$
---
## Chain rule for functions of multiple variables #lemma 
$$
\displaylines{
\text{Let } f(x_{1}, \dots, x_{n}) = f(g_{1}(x_{1}, \dots, x_{m}), \dots, g_{n}(x_{1}, \dots, x_{m})) \\
f: \mathbb{R}^{n} \to \mathbb{R} \\
\forall i \in [1, n]: g_{i}: \mathbb{R}^{m} \to \mathbb{R}, m < n \\
\\
\text{Then, if } f \text{ and all of } g_{i} \text{ are differentiable at } a, \\
f_{x_{j}} = \sum_{n=1}^{n} f_{g_{i}} \cdot g_{x_{j}} \\
\\
e.g. \\
f(x, y, z) = f(x(u, v), y(u, v), z(u, v)) \\
\implies f_{u} = f_{x} \cdot x_{u} + f_{y} \cdot y_{u} + f_{z} \cdot z_{u} \\
}
$$