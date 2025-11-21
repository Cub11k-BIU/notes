---
{"publish":true,"created":"25/03/25, 10:03","modified":"2025-11-21T21:10:14.494+02:00","tags":["Academia","Lecture","Linear-2"],"cssclasses":""}
---

## Commutativity of determinant #lemma 
$$
\displaylines{
\forall A, B \in \mathbb{F}^{n \times n} \\
\lvert AB \rvert = \lvert BA \rvert \\
\\
\text{Proof:} \\
\lvert AB \rvert = \lvert A \rvert \cdot \lvert B \rvert = \lvert B \rvert \cdot \lvert A \rvert = \lvert BA \rvert \\
}
$$
## Determinant of n matrix product #theorem 
$$
\displaylines{
\forall \Set{ A_{i} }_{i \in I} \subseteq \mathbb{F}^{n \times n} \\
\left\lvert  \prod_{i \in I} A_{i}  \right\rvert = \prod_{i \in I} \lvert A_{i} \rvert \\
\\
\text{Proof:} \\
\text{By induction, starting from the identical lemma for two matrices} \\
}
$$
## Determinant of transpose #lemma 
$$
\displaylines{
\forall A \in \mathbb{F}^{n \times n} \\
\lvert A \rvert = \lvert A^{T} \rvert \\
\\
\text{Proof:} \\
\text{Let } P: \alpha R_{i} \\
P(I) \text{ is diagonal} \\
\implies P(I) = P(I)^{T} \implies \lvert P(I) \rvert = \lvert P(I)^{T} \rvert \\
\text{Let } P: R_{i} \leftrightarrow R_{j} \\
P(I) = P(I)^{T} \implies \lvert P(I) \rvert = \lvert P(I)^{T} \rvert \\
\text{Let } P: R_{i} + \alpha R_{j} \\
P(I) \text{ is triangular} \implies P(I)^{T} \text{ is triangular} \\
\text{Diagonals of } P(I) \text{ and } P(I)^{T} \text{ are the same} \\
\implies \lvert P(I) \rvert = \lvert P(I)^{T} \rvert \\
\\
\text{Let } A \text{ be non-invertible} \\
\implies rank(A^{T}) = rank(A) < n \\
\implies A^{T} \text{ is non-invertible} \implies \lvert A^{T} \rvert = 0 = \lvert A \rvert \\
\\
\text{Let } A \text{ be invertible} \\
\implies A = \prod_{i=1}^{k} P_{i}(I) \implies \lvert A \rvert = \left\lvert  \prod_{i=1}^{k} P_{i}(I)  \right\rvert = \prod_{i=1}^{k} \lvert P_{i}(I) \rvert \\
A^{T} = \left( \prod_{i=1}^{k} P_{i}(I) \right)^{T} = \prod_{i=1}^{k} P_{k+1-i}(I)^{T} \\
\implies \lvert A^{T} \rvert = \left\lvert  \prod_{i=1}^{k} P_{k+1-i}(I)^{T}  \right\rvert = \prod_{i=1}^{k} \lvert P_{k+1-i}(I)^{T} \rvert = \\
= \prod_{i=1}^{k} \lvert P_{k+1-i}(I) \rvert = \prod_{i=1}^{k} \lvert P_{i}(I) \rvert \\
\implies \lvert A^{T} \rvert = \prod_{i=1}^{k} \lvert P_{i}(I) \rvert = \lvert A \rvert \\
}
$$
### Corollary
$$
\displaylines{
\text{Elementary column operations affect determinant in the same way row operations do} \\
}
$$
## Determinant of an inverse #lemma 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Let } \exists A^{-1} \\
\implies \lvert A \rvert \neq 0 \\
\lvert AA^{-1} \rvert = \lvert A \rvert \cdot \lvert A^{-1} \rvert = \lvert I \rvert = 1 \\
\implies \lvert A^{-1} \rvert = \frac{1}{\lvert A \rvert } \\
}
$$
## Summary
$$
\displaylines{
\exists A^{-1} \iff \lvert A \rvert \neq 0 \\
\lvert AB \rvert = \lvert A \rvert \cdot \lvert B \rvert \\
\lvert A \rvert = \lvert A^{T} \rvert \\
\lvert \alpha A \rvert = \alpha^{n}\lvert A \rvert \\
\lvert A^{-1} \rvert = \lvert A \rvert ^{-1} \\
}
$$
## Matrix minor #definition 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Let } i, j \in [1, n] \\
\text{Minor } M_{ij}(A) \text{ is a matrix,} \\
\text{obtained by removing row } i \text{ and column } j \text{ from matrix } A \\
A = \begin{pmatrix}
1 & 2 & \boxed{ 3 } \\
4 & 5 & 6 \\
7 & 8 & 9 \\
\end{pmatrix} \implies M_{13}(A) = \begin{pmatrix}
4 & 5 \\
7 & 8 \\
\end{pmatrix} \\
}
$$
## Using minors to calculate determinant #lemma 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\\
\forall i \in [1, n]: \lvert A \rvert = \sum_{j=1}^{n} (-1)^{i+j} a_{ij}\lvert M_{ij}(A) \rvert \\
\\
\forall j \in [1, n]: \lvert A \rvert = \sum_{i=1}^{n} (-1)^{i+j} a_{ij}\lvert M_{ij}(A) \rvert \\
}
$$
### Example
$$
\displaylines{
A = \begin{pmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9 \\
\end{pmatrix} \\
\lvert A \rvert = 1\begin{vmatrix}
5 & 6 \\
8 & 9
\end{vmatrix} - 2\begin{vmatrix}
4 & 6 \\
7 & 9 \\
\end{vmatrix} + 3\begin{vmatrix}
4 & 5 \\
7 & 8 \\
\end{vmatrix} = -3 + 12 - 9 = 0 \\
\\
\lvert A \rvert = - 2\begin{vmatrix}
4 & 6 \\
7 & 9 \\
\end{vmatrix} + 5\begin{vmatrix}
1 & 3 \\
7 & 9 \\
\end{vmatrix} - 8\begin{vmatrix}
1 & 3 \\
4 & 6 \\
\end{vmatrix} = 12 - 60 + 48 = 0 \\
}
$$
## Determinant of a linear operator (transformation) #lemma 
$$
\displaylines{
\text{Let } V \text{ be a vector space over } \mathbb{F} \\
\text{Let } T: V \to V \text{ be a linear transformation} \\
\text{Let } B \text{ be a basis of } V \\
\left\lvert T \right\rvert \coloneqq \left\lvert [T]^{B}_{B} \right\rvert \\
\forall B, C \text{ basis of } V: \left\lvert [T]^{B}_{B} \right\rvert = \left\lvert [T]^{C}_{C} \right\rvert \\
\\
\text{Proof:} \\
[T]^{B}_{B} = [I]^{C}_{B}[T]^{C}_{C}[I]^{B}_{C} \\
\implies \left\lvert [T]^{B}_{B} \right\rvert = \left\lvert [I]^{C}_{B}[T]^{C}_{C}[I]^{B}_{C} \right\rvert = \left\lvert [I]^{C}_{B} \right\rvert \cdot \left\lvert [T]^{C}_{C} \right\rvert \cdot \left\lvert [I]^{B}_{C} \right\rvert = \\
= \left\lvert [T]^{C}_{C} \right\rvert \cdot \left\lvert [I]^{C}_{B}[I]^{B}_{C} \right\rvert = \left\lvert [T]^{C}_{C} \right\rvert \cdot \left\lvert [I]^{B}_{B} \right\rvert = \left\lvert [T]^{C}_{C} \right\rvert \\
}
$$
## Eigenvalues and eigenvectors #definition 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\lambda \in \mathbb{F} \text{ is called an Eigenvalue of } A \text{ if} \\
\exists v \neq 0 \in \mathbb{F}^{n}: Av = \lambda v \\
v \text{ is then called an Eigenvector of } A \text{ in respect to Eigenvalue } \lambda \\
}
$$
### Example
$$
\displaylines{
\begin{pmatrix}
2 & 3 \\
0 & 4 \\
\end{pmatrix}\begin{pmatrix}
3 \\
2 \\
\end{pmatrix} = \begin{pmatrix}
12 \\
8 \\
\end{pmatrix} = 4\begin{pmatrix}
3 \\
2 \\
\end{pmatrix} \\
\lambda = 4, v = \begin{pmatrix}
3 \\
2 \\
\end{pmatrix} \\
}
$$
## Determinant in relation to eigenvalue #lemma 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\lambda \text{ is an Eigenvalue of } A \iff \left\lvert \lambda I - A \right\rvert = 0 \\
\\
\text{Proof:} \\
\lambda \text{ is an Eigenvalue of } A \\
\iff \exists v \neq 0 \in \mathbb{F}^{n}: Av = \lambda v \\
\iff \exists v \neq 0 \in \mathbb{F}^{n}: \lambda v - Av = 0 \\
\iff \exists v \neq 0 \in \mathbb{F}^{n}: (\lambda I - A)v = 0 \\
\iff N(\lambda I - A) \neq \Set{ 0 } \\
\iff \not\exists (\lambda I - A)^{-1} \\
\iff \left\lvert \lambda I - A \right\rvert = 0 \\
}
$$
### Corollary
$$
\displaylines{
\not\exists A^{-1} \iff 0 \text{ is an Eigenvalue of A} \\
\\
\exists v \neq 0 \in \mathbb{F}^{n}: Av = 0v = 0 \\
\iff N(A) \neq \Set{ 0 } \\
\iff \not\exists A^{-1} \\
\\
\left\lvert A \right\rvert = 0 \iff \left\lvert -A \right\rvert = 0 \iff \left\lvert 0I - A \right\rvert = 0 \iff 0 \text{ is an Eigenvalue of } A \\
}
$$
### Example
$$
\displaylines{
A = \begin{pmatrix}
2 & 3 \\
0 & 4 \\
\end{pmatrix} \\
\left\lvert \lambda I - A \right\rvert  = \begin{vmatrix}
\lambda - 2 & 3 \\
0 & \lambda - 4 \\
\end{vmatrix} = (\lambda-2)(\lambda-4) = 0 \\
\implies \left[\begin{array}{}
\lambda = 2 \\
\lambda = 4 \\
\end{array}\right. \\
\text{How do we find Eigenvectors in respect to these Eigenvalues?} \\
N(\lambda I - A) = \Set{ v | (\lambda I-A)v = 0 } \\
\implies \text{Eigenvectors in respect to Eigenvalue } \lambda \\
\text{is a set of non-zero solutions to homogeneous system of equations } (\lambda I - A)v = 0 \\
\text{Let } \lambda = 2 \\
\left(\begin{array}{cc|c}
0 & -3 & 0 \\
0 & -2 & 0 \\
\end{array}\right) \to \left(\begin{array}{cc|c}
0 & 1 & 0 \\
0 & 0 & 0 \\
\end{array}\right) \implies v \in sp\Set{ \begin{pmatrix}
1 \\
0 \\
\end{pmatrix} } \\
\text{Let } \lambda = 4 \\
\left(\begin{array}{cc|c}
2 & -3 \\
0 & 0 \\
\end{array}\right) \implies v \in sp\Set{ \begin{pmatrix}
3 \\
2 \\
\end{pmatrix} } \\
}
$$
## Eigenspace #definition 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Let } \alpha \in \mathbb{F} \text{ be an Eigenvalue of } A \\
\text{Set of Eigenvectors in respect to } \alpha \text{, and zero vector, is then called Eigenspace} \\
E = \Set{ v | (\lambda I - A)v = 0 } = N(\lambda I - A) \\
}
$$
## Characteristic polynomial #definition 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Let } \lambda \in \mathbb{F} \\
P_{A}(\lambda) = \left\lvert \lambda I - A \right\rvert \text{ is called a characteristic polynomial of } A \\
}
$$
## Matrix similarity #definition 
$$
\displaylines{
\text{Let } A, B \in \mathbb{F}^{n \times n} \\
\text{Matrices } A, B \text{ are called similar if} \\
\exists P \in \mathbb{F}^{n \times n}: P^{-1}AP = B \\
\\
\text{Similarity is an equivalence relation:} \\
\text{Reflexive: } A = I^{-1}AI \\
\text{Symmetric: } P^{-1}AP = B \implies B = (P^{-1})^{-1}AP^{-1} \\
\text{Transitive: } B = P^{-1}AP, C = P_{1}^{-1}BP_{1} \implies C = P_{1}^{-1}P^{-1}APP_{1} = (PP_{1})^{-1}A(PP_{1}) \\
}
$$
## Similar matrix properties #lemma 
$$
\displaylines{
\text{Let } A, B \in \mathbb{F}^{n \times n} \\
\text{Let } A \sim B \\
\left\lvert A \right\rvert = \left\lvert B \right\rvert \\
tr(A) = tr(B) \\
rank(A) = rank(B) \\
P_{A}(\lambda) = P_{B}(\lambda) \\
}
$$
## Diagonalizable matrix #definition 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Let } D \text{ be a diagonal matrix } \in \mathbb{F}^{n \times n} \\
A \text{ is called diagonalizable} \\
\iff \exists P \in \mathbb{F}^{n \times n}: P^{-1}AP = D \\
}
$$
