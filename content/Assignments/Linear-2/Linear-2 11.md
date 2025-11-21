---
{"publish":true,"created":"25/06/25, 16:06","modified":"2025-11-21T21:10:02.789+02:00","tags":["Academia","Assignment","Linear-2"],"cssclasses":""}
---

# 1a
$$
\displaylines{
A = \begin{pmatrix}
3 & -1 & -3 & 1 \\
-1 & 3 & 1 & -3 \\
-3 & 1 & 3 & -1 \\
1 & -3 & -1 & 3 \\
\end{pmatrix} \in \mathbb{R}^{4 \times 4} \\
\text{Calculate unitary diagonalization of } A \\
\\
\text{Solution:} \\
A \in \mathbb{R}^{4 \times 4}, A \text{ is symmetric} \implies A \text{ is orthogonal diagonalizable} \\
P_{A}(x) = \begin{vmatrix}
x-3 & 1 & 3 & -1 \\
1 & x-3 & -1 & 3 \\
3 & -1 & x-3 & 1 \\
-1 & 3 & 1 & x-3 \\
\end{vmatrix} = \begin{vmatrix}
x & x & x & x \\
1 & x-3 & -1 & 3 \\
3 & -1 & x-3 & 1 \\
-1 & 3 & 1 & x-3 \\
\end{vmatrix} = \\
= x\begin{vmatrix}
1 & 1 & 1 & 1 \\
0 & x-4 & -2 & 2 \\
0 & -4 & x-6 & -2 \\
0 & 4 & 2 & x-2 \\
\end{vmatrix} = x\begin{vmatrix}
x-4 & -2 & 2 \\
-4 & x-6 & -2 \\
4 & 2 & x-2 \\
\end{vmatrix} = x\begin{vmatrix}
x & 0 & x \\
0 & x-4 & x-4 \\
4 & 2 & x-2 \\
\end{vmatrix} = \\
= x^{2}(x-4)\begin{vmatrix}
1 & 0 & 1 \\
0 & 1 & 1 \\
4 & 2 & x-2 \\
\end{vmatrix} = x^{2}(x-4)\begin{vmatrix}
1 & 0 & 1 \\
0 & 1 & 1 \\
0 & 0 & x-8 \\
\end{vmatrix} = x^{2}(x-4)(x-8) \\
x = 0 \implies \begin{pmatrix}
-3 & 1 & 3 & -1 \\
1 & -3 & -1 & 3 \\
3 & -1 & -3 & 1 \\
-1 & 3 & 1 & -3 \\
\end{pmatrix} \to \begin{pmatrix}
0 & -1 & 0 & 1 \\
1 & 0 & -1 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
\end{pmatrix} \implies E_{0} = sp\Set{ \begin{pmatrix}
1 \\
0 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
0 \\
1 \\
\end{pmatrix} } \\
\text{Gram-Schmidt:} \\
u_{1} = v_{1} \implies \frac{u_{1}}{\lVert u_{1} \rVert} = \frac{v_{1}}{\sqrt{ 2 }} \\
u_{2} = v_{2} - \frac{\langle v_{2}, u_{1} \rangle}{\lVert u_{1} \rVert^{2}}u_{1} \implies \frac{u_{2}}{\lVert u_{2} \rVert} = \frac{v_{2}}{\sqrt{ 2 }} \\
\implies E_{0} = sp\Set{ \begin{pmatrix}
\frac{1}{\sqrt{ 2 }} \\
0 \\
\frac{1}{\sqrt{ 2 }} \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
\frac{1}{\sqrt{ 2 }} \\
0 \\
\frac{1}{\sqrt{ 2 }} \\
\end{pmatrix} } \\
x = 4 \implies \begin{pmatrix}
1 & 1 & 3 & -1 \\
1 & 1 & -1 & 3 \\
3 & -1 & 1 & 1 \\
-1 & 3 & 1 & 1 \\
\end{pmatrix} \to \begin{pmatrix}
1 & 1 & 3 & -1 \\
0 & 0 & -4 & 4 \\
0 & -4 & -8 & 4 \\
0 & 4 & 4 & 0 \\
\end{pmatrix} \to \begin{pmatrix}
1 & 1 & 3 & -1 \\
0 & 0 & -1 & 1 \\
0 & -1 & -1 & 0 \\
0 & 0 & 0 & 0 \\
\end{pmatrix} \\
\implies E_{4} = sp\Set{ \begin{pmatrix}
-1 \\
-1 \\
1 \\
1 \\
\end{pmatrix} } = sp\Set{ \begin{pmatrix}
-\frac{1}{2} \\
-\frac{1}{2} \\
\frac{1}{2} \\
\frac{1}{2} \\
\end{pmatrix} } \\
x = 8 \implies \begin{pmatrix}
5 & 1 & 3 & -1 \\
1 & 5 & -1 & 3 \\
3 & -1 & 5 & 1 \\
-1 & 3 & 1 & 5 \\
\end{pmatrix} \to \begin{pmatrix}
5 & 1 & 3 & -1 \\
1 & 5 & -1 & 3 \\
8 & 0 & 8 & 0 \\
0 & 8 & 0 & 8 \\
\end{pmatrix} \to \begin{pmatrix}
2 & 0 & 0 & -2 \\
0 & 2 & -2 & 0 \\
1 & 0 & 1 & 0 \\
0 & 1 & 0 & 1 \\
\end{pmatrix} \\
\to \begin{pmatrix}
1 & 0 & 0 & -1 \\
0 & 1 & -1 & 0 \\
0 & 0 & 1 & 1 \\
0 & 0 & 0 & 0 \\
\end{pmatrix} \implies E_{8} = sp\Set{ \begin{pmatrix}
1 \\
-1 \\
-1 \\
1 \\
\end{pmatrix} } = sp\Set{ \begin{pmatrix}
\frac{1}{2} \\
-\frac{1}{2} \\
-\frac{1}{2} \\
\frac{1}{2} \\
\end{pmatrix} } \\
\implies A = PDP^{-1} = \begin{pmatrix}
\frac{1}{\sqrt{ 2 }} & 0 & -\frac{1}{2} & \frac{1}{2} \\
0 & \frac{1}{\sqrt{ 2 }} & -\frac{1}{2} & -\frac{1}{2} \\
\frac{1}{\sqrt{ 2 }} & 0 & \frac{1}{2} & -\frac{1}{2} \\
0 & \frac{1}{\sqrt{ 2 }} & \frac{1}{2} & \frac{1}{2} \\
\end{pmatrix}\begin{pmatrix}
0 \\
 & 0 \\
 &  & 4 \\
 &  &  & 8 \\
\end{pmatrix}\begin{pmatrix}
\frac{1}{\sqrt{ 2 }} & 0 & -\frac{1}{2} & \frac{1}{2} \\
0 & \frac{1}{\sqrt{ 2 }} & -\frac{1}{2} & -\frac{1}{2} \\
\frac{1}{\sqrt{ 2 }} & 0 & \frac{1}{2} & -\frac{1}{2} \\
0 & \frac{1}{\sqrt{ 2 }} & \frac{1}{2} & \frac{1}{2} \\
\end{pmatrix}^{T} \\
}
$$

# 1b
$$
\displaylines{
A = \begin{pmatrix}
2 & 1 & 1 \\
1 & 2 & 1 \\
1 & 1 & 2 \\
\end{pmatrix} \in \mathbb{R}^{2 \times 2} \\
\text{Calculate unitary diagonalization of } A \\
\\
\text{Solution:} \\
A \in \mathbb{R}^{2 \times 2}, A \text{ is symmetric} \implies A \text{ is orthogonal diagonalizable} \\
P_{A}(x) = \begin{vmatrix}
x-2 & -1 & -1 \\
-1 & x-2 & -1 \\
-1 & -1 & x-2 \\
\end{vmatrix} = (x-4)\begin{vmatrix}
1 & 1 & 1 \\
-1 & x-2 & -1 \\
-1 & -1 & x-2 \\
\end{vmatrix} = (x-4)\begin{vmatrix}
1 & 1 & 1 \\
0 & x-1 & 0 \\
0 & 0 & x-1 \\
\end{vmatrix} = \\
= (x-4)(x-1)^{2} \\
x = 4 \implies \begin{pmatrix}
2 & -1 & -1 \\
-1 & 2 & -1 \\
-1 & -1 & 2 \\
\end{pmatrix} \to \begin{pmatrix}
0 & 0 & 0 \\
0 & 1 & -1 \\
-1 & 0 & 1 \\
\end{pmatrix} \implies E_{4} = sp\Set{ \begin{pmatrix}
1 \\
1 \\
1 \\
\end{pmatrix} } = sp\Set{ \begin{pmatrix}
\frac{1}{\sqrt{ 3 }} \\
\frac{1}{\sqrt{ 3 }} \\
\frac{1}{\sqrt{ 3 }} \\
\end{pmatrix} } \\
x = 1 \implies \begin{pmatrix}
-1 & -1 & -1 \\
-1 & -1 & -1 \\
-1 & -1 & -1 \\
\end{pmatrix} \to \begin{pmatrix}
-1 & -1 & -1 \\
0 & 0 & 0 \\
0 & 0 & 0 \\
\end{pmatrix} \\
\implies E_{1} = sp\Set{ \begin{pmatrix}
-1 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
-1 \\
0 \\
1 \\
\end{pmatrix} } \\
\text{Gram-Schmidt:} \\
u_{1} = v_{1} \implies \frac{u_{1}}{\lVert u_{1} \rVert} = \frac{v_{1}}{\sqrt{ 2 }} \\
u_{2} = v_{2} - \frac{\langle v_{2}, u_{1} \rangle}{\lVert u_{1} \rVert^{2}}u_{1} = \begin{pmatrix}
-1 \\
0 \\
1 \\
\end{pmatrix} - \frac{1}{2}\begin{pmatrix}
-1 \\
1 \\
0 \\
\end{pmatrix} = \begin{pmatrix}
-\frac{1}{2} \\
-\frac{1}{2} \\
1 \\
\end{pmatrix} \implies \frac{u_{2}}{\lVert u_{2} \rVert} = \frac{u_{2}}{\sqrt{ \frac{3}{2} }} \\
\implies E_{1} = sp\Set{ \begin{pmatrix}
-\frac{1}{\sqrt{ 2 }} \\
\frac{1}{\sqrt{ 2 }} \\
0 \\
\end{pmatrix}, \begin{pmatrix}
-\frac{1}{\sqrt{ 6 }} \\
-\frac{1}{\sqrt{ 6 }} \\
\frac{2}{\sqrt{ 6 }} \\
\end{pmatrix} } \\
\implies A = PDP^{-1} = \begin{pmatrix}
\frac{1}{\sqrt{ 3 }} & -\frac{1}{\sqrt{ 2 }} & -\frac{1}{\sqrt{ 6 }} \\
\frac{1}{\sqrt{ 3 }} & \frac{1}{\sqrt{ 2 }} & -\frac{1}{\sqrt{ 6 }} \\
\frac{1}{\sqrt{ 3 }} & 0 & \frac{2}{\sqrt{ 6 }} \\
\end{pmatrix}\begin{pmatrix}
4 \\
 & 1 \\
 &  & 1 \\
\end{pmatrix}\begin{pmatrix}
\frac{1}{\sqrt{ 3 }} & -\frac{1}{\sqrt{ 2 }} & -\frac{1}{\sqrt{ 6 }} \\
\frac{1}{\sqrt{ 3 }} & \frac{1}{\sqrt{ 2 }} & -\frac{1}{\sqrt{ 6 }} \\
\frac{1}{\sqrt{ 3 }} & 0 & \frac{2}{\sqrt{ 6 }} \\
\end{pmatrix}^{T} \\
}
$$
# 1c
$$
\displaylines{
A = \begin{pmatrix}
1 & i & 1 \\
-i & 1 & -i \\
1 & i & 1 \\
\end{pmatrix} \in \mathbb{C}^{3 \times 3} \\
\text{Calculate unitary diagonalization of } A \\
\\
\text{Solution:} \\
A = A^{*} \implies A \text{ is unitary} \implies A \text{ is normal} \\
P_{A}(x) = \begin{vmatrix}
x-1 & -i & -1 \\
i & x-1 & i \\
-1 & -i & x-1 \\
\end{vmatrix} = \frac{1}{i^{2}}\begin{vmatrix}
(x-1)i & 1 & -i \\
i & x-1 & i \\
-i & 1 & (x-1)i \\
\end{vmatrix} = \frac{i^{2}}{i^{2}}\begin{vmatrix}
x-1 & 1 & -1 \\
1 & x-1 & 1 \\
-1 & 1 & x-1 \\
\end{vmatrix} = \\
= \begin{vmatrix}
x & 0 & -x \\
1 & x-1 & 1 \\
-1 & 1 & x-1 \\
\end{vmatrix} = \begin{vmatrix}
x & 0 & 0 \\
1 & x-1 & 2 \\
-1 & 1 & x-2 \\
\end{vmatrix} = x(x^{2}-3x+2-2) = x^{2}(x-3) \\
\implies P_{A}(x) \text{ is factorizable into linear factors} \implies A \text{ is unitary diagonalizable} \\
x = 0 \implies \begin{pmatrix}
-1 & -i & -1 \\
i & -1 & i \\
-1 & -i & -1 \\
\end{pmatrix} \to \begin{pmatrix}
-1 & -i & -1 \\
0 & 0 & 0 \\
0 & 0 & 0 \\
\end{pmatrix} \implies E_{0} = sp\Set{ \begin{pmatrix}
-i \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
-1 \\
0 \\
1 \\
\end{pmatrix} } \\
\text{Gram-Schmidt:} \\
u_{1} = v_{1} \implies \frac{u_{1}}{\lVert u_{1} \rVert} = \frac{v_{1}}{\sqrt{ 2 }} \\
u_{2} = v_{2} - \frac{\langle v_{2}, u_{1} \rangle}{\lVert u_{1} \rVert^{2}}u_{1} = \begin{pmatrix}
-1 \\
0 \\
1 \\
\end{pmatrix} - \frac{-i}{2}\begin{pmatrix}
-i \\
1 \\
0 \\
\end{pmatrix} = \begin{pmatrix}
-\frac{1}{2} \\
\frac{i}{2} \\
1 \\
\end{pmatrix} \implies \frac{u_{2}}{\lVert u_{2} \rVert} = \frac{u_{2}}{\sqrt{ \frac{3}{2} }} \\
\implies E_{0} = sp\Set{ \begin{pmatrix}
-\frac{i}{\sqrt{ 2 }} \\
\frac{1}{\sqrt{ 2 }} \\
0 \\
\end{pmatrix}, \begin{pmatrix}
-\frac{1}{\sqrt{ 6 }} \\
\frac{i}{\sqrt{ 6 }} \\
\frac{2}{\sqrt{ 6 }} \\
\end{pmatrix} } \\
x = 3 \implies \begin{pmatrix}
2 & -i & -1 \\
i & 2 & i \\
-1 & -i & 2 \\
\end{pmatrix} \to \begin{pmatrix}
4 & -2i & -2 \\
3 & 0 & -3 \\
-3 & 0 & 3 \\
\end{pmatrix} \to \begin{pmatrix}
2 & -i & -1 \\
1 & 0 & -1 \\
0 & 0 & 0 \\
\end{pmatrix} \\
\implies E_{3} = sp\Set{ \begin{pmatrix}
1 \\
-i \\
1 \\
\end{pmatrix} } = sp\Set{ \begin{pmatrix}
\frac{1}{\sqrt{ 3 }} \\
-\frac{i}{\sqrt{ 3 }} \\
\frac{1}{\sqrt{ 3 }} \\
\end{pmatrix} } \\
\implies A = PDP^{-1} = \begin{pmatrix}
-\frac{i}{\sqrt{ 2 }} & -\frac{1}{\sqrt{ 6 }} & \frac{1}{\sqrt{ 3 }} \\
\frac{1}{\sqrt{ 2 }} & \frac{i}{\sqrt{ 6 }} & -\frac{i}{\sqrt{ 3 }} \\
0 & \frac{2}{\sqrt{ 6 }} & \frac{1}{\sqrt{ 3 }} \\
\end{pmatrix}\begin{pmatrix}
0 \\
 & 0 \\
 &  & 3 \\
\end{pmatrix}\begin{pmatrix}
-\frac{i}{\sqrt{ 2 }} & -\frac{1}{\sqrt{ 6 }} & \frac{1}{\sqrt{ 3 }} \\
\frac{1}{\sqrt{ 2 }} & \frac{i}{\sqrt{ 6 }} & -\frac{i}{\sqrt{ 3 }} \\
0 & \frac{2}{\sqrt{ 6 }} & \frac{1}{\sqrt{ 3 }} \\
\end{pmatrix}^{*} \\
}
$$
# 2
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \text{ be symmetric and invertible} \\
\text{Let } E = \Set{ v_{1}, \dots, v_{n} } \text{ be an orthonormal basis of } \mathbb{R}^{n} \text{ where } v_{i} \text{ are eigenvectors of } A \\
\text{Prove: } Ax = y \implies x = \sum_{i=1}^{n} \frac{\langle y, v_{i} \rangle}{\lambda_{i}}v_{i} \\
\\
\text{Proof:} \\
E \text{ is an orthonormal basis consisting of eigenvectors of } A \implies A \text{ is orthogonal diagonalizable} \\
\implies A = \begin{pmatrix}
\overset{ | }{ \underset{ | }{ v_{1} } } & \dots & \overset{ | }{ \underset{ | }{ v_{n} } } \\
\end{pmatrix}\begin{pmatrix}
\lambda_{1} \\
 & \ddots \\
 &  & \lambda_{n} \\
\end{pmatrix}\begin{pmatrix}
-v_{1}- \\
\vdots \\
-v_{n}- \\
\end{pmatrix} \\
A \text{ is invertible} \implies \forall i \in [1, n]: \lambda_{i} \neq 0 \implies D \text{ is invertible} \\
D^{-1} = \begin{pmatrix}
\frac{1}{\lambda_{1}} \\
 & \ddots \\
 &  & \frac{1}{\lambda_{n}} \\
\end{pmatrix} \\
Ax = y \implies PDP^{T}x = y \implies PD^{-1}P^{T}PDP^{T}x = PD^{-1}P^{T}y \\
\implies x = PD^{-1}P^{T}y = PD^{-1}\begin{pmatrix}
\langle v_{1}, y \rangle \\
\vdots \\
\langle v_{n}, y \rangle \\
\end{pmatrix} = PD^{-1}\begin{pmatrix}
\langle y, v_{1} \rangle \\
\vdots \\
\langle y, v_{n} \rangle \\
\end{pmatrix} = P\begin{pmatrix}
\frac{\langle y, v_{1} \rangle}{\lambda_{1}} \\
\vdots \\
\frac{\langle y, v_{n} \rangle}{\lambda_{n}} \\
\end{pmatrix} = \\
= \sum_{i=1}^{n} \frac{\langle y, v_{i} \rangle}{\lambda_{i}}v_{i} \\
}
$$
# 3
$$
\displaylines{
\text{Let } T: \mathbb{C}^{2} \to \mathbb{C}^{2} \\
T\begin{pmatrix}
z \\
w \\
\end{pmatrix} = \begin{pmatrix}
2z + 2iw \\
2z + (4+2i)w \\
\end{pmatrix} \\
\text{Show that } T \text{ is normal} \\
\\
\text{Solution:} \\
\text{Standard basis } S = \Set{ e_{1}, e_{2} } \text{ is orthonormal in relation to standard inner product} \\
[T(e_{1})]_{S} = T(e_{1}) = \begin{pmatrix}
2 \\
2 \\
\end{pmatrix} \\
[T(e_{2})]_{S} = T(e_{2}) = \begin{pmatrix}
2i \\
4+2i \\
\end{pmatrix} \\
\implies [T]^{S}_{S} = \begin{pmatrix}
2 & 2i \\
2 & 4+2i \\
\end{pmatrix} \implies [T^{*}]^{S}_{S} = ([T]^{S}_{S})^{*} = \begin{pmatrix}
2 & 2 \\
-2i & 4-2i \\
\end{pmatrix} \\
\implies T^{*}\begin{pmatrix}
z \\
w \\
\end{pmatrix} = [T^{*}]^{S}_{S}\begin{pmatrix}
z \\
w \\
\end{pmatrix} = \begin{pmatrix}
2z+2w \\
-2iz + (4-2i)w \\
\end{pmatrix} \\
\forall z, w \in \mathbb{C}: TT^{*}\begin{pmatrix}
z \\
w \\
\end{pmatrix} = T\begin{pmatrix}
2z+2w \\
-2iz + (4-2i)w \\
\end{pmatrix} = \\
= \begin{pmatrix}
2(2z+2w) + 2i(-2zi+(4-2i)w) \\
2(2z+2w) + (4+2i)(-2iz+(4-2i)w) \\
\end{pmatrix} = \begin{pmatrix}
8z+(8+8i)w \\
(8-8i)z+24w \\
\end{pmatrix} \\
\forall z, w \in \mathbb{C}: T^{*}T\begin{pmatrix}
z \\
w \\
\end{pmatrix} = T^{*}\begin{pmatrix}
2z+2iw \\
2z+(4+2i)w \\
\end{pmatrix} = \\
= \begin{pmatrix}
2(2z+2iw) + 2(2z+(4+2i)w) \\
-2i(2z+2iw)+(4-2i)(2z+(4+2i)w)
\end{pmatrix} = \begin{pmatrix}
8z+(8+8i)w \\
(8-8i)z+24w \\
\end{pmatrix} \\
\implies \forall z, w \in \mathbb{C}: TT^{*}\begin{pmatrix}
z \\
w \\
\end{pmatrix} = T^{*}T\begin{pmatrix}
z \\
w \\
\end{pmatrix} \implies TT^{*} = T^{*}T \implies \boxed{ T \text{ is normal} } \\
}
$$
# 4
$$
\displaylines{
\text{Let } V \text{ be a vector space over } \mathbb{C} \\
\text{Let } T: V \to V \text{ be hermitian} \\
\text{Prove: } \exists S \text{ normal}: T = S^{2} \\
\\
\text{Proof:} \\
P_{T}(x) \in \mathbb{C}_{n}[x] \implies P_{T}(x) \text{ is factorizable into linear parts} \\
T \text{ is hermitian} \implies T \text{ is normal} \\
\implies T \text{ is unitary diagonalizable} \\
\exists B = \Set{ v_{1}, \dots, v_{n} } \text{ orthonormal basis of } V: [T]^{B}_{B} \text{ is diagonal} \\
\implies \forall i \in [1, n]: Tv_{i} = \lambda_{i}v_{i}, \quad \lambda_{i} \in \mathbb{C} \\
\forall z \in \mathbb{C}: \exists w : w^{2} = z \implies w = \sqrt{ z } \\
\implies \exists S: \forall i \in [1, n]: Sv_{i} = \sqrt{ \lambda_{i} }v_{i} \implies S^{2}v_{i} = \lambda_{i}v_{i} = Tv_{i} \\
\implies S^{2} = T \\
\forall i \in [1, n]: Sv_{i} = \sqrt{ \lambda_{i} }v_{i} \implies S^{*}v_{i} = \overline{\sqrt{ \lambda_{i} }}v_{i} \\
\implies \left\{\begin{array}{}
SS^{*}v_{i} = \sqrt{ \lambda_{i} }\overline{\sqrt{ \lambda_{i} }}v_{i} \\
S^{*}Sv_{i} = \overline{\sqrt{ \lambda_{i} }}\sqrt{ \lambda_{i} }v_{i} \\
\end{array}\right. \implies SS^{*} = S^{*}S \implies \boxed{ S \text{ is normal} } \\
}
$$
# 5
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \text{ be symmetric with } n \text{ non-negative eigenvalues} \\
\text{Prove: } tr(A^{2}) \leq tr(A)^{2} \\
\\
\text{Proof:} \\
A \text{ has } n \text{ eigenvalues} \implies A \text{ is diagonalizable} \\
\implies A \sim D = \begin{pmatrix}
\lambda_{1} \\
 & \ddots \\
 &  & \lambda_{n} \\
\end{pmatrix} \implies tr(A)^{2} = (\lambda_{1} + \dots + \lambda_{n})^{2} \\
A^{2} \sim D^{2} = \begin{pmatrix}
\lambda_{1}^{2} \\
 & \ddots \\
 &  & \lambda_{n}^{2} \\
\end{pmatrix} \implies tr(A^{2}) = \lambda_{1}^{2} + \dots + \lambda_{n}^{2} \\
tr(A)^{2} - tr(A^{2}) = (\lambda_{1} + \dots + \lambda_{n})^{2} - \lambda_{1}^{2} - \dots - \lambda_{n}^{2} = 2 \sum_{1 \leq i \neq j \leq n} \lambda_{i}\lambda_{j} \\
\forall i, j \in [1, n]: \lambda_{i} \geq 0, \lambda_{j} \geq 0 \implies \lambda_{i}\lambda_{j} \geq 0 \implies \sum_{1 \leq i \neq j \leq n} \lambda_{i}\lambda_{j} \geq 0 \\
\implies tr(A)^{2} - tr(A^{2}) \geq 0 \implies \boxed{ tr(A)^{2} \geq tr(A^{2}) } \\
}
$$
# 6
$$
\displaylines{
\text{Let } u, v \in V: \lVert u \rVert = \lVert v \rVert \\
\text{Prove: } \exists T: V \to V \text{ unitary linear operator such that} \\
T(u) = v \\
\\
\text{Proof:} \\
\text{Let } u_{1} = \frac{u}{\lVert u \rVert} \\
\text{Let } B_{u} = \Set{ u_{1}, \dots, u_{n} } \text{ be an orthonormal basis of } V \\
\text{Let } v_{1} = \frac{v}{\lVert v \rVert} \\
\text{Let } B_{v} = \Set{ v_{1}, \dots, v_{n} } \text{ be an orthonormal basis of } V \\
\text{Let } \forall i \in [1, n]: T(u_{i}) = v_{i} \\
T(u) = T(\lVert u \rVert u_{1}) = \lVert u \rVert v_{1} = \lVert v \rVert v_{1} = v \\
\text{Let } w \in V \\
w = \sum_{i=1}^{n} \alpha_{i}u_{i} \implies \lVert w \rVert^{2} = \left\lVert  \sum_{i=1}^{n} \alpha_{i}u_{i} \right\rVert^{2} \underset{ \text{Pythagorean} }{ = } \sum_{i=1}^{n} \left\lvert \alpha_{i} \right\rvert^{2} \cdot \lVert u_{i} \rVert^{2} = \sum_{i=1}^{n} \left\lvert \alpha_{i} \right\rvert^{2} \\
Tw = T\left( \sum_{i=1}^{n} \alpha_{i}u_{i} \right) = \sum_{i=1}^{n} \alpha_{i}v_{i} \implies \lVert Tw \rVert^{2} = \left\lVert  \sum_{i=1}^{n} \alpha_{i}v_{i}  \right\rVert^{2} \underset{ \text{Pythagorean} }{ = } \sum_{i=1}^{n} \left\lvert \alpha_{i} \right\rvert^{2} \cdot \lVert v_{i} \rVert^{2} = \sum_{i=1}^{n} \left\lvert \alpha_{i} \right\rvert^{2} \\
\implies \forall w \in V: \lVert w \rVert^{2} = \lVert Tw \rVert^{2} \implies \lVert w \rVert = \lVert Tw \rVert \implies \boxed{ T \text{ is unitary} } \\
}
$$
# 7
$$
\displaylines{
\text{Let } V \text{ be an inner product space over } \mathbb{C} \\
\text{Let } T: V \to V \text{ be a linear operator} \\
\text{Let } T \text{ be anti-hermitian and unitary} \\
}
$$
## 7a
$$
\displaylines{
\text{Prove: eigenvalues of } T \text{ are } \Set{ i, -i } \\
\\
\text{Proof:} \\
T^{*} = -T \\
\text{Let } \lambda \text{ be an eigevalue of } T \\
\implies \exists v \in V: Tv = \lambda v \implies T^{*}v = -Tv = -\lambda v \implies -\lambda \text{ is an eigenvalue of } T^{*} \\
TT^{*} = I \implies TT^{*}v = T(-\lambda v) = -\lambda^{2}v = Iv = v \\
\implies -\lambda^{2} = 1 \implies \boxed{ \lambda \in \Set{ i, -i } } \\
}
$$
## 7b
$$
\displaylines{
\text{Determine whether } T + iI \text{ is diagonalizable} \\
\\
\text{Solution:} \\
P_{T + iI}(x) \in \mathbb{C}_{n}[x] \implies \text{It is factorizable into linear factors} \\
(T + iI)^{*} = T^{*} - iI = -T-iI = -(T+iI) \\
(T+iI)(T+iI)^{*} = -(T + iI)^{2} = -(T+iI)(T+iI) = (T+iI)^{*}(T+iI) \\
\implies T + iI \text{ is normal} \implies \boxed{ T + iI \text{ is unitary(!) diagonalizable} } \\
}
$$
