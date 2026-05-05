---
{"publish":true,"created":"25/07/25, 13:07","modified":"2026-03-24T15:00:54.181+02:00","tags":["Academia","Lecture","Linear-2"],"cssclasses":""}
---

# 2
$$
\displaylines{
\text{Let } V = \mathbb{R}^{2 \times 2} \text{ with a standrad inner product} \\
\text{Let } W = \mathbb{R}^{2} \text{ with inner product:} \\
\langle \begin{pmatrix}
x \\
y \\
\end{pmatrix}, \begin{pmatrix}
x' \\
y' \\
\end{pmatrix} \rangle = xx' - xy' - x'y + 2yy' \\
\text{Let } T: V \to W \text{ be a linear operator} \\
\forall A \in V: T(A) = C_{1}(A) + C_{2}(A) \\
}
$$
## 2a
$$
\displaylines{
\text{Find } T^{*} \\
\\
\text{Solution:} \\
\text{Standard basis of } \mathbb{R}^{2 \times 2} \text{ is an orthonormal basis of } V \\
\forall w \in W: T^{*}(w) = \sum_{i=1}^{4} \langle w, T(e_{i}) \rangle e_{i} \\
T(e_{1}) = T(e_{2}) = \begin{pmatrix}
1 \\
0 \\
\end{pmatrix} \\
T(e_{3}) = T(e_{4}) = \begin{pmatrix}
0 \\
1 \\
\end{pmatrix} \\
\implies T^{*}\begin{pmatrix}
x \\
y \\
\end{pmatrix} = \langle \begin{pmatrix}
x \\
y \\
\end{pmatrix}, \begin{pmatrix}
1 \\
0 \\
\end{pmatrix} \rangle(e_{1} + e_{2}) + \langle \begin{pmatrix}
x \\
y \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
\end{pmatrix} \rangle(e_{3} + e_{4}) = \\
= (x-y)(e_{1} + e_{2}) + (2y-x)(e_{3}+e_{4}) = \begin{pmatrix}
x-y & x-y \\
2y-x & 2y-x \\
\end{pmatrix} \\
}
$$
## 2b
$$
\displaylines{
\text{Find an orthonormal basis of } \ker T \\
\\
\text{Solution:} \\
\text{Let } S = \Set{ e_{1}, e_{2}, e_{3}, e_{4} } \text{ be a standard basis of } V \\
\ker T \subseteq V \\
T(e_{1}) = T(e_{2}) = \begin{pmatrix}
1 \\
0 \\
\end{pmatrix} \\
T(e_{3}) = T(e_{4}) = \begin{pmatrix}
0 \\
1 \\
\end{pmatrix} \\
\implies \forall v \in V: T(v) = T(\alpha e_{1} + \beta e_{2} + \gamma e_{3} + \delta e_{4}) = (\alpha+\beta)\begin{pmatrix}
1 \\
0 \\
\end{pmatrix} + (\gamma+\delta)\begin{pmatrix}
0 \\
1 \\
\end{pmatrix} \\
\implies T(v) = 0 \iff \left\{\begin{array}{}
\alpha = -\beta \\
\gamma = -\delta \\
\end{array}\right. \iff v = \alpha(e_{1} - e_{2}) + \gamma(e_{3} - e_{4}) \\
\iff v \in sp\Set{ \begin{pmatrix}
1 & -1 \\
0 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 0 \\
1 & -1 \\
\end{pmatrix} } \\
\langle \begin{pmatrix}
1 & -1 \\
0 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 0 \\
1 & -1 \\
\end{pmatrix} \rangle = tr\begin{pmatrix}
1 & -1 \\
0 & 0 \\
\end{pmatrix}\begin{pmatrix}
0 & 1 \\
0 & -1 \\
\end{pmatrix} = tr\begin{pmatrix}
0 & 2 \\
0 & 0 \\
\end{pmatrix} = 0 \\
\implies \text{This is an orthogonal basis of } \ker T \\
\left\lVert \begin{pmatrix}
1 & -1 \\
0 & 0 \\
\end{pmatrix} \right\rVert^{2} = tr\begin{pmatrix}
1 & -1 \\
0 & 0 \\
\end{pmatrix}\begin{pmatrix}
1 & 0 \\
-1 & 0 \\
\end{pmatrix} = tr\begin{pmatrix}
2 & 0 \\
0 & 0 \\
\end{pmatrix} = 2 \\
\left\lVert \begin{pmatrix}
0 & 0 \\
1 & -1 \\
\end{pmatrix} \right\rVert^{2} = tr\begin{pmatrix}
0 & 0 \\
1 & -1 \\
\end{pmatrix}\begin{pmatrix}
0 & 1 \\
0 & -1 \\
\end{pmatrix} = tr\begin{pmatrix}
0 & 0 \\
0 & 2 \\
\end{pmatrix} = 2 \\
\implies \text{An orthonormal basis of } \ker T \text{ is } \Set{ \frac{1}{\sqrt{ 2 }} \begin{pmatrix}
1 & -1 \\
0 & 0 \\
\end{pmatrix}, \frac{1}{\sqrt{ 2 }}\begin{pmatrix}
0 & 0 \\
1 & -1 \\
\end{pmatrix} } \\
}
$$
# 3a.1
$$
\displaylines{
\text{Let } J \in \mathbb{C}^{n \times n} \text{ be a Jordan form matrix} \\
\text{Prove: } J \sim J^{T} \\
\\
\text{Proof:} \\
\text{Let } A \text{ be a Jordan block of size } m \\
A \in \mathbb{C}^{m \times m}, A = \begin{pmatrix}
\lambda & 1 \\
 & \ddots & \ddots \\
 &  & \ddots & 1 \\
 &  &  & \lambda \\
\end{pmatrix} \\
A^{T} = \begin{pmatrix}
\lambda \\
1 & \ddots \\
 & \ddots & \ddots \\
 &  & 1 & \lambda \\
\end{pmatrix} \\
\implies P_{A^{T}}(x) = (x-\lambda)^{m} \\
x = \lambda \implies xI-A^{T} = \begin{pmatrix}
0 \\
-1 & \ddots \\
 & \ddots & \ddots \\
 &  & -1 & 0 \\
\end{pmatrix} \implies rank(xI-A^{T}) = m-1 \\
\implies g_{\lambda} = 1 \implies J_{A^{T}} = J_{m}(\lambda) = A \\
\implies A^{T} \sim J_{A^{T}} = A \\
J = \begin{pmatrix}
J_{1} \\
 & J_{2} \\
 &  & \ddots \\
 &  &  & J_{k} \\
\end{pmatrix} \text{ where } \forall i \in [1, k]: J_{i} \text{ is a Jordan block} \\
J^{T} = \begin{pmatrix}
J_{1}^{T} \\
 & J_{2}^{T} \\
 &  & \ddots \\
 &  &  & J_{k}^{T} \\
\end{pmatrix} \\
\forall i \in [1, k]: J_{i} \sim J_{i}^{T} \\
\text{Let } P = \begin{pmatrix}
P_{1} \\
 & \ddots \\
 &  & P_{k} \\
\end{pmatrix} \text{ such that } \forall i \in [1, k]: J_{i} = P_{i}J_{i}^{T}P_{i}^{-1} \\
\implies P^{-1} = \begin{pmatrix}
P_{1}^{-1} \\
 & \ddots \\
 &  & P_{k}^{-1} \\
\end{pmatrix} \\
\implies PJP^{-1} = \begin{pmatrix}
P_{1}J_{1}P_{1}^{-1} \\
 & \ddots \\
 &  & P_{k}J_{k}P_{k}^{-1} \\
\end{pmatrix} = \begin{pmatrix}
J_{1}^{T} \\
 & \ddots \\
 &  & J_{k}^{T} \\
\end{pmatrix} = J^{T} \\
\implies \boxed{ J \sim J^{T} } \\
}
$$
# 3a.2
$$
\displaylines{
\text{Prove: } \forall A \in \mathbb{C}^{n \times n}: A \sim A^{T} \\
\\
\text{Proof:} \\
\exists Q: A = QJ_{A}Q^{-1} \\
\implies A^{T} = (Q^{-1})^{T}J_{A}^{T}Q^{T} \\
\text{By 3a.1: } \exists P: J_{A}^{T} = PJ_{A}P^{-1} \\
\implies A^{T} = (Q^{-1})^{T}PJ_{A}P^{-1}Q^{T} \\
(Q^{-1})^{T}P \cdot P^{-1}Q^{T} = (Q^{-1})^{T}Q^{T} = (QQ^{-1})^{T} = I^{T} = I \\
P^{-1}Q^{T} \cdot (Q^{-1})^{T}P = P^{-1}(QQ^{-1})^{T}P = P^{-1}I^{T}P = P^{-1}P = I \\
\implies A^{T} \sim J_{A} \sim A \implies \boxed{ A^{T} \sim A } \\
}
$$
# 3b
$$
\displaylines{
\text{Let } V \text{ be a finite-dimensional inner product space over } \mathbb{C} \\
\text{Let } T: V \to V \text{ be a diagonalizable linear operator} \\
\text{Prove: } \exists \text{ inner product on } V \text{ such that } T \text{ is normal} \\
\\
\text{Proof:} \\
T \text{ is diagonalizable} \implies \exists B \text{ basis of } V \text{ such that } [T]^{B}_{B} \text{ is diagonal} \\
\text{Let } B = \Set{ v_{1}, \dots, v_{n} } \\
\text{Let } \forall i, j \in [1, n]: \langle v_{i}, v_{j} \rangle = \left\{\begin{array}{}
1 & i = j \\
0 & i \neq j \\
\end{array}\right. \\
\implies G_{B} = I \implies \forall v, u \in V: \langle v, u \rangle = [v]_{B}^{T}G_{B}\overline{[u]_{B}} = [v]^{T}_{B}\overline{[u]_{B}} \\
G_{B} = I \implies B \text{ is an orthonormal basis of } V \\
[T]^{B}_{B} \text{ is diagonal and } B \text{ is orthonormal} \implies T \text{ is unitary diagonalizable} \implies \boxed{ T \text{ is normal} } \\
}
$$
# 4a
$$
\displaylines{
\text{Let } V \text{ be a finite-dimensional inner product space over } \mathbb{R} \\
\text{Let } T: V \to V \text{ be an anti-Hermitian linear operator} \\
}
$$
#### 1
$$
\displaylines{
\text{Prove or disprove: } T \text{ is diagonalizable} \\
\\
\text{Disproof:} \\
\text{Let } V = \mathbb{R}^{2} \text{ with standard inner product} \\
\text{Let } T\begin{pmatrix}
x \\
y \\
\end{pmatrix} = \begin{pmatrix}
-y \\
x \\
\end{pmatrix} \\
\forall v, u \in V: \langle Tv, u \rangle = \langle T\begin{pmatrix}
x \\
y \\
\end{pmatrix}, \begin{pmatrix}
z \\
w \\
\end{pmatrix} \rangle = \langle \begin{pmatrix}
-y \\
x \\
\end{pmatrix}, \begin{pmatrix}
z \\
w \\
\end{pmatrix} \rangle = -yz + xw \\
\langle Tv, u \rangle = \langle v, T^{*}u \rangle = \langle \begin{pmatrix}
x \\
y \\
\end{pmatrix}, T^{*}\begin{pmatrix}
z \\
w \\
\end{pmatrix} \rangle = x \cdot a + y \cdot b \implies T^{*}\begin{pmatrix}
z \\
w \\
\end{pmatrix} = \begin{pmatrix}
a \\
b \\
\end{pmatrix} = \begin{pmatrix}
w \\
-z \\
\end{pmatrix} \\
\implies T^{*}\begin{pmatrix}
x \\
y \\
\end{pmatrix} = \begin{pmatrix}
y \\
-x \\
\end{pmatrix} = -T\begin{pmatrix}
x \\
y \\
\end{pmatrix} \implies T^{*} = -T \\
T \text{ is anti-Hermitian} \\
[T]^{S}_{S} = \begin{pmatrix}
0 & -1 \\
1 & 0 \\
\end{pmatrix} \implies P_{T}(x) = P_{[T]^{S}_{S}}(x) = x^{2} + 1 \\
\implies P_{T}(x) \text{ is not factorizable into linear factors over } \mathbb{R} \\
\implies T \text{ is not diagonalizable over } \mathbb{R} \\
}
$$
#### 2
$$
\displaylines{
\text{Prove or disprove: } T^{2} \text{ is diagonalizable} \\
\\
\text{Proof:} \\
\forall v \in V: \langle T^{2}v, v \rangle = \langle v, (T^{*})^{2}c \rangle \\
(T^{*})^{2} = (-T)^{2} = T^{2} \\
\implies (T^{2})^{*} = (T^{*})^{2} = T^{2} \implies T^{2} \text{ is Hermitian} \\
\text{Let } B \text{ be an orthonormal basis of } V \\
\implies [T^{2}]^{B}_{B} = [(T^{2})^{*}]^{B}_{B} = ([T^{2}]^{B}_{B})^{*} = ([T^{2}]^{B}_{B})^{T} \implies [T^{2}]^{B}_{B} \text{ is symmetric} \\
\implies [T^{2}]^{B}_{B} \text{ is orthogonal diagonalizable} \implies \boxed{ T^{2} \text{ is diagonalizable} } \\
}
$$
# 4b
$$
\displaylines{
\text{Let } V \text{ be a finite-dimensional inner product space over } \mathbb{C} \\
\text{Let } W \text{ be a subspace of } V \\
\text{Prove or disprove: } \forall w \in W, \forall v \in V: \langle v, w \rangle = \langle P_{W}(v), w \rangle \\
\\
\text{Proof:} \\
\text{Let } w \in W, v \in V \\
v = \underbrace{ P_{W}(v) }_{ \in W } + \underbrace{ (v - P_{W}(v)) }_{ \in W^{\perp} } \\
\implies \langle v, w \rangle = \langle P_{W}(v) + (v - P_{W}(v)), w \rangle = \langle P_{W}(v), w \rangle + \underbrace{ \langle v - P_{W}(v), w \rangle }_{ = 0 } = \langle P_{W}(v), w \rangle \\
}
$$
# 5
$$
\displaylines{
\text{Let } V \text{ be a finite-dimensional inner product space over } \mathbb{R} \\
\text{Let } T: V \to V \text{ be an idempotent linear operator} \\
}
$$
## 5a
$$
\displaylines{
\text{Determine whether } T \text{ is necessrily diagonalizable} \\
\\
\text{Solution:} \\
T = T^{2} \implies T(T-I) = 0 \implies m_{T}(x) \mid x(x-1) \\
\implies m_{T}(x) = \left[\begin{array}{}
x \\
(x-1) \\
x(x-1) \\
\end{array}\right. \implies m_{T}(x) \text{ is factorizable into distinct linear factors} \\
\implies \boxed{ T \text{ is diagonalizable} } \\
}
$$
## 5b
$$
\displaylines{
\text{Let } U \text{ be a subspace of } V \\
\text{Prove: } P_{U} \text{ is idempotent} \\
\\
\text{Proof:} \\
\forall v \in V: P_{U}(v) \in U \\
\forall u \in U: P_{U}(u) = u \\
\implies \forall v \in V: P_{U}^{2}(v) = P_{U}(\underbrace{ P_{U}(v) }_{ \in U }) = P_{U}(v) \implies P_{U}^{2} = P_{U} \\
}
$$
## 5c
$$
\displaylines{
\text{Prove: } \mathrm{Im}T = \ker (I-T) \\
\\
\text{Proof:} \\
\text{Let } v \in \mathrm{Im}T \\
\implies \exists u \in V: T(u) = v \implies T(T(u)) = v \implies T(v) = v \\
\implies v - T(v) = 0 \implies I(v) - T(v) = 0 \implies (I-T)(v) = 0 \implies v \in \ker (I-T) \\
\implies \mathrm{Im}T \subseteq \ker (I-T) \\
\text{Let } v \in \ker (I - T) \\
\implies (I-T)(v) = 0 \implies v - T(v) = 0 \implies T(v) = v \implies v \in \mathrm{Im} T \\
\implies \ker (I - T) \subseteq \mathrm{Im} T \implies \boxed{ \mathrm{Im} T = \ker (I - T) } \\
}
$$
## 5d
$$
\displaylines{
\text{Let } T \text{ be normal} \\
}
$$
#### 1
$$
\displaylines{
\text{Prove: } T \text{ is Hermitian} \\
\\
\text{Proof:} \\
T \text{ is diagonalizable} \implies \text{Its characteristic polynomial is factorizable into linear factors} \\
T \text{ is also normal } \implies T \text{ is unitary diagonalizable} \\
\implies \exists B \text{ orthonormal: } [T]^{B}_{B} \text{ is diagonal} \\
[T]^{B}_{B} \text{ is diagonal} \implies [T]^{B}_{B} \text{ is symmetric} \\
[T]^{B}_{B} \in \mathbb{R}^{n \times n} \implies [T]^{B}_{B} \text{ is Hermitian} \\
\implies \boxed{ T \text{ is Hermitian} } \\
}
$$
#### 2
$$
\displaylines{
\text{Prove: } \exists W \text{ subspace of } V: \forall w \in W: T(w) = w \text{ and } \forall u \in W^{\perp}: T(u) = 0 \\
\\
\text{Proof:} \\
\mathrm{Im}T = \ker (I - T) \implies \boxed{ \forall v \in \mathrm{Im}T: v - T(v) = 0 \implies T(v) = v } \\
\text{Let } W = \mathrm{Im}T \\
\text{Let } u \in W^{\perp} \\
\implies \forall w \in W: \langle w, u \rangle = 0 \\
\forall v \in V: \langle \underbrace{ T(v) }_{ \in W }, u \rangle = \langle v, T^{*}(u) \rangle = 0 \\
T \text{ is Hermitian} \implies \forall v \in V: \langle v, T^{*}(u) \rangle = \langle v, T(u) \rangle = 0 \\
\implies T(u) = 0 \\
\implies \boxed{ \forall u \in W^{\perp} : T(u) = 0 } \implies W^{\perp} \subseteq \ker T \\
\text{It is also possible to prove } W^{\perp} = \ker T \text{ if necessary} \\
}
$$
