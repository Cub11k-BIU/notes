---
{"publish":true,"created":"20/07/25, 14:07","modified":"2026-03-24T15:00:54.191+02:00","tags":["Academia","Lecture","Linear-2"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Formulate and prove Cauchy-Schwarz inequality} \\
}
$$
# 2

$$
\displaylines{
A = \begin{pmatrix}
2 & 1 \\
1 & 2 \\
1 & 1 \\
\end{pmatrix} \\
\text{Find } SVD \text{ decomposition of } A \\
\\
\text{Solution:} \\
A \in \mathbb{R}^{3 \times 2} \\
A^{*} = \begin{pmatrix}
2 & 1 & 1 \\
1 & 2 & 1 \\
\end{pmatrix} \\
A^{*}A = \begin{pmatrix}
2 & 1 & 1 \\
1 & 2 & 1 \\
\end{pmatrix}\begin{pmatrix}
2 & 1 \\
1 & 2 \\
1 & 1 \\
\end{pmatrix} = \begin{pmatrix}
6 & 5 \\
5 & 6 \\
\end{pmatrix} \\
P_{A^{*}A}(x) = \begin{vmatrix}
x-6 & -5 \\
-5 & x-6 \\
\end{vmatrix} = (x-6)^{2} - 25 = (x-11)(x-1) \\
x = 1 \implies E_{1} = sp\Set{ \begin{pmatrix}
1 \\
-1 \\
\end{pmatrix} } = sp\Set{ \begin{pmatrix}
\frac{1}{\sqrt{ 2 }} \\
-\frac{1}{\sqrt{ 2 }} \\
\end{pmatrix} }\\
x = 11 \implies E_{11} = sp\Set{ \begin{pmatrix}
1 \\
1 \\
\end{pmatrix} } = sp\Set{ \begin{pmatrix}
\frac{1}{\sqrt{ 2 }} \\
\frac{1}{\sqrt{ 2 }} \\
\end{pmatrix} } \\
\implies \boxed{ V = \frac{1}{\sqrt{ 2 }}\begin{pmatrix}
1 & 1 \\
1 & -1 \\
\end{pmatrix} } \\
\implies A^{*}A = V\begin{pmatrix}
11 & 0 \\
0 & 1 \\
\end{pmatrix}V^{*} \\
\boxed{ \Sigma = \begin{pmatrix}
\sqrt{ 11 } & 0 \\
0 & \sqrt{ 1 } \\
0 & 0 \\
\end{pmatrix} } \\
w_{1} = Av_{1} = \begin{pmatrix}
2 & 1 \\
1 & 2 \\
1 & 1 \\
\end{pmatrix}\begin{pmatrix}
\frac{1}{\sqrt{ 2 }} \\
\frac{1}{\sqrt{ 2 }} \\
\end{pmatrix} = \begin{pmatrix}
\frac{3}{\sqrt{ 2 }} \\
\frac{3}{\sqrt{ 2 }} \\
\frac{2}{\sqrt{ 2 }} \\
\end{pmatrix} \implies \tilde{w_{1}} = \frac{w_{1}}{\lVert w_{1} \rVert} = \begin{pmatrix}
\frac{3}{\sqrt{ 22 }} \\
\frac{3}{\sqrt{ 22 }} \\
\frac{2}{\sqrt{ 22 }} \\
\end{pmatrix} \\
w_{2} = Av_{2} = \begin{pmatrix}
2 & 1 \\
1 & 2 \\
1 & 1 \\
\end{pmatrix}\begin{pmatrix}
\frac{1}{\sqrt{ 2 }} \\
-\frac{1}{\sqrt{ 2 }} \\
\end{pmatrix} = \begin{pmatrix}
\frac{1}{\sqrt{ 2 }} \\
-\frac{1}{\sqrt{ 2 }} \\
0 \\
\end{pmatrix} \implies \tilde{w_{2}} = \frac{w_{2}}{\lVert w_{2} \rVert} = \begin{pmatrix}
\frac{1}{\sqrt{ 2 }} \\
-\frac{1}{\sqrt{ 2 }} \\
0 \\
\end{pmatrix} \\
w_{3} = 11e_{3} - \frac{\langle 11e_{3}, w_{1} \rangle}{\lVert w_{1} \rVert^{2}} w_{1} - \frac{\langle 11e_{3}, w_{2} \rangle}{\lVert w_{2} \rVert^{2}}w_{2} = \begin{pmatrix}
0 \\
0 \\
11 \\
\end{pmatrix} - \begin{pmatrix}
3 \\
3 \\
2 \\
\end{pmatrix} = \begin{pmatrix}
-3 \\
-3 \\
9 \\
\end{pmatrix} \\
\implies \tilde{w_{3}} = \frac{w_{3}}{\lVert w_{3} \rVert} = \begin{pmatrix}
-\frac{1}{\sqrt{ 11 }} \\
-\frac{1}{\sqrt{ 11 }} \\
\frac{3}{\sqrt{ 11 }} \\
\end{pmatrix} \\
\implies \boxed{ U = \begin{pmatrix}
\frac{3}{\sqrt{ 22 }} & \frac{1}{\sqrt{ 2 }} & -\frac{1}{\sqrt{ 11 }} \\
\frac{3}{\sqrt{ 22 }} & -\frac{1}{\sqrt{ 2 }} & -\frac{1}{\sqrt{ 11 }} \\
\frac{2}{\sqrt{ 22 }} & 0 & \frac{3}{\sqrt{ 11 }} \\
\end{pmatrix} } \\
\implies A = \underbrace{ \begin{pmatrix}
\frac{3}{\sqrt{ 22 }} & \frac{1}{\sqrt{ 2 }} & -\frac{1}{\sqrt{ 11 }} \\
\frac{3}{\sqrt{ 22 }} & -\frac{1}{\sqrt{ 2 }} & -\frac{1}{\sqrt{ 11 }} \\
\frac{2}{\sqrt{ 22 }} & 0 & \frac{3}{\sqrt{ 11 }} \\
\end{pmatrix} }_{ U }\underbrace{ \begin{pmatrix}
\sqrt{ 11 } & 0 \\
0 & 1 \\
0 & 0 \\
\end{pmatrix} }_{ \Sigma }\underbrace{ \begin{pmatrix}
\frac{1}{\sqrt{ 2 }} & \frac{1}{\sqrt{ 2 }} \\
\frac{1}{\sqrt{ 2 }} & -\frac{1}{\sqrt{ 2 }} \\
\end{pmatrix} }_{ V^{*} } \\
}
$$
# 3a
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{4 \times 4} \\
\text{Let } (A^{2}+1I)(A^{2}-9I) = 0 \\
\text{Let } rank(iI - A) = 3 \\
\text{Find all possible Jordan forms of } A \\
\\
\text{Solution:} \\
(A^{2}+1)(A^{2}-9) = 0 \\
\implies (A-iI)(A+iI)(A-3I)(A+3I) = 0 \\
\implies m_{A}(x) \mid (x^{2}+1)(x^{2}-9) \\
\implies \text{Eigenvalues of } A \text{ can only be } \Set{ i, -i, 3, -3 } \\
\text{And all their algebraic multiplicities in $m_{A}(x)$ can only be } 1 \\
rank(iI-A) = 3 \implies i \text{ is an eigenvalue of } A \text{ and } g_{i} = 1 \\
\implies \text{There is one Jordan block with eigenvalue } i \\
A \in \mathbb{R}^{4 \times 4} \implies -i \text{ is also an eigenvalue of } A \\
\text{and there is one Jordan block with eigenvalue } -i \\
\implies A \text{ has two more eigenvalues which are either 3 or -3} \\
\implies J_{A} = J_{1}(i) \oplus J_{1}(-i) \oplus \left[\begin{array}{}
J_{1}(3) \\
J_{1}(-3) \\
\end{array}\right. \oplus \left[\begin{array}{}
J_{1}(3) \\
J_{1}(-3) \\
\end{array}\right. \\
\text{In other words: } J_{A} = \begin{pmatrix}
i \\
 & -i \\
 &  & 3 \\
 &  &  & 3 \\
\end{pmatrix} \text{ or } \underbrace{ \begin{pmatrix}
i \\
 & -i \\
 &  & 3 \\
 &  &  & -3 \\
\end{pmatrix} }_{ \text{Order of 3, -3 doesn't matter} } \text{ or } \begin{pmatrix}
i \\
 & -i \\
 &  & -3 \\
 &  &  & -3 \\
\end{pmatrix} \\
}
$$
# 3b
$$
\displaylines{
\text{Let } \left\langle  \begin{pmatrix}
x_{1} \\
y_{1} \\
\end{pmatrix}, \begin{pmatrix}
x_{2} \\
y_{2} \\
\end{pmatrix}  \right\rangle = 2x_{1}x_{2} + 4y_{1}y_{2} \text{ be an inner product on } \mathbb{R}^{2} \\
\text{Let } T: \mathbb{R}^{2} \to \mathbb{R}^{2} \text{ be a linear operator} \\
T\begin{pmatrix}
x \\
y \\
\end{pmatrix} = \begin{pmatrix}
3x+4y \\
2x-y \\
\end{pmatrix} \\
\text{Find explicitly } T^{*} \\
\\
\text{Solution:} \\
\langle e_{1}, e_{1} \rangle = 2 \\
\langle e_{2}, e_{2} \rangle = 4 \\
\langle e_{1}, e_{2} \rangle = \langle \begin{pmatrix}
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
\end{pmatrix} \rangle = 0 \\
\implies B = \Set{ \frac{e_{1}}{\sqrt{ 2 }}, \frac{e_{2}}{2} } \text{ is an orhonormal basis of } \mathbb{R}^{2} \\
T\left( \frac{e_{1}}{\sqrt{ 2 }} \right) = \begin{pmatrix}
\frac{3}{\sqrt{ 2 }} \\
\frac{2}{\sqrt{ 2 }} \\
\end{pmatrix} \implies [T(v_{1})]_{B} = \begin{pmatrix}
3 \\
2\sqrt{ 2 } \\
\end{pmatrix} \\
T\left( \frac{e_{2}}{2} \right) = \begin{pmatrix}
2 \\
-\frac{1}{2} \\
\end{pmatrix} \implies [T(v_{2})]_{B} = \begin{pmatrix}
2\sqrt{ 2 } \\
-1 \\
\end{pmatrix} \\
\implies [T]^{B}_{B} = \begin{pmatrix}
3 & 2\sqrt{ 2 } \\
2\sqrt{ 2 } & -1 \\
\end{pmatrix} \implies [T^{*}]^{B}_{B} = ([T]^{B}_{B})^{*} = \begin{pmatrix}
3 & 2\sqrt{ 2 } \\
2\sqrt{ 2 } & -1 \\
\end{pmatrix} = [T]^{B}_{B} \\
\implies T^{*} = T \implies T^{*}\begin{pmatrix}
x \\
y \\
\end{pmatrix} = \begin{pmatrix}
3x+4y \\
2x-y \\
\end{pmatrix} \\
}
$$
# 3c
$$
\displaylines{
\text{Let } B \in \mathbb{R}^{n \times n} \text{ be symmetric and all its eigenvalues are real and non-negative} \\
\text{Prove: } \exists C \text{ symmetric: } B = C^{2} \\
\\
\text{Solution:} \\
B \text{ is symmetric} \implies B \text{ is orthogonal diagonalizable} \\
\implies \exists P: B = P\begin{pmatrix}
\lambda_{1} \\
 & \ddots \\
 &  & \lambda_{n} \\
\end{pmatrix}P^{T} \\
\text{Let } C = P\begin{pmatrix}
\sqrt{ \lambda_{1} } \\
 & \ddots \\
 &  & \sqrt{ \lambda_{n} } \\
\end{pmatrix}P^{T} \\
C^{T} = \left( P\begin{pmatrix}
\sqrt{ \lambda_{1} } \\
 & \ddots \\
 &  & \sqrt{ \lambda_{n} } \\
\end{pmatrix}P^{T} \right)^{T} = P\begin{pmatrix}
\sqrt{ \lambda_{1} } \\
 & \ddots \\
 &  & \sqrt{ \lambda_{n} } \\
\end{pmatrix}P^{T} = C \\
\implies C^{2} = P\begin{pmatrix}
\lambda_{1} \\
 & \ddots \\
 &  & \lambda_{n} \\
\end{pmatrix}P^{T} = B \\
}
$$
# 4a
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \\
\text{Let } A^{3} = 0, A^{2} \neq 0 \\
\text{Prove or disprove: } rank(A) \leq \frac{2n}{3} \\
\\
\text{Proof:} \\
A^{3} = 0 \implies A \text{ is nilpotent} \implies \text{All eigenvalues of } A \text{ are } 0 \\
A^{2} \neq 0 \implies m_{A}(x) \neq x^{2} \implies m_{A}(x) = x^{3} \\
\implies \text{Maximal size of one Jordan block is 3} \\
\implies \text{In the Jordan form, there are at least } \frac{n}{3} \text{ Jordan blocks} \\
\implies \dim N(A) = k_{0} \geq \frac{n}{3} \implies n - rank(A) \geq \frac{n}{3} \implies \boxed{ rank(A) \leq \frac{2n}{3} } \\
}
$$
# 4b
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Prove or disprove: } A \text{ is unitary} \iff \forall \lambda: \left\lvert \lambda \right\rvert = 1 \\
\\
\text{Disproof:} \\
A = \begin{pmatrix}
1 & 1 \\
0 & 1 \\
\end{pmatrix} \\
\lambda = 1 \implies \forall \lambda : \left\lvert \lambda \right\rvert = 1 \\
\text{Columns of } A \text{ do not form an orthonormal basis } \implies A \text{ is not unitary} \\
}
$$
# 4c
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Prove or disprove: } A \text{ is unitary} \iff A \text{ is normal and } \forall \lambda: \left\lvert \lambda \right\rvert = 1 \\
\\
\text{Proof:} \\
\boxed{ \implies } \text{ This direction is trivial} \\
A^{*}A = I = AA^{*} \implies A \text{ is normal} \\
\text{Let } \lambda \text{ be an eigenvalue of } A \text{ with eigenvector } v \\
\lVert Av \rVert^{2} = \langle Av, Av \rangle = \left\lvert \lambda \right\rvert^{2}\langle v, v \rangle = \left\lvert \lambda \right\rvert^{2} \cdot \lVert v \rVert^{2} \\
\lVert Av \rVert^{2} = \lVert v \rVert^{2} \implies \left\lvert \lambda \right\rvert^{2} = 1 \implies \left\lvert \lambda \right\rvert = 1 \\
\\
\boxed{ \impliedby } \text{ Let } A \text{ be normal and } \forall \lambda: \left\lvert \lambda \right\rvert = 1 \\
A \text{ is normal and } P_{A}(x) \text{ is factorizable into linear factors over } \mathbb{C} \\
\implies A \text{ is unitary diagonalizable} \\
\implies \exists P: A = P\begin{pmatrix}
\lambda_{1} \\
 & \ddots \\
 &  & \lambda_{n} \\
\end{pmatrix}P^{*} \\
\implies A^{*} = P\begin{pmatrix}
\overline{\lambda_{1}} \\
 & \ddots \\
 &  & \overline{\lambda_{n}} \\
\end{pmatrix}P^{*} \\
\implies AA^{*} = P\begin{pmatrix}
\lambda_{1}\overline{\lambda_{1}} \\
 & \ddots \\
 &  & \lambda_{n}\overline{\lambda_{n}} \\
\end{pmatrix}P^{*} = PIP^{*} = I \implies \boxed{ A \text{ is unitary} } \\
}
$$
# 5a
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times m} \\
\text{Prove: } N(AA^{T}) = N(A^{T}) \\
\\
\text{Proof:} \\
v \in N(A^{T}) \implies A^{T}v = 0 \implies AA^{T}v = 0 \implies N(A^{T}) \subseteq N(AA^{T}) \\
\text{Let } v \in N(AA^{T}) \\
\implies AA^{T}v = 0 \implies \langle AA^{T}v, v \rangle = 0 \\
\langle AA^{T}v, v \rangle = [(AA^{T}v)^{T}]_{S}G_{S}[v]_{S} = (AA^{T}v)^{T}v = v^{T}AA^{T}v = (A^{T}v)^{T}A^{T}v = \langle A^{T}v, A^{T}v \rangle \\
\implies \langle A^{T}v, A^{T}v \rangle = 0 \\
\implies A^{T}v = 0 \implies v \in N(A^{T}) \implies N(AA^{T}) \subseteq N(A^{T}) \\
\implies \boxed{ N(AA^{T}) = N(A^{T}) } \\
}
$$
# 5b
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times m} \\
\text{Prove: } N(AA^{T}) = (C(A))^{\perp} \\
\\
\text{Proof:} \\
\boxed{ \subseteq } N(AA^{T}) = N(A^{T}) \\
\text{Let } v \in N(A^{T}) \implies A^{T}v = 0 \\
\text{Let } u \in \mathbb{R}^{m} \implies Au \in C(A) \\
\langle Au, v \rangle = (Au)^{T}v = u^{T}A^{T}v = u^{T}0 = 0 \\
\implies v \in (C(A))^{\perp} \implies N(AA^{T}) = N(A^{T}) \subseteq (C(A))^{\perp} \\
\\
\boxed{ \supseteq } \text{ Let } v \in (C(A))^{\perp} \\
\text{Let } u \in \mathbb{R}^{m} \\
Au \in C(A) \implies \langle Au, v \rangle = (Au)^{T}v = u^{T}A^{T}v = 0 \\
\forall u \in \mathbb{R}^{m}: u^{T}A^{T}v = 0 \implies \forall i \in [1, m]: e_{i}^{T}A^{T}v = 0 \implies \forall i \in [1, m]: (A^{T}v)_{i} = 0 \\
\implies A^{T}v = 0 \implies v \in N(A^{T}) \\
\implies (C(A))^{\perp} \subseteq N(A^{T}) = N(AA^{T}) \\
\implies \boxed{ N(AA^{T}) = (C(A))^{\perp} } \\
}
$$
# 5c
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times m} \\
\text{Let } n > m \\
\text{Prove: } 0 \text{ is an eigenvalue of } AA^{T} \text{ with } \gamma_{AA^{T}}(0) = n - rankA \\
\\
\text{Proof:} \\
n > m \implies rankA \leq m < n \\
AA^{T} \in \mathbb{R}^{n \times n} \\
\implies rank(AA^{T}) \leq rank(A) < n \implies \boxed{ 0 \text{ is an eigenvalue of } AA^{T} } \\
\boxed{ \gamma_{AA^{T}}(0) = \dim N(AA^{T}) = \dim N(A^{T}) = n - rank A^{T} = n - rank A } \\
}
$$
# 5d
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times m} \\
\text{Let } \Set{ C_{1}(A), \dots, C_{m}(A) } \text{ be an orthonormal set} \\
}
$$
### 1
$$
\displaylines{
\text{What can we say about } A^{T}A? \\
\\
\text{Solution:} \\
A^{T}A = \begin{pmatrix}
\overset{ | }{ \underset{ | }{ A^{T}C_{1}(A) } } & \overset{ | }{ \underset{ | }{ A^{T}C_{2}(A) } } & \dots & \overset{ | }{ \underset{ | }{ A^{T}C_{m}(A) } } \\
\end{pmatrix} \\
(A^{T}A)_{ij} = R_{i}(A^{T}) \cdot C_{j}(A) = (C_{i}(A))^{T} \cdot C_{j}(A) = \langle C_{i}(A), C_{j}(A) \rangle = \left\{\begin{array}{}
1 & i = j \\
0 & i \neq j \\
\end{array}\right. \\
\implies \boxed{ A^{T}A = I } \\
}
$$
### 2
$$
\displaylines{
\text{Prove: } \forall v \in \mathbb{R}^{n}: AA^{T}v - v \in N(AA^{T}) \\
\\
\text{Proof:} \\
AA^{T}(AA^{T}v - v) = AA^{T}AA^{T}v - AA^{T}v = AIA^{T}v - AA^{T}v = AA^{T}v - AA^{T}v = 0 \\
\implies \boxed{ AA^{T}v - v \in N(AA^{T}) } \\
}
$$
### 3
$$
\displaylines{
\text{Prove: } \forall v \in \mathbb{R}^{n}: AA^{T}v \in C(A) \\
\text{Prove: } \forall u \in C(A): \lVert AA^{T}v - v \rVert \leq \lVert u - v \rVert \\
\\
\text{Proof:} \\
\text{Let } v \in \mathbb{R}^{n} \\
AA^{T}v = A\underbrace{ (A^{T}v) }_{ w \in \mathbb{R}^{m} } = Aw \in C(A) \\
\text{Let } u \in C(A) \\
AA^{T}v - v \in N(AA^{T}) = (C(A))^{\perp} \\
AA^{T}v \in C(A) \implies u - AA^{T}v \in C(A) \\
\implies u - AA^{T}v \perp AA^{T}v - v \\
\implies \lVert u - v \rVert^{2} = \lVert u - AA^{T}v + AA^{T}v - v \rVert^{2} \overset{ \text{By Pythagorean theorem} }{ = } \\
= \lVert u - AA^{T}v \rVert^{2} + \lVert AA^{T}v - v \rVert^{2} \geq \lVert AA^{T}v - v \rVert^{2} \\
\implies \boxed{ \lVert u - v \rVert \geq \lVert AA^{T}v - v \rVert } \\
}
$$
