---
{"publish":true,"created":"28/07/25, 19:07","modified":"2025-11-21T21:10:14.484+02:00","tags":["Academia","Lecture","Linear-2"],"cssclasses":""}
---

# 2
$$
\displaylines{
A \in \mathbb{C}^{5 \times 5} \\
rank(A-2I) = 2 \\
(A-2I)^{2}(A^{2}+I) = 0 \\
\text{Find all possible Jordan forms:} \\
\\
\text{Solution:} \\
A \text{ over } \mathbb{C} \implies J_{A} \text{ exists} \\
m_{A}(x) \mid (x-2)^{2}(x-i)(x+i) \\
rank(A-2I) = 2 \implies 2 \text{ is an eigenvalue, } g_{2} = 3 \implies (x-2) \text{ must be in } m_{A}(x) \\
\implies \text{There are three Jordan blocks with eigenvalue } 2 \\
m_{A}(x) = \left[\begin{array}{}
(x-2) \implies \text{Three blocks of size 1, not enough} \\
(x-2)^{2} \implies \text{Three blocks of 2, max size } 2 \implies J_{A} = \begin{pmatrix}
2 & 1 \\
 & 2 \\
 &  & 2 & 1 \\
 &  &  & 2 \\
 &  &  &  & 2 \\
\end{pmatrix} \\
(x-2)(x-i) \implies \text{Diagonalizable} \implies J_{A} = \begin{pmatrix}
2 \\
 & 2 \\
 &  & 2 \\
 &  &  & i \\
 &  &  &  & i \\
\end{pmatrix}  \\
(x-2)(x+i) \implies \text{Diagonalizable} \implies J_{A} = \begin{pmatrix}
2 \\
 & 2 \\
 &  & 2 \\
 &  &  & -i \\
 &  &  &  & -i \\
\end{pmatrix} \\
(x-2)^{2}(x-i) \\
(x-2)^{2}(x+i) \\
(x-2)(x-i)(x+i) \implies \text{Diagonalizable} \implies J_{A} = \begin{pmatrix}
2 \\
 & 2 \\
 &  & 2 \\
 &  &  & i \\
 &  &  &  & -i \\
\end{pmatrix} \\
(x-2)^{2}(x-i)(x+i) \implies \text{Largest block of size 2, 4 diagonal entries of 2, too much} \\
\end{array}\right. \\
\\
m_{A}(x) = (x-2)^{2}(x-i) \\
\implies \text{Three blocks of 2, max size 2, at least one block of } i \implies J_{A} = \begin{pmatrix}
2 & 1 \\
 & 2 \\
 &  & 2 \\
 &  &  & 2 \\
 &  &  &  & i \\
\end{pmatrix} \\
m_{A}(x) = (x-2)^{2}(x+i) \\
\implies \text{Three blocks of 2, max size 2, at least one block of } -i \implies J_{A} = \begin{pmatrix}
2 & 1 \\
 & 2 \\
 &  & 2 \\
 &  &  & 2 \\
 &  &  &  & -i \\
\end{pmatrix} \\
}
$$
# 3a
$$
\displaylines{
V = \mathbb{R}^{4} \\
u_{1} = \begin{pmatrix}
1 \\
1 \\
1 \\
1 \\
\end{pmatrix}, u_{2} = \begin{pmatrix}
1 \\
-1 \\
1 \\
-1 \\
\end{pmatrix}, u_{3} = \begin{pmatrix}
1 \\
1 \\
-1 \\
-1 \\
\end{pmatrix} \\
U = sp\Set{ u_{1}, u_{2}, u_{3} } \\
\text{Find } p = P_{U}\begin{pmatrix}
2 \\
3 \\
1 \\
0 \\
\end{pmatrix} \\
\\
\text{Solution:} \\
\langle u_{1}, u_{2} \rangle = 1 - 1 + 1 - 1 = 0 \\
\langle u_{1}, u_{3} \rangle = 1 + 1 - 1 - 1 = 0 \\
\langle u_{2}, u_{3} \rangle = 1 - 1 - 1 + 1 = 0 \\
\implies \Set{ u_{1}, u_{2}, u_{3} } \text{ is an orthogonal basis of } U \\
\lVert u_{1} \rVert^{2} = \lVert u_{2} \rVert^{2} = \lVert u_{3} \rVert^{2} = 4 \\
p = P_{U}(v) = \frac{\langle v, u_{1} \rangle}{\lVert u_{1} \rVert^{2}}u_{1} + \frac{\langle v, u_{2} \rangle}{\lVert u_{2} \rVert}u_{2} + \frac{\langle v, u_{3} \rangle}{\lVert u_{3} \rVert^{2}}u_{3} = \\
= \frac{2+3+1}{4}\begin{pmatrix}
1 \\
1 \\
1 \\
1 \\
\end{pmatrix} + \frac{2-3+1}{4}u_{2} + \frac{2+3-1}{4}\begin{pmatrix}
1 \\
1 \\
-1 \\
-1 \\
\end{pmatrix} = \frac{3}{2}\begin{pmatrix}
1 \\
1 \\
1 \\
1 \\
\end{pmatrix} + \begin{pmatrix}
1 \\
1 \\
-1 \\
-1 \\
\end{pmatrix} = \begin{pmatrix}
\frac{5}{2} \\
\frac{5}{2} \\
-\frac{1}{2} \\
-\frac{1}{2} \\
\end{pmatrix} \\
}
$$
# 3b
$$
\displaylines{
\text{Find } w \in V \text{ such that } \lVert p + w \rVert^{2} = \lVert p \rVert^{2} + \lVert w \rVert^{2} \\
\\
\text{Solution:} \\
\text{By Pythagorean theorem: } p \perp w \implies \lVert p + w \rVert^{2} = \lVert p \rVert^{2} + \lVert w \rVert^{2} \\
\text{We can also show it here: } \lVert p + w \rVert^{2} = \lVert p \rVert^{2} + \langle p, w \rangle + \langle w, p \rangle + \lVert w \rVert^{2} = \\
= \lVert p \rVert^{2} + 2\langle p, w \rangle + \lVert w \rVert^{2} \\
\text{We need to find } w \in V \text{ such that} \langle p, w \rangle = 0 \\
p \in U \implies \text{We can take } w \in U^{\perp} \\
\text{We can also do this:} \\
p = \frac{3}{2}u_{1} + u_{3} \\
\implies \langle p, u_{2} \rangle = \left\langle  \frac{3}{2}u_{1} + u_{3}, u_{2} \right\rangle = \frac{3}{2}\langle u_{1}, u_{2} \rangle + \langle u_{3}, u_{2} \rangle = 0 + 0 = 0 \\
\implies w = u_{2} \text{ works} \\
}
$$
## 3c
$$
\displaylines{
\text{Find } U^{\perp} \\
\\
\text{Solution:} \\
\text{Let } \Set{ u_{1}, u_{2}, u_{3}, v } \text{ be a basis of } V \\
\text{After Gram-Schmidt we will get an orthgonal basis } \Set{ u_{1}, u_{2}, u_{3}, \tilde{v} } \\
\implies \tilde{v} \perp U \\
U \oplus U^{\perp} = V \implies \dim U + \dim U^{\perp} = \dim V \implies \dim U^{\perp} = 1 \\
\implies U^{\perp} = sp\Set{ \tilde{v} } \\
\text{Let } v = e_{4} \\
\begin{pmatrix}
1 & 1 & 1 & 0 \\
1 & -1 & 1 & 0 \\
1 & 1 & -1 & 0 \\
1 & -1 & -1 & 0 \\
\end{pmatrix} \to \begin{pmatrix}
1 & 1 & 1 & 0 \\
0 & -2 & 0 & 0 \\
0 & 0 & -2 & 0 \\
0 & -2 & -2 & 1 \\
\end{pmatrix} \to \begin{pmatrix}
1 & 1 & 1 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1 \\
\end{pmatrix} \\
\implies \Set{ u_{1}, u_{2}, u_{3}, v } \text{ is a basis of } V \\
\text{Gram-Schmidt for } v, \text{ as } u_{1}, u_{2}, u_{3} \text{ are already orthogonal:} \\
\tilde{v} = v - \frac{\langle v, u_{1} \rangle}{\lVert u_{1} \rVert^{2}}u_{1} - \frac{\langle v, u_{2} \rangle}{\lVert u_{2} \rVert^{2}}u_{2} - \frac{\langle v, u_{3} \rangle}{\lVert u_{3} \rVert^{2}}u_{3} = \\
= \begin{pmatrix}
0 \\
0 \\
0 \\
1 \\
\end{pmatrix} - \frac{1}{4}\begin{pmatrix}
1 \\
1 \\
1 \\
1 \\
\end{pmatrix} - \frac{-1}{4}\begin{pmatrix}
1 \\
-1 \\
1 \\
-1 \\
\end{pmatrix} - \frac{-1}{4}\begin{pmatrix}
1 \\
1 \\
-1 \\
-1 \\
\end{pmatrix} = \frac{1}{4}\begin{pmatrix}
0 - 1 + 1 + 1 \\
0 - 1 - 1 + 1 \\
0 - 1 + 1 - 1 \\
4 - 1 - 1 - 1 \\
\end{pmatrix} = \frac{1}{4}\begin{pmatrix}
1 \\
-1 \\
-1 \\
1 \\
\end{pmatrix} \\
\implies U^{\perp} = sp\Set{ \begin{pmatrix}
1 \\
-1 \\
-1 \\
1 \\
\end{pmatrix} } \\
}
$$
# 4a
$$
\displaylines{
\text{Let } A \in \mathbb{C}^{n \times n} \text{ be unitary} \\
\text{Prove or disprove: } \left\lvert \det(A) \right\rvert = 1 \\
\\
\text{Proof:} \\
A \text{ over } \mathbb{C} \implies \text{Characteristic polynomial is factorizable into linear factors} \\
A \text{ is unitary} \implies A \text{ is normal} \implies A \text{ is unitary diagonalizable} \\
\implies A = PDP^{*} \\
\implies \det(A) = \det(D) = \prod_{i=1}^{n} \lambda_{i} \\
A \text{ is unitary} \implies \forall i \in [1, n]: \left\lvert \lambda_{i} \right\rvert = 1 \\
\implies \left\lvert \det(A) \right\rvert = \left\lvert \prod_{i=1}^{n} \lambda_{i} \right\rvert = \prod_{i=1}^{n} \left\lvert \lambda_{i} \right\rvert = 1 \\
}
$$
# 4b
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times m} \\
\text{Prove or disprove: } \lambda \neq 0 \text{ is an eigenvalue of } A^{T}A \iff \lambda \neq 0 \text{ is an eigenvalue of } AA^{T} \\
\\
\text{Proof:} \\
\boxed{ \impliedby } \text{ Let } \lambda \neq 0 \text{ be an eigenvalue of } AA^{T} \text{ with eigenvector } v \in \mathbb{R}^{n} \\
\implies AA^{T}v = \lambda v \\
\lambda \neq 0, v \neq 0 \implies \lambda v \neq 0 \implies AA^{T}v \neq 0 \implies A^{T}v \neq 0 \\
\implies A^{T}AA^{T}v = \lambda A^{T}v \implies \lambda \text{ is an eigenvalue of } A^{T}A \text{ with eigenvector } A^{T}v \\
\\
\boxed{ \implies } \text{ Let } \lambda \neq 0 \text{ be an eigenvalue of } A^{T}A \text{ with eigenvector } v \in \mathbb{R}^{m} \\
\implies A^{T}Av = \lambda v \\
\lambda \neq 0, v \neq 0 \implies \lambda v \neq 0 \implies A^{T}Av \neq 0 \implies Av \neq 0 \\
\implies AA^{T}Av = \lambda Av \implies \lambda \text{ is an eigenvalue of } AA^{T} \text{ with eigenvector } Av \\
}
$$
# 4c
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times m} \\
\text{Prove or disprove: } \lambda \neq 0 \text{ is an eigenvalue of } A^{T}A \iff \lambda \neq 0 \text{ is an eigenvalue of } AA^{T} \\
\\
\text{Disproof:} \\
\text{Let } A = \begin{pmatrix}
2 & 0 \\
0 & 1 \\
0 & 2 \\
\end{pmatrix} \\
A^{T}A = \begin{pmatrix}
2 & 0 & 0 \\
0 & 1 & 2 \\
\end{pmatrix}\begin{pmatrix}
2 & 0 \\
0 & 1 \\
0 & 2 \\
\end{pmatrix} = \begin{pmatrix}
4 & 0 \\
0 & 5 \\
\end{pmatrix} \\
AA^{T} = \begin{pmatrix}
2 & 0 \\
0 & 1 \\
0 & 2 \\
\end{pmatrix}\begin{pmatrix}
2 & 0 & 0 \\
0 & 1 & 2 \\
\end{pmatrix} = \begin{pmatrix}
4 & 0 & 0 \\
0 & 1 & 2 \\
0 & 2 & 4 \\
\end{pmatrix} \\
P_{AA^{T}}(x) = \begin{vmatrix}
x-4 & 0 & 0 \\
0 & x-1 & -2 \\
0 & -2 & x-4 \\
\end{vmatrix} = (x-4)\begin{vmatrix}
x-1 & -2 \\
-2 & x-4 \\
\end{vmatrix} = (x-4)x(x-5) \\
\implies 0 \text{ is an eigenvalue of } AA^{T} \text{ but not an eigenvalue of } A^{T}A \\
}
$$
# The following solution is from 2023 (B)
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
