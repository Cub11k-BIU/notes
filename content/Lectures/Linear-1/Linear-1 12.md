---
{"publish":true,"created":"15/01/25, 11:01","modified":"2025-11-21T21:10:14.307+02:00","tags":["Academia","Lecture","Linear-1"],"cssclasses":""}
---

# Linear-1 12
## Properties of representation matrix #lemma 
$$
\displaylines{
\text{Let } T_{2}, T_{1}: V \to U \text{ linear transformations} \\
S: U \to W \text{ linear transformation } \\
B, C, E \text{ bases of } V, U, W \\
\alpha \in \mathbb{F} \\
\text{Then:} \\
1. \quad [T_{2} + T_{1}]^{B}_{C} = [T_{2}]^{B}_{C} + [T_{1}]^{B}_{C} \\
2. \quad [\alpha T_{1}]^{B}_{C} = \alpha[T_{1}]^{B}_{C} \\
3. \quad [\underbrace{ ST_{1} }_{ S \circ T_{1} }]^{B}_{E} = [S]^{C}_{E} \cdot [T_{1}]^{B}_{C} \\
\\
\text{Proof for 1.} \\
\text{Let } v \in V \\
([T_{2}]^{B}_{C}+[T_{1}]^{B}_{C})[v]_{B} = [T_{2}]^{B}_{C}[v]_{B}+[T_{1}]^{B}_{C}[v]_{B} = [T_{2}(v)]_{C} + [T_{1}(v)]_{C} = [T_{2}(v)+T_{1}(v)]_{C} = \\
= [(T_{2}+T_{1})(v)]_{C} \\
\implies [T_{2}]^{B}_{C} + [T_{1}]^{B}_{C} = [T_{2} + T_{1}]^{B}_{C} \\
\\
\text{Proof for 2.} \\
\text{Let } v \in V \\
(\alpha[T_{1}]^{B}_{C})[v]_{B} = \alpha([T_{1}]^{B}_{C}[v]_{B}) = \alpha[T_{1}(v)]_{C} = [(\alpha T_{1})(v)]_{C} \\
\implies \alpha[T_{1}]^{B}_{C} = [\alpha T_{1}]^{B}_{C} \\
\\
\text{Proof for 3.} \\
\text{Let } v \in V \\
([S]^{C}_{E} \cdot [T_{1}]^{B}_{C})[v]_{B} = [S]^{C}_{E}([T_{1}]^{B}_{C} \cdot [v]_{B}) = [S]^{C}_{E} \cdot [T_{1}(v)]_{C} = [S(T_{1}(v))]_{E} = [(ST_{1})(v)]_{E} \\
\implies [S]^{C}_{E} \cdot [T_{1}]^{B}_{C} = [ST_{1}]^{B}_{E} \\
}
$$
---
## Representation matrix of Identity transformation #lemma 
$$
\displaylines{
\text{Let } V \text{ be a finitely generated vector space over } \mathbb{F} \\
\text{Let } B \text{ basis of } V \\
\text{Then } [I]^{B}_{B} = I \\
\\
\text{Proof:} \\
\text{Let } v \in V \\
[I]^{B}_{B} [v]_{B} = [I(v)]_{B} = [v]_{B} \implies [I]^{B}_{B} = I \\
\\
[I]^{B}_{B} = \begin{pmatrix}
\vdots &  & \vdots \\
[I(v_{1})]_{B} & \dots  & [I(v_{n})]_{B} \\
\vdots &  & \vdots \\
\end{pmatrix} = \begin{pmatrix}
\vdots &  & \vdots \\
[v_{1}]_{B} & \dots  & [v_{n}]_{B} \\
\vdots &  & \vdots \\
\end{pmatrix} \\
\forall i \in [1, n]: [v_{i}]_{B} = e_{i} \\
\implies [I]^{B}_{B} = \begin{pmatrix}
\vdots & \vdots &  & \vdots \\
e_{1} & e_{2} & \dots & e_{n} \\
\vdots & \vdots &  & \vdots \\
\end{pmatrix} = I_{n} \\
}
$$
---
## Invertibility of representation matrix #lemma 
$$
\displaylines{
\text{Let } T: V \to U \text{ linear transformation} \\
\text{Let } B, C \text{ bases of } V, U \\
\text{Then } T \text{ is invertible } \iff [T]^{B}_{C} \text{ is invertible} \\
\\
\text{Proof:} \\
\text{Let } T \text{ be invertible} \\
\implies dim(V) = dim(U) = n \implies [T]^{B}_{C} \in \mathbb{F}^{n \times n} \\
[T^{-1}]^{C}_{B}[T]^{B}_{C} = [T^{-1}T]^{B}_{B} = [I]^{B}_{B} = I \\
\implies \boxed{[T^{-1}]^{C}_{B} \text{ is an inverse of } [T]^{B}_{C}} \\
\text{Let } [T]^{B}_{C} \text{ be invertible} \\
\implies [T]^{B}_{C} \in \mathbb{F}^{n \times n} \implies dim(V) = dim(U) = n \\
\implies [T \text{ is surjective} \iff T \text{ is injective}] \\
\text{Let } v \in ker(T) \\
\implies T(v) = 0 \implies [T(v)]_{C} = [0]_{C} = 0 \\
\implies [T(v)]_{C} = [T]^{B}_{C} [v]_{B} = 0 \\
[T]^{B}_{C} \text{ is invertible} \implies N([T]^{B}_{C}) = \Set{ 0 } \implies [v]_{B} = 0 \implies v = 0 \\
\implies ker(T) = \Set{ 0 } \implies T \text{ is injective} \implies T \text{ is bijective} \\
\implies T \text{ is invertible} \\
}
$$
---
$$
\displaylines{
T: \overset{ B }{ V } \to \overset{ C, S }{ U } \\
[T]^{B}_{C} = [I]^{S}_{C} \cdot [T]^{B}_{S} = ([I]^{C}_{S})^{-1}[T]^{B}_{S} \\
\text{Much easier to calculate } [T]^{B}_{S} \text{ than } [T]^{B}_{C} \\
\text{Might be much easier to calculate } ([I]^{C}_{S})^{-1} \text{ than } [I]^{S}_{C} \\
}
$$
---
## Representation matrix, Kernel and Image #lemma 
$$
\displaylines{
\text{Let } T: V \to U \text{ linear transformation} \\
\text{Let } B, D \text{ bases of } V, U \\
\text{Then } \\
1. \quad [ker(T)]_{B} = N([T]^{B}_{D}) \\
2. \quad [Im(T)]_{D} = C([T]^{B}_{D}) \\ 
\\
\text{Proof for 1.} \\
[v]_{B} \in [ker(T)]_{B} \iff v \in ker(T) \\
\iff T(v) = 0 \iff [T(v)]_{D} = [0]_{D} = 0 \\
\iff [T]^{B}_{D} \underbrace{ [v]_{B} }_{ v \in V } = [T(v)]_{D} = 0 \iff [v]_{B} \in N([T]^{B}_{D}) \\
\implies \boxed{ [ker(T)]_{B} = N([T^{B}_{D}]) } \\
\\
\text{Proof for 2.} \\
[u]_{D} \in [Im(T)]_{D} \iff u \in Im(T) \iff \exists v \in V: T(v) = u \\
\iff T(v) \in Im(T) \iff [T(v)]_{D} \in [Im(T)]_{D} \iff [T]^{B}_{D}\underbrace{ [v]_{B} }_{ v \in V } \in [Im(T)]_{D} \\
\text{Note: } [T]^{B}_{D}[v]_{B} \text{ is a linear combination of columns of } [T]^{B}_{D} \\
\iff [T]^{B}_{D}[v]_{B} \in C([T]^{B}_{D}) \\
\implies \boxed{[Im(T)]_{D} = C([T]^{B}_{D})} \\
}
$$
---
## Example
$$
\displaylines{
T: \overset{ E }{ \mathbb{R}_{2}[x] } \to \overset{ F }{ \mathbb{R}^{2 \times 2} } \\
E = \Set{ 1, 1+x, 1+x^{2} } \\
F = \Set{ \begin{pmatrix}
0 & 0 \\
0 & -1 \\
\end{pmatrix}, \begin{pmatrix}
1 & 0 \\
0 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 2 \\
0 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 0 \\
1 & 1 \\
\end{pmatrix} } \\
[T]^{E}_{F} = \begin{pmatrix}
1 & 0 & 2 \\
0 & 1 & 3 \\
1 & 1 & 5 \\
1 & -1 & -1 \\
\end{pmatrix} \\
\implies [T(1)]_{F} = \begin{pmatrix}
1 \\
0 \\
1 \\
1 \\
\end{pmatrix}, [T(1+x)]_{F} = \begin{pmatrix}
0 \\
1 \\
1 \\
-1 \\
\end{pmatrix}, [T(1+x^{2})]_{F} = \begin{pmatrix}
2 \\
3 \\
5 \\
-1 \\
\end{pmatrix} \\
a + bx + cx^{2} = \alpha(1) + \beta(1+x) + \gamma(1+x^{2}) \\
\implies \left\{\begin{array}{}
\alpha = a - b - c \\
\beta = b \\
\gamma = c \\
\end{array}\right. \\
\text{Let } v \in \mathbb{R}_{2}[x] \\
\implies [T]^{E}_{F} [v]_{E} = [T]^{E}_{F} \cdot [a+bx+cx^{2}]_{E} = \\
= \begin{pmatrix}
1 & 0 & 2 \\
0 & 1 & 3 \\
1 & 1 & 5 \\
1 & -1 & -1 \\
\end{pmatrix} \cdot \begin{pmatrix}
a-b-c \\
b \\
c \\
\end{pmatrix} = \begin{pmatrix}
a-b+c \\
b+3c \\
a-4c \\
a-2b-2c \\
\end{pmatrix} = [T(v)]_{F} \\
\implies T(v) = T(a+bx+cx^{2}) = \\
= (a-b+c)\begin{pmatrix}
0 & 0 \\
0 & -1 \\
\end{pmatrix} + (b+3c)\begin{pmatrix}
1 & 0 \\
0 & 0 \\
\end{pmatrix} + (a-4c)\begin{pmatrix}
0 & 2 \\
0 & 0 \\
\end{pmatrix} + (a-2b-2c)\begin{pmatrix}
0 & 0 \\
1 & 1 \\
\end{pmatrix} = \\
= \begin{pmatrix}
b+3c & 2a-8c \\
a-2b-2c & -b-3c \\
\end{pmatrix} \\
}
$$
---
