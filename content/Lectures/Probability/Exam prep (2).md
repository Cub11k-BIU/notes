---
{"publish":true,"created":"18/02/26, 14:36","modified":"2026-03-24T15:01:00.017+02:00","tags":["Academia","Lecture","Probability"],"cssclasses":""}
---

## 1
$$
\displaylines{
\text{Let } X, Y \text{ be continuous} \\
\text{Let } f_{X,Y}(x, y) = \begin{cases}
cx^{2}y & 0 < y < x < 1 \\
0 & \text{otherwise} \\
\end{cases} \\
\\
\begin{align}
(a) & \quad \text{Find } c \\
(b) & \quad \text{Find } f_{X}, f_{Y}, \text{ are } X, Y \text{ independent?} \\
(c) & \quad \text{Compute } E[X], E[Y], Var(X), Var(Y), Cov(X, Y) \\
(d) & \quad \text{Find } f_{Y\mid X=x}(y) \text{ for } 0 < x < 1 \text{ and compute } E[Y \mid X] \\
(e) & \quad \text{Let } A = \Set{ Y \leq \frac{X}{2} } \text{ and } B = \Set{ Y \leq \frac{X}{4} } \\
 & \quad \text{Compute } P(A), P(B \mid A) \\
\end{align} \\
\\
\text{Solution:} \\
(a) \\
\int_{0}^{1} \int_{0}^{x} f_{X,Y}(x,y) \, dy  \, dx = 1 \\
\implies \int_{0}^{1} \int_{0}^{x} cx^{2}y \, dy  \, dx = \int_{0}^{1} \frac{cx^{4}}{2} \, dx = \frac{c}{10} = 1 \\
\implies c = 10 \\
\\
(b) \\
f_{X}(x) = \int_{0}^{x} f_{X,Y}(x,y) \, dy = \int_{0}^{x} 10x^{2}y \, dy = 5x^{4} \\
f_{Y}(y) = \int_{y}^{1} f_{X,Y}(x,y) \, dx = \int_{y}^{1} 10x^{2}y \, dx = \frac{10y}{3} - \frac{10y^{4}}{3} = \frac{10y}{3}(1-y^{3}) \\
f_{X}(x) \cdot f_{Y}(y) = \frac{50x^{4}y}{3}(1-y^{3}) \neq f_{X,Y}(x, y) \implies X, Y \text{ are dependent} \\
\\
(c) \\
E[X] = \int_{0}^{1} xf_{X}(x) \, dx = \int_{0}^{1} 5x^{5} \, dx = \frac{5}{6} \\
E[X^{2}] = \int_{0}^{1} x^{2}f_{X}(x) \, dx = \int_{0}^{1} 5x^{6} \, dx = \frac{5}{7} \\
Var(X) = E[X^{2}] - E[X]^{2} = \frac{5}{7} - \frac{25}{36} =\frac{180}{252} - \frac{175}{252} = \frac{5}{252} \\
E[Y] = \int_{0}^{1} yf_{Y}(y) \, dy = \int_{0}^{1} \frac{10y^{2}}{3}(1-y^{3}) \, dy = \frac{10}{9} - \frac{10}{18} = \frac{5}{9} \\
E[Y^{2}] = \int_{0}^{1} y^{2}f_{Y}(y) \, dy = \int_{0}^{1} \frac{10y^{3}}{3}(1-y^{3}) \, dy = \frac{10}{12} - \frac{10}{21} = \frac{210}{252} - \frac{120}{252} = \frac{90}{252} \\
Var(Y) = E[Y^{2}] - E[Y]^{2} = \frac{90}{252} - \frac{25}{81} = \frac{810}{2268} - \frac{700}{2268} = \frac{110}{2268} = \frac{55}{1134} \\
\\
E[XY] = \int_{0}^{1} \int_{0}^{x} xyf_{X,Y}(x,y) \, dy  \, dx = \int_{0}^{1} \int_{0}^{x} 10x^{3}y^{2} \, dy  \, dx = \int_{0}^{1} \frac{10x^{6}}{3} \, dx = \frac{10}{21} \\
\implies Cov(X,Y) = E[XY] - E[X]E[Y] = \frac{10}{21} - \frac{25}{54} = \frac{180}{378} - \frac{175}{378} = \frac{5}{378} \\
\\
(d) \\
f_{Y \mid X=x}(y) = \frac{f_{X,Y}(x,y)}{f_{X}(x)} = \frac{10x^{2}y}{5x^{4}} = \frac{2y}{x^{2}} \\
\implies f_{Y \mid X = x}(y) = \begin{cases}
\frac{2y}{x^{2}} & 0 < y < x < 1 \\
0 & \text{otherwise} \\
\end{cases} \\
E[Y \mid X] = \int_{0}^{x} yf_{Y|X=x}(y) \, dy = \int_{0}^{x} \frac{2y^{2}}{x^{2}} \, dy = \frac{2x}{3} \\
\\
(e) \\
F_{Y \mid X = x}(t) = \int_{0}^{t} f_{Y \mid X = x}(y) \, dy = \int_{0}^{t} \frac{2y}{x^{2}} \, dy = \frac{t^{2}}{x^{2}}  \\ 
P(A) = P\left( Y \leq \frac{X}{2} \right) = P\left( Y \leq \frac{x}{2} \mid X = x \right) = F_{Y \mid X = x}\left( \frac{x}{2} \right) = \frac{1}{4} \\
P(B \mid A) = \frac{P(B \cap A)}{P(A)} = \frac{P(B)}{P(A)} = \frac{F_{Y \mid X = x}\left( \frac{x}{4} \right)}{F_{Y \mid X = x}\left( \frac{x}{2} \right)} = \frac{\frac{1}{16}}{\frac{1}{4}} = \frac{1}{4} \\
}
$$
---
## 2
$$
\displaylines{
\text{Let } X, Y \text{ be continuous} \\
\text{Let } f_{X,Y}(x, y) = \begin{cases}
cx^{2}y & 0 < y < 1, y^{3} < x < 1 \\
0 & \text{otherwise} \\
\end{cases} \\
\\
\begin{align}
(a) & \quad \text{Find } c \\
(b) & \quad \text{Find } f_{X}, f_{Y} \\
(c) & \quad \text{Compute } E[X], E[Y] \\
(d) & \quad \text{Compute } P(X > Y^{2}) \\
(e) & \quad \text{Find } f_{Y\mid X=x}(y) \text{ for } 0 < x < 1 \text{ and compute } E[Y \mid X = x] \\
\end{align} \\
\\
\text{Solution:} \\
(a) \\
\int_{0}^{1} \int_{y^{3}}^{1} f_{X,Y}(x,y) \, dx  \, dy = 1 \\ 
\implies \int_{0}^{1} \int_{y^{3}}^{1} cx^{2}y \, dx  \, dy = \int_{0}^{1} \frac{cy}{3}-\frac{cy^{10}}{3} \, dy = \frac{c}{6} - \frac{c}{33} = 1 \\
\implies c = \frac{22}{3} \\
\\
(b) \\
f_{X}(x) = \int_{0}^{\sqrt[3]{ x }} f_{X,Y}(x,y) \, dy = \int_{0}^{\sqrt[3]{ x }} \frac{22x^{2}y}{3} \, dy  = \frac{22x^{2}\sqrt[3]{ x^{2} }}{6} = \frac{11x^{8/3}}{3} \\
f_{Y}(y) = \int_{y^{3}}^{1} f_{X,Y}(x,y) \, dx = \int_{y^{3}}^{1} \frac{22x^{2}y}{3} \, dx = \frac{22y}{9} - \frac{22y^{10}}{9} \\
\\
(c) \\
E[X] = \int_{0}^{1} xf_{X}(x) \, dx = \int_{0}^{1} \frac{11x^{11/3}}{3} \, dx = \frac{11}{14} \\
E[Y] = \int_{0}^{1} yf_{Y}(y) \, dy = \int_{0}^{1} \frac{22y^{2}}{9} - \frac{22y^{11}}{9} \, dy = \frac{22}{27} - \frac{22}{108} = \frac{66}{108} = \frac{11}{18} \\
\\
(d) \\
P(X > Y^{2}) = \int_{0}^{1} \int_{y^{2}}^{1} f_{X,Y}(x,y) \, dx  \, dy = \int_{0}^{1} \int_{y^{2}}^{1} \frac{22x^{2}y}{3} \, dx \, dy = \int_{0}^{1} \frac{22y}{9} - \frac{22y^{7}}{9} \, dy = \\
= \frac{22}{18} - \frac{22}{72} = \frac{66}{72} = \frac{11}{12} \\
\\
(e) \\
f_{Y \mid X = x}(y) = \frac{f_{X,Y}(x,y)}{f_{X}(x)} = \frac{\frac{22x^{2}y}{3}}{\frac{11x^{8/3}}{3}} = \frac{2y}{x^{2/3}} \\
E[Y \mid X = x] = \int_{0}^{\sqrt[3]{ x }} yf_{Y \mid X = x}(y) \, dy = \int_{0}^{\sqrt[3]{ x }} \frac{2y^{2}}{x^{2/3}} \, dx = \frac{2x}{3x^{2/3}} = \frac{2\sqrt[3]{ x }}{3} \\
}
$$
---
## 3
$$
\displaylines{
\text{A point } (X, Y) \text{ is chosen unformly on } R = [-3, 1] \times [0, 2] \\
\text{Let } Z = X + Y \\
\begin{align}
(a) & \quad \text{Show that } X, Y \text{ are independent, compute } f_{X}, f_{Y} \\
(b) & \quad \text{Find } f_{Z}(z) \\
(c) & \quad \text{Compute } P(\abs{Z} \leq 1) \\
(d) & \quad \text{Compute } E[Z \mid X] \text{ and } Var(Z \mid X) \\
\end{align} \\
\\
\text{Solution:} \\
(a) \\
f_{X,Y}(x,y) \sim Unif([-3, 1] \times [0, 2]) \\
\implies f_{X,Y}(x, y) = \frac{1}{\abs{[-3, 1] \times [0, 2]}} = \frac{1}{8} \\
f_{X}(x) = \int_{0}^{2} f_{X,Y}(x,y) \, dy = \int_{0}^{2} \frac{1}{8} \, dy = \frac{2}{8} = \frac{1}{4} \\
f_{Y}(y) = \int_{-3}^{1} f_{X,Y}(x,y) \, dx = \int_{-3}^{1} \frac{1}{8} \, dx = \frac{1}{8} + \frac{3}{8} = \frac{1}{2} \\
\implies f_{X}(x)f_{Y}(y) = \frac{1}{8} = f_{X,Y}(x, y) \implies X, Y \text{ are independent} \\
\\
(b) \\
f_{Z}(z) = \int_{-\infty}^{\infty} f_{X}(z-y)f_{Y}(y) \, dy \\
f_{Y}(y) = \begin{cases}
\frac{1}{2} & y \in [0, 2] \\
0 & \text{otherwise} \\
\end{cases} \\
f_{X}(z-y) = \begin{cases}
\frac{1}{4} & z-y \in [-3, 1] \\
0 & \text{otherwise} \\
\end{cases} \implies f_{X}(z-y) = \begin{cases}
\frac{1}{4} & y \in [z-1,z+3] \\
0 & \text{otherwise} \\
\end{cases} \\
[0, 2] \cap [z-1, z+3] = \begin{cases}
\emptyset & z < -3 \\
[0, z + 3] & z \in [-3, -1] \\
[0, 2] & z \in [-1, 1] \\
[z-1, 2] & z \in [1, 3] \\
\emptyset & z > 3 \\
\end{cases} \\
\implies f_{Z}(z) = \begin{cases}
0 & z \in (-\infty, -3) \\
\frac{z+3}{8} & z \in [-3, -1) \\
\frac{1}{4} & z \in [-1, 1) \\
\frac{3-z}{8} & z \in [1, 3) \\
0 & z \in [3, \infty) \\
\end{cases} \\
\\
(c) \\
P(\abs{Z} \leq 1) = P(-1 \leq Z \leq 1) = \int_{-1}^{1} f_{Z}(z) \, dz = \frac{1}{4} + \frac{1}{4} = \frac{1}{2} \\
\\
(d) \\
f_{Z \mid X = x}(z) = f_{Y}(z-x) = \begin{cases}
\frac{1}{2} & z \in [x, x + 2] \\
0 & \text{otherwise} \\
\end{cases} \\
E[Z \mid X] = \int_{x}^{x+2} zf_{Z \mid X = x}(z) \, dz = \int_{x}^{x+2} \frac{z}{2} \, dz = \frac{(x+2)^{2}}{4} - \frac{x^{2}}{4} = x + 1 \\
E[Z^{2} \mid X] = \int_{x}^{x+2} z^{2}f_{Z \mid X = x}(z) \, dz = \int_{x}^{x+2} \frac{z^{2}}{2} \, dz = \frac{(x+2)^{3}}{6} - \frac{x^{3}}{6} = x^{2} + 2x + \frac{8}{6} \\ 
Var(Z \mid X) = E[Z^{2} \mid X] - E[Z \mid X]^{2} = x^{2} + 2x + \frac{8}{6} - (x+1)^{2} = \frac{1}{3} \\
}
$$
---
## 4
$$
\displaylines{
\text{Let } (X, Y) \text{ be distributed uniformly on } T = \Set{ (x, y) \mid 0 < y < x < 1 } \\
\text{Let } U = \frac{Y}{X}, V = X \\
\begin{align}
(a) & \quad \text{Find } f_{U,V}(u, v) \text{ and specify its support} \\
(b) & \quad \text{Show that } U, V \text{ are independent, find } f_{U}, f_{V} \\
(c) & \quad \text{Compute } E[U], E[V], P\left( U > \frac{1}{2}, V > \frac{3}{4} \right) \\
\end{align} \\
\\
\text{Solution:} \\
(a) \\
f_{X,Y}(x, y) = \begin{cases}
\frac{1}{\abs{T}} & (x, y) \in T \\
0 & \text{otherwise} \\
\end{cases} \\
\int_{T} f_{X,Y}(x, y) \, dxdy = 1 \\
\implies \int_{0}^{1} \int_{0}^{x} \frac{1}{\abs{T}} \, dy  \, dx = \int_{0}^{1} \frac{x}{\abs{T}} \, dx = \frac{1}{2\abs{T}} = 1 \\
\implies \abs{T} = \frac{1}{2} \implies f_{X,Y}(x, y) = \begin{cases}
2 & 0 < y < x < 1 \\
0 & \text{otherwise} \\
\end{cases} \\
\implies f_{X}(x) = \int_{0}^{x} 2 \, dy = 2x \\
\implies f_{Y}(y) = \int_{y}^{1} 2 \, dx = 2(1-y) \\
F_{U,V}(u, v) = P(U \leq u, V \leq v) = P\left( \frac{Y}{X} \leq u, X \leq v \right) = P(Y \leq uX, X \leq v) = \\
= \int_{0}^{v} \int_{0}^{ux} f_{X,Y}(x, y) \, dy  \, dx = \int_{0}^{v} 2ux \, dx = uv^{2} \\
\implies f_{U,V}(u, v) = \frac{dF_{U,V}}{du dv}(u, v) = 2v \\
\implies f_{U,V}(u, v) = \begin{cases}
2v & 0 < uv < v < 1 \\
0 & \text{otherwise} \\
\end{cases} = \begin{cases}
2v & 0 < u, v < 1 \\
0 & \text{otherwise} \\
\end{cases} \\
\\
(b) \\
f_{U}(u) = \int_{0}^{1} 2v \, dv = 1 \\
f_{V}(v) = \int_{0}^{1} 2v \, du = 2v \\
\implies f_{U}(u) \cdot f_{V}(v) = 2v = f_{U,V}(u, v) \implies U, V \text{ are independent} \\
\\
(c) \\
E[U] = \int_{0}^{1} uf_{U}(u) \, du = \int_{0}^{1} u \, du = \frac{1}{2} \\
E[V] = \int_{0}^{1} vf_{V}(v) \, dv = \int_{0}^{1} 2v^{2} \, dv = \frac{2}{3} \\
P\left( U > \frac{1}{2}, V > \frac{3}{4} \right) = \int_{\frac{1}{2}}^{1} \int_{\frac{3}{4}}^{1} 2v \, dv  \, du = \int_{\frac{1}{2}}^{1} \frac{7}{16} \, du = \frac{7}{16}\left( 1 - \frac{1}{2} \right) = \frac{7}{32} \\
}
$$
---
## 5
$$
\displaylines{
\text{Let } X, Y \text{ be continuous random variables} \\
\text{Let } f_{X,Y}(x, y) = \begin{cases}
c(x+y) & x > 0, y > 0, x + y < 1 \\
0 & \text{otherwise} \\
\end{cases} \\
\begin{align}
(a) & \quad \text{Find } c \\
(b) & \quad \text{Find } f_{X}(x) \text{ and } E[X] \\
(c) & \quad \text{Compute } P(X > Y) \\
(d) & \quad \text{Find } f_{Y \mid X = x}(y) \text{ and } E[Y \mid X = x] \text{ for } 0 < x < 1 \\
(e) & \quad \text{Compute } P\left( X + Y \leq \frac{1}{2} \right) \\
\end{align} \\
\\
\text{Solution:} \\
(a) \\
\begin{eqsys}
x > 0 \\
y > 0 \\
x+y < 1 \\
\end{eqsys} \implies \begin{eqsys}
0 < x < 1 \\
0 < y < 1-x \\
\end{eqsys} \\
\implies \int_{0}^{1} \int_{0}^{1-x} f_{X,Y}(x, y) \, dy  \, dx = 1 \\
\implies \int_{0}^{1} \int_{0}^{1-x} c(x+y) \, dy  \, dx = \int_{0}^{1} cx(1-x) + \frac{c(1-x)^{2}}{2} \, dx = \\
= \int_{0}^{1} cx - cx^{2} + \frac{c}{2} - cx + \frac{cx^{2}}{2} \, dx = \int_{0}^{1} \frac{c}{2} - \frac{cx^{2}}{2} \, dx = \frac{c}{2} - \frac{c}{6} = \frac{c}{3} = 1 \\
\implies c = 3 \\
\\
(b) \\
f_{X}(x) = \int_{0}^{1-x} f_{X,Y}(x, y) \, dy = \int_{0}^{1-x} 3(x+y) \, dy = 3x(1-x) + \frac{3(1-x)^{2}}{2} \\
E[X] = \int_{0}^{1} xf_{X}(x) \, dx = \int_{0}^{1} 3x^{2} - 3x^{3} + \frac{3x}{2} - 3x^{2} + \frac{3x^{3}}{2} \, dx = \int_{0}^{1} \frac{3x}{2} - \frac{3x^{3}}{2} \, dx = \\
= \frac{3}{4} - \frac{3}{8} = \frac{3}{8} \\
\\
(c) \\
x \leq \frac{1}{2} \implies x \leq 1 - x \\
x > \frac{1}{2} \implies 1-x < x \\
\implies P(X > Y) = P(Y < X) = \\
= P\left( Y < X \mid X \leq \frac{1}{2} \right) + P\left( Y < X \mid X > \frac{1}{2} \right) \\
P\left( Y < X \mid X \leq \frac{1}{2} \right) = \int_{0}^{1/2} \int_{0}^{x} 3(x+y) \, dy \, dx = \int_{0}^{1/2} \frac{9x^{2}}{2} \, dx = \frac{9}{48} = \frac{3}{16} \\
P\left( Y < X \mid X > \frac{1}{2} \right) = \int_{\frac{1}{2}}^{1} \int_{0}^{1-x} 3(x+y) \, dy  \, dx = \int_{\frac{1}{2}}^{1} 3x(1-x) + \frac{3(1-x)^{2}}{2} \, dx = \\
= \lrs{\frac{3x}{2} - \frac{3x^{3}}{6}}^{1}_{\frac{1}{2}} = \lrp{\frac{3}{2} - \frac{3}{6}} - \lrp{\frac{3}{4} - \frac{3}{48}} = \frac{5}{16} \\
\implies P(X > Y) = \frac{3}{16} + \frac{5}{16} = \frac{1}{2} \\
\\
(d) \\
f_{Y \mid X = x}(y) = \frac{f_{X,Y}(x, y)}{f_{X}(x)} = \frac{3(x+y)}{\frac{3}{2}(1-x^{2})} = \frac{2(x+y)}{1-x^{2}} \\
E[Y \mid X = x] = \int_{0}^{1-x} yf_{Y \mid X = x}(y) \, dy = \int_{0}^{1-x} \frac{2y(x+y)}{1-x^{2}} \, dx = \\
= \frac{2}{1-x^{2}} \int_{0}^{1-x} yx + y^{2} \, dy = \frac{2}{1-x^{2}}\left( \frac{x(1-x)^{2}}{2} + \frac{(1-x)^{3}}{3} \right) = \\
= \frac{1-x}{1+x}\left( x + \frac{2-2x}{3} \right) = \frac{(1-x)(x+2)}{3(1+x)} \\
\\
(e) \\
P\left( X + Y \leq \frac{1}{2} \right) = P\left( Y \leq \frac{1}{2} - X \right) = \int_{0}^{1/2} \int_{0}^{1/2-x} f_{X,Y}(x, y) \, dy  \, dx = \dots = \frac{1}{8} \\
}
$$
