---
{"publish":true,"created":"03/04/25, 11:04","modified":"2025-11-21T21:10:02.684+02:00","tags":["Academia","Assignment","Linear-2"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Numbers } 37637, 8638, 51828, 59232, 76508 \text{ are divisible by } 617 \text{ without remainder} \\
\text{Prove: } \begin{vmatrix}
3 & 7 & 6 & 3 & 7 \\
0 & 8 & 6 & 3 & 8 \\
5 & 1 & 8 & 2 & 8 \\
5 & 9 & 2 & 3 & 2 \\
7 & 6 & 5 & 0 & 8 \\
\end{vmatrix} \text{ is divisible by } 617 \text{ without remainder} \\
\\
\text{Proof:} \\
\begin{vmatrix}
3 & 7 & 6 & 3 & 7 \\
0 & 8 & 6 & 3 & 8 \\
5 & 1 & 8 & 2 & 8 \\
5 & 9 & 2 & 3 & 2 \\
7 & 6 & 5 & 0 & 8 \\
\end{vmatrix} \overset{ \frac{1}{3}R_{1} }{ \underset{ \begin{array}{}
R_{3} - 5R_{1} \\
R_{4} - 5R_{1} \\
R_{5} - 7R_{1} \\
\end{array} }{ \to } } 3 \begin{vmatrix}
1 & \frac{7}{3} & 2 & 1 & \frac{7}{3} \\
0 & 8 & 6 & 3 & 8 \\
0 & -\frac{32}{3} & -2 & -3 & -\frac{11}{3} \\
0 & -\frac{8}{3} & -8 & -2 & -\frac{29}{3} \\
0 & -\frac{31}{3} & -9 & -7 & -\frac{25}{3} \\
\end{vmatrix} \overset{ \begin{array}{}
-1R_{3} \\
-1R_{4} \\
-1R_{5} \\
\end{array} }{ \to } -3 \begin{vmatrix}
1 & \frac{7}{3} & 2 & 1 & \frac{7}{3} \\
0 & 8 & 6 & 3 & 8 \\
0 & \frac{32}{3} & 2 & 3 & \frac{11}{3} \\
0 & \frac{8}{3} & 8 & 2 & \frac{29}{3} \\
0 & \frac{31}{3} & 9 & 7 & \frac{25}{3} \\
\end{vmatrix} \\
\overset{ \begin{array}{}
3R_{3} \\
3R_{4} \\
3R_{5} \\
\end{array} }{ \to } - \frac{1}{9} \begin{vmatrix}
1 & \frac{7}{3} & 2 & 1 & \frac{7}{3} \\
0 & 8 & 6 & 3 & 8 \\
0 & 32 & 6 & 9 & 11 \\
0 & 8 & 24 & 6 & 29 \\
0 & 31 & 27 & 21 & 25 \\
\end{vmatrix} \overset{ \begin{array}{}
R_{3} - 4R_{2} \\
R_{4} - R_{2} \\
\end{array} }{ \to } - \frac{1}{9} \begin{vmatrix}
1 & \frac{7}{3} & 2 & 1 & \frac{7}{3} \\
0 & 8 & 6 & 3 & 8 \\
0 & 0 & -18 & -3 & -21 \\
0 & 0 & 18 & 3 & 21 \\
0 & 31 & 27 & 21 & 25 \\
\end{vmatrix} \\
\overset{ R_{3} + R_{4} }{ \to } -\frac{1}{9} \begin{vmatrix}
1 & \frac{7}{3} & 2 & 1 & \frac{7}{3} \\
0 & 8 & 6 & 3 & 8 \\
0 & 0 & 0 & 0 & 0 \\
0 & 0 & 18 & 3 & 21 \\
0 & 31 & 27 & 21 & 25 \\
\end{vmatrix} = 0 \\
\left\lvert A \right\rvert = 0 \text{ is divisible by 617 without remainder} \\
}
$$
# 2
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \text{ be lower-triangular matrix} \\
\text{Prove by induction: } \det(A) = \prod_{i=1}^{n} a_{ii} \\
\\
\text{Proof:} \\
\text{Base case. }\text{Let } A_{1} \in \mathbb{F}^{1 \times 1} \\
\det(A_{1}) = (A_{1})_{11} \\
\text{Induction step. Let } \forall \text{ lower-triangular } B \in \mathbb{F}^{n \times n}: \det(B) = \prod_{i=1}^{n} b_{ii} \\
\text{Let } A \in \mathbb{F}^{n+1 \times n+1} \text{ be lower-triangular} \\
\det(A) = \sum_{j=1}^{n+1} (-1)^{j+1}a_{1j}\det(M_{1j}(A)) = a_{11}\det(M_{11}(A)) \\
M_{11}(A) \in \mathbb{F}^{n \times n} \text{ and is lower-triangular} \\
\implies \det(M_{11}(A)) = \prod_{i=1}^{n} (M_{11}(A))_{ii} = \prod_{i=2}^{n+1} a_{ii} \\
\implies \det(A) = a_{11} \prod_{i=2}^{n+1} a_{ii} = \prod_{i=1}^{n+1} a_{ii} \\
\implies \text{By induction: } \boxed{ \forall \text{ lower-triangular } A \in \mathbb{F}^{n \times n}: \det(A) = \prod_{i=1}^{n} a_{ii} } \\
}
$$
# 3
$$
\displaylines{
\text{Let } a_{1}, a_{2}, \dots, a_{n-1} \in \mathbb{R} \\
\text{Let } A \in \mathbb{R}^{n \times n} \\
A_{ij} = \left\{\begin{array}{}
a_{i} & i = j < n \\
n & \text{otherwise} \\
\end{array}\right. \\
\text{Find } \det(A) \\
\\
\text{Solution:} \\
\begin{vmatrix}
a_{1} & n & \dots & \dots & n \\
n & a_{2} & n & \dots & n \\
\vdots & \ddots & \ddots & \ddots & \vdots \\
\vdots & \ddots & \ddots & a_{n-1} & \vdots \\
n & \dots & \dots & \dots & n \\
\end{vmatrix} \overset{ \forall i \in [1, n-1]: R_{i} - R_{n} }{ \to } \begin{vmatrix}
a_{1}-n & 0 & \dots & \dots & 0 \\
0 & a_{2}-n & 0 & \dots & 0 \\
\vdots & \ddots & \ddots & \ddots & \vdots \\
0 & \ddots & \ddots & a_{n-1}-n & 0 \\
n & \dots & \dots & \dots & n \\
\end{vmatrix} \\
\implies \boxed{ \det(A) = n\prod_{i=1}^{n-1} (a_{i}-n) } \\
}
$$
# 4
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \\
A_{ij} = \left\{\begin{array}{}
1 & i = j = 1 \\
0 & i = j \neq 1 \\
j & i < j \\
-j & i > j \\
\end{array}\right. \\
\text{Find } \det(A) \\
\\
\text{Solution:} \\
\begin{vmatrix}
1 & 2 & 3 & \dots & n \\
-1 & 0 & 3 & \dots & n \\
-1 & -2 & 0 & \ddots & \vdots \\
\vdots & \vdots & \ddots & \ddots & \vdots \\
-1 & -2 & \dots & -(n-1) & 0 \\
\end{vmatrix} \overset{ \forall i \in [2, n]: R_{i}+R_{1} }{ \to } \begin{vmatrix}
1 & 2 & 3 & \dots & n \\
0 & 2 & 6 & \dots & 2n \\
0 & 0 & 3 & \ddots & \vdots \\
\vdots & \vdots & \ddots & \ddots & \vdots \\
0 & 0 & \dots & 0 & n \\
\end{vmatrix} \\
\implies \boxed{ \det(A) = n! } \\
}
$$
# 5a
$$
\displaylines{
\text{Prove or disprove: } A \sim B \implies \left\lvert A \right\rvert = \left\lvert B \right\rvert \\
\\
\text{Proof:} \\
\text{Let } A \sim B \\
\implies \exists P: A = P^{-1}BP \\
\implies \left\lvert A \right\rvert = \left\lvert P^{-1}BP \right\rvert = \left\lvert P^{-1} \right\rvert \cdot \left\lvert B \right\rvert \cdot \left\lvert P \right\rvert = \left\lvert B \right\rvert \cdot \left\lvert P \right\rvert^{-1} \cdot \left\lvert P \right\rvert = \left\lvert B \right\rvert \\
\implies \boxed{ \left\lvert A \right\rvert = \left\lvert B \right\rvert } \\
}
$$
# 5b
$$
\displaylines{
\text{Prove or disprove: } \left\lvert A \right\rvert = \left\lvert B \right\rvert \implies A \sim B \\
\\
\text{Disproof:} \\
\left\lvert I \right\rvert = 1 \\
\left\lvert B \right\rvert  = \begin{vmatrix}
0 & -1 \\
1 & 0 \\
\end{vmatrix} = 1 \\
I \sim B \implies \exists P: I = P^{-1}BP \\
\implies P = PI = PP^{-1}BP = BP \\
\implies I = PP^{-1} = BPP^{-1} = B - \text{Contradiction!} \\
\implies \boxed{ I \not\sim B } \\
}
$$
# 5c
$$
\displaylines{
\text{Prove or disprove: } A \sim B \implies tr(A) = tr(B) \\
\\
\text{Proof:} \\
\text{Let } A \sim B \\
\implies \exists P: A = P^{-1}BP \\
\implies tr(A) = tr(P^{-1}BP) = tr(BPP^{-1}) = tr(B) \\
\implies \boxed{ tr(A) = tr(B) } \\
}
$$
# 6a
$$
\displaylines{
\text{Find eigenvalues and eigenvectors of matrix } A = \begin{pmatrix}
1 & 0 \\
0 & 2 \\
\end{pmatrix} \\
\\
\text{Solution:} \\
P_{A}(\lambda) = \det(\lambda I-A) = \begin{vmatrix}
\lambda-1 & 0 \\
0 & \lambda-2 \\
\end{vmatrix} = (\lambda-1)(\lambda-2) \\
P_{A}(\lambda) = 0 \iff \exists v \neq 0: Av = \lambda v \\
\implies \text{Eigenvalues of matrix } A \text{ are: } \left[\begin{array}{}
\lambda = 1 \\
\lambda = 2 \\
\end{array}\right. \\
\text{Let } \lambda = 1 \\
\implies \left(\begin{array}{cc|c}
0 & 0 & 0 \\
0 & -1 & 0 \\
\end{array}\right) \implies (\lambda I-A)v = 0 \iff v \in sp\Set{ \begin{pmatrix}
1 \\
0 \\
\end{pmatrix} } \\
\text{Let } \lambda = 2 \\
\implies \left(\begin{array}{cc|c}
1 & 0 & 0 \\
0 & 0 & 0 \\
\end{array}\right) \implies (\lambda I-A)v = 0 \iff v \in sp\Set{ \begin{pmatrix}
0 \\
1 \\
\end{pmatrix} } \\
\implies \boxed{ \begin{array}{}
\text{Eigenvalues of matrix } A \text{ are } \Set{ 1, 2 } \\
E_{1} = sp\Set{ \begin{pmatrix}
1 \\
0 \\
\end{pmatrix} } \\
E_{2} = sp\Set{ \begin{pmatrix}
0 \\
1 \\
\end{pmatrix} } \\
\end{array} \\
}
}
$$
# 6b
$$
\displaylines{
\text{Find eigenvalues and eigenvectors of matrix } A = \begin{pmatrix}
1 & 2 & 4 \\
0 & 2 & 6 \\
0 & 1 & 3 \\
\end{pmatrix} \\
\\
\text{Solution:} \\
P_{A}(\lambda) = \left\lvert \lambda I - A \right\rvert = \begin{vmatrix}
\lambda-1 & -2 & -4 \\
0 & \lambda-2 & -6 \\
0 & -1 & \lambda-3 \\
\end{vmatrix} = (\lambda-1)\left\lvert M_{11}(\lambda I-A) \right\rvert = \\
= (\lambda-1)((\lambda-2)(\lambda-3) - 6) = (\lambda-1)\lambda(\lambda-5) \\
\implies \text{Eigenvalues of matrix } A \text{ are: } \left[\begin{array}{}
\lambda = 0 \\
\lambda = 1 \\
\lambda = 5 \\
\end{array}\right. \\
}
$$
$$
\displaylines{
\text{Let } \lambda = 0 \\
\left(\begin{array}{ccc|c}
-1 & -2 & -4 & 0 \\
0 & -2 & -6 & 0 \\
0 & -1 & -3 & 0 \\
\end{array}\right) \to \left(\begin{array}{ccc|c}
-1 & -2 & -4 & 0 \\
0 & -2 & -6 & 0 \\
0 & 0 & 0 & 0 \\
\end{array}\right) \\
\implies (\lambda I - A)v = 0 \iff v \in sp\Set{ \begin{pmatrix}
-10 \\
-3 \\
1 \\
\end{pmatrix} } \\
\text{Let } \lambda = 1 \\
\left(\begin{array}{ccc|c}
0 & -2 & -4 & 0 \\
0 & -1 & -6 & 0 \\
0 & -1 & -2 & 0 \\
\end{array}\right) \to \left(\begin{array}{ccc|c}
0 & 1 & 2 & 0 \\
0 & 0 & -4 & 0 \\
0 & 0 & 0 & 0 \\
\end{array}\right) \\
\implies (\lambda I - A)v = 0 \iff v \in sp\Set{ \begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix} } \\
\text{Let } \lambda = 5 \\
\left(\begin{array}{ccc|c}
4 & -2 & -4 & 0 \\
0 & 3 & -6 & 0 \\
0 & -1 & 2 & 0 \\
\end{array}\right) \to \left(\begin{array}{ccc|c}
4 & -2 & -4 & 0 \\
0 & 1 & -2 & 0 \\
0 & 0 & 0 & 0 \\
\end{array}\right) \\
\implies (\lambda I - A)v = 0 \iff v \in sp\Set{ \begin{pmatrix}
2 \\
2 \\
1 \\
\end{pmatrix} } \\
\implies \boxed{ \begin{array}{}
\text{Eigenvalues of matrix } A \text{ are } \Set{ 0, 1, 5 } \\
E_{0} = sp\Set{ \begin{pmatrix}
-10 \\
-3 \\
1 \\
\end{pmatrix} } \\
E_{1} = sp\Set{ \begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix} } \\
E_{5} = sp\Set{ \begin{pmatrix}
2 \\
2 \\
1 \\
\end{pmatrix} } \\
\end{array} \\
}
}
$$
# 7a
$$
\displaylines{
\text{Let } v \text{ be an eigenvector of matrix } A \text{ in respect to eigenvalue } \lambda \\
\text{Show that } v \text{ is also an eigenvector of } A^{k} (k \in \mathbb{N}) \text{ in respect to eigenvalue } \lambda^{k} \\
\\
\text{Solution:} \\
Av = \lambda v \implies A^{k}v = A^{k-1}Av = A^{k-1}\lambda v = \lambda A^{k-1}v = \lambda^{2}A^{k-2}v = \dots = \\
= \lambda^{k-1}Av = \lambda^{k}v \\
\implies \boxed{ A^{k}v = \lambda^{k}v } \\
}
$$
# 7b
$$
\displaylines{
\text{Let } v \text{ be an eigenvector of matrix } A \text{ in respect to eigenvalue } \lambda \\
\text{Show that } v \text{ is also an eigenvector of } A^{3}-2A+I \text{ in respect to eigenvalue } \lambda^{3}-2\lambda+1 \\
\\
\text{Solution:} \\
Av = \lambda v \implies (A^{3}-2A+I)v = A^{3}v - 2Av + Iv = \lambda^{3}v - 2\lambda v + 1v = (\lambda^{3}-2\lambda+1)v \\
\implies \boxed{ (A^{3}-2A+I)v = (\lambda^{3}-2A+1)v } \\
}
$$
# 7c
$$
\displaylines{
\text{Let } v \text{ be an eigenvector of matrix } A \text{ in respect to eigenvalue } \lambda \\
\text{Let } A \text{ be invertible} \\
\text{Show that if } \lambda \neq 0, \text{ then } v \text{ is also an eigenvector of } A^{-1} \\
\\
\text{Solution:} \\
Av = \lambda v \implies v = A^{-1}Av = A^{-1}\lambda v = \lambda A^{-1}v \\
\implies \boxed{ A^{-1}v = \frac{1}{\lambda} v } \\
}
$$
# 8
$$
\displaylines{
\text{Find eigenvalues and eigenvectors of a Jordan block of size } 4 \\
\\
\text{Solution:} \\
A = \begin{pmatrix}
\alpha & 1 & 0 & 0 \\
0 & \alpha & 1 & 0 \\
0 & 0 & \alpha & 1 \\
0 & 0 & 0 & \alpha \\
\end{pmatrix} \\
\left\lvert \lambda I-A \right\rvert = \begin{vmatrix}
\lambda-\alpha & -1 & 0 & 0 \\
0 & \lambda-\alpha & -1 & 0 \\
0 & 0 & \lambda-\alpha & -1 \\
0 & 0 & 0 & \lambda-\alpha \\
\end{vmatrix} = (\lambda-\alpha)^{4} \\
\implies \text{Eigenvalues of matrix } A \text{ are: } \lambda = \alpha \\
\text{Let } \lambda = \alpha \\
\left(\begin{array}{cccc|c}
0 & 1 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 \\
0 & 0 & 0 & 1 & 0 \\
0 & 0 & 0 & 0 & 0 \\
\end{array}\right) \implies (\lambda I-A)v = 0 \iff v \in sp\Set{ \begin{pmatrix}
1 \\
0 \\
0 \\
0 \\
\end{pmatrix} } \\
\implies \boxed{ \begin{array}{}
\text{Eigenvalues of matrix } A \text{ are } \Set{ \alpha } \\
E_{\alpha} = sp\Set{ \begin{pmatrix}
1 \\
0 \\
0 \\
0 \\
\end{pmatrix} } \\
\end{array} } \\
}
$$
# 9a
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{2 \times 2} \\
\text{Prove: } (tr(A))^{2} - 4\left\lvert A \right\rvert > 0 \implies A \text{ has two different eigenvalues} \\
\\
\text{Proof:} \\
\text{Let } (tr(A))^{2} - 4\left\lvert A \right\rvert > 0 \\
\implies (a_{11}+a_{22})^{2} - 4(a_{11}a_{22} - a_{12}a_{21}) > 0 \\
P_{A}(\lambda) = (\lambda-a_{11})(\lambda-a_{22}) - a_{12}a_{21} \\
P_{A}(\lambda) = 0 \iff \lambda^{2} - (a_{11}+a_{22})\lambda + (a_{11}a_{22}-a_{12}a_{21}) = 0 \\
D = (a_{11}+a_{22})^{2} - 4(a_{11}a_{22}-a_{12}a_{21}) = (tr(A))^{2} - 4\left\lvert A \right\rvert > 0 \\
D > 0 \implies \text{Quadratic equation } P_{A}(\lambda) = 0 \text{ has two different solutions} \\
\implies \boxed{ A \text{ has two different eigenvalues} } \\
}
$$
# 9b
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{2 \times 2} \\
\text{Prove: } (tr(A))^{2} - 4\left\lvert A \right\rvert < 0 \implies A \text{ has no eigenvalues} \\
\\
\text{Proof:} \\
\text{Let } (tr(A))^{2} - 4\left\lvert A \right\rvert < 0 \\
\implies (a_{11}+a_{22})^{2} - 4(a_{11}a_{22} - a_{12}a_{21}) < 0 \\
P_{A}(\lambda) = (\lambda-a_{11})(\lambda-a_{22}) - a_{12}a_{21} \\
P_{A}(\lambda) = 0 \iff \lambda^{2} - (a_{11}+a_{22})\lambda + (a_{11}a_{22}-a_{12}a_{21}) = 0 \\
D = (a_{11}+a_{22})^{2} - 4(a_{11}a_{22}-a_{12}a_{21}) = (tr(A))^{2} - 4\left\lvert A \right\rvert < 0 \\
D < 0 \implies \forall \lambda \in \mathbb{R}: P_{A}(\lambda) > 0 \\ \implies P_{A}(\lambda) = 0 \text{ has no solutions} \implies \boxed{ A \text{ has no eigenvalues} } \\
}
$$
