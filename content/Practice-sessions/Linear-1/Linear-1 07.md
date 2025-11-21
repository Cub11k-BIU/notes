---
{"publish":true,"created":"11/12/24, 15:12","modified":"2025-11-21T21:10:25.117+02:00","tags":["Academia","Practice","Linear-1"],"cssclasses":""}
---

# Linear-1 7
$$
\displaylines{
\text{Let } V \text{ be a vector space} \\
S, T \subseteq V - \text{ vector subspaces of } V \\
S \subseteq sp(T) \land T \subseteq sp(S) \iff sp(S) = sp(T) \\
\\
\text{Proof:} \\
\text{Let } S \subseteq sp(T) \land T \subseteq sp(S) \\
S \subseteq sp(T) \implies sp(S) \subseteq sp(sp(T)) = sp(T) \\
T \subseteq sp(S) \implies sp(T) \subseteq sp(sp(S)) = sp(S) \\
sp(S) \subseteq sp(T) \land sp(T) \subseteq sp(S) \implies sp(S) = sp(T) \\
\text{Let } sp(S) = sp(T) \\
T \subseteq sp(T) = sp(S) \\
S \subseteq sp(S) = sp(S) \\
}
$$
---
$$
\displaylines{
S = \Set{ \alpha x-1, 4x^{2}-x-2, 15x^{2} } \\
\\
\alpha(\alpha x - 1) + \beta(4x^{2}-x-2) + \gamma(15x^{2}) = 0 \\
(\alpha-2\beta)1 + (2\alpha-\beta)x + (4\beta+15\gamma)x^{2} = 0 \\
\left(\begin{array}{ccc|c}
1 & -2 & 0 & 0 \\
2 & -1 & 0 & 0 \\
0 & 4 & 15 & 0 \\
\end{array}\right) \to
\left(\begin{array}{ccc|c}
1 & -2 & 0 & 0 \\
0 & -5 & 0 & 0 \\
0 & 4 & 15 & 0 \\
\end{array}\right) \to \left(\begin{array}{ccc|c}
1 & -2 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 15 & 0 \\
\end{array}\right) \\
\implies S \text{ is a linear independence} \\
}
$$
---
$$
\displaylines{
S = \Set{ v_{1}, \dots, v_{n} } \subseteq V \\
T = \Set{ v_{1}+v_{1}, \dots, v_{n}+v_{1} } \subseteq V \\
S \text{ is a linear independence} \iff T \text{ is a linear independence} \\
\\
\text{Proof:} \\
\text{Let } S \text{ be a linear independence} \\
\sum_{i=1}^{n} \alpha_{i}(v_{i}+v_{1}) = \sum_{i=1}^{n} \alpha_{i}v_{i} + \sum_{i=1}^{n} \alpha_{i}v_{1} = \left( \alpha_{1} + \sum_{i=1}^{n} \alpha_{i} \right)v_{1} + \sum_{i=2}^{n} \alpha_{i}v_{i} = 0 \\
\text{This is a linear combination of } S \\
\implies \left\{\begin{array}{}
\alpha_{1} + \sum_{i=1}^{n} \alpha_{i} = 0 \\
\alpha_{2} = 0 \\
\dots \\
\alpha_{n} = 0 \\
\end{array}\right. \implies 2\alpha_{1} = 0 \implies \alpha_{1} = 0 \ (\text{over } \mathbb{R}) \\
\implies T \text{ is a linear independence} \\
\\
\text{Let } T \text{ be a linear independence} \\
\sum_{i=1}^{n} \alpha_{i}v_{i} = \sum_{i=1}^{n} \alpha_{i}(v_{i}+v_{1}-v_{1}) = \sum_{i=1}^{n} \alpha_{i}(v_{i}+v_{1}) + \sum_{i=1}^{n} -\alpha_{i}v_{1} = \\
= \frac{\left( \alpha_{1} - \sum_{i=2}^{n} \alpha_{i} \right)}{2}(v_{1}+v_{1}) + \sum_{i=2}^{n} \alpha_{i}(v_{i} + v_{1}) = 0 \\
\implies \left\{\begin{array}{}
\frac{\left( \alpha_{1} - \sum_{i=2}^{n} \alpha_{i} \right)}{2} = 0 \\
\alpha_{2} = 0 \\
\dots \\
\alpha_{n} = 0
\end{array}\right. \implies \frac{\alpha_{1}}{2} = 0 \implies \alpha_{1} = 0 \\
\implies S \text{ is a linear independence} \\
}
$$
---
$$
\displaylines{
V = \mathbb{R}^{n x n} \\
A \in V \\
1. \quad \exists A^{-1} \centernot\implies \Set{ A, A^{2} } \text{ is a linear independence} \\
A = I, \exists A^{-1} = I, A^{2} = I \implies \Set{ A, A^{2} } \text{ is a linear dependence} \\
\\
2. \quad \exists A^{-1} \centernot\impliedby \Set{ A, A^{2} } \text{ is a linear independence} \\
A = \begin{pmatrix}
0 & 1 & 0 \\
0 & 0 & 1 \\
0 & 0 & 0 \\
\end{pmatrix}, A^{2} = \begin{pmatrix}
0 & 0 & 1 \\
0 & 0 & 0 \\
0 & 0 & 0 \\
\end{pmatrix} \implies \Set{ A, A^{2} } \text{ is a linear dependence}, \not\exists A^{-1} \\
}
$$
---
$$
\displaylines{
V = \mathbb{R}_{2}[x] \\
S = \Set{ 1+x^{2}, x, x+x^{2} } \\
S' = \Set{ \begin{pmatrix}
1 \\
0 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
1 \\
\end{pmatrix} } \\
\begin{pmatrix}
x \\
y \\
z \\
\end{pmatrix} = \alpha s_{1}' + \beta s_{2}' + \gamma s_{3}' \\
\left(\begin{array}{ccc|c}
1 & 0 & 0 & x \\
0 & 1 & 1 & y \\
1 & 0 & 1 & z \\
\end{array}\right) \to \left(\begin{array}{ccc|c}
1 & 0 & 0 & x \\
0 & 1 & 1 & y \\
0 & 0 & 1 & z-x \\
\end{array}\right) \to \left(\begin{array}{ccc|c}
1 & 0 & 0 & x \\
0 & 1 & 0 & x+y-z \\
0 & 0 & 1 & z-x \\
\end{array}\right) \\
\implies \left\{\begin{array}{}
sp(S) = \mathbb{R}^{3} \\
S' \text{ is a linear independence} \\
\end{array}\right. \implies S' \text{ is a basis of } \mathbb{R}^{3} \implies S \text{ is a basis of } \mathbb{R}_{2}[x] \\
}
$$
---
$$
\displaylines{
V = \mathbb{R}^{n \times n} \\
B = \begin{pmatrix}
1 & 2 \\
0 & 0 \\
\end{pmatrix} \\
W = \Set{ A \in V | AB=BA } \\
W \text{ is vector subspace of } V ? \\
\\
\begin{pmatrix}
a & b \\
c & d \\
\end{pmatrix} \cdot \begin{pmatrix}
1 & 2 \\
0 & 0 \\
\end{pmatrix} = \begin{pmatrix}
1 & 2 \\
0 & 0 \\
\end{pmatrix} \cdot \begin{pmatrix}
a & b \\
c & d \\
\end{pmatrix} \\
\begin{pmatrix}
a & 2a \\
c & 2c \\
\end{pmatrix} = \begin{pmatrix}
a+2c & b+2d \\
0 & 0 \\
\end{pmatrix} \\
\left\{\begin{array}{}
c = 0 \\
2a - b - 2d = 0 \\
\end{array}\right. \\
\left(\begin{array}{cccc|c}
1 & -\frac{1}{2} & 0 & -1 &  \\
0 & 0 & 1 & 0 &  \\
\end{array}\right) \implies \Set{ \begin{pmatrix}
\frac{b}{2}+d & b \\
0 & d \\
\end{pmatrix} | \forall b, d \in \mathbb{R} } = W \\
\implies W = sp\left( \Set{ \begin{pmatrix}
\frac{1}{2} & 1 \\
0 & 0 \\
\end{pmatrix}, \begin{pmatrix}
1 & 0 \\
0 & 1 \\
\end{pmatrix} } \right) \\
}
$$
---
	