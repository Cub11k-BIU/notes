---
{"publish":true,"created":"01/07/25, 10:07","modified":"2025-11-21T21:10:14.541+02:00","tags":["Academia","Lecture","Linear-2"],"cssclasses":""}
---

$$
\displaylines{
A = \begin{pmatrix}
1 & 1 & 8 & 4 & 5 & 6 \\
-3 & 0 & 6 & 3 & 4 & 5 \\
-2 & -1 & 4 & 2 & 3 & 4 \\
3 & 0 & 4 & 2 & 3 & 4 \\
-1 & 0 & 3 & 1 & 2 & 3 \\
0 & 0 & 0 & 0 & 0 & 1 \\
\end{pmatrix} \in \mathbb{R}^{6 \times 6} \\
\\
P_{A}(x) = (x-1)^{5}(x-5) \\
x = 1 \implies E_{1} = sp\Set{ \begin{pmatrix}
-1 \\
2 \\
0 \\
-3 \\
2 \\
0 \\
\end{pmatrix} } \\
x = 5 \implies E_{5} = sp\Set{ \begin{pmatrix}
1 \\
0 \\
0 \\
1 \\
0 \\
0 \\
\end{pmatrix} } \\
\text{Let } B = \Set{ \begin{pmatrix}
-1 \\
2 \\
0 \\
-3 \\
2 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
0 \\
0 \\
1 \\
0 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
0 \\
0 \\
0 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
0 \\
1 \\
0 \\
0 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
0 \\
0 \\
0 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
0 \\
0 \\
0 \\
0 \\
1 \\
\end{pmatrix} } \\
B \text{ is a basis of } \mathbb{R}^{6} \\
\text{Let } P = \begin{pmatrix}
-1 & 1 & 0 & 0 & 0 & 0 \\
2 & 0 & 1 & 0 & 0 & 0 \\
0 & 0 & 0 & 1 & 0 & 0 \\
-3 & 1 & 0 & 0 & 0 & 0 \\
2 & 0 & 0 & 0 & 1 & 0 \\
0 & 0 & 0 & 0 & 0 & 1 \\
\end{pmatrix} \\
P^{-1} = \begin{pmatrix}
\frac{1}{2} & 0 & 0 & \frac{-1}{2} & 0 & 0 \\
\frac{3}{2} & 0 & 0 & \frac{-1}{2} & 0 & 0 \\
-1 & 1 & 0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 & 0 \\
-1 & 0 & 0 & 1 & 1 & 0 \\
0 & 0 & 0 & 0 & 0 & 1 \\
\end{pmatrix} \\
\implies P^{-1}AP = \begin{pmatrix}
1 & 0 & \frac{1}{2} & 2 & 1 & 1 \\
0 & 5 & \frac{3}{2} & 10 & 6 & 7 \\
0 & 0 & -1 & 2 & 2 & 3 \\
0 & 0 & -1 & 4 & 3 & 4 \\
0 & 0 & -1 & -1 & 0 & 1 \\
0 & 0 & 0 & 0 & 0 & 1 \\
\end{pmatrix} \\
\text{First diagonal block of size } 2 \text{ is triangular (diagonal in fact),} \\
\text{so we repeat the process for the part that's left:} \\
}
$$
$$
\displaylines{
B = \begin{pmatrix}
-1 & 2 & 2 & 3 \\
-1 & 4 & 3 & 4 \\
-1 & -1 & 0 & 1 \\
0 & 0 & 0 & 1 \\
\end{pmatrix} \\
P_{B}(x) = (x-1)^{4} \\
x = 1 \implies E_{1} = sp\Set{ \begin{pmatrix}
0 \\
-1 \\
1 \\
0 \\
\end{pmatrix} } \\
\text{Let } C = \Set{ \begin{pmatrix}
0 \\
-1 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
0 \\
0 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
0 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
0 \\
0 \\
1 \\
\end{pmatrix} } \text{ be a basis of } \mathbb{R}^{4} \\
\text{Let } P' = \begin{pmatrix}
0 & 1 & 0 & 0 \\
-1 & 0 & 1 & 0 \\
1 & 0 & 0 & 0 \\
0 & 0 & 0 & 1 \\
\end{pmatrix} \\
P'^{-1}BP' = \begin{pmatrix}
1 & -1 & -1 & 1 \\
0 & -1 & 2 & 3 \\
0 & -2 & 3 & 5 \\
0 & 0 & 0 & 1 \\
\end{pmatrix} \\
\text{Now we combine first step and this one, } \\
\text{Let } Q = P \cdot \begin{pmatrix}
I_{2} & 0 \\
0 & P' \\
\end{pmatrix} = \begin{pmatrix}
-1 & 1 & 0 & 0 & 0 & 0 \\
2 & 0 & 0 & 1 & 0 & 0 \\
0 & 0 & -1 & 0 & 1 & 0 \\
-3 & 1 & 0 & 0 & 0 & 0 \\
2 & 0 & 1 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 1 \\
\end{pmatrix} \\
\text{Let us check if we get a correct result by doing so:} \\
Q^{-1}AQ = \begin{pmatrix}
I_{2} & 0 \\
0 & P'^{-1} \\
\end{pmatrix}P^{-1}AP\begin{pmatrix}
I_{2} & 0 \\
0 & P' \\
\end{pmatrix} = \\
= \begin{pmatrix}
I_{2} & 0 \\
0 & P'^{-1} \\
\end{pmatrix}\begin{pmatrix}
1 & 0 & \frac{1}{2} & 2 & 1 & 1 \\
0 & 5 & \frac{3}{2} & 10 & 6 & 7 \\
0 & 0 & -1 & 2 & 2 & 3 \\
0 & 0 & -1 & 4 & 3 & 4 \\
0 & 0 & -1 & -1 & 0 & 1 \\
0 & 0 & 0 & 0 & 0 & 1 \\
\end{pmatrix}\begin{pmatrix}
I_{2} & 0 \\
0 & P' \\
\end{pmatrix} = \\
= \begin{pmatrix}
1 & 0 & * \\
0 & 5 & * \\
0 & 0 & P'^{-1}BP' \\
\end{pmatrix} = \begin{pmatrix}
1 & 0 & -1 & \frac{1}{2} & 2 & 1 \\
0 & 5 & -4 & \frac{3}{2} & 10 & 7 \\
0 & 0 & 1 & -1 & -1 & 1 \\
0 & 0 & 0 & -1 & 2 & 3 \\
0 & 0 & 0 & -2 & 3 & 5 \\
0 & 0 & 0 & 0 & 0 & 1 \\
\end{pmatrix} \\
\text{Thisd is exactly what we want, we triangularized half of the matrix already!} \\
\text{Let us continue for the part that is left:} \\
}
$$
$$
\displaylines{
C = \begin{pmatrix}
-1 & 2 & 3 \\
-2 & 3 & 5 \\
0 & 0 & 1 \\
\end{pmatrix} \\
P_{C}(x) = (x-1)^{3} \\
x = 1 \implies E_{1} = sp\Set{ \begin{pmatrix}
1 \\
1 \\
0 \\
\end{pmatrix} } \\
\text{Let } D = \Set{ \begin{pmatrix}
1 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
0 \\
1 \\
\end{pmatrix} } \text{ be a basis of } \mathbb{R}^{3} \\
\text{Let } \hat{P} = \begin{pmatrix}
1 & 1 & 0 \\
1 & 0 & 0 \\
0 & 0 & 1 \\
\end{pmatrix} \\
\hat{P}^{-1} = \begin{pmatrix}
0 & 1 & 0 \\
1 & -1 & 0 \\
0 & 0 & 1 \\
\end{pmatrix} \\
\hat{P}^{-1}C\hat{P} = \begin{pmatrix}
1 & -2 & 5 \\
0 & 1 & -2 \\
0 & 0 & 1 \\
\end{pmatrix} \\
\text{Let us add this step to previous steps:} \\
\text{Let } K = Q \cdot \begin{pmatrix}
I_{3} & 0 \\
0 & \hat{P} \\
\end{pmatrix} = \begin{pmatrix}
-1 & 1 & 0 & 0 & 0 & 0 \\
2 & 0 & 0 & 1 & 1 & 0 \\
0 & 0 & -1 & 1 & 0 & 0 \\
-3 & 1 & 0 & 0 & 0 & 0 \\
2 & 0 & 1 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 1 \\
\end{pmatrix} \\
\text{Let us check the result:} \\
K^{-1}AK = \begin{pmatrix}
I_{3} & 0 \\
0 & \hat{P}^{-1} \\
\end{pmatrix}Q^{-1}AQ\begin{pmatrix}
I_{3} & 0 \\
0 & \hat{P} \\
\end{pmatrix} = \\
= \begin{pmatrix}
I_{3} & 0 \\
0 & \hat{P}^{-1} \\
\end{pmatrix}\begin{pmatrix}
1 & 0 & -1 & \frac{1}{2} & 2 & 1 \\
0 & 5 & -4 & \frac{3}{2} & 10 & 7 \\
0 & 0 & 1 & -1 & -1 & 1 \\
0 & 0 & 0 & -1 & 2 & 3 \\
0 & 0 & 0 & -2 & 3 & 5 \\
0 & 0 & 0 & 0 & 0 & 1 \\
\end{pmatrix}\begin{pmatrix}
I_{3} & 0 \\
0 & \hat{P} \\
\end{pmatrix} = \\
= \begin{pmatrix}
1 & 0 & -1 & \frac{5}{2} & \frac{1}{2} & 1 \\
0 & 5 & -4 & \frac{23}{2} & \frac{3}{2} & 7 \\
0 & 0 & 1 & -2 & -1 & 1 \\
0 & 0 & 0 & 1 & -2 & 5 \\
0 & 0 & 0 & 0 & 1 & -2 \\
0 & 0 & 0 & 0 & 0 & 1 \\
\end{pmatrix} \\
\text{We got a triangular matrix with diagonal entries equal to eigenvalues} \\
\text{The answer is correct} \\
A = K^{-1}\begin{pmatrix}
1 & 0 & -1 & \frac{5}{2} & \frac{1}{2} & 1 \\
0 & 5 & -4 & \frac{23}{2} & \frac{3}{2} & 7 \\
0 & 0 & 1 & -2 & -1 & 1 \\
0 & 0 & 0 & 1 & -2 & 5 \\
0 & 0 & 0 & 0 & 1 & -2 \\
0 & 0 & 0 & 0 & 0 & 1 \\
\end{pmatrix}K \\
}
$$
