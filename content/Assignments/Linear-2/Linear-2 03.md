---
{"publish":true,"created":"10/04/25, 18:04","modified":"2025-11-21T21:10:02.695+02:00","tags":["Academia","Assignment","Linear-2"],"cssclasses":""}
---

# Table of used notations
$$
\displaylines{
\begin{array}{c|c}
\text{Algebraic multiplicity} & \mu_{A}(\lambda) \\
\text{Geometric multiplicity} & \gamma_{A}(\lambda) \\
\text{Eigenspace in respect to eigenvalue } \lambda & E_{\lambda} \\
\end{array}
}
$$
# 1a
$$
\displaylines{
\text{Let } T: \mathbb{R}_{2}[x] \to \mathbb{R}_{2}[x] \\
\text{Let } a, b \in \mathbb{R} \\
T(p(x)) = p(ax+b) \\
\text{Find all values of } a, b \text{ for which } T \text{ is diagonalizable} \\
\\
\text{Solution:} \\
\text{Let } B = \Set{ 1, x, x^{2} } \\
[T(1)]_{B} = [1]_{B} = \begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix} \\
[T(x)]_{B} = [ax + b]_{B} = \begin{pmatrix}
b \\
a \\
0 \\
\end{pmatrix} \\
[T(x^{2})]_{B} = [(ax+b)^{2}]_{B} = [a^{2}x^{2} + 2abx + b^{2}]_{B} = \begin{pmatrix}
b^{2} \\
2ab \\
a^{2} \\
\end{pmatrix} \\
[T]^{B}_{B} = \begin{pmatrix}
1 & b & b^{2} \\
0 & a & 2ab \\
0 & 0 & a^{2} \\
\end{pmatrix} \\
P_{T}(\lambda) = \det(\lambda I-[T]^{B}_{B}) = \begin{vmatrix}
\lambda-1 & -b & -b^{2} \\
0 & \lambda-a & -2ab \\
0 & 0 & \lambda-a^{2} \\
\end{vmatrix} = (\lambda-1)(\lambda-a)(\lambda-a^{2}) \\
}
$$
$$
\displaylines{
\text{Let } a = 1 \\
\implies P_{T}(\lambda) = (\lambda-1)^{3} \\
\lambda = 1 \implies \left(\begin{array}{ccc|c}
0 & -b & -b^{2} & 0 \\
0 & 0 & -2b & 0 \\
0 & 0 & 0 & 0 \\
\end{array}\right) \implies \left[\begin{array}{}
b = 0 \implies \gamma_{T}(\lambda) = 3, \quad T \text{ is diagonalizable} \\
b \neq 0 \implies \gamma_{T}(\lambda) = 1, \quad T \text{ is not diagonalizable} \\
\end{array}\right. \\
\\
\text{Let } a = -1 \\
\implies P_{T}(\lambda) = (\lambda-1)^{2}(\lambda+1) \\
\lambda = 1 \implies \left(\begin{array}{ccc|c}
0 & -b & -b^{2} & 0 \\
0 & 2 & 2b & 0 \\
0 & 0 & 0 & 0 \\
\end{array}\right) \to \left(\begin{array}{ccc|c}
0 & 0 & 0 & 0 \\
0 & 1 & b & 0 \\
0 & 0 & 0 & 0 \\
\end{array}\right) \implies \gamma_{T}(\lambda) = 2 \\
\implies T \text{ is diagonalizable} \\
\\
\text{Let } a = 0 \\
\implies P_{T}(\lambda) = (\lambda-1)\lambda^{2} \\
\lambda = 0 \implies \left(\begin{array}{ccc|c}
-1 & -b & -b^{2} & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
\end{array}\right) \implies \gamma_{T}(\lambda) = 2 \implies T \text{ is diagonalizable} \\
\\
a \not\in \Set{ -1, 0, 1 } \implies \sum_{i=1}^{3}  \gamma_{T}(\lambda_{i}) = 3 \implies T \text{ is diagonalizable} \\
\implies \boxed{ \left[\begin{array}{}
a = 1, b = 0 \\
a \neq 1, b \in \mathbb{R} \\
\end{array}\right. \implies T \text{ is diagonalizable} } \\
}
$$
# 1b
$$
\displaylines{
\text{Let } T: \mathbb{R}_{2}[x] \to \mathbb{R}_{2}[x] \\
T(p(x)) = p(2x+1) \\
\text{Find basis } B \text{ such that } [T]^{B}_{B} \text{ is diagonal} \\
\\
\text{Solution:} \\
\text{Let } C = \Set{ 1, x, x^{2} } \\
\text{As shown in 1a: } [T]^{C}_{C} = \begin{pmatrix}
1 & 1 & 1 \\
0 & 2 & 4 \\
0 & 0 & 4 \\
\end{pmatrix} \\
\implies P_{T}(\lambda) = (\lambda-1)(\lambda-2)(\lambda-4) \\
\lambda = 1 \implies \left(\begin{array}{ccc|c}
0 & -1 & -1 & 0 \\
0 & -1 & -4 & 0 \\
0 & 0 & -3 & 0 \\
\end{array}\right) \to \left(\begin{array}{ccc|c}
0 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
\end{array}\right) \implies E_{1} = sp\Set{ \begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix} } \\
\lambda = 2 \implies \left(\begin{array}{ccc|c}
1 & -1 & -1 & 0 \\
0 & 0 & -4 & 0 \\
0 & 0 & -2 & 0 \\
\end{array}\right) \to \left(\begin{array}{ccc|c}
1 & -1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 0 \\
\end{array}\right) \implies E_{2} = sp\Set{ \begin{pmatrix}
1 \\
1 \\
0 \\
\end{pmatrix} } \\
\lambda = 4 \implies \left(\begin{array}{ccc|c}
3 & -1 & -1 & 0 \\
0 & 2 & -4 & 0 \\
0 & 0 & 0 & 0 \\
\end{array}\right) \implies E_{4} = sp\Set{ \begin{pmatrix}
1 \\
2 \\
1 \\
\end{pmatrix} } \\
}
$$
$$
\displaylines{
\text{Let } B = \Set{ v_{1}, v_{2}, v_{3} } \\
\implies \left\{\begin{array}{}
[v_{1}]_{C} = \begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix} \implies & v_{1} = 1 \\
[v_{2}]_{C} = \begin{pmatrix}
1 \\
1 \\
0 \\
\end{pmatrix} \implies & v_{2} = 1 + x \\
[v_{3}]_{C} = \begin{pmatrix}
1 \\
2 \\
1 \\
\end{pmatrix} \implies & v_{3} = 1 + 2x + x^{2} \\
\end{array}\right. \\
[T(v_{1})]_{B} = [T(1)]_{B} = [1]_{B} = \begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix} \\
[T(v_{2})]_{B} = [T(1+x)]_{B} = [2+2x]_{B} = \begin{pmatrix}
0 \\
2 \\
0 \\
\end{pmatrix} \\
[T(v_{3})]_{B} = [T(1+2x+x^{2})]_{B} = [4+8x+4x^{2}]_{B} = \begin{pmatrix}
0 \\
0 \\
4 \\
\end{pmatrix} \\
\implies [T]^{B}_{B} = \begin{pmatrix}
1 & 0 & 0 \\
0 & 2 & 0 \\
0 & 0 & 4 \\
\end{pmatrix} \\
\implies \boxed{ B = \Set{ 1, 1+x, 1+2x+x^{2} } } \\
}
$$
# 2a
$$
\displaylines{
A = \begin{pmatrix}
1 & 0 & 0 & 0 & 0 & 1 \\
0 & 0 & a & 0 & c & 0 \\
0 & -a & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & -a & 0 \\
0 & 0 & 0 & a & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & b \\
\end{pmatrix} \in \mathbb{R}^{6 \times 6} \\
\text{Find all values } a, b, c \in \mathbb{R} \text{ such that } A \text{ is diagonalizable} \\
\\
\text{Solution:} \\
P_{A}(\lambda) = \det(\lambda I-A) = \begin{vmatrix}
\lambda-1 & 0 & 0 & 0 & 0 & -1 \\
0 & \lambda & -a & 0 & -c & 0 \\
0 & a & \lambda & 0 & 0 & 0 \\
0 & 0 & 0 & \lambda & a & 0 \\
0 & 0 & 0 & -a & \lambda & 0 \\
0 & 0 & 0 & 0 & 0 & \lambda-b \\
\end{vmatrix} = \\
= (\lambda-1)\begin{vmatrix}
\lambda & -a & 0 & -c & 0 \\
a & \lambda & 0 & 0 & 0 \\
0 & 0 & \lambda & a & 0 \\
0 & 0 & -a & \lambda & 0 \\
0 & 0 & 0 & 0 & \lambda-b \\
\end{vmatrix} = (\lambda-1)(\lambda-b)\begin{vmatrix}
\lambda & -a & 0 & -c \\
a & \lambda & 0 & 0 \\
0 & 0 & \lambda & a \\
0 & 0 & -a & \lambda \\
\end{vmatrix} \\
\text{Let } A_{1} = \begin{pmatrix}
\lambda & -a \\
a & \lambda \\
\end{pmatrix} \\
\implies P_{A}(\lambda) = (\lambda-1)(\lambda-b)\begin{vmatrix}
A_{1} & * \\
0 & A_{1}^{T} \\
\end{vmatrix} = (\lambda-1)(\lambda-b)\det(A_{1})\det(A_{1}^{T}) = \\
= (\lambda-1)(\lambda-b)(\lambda^{2}+a^{2})^{2} \\
a^{2} > 0 \implies \text{Characteristic polynom can not be factorized into linear factors} \\
\implies A \text{ is not diagonalizable} \\
}
$$
$$
\displaylines{
\text{Let } a = 0 \\
\implies P_{A}(\lambda) = (\lambda-1)(\lambda-b)\lambda^{4} \\
\text{Let } b = 0 \\
\implies P_{A}(\lambda) = (\lambda-1)\lambda^{5} \\
\lambda = 0 \implies \left(\begin{array}{cccccc|c}
-1 & 0 & 0 & 0 & 0 & -1 & 0 \\
0 & 0 & 0 & 0 & -c & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 \\
\end{array}\right) \\
\implies \left[\begin{array}{}
c = 0 \implies \gamma_{A}(\lambda) = 5, \quad A \text{ is diagonalizable} \\
c \neq 0 \implies \gamma_{A}(\lambda) = 4, \quad A \text{ is not diagonalizable} \\
\end{array}\right. \\
\text{Let } b = 1 \\
\implies P_{A}(\lambda) = (\lambda-1)^{2}\lambda^{4} \\
\lambda = 1 \implies \left(\begin{array}{cccccc|c}
0 & 0 & 0 & 0 & 0 & -1 & 0 \\
0 & 1 & 0 & 0 & -c & 0 & 0 \\
0 & 0 & 1 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 1 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 1 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 \\
\end{array}\right) \implies \gamma_{A}(\lambda) = 1 \implies A \text{ is not diagonalizable} \\
\text{Let } b \not\in \Set{ 0, 1 } \\
\implies P_{A}(\lambda) = (\lambda-1)(\lambda-b)\lambda^{4} \\
\lambda = 0 \implies \left(\begin{array}{cccccc|c}
-1 & 0 & 0 & 0 & 0 & -1 & 0 \\
0 & 0 & 0 & 0 & -c & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & -b & 0 \\
\end{array}\right) \\
\implies \left[\begin{array}{}
c = 0 \implies \gamma_{A}(\lambda) = 4, \quad A \text{ is diagonalizable} \\
c \neq 0 \implies \gamma_{A}(\lambda) = 3, \quad A \text{ is not diagonalizable} \\
\end{array}\right. \\
\implies \boxed{ \left\{\begin{array}{}
a = 0 \\
b \neq 1 \\
c = 0 \\
\end{array}\right. \implies A \text{ is diagonalizable} } \\
}
$$
# 2b
$$
\displaylines{
A = \begin{pmatrix}
1 & 0 & 0 & 0 & 0 & 1 \\
0 & 0 & a & 0 & c & 0 \\
0 & -a & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & -a & 0 \\
0 & 0 & 0 & a & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & b \\
\end{pmatrix} \in \mathbb{C}^{6 \times 6} \\
\text{Find all values } a, b, c \in \mathbb{C} \text{ such that } A \text{ is diagonalizable} \\
\\
\text{Solution:} \\
\text{By 2a: } P_{A}(\lambda) = (\lambda-1)(\lambda-b)(\lambda^{2}+a^{2})^{2} = (\lambda-1)(\lambda-b)(\lambda-ai)^{2}(\lambda+ai)^{2} \\
a = 0 \implies \text{By 2a: } \left\{\begin{array}{}
a = 0 \\
b \neq 1 \\
c = 0 \\
\end{array}\right. \implies A \text{ is diagonalizable} \\
\text{Let } a = -i \\
\implies P_{A}(\lambda) = (\lambda-1)^{3}(\lambda-b)(\lambda+1)^{2} \\
\lambda = 1 \implies \left(\begin{array}{cccccc|c}
0 & 0 & 0 & 0 & 0 & -1 & 0 \\
0 & 1 & i & 0 & -c & 0 & 0 \\
0 & -i & 1 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 1 & -i & 0 & 0 \\
0 & 0 & 0 & i & 1 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 1-b & 0 \\
\end{array}\right) \to \left(\begin{array}{cccccc|c}
0 & 0 & 0 & 0 & 0 & 1 & 0 \\
0 & 0 & 0 & 0 & -c & 0 & 0 \\
0 & 1 & i & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & i & 1 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 \\
\end{array}\right) \\
c \neq 0 \implies \gamma_{A}(\lambda) = 2 \implies A \text{ is not diagonalizable} \\
\text{Let } c = 0 \\
\lambda = -1 \implies \left(\begin{array}{cccccc|c}
-2 & 0 & 0 & 0 & 0 & -1 & 0 \\
0 & -1 & i & 0 & 0 & 0 & 0 \\
0 & -i & -1 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & -1 & -i & 0 & 0 \\
0 & 0 & 0 & i & -1 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & -1-b & 0 \\
\end{array}\right) \to \\
\left(\begin{array}{cccccc|c}
2 & 0 & 0 & 0 & 0 & 1 & 0 \\
0 & 1 & -i & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & i & -1 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 1+b & 0 \\
\end{array}\right) \implies \gamma_{A}(\lambda) = \mu_{A}(\lambda) \implies A \text{ is diagonalizable} \\
}
$$
$$
\displaylines{
\text{Let } a = i \\
\implies P_{A}(\lambda) = (\lambda-1)^{3}(\lambda-b)(\lambda+1)^{2} \\
\lambda = 1 \implies \left(\begin{array}{cccccc|c}
0 & 0 & 0 & 0 & 0 & -1 & 0 \\
0 & 1 & -i & 0 & -c & 0 & 0 \\
0 & i & 1 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 1 & i & 0 & 0 \\
0 & 0 & 0 & -i & 1 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 1-b & 0 \\
\end{array}\right) \to \left(\begin{array}{cccccc|c}
0 & 0 & 0 & 0 & 0 & 1 & 0 \\
0 & 0 & 0 & 0 & -c & 0 & 0 \\
0 & -1 & i & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 1 & i & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 \\
\end{array}\right) \\
c \neq 0 \implies \gamma_{A}(\lambda) = 2 \implies A \text{ is not diagonalizable} \\
\text{Let } c = 0 \\
\lambda = -1 \implies \left(\begin{array}{cccccc|c}
0 & 0 & 0 & 0 & 0 & -1 & 0 \\
0 & -1 & -i & 0 & -c & 0 & 0 \\
0 & i & -1 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & -1 & i & 0 & 0 \\
0 & 0 & 0 & -i & -1 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & -1-b & 0 \\
\end{array}\right) \to \left(\begin{array}{cccccc|c}
2 & 0 & 0 & 0 & 0 & 1 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 1 & i & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & -1 & i & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 1+b & 0 \\
\end{array}\right) \\
\implies \gamma_{A}(\lambda) = \mu_{A}(\lambda) \implies A \text{ is diagonalizable} \\
}
$$
$$
\displaylines{
\text{Let } a \not\in \Set{ -i, 0, i } \\
\implies P_{A}(\lambda) = (\lambda-1)(\lambda-b)(\lambda-ai)^{2}(\lambda+ai)^{2} \\
\lambda = ai \implies \left(\begin{array}{cccccc|c}
ai-1 & 0 & 0 & 0 & 0 & -1 & 0 \\
0 & ai & -a & 0 & -c & 0 & 0 \\
0 & a & ai & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & ai & a & 0 & 0 \\
0 & 0 & 0 & -a & ai & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & ai-b & 0 \\
\end{array}\right) \to \\
\left(\begin{array}{cccccc|c}
1-ai & 0 & 0 & 0 & 0 & 1 & 0 \\
0 & 0 & 0 & 0 & c & 0 & 0 \\
0 & i & -1 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & i & 1 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & ai-b & 0 \\
\end{array}\right) \\
c \neq 0 \implies \gamma_{A}(\lambda) = \mu_{A}(\lambda) - 1 \implies A \text{ is not diagonalizable} \\
}
$$
$$
\displaylines{
\text{Let } c = 0 \\
\lambda = -ai \implies \left(\begin{array}{cccccc|c}
-ai-1 & 0 & 0 & 0 & 0 & -1 & 0 \\
0 & -ai & -a & 0 & 0 & 0 & 0 \\
0 & a & -ai & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & -ai & a & 0 & 0 \\
0 & 0 & 0 & -a & -ai & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & -ai-b & 0 \\
\end{array}\right) \\
\to \left(\begin{array}{cccccc|c}
ai+1 & 0 & 0 & 0 & 0 & 1 & 0 \\
0 & 1 & -i & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & -i & 1 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & ai+b & 0 \\
\end{array}\right) \implies \gamma_{A}(\lambda) = \mu_{A}(\lambda) \\
b = 1, \lambda = 1 \implies \left(\begin{array}{cccccc|c}
0 & 0 & 0 & 0 & 0 & -1 & 0 \\
0 & 1 & -a & 0 & 0 & 0 & 0 \\
0 & 0 & 1+a^{2} & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 1 & a & 0 & 0 \\
0 & 0 & 0 & 0 & 1+a^{2} & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 \\
\end{array}\right) \\
\implies \gamma_{A}(\lambda) = 1 \implies A \text{ is not diagonalizable} \\
\boxed{ \left[\begin{array}{}
a = -i, c = 0 \\
a = i, c = 0 \\
a \not\in \Set{ -i, i }, b \neq 1, c = 0 \\ 
\end{array}\right. \implies A \text{ is diagonalizable} } \\
}
$$
# 3a
$$
\displaylines{
A = \begin{pmatrix}
1 & 0 & 1 & 0 & 0 \\
0 & 1 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 \\
0 & 0 & 0 & 2 & 0 \\
0 & 0 & 0 & 0 & 2 \\
\end{pmatrix} \in \mathbb{R}^{5 \times 5} \\
\text{Determine whether } A \text{ is diagonalizable} \\
\\
\text{Solution:} \\
P_{A}(\lambda) = \det(\lambda I - A) = \begin{vmatrix}
\lambda-1 & 0 & -1 & 0 & 0 \\
0 & \lambda-1 & 0 & 0 & 0 \\
0 & 0 & \lambda-1 & 0 & 0 \\
0 & 0 & 0 & \lambda-2 & 0 \\
0 & 0 & 0 & 0 & \lambda-2 \\
\end{vmatrix} = \\
= (\lambda-1)^{3}(\lambda-2)^{2} \\
\lambda = 1 \implies \left(\begin{array}{ccccc|c}
0 & 0 & -1 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & -1 & 0 & 0 \\
0 & 0 & 0 & 0 & -1 & 0 \\
\end{array}\right) \\
\implies \gamma_{A}(\lambda) = 2 \implies \boxed{ A \text{ is not diagonalizable} } \\
}
$$
# 3b
$$
\displaylines{
A = \begin{pmatrix}
1 & 0 & 0 & 1 & 0 \\
0 & 1 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 \\
0 & 0 & 0 & 2 & 0 \\
0 & 0 & 0 & 0 & 2 \\
\end{pmatrix} \in \mathbb{R}^{5 \times 5} \\
\text{Determine whether } A \text{ is diagonalizable} \\
\\
\text{Solution:} \\
P_{A}(\lambda) = \det(\lambda I - A) = \begin{vmatrix}
\lambda-1 & 0 & 0 & -1 & 0 \\
0 & \lambda-1 & 0 & 0 & 0 \\
0 & 0 & \lambda-1 & 0 & 0 \\
0 & 0 & 0 & \lambda-2 & 0 \\
0 & 0 & 0 & 0 & \lambda-2 \\
\end{vmatrix} = \\
= (\lambda-1)^{3}(\lambda-2)^{2} \\
\lambda = 1 \implies \left(\begin{array}{ccccc|c}
0 & 0 & 0 & -1 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & -1 & 0 & 0 \\
0 & 0 & 0 & 0 & -1 & 0 \\
\end{array}\right) \\
\implies \gamma_{A}(\lambda) = 3 \\
\lambda = 2 \implies \left(\begin{array}{ccccc|c}
1 & 0 & 0 & -1 & 0 & 0 \\
0 & 1 & 0 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 \\
\end{array}\right) \implies \gamma_{A}(\lambda) = 2 \\
\implies \boxed{ A \text{ is diagonalizable} } \\
}
$$
# 3c
$$
\displaylines{
A = \begin{pmatrix}
1 & 0 & 1 & 0 & 0 \\
0 & 1 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 \\
0 & 0 & 0 & 2 & 1 \\
0 & 0 & 0 & 0 & 2 \\
\end{pmatrix} \in \mathbb{R}^{5 \times 5} \\
\text{Determine whether } A \text{ is diagonalizable} \\
\\
\text{Solution:} \\
P_{A}(\lambda) = \det(\lambda I - A) = \begin{vmatrix}
\lambda-1 & 0 & -1 & 0 & 0 \\
0 & \lambda-1 & 0 & 0 & 0 \\
0 & 0 & \lambda-1 & 0 & 0 \\
0 & 0 & 0 & \lambda-2 & -1 \\
0 & 0 & 0 & 0 & \lambda-2 \\
\end{vmatrix} = \\
= (\lambda-1)^{3}(\lambda-2)^{2} \\
\lambda = 1 \implies \left(\begin{array}{ccccc|c}
0 & 0 & -1 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & -1 & -1 \\
0 & 0 & 0 & 0 & -1 \\
\end{array}\right) \\
\implies \gamma_{A}(\lambda) = 2 \implies \boxed{ A \text{ is not diagonalizable} } \\
}
$$
# 4
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \text{ be diagonalizable} \\
\text{Let eigenvalues of } A \text{ be positive} \\
\text{Prove: } \exists B \in \mathbb{R}^{n \times n}: B^{2} = A \\
\\
\text{Proof:} \\
\text{Let } \Set{ \lambda_{1}, \dots, \lambda_{n} } \text{ be eigenvalues of } A, \text{ not neccessarily distinct} \\
A \text{ is diagonalizable} \implies \exists \Set{ v_{1}, \dots, v_{n} } \text{ set of eigenvectors of $A$, which is a basis of } \mathbb{R}^{n} \\
\text{Let } P = \begin{pmatrix}
\overset{ | }{ \underset{ | }{ v_{1} } } & \dots & \overset{ | }{ \underset{ | }{ v_{n} } } \\
\end{pmatrix} \\
\text{Let } D = \begin{pmatrix}
\lambda_{1} & 0 & \dots & 0 \\
0 & \lambda_{2} & \ddots & \vdots \\
\vdots & \ddots & \ddots & 0 \\
0 & \dots & 0 & \lambda_{n} \\
\end{pmatrix} \\
A = PDP^{-1} \\
\forall i \in [1, n]: \lambda_{i} > 0 \implies \exists \sqrt{ \lambda_{i} } \\
\text{Let } C = \begin{pmatrix}
\sqrt{ \lambda_{1} } & 0 & \dots & 0 \\
0 & \sqrt{ \lambda_{2} } & \ddots & \vdots \\
\vdots & \ddots & \ddots & 0 \\
0 & \dots & 0 & \sqrt{ \lambda_{n} } \\
\end{pmatrix} \\
C^{2} = D \\
A = PDP^{-1} = PC^{2}P^{-1} = PCP^{-1}PCP^{-1} = (PCP^{-1})^{2} \\
\implies \boxed{ \exists B = PCP^{-1}: A = B^{2} } \\
}
$$
# 5
$$
\displaylines{
\text{Let } A, B \in \mathbb{F}^{n \times n} \\
\text{Let } v \in \mathbb{F}^{n} \\
\text{Let } \alpha, \beta \in \mathbb{F} \\
}
$$
## 5a
$$
\displaylines{
\text{Prove or disprove: } \alpha \text{ is an eigenvalue of } A \implies \alpha^{2} \text{ is an eigenvalue of } A^{2} \\
\\
\text{Proof:} \\
\exists v \neq 0 \in \mathbb{F}^{n}: Av = \alpha v \\
\implies A^{2}v = A(Av) = A(\alpha v) = \alpha Av = \alpha^{2}v \\
}
$$
## 5b
$$
\displaylines{
\text{Prove or disprove: } \alpha^{2} \text{ is an eigenvalue of } A^{2} \implies \alpha \text{ is an eigenvalue of } A \\
\\
\text{Disproof:} \\
\text{Let } \alpha \neq 0 \\
\text{Let } A = \begin{pmatrix}
-\alpha & 0 \\
0 & -\alpha \\
\end{pmatrix} \in \mathbb{R}^{2 \times 2} \\
A^{2} = \alpha^{2}I \implies \alpha^{2} \text{ is an eigenvalue of } A^{2} \\
P_{A}(\lambda) = (\lambda+\alpha)^{2} \implies \alpha \text{ is not an eigenvalue of } A \\
}
$$
## 5c
$$
\displaylines{
\text{Let } \alpha \text{ be an eigenvalue of } A \\
\text{Let } \beta \text{ be an eigenvalue of } B \\
\text{Let } v \text{ be an eigenvector of } A, B \text{ in respect to } \alpha, \beta \\
\text{Prove or disprove: } \alpha + \beta \text{ is an eigenvalue of } A+B \\
\\
\text{Proof:} \\
Av = \alpha v \\
Bv = \beta v \\
\implies (A+B)v = Av + Bv = \alpha v + \beta v = (\alpha+\beta)v \\
}
$$
# 5d
$$
\displaylines{
\text{Let } \alpha \text{ be an eigenvalue of } A \\
\text{Let } \beta \text{ be an eigenvalue of } B \\
\text{Let } \alpha+\beta \text{ be an eigenvalue of } A + B \\
\text{Prove or disprove: } E_{\alpha} = E_{\beta} \\
\\
\text{Disproof:} \\
\text{Let } A = \begin{pmatrix}
0 & 0 \\
0 & 0 \\
\end{pmatrix}, \alpha = 0 \\
B = \begin{pmatrix}
1 & 0 \\
0 & 0 \\
\end{pmatrix}, \beta = 1 \\
A+B = B, \alpha + \beta = 1 \\
E_{\alpha} = \mathbb{R}^{2} \\
E_{\beta} = sp\Set{ \begin{pmatrix}
1 \\
0 \\
\end{pmatrix} } \\
}
$$
# 6a
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \\
\text{Let } A_{ij} = \left\{\begin{array}{}
1 & i - j \text{ is even} \\
0 & i - j \text{ is odd} \\
\end{array}\right. \\
\text{Prove: } rank(A) = \min\Set{ 2, n } \\
\\
\text{Proof:} \\
n = 1 \implies A = I \implies rank(A) = n = \min\Set{ 2, n } \\
n = 2 \implies A = \begin{pmatrix}
1 & 0 \\
0 & 1 \\
\end{pmatrix} \implies rank(A) = 2 = \min\Set{ 2, n } \\
\text{Let } n > 2 \\
\forall i \in [1, n]: R_{i}(A) = \left\{\begin{array}{}
R_{1}(A) & i \text{ is odd} \\
R_{2}(A) & i \text{ is even} \\
\end{array}\right. \\
R_{1}(A) \neq R_{2}(A) \\
\implies R(A) = sp\Set{ R_{1}(A), R_{2}(A) } \implies rank(A) = 2 = \min\Set{ 2, n } \\
}
$$
# 6b
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \\
\text{Let } A_{ij} = \left\{\begin{array}{}
1 & i - j \text{ is even} \\
0 & i - j \text{ is odd} \\
\end{array}\right. \\
\text{Prove: } A \text{ is diagonalizable} \\
\\
\text{Proof:} \\
n = 1, 2 \implies A = I = D \\
\text{Let } n > 2 \\
rank(A) = 2 \implies rank(0I - A) = rank(-A) = 2 \implies \gamma_{A}(0) = n - 2 \\
\text{If we can find two more eigenvalues or one eigenvalue with } \gamma_{A}(\lambda) = 2 \\
\text{then } A \text{ is diagonalizable} \\
\text{Let } n \text{ be even} \\
R_{i}(A)C_{1}(A) = \left\{\begin{array}{}
\frac{n}{2} & i \text{ is odd} \\
0 & i \text{ is even} \\
\end{array}\right. \\
\implies AC_{1}(A) = \begin{pmatrix}
\frac{n}{2} \\
0 \\
\frac{n}{2} \\
0 \\
\vdots \\
\end{pmatrix} = \frac{n}{2} C_{1}(A) \\
R_{i}(A)C_{2}(A) = \left\{\begin{array}{}
0 & i \text{ is odd} \\
\frac{n}{2} & i \text{ is even} \\
\end{array}\right. \\
\implies AC_{2}(A) = \begin{pmatrix}
0 \\
\frac{n}{2} \\
0 \\
\frac{n}{2} \\
\vdots \\
\end{pmatrix} = \frac{n}{2} C_{2}(A) \\
\Set{ C_{1}(A), C_{2}(A) } \text{ is a linear independence} \implies \gamma_{A}\left( \frac{n}{2} \right) = 2 = \mu_{A}\left( \frac{n}{2} \right) \\
\implies \left\{\begin{array}{}
\gamma_{A}(0) = \mu_{A}(0) = n - 2 \\
\gamma_{A}\left( \frac{n}{2} \right) = \mu_{A}\left( \frac{n}{2} \right) = 2 \\
\mu_{A}(0) + \mu_{A}\left( \frac{n}{2} \right) = n \\
\end{array}\right. \implies \boxed{ A \text{ is diagonalizable} } \\
}
$$
$$
\displaylines{
\text{Let } n \text{ be odd} \\
R_{i}(A)C_{1}(A) = \left\{\begin{array}{}
\frac{n+1}{2} & i \text{ is odd} \\
0 & i \text{ is even} \\
\end{array}\right. \\
\implies AC_{1}(A) = \begin{pmatrix}
\frac{n+1}{2} \\
0 \\
\frac{n+1}{2} \\
0 \\
\vdots \\
\end{pmatrix} = \frac{n+1}{2}C_{1}(A) \\
R_{i}(A)C_{2}(A) = \left\{\begin{array}{}
0 & i \text{ is odd} \\
\frac{n-1}{2} & i \text{ is even} \\
\end{array}\right. \\
\implies AC_{2}(A) = \begin{pmatrix}
0 \\
\frac{n-1}{2} \\
0 \\
\frac{n-1}{2} \\
\vdots \\
\end{pmatrix} = \frac{n-1}{2}C_{2}(A) \\
\implies \left\{\begin{array}{}
\gamma_{A}(0) = \mu_{A}(0) = n - 2 \\
\gamma_{A}\left( \frac{n+1}{2} \right) = \mu_{A}\left( \frac{n+1}{2} \right) = 1 \\
\gamma_{A}\left( \frac{n-1}{2} \right) = \mu_{A}\left( \frac{n-1}{2} \right) = 1 \\
\mu_{A}(0) + \mu_{A}\left( \frac{n+1}{2} \right) + \mu_{A}\left( \frac{n-1}{2} \right) = n \\
\end{array}\right. \implies \boxed{ A \text{ is diagonalizable} } \\
}
$$
# 7a
$$
\displaylines{
\text{Let } A, B \in \mathbb{F}^{n \times n}: B = P^{-1}AP \\
\text{Let } v \in \mathbb{F}^{n} \\
\text{Let } \lambda, \alpha \in \mathbb{F} \\
\text{Show: } \left\{\begin{array}{}
Av = \lambda v \iff BP^{-1}v = \lambda P^{-1}v \\
Bv = \alpha v \iff APv = \alpha Pv \\
\end{array}\right. \\
\\
\text{Solution:} \\
Av = \lambda v \iff PBP^{-1}v = \lambda v \iff P^{-1}PBP^{-1}v = P^{-1}\lambda v \iff BP^{-1}v = \lambda P^{-1}v \\
Bv = \alpha v \iff P^{-1}APv = \alpha v \iff PP^{-1}APv = P\alpha v \iff APv = \alpha Pv \\
}
$$
# 7b
$$
\displaylines{
\text{Let } k \in \mathbb{N} \\
\text{Show: } \Set{ v_{1}, \dots, v_{k} } \text{ is a linear independence} \\
\implies \forall Q \in \mathbb{F}^{n \times n}, rank(Q) = n: \Set{ Qv_{1}, \dots, Qv_{k} } \text{ is a linear independence} \\
\\
\text{Solution:} \\
\text{Let } \sum_{i=1}^{k} \alpha_{i} Qv_{i} = 0 \\
\implies Q \cdot \sum_{i=1}^{k} \alpha_{i}v_{i} = 0 \\
rank(Q) = n \implies N(Q) = \Set{ 0 } \implies \sum_{i=1}^{k} \alpha_{i}v_{i} = 0 \\
\implies \alpha_{1} = \dots = \alpha_{k} = 0 \\
\implies \boxed{ \Set{ Qv_{1}, \dots, Qv_{k} } \text{ is a linear independence} } \\
}
$$
# 7c
$$
\displaylines{
\text{Let } A, B \in \mathbb{F}^{n \times n}: B = P^{-1}AP \\
\text{Show: } \forall \lambda \text{ eigenvalue of } A: \gamma_{A}(\lambda) = \gamma_{B}(\lambda) \\
\\
\text{Solution:} \\
\text{Let } \lambda \text{ be an eigenvalue of } A \\
\text{Let } E_{\lambda}(A) = sp\Set{ v_{1}, \dots, v_{k} } \implies \gamma_{A}(\lambda) = k \\
Av = \lambda v \iff BP^{-1}v = \lambda P^{-1}v \\
\implies E_{\lambda}(B) = sp\Set{ P^{-1}v_{1}, \dots, P^{-1}v_{k} } \\
\Set{ v_{1}, \dots, v_{k} } \text{ is a linear independence} \implies \Set{ P^{-1}v_{1}, \dots, P^{-1}v_{k} } \text{ is a linear independence} \\
\implies \Set{ P^{-1}v_{1}, \dots, P^{-1}v_{k} } \text{ is a basis of } E_{\lambda}(B) \implies \boxed{ \gamma_{B}(\lambda) = k = \gamma_{A}(\lambda) } \\
}
$$
# 8a
$$
\displaylines{
\text{Let } C \in \mathbb{R}^{n \times n} \text{ have } n \text{ distinct eigenvalues} \\
\text{Let } v \text{ be an eigenvector of } C \\
\text{Let } A \in \mathbb{R}^{n \times n}, rank(A) = n: AC = CA \\
\text{Determine whether } Av \text{ is an eigenvector of } C \\
\\
\text{Solution:} \\
\text{Let } \lambda \text{ be an eigenvalue of } C: Cv = \lambda v \\
CAv = ACv = \lambda Av \\
rank(A) = n \implies N(A) = \Set{ 0 } \\
v \neq 0 \implies Av \neq 0 \implies \boxed{ Av \text{ is an eigenvector of } C }
}
$$
# 8b
$$
\displaylines{
\text{Let } C \in \mathbb{R}^{n \times n} \text{ have } n \text{ distinct eigenvalues} \\
\text{Let } A \in \mathbb{R}^{n \times n}, rank(A) = n: AC = CA \\
\text{Determine whether } A \text{ is diagonalizable over } \mathbb{R} \\
\\
\text{Solution:} \\
\text{Let } \Set{ \lambda_{1}, \dots, \lambda_{n} } \text{ be distinct eigenvalues of } C \\
\text{Let } \Set{ v_{1}, \dots, v_{n} } \text{ be eigenvectors of } C \\
\text{Let } i \in [1, n] \\
\mu_{C}(\lambda_{i}) = 1 \implies E_{\lambda_{i}} = sp\Set{ v_{i} } \\
Cv_{i} = \lambda_{i}v_{i} \implies CAv_{i} = ACv_{i} = \lambda_{i}Av_{i} \\
\implies Av_{i} \in E_{\lambda} \implies \exists \alpha_{i} \in \mathbb{F}: Av_{i} = \alpha_{i} v_{i} \\
\implies v_{i} \text{ is an eigenvector of } A \\
\text{Let } P = \begin{pmatrix}
\overset{ | }{ \underset{ | }{ v_{1} } } & \dots & \overset{ | }{ \underset{ | }{ v_{n} } }
\end{pmatrix} \\
\Set{ v_{1}, \dots, v_{n} } \text{ is a linear independence} \implies \exists P^{-1} \\
P^{-1}AP = P^{-1}\begin{pmatrix}
\overset{ | }{ \underset{ | }{ Av_{1} } } & \dots & \overset{ | }{ \underset{ | }{ Av_{n} } } \\
\end{pmatrix} = P^{-1}\begin{pmatrix}
\overset{ | }{ \underset{ | }{ \alpha_{1}v_{1} } } & \dots & \overset{ | }{ \underset{ | }{ \alpha_{n}v_{n} } } \\
\end{pmatrix} = \\
\underset{ \begin{array}{}
P^{-1}\alpha_{i}v_{i} = \alpha_{i}P^{-1}C_{i}(P) \\
\alpha_{i}P^{-1}C_{i}(P) = \alpha_{i}C_{i}(P^{-1}P) \\
\alpha_{i}C_{i}(P^{-1}P) = \alpha_{i}e_{i} \\
\end{array} }{ = } \begin{pmatrix}
\alpha_{1} & 0 & \dots & 0 \\
0 & \alpha_{2} & \ddots & \vdots \\
\vdots & \ddots & \ddots & 0 \\
0 & \dots & 0 & \alpha_{n} \\
\end{pmatrix} = D \\
\implies \boxed{ A \text{ is diagonalizable} } \\
}
$$
