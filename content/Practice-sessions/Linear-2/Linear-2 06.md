---
{"publish":true,"created":"06/05/25, 14:05","modified":"2025-11-21T21:10:25.258+02:00","tags":["Academia","Practice","Linear-2"],"cssclasses":""}
---

## Cayley-Hamilton theorem
$$
\displaylines{
A \in \mathbb{F}^{n \times n} \implies P_{A}(A) = 0 \\
}
$$
---
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Prove: } \dim(sp\Set{ I, A, A^{2}, \dots }) \leq n \\
\\
\text{Proof:} \\
P_{A}(A) = A^{n} + \sum_{i=0}^{n-1} \alpha_{i}A^{i} = 0 \\
\implies A^{n} = \sum_{i=0}^{n-1} -\alpha_{i}A^{i} \in sp\Set{ I, A, A^{2}, \dots, A^{n-1} } \\
\text{By Induction starting from $n$:} \\
\text{Let } k \geq n \\
A^{k+1} = AA^{k} = A\left( \sum_{i=0}^{n-1} \beta_{i}A^{i} \right) = \\
= \sum_{i=0}^{n-1} \beta_{i}A^{i+1} \in sp\Set{ I, A, \dots, A^{k} } = sp\Set{ I, A, \dots, A^{n-1} } \\
\\
\text{Note: by using } m_{A} \text{ instead of } P_{A} \text{ we can bound the dimension even further by } \deg(m_{A}) \\
\text{Note: dimension is exactly } \deg(m_{A}) \text{ as otherwise } m_{A} \text{ would not be minimal} \\
}
$$
---
$$
\displaylines{
A^{2} = A \implies A^{2} - A = 0 \implies f(x) = x^{2} - x, f(A) = 0 \\
f(x) = x(x-1) \\
\implies m_{A} \in \Set{ x, x-1, x(x-1) } \\
\implies \text{Largest Jordan block in } A_{J} \text{ is of size } 1 \\
\implies A_{J} \text{ is diagonal} \implies A \text{ is diagonalizable} \\
}
$$
---
$$
\displaylines{
A \in \mathbb{R}^{7 \times 7} \text{ is invertible} \\
(A^{3} + A)(A-2I) = 0 \\
tr(A) = 2 \\
\text{Find } P_{A}, m_{A} \\
\\
\text{Solution:} \\
(A^{3}+A)(A-2I) = A(A^{2}+I)(A-2I) = 0 \\
A \text{ is invertible} \implies (A^{2}+I)(A-2I) = 0 \\
m_{A}(x) \mid (x^{2}+1)(x-2) \\
\text{Let } m_{A}(x) = x^{2}+1 \\
\implies P_{A}(x) = (x^{2}+1)^{k} \\
\implies 2k = 7 - \text{Contradiction!} \\
\text{Let } m_{A}(x) = x-2 \\
\implies P_{A}(x) = (x-2)^{7} \implies tr(A) = 14 - \text{Contradiction!} \\
\implies \boxed{ m_{A}(x) = (x^{2}+1)(x-2) } \\
\implies P_{A}(x) = (x^{2}+1)^{k}(x-2)^{7-2k} \\
P_{A}(x) = \left[\begin{array}{}
(x^{2}+1)(x-2)^{5} \\
(x^{2}+1)^{2}(x-2)^{3} \\
(x^{2}+1)^{3}(x-2) \\
\end{array}\right. \\
\text{Let us examine this over } \mathbb{C} \\
m_{A}(x) = (x-i)(x+i)(x-2) \\
\implies A \text{ is diagonalizable over } \mathbb{C} \\
P_{A}(x) = (x-i)^{k}(x+i)^{k}(x-2)^{7-2k} \\
\implies tr(A) = ki - ki + 2(7-2k) = 2(7-2k) \\
\implies 7-2k = 1 \implies k = 3 \\
\implies \boxed{ P_{A}(x) = (x^{2}+1)^{3}(x-2) } \\
}
$$
---
$$
\displaylines{
\text{Find Jordan form of } A = \begin{pmatrix}
-2 & 0 & 0 & 0 \\
-1 & 1 & 0 & 0 \\
1 & -1 & 0 & -1 \\
1 & 1 & 1 & 2 \\
\end{pmatrix} \text{ over } \mathbb{C} \\
\\
\text{Solution:} \\
P_{A}(x) = \begin{vmatrix}
x+2 & 0 & 0 & 0 \\
1 & x-1 & 0 & 0 \\
-1 & 1 & x & 1 \\
-1 & -1 & -1 & x-2 \\
\end{vmatrix} = (x+2)(x-1)\begin{vmatrix}
x & 1 \\
-1 & x-2 \\
\end{vmatrix} = \\
= (x+2)(x-1)(x^{2}-2x+1) = (x+2)(x-1)^{3} \\
\lambda = 1 \implies \left(\begin{array}{}
3 & 0 & 0 & 0 \\
1 & 0 & 0 & 0 \\
-1 & 1 & 1 & 1 \\
-1 & -1 & -1 & -1 \\
\end{array}\right) \to \left(\begin{array}{}
0 & 0 & 0 & 0 \\
1 & 0 & 0 & 0 \\
0 & 1 & 1 & 1 \\
0 & 0 & 0 & 0 \\
\end{array}\right) \implies \gamma_{A}(1) = 2 \\
\implies A_{J} = J_{1}(-2) \oplus J_{2}(1) \oplus J_{1}(1) \\
}
$$
---
$$
\displaylines{
\text{Let } A = \begin{pmatrix}
n & n-1 & n-2 & \dots & 1 \\
0 & n & n-1 & \ddots & 2 \\
\vdots & \ddots & \ddots & \ddots & \vdots \\
\vdots &  & \ddots & \ddots & n-1 \\
0 & \dots & \dots & 0 & n \\
\end{pmatrix} \in \mathbb{R}^{n \times n} \\
\\
P_{A}(x) = (x-n)^{n} \\
rank(nI - A) = n - 1 \implies \gamma_{A}(n) = 1 \\
\implies A_{J} = J_{n}(n) \\
}
$$
---
$$
\displaylines{
\text{Let } A, B \in \mathbb{F}^{n \times n} \\
\text{Let } P_{A} = P_{B} \\
\text{Let } m_{A} = m_{B} \\
\text{Let } \forall \lambda: \gamma_{A}(\lambda) = \gamma_{B}(\lambda) \\
\text{Prove or disprove: } A \sim B \\
\\
\text{Disproof:} \\
A_{J} = J_{3}(\lambda) \oplus J_{2}(\lambda) \oplus J_{2}(\lambda) \\
B_{J} = J_{3}(\lambda) \oplus J_{3}(\lambda) \oplus J_{1}(\lambda) \\
}
$$
---
$$
\displaylines{
\text{Let } A \in \mathbb{C}^{6 \times 6} \\
\text{Let } P_{A}(x) = (x-1)^{4}(x-2)^{2} \\
\text{Let } m_{A}(x) = (x-1)^{2}(x-2) \\
\text{Let } \gamma_{A}(1) = 2 \\
\text{Find } A_{J} \\
\\
\text{Solution:} \\
A_{J} = J_{2}(1) \oplus J_{2}(1) \oplus J_{1}(2) \oplus J_{1}(2) \\
}
$$
---
$$
\displaylines{
\text{Let } A = \begin{pmatrix}
3 & 1 & 0 \\
-4 & -1 & 0 \\
4 & -8 & -2 \\
\end{pmatrix} \in \mathbb{C}^{3 \times 3} \\
\text{Find } m_{A} \\
\\
\text{Solution:} \\
P_{A}(x) = \begin{vmatrix}
x-3 & -1 & 0 \\
4 & x+1 & 0 \\
-4 & 8 & x+2 \\
\end{vmatrix} = (x+2)(x^{2}-2x+1) = (x+2)(x-1)^{2} \\
(A+2I)(A-I) = \begin{pmatrix}
5 & 1 & 0 \\
-4 & 1 & 0 \\
4 & -8 & 0 \\
\end{pmatrix}\begin{pmatrix}
2 & 1 & 0 \\
-4 & 0 & 0 \\
4 & -8 & -3 \\
\end{pmatrix} = \begin{pmatrix}
6 & * & * \\
* & * & * \\
* & * & * \\
\end{pmatrix} \neq 0 \\
\implies \boxed{ m_{A}(x) = (x+2)(x-1)^{2} } \\
\text{Alternative approach:} \\
\left(\begin{array}{ccc}
-2 & -1 & 0 \\
4 & 2 & 0 \\
-4 & 8 & 3 \\
\end{array}\right) \to \left(\begin{array}{ccc}
-2 & -1 & 0 \\
0 & 0 & 0 \\
-4 & 8 & 3 \\
\end{array}\right) \implies \gamma_{A}(1) = 1 \\
\implies A_{J} = J_{1}(-2) \oplus J_{2}(1) \implies \boxed{ m_{A}(x) = (x+2)(x-1)^{2} } \\
}
$$
---
