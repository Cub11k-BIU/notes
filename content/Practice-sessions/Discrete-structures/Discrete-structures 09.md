---
{"publish":true,"created":"28/12/25, 15:04","modified":"2025-12-28T18:03:24.878+02:00","tags":["Academia","#Practice","Discrete-structures"],"cssclasses":""}
---

# Recursive formulas
### Exercise
$$
\displaylines{
\text{Given an 'envelope' graph:} \\
G = (V, E) \\
V = \Set{ v_{1}, v_{2}, v_{3}, v_{4}, v_{5} } \\
E = \Set{ \Set{ v_{1}, v_{i} } \mid i \in [2, 5] } \cup \Set{ \Set{ v_{2}, v_{3} }, \Set{ v_{2}, v_{5} }, \Set{ v_{4}, v_{5} }, \Set{ v_{4}, v_{3} } } \\
\text{Find the number of walks from } v_{1} \text{ of length } n \\
\\
\text{Solution:} \\
\text{Let } a_{n} = \text{number of walks of length } n \text{ from } v_{1} \\
a_{1} = deg(v_{1}) = 4 \\
a_{2} = deg(v_{1}) \cdot deg(v_{i}) = 4 \cdot 3 = 12 \\
\text{Let } b_{n} = \text{number of walks of length } n \text{ from } v_{i} \neq v_{1} \\
a_{n} = 4b_{n-1} \\
b_{n} = 2b_{n-1} + a_{n-1} \\
\implies b_{n} = \frac{a_{n+1}}{4} \implies b_{n} = \frac{a_{n}}{2} + a_{n-1} \\
\implies a_{n} = 2a_{n-1} + 4a_{n-2} \\
}
$$
### Finding closed form for recursive formulas
$$
\displaylines{
a_{0} = 1, a_{1} = 3 \\
\\
a_{n} = 7a_{n-1} - 12a_{n-2} \\
\text{Characteristic polynomial is } x^{2} - 7x + 12 = (x-3)(x-4) \\
\implies a_{n} = \lambda_{1}3^{n} + \lambda_{2}4^{n} \\
\begin{eqsys}
a_{0} = \lambda_{1} + \lambda_{2} = 1 \\
a_{1} = 3\lambda_{1} + 4\lambda_{2} = 3 \\
\end{eqsys} \implies \lambda_{1} = 1, \lambda_{1} = 0 \\
\\
a_{n} = - 4a_{n-1} - 4a_{n-2} \\
\text{Characteristic polynomial is } x^{2} + 4x + 4 = (x+2)^{2} \\
\implies a_{n} = \lambda_{1}(-2)^{n} + \lambda_{2}n(-2)^{n} \\
\\
a_{n} = 9a_{n-1} - 26a_{n-2} + 24a_{n-3} \\
\text{Characteristic polynomial is } x^{3} - 9x^{2} + 26x - 24 \\
\text{Divisors of } 24 \text{ are } \pm \Set{ 1, 2, 3, 4, 6, 8, 12, 24 } \\
\implies \text{Rational roots are then } 2, 3, 4 \\
\text{It is possible that there are non-rational roots (not in this case)} \\
\implies a_{n} = \lambda_{1}2^{n} + \lambda_{2}3^{n} + \lambda_{3}4^{n} \\
}
$$
---
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{p \times p} \\
A_{ij} = \begin{cases}
0 & i = j \\
1 & i \neq j \\
\end{cases} \\
\text{Find a closed formula for } (A^{k})_{ij} \\
\\
\text{Solution:} \\
P_{A}(\lambda) = \begin{vmatrix}
\lambda & -1 & \dots & -1 \\
-1 & \lambda & \dots & -1 \\
\vdots &  & \ddots & \vdots \\
-1 & \dots & -1 & \lambda \\
\end{vmatrix} = (\lambda-(p-1))(\lambda+1)^{p-1} \\
A \text{ is diagonalizable} \\
E_{p-1} = sp \Set{ \begin{pmatrix}
1 \\
\vdots \\
1 \\
\end{pmatrix} } \\
E_{-1} = sp \Set{ v \mid \#1_{v} = \frac{p}{2} \text{ and } \#(-1)_{v} = \frac{p}{2} } \\
\\
\text{Another option is to represent this matrix as a graph, an undirected } K_{p} \\
\text{And count paths between } v_{i} \text{ and } v_{j} \text{ of length } k \\
}
$$
