---
{"publish":true,"created":"25/03/25, 13:03","modified":"2025-11-21T21:10:25.200+02:00","tags":["Academia","Practice","Linear-2"],"cssclasses":""}
---

$$
\displaylines{
\det : \mathbb{F}^{n \times n} \to \mathbb{F} \\
\\
\det(A) = \left\lvert A \right\rvert = \sum_{\sigma \in S_{n}} sgn(\sigma) \prod_{i=1}^{n} a_{i\sigma(i)} \\
\text{For example: } \begin{vmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22} \\
\end{vmatrix} = a_{11}a_{22} - a_{12}a_{21} \\
\\
\text{Let } i \in [1, n] \\
\det(A) = \left\lvert A \right\rvert = \sum_{j=1}^{n} (-1)^{i+j}a_{ij}\left\lvert M_{ij}(A) \right\rvert \\
\text{Let } j \in [1, n] \\
\det(A) = \left\lvert A \right\rvert = \sum_{i=1}^{n} (-1)^{i+j}a_{ij}\left\lvert M_{ij}(A) \right\rvert \\
\\
\text{For example:} \\
\begin{vmatrix}
1 & 0 & 2 \\
3 & 1 & 0 \\
5 & 7 & 6 \\
\end{vmatrix} = 1\begin{vmatrix}
1 & 0 \\
7 & 6 \\
\end{vmatrix} - 0\begin{vmatrix}
3 & 0 \\
5 & 6 \\
\end{vmatrix} + 2\begin{vmatrix}
3 & 1 \\
5 & 7 \\
\end{vmatrix} = 6 + 32 = 38 \\
}
$$
### Exercises
$$
\displaylines{
\text{Let } A, B \in \mathbb{R}^{n \times n} \\
\left\lvert A \right\rvert = 7, \left\lvert B \right\rvert = 4 \\
C = A^{T}(B^{-1})^{5} \\
\text{Find } \left\lvert C \right\rvert \\
\\
\text{Solution:} \\
\left\lvert C \right\rvert = \left\lvert A^{T}(B^{-1})^{5} \right\rvert = \left\lvert A^{T} \right\rvert \cdot \left\lvert (B^{-1})^{5} \right\rvert = \left\lvert A \right\rvert \cdot \left\lvert B^{-1} \right\rvert^{5} = \\
\left\lvert A \right\rvert \cdot \left\lvert B \right\rvert ^{-5} = 7 \cdot \frac{1}{4^{5}} = \frac{7}{4^{5}} \\
}
$$
---
$$
\displaylines{
\text{Let } n \in \mathbb{N} \text{ be odd} \\
\text{Let } A \in \mathbb{R}^{n \times n} \text{ be anti-symmetric} \\
\text{Prove: } A \text{ is non-invertible} \\
\\
\text{Proof:} \\
A = -A^{T} \\
\left\lvert A \right\rvert = \left\lvert -A^{T} \right\rvert = (-1)^{n}\left\lvert A^{T} \right\rvert = - \left\lvert A \right\rvert \\
\implies \left\lvert A \right\rvert = 0 \implies A \text{ is non-invertible} \\
}
$$
---
$$
\displaylines{
\begin{vmatrix}
a & b & c \\
d & e & f \\
g & h & i \\
\end{vmatrix} = 2 \\
\text{Find } \begin{vmatrix}
i-4c & f & 2i+f \\
g-4a & d & 2g+d \\
h-4b & e & 2h+e \\
\end{vmatrix} = \begin{vmatrix}
i-4c & f & 2i \\
g-4a & d & 2g \\
h-4b & e & 2h \\
\end{vmatrix} = 2\begin{vmatrix}
i-4c & f & i \\
g-4a & d & g \\
h-4b & e & h \\
\end{vmatrix} = \\
= 2\begin{vmatrix}
-4c & f & i \\
-4a & d & g \\
-4b & e & h \\
\end{vmatrix} = -8\begin{vmatrix}
c & f & i \\
a & d & g \\
b & e & h \\
\end{vmatrix} = -8\begin{vmatrix}
c & a & b \\
f & d & e \\
i & g & h \\
\end{vmatrix} = \\
8\begin{vmatrix}
a & c & b \\
d & f & e \\
g & i & h \\
\end{vmatrix} = -8\begin{vmatrix}
a & b & c \\
d & e & f \\
g & h & i \\
\end{vmatrix} = -16 \\
}
$$
---
$$
\displaylines{
\text{Let } A = \left\{\begin{array}{}
2 & i = j \\
-1 & i = j + 1 \\
-1 & i = j - 1 \\
0 & \text{otherwise} \\
\end{array}\right. \\
\text{Find } \left\lvert A \right\rvert \\
\text{Let } A_{n} = A \in \mathbb{R}^{n \times n} \\
\left\lvert A_{n} \right\rvert = 2 \cdot \left\lvert A_{n-1} \right\rvert - (-1)\left\lvert M_{12}(A_{n}) \right\rvert = \\
= 2\left\lvert A_{n-1} \right\rvert + (-1)\left\lvert A_{n-2} \right\rvert = 2\left\lvert A_{n-1} \right\rvert - \left\lvert A_{n-2} \right\rvert \\
\\
\left\lvert A_{1} \right\rvert  = 2 \\
\left\lvert A_{2} \right\rvert = 3 \\
\left\lvert A_{3} \right\rvert = 4 \\
2\left\lvert A_{n-1} \right\rvert - \left\lvert A_{n-2} \right\rvert = 2(2A_{n-2} - A_{n-3}) - A_{n-2} = 3A_{n-2} - 2A_{n-3} = 4A_{n-3} - 3A_{n-4} = \dots = \\
= (n-1)A_{2} - (n-2)A_{1} = 3n - 3 - 2n + 4 = n + 1 \\
}
$$
---
$$
\displaylines{
\text{Let } A = \left\{\begin{array}{}
2i & i \neq j \\
0 & i = j \\
\end{array}\right. \\
\text{Let } A' = \left\{\begin{array}{}
1 & i \neq j \\
0 & i = j \\
\end{array}\right. \\
\left\lvert A \right\rvert = (2n)!! \left\lvert A' \right\rvert = 2^{n}n!\left\lvert A' \right\rvert \\
\left\lvert A' \right\rvert = \begin{vmatrix}
0 & 1 & \dots & \dots & 1 \\
1 & 0 & 1 & \dots & 1 \\
1 & 1 & \ddots & \ddots & \vdots \\
\vdots & \vdots & \ddots & \ddots & 1 \\
1 & 1 & \dots & 1 & 0 \\
\end{vmatrix} \overset{ \forall i \in [2, n]: R_{i} - R_{1} }{ = } \begin{vmatrix}
0 & 1 & \dots & \dots & 1 \\
1 & -1 & 0 & \dots & 0 \\
1 & 0 & \ddots & \ddots & \vdots \\
\vdots & \vdots & \ddots & \ddots & 0 \\
1 & 0 & \dots & 1 & -1 \\
\end{vmatrix} = \\
\overset{ \forall i \in [2, n]: C_{1} + C_{i} }{ = } \begin{vmatrix}
n-1 & 1 & \dots & \dots & 1 \\
0 & -1 & 0 & \dots & 0 \\
0 & 0 & \ddots & \ddots & \vdots \\
\vdots & \vdots & \ddots & \ddots & 0 \\
0 & 0 & \dots & 1 & -1 \\
\end{vmatrix} = (n-1) \cdot (-1)^{n-1} \\
\implies \left\lvert A \right\rvert = (-1)^{n}(n-1)2^{n} n! \\
}
$$
---
