---
{"publish":true,"created":"06/04/25, 11:04","modified":"2025-11-21T21:10:14.380+02:00","tags":["Academia","Lecture","Infi-2"],"cssclasses":""}
---

## Continuity of area function #lemma 
$$
\displaylines{
\text{Let } f \text{ be Riemann-integrable on } [a, b] \\
\text{Then } S(x) = \int_{a}^{x} f(t) \, dt \text{ is continuous on } [a, b] \\ 
}
$$
### Corollary
$$
\displaylines{
\lim_{ x \to c } S(x) = S(c) \\
}
$$

---
$$
\displaylines{
\lim_{ x \to 0 } \frac{\int_{0}^{x} \sin(t^{2}) \, dt}{9x^{3}} \overset{ L }{ = } \lim_{ x \to 0 } \frac{\sin(x^{2})}{27x^{2}} = \frac{1}{27} \\
}
$$
## How do we differentiate definite integrals with various borders?
$$
\displaylines{
\int_{g(x)}^{h(x)} f(t) \, dt = \int_{0}^{h(x)} f(t) \, dt - \int_{0}^{g(x)} f(t) \, dt = S(h(x)) - S(g(x)) \\
\implies \left( \int_{g(x)}^{h(x)} f(t) \, dt \right)' = (S(h(x)) - S(g(x)))' = h'(x)f(h(x)) - g'(x)f(g(x)) \\
}
$$
---
$$
\displaylines{
\left( \int_{\sqrt{ x }}^{x^{2}} \sin(t^{2}) \, dt \right)' = \left( \int_{0}^{x^{2}} \sin(t^{2}) \, dt - \int_{0}^{\sqrt{ x }} \sin(t^{2}) \, dt \right)' = \sin(x^{4}) \cdot 2x - \sin x \cdot \frac{1}{2\sqrt{ x }} \\
}
$$
## Applications of definite integrals
$$
\displaylines{
\text{Let } F \text{ be a primitive of } f \\
\int_{a}^{b} f(x) \, dx = F(b) - F(a) \\
}
$$
$$
\displaylines{
1. & \text{Calculating area} \\
& \text{area between graphs of functions } f, g \text{ on } [a, b] \\
& \text{is equal to } \int_{a}^{b} \left\lvert f(x) - g(x) \right\rvert  \, dx \\
2. & \text{Calculating volume of a revolution (Pappus theorem)} \\
& \text{volume of a revolution is equal to} \\
& \left\{\begin{array}{}
V_{X}(f) = \pi \int_{a}^{b} f^{2}(x) \, dx \text{ when rotating around axis } X \\
V_{Y}(f) = 2\pi \int_{a}^{b} xf(x) \, dx \text{ when rotating around axis } Y \\
\end{array}\right. \\
3. & \text{Arc length} \\
& \text{length of the arc of continuously differentiable function on } [a, b] \\
& \text{is equal to } L(f) = \int_{a}^{b} \sqrt{ 1 + (f'(x))^{2} } \, dx \\
4. & \text{Revolution surface area} \\
& \text{Revolution surface area of continuously differentiable function on } [a, b] \\
& \text{is equal to } A(f) = 2\pi \int_{a}^{b} f(x)\sqrt{ 1+(f'(x))^{2} } \, dx \\
}
$$
$$
\displaylines{
\text{Proof for 3.} \\
\\
\text{Let } P = \Set{ x_{0}, \dots, x_{n} } \\
L(f) \approx \sum_{i=1}^{n} \sqrt{ (x_{i}-x_{i-1})^{2} + (f(x_{i}) - f(x_{i-1}))^{2} } \\
\text{Let } \Delta x_{i} = x_{i} - x_{i-1} \\
\text{Let } \Delta f(x_{i}) = f(x_{i}) - f(x_{i-1}) \\
\implies L(f) \approx \sum_{i=1}^{n} \Delta x_{i}\sqrt{ 1 + \left( \frac{\Delta f(x_{i})}{\Delta x_{i}} \right)^{2} } \\
\text{By the Mean value theorem: } \exists c_{i} \in [x_{i-1}, x_{i}]: f'(c_{i}) = \frac{\Delta f(x_{i})}{\Delta x_{i}} \\
\text{Let } C = \Set{ c_{1}, \dots, c_{n} } \\
\implies \sum_{i=1}^{n} \sqrt{ 1 + f'(c_{i})^{2} }\Delta x_{i} = S(f, P, C) \\
\implies L(f) = \lim_{ \lambda(P) \to 0 } S(f, P, C) = \int_{a}^{b} \sqrt{ 1 + (f'(x))^{2} } \, dx \\
}
$$
---
$$
\displaylines{
\sinh x = \frac{e^{x}-e^{-x}}{2} \\
\cosh x = \frac{e^{x}+e^{-x}}{2} \\
\text{Let us calculate the arc length of hyperbolic cosine on } [0, 1] \\
(\cosh x)' = \frac{e^{x} - e^{-x}}{2} = \sinh x \\
L(\cosh) = \int_{0}^{1} \sqrt{ 1 + \left( \frac{e^{x}-e^{-x}}{2} \right)^{2} } \, dx \\
\sqrt{ 1 + \left( \frac{e^{x}-e^{-x}}{2} \right)^{2} } = \sqrt{ \frac{4+e^{2x}-2+e^{-2x}}{4} } = \frac{\sqrt{ e^{2x}+2+e^{-2x} }}{2} = \frac{e^{x}+e^{-x}}{2} = \cosh x \\
\implies L(\cosh) = \int_{0}^{1} \cosh x \, dx = \int_{0}^{1} \frac{e^{x}+e^{-x}}{2} \, dx = \left( \frac{e^{x}-e^{-x}}{2} \right)^{x=1}_{x=0} = \frac{e-e^{-1}}{2} \\
}
$$
---
