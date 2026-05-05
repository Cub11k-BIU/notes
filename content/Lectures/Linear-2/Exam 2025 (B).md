---
{"publish":true,"created":"24/07/25, 19:07","modified":"2026-03-24T15:00:54.203+02:00","tags":["Academia","Lecture","Linear-2"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Formulate and prove Riesz theorem} \\
}
$$
# 2a
$$
\displaylines{
\text{Let } T: \mathbb{R}^{3} \to \mathbb{R}^{3} \text{ be a linear operator} \\
\text{Let } [T]^{S}_{S} = \begin{pmatrix}
1 & 1 & 1 \\
0 & 2 & 0 \\
1 & 0 & 1 \\
\end{pmatrix} \\
\text{Find } (\ker T)^{\perp} \\
\\
\text{Solution:} \\
[\ker T]_{S} = N([T]^{S}_{S}) \\
\left(\begin{array}{ccc|c}
1 & 1 & 1 & 0 \\
0 & 2 & 0 & 0 \\
1 & 0 & 1 & 0 \\
\end{array}\right) \to \left(\begin{array}{ccc|c}
1 & 0 & 1 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 0 & 0 \\
\end{array}\right) \implies \ker T = sp\Set{ \begin{pmatrix}
-1 \\
0 \\
1 \\
\end{pmatrix} } \\
\implies (\ker T)^{\perp} = \Set{ \begin{pmatrix}
x \\
y \\
z \\
\end{pmatrix} \in \mathbb{R}^{3} | z - x = 0 } = \boxed{ sp\Set{ \begin{pmatrix}
0 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
0 \\
1 \\
\end{pmatrix} } } \\
}
$$
# 2b
$$
\displaylines{
U = sp\Set{ \begin{pmatrix}
1 \\
0 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
2 \\
0 \\
\end{pmatrix} } \\
\text{Determine whether } T[U] \subseteq U \\
\\
\text{Solution:} \\
[T\begin{pmatrix}
1 \\
0 \\
1 \\
\end{pmatrix}]_{S} = [T]^{S}_{S}[\begin{pmatrix}
1 \\
0 \\
1 \\
\end{pmatrix}]_{S} = \begin{pmatrix}
2 \\
0 \\
2 \\
\end{pmatrix} = 2\begin{pmatrix}
1 \\
0 \\
1 \\
\end{pmatrix} \in U \\
[T\begin{pmatrix}
1 \\
2 \\
0 \\
\end{pmatrix}]_{S} = [T]^{S}_{S}[\begin{pmatrix}
1 \\
2 \\
0 \\
\end{pmatrix}]_{S} = \begin{pmatrix}
3 \\
4 \\
1 \\
\end{pmatrix} = \begin{pmatrix}
1 \\
0 \\
1 \\
\end{pmatrix} + 2\begin{pmatrix}
1 \\
2 \\
0 \\
\end{pmatrix} \in U \\
\implies \forall u \in U: u = \alpha \begin{pmatrix}
1 \\
0 \\
1 \\
\end{pmatrix} + \beta \begin{pmatrix}
1 \\
2 \\
0 \\
\end{pmatrix} \implies T(u) = T(\alpha v_{1} + \beta v_{2}) = (2\alpha + \beta) v_{1} + 2\beta v_{2} \in U \\
\implies T[U] \subseteq U \\
}
$$
# 2c
$$
\displaylines{
\text{Determine whether there exists a basis } E \text{ of } \mathbb{R}^{3} \text{ such that:} \\
[T]^{E}_{E} = \begin{pmatrix}
* & * & 0 \\
* & * & 0 \\
0 & 0 & * \\
\end{pmatrix} \\
\\
\text{Solution:} \\
P_{T}(x) = P_{[T]^{S}_{S}}(x) = \begin{vmatrix}
x-1 & -1 & -1 \\
0 & x-2 & 0 \\
-1 & 0 & x-1 \\
\end{vmatrix} = (x-1)^{2}(x-2) - (x-2) = x(x-2)^{2} \\
\text{Let } E = \Set{ \begin{pmatrix}
1 \\
0 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
2 \\
0 \\
\end{pmatrix}, v } \\
T[U] \subseteq U \implies \left\{\begin{array}{}
[T(u_{1})]_{E} = [2u_{1}]_{E} = 2e_{1} \\
[T(u_{2})]_{E} = [u_{1} + 2u_{2}]_{E} = e_{1} + 2e_{2} \\
\end{array}\right. \\
\implies [T]^{E}_{E} = \begin{pmatrix}
2 & 1 & a \\
0 & 2 & b \\
0 & 0 & c \\
\end{pmatrix} \\
\text{Let } v = \begin{pmatrix}
-1 \\
0 \\
1 \\
\end{pmatrix} \implies T(v) = 0 \implies [T]^{E}_{E} = \begin{pmatrix}
2 & 1 & 0 \\
0 & 2 & 0 \\
0 & 0 & 0 \\
\end{pmatrix} \\
\text{which also happens to be a normal Jordan form of } T \\
}
$$
# 3
$$
\displaylines{
\text{Let } V = \mathbb{C}^{n \times n} \\
\text{Let } A \in V \text{ be invertible} \\
\text{Let } T: V \to V: T(B) = ABA^{-1} \\
}
$$
## 3a
$$
\displaylines{
\text{Find } T^{*} \\
\\
\text{Solution:} \\
\forall B, C \in V: \langle T(B), C \rangle = \langle B, T^{*}(C) \rangle \\
\langle T(B), C \rangle = \langle ABA^{-1}, C \rangle = tr(ABA^{-1}C^{*}) = tr(BA^{-1}C^{*}A) \\
\langle B, T^{*}(C) \rangle = tr(B(T^{*}(C))^{*}) \\
\implies A^{-1}C^{*}A = (T^{*}(C))^{*} \implies \boxed{ T^{*}(C) = A^{*}C(A^{-1})^{*} } \\
}
$$
## 3b
$$
\displaylines{
\text{Let } A \text{ be unitary} \\
\text{Determine whether } T \text{ is necessarily unitary} \\
\\
\text{Solution:} \\
A \text{ is unitary} \implies A^{*} = A^{-1} \\
T \text{ is unitary} \iff \forall B \in V: \lVert B \rVert^{2} = \lVert T(B) \rVert^{2} = \lVert ABA^{-1} \rVert^{2} \\
\lVert ABA^{-1} \rVert^{2} = \langle ABA^{-1}, ABA^{-1} \rangle = \langle ABA^{*}, ABA^{*} \rangle = tr(ABA^{*}(ABA^{*})^{*}) = \\
= tr(ABA^{*}AB^{*}A^{*}) = tr(ABB^{*}A^{*}) = tr(BB^{*}A^{*}A) = tr(BB^{*}) = \langle B, B \rangle = \lVert B \rVert^{2} \\
\implies \boxed{ T \text{ is unitary} } \\
}
$$
# 4a
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \\
\text{Prove or disprove: } A^{2} = A \implies tr(A) = rank(A) \\
\\
\text{Proof:} \\
A^{2} = A \implies A(A-I) = 0 \implies m_{A}(x) \mid x(x-1) \\
\implies m_{A}(x) = \left[\begin{array}{}
x \\
x-1 \\
x(x-1) \\
\end{array}\right. \implies A \text{ is diagonalizable} \\
P_{A}(x) = x^{k}(x-1)^{t} \\
\implies tr(A) = tr(D) = \sum_{i=1}^{k} 0 + \sum_{i=1}^{t} 1 = t \\
g_{0} = k_{0} = k \implies \dim N(A) = k \implies rank(A) = n - k = t \\
\implies \boxed{ tr(A) = rank(A) } \\
}
$$
# 4b
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \text{ be symmetric} \\
\text{Prove or disprove: } C(A) = N(A)^{\perp} \\
\\
\text{Proof:} \\
A \text{ is symmetric} \implies C(A) = R(A) \\
\text{Let } v \in N(A) \\
Av = 0 \implies \forall i \in [1, n]: \langle R_{i}(A), v \rangle = 0 \\
\implies R(A) \subseteq N(A)^{\perp} \\
N(A) + N(A)^{\perp} = \mathbb{R}^{n} \\
\implies \dim N(A)^{\perp} = n - \dim N(A) \\
\dim R(A) = rank(A) = n - \dim N(A) \\
\implies R(A) = N(A)^{\perp} \implies \boxed{ C(A) = N(A)^{\perp} } \\
}
$$
# 4c
$$
\displaylines{
\text{Let } A, B \in \mathbb{R}^{7 \times 7} \\
\text{Let } A \text{ be invertible and } AB + BA = 0 \\
\text{Prove or disprove: } B \text{ is not invertible} \\
\\
\text{Proof?:} \\
AB + BA = 0 \implies B + A^{-1}BA = 0 \\
\implies B = A^{-1}(-B)A \implies B \sim -B \\
\implies \det(B) = \det(-B) = (-1)^{7}\det(B) = -\det(B) \\
\implies \det(B) = 0 \implies \boxed{ B \text{ is not invertible} } \\
}
$$
# 5
$$
\displaylines{
\text{Let } T: V \to V \text{ be idempotent, } T^{2} = T \\
}
$$
## 5a
#### 1
$$
\displaylines{
\text{Prove: } T(v) - v \in \ker T \\
\\
\text{Proof:} \\
T(T(v) - v) = T^{2}(v) - T(v) = u - u = 0 \\
}
$$
#### 2
$$
\displaylines{
\text{Prove: } \mathrm{Im}T \oplus \ker T = V \\
\\
\text{Proof:} \\
\text{Let } v \in \mathrm{Im}T \cap \ker T \\
\implies \exists u \in V: T(u) = v, T(v) = 0 \\
T(v) = T(T(u)) = T^{2}(u) = 0 \implies T(u) = 0 \implies v = 0 \\
\implies \ker T \cap \mathrm{Im}T = \Set{ 0 } \\
\text{Let } v \in V \\
T(v) \in \mathrm{Im}T \\
T(v) - v \in \ker T \implies v - T(v) \in \ker T \implies v = \underbrace{ T(v) }_{ \in \mathrm{Im}T } + \underbrace{ (v-T(v)) }_{ \in \ker T } \\
\implies \boxed{ \mathrm{Im}T \oplus \ker T = V } \\
}
$$
## 5b
$$
\displaylines{
\text{Let } \mathrm{Im}T = (\ker T)^{\perp} \\
}
$$
#### 1
$$
\displaylines{
\text{Prove: } T = T^{*} \\
\\
\text{Proof:} \\
\forall v \in V: T(v) \in \mathrm{Im}T, T(v) - v \in \ker T \\
\implies \forall v \in V: \langle Tv, Tv-v \rangle = 0 \\
\langle Tv, Tv-v \rangle = \langle v, T^{*}Tv - Tv \rangle = 0 \\
\implies T^{*}Tv - Tv = 0 \implies T^{*}Tv = Tv = T^{2}v \\
\implies \boxed{ T^{*} = T } \\
\text{Maybe this is wrong, I'm not sure, better not use it} \\
\forall v, u \in V: \langle Tv, Tu \rangle = \langle T(v)-v+v, Tu \rangle = \underbrace{ \langle Tv - v, Tu \rangle }_{ = 0 } + \langle v, Tu \rangle \\
\langle Tv, Tu \rangle = \langle Tv, Tu - u + u \rangle = \underbrace{ \langle Tv, Tu-u \rangle }_{ = 0 } + \langle Tv, u \rangle \\
\implies \forall v, u \in V: \langle Tv, u \rangle = \langle v, Tu \rangle \implies \boxed{ T = T^{*} } \\
}
$$
#### 2
$$
\displaylines{
\text{Prove: } T = P_{\mathrm{Im}T} \\
\\
\text{Proof:} \\
\text{Let } v \in \mathrm{Im}T \\
\implies \left\{\begin{array}{}
P_{\mathrm{Im}T}(v) = v \\
\exists u \in V: T(u) = v \implies T(v) = T(T(u)) = T^{2}(u) = T(u) = v \\
\end{array}\right. \\
\text{Let } v \in \ker T \\
\implies \forall u \in (\ker T)^{\perp} = \mathrm{Im}T: \langle v, u \rangle = 0 \\
\implies P_{\mathrm{Im}T}(v) = 0 = T(v) \\
\implies \forall v \in V: T(v) = P_{\mathrm{Im}T}(v) \implies \boxed{ T = P_{\mathrm{Im}T} } \\
}
$$
#### 3
$$
\displaylines{
\text{Prove: } \forall v \in V: \lVert v \rVert \geq \lVert T(v) \rVert \text{ and } \lVert v \rVert = \lVert T(v) \rVert \implies v \in \mathrm{Im}T \\
\\
\text{Proof:} \\
\lVert v \rVert^{2} = \lVert \underbrace{ v - T(v) }_{ \in \ker T } + \underbrace{ T(v) }_{ \in \mathrm{Im}T = (\ker T)^{\perp} } \rVert^{2} = \underbrace{ \lVert v - T(v) \rVert^{2} }_{ \geq 0 } + \lVert T(v) \rVert^{2} \\
\implies \lVert v \rVert^{2} \geq \lVert T(v) \rVert^{2} \implies \boxed{ \lVert v \rVert \geq \lVert T(v) \rVert } \\
\lVert v \rVert = \lVert T(v) \rVert \implies \lVert v - T(v) \rVert^{2} = 0 \implies v - T(v) = 0 \implies \boxed{ v = T(v) \in \mathrm{Im}T } \\
}
$$
