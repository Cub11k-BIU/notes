---
{"publish":true,"created":"25/07/25, 16:07","modified":"2026-03-24T15:00:54.140+02:00","tags":["Academia","Lecture","Linear-2"],"cssclasses":""}
---

# 2
$$
\displaylines{
\text{Let } V = \mathbb{C}^{n \times n} \\
\text{Let } \forall A, B \in V: \langle A, B \rangle = tr(AB^{*}) \\
}
$$
## 2a
$$
\displaylines{
\text{Prove: } \langle A, B \rangle \text{ is an inner product} \\
\\
\text{Proof:} \\
\text{Let } A, B, C \in V, z \in \mathbb{C} \\
\langle A+zB, C \rangle = tr((A+zB)C^{*}) = tr(AC^{*}) + tr(zBC^{*}) = \langle A, C^{*} \rangle + z\langle B, C^{*} \rangle \\
\langle A, B \rangle = tr(AB^{*}) = tr((AB^{*})^{T}) = tr(\overline{B}A^{T}) = \overline{tr(\overline{\overline{B}A^{T}})} = \overline{tr(BA^{*})} = \overline{\langle B, A \rangle} \\
\langle A, A \rangle = tr(AA^{*}) = \sum_{i=1}^{n} R_{i}(A) \cdot C_{i}(A^{*}) = \sum_{i=1}^{n} R_{i}(A) \cdot \overline{R_{i}(A)} = \sum_{i=1}^{n} \sum_{j=1}^{n} \left\lvert A_{ij} \right\rvert^{2} \geq 0 \\
\langle A, A \rangle = 0 \iff \forall i, j \in [1, n]: A_{ij} = 0 \iff A = 0 \\
}
$$
## 2b
$$
\displaylines{
\text{Let } W \subseteq V \text{ be a space of diagonal matrices} \\
\text{Find } P_{W}\begin{pmatrix}
1 & 2i \\
4i & 3 \\
\end{pmatrix} \\
\\
\text{Solution:} \\
\text{This is a standard inner product} \implies \text{Standard basis is orthonormal} \\
\implies \text{Basis } \Set{ e_{1}, e_{3} } \text{ is an orthonormal basis of } W \\
\text{Let } A = \begin{pmatrix}
1 & 2i \\
4i & 3 \\
\end{pmatrix} \\
\implies P_{W}(A) = \langle A, e_{1} \rangle e_{1} + \langle A, e_{3} \rangle e_{3} = \begin{pmatrix}
tr(Ae_{1}^{*}) & 0 \\
0 & tr(Ae_{3}^{*}) \\
\end{pmatrix} = \begin{pmatrix}
1 & 0 \\
0 & 3 \\
\end{pmatrix} \\
}
$$
# 3
$$
\displaylines{
\text{Let } A, B \in \mathbb{R}^{n \times n} \\
\text{Let } A \text{ be invertible} \\
\text{Let } \forall v \in \mathbb{R}^{n}: \lVert Av \rVert = \lVert Bv \rVert \\
}
$$
## 3a
$$
\displaylines{
\text{Prove or disprove: } B \text{ is invertible} \\
\\
\text{Proof:} \\
\text{Let } B \text{ be non-invertible} \\
\implies \exists v \neq 0: Bv = 0 \\
v \neq 0 \implies Av \neq 0 \implies \lVert Av \rVert > 0 \implies \lVert Bv \rVert = \lVert Av \rVert > 0 - \text{Contradiction!} \\
\implies B \text{ is invertible} \\
}
$$
## 3b
$$
\displaylines{
\text{Prove or disprove: } A, B \text{ are unitary} \\
\\
\text{Disproof:} \\
A = B = 2I \\
}
$$
## 3c
$$
\displaylines{
\text{Prove or disprove: } AB^{-1} \text{ is unitary} \\
\\
\text{Proof:} \\
\forall v \in \mathbb{R}^{n}: \lVert Av \rVert = \lVert Bv \rVert \\
\text{Let } v \in \mathbb{R}^{n} \\
\implies B^{-1}v \in \mathbb{R}^{n} \implies \lVert AB^{-1}v \rVert = \lVert BB^{-1}v \rVert = \lVert v \rVert \\
\forall v \in \mathbb{R}^{n}: \lVert AB^{-1}v \rVert = \lVert v \rVert \implies AB^{-1} \text{ is unitary} \\
}
$$
# 4
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \text{ such that } A^{T}A \text{ is a scalar matrix} \\
\exists \alpha \in \mathbb{R}: A^{T}A = \alpha I \\
}
$$
## 4a
$$
\displaylines{
\text{Prove: } \alpha = 0 \implies A = 0 \\
\\
\text{Proof:} \\
\alpha = 0 \implies A^{T}A = 0 \implies \forall i \in [1, n]: R_{i}(A^{T}) \cdot C_{i}(A) = 0 \\
\implies \forall i \in [1, n]: \sum_{j=1}^{n} (A_{ij})^{2} = 0 \implies \forall i, j \in [1, n]: A_{ij} = 0 \\
\implies A = 0 \\
}
$$
## 4b
$$
\displaylines{
\text{Prove: } \alpha \neq 0 \implies \alpha > 0 \\
\\
\text{Proof:} \\
\alpha \neq 0 \implies A^{T}A = \alpha I \implies \forall i \in [1, n]: R_{i}(A^{T}) \cdot C_{i}(A) = \alpha \\
\implies \forall i \in [1, n]: \sum_{j=1}^{n} (A_{ij})^{2} = \alpha \implies \alpha > 0 \\
}
$$
## 4c
$$
\displaylines{
\text{Prove: } \forall \alpha \in \mathbb{R}: \exists b \in \mathbb{R}, Q \text{ orthogonal}: A = bQ \\
\\
\text{Proof:} \\
\text{Let } \alpha = 0 \implies A = 0 \implies Q = I, b = 0 \\
\text{Let } \alpha \neq 0 \implies \alpha > 0 \\
A^{T}A = \alpha I \implies \left( \frac{1}{\sqrt{ \alpha }}A \right)^{T}\left( \frac{1}{\sqrt{ \alpha }}A \right) = I \\
\text{Let } Q = \frac{1}{\sqrt{ \alpha }}A \\
Q^{T} = \frac{1}{\sqrt{ \alpha }}A^{T} \\
Q^{T}Q = \frac{1}{\alpha}A^{T}A = \frac{\alpha}{\alpha}I = I \implies Q \text{ is orthogonal} \\
b = \sqrt{ \alpha }, A = \sqrt{ \alpha }Q \\
}
$$
# 5a
$$
\displaylines{
\text{Let } n \geq 2 \\
\text{Let } A \in \mathbb{R}^{n \times n} \\
\text{Let } tr(A) = 0, rank(A) = 1 \\
\text{Find characteristic and minimal polynomials of } A \\
\\
\text{Solution:} \\
rank(A) = 1 \implies \dim N(A) = n - 1 \implies k_{0} \geq n-1 \\
\implies P_{A}(x) = \left[\begin{array}{}
x^{n-1}(x-\lambda) \\
x^{n} \\
\end{array}\right. \\
\implies A \text{ is triangularizable} \\
\implies tr(A) = tr(U) = \sum_{i=1}^{n-1} 0 + \lambda = 0 \\
\implies \lambda = 0 \implies \boxed{ P_{A}(x) = x^{n} } \\
g_{0} = n-1 \implies \text{Jordan form of } A \text{ has } n-1 \text{ blocks} \\
\implies \text{Exactly one of them is a block of size 2, all others are of size 1} \\
\implies \boxed{ m_{A}(x) = x^{2} } \\
}
$$
# 5b
$$
\displaylines{
\text{Let } V \text{ be a finite-dimensional inner product space over } \mathbb{F} \\
\text{Let } U \text{ be a subspace of } V \\
\text{Let } U^{0} = \Set{ T: V \to \mathbb{F} | \forall u \in U: T(u) = 0 } \\
\text{Prove: } \forall T \in U^{0} : \exists w \in U^{\perp}: \forall v \in V: T(v) = \langle v, w \rangle \\
\\
\text{Proof:} \\
\text{Let } T \in U^{0} \\
\text{By Riesz theorem, } \exists w \in V: \forall v \in V: T(v) = \langle v, w \rangle \\
\text{Let us prove that } w \in U^{\perp} \\
T \in U^{0} \implies \forall u \in U: T(u) = 0 \implies \forall u \in U: \langle u, w \rangle = 0 \\
\implies \boxed{ w \in U^{\perp} } \\
}
$$
