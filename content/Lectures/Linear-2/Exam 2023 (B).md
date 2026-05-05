---
{"publish":true,"created":"25/07/25, 14:07","modified":"2026-03-24T15:00:54.130+02:00","tags":["Academia","Lecture","Linear-2"],"cssclasses":""}
---

# 2
$$
\displaylines{
\text{Let } T: \mathbb{R}^{4} \to \mathbb{R}^{4} \text{ be a linear operator} \\
\text{Let } T\begin{pmatrix}
1 \\
0 \\
1 \\
0 \\
\end{pmatrix} = \begin{pmatrix}
2 \\
0 \\
2 \\
0 \\
\end{pmatrix}, T\begin{pmatrix}
0 \\
1 \\
0 \\
1 \\
\end{pmatrix} = \begin{pmatrix}
0 \\
3 \\
0 \\
3 \\
\end{pmatrix} \\
T\begin{pmatrix}
-2 \\
-1 \\
2 \\
1 \\
\end{pmatrix} = T\begin{pmatrix}
-1 \\
-1 \\
1 \\
1 \\
\end{pmatrix} = \begin{pmatrix}
0 \\
0 \\
0 \\
0 \\
\end{pmatrix} \\
}
$$
## 2a
$$
\displaylines{
\text{Find an orthonormal basis } B \text{ and diagonal matrix } D \text{ such that } [T]^{B}_{B} = D \\
\\
\text{Solution:} \\
\text{Let } E = \Set{ \begin{pmatrix}
1 \\
0 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
0 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
-2 \\
-1 \\
2 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
-1 \\
-1 \\
1 \\
1 \\
\end{pmatrix} } \text{ be a basis of } \mathbb{R}^{4} \\
T(v_{1}) = 2v_{1} \\
T(v_{2}) = 3v_{2} \\
T(v_{3}) = T(v_{4}) = 0 \\
\implies v_{1}, v_{2}, v_{3}, v_{4} \text{ are eigenvectors of } T \text{ and } P_{T}(x) = x^{2}(x-2)(x-3) \\
\dim E_{0} = 2 \implies T \text{ is diagonalizable} \\
\text{Let us apply Gram-Schmidt to } E_{0} \\
u_{1} = v_{1} = \begin{pmatrix}
-2 \\
-1 \\
2 \\
1 \\
\end{pmatrix} \implies \frac{u_{1}}{\lVert u_{1} \rVert} = \frac{u_{1}}{\sqrt{ 10 }} \\
u_{2} = v_{2} - \frac{\langle v_{2}, u_{1} \rangle}{\lVert u_{1} \rVert^{2}}u_{1} = \begin{pmatrix}
-1 \\
-1 \\
1 \\
1 \\
\end{pmatrix} - \frac{6}{10}\begin{pmatrix}
-2 \\
-1 \\
2 \\
1 \\
\end{pmatrix} = \frac{1}{10}\begin{pmatrix}
-10+12 \\
-10+6 \\
10-12 \\
10-6 \\
\end{pmatrix} = \frac{2}{10}\begin{pmatrix}
1 \\
-2 \\
-1 \\
2 \\
\end{pmatrix} \\
\lVert u_{2} \rVert = \frac{2}{10} \cdot \sqrt{ 10 } \implies \frac{u_{2}}{\lVert u_{2} \rVert} = \frac{\sqrt{ 10 }}{2}u_{2} \\
\implies D = \begin{pmatrix}
2 \\
 & 3 \\
 &  & 0 \\
 &  &  & 0 \\
\end{pmatrix}, B = \Set{ \frac{1}{\sqrt{ 2 }}\begin{pmatrix}
1 \\
0 \\
1 \\
0 \\
\end{pmatrix}, \frac{1}{\sqrt{ 2 }}\begin{pmatrix}
0 \\
1 \\
0 \\
1 \\
\end{pmatrix}, \frac{1}{\sqrt{ 10 }}\begin{pmatrix}
-2 \\
-1 \\
2 \\
1 \\
\end{pmatrix}, \frac{\sqrt{ 10 }}{10}\begin{pmatrix}
1 \\
-2 \\
-1 \\
2 \\
\end{pmatrix} } \\
}
$$
## 2b
$$
\displaylines{
\text{Find the vector in $\ker T$ which is closest to } v = \begin{pmatrix}
1 \\
2 \\
3 \\
4 \\
\end{pmatrix} \\
\\
\text{Solution:} \\
\forall u \in \mathbb{R}^{4}: \lVert v - u \rVert \geq \lVert v - P_{\ker T}(v) \rVert \\
\text{An orthogonl basis of } \ker T \text{ is } \Set{ \begin{pmatrix}
-2 \\
-1 \\
2 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
-2 \\
-1 \\
2 \\
\end{pmatrix} } \\
\implies P_{\ker T}(v) = \frac{\langle v, v_{1} \rangle}{\lVert v_{1} \rVert^{2}}v_{1} + \frac{\langle v, v_{2} \rangle}{\lVert v_{2} \rVert^{2}}v_{2} = \frac{6}{10}\begin{pmatrix}
-2 \\
-1 \\
2 \\
1 \\
\end{pmatrix} + \frac{2}{10}\begin{pmatrix}
1 \\
-2 \\
-1 \\
2 \\
\end{pmatrix} = \begin{pmatrix}
-1 \\
-1 \\
1 \\
1 \\
\end{pmatrix} \\
}
$$
# 3a
$$
\displaylines{
\text{Let } A, B \in \mathbb{F}^{n \times n} \\
\text{Prove or disprove: } A \text{ is diagonalizable and } P_{A}(B) = 0 \implies B \text{ is diagonalizable} \\
\\
\text{Disproof:} \\
\text{Let } A = \begin{pmatrix}
1 & 0 \\
0 & 1 \\
\end{pmatrix} \\
\text{Let } B = \begin{pmatrix}
1 & 1 \\
0 & 1 \\
\end{pmatrix} \\
P_{A}(B) = (B-I)^{2} = \begin{pmatrix}
0 & 1 \\
0 & 0 \\
\end{pmatrix}^{2} = 0 \\
\text{But } B \text{ is not diagonalizable} \\
}
$$
# 3b
$$
\displaylines{
\text{Let } A, B \in \mathbb{C}^{2 \times 2} \\
\text{Let } C = AB - BA \\
\text{Prove or disprove: } C \text{ is not nilpotent} \implies C \text{ is diagonalizable} \\
\\
\text{Proof:} \\
tr(C) = tr(AB - BA) = tr(AB) - tr(BA) = 0 \\
\text{Let } C \text{ be not nilpotent} \\
\implies P_{C}(x) = \left[\begin{array}{}
x(x-\lambda) & \lambda \neq 0 \\
(x-\lambda_{1})(x-\lambda_{2}) & \lambda_{1},\lambda_{2} \neq 0 \\
(x-\lambda)^{2} & \lambda \neq 0 \\
\end{array}\right. \\
\text{First two options guarantee a diagonalizable matrix} \\
\text{Let } P_{C}(x) = (x-\lambda)^{2} \\
\implies tr(C) = 2\lambda = 0 \implies \lambda = 0 - \text{Contradiction!} \\
\implies \boxed{ C \text{ is diagonalizable} } \\
}
$$
# 3c
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Prove or disprove: } (A-3I)(A+2I) = 0 \implies \exists v \neq 0 \in \mathbb{F}^{n}: Av = 3v \\
\\
\text{Disproof:} \\
\text{Let } A = \begin{pmatrix}
-2 & 0 \\
0 & -2 \\
\end{pmatrix} \implies A + 2I = 0 \\
3 \text{ is not an eigenvalue of } A \implies \forall v \in \mathbb{F}^{n}: Av \neq 3v \\
}
$$
# 3d
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \text{ be invertible} \\
\text{Prove or disprove: } \forall v \in \mathbb{F}^{n}: v \text{ is an eigenvector of } A \implies v \text{ is an eigenvector of } A^{-1} \\
\\
\text{Proof?:} \\
\text{Let } v \text{ be an eigenvector of } A \\
A \text{ is invertible} \implies \lambda \neq 0 \\
\implies Av = \lambda v \implies v = \frac{1}{\lambda}Av \\
\implies A^{-1}v = A^{-1}\left( \frac{1}{\lambda} Av \right) = \frac{1}{\lambda}A^{-1}Av = \frac{1}{\lambda}v \\
\implies v \text{ is an eigenvector of } A^{-1} \\
}
$$
# 4
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{9 \times 9} \\
\text{Let } A^{3} = 0, rank(A^{2}) = 2 \\
\text{Find all possible Jordan forms of } A \\
\\
\text{Solution:} \\
A^{3} = 0 \implies A \text{ is nilpotent} \implies P_{A}(x) = x^{9} \\
rank(A^{2}) = 2 \implies A^{2} \neq 0 \implies m_{A}(x) = x^{3} \\
\implies \text{Largest block in Jordan form of } A \text{ is of size } 3 \\
J_{A} = \begin{pmatrix}
0 & 1 \\
 & 0 & 1 \\
 &  & 0 \\
 &  &  & B \\
\end{pmatrix} \implies J_{A}^{2} = \begin{pmatrix}
0 & 0 & 1 \\
 & 0 & 0 \\
 &  & 0 \\
 &  &  & B^{2}
\end{pmatrix} \\
A = PJ_{A}P^{-1} \implies A^{2} = PJ_{A}^{2}P^{-1} \\
\implies rank(PJ_{A}^{2}P^{-1}) = 2 \implies rank(J_{A}^{2}) = 2 \\
\implies rank(B^{2}) = 1 \\
J_{1}(0)^{2} = 0, J_{2}(0)^{2} = 0 \implies B \text{ contains exactly one Jordan block of size } 3 \\
\implies B = \begin{pmatrix}
0 & 1 \\
 & 0 & 1 \\
 &  & 0 \\
 &  &  & C \\
\end{pmatrix} \implies B^{2} = \begin{pmatrix}
0 & 0 & 1 \\
 & 0 & 0 \\
 &  & 0 \\
 &  &  & C^{2} \\
\end{pmatrix} \implies rank(C^{2}) = 0 \\
\implies C \text{ can only contain blocks of size } 2 \text{ or 1} \\
\implies \text{Possible Jordan forms are:} \\
J_{A} = J_{3}(0) \oplus J_{3}(0) \oplus \left[\begin{array}{}
J_{2}(0) \oplus J_{1}(0) \\
J_{1}(0) \oplus J_{1}(0) \oplus J_{1}(0) \\
\end{array}\right. \\
}
$$
# 5a
$$
\displaylines{
\text{Prove: } \forall M \in \mathbb{R}^{n \times n}: M \text{ is invertible} \implies M^{T}M \text{ is positive symmetric} \\
\\
\text{Proof:} \\
(M^{T}M)^{T} = M^{T}M \implies M^{T}M \text{ is symmetric} \\
\text{Let } \lambda \text{ be an eigenvalue of } M^{T}M \\
\implies M^{T}Mv = \lambda v \\
\implies \lambda \lVert v \rVert = \langle \lambda v, v \rangle = \langle M^{T}Mv, v \rangle = \langle Mv, Mv \rangle = \lVert Mv \rVert \\
v \neq 0 \implies Mv \neq 0 \implies \lVert Mv \rVert > 0 \implies \boxed{ \lambda > 0 } \\
}
$$
# 5b
$$
\displaylines{
\text{Let } B \in \mathbb{R}^{n \times n} \text{ be positive symmetric} \\
\text{Prove: } \exists M \in \mathbb{R}^{n \times n} \text{ invertible: } B = M^{T}M \\
\\
\text{Proof:} \\
B \text{ is symmetric} \implies B \text{ is orthogonal diagonalizable} \\
\implies B = P\begin{pmatrix}
\lambda_{1} \\
 & \ddots \\
 &  & \lambda_{n} \\
\end{pmatrix}P^{T} \\
\forall i \in [1, n]: \lambda_{i} > 0 \implies \exists \sqrt{ \lambda_{i} } \in \mathbb{R} \\
\text{Let } M = \begin{pmatrix}
\sqrt{ \lambda_{1} } \\
 & \ddots \\
 &  & \sqrt{ \lambda_{n} } \\
\end{pmatrix}P^{T} \\
\begin{pmatrix}
\sqrt{ \lambda_{1} } \\
 & \ddots \\
 &  & \sqrt{ \lambda_{n} } \\
\end{pmatrix} \text{ is invertible, } P^{T} \text{ is invertible} \implies M \text{ is invertible} \\
M^{T}M = P\begin{pmatrix}
\sqrt{ \lambda_{1} } \\
 & \ddots \\
 &  & \sqrt{ \lambda_{n} } \\
\end{pmatrix}^{2}P^{T} = P\begin{pmatrix}
\lambda_{1} \\
 & \ddots \\
 &  & \lambda_{n} \\
\end{pmatrix}P^{T} = B \\
}
$$
# 5c
$$
\displaylines{
\text{Let } B \in \mathbb{R}^{n \times n} \text{ be positive symmetric} \\
\text{Prove: } \forall P \in \mathbb{R}^{n \times n} \text{ invertible: } P^{T}BP \text{ is positive symmetric} \\
\\
\text{Proof:} \\
\exists M \text{ invertible: } B = M^{T}M \\
\implies P^{T}BP = P^{T}M^{T}MP = (MP)^{T}MP \implies P^{T}BP \text{ is positive symmetric} \\
}
$$
# 5d
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \text{ be positive symmetric} \\
\text{Prove: } \exists P \in \mathbb{R}^{n \times n} \text{ invertible: } P^{T}AP = I \\
\\
\text{Proof:} \\
A \text{ is orthogonal diagonalizable} \\
\implies \exists P: A = Q\begin{pmatrix}
\lambda_{1} \\
 & \ddots \\
 &  & \lambda_{n} \\
\end{pmatrix}Q^{T} \\
\text{Let } P = Q\begin{pmatrix}
\frac{1}{\sqrt{ \lambda_{1} }} \\
 & \ddots \\
 &  & \frac{1}{\sqrt{ \lambda_{n} }} \\
\end{pmatrix} \\
Q \text{ is invertible, } \begin{pmatrix}
\frac{1}{\sqrt{ \lambda_{1} }} \\
 & \ddots \\
 &  & \frac{1}{\sqrt{ \lambda_{n} }} \\
\end{pmatrix} \text{ is invertible} \implies P \text{ is invertible} \\
\implies P^{T}AP = \begin{pmatrix}
\frac{1}{\sqrt{ \lambda_{1} }} \\
 & \ddots \\
 &  & \frac{1}{\sqrt{ \lambda_{n} }} \\
\end{pmatrix}Q^{T}AQ\begin{pmatrix}
\frac{1}{\sqrt{ \lambda_{1} }} \\
 & \ddots \\
 &  & \frac{1}{\sqrt{ \lambda_{n} }} \\
\end{pmatrix} = \\
= \begin{pmatrix}
\frac{1}{\sqrt{ \lambda_{1} }} \\
 & \ddots \\
 &  & \frac{1}{\sqrt{ \lambda_{n} }} \\
\end{pmatrix}\begin{pmatrix}
\lambda_{1} \\
 & \ddots \\
 &  & \lambda_{n} \\
\end{pmatrix}\begin{pmatrix}
\frac{1}{\sqrt{ \lambda_{1} }} \\
 & \ddots \\
 &  & \frac{1}{\sqrt{ \lambda_{n} }} \\
\end{pmatrix} = I \\
}
$$
# 5e
$$
\displaylines{
\text{Let } A, B \in \mathbb{R}^{n \times n} \text{ be positive symmetric} \\
\text{Let } P \in \mathbb{R}^{n \times n} \text{ be invertible} \\
\text{Let } P^{T}AP = I \\
\text{Prove: } \det(A+B) \geq \det(A) + \det(B) \\
\\
\text{Proof:} \\
\text{Let us fisrt prove } \det(I + P^{T}BP) \geq \det(I) + \det(P^{T}BP) \\
B \text{ is positive symmetric} \implies P^{T}BP \text{ is positive symmetric} \\
\implies \left\{\begin{array}{}
\det(I + P^{T}BP) = \prod_{i=1}^{n} (\lambda_{i}+1) \\
\det(I) + \det(P^{T}BP) = 1 + \prod_{i=1}^{n} \lambda_{i} \\
\end{array}\right. \\
\prod_{i=1}^{n} (\lambda_{i}+1) = \prod_{i=1}^{n} \lambda_{i} + \underbrace{ \prod_{i=2}^{n} (\lambda_{i}+1) }_{ \geq 0 } + \underbrace{ \dots }_{ \geq 0 } + 1 \geq \prod_{i=1}^{n} \lambda_{i} + 1 \\
\implies \det(I + P^{T}BP) \geq \det(I) + \det(P^{T}BP) \\
\det(I+P^{T}BP) = \det(P^{T}(A+B)P) = \det(P^{T}) \cdot \det(A+B) \cdot \det(P) \\
\det(I) + \det(P^{T}BP) = \det(P^{T}AP) + \det(P^{T}BP) = \\
= \dots = \det(P^{T}) \cdot (\det(A) + \det(B)) \cdot \det(P) \\
P \text{ is invertible} \implies \det(P^{T}) = \det(P) = X > 0 \\
\implies X^{2} \cdot \det(A+B) \geq X^{2} (\det(A) + deT(B)) \\
\implies \det(A+B) \geq \det(A) + \det(B) \\
}
$$
