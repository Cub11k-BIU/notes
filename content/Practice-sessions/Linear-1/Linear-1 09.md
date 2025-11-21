---
{"publish":true,"created":"25/12/24, 14:12","modified":"2025-11-21T21:10:25.141+02:00","tags":["Academia","Practice","Linear-1"],"cssclasses":""}
---

# Linear-1 9
## Matrix spaces
$$
\displaylines{
R(A) = sp(\Set{ R_{1}(A), R_{2}(A), \dots, R_{m}(A) }) \subseteq \mathbb{F}^{n} \\
C(A) = sp(\Set{ C_{1}(A), C_{2}(A), \dots, C_{n}(A) }) \subseteq \mathbb{F}^{m} \\
N(A) = \Set{ x \in \mathbb{F}^{n} | Ax = 0} \subseteq \mathbb{F}^{n} \\
}
$$
---
## Exercise
$$
\displaylines{
\text{Find bases of } R(A), C(A), N(A) \\
A = \begin{pmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9 \\
1 & 2 & 3 \\
\end{pmatrix} \\
A \to \dots \to \begin{pmatrix}
1 & 2 & 3 \\
0 & 1 & 2 \\
0 & 0 & 0 \\
0 & 0 & 0 \\
\end{pmatrix} \\
\implies R(A) = sp(\Set{ \begin{pmatrix}
1 \\
2 \\
3 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
2 \\
\end{pmatrix} }) \\
\implies C(A) = sp(\Set{ \begin{pmatrix}
1 \\
4 \\
7 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
2 \\
5 \\
8 \\
2 \\
\end{pmatrix} }) \\
\implies N(A) = \Set{ x \in \mathbb{R}^{3} | \begin{array}{}
z = t \\
y = -2t \\
x = t \\
\end{array} } = sp(\Set{ \begin{pmatrix}
1 \\
-2 \\
1 \\
\end{pmatrix} }) \\
}
$$
---
## Exercise
$$
\displaylines{
\text{Prove or disprove: } \exists A \in \mathbb{F}^{11 \times 11}: R(A) \oplus C(A) = \mathbb{F}^{11} \\
\\
\text{Disproof:} \\
\text{Let } A \in \mathbb{F}^{11 \times 11}:  R(A) \oplus C(A) = \mathbb{F}^{11} \\
11 = dim(\mathbb{F}^{11}) = dim(R(A) \oplus C(A)) = \\
= \underbrace{ dim(R(A)) }_{ rank(A) } + \underbrace{ dim(C(A)) }_{ rank(A) } - \underbrace{ dim(R(A) \cap C(A)) }_{ = 0 } \\
\implies 2rank(A) = 11, rank(A) \in \mathbb{N}_{0} - \text{Contradiction!} \\
}
$$
---
## Exercise
$$
\displaylines{
A \in \mathbb{F}^{n \times n} \\
\text{Prove: } rank(A) = rank(A^{2}) \iff \exists B \in \mathbb{F}^{n \times n}: A = A^{2}B \\
\\
\text{Proof:} \\
\text{Let } \exists B \in \mathbb{F}^{n \times n}: A = A^{2}B \\
rank(A^{2}) = rank(AA) \leq rank(A) \\
rank(A) = rank(A^{2}B) \leq rank(A^{2}) \leq rank(A) \\
\implies rank(A) = rank(A^{2}) \\
\text{Let } rank(A) = rank(A^{2}) \\
C(A^{2}) = C(AA) \subseteq C(A) \\
dim(C(A^{2})) = rank(A^{2}) = rank(A) = dim(C(A)) \\
\implies C(A^{2}) = C(A) \\
C(A) \subseteq C(A^{2}) \\
\implies \forall i \in [1, n]: C_{i}(A) \in C(A^{2}) \\
C_{1}(A) = \alpha_{1}^{1}C_{1}(A^{2}) + \dots + \alpha_{n}^{1}C_{n}(A^{2}) \\
C_{2}(A) = \alpha_{1}^{2}C_{1}(A^{2}) + \dots + \alpha_{n}^{2}C_{n}(A^{2}) \\
\dots \\
C_{n}(A) = \alpha_{1}^{n}C_{1}(A^{2}) + \dots + \alpha_{n}^{n}C_{n}(A^{2}) \\
B = \begin{pmatrix}
\alpha_{1}^{1} & \dots  & \alpha_{n}^{1} \\
\vdots & \ddots & \vdots \\
\alpha_{n}^{n} & \dots & \alpha_{n}^{n} \\
\end{pmatrix} \\
C_{j}(A^{2}B) = \sum_{i=1}^{n} C_{j}(A^{2})B_{ij} = \sum_{i=1}^{n} C_{j}(A^{2})\alpha_{i}^{j} = C_{j}(A) \\
}
$$
---
