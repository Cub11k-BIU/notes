---
{"publish":true,"created":"05/05/25, 21:05","modified":"2025-11-21T21:10:02.730+02:00","tags":["Academia","Assignment","Linear-2"],"cssclasses":""}
---

# Table of used notations
$$
\displaylines{
\begin{array}{c|c}
\text{Algebraic multiplicity} & \mu_{A}(\lambda) \\
\text{Geometric multiplicity} & \gamma_{A}(\lambda) \\
\text{Eigenspace in respect to eigenvalue } \lambda & E_{\lambda} \\
\text{Jordan normal form of matrix } A & A_{J} \\
\end{array} \\
}
$$
# 1
$$
\displaylines{
\text{Let } P_{A}(x) = (x-2)^{3}(x-4)^{4} \\
\text{Let } m_{A}(x) = (x-2)^{2}(x-4)^{2} \\
\text{Find possible Jordan forms of } A \\
\\
\text{Solution:} \\
P_{A} \text{ is factorizable into linear factors} \implies A_{J} \text{ exists} \\
\begin{array}{c|c}
\lambda & 2 & 4 \\
\mu_{A}(\lambda) & 3 & 4 \\
\gamma_{A}(\lambda) & 1\leq x \leq 3 & 1 \leq x \leq 4 \\
\end{array} \\
\implies \left\{\begin{array}{}
\text{Sum of sizes of Jordan blocks corresponding to eigenvalue } 2 \text{ is } 3 \\
\text{Largest Jordan block corresponding to eigenvalue } 2 \text{ is of size } 2 \\
\text{Sum of sizes of Jordan blocks corresponding to eigenvalue } 4 \text{ is } 4 \\
\text{Largest Jordan block corresponding to eigenvalue } 2 \text{ is of size } 2 \\
\end{array}\right. \\
\implies \left\{\begin{array}{}
\text{Jordan blocks corresponding to eigenvalue 2 can only be } J_{1} \oplus J_{2} \\
\text{Jordan blocks corresponding to eigenvalue } 4 \text{ can be } J_{2} \oplus J_{2} \text{ or } J_{2} \oplus J_{1} \oplus J_{1} \\
\end{array}\right. \\
\\
\implies A_{J} = J_{1}(2) \oplus J_{2}(2) \oplus J_{2}(4) \oplus \left[\begin{array}{}
J_{2}(4) \\
J_{1}(4) \oplus J_{1}(4) \\
\end{array}\right. \\
}
$$
# 2
$$
\displaylines{
\text{Let } A = \begin{pmatrix}
8 & 3 & -3 \\
-6 & -1 & 3 \\
12 & 6 & -4 \\
\end{pmatrix} \\
\text{Find characteristic and minimal polynomials of } A \\
\\
\text{Solution:} \\
P_{A}(x) = \det(xI-A) = \begin{vmatrix}
x-8 & -3 & 3 \\
6 & x+1 & -3 \\
-12 & -6 & x+4 \\
\end{vmatrix} = \begin{vmatrix}
x-8 & 0 & 3 \\
6 & x-2 & -3 \\
-12 & x-2 & x+4 \\
\end{vmatrix} = \\
= \begin{vmatrix}
x-8 & 0 & 3 \\
x-2 & x-2 & 0 \\
-12 & x-2 & x+4 \\
\end{vmatrix} = (x-2)\begin{vmatrix}
x-8 & 0 & 3 \\
1 & 1 & 0 \\
-12 & x-2 & x+4 \\
\end{vmatrix} = \\
= (x-2)\begin{vmatrix}
x-8 & 0 & 3 \\
1 & 1 & 0 \\
0 & x+10 & x+4 \\
\end{vmatrix} = (x-2)((x-8)\begin{vmatrix}
1 & 0 \\
x+10 & x+4 \\
\end{vmatrix} + 3\begin{vmatrix}
1 & 1 \\
0 & x+10 \\
\end{vmatrix}) = \\
= (x-2)((x-8)(x+4) + 3(x+10)) = (x-2)(x^{2}-x-2) = (x-2)^{2}(x+1) \\
\implies m_{A}(x) = \left[\begin{array}{}
(x-2)(x+1) \\
(x-2)^{2}(x+1) \\
\end{array}\right. \\
\text{Let } m_{A}(x) = (x-2)(x+1) \\
m_{A}(A) = (A-2I)(A+I) = \begin{pmatrix}
6 & 3 & -3 \\
-6 & -3 & 3 \\
12 & 6 & -6 \\
\end{pmatrix}\begin{pmatrix}
9 & 3 & -3 \\
-6 & 0 & 3 \\
12 & 6 & -3 \\
\end{pmatrix} = \\
= 9\begin{pmatrix}
2 & 1 & -1 \\
-2 & -1 & 1 \\
4 & 2 & -2 \\
\end{pmatrix}\begin{pmatrix}
3 & 1 & -1 \\
-2 & 0 & 1 \\
4 & 2 & -1 \\
\end{pmatrix} = \begin{pmatrix}
0 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 0 \\
\end{pmatrix} \\
\implies \boxed{ \left\{\begin{array}{}
P_{A}(x) = (x-2)^{2}(x+1) \\
m_{A}(x) = (x-2)(x+1) \\
\end{array}\right. } \\
}
$$
# 3
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{2n+1 \times 2n+1} \\
\text{Let } rank(A-I) = rank(A+I) = n + 1 \\
\text{Prove or disprove: } A \text{ is diagonalizable } \iff \left\lvert tr(A) \right\rvert  \neq 1 \\
\\
\text{Proof:} \\
rank(A-I) = n + 1 < 2n + 1 \implies A - I \text{ is not invertible} \implies 1 \text{ is an eigenvalue of } A \\
\text{and } \dim(N(A-I)) = \gamma_{A}(1) = n \\
rank(A+I) = n + 1 < 2n + 1 \implies A + I \text{ is not invertible} \implies -1 \text{ is an eigenvalue of } A \\
\text{and } \dim(N(A+I)) = \gamma_{A}(1) = n \\
\implies (x-1)^{n}(x+1)^{n} \mid P_{A}(x) \implies P_{A}(x) = (x-1)^{n}(x+1)^{n}(x-\lambda) \\
\implies A \text{ can only have one other eigenvalue with } \mu_{A}(\lambda) = 1 \\
\implies P_{A} \text{ is factorizable into linear factors} \\
\implies A \text{ is triangularizable} \\
\boxed{ \implies } \text{ Let } A \text{ be diagonalizable} \\
A \sim D \implies tr(A) = tr(D) = 1 \cdot n + (-1) \cdot n + \lambda = \lambda \\
\text{Let } \lambda = \pm 1 \implies \mu_{A}(\lambda) = \gamma_{A}(\lambda) + 1 \implies A \text{ is not diagonalizable} - \text{Contradiction!} \\
\implies \left\lvert \lambda \right\rvert \neq 1 \implies \boxed{ \left\lvert tr(A) \right\rvert \neq 1 } \\
\\
\boxed{ \impliedby } \text{ Let } \left\lvert tr(A) \right\rvert  \neq 1 \\
A \sim U \implies tr(A) = tr(U) = 1 \cdot n + (-1) \cdot n + \lambda = \lambda \\
\left\lvert tr(A) \right\rvert \neq 1 \implies \left\lvert \lambda \right\rvert \neq 1 \\
\implies \begin{array}{c|c}
 & 1 & -1 & \lambda \\
\mu_{A} & n & n & 1 \\
\gamma_{A} & n & n & 1 \\
\end{array} \\
\implies \boxed{ A \text{ is diagonalizable} } \\
}
$$
# 4
$$
\displaylines{
\text{Let } A \in \mathbb{C}^{n \times n} \text{ be a nilpotent matrix} \\
\text{Let } p \in \mathbb{C}[x]: p(0) \neq 0 \\
\text{Prove: } p(A) \text{ is invertible} \\
\\
\text{Proof:} \\
p(0) \neq 0 \implies p(0^{n \times n}) = \alpha_{0} I, \alpha_{0} \neq 0 \\
A^{k} = 0 \implies \forall k' > k: A^{k'} = 0 \implies p(A) = \sum_{i=0}^{k-1} \alpha_{i}A^{i} = a_{0}I + \sum_{i=1}^{k-1} \alpha_{i}A^{i} \\
\text{Let } B = \sum_{i=1}^{k-1} \frac{\alpha_{i}}{a_{0}}A^{i} \\
\implies p(A) = \alpha_{0}(I + B) \\
B^{k} = A^{k} \cdot C = 0 \implies B \text{ is nilpotent} \implies P_{B}(x) = x^{n} \\
\implies \text{Eigenvalues of } B \text{ are } \Set{ 0 } \\
\implies \text{Eienvalues of } \alpha_{0}B \text{ are also } \Set{ 0 } \\
P_{p(A)}(x) = \det(xI - p(A)) = \det(xI - \alpha_{0}I - \alpha_{0}B)= P_{\alpha_{0}B}(x-\alpha_{0}) = (x-\alpha_{0})^{n} \\
\implies \text{Eigenvalues of } p(A) \text{ are } \Set{ \alpha_{0} } \implies 0 \text{ is not an eigenvalue of } p(A) \\
\implies \boxed{ p(A) \text{ is invertible} } \\
}
$$
# 5
$$
\displaylines{
\text{Let } A \in \mathbb{C}^{7 \times 7} \text{ with only real numbers} \\
\text{Let } (x+i)(x+1)^{3}(x-2)^{2} \mid P_{A}(x) \\
\text{Let } (x+1)^{2} \mid m_{A}(x) \\
\text{Find possible Jordan forms of } A \\
\\
\text{Solution:} \\
A \in \mathbb{R}^{7 \times 7} \implies P_{A}(x) \in \mathbb{R}_{7}[x] \\
(x+i) \mid P_{A}(x) \implies (x-i) \mid P_{A}(x) \\
\deg(P_{A}(x)) = 7 \implies P_{A}(x) = \underbrace{ (x^{2}+1) }_{ (x+i)(x-i) }(x-2)^{2}(x+1)^{3} \\
\implies (x+i)(x-i)(x+1)^{2}(x-2) \mid m_{A}(x) \\
\implies m_{A}(x) = \left[\begin{array}{}
(x+i)(x-i)(x+1)^{2}(x-2) \\
(x+i)(x-i)(x+1)^{3}(x-2) \\
(x+i)(x-i)(x+1)^{2}(x-2)^{2} \\
(x+i)(x-i)(x+1)^{3}(x-2)^{2} \\
\end{array}\right. \\
\text{Concrete observations:} \\
A_{J} = J_{1}(i) \oplus J_{1}(-i) \oplus X \\
\text{Largest Jordan block corresponding to eigenvalue } -1 \text{ can be } 2 \text{ or } 3 \\
\text{Sum of sizes of Jordan blocks corresponding to eigenvalue } -1 \text{ is } 3 \\ 
\text{Largest Jordan block corresponding to eigenvalue } 2 \text{ can be } 1 \text{ or } 2 \\
\text{Sum of sizes of Jordan blocks corresponding to eigenvalue } 2 \text{ is } 2 \\
\implies \text{Possible options for eigenvalue } -1 \text{ are } J_{3} \text{ or } J_{2} \oplus J_{1} \\
\text{Possible options for eigenvalue } 2 \text{ are } J_{2} \text{ or } J_{1} \oplus J_{1} \\
\\
\implies A_{J} = J_{1}(i) \oplus J_{1}(-i) \oplus \left[\begin{array}{}
J_{3}(-1) \\
J_{2}(-1) \oplus J_{1}(-1)
\end{array}\right. \oplus \left[\begin{array}{}
J_{2}(2) \\
J_{1}(2) \oplus J_{1}(2) \\
\end{array}\right. \\
}
$$
# 6
$$
\displaylines{
\text{Let } A \in \mathbb{C}^{n \times n} \text{ be invertible} \\
\text{Prove: } \exists B \in \mathbb{C}^{n \times n} \text{ invertible}, C \neq 0 \in \mathbb{C}^{n \times n} \text{ nilpotent}: A = B + C \\
\\
\text{Proof:} \\
\text{Let } A \text{ be diagonal} \\
\text{Let } B_{ij} = \left\{\begin{array}{}
-1 & i = 1, j = n \\
A_{ij} & \text{otherwise} \\
\end{array}\right. \\
B \text{ is upper-triangular, } A \text{ is invertible and their diagonals are the same} \\
\implies B \text{ is invertible} \\
\text{Let } C = A - B = (J_{n}(0))^{n-1} \\
C^{2} = (J_{n}(0))^{n} \cdot (J_{n}(0))^{n-2} = 0 \implies C \text{ is nilpotent} \\
\boxed{ A = B + C } \\
\\
\text{Let } A \text{ be non-diagonal} \\
A \text{ is invertible} \implies 0 \text{ is not an eigenvalue of } A \\
A \in \mathbb{C}^{n \times n} \implies A \text{ is triangularizable} \implies A \sim U \\
P_{A}(x) = \prod_{i=1}^{n} (x-\lambda_{i}) \\
A = PUP^{-1} = P(D + N)P^{-1} \\
\text{Where } D \text{ is a diagonal matrix and } N \text{ is a strictly upper-triangular matrix} \\
\det(D) = \prod_{i=1}^{n} \lambda_{i} \neq 0 \implies D \text{ is invertible} \\
P_{N}(x) = x^{n} \implies P_{N}(N) = N^{n} = 0 \implies N \text{ is nilpotent} \\
\text{Let } B = PDP^{-1}, D \text{ is invertible} \implies B \text{ is invertible} \\
\text{Let } C = PNP^{-1} \\
C \sim N \implies P_{C}(x) = P_{N}(x) = x^{n} \implies P_{C}(C) = C^{n} = 0 \implies C \text{ is nilpotent} \\
\boxed{ A = P(D+N)P^{-1} = PDP^{-1} + PNP^{-1} = B + C } \\
}
$$
# 7a
$$
\displaylines{
\text{Let } \lambda \neq 0 \in \mathbb{C} \\
\text{Let } n \in \mathbb{N}: A = (J_{n}(\lambda))^{2} \\
\text{Prove: } A \sim J_{n}(\lambda^{2}) \\
\\
\text{Proof:} \\
A^{2} = (J_{n}(\lambda))^{2} = \lambda^{2}I + 2\lambda J_{n}(0) + (J_{n}(0))^{2} = \begin{pmatrix}
\lambda^{2} & 2\lambda & 1 & 0 & \dots & 0 \\
0 & \ddots & \ddots & \ddots & \ddots & \vdots \\
\vdots & \ddots & \ddots & \ddots & \ddots & 0 \\
\vdots &  & \ddots & \ddots & \ddots & 1 \\
\vdots &  &  & \ddots & \ddots & 2\lambda \\
0 & \dots & \dots & \dots & 0 & \lambda^{2} \\
\end{pmatrix} \\
P_{A}(x) = (x-\lambda^{2})^{n} \\
\implies m_{A}(x) = (x-\lambda^{2})^{k}, k \leq n \\
m_{A}(A) = (A - \lambda^{2}I)^{k} \\
\text{Let } B = 2\lambda J_{n}(0) + (J_{n}(0))^{2} = A - \lambda^{2}I \\
B = \begin{pmatrix}
0 & 2\lambda & 1 & 0 & \dots & 0 \\
\vdots & \ddots & \ddots & \ddots & \ddots & \vdots \\
\vdots &  & \ddots & \ddots & \ddots & 0 \\
\vdots &  &  & \ddots & \ddots & 1 \\
\vdots &  &  &  & \ddots & 2\lambda \\
0 & \dots & \dots & \dots & \dots & 0 \\
\end{pmatrix} \\
J_{n}(0) \text{ is nilpotent with } (J_{n}(0))^{n} = 0 \\
\text{Let } k = n - 1 \\
B^{k} = 2^{k}\lambda^{k}(J_{n}(0))^{k} + (J_{n}(0))^{n} \cdot f(J_{n}(0)) = 2^{k}\lambda^{k}(J_{n}(0))^{k} \neq 0 \\
\implies [B^{k} = 0 \iff (J_{n}(0))^{k} = 0 \iff k \geq n] \\
m_{A}(A) = (A - \lambda^{2}I)^{k} = B^{k} \\
\implies [m_{A}(A) = 0 \iff k \geq n] \\
\implies m_{A}(x) = P_{A}(x) = (x-\lambda^{2})^{n} \\
\implies \boxed{ (J_{n}(\lambda))^{2} \sim J_{n}(\lambda^{2}) }
}
$$
# 7b
$$
\displaylines{
\text{Let } J_{n}(\lambda) \in \mathbb{C}^{n \times n} \\
\text{Prove: } \exists B: B^{2} = J_{n}(\lambda) \\
\\
\text{Proof:} \\
\mathbb{C} \text{ is algebraically closed} \implies \exists \sqrt{ \lambda } \in \mathbb{C} \\
\text{Let } C = J_{n}(\sqrt{ \lambda }) \\
C^{2} = (J_{n}(\sqrt{ \lambda }))^{2} \\
\text{By 7a } (J_{n}(\sqrt{ \lambda }))^{2} \sim J_{n}((\sqrt{ \lambda })^{2}) = J_{n}(\lambda) \\
\implies C^{2} = PJ_{n}(\lambda)P^{-1} \\
\text{Let } B = P^{-1}CP \\
\implies \boxed{ B^{2} = P^{-1}C^{2}P = P^{-1}PJ_{n}(\lambda)P^{-1}P = J_{n}(\lambda) } \\
}
$$
# 7c
$$
\displaylines{
\text{Let } A_{J} \in \mathbb{C}^{n \times n} \text{ be an invertible Jordan form matrix} \\
\text{Prove: } \exists B: B^{2} = A_{J} \\
\\
\text{Proof:} \\
\text{Let } A_{J} = J_{n_{1}}(\lambda_{1}) \oplus \dots \oplus J_{n_{k}}(\lambda_{k}) \\
\text{By 7a } \forall i \in [1, k]: (J_{n_{i}}(\sqrt{ \lambda_{i} }))^{2} = P_{i}J_{n_{i}}(\lambda_{i})P_{i}^{-1} \\
\text{Similarly to 7b, let } \forall i \in [1, k]: B_{i} = P^{-1}_{i}J_{n_{i}}(\sqrt{ \lambda_{i} })P_{i} \\
\text{Let } B = \begin{pmatrix}
B_{1} & 0 & \dots & 0 \\
0 & B_{2} & \ddots & \vdots \\
\vdots & \ddots & \ddots & 0 \\
0 & \dots & 0 & B_{k} \\
\end{pmatrix} \\
B^{2} = \begin{pmatrix}
B_{1}^{2} & 0 & \dots & 0 \\
0 & B_{2}^{2} & \ddots & \vdots \\
\vdots & \ddots & \ddots & 0 \\
0 & \dots & 0 & B_{k}^{2} \\
\end{pmatrix} = \begin{pmatrix}
J_{n_{1}}(\lambda_{1}) & 0 & \dots & 0 \\
0 & J_{n_{2}}(\lambda_{2}) & \ddots & \vdots \\
\vdots & \ddots & \ddots & 0 \\
0 & \dots & 0 & J_{n_{k}}(\lambda_{k}) \\
\end{pmatrix} = A_{J} \\
}
$$
# 7d
$$
\displaylines{
\text{Let } A \in \mathbb{C}^{n \times n} \\
\text{Prove: } \exists B: B^{2} = A \\
\\
\text{Proof:} \\
A \sim A_{J} \\
\implies A = PA_{J}P^{-1} \\
\text{Let } A_{J} = J_{n_{1}}(\lambda_{1}) \oplus \dots \oplus J_{n_{k}}(\lambda_{k}) \\
\text{By 7a } \forall i \in [1, k]: (J_{n_{i}}(\sqrt{ \lambda_{i} }))^{2} = P_{i}J_{n_{i}}(\lambda_{i})P_{i}^{-1} \\
\text{Similarly to 7b, let } \forall i \in [1, k]: C_{i} = P^{-1}_{i}J_{n_{i}}(\sqrt{ \lambda_{i} })P_{i} \\
\text{Let } C = \begin{pmatrix}
C_{1} & 0 & \dots & 0 \\
0 & C_{2} & \ddots & \vdots \\
\vdots & \ddots & \ddots & 0 \\
0 & \dots & 0 & C_{k} \\
\end{pmatrix} \\
\implies C^{2} = A_{J} \\
\text{Let } B = PCP^{-1} \\
\implies \boxed{ B^{2} = PC^{2}P^{-1} = PA_{J}P^{-1} = A } \\
}
$$
