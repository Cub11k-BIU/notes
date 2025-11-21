---
{"publish":true,"created":"29/05/25, 19:05","modified":"2025-11-21T21:10:02.753+02:00","tags":["Academia","Assignment","Linear-2"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Let } U, W \text{ be subspaces of an inner product space } V \\
\text{Let } U \oplus W = V \\
\text{Prove or disprove: } W = U^{\perp} \\
\\
\text{Disproof:} \\
\text{Let } V = \mathbb{R}^{2} \\
\text{Let } U = sp\Set{ \begin{pmatrix}
1 \\
0 \\
\end{pmatrix} }, W = sp\Set{ \begin{pmatrix}
1 \\
1 \\
\end{pmatrix} } \\
U + W = sp\Set{ \begin{pmatrix}
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
1 \\
\end{pmatrix} } = \mathbb{R}^{2} \\
U \cap W = \Set{ 0 } \\
\implies U \oplus W = V \\
\left\langle  \begin{pmatrix}
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
1 \\
\end{pmatrix} \right\rangle = 1 \neq 0 \\
\implies \boxed{ W \neq U^{\perp} } \\
}
$$
# 2a
$$
\displaylines{
\text{Let } V \text{ be an inner product space} \\
\text{Let } x, y \in V \setminus \Set{ 0 } \\
\text{Let } u = x - \frac{\langle x, y \rangle y}{\lVert y \rVert^{2}} \\
\text{Prove: } u \perp y \\
\\
\text{Proof:} \\
\langle u, y \rangle = \left\langle  x - \frac{\langle x, y \rangle y}{\lVert y \rVert^{2}} , y  \right\rangle = \langle x, y \rangle - \left\langle  \frac{\langle x, y \rangle y}{\lVert y \rVert^{2}}, y  \right\rangle = \langle x, y \rangle - \frac{\langle x, y \rangle}{\lVert y \rVert^{2}}\langle y, y \rangle = \\
= \langle x, y \rangle - \langle x, y \rangle = 0 \\
\implies \boxed{ \langle u, y \rangle = 0 } \\
}
$$
# 2b
$$
\displaylines{
\text{Let } V \text{ be an inner product space} \\
\text{Let } x, y \in V \setminus \Set{ 0 } \\
\text{Let } u = x - \frac{\langle x, y \rangle y}{\lVert y \rVert^{2}} \\
\text{Prove: } \langle u, u \rangle = \langle u, x \rangle \\
\\
\text{Proof:} \\
\langle u, u \rangle = \left\langle  u, x - \frac{\langle x, y \rangle y}{\lVert y \rVert^{2}}  \right\rangle = \langle u, x \rangle - \overline{\frac{\langle x, y \rangle}{\lVert y \rVert^{2}}}\langle u, y \rangle = \langle u, x \rangle - 0 = \langle u, x \rangle \\
\implies \boxed{ \langle u, u \rangle = \langle u, x \rangle } \\
}
$$
# 2c
$$
\displaylines{
\text{Let } V \text{ be an inner product space} \\
\text{Let } x, y \in V \setminus \Set{ 0 } \\
\text{Let } u = x - \frac{\langle x, y \rangle y}{\lVert y \rVert^{2}} \\
\text{Show: } 0 \leq \lVert x \rVert^{2} - \frac{\left\lvert \langle x, y \rangle \right\rvert^{2}}{\lVert y \rVert^{2}} \\
\\
\text{Proof:} \\
\lVert u \rVert^{2} = \langle u, u \rangle = \langle u, x \rangle = \left\langle  x - \frac{\langle x, y \rangle y}{\lVert y \rVert^{2}}, x  \right\rangle = \langle x, x \rangle - \frac{\langle x, y \rangle}{\lVert y \rVert^{2}}\langle y, x \rangle = \\
= \lVert x \rVert^{2} - \frac{\langle x, y \rangle \cdot \overline{\langle x, y \rangle}}{\lVert y \rVert^{2}} = \lVert x \rVert^{2} - \frac{\left\lvert \langle x, y \rangle \right\rvert^{2}}{\lVert y \rVert^{2}} \\
\lVert u \rVert^{2} \geq 0 \implies \boxed{ \lVert x \rVert^{2} - \frac{\left\lvert \langle x, y \rangle \right\rvert^{2}}{\lVert y \rVert^{2}} \geq 0 } \\
}
$$
# 2d
$$
\displaylines{
\text{Let } V \text{ be an inner product space} \\
\text{Let } x, y \in V \setminus \Set{ 0 } \\
\text{Let } u = x - \frac{\langle x, y \rangle y}{\lVert y \rVert^{2}} \\
\text{Infer Cauchy-Schwarz inequality: } \lVert x \rVert \cdot \lVert y \rVert \geq \left\lvert \langle x, y \rangle \right\rvert \\
\\
\text{Solution:} \\
0 \leq \lVert x \rVert^{2} - \frac{\left\lvert \langle x, y \rangle \right\rvert^{2}}{\lVert y \rVert^{2}} \implies \lVert x \rVert^{2} \geq \frac{\left\lvert \langle x, y \rangle \right\rvert^{2}}{\lVert y \rVert^{2}} \\
\implies (\underbrace{ \lVert x \rVert \cdot \lVert y \rVert }_{ \geq 0 })^{2} \geq \underbrace{ \left\lvert \langle x, y \rangle \right\rvert }_{ \geq 0 }^{2} \\
\implies \boxed{ \lVert x \rVert \cdot \lVert y \rVert \geq \left\lvert \langle x, y \rangle \right\rvert } \\
}
$$
# 3a
$$
\displaylines{
\text{Let } V \text{ be an inner product space} \\
\text{Let } \lVert \cdot \rVert \text{ be a norm dependant on inner product} \\
\text{Let } v, w \in V \\
\text{Prove: } \lVert v + w \rVert^{2} + \lVert v - w \rVert^{2} = 2\lVert v \rVert^{2} + 2\lVert w \rVert^{2} \\
\\
\text{Proof:} \\
\lVert v + w \rVert^{2} = \langle v + w, v + w \rangle = \langle v, v + w \rangle + \langle w, v + w \rangle = \langle v, v \rangle + \langle v, w \rangle + \langle w, v \rangle + \langle w, w \rangle \\
\lVert v - w \rVert^{2} = \langle v-w, v-w \rangle = \langle v, v-w \rangle - \langle w, v-w \rangle = \langle v, v \rangle - \langle v, w \rangle - \langle w, v \rangle + \langle w, w \rangle \\
\implies \boxed{ \lVert v+w \rVert^{2} + \lVert v-w \rVert^{2} = 2\langle v, v \rangle + 2\langle w, w \rangle = 2\lVert v \rVert^{2} + 2\lVert w \rVert^{2} } \\
}
$$
# 3b
$$
\displaylines{
\text{Let } V = \mathbb{R}^{2} \\
\text{Let } \left\lVert  \begin{pmatrix}
x \\
y \\
\end{pmatrix} \right\rVert = \left\lvert x \right\rvert + \left\lvert y \right\rvert \\
\text{Prove: } \lVert \cdot \rVert \text{ is a norm} \\
\\
\text{Proof:} \\
\text{Let } v = \begin{pmatrix}
x \\
y \\
\end{pmatrix} \neq 0 \\
\implies \left[\begin{array}{}
\left\lvert x \right\rvert > 0 \\
\left\lvert y \right\rvert > 0 \\
\end{array}\right. \implies \lVert v \rVert = \left\lvert x \right\rvert + \left\lvert y \right\rvert > 0 \\
\left\lVert  \begin{pmatrix}
0 \\
0 \\
\end{pmatrix} \right\rVert = \left\lvert 0 \right\rvert + \left\lvert 0 \right\rvert = 0 \\
\text{Let } \alpha \in \mathbb{R}, v \in V \\
\lVert \alpha v \rVert = \left\lvert \alpha x \right\rvert + \left\lvert \alpha y \right\rvert = \left\lvert \alpha \right\rvert(\left\lvert x \right\rvert + \left\lvert y \right\rvert) = \left\lvert \alpha \right\rvert \cdot \lVert v \rVert \\
\text{Let } v, u \in \mathbb{R} \\
\lVert v + u \rVert = \left\lvert x_{v} + x_{u} \right\rvert + \left\lvert y_{v} + y_{u} \right\rvert \leq \left\lvert x_{v} \right\rvert + \left\lvert x_{u} \right\rvert + \left\lvert y_{v} \right\rvert + \left\lvert y_{u} \right\rvert = \lVert v \rVert + \lVert u \rVert \\
\implies \boxed{ \lVert \cdot \rVert \text{ is a norm} } \\
}
$$
# 3c
$$
\displaylines{
\text{Show that inequality in 3a is not valid for norm from 3b} \\
\\
\text{Solution:} \\
\text{Let } v = \begin{pmatrix}
1 \\
1 \\
\end{pmatrix}, w = \begin{pmatrix}
-1 \\
1 \\
\end{pmatrix} \\
\lVert v + w \rVert = 2 \\
\lVert v - w \rVert = 2 \\
\lVert v \rVert = 2 \\
\lVert w \rVert = 2 \\
\lVert v + w \rVert^{2} + \lVert v - w \rVert^{2} = 8 \\
2\lVert v \rVert^{2} + 2\lVert w \rVert^{2} = 16 \\
\implies \boxed{ \lVert v + w \rVert^{2} + \lVert v-w \rVert^{2} \neq 2\lVert v \rVert^{2} + 2\lVert w \rVert^{2} } \\
\implies \boxed{ \lVert \cdot \rVert \text{ does not depend on inner product} } \\
}
$$
# 4
$$
\displaylines{
\text{Let } V \text{ be an inner product space} \\
\text{Let } W \text{ be a subspace of } V \\
\text{Let } v \in V \\
\text{Prove: } \forall w \in W: \lVert v - P_{W}(v) \rVert \leq \lVert v - w \rVert \text{ and } \lVert v - P_{W}(v) \rVert = \lVert v - w \rVert \iff w = P_{W}(v) \\
\\
\text{Proof:} \\
\text{Let } w \in W \\
\lVert v - w \rVert^{2} = \lVert \underbrace{ v - P_{W}(v) }_{ \in W^{\perp} } + \underbrace{ P_{W}(v) - w }_{ \in W } \rVert^{2} = \\
\overset{ \text{By Pythagorean theorem} }{ = } \lVert v - P_{W}(v) \rVert^{2} + \lVert P_{W}(v) - w \rVert^{2} \geq \lVert v - P_{W}(v) \rVert^{2} \\
\implies \lVert v - w \rVert^{2} \geq \lVert v - P_{W}(v) \rVert^{2} \implies \boxed{ \lVert  v - w \rVert \geq \lVert v - P_{W}(v) \rVert } \\
\\
\lVert v - w \rVert = \lVert v - P_{W}(v) \rVert \iff \lVert P_{W}(v) - w \rVert = 0 \\
\iff P_{W}(v) - w = 0 \iff \boxed{ P_{W}(v) = w } \\
}
$$
# 5
$$
\displaylines{
\text{Let } V \text{ be a vector space} \\
\text{Let } B = \Set{ v_{1}, \dots, v_{n} } \text{ be a basis of } V \\
\text{Prove or disprove: } \exists \langle \cdot, \cdot \rangle_{1} \neq \langle \cdot, \cdot \rangle_{2} : B \text{ is orthonormal in relation to both} \\
\\
\text{Disproof:} \\
\text{Let } \langle \cdot, \cdot \rangle_{1} ; \langle \cdot, \cdot \rangle_{2} : B \text{ is orthonormal in relation to both} \\
\implies G_{1_{B}} = I, G_{2_{B}} = I \\
\forall v, u \in V: \langle v, u \rangle_{1} = [v]_{B}^{T}G_{1_{B}}\overline{[u]_{B}} = [v]_{B}^{T}\overline{[u]_{B}} \\
\implies \forall v, u \in V: \langle v, u \rangle_{2} = [v]_{B}^{T}G_{2_{B}}\overline{[u]_{B}} = [v]_{B}^{T}\overline{[u]_{B}} = \langle v, u \rangle_{1} \\
\implies \boxed{ \langle \cdot, \cdot \rangle_{1} = \langle \cdot, \cdot \rangle_{2} } \\
}
$$
# 6a
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
# 6b
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
# 6c
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
# 6d
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
