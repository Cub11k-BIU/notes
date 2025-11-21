---
{"publish":true,"created":"30/05/25, 13:05","modified":"2025-11-21T21:10:02.765+02:00","tags":["Academia","Assignment","Linear-2"],"cssclasses":""}
---

# 1a
$$
\displaylines{
\text{Let } V = \mathbb{R}^{3} \\
\text{Let } \left\langle  \begin{pmatrix}
x \\
y \\
z \\
\end{pmatrix}, \begin{pmatrix}
a \\
b \\
c \\
\end{pmatrix} \right\rangle = x(a-b) + y(-a+2b-c) + z(-b+2c) \\
\text{Find an orthonormal basis of } V \\
\\
\text{Solution:} \\
\text{Let } S = \Set{ e_{1}, e_{2}, e_{3} } \\
\lVert e_{1} \rVert^{2} = \langle e_{1}, e_{1} \rangle = 1 \\
\lVert e_{2} \rVert^{2} = \langle e_{2}, e_{2} \rangle = 2 \\
\lVert e_{3} \rVert^{2} = \langle e_{3}, e_{3} \rangle = 2 \\
\text{Let us find an orthonormal basis by using Gram-Schmidt orthonormalization process} \\
u_{1} = e_{1} \implies \boxed{ v_{1} = \frac{e_{1}}{\lVert e_{1} \rVert} = e_{1} } \\
u_{2} = e_{2} - P_{v_{1}}(e_{2}) = e_{2} - \frac{\langle e_{2}, v_{1} \rangle}{\lVert v_{1} \rVert^{2}}v_{1} = e_{2} - \langle e_{2}, e_{1} \rangle e_{1} \overset{ \langle e_{2}, e_{1} \rangle = -1 \\ }{ = } e_{2} + e_{1} \\
\langle e_{2} + e_{1}, e_{2} + e_{1} \rangle = \langle e_{2}, e_{2}+e_{1} \rangle + \langle e_{1}, e_{2}+e_{1} \rangle = \langle e_{2}, e_{2} \rangle + \langle e_{2}, e_{1} \rangle + \langle e_{1}, e_{2} \rangle + \langle e_{1}, e_{1} \rangle = \\
= 2 - 1 - 1 + 1 = 1 \implies \boxed{ v_{2} = \frac{e_{2} + e_{1}}{\lVert e_{2}+e_{1} \rVert} = e_{2} + e_{1} } \\
u_{3} = e_{3} - P_{\Set{ v_{1}, v_{2} }}(e_{3}) = e_{3} - \frac{\langle e_{3}, v_{1} \rangle}{\lVert v_{1} \rVert^{2}}v_{1} - \frac{\langle e_{3}, v_{2} \rangle}{\lVert v_{2} \rVert^{2}}v_{2} \\
\langle e_{3}, e_{1} \rangle = 0 \\
\langle e_{3}, e_{2} + e_{1} \rangle = \langle e_{3}, e_{2} \rangle = -1 \\
\implies u_{3} = e_{3} - \langle e_{3}, e_{1} \rangle e_{1} - \langle e_{3}, e_{2}+e_{1} \rangle(e_{2}+e_{1}) = e_{3} + e_{2} + e_{1} \\
\langle e_{3}+e_{2}+e_{1}, e_{3}+e_{2}+e_{1} \rangle = \langle e_{3}, e_{3}+e_{2}+e_{1} \rangle + \langle e_{2}, e_{3}+e_{2}+e_{1} \rangle + \langle e_{1}, e_{3}+e_{2}+e_{1} \rangle = \\
= \langle e_{3}, e_{3} \rangle + \langle e_{2}, e_{2} \rangle + \langle e_{1}, e_{1} \rangle + 2\langle e_{3}, e_{2} \rangle + 2\langle e_{3}, e_{1} \rangle + 2\langle e_{2}, e_{1} \rangle = \\
= 2 + 2 + 1 - 2 - 2 = 1 \implies \boxed{ v_{3} = \frac{u_{3}}{\lVert u_{3} \rVert} = u_{3} = e_{3} + e_{2} + e_{1} } \\
\implies \boxed{ \text{An orthonormal basis of } V \text{ is } \Set{ e_{1}, e_{1} + e_{2}, e_{1}+e_{2}+e_{3} } } \\
}
$$
# 1b
$$
\displaylines{
\text{Let } V = \mathbb{R}^{3} \\
\text{Let } \left\langle  \begin{pmatrix}
x \\
y \\
z \\
\end{pmatrix}, \begin{pmatrix}
a \\
b \\
c \\
\end{pmatrix} \right\rangle = x(a-b) + y(-a+2b-c) + z(-b+2c) \\
\text{Find } \Set{ e_{2} }^{\perp} \text{ and calculate } P_{\Set{ e_{2} }^{\perp}}\begin{pmatrix}
1 \\
2 \\
3 \\
\end{pmatrix} \\
\\
\text{Solution:} \\
\text{Let } v \in V \\
\langle e_{2}, v \rangle = -v_{1} + 2v_{2} - v_{3} \\
v \in \Set{ e_{2} }^{\perp} \iff \langle e_{2}, v \rangle = 0 \iff -v_{1} + 2v_{2} - v_{3} = 0 \\
\iff v \in sp\Set{ \begin{pmatrix}
2 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
-1 \\
0 \\
1 \\
\end{pmatrix} } \\
\implies \boxed{ \Set{ e_{2} }^{\perp} = sp\Set{ \begin{pmatrix}
2 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
-1 \\
0 \\
1 \\
\end{pmatrix} } } \\
\begin{pmatrix}
1 \\
2 \\
3 \\
\end{pmatrix} = 2\begin{pmatrix}
2 \\
1 \\
0 \\
\end{pmatrix} + 3\begin{pmatrix}
-1 \\
0 \\
1 \\
\end{pmatrix} \\
\implies \begin{pmatrix}
1 \\
2 \\
3 \\
\end{pmatrix} \in \Set{ e_{2} }^{\perp} \implies \boxed{ P_{\Set{ e_{2} }^{\perp}}\begin{pmatrix}
1 \\
2 \\
3 \\
\end{pmatrix} = \begin{pmatrix}
1 \\
2 \\
3 \\
\end{pmatrix} } \\
}
$$
# 2
$$
\displaylines{
\text{Let } B_{1} = \Set{ u \in V : \lVert u \rVert = 1 } \\
\hat{v} = \frac{v}{\lVert v \rVert} \\
\forall v \neq 0 \in V: \forall u \in B_{1}: \lVert v - u \rVert \geq \lVert v - \hat{v} \rVert \\
\text{Show: } \forall u \in B_{1}: \lVert v - u \rVert = \lVert v - \hat{v} \rVert \implies u = \hat{v} \\
\\
\text{Solution:} \\
\text{Let } v \neq 0 \in V \\
\text{Let } u \in B_{1} \\
\lVert v - u \rVert^{2} = \langle v-u, v-u \rangle = \lVert v \rVert^{2} - \langle v, u \rangle - \overline{\langle v, u \rangle} + \lVert u \rVert^{2} = \lVert v \rVert^{2} - 2\mathrm{Re}(\langle v, u \rangle) + 1 \\
\lVert v - \hat{v} \rVert^{2} = \left\lvert 1 - \frac{1}{\lVert v \rVert} \right\rvert^{2} \cdot \lVert v \rVert^{2} = \dots = \lVert v \rVert^{2} - 2\lVert v \rVert + 1 \\
\text{Let } \lVert v - u \rVert = \lVert v - \hat{v} \rVert \\
\implies \lVert v - u \rVert^{2} = \lVert v - \hat{v} \rVert^{2} \\
\implies \mathrm{Re}(\langle v, u \rangle) = \lVert v \rVert \\
\mathrm{Re}(\langle v, u \rangle) \underbrace{ \leq }_{ = } \left\lvert \langle v, u \rangle \right\rvert \underbrace{ \leq }_{ = } \lVert v \rVert \cdot \lVert u \rVert = \lVert v \rVert \\
\implies \left\lvert \langle v, u \rangle \right\rvert = \lVert v \rVert \cdot \lVert u \rVert \implies u = \alpha v \\
\mathrm{Re}(\langle v, u \rangle) = \left\lvert \langle v, u \rangle \right\rvert \implies \mathrm{Re}(\lVert v \rVert^{2}\alpha) = \lVert v \rVert^{2}\left\lvert \alpha \right\rvert \implies \mathrm{Re}(\alpha) = \left\lvert \alpha \right\rvert \\
\implies \alpha > 0 \in \mathbb{R} \\
\left\lvert \langle v, u \rangle \right\rvert = \lVert v \rVert \cdot \lVert u \rVert \implies \alpha = \frac{1}{\lVert v \rVert} \implies \boxed{ u = \frac{v}{\lVert v \rVert} = \hat{v} } \\
}
$$
# 3
$$
\displaylines{
\text{Let } V \text{ be an inner product space over } \mathbb{R} \\
\text{Let } \dim V = n \\
\text{Let } T: V \to V \text{ be a linear transformation such that,} \\
\forall v \in V: \langle v, Tv \rangle = 0 \\
}
$$
## 3a
$$
\displaylines{
\text{Prove or disprove: } T \text{ is invertible} \implies T \text{ has no eigenvalues} \\
\\
\text{Proof:} \\
\text{Let } T \text{ be invertible} \\
\text{Let } v \neq 0 \in V \\
\text{Let } \lambda \in \mathbb{R} \text{ be an eigenvalue of } T \text{ with eigenvector } v \\
\implies Tv = \lambda v \implies \langle v, Tv \rangle = \langle v, \lambda v \rangle = \lambda \cdot \lVert v \rVert = 0 \\
T \text{ is invertible} \implies \lambda \neq 0 \implies \lVert v \rVert = 0 \implies v = 0 - \text{Contradiction!} \\
\implies \boxed{ T \text{ has no eigenvalues} } \\
}
$$
## 3b
$$
\displaylines{
\text{Prove or disprove: } P_{T}(x) = \prod_{i=1}^{n} (x-\lambda_{i}) \implies T \text{ is nilpotent} \\
\\
\text{Proof:} \\
\forall i \in [1, n]: \exists v \neq 0 \in V: Tv = \lambda_{i}v \implies \langle \lambda_{i}v, v \rangle = 0 \implies \lambda_{i} = 0 \\
\implies P_{T}(x) = x^{n} \implies P_{T}(T) = T^{n} = 0 \implies \boxed{ T \text{ is nilpotent} } \\
}
$$
## 3c
$$
\displaylines{
\text{Prove or disprove: } T \text{ is not invertible} \implies T \text{ is nilpotent} \\
\\
\text{Disproof:} \\
\text{Let } V = \mathbb{R}^{3} \\
\text{Let } [T]_{S} = \begin{pmatrix}
0 & 0 & 0 \\
0 & 0 & -1 \\
0 & 1 & 0 \\
\end{pmatrix} \\
\implies \forall v \in V: Tv = \begin{pmatrix}
0 & 0 & 0 \\
0 & 0 & -1 \\
0 & 1 & 0 \\
\end{pmatrix}\begin{pmatrix}
x \\
y \\
z \\
\end{pmatrix} = \begin{pmatrix}
0 \\
-z \\
y \\
\end{pmatrix} \\
\left\langle  \begin{pmatrix}
x \\
y \\
z \\
\end{pmatrix}, \begin{pmatrix}
0 \\
-z \\
y \\
\end{pmatrix}  \right\rangle = -yz + zy = 0 \\
\implies \forall v \in V: \langle v, Tv \rangle = 0 \\
P_{T}(x) = x(x^{2}+1) \implies \boxed{ T \text{ is not nilpotent} } \\
}
$$
## 3d
$$
\displaylines{
\text{Prove or disprove: } n \text{ is odd} \implies T \text{ is not invertible} \\
\\
\text{Proof:} \\
P_{T}(x) \in \mathbb{R}_{n}[x] \\
n \text{ is odd} \implies \exists \lambda \in \mathbb{R}: P_{T}(\lambda) = 0 \\
\implies \lambda \text{ is an eigenvalue of } T \\
\exists v \neq 0 \in V: Tv = \lambda v \implies \langle v, Tv \rangle = \langle v, \lambda v \rangle = \lambda \lVert v \rVert^{2} = 0 \implies \lambda = 0 \\
\implies \boxed{ T \text{ is not invertible} } \\
}
$$
# 4
$$
\displaylines{
\text{Let } \langle \cdot, \cdot \rangle_{1} ; \langle \cdot, \cdot \rangle_{2} \text{ be inner products on space } V \\
\text{Let } \lVert \cdot \rVert_{1} ; \lVert \cdot \rVert_{2} \text{ be root norms} \\
\text{Prove: } \exists c > 0: \forall v \in V: \lVert v \rVert_{1} \leq c\lVert v \rVert_{2} \\
\\
\text{Proof:} \\
\text{Let } B = \Set{ v_{1}, \dots, v_{n} } \text{ be an orthonormal basis in relation to } \langle \cdot, \cdot \rangle_{2} \\
\text{Let } v \in V \\
v = \sum_{i=1}^{n} \alpha_{i}v_{i} \implies \lVert v \rVert^{2}_{2} = \left\lVert  \sum_{i=1}^{n} \alpha_{i}v_{i}  \right\rVert^{2}_{2} = \\
= \sum_{i=1}^{n} \alpha_{i}^{2} \lVert v_{i} \rVert_{2}^{2} = \sum_{i=1}^{n} \alpha_{i}^{2} \\
\lVert v \rVert_{2}^{1} = \left\lVert  \sum_{i=1}^{n} \alpha_{i}v_{i}  \right\rVert^{2}_{1} \leq \left( \sum_{i=1}^{n} \left\lvert \alpha_{i} \right\rvert \cdot \lVert v_{i} \rVert_{1} \right)^{2} \leq n \left( \sum_{i=1}^{n} \alpha_{i}^{2} \lVert v_{i} \rVert_{1}^{2} \right) \\
\text{Let } M = \max\{\lVert v_{1} \rVert_{1}^{2}, \dots, \lVert v_{n} \rVert_{1}^{2}\} \\
\implies \lVert v \rVert_{1}^{2} \leq n \left( \sum_{i=1}^{n} \alpha_{i}^{2} \lVert v_{i} \rVert_{1}^{2} \right) \leq n \left( \sum_{i=1}^{n} \alpha_{i}^{2} M \right) = nM\left( \sum_{i=1}^{n} \alpha_{i}^{2} \right) = nM\lVert v \rVert^{2}_{2} \\
\implies \lVert v \rVert_{1} \leq \sqrt{ nM }\lVert v \rVert_{2} \implies \boxed{ \exists c = \sqrt{ nM }: \forall v \in V: \lVert v \rVert_{1} \leq c\lVert v \rVert_{2} } \\
}
$$
# 5
$$
\displaylines{
\text{Let } A = \begin{pmatrix}
4 & 2 & 3 \\
2 & 3 & 3 \\
4 & 4 & 5 \\
2 & 5 & 5 \\
\end{pmatrix},  b = \begin{pmatrix}
7 \\
4 \\
8 \\
6 \\
\end{pmatrix} \\
\text{Find } b' \text{ such that } b' \text{ is the closest (by norm) to } b \text{ and find solution to } Ax = b' \\
\\
\text{Solution:} \\
\text{We need to find } b' \text{ such that the solution to } Ax = b' \text{ exists and } b' \text{ is the closest to } b \\
\implies b' \in C(A) \text{ and } b' = P_{C(A)}(b) \\
\begin{pmatrix}
4 & 2 & 3 \\
2 & 3 & 3 \\
4 & 4 & 5 \\
2 & 5 & 5 \\
\end{pmatrix} \to \begin{pmatrix}
0 & 4 & 3 \\
2 & 3 & 3 \\
0 & 2 & 1 \\
0 & 2 & 2 \\
\end{pmatrix} \to \begin{pmatrix}
0 & 0 & 1 \\
2 & 3 & 3 \\
0 & 2 & 1 \\
0 & 0 & 0 \\
\end{pmatrix} \implies rank(A) = 3 \\
\implies C(A) = sp\Set{ \begin{pmatrix}
4 \\
2 \\
4 \\
2 \\
\end{pmatrix}, \begin{pmatrix}
2 \\
3 \\
4 \\
5 \\
\end{pmatrix}, \begin{pmatrix}
3 \\
3 \\
5 \\
5 \\
\end{pmatrix} } = sp\Set{ v_{1}, v_{2}, v_{3} } \\
}
$$
$$
\displaylines{
\text{Let us use the Gramm-Schmidt orthogonalization process:} \\
u_{1} = v_{1} = \begin{pmatrix}
4 \\
2 \\
4 \\
2 \\
\end{pmatrix} \\
u_{2} = v_{2} - P_{u_{1}}(v_{2}) = v_{2} - \frac{\langle v_{2}, u_{1} \rangle}{\lVert u_{1} \rVert^{2}}u_{1} = \begin{pmatrix}
2 \\
3 \\
4 \\
5 \\
\end{pmatrix} - \frac{40}{40}\begin{pmatrix}
4 \\
2 \\
4 \\
2 \\
\end{pmatrix} = \begin{pmatrix}
-2 \\
1 \\
0 \\
3 \\
\end{pmatrix} \\
u_{3} = v_{3} - P_{\Set{ u_{1}, u_{2} }}(v_{3}) = \begin{pmatrix}
3 \\
3 \\
5 \\
5 \\
\end{pmatrix} - \frac{\langle v_{3}, u_{1} \rangle}{\lVert u_{1} \rVert^{2}}u_{1} - \frac{\langle v_{3}, u_{2} \rangle}{\lVert u_{2} \rVert^{2}}u_{2} = \\
= \begin{pmatrix}
3 \\
3 \\
5 \\
5 \\
\end{pmatrix} - \frac{48}{40}\begin{pmatrix}
4 \\
2 \\
4 \\
2 \\
\end{pmatrix} - \frac{12}{14}\begin{pmatrix}
-2 \\
1 \\
0 \\
3 \\
\end{pmatrix} = \begin{pmatrix}
3 \\
3 \\
5 \\
5 \\
\end{pmatrix} - \frac{42}{35}\begin{pmatrix}
4 \\
2 \\
4 \\
2 \\
\end{pmatrix} - \frac{30}{35}\begin{pmatrix}
-2 \\
1 \\
0 \\
3 \\
\end{pmatrix} = \\
= \frac{1}{35}\left( \begin{pmatrix}
105 \\
105 \\
175 \\
175 \\
\end{pmatrix} - \begin{pmatrix}
168 \\
84 \\
168 \\
84 \\
\end{pmatrix} - \begin{pmatrix}
-60 \\
30 \\
0 \\
90 \\
\end{pmatrix} \right) = \frac{1}{35}\begin{pmatrix}
-3 \\
-9 \\
7 \\
1 \\
\end{pmatrix} \\
\\
b' = P_{C(A)}(b) = \frac{\langle b, u_{1} \rangle}{\lVert u_{1} \rVert^{2}}u_{1} + \frac{\langle b, u_{2} \rangle}{\lVert u_{2} \rVert^{2}}u_{2} + \frac{\langle b, u_{3} \rangle}{\lVert u_{3} \rVert^{2}}u_{3} = \\
= \frac{80}{40}\begin{pmatrix}
4 \\
2 \\
4 \\
2 \\
\end{pmatrix} + \frac{8}{14}\begin{pmatrix}
-2 \\
1 \\
0 \\
3 \\
\end{pmatrix} + \frac{(-21-36+56+6)}{9+81+49+1}\begin{pmatrix}
-3 \\
-9 \\
7 \\
1 \\
\end{pmatrix} = \\
= \begin{pmatrix}
8 \\
4 \\
8 \\
4 \\
\end{pmatrix} + \frac{8}{14}\begin{pmatrix}
-2 \\
1 \\
0 \\
3 \\
\end{pmatrix} + \frac{1}{28}\begin{pmatrix}
-3 \\
-9 \\
7 \\
1 \\
\end{pmatrix} = \frac{1}{28}\left( \begin{pmatrix}
224 \\
112 \\
224 \\
112 \\
\end{pmatrix} + \begin{pmatrix}
-32 \\
16 \\
0 \\
48 \\
\end{pmatrix} + \begin{pmatrix}
-3 \\
-9 \\
7 \\
1 \\
\end{pmatrix} \right) = \frac{1}{28}\begin{pmatrix}
189 \\
119 \\
231 \\
161 \\
\end{pmatrix} \\
\implies \boxed{ b' = \frac{1}{4}\begin{pmatrix}
27 \\
17 \\
33 \\
23 \\
\end{pmatrix} } \\
Ax = b' \implies \left(\begin{array}{ccc|c}
16 & 8 & 12 & 27 \\
8 & 12 & 12 & 17 \\
16 & 16 & 20 & 33 \\
8 & 20 & 20 & 23 \\
\end{array}\right) \to \left(\begin{array}{ccc|c}
8 & 12 & 12 & 17 \\
0 & -16 & -12 & -7 \\
0 & -8 & -4 & -1 \\
0 & 8 & 8 & 6 \\
\end{array}\right) \to \left(\begin{array}{ccc|c}
8 & 12 & 12 & 17 \\
0 & 8 & 4 & 1 \\
0 & 0 & 4 & 5 \\
0 & 0 & 0 & 0 \\
\end{array}\right) \to \\
\to \left(\begin{array}{ccc|c}
1 & 0 & 0 & 1 \\
0 & 1 & 0 & -\frac{1}{2} \\
0 & 0 & 1 & \frac{5}{4} \\
0 & 0 & 0 & 0 \\
\end{array}\right) \implies \boxed{ x = \begin{pmatrix}
1 \\
-\frac{1}{2} \\
\frac{5}{4} \\
\end{pmatrix} } \\
}
$$
# 6a
$$
\displaylines{
\text{Let } H \in \mathbb{R}^{m \times n}, \text{ columns of } H \text{ are linearly independent} \\
\text{Prove: } H^{T}H \text{ is invertible} \\
\\
\text{Proof:} \\
rank(H) = \dim C(H) = \left\lvert \Set{ C_{1}(H), \dots, C_{n}(H) } \right\rvert = n \\
H^{T}H \in \mathbb{R}^{n \times n} \\
N(H^{T}H) = \Set{ x \in \mathbb{R}^{n} | H^{T}Hx = 0 } \\
v \in N(H) \implies v \in N(H^{T}H) \implies N(H) \subseteq N(H^{T}H) \\
v \in N(H^{T}H) \implies H^{T}Hv = 0 \implies v^{T}H^{T}Hv = 0 \\
\implies (Hv)^{T}Hv = 0 \implies \lVert Hv \rVert^{2} = 0 \implies Hv = 0 \implies v \in N(H) \\
\implies N(H^{T}H) \subseteq N(H) \implies N(H^{T}H) = N(H) \\
rank(H) + \dim N(H) = n = rank(H^{T}H) + \dim N(H^{T}H) = rank(H^{T}H) + \dim N(H) \\
\implies rank(H^{T}H) = rank(H) = n \implies \boxed{ H^{T}H \text{ is invertible} } \\
}
$$
# 6b
$$
\displaylines{
\text{Given } Hx = b, \ \ \ \tilde{x} = (H^{T}H)^{-1}H^{T}b \quad \text{ is called the Least SQuares} \\
\text{Prove: } \tilde{x} = \min_{x \in \mathbb{R}^{n}}\Set{ \sum_{i=1}^{n} (b_{i} - (Hx)_{i})^{2} } \\
\\
\text{Proof:} \\
\min_{x \in \mathbb{R}^{n}}\Set{ \sum_{i=1}^{n} (b_{i} - (Hx)_{i})^{2} } = \min_{x \in \mathbb{R}^{n}} \Set{ \lVert b - Hx \rVert^{2} } \\
\forall x \in \mathbb{R}^{n}: \lVert b - Hx \rVert^{2} \geq \lVert b - P_{C(H)}(b) \rVert^{2} \\
\implies \boxed{ v = \min_{x \in \mathbb{R}^{n}} \Set{ \lVert b - Hx \rVert^{2} } \iff Hv = P_{C(H)}(b) } \\
\text{Let } W = C(H) \\
H\tilde{x} = H(H^{T}H)^{-1}H^{T}b \overset{ ? }{ = } P_{W}(b) \\
\\
\text{Let } \tilde{b} = H(H^{T}H)^{-1}H^{T}b \\
\tilde{b} = H \cdot ((H^{T}H)^{-1}H^{T}b) \implies \tilde{b} \in C(H) = W \\
H^{T}\tilde{b} = H^{T}H(H^{T}H)^{-1}H^{T}b = H^{T}b \\
\implies H^{T}(b - \tilde{b}) = 0 \implies b - \tilde{b} \in N(H^{T}) = (C(H))^{\perp} = W^{\perp} \\
\implies v = b - \tilde{b}, v \in W^{\perp} \\
\implies \underbrace{ v }_{ \in W^{\perp} } + \underbrace{ \tilde{b} }_{ \in W } = b \implies H\tilde{x} = \tilde{b} = P_{W}(b) \implies \boxed{ \tilde{x} = \min_{x \in \mathbb{R}^{n}} \Set{ \lVert b - Hx \rVert^{2} } } \\
}
$$
