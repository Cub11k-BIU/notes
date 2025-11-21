---
{"publish":true,"created":"21/07/25, 18:07","modified":"2025-11-21T21:10:14.449+02:00","tags":["Academia","Lecture","Linear-2"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Formulate and prove Riesz theorem} \\
}
$$
# 2a
$$
\displaylines{
\text{Let } V = \mathbb{R}^{3} \\
\text{Let } \langle \begin{pmatrix}
x \\
y \\
z \\
\end{pmatrix}, \begin{pmatrix}
x' \\
y' \\
z' \\
\end{pmatrix} \rangle = xx' + 2yy' + 3zz' \\
\text{Let } W = sp\Set{ \begin{pmatrix}
-1 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
1 \\
1 \\
\end{pmatrix} }, v = \begin{pmatrix}
2 \\
0 \\
4 \\
\end{pmatrix} \\
\text{Find } P_{W}(v) \\
\\
\text{Solution:} \\
\text{Let us orthogonalize } W \text{ by using Gram-Schmidt process:} \\
u_{1} = v_{1} \implies \lVert u_{1} \rVert^{2} = 3 \\
u_{2} = v_{2} - \frac{\langle v_{2}, u_{1} \rangle}{\lVert u_{1} \rVert^{2}}u_{1} = \begin{pmatrix}
1 \\
1 \\
1 \\
\end{pmatrix} - \frac{1}{3}\begin{pmatrix}
-1 \\
1 \\
0 \\
\end{pmatrix} = \begin{pmatrix}
\frac{4}{3} \\
\frac{2}{3} \\
1 \\
\end{pmatrix} | \cdot 3 \implies u_{2} = \begin{pmatrix}
4 \\
2 \\
3 \\
\end{pmatrix} \implies \lVert u_{2} \rVert^{2} = 51 \\
\implies P_{W}(v) = \frac{\langle v, u_{1} \rangle}{\lVert u_{1} \rVert^{2}}u_{1} + \frac{\langle v, u_{2} \rangle}{\lVert u_{2} \rVert^{2}}u_{2} = -\frac{2}{3}\begin{pmatrix}
-1 \\
1 \\
0 \\
\end{pmatrix} + \frac{44}{51}\begin{pmatrix}
4 \\
2 \\
3 \\
\end{pmatrix} = \begin{pmatrix}
\frac{34}{51} + \frac{176}{51} \\
-\frac{34}{51} + \frac{88}{51} \\
0 + \frac{132}{51} \\
\end{pmatrix} = \\
= \frac{1}{51}\begin{pmatrix}
210 \\
54 \\
132 \\
\end{pmatrix} = \boxed{ \frac{1}{17}\begin{pmatrix}
70 \\
18 \\
44 \\
\end{pmatrix} } \\
}
$$
# 2b
$$
\displaylines{
\text{Let } V \text{ be an inner product space} \\
\text{Let } W \text{ be a subspace of } V \\
\text{Let } v \in V \\
\text{Let } u = P_{W}(v) \\
\text{Find } P_{W^{\perp}}(u) \\
\\
\text{Solution:} \\
u = P_{W}(v) \implies u \in W \\
\implies \boxed{ P_{W^{\perp}}(u) = 0 } \\
}
$$
# 3
$$
\displaylines{
\text{Let } x, y, z, w \geq 0 \in \mathbb{R} \\
\text{Let } x + y + z + w = 4 \\
\text{Find } \max\{\sqrt{ x } + \sqrt{ y } + \sqrt{ z } + \sqrt{ w }\} \\
\\
\text{Solution:} \\
(\sqrt{ x } + \sqrt{ y } + \sqrt{ z } + \sqrt{ w })^{2} \leq 4 \cdot (\sqrt{ x }^{2} + \sqrt{ y }^{2} + \sqrt{ z }^{2} + \sqrt{ w }^{2}) \\
\implies (\sqrt{ x } + \sqrt{ y } + \sqrt{ z } + \sqrt{ w })^{2} \leq 4 \cdot 4 = 16 \\
\implies (\sqrt{ x } + \sqrt{ y } + \sqrt{ z } + \sqrt{ w }) \leq 4 \\
x = y = z = w = 1 \implies \sqrt{ x } + \sqrt{ y } + \sqrt{ z } + \sqrt{ w } = 4 \\
\implies \boxed{ \max\{\sqrt{ x } + \sqrt{ y } + \sqrt{ z } + \sqrt{ w }\} = 4 } \\
}
$$
# 3b
$$
\displaylines{
\text{Determine whether } A = \begin{pmatrix}
1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
\end{pmatrix} \in \mathbb{R}^{10 \times 10} \text{ is diagonalizable} \\
\\
\text{Solution:} \\
rank(A) = 2 \implies \dim E_{0} = 8 \\
A\begin{pmatrix}
0 \\
1 \\
\vdots \\
1 \\
\end{pmatrix} = \begin{pmatrix}
0 \\
9 \\
\vdots \\
9 \\
\end{pmatrix} = 9\begin{pmatrix}
0 \\
1 \\
\vdots \\
1 \\
\end{pmatrix} \implies \dim E_{9} = 1 \\
\text{By looking at the first row we can see that } \det(I - A) = 0 \implies 1 \text{ is an eigenvalue of } A \\
\implies \dim E_{1} = 1 \\
\implies \dim E_{1} + \dim E_{9} + \dim E_{0} = 10 = n \implies \boxed{ A \text{ is diagonalizable} } \\
}
$$
# 3c
$$
\displaylines{
\text{Prove or disprove: } \lambda \neq 0 \text{ is an eigenvalue of } A \in \mathbb{F}^{n \times n} \implies \lambda^{2} \text{ is an eigenvalue of } AA^{T} \\
\\
\text{Disproof:} \\
A = \begin{pmatrix}
0 & 1 \\
-1 & 0 \\
\end{pmatrix} \implies P_{A}(x) = x^{2} + 1 = (x-i)(x+i) \\
AA^{T} = \begin{pmatrix}
0 & 1 \\
-1 & 0 \\
\end{pmatrix}\begin{pmatrix}
0 & -1 \\
1 & 0 \\
\end{pmatrix} = \begin{pmatrix}
1 & 0 \\
0 & 1 \\
\end{pmatrix} \implies \text{Eigenvalues of } AA^{T} \text{ are } \Set{ 1 } \\
\text{Let } \lambda = i \\
\lambda^{2} = -1 \text{ is not an eigenvalue of } AA^{T} \\
}
$$
# 4
$$
\displaylines{
\text{Let } A \in \mathbb{C}^{5 \times 5} \\
\text{Let } \forall i, j : A_{ij} \in \mathbb{R} \\
\text{Let } rank(A) = 3 \\
\text{Let } A - (1+i)I \text{ be non-invertible} \\
\text{Let } tr(A) = 0 \\
}
$$
## 4a
$$
\displaylines{
\text{Find all possible Jordan forms of } A \\
\\
\text{Solution:} \\
rank(A) = 3 \implies g_{0} = n - 3 = 2 \implies \text{There are two Jordan blocks with eigenvalue } 0 \\
\det(A - (1+i)I) = 0 \implies 1 + i \text{ is an eigenvalue of } A \\
\underbrace{ \implies }_{ \forall i,j : A_{ij} \in \mathbb{R} } 1-i \text{ is also an eigenvalue, with the same algebraic multiplicity} \\
\implies P_{A}(x) = x^{2+t}(x-(1+i))^{k}(x-(1-i))^{k} \cdot f(x) \\
k \geq 1 \implies \left\{\begin{array}{}
2 + t + 2k \geq 4 + t \\
2 + t + 2k \leq 5 \\
\end{array}\right. \implies \left\{\begin{array}{}
0 \leq t \leq 1 \\
2k \leq 3 \implies k = 1 \\
\end{array}\right. \\
tr(A) = tr(J_{A}) = \sum_{i=1}^{5} \lambda_{i} = 0 + 0 + (1-i) + (1+i) + \lambda = 0 \\
\implies \lambda = -2 \implies P_{A}(x) = x^{2}(x-(1+i))(x-(1-i))(x+2) \\
\implies A \text{ is diagonalizable and its Jordan form is} \\
J_{A} = \begin{pmatrix}
0 \\
 & 0 \\
 &  & -2 \\
 &  &  & 1-i \\
 &  &  &  & 1+i \\
\end{pmatrix} \\
}
$$
## 4b
$$
\displaylines{
\text{Let } f(x) = x^{2} - 9x + 20 \\
\text{Determine whether } f(A) \text{ is invertible} \\
\\
\text{Solution:} \\
f(A) = A^{2} - 9A + 20I \\
A \sim J_{A} \implies A^{2} - 9A + 20I = P(J_{A}^{2} - 9J_{A} + 20I)P^{-1} \\
J_{A}^{2} - 9J_{A} + 20I = \begin{pmatrix}
20 \\
 & 20 \\
 &  & 4 - 9(-2)+20 \\
 &  &  & -2i-9(1-i)+20 \\
 &  &  &  & 2i-9(1+i)+20 \\
\end{pmatrix} = \\
= \begin{pmatrix}
20 \\
 & 20 \\
 &  & 42 \\
 &  &  & 11+7i \\
 &  &  &  & -7i+11 \\
\end{pmatrix} \\
\implies \det(J_{A}^{2}-9J_{A}+20I) = 20 \cdot 20 \cdot 42 \cdot (11+7i) \cdot (11-7i) \neq 0 \\
\implies f(A) = A^{2} - 9A + 20I \text{ is a product of invertible matrices and is itself invertible} \\
}
$$
# 5a
$$
\displaylines{
\text{Let } A \in \mathbb{C}^{n \times n} \\
\text{Prove: } A + A^{*} \text{ is Hermitian} \\
\\
\text{Proof:} \\
(A+A^{*})^{*} = A^{*} + (A^{*})^{*} = A^{*} + A = A + A^{*} \\
}
$$
# 5b
$$
\displaylines{
\text{Let } A \in \mathbb{C}^{n \times n}: \forall v \in \mathbb{C}^{n}: \langle Av, v \rangle = 0 \\
\text{Prove: } A \text{ is nilpotent} \\
\\
\text{Proof:} \\
\text{Let } \lambda \text{ be an eigenvalue of } A \text{ with eigenvector } v \\
\langle Av, v \rangle = \langle \lambda v, v \rangle = \lambda \lVert v \rVert = 0 \\
v \neq 0 \implies \lVert v \rVert \neq 0 \implies \lambda = 0 \implies \boxed{ A \text{ is nilpotent} } \\
}
$$
# 5c
$$
\displaylines{
\text{Let } M \in \mathbb{C}^{n \times n} \text{ be Hermitian and } \forall v \in \mathbb{C}^{n}: \langle Mv, v \rangle = 0 \\
\text{Prove: } M = 0 \\
\\
\text{Proof:} \\
M \text{ is Hermitian, nilpotent, normal} \\
P_{M}(x) = x^{n} \implies \text{Characteristic polynomial is factorizable into linear factors} \\
\text{and } M \text{ is normal} \implies M \text{ is unitary diagonalizable} \\
\implies \exists P : M = PDP^{*} \text{ where } D = 0 \\
\implies \boxed{ M = 0 } \\
}
$$
# 5d
$$
\displaylines{
\text{Let } A \in \mathbb{C}^{n \times n} \text{ and } \forall v \in \mathbb{C}^{n}: \langle Av, v \rangle = 0 \\
\text{Prove: } A = 0 \\
\\
\text{Proof:} \\
A + A^{*} \text{ is Hermitian} \\
\forall v \in \mathbb{C}^{n}: \langle (A + A^{*})v, v \rangle = \langle Av, v \rangle + \langle A^{*}v, v \rangle = 0 + \langle v, Av \rangle = 0 + 0 = 0 \\
\implies \text{By 5c: } A + A^{*} = 0 \\
\implies A = -A^{*} \implies AA^{*} = A^{*}A = -A^{2} \\
\implies A \text{ is normal} \implies A \text{ is unitary diagonalizable and nilpotent} \implies \boxed{ A = 0 } \\
}
$$
