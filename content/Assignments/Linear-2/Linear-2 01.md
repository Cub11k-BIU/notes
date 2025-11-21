---
{"publish":true,"created":"27/03/25, 10:03","modified":"2025-11-21T21:10:02.672+02:00","tags":["Academia","Assignment","Linear-2"],"cssclasses":""}
---

# 1a
$$
\displaylines{
\text{Calculate determinant using permutations} \\
A = \begin{pmatrix}
3 & 1 & 5 \\
4 & 0 & 6 \\
-1 & 3 & 5 \\
\end{pmatrix} \in \mathbb{R}^{3 \times 3} \\
S_{3} = \begin{array}{|c|c|}
123 & + \\
132 & - \\
213 & - \\
231 & + \\
312 & + \\
321 & - \\
\end{array} \\
\left\lvert A \right\rvert = \sum_{\sigma \in S_{3}} sgn(\sigma) \prod_{i=1}^{3} a_{i\sigma(i)} = \\
= a_{11}a_{22}a_{33} - a_{11}a_{23}a_{32} - a_{12}a_{21}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31} = \\
= 0 - 54 - 20 + (-6) + 60 - 0 = -20 \\
\implies \boxed{ \left\lvert A \right\rvert = -20 } \\
}
$$
# 1b
$$
\displaylines{
\text{Calculate determinant using permutations} \\
A = \begin{pmatrix}
2 & 6 & 3 \\
5 & 1 & 0 \\
3 & 6 & 4 \\
\end{pmatrix} \in \mathbb{Z}_{7}^{3 \times 3} \\
S_{3} = \begin{array}{|c|c|}
123 & + \\
132 & - \\
213 & - \\
231 & + \\
312 & + \\
321 & - \\
\end{array} \\
\left\lvert A \right\rvert = \sum_{\sigma \in S_{3}} sgn(\sigma) \prod_{i=1}^{3} a_{i\sigma(i)} = \\
= a_{11}a_{22}a_{33} - a_{11}a_{23}a_{32} - a_{12}a_{21}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31} = \\
= 2 \cdot 1 \cdot 4 - 2 \cdot 0 \cdot 6 - 6 \cdot 5 \cdot 4 + 6 \cdot 0 \cdot 3 + 3 \cdot 5 \cdot 6 - 3 \cdot 1 \cdot 3 = \\
= 1 - 0 - 1 + 0 + 6 - 2 = 4 \\
\implies \left\lvert A \right\rvert = 4 \\
}
$$
# 2a
$$
\displaylines{
\text{Calculate determinant using minors} \\
A = \begin{pmatrix}
1 & 2 & 0 & 5 \\
0 & 3 & 1 & 8 \\
4 & -1 & 6 & 9 \\
0 & 7 & 2 & 3 \\
\end{pmatrix} \in \mathbb{R}^{4 \times 4} \\
\text{Let us decompose the determinant into minors by first column} \\
\left\lvert A \right\rvert = \sum_{i=1}^{4} (-1)^{i+1}a_{i1}\left\lvert M_{i1}(A) \right\rvert = \\
= 1\left\lvert M_{11}(A) \right\rvert - 0\left\lvert M_{12}(A) \right\rvert + 4\left\lvert M_{13}(A) \right\rvert - 0\left\lvert M_{14}(A) \right\rvert \\
\left\lvert M_{11}(A) \right\rvert = \begin{vmatrix}
3 & 1 & 8 \\
-1 & 6 & 9 \\
7 & 2 & 3 \\
\end{vmatrix} = 54 + 63 - 16 + 3 - 54 - 336 = -286 \\
\left\lvert M_{13}(A) \right\rvert = \begin{vmatrix}
2 & 0 & 5 \\
3 & 1 & 8 \\
7 & 2 & 3 \\
\end{vmatrix} = 6 + 0 + 30 - 0 - 32 - 35 = -31 \\
\boxed{ \left\lvert A \right\rvert = 1(-286) + 4(-31) = -410 }
}
$$
# 2b
$$
\displaylines{
\text{Calculate determinant using minors} \\
A = \begin{pmatrix}
1 & 3 & 0 & 2 \\
1 & 2 & i & 8 \\
2i & 0 & 0 & -2 \\
6 & 0 & 4 & 3 \\
\end{pmatrix} \in \mathbb{C}^{4 \times 4} \\
\text{Let us decompose the determinant into minors by third row} \\
\left\lvert A \right\rvert = \sum_{j=1}^{n} (-1)^{3+j}a_{3j}\left\lvert M_{3j}(A) \right\rvert = \\
= 2i\left\lvert M_{31}(A) \right\rvert - 0\left\lvert M_{32}(A) \right\rvert + 0\left\lvert M_{33}(A) \right\rvert - (-2)\left\lvert M_{34}(A) \right\rvert = \\
\left\lvert M_{31}(A) \right\rvert = \begin{vmatrix}
3 & 0 & 2 \\
2 & i & 8 \\
0 & 4 & 3 \\
\end{vmatrix} = 9i + 16 - 96 = 9i - 80 \\
\left\lvert M_{34}(A) \right\rvert = \begin{vmatrix}
1 & 3 & 0 \\
1 & 2 & i \\
6 & 0 & 4 \\
\end{vmatrix} = 8 + 18i - 12 = 18i - 4 \\
\left\lvert A \right\rvert = 2i(9i - 80) + 2(18i-4) = -18 - 160i + 36i - 8 = -26 - 124i \\
\boxed{ \left\lvert A \right\rvert = -26 - 124i } \\
}
$$
# 3a
$$
\displaylines{
\text{Calculate determinant using Gaussian elimination} \\
A = \begin{pmatrix}
1 & 2 & 3 & 4 \\
0 & 1 & 2 & 1 \\
1 & 3 & 5 & 0 \\
2 & 3 & 0 & 33 \\
\end{pmatrix} \in \mathbb{R}^{4 \times 4} \\
\begin{pmatrix}
1 & 2 & 3 & 4 \\
0 & 1 & 2 & 1 \\
1 & 3 & 5 & 0 \\
2 & 3 & 0 & 33 \\
\end{pmatrix} \overset{ R_{3} - R_{1} }{ \underset{ R_{4} - 2R_{1} }{ \to } } \begin{pmatrix}
1 & 2 & 3 & 4 \\
0 & 1 & 2 & 1 \\
0 & 1 & 2 & -4 \\
0 & -1 & -6 & 25 \\
\end{pmatrix} \overset{ R_{3} - R_{2} }{ \underset{ R_{4} + R_{2} }{ \to } } \begin{pmatrix}
1 & 2 & 3 & 4 \\
0 & 1 & 2 & 1 \\
0 & 0 & 0 & -5 \\
0 & 0 & -4 & 26 \\
\end{pmatrix} \\
\overset{ R_{3} \leftrightarrow  R_{4} }{ \to } \begin{pmatrix}
1 & 2 & 3 & 4 \\
0 & 1 & 2 & 1 \\
0 & 0 & -4 & 26 \\
0 & 0 & 0 & -5 \\
\end{pmatrix} = A_{U} \implies \left\lvert A_{U} \right\rvert = 20 \\
\boxed{ \left\lvert A \right\rvert = -\left\lvert A_{U} \right\rvert = -20 } \\
}
$$
# 3b
$$
\displaylines{
\text{Calculate determinant using Gaussian elimination} \\
A = \begin{pmatrix}
1 & 3 & 5 \\
7 & 9 & 11 \\
8 & 12 & 3 \\
\end{pmatrix} \in \mathbb{Z}_{13}^{3 \times 3} \\
\begin{pmatrix}
1 & 3 & 5 \\
7 & 9 & 11 \\
8 & 12 & 3 \\
\end{pmatrix} \overset{ R_{2} + 6R_{1} }{ \underset{ R_{3} + 5R_{1} }{ \to } } \begin{pmatrix}
1 & 3 & 5 \\
0 & 1 & 2 \\
0 & 1 & 2 \\
\end{pmatrix} \overset{ R_{3} + (-1)R_{2} }{ \to } \begin{pmatrix}
1 & 3 & 5 \\
0 & 1 & 2 \\
0 & 0 & 0 \\
\end{pmatrix} = A_{U} \\
\implies \left\lvert A_{U} \right\rvert = 0 \\
\implies \boxed{ \left\lvert A \right\rvert = \left\lvert A_{U} \right\rvert  = 0 } \\
}
$$
# 4a
$$
\displaylines{
\text{Prove or disprove: } \det(A+B) = \det(A) + \det(B) \\
\\
\text{Disproof:} \\
A = \begin{pmatrix}
1 & 0 \\
0 & 0 \\
\end{pmatrix}, B = \begin{pmatrix}
0 & 0 \\
0 & 1 \\
\end{pmatrix} \\
\det(A+B) = 1 \\
\det(A) = \det(B) = 0 \\
\boxed{ \det(A+B) \neq \det(A) + \det(B) } \\
}
$$
# 4b
$$
\displaylines{
\text{Let } A \in \mathbb{C}^{n \times n} \\
\text{Prove or disprove: } \overline{\det(A)} = \det(\overline{A^{T}}) \\
\\
\text{Proof:} \\
\overline{(a + bi) + (c + di)} = \overline{a+c + (b+d)i} = \\
= a+c-(b+d)i = a - bi + c - di = \overline{a+bi} + \overline{c+di} \\
\overline{(a+bi)(c+di)} = \overline{ac - bd + (ad+bc)i} = \\
= ac - bd - (ad+bc)i = a(c-di) - b(d+ci) = a(c-di) + bi(di-c) = \\
= (a-bi)(c-di) = \overline{a+bi} \cdot \overline{c+di} \\
\\
\overline{\det(A)} = \overline{\sum_{\sigma \in S_{n}} sgn(\sigma)\prod_{i=1}^{n} a_{i\sigma(i)}} = \sum_{\sigma \in S_{n}} \overline{sgn(\sigma)\prod_{i=1}^{n} a_{i\sigma(i)}} = \\
= \sum_{\sigma \in S_{n}} sgn(\sigma)\prod_{i=1}^{n} \overline{a_{i\sigma(i)}} = \sum_{\sigma \in S_{n}} sgn(\sigma)\prod_{i=1}^{n} (\overline{A^{T}})_{\sigma(i)i} \\
\\
\text{Let } i < j : \\
\sigma(i) > \sigma(j) \iff \sigma^{-1}(\sigma(i)) = i < j = \sigma^{-1}(\sigma(j)) \\
\implies sgn(\sigma) = sgn(\sigma^{-1}) \\
\implies \sum_{\sigma \in S_{n}} sgn(\sigma)\prod_{i=1}^{n} (\overline{A^{T}})_{\sigma(i)i} = \sum_{\sigma^{-1} \in S_{n}} sgn(\sigma^{-1})\prod_{j=1}^{n} (\overline{A^{T}})_{j\sigma^{-1}(j)} = \det(\overline{A^{T}}) \\
\implies \boxed{ \overline{\det(A)} = \det(\overline{A^{T}}) } \\
}
$$
# 4c
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{m \times n} \\
\text{Prove or disprove: } \det(AA^{T}) = \det(A^{T}A) \\
\\
\text{Disproof:} \\
A = \begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
\end{pmatrix} \\
A^{T} = \begin{pmatrix}
1 & 0 \\
0 & 1 \\
0 & 0 \\
\end{pmatrix} \\
AA^{T} = \begin{pmatrix}
1 & 0 \\
0 & 1 \\
\end{pmatrix} \\
A^{T}A = \begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 0 \\
\end{pmatrix} \\
\det(AA^{T}) = 1 \neq 0 = \det(A^{T}A) \\
}
$$
# 4d
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Prove or disprove: } \forall i, j \in [1, n]: \left\lvert M_{ij}(A) \right\rvert = 0 \implies rank(A) \leq n - 2 \\
\\
\text{Disproof for } n = 1: \\
n = 1 \implies rank(A) \geq 0 = n - 1 \\
\text{Proof for } n \geq 2: \\
\text{Let } rank(A) = n \\
\implies \left\lvert A \right\rvert \neq 0 \implies \exists i, j \in [1, n]: \left\lvert M_{ij}(A) \right\rvert  \neq 0 - \text{Contradiction!} \\
\text{Let } rank(A) = n - 1 \\
\implies \text{There exists exactly one column that is linearly dependant on the others} \\
\\
\text{Let } C_{k}(A) \text{ be linearly dependant on the others} \\
\text{Let } A_{k} = \begin{pmatrix}
\overset{ | }{ \underset{ | }{ C_{1}(A) } } & \dots & \overset{ | }{ \underset{ | }{ C_{k-1}(A) } } & \overset{ | }{ \underset{ | }{ C_{k+1}(A) } } & \dots & \overset{ | }{ \underset{ | }{ C_{n}(A) } } \\
\end{pmatrix} \\
C(A) = sp(\Set{ C_{i}(A) }_{i \in [1, n]}) = sp(\Set{ C_{i}(A) }_{i \in [1, n]} \setminus \Set{ C_{k}(A) }) = C(A_{k}) \\
\implies rank(A_{k}) = n - 1 \\
A \in \mathbb{F}^{n \times n-1} \implies \text{There exists exactly one row that is linearly dependant on others} \\
\text{Let } R_{j}(A_{k}) \text{ be linearly dependant on the others} \\
\text{Let } A_{jk} = \begin{pmatrix}
-R_{1}(A_{k})- \\
\vdots \\
-R_{j-1}(A_{k})- \\
-R_{j+1}(A_{k})- \\
\vdots \\
-R_{n}(A_{k})- \\
\end{pmatrix} \\
R(A_{k}) = sp(\Set{ R_{i}(A_{k}) }_{i \in [1, n]} \setminus \Set{ R_{j}(A_{k}) }) = R(A_{jk}) \\
\implies rank(A_{jk}) = n - 1 \\
A_{jk} \in \mathbb{F}^{n-1 \times n-1} \implies \left\lvert A_{jk} \right\rvert \neq 0 \\
A_{jk} = M_{jk}(A) \implies \left\lvert M_{jk}(A) \right\rvert \neq 0 - \text{Contradiction!} \\
\implies \boxed{ rank(A) \leq n - 2 } \\
}
$$
# 5a
$$
\displaylines{
\text{Prove: } \not\exists A \in \mathbb{R}^{3 \times 3}: A^{2} = \begin{pmatrix}
1 & 0 & 1 \\
0 & -1 & 0 \\
0 & 0 & 1 \\
\end{pmatrix} \\
\\
\text{Proof:} \\
\text{Let } \exists A \in \mathbb{R}^{3 \times 3}: A^{2} = \begin{pmatrix}
1 & 0 & 1 \\
0 & -1 & 0 \\
0 & 0 & 1 \\
\end{pmatrix} \\
\left\lvert A^{2} \right\rvert = \begin{vmatrix}
1 & 0 & 1 \\
0 & -1 & 0 \\
0 & 0 & 1 \\
\end{vmatrix} = 1 \cdot \begin{vmatrix}
-1 & 0 \\
0 & 1 \\
\end{vmatrix} = -1 \\
\left\lvert A^{2} \right\rvert = \left\lvert A \right\rvert^{2} \geq 0 \in \mathbb{R} \\
\left\lvert A \right\rvert ^{2} = -1 - \text{Contradiction!} \\
\implies \boxed{ \not\exists A \in \mathbb{R}^{3 \times 3}: A^{2} = \begin{pmatrix}
1 & 0 & 1 \\
0 & -1 & 0 \\
0 & 0 & 1 \\
\end{pmatrix} } \\
}
$$
# 5b
$$
\displaylines{
\text{Is there such matrix in } \mathbb{C}^{3 \times 3}? \\
\\
\text{Solution:} \\
A = \begin{pmatrix}
1 & 0 & \frac{1}{2} \\
0 & -i & 0 \\
0 & 0 & 1 \\
\end{pmatrix} \implies A^{2} = \begin{pmatrix}
1 & 0 & 1 \\
0 & -1 & 0 \\
0 & 0 & 1 \\
\end{pmatrix} \\
}
$$
# 6
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n}, a_{ij} = \left\{\begin{array}{}
1 & j \equiv 2i - 1 (\mod n) \\
0 & \text{otherwise} \\
\end{array}\right. \\

}
$$
## 6a
$$
\displaylines{
\text{Find all } n \text{ for which } \det(A) = 0 \\
\\
\text{Solution:} \\
1 \leq i \leq n \implies 2 \leq 2i \leq 2n < 2n + 1 \\
j = n \iff j \equiv 0 \mod n \\
(2i-1) \equiv 0 \mod n \iff 2i = n + 1 \iff \left\{\begin{array}{}
n \text{ is odd} \\
i = \frac{n+1}{2} \\
\end{array}\right. \\
\implies \boxed{ \bigg[n \text{ is even} \implies C_{n}(A) = 0 \implies \det(A) = 0\bigg] } \\
\text{Let } n \text{ be odd} \\
\text{Let } j \in [1, n] \\
\implies j (\mod n) \in [0, n-1] \\
2i - 1 \in \Set{ 1, 3, 5, \dots, n, n + 2, n + 4, n + (n - 1) } \\
\implies 2i - 1 (\mod n) \in [0, n-1] \\
\implies \exists i \in [1, n]: j \equiv 2i - 1 (\mod n) \\
\text{Let } \exists i_{1} \neq i_{2} \in [1, n]: \left\{\begin{array}{}
j \equiv 2i_{1} - 1(\mod n) \\
j \equiv 2i_{2} - 1(\mod n) \\
\end{array}\right. \\
\text{Let } i_{1} < i_{2} \quad \text{ WLOG} \\
2i_{1} - 1 \equiv 2i_{2} - 1(\mod n) \\
\implies 2i_{1} - 1 = 2i_{2} - 1 + kn \implies 2i_{2} = 2i_{1} + kn, k \in \mathbb{N}_{0} \\
i_{1} \neq i_{2} \implies 2i_{1} \neq 2i_{2} \implies k \neq 0 \\
2(i_{2} - i_{1}) > 0 \implies kn > 0 \implies k > 0 \\
2i_{2} = 2i_{1} + kn \implies kn \text{ is even} \implies k \geq 2 \\
\text{Let } k = 2a, a \in \mathbb{N} \\
i_{2} = i_{1} + an \\
\implies n + 1 \leq i_{1} + an \leq n - \text{Contradiction!} \\
\implies \exists! i \in [1, n]: j \equiv 2i - 1(\mod n) \\
\implies \text{In each column there is exactly one } 1 \\
\text{Let } j_{1} \equiv 2i_{1} - 1 (\mod n) \\
\text{Let } j_{2} \equiv 2i_{2} - 1 (\mod n) \\
j_{1} \neq j_{2} \implies j_{1} \not\equiv j_{2} (\mod n) \\
\implies 2i_{1} - 1 \not\equiv 2i_{2} - 1(\mod n) \implies i_{1} \neq i_{2} \\
\implies \text{In each row there is exacly one } 1 \\
\implies \det(A) = \pm 1 \\
\implies \boxed{ \det(A) = 0 \iff n \text{ is even} } \\
}
$$
## 6b
$$
\displaylines{
\text{Calculate } \det(A) \text{ for } n = 3, 5, 7, 9 \\
\\
\text{Solution:} \\
\text{Let us find all positions where } 1 \text{'s are} \\
\text{And calculate the sign of permutation for these positions} \\
\text{According to 6a, determinant is going to be } (-1) \text{ or } 1 \text{ based on this sign} \\
n = 3 \implies \left\{\begin{array}{}
i = 1 \implies j = 1 \\
i = 2 \implies j = 3 \\
i = 3 \implies j = 2 \\
\end{array}\right. \implies 1,3,2 \implies \det(A) = -1 \\
n = 5 \implies \left\{\begin{array}{}
i = 1 \implies j = 1 \\
i = 2 \implies j = 3 \\
i = 3 \implies j = 5 \\
i = 4 \implies j = 2 \\
i = 5 \implies j = 4 \\
\end{array}\right. \implies 1,3,5,2,4 \implies \det(A) = -1 \\
n = 7 \implies \left\{\begin{array}{}
i = 1 \implies j = 1 \\
i = 2 \implies j = 3 \\
i = 3 \implies j = 5 \\
i = 4 \implies j = 7 \\
i = 5 \implies j = 2 \\
i = 6 \implies j = 4 \\
i = 7 \implies j = 6 \\
\end{array}\right. \implies 1,3,5,7,2,4,6 \implies \det(A) = 1 \\
n = 9 \implies \left\{\begin{array}{}
i = 1 \implies j = 1 \\
i = 2 \implies j = 3 \\
i = 3 \implies j = 5 \\
i = 4 \implies j = 7 \\
i = 5 \implies j = 9 \\
i = 6 \implies j = 2 \\
i = 7 \implies j = 4 \\
i = 8 \implies j = 6 \\
i = 9 \implies j = 8 \\
\end{array}\right. \implies 1,3,5,7,9,2,4,6,8 \implies \det(A) = 1 \\
}
$$
## 6 bonus
$$
\displaylines{
\text{Prove: } \det(A) = 1 \iff \left[\begin{array}{}
8 \mid (n-1) \\
8 \mid (n+1) \\
\end{array}\right. \\
\\
\text{Proof:} \\
n \text{ is even} \iff \det(A) = 0 \\
\implies \det(A) \neq 0 \iff n \text{ is odd} \\
\text{Let } n \text{ be odd} \\
\text{Let } f(i) = 2i-1 (\mod n) \\
Im(f) = [0, n-1] \implies f \text{ is not a permutation of } [1, n] \\
\forall i \in [1, n]: f(i) \neq n \\
\text{Let } \sigma_{0}(i) = \left\{\begin{array}{}
n & 2i-1 (\mod n) = 0 \\
2i - 1(\mod n) & \text{otherwise} \\
\end{array}\right. \\
\sigma_{0}(i) = \left\{\begin{array}{}
2i - 1 & i < \frac{n+1}{2} \\
n & i = \frac{n+1}{2} \\
2i - 1 - n & i > \frac{n+1}{2} \\
\end{array}\right. \\
0 \equiv n \equiv 2\frac{n+1}{2} - 1(\mod n) \implies \sigma_{0} \text{ is a permutation of } [1, n] \\
\text{As proved in 6a, there is exactly one } 1 \text{ in each column and row of } A \\
\implies \sigma_{0} \text{ is the only permutation that yields a non-zero product} \\
\implies \det(A) = \sum_{\sigma \in S_{n}} sgn(\sigma) \prod_{i=1}^{n} a_{i\sigma(i)} = sgn(\sigma_{0}) \underbrace{ \prod_{i=1}^{n} a_{i\sigma_{0}(i)} }_{ \prod_{i=1}^{n} 1 = 1 } = sgn(\sigma_{0}) \\
\implies \text{It is enough to prove } sgn(\sigma_{0}) = 1 \iff \left[\begin{array}{}
8 \mid (n-1) \\
8 \mid (n+1) \\
\end{array}\right. \\
}
$$
$$
\displaylines{
\text{Let } k = \frac{n+1}{2} \\
\left\{\begin{array}{}
\sigma_{0}(1) = 1 \\
\sigma_{0}(2) = 3 \\
\vdots \\
\sigma_{0}(k-1) = 2(k-1) - 1 = 2k - 3 = n - 2 \\
\sigma_{0}(k) = n \\
\sigma_{0}(k+1) = 2(k+1) - 1 - n = 2k + 1 - n = n + 2 - n = 2 \\
\sigma_{0}(k+2) = 2(k+2) - 1 - n = 2k + 3 - n = n + 4 - n = 4 \\
\vdots \\
\sigma_{0}(n) = 2n - 1 - n = n - 1 \\
\end{array}\right. \\
\\
\implies \sigma_{0} = \Set{ 1, 3, 5, \dots, n, 2, 4, \dots, n-1 } \\
\text{Let us count the number of inversions in } \sigma_{0} \\
\text{There are } k \text{ values in } \Set{ 1, 3, 5, \dots, n } \\
\text{There are } k-1 \text{ values in } \Set{ 2, 4, \dots, n-1 } \\
\forall i \in [2, k]: k+1 > i \text{ and } \sigma(i) \geq 3 > 2 = \sigma(k+1) \implies k-1 \text{ inversions} \\
\forall i \in [3, k]: k+2 > i \text{ and } \sigma(i) \geq 5 > 4 = \sigma(k+2) \implies k-2 \text{ inversions} \\
\dots \\
\text{Other than these, there are no inversions as "halves" of permutation are ordered} \\
\implies \text{Total number of inversions is} \\
P = \sum_{i=1}^{k-1} (k-i) = (k-1) + (k-2) + \dots + (k-(k-1)) = \frac{k(k-1)}{2} \\
sgn(\sigma_{0}) = (-1)^{P} \\
\implies sgn(\sigma_{0}) = 1 \iff P \text{ is even} \iff k(k-1) \equiv 0 \mod 4 \\
\iff \left[\begin{array}{}
k \equiv 0 \mod 4 \\
k \equiv 1 \mod 4 \\
\end{array}\right. \\
\text{Let } k \equiv 0 \mod 4 \iff k = 4m \\
\iff n = 2k - 1 = 8m - 1 \iff n+1 = 8m \iff \boxed{ 8 \mid (n+1) } \\
\text{Let } k \equiv 1 \mod 4 \iff k = 4m + 1 \\
\iff n = 8m + 2 - 1 = 8m + 1 \iff n - 1 = 8m \iff \boxed{ 8 \mid (n-1) } \\
}
$$
# 7
$$
\displaylines{
\text{Let } n \geq 2 \\
\text{Let } A \in \mathbb{R}^{n \times n} \\
\text{Let } \forall i, j \in [1, n]: a_{ij} \in \Set{ 1, -1 } \\
\text{Prove: } \det(A) \text{ is even} \\
\\
\text{Proof:} \\
\text{Base case. } n = 2 \\
\det(A) = a_{11}a_{22} - a_{12}a_{21} = (-1)^{x} + (-1)^{y} \in \Set{ -2, 0, 2 } \implies \det(A) \text{ is even} \\
\text{Induction step. Let } \forall B \in \mathbb{R}^{n \times n}: \det(B) \text{ is even} \\
\text{Let } C \in \mathbb{R}^{n+1 \times n+1} \\
\det(C) = \sum_{j=1}^{n} (-1)^{j+1}c_{1j}\det(M_{1j}(C)) \\
\forall j \in [1, n]: M_{1j}(C) \in \mathbb{R}^{n \times n} \text{ and } c_{ij} = \pm 1 \\
\implies (-1)^{j+1}c_{1j}\det(M_{1j}(C)) = \pm \det(M_{1j}(C)) \text{ is even} \\
\text{Sum of even numbers is even} \implies \det(C) \text{ is even} \\
\implies \text{By induction: } \boxed{ \forall A \in \mathbb{R}^{n \times n}: \det(A) \text{ is even} } \\
}
$$
# 8
$$
\displaylines{
\text{Find the determinant of Vandermonde matrix} \\
A = \begin{pmatrix}
1 & \alpha_{1} & \alpha_{1}^{2} & \dots & \alpha_{1}^{n-1} \\
1 & \alpha_{2} & \alpha_{2}^{2} & \dots & \alpha_{2}^{n-1} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
1 & \alpha_{n} & \alpha_{n}^{2} & \dots & \alpha_{n}^{n-1} \\
\end{pmatrix} \\
\\
\text{Solution:} \\
\text{Let } A_{n} = A \text{ of size } n \\
\begin{pmatrix}
1 & \alpha_{1} & \alpha_{1}^{2} & \dots & \alpha_{1}^{n-1} \\
1 & \alpha_{2} & \alpha_{2}^{2} & \dots & \alpha_{2}^{n-1} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
1 & \alpha_{n} & \alpha_{n}^{2} & \dots & \alpha_{n}^{n-1} \\
\end{pmatrix} \overset{ \forall i \in [2, n]: R_{i} - R_{1} }{ \to } \begin{pmatrix}
1 & \alpha_{1} & \alpha_{1}^{2} & \dots & \alpha_{1}^{n-1} \\
0 & \alpha_{2}-\alpha_{1} & \alpha_{2}^{2}-\alpha_{1}^{2} & \dots & \alpha_{2}^{n-1}-\alpha_{1}^{n-1} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & \alpha_{n}-\alpha_{1} & \alpha_{n}^{2}-\alpha_{1}^{2} & \dots & \alpha_{n}^{n-1}-\alpha_{1}^{n-1} \\
\end{pmatrix} \\
\overset{ \forall i \in \Set{ n, \dots, 2 }: C_{i} - \alpha_{1}C_{i-1} }{ \to } \begin{pmatrix}
1 & 0 & 0 & \dots & 0 \\
0 & \alpha_{2}-\alpha_{1} & \alpha_{2}(\alpha_{2}-\alpha_{1}) & \dots & \alpha_{2}^{n-2}(\alpha_{2} - \alpha_{1}) \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & \alpha_{n}-\alpha_{1} & \alpha_{n}(\alpha_{n}-\alpha_{1}) & \dots & \alpha_{n}^{n-2}(\alpha_{n}-\alpha_{1}) \\
\end{pmatrix} \\
\boxed{ \exists i \in [2, n]: \alpha_{i} = \alpha_{1} \implies R_{i}(A_{n}) = 0 \implies \det(A_{n}) = 0 } \\
\text{Let } \forall i \in [2, n]: \alpha_{i} \neq \alpha_{1} \\
\\
\overset{ \forall i \in [2, n]: \frac{1}{\alpha_{i}-\alpha_{1}}R_{i} }{ \to } \begin{pmatrix}
1 & 0 & 0 & \dots & 0 \\
0 & 1 & \alpha_{2} & \dots & \alpha_{2}^{n-2} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 1 & \alpha_{n} & \dots & \alpha_{n}^{n-2} \\
\end{pmatrix} \\
}
$$
$$
\displaylines{
\implies \det(A_{n}) = \left( \prod_{i=2}^{n} (\alpha_{i}-\alpha_{1}) \right) \det(M_{11}(A_{n})) = \left( \prod_{i=2}^{n} (\alpha_{i}-\alpha_{1}) \right) \det(A_{n-1}) = \\
= \left( \prod_{i_{1}=2}^{n} (\alpha_{i_{1}}-\alpha_{1}) \right) \cdot \left( \prod_{i_{2}=3}^{n} (\alpha_{i_{2}}-\alpha_{2}) \right) \cdot \ldots \cdot \left( \prod_{i_{n-1}=n}^{n} (\alpha_{i_{n-1}}-\alpha_{n-1}) \right) \cdot \underbrace{ \det(A_{1}) }_{ 1 } = \\
= \boxed{ \prod_{1 \leq i < j \leq n} (\alpha_{j} - \alpha_{i}) } \text{ this formula also includes all cases when } \det(A_{n}) = 0 \\
}
$$
