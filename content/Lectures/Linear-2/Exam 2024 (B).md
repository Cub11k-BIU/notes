---
{"publish":true,"created":"21/07/25, 16:07","modified":"2026-03-24T15:00:54.160+02:00","tags":["Academia","Lecture","Linear-2"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Formulate and prove diagonalizability criterion} \\
}
$$
# 2
$$
\displaylines{
\text{Let } \mathbb{R}^{3} \text{ be an inner product space with standard inner product} \\
\text{Let } T: \mathbb{R}^{3} \to \mathbb{R}^{3} \text{ be a linear operator} \\
T\begin{pmatrix}
1 \\
1 \\
0 \\
\end{pmatrix} = \begin{pmatrix}
2 \\
2 \\
0 \\
\end{pmatrix}, T\begin{pmatrix}
0 \\
1 \\
0 \\
\end{pmatrix} = \begin{pmatrix}
0 \\
2 \\
0 \\
\end{pmatrix}, T\begin{pmatrix}
0 \\
0 \\
1 \\
\end{pmatrix} = \begin{pmatrix}
0 \\
0 \\
0 \\
\end{pmatrix} \\
}
$$
## 2a
$$
\displaylines{
\text{Find an orthonormal basis } B \text{ of } \mathbb{R}^{3} \text{ such that } [T]^{B}_{B} \text{ is diagonal} \\
\\
\text{Solution:} \\
T(e_{1}) = T\begin{pmatrix}
1 \\
1 \\
0 \\
\end{pmatrix} - T\begin{pmatrix}
0 \\
1 \\
0 \\
\end{pmatrix} = \begin{pmatrix}
2 \\
0 \\
0 \\
\end{pmatrix} = 2e_{1} \\
T(e_{2}) = 2e_{2} \\
T(e_{3}) = 0 \\
\implies [T]^{S}_{S} = \begin{pmatrix}
2 & 0 & 0 \\
0 & 2 & 0 \\
0 & 0 & 0 \\
\end{pmatrix} \\
\boxed{ B = S, \text{ standard basis is orthonormal under standard inner product} } \\
}
$$
## 2b
$$
\displaylines{
\text{Find a vector in } (\ker T)^{\perp} \text{ that is the closest to } \begin{pmatrix}
0 \\
1 \\
1 \\
\end{pmatrix} \\
\\
\text{Solution:} \\
\ker T = sp\Set{ e_{3} } \\
\implies (\ker T)^{\perp} = sp\Set{ e_{1}, e_{2} } \\
\implies \text{Closest vector to } v = \begin{pmatrix}
0 \\
1 \\
1 \\
\end{pmatrix} \text{ in } (\ker T)^{\perp} \text{ is an orthogonal projection } P_{(\ker T)^{\perp}}(v) \\
\boxed{ P_{(\ker T)^{\perp}}(v) = \frac{\langle v, e_{1} \rangle}{\lVert e_{1} \rVert^{2}}e_{1} + \frac{\langle v, e_{2} \rangle}{\lVert e_{2} \rVert^{2}}e_{2} = e_{2} } \\
}
$$
# 3a
$$
\displaylines{
\text{Let } V \text{ be a finite-dimensional inner product space over } \mathbb{C} \\
\text{Let } \vec{t}, \vec{s} \in V \\
\text{Let } T: V \to V \text{ be a linear operator} \\
T(v) = \vec{t} \langle v, \vec{s} \rangle \\
\text{Find explicitly } T^{*} \\
\\
\text{Solution:} \\
\forall v, u \in V: \langle T(v), u \rangle = \langle v, T^{*}(u) \rangle \\
\langle T(v), u \rangle = \langle \vec{t}\langle v, \vec{s} \rangle, u \rangle = \langle v, \vec{s} \rangle \cdot \langle \vec{t}, u \rangle = \langle v, \vec{s}\overline{\langle \vec{t}, u \rangle} \rangle = \langle v, T^{*}(u) \rangle \\
\implies \forall u \in V: \boxed{ T^{*}(u) = \vec{s}\overline{\langle \vec{t}, u \rangle} } \\
}
$$
# 3b
$$
\displaylines{
\text{Let } V, W \text{ be finite-dimensional inner product spaces over } \mathbb{F} \\
\text{We say that } V, W \text{ are "inner product-isomorphic" if} \\
\exists \text{ invertible linear operator } T: V \to W \text{ such that} \\
\forall v, u \in V: \langle v, u \rangle = \langle T(v), T(u) \rangle \\
\text{Prove: } V, W \text{ are "inner product-isomorphic" } \iff \dim V = \dim W \\
\\
\text{Proof:} \\
\boxed{ \implies } \text{ This direction is trivial, as existence of an invertible linear operator from } V \text{ to } W \\
\text{ implies } \boxed{ \dim V = \dim W } \\
\\
\boxed{ \impliedby } \text{ Let } \dim V = \dim W = n \\
\text{Let } \Set{ v_{1}, \dots, v_{n} } \text{ be an orthonormal basis of } V \\
\text{Let } \Set{ w_{1}, \dots, w_{n} } \text{ be an orthonormal basis of } W \\
\text{Let } T: V \to W: \forall i \in [1, n]: T(v_{i}) = w_{i} \\
\implies \forall v \in V: v = \sum_{i=1}^{n} \langle v, v_{i} \rangle v_{i} \\
\implies \forall v, u \in V: \langle T(v), T(u) \rangle = \left\langle  T\left( \sum_{i=1}^{n} \langle v, v_{i} \rangle v_{i} \right), T\left( \sum_{i=1}^{n} \langle u, v_{i} \rangle v_{i} \right)  \right\rangle = \\
= \sum_{i=1}^{n} \sum_{j=1}^{n} \langle v, v_{i} \rangle \overline{\langle u, v_{j} \rangle}\langle T(v_{i}), T(v_{j}) \rangle = \sum_{i=1}^{n} \sum_{j=1}^{n} \langle v, v_{i} \rangle \overline{\langle u, v_{j} \rangle}\langle w_{i}, w_{j} \rangle = \\
= \sum_{i=1}^{n} \langle v, v_{i} \rangle \overline{\langle u, v_{i} \rangle} = \left\langle  v, \sum_{i=1}^{n} \langle u, v_{i} \rangle v_{i}  \right\rangle = \langle v, u \rangle \\
\implies \boxed{ \forall v, u \in V: \langle v, u \rangle = \langle T(v), T(u) \rangle } \\
}
$$
# 4a
$$
\displaylines{
\text{Let } A \in \mathbb{C}^{n \times n} \\
\text{Let } \exists k : A^{k} \text{ is diagonalizable} \\
\text{Prove or disprove: } A \text{ is diagonalizable} \\
\\
\text{Disproof:} \\
A = \begin{pmatrix}
0 & 1 \\
0 & 0 \\
\end{pmatrix} \\
A^{2} = \begin{pmatrix}
0 & 0 \\
0 & 0 \\
\end{pmatrix} \text{ which is diagonal and diagonalizable by } I \\
A \text{ is a Jordan block of size 2, which is not diagonalizable} \\
}
$$
# 4b
$$
\displaylines{
\text{Let } A \in \mathbb{C}^{n \times n} \text{ be unitary} \\
\text{Prove or disprove: } \left\lvert trA \right\rvert \leq n \\
\\
\text{Proof:} \\
A \text{ is unitary} \implies \text{Columns of } A \text{ form an orthonormal basis of } \mathbb{C}^{n} \\
\implies \forall i \in [1, n]: \lVert C_{i}(A) \rVert = 1 \\
\text{Let } \exists i \in [1, n]: \left\lvert A_{ii} \right\rvert > 1 \\
\implies \lVert C_{i}(A) \rVert^{2} = \langle C_{i}(A), C_{i}(A) \rangle = \alpha_{1}^{2} + \dots + \underbrace{ A_{ii}^{2} }_{ > 1 } + \dots + \alpha_{n-1}^{2} > 1 -\text{Contradiction!} \\
\implies \forall i \in [1, n]: \left\lvert A_{ii} \right\rvert \leq 1 \implies \left\lvert tr A \right\rvert = \left\lvert \sum_{i=1}^{n} A_{ii} \right\rvert \leq \sum_{i=1}^{n} \left\lvert A_{ii} \right\rvert \leq n \\
}
$$
# 4c
$$
\displaylines{
\text{Let } V \text{ be an inner product space over } \mathbb{C} \\
\text{Prove or disprove: } \Set{ T: V \to V | T = T^{*} } \text{ is a vector space} \\
\\
\text{Disproof:} \\
\text{Let } K = \Set{ T: V \to V | T = T^{*} } \\
0^{*} = 0 \implies 0 \in K \\
\text{Let } T_{1}, T_{2} \neq 0 \in K \\
(T_{1} + iT_{2})^{*} = T_{1}^{*} - iT_{2}^{*} = T_{1} - iT_{2} \neq T_{1} + iT_{2} \\
\implies T_{1} + zT_{2} \not\in K \implies \boxed{ K \text{ is not a vector space} } \\
}
$$
# 5
$$
\displaylines{
\text{Let } V \text{ be an inner product space over } \mathbb{F} \\
\text{Let } \dim V = n \\
\text{Let } U, W \leq V \text{ subspaces of } V \\
\text{Let } U \oplus W = V \\
\text{Let } P: V \to V \text{ be a linear operator} \\
\forall v \in V: \exists u \in U, w \in W: v = u + w \\
\text{Let } \forall v \in V: P(v) = P(u + w) = u \\
P \text{ is then called projection and denoted } P_{U}^{U, W} \text{ or } \pi_{U}^{U, W} \\
}
$$
## 5a
$$
\displaylines{
\text{Let } U \leq V \text{ be a subspace of } V \\
\text{Prove: } P_{U}^{U, U^{\perp}} = P_{U} \\
\\
\text{Proof:} \\
\text{Let } v \in V \\
\exists u \in U, w \in U^{\perp}: v = u + w \\
P(v) = P(u+w) = u \\
U \oplus U^{\perp} = V \\
\forall u \in U: P(u) = P(u + 0) = u = P_{U}(u) \\
\forall w \in U^{\perp} = P(w) = P(0 + w) = 0 = P_{U}(w) \\
\implies \forall v \in V: P(v) = P_{U}(v) \implies \boxed{ P = P_{U}^{U, U^{\perp}} = P_{U} } \\
}
$$
## 5b
$$
\displaylines{
\text{Let } V \text{ be a finite-dimensional vector space over } \mathbb{F} \\
\text{Let } P: V \to V \text{ be a linear operator} \\
\text{Prove: } P \text{ is a projection} \iff P = P^{2} \\
\\
\text{Proof:} \\
\boxed{ \implies } \text{ Let } P \text{ be a projection} \\
\text{Let } U, W \text{ such that } U \oplus W = V, \forall v \in V: v = \underbrace{ u }_{ \in U } + \underbrace{ w }_{ \in W } \implies P(v) = P(u + w) = u \\
\text{Let } v \in V \\
\text{Let } u \in U, w \in W: v = u + w \\
P(v) = P(u + w) = u \\
P^{2}(v) = P(P(v)) = P(P(u + w)) = P(u) = u \\
\implies \boxed{ P^{2} = P } \\
\\
\boxed{ \impliedby } \text{ Let } P^{2} = P \\
\text{Let } U = \mathrm{Im}P \\
\forall u \in U: \exists v \in V: P(v) = u \implies P^{2}(v) = P(P(v)) = P(u) \implies P(u) = u \\
\text{Let } W = \ker P \\
\forall v \in V: P^{2}(v) = P(v) \implies P(P(v) - v) = 0 \implies P(v) - v \in \ker P \\
\forall v \in V: \underbrace{ P(v) }_{ u \in U } - v \in W \implies w = u - v \in W \implies v = u + w \implies U + W = V \\
\text{Let } v \in U \cap W \\
\implies x \in \mathrm{Im}P \cap \ker P \\
\implies \exists v \in V: P(v) = x, P(x) = 0 \implies P^{2}(v) = P(P(v)) = P(x) = 0 \implies x = 0 \\
\implies U \cap W = \Set{ 0 } \implies \boxed{ U \oplus W = V } \\
\boxed{ \forall v \in V: v = u + w \implies P(v) = P(u + w) = P(u) + P(w) = u + 0 = u } \\
}
$$
## 5c
$$
\displaylines{
\text{Let } V \text{ be a finite-dimensional vector space over } \mathbb{F} \\
\text{Let } P: V \to V \text{ be a projection} \\
\text{Prove: } P \text{ is diagonalizable} \\
\\
\text{Proof:} \\
\text{Let } U, W \text{ such that } U \oplus W = V, \forall v \in V: v = \underbrace{ u }_{ \in U } + \underbrace{ w }_{ \in W } \implies P(v) = P(u + w) = u \\
\\
P \text{ is a projection } \implies P^{2} = P \\
\implies P^{2} - P = 0 \implies P(P-I) = 0 \\
\implies m_{P}(x) \mid x(x-1) \implies \Set{ 0, 1 } \text{ are eigenvalues of } P \text{ (not necessarily the only ones)} \\
\forall u \in U: P(u) = u \implies k_{1} \geq g_{1} = \dim U = k \\
\forall w \in W: P(w) = 0 \implies k_{0} \geq g_{0} = \dim W = t \\
U \oplus W = V \implies \dim U + \dim W = \dim V = n \\
\implies P_{P}(x) = x^{t+\alpha}(x-1)^{k+\beta} \\
\left\{\begin{array}{}
k + t = n \\
k + t + \alpha + \beta = n \\
\alpha \geq 0 \\
\beta \geq 0 \\
\end{array}\right. \implies \alpha = \beta = 0 \implies P_{P}(x) = x^{t}(x-1)^{t} \\
\implies g_{0} = k_{0}, g_{1} = k_{1} \implies \boxed{ P \text{ is diagonalizable} } \\
}
$$
## 5d
$$
\displaylines{
\text{Let } V \text{ be a finite-dimensional vector space over } \mathbb{F} \\
\text{Let } T: V \to V \text{ be a linear operator} \\
T \text{ is then called a mirror if } \exists U, W \text{ subspaces of } V: U \oplus W = V : \forall u \in U, \forall w \in W: \\
T(u + w) = u - w \\
\text{And denoted as } T = R_{U}^{U, W} \\
\text{Prove: } T \text{ is a mirror} \iff T^{2} = I \\
\\
\text{Proof:} \\
\boxed{ \implies } \text{ Let } T \text{ be a mirror} \\
\text{Let } U, W \text{ such that } U \oplus W = V, \forall v \in V: v = \underbrace{ u }_{ \in U } + \underbrace{ w }_{ \in W } \implies T(v) = T(u + w) = u - w \\
\forall v \in V: v = u + w, T(v) = T(u + w) = u - w \\
T^{2}(v) = T(T(v)) = T(T(u + w)) = T(u - w) = u + w = v \implies \boxed{ T^{2} = I } \\
\\
\boxed{ \impliedby } \text{ Let } T^{2} = I \\
T^{2} - I = (T-I)(T+I) = 0 \implies m_{T}(x) \mid (x-1)(x+1) \\
\implies m_{T}(x) = \left[\begin{array}{}
x-1 \\
x+1 \\
(x-1)(x+1) \\
\end{array}\right. \implies T \text{ is diagonalizable} \implies E_{1} \oplus E_{-1} = V \\
\text{Let } U = E_{1}, W = E_{-1} \\
\boxed{ \forall v \in V: v = u + w \implies T(v) = T(u + w) = T(u) + T(w) = u - w }
}
$$
