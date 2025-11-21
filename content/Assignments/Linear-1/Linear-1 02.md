---
{"publish":true,"created":"17/11/24, 10:11","modified":"2025-11-21T21:10:02.532+02:00","tags":["Academia","Assignment","Linear-1"],"cssclasses":""}
---

## 1a
$$
\displaylines{
A = \begin{pmatrix}
3 & 4 & 5 \\
5 & 4 & 8 \\
9 & 2 & 9 \\
\end{pmatrix},
B = \begin{pmatrix}
9 & 2 & 9 \\
5 & 4 & 8 \\
3 & 4 & 5 \\
\end{pmatrix} \\
}
$$
## 1b
$$
\displaylines{
AB = \begin{pmatrix}
3 & 4 & 5 \\
5 & 4 & 8 \\
9 & 2 & 9 \\
\end{pmatrix} \times
\begin{pmatrix}
9 & 2 & 9 \\
5 & 4 & 8 \\
3 & 4 & 5 \\
\end{pmatrix} = 
\begin{pmatrix}
62 & 42 & 84 \\
89 & 58 & 117 \\
118 & 62 & 142 \\
\end{pmatrix} \\
BA = \begin{pmatrix}
9 & 2 & 9 \\
5 & 4 & 8 \\
3 & 4 & 5 \\
\end{pmatrix} \times
\begin{pmatrix}
3 & 4 & 5 \\
5 & 4 & 8 \\
9 & 2 & 9 \\
\end{pmatrix} = 
\begin{pmatrix}
118 & 62 & 142 \\
107 & 52 & 129 \\
74 & 38 & 92 \\
\end{pmatrix} \\
}
$$
---

$$
\text{Given: } A, B \in \mathbb{F}^{3 \times 4}; C \in \mathbb{F}^{4 \times 5}
$$
## 2a
$$
\displaylines{
\text{Can a change in } A_{21} \text{ affect } ((A+B) \cdot C)_{23} \text{ ?} \\
\text{If so, give an example} \\
\\
D = A+B \\
((A+B) \cdot C)_{23} = (D\cdot C)_{23} = \sum_{k=1}^{4} D_{2k}\cdot C_{k3} = \\
= D_{21} \cdot C_{13} + D_{22}\cdot C_{23} + \dots \\
D_{21} = A_{21} + B_{21} \implies \boxed{A_{21} \text{ can affect } ((A+B)\cdot C)_{23}} \\
\text{Example:} \\
A = \begin{pmatrix}
0 & 0 & 0 & 0 \\
\boxed{0} & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
\end{pmatrix},
B = \begin{pmatrix}
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
\end{pmatrix},
C = \begin{pmatrix}
0 & 0 & 1 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 \\
\end{pmatrix} \\
(A+B)\cdot C = \begin{pmatrix}
0 & 0 & 0 & 0 & 0 \\
0 & 0 & \boxed{0} & 0 & 0 \\
0 & 0 & 0 & 0 & 0 \\
\end{pmatrix} \\
A' = \begin{pmatrix}
0 & 0 & 0 & 0 \\
\boxed{1} & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
\end{pmatrix} \implies
(A' + B)\cdot C = \begin{pmatrix}
0 & 0 & 0 & 0 & 0 \\
0 & 0 & \boxed{1} & 0 & 0 \\
0 & 0 & 0 & 0 & 0 \\
\end{pmatrix}
}
$$
## 2b
$$
\displaylines{
\text{Can a change in } C_{21} \text{ affect } ((A+B) \cdot C)_{23} \text{ ?} \\
\text{If so, give an example} \\
\\
D = A+B \\
((A+B) \cdot C)_{23} = (D\cdot C)_{23} = \sum_{k=1}^{4} D_{2k}\cdot C_{k3} = \\
= D_{21} \cdot C_{13} + D_{22}\cdot C_{23} + D_{23}\cdot C_{33} + D_{24}\cdot C_{43} \\
\implies \boxed{C_{21} \text{ cannot affect } ((A+B)\cdot C)_{23}}

}
$$
---

$$
\text{Given: } A \in \mathbb{F}^{2\times3};B\in \mathbb{F}^{3\times4};C\in \mathbb{F}^{4\times5} 
$$
## 3a
$$
\displaylines{
\text{Can a change in } B_{22} \text{ affect } (ABC)_{13} \text{ ?} \\
\text{If so, give an example} \\
\\
AB_{ij} = \sum_{k=1}^{3} A_{ik}B_{kj} \\
ABC_{13} = \sum_{m=1}^{4} AB_{1m}C_{m3} = \sum_{m=1}^{4} \left( \sum_{k=1}^{3} A_{1k}B_{km} \right)C_{m3} = \\
= \dots + A_{12}B_{22}C_{23} + \dots \\
\implies \boxed{B_{22} \text{ can affect } (ABC)_{13}} \\
\text{Example:} \\
A = \begin{pmatrix}
0 & 1 & 0 \\
0 & 0 & 0 \\
\end{pmatrix},
B = \begin{pmatrix}
0 & 0 & 0 & 0 \\
0 & \boxed{0} & 0 & 0 \\
0 & 0 & 0 & 0 \\
\end{pmatrix},
C = \begin{pmatrix}
0 & 0 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 \\
\end{pmatrix} \\
ABC = \begin{pmatrix}
0 & 0 & \boxed{0} & 0 & 0 \\
0 & 0 & 0 & 0 & 0 \\
\end{pmatrix} \\
B' = \begin{pmatrix}
0 & 0 & 0 & 0 \\
0 & \boxed{1} & 0 & 0 \\
0 & 0 & 0 & 0 \\
\end{pmatrix},
AB' = \begin{pmatrix}
0 & 1 & 0 & 0 \\
0 & 0 & 0 & 0
\end{pmatrix}
\implies AB'C = \begin{pmatrix}
0 & 0 & \boxed{1} & 0 & 0 \\
0 & 0 & 0 & 0 & 0 \\
\end{pmatrix} \\
}
$$
## 3b
$$
\displaylines{
\text{Can a change in } B_{13} \text{ affect } (ABC)_{22} \text{ ?} \\
\text{If so, give an example} \\
\\
AB_{ij} = \sum_{k=1}^{3} A_{ik}B_{kj} \\
ABC_{22} = \sum_{m=1}^{4} AB_{2m}C_{m2} = \sum_{m=1}^{4} \left( \sum_{k=1}^{3} A_{2k}B_{km} \right)C_{m2} = \\
= \dots + A_{21}B_{13}C_{32} + \dots \\
\implies \boxed{B_{13} \text{ can affect } (ABC)_{22}} \\
\text{Example:} \\
A = \begin{pmatrix}
0 & 0 & 0 \\
1 & 0 & 0 \\
\end{pmatrix},
B = \begin{pmatrix}
0 & 0 & \boxed{0} & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
\end{pmatrix},
C = \begin{pmatrix}
0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 \\
\end{pmatrix} \\
ABC = \begin{pmatrix}
0 & 0 & 0 & 0 & 0 \\
0 & \boxed{0} & 0 & 0 & 0 \\
\end{pmatrix} \\
B' = \begin{pmatrix}
0 & 0 & \boxed{1} & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
\end{pmatrix},
AB' = \begin{pmatrix}
0 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 \\
\end{pmatrix} \implies AB'C = \begin{pmatrix}
0 & 0 & 0 & 0 & 0 \\
0 & \boxed{1} & 0 & 0 & 0 \\
\end{pmatrix}
}
$$
---

## 4a
$$
\displaylines{
\text{Given: } A, B \in \mathbb{F}^{n\times n} \\
\text{Prove: } tr(A+B) = tr(A) + tr(B) \\
\\
tr(A+B) = \sum_{i=1}^{n} (A+B)_{ii} = \sum_{i=1}^{n} (A_{ii}+B_{ii}) = \\
= \sum_{i=1}^{n} A_{ii} + \sum_{i=1}^{n} B_{ii} = tr(A) + tr(B) \\
\implies \boxed{tr(A+B) = tr(A) + tr(B)}
}
$$
## 4b
$$
\displaylines{
\text{Given: } A \in \mathbb{F}^{m\times n}, B \in \mathbb{F}^{n\times m} \\
\text{Prove: } tr(AB) = tr(BA) \\
\\
tr(AB) = \sum_{i=1}^{m} (AB)_{ii} = \sum_{i=1}^{m} \left( \sum_{k=1}^{n} A_{ik}B_{ki} \right) = \sum_{k=1}^{n} \left( \sum_{i=1}^{m} A_{ik}B_{ki} \right) = \\
= \sum_{k=1}^{n} \left( \sum_{i=1}^{m} B_{ki}A_{ik} \right) = \sum_{k=1}^{n} BA_{kk} = tr(BA) \\
\implies \boxed{tr(AB) = tr(BA)}
}
$$
---

## 5a
$$
\displaylines{
\text{Given: } \alpha \in \mathbb{F}; A \in \mathbb{F}^{m\times n} \\
\text{Prove: } (\alpha \cdot A)^{T} = \alpha \cdot A^{T} \\
\\
\left\{\begin{array}{}
(\alpha \cdot A)^{T}_{ji} = (\alpha \cdot A)_{ij} & = \alpha \cdot A_{ij} \\
\alpha \cdot A^{T}_{ji}  & = \alpha \cdot A_{ij}
\end{array}\right. \\
\implies (\alpha \cdot A)^{T}_{ji} = \alpha \cdot A^{T}_{ji} \implies \boxed{(\alpha \cdot A)^{T} = \alpha \cdot A^{T}} \\
}
$$
---

## 5b
$$
\displaylines{
\text{Given: } A \in \mathbb{F}^{m\times n}; B \in \mathbb{F}^{n\times p} \\
\text{Prove: } (AB)^{T} = B^{T}A^{T} \\
\\
(AB)^{T}_{ji} = \sum_{k=1}^{n} A_{ik}B_{kj} = \sum_{k=1}^{n} A^{T}_{ki}B^{T}_{jk} = \sum_{k=1}^{n} B^{T}_{jk}A^{T}_{ki} = (B^{T}A^{T})_{ji} \\
\implies (AB)^{T}_{ji} = (B^{T}A^{T})_{ji} \implies \boxed{(AB)^{T} = B^{T}A^{T}} \\
}
$$
---

## 5c
$$
\displaylines{
\text{Given: } A \in \mathbb{R}^{n\times n} \\
\text{Prove or disprove: } A\cdot A^{T} = A^{T}\cdot A \\
\\
\text{Example:} \\
A = \begin{pmatrix}
1 & 0 & 1 \\
1 & 0 & 1 \\
1 & 0 & 1 \\
\end{pmatrix}, A^{T} = \begin{pmatrix}
1 & 1 & 1 \\
0 & 0 & 0 \\
1 & 1 & 1 \\
\end{pmatrix} \\
AA^{T} = \begin{pmatrix}
2 & 2 & 2 \\
2 & 2 & 2 \\
2 & 2 & 2 \\
\end{pmatrix}, A^{T}A = \begin{pmatrix}
3 & 0 & 3 \\
0 & 0 & 0 \\
3 & 0 & 3  \\
\end{pmatrix} \neq AA^{T} \\
\implies \boxed{\text{Disproved}} \\
}
$$
---

## 6
$$
\displaylines{
\text{Given: } A \in \mathbb{R}^{n\times n} \\
\text{Prove: } \exists B, C \in \mathbb{R}^{n\times n}, B = B^{T}, C=-C^{T} : A = B+C \\
\\
\text{Three criteria must be met: } \\
\begin{array}{}
1. & B_{ij} = B_{ji}; B = f(A) \\
2. & C_{ij} = -C_{ji}; C = g(A) \\
3. & A = B + C \\
\end{array} \\
\text{Where $f(x), g(x)$ are some functions} \\
\text{Example: } \\
B = \frac{A+A^{T}}{2}, C = \frac{A-A^{T}}{2} \\
B_{ij} = \left( \frac{A+A^{T}}{2} \right)_{ij} = \frac{A_{ij} + A_{ji}}{2} = \frac{A_{ji} + A_{ij}}{2} = \left( \frac{A+A^{T}}{2} \right)_{ji} = B_{ji} \\ \implies \boxed{B = B^{T}} \\
C_{ij} = \left( \frac{A-A^{T}}{2} \right)_{ij} = \frac{A_{ij} - A_{ji}}{2} = \frac{-(A_{ji} - A_{ij})}{2} = \left( \frac{-(A-A^{T})}{2} \right)_{ji} = -C_{ji} \\
\implies \boxed{C = -C^{T}} \\
B + C = \frac{A+A^{T}}{2} + \frac{A-A^{T}}{2} = \frac{2A}{2} = A \\
\implies \boxed{B = B^{T}, C = -C^{T}, A = B+C}
}
$$
---

$$
\displaylines{
\text{Matrices $A,B$ are called "commuting" if } AB=BA \\
\\
\text{Given: } A,B  \in \mathbb{R}^{n\times n} \\
}
$$
## 7a
$$
\displaylines{
\text{Prove or disprove: } (A = -A^{T}, B = -B^{T}) \implies (A+B) = -(A+B)^{T} \\
\\
A_{ij} = -A_{ji} \\
B_{ij} = -B_{ji} \\
(A+B)_{ij} = A_{ij} + B_{ij} = (-A_{ji}) + (-B_{ji}) = -(A_{ji} + B_{ji}) = -(A+B)_{ji} \\
\implies (A+B)_{ij} = -(A+B)_{ji} \implies \boxed{A+B = -(A+B)^{T}}
}
$$

## 7b
$$
\displaylines{
\text{Prove or disprove: } AB = -(AB)^{T} \implies AB = BA \\
\\
\text{Example:} \\
A = \begin{pmatrix}
0 & 0 & 1 \\
0 & 1 & 0 \\
1 & 0 & 0 \\
\end{pmatrix}, B = \begin{pmatrix}
-1 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 1 \\
\end{pmatrix} \\
AB = \begin{pmatrix}
0 & 0 & 1 \\
0 & 0 & 0 \\
-1 & 0 & 0 \\
\end{pmatrix}, (AB)^{T} = \begin{pmatrix}
0 & 0 & -1 \\
0 & 0 & 0 \\
1 & 0 & 0 \\
\end{pmatrix} = -AB \\
BA = \begin{pmatrix}
0 & 0 & -1 \\
0 & 0 & 0 \\
1 & 0 & 0 \\
\end{pmatrix} \neq AB \implies \boxed{\text{Disproved}} \\
}
$$
## 7c
$$
\displaylines{
\text{Given: } A=A^{T}, B=B^{T} \\
\text{Prove or disprove: } AB=(AB)^{T} \iff AB = BA \\
\\
1. \quad AB=(AB)^{T} \implies AB = BA \\
AB = (AB)^{T} \implies (AB)_{ij} = (AB)^{T}_{ij} = (AB)_{ji} = \sum_{k=1}^{n} A_{jk}B_{ki} = \\
= \sum_{k=1}^{n} B^{T}_{ki}A^{T}_{jk} = \sum_{k=1}^{n} B_{ik}A_{kj} = (BA)_{ij} \\
AB = (AB)^{T} \implies (AB)_{ij} = (BA)_{ij} \implies AB = BA \\
\boxed{AB = (AB)^{T} \implies AB = BA} \\
2. \quad AB = BA \implies AB = (AB)^{T} \\
AB = BA \implies (AB)_{ij} = (BA)_{ij} = \sum_{k=1}^{n} B_{ik}A_{kj} = \sum_{k=1}^{n} B^{T}_{ik}A^{T}_{kj} = \\
= \sum_{k=1}^{n} A_{jk}B_{ki} = (AB)_{ji} \\
AB = BA \implies (AB)_{ij} = (AB)_{ji} \implies AB = (AB)^{T} \\
\boxed{AB = BA \implies AB = (AB)^{T}} \\
\\
1. \text{ and } 2. \implies \boxed{AB = (AB)^{T} \iff AB = BA}
}
$$
---

