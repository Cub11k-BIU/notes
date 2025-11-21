---
{"publish":true,"created":"03/01/25, 18:01","modified":"2025-11-21T21:10:02.603+02:00","tags":["Academia","Assignment","Linear-1"],"cssclasses":""}
---

# 1
$$
\displaylines{
A = \begin{pmatrix}
1 & 1 & 0 \\
0 & 1 & 1 \\
3 & 5 & 2 \\
\end{pmatrix}, B = \begin{pmatrix}
1 & 2 & 4 \\
0 & 3 & 5 \\
\end{pmatrix} \\
}
$$
## 1a
$$
\displaylines{
\text{Find } R(A) \\
\\
\text{Solution:} \\
R(A) = sp(\Set{ R_{1}(A), R_{2}(A), R_{3}(A) }) = \\
= sp(\Set{ \begin{pmatrix}
1 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
3 \\
5 \\
2 \\
\end{pmatrix} }) \\
\begin{pmatrix}
3 \\
5 \\
2 \\
\end{pmatrix} = 3\begin{pmatrix}
1 \\
1 \\
0 \\
\end{pmatrix} + 2\begin{pmatrix}
0 \\
1 \\
1 \\
\end{pmatrix} \\
\implies \boxed{R(A) = sp(\Set{ \begin{pmatrix}
1 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
1 \\
\end{pmatrix} })}
}
$$
## 1b
$$
\displaylines{
\text{Find } C(A) \\
\\
\text{Solution:} \\
C(A) = sp(\Set{ C_{1}(A), C_{2}(A), C_{3}(A) }) = \\
= sp(\Set{ \begin{pmatrix}
1 \\
0 \\
3 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
1 \\
5 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
2 \\
\end{pmatrix} }) \\
\begin{pmatrix}
1 \\
1 \\
5 \\
\end{pmatrix} = \begin{pmatrix}
1 \\
0 \\
3 \\
\end{pmatrix} + \begin{pmatrix}
0 \\
1 \\
2 \\
\end{pmatrix} \\
\implies \boxed{C(A) = sp(\Set{ \begin{pmatrix}
1 \\
0 \\
3 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
2 \\
\end{pmatrix} })} \\
}
$$
## 1c
$$
\displaylines{
\text{Find } N(A) \\
\\
\text{Solution:} \\
N(A) = \Set{ x | Ax = 0 } \\
\left(\begin{array}{ccc|c}
1 & 1 & 0 & 0 \\
0 & 1 & 1 & 0 \\
3 & 5 & 2 & 0 \\
\end{array}\right) \to \left(\begin{array}{ccc|c}
1 & 1 & 0 & 0 \\
0 & 1 & 1 & 0 \\
0 & 2 & 2 & 0 \\
\end{array}\right) \to \left(\begin{array}{ccc|c}
1 & 1 & 0 & 0 \\
0 & 1 & 1 & 0 \\
0 & 0 & 0 & 0 \\
\end{array}\right) \\
\implies \left\{\begin{array}{}
x = s \\
y = -s \\
z = s \\
\end{array}\right. \implies \boxed{N(A) = sp(\Set{ \begin{pmatrix}
1 \\
-1 \\
1 \\
\end{pmatrix} })} \\
}
$$
## 1d
$$
\displaylines{
\text{Find } R(B) \\
\\
\text{Solution: } \\
R(B) = sp(\Set{ R_{1}(B), R_{2}(B) }) \\
\implies \boxed{R(B) = sp(\Set{ \begin{pmatrix}
1 \\
2 \\
4 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
3 \\
5 \\
\end{pmatrix} })} \\
}
$$
## 1e
$$
\displaylines{
\text{Find } C(B) \\
\\
\text{Solution:} \\
C(B) = sp(\Set{ C_{1}(B), C_{2}(B), C_{3}(B) }) = \\
= sp(\Set{ \begin{pmatrix}
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
2 \\
3 \\
\end{pmatrix}, \begin{pmatrix}
4 \\
5 \\
\end{pmatrix} }) \\
\begin{pmatrix}
1 & 0 \\
2 & 3 \\
4 & 5 \\
\end{pmatrix} \to \begin{pmatrix}
1 & 0 \\
0 & 1 \\
0 & 5 \\
\end{pmatrix} \to \begin{pmatrix}
1 & 0 \\
0 & 1 \\
0 & 0 \\
\end{pmatrix} \\
\implies \boxed{C(B) = sp(\Set{ \begin{pmatrix}
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
2 \\
3 \\
\end{pmatrix} })} \\
}
$$
## 1f
$$
\displaylines{
\text{Find } N(B) \\
\\
\text{Solution:} \\
N(B) = \Set{ x | Bx = 0 } \\
\left(\begin{array}{ccc|c}
1 & 2 & 4 & 0 \\
0 & 3 & 5 & 0 \\
\end{array}\right) \\
\implies \left\{\begin{array}{}
x = -2s \\
y = -5s \\
z = 3s \\
\end{array}\right. \implies \boxed{N(B) = sp(\Set{ \begin{pmatrix}
-2 \\
-5 \\
3 \\
\end{pmatrix} })} \\
}
$$
---

# 2
$$
\displaylines{
A = \begin{pmatrix}
a & a & -1 \\
a^{2} & a & a^{2}-a \\
a & a & 2a+1 \\
\end{pmatrix} \\
\text{Determine } rank(A) \text{ for all values of } a \\
\text{Find values of } a \text{ such that } \exists A^{-1} \\
\\
\text{Solution:} \\
\begin{pmatrix}
a & a & -1 \\
a^{2} & a & a^{2}-a \\
a & a & 2a+1 \\
\end{pmatrix} \to \begin{pmatrix}
a & a & -1 \\
0 & a-a^{2} & a^{2} \\
0 & 0 & 2a+2 \\
\end{pmatrix} \overset{ 2a+2 \neq 0 }{ \to } \begin{pmatrix}
a & a & 0 \\
0 & a-a^{2} & 0 \\
0 & 0 & 1 \\
\end{pmatrix} \\
\overset{ a-a^{2} \neq 0 }{ \to } \begin{pmatrix}
a & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 \\
\end{pmatrix} \overset{ a \neq 0 }{ \to } \begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 \\
\end{pmatrix} \implies rank(A) = 3 \\
1. \quad a = 0 \\
\implies A = \begin{pmatrix}
0 & 0 & -1 \\
0 & 0 & 0 \\
0 & 0 & 1 \\
\end{pmatrix} \to \begin{pmatrix}
0 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 1 \\
\end{pmatrix} \implies \boxed{a = 0 \implies rank(A) = 1} \\
2. \quad a-a^{2} = 0 \\
\implies a = a^{2} \implies a = 1 \\
\implies A = \begin{pmatrix}
1 & 1 & -1 \\
1 & 1 & 1 \\
0 & 0 & 3 \\
\end{pmatrix} \to \begin{pmatrix}
1 & 1 & -1 \\
0 & 0 & 1 \\
0 & 0 & 3 \\
\end{pmatrix} \to \begin{pmatrix}
1 & 1 & -1 \\
0 & 0 & 1 \\
0 & 0 & 0 \\
\end{pmatrix} \\
\implies \boxed{a = 1 \implies rank(A) = 2} \\
3. \quad 2a+2 = 0 \\
\implies a = -1 \implies A = \begin{pmatrix}
-1 & -1 & -1 \\
1 & -1 & 0 \\
-1 & -1 & -1 \\
\end{pmatrix} \to \begin{pmatrix}
-1 & -1 & -1 \\
0 & -2 & -1 \\
0 & 0 & 0 \\
\end{pmatrix} \\
\implies \boxed{a = -1 \implies rank(A) = 2} \\
\implies \boxed{\begin{cases}
rank(A) = 1 & a = 0 \\
rank(A) = 2 & a = \pm 1 \\
rank(A) = 3 & \text{otherwise} \\
\end{cases}} \\
\boxed{\exists A^{-1} \iff rank(A) = 3 \iff a \not\in \Set{ -1, 0, 1 }} \\
}
$$
---

# 3
$$
\displaylines{
A \in \mathbb{R}^{4 \times 8} \\
rank(A) = 4 \\
\\
rank(A) = 4 \implies CF(A) = \begin{pmatrix}
1 & 0 & 0 & 0 & a_{15} & a_{16} & a_{17} & a_{18} \\
0 & 1 & 0 & 0 & a_{25} & a_{26} & a_{27} & a_{28} \\
0 & 0 & 1 & 0 & a_{35} & a_{36} & a_{37} & a_{38} \\
0 & 0 & 0 & 1 & a_{45} & a_{46} & a_{47} & a_{48} \\
\end{pmatrix} \\
}
$$
## 3a
$$
\displaylines{
\text{Is the set of rows of } A \text{ a linear dependence or independence?} \\
\\
\text{Solution:} \\
CF(A) \text{ has no zero-rows} \\
\implies \boxed{\text{Set of rows of $A$ is a linear independence}} \\
}
$$
## 3b
$$
\displaylines{
\text{Is the set of columns of } A \text{ a linear dependence or independence?} \\
\\
\text{Solution:} \\
C_{5}(CF(A)) = a_{15}C_{1}(CF(A)) + a_{25}C_{2}(CF(A)) + a_{35}C_{3}(CF(A)) + a_{45}C_{4}(CF(A)) \\
\implies \boxed{\text{Set of columns of $A$ is a linear dependence}}
}
$$
## 3c
$$
\displaylines{
\text{Find } dim(N(A)) \\
\\
\text{Solution:} \\
rank(A) + dim(N(A)) = 8 \implies \boxed{dim(N(A)) = 4} \\
}
$$
---

# 4
$$
\displaylines{
A \in \mathbb{R}^{m \times n} \\
m \neq n \\
\text{Prove: at least one of matrices } AA^{T}, A^{T}A \text{ is not invertible} \\
\\
\text{Proof:} \\
\text{Let } m < n \\
\implies rank(A) = dim(R(A)) \leq m < n \\
A^{T}A \in \mathbb{R}^{n \times n} \\
rank(A^{T}A) \leq rank(A) < n \implies rank(A^{T}A) \neq n \implies \boxed{\not\exists (A^{T}A)^{-1}} \\
\text{Let } m > n \\
\implies rank(A) = dim(C(A)) \leq n < m \\
AA^{T} \in \mathbb{R}^{m \times m} \\
rank(AA^{T}) \leq rank(A) < m \implies rank(AA^{T}) \neq m \implies \boxed{\not\exists (AA^{T})^{-1}} \\
}
$$
---

# 5
$$
\displaylines{
A \in \mathbb{R}^{n \times n} \\
\not\exists A^{-1} \\
B = \Set{ u_{1}, u_{2}, \dots, u_{n} } \text{ is a basis of } \mathbb{R}^{n} \\
\text{Prove: } \Set{ Au_{1}, Au_{2}, \dots, Au_{n} } \text{ is a linear dependence} \\
\\
\text{Proof:} \\
\text{Let } U = \begin{pmatrix}
u_{1} & u_{2} & \dots & u_{n} \\
\end{pmatrix} \in \mathbb{R}^{n \times n} \\
\text{Let } M = AU \\
\implies M = \begin{pmatrix}
Au_{1} & Au_{2} & \dots & Au_{n} \\ 
\end{pmatrix} \\
rank(M) = rank(AU) \leq rank(A) < n \\
\implies n > rank(M) = dim(C(M)) = dim(sp(\Set{ Au_{1}, Au_{2}, \dots, Au_{n} })) \\
\implies \boxed{\Set{ Au_{1}, Au_{2}, \dots, Au_{n} } \text{ is a linear dependence}} \\
}
$$
---

# 6a
$$
\displaylines{
A, B \in \mathbb{F}^{m \times n} \\
\text{Prove: } rank(A+B) \leq rank(A) + rank(B) \\
\\
\text{Proof:} \\
A+B = \begin{pmatrix}
C_{1}(A+B) & C_{2}(A+B) & \dots & C_{n}(A+B) \\
\end{pmatrix} \\
\text{Let } \forall i \in [1, n]: C^{A}_{i} = C_{i}(A), C^{B}_{i} = C_{i}(B) \\
\text{Note that } \forall i \in [1, n]: C_{i}(A+B) = C^{A}_{i}+C^{B}_{i} \\
\implies \Set{ C_{1}(A+B), \dots, C_{n}(A+B) } \subseteq sp(\Set{ C^{A}_{1}, C^{A}_{2}, \dots, C^{A}_{n}, C^{B}_{1}, C^{B}_{2}, \dots, C^{B}_{n} }) \\
C(A+B) = sp(\Set{ C_{1}(A+B), C_{2}(A+B), \dots, C_{n}(A+B) }) \\
\implies C(A+B) \subseteq sp(\Set{ C^{A}_{1}, C^{A}_{2}, \dots, C^{A}_{n}, C^{B}_{1}, C^{B}_{2}, \dots, C^{B}_{n} }) \\
\implies rank(A+B) = dim(C(A+B)) \leq dim(sp(\Set{ C^{A}_{1}, C^{A}_{2}, \dots, C^{A}_{n}, C^{B}_{1}, C^{B}_{2}, \dots, C^{B}_{n} })) \\
\\
\text{Let us now prove that} \\
dim(sp(\Set{ C^{A}_{1}, C^{A}_{2}, \dots, C^{A}_{n}, C^{B}_{1}, C^{B}_{2}, \dots, C^{B}_{n} })) \leq rank(A) + rank(B) \\
\text{Let } rank(A) = k \\
\implies \exists \Set{ C^{A}_{1}, \dots, C^{A}_{k} } \text{ that is a linear independence and} \\
\forall i \in [1, n]: C^{A}_{i} \in sp(\Set{ C^{A}_{1}, \dots, C^{A}_{k} }) \\
\text{Let } rank(B) = l \\
\implies \exists \Set{ C^{B}_{1}, \dots, C^{B}_{l} } \text{ that is a linear independence and} \\
\forall i \in [1, n]: C^{B}_{i} \in sp(\Set{ C^{B}_{1}, \dots, C^{B}_{l} }) \\ \left\{\begin{array}{}
\Set{ C^{A}_{1}, \dots, C^{A}_{n} } \subseteq sp(\Set{ C^{A}_{1}, \dots, C^{A}_{k} }) \\
\Set{ C^{B}_{1}, \dots, C^{B}_{n} } \subseteq sp(\Set{ C^{B}_{1}, \dots, C^{B}_{l} }) \\
\end{array}\right.
\implies \\
\implies \Set{ C^{A}_{1}, \dots, C^{A}_{n}, C^{B}_{1}, \dots, C^{B}_{n} } \subseteq sp(\Set{ C^{A}_{1}, \dots, C^{A}_{k}, C^{B}_{1}, \dots, C^{B}_{l} }) \\
\implies sp(\Set{ C^{A}_{1}, \dots, C^{A}_{n}, C^{B}_{1}, \dots, C^{B}_{n} }) \subseteq sp(\Set{ C^{A}_{1}, \dots, C^{A}_{k}, C^{B}_{1}, \dots, C^{B}_{l} }) \\
\implies dim(sp(\Set{ C^{A}_{1}, \dots, C^{A}_{n}, C^{B}_{1}, \dots, C^{B}_{n} })) \leq \underbrace{ dim(sp(\Set{ C^{A}_{1}, \dots, C^{A}_{k}, C^{A}_{1}, \dots, C^{B}_{l} })) }_{ \leq k+l=rank(A)+rank(B) } \\
\implies dim(sp(\Set{ C^{A}_{1}, \dots, C^{A}_{n}, C^{B}_{1}, \dots, C^{B}_{n} })) \leq rank(A) + rank(B) \\
\implies rank(A+B) \leq dim(sp(\Set{ C^{A}_{1}, \dots, C^{A}_{n}, C^{B}_{1}, \dots, C^{B}_{n} })) \leq rank(A) + rank(B) \\
\implies \boxed{rank(A+B) \leq rank(A)+rank(B)} \\
}
$$
# 6b
$$
\displaylines{
A, B \in \mathbb{F}^{m \times n} \\
\text{Prove: } dim(N(A+B)) \geq dim(N(A)) + dim(N(B)) - n \\
\\
\text{Proof:} \\
rank(A) + dim(N(A)) = n \\
rank(A+B) \leq rank(A) + rank(B) \implies n-rank(A+B) \geq n - rank(A) - rank(B) \\
n - rank(A+B) = dim(N(A+B)) \\
n - rank(A) - rank(B) = dim(N(A)) - rank(B) = dim(N(A)) + dim(N(B)) - n \\
\implies \boxed{dim(N(A+B)) \geq dim(N(A)) + dim(N(B)) - n} \\
}
$$
---

# 7
$$
\displaylines{
A \in \mathbb{F}^{m \times n} \\
rank(A) = k \\
\text{Prove: } A \text{ can be written as a sum of } k \text{ matrices of rank } 1 \\
\\
\text{Proof:} \\
\text{Let } CF_{i} = \begin{pmatrix}
0 \\
\vdots \\
0 \\
R_{i}(CF(A)) \\
0 \\
\vdots \\
0 \\
\end{pmatrix} \\
\forall i \in [1, m]: rank(CF_{i}) = 1 \\
rank(A) = k \implies CF(A) \text{ has exactly } k \text{ non-zero rows} \\
\implies CF(A) \text{ can be written as:} \\
CF(A) = \sum_{i=1}^{m} CF_{i} = \sum_{i=1}^{k} CF_{i} + \sum_{i=k+1}^{m} 0 \\
CF(A) = P_{1}P_{2}\dots P_{l}A, \text{ where } P_{i} \text{ is an elementary matrix} \\
\text{Elementary matrices are invertible} \\
\implies P_{l}^{-1}P_{l-1}^{-1}\dots P_{1}^{-1}CF(A) = A \\
\implies A = P_{l}^{-1}P_{l-1}^{-1}\dots P_{1}^{-1}\sum_{i=1}^{k} CF_{i} = \\
= P_{l}^{-1}P_{l-1}^{-1}\dots P_{1}^{-1}CF_{1} + P_{l}^{-1}P_{l-1}^{-1}\dots P_{1}^{-1}CF_{2} + \dots + P_{l}^{-1}P_{l-1}^{-1}\dots P_{1}^{-1}CF_{k} \\
\text{Multiplication by an elementary matrix does not affect rank} \\
\implies \forall i \in [1, k]: rank(P_{l}^{-1}P_{l-1}^{-1}\dots P_{1}^{-1}) = rank(CF_{i}) = 1 \\
\implies \boxed{A \text{ can be written as a sum of } k \text{ matrices of rank } 1} \\
}
$$
---
