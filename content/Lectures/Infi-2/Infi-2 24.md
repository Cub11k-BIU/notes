---
{"publish":true,"created":"30/06/25, 18:06","modified":"2025-11-21T21:10:14.439+02:00","tags":["Academia","Lecture","Infi-2"],"cssclasses":""}
---

## Extremums
### Global extremums #definition 
$$
\displaylines{
\text{For functions of one variable:} \\
\text{Weierstrass theorem: continuous function on a closed interval has a global extremum} \\
\text{How do we find it?} \\
\text{We compare all critical points and ends of the interval} \\
\\
\text{For functions of multiple variables, we know what continuity is} \\
\text{Instead of a closed interval, for multiple variables the definition of a compact is necessary} \\
A \subseteq \mathbb{R}^{n} \text{ is called a compact if it is bounded and closed} \\
\text{Bounded} \iff \exists B_{r}(a): A \subseteq B_{r}(a) \text{ where } B_{r}(a) = \Set{ x | \lVert x - a \rVert < r } \\
\text{Closed} \iff \forall \text{ convergent } \Set{ x_{n} } \subseteq A: x_{n} \to L \\
\\
\text{With these definitions, Weierstrass theorem is applicable to } \mathbb{R}^{n} \\
}
$$
$$
\displaylines{
\text{How do we find a global extremum for functions of multiple variables?} \\
\text{We compare all critical points} \\
\text{But what about the ends(borders) of the compact? There are infinite} \\
\text{Generally there are two ways:} \\
}
$$
$$
\displaylines{
\text{First one is:} \\
\text{Let } f(x, y) = 4x^{3} - 2x^{2}y + y^{2} \\
\text{Bounded by } y = 9, y = x^{2} \\
\text{Intersections of two boundaries are } x = \pm 3, y = 9 \\
\implies \text{Our domain is } -3 \leq x \leq 3, 0 \leq y \leq 9 \\
y = 9 \implies f(x, y) = 4x^{3} - 18x^{2} + 81 \implies f' = 12x^{2} - 36x \\
f' = 0 \implies x = 0 \text{ or } x = 3 \\
\text{Ends of interval are } x = \pm 3 \implies \text{Candidates on the borders of compact are} \\
(-3, 9), \quad (0, 9), \quad (3, 9) \\
\text{We reduced the function to one variable by substituting borders, this way is suitable for} \\
\text{functions of two variables and compacts bounded by some lines} \\
}
$$
$$
\displaylines{
\text{Second one is Lagrange's multipliers} \\
\text{Let } f \text{ be a function of } n \text{ variables} \\
\text{Let there be } m \text{ constraints, } \forall i \in [1, m]: g_{i} = 0 \\
\text{We then define variables } \lambda_{1}, \dots, \lambda_{m} \\
\text{And solve the following equations system:} \\
\left\{\begin{array}{}
\nabla f = \sum_{i=1}^{m} \lambda_{i}\nabla g_{i} \\
\forall i \in [1, n]: g_{i} = 0 \\
\end{array}\right.
\\
\text{For example:} \\
\text{Let } f(x, y, z) = x^{2} + yz + 1 \\
\text{On } x^{2} + y^{2} = 1 \text{ and } x + 2y + 3z = 4 \\
g_{1} = x^{2} + y^{2} - 1 \\
g_{2} = x + 2y + 3z - 4 \\
\left\{\begin{array}{}
\nabla f = \sum_{i=1}^{2} \lambda_{i}g_{i} \\
g_{1} = 0 \\
g_{2} = 0 \\
\end{array}\right. \implies \left\{\begin{array}{}
f_{x} = \lambda_{1}g_{1_{x}} + \lambda_{2}g_{2_{x}} \\
f_{y} = \lambda_{1}g_{1_{y}} + \lambda_{2}g_{2_{y}} \\
f_{z} = \lambda_{1}g_{1_{z}} + \lambda_{2}g_{2_{z}} \\
x^{2} + y^{2} - 1 = 0 \\
x + 2y + 3z - 4 = 0 \\
\end{array}\right. \implies \left\{\begin{array}{}
2x = 2x\lambda_{1} + \lambda_{2} \\
z = 2y\lambda_{1} + 2\lambda_{2} \\
y = 0 + 3\lambda_{2} \\
x^{2} + y^{2} - 1 = 0 \\
x + 2y + 3z - 4 = 0 \\
\end{array}\right. \\
\implies \left\{\begin{array}{}
x = \frac{\lambda_{2}}{2(1-\lambda_{1})} \\
y = 3\lambda_{2} \\
z = 6\lambda_{1}\lambda_{2} + 2\lambda_{2} \\
x^{2} + y^{2} - 1 = 0 \\
x + 2y + 3z - 4 = 0 \\
\end{array}\right. \implies \dots \\
}
$$
