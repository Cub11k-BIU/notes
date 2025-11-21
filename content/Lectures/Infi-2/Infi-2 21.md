---
{"publish":true,"created":"25/06/25, 13:06","modified":"2025-11-21T21:10:14.429+02:00","tags":["Academia","Lecture","Infi-2"],"cssclasses":""}
---

## Partial derivative #definition 
$$
\displaylines{
\text{Let } f: \mathbb{R}^{n} \to \mathbb{R} \\
\text{Partial derivative of } f \text{ at point } a = (a_{1}, \dots, a_{n}) \text{ in respect to variable } x_{i} \text{ is defined as} \\
f_{x_{i}}(a) = \frac{\partial}{\partial x_{i}}f(a) = \lim_{ h \to 0 } \frac{f(a+he_{i})-f(a)}{h} = \\
= \lim_{ h \to 0 } \frac{f(a_{1} ,\dots, a_{i-1}, a_{i}+h, a_{i+1}, \dots, a_{n}) - f(a_{1}, \dots, a_{n})}{h} \\
}
$$
---
$$
\displaylines{
f(x, y) = \left\{\begin{array}{}
\frac{13x^{3} + \pi y^{3}}{x^{2} + y^{2}} & (x, y) \neq (0, 0) \\
0 & (x, y) = (0, 0) \\
\end{array}\right. \\
f_{x}(0, 0) = \lim_{ h \to 0 } \frac{f(h, 0) - f(0, 0)}{h} = \lim_{ h \to 0 } \frac{13h^{3}}{h^{3}} = 13 \\
f_{y}(0, 0) = \lim_{ h \to 0 } \frac{f(0, h) - f(0, 0)}{h} = \lim_{ h \to 0 } \frac{\pi h^{3}}{h^{3}} = \pi \\
}
$$
---
$$
\displaylines{
f(x, y) = \left\{\begin{array}{}
\frac{xy}{x^{2}+y^{2}} & (x, y) \neq (0, 0) \\
0 & (x. y) = (0, 0) \\
\end{array}\right. \\
f_{x}(0, 0) = \lim_{ h \to 0 } \frac{f(h, 0) - f(0, 0)}{h} = \lim_{ h \to 0 } \frac{0h}{h^{3}} = 0 \\
f_{y}(0, 0) = \lim_{ h \to 0 } \frac{f(0, h) - f(0, 0)}{h} = \lim_{ h \to 0 } \frac{0h}{h^{3}} = 0 \\
}
$$
$$
\displaylines{
\text{Note: this example shows that existence of all partial derivatives, and even their equality,} \\
\text{does not imply that the function is continuous} \\
}
$$
---
## Higher order derivatives
$$
\displaylines{
\text{For higher order derivatives, order of differentiation matters} \\
\text{e.g.} \\
f_{xx}(a) = (f_{x}(a))_{x} \\
f_{xy}(a) = (f_{x}(a))_{y} \\
f_{yx}(a) = (f_{y}(a))_{X} \\
f_{yy}(a) = (f_{y}(a))_{y} \\
}
$$
## Schwarz theorem #theorem 
$$
\displaylines{
\text{If all partial derivatives of order $k$ are continuous} \\
\text{Then we can change order of differentiation up to order } k \\
}
$$
---
$$
\displaylines{
\text{For functions of one variable:} \\
y - f(a) = f'(a)(x-a) \\
y = f(a) + f'(a)(x-a) \\
\text{This is a Taylor polynomial of order 1 around point } a \\
}
$$
## Directional derivative #definition 
$$
\displaylines{
\text{Let } u \in \mathbb{R}^{n} \\
\text{Directional derivative along vector $u$ is then defined as} \\
f_{u}(a) = \lim_{ h \to 0 } \frac{f(a + hu) - f(a)}{h\lVert u \rVert} \\
}
$$
---
## Gradient #definition 
$$
\displaylines{
\text{Gradient of function } f \text{ at point } a \text{ is defined as} \\
\nabla f(a) = (f_{x_{1}}(a), \dots, f_{x_{n}}(a)) \\
}
$$
$$
\displaylines{
\text{If partial derivatives are continuous, then} \\
\text{directional derivative can be calculated as:} \\
f_{u}(a) = \frac{\langle u, \nabla f(a) \rangle}{\lVert u \rVert} = \frac{u \cdot \nabla f(a)}{\lVert u \rVert} \\
}
$$
---
