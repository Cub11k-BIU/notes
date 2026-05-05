---
{"publish":true,"created":"27/07/25, 10:07","modified":"2026-03-24T15:00:54.109+02:00","tags":["Academia","Lecture","Linear-2"],"cssclasses":""}
---

# 2a
$$
\displaylines{
\text{Let } A \in \mathbb{C}^{3 \times 3} \text{ be not diagonalizable} \\
\text{Let } A^{4} = -A^{2} \\
\text{Find all possible Jordan forms of } A \\
\\
\text{Solution:} \\
A^{4} = -A^{2} \implies A^{4} + A^{2} = 0 \implies A^{2}(A^{2}+I) = 0 \\
\implies A^{2}(A+iI)(A-iI) = 0 \implies m_{A}(x) \mid x^{2}(x+i)(x-i) \\
\implies m_{A}(x) = \left[\begin{array}{}
\left.\begin{array}{}
x \\
x(x+i) \\
x(x-i) \\
x(x+i)(x-i) \\
\end{array}\right\} \implies A \text{ is diagonalizable} \\
x^{2} \\
x^{2}(x+i) \\
x^{2}(x-i) \\
x^{2}(x+i)(x-i) \implies A \text{ must be of size } 4 \times 4 \text{ or larger} \\
\end{array}\right. \\
\implies m_{A}(x) = \left[\begin{array}{}
x^{2} \implies P_{A}(x) = x^{3} \\
\left.\begin{array}{}
x^{2}(x+i) \\
x^{2}(x-i) \\
\end{array}\right\} \implies m_{A}(x) = P_{A}(x) \\
\end{array}\right. \\
\implies J_{A} = \begin{pmatrix}
0 & 1 \\
 & 0 \\
 &  & 0 \\
\end{pmatrix} \text{ or } \begin{pmatrix}
0 & 1 \\
 & 0 \\
 &  & i \\
\end{pmatrix} \text{ or } \begin{pmatrix}
0 & 1 \\
 & 0 \\
 &  & -i \\
\end{pmatrix} \\
}
$$
# 2b
$$
\displaylines{
\text{Prove: } \not\exists A \in \mathbb{C}^{n \times n}: AA^{*} + I = A \\
\\
\text{Proof:} \\
\text{Let } A \in \mathbb{C}^{n \times n}: AA^{*} + I = A \\
\implies A - AA^{*} = I \implies A(I-A^{*}) = I \\
\implies A^{-1} = I - A^{*} \\
\implies (I-A^{*})A = I \implies A - A^{*}A = I \\
\implies AA^{*} = A^{*}A \\
A \text{ is normal and over } \mathbb{C} \implies A \text{ is unitary diagonalizable} \\
\implies \exists P: A = PDP^{*} \\
\implies A^{*} = PD^{*}P^{*} \\
\implies PDP^{*} - PDP^{*}PD^{*}P^{*} = I \implies P(D-DD^{*})P^{*} = I \\
\implies D - DD^{*} = I \\
\implies \forall \lambda \text{ eigenvalue of } A: \lambda - \lambda \overline{\lambda} = 1 \implies \lambda = \lambda \overline{\lambda} + 1 \in \mathbb{R} \\
\implies D = D^{*} \implies D - D^{2} = I \\
\implies D^{2} - D + I = 0 \implies m_{D}(x) \mid (x^{2}-x+1) \\
x^{2} - x + 1 = \left( x-\frac{1}{2} \right)^{2} + \frac{3}{4} = \left( x-\frac{1}{2} +\frac{i\sqrt{ 3 }}{2} \right)\left( x-\frac{1}{2}-\frac{i\sqrt{ 3 }}{2} \right) \\
\implies D \text{ has complex eigenvalues} - \text{ Contradiction!} \\
\implies \not\exists A \in \mathbb{C}^{n \times n}: AA^{*} + I = A \\
\\
\text{Better (easier) solution:} \\
A^{*} = (I + AA^{*})^{*} = I + AA^{*} = A \implies A \text{ is Hermitian} \\
\implies \text{All eigenvalues of } A \text{ are real} \\
A - A^{2} = I \implies A^{2} - A + 1 = 0 \\
\text{Proceed with } x^{2} - x + 1 \\
}
$$
# 3
$$
\displaylines{
\text{Let } V \text{ be a finite-dimensional vector space over } \mathbb{F} \\
\text{Let } T: V \to V \text{ be a linear operator} \\
}
$$
## 3a
$$
\displaylines{
\text{Let } u \text{ be an eigenvector of } T \text{ in respect to eigenvalue } \lambda \\
\text{Let } v \text{ be an eigenvector of } T \text{ in respect to eigenvalue } \mu \\
\text{Prove: } v + u \text{ is an eigenvector of } T \implies \lambda = \mu \\
\\
\text{Proof:} \\
\text{Let } v + u \text{ be an eigenvector of } T \\
Tu = \lambda u \\
Tv = \mu v \\
\implies \left\{\begin{array}{}
T(v+u) = \alpha(v+u) \\
T(v+u) = T(v) + T(u) = \mu v + \lambda u \\
\end{array}\right. \\
\implies \alpha(v+u) = \mu v + \lambda u \\
\implies (\alpha-\mu)v = (\lambda-\alpha)u \\
\text{Case 1. } \alpha = \mu \underbrace{ \implies }_{ u \neq 0 } \alpha = \lambda \implies \boxed{ \lambda = \mu } \\
\text{Case 2. } \alpha \neq \mu \\
\implies v = \frac{\lambda-\alpha}{\alpha-\mu}u \\
\implies \mu v = T(v) = T\left( \frac{\lambda-\alpha}{\alpha-\mu}u \right) = \lambda \frac{\lambda-\alpha}{\alpha-\mu}u = \lambda v \\
\implies \lambda v = \mu v \underbrace{ \implies }_{ v \neq 0 } \boxed{ \lambda = \mu } \\
}
$$
## 3b
$$
\displaylines{
\text{Let } \forall B \text{ basis of } V: [T]^{B}_{B} \text{ is diagonal} \\
\text{Prove: } \exists c \in \mathbb{F}: \forall v \in V: T(v) = cv \\
\\
\text{Proof:} \\
\text{Let } B = \Set{ v_{1}, \dots, v_{n} } \\
\text{Let } [T]^{B}_{B} = \begin{pmatrix}
\lambda_{1} \\
 & \ddots \\
 &  & \lambda_{n} \\
\end{pmatrix} \\
\implies \forall i \in [1, n]: [T(v_{i})]_{B} = [T]^{B}_{B}[v_{i}]_{B} = [T]^{B}_{B}e_{i} = C_{i}([T]^{B}_{B}) = \lambda_{i}e_{i} \implies T(v_{i}) = \lambda_{i}v_{i} \\
\\
\text{Let } i \neq j \in [1, n] \\
T(v_{i}) = \lambda_{i}v_{i} \\
T(v_{j}) = \lambda_{j}v_{j} \\
\text{Let } C = (B \setminus \Set{ v_{i} }) \cup \Set{ v_{i} + v_{j} } \\
C \text{ is a basis of } V \implies [T]^{C}_{C} \text{ is diagonal} \\
\implies [T(v_{i}+v_{j})]_{C} = \dots = \alpha(e_{i}+e_{j}) \implies T(v_{i}+v_{j}) = \alpha(v_{i}+v_{j}) \\
\implies v_{i} + v_{j} \text{ is an eigenvector of } T \\
\implies \text{By 3a: } \lambda_{i} = \lambda_{j} \\
\implies \forall i, j \in [1, n]: \lambda_{i} = \lambda_{j} \\
\implies \forall v \in V: T(v) = \sum_{i=1}^{n} \alpha_{i}T(v_{i}) = \sum_{i=1}^{n} \alpha_{i}\lambda v_{i} = \lambda\sum_{i=1}^{n} \alpha_{i} v_{i} = \lambda v \\
}
$$
## 3c
$$
\displaylines{
\text{In addition to given from 3b, let } \mathbb{F} = \mathbb{R} \\
\text{Determine whether } T \text{ is necessarily Hermitian} \\
\\
\text{Solution:} \\
\text{By 3b: } \exists \lambda \in \mathbb{R}: \forall v \in V: T(v) = \lambda v \\
\forall v, u \in V: \langle Tv, u \rangle = \langle v, T^{*}u \rangle \\
\langle Tv, u \rangle = \langle \lambda v, u \rangle = \lambda \langle v, u \rangle = \langle v, \overline{\lambda}u \rangle = \langle v, \lambda u \rangle \\
\implies \forall v, u \in V: \langle v, \lambda u \rangle = \langle v, T^{*}u \rangle \implies \forall u \in V: T^{*}(u) = \lambda u = T(u) \\
\implies T \text{ is Hermitian} \\
}
$$
# 4
$$
\displaylines{
\text{Let } W = sp\Set{ \begin{pmatrix}
1 \\
0 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
5 \\
3 \\
-3 \\
\end{pmatrix} } \text{ be a subspace of } \mathbb{R}^{3} \\
\text{Find } P_{W}\begin{pmatrix}
0 \\
1 \\
0 \\
\end{pmatrix} \text{ in relation to inner product:} \\
\langle \begin{pmatrix}
x_{1} \\
x_{2} \\
x_{3} \\
\end{pmatrix}, \begin{pmatrix}
y_{1} \\
y_{2} \\
y_{3} \\
\end{pmatrix} \rangle = \frac{1}{2}x_{1}y_{1} + x_{2}y_{2} + \frac{1}{2}x_{3}y_{3} \\
\\
\text{Solution:} \\
\langle \begin{pmatrix}
1 \\
0 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
5 \\
3 \\
-3 \\
\end{pmatrix} \rangle = \frac{5}{2} - \frac{3}{2} = 1 \implies \text{This is not an orthogonal basis of } W \\
\text{Gram-Schmidt:} \\
u_{1} = v_{1} \implies \lVert u_{1} \rVert = \lVert v_{1} \rVert = \frac{1}{2} + 0 + \frac{1}{2} = 1 \\
u_{2} = v_{2} - \frac{\langle v_{2}, u_{1} \rangle}{\lVert u_{1} \rVert^{2}}u_{1} = \begin{pmatrix}
5 \\
3 \\
-3 \\
\end{pmatrix} - \begin{pmatrix}
1 \\
0 \\
1 \\
\end{pmatrix} = \begin{pmatrix}
4 \\
3 \\
-4 \\
\end{pmatrix} \\
\text{Let } v = \begin{pmatrix}
0 \\
1 \\
0 \\
\end{pmatrix} \\
P_{W}(v) = \frac{\langle v, u_{1} \rangle}{\lVert u_{1} \rVert^{2}}u_{1} + \frac{\langle v, u_{2} \rangle}{\lVert u_{2} \rVert^{2}}u_{2} = 0 + \frac{3}{25}\begin{pmatrix}
4 \\
3 \\
-4 \\
\end{pmatrix} = \frac{3}{25}\begin{pmatrix}
4 \\
3 \\
-4 \\
\end{pmatrix} \\
}
$$
# 5a
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \text{ be symmetric} \\
\text{Prove or disprove: } B = A^{2} - 6A + 11I \text{ is diagonalizable} \\
\\
\text{Proof:} \\
A \text{ is symmetric} \implies A \text{ is orthogonal diagonalizable} \\
\implies \exists P: A = PDP^{T} \\
\implies B = A^{2} - 6A + 11I = P\underbrace{ (D^{2} - 6D + 11I) }_{ \text{Diagonal} }P^{T} \\
}
$$
# 5b
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \text{ be diagonalizable} \\
\text{Let } \forall \lambda \text{ eigenvalue of } A: \lambda \geq 0 \\
\text{Prove or disprove: } \exists B \in \mathbb{R}^{n \times n}: B^{2} = A \\
\\
\text{Proof:} \\
A \text{ is diagonalizable} \implies \exists P: A = PDP^{-1} \\
\forall i \in [1, n]: D_{ii} = \lambda_{i} \geq 0 \\
\text{Let } B = P\underbrace{ \begin{pmatrix}
\sqrt{ \lambda_{1} } \\
 & \ddots \\
 &  & \sqrt{ \lambda_{n} } \\
\end{pmatrix} }_{ \text{"$\sqrt{ D }$"} }P^{-1} \\
\implies B^{2} = P\sqrt{ D }P^{-1}P\sqrt{ D }P^{-1} = P\sqrt{ D }^{2}P^{-1} = \\
= P\begin{pmatrix}
\sqrt{ \lambda_{1} }^{2} \\
 & \ddots \\
 &  & \sqrt{ \lambda_{n} }^{2} \\
\end{pmatrix}P^{-1} = PDP^{-1} = A \\
}
$$
# 5c
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \\
\text{Let } \forall \lambda \text{ eigenvalue of } A: \lambda \geq 0 \\
\text{Prove or disprove: } B^{2} \text{ is a Jordan form of } A^{2} \implies B \text{ is a Jordan form of } A \\
\\
\text{Disproof:} \\
\forall \lambda: \lambda \text{ is an eigenvalue of } A \implies \lambda^{2} \text{ is an eigenvalue of } A^{2} \\
\text{Let } A = B = \begin{pmatrix}
1 & \frac{1}{2} \\
0 & 1 \\
\end{pmatrix} \\
\implies A^{2} = B^{2} = \begin{pmatrix}
1 & 1 \\
0 & 1 \\
\end{pmatrix} = J_{2}(1) \implies B^{2} \text{ is a Jordan form of } A^{2} \\
B \text{ is not a Jordan form} \implies B \text{ is not a Jordan form of } A \\
}
$$
# 5d
$$
\displaylines{
\text{Let } V \text{ be an inner product space over } \mathbb{C} \\
\text{Let } U \text{ be a subspace of } V \\
\text{Let } v_{1}, v_{2} \in V: P_{U}(v_{1}) = P_{U}(v_{2}) \\
\text{Prove or disprove: } v_{1} - v_{2} \in U^{\perp} \\
\\
\text{Proof:} \\
\text{Let } \Set{ u_{1}, \dots, u_{k} } \text{ be an orthonormal basis of } U \\
\implies P_{U}(v_{1} - v_{2}) = \sum_{i=1}^{k} \langle v_{1}-v_{2}, u_{i} \rangle u_{i} = \\
= \sum_{i=1}^{k} \langle v_{1}, u_{i} \rangle u_{i} - \sum_{i=1}^{k} \langle v_{2}, u_{i} \rangle u_{i} = P_{U}(v_{1}) - P_{U}(v_{2}) = 0 \\
\implies (v_{1}-v_{2}) = (v_{1}-v_{2}) - P_{U}(v_{1}-v_{2}) \in U^{\perp} \\
}
$$
