---
{"publish":true,"created":"21/05/25, 16:05","modified":"2026-03-24T15:00:54.361+02:00","tags":["Academia","Lecture","Linear-2"],"cssclasses":""}
---

# 1a
[[Assignments/Linear-2/Linear-2 05#1\|Linear-2 5]]
# 1b
$$
\displaylines{
A = \begin{pmatrix}
4 & x & 2 \\
2 & y & 3 \\
-5 & 6 & 4 \\
\end{pmatrix} \\
\text{Let } \det(A) = d \\
B = \begin{pmatrix}
4 & x+1 & 0 & 2 \\
-5 & 2 & 1 & 4 \\
2 & y-2 & 0 & 3 \\
-5 & 2 & 2 & 4 \\
\end{pmatrix} \\
\text{Find } \det(B) \text{ as a function of } d \\
\\
\text{Solution:} \\
\begin{vmatrix}
4 & x+1 & 0 & 2 \\
-5 & 2 & 1 & 4 \\
2 & y-2 & 0 & 3 \\
-5 & 2 & 2 & 4 \\
\end{vmatrix} = \begin{vmatrix}
4 & x+1 & 0 & 2 \\
2 & y-2 & 0 & 3 \\
-5 & 2 & 2 & 4 \\
-5 & 2 & 1 & 4 \\
\end{vmatrix} = \begin{vmatrix}
4 & x+1 & 0 & 2 \\
2 & y-2 & 0 & 3 \\
0 & 0 & 1 & 0 \\
-5 & 2 & 1 & 4 \\
\end{vmatrix} = \\
= \begin{vmatrix}
4 & x+1 & 0 & 2 \\
2 & y-2 & 0 & 3 \\
0 & 0 & 1 & 0 \\
-5 & 2 & 1 & 4 \\
\end{vmatrix} = \begin{vmatrix}
4 & x+1 & 2 \\
2 & y-2 & 3 \\
-5 & 2 & 4 \\
\end{vmatrix} = \begin{vmatrix}
4 & x+3 & 2 \\
2 & y+1 & 3 \\
-5 & 6 & 4 \\
\end{vmatrix} = \\
= \begin{vmatrix}
4 & x & 2 \\
2 & y+1 & 3 \\
-5 & 6 & 4 \\
\end{vmatrix} + \begin{vmatrix}
0 & 3 & 0 \\
2 & y+1 & 3 \\
-5 & 6 & 4 \\
\end{vmatrix} = \begin{vmatrix}
4 & x & 2 \\
2 & y & 3 \\
-5 & 6 & 4 \\
\end{vmatrix} + \begin{vmatrix}
4 & x & 2 \\
0 & 1 & 0 \\
-5 & 6 & 4 \\
\end{vmatrix} + 9 = d + 26 - 69 = \\
= \boxed{ d - 43 } \\
}
$$
# 2a
$$
\displaylines{
\text{Let } A \in \mathbb{C}^{5 \times 5} : \forall i, j : A_{ij} \in \mathbb{R} \\
\text{Let } A^{4} = -A^{2} \\
\text{Prove: } det(A) = tr(A) \\
\\
\text{Proof:} \\
A^{4} = -A^{2} \implies (A^{2}+I)A^{2} = 0 \\
\implies (A - iI)(A + iI)A^{2} = 0 \\
\implies m_{A}(\lambda) \mid (\lambda-i)(\lambda+i)\lambda^{2} \\
\implies \text{Eigenvalues of } A \text{ can only be } \Set{ 0, i, -i } \\
\forall i, j A_{ij} \in \mathbb{R} \implies k_{i} = k_{-i} \\
\implies P_{A}(\lambda) = \lambda^{k_{0}}(\lambda^{2}+1)^{k_{i}} = (\lambda-i)^{k_{i}}(\lambda+i)^{k_{i}}\lambda^{k_{0}} \\
0 \text{ is an eigenvalue of } A \implies \det(A) = 0 \\
A \sim U \implies tr(A) = tr(U) = k_{i} \cdot i + k_{i} \cdot (-i) + k_{0} \cdot 0 = 0 \\
\implies \boxed{ \det(A) = tr(A) } \\
}
$$
# 2b
$$
\displaylines{
\text{In addition to 2a, } rank(A) = 2 \\
\text{Find all possible Jordan forms of } A \\
\\
\text{Solution:} \\
rank(A) = 2 \implies g_{0} = \dim N(A) = 5 - rank(A) = 3 \implies k_{0} \geq 3 \\
\implies P_{A}(\lambda) = \lambda^{k_{0}}(\lambda^{2}+1)^{k_{i}} = \lambda^{k_{0}}(\lambda-i)^{k_{i}}(\lambda+i)^{k_{i}} \\
k_{i} > 1 \implies \sum k_{\lambda_{i}} > 5 \implies k_{i} \leq 1 \\
k_{i} = 1 \implies \forall \lambda: g_{\lambda} = k_{\lambda}, \sum g_{\lambda} = 5 = n \implies A \text{ is diagonalizable over } \mathbb{C} \\
\implies A_{J} = D = \begin{pmatrix}
i \\
 & -i \\
 &  & 0 \\
 &  &  & 0 \\
 &  &  &  & 0 \\
\end{pmatrix} = J_{1}(i) \oplus J_{1}(-i) \oplus J_{1}(0) \oplus J_{1}(0) \oplus J_{1}(0) \\
k_{i} = 0 \implies P_{A}(\lambda) = \lambda^{5} \\
m_{A}(x) \mid x^{2}(x^{2}+1) \implies m_{A}(x) = x \text{ or } m_{A}(x) = x^{2} \\
m_{A}(x) = x \implies \text{There are three Jordan blocks of size 1 and that's not enough} \\
\implies m_{A}(x) = x^{2} \implies A_{J} = \begin{pmatrix}
0 & 1 \\
 & 0 \\
 &  & 0 & 1 \\
 &  &  & 0 \\
 &  &  &  & 0 \\
\end{pmatrix} = J_{2}(0) \oplus J_{2}(0) \oplus J_{1}(0) \\
}
$$
# 3a
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \text{ be triangularizable} \\
\text{Let } B \in \mathbb{F}^{n \times n} : P_{A}(B) = 0 \\
\text{Prove or disprove: } B \text{ is triangularizable} \\
\\
\text{Proof:} \\
P_{A}(\lambda) = \prod_{i=1}^{n} (\lambda-\lambda_{i}) \\
P_{A}(B) = 0 \\
\implies m_{B}(x) \mid P_{A}(x) \\
\implies P_{B}(x) \mid m_{B}^{n}(x) \mid P_{A}^{n}(x) \\
\implies P_{B}(x) \text{ is factorizable into linear factors} \implies \boxed{ B \text{ is triangularizable} } \\ 
}
$$
# 3b
[[Assignments/Linear-2/Linear-2 06#6\|Linear-2 6]]
