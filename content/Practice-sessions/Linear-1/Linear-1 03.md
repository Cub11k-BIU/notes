---
{"publish":true,"created":"13/11/24, 13:11","modified":"2026-03-24T14:59:26.998+02:00","tags":["Academia","Practice","Linear-1"],"cssclasses":""}
---

# Linear-1 3
### Matrix addition
$$
\displaylines{
A \in \mathbb{F}^{n\cdot m}; B \in \mathbb{F}^{n\cdot m} \\
C=A\pm B \in \mathbb{F}^{n\cdot m} \\
C_{ij} = A_{ij} \pm B_{ij}
}
$$
---
### Matrix multiplication
$$
\displaylines{
A \in \mathbb{F}^{m\cdot n}; B \in \mathbb{F}^{n\cdot p} \\
AB \in \mathbb{F}^{m\cdot p} \\
AB_{ij} = \sum_{k=1}^{n} a_{ik}b_{kj} \\ 
}
$$
---
### Properties of matrix multiplication
$$
(AB)C = A(BC)
$$
$$
(A+B)C = AC + BC
$$
$$
C(A+B) = CA + CB
$$
$$
\alpha (AB) = (\alpha A)B = A(\alpha B)
$$
---
### Special matrices
#### Identity matrix
$$
I_{n} = \begin{cases}
1  & : i = j \\
0  & : i \neq j
\end{cases}
$$

#### Scalar matrix
$$
\alpha I = \begin{cases}
\alpha  & : i = j \\
0  & : i \neq j
\end{cases}
$$

#### Diagonal matrix
$$
D = \begin{cases}
d_{ii}  & : i = j \\
0  & : i \neq j
\end{cases}
$$

#### Upper triangle matrix
$$
U = \begin{cases}
a_{ij} & : i \leq j \\
0   & : i > j
\end{cases}
$$

#### Lower triangle matrix
$$
L = \begin{cases}
a_{ij}  & : i \geq j \\
0  & : i < j
\end{cases}
$$
---
### Exercise
$$
\displaylines{
A \in \mathbb{F}^{m\cdot n} \\
\text{Prove: } AI_{n} = I_{m}A = A
}
$$
$$
\displaylines{
(AI_{n})_{ij} = \sum_{k=1}^{n} A_{ik}I_{kj} = A_{ij}I_{jj} = A_{ij}
}
$$
---
### Exercise
$$
\displaylines{
A, B \in \mathbb{F}^{n\cdot n}; A,B \text{ - upper-triangle matrices} \\
\text{Prove: } AB \text{ - upper-triangle matrix}
}
$$
$$
\displaylines{
\forall i > j: \\
(AB)_{ij} = \sum_{k=1}^{n} A_{ik}B_{kj} = \sum_{k=1}^{i-1} A_{ik}B_{kj} + \sum_{k=i}^{n} A_{ik}B_{kj} \\
\forall k < i : A_{ik} = 0 \implies \sum_{k=1}^{i-1} A_{ik}B_{kj} = 0 \\
\forall k \geq i : k \geq i > j \implies B_{kj} = 0 \implies \sum_{k=i}^{n} A_{ik}B_{kj} = 0 \\
\implies \forall i > j : (AB)_{ij} = 0 + 0 = 0 \implies AB \text{ - upper-triangle matrix}
}
$$
---
### Matrix trace
$$
\displaylines{
A \in \mathbb{F}^{n\cdot n} \\
tr(A) = \sum_{i=1}^{n} A_{ii} 
}
$$
---
### Properties of matrix trace
$$
\displaylines{
tr(A+B) = tr(A) + tr(B) \\
tr(\alpha A) = \alpha \cdot tr(A) \\
tr(AB) = tr(BA)
}
$$
---
### Exercise
$$
\displaylines{
A \in \mathbb{F}^{m\cdot n}; B \in \mathbb{F}^{n\cdot m}\\
\text{Prove: } tr(AB) = tr(BA)
}
$$
$$
\displaylines{
tr(AB) = \sum_{i=1}^{m} (AB)_{ii} = \sum_{i=1}^{m} \left( \sum_{j=1}^{n} A_{ij}B_{ji} \right) \\
tr(BA) = \sum_{j=1}^{n} (BA)_{jj} = \sum_{j=1}^{n} \left( \sum_{i=1}^{m} B_{ji}A_{ij} \right) = \sum_{j=1}^{n} \left( \sum_{i=1}^{m} A_{ij}B_{ji} \right) = \\
= \sum_{i=1}^{m} \left( \sum_{j=1}^{n} A_{ij}B_{ji} \right) = tr(AB)
}
$$
---
### Matrix transposition
$$
\displaylines{
A \in \mathbb{F}^{n\cdot m} \\
A^{T} \in \mathbb{F}^{m\cdot n} \\
(A^{T})_{ij} = A_{ji}
}
$$
---
### Properties of transposition
$$
\displaylines{
(A^{T})^{T} = A \\
(A+B)^{T} = A^{T} + B^{T} \\
\forall A \in \mathbb{F}^{m\cdot n} : AA^{T}, A^{T}A \in \mathbb{F}^{k\cdot k} \\
(AB)^{T} = B^{T}A^{T} \\
\forall A \in \mathbb{F}^{m\cdot n} : tr(AA^{T}) = 0 \leftrightarrow A = 0 \\
\forall A \in \mathbb{F}^{n\cdot n} : tr(A^{T}) = tr(A)
}
$$
---
### Exercise
$$
\text{Prove: } \forall A \in \mathbb{F}^{m\cdot n} : tr(AA^{T}) = 0 \leftrightarrow A = 0
$$
$$
\displaylines{
1. \space A = 0 \implies AA^{T} = 0 \implies tr(AA^{T}) = 0 \\
2. \space tr(AA^{T}) = \sum_{i=1}^{m} \left( \sum_{j=1}^{n} A_{ij}A^{T}_{ji} \right) = \sum_{i=1}^{m} \left( \sum_{j=1}^{n} A_{ij}^{2} \right) \\
3. \space tr(AA^{T}) = 0 \implies \forall i \in [1, m], j \in [1, n] : A_{ij}^{2} = 0 \implies A_{ij} = 0 \implies A = 0
}
$$
---
### Matrix symmetry
$$
\displaylines{
A \in \mathbb{F}^{n\cdot n} \\
A = A^{T} \implies A \text{ is a symmetric matrix} \\
A = -A^{T} \implies A \text{ is an anti-symmetric matrix}
}
$$
---
### Exercise
$$
\text{Prove that there are no matrices } A,B \in \mathbb{R}^{n\cdot n} \text{ such as } AB - BA = I
$$
$$
\displaylines{
tr(I) = n \\
tr(AB - BA) = tr(AB) - tr(BA) = tr(AB) - tr(AB) = 0 \\
I = AB - BA \implies tr(I) = tr(AB - BA) \implies n = 0 \\
\implies \text{There are no such matrices } A, B
}
$$
---
