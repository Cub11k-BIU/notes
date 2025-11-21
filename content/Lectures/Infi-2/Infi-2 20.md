---
{"publish":true,"created":"09/06/25, 12:06","modified":"2025-11-21T21:10:14.425+02:00","tags":["Academia","Lecture","Infi-2"],"cssclasses":""}
---

## Functions of multiple variables #definition 
$$
\displaylines{
f: A \to \mathbb{R} \\
A \subseteq \mathbb{R}^{n} \\
\text{For exampel: } f: \mathbb{R}^{3} \to \mathbb{R}, f(x, y, z) = x^{2}z - \sin(y) + x \\
\text{Note: we are only talking about real scalar functions, that is, about functions with range } \mathbb{R} \\
}
$$
## Limits and continuity
$$
\displaylines{
\text{For one variable:} \\
\lim_{ x \to a } f(x) = L \iff \forall \Set{ x_{m} } \to a: \Set{ f(x_{m}) } \to L \\
\text{For multiple variables:} \\
\text{Let } x, a \in A \subseteq \mathbb{R}^{n} \\
\lim_{ x \to a } f(x) = L \iff \forall \Set{ x_{m} } \to a : \Set{ f(x_{m}) } \to L \\
\text{Meaning that every "path" of sources leading to } a \text{ leads images to } L \\
\text{There is an infinite number of such paths for two or more variables} \\
\implies \text{To show that there is no limit, it is enough to find two "paths" with different results} \\
}
$$
### Examples
$$
\displaylines{
\lim_{ (x, y) \to (0, 0) } \frac{x^{2}-y^{2}}{x^{2}+y^{2}} \\
\text{Let } (x, y)_{n} = \left( \frac{1}{n}, \frac{1}{n} \right) \\
\text{Let } (x, y)_{m} = \left( \frac{1}{m}, \frac{2}{m} \right) \\
\lim_{ (x, y) \to (0, 0) } = \lim_{ n \to \infty } \frac{\frac{1}{n^{2}} - \frac{1}{n^{2}}}{\frac{1}{n^{2}} + \frac{1}{n^{2}}} = 0 \\
\lim_{ (x, y) \to (0, 0) } = \lim_{ m \to \infty } \frac{\frac{1}{m^{2}} - \frac{4}{m^{2}}}{\frac{1}{m^{2}} + \frac{4}{m^{2}}} = -\frac{3}{5} \\
\implies \boxed{ \not\exists \lim_{ (x, y) \to (0, 0) } \frac{x^{2}-y^{2}}{x^{2}+y^{2}} } \\
\\
\text{Alternative solution:} \\
\text{Let } y = 0 \\
\implies \lim_{ (x, y) \to (0, 0) } \frac{x^{2}-y^{2}}{x^{2}+y^{2}} = \lim_{ x \to 0 } \frac{x^{2}}{x^{2}} = 1 \\
\text{Let } x = 0 \\
\implies \lim_{ (x, y) \to (0, 0) } \frac{x^{2}-y^{2}}{x^{2}+y^{2}} = \lim_{ y \to 0 } -\frac{y^{2}}{y^{2}} = -1 \\
\implies \boxed{ \not\exists } \\
}
$$
---
$$
\displaylines{
\lim_{ (x, y) \to (0, 0) } \frac{xy}{x^{2}+y^{2}} \\
\text{Let } y = x \\
\implies \lim_{ (x, y) \to (0, 0) } \frac{xy}{x^{2}+y^{2}} = \lim_{ x \to 0 } \frac{x^{2}}{2x^{2}} = \frac{1}{2} \\
\text{Let } y = -x \\
\implies \lim_{ (x, y) \to (0, 0) } \frac{xy}{x^{2}+y^{2}} = \lim_{ x \to 0 } -\frac{x^{2}}{2x^{2}} = -\frac{1}{2} \\
\text{Let } y = 2x \\
\implies \lim_{ (x, y) \to (0, 0) } \frac{xy}{x^{2}+y^{2}} = \lim_{ x \to 0 } \frac{2x^{2}}{5x^{2}} = \frac{2}{5} \\
\implies \boxed{ \not\exists } \\
}
$$
---
$$
\displaylines{
\lim_{ (x, y) \to (0, 0) } \frac{x^{3}y}{x^{6}+y^{2}} \\
\text{Let } y = 0 \\
\implies \lim_{ (x, y) \to (0, 0) } \frac{x^{3}y}{x^{6}+y^{2}} = \lim_{ x \to 0 } \frac{x^{3} \cdot 0}{x^{6}} = 0 \\
\text{Let } y = x^{3} \\
\implies \lim_{ (x, y) \to (0, 0) } \frac{x^{3}y}{x^{6}+y^{2}} = \lim_{ x \to 0 } \frac{x^{6}}{2x^{6}} = \frac{1}{2} \\
\text{Let } y = -x^{3} \\
\implies \lim_{ (x, y) \to (0, 0) } \frac{x^{3}y}{x^{6}+y^{2}} = \lim_{ x \to 0 } \frac{-x^{6}}{2x^{6}} = -\frac{1}{2} \\
\implies \boxed{ \not\exists } \\
}
$$
---
$$
\displaylines{
\lim_{ (x, y) \to (0, 0) } \frac{x^{n}y}{x^{2n}+y^{2}} \\
y = x^{n} \implies \lim = \frac{1}{2} \\
y = -x^{n} \implies \lim = -\frac{1}{2} \\
\implies \boxed{ \not\exists } \\
}
$$
---
$$
\displaylines{
\text{But how do we show that there is a limit?} \\
}
$$
## Continuity
$$
\displaylines{
\text{Continuity is defined the same way as for functions of one variable} \\
f \text{ is continuous at } a \iff \lim_{ x \to a } f(x) = f(a) \\
}
$$
## How to find the limit? Special cases
$$
\displaylines{
\text{If function is continuous, for example elementary, limit is easy to calculate:} \\
\text{For example: } \lim_{ (x, y, z) \to (0,1,2) } \frac{x^{2}+y}{x^{2}+y^{2}+z^{4}} = \frac{0^{2}+1}{0^{2}+1^{2}+2^{4}} = \frac{1}{17} \\
}
$$
$$
\displaylines{
\text{If we can arrive to the limit of function of one variable, it is also easy to find the limit:} \\
\lim_{ \vec{x} \to 0 } \frac{1}{\lVert x \rVert}e^{-1/\lVert x \rVert} = \left\{\begin{array}{}
t = \lVert x \rVert \\
x \to 0 \implies \lVert x \rVert \to 0^{+} \\
\end{array}\right\} = \lim_{ t \to 0^{+} } \frac{1}{t}e^{-1/t} = \\
= \left\{\begin{array}{}
u = \frac{1}{t} \\
\end{array}\right\} = \lim_{ u \to \infty^{+} } \frac{u}{e^{u}} = 0 \\
}
$$
## Application of sandwich theorem
$$
\displaylines{
\text{If, intuitively, we think that the limit is } 0 \\
\text{We can show it with Sandwich theorem:} \\
\\
\lim_{ (x, y) \to (0, 0) } \frac{x^{3}+y^{3}}{x^{2}+y^{2}} \\
0 \leq \left\lvert \frac{x^{3}+y^{3}}{x^{2}+y^{2}} \right\rvert = \left\lvert \frac{x^{3}}{x^{2}+y^{2}} + \frac{y^{3}}{x^{2}+y^{2}} \right\rvert \leq \\
\leq \left\lvert \frac{x^{3}}{x^{2}+y^{2}} \right\rvert + \left\lvert \frac{y^{3}}{x^{2}+y^{2}} \right\rvert \leq \left\lvert \frac{x^{3}}{x^{2}} \right\rvert + \left\lvert \frac{y^{3}}{y^{2}} \right\rvert = \underbrace{ \left\lvert x \right\rvert }_{ \to 0 } + \underbrace{ \left\lvert y \right\rvert }_{ \to 0 } \to 0 \\
\implies \boxed{ \lim_{ (x, y) \to (0, 0) } \frac{x^{3}+y^{3}}{x^{2}+y^{2}} = 0 } \\
}
$$
---
$$
\displaylines{
\lim_{ (x, y, z) \to (0, 0, 0) } \frac{x^{6}+z^{6}}{x^{4}+z^{4}} \cdot \frac{\sin(x^{2}+y^{2})}{x^{2}+y^{2}} = \lim_{ (x, y, z) \to (0, 0, 0) } \frac{x^{6}+z^{6}}{x^{4}+z^{4}} \cdot \lim_{ (x, y, z) \to (0, 0, 0) } \frac{\sin(x^{2}+y^{2})}{x^{2}+y^{2}} = \\
= \left\{\begin{array}{}
t = x^{2}+y^{2} \\
t \to 0^{+} \\
\end{array}\right\} = \lim_{ (x, y, z) \to (0, 0, 0) } \frac{x^{6}+z^{6}}{x^{4}+z^{4}} \cdot \lim_{ t \to 0^{+} } \frac{\sin(t)}{t} = \\
= \lim_{ (x, y, z) \to (0, 0, 0) } \frac{x^{6}+z^{6}}{x^{4}+z^{4}} \cdot 1 \\
\\
0 \leq \left\lvert \frac{x^{6}+z^{6}}{x^{4}+z^{4}} \right\rvert \leq \left\lvert \frac{x^{6}}{x^{4}+z^{4}} \right\rvert + \left\lvert \frac{z^{6}}{x^{4}+z^{4}} \right\rvert \leq \left\lvert \frac{x^{6}}{x^{4}} \right\rvert + \left\lvert \frac{z^{6}}{z^{4}} \right\rvert = \\
= \underbrace{ x^{2} }_{ \to 0 } + \underbrace{ z^{2} }_{ \to 0 } \to 0 \\
\implies \lim_{ (x, y, z) \to (0, 0, 0) } \frac{x^{6}+z^{6}}{x^{4}+z^{4}} = 0 \\
\implies \boxed{ \lim_{ (x, y, z) \to (0, 0, 0) } \frac{x^{6}+z^{6}}{x^{4}+z^{4}} \cdot \frac{\sin(x^{2}+y^{2})}{x^{2}+y^{2}} = 0 } \\
}
$$
---
$$
\displaylines{
\lim_{ (x, y) \to (0, 0) } \frac{x^{3}y^{3}}{x^{4}+y^{4}} \\
\text{Let } a, b > 0 \\
(a-b)^{2} = a^{2}-2ab+b^{2} = a^{2} + 2ab + b^{2} - 4ab = (a+b)^{2} - 4ab \geq 0 \\
\implies 4ab \leq (a+b)^{2} \\
\implies \sqrt{ ab } \leq \frac{a+b}{2} \text{ when } a, b > 0 \\
0 \leq \left\lvert \frac{x^{3}y^{3}}{x^{4}+y^{4}} \right\rvert = \frac{\sqrt{ x^{6}y^{6} }}{x^{4}+y^{4}} \leq \frac{1}{2} \cdot \underbrace{ \frac{x^{6}+y^{6}}{x^{4}+y^{4}} }_{ \to 0 } \to 0 \\
\implies \boxed{ \lim_{ (x, y) \to (0, 0) } \frac{x^{3}y^{3}}{x^{4}+y^{4}} = 0 } \\
}
$$
---
## Polar coordinates #definition 
$$
\displaylines{
\text{Polar coordinates are coordinates derived from distance of } (x, y) \text{ from zero, denoted } r \\
\text{And signed angle } \theta \text{ between vector } \vec{(x, y)} \text{ and axis } X \\
r = \sqrt{ x^{2}+y^{2} } = \lVert (x, y) \rVert \\
\sin\theta = \frac{y}{x} \implies \theta = \arcsin\left( \frac{y}{x} \right) \\
\implies \boxed{ \left\{\begin{array}{}
x = r\cos\theta \\
y = r\sin\theta \\
\end{array}\right. } \\
}
$$
$$
\displaylines{
(x, y) \to (0, 0) \implies r \to 0, \theta \text{ can be anything} \\
\text{So, it is enough to show that for all } \theta \text{ the limit when $r \to 0$ is the same to show existence} \\
}
$$
$$
\displaylines{
\frac{x^{3}y^{3}}{x^{4}+y^{4}} = \frac{r^{3}\cos^{3}\theta r^{3}\sin^{3}\theta}{r^{4}\cos^{4}\theta + r^{4}\sin^{4}\theta} = r^{2} \cdot \frac{\sin^{3}\theta \cos^{3}\theta}{(\cos^{4}\theta + \sin^{4}\theta)} \\
}
$$
---
