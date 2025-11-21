---
{"publish":true,"created":"25/11/24, 16:11","modified":"2025-11-21T21:10:02.554+02:00","tags":["Academia","Assignment","Linear-1"],"cssclasses":""}
---

# 1a
$$
\displaylines{
A \in \mathbb{Z}_{7}^{4 \times 4} \\
\left(\begin{array}{c|c}
A & I \\
\end{array}\right)
= \left(\begin{array}{cccc|cccc}
1 & 0 & 2 & 3 & 1 & 0 & 0 & 0 \\
6 & 4 & 0 & 1 & 0 & 1 & 0 & 0 \\
1 & 5 & 5 & 2 & 0 & 0 & 1 & 0 \\
0 & 0 & 1 & 1 & 0 & 0 & 0 & 1 \\
\end{array}\right) \overset{ R_{2} = R_{2}+R_{1} }{ \underset{ R_{3}=R_{3}+(-R_{1}) }{ \to } }
\left(\begin{array}{cccc|cccc}
1 & 0 & 2 & 3 & 1 & 0 & 0 & 0 \\
0 & 4 & 2 & 4 & 1 & 1 & 0 & 0 \\
0 & 5 & 3 & 6 & 6 & 0 & 1 & 0 \\
0 & 0 & 1 & 1 & 0 & 0 & 0 & 1 \\
\end{array}\right) \\
\overset{ R_{3} = R_{3}+4R_{2} }{ \underset{ R_{2}=2R_{2}+(-R_{3}) }{ \to } }
\left(\begin{array}{cccc|cccc}
1 & 0 & 2 & 3 & 1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 & 6 & 5 & 6 & 0 \\
0 & 0 & 4 & 1 & 3 & 4 & 1 & 0 \\
0 & 0 & 1 & 1 & 0 & 0 & 0 & 1 \\
\end{array}\right) \overset{ R_{3}=2R_{3} }{ \underset{ R_{4} = R_{3}-R_{4} }{ \to } } 
\left(\begin{array}{cccc|cccc}
1 & 0 & 2 & 3 & 1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 & 6 & 5 & 6 & 0 \\
0 & 0 & 1 & 2 & 6 & 1 & 2 & 0 \\
0 & 0 & 0 & 1 & 6 & 1 & 2 & 6 \\
\end{array}\right) \\
\overset{ R_{3}=R_{3}+2(-R_{4}) }{ \underset{ R_{1}=R_{1}+3(-R_{4}) }{ \to } } 
\left(\begin{array}{cccc|cccc}
1 & 0 & 2 & 0 & 4 & 4 & 1 & 3 \\
0 & 1 & 0 & 0 & 6 & 5 & 6 & 0 \\
0 & 0 & 1 & 0 & 1 & 6 & 5 & 2 \\
0 & 0 & 0 & 1 & 6 & 1 & 2 & 6 \\
\end{array}\right) \overset{ R_{1}=R_{1}+2(-R_{3}) }{ \to }
\left(\begin{array}{cccc|cccc}
1 & 0 & 0 & 0 & 2 & 6 & 5 & 6 \\
0 & 1 & 0 & 0 & 6 & 5 & 6 & 0 \\
0 & 0 & 1 & 0 & 1 & 6 & 5 & 2 \\
0 & 0 & 0 & 1 & 6 & 1 & 2 & 6 \\
\end{array}\right) = \\
= \left(\begin{array}{c|c}
I & A^{-1} \\
\end{array}\right)
\implies \boxed{A^{-1} = \begin{pmatrix}
2 & 6 & 5 & 6 \\
6 & 5 & 6 & 0 \\
1 & 6 & 5 & 2 \\
6 & 1 & 2 & 6 \\
\end{pmatrix}} \\
}
$$
# 1b
$$
\displaylines{
A \in \mathbb{R}^{3 \times 3} \\
\left(\begin{array}{c|c}
A & I
\end{array}\right) = 
\left(\begin{array}{ccc|ccc}
1 & 0 & 1 & 1 & 0 & 0 \\
1 & 1 & 0 & 0 & 1 & 0 \\
0 & 1 & 1 & 0 & 0 & 1 \\
\end{array}\right) \overset{ R_{2}=R_{2}-R_{1} }{ \underset{ R_{3}=\frac{1}{2}(R_{3}-R_{2}) }{ \to } } 
\left(\begin{array}{ccc|ccc}
1 & 0 & 1 & 1 & 0 & 0 \\
0 & 1 & -1 & -1 & 1 & 0 \\
0 & 0 & 1 & \frac{1}{2} & \frac{-1}{2} & \frac{1}{2} \\
\end{array}\right) \\
\overset{ R_{2}=R_{2}+R_{3} }{ \underset{ R_{1}=R_{1}-R_{3} }{ \to } }
\left(\begin{array}{ccc|ccc}
1 & 0 & 0 & \frac{1}{2} & \frac{1}{2} & \frac{-1}{2} \\
0 & 1 & 0 & \frac{-1}{2} & \frac{1}{2} & \frac{1}{2} \\
0 & 0 & 1 & \frac{1}{2} & \frac{-1}{2} & \frac{1}{2} \\
\end{array}\right) = \\
= \left(\begin{array}{c|c}
I & A^{-1} \\
\end{array}\right)
\implies \boxed{A^{-1} = \frac{1}{2} \begin{pmatrix}
1 & 1 & -1 \\
-1 & 1 & 1 \\
1 & -1 & 1 \\
\end{pmatrix}} \\
}
$$
---
# 2
$$
\displaylines{
A, B \in \mathbb{F}^{n\times n} \\
A_{ij} = \begin{cases}
1 & i \geq j \\
0 & \text{otherwise} \\
\end{cases} \\
B_{ij} = \begin{cases}
1 & i = j \\
-1 & i = j + 1 \\
0 & \text{otherwise} \\
\end{cases} \\
\text{Prove that } A \text{ and } B \text{ are inverse matrices of each other} \\
\\
\text{Proof:} \\
(AB)_{ij} = \sum_{k=1}^{n} A_{ik}B_{kj} = \sum_{k=1}^{i} \underbrace{ A_{ik} }_{ k \leq i \implies 1 }B_{kj} + \sum_{k=i+1}^{n} \underbrace{ A_{ik} }_{ k > i \implies 0 }B_{kj} = \sum_{k=1}^{i} B_{kj} \\
1. \quad i = j \implies (AB)_{ij} = \sum_{k=1}^{j} B_{kj} = \sum_{k=1}^{j-1} \underbrace{ B_{kj} }_{ k < j \implies 0 } + B_{jj} = 0 + 1 = 1 \\
2. \quad i > j \implies (AB)_{ij} = \underbrace{ \sum_{k=1}^{j} B_{kj} }_{ 1 } + \sum_{k=j+1}^{i} B_{kj} = 1 + B_{j+1,j} + \sum_{k=j+2}^{i} \underbrace{ B_{kj} }_{ k > j+1 \implies 0 } = \\
   = 1 + -1 + 0 = 0 \\
3. \quad i < j \implies (AB)_{ij} = \sum_{k=1}^{i}  \underbrace{ B_{kj} }_{ k < j \implies 0 } = 0 \\
\implies (AB)_{ij} = \begin{cases}
1 & i = j \\
0 & \text{otherwise} \\
\end{cases} \implies AB = I \implies \boxed{B = A^{-1}, A = B^{-1}} \\
}
$$
---
$$
A \in \mathbb{F}^{n\times n}
$$
# 3a
$$
\displaylines{
\text{Prove or disprove: If } A \text{ is an elementary matrix, then } A^{2} = I \\
\\
\text{Disproof:} \\
\text{Let } A = \begin{pmatrix}
1 & 0 \\
0 & \alpha \\
\end{pmatrix} \\
\text{This matrix is an elementary row-multiplication matrix} \\
A^{2} = AA = \begin{pmatrix}
1 & 0 \\
0 & \alpha \\
\end{pmatrix} \times \begin{pmatrix}
1 & 0 \\
0 & \alpha \\
\end{pmatrix} = \begin{pmatrix}
1 & 0 \\
0 & \alpha^{2}
\end{pmatrix} \\
\implies \boxed{A^{2} \neq I} \\
}
$$
# 3b
$$
\displaylines{
\text{Prove or disprove: } A^{2} = I \implies A \text{ is an elementary matrix} \\
\\
\text{Disproof:} \\
A = \begin{pmatrix}
0 & 1 & 0 & 0 \\
1 & 0 & 0 & 0 \\
0 & 0 & 0 & 1 \\
0 & 0 & 1 & 0 \\
\end{pmatrix} \\
A \text{ is not an elementary matrix, as it swaps two pairs of rows,} \\
\text{but } A^{2} = I \implies \boxed{\text{Disproved}} \\
}
$$
# 3c
$$
\displaylines{
\text{Prove or disprove: } \not\exists A^{-1} \implies \exists B \neq 0: AB = 0 \\
\\
\text{Proof:} \\
\not\exists A^{-1} \implies \text{System of equations } Ax = 0 \\
\text{Has an all-zero row in the canonical form} \\
\implies \exists x \neq 0 : Ax = 0 \\
\implies \text{Exists a non-zero matrix B comprised of columns equal to } x \\
\implies \boxed{\exists x \neq 0: \exists B = x\cdot (1_{1\times n})^{T} \neq 0: Ax = 0 \implies AB = 0} \\
}
$$
# 3d
$$
\displaylines{
\text{Prove or disprove: } B \neq 0 \land AB = 0 \implies \not\exists A^{-1} \\
\\
\text{Proof: } \\
\text{Let } \exists A^{-1} \\
\text{Then } B = IB = (A^{-1}A)B = A^{-1}(AB) = A^{-1}\cdot 0 = 0 \\
B \neq 0 \land B = 0 - \text{Contradiction!} \\
\implies \boxed{\not\exists A^{-1}} \\
}
$$
---
$$
\displaylines{
A = \begin{pmatrix}
a_{11} & . & . & . & a_{1n} \\
. & . & & & . \\
. & & . & & . \\
. & & & . & . \\
a_{n1} & . & . & . & a_{nn} \\
\end{pmatrix} \in \mathbb{F}^{n\times n} \\
B = \begin{pmatrix}
a_{11} & . & . & . & a_{1n} & 0 \\
. & . & & & . & . \\
. & & . & & . & . \\
. & & & . & . & . \\
a_{n1} & . & . & . & a_{nn} & 0 \\
b_{1} & . & . & . & b_{n} & b_{n+1} \\
\end{pmatrix} \in \mathbb{F}^{n+1 \times n+1}
}
$$
# 4a
$$
\displaylines{
\text{Prove: } \not\exists A^{-1} \implies \not\exists B^{-1} \\
\\
\text{Proof:} \\
\text{Let } E_{i} \text{ be an elementary matrix} \in \mathbb{F}^{n \times n} \\
\text{Let } E = \left( \prod_{i=1}^{k} E_{i} \right) \\
\text{Let } A_{1} = EA \\
\not\exists A^{-1} \implies \exists E: \exists A_{1} \text{, that has at least one all-zero row } R \\
\text{Let } E_{i}' = \begin{pmatrix}
E_{i} & 0_{n\times 1} \\
0_{1 \times n} & 1 \\
\end{pmatrix} \in \mathbb{F}^{n+1 \times n+1} \\
\text{Note that } E'_{i} \text{ is an elementray matrix} \\
\text{Let } B_{1} = \left( \prod_{i=1}^{k} E_{i}' \right)\cdot B = \begin{pmatrix}
A_{1} & 0_{n\times 1} \\
\{ b_{1}, \dots, b_{n} \} & b_{n+1} \\
\end{pmatrix} \\
B_{1} \text{ is obtained by applying elementary transformations to $B$} \\ \text{and has at least one all-zero row } \begin{pmatrix}
R & 0
\end{pmatrix} \implies \boxed{\not\exists B^{-1}} \\
}
$$
# 4b
$$
\displaylines{
\text{Find sufficient and necessary conditions for } \{ b_{1}, \dots, b_{n+1} \} \text{ such that:} \\
\exists A^{-1} \iff \exists B^{-1} \\
\\
1. \quad \exists B^{-1} \implies \exists A^{-1} \\
\text{Let } \exists B^{-1} \\
(\exists B^{-1} \implies \exists A^{-1}) \equiv (\not\exists B^{-1} \lor \exists A^{-1}) \equiv (\text{False} \lor \exists A^{-1}) \equiv \exists A^{-1} \\
\implies \boxed{\exists B^{-1} \implies \exists A^{-1}} \\
2. \quad \exists A^{-1} \implies B^{-1} \\
\text{Let } \exists A^{-1} \\
\text{Let } E_{i} \text{ be an elementary matrix} \in \mathbb{F}^{n\times n} \\
\text{Then } \exists E = \left( \prod_{i=1}^{k} E_{i} \right): EA = I \\
\text{Let } E'_{i} = \begin{pmatrix}
E_{i} & 0_{n\times 1} \\
0_{1 \times n} & 1 \\
\end{pmatrix} \in \mathbb{F}^{n+1 \times n+1} \\
\text{Note that } E'_{i} \text{ is an elementray matrix} \\
\text{Then } \exists E' = \left( \prod_{i=1}^{k} E'_{i} \right): E'B = \begin{pmatrix}
I_{n} & 0_{n\times 1} \\
\{ b_{1}, \dots, b_{n} \} & b_{n+1} \\
\end{pmatrix} \\
\text{Let us apply some more elementary transformations: } \\
\forall i \in [1, n] : R_{n+1} = R_{n+1} - b_{i}\cdot R_{i} \\
\text{After applying these elementary transformations the resulting matrix will look like this:} \\
B_{1} = \begin{pmatrix}
I_{n} & 0_{n\times 1} \\
0_{1\times n} & b_{n+1} \\
\end{pmatrix} \\
b_{n+1} \neq 0 \iff \exists B_{1}^{-1} \iff \exists B^{-1} \\
\implies b_{n+1} \neq 0 \iff \exists B^{-1} \\
1. \text{ and } 2. \implies \boxed{b_{n+1} \neq 0 \iff (\exists A^{-1} \iff \exists B^{-1})} \\
}
$$
---

# 5a
$$
\displaylines{
\text{Prove or disprove: } A, B \text{ are elementary row-addition matrices} \\
\implies \exists A, B \in \mathbb{R}^{n \times n} : \not\exists (A+B)^{-1} \\
\\
\text{Proof:} \\
\text{Let } A = \begin{pmatrix}
\begin{bmatrix}
1 & 0 \\
2 & 1 \\
\end{bmatrix} & 0_{2 \times (n-2)} \\
0_{(n-2) \times 2} & I_{n-2} \\
\end{pmatrix}, B = \begin{pmatrix}
\begin{bmatrix}
1 & 2 \\
0 & 1 \\
\end{bmatrix} & 0_{2 \times (n-2)} \\
0_{2 \times (n-2)} & I_{n-2} \\
\end{pmatrix} \\
A: R_{2} = R_{2} + 2R_{1}, \quad B: R_{1} = R_{1} + 2R_{2} \\
A+B = \begin{pmatrix}
\begin{bmatrix}
2 & 2 \\
2 & 2 \\
\end{bmatrix} & 0_{2 \times (n-2)} \\
0_{2 \times (n-2)} & 2I_{n-2} \\
\end{pmatrix} \\
(A+B)_{1} = (A+B)_{2} \implies \boxed{\not\exists (A+B)^{-1}}
}
$$
# 5b
$$
\displaylines{
\text{Prove or disprove: } A, B \text{ are elementary row-switching matrices} \\
\implies \exists A, B \in \mathbb{R}^{n \times n} : \not\exists (A+B)^{-1} \\
\\
\text{Proof: } \\
\text{If } I \text{ can be considered an elementary row-switching matrix,} \\
\text{then the statement is correct for all } n \geq 1 \\
\text{Otherwise it is only correct for } n \geq 4 \\
\text{Let } A = \begin{pmatrix}
\begin{bmatrix}
0 & 1 \\
1 & 0 \\
\end{bmatrix} & 0_{2 \times (n-2)} \\
0_{(n-2) \times 2} & I_{n-2} \\
\end{pmatrix}, B = \begin{pmatrix}
I_{n-2} & 0_{2 \times 2} \\
0_{2 \times 2} & \begin{bmatrix}
0 & 1 \\
1 & 0 \\
\end{bmatrix} \\
\end{pmatrix} \\
A: R_{1} \leftrightarrow R_{2}, \quad B: R_{n-1} \leftrightarrow R_{n} \\
A+B = \begin{pmatrix}
\begin{bmatrix}
1 & 1 \\
1 & 1 \\
\end{bmatrix} & 0_{2 \times (n-2)} \\
0_{(n-2) \times 2} & B'_{n-2} \\
\end{pmatrix} \\
(A+B)_{1} = (A+B)_{2} \implies \boxed{\not\exists (A+B)^{-1}}
}
$$
# 5c
$$
\displaylines{
\text{Prove or disprove: } AB = BA, A^{3} + 3A^{2}B + 3AB^{2} + B^{3} = I \\
\implies \exists A, B \in \mathbb{R}^{n \times n} : \not\exists (A+B)^{-1} \\
\\
\text{Disproof:} \\
AB=BA \implies (A+B)^{3} = (AA + AB + BA + BB)(A+B) = \\
AAA + ABA + BAA + BBA + AAB + ABB + BAB + BBB = \\
= A^{3} + 3A^{2}B + 3AB^{2} + B^{3} = I \\
\implies (A+B)\underbrace{ (A+B)^{2} }_{ (A+B)^{-1} } = I \implies \boxed{\exists (A+B)^{-1}} \\
}
$$
---

# 6a
$$
\displaylines{
\text{Given: } A \in \mathbb{R}^{4 \times 5} \\
\left( \prod_{i=1}^{n} E_{i} \right) \cdot A = \begin{pmatrix}
a_{11} \\
0 & a_{22} \\
0 & 0 & a_{33} \\
0 & 0 & 0 & a_{44} & a_{45} \\
\end{pmatrix}, \text{ where } E_{i} \text{ is an elementary matrix} \\
\text{Prove: } \forall b \in \mathbb{R}^{4 \times 1} \text{ system of equations } Ax = b \text{ has infinitely many solutions} \\
\\
\text{Proof:} \\
Ax = b \iff \begin{pmatrix}
a_{11} \\
0 & a_{22} \\
0 & 0 & a_{33} \\
0 & 0 & 0 & a_{44} & a_{45} \\
\end{pmatrix} \cdot \begin{pmatrix}
x_{1} \\
x_{2} \\
x_{3} \\
x_{4} \\
x_{5} \\
\end{pmatrix} = \begin{pmatrix}
b'_{1} \\
b'_{2} \\
b'_{3} \\
b'_{4} \\
\end{pmatrix} \\
\iff \left\{\begin{array}{}
a_{11}x_{1} + a_{12}x_{2} + a_{13}x_{3} +  & a_{14}x_{4} +  & a_{15}x_{5}  & = b'_{1} \\
a_{22}x_{2} + a_{23}x_{3} +  & a_{24}x_{4} +  & a_{25}x_{5}  & = b'_{2} \\
a_{33}x_{3} +  & a_{34}x_{4} +  & a_{35}x_{5}  & = b'_{3} \\
 & a_{44}x_{4} +  & a_{45}x_{5}  & = b'_{4} \\
\end{array}\right. \\
\implies \left\{\begin{array}{}
x_{5} = t \\
x_{4} = \alpha_{1}t \\
x_{3} = \alpha_{2}t \\
x_{2} = \alpha_{3}t \\
x_{1} = \alpha_{4}t \\
\end{array}\right. \implies \boxed{\text{System of equations has infinitely many solutions}}
}
$$
# 6b
$$
\displaylines{
\text{In addition to what is given in 6a,} \\
A \cdot \begin{pmatrix}
1 & 2 & 0 \\
0 & -3 & -4 \\
-2 & 1 & 4 \\
-1 & 0 & 2 \\
1 & 0 & 1 \\
\end{pmatrix} = \begin{pmatrix}
0 & -4 & -9 \\
0 & 4 & 21 \\
0 & -7 & -13 \\
0 & 6 & -6 \\
\end{pmatrix} \\
\text{Find a set of solutions for the system of equations } Ax = \begin{pmatrix}
-4 \\
4 \\
-7 \\
6 \\
\end{pmatrix} \\
\\
\text{Solution:} \\
A \cdot \begin{pmatrix}
1 & 2 & 0 \\
0 & -3 & -4 \\
-2 & 1 & 4 \\
-1 & 0 & 2 \\
1 & 0 & 1 \\
\end{pmatrix} = \begin{pmatrix}
0 & -4 & -9 \\
0 & 4 & 21 \\
0 & -7 & -13 \\
0 & 6 & -6 \\
\end{pmatrix} \quad \Bigg| \cdot \begin{pmatrix}
0 \\
1 \\
0 \\
\end{pmatrix},\begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix} \\
A \cdot \begin{pmatrix}
2 \\
-3 \\
1 \\
0 \\
0 \\
\end{pmatrix} = \begin{pmatrix}
-4 \\
4 \\
-7 \\
6 \\
\end{pmatrix}, A \cdot \begin{pmatrix}
1 \\
0 \\
2 \\
-1 \\
1 \\
\end{pmatrix} \underset{ \text{Homogeneous!} }{ = } 0 \\
\implies Ax = \begin{pmatrix}
-4 \\
4 \\
-7 \\
6 \\
\end{pmatrix} \implies x = \Set{ \begin{pmatrix}
2 \\
-3 \\
1 \\
0 \\
0 \\
\end{pmatrix} + \alpha \begin{pmatrix}
1 \\
0 \\
2 \\
-1 \\
1 \\
\end{pmatrix} | \forall \alpha \in \mathbb{R}} \\
}
$$
---
