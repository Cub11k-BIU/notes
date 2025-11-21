---
{"publish":true,"created":"08/04/25, 14:04","modified":"2025-11-21T21:10:25.224+02:00","tags":["Academia","Practice","Linear-2"],"cssclasses":""}
---

## Motivation behind diagonalization
$$
\displaylines{
A \sim D \\
A = P^{-1}DP \\
\underbrace{ A^{n} }_{ \text{Hard} } = (P^{-1}DP)^{n} = P^{-1}\underbrace{ D^{n} }_{ \text{Easy} }P \\
}
$$
## Diagonalizable matrix
$$
\displaylines{
A \text{ is called diagonalizable iff } \exists D: A \sim D \\
}
$$
## Diagonalizable matrix and eigenvectors
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
A \text{ is diagonalizable} \iff \exists B \text{ basis of } \mathbb{F}^{n}: \forall i \in [1, n]: Av_{i} = \lambda_{i}v_{i} \\
}
$$
---
$$
\displaylines{
A = \begin{pmatrix}
1 & 1 & 1 \\
0 & 2 & 1 \\
0 & 2 & 3 \\
\end{pmatrix} \in \mathbb{R}^{3 \times 3} \\
\text{Determine whether } A \text{ is diagonalizable} \\
\\
\text{Solution:} \\
\det(\lambda I - A) = \begin{vmatrix}
\lambda-1 & -1 & -1 \\
0 & \lambda-2 & -1 \\
0 & -2 & \lambda-3 \\
\end{vmatrix} = (\lambda-1)((\lambda-2)(\lambda-3) - 2) = (\lambda-1)^{2}(\lambda-4) \\
\lambda = 1 \implies \left(\begin{array}{ccc|c}
0 & -1 & -1 & 0 \\
0 & -1 & -1 & 0 \\
0 & -2 & -2 & 0 \\
\end{array}\right) \to \left(\begin{array}{ccc|c}
0 & 1 & 1 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
\end{array}\right) \implies E_{1} = sp\Set{ \begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
-1 \\
\end{pmatrix} } \\
\lambda = 4 \implies \left(\begin{array}{1}
3 & -1 & -1 & 0 \\
0 & -2 & -1 & 0 \\
0 & -2 & -1 & 0 \\
\end{array}\right) \to \left(\begin{array}{1}
3 & -1 & -1 & 0 \\
0 & 2 & 1 & 0 \\
0 & 0 & 0 & 0 \\
\end{array}\right) \implies E_{4} = sp\Set{ \begin{pmatrix}
1 \\
1 \\
2 \\
\end{pmatrix} } \\
P = \begin{pmatrix}
1 & 1 & 0 \\
0 & 1 & 1 \\
0 & 2 & -1 \\
\end{pmatrix} \implies D = \begin{pmatrix}
1 & 0 & 0 \\
0 & 4 & 0 \\
0 & 0 & 1 \\
\end{pmatrix} \\
}
$$
---
$$
\displaylines{
T: \mathbb{R}^{2} \to \mathbb{R}^{2} \\
B = \Set{ \begin{pmatrix}
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
1 \\
\end{pmatrix} } \\
T(v_{1}) = 2v_{1} \\
T(v_{2}) = v_{1} + v_{2} \\
\text{Determine whether } T \text{ is diagonalizable} \\
\\
\text{Solution:} \\
[T]^{B}_{B} = \begin{pmatrix}
2 & 1 \\
0 & 1 \\
\end{pmatrix} \\
P_{T}(\lambda) = (\lambda - 2)(\lambda - 1) \\
\implies T \text{ is diagonalizable} \\
E_{2} = sp\Set{ \begin{pmatrix}
1 \\
0 \\
\end{pmatrix} } \\
E_{1} = sp\Set{ \begin{pmatrix}
1 \\
-1 \\
\end{pmatrix} } \\
C_{B} = \Set{ \begin{pmatrix}
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
-1 \\
\end{pmatrix} } = \Set{ [d_{1}]_{B}, [d_{2}]_{B} } \implies D = \Set{ \begin{pmatrix}
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
-1 \\
\end{pmatrix} } \\
[T]^{C_{B}}_{C_{B}} = \begin{pmatrix}
2 & 1 \\
0 & 1 \\
\end{pmatrix} - \text{Not diagonal!} \\
[T]^{D}_{D} = \begin{pmatrix}
2 & 0 \\
0 & 1 \\
\end{pmatrix} - \text{Diagonal!} \\
}
$$
---
$$
\displaylines{
T: \mathbb{R}_{2}[x] \to \mathbb{R}_{2}[x] \\
B = \Set{ 1+x, x, x^{2} } \\
T(1+x) = -1 + x^{2} \\
T(x) = 1 + x^{2} \\
T(x^{2}) = 1 + 2x - x^{2} \\
\text{Determine whether } T \text{ is diagonalizable} \\
\\
\text{Solution:} \\
[T]^{B}_{B} = \begin{pmatrix}
-1 & 1 & 1 \\
1 & -1 & 1 \\
1 & 1 & -1 \\
\end{pmatrix} \\
P_{T}(\lambda) = \begin{vmatrix}
\lambda+1 & -1 & -1 \\
-1 & \lambda+1 & -1 \\
-1 & -1 & \lambda+1 \\
\end{vmatrix} = (\lambda-1)\begin{vmatrix}
1 & 1 & 1 \\
-1 & \lambda+1 & -1 \\
-1 & -1 & \lambda+1 \\
\end{vmatrix} = \\
= (\lambda-1)\begin{vmatrix}
1 & 1 & 1 \\
0 & \lambda+2 & 0 \\
0 & 0 & \lambda+2 \\
\end{vmatrix} = (\lambda-1)(\lambda+2)^{2} \\
\lambda = 1 \implies \left(\begin{array}{ccc|c}
0 & 0 & 0 & 0 \\
-1 & 2 & -1 & 0 \\
-1 & -1 & 2 & 0 \\
\end{array}\right) \implies E_{1} = sp\Set{ \begin{pmatrix}
1 \\
1 \\
1 \\
\end{pmatrix} } \\
\lambda = -2 \implies \left(\begin{array}{ccc|c}
0 & 0 & 0 & 0 \\
-1 & -1 & -1 & 0 \\
-1 & -1 & -1 & 0 \\
\end{array}\right) \implies E_{-2} = sp\Set{ \begin{pmatrix}
1 \\
0 \\
-1 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
-1 \\
0 \\
\end{pmatrix} } \\
\implies D = \Set{ 1+2x+x^{2}, 1 + x - x^{2}, 1 } \\
\implies [T]^{D}_{D} = \begin{pmatrix}
1 & 0 & 0 \\
0 & -2 & 0 \\
0 & 0 & -2 \\
\end{pmatrix} \\
}
$$
---
$$
\displaylines{
A = \begin{pmatrix}
1 & 0 & 0 & 0 \\
\pi & 2 & 0 & 0 \\
-1 & e & 3 & 0 \\
-\frac{1}{2} & \frac{3}{5} & \sqrt{ 3 } & 4 \\
\end{pmatrix} \\
B = \begin{pmatrix}
4 & 4 & 4 & 4 \\
0 & 1 & \pi & -e \\
0 & 0 & 2 & 3 \\
0 & 0 & 0 & 3 \\
\end{pmatrix} \\
\text{Determine whether } A \sim B \\
\\
\text{Solution:} \\
P_{A}(\lambda) = (\lambda-1)(\lambda-2)(\lambda-3)(\lambda-4) \\
P_{B}(\lambda) = (\lambda-1)(\lambda-2)(\lambda-3)(\lambda-4) \\
A \sim \begin{pmatrix}
1 & 0 & 0 & 0 \\
0 & 2 & 0 & 0 \\
0 & 0 & 3 & 0 \\
0 & 0 & 0 & 4 \\
\end{pmatrix} \sim B \implies A \sim B \\
}
$$
---
$$
\displaylines{
A = \begin{pmatrix}
3 & 0 & 0 & 0 \\
1 & 2 & 0 & 0 \\
0 & 0 & 2 & 0 \\
0 & a & 0 & b \\
\end{pmatrix} \\
\\
b = 2 \implies [A \text{ is diagonalizable} \iff a = 0] \\
b = 3 \implies [A \text{ is diagonalizable} \iff a = 0] \\
b \not\in \Set{ 2, 3 } \implies A \text{ is diagonalizable} \\
}
$$
---
$$
\displaylines{
A \in \mathbb{C}^{3 \times 3} \\
P_{A}(\lambda) = \lambda^{3} \\
A = \begin{pmatrix}
0 & 1 & 0 \\
0 & 0 & 1 \\
0 & 0 & 0 \\
\end{pmatrix} \implies \dim(N(0I-A)) = \dim(N(-A)) = \dim(N(A)) = 1 \\
\implies A \text{ is not diagonalizable} \\
}
$$
---
