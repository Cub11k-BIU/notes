---
{"publish":true,"created":"18/03/25, 09:03","modified":"2025-11-21T21:10:14.490+02:00","tags":["Academia","Lecture","Linear-2"],"cssclasses":""}
---

## Determinant 
$$
\displaylines{
\text{Determinant is a way to calculate area (volume in 3D, etc.) of a figure} \\
\text{defined by } n \text{ vectors } v_{1}, v_{2}, v_{3}, \dots, v_{n} \\
}
$$
## Permutation #definition 
$$
\displaylines{
\text{Permutation } \sigma : [n] \to [n] \text{ is a bijective function} \\
\text{is a set of values } \Set{ \sigma(1), \sigma(2), \dots, \sigma(n) } \\
\\
\text{For example:} \\
\begin{pmatrix}
1 & 2 & 3 & 4 & 5 \\
3 & 5 & 1 & 2 & 4 \\
\end{pmatrix} \\
\text{Which can in turn be expressed as } (2, 5, 4)(3, 1) \\
\\
(1, 3, 2) \neq (1, 2, 3) = (2, 3, 1) \\
}
$$
## Transposition #definition 
$$
\displaylines{
\text{Let } i, j \in [n] \\
(i, j) \text{ is called transposition if } i < j \text{ and } \sigma(i) > \sigma(j) \\
}
$$
$$
\displaylines{
(1, 2, 3) \implies \left\{\begin{array}{}
\sigma(1) = 2 \\
\sigma(2) = 3 \\
\sigma(3) = 1 \\
\end{array}\right. \implies \left\{\begin{array}{}
1 < 2, \sigma(1) < \sigma(2) \\
\boxed{ 2 < 3, \sigma(2) > \sigma(3) } \\
\boxed{ 1 < 3, \sigma(1) > \sigma(3) } \\
\end{array}\right. \\
}
$$
## Permutation sign #definition 
$$
\displaylines{
\text{Let } k \text{ be the number of transpositions in } \sigma \\
\text{Permutation sign is then calculated and denoted as } sgn(\sigma) = (-1)^{k} \\
}
$$
## Symmetric group #definition 
$$
\displaylines{
\text{Set of all possible permutations of } [n] \text{ is denoted as} \\ S_{n} = \Set{ \Set{ \sigma(1), \sigma(2), \dots, \sigma(n) } | \sigma: [n] \to [n] \text{ is bijective} } \\
}
$$
$$
\displaylines{
S_{2} = \Set{ \begin{pmatrix}
1 & 2 \\
1 & 2 \\
\end{pmatrix}, \begin{pmatrix}
1 & 2 \\
2 & 1 \\
\end{pmatrix} } = \left\{\begin{array}{}
(1)(2) \\
(1, 2) \\
\end{array}\right. \\
\\
S_{3} = \Set{ \begin{pmatrix}
1 & 2 & 3 \\
1 & 2 & 3 \\
\end{pmatrix}, \begin{pmatrix}
1 & 2 & 3 \\
1 & 3 & 2 \\
\end{pmatrix}, \begin{pmatrix}
1 & 2 & 3 \\
2 & 1 & 3 \\
\end{pmatrix}, \begin{pmatrix}
1 & 2 & 3 \\
2 & 3 & 1 \\
\end{pmatrix}, \begin{pmatrix}
1 & 2 & 3 \\
3 & 1 & 2 \\
\end{pmatrix}, \begin{pmatrix}
1 & 2 & 3 \\
3 & 2 & 1 \\
\end{pmatrix} } = \\
= \left\{\begin{array}{}
(1)(2)(3) \to sgn(\sigma) = (-1)^{0} \\
(1)(2, 3) \to sgn(\sigma) = (-1)^{1} \\
(1, 2)(3) \to sgn(\sigma) = (-1)^{1} \\
(1, 2, 3) \to sgn(\sigma) = (-1)^{2} \\
(1, 3, 2) \to sgn(\sigma) = (-1)^{2} \\
(1, 3)(2) \to sgn(\sigma) = (-1)^{3} \\
\end{array}\right. \\
}
$$
## Determinant #definition 
$$
\displaylines{
\text{Let } \lvert \ \rvert : \mathbb{F}^{n \times n} \to \mathbb{F} \\
\forall A \in \mathbb{F}^{n \times n}: \lvert A \rvert = \sum_{\sigma \in S_{n}} a_{1\sigma(1)} \cdot a_{2\sigma(2)} \cdot \ldots \cdot a_{n\sigma(n)} \\
\text{Sometimes denoted as } \det(A) \\
}
$$
$$
\displaylines{
A = \begin{pmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22} \\
\end{pmatrix} \implies \det(A) = \lvert A \rvert = \underbrace{ a_{11}a_{22} }_{ \sigma(1) = 1, \sigma(2) = 2, sgn(\sigma) = 1 } - \underbrace{ a_{12}a_{21} }_{ \sigma(1) = 2, \sigma(2) = 1, sgn(\sigma) = -1 } \\
\\
A = \begin{pmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9 \\
\end{pmatrix} \implies \det(A) = \lvert A \rvert = \\
= a_{11}a_{22}a_{33} - a_{11}a_{23}a_{32} - a_{12}a_{21}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31} = \\
= 45 - 48 - 72 + 84 + 96 - 105 = 0 \\
}
$$
## Determinant of triangular matrix #lemma 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \text{ be a triangular matrix } \\
\text{Then } \lvert A \rvert = \prod_{i=1}^{n} a_{ii} \\
\\
\text{Proof:} \\
\text{Let } \sigma \neq I \\
\implies \exists k \geq 2: (x_{1}, \dots, x_{k}) \in \sigma \\
\text{Case 1. Let } \exists j \in [k-1]: x_{j} > x_{j+1} \\
\implies x_{j} > \sigma(x_{j}) \implies a_{x_{j}\sigma(x_{j})} = 0 \implies sgn(\sigma)a_{1\sigma(1)}\dots a_{n\sigma(n)} = 0 \\
\text{Let } x_{1} < x_{2} < \dots < x_{k} \\
\implies x_{k} > x_{1} = \sigma(x_{k}) \implies a_{x_{k}\sigma(x_{k})} = 0 \implies sgn(\sigma)a_{1\sigma(1)}\dots a_{n\sigma(n)} = 0 \\
\implies \lvert A \rvert = \prod_{i=1}^{n} a_{ii} \\
\text{Similar proof for lower-triangular matrix} \\
}
$$
## Row-linearity of determinant #lemma 
$$
\displaylines{
\text{Let} A \in \mathbb{F}^{n \times n} \\
\text{Let } i \in [n] \\
\text{Let } \exists v, u \in \mathbb{F}^{n}: R_{i}(A) = v + \alpha u \\
\text{Let } A_{v} = \left\{\begin{array}{} \\
R_{j}(A_{v}) = R_{j}(A) & j \neq i \\
R_{j}(A_{v}) = v & j = i \\
\end{array}\right. \\
\text{Let } A_{u} = \left\{\begin{array}{} \\
R_{j}(A_{v}) = R_{j}(A) & j \neq i \\
R_{j}(A_{v}) = u & j = i \\
\end{array}\right. \\
\text{Then } \lvert A \rvert = \lvert A_{v} \rvert + \alpha\lvert A_{u} \rvert \\
}
$$
## Determinant of a matrix with two equal rows #lemma 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Let } \exists i \neq j \in [n]: R_{i}(A) = R_{j}(A) \\
\text{Then } \lvert A \rvert = 0 \\
}
$$
## Determinant of a matrix with a zero row #lemma 
$$
\displaylines{
\text{Let } \exists i \in [n]: R_{i}(A) = 0 \\
\text{Then } \lvert A \rvert = 0 \\
\\
\text{Proof:} \\
\forall \sigma: a_{i\sigma(i)} = 0 \implies \forall \sigma: sgn(\sigma)a_{1\sigma(1)}\dots a_{n\sigma(n)} = 0 \\
\implies \lvert A \rvert = 0 \\
}
$$
## Determinant after elementary row-operations #lemma 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Let } B = p(A) \\
\text{Then } \left\{\begin{array}{}
p: \alpha R_{i} \implies \lvert B \rvert = \alpha \lvert A \rvert  \\
p: R_{i} \leftrightarrow R_{j} \implies \lvert B \rvert = -\lvert A \rvert \\
p: R_{i} + \alpha R_{j} \implies \lvert B \rvert = \lvert A \rvert \\
\end{array}\right. \\
\\
\text{Proof:} \\
\text{Let } A = \begin{pmatrix}
v_{1} \\
v_{2} \\
\vdots \\
v_{n} \\
\end{pmatrix} \\
\text{Let } p: \alpha R_{i} \\
\implies B = \begin{pmatrix}
v_{1} \\
\vdots \\
\alpha v_{i} \\
\vdots \\
v_{n} \\
\end{pmatrix} \implies R_{i}(B) = 0 + \alpha v_{i} \implies \lvert B \rvert = \lvert B_{0} \rvert + \alpha \lvert B_{v_{i}} \rvert = 0 + \alpha \lvert A \rvert = \alpha \lvert A \rvert \\
\\
\text{Let } p: R_{i} \leftrightarrow R_{j} \\
\text{Let } i > j \quad \text{(WLOG)} \\
\text{Let } X = \begin{pmatrix}
v_{1} \\
\vdots \\
v_{i}+v_{j} \\
\vdots \\
v_{i}+v_{j} \\
\vdots \\
v_{n} \\
\end{pmatrix} \implies 0 = \lvert X \rvert = \begin{vmatrix}
v_{1} \\
\vdots \\
v_{i} \\
\vdots \\
v_{i}+v_{j} \\
\vdots \\
v_{n} \\
\end{vmatrix} + \begin{vmatrix}
v_{1} \\
\vdots \\
v_{j} \\
\vdots \\
v_{i}+v_{j} \\
\vdots \\
v_{n} \\
\end{vmatrix} = \\
= \begin{vmatrix}
-v_{1}- \\
\vdots \\
-v_{i}- \\
\vdots \\
-v_{i}- \\
\vdots \\
-v_{n}- \\
\end{vmatrix} + \begin{vmatrix}
-v_{1}- \\
\vdots \\
-v_{i}- \\
\vdots \\
-v_{j}- \\
\vdots \\
-v_{n}- \\
\end{vmatrix} + \begin{vmatrix}
-v_{1}- \\
\vdots \\
-v_{j}- \\
\vdots \\
-v_{i}- \\
\vdots \\
-v_{n}- \\
\end{vmatrix} + \begin{vmatrix}
-v_{1}- \\
\vdots \\
-v_{j}- \\
\vdots \\
-v_{j}- \\
\vdots \\
-v_{n}- \\
\end{vmatrix} = 0 + \lvert A \rvert + \lvert B \rvert + 0 \\
\implies \lvert A \rvert + \lvert B \rvert = 0 \implies \lvert B \rvert = - \lvert A \rvert \\
\\
\text{Let } p: R_{i} + \alpha R_{j} \\
\implies B = \begin{pmatrix}
v_{1} \\
\vdots \\
v_{i} + \alpha v_{j} \\
\vdots \\
v_{n}
\end{pmatrix} \implies \lvert B \rvert = \lvert A \rvert + \alpha\begin{vmatrix}
-v_{1}- \\
\vdots \\
-v_{j}- \\
\vdots \\
-v_{j}- \\
\vdots \\
-v_{n}- \\
\end{vmatrix} = \lvert A \rvert \\
}
$$
## Properties of elementary row-operations determinant #lemma 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\\
p: \alpha R_{i} \implies \lvert p(I) \rvert = \alpha \lvert I \rvert = \alpha \\
p: R_{i} \leftrightarrow  R_{j} \implies \lvert p(I) \rvert = -\lvert I \rvert = -1 \\
p: R_{i}+\alpha R_{j} \implies \lvert p(I) \rvert = \lvert I \rvert = 1 \\
\implies \lvert p(I)A \rvert = \lvert p(I) \rvert \cdot \lvert A \rvert \\
\implies \text{(Simple proof by induction) } \left\lvert  \left( \prod_{i=1}^{k} p_{i}(I) \right) A \right\rvert = \left( \prod_{i=1}^{k} \lvert p_{i}(I) \rvert \right) \lvert A \rvert  \\
\implies \forall A, B \in \mathbb{F}^{n \times n}: A = \left( \prod_{i=1}^{k} p_{i} \right)B \implies \exists \alpha \neq 0 \in \mathbb{F}: \lvert A \rvert = \alpha \lvert B \rvert \\
}
$$
## Invertibility of matrix and determinant #theorem 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Then } \lvert A \rvert \neq 0 \iff A \text{ is invertible} \\
\\
\text{Proof:} \\
\text{Let } A \text{ be non-invertible} \\
\implies \exists i \in [n]: R_{i}(CF(A)) = 0 \implies \lvert CF(A) \rvert = 0 = \alpha \lvert A \rvert \underbrace{ \implies }_{ \alpha \neq 0 } \lvert A \rvert = 0 \\
\text{Let } \lvert A \rvert = 0 \\
\implies \lvert A \rvert = \alpha \lvert CF(A) \rvert = 0 \\
\alpha \neq 0 \implies \lvert CF(A) \rvert = 0 \\
\lvert I \rvert \neq 0 \implies CF(A) \neq I \implies A \text{ is not invertible} \\
}
$$
## Determinant of two matrix product #lemma 
$$
\displaylines{
\text{Let } A, B \in \mathbb{F}^{n \times n} \\
\text{Then } \lvert AB \rvert = \lvert A \rvert \cdot \lvert B \rvert \\
\\
\text{Proof:} \\
\text{Let } A \text{ be non-invertible} \\
\implies \lvert A \rvert = 0 \implies \lvert A \rvert \cdot \lvert B \rvert = 0 \\
rank(A) < n \implies rank(AB) \leq rank(A) < n \implies AB \text{ is non-invertible} \\
\implies \lvert AB \rvert = 0 = \lvert A \rvert \cdot \lvert B \rvert \\
\\
\text{Let } A \text{ be invertible} \\
\implies A = \left( \prod_{i=1}^{k} p_{i}(I) \right)CF(A) = \prod_{i=1}^{k} p_{i}(I) \implies \lvert A \rvert = \left\lvert  \prod_{i=1}^{k} p_{i}(I) \right\rvert = \prod_{i=1}^{k} \lvert p_{i}(I) \rvert \\
\implies AB = \left( \prod_{i=1}^{k} p_{i}(I) \right)B \\
\implies \lvert AB \rvert = \left\lvert \left( \prod_{i=1}^{k} p_{i}(I) \right)B \right\rvert = \left( \prod_{i=1}^{k} \lvert p_{i}(I) \rvert  \right)\lvert B \rvert = \lvert A \rvert \cdot \lvert B \rvert \\
}
$$
