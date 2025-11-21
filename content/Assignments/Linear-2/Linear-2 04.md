---
{"publish":true,"created":"22/04/25, 16:04","modified":"2025-11-21T21:10:02.707+02:00","tags":["Academia","Assignment","Linear-2"],"cssclasses":""}
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
\text{Divide: } \frac{x^{4}+4x^{3}+6x^{2}+4x+1}{x^{2}+2x+1} \\
\\
\text{Solution:} \\
\frac{x^{4}+4x^{3}+6x^{2}+4x+1}{x^{2}+2x+1} = x^{2} + \frac{2x^{3}+5x^{2}+4x+1}{x^{2}+2x+1} \\
\frac{2x^{3}+5x^{2}+4x+1}{x^{2}+2x+1} = 2x + \frac{x^{2}+2x+1}{x^{2}+2x+1} = 2x + 1 \\
\implies \boxed{ \frac{x^{4}+4x^{3}+6x^{2}+4x+1}{x^{2}+2x+1} = x^{2} + 2x + 1 } \\
\\
\text{Alternative solution:} \\
x^{4}+4x^{3}+6x^{2}+4x+1 = (x+1)^{4} \\
x^{2}+2x+1 = (x+1)^{2} \\
\implies \boxed{ \frac{x^{4}+4x^{3}+6x^{2}+4x+1}{x^{2}+2x+1} = \frac{(x+1)^{4}}{(x+1)^{2}} = (x+1)^{2} = x^{2} + 2x + 1 } \\
}
$$
# 1b
$$
\displaylines{
\text{Divide: } \frac{x^{3}-1}{x+2} \\
\\
\text{Solution:} \\
\frac{x^{3}-1}{x+2} = x^{2} - \frac{2x^{2}+1}{x+2} \\
\frac{2x^{2}+1}{x+2} = 2x - \frac{4x-1}{x+2} \\
\frac{4x-1}{x+2} = 4 - \frac{9}{x+2} \\
\implies \boxed{ \frac{x^{3}-1}{x+2} = x^{2} - 2x + 4 - \frac{9}{x+2} } \\
}
$$
# 2
$$
\displaylines{
A = \begin{pmatrix}
k+3 & 0 & 0 \\
-k-3 & k & k+3 \\
-k-3 & k & k+3 \\
\end{pmatrix} \\
\text{Find all values of } k \text{ such that } A \text{ is not diagonalizable over } \mathbb{R} \\
(\text{Assuming } k \in \mathbb{R}) \\
\\
\text{Solution:} \\
P_{A}(\lambda) = \det(\lambda I-A) = \begin{vmatrix}
\lambda-k-3 & 0 & 0 \\
k+3 & \lambda-k & -k-3 \\
k+3 & -k & \lambda-k-3 \\
\end{vmatrix} = \\
(\lambda-k-3)\begin{vmatrix}
\lambda-k & -k-3 \\
-k & \lambda-k-3 \\
\end{vmatrix} \overset{ R_{1} - R_{2} }{ = } (\lambda-k-3)\begin{vmatrix}
\lambda & -\lambda \\
-k & \lambda-k-3 \\
\end{vmatrix} = \\
= (\lambda-k-3)\lambda \begin{vmatrix}
1 & -1 \\
-k & \lambda-k-3 \\
\end{vmatrix} = \lambda(\lambda-k-3)(\lambda-2k-3) \\
\left\{\begin{array}{}
k + 3 \neq 0 \\
2k + 3 \neq 0 \\
k + 3 \neq 2k + 3 \\
\end{array}\right. \implies A \text{ has three distinct eigenvalues} \implies A \text{ is diagonalizable} \\
}
$$
$$
\displaylines{
\text{Let } k+3 = 0 \implies k = -3 \\
\implies P_{A}(\lambda) = \lambda^{2}(\lambda+3) \\
A = \begin{pmatrix}
0 & 0 & 0 \\
0 & -3 & 0 \\
0 & -3 & 0 \\
\end{pmatrix} \implies rank(A) = 1 \implies \gamma_{A}(0) = 2 \\
\implies A \text{ is diagonalizable} \\
\text{Let } 2k+3 = 0 \implies k = -\frac{3}{2} \\
\implies P_{A}(\lambda) = \lambda^{2}\left( \lambda-\frac{3}{2} \right) \\
A = \begin{pmatrix}
\frac{3}{2} & 0 & 0 \\
-\frac{3}{2} & -\frac{3}{2} & \frac{3}{2} \\
-\frac{3}{2} & -\frac{3}{2} & \frac{3}{2} \\
\end{pmatrix} \implies rank(A) = 2 \implies \gamma_{A}(0) = 1 \\
\implies \boxed{ A \text{ is not diagonalizable} } \\
\text{Let } k + 3 = 2k + 3 \implies k = 0 \\
\implies P_{A}(\lambda) = \lambda(\lambda-3)^{2} \\
\lambda = 3 \implies \left(\begin{array}{ccc|c}
0 & 0 & 0 & 0 \\
3 & 3 & -3 & 0 \\
3 & 0 & 0 & 0 \\
\end{array}\right) \implies \gamma_{A}(\lambda) = 1 \implies \boxed{ A \text{ is not diagonalizable} } \\
\implies \boxed{ \left[\begin{array}{}
k = -\frac{3}{2} \\
k = 0 \\
\end{array}\right. \implies A \text{ is not diagonalizable} } \\
}
$$
# 3a
$$
\displaylines{
\text{Let } A = \begin{pmatrix}
1 & 0 & 0 \\
1 & 1 & a \\
1 & 1 & 1 \\
\end{pmatrix} \\
\text{Find all values of } a \text{ such that } A \text{ is not diagonalizable over } \mathbb{R} \\
(\text{Assuming } a \in \mathbb{R}) \\
\\
\text{Solution:} \\
P_{A}(\lambda) = \det(\lambda I-A) = \begin{vmatrix}
\lambda-1 & 0 & 0 \\
-1 & \lambda-1 & -a \\
-1 & -1 & \lambda-1 \\
\end{vmatrix} = (\lambda-1)\begin{vmatrix}
\lambda-1 & -a \\
-1 & \lambda-1 \\
\end{vmatrix} = \\
= (\lambda-1)(\lambda^{2}-2\lambda+1-a) \\
a < 0 \implies \forall \lambda \in \mathbb{R}: \lambda^{2} - 2\lambda + 1 - a > 0 \\
\implies \text{Characteristic polynomial can not be factorized into linear factors} \\
\implies \boxed{ A \text{ is not diagonalizable} } \\
\text{Let } a = 0 \\
\implies P_{A}(\lambda) = (\lambda-1)^{3} \\
\lambda = 1 \implies \left(\begin{array}{ccc|c}
0 & 0 & 0 & 0 \\
-1 & 0 & 0 & 0 \\
-1 & -1 & 0 & 0 \\
\end{array}\right) \implies \gamma_{A}(\lambda) = 1 \implies \boxed{ A \text{ is not diagonalizable} } \\
\text{Let } a > 0 \\
\implies P_{A}(\lambda) = (\lambda-1)(\lambda-1-\sqrt{ a })(\lambda-1+\sqrt{ a }) \\
\implies A \text{ is diagonalizable} \\
\implies \boxed{ a \leq 0 \implies A \text{ is not diagonalizable} } \\
}
$$
# 3b
$$
\displaylines{
\text{Let } A = \begin{pmatrix}
1 & 0 & 0 \\
1 & 1 & a \\
1 & 1 & 1 \\
\end{pmatrix} \\
\text{Find all values of } a \text{ such that } A \text{ is not diagonalizable over } \mathbb{C} \\
(\text{Assuming } a \in \mathbb{C}) \\
\\
\text{Solution:} \\
P_{A}(\lambda) = \det(\lambda I-A) = \begin{vmatrix}
\lambda-1 & 0 & 0 \\
-1 & \lambda-1 & -a \\
-1 & -1 & \lambda-1 \\
\end{vmatrix} = (\lambda-1)\begin{vmatrix}
\lambda-1 & -a \\
-1 & \lambda-1 \\
\end{vmatrix} = \\
= (\lambda-1)(\lambda^{2}-2\lambda+1-a) \\
\implies P_{A}(\lambda) = (\lambda-1)(\lambda-1-\sqrt{ a })(\lambda-1+\sqrt{ a }) \\
\left\{\begin{array}{}
1+\sqrt{ a } \neq 1 \\
1-\sqrt{ a } \neq 1 \\
1+\sqrt{ a } \neq 1-\sqrt{ a } \\
\end{array}\right. \implies A \text{ is diagonalizable} \\
\text{Let } \left[\begin{array}{}
1 + \sqrt{ a } = 1 \\
1 - \sqrt{ a } = 1 \\
1 + \sqrt{ a } = 1 - \sqrt{ a } \\
\end{array}\right. \implies \sqrt{ a } = 0 \implies a = 0 \\
\implies P_{A}(\lambda) = (\lambda-1)^{3} \\
\implies \boxed{ A \text{ is not diagonalizable (see 3a)} } \\
\implies \boxed{ a = 0 \implies A \text{ is not diagonalizable} } \\
}
$$
# 4
$$
\displaylines{
\text{Let } a_{n} = \Set{ 0, 1, 1, 2, 3, 5, 8, 13, \dots } \\
a_{n} = \left\{\begin{array}{}
0 & n = 1 \\
1 & n = 2 \\
a_{n-1}+a_{n-2} & n > 2 \\
\end{array}\right. \\
}
$$
## 4a
$$
\displaylines{
\text{Find } A \text{ such that: } A\begin{pmatrix}
a_{n} \\
a_{n-1} \\
\end{pmatrix} = \begin{pmatrix}
a_{n+1} \\
a_{n} \\
\end{pmatrix} \\
\\
\text{Solution:} \\
A = \begin{pmatrix}
1 & 1 \\
1 & 0 \\
\end{pmatrix} \implies A\begin{pmatrix}
a_{n} \\
a_{n-1} \\
\end{pmatrix} = \begin{pmatrix}
a_{n}+a_{n-1} \\
a_{n}+0 \\
\end{pmatrix} = \begin{pmatrix}
a_{n+1} \\
a_{n} \\
\end{pmatrix} \\
}
$$
## 4b
$$
\displaylines{
\text{Calculate } A^{n-1} \\
\\
\text{Solution:} \\
P_{A}(\lambda) = \begin{vmatrix}
\lambda-1 & -1 \\
-1 & \lambda \\
\end{vmatrix} = \lambda^{2}-\lambda-1 = \left( \lambda-\frac{1}{2}-\frac{\sqrt{ 5 }}{2} \right)\left( \lambda-\frac{1}{2}+\frac{\sqrt{ 5 }}{2} \right) \\
\lambda = \frac{1}{2} + \frac{\sqrt{ 5 }}{2} \implies \left(\begin{array}{cc|c}
\frac{\sqrt{ 5 }}{2}-\frac{1}{2} & -1 & 0 \\
-1 & \frac{1}{2}+\frac{\sqrt{ 5 }}{2} & 0 \\
\end{array}\right) \to \left(\begin{array}{cc|c}
\frac{\sqrt{ 5 }}{2}-\frac{1}{2} & -1 & 0 \\
0 & 0 & 0 \\
\end{array}\right) \\
\implies E_{\lambda} = sp\Set{ \begin{pmatrix}
\frac{1}{2} + \frac{\sqrt{ 5 }}{2} \\
1 \\
\end{pmatrix} } \\
\lambda = \frac{1}{2} - \frac{\sqrt{ 5 }}{2} \implies \left(\begin{array}{cc|c}
-\frac{\sqrt{ 5 }}{2}-\frac{1}{2} & -1 & 0 \\
-1 & \frac{1}{2}-\frac{\sqrt{ 5 }}{2} & 0 \\
\end{array}\right) \to \left(\begin{array}{cc|c}
-\left( \frac{1}{2}+\frac{\sqrt{ 5 }}{2} \right) & -1 & 0 \\
0 & 0 & 0 \\
\end{array}\right) \\
\implies E_{\lambda} = sp\Set{ \begin{pmatrix}
\frac{1}{2} - \frac{\sqrt{ 5 }}{2} \\
1 \\
\end{pmatrix} } \\
\text{Let } P = \begin{pmatrix}
\frac{1}{2} + \frac{\sqrt{ 5 }}{2} & \frac{1}{2}-\frac{\sqrt{ 5 }}{2} \\
1 & 1 \\ 
\end{pmatrix}, D = \begin{pmatrix}
\frac{1}{2}+\frac{\sqrt{ 5 }}{2} & 0 \\
0 & \frac{1}{2}-\frac{\sqrt{ 5 }}{2} \\
\end{pmatrix} \\
\implies A = PDP^{-1} \implies A^{n-1} = PD^{n-1}P^{-1} \\
P^{-1} = \frac{1}{10}\begin{pmatrix}
2\sqrt{ 5 } & 5-\sqrt{ 5 } \\
-2\sqrt{ 5 } & 5+\sqrt{ 5 } \\
\end{pmatrix} \text{ (Calculated by WolframAlpha)} \\
A^{n-1} = \frac{1}{10 \cdot 2^{n-1}}\begin{pmatrix}
\frac{1+\sqrt{ 5 }}{2} & \frac{1-\sqrt{ 5 }}{2} \\
1 & 1 \\
\end{pmatrix}\begin{pmatrix}
(1+\sqrt{ 5 })^{n-1} & 0 \\
0 & (1-\sqrt{ 5 })^{n-1} \\
\end{pmatrix} \begin{pmatrix}
2\sqrt{ 5 } & 5-\sqrt{ 5 } \\
-2\sqrt{ 5 } & 5+\sqrt{ 5 } \\
\end{pmatrix} = \\
= \frac{1}{10 \cdot 2^{n-1}}\begin{pmatrix}
\frac{1+\sqrt{ 5 }}{2} & \frac{1-\sqrt{ 5 }}{2} \\
1 & 1 \\
\end{pmatrix}\begin{pmatrix}
2\sqrt{ 5 }(1+\sqrt{ 5 })^{n-1} & (5-\sqrt{ 5 })(1+\sqrt{ 5 })^{n-1} \\
-2\sqrt{ 5 }(1-\sqrt{ 5 })^{n-1} & (5+\sqrt{ 5 })(1-\sqrt{ 5 })^{n-1} \\
\end{pmatrix} = \\
= \boxed{ \frac{1}{10} \begin{pmatrix}
\frac{\sqrt{ 5 }(1+\sqrt{ 5 })^{n}}{2^{n-1}} - \frac{\sqrt{ 5 }(1-\sqrt{ 5 })^{n}}{2^{n-1}} & \frac{\frac{5-\sqrt{ 5 }}{2}(1+\sqrt{ 5 })^{n}}{2^{n-1}} + \frac{\frac{5+\sqrt{ 5 }}{2}(1-\sqrt{ 5 })^{n}}{2^{n-1}} \\
\frac{2\sqrt{ 5 }(1+\sqrt{ 5 })^{n-1}}{2^{n-1}} - \frac{2\sqrt{ 5 }(1-\sqrt{ 5 })^{n-1}}{2^{n-1}} & \frac{(5-\sqrt{ 5 })(1+\sqrt{ 5 })^{n-1}}{2^{n-1}} + \frac{(5+\sqrt{ 5 })(1-\sqrt{ 5 })^{n-1}}{2^{n-1}} \\
\end{pmatrix} } \\
}
$$

## 4c
$$
\displaylines{
\text{Given } \begin{pmatrix}
a_{n} \\
a_{n-1} \\
\end{pmatrix} = A^{n-1}\begin{pmatrix}
1 \\
0 \\
\end{pmatrix} \\
\text{Calculate } a_{n} \\
\\
\text{Solution:} \\
a_{n} = (A^{n-1})_{11} \\
\implies a_{n} = \frac{\sqrt{ 5 }}{10 \cdot 2^{n-1}}((1+\sqrt{ 5 })^{n} - (1-\sqrt{ 5 })^{n}) \\
\implies \boxed{ a_{n} = \frac{1}{\sqrt{ 5 }}\left( \frac{1+\sqrt{ 5 }}{2} \right)^{n} - \frac{1}{\sqrt{ 5 }}\left( \frac{1-\sqrt{ 5 }}{2} \right)^{n} } \\
}
$$
# 5
$$
\displaylines{
\text{Let } A \text{ be a nilpotent diagonalizable matrix} \\
\text{Prove: } A = 0 \\
\\
\text{Proof:} \\
A \text{ is diagonalizable} \implies A = P^{-1}DP \\
A \text{ is nilpotent} \implies \exists k \in \mathbb{N}: A^{k} = 0 \\
A^{k} = P^{-1}D^{k}P = 0 \\
\implies rank(P^{-1}D^{k}P) = 0 \implies rank(D^{k}P) = 0 \\
\implies rank(D^{k}) = 0 \implies D^{k} = 0 \implies D = 0 \\
\implies \boxed{ A = 0 } \\
}
$$
# 6a
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \\
\text{Let } \lambda_{1}, \dots, \lambda_{p} \text{ be eigenvalues of } A \\
\text{Let } k_{1}, \dots, k_{p} \text{ be algebraic multiplicities of these eigenvalues} \\
\text{Let } g_{1}, \dots, g_{p} \text{ be geometric multiplicities of these eigenvalues} \\
\text{Let } \alpha \in \mathbb{R} \\
\text{Find eigenvalues and their multiplicities of } B = A - \alpha I \\
\\
\text{Solution:} \\
P_{A}(\lambda) = \det(\lambda I-A) = \det(\lambda I-\alpha I-B) = P_{B}(\lambda-\alpha) \\
\implies \boxed{ \text{Eigenvalues of } B \text{ are } \lambda_{1}-\alpha, \dots, \lambda_{p}-\alpha } \\
\text{and } \boxed{ \forall i \in [1, p]: \mu_{B}(\lambda_{i}-\alpha) = k_{i} } \\
\\
-\alpha \text{ is an eigenvalue of } -\alpha I \text{ and } \gamma_{-\alpha I}(-\alpha) = n \\
\implies \text{As proved in 7a,} \\
\forall i \in [1, p]: \lambda_{i}-\alpha \text{ is an eigenvalue of } A - \alpha I \text{ and } \boxed{ \gamma_{B}(\lambda_{i}-\alpha) = \gamma_{A-\alpha I}(\lambda_{i}-\alpha) = g_{p} } \\
}
$$
# 6b
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \\
\text{Prove: } \exists B, C \in \mathbb{R}^{n \times n}: B, C \text{ are invertible and } A = B + C \\
\\
\text{Proof with eigenvalues:} \\
\text{Let } \lambda \neq 0 \in \mathbb{R}: \lambda \text{ is not an eigenvalue of } A \\
\implies \lambda I - A \text{ is invertible} \implies A - \lambda I \text{ is invertible} \\
\lambda \neq 0 \implies \lambda I \text{ is invertible} \\
A = \underbrace{ \lambda I }_{ B } + \underbrace{ (A - \lambda I) }_{ C } \\
\\
\text{Proof without eigenvalues:} \\
\text{Let } 0, 1, \alpha \in \mathbb{R}: \alpha \neq 0, \alpha \neq 1 \\
\text{Let } \forall i, j \in [1, n]: B_{ij} = \left\{\begin{array}{}
\left[\begin{array}{}
\alpha & A_{ii} = 1 \\
1 & \text{otherwise} \\
\end{array}\right] & i = j \\
A_{ij} & i > j \\
0 & \text{otherwise} \\
\end{array}\right. \\
\text{Let } \forall i, j \in [1, n]: C_{ij} = \left\{\begin{array}{}
A_{ij} - B_{ij} & i = j \\
0 & i > j \\
A_{ij} & \text{otherwise} \\
\end{array}\right. \\
\implies A = B + C \\
B \text{ is a lower triangular matrix} \\
C \text{ is an upper triangular matrix} \\
\forall i \in [1, n]: C_{ii} = A_{ii} - B_{ii} \neq 0 \implies \forall i \in [1, n]: B_{ii} \neq 0, C_{ii} \neq 0 \\
\implies \boxed{ \left\{\begin{array}{}
\det(B) = \prod_{i=1}^{n} B_{ii} \neq 0 \implies B \text{ is invertible} \\
\det(C) = \prod_{i=1}^{n} C_{ii} \neq 0 \implies C \text{ is invertible} \\
\end{array}\right. } \\
}
$$
# 7
$$
\displaylines{
\text{Let } C_{n}(\alpha) \in \mathbb{R}^{n \times n} \\
\text{Find eigenvalues of } C_{n}(\alpha) = \left\{\begin{array}{}
\alpha & i = j \\
1 & i \neq j \\
\end{array}\right. \\
}
$$
## 7a
$$
\displaylines{
\text{Let } \lambda_{1} \text{ be an eigenvalue of } A \in \mathbb{R}^{n \times n} \text{ with geometric multiplicity } n \\
\text{Let } \lambda_{2} \text{ be an eigenvalue of } B \in \mathbb{R}^{n \times n} \text{ with geometric multiplicity } k \leq n \\
\text{Prove: } \lambda_{1} + \lambda_{2} \text{ is an eigenvalue of } A + B \text{ with geometric multiplicity } k \\
\\
\text{Proof:} \\
\gamma_{A}(\lambda_{1}) = n \implies E_{\lambda_{1}} = \mathbb{R}^{n} \\
\gamma_{B}(\lambda_{2}) = k \implies E_{\lambda_{2}} = sp\Set{ v_{1}, \dots, v_{k} } \\
\forall i \in [1, k]: (A+B)v_{i} = Av_{i} + Bv_{i} = \lambda_{1}v_{i} + \lambda_{2}v_{i} = (\lambda_{1}+\lambda_{2})v_{i} \\
\implies \lambda_{1} + \lambda_{2} \text{ is an eigenvalue of } A+B \\
\text{and } E_{\lambda_{2}} \subseteq E_{\lambda_{1}+\lambda_{2}} \\
\text{Let } v \in E_{\lambda_{1}+\lambda_{2}} \\
\implies (A+B)v = (\lambda_{1}+\lambda_{2})v \\
(A+B)v = Av + Bv = \lambda_{1}v + Bv \implies Bv = \lambda_{2}v \\
\implies v \in E_{\lambda_{2}} \implies E_{\lambda_{1}+\lambda_{2}} \subseteq E_{\lambda_{2}} \\
\implies E_{\lambda_{1}+\lambda_{2}} = E_{\lambda_{2}} \implies \boxed{ \gamma_{A+B}(\lambda_{1}+\lambda_{2}) = \gamma_{B}(\lambda_{2}) = k } \\
}
$$
## 7b
$$
\displaylines{
\text{Find eigenvalues and their multiplicities of } 1_{n} = \begin{pmatrix}
1 & \dots & 1 \\
\vdots & \ddots & \vdots \\
1 & \dots & 1 \\
\end{pmatrix} \\
\\
\text{Solution:} \\
P_{1_{n}}(\lambda) = \det(\lambda I-1_{n}) = \begin{vmatrix}
\lambda-1 & -1 & \dots & -1 \\
-1 & \lambda-1 & \ddots & \vdots \\
\vdots & \ddots & \ddots & -1 \\
-1 & \dots & -1 & \lambda-1 \\
\end{vmatrix} \overset{ \forall i \in [2, n]: R_{1} + R_{i} }{ = } \\
= (\lambda-n)\begin{vmatrix}
1 & \dots & \dots & \dots & 1 \\
-1 & \lambda-1 & -1 & \dots & -1 \\
-1 & \ddots & \ddots & \ddots & \vdots \\
\vdots & \ddots & \ddots & \ddots & -1 \\
-1 & \dots & -1 & -1 & \lambda-1 \\
\end{vmatrix} \overset{ \forall i \in [2, n]: R_{i} + R_{1} }{ = } \\
= (\lambda-n)\begin{vmatrix}
1 & \dots & \dots & \dots & 1 \\
0 & \lambda & 0 & \dots & 0 \\
0 & \ddots & \ddots & \ddots & \vdots \\
\vdots & \ddots & \ddots & \ddots & \vdots \\
0 & \dots & 0 & 0 & \lambda \\
\end{vmatrix} = (\lambda-n)\lambda^{n-1} \\
\implies \boxed{ \text{Eigenvalues of } 1_{n} \text{ are } \Set{ n , 0 } } \\
\boxed{ \gamma_{1_{n}}(n) = 1 } \\
rank(1_{n}) = 1 \implies \boxed{ \gamma_{1_{n}}(0) = n - 1 } \\
}
$$
## 7c
$$
\displaylines{
\text{Find eigenvalues and their multiplicities of } C_{n}(\alpha) \\
\\
\text{Solution:} \\
C_{n}(\alpha) = 1_{n} + (\alpha-1)I \\
\implies \text{As proved in 7a,} \\
\boxed{ \begin{array}{}
\text{Eigenvalues of } C_{n}(\alpha) \text{ are } \Set{ n + \alpha-1, \alpha-1 } \\
\gamma_{C_{n}(\alpha)}(n+\alpha-1) = 1 \\
\gamma_{C_{n}(\alpha)}(\alpha-1) = n - 1 \\
\end{array} } \\
}
$$
# 8
$$
\displaylines{
\text{Let } A = \begin{pmatrix}
a_{1} & a_{2} & \dots & a_{n-1} & a_{n} \\
a_{n} & a_{1} & \dots & a_{n-2} & a_{n-1} \\
a_{n-1} & a_{n} & \dots & a_{n-3} & a_{n-2} \\
\vdots & \vdots &  & \vdots & \vdots \\
a_{2} & a_{3} & \dots & a_{n} & a_{1} \\
\end{pmatrix} \in \mathbb{C}^{n \times n} \\
\text{Let } p \in \mathbb{C}: p^{n} = 1 \\
\text{Prove: } v = \begin{pmatrix}
1 \\
p \\
\vdots \\
p^{n-1} \\
\end{pmatrix} \text{ is an eigenvector of } A \text{ and find a correspondent eigenvalue} \\
\\
\text{Proof:} \\
Av = \begin{pmatrix}
a_{1} + a_{2}p + \dots + a_{n}p^{n-1} \\
a_{n} + a_{1}p + \dots + a_{n-1}p^{n-1} \\
\vdots \\
a_{2} + a_{3}p + \dots + a_{1}p^{n-1} \\
\end{pmatrix} \\
a_{1} + a_{2}p + \dots + a_{n}p^{n-1} = 1(a_{1} + a_{2}p + \dots + a_{n}p^{n-1}) \\
a_{n} + a_{1}p + \dots + a_{n-1}p^{n-1} = pa_{1} + \dots + pa_{n-1}p^{n-2} + pa_{n}p^{n-1} = \\
= p(a_{1} + a_{2}p + \dots + a_{n}p^{n-1}) \\
\dots \\
\implies \forall i \in [1, n]: (Av)_{i} = p^{i-1}(a_{1} + a_{2}p + \dots + a_{n}p^{n-1}) \\
\implies Av = (a_{1} + a_{2}p + \dots + a_{n}p^{n-1})v \\
\implies \boxed{ (a_{1} + a_{2}p + \dots + a_{n}p^{n-1}) \text{ is an eigenvalue of } A } \\
\text{and } \boxed{ v \text{ is its corresponding eigenvector} } \\
}
$$
