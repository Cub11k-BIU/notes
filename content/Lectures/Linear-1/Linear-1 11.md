---
{"publish":true,"created":"08/01/25, 12:01","modified":"2025-11-21T21:10:14.304+02:00","tags":["Academia","Lecture","Linear-1"],"cssclasses":""}
---

# Linear-1 11
## Coordinate vectors #definition 
$$
\displaylines{
\text{Let } V = \mathbb{R}^{2} \\
\text{Let } B_{V} = \Set{ \binom{1}{0}, \binom{0}{1} } \\
\implies \binom{4}{3} = 4\binom{1}{0}+3\binom{0}{1} \\
\implies \left[\binom{4}{3}\right]_{B_{V}} = \binom{4}{3} \\
\\
\text{Now let } B_{V} = \Set{ \binom{1}{1}, \binom{1}{2} } \\
\implies \binom{4}{3} = 5\binom{1}{1} -1\binom{1}{2} \\
\implies \left[ \binom{4}{3} \right]_{B_{V}} = \binom{5}{-1} \\
}
$$
$$
\displaylines{
\text{Let } V \text{ be a vector space over } \mathbb{F} \\
\text{Let } B = \Set{ v_{1}, v_{2}, \dots, v_{n} } \text{ basis of } V \\
\text{Let } v \in V \\
\exists \alpha_{1}, \dots, \alpha_{n} : v = \sum_{i=1}^{n} \alpha_{i}v_{i} \\
\text{Then } [v]_{B} = \begin{pmatrix}
\alpha_{1} \\
\vdots \\
\alpha_{n} \\
\end{pmatrix} \text{ is called a coordinate vector} \\
\text{Coordinate vector is a function:} \\
[\;]_{B} : V \to \mathbb{F}^{n} \\
\text{This function is injective:} \\
\text{Let } [v]_{B} = [u]_{B} \\
\implies v = \alpha_{1}v_{1} + \alpha_{2}v_{2} + \dots + \alpha_{n}v_{n} = u \\
\implies v = u \\
}
$$
---
## Properties of coordinate vector #lemma 
$$
\displaylines{
\text{Let } V \text{ be a finitely generated vector space over } \mathbb{F} \\
\text{Let } B = \Set{ v_{1}, v_{2}, \dots, v_{n} } \text{ basis of } V \\
\text{Then} \\
1. \quad \forall v, u \in V: [v+u]_{B} = [v]_{B} + [u]_{B} \\
2. \quad \forall v \in V, \alpha \in \mathbb{F}: [\alpha v]_{B} = \alpha[v]_{B} \\
3. \quad [v]_{B} = 0 \iff v = 0 \\
\\
\text{Proof for 1:} \\
\text{Let } v, u \in V \\
sp(B) = V \implies v = \sum_{i=1}^{n} \alpha_{i}v_{i}, u = \sum_{i=1}^{n} \beta_{i}v_{i} \\
\implies [v]_{B} + [u]_{B} = \begin{pmatrix}
\alpha_{1}+\beta_{1} \\
\vdots \\
\alpha_{n}+\beta_{n} \\
\end{pmatrix} \\
[v+u]_{B} = \left[ \sum_{i=1}^{n} \alpha_{i}v_{i} + \sum_{i=1}^{n} \beta_{i}v_{i} \right]_{B} = \begin{pmatrix}
\alpha_{1}+\beta_{1} \\
\vdots \\
\alpha_{n}+\beta_{n} \\
\end{pmatrix} \\
\implies \boxed{[v+u]_{B} = [v]_{B} + [u]_{B}} \\
\\
}
$$
$$
\displaylines{
\text{Proof for 2:} \\
\text{Let } v \in V , \alpha \in \mathbb{F} \\
sp(B) = V \implies v = \sum_{i=1}^{n} \alpha_{i}v_{i} \\
\alpha[v]_{B} = \alpha\begin{pmatrix}
\alpha_{1} \\
\vdots \\
\alpha_{n} \\
\end{pmatrix} \\
[\alpha v]_{B} = [\alpha \sum_{i=1}^{n} \alpha_{i}v_{i}] = \begin{pmatrix}
\alpha\alpha_{1} \\
\vdots \\
\alpha\alpha_{n} \\
\end{pmatrix} = \alpha \begin{pmatrix}
\alpha_{1} \\
\vdots \\
\alpha_{n} \\
\end{pmatrix} \\
\implies \boxed{[\alpha v]_{B} = \alpha[v_{B}]} \\
\\
\text{Proof for 3:} \\
\text{Let } v \in V \\
\text{Let } [v]_{B} = 0 \\
\implies 0v_{1} + 0v_{2} + \dots + 0v_{n} = v \implies v = 0 \\
\text{Let } v = 0 \\
sp(B) = V \implies v = \alpha_{1}v_{1} + \dots + \alpha_{n}v_{n} = 0 \\
B \text{ is a linear independence} \implies \alpha_{1} = \dots = \alpha_{n} = 0 \implies [v]_{B} = 0 \\
\implies \boxed{[v]_{B} = 0 \iff v = 0} \\
}
$$
### Remark
$$
\displaylines{
[\;]_{B} \text{ is invertible (an isomorphism)} \\
\\
\text{Proof:} \\
1. \text{ and } 2. \implies [\;]_{B} \text{ is a linear transformation} \\
3. \implies ker([\;]_{B}) = \Set{ 0 } \implies [\;]_{B} \text{ is injective} \\
dim(\mathbb{F}^{n}) = n = dim(V) \implies [\;]_{B} \text{ is an isomorphism} \\
\text{Isomorphism is denoted as } V \cong \mathbb{F}^{n} \\
}
$$
---
LD is linear dependence
LID is linear independence
## Linear maps do not affect LD/LID #lemma 
$$
\displaylines{
\text{Let } V, U \text{ finitely generated vector spaces} \\
\text{Let } T: V \to U \text{ be an isomorphism} \\
\text{Then} \\
1. \quad \forall v_{1}, \dots, v_{n} \in V: \Set{ v_{1}, \dots, v_{n} } \text{ is a LID} \iff \Set{ T(v_{1}), \dots, T(v_{n}) } \text{ is a LID} \\
2. \quad \forall v_{1}, \dots, v_{n}, w \in V: w \in sp(\Set{ v_{1}, \dots, v_{n} }) \iff T(w) \in sp(\Set{ T(v_{1}), \dots, T(v_{n}) }) \\
\\
\text{Proof for 1:} \\
TODOBYYOURSELF \\
\text{Proof for 2:} \\
\text{Let } w, v_{1}, \dots, v_{n} \in V \\
w \in sp(\Set{ v_{1}, \dots, v_{n} }) \iff w = \sum_{i=1}^{n} \alpha_{i}v_{i} \\
\underbrace{ \iff }_{ T \text{ is an isomorphism} \implies T \text{ is bijective} } T(w) = T\left( \sum_{i=1}^{n} \alpha_{i}v_{i} \right) = \sum_{i=1}^{n} T(\alpha_{i}v_{i}) = \sum_{i=1}^{n} \alpha_{i}T(v_{i}) \\
\iff T(w) \in sp(\Set{ T(v_{1}), \dots, T(v_{n}) }) \\
}
$$
---
$$
\displaylines{
A \in \mathbb{F}^{m \times n} \\
T_{A}: \mathbb{F}^{n} \to \mathbb{F}^{m} \\
T_{A}(v) = Av \\
}
$$
$$
\displaylines{
\text{Let } T: V \to U \\
\text{Let } B \text{ basis of } V \\
\text{Let } C \text{ basis of } U \\
\text{We want to find a matrix $A$ such that} \\
\forall v \in V: T(v) = A[v]_{B} = [T(v)]_{C} \\
\iff \forall v \in V: T(v) = T_{A}([v]_{B}) = [T(v)]_{C} \\
}
$$
### Example
$$
\displaylines{
\text{Let } T: \mathbb{R}_{3}[x] \to \mathbb{R}_{2}[x] \\
T(p(x)) = p'(x) \\
(a + bx + cx^{2} + dx^{3})' = b + 2cx + 3dx^{2} \\
A \cdot \begin{pmatrix}
a \\
b \\
c \\
d \\
\end{pmatrix} = \begin{pmatrix}
b \\
2c \\
3d \\
\end{pmatrix} \implies A = \begin{pmatrix}
0 & 1 & 0 & 0 \\
0 & 0 & 2 & 0 \\
0 & 0 & 0 & 3 \\
\end{pmatrix} \\
}
$$
## Representation matrix #theorem 
$$
\displaylines{
\text{Let } B = \Set{ v_{1}, \dots, v_{n} } \text{ basis of } V \\
\text{Let } C = \Set{ u_{1}, \dots, u_{m} } \text{ basis of } U \\
\text{Let } T: V \to U \\
dim(V) = n \\
dim(U) = m \\
\text{Let } A \in \mathbb{F}^{m \times n} \\
\text{Let } v \in V \\
\implies v = \sum_{i=1}^{n} \alpha_{i}v_{i} \\
\implies A[v]_{B} = A\left[ \sum_{i=1}^{n} \alpha_{i}v_{i} \right]_{B} = A\sum_{i=1}^{n} \alpha_{i}[v_{i}]_{B} = \sum_{i=1}^{n} \alpha_{i}A[v_{i}]_{B} = \sum_{i=1}^{n} \alpha_{i}T_{A}([v_{i}]_{B}) = \\
= \sum_{i=1}^{n} \alpha_{i}[T(v_{i})]_{C} = \left[ \sum_{i=1}^{n} \alpha_{i}T(v_{i}) \right]_{C} = \left[ T(\sum_{i=1}^{n} \alpha_{i}v_{i}) \right]_{C} = [T(v)]_{C} \\
}
$$
$$
\displaylines{
[v_{i}]_{B} = e_{i} = \begin{pmatrix}
0 \\
\vdots \\
1 \\
\vdots \\
0 \\
\end{pmatrix} \in \mathbb{F}^{n} \implies A[v_{i}]_{B} = Ae_{i} \text{ which is } i\text{-th column of } A \\
\implies i\text{-th column of } A \text{ is equal to } [T(v_{i})]_{C} \\
[T]^{B}_{C} \text{ is a notation for transformation matrix } A \\
\implies A = [T]^{B}_{C} = \begin{pmatrix}
\vdots &  & \vdots \\
[T(v_{1})]_{C} & \dots & [T(v_{n})]_{C} \\
\vdots &  & \vdots \\
\end{pmatrix} \in \mathbb{F}^{m \times n} \\
[T]^{B}_{C} = \begin{pmatrix}
\vdots &  & \vdots \\
[T(v_{1})]_{C} & \dots & [T(v_{n})]_{C} \\
\vdots &  & \vdots \\
\end{pmatrix} \in \mathbb{F}^{m \times n} \\
\\
\text{For the previous example:} \\
[T]^{S_{1}}_{S_{2}} = \begin{pmatrix}
\vdots & \vdots & \vdots & \vdots \\
[T(1)]_{S_{2}} & [T(x)]_{S_{2}} & [T(x^{2})]_{S_{2}} & [T(x^{3})]_{S_{2}} \\
\vdots & \vdots & \vdots & \vdots \\
\end{pmatrix} = \begin{pmatrix}
\vdots & \vdots & \vdots & \vdots \\
[0]_{S_{2}} & [1]_{S_{2}} & [2x]_{S_{2}} & [3x^{2}]_{S_{2}} \\
\vdots & \vdots & \vdots & \vdots \\
\end{pmatrix} \\
\implies [T]^{S_{1}}_{S_{2}} = \begin{pmatrix}
0 & 1 & 0 & 0 \\
0 & 0 & 2 & 0 \\
0 & 0 & 0 & 3 \\
\end{pmatrix} \\
\\
\text{Now let } I: V_{B} \to V_{C} \\
\text{Meaning it doesn't change the vector, but represents it via different basis} \\
\text{Then } [I]^{B}_{C} = \begin{pmatrix}
[I(v_{1})]_{C} & \dots & [I(v_{n})]_{C} \\
\end{pmatrix} = \begin{pmatrix}
[v_{1}]_{C} & \dots & [v_{n}]_{C} \\
\end{pmatrix} \\
[I]^{B}_{C}\underbrace{ [I]^{D}_{B}[v]_{D} }_{ [v]_{B} } = [I]^{B}_{C} [v]_{B} = [v]_{C} \\
\implies [I]^{B}_{C}[I]^{D}_{B} = [I]^{D}_{C} \\
}
$$
---
### Side notes
$$
\displaylines{
\text{Let } T_{A}: \mathbb{F}^{n} \to \mathbb{F}^{m} \\
T_{A}(v) = Av \\
T_{A} = [\;]_{C} \circ T \circ [\;]_{B}^{-1} \\
\implies T_{A} \circ [\;]_{B} = [\;]_{C} \circ T \\
\implies T_{A}([v]_{B}) = [T(v)]_{C} \implies A[v]_{B} = [T(v)]_{C} \\
[v_{i}]_{B} = e_{i} = \begin{pmatrix}
0 \\
\vdots \\
1 \\
\vdots \\
0 \\
\end{pmatrix} \in \mathbb{F}^{n} \implies A[v_{i}]_{B} = Ae_{i} \text{ which is } i\text{-th column of } A \\
\implies i\text{-th column of } A \text{ is equal to } [T(v_{i})]_{C} \\
\implies A = [T]^{B}_{C} = \begin{pmatrix}
\vdots &  & \vdots \\
[T(v_{1})]_{C} & \dots & [T(v_{n})]_{C} \\
\vdots &  & \vdots \\
\end{pmatrix} \in \mathbb{F}^{m \times n} \\
}
$$
---
