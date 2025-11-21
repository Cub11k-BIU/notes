---
{"publish":true,"created":"29/04/25, 14:04","modified":"2025-11-21T21:10:25.246+02:00","tags":["Academia","Practice","Linear-2"],"cssclasses":""}
---

## Triangularizable matrix
$$
\displaylines{
A \text{ is called triangularizable iff } \exists T: T \text{ is a triangular matrix}: A \sim T \\
\\
A \sim T \iff P_{A}(\lambda) \text{ is factorizable into linear factors} \\
}
$$
---
$$
\displaylines{
A = \begin{pmatrix}
1 & 2 & 3 \\
4 & 0 & 2 \\
0 & 6 & 0 \\
\end{pmatrix} \\
\text{Over } \mathbb{C} - \text{ all matrices are triangularizable} \\
\text{Over } \mathbb{R}? \\
P_{A}(\lambda) = \begin{vmatrix}
\lambda-1 & -2 & -3 \\
-4 & \lambda & -2 \\
0 & -6 & \lambda \\
\end{vmatrix} = 6 \cdot \begin{vmatrix}
\lambda-1 & -3 \\
-4 & -2 \\
\end{vmatrix} + \lambda \begin{vmatrix}
\lambda-1 & -2 \\
-4 & \lambda \\
\end{vmatrix} = \\
= 12 - 12\lambda - 72 + \lambda^{2}(\lambda-1) - 8\lambda = \\
= \lambda^{3} - \lambda^{2} - 20\lambda - 60 = -(\lambda-6)(\lambda^{2}+5\lambda+10) \\
\implies A \not\sim T \\
}
$$
---
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \text{ be nilpotent} \\
\text{Determine whether } A \text{ is triangularizable} \\
\text{Determine whether } A \text{ is diagonalizable} \\
\\
\text{Solution:} \\
A \sim D \iff A = 0 \\
P_{A}(\lambda) = \lambda^{n} \implies A \sim T \\
}
$$
---
## Triangularization
$$
\displaylines{
1. \quad \text{Find } P_{A}(\lambda) \text{ and eigenvalues} \\
2. \quad \text{Find eigenspace for each eigenvalue} \\
3. \quad \text{Add vectors to the union of eigenspaces to get a basis of } \mathbb{F}^{n} \\
4. \quad \text{Assign each vector from the basis to be a column of } P \\
\text{Resulting matrix is: } P^{-1}AP = \begin{pmatrix}
D & * \\
0 & B \\
\end{pmatrix} \\
\text{Where } D \text{ is a diagonal matrix with eigenvalues on the diagonal} \\
\text{Each eigenvalue is featured } \gamma_{A}(\lambda_{i}) \text{ times} \\
\text{And } B \text{ is a matrix with eigenvalues of } A \\
\text{For each eigenvalue: } \gamma_{B}(\lambda_{i}) = \mu_{A}(\lambda_{i}) - \gamma_{A}(\lambda_{i}) \\
5. \text{Repeat for } B \\
6. \text{ Repeat until not triangularized} \\
}
$$
---
$$
\displaylines{
A = \begin{pmatrix}
-1 & -3 & -4 & -5 \\
1 & 1 & -1 & -3 \\
2 & 5 & 9 & 12 \\
-1 & -2 & -3 & -3 \\
\end{pmatrix} \\
P_{A}(\lambda) = \begin{vmatrix}
\lambda+1 & 3 & 4 & 5 \\
-1 & \lambda-1 & 1 & 3 \\
-2 & -5 & \lambda-9 & -12 \\
1 & 2 & 3 & \lambda+3 \\
\end{vmatrix} \overset{ R_{1} + R_{i} }{ = } \begin{vmatrix}
\lambda-1 & \lambda-1 & \lambda-1 & \lambda-1 \\
-1 & \lambda-1 & 1 & 3 \\
-2 & -5 & \lambda-9 & -12 \\
1 & 2 & 3 & \lambda+3 \\
\end{vmatrix} = \\
= (\lambda-1)\begin{vmatrix}
1 & 1 & 1 & 1 \\
-1 & \lambda-1 & 1 & 3 \\
-2 & -5 & \lambda-9 & -12 \\
1 & 2 & 3 & \lambda+3 \\
\end{vmatrix} = (\lambda-1)\begin{vmatrix}
1 & 0 & 0 & 0 \\
-1 & \lambda & 2 & 4 \\
-2 & -3 & \lambda-7 & -10 \\
1 & 1 & 2 & \lambda+2 \\
\end{vmatrix} = \\
= (\lambda-1)\begin{vmatrix}
\lambda & 2 & 4 \\
-3 & \lambda-7 & -10 \\
1 & 2 & \lambda+2 \\
\end{vmatrix} = (\lambda-1)\begin{vmatrix}
\lambda & 2 & 4 \\
0 & \lambda-1 & 3\lambda-4 \\
1 & 2 & \lambda+2 \\
\end{vmatrix} = \\
= (\lambda-1)(\lambda(\lambda-1)(\lambda+2)-2\lambda(3\lambda-4) + (6\lambda-8-4\lambda+4)) = \\
= (\lambda-1)(\lambda(\lambda+2)(\lambda-1) - 6\lambda(\lambda-1) + 4(\lambda-1)) = \\
= (\lambda-1)^{2}(\lambda(\lambda+2) - 6\lambda + 4) = (\lambda-1)^{2}(\lambda-2)^{2} \\
\lambda = 1 \implies \left(\begin{array}{cccc}
2 & 3 & 4 & 5 \\
-1 & 0 & 1 & 3 \\
-2 & -5 & -8 & -12 \\
1 & 2 & 3 & 4 \\
\end{array}\right) \to \left(\begin{array}{cccc|c}
1 & 1 & 1 & 1 \\
0 & 1 & 2 & 4 \\
0 & -3 & -6 & -10 \\
0 & 1 & 2 & 3 \\
\end{array}\right) \\
\to \left(\begin{array}{cccc|c}
1 & 1 & 1 & 1 \\
0 & 1 & 2 & 4 \\
0 & 0 & 0 & 1 \\
0 & 0 & 0 & 0 \\
\end{array}\right) \implies E_{1} = sp\Set{ \begin{pmatrix}
1 \\
-2 \\
1 \\
0 \\
\end{pmatrix} } \\
\dots \implies E_{2} = sp\Set{ \begin{pmatrix}
1 \\
0 \\
-2 \\
1 \\
\end{pmatrix} } \\
\implies P = \begin{pmatrix}
1 & 1 & 0 & 0 \\
-2 & 0 & 0 & 0 \\
1 & -2 & 1 & 0 \\
0 & 1 & 0 & 1 \\
\end{pmatrix} \\
P^{-1} = \begin{pmatrix}
0 & -\frac{1}{2} & 0 & 0 \\
1 & \frac{1}{2} & 0 & 0 \\
2 & \frac{3}{2} & 1 & 0 \\
-1 & -\frac{1}{2} & 0 & 1 \\
\end{pmatrix} \\
P^{-1}AP = \begin{pmatrix}
1 & 0 & * & * \\
0 & 2 & * & * \\
0 & 0 & -\frac{1}{2} & -\frac{1}{2} \\
0 & 0 & \frac{3}{2} & \frac{7}{2} \\
\end{pmatrix} \\
}
$$
$$
\displaylines{
P_{B}(\lambda) = (\lambda-1)(\lambda-2) \\
\implies \hat{P}^{-1}B\hat{P} = \begin{pmatrix}
1 & 0 \\
0 & 2 \\
\end{pmatrix} \\
\begin{pmatrix}
I & 0 \\
0 & \hat{P} \\
\end{pmatrix}^{-1} = \begin{pmatrix}
I & 0 \\
0 & \hat{P}^{-1} \\
\end{pmatrix} \\
\implies \begin{pmatrix}
I & 0 \\
0 & \hat{P} \\
\end{pmatrix}^{-1}P^{-1}AP\begin{pmatrix}
I & 0 \\
0 & \hat{P} \\
\end{pmatrix} = \begin{pmatrix}
D & * \\
0 & D \\
\end{pmatrix} \\
}
$$
---
