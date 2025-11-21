---
{"publish":true,"created":"01/07/25, 10:07","modified":"2025-11-21T21:10:02.800+02:00","tags":["Academia","Assignment","Linear-2"],"cssclasses":""}
---

# 1
$$
\displaylines{
A = \begin{pmatrix}
1 & -1 & -1 \\
-1 & 1 & -1 \\
-1 & -1 & 1 \\
\end{pmatrix} \in \mathbb{R}^{3 \times 3} \\
\text{Calculate orthogonal diagonalization of } A \\
\\
\text{Solution:} \\
A \text{ is symmetric} \implies A \text{ is orthogonal diagonalizable} \\
P_{A}(x) = \begin{vmatrix}
x-1 & 1 & 1 \\
1 & x-1 & 1 \\
1 & 1 & x-1 \\
\end{vmatrix} = (x+1)\begin{vmatrix}
1 & 1 & 1 \\
1 & x-1 & 1 \\
1 & 1 & x-1 \\
\end{vmatrix} = (x+1)\begin{vmatrix}
1 & 1 & 1 \\
0 & x-2 & 0 \\
0 & 0 & x-2 \\
\end{vmatrix} = \\
= (x+1)(x-2)^{2} \\
x = -1 \implies \begin{pmatrix}
-2 & 1 & 1 \\
1 & -2 & 1 \\
1 & 1 & -2 \\
\end{pmatrix} \to \begin{pmatrix}
-1 & \frac{1}{2} & \frac{1}{2} \\
0 & -\frac{3}{2} & \frac{3}{2} \\
0 & 0 & 0 \\
\end{pmatrix} \implies E_{-1} = sp\Set{ \begin{pmatrix}
1 \\
1 \\
1 \\
\end{pmatrix} } = sp\Set{ \begin{pmatrix}
\frac{1}{\sqrt{ 3 }} \\
\frac{1}{\sqrt{ 3 }} \\
\frac{1}{\sqrt{ 3 }} \\
\end{pmatrix} } \\
x = 2 \implies \begin{pmatrix}
1 & 1 & 1 \\
1 & 1 & 1 \\
1 & 1 & 1 \\
\end{pmatrix} \to \begin{pmatrix}
1 & 1 & 1 \\
0 & 0 & 0 \\
0 & 0 & 0 \\
\end{pmatrix} \\
\implies E_{2} = sp\Set{ \begin{pmatrix}
-1 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
-1 \\
0 \\
1 \\
\end{pmatrix} } \\
\text{Gram-Schmidt:} \\
u_{1} = v_{1} \implies \frac{u_{1}}{\lVert u_{1} \rVert} = \frac{u_{1}}{\sqrt{ 2 }} = \begin{pmatrix}
-\frac{1}{\sqrt{ 2 }} \\
\frac{1}{\sqrt{ 2 }} \\
0 \\
\end{pmatrix} \\
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
\end{pmatrix} \implies \frac{u_{2}}{\lVert u_{2} \rVert} = \frac{u_{2}}{\sqrt{ \frac{3}{2} }} = \begin{pmatrix}
-\frac{1}{\sqrt{ 6 }} \\
-\frac{1}{\sqrt{ 6 }} \\
\frac{2}{\sqrt{ 6 }} \\
\end{pmatrix} \\
\implies E_{2} = sp\Set{ \begin{pmatrix}
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
-1 \\
 & 2 \\
 &  & 2 \\
\end{pmatrix}\begin{pmatrix}
\frac{1}{\sqrt{ 3 }} & -\frac{1}{\sqrt{ 2 }} & -\frac{1}{\sqrt{ 6 }} \\
\frac{1}{\sqrt{ 3 }} & \frac{1}{\sqrt{ 2 }} & -\frac{1}{\sqrt{ 6 }} \\
\frac{1}{\sqrt{ 3 }} & 0 & \frac{2}{\sqrt{ 6 }} \\
\end{pmatrix}^{T} \\
}
$$
# 2
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \text{ be symmetric} \\
\text{Let } \exists k \in \mathbb{N}: A^{k} = I \\
\text{Prove: } A^{2} = I \\
\\
\text{Proof:} \\
A \text{ is symmetric} \implies A \text{ is orthogonal diagonalizable} \\
\implies \exists P \text{ orthogonal: } A = PDP^{-1} = PDP^{T} \\
\implies A^{k} = PD^{k}P^{-1} = I \implies P^{-1}PD^{k}P^{-}P = P^{-1}IP \implies D^{k} = I \\
\implies \text{Eigenvalues of } A \text{ are } \Set{ 1, -1 } \\
\implies \text{Eigenvalues of } A^{2} \text{ are } \Set{ 1 } \implies A^{2} \sim I \implies \boxed{ A^{2} = I } \\
}
$$
# 3
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \text{ be symmetric} \\
\text{Let } B = A^{2} - 6A + 11 \\
\text{Determine whether } B \text{ is diagonalizable, invertible} \\
\\
\text{Solution:} \\
A \text{ is symmetric} \implies A \text{ is orthogonal diagonalizable} \\
\implies \exists P: A = PDP^{-1} = PDP^{T} \\
B = A^{2} - 6A + 11 = P\underbrace{ (D^{2} - 6D + 11I) }_{ \text{Diagonal} }P^{-1} \implies \boxed{ B \text{ is orthogonal diagonalizable} } \\
\text{Let } D = \begin{pmatrix}
a & 0 \\
0 & b \\
\end{pmatrix} \implies B = P\begin{pmatrix}
a^{2} - 6a + 11 & 0 \\
0 & b^{2} - 6b + 11 \\
\end{pmatrix}P^{-1} = \\
= P\underbrace{ \begin{pmatrix}
(a-3)^{2} + 2 & 0 \\
0 & (b-3)^{2} + 2 \\
\end{pmatrix} }_{ \forall a, b \in \mathbb{R}: \text{Invertible} }P^{-1} \implies \boxed{ B \text{ is invertible} } \\
}
$$
# 4
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \text{ be symmetric} \\
\text{Prove: } \exists B \text{ symmetric: } B^{3} = A \\
\\
\text{Proof:} \\
A \text{ is symmetric} \implies A \text{ is orthogonal diagonalizable} \\
\implies \exists P: A = PDP^{-1} = PDP^{T} \\
\forall r \in \mathbb{R}: \exists s \in \mathbb{R}: s^{3} = r \implies s = \sqrt[3]{ r } \\
D = \begin{pmatrix}
\lambda_{1} \\
 & \ddots \\
 &  & \lambda_{n} \\
\end{pmatrix} \implies \exists D_{B} = \begin{pmatrix}
\sqrt[3]{ \lambda_{1} } \\
 & \ddots \\
 &  & \sqrt[3]{ \lambda_{n} } \\
\end{pmatrix} \\
\text{Let } B = PD_{B}P^{-1} \implies \boxed{ B^{3} = PD_{B}^{3}P^{-1} = PDP^{-1} = A } \\
}
$$
# 5
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \text{ be symmetric} \\
\text{Let } \exists k \in \mathbb{N}: A^{k} = I \\
\text{Prove: } A^{T} = A^{-1} \\
\\
\text{Proof:} \\
A \text{ is symmetric} \implies A = A^{T} \\
\text{As proved in 2: } A^{2} = I \implies AA = I \implies AA^{T} = I \implies \boxed{ A^{T} = A^{-1} } \\
}
$$
# 6
$$
\displaylines{
\text{Let } M \in \mathbb{R}^{n \times n} \text{ be symmetric} \\
\text{Let } \forall i \in [1, n]: \lambda_{i} > 0 \\
}
$$
## 6a
$$
\displaylines{
\text{Prove: } \exists R \text{ invertible: } M = RR^{T} \\
\\
\text{Proof:} \\
M \text{ is symmetric} \implies M \text{ is orthogonal diagonalizable} \\
\implies \exists P: M = PDP^{-1} = PDP^{T} \\
\forall i \in [1, n]: \lambda_{i} > 0 \implies \exists \sqrt{ \lambda_{i} } \\
\text{Let } C = \begin{pmatrix}
\sqrt{ \lambda_{1} } \\
 & \ddots \\
 &  & \sqrt{ \lambda_{n} } \\
\end{pmatrix} \implies C = C^{T} \text{ and } C \text{ is invertible} \\
\implies C^{2} = D \implies M = PC CP^{T} = PC C^{T}P^{T} = (PC)(PC)^{T} \\
\text{Let } R = PC \\
\boxed{ M = (PC)(PC)^{T} = R R^{T} } \\
C \text{ is invertible} \implies \boxed{ R = PC \text{ is invertible} } \\
}
$$
## 6b
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \text{ be symmetric} \\
\text{Prove: } \exists C \text{ invertible}: C^{T}MC = I \text{ and } C^{T}AC \text{ is diagonal} \\
\\
\text{Proof:} \\
M = PDP^{-1} = PDP^{T} \\
\text{Let } S = \begin{pmatrix}
\frac{1}{\sqrt{ \lambda_{1} }} \\
 & \ddots \\
 &  & \frac{1}{\sqrt{ \lambda_{n} }} \\
\end{pmatrix} \\
\text{Let } C_{1} = PS \implies C_{1}^{T}MC_{1} = S^{T}P^{T}MPS = S^{T}DS = \begin{pmatrix}
\frac{\lambda_{1}}{\sqrt{ \lambda_{1} }^{2}} \\
 & \ddots \\
 &  & \frac{\lambda_{n}}{\sqrt{ \lambda_{n} }^{2}} \\
\end{pmatrix} = I \\
\text{Let } B = C_{1}^{T}AC_{1} \\
B^{T} = C_{1}^{T}A^{T}C_{1} = C_{1}^{T}AC_{1} = B \implies B \text{ is symmetric} \implies B \text{ is orthogonal diagonalizable} \\
B = P_{B}D_{B}P_{B}^{T} \\
\text{Let } C = C_{1}P_{B} \\
\boxed{ C^{T}MC = P_{B}^{T}C_{1}^{T}MC_{1}P_{B} = P_{B}^{T}IP_{B} = P_{B}^{T}P_{B} = I } \\
\boxed{ C^{T}AC = P_{B}^{T}C_{1}^{T}AC_{1}P_{B} = P_{B}^{T}BP_{B} = D_{B} } \\
}
$$
## 6c
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \text{ be symmetric} \\
\text{Let } M\text{-eigenvalue $\lambda$ and } M\text{-eigenvector $v$ be defined as:} \\
\exists v \neq 0 \in \mathbb{C}^{n}: Av = \lambda Mv \\
\text{Prove: all } M\text{-eigenvalues of } A \text{ are real} \\
\text{Prove: } \exists B \text{ basis of } \mathbb{R}^{n} \text{ consisting of } M\text{-eigenvectors of } A \\
\\
\text{Proof:} \\
\text{Let } \lambda \text{ be an } M\text{-eigenvalue of } A \\
\implies \exists v \neq 0 \in \mathbb{C}^{n}: Av = \lambda Mv \\
v^{*}Av = \lambda v^{*}Mv \\
\\
A = A^{T} \implies A = A^{*} \\
(v^{*}Av)^{*} = v^{*}A^{*}v = v^{*}Av \implies v^{*}Av \in \mathbb{R} \\
M = M^{T} \implies M = M^{*} \\
(v^{*}Mv)^{*} = v^{*}M^{*}v = v^{*}Mv \implies v^{*}Mv \in \mathbb{R} \\
(v^{*}Av)^{*} = (\lambda v^{*}Mv)^{*} \implies \left\{\begin{array}{}
v^{*}Av = \lambda v^{*}Mv \\
v^{*}Av = \overline{\lambda} v^{*}Mv \\
\end{array}\right. \implies (\lambda - \overline{\lambda})(v^{*}Mv) = 0 \\
M = PDP^{T} \\
v^{*}Mv = v^{*}PDP^{T}v = (P^{T}v)^{*}D(P^{T}v) \\
\text{Let } y = P^{T}v, P^{T} \text{ is invertible}, v \neq 0 \implies y \neq 0 \\
v^{*}Mv = y^{*}Dy = \begin{pmatrix}
\overline{y_{1}} & \dots & \overline{y_{n}} \\
\end{pmatrix}\begin{pmatrix}
\lambda_{1} \\
 & \ddots \\
 &  & \lambda_{n} \\
\end{pmatrix}\begin{pmatrix}
y_{1} \\
\vdots \\
y_{n} \\
\end{pmatrix} = \begin{pmatrix}
\overline{y_{1}} & \dots & \overline{y_{n}} \\
\end{pmatrix}\begin{pmatrix}
\lambda_{1}y_{1} \\
\vdots \\
\lambda_{n}y_{n} \\
\end{pmatrix} = \\
= \begin{pmatrix}
\lambda_{1}\overline{y_{1}}y_{1} \\
\vdots \\
\lambda_{n}\overline{y_{n}}y_{n} \\
\end{pmatrix} = \begin{pmatrix}
\lambda_{1}\left\lvert y_{1} \right\rvert^{2} \\
\vdots \\
\lambda_{n}\left\lvert y_{n} \right\rvert^{2} \\
\end{pmatrix} \\
y \neq 0 \implies \exists i \in [1, n]: y_{i} \neq 0 \implies \lambda_{i}\left\lvert y_{i} \right\rvert^{2} > 0 \\
\implies v^{*}Mv \neq 0 \implies \lambda = \overline{\lambda} \implies \boxed{ \lambda \in \mathbb{R} } \\
\\
\text{Let } C: C^{T}MC = I, C^{T}AC = D_{A} \\
\text{Let } v \text{ be an } M\text{-eigenvector of } A \text{ in respect to } M\text{-eigenvalue } \lambda \\
Av = \lambda Mv \implies (C^{T})^{-1}D_{A}C^{-1}v = \lambda(C^{T})^{-1}C^{-1}v \\
\implies D_{A}C^{-1}v = \lambda C^{-1}v \\
\text{Let } w = C^{-1}v \\
\implies D_{A}w = \lambda w \implies \lambda \text{ is an eigenvalue of } D_{A} \text{ and } w \text{ is its eigenvector} \\
D_{A} \text{ is diagonal} \implies \exists i \in [1, n]: w \in sp\Set{ e_{i} } \\
\implies sp\Set{ w_{1}, \dots, w_{n} } = sp\Set{ e_{1}, \dots, e_{n} } = \mathbb{R}^{n} \\
\implies \forall i \in [1, n]: C^{-1}v_{i} = w_{i} \implies v_{i} = Cw_{i} = \alpha_{i}Ce_{i} = \alpha_{i}C_{i}(C) \\
C \text{ is invertible} \implies \boxed{ sp\Set{ v_{1}, \dots, v_{n} } = C(C) = \mathbb{R}^{n} } \\
}
$$

