---
{"publish":true,"created":"01/05/25, 20:05","modified":"2025-11-21T21:10:02.718+02:00","tags":["Academia","Assignment","Linear-2"],"cssclasses":""}
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
# 1
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{3 \times 3} \\
A = \begin{pmatrix}
1 & 0 & a \\
0 & b & 0 \\
c & 0 & 1 \\
\end{pmatrix} \\
\text{Find all values } a, b, c \text{ such that } A \text{ is triangularizable} \\
\text{Find all values } a, b, c \text{ such that } A \text{ is diagonalizable} \\
\\
\text{Solution:} \\
P_{A}(\lambda) = \det(\lambda I-A) = \begin{vmatrix}
\lambda-1 & 0 & -a \\
0 & \lambda-b & 0 \\
-c & 0 & \lambda-1 \\
\end{vmatrix} = (\lambda-b)\begin{vmatrix}
\lambda-1 & -a \\
-c & \lambda-1 \\
\end{vmatrix} = \\
= (\lambda-b)((\lambda-1)^{2} - ac) \\
\\
ac < 0 \implies \forall \lambda \in \mathbb{R}: (\lambda-1)^{2} - ac > 0 \implies P_{A}(\lambda) \text{ is not factorizable into linear factors} \\
\implies A \text{ is not triangularizable (and not diagonalizable)} \\
\text{Let } ac \geq 0 \\
\implies P_{A}(\lambda) = (\lambda-b)(\lambda-1-\sqrt{ ac })(\lambda-1+\sqrt{ ac }) \\
\implies \boxed{ ac \geq 0 \implies A \text{ is triangularizable} } \\
\text{Let } a = 0 \\
\implies P_{A}(\lambda) = (\lambda-b)(\lambda-1)^{2} \\
\lambda = 1 \implies \left(\begin{array}{ccc|c}
0 & 0 & 0 \\
0 & 1 - b & 0 \\
-c & 0 & 0 \\
\end{array}\right) \quad c = 0 \iff \left[\begin{array}{}
b = 1 \implies \mu_{A}(1) = \gamma_{A}(1) = 3 \\
b \neq 1 \implies \mu_{A}(1) = \gamma_{A}(1) = 2 \\ 
\end{array}\right. \\
\implies \boxed{ a = c = 0 \implies A \text{ is diagonalizable} } \\
\text{Let } a \neq 0, c = 0 \\
\implies P_{A}(\lambda) = (\lambda-b)(\lambda-1)^{2} \\
\lambda = 1 \implies \left(\begin{array}{ccc|c}
0 & 0 & -a \\
0 & 1 - b & 0 \\
0 & 0 & 0 \\
\end{array}\right) \implies \gamma_{A}(1) = \mu_{A}(\lambda) - 1 \\ \implies A \text{ is not diagonalizable} \\
\text{Let } ac > 0 \\
\implies 1 - \sqrt{ ac } \neq 1 + \sqrt{ ac } \\
\boxed{ \left\{\begin{array}{}
b \neq 1 - \sqrt{ ac } \\
b \neq 1 + \sqrt{ ac } \\
\end{array}\right. \implies A \text{ is diagonalizable} } \\
\text{Let } b = 1 + \sqrt{ ac } \\
\implies P_{A}(\lambda) = (\lambda-1-\sqrt{ ac })^{2}(\lambda-1+\sqrt{ ac }) \\
\lambda = 1 + \sqrt{ ac } \implies \left(\begin{array}{ccc|c}
\sqrt{ ac } & 0 & -a \\
0 & 0 & 0 \\
-c & 0 & \sqrt{ ac } \\
\end{array}\right) \overset{ R_{3} + \frac{\sqrt{ ac }}{a}R_{1} }{ \to } \left(\begin{array}{ccc|c}
c & 0 & -\sqrt{ ac } \\
0 & 0 & 0 \\
0 & 0 & 0 \\
\end{array}\right) \implies \gamma_{A}(1+\sqrt{ ac }) = 2 \\
\implies \boxed{ b = 1 + \sqrt{ ac } \implies A \text{ is diagonalizable} } \\
}
$$
$$
\displaylines{
\text{Let } b = 1 - \sqrt{ ac } \\
\implies P_{A}(\lambda) = (\lambda-1-\sqrt{ ac })(\lambda-1+\sqrt{ ac })^{2} \\
\lambda = 1 - \sqrt{ ac } \implies \left(\begin{array}{ccc|c}
-\sqrt{ ac } & 0 & -a \\
0 & 0 & 0 \\
-c & 0 & -\sqrt{ ac } \\
\end{array}\right) \to \left(\begin{array}{ccc|c}
-c & 0 & -\sqrt{ ac } \\
0 & 0 & 0 \\
0 & 0 & 0 \\
\end{array}\right) \implies \gamma_{A}(1-\sqrt{ ac }) = 2 \\
\implies \boxed{ b = 1 - \sqrt{ ac } \implies A \text{ is diagonalizable} } \\
\implies \boxed{ \begin{array}{}
ac \geq 0 \implies A \text{ is triangularizable} \\
\left[\begin{array}{}
a = c = 0 \\
ac > 0 \\
\end{array}\right. \implies A \text{ is diagonalizable} \\
\end{array} } \\
}
$$
# 2a
$$
\displaylines{
\text{Let } A, B \in \mathbb{R}^{n \times n} \\
\text{Prove or disprove: } A \text{ is triangularizable} \implies A^{2} \text{ is triangularizable} \\
\\
\text{Proof:} \\
A \text{ is triangularizable} \iff \exists P, U: A = PUP^{-1} \\
\implies A^{2} = PU^{2}P^{-1} \\
U \text{ is upper-triangular} \implies U^{2} \text{ is upper-triangular} \\
\implies \boxed{ A^{2} \text{ is triangularizable} } \\
}
$$
# 2b
$$
\displaylines{
\text{Let } A, B \in \mathbb{R}^{n \times n} \\
\text{Prove or disprove: } A^{2} \text{ is triangularizable} \implies A \text{ is triangularizable} \\
\\
\text{Disproof:} \\
\text{Let } A = \begin{pmatrix}
0 & 1 \\
-1 & 0 \\
\end{pmatrix} \\
A^{2} = \begin{pmatrix}
-1 & 0 \\
0 & -1 \\
\end{pmatrix} = -I \\
A^{2} \text{ is triangularizable (it is already triangular)} \\
P_{A}(\lambda) = \lambda^{2} + 1 \implies A \text{ is not triangularizable over } \mathbb{R} \\
}
$$
# 2c
$$
\displaylines{
\text{Let } A, B \in \mathbb{R}^{n \times n} \\
\text{Prove or disprove: } A, B \text{ triangularizable} \implies A+B \text{ triangularizable} \\
\\
\text{Disproof:} \\
\text{Let } A = \begin{pmatrix}
0 & 1 \\
0 & 0 \\
\end{pmatrix}, A \text{ is triangularizable (already triangular)} \\
\text{Let } B = \begin{pmatrix}
0 & 0 \\
-1 & 0 \\
\end{pmatrix}, B \text{ is triangularizable (already triangular)} \\
A + B = \begin{pmatrix}
0 & 1 \\
-1 & 0 \\
\end{pmatrix} \\
P_{A+B}(\lambda) = \lambda^{2} + 1 \implies A+B \text{ is not triangularizable} \\
}
$$
# 3
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \text{ where } \mathbb{F} \text{ is alrebraically closed} \\
\text{Prove: } \lambda \text{ is an eigenvalue of } A^{2} \implies \sqrt{ \lambda } \text{ or } -\sqrt{ \lambda } \text{ is an eigenvalue of } A \\
\\
\text{Proof:} \\
\lambda \text{ is an eigenvalue of } A^{2} \implies P_{A^{2}}(\lambda) = 0 \\
\implies \det(\lambda I - A^{2}) = 0 \implies A^{2} - \lambda I \text{ is not invertible} \\
A^{2} - \lambda I = (A - \sqrt{ \lambda } I)(A + \sqrt{ \lambda } I) \\
\implies A - \sqrt{ \lambda }I \text{ or } A + \sqrt{ \lambda }I \text{ is not invertible} \\
\implies \det(A - \sqrt{ \lambda }I) = 0 \text{ or } \det(A + \sqrt{ \lambda }I) = 0 \\
\implies \boxed{ \sqrt{ \lambda } \text{ or } -\sqrt{ \lambda } \text{ is an eigenvalue of } A } \\
}
$$
# 4
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \text{ be not invertible} \\
\text{Let } \forall i \in [1, 3]: \sum_{j=1}^{3} A_{ij} = 17 \\
\text{Determine whether } A \text{ is triangularizable and/or diagonalizable} \\
\\
\text{Solution:} \\
P_{A}(\lambda) = \begin{vmatrix}
\lambda-A_{11} & -A_{12} & -A_{13} \\
-A_{21} & \lambda-A_{22} & -A_{23} \\
-A_{31} & -A_{32} & \lambda-A_{33} \\
\end{vmatrix} \overset{ C_{3} + (C_{1} + C_{2}) }{ = } \begin{vmatrix}
\lambda-A_{11} & -A_{12} & \lambda-17 \\
-A_{21} & \lambda-A_{22} & \lambda-17 \\
-A_{31} & -A_{32} & \lambda-17 \\
\end{vmatrix} = \\
= (\lambda-17)\begin{vmatrix}
\lambda-A_{11} & -A_{12} & 1 \\
-A_{21} & \lambda-A_{22} & 1 \\
-A_{31} & -A_{32} & 1 \\
\end{vmatrix} \\
A \text{ is not invertible} \implies \lambda \mid P_{A}(\lambda) \\
P_{A}(\lambda) = \lambda(\lambda-17)f(\lambda) \\
P_{A}(\lambda) \text{ is a polynomial of degree } 3 \implies f(\lambda) \text{ is linear} \\
f \text{ can not be a polynomial over } \mathbb{C} \\
\text{as polynomials over } \mathbb{R} \text{ can only have complex roots as conjugate pairs, for example } i, -i \\
\implies f \text{ is a polynomial over } \mathbb{R} \\
\implies P_{A}(\lambda) \text{ is factorizable into linear factors} \\
\implies \boxed{ A \text{ is triangularizable} } \\
\text{Let } A = \begin{pmatrix}
0 & 17 & 0 \\
0 & 0 & 17 \\
0 & 0 & 17 \\
\end{pmatrix} \\
P_{A}(\lambda) = \lambda^{2}(\lambda-17) \\
rank(A) = 2 \implies \gamma_{A}(0) = 1 < \mu_{A}(0) \\
\implies \boxed{ A \text{ is not necessarily diagonalizable} } \\
}
$$
# 5a
$$
\displaylines{
\text{Let } V \text{ be a vector space over field } \mathbb{F} \\
\text{Let } T: V \to V \text{ be a linear transformation} \\
\text{Prove: } T \text{ is triangularizable } \implies \exists W \neq \Set{ 0 }, W \neq V: T[W] \subseteq W \\
\\
\text{Proof:} \\
\text{Let } T \text{ be triangularizable} \\
\text{Let } B = \Set{ v_{1}, \dots, v_{n} } \text{ be a basis of } V \text{ such that } [T]_{B} \text{ is upper-triangular} \\
\text{Let } W = sp\Set{ v_{1} } \\
[T(v_{1})]_{B} = \begin{pmatrix}
\lambda \\
0 \\
\vdots \\
0 \\
\end{pmatrix} \implies T(v_{1}) = \lambda v_{1} \\
\implies T[W] \subseteq W \\
}
$$
# 5b
$$
\displaylines{
\text{Let } V \text{ be a vector space over field } \mathbb{F} \\
\text{Let } T: V \to V \text{ be a linear transformation} \\
\text{Give an example of } T \text{ such that there is no non-trivial invariant vector sub-space} \\
\\
\text{Solution:} \\
\text{Let } V = \mathbb{R}^{2} \\
\text{Let } T(e_{1}) = e_{2} \\
\text{Let } T(e_{2}) = -e_{1} \\
\implies [T]_{S} = \begin{pmatrix}
0 & -1 \\
1 & 0 \\
\end{pmatrix} \\
T \text{ has no non-trivial invariant sub-spaces:} \\
\Set{ W_{i} } = \Set{ sp\Set{ e_{1} }, sp\Set{ e_{2} } } \\
T(e_{1}) = e_{2} \not\in sp\Set{ e_{1} } \\
T(e_{2}) = -e_{1} \not\in sp\Set{ e_{2} } \\
\Set{ 0 } \text{ and } sp\Set{ e_{1}, e_{2} } = \mathbb{R}^{2} \text{ are trivial} \\
}
$$
# 6a
$$
\displaylines{
\text{Let } A \in \mathbb{C}^{n \times n} \\
\text{Let } P_{A}(x) = x^{n} - 1 \\
\text{Prove: } A \text{ is invertible and find } P_{A^{-1}}(x) \\
\\
\text{Proof:} \\
P_{A}(A) = A^{n} - I = 0 \\
\implies A^{n} = I \implies AA^{n-1} = I \implies A^{-1} = A^{n-1} \implies \boxed{ A \text{ is invertible} } \\
P_{A^{-1}}(x) \cdot \det(A) = \det(xI - A^{-1}) \cdot \det(A) = \det(xA - I) = x^{n} \cdot \det\left( A - \frac{1}{x}I \right) = \\
= (-x)^{n} \cdot \det\left( \frac{1}{x}I - A \right) = (-x)^{n} \cdot P_{A}\left( \frac{1}{x} \right) \\
P_{A}(x) = x^{n} - 1 \implies a_{0} = (-1)^{n}\det(A) = -1 \\
\implies P_{A^{-1}}(x) = (-1)^{n} \cdot x^{n} \cdot P_{A}\left( \frac{1}{x} \right) \cdot \frac{1}{\det(A)} = x^{n} \cdot \left( \frac{1}{x^{n}} - 1 \right) \cdot (-1) = x^{n} - 1 \\
\implies \boxed{ P_{A^{-1}}(x) = x^{n} - 1 } \\
}
$$
# 6b
$$
\displaylines{
\text{Let } A \in \mathbb{C}^{n \times n} \\
\text{Let } P_{A}(x) = x^{n} - 1 \\
\text{Find matrix } B \text{ such that } P_{A}(B) = 0 \text{ and } P_{B}(x) \neq P_{B^{-1}}(x) \\
\\
\text{Solution:} \\
P_{A}(B) = 0 \implies B^{n} = I \\
\implies B^{-1} = B^{n-1} \\
\text{Let } p = \sqrt[n]{ 1 } \\
\text{Let } n = 3 \\
\text{Let } B = \begin{pmatrix}
p & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 \\
\end{pmatrix} \\
B^{-1} = \begin{pmatrix}
p^{2} & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 \\
\end{pmatrix} \\
P_{A}(B) = B^{3} - I = \begin{pmatrix}
p^{3}-1 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 0 \\
\end{pmatrix} = 0 \\
P_{B}(x) = (x-1)^{2}(x-p) \\
P_{B^{-1}}(x) = (x-1)^{2}(x-p^{2}) \neq P_{B}(x) \\
}
$$
