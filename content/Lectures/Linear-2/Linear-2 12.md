---
{"publish":true,"created":"23/06/25, 19:06","modified":"2025-11-21T21:10:14.534+02:00","tags":["Academia","Lecture","Linear-2"],"cssclasses":""}
---

$$
\displaylines{
A = PDP^{-1} \iff \text{Eigenvectors of $A$ form a basis of } \mathbb{F}^{n \times n} \\
A = \underbrace{ P }_{ [I]^{S}_{B} }D\underbrace{ P^{-1} }_{ [I]^{B}_{S} } \\
\\
\text{Change of basis might change distance, angle, etc. between vectors} \\
\text{We don't really want that, we would like to preserve them} \\
\text{So what we'd like to do is to make } P \text{ unitary} \\
}
$$
## Gram-Schmidt matrix of two bases #lemma 
$$
\displaylines{
\text{Let } B, \hat{B} \text{ be bases of } V \\
\text{Let } C = [I]^{\hat{B}}_{B} \\
\text{Then } G_{\hat{B}} = C^{T}G_{B}\overline{C} \\
\\
\text{Proof:} \\
\langle v, u \rangle = [v]_{B}^{T}G_{B}\overline{[u]_{B}} = ([I]^{\hat{B}}_{B}[v]_{\hat{B}})^{T}G_{B}\overline{[I]^{\hat{B}}_{B}[u]_{\hat{B}}} = [v]_{\hat{B}}^{T} \cdot C^{T}G_{B}\overline{C} \cdot \overline{[u]_{\hat{B}}} \\
= \langle v, u \rangle = [v]_{\hat{B}}^{T}G_{\hat{B}}\overline{[u]_{\hat{B}}} \\
\implies [v]_{\hat{B}}^{T} \cdot C^{T}G_{B}\overline{C} \cdot \overline{[u]_{\hat{B}}} = [v]_{\hat{B}}^{T} \cdot G_{\hat{B}} \cdot \overline{[u]_{\hat{B}}} \\
\text{Let } \hat{B} = \Set{ v_{1}, \dots, v_{n} } \\
\forall i, j \in [1, n]: [v_{i}]_{\hat{B}}^{T} \cdot C^{T}G_{B}\overline{C} \cdot \overline{[v_{j}]_{\hat{B}}} = [v_{i}]_{\hat{B}}^{T} \cdot G_{\hat{B}} \cdot \overline{[v_{j}]_{\hat{B}}} \\
\implies \forall i, j \in [1, n]: e_{i}^{T} \cdot C^{T}G_{B}\overline{C} \cdot e_{j} = e_{i}^{T} \cdot G_{\hat{B}} \cdot e_{j} \\
\implies \forall i, j \in [1, n]: (C^{T}G_{B}\overline{C})_{ij} = (G_{\hat{B}})_{ij} \\
\implies \boxed{ C^{T}G_{B}\overline{C} = G_{\hat{B}} } \\
}
$$
## Basis change matrix unitarity #lemma 
$$
\displaylines{
\text{Let } B, \hat{B} \text{ be orthonormal bases} \\
\text{Then } C = [I]^{\hat{B}}_{B} \text{ is unitary} \\
\\
\text{Proof:} \\
G_{\hat{B}} = C^{T}G_{B}\overline{C} \\
B, \hat{B} \text{ are orthonormal} \implies G_{\hat{B}} = G_{B} = I \\
\implies C^{T}\overline{C} = I \implies C^{*}C = I \implies \boxed{ C \text{ is unitary} } \\
}
$$
## Matrix unitary triangularization #definition 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
A \text{ is then called unitary triangularizable if exists } P \text{ unitary such that} \\
A = PTP^{-1} = PTP^{*} \text{ where } T \text{ is triangular} \\
}
$$
## Linear operator unitary triangularization #definition 
$$
\displaylines{
\text{Let } T: V \to V \text{ be a linear operator} \\
T \text{ is then called unitary triangularizable if exists} \\
\text{orthonormal basis } B \text{ such that } [T]^{B}_{B} \text{ is triangular} \\
}
$$
## Choice of basis for linear operator unitary triangularization #lemma 
$$
\displaylines{
\text{We can choose any basis for linear operator triangularization} \\
\\
\text{Proof:} \\
\dots \\
}
$$
## Normal triangular matrix is diagonal #lemma 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
A \text{ is normal and triangular} \iff A \text{ is diagonal} \\
\\
\text{Proof:} \\
\boxed{ \impliedby } \text{ Is trivial} \\
\\
\boxed{ \implies } \text{ Let } A \text{ be normal and triangular} \\
}
$$
## Linear operator unitary triangularizability criterion #theorem 
$$
\displaylines{
\text{Let } T: V \to V \text{ be a linear operator} \\
\text{Then } T \text{ is unitary triangularizable} \iff \text{Its characteristic polynomial is factorizable} \\
\text{into linear factors} \\
\\
\text{Proof:} \\
\boxed{ \implies } \text{ Let } T \text{ be unitary triangularizble} \\
\implies T \text{ is triangularizable} \\
\implies \boxed{ \text{Its characteristic polynomial is factorizable into linear factors} } \\
\\
\boxed{ \impliedby } \text{ Let characteristic polynomial of } T \text{ be factorizable into linear factors} \\
\implies T \text{ is triangularizable} \\
\implies \exists B \text{ basis of } V: [T]^{B}_{B} \text{ is upper triangular} \\
\text{Let } B = \Set{ v_{1}, \dots, v_{n} } \\
\text{Let } \hat{B} \text{ be a basis obtained by Gram-Schmidt orthonormalization process on } B \\
\hat{B} = \Set{ u_{1}, \dots, u_{n} } \\
[T]^{\hat{B}}_{\hat{B}} = [I]^{B}_{\hat{B}}[T]^{B}_{B}[I]^{\hat{B}}_{B} \\
\\
\text{Note: this follows by definition of Gram-Schmidt process} \\
\forall i \in [1, n]: u_{i} = \sum_{j=1}^{i} \alpha_{j}v_{j} \implies [u_{i}]_{B} = \sum_{j=1}^{i} \alpha_{j}e_{j} \\
\text{Or in other words: } \forall i \in [1, n]: sp\Set{ v_{1}, \dots, v_{i} } = sp\Set{ u_{1}, \dots, u_{i} } \\
\implies [I]^{B}_{\hat{B}}, [I]^{\hat{B}}_{B} \text{ are upper triangular} \\
\implies [T]^{\hat{B}}_{\hat{B}} \text{ is also triangular} \implies \boxed{ T \text{ is unitary triangularizable} } \\
}
$$

---
## Matrix unitary diagonalization #definition 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
A \text{ is then called unitary diagonalizable if exists } P \text{ unitary such that} \\
A = PTP^{-1} = PDP^{*} \text{ where } D \text{ is diagonal} \\
}
$$
## Unitary linear operator diagonalization #definition 
$$
\displaylines{
\text{Let } T: V \to V \text{ be a linear operator} \\
T \text{ is then called unitary diagonalizable if exists} \\
\text{orthonormal basis } B \text{ such that } [T]^{B}_{B} \text{ is diagonal} \\
}
$$
## Choice of basis for linear operator diagonalization #lemma 
$$
\displaylines{
\text{We can choose any basis for linear operator diagonalization} \\
\\
\text{Proof:} \\
\dots \\
}
$$
## Linear operator unitary diagonalizability criterion #theorem 
$$
\displaylines{
\text{Let } T: V \to V \text{ be a linear operator} \\
\text{Then } T \text{ is unitary diagonalizable} \iff \text{Its characteristic polynomial is factorizable} \\
\text{into linear factors and } T \text{ is normal} \\
\\
\text{Proof:} \\
\boxed{ \implies } \text{ Let } T \text{ be unitary digonalizable} \\
\implies \exists B \text{ orthonormal basis of } V: [T]^{B}_{B} \text{ is diagonal} \\
\implies [T]^{B}_{B} \text{ is triangular} \implies T \text{ is also unitary triangularizable} \\
\implies \boxed{ \text{Its characteristic polynomial is factorizable into linear factors} } \\
A = [T]^{B}_{B} = \begin{pmatrix}
\alpha_{1} \\
 & \alpha_{2} \\
 &  & \ddots \\
 &  &  & \alpha_{n} \\
\end{pmatrix} \\
\implies A^{*} = \overline{A^{T}} = \overline{A} = \begin{pmatrix}
\overline{\alpha_{1}} \\
 & \overline{\alpha_{2}} \\
 &  & \ddots \\
 &  &  & \overline{\alpha_{n}} \\
\end{pmatrix} \\
\implies AA^{*} = A^{*}A = \begin{pmatrix}
\alpha_{1}\overline{\alpha_{1}} \\
 & \alpha_{2}\overline{\alpha_{2}} \\
 &  & \ddots \\
 &  &  & \alpha_{n}\overline{\alpha_{n}} \\
\end{pmatrix} \\
\implies \boxed{ T \text{ is normal} } \\
\\
\boxed{ \impliedby } \text{ Let } \text{Characteristic polynomial of $T$ is factorizable into linear factors} \\
\text{and } T \text{ is normal} \\
T \text{ is unitary triangularizable } \\
\implies \exists B \text{ orthonormal basis of } V: [T]^{B}_{B} \text{ is normal and triangular} \implies [T]^{B}_{B} \text{ is diagonal} \\
\implies \boxed{ T \text{ is unitary diagonalizable} } \\
}
$$
## Matrix unitary diagonalizability criterion #theorem 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Then } A \text{ is unitary diagonalizable} \iff \text{Its characteristic polynomial is factorizable} \\
\text{into linear factors and } A \text{ is normal} \\
}
$$
---
## Real-value matrix orthogonal diagonalization #definition 

$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \\
A \text{ is then called orthogonal triangularizable if exists } P \text{ orthogonal such that} \\
A = PTP^{-1} = PDP^{*} \text{ where } D \text{ is diagonal} \\
\\
\text{Reminder: matrix is called orthogonal if it is unitary and real-value} \\
}
$$
## Real-value matrix orthogonal diagonalizability criterion #theorem 
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \\
\text{Then } A \text{ is orthogonal diagonalizable} \iff \text{Its characteristic polynomial is factorizable} \\
\text{into linear factors and } A \text{ is normal} \\
\\
\text{Proof:} \\
\boxed{ \implies } \text{ Let } A \text{ be orthogonal diagonalizable} \\
A = PDP^{-1} \\
P \text{ is orthogonal} \implies P \text{ is unitary} \implies A \text{ is unitary diagonalizable} \implies \boxed{ \text{See theorem above} } \\
\\
\boxed{ \impliedby } \text{ Let } \text{Characteristic polynomial of $A$ is factorizable} \\
\text{into linear factors and } A \text{ is normal} \\
\implies A \text{ is unitary diagonalizable} \\
\implies \exists P \text{ unitary}: A = PDP^{-1} \\
A \in \mathbb{R}^{n \times n}, D \in \mathbb{R}^{n \times n} \\
\forall v \text{ eigenvector of } A: v \in \mathbb{R}^{n} \implies P \in \mathbb{R}^{n \times n} \\
\implies P \text{ is orthogonal} \implies \boxed{ A \text{ is orthogonal diagonalizable} } \\
}
$$
## Real-value matrix orthogonal diagonalizability alternative criterion #definition 
$$
\displaylines{
A \in \mathbb{R}^{n \times n} \\
\text{Then } A \text{ is orthogonal diagonalizable} \iff A \text{ is symmetric} \\
\\
\text{Proof:} \\
\boxed{ \implies } \text{ Let } A \text{ be orthogonal diagonalizable} \\
\exists P \text{ orthogonal}: A = PDP^{-1} = PDP^{T} \\
\implies A^{T} = (PDP^{T})^{T} = (P^{T})^{T}D^{T}P^{T} = PDP^{T} = A \\
\implies \boxed{ A \text{ is symmetric} } \\
\\
\boxed{ \impliedby } \text{ Let } A \text{ be symmetric} \\
\implies A = A^{T} = A^{*} \implies A \text{ is hermitian} \\
\implies AA^{*} = A^{2} = A^{*}A \implies \boxed{ A \text{ is normal} } \\
A \text{ is normal} \implies \text{All its eigenvalues are real} \implies \text{Characteristic polynomial of } A \\
\text{is factorizable into linear factors} \implies \boxed{ A \text{ is orthogonal diagonalizable} } \\
}
$$
---
## Unitary diagonalization algorithm #definition 
$$
\displaylines{
& \text{Let } A \in \mathbb{F}^{n \times n} \\
1. & \text{Check if } A \text{ is unitary diagonalizable} \\
2. & \text{Find eigenvalues and eigenvectors of } A \\
3. & \text{For each eigenvalue, use Gram-Schmidt orthonormalization process on } E_{\lambda} \\
4. & \text{Construct columns of } P \text{ with resulting eigenvectors} \\
5. & \text{Proceed as with "regular" diagonalization} \\
}
$$
## Orthogonal diagonalization algorithm #definition 
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \\
\text{Orthogonal diagonalization algorithm is then identical to a unitary diagonalization one} \\
}
$$
---
$$
\displaylines{
\text{Note: can read about spectral decomposition} \\
}
$$
---
