---
{"publish":true,"created":"01/07/25, 13:07","modified":"2025-11-21T21:10:14.538+02:00","tags":["Academia","Lecture","Linear-2"],"cssclasses":""}
---

## Singular Value Decomposition (SVD) #definition 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{m \times n} \\
A = \underbrace{ \overset{ m \times m }{ U } }_{ \text{Unitary} \quad } \overset{ m \times n }{ \underbrace{ \Sigma }_{ \text{"Almost diagonal"} } } \underbrace{ \overset{ n \times n }{ V^{*} } }_{ \quad \text{Unitary} } \\
\text{Diagonal entries of } \Sigma \text{ are singular values of } A, \text{ which are all real and positive} \\
}
$$
## SVD existence #theorem 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{m \times n} \\
\text{Then } \exists U, \Sigma, V: A = U\Sigma V^{*} \\
\\
\text{Proof:} \\
\text{Let } m < n \\
\implies A^{*} \in \mathbb{F}^{m \times n} \\
A = U\Sigma V^{*} \implies A^{*} = V\Sigma^{*}U^{*} \implies \text{It is enough to prove for } m \geq n \\
\text{Let } m \geq n \\
(A^{*}A)^{*} = A^{*}A \implies A^{*}A\text{ is Hermitian} \implies \text{Its eigenvalues are real} \\
A^{*}Av = \lambda v \implies \lambda \langle v, v \rangle = \langle \lambda v, v \rangle = \langle A^{*}Av, v \rangle = \langle Av, Av \rangle \geq 0 \\
\langle v, v \rangle \geq 0 \implies \lambda \geq 0 \implies \text{Eigenvalues of } A^{*}A \text{ are real and positive} \\
A^{*}A \text{ is Hermitian} \implies A^{*}A \text{ is normal} \\
\text{All eigenvalues are real} \implies \text{Its characteristic polynomial is factorizable into linear factors} \\
\implies \exists V \text{ unitary: } A^{*}A = V\underbrace{ \begin{pmatrix}
\lambda_{1} \\
 & \ddots \\
 &  & \lambda_{n} \\
\end{pmatrix} }_{ D }V^{*} \\
\text{Let } \lambda_{1} \geq \lambda_{2} \geq \dots \geq \lambda_{n} \geq 0 \\
\text{Let } v_{i} \text{ be } i\text{-th column of } V \\
\text{Let } W = AV \in \mathbb{F}^{m \times n} \\
\forall i \neq j \in [1, n]: \overline{\langle w_{i}, w_{j} \rangle} = \overline{\langle Av_{i}, Av_{j} \rangle} = \overline{(Av_{i})^{T}\overline{Av_{j}}} = v_{i}^{*}A^{*}Av_{j} = (V^{*}A^{*}AV)_{ij} = D_{ij} = 0 \\
W = \begin{pmatrix}
\overset{ | }{ \underset{ | }{ w_{1} } } & \dots & \overset{ | }{ \underset{ | }{ w_{n} } } \\
\end{pmatrix} = \begin{pmatrix}
\overset{ | }{ \underset{ | }{ \tilde{w_{1}} } } & \dots & \overset{ | }{ \underset{ | }{ \tilde{w_{n}} } } \\
\end{pmatrix}\begin{pmatrix}
\lVert w_{1} \rVert \\
 & \ddots \\
 &  & \lVert w_{n} \rVert \\
\end{pmatrix} \\
\forall i \in [1, n]: \lVert w_{i} \rVert^{2} = \langle w_{i}, w_{i} \rangle = D_{ii} = \lambda_{i} \implies \lVert w_{i} \rVert = \sqrt{ \lambda_{i} } \\
\implies W = \begin{pmatrix}
\overset{ | }{ \underset{ | }{ \tilde{w_{1}} } } & \dots & \overset{ | }{ \underset{ | }{ \tilde{w_{n}} } } \\
\end{pmatrix}\begin{pmatrix}
\sqrt{ \lambda_{1} } \\
 & \ddots \\
 &  & \sqrt{ \lambda_{n} } \\
\end{pmatrix} \\
\lambda_{i} = 0 \implies \lVert w_{i} \rVert = 0 \implies w_{i} = 0 \\
\implies \tilde{w_{i}} \text{ is some vector, orthogonal to $\Set{ \tilde{w_{1}}, \dots, \tilde{w_{i-1}} }$, e.g. calculated by Gram-Schmidt} \\
\text{Let } w_{1}, \dots, w_{r} \neq 0 \\
\implies \forall i \in [1, n]: \tilde{w_{i}} = \frac{w_{i}}{\lVert w_{i} \rVert} \\
\text{Let } B = \Set{ \tilde{w_{1}}, \dots, \tilde{w_{r}}, \dots \tilde{w_{m}} } \text{ be an orthonormal basis of } \mathbb{F^{m}} \\
W = \underbrace{ \begin{pmatrix}
\overset{ | }{ \underset{ | }{ \tilde{w_{1}} } } & \dots & \overset{ | }{ \underset{ | }{ \tilde{w_{r}} } } & \dots & \overset{ | }{ \underset{ | }{ \tilde{w_{m}} } } \\
\end{pmatrix} }_{ U \in \mathbb{F}^{m \times m}, \text{unitary} }\underbrace{ \begin{pmatrix}
\sqrt{ \lambda_{1} } \\
 & \ddots \\
 &  & \sqrt{ \lambda_{n} } \\
0 & \dots & 0 \\
\vdots & \ddots & \vdots \\
0 & \dots & 0 \\
\end{pmatrix} }_{ \Sigma \in \mathbb{F}^{m \times n} } \\
W = AV = U\Sigma \implies \boxed{ A = U\Sigma V^{*} } \\
}
$$
## Algorithm for calculating SVD
$$
\displaylines{
& \text{Let } A \in \mathbb{F}^{m \times n}, m \geq n \\
1. & \text{Unitary diagonalization of } A^{*}A \text{ by matrix } V \\
2. & \text{Reorder columns of } V \text{ and } D \text{ such that } \lambda_{1} \geq \dots \geq \lambda_{n} \\
3. & \Sigma = \begin{pmatrix}
\sqrt{ \lambda_{1} } \\
 & \ddots \\
 &  & \sqrt{ \lambda_{n} } \\
0 & \dots & 0 \\
\vdots & \ddots & \vdots \\
0 & \dots & 0 \\
\end{pmatrix} \\
4. & \text{Let } \forall i \in [1, n]: w_{i} = Av_{i} \\
5. & \Set{ w_{1}, \dots, w_{n} } \text{ is orthogonal, remove zeroes, add vectors up to orthogonal basis of } \mathbb{F}^{m} \\
6. & \text{Let } \forall i \in [1, r]: \tilde{w_{i}} = \frac{w_{i}}{\lVert w_{i} \rVert} = \frac{w_{i}}{\sqrt{ \lambda_{i} }} \text{ where } r \text{ is the number of non-zero vectors } w_{i} \\
7. & \text{Let } \forall i \in [r+1, m]: \tilde{w_{i}} \text{ be orthogonal to } \Set{ \tilde{w_{1}}, \dots, \tilde{w_{i}} } \text{ and } \lVert \tilde{w_{i}} \rVert = 1 \\
8. & U = \begin{pmatrix}
\overset{ | }{ \underset{ | }{ \tilde{w_{1}} } } & \dots & \tilde{w_{m}} \\
\end{pmatrix} \\
}
$$
---
$$
\displaylines{
A = \begin{pmatrix}
1 & 3 \\
2 & 0 \\
0 & 2 \\
\end{pmatrix} \\
\implies A^{*}A = \begin{pmatrix}
1 & 2 & 0 \\
3 & 0 & 2 \\
\end{pmatrix}\begin{pmatrix}
1 & 3 \\
2 & 0 \\
0 & 2 \\
\end{pmatrix} = \begin{pmatrix}
5 & 3 \\
3 & 13 \\
\end{pmatrix} \\
P_{A^{*}A}(x) = \begin{vmatrix}
x-5 & -3 \\
-3 & x-13 \\
\end{vmatrix} = (x-5)(x-13) - 9 = x^{2} - 18x + 56 = (x-14)(x-4) \\
\Sigma = \begin{pmatrix}
\sqrt{ 14 } & 0 \\
0 & 2 \\
0 & 0 \\
\end{pmatrix} \\
x = 14 \implies \begin{pmatrix}
9 & -3 \\
-3 & 1 \\
\end{pmatrix} \to \begin{pmatrix}
9 & -3 \\
0 & 0 \\
\end{pmatrix} \implies E_{14} = sp\Set{ \begin{pmatrix}
1 \\
3 \\
\end{pmatrix} } = sp\Set{ \begin{pmatrix}
\frac{1}{\sqrt{ 10 }} \\
\frac{3}{\sqrt{ 10 }} \\
\end{pmatrix} } \\
x = 4 \implies \begin{pmatrix}
-1 & -3 \\
-3 & -9 \\
\end{pmatrix} \to \begin{pmatrix}
-1 & -3 \\
0 & 0 \\
\end{pmatrix} \implies E_{4} = sp\Set{ \begin{pmatrix}
3 \\
-1 \\
\end{pmatrix} } = sp\Set{ \begin{pmatrix}
\frac{3}{\sqrt{ 10 }} \\
-\frac{1}{\sqrt{ 10 }} \\
\end{pmatrix} } \\
V = \begin{pmatrix}
\frac{1}{\sqrt{ 10 }} & \frac{3}{\sqrt{ 10 }} \\
\frac{3}{\sqrt{ 10 }} & -\frac{1}{\sqrt{ 10 }} \\
\end{pmatrix} \\
AV = \frac{1}{\sqrt{ 10 }}\begin{pmatrix}
1 & 3 \\
2 & 0 \\
0 & 2 \\
\end{pmatrix}\begin{pmatrix}
1 & 3 \\
3 & -1 \\
\end{pmatrix} = \frac{1}{\sqrt{ 10 }}\begin{pmatrix}
10 & 0 \\
2 & 6 \\
6 & -2 \\
\end{pmatrix} = \begin{pmatrix}
\frac{10}{\sqrt{ 10 }} & 0 \\
\frac{2}{\sqrt{ 10 }} & \frac{6}{\sqrt{ 10 }} \\
\frac{6}{\sqrt{ 10 }} & -\frac{2}{\sqrt{ 10 }} \\
\end{pmatrix} \\
\text{Gram-Schmidt:} \\
u_{1} = w_{1} \implies \frac{u_{1}}{\lVert u_{1} \rVert} = \frac{w_{1}}{\sqrt{ 14 }} \\
u_{2} = w_{2} - P_{u_{1}}(w_{2}) = w_{2} \implies \frac{w_{2}}{\lVert u_{2} \rVert} = \frac{u_{2}}{2} \\
\text{Let } u = \begin{pmatrix}
0 \\
0 \\
1 \\
\end{pmatrix} \\
u_{3} = u - \frac{\langle u, u_{1} \rangle}{\lVert u_{1} \rVert^{2}}u_{1} - \frac{\langle u, u_{2} \rangle}{\lVert u_{2} \rVert^{2}}u_{2} = u - \frac{\frac{6}{\sqrt{ 10 }}}{14}u_{1} + \frac{2}{4\sqrt{ 10 }}u_{2} = \\
= \begin{pmatrix}
0 \\
0 \\
1 \\
\end{pmatrix} - \frac{3}{7\sqrt{ 10 }}\begin{pmatrix}
\frac{10}{\sqrt{ 10 }} \\
\frac{2}{\sqrt{ 10 }} \\
\frac{6}{\sqrt{ 10 }} \\
\end{pmatrix} + \frac{1}{2\sqrt{ 10 }}\begin{pmatrix}
0 \\
\frac{6}{\sqrt{ 10 }} \\
-\frac{2}{\sqrt{ 10 }} \\
\end{pmatrix} = \begin{pmatrix}
-\frac{3}{7} \\
-\frac{6}{70}+\frac{6}{20} \\
1-\frac{18}{70}-\frac{1}{10}
\end{pmatrix} = \begin{pmatrix}
-\frac{3}{7} \\
\frac{3}{14} \\
\frac{9}{14} \\
\end{pmatrix} \\
\implies \frac{u_{3}}{\lVert u_{3} \rVert} = \frac{u_{3}}{\sqrt{ \frac{36}{49 \cdot 4} + \frac{9}{49 \cdot 4} + \frac{81}{49 \cdot 4} }} = \frac{\sqrt{ 14 }u_{3}}{3} = \begin{pmatrix}
-\frac{\sqrt{ 14 }}{7} \\
\frac{\sqrt{ 14 }}{14} \\
\frac{3\sqrt{ 14 }}{14} \\
\end{pmatrix} \\
U = \begin{pmatrix}
\frac{5}{\sqrt{ 35 }} & 0 & -\frac{\sqrt{ 14 }}{7} \\
\frac{1}{\sqrt{ 35 }} & \frac{3}{\sqrt{ 10 }} & \frac{\sqrt{ 14 }}{14} \\
\frac{3}{\sqrt{ 35 }} & -\frac{1}{\sqrt{ 10 }} & \frac{3\sqrt{ 14 }}{14} \\
\end{pmatrix} \\
}
$$
## Pseudo-inverse matrix #definition 
$$
\displaylines{
A = U\Sigma V^{*} \in \mathbb{F}^{m \times n} \\
A^{+} = V\Sigma^{+}U^{*} \in \mathbb{F}^{n \times m} \\
\text{Where } \Sigma^{+} = \begin{pmatrix}
\frac{1}{\sqrt{ \lambda_{1} }} &  &  & 0 & \dots & 0 \\
 & \ddots &  & \vdots & \ddots & \vdots \\
 &  & \frac{1}{\sqrt{ \lambda_{n} }} & 0 & \dots & 0 \\
\end{pmatrix} \\
}
$$
