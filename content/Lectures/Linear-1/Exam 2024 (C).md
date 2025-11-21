---
{"publish":true,"created":"17/02/25, 17:02","modified":"2025-11-21T21:10:14.270+02:00","tags":["Academia","Lecture","Linear-1"],"cssclasses":""}
---

# 1a
$$
\displaylines{
\text{Let } V \text{ be a vector space over } \mathbb{F} \\
\text{Let } S \subseteq V \\
1. \quad S \text{ is a linear dependence} \\
2. \quad \exists v \in S: v \in sp(S \setminus \Set{ v }) \\
3. \quad \exists v \in S: sp(S) = sp(S \setminus \Set{ v }) \\
1 \iff 2 \iff 3 \\
\\
\text{Proof:} \\
\text{Let } S = \Set{ v_{1}, v_{2}, \dots, v_{n} } \\
\text{Let } 1 \\
\implies \exists \alpha_{i} \neq 0: \sum_{i=1}^{n} \alpha_{i}v_{i} = 0 \\
\text{Let } \alpha_{1} \neq 0 \text{ (WLOG)} \implies v_{1} = \sum_{i=2}^{n} \left( \frac{-\alpha_{i}}{\alpha_{i-1}} \right)v_{i} \\
\forall i \in [2, n]: v_{i} \neq v_{1} \implies v_{1} \in sp(S \setminus \Set{ v_{1} }) \implies \boxed{ 1 \implies 2 } \\
\text{Let } 2 \\
\text{Let } v_{1} \in sp(S \setminus \Set{ v_{1} }) \text{ (WLOG)} \\
S \setminus \Set{ v_{1} } \subseteq S \implies sp(S \setminus \Set{ v_{1} }) \subseteq sp(S) \\
\text{Let } u \in sp(S) \\
u = \sum_{i=1}^{n} \alpha_{i}v_{i} = \alpha_{1}v_{1} + \sum_{i=2}^{n} \alpha_{i}v_{i} \\
v_{1} \in sp(S \setminus \Set{ v_{1} }) \implies v_{1} = \sum_{j=2}^{n} \beta_{j}v_{j} \\
\implies u = \alpha_{1}\sum_{j=2}^{n} \beta_{j}v_{j} + \sum_{i=2}^{n} \alpha_{i}v_{i} = \sum_{i=2}^{n} (\alpha_{1}\beta_{i}+\alpha_{i})v_{i} \implies u \in sp(S \setminus \Set{ v_{1} }) \\
\implies sp(S) \subseteq sp(S \setminus \Set{ v_{1} }) \implies sp(S) = sp(S \setminus \Set{ v_{1} }) \implies \boxed{ 2 \implies 3 } \\
\text{Let } 3 \\
\text{Let } sp(S \setminus \Set{ v_{1} }) = sp(S) \text{ (WLOG)} \\
v_{1} \in S \implies v_{1} \in sp(S) \implies v_{1} \in sp(S \setminus \Set{ v_{1} }) \\
\implies v_{1} = \sum_{i=2}^{n} \alpha_{i}v_{i} \implies v_{1} - \sum_{i=2}^{n} \alpha_{i}v_{i} = 0 \\
\implies \Set{ 1, -\alpha_{2}, -\alpha_{3}, \dots, -\alpha_{n} } \text{ is a non-trivial linear combination of } S \\
\implies S \text{ is a linear dependence} \implies \boxed{ 3 \implies 1 } \\
\implies [1 \implies 2 \implies 3 \implies 1] \implies \boxed{ 1 \iff 2 \iff 3 } \\
}
$$
# 1b
$$
\displaylines{
\text{Let } T: \mathbb{R}^{2} \to \mathbb{R}^{2} \\
T(\begin{pmatrix}
x \\
y \\
\end{pmatrix}) = \begin{pmatrix}
2x \\
x+y \\
\end{pmatrix} \\
\text{Let } B = \Set{ \begin{pmatrix}
1 \\
3 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
1 \\
\end{pmatrix} } \text{ basis of } \mathbb{R}^{2} \\
\text{Find } [T]^{B}_{B} \\
\\
\text{Solution:} \\
[T]^{B}_{B} = \begin{pmatrix}
[T\begin{pmatrix}
1 \\
3 \\
\end{pmatrix}]_{B} & [T\begin{pmatrix}
1 \\
1 \\
\end{pmatrix}]_{B} \\
\end{pmatrix} = \begin{pmatrix}
[\begin{pmatrix}
2 \\
4 \\
\end{pmatrix}]_{B} & [\begin{pmatrix}
2 \\
2 \\
\end{pmatrix}]_{B} \\
\end{pmatrix} = \begin{pmatrix}
1 & 0 \\
1 & 2 \\
\end{pmatrix} \\
}
$$
# 2
$$
\displaylines{
U = \Set{ p(x) \in \mathbb{R}_{2}[x] | \begin{array}{}
p'(1) = 0 \\
p(1) = 0 \\
\end{array} } \\
W = sp(\Set{ 1+x+x_{2}, x+x^{2} }) \\
\text{Find basis and dimension of } U + W, U \cap W \\
\\
\text{Solution:} \\
\text{Let } p(x) \in \mathbb{R}_{2}[x] \\
p(x) = a + bx + cx^{2} \implies p'(x) = b + 2cx \\
p'(1) = b + 2c \\
p(1) = a + b + c \\
\left\{\begin{array}{}
b + 2c = 0 \\
a + b + c = 0 \\
\end{array}\right. \implies \left\{\begin{array}{}
b = -2c \\
a = c \\
\end{array}\right. \\
\implies U = sp(\Set{ 1-2x+x^{2} }) \\
U + W = sp(U \cup W) = sp(\Set{ 1 + x + x^{2}, x+x^{2}, 1-2x+x^{2} }) \\
\left(\begin{array}{ccc|c}
1 & 0 & 1 & 0 \\
1 & 1 & -2 & 0 \\
1 & 1 & 1 & 0 \\
\end{array}\right) \to \left(\begin{array}{ccc|c}
1 & 0 & 1 & 0 \\
0 & 1 & -3 & 0 \\
0 & 1 & 0 & 0 \\
\end{array}\right) \to \left(\begin{array}{ccc|c}
1 & 0 & 1 & 0 \\
0 & 1 & -3 & 0 \\
0 & 0 & 3 & 0 \\
\end{array}\right) \\
\implies \boxed{ \Set{ 1+x+x^{2}, x+x^{2},1-2x+x^{2} } } \text{ is a linear independence and is a basis of } U + W \\
\implies \boxed{ dim(U+W) = 3 } \\
\underbrace{ dim(U+W) }_{ 3 } = \underbrace{ dim(U) }_{ 1 } + \underbrace{ dim(W) }_{ 2 } - dim(U \cap W) \\
\implies \boxed{ dim(U \cap W) = 0 } \implies \boxed{ \Set{ 0 } \text{ is a basis of } U \cap W } \\
}
$$
# 3a
$$
\displaylines{
\text{Let } V \text{ be a vector space, } dim(V) = n \\
\text{Let } T, S: V \to V \text{ linear transformations such that} \\
TS = T \\
\text{Prove: } dim(Im(T)) + dim(Im(S - I)) \leq n \\
\\
\text{Proof:} \\
TS = T \implies TS - T = 0 \\
\forall v \in V: T(S(v)) - T(v) = T(S(v) - v) = T(S(v) - I(v)) = T(S-I)(v) = 0 \\
\implies \forall u \in Im(S-I): T(u) = 0 \implies Im(S-I) \subseteq ker(T) \\
\implies dim(Im(S-I)) \leq dim(ker(T)) \implies dim(Im(S-I)) \leq n - dim(Im(T)) \\
\implies \boxed{ dim(Im(T)) + dim(Im(S-I)) \leq n } \\
}
$$
# 3b
$$
\displaylines{
\text{Find } T, S: \mathbb{R}^{2} \to \mathbb{R}^{2}: T \neq 0, S \neq I, TS = T \\
\\
\text{Solution:} \\
T(S(v)) = T(v) \\
\text{Let } S\begin{pmatrix}
x \\
y \\
\end{pmatrix} = \begin{pmatrix}
x \\
0 \\
\end{pmatrix} \\
T(\begin{pmatrix}
x \\
y \\
\end{pmatrix}) = TS\begin{pmatrix}
x \\
y \\
\end{pmatrix} = T\begin{pmatrix}
x \\
0 \\
\end{pmatrix} \implies T\begin{pmatrix}
x-x \\
y-0 \\
\end{pmatrix} = T\begin{pmatrix}
0 \\
y \\
\end{pmatrix} = \begin{pmatrix}
0 \\
0 \\
\end{pmatrix} \\
\text{Let } T\begin{pmatrix}
x \\
y \\
\end{pmatrix} = \begin{pmatrix}
x \\
0 \\
\end{pmatrix} \\
\boxed{ TS = T } \\
}
$$
# 4a
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times m}, B \in \mathbb{R}^{n \times k} \text{ such that} \\
\exists! C: A = BC \\
\text{Prove or disprove: } rank(B) = k \\
\\
\text{Proof:} \\
\text{Let } S = \Set{ C_{1}(B), C_{2}(B), \dots, C(k)(B) } \text{ be a linear dependence} \\
\implies \exists i \in [1, k]: C_{i}(B) \in sp(S \setminus \Set{ C_{i}(B) }) \\
\text{Let } C_{1}(B) \in sp(S \setminus \Set{ C_{1}(B) }) \quad \quad \text{(WLOG)} \\
\implies \exists \Set{ \beta_{j} }_{j \in [2, k]} \subseteq \mathbb{R}: C_{1}(B) = \sum_{j=2}^{k} \beta_{j}C_{j}(B) \\
A = BC \implies \forall i \in [1, m]: C_{i}(A) = C_{i}(BC) = BC_{i}(C) \\
C_{1}(A) = C_{1}(BC) = BC_{1}(C) = \sum_{i=1}^{k} C_{1i}C_{i}(B) = C_{11}C_{1}(B) + \sum_{i=2}^{k} C_{1i}C_{i}(B) = \\
= C_{11}\sum_{j=2}^{k} \beta_{j}C_{j}(B) + \sum_{i=2}^{k} C_{1i}C_{i}(B) = \sum_{i=2}^{k} (C_{11}\beta_{i} + C_{1i})C_{i}(B) \\
\text{Let } v = \begin{pmatrix}
C_{11} - 1 \\
C_{12} + \beta_{2} \\
\vdots \\
C_{1k} + \beta_{k} \\
\end{pmatrix} \\
\text{Let } \hat{C} = \begin{pmatrix}
\overset{ | }{ \underset{ | }{ v } } & \overset{ | }{ \underset{ | }{ C_{2}(C) } } & \dots & \overset{ | }{ \underset{ | }{ C_{m}(C) } } \\
\end{pmatrix} \\
C_{1}(B\hat{C}) = BC_{1}(\hat{C}) = \dots = \sum_{i=2}^{k} (C_{11}\beta_{i} - \beta_{i} + C_{1i} + \beta_{i})C_{i}(B) = \\
= \sum_{i=2}^{k} (C_{11}\beta_{i} + C_{1i})C_{i}(B) = C_{1}(A) \\
\forall i \in [2, m]: C_{i}(B\hat{C}) = BC_{i}(\hat{C}) = BC_{i}(C) = C_{i}(A) \\
\implies A = B\hat{C} \land \hat{C} \neq C - \text{Contradiction!} \\
\implies S \text{ is a linear independence} \implies dim(C(B)) = k \\
\implies \boxed{ rank(B) = k } \\
}
$$
$$
\displaylines{
\text{Alternative proof (might be wrong):} \\
C_{i}(A) = C_{i}(BC) = BC_{i}(C) \\
\exists! C \implies C_{i}(C) \text{ is a unique solution of } Bx = C_{i}(A) \\
\text{Let } k > n \\
\implies CF(B) \text{ has } k - n \text{ free variables} \\
\implies Bx = C_{i}(A) \text{ has more than one solution} \\
\implies k \leq n \\
\text{Let } rank(B) < k \\
\implies dim(R(B)) < k \implies dim(R(B)) < n \implies \exists i \in [1, n]: R_{i}(CF(B)) = 0 \\
\implies Bx = 0 \text{ has infinitely many solutions} \\
\implies Bx = C_{i}(A) \text{ has zero or infinitely many solutions} - \text{Contradiction!} \\
\implies \boxed{ rank(B) = k } \\
}
$$
# 4b
$$
\displaylines{
\text{Let } T, S: V \to V \text{ be linear transformations} \\
\text{Prove or disprove: } Im(T) \oplus Im(S) = V \implies T+S \text{ is injective} \\
\\
\text{Disproof:} \\
\text{Let } V = \mathbb{R}^{2} \\
\text{Let } T\begin{pmatrix}
x \\
y \\
\end{pmatrix} = \begin{pmatrix}
x \\
0 \\
\end{pmatrix} \\
\text{Let } S\begin{pmatrix}
x \\
y \\
\end{pmatrix} = \begin{pmatrix}
0 \\
x \\
\end{pmatrix} \\
Im(T) = sp\Set{ \begin{pmatrix}
1 \\
0 \\
\end{pmatrix} } \\
Im(S) = sp\Set{ \begin{pmatrix}
0 \\
1 \\
\end{pmatrix} } \\
Im(T) \cap Im(S) = \Set{ 0 }, \boxed{ Im(T) \oplus Im(S) = \mathbb{R}^{2} } \\
Im(T+S) = sp\Set{ \begin{pmatrix}
1 \\
1 \\
\end{pmatrix} } \neq \mathbb{R}^{2} \implies T+S \text{ is not surjective} \\
dim(V) = dim(V) \implies \boxed{ T+S \text{ is not injective} } \\
}
$$
# 4c
$$
\displaylines{
\text{Let } T, S: V \to V \text{ be linear transformations} \\
\text{Prove or disprove: } T+S \text{ is injective} \implies Im(T) + Im(S) = V \\
\\
\text{Proof:} \\
\text{Let } T+S \text{ be injective} \\
\forall v \in V: (T+S)(v) = T(v) + S(v) \in Im(T) + Im(S) \implies Im(T+S) \subseteq Im(T) + Im(S) \\
dim(V) = dim(V) \implies T+S \text{ is surjective} \implies Im(T+S) = V \\
V = Im(T+S) \subseteq Im(T) + Im(S) \subseteq V \implies \boxed{ Im(T) + Im(S) = V } \\
}
$$
# 5a
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \\
E_{ij} = \begin{cases}
1 & i,j \\
0 & \text{otherwise} \\
\end{cases} \\
}
$$
## 5a.i
$$
\displaylines{
\forall 1 \leq k \leq n: \text{define } C_{k}(AE_{ij}) \text{ via } A, i, j \\
\\
\text{Solution:} \\
\text{Let } 1 \leq k \leq n \\
\text{Let } k \neq j \\
\implies C_{k}(AE_{ij}) = AC_{k}(E_{ij}) = A \cdot 0 = 0 \\
\text{Let } k = j \\
\implies C_{k}(AE_{ij}) = C_{j}(AE_{ij}) = AC_{j}(E_{ij}) = Ae_{i} = C_{i}(A) \\
\implies \boxed{ C_{k}(AE_{ij}) = \begin{cases}
C_{i}(A) & k = j \\
0 & \text{otherwise} \\
\end{cases} } \\
}
$$
## 5a.ii
$$
\displaylines{
\displaylines{
\forall 1 \leq k \leq n: \text{define } R_{k}(E_{ij}A) \text{ via } A, i, j \\
\\
\text{Solution:} \\
\text{Let } 1 \leq k \leq n \\
\text{Let } k \neq i \\
\implies R_{k}(E_{ij}A) = R_{k}(E_{ij})A = 0 \cdot A = 0 \\
\text{Let } k = i \\
\implies R_{k}(E_{ij}A) = R_{i}(E_{ij}A) = R_{i}(E_{ij})A = e_{j}^{T}A = R_{j}(A) \\
\implies \boxed{ R_{k}(E_{ij}A) = \begin{cases}
R_{j}(A) & k = i \\
0 & \text{otherwise} \\
\end{cases} } \\
}
}
$$
# 5b
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n}: \forall B \in \mathbb{R}^{n \times n}: AB = BA \\
\text{Prove: } A \text{ is diagonal} \\
\\
\text{Proof:} \\
\forall i \in [1, n]: E_{ii}A = \begin{pmatrix}
0 \\
\vdots \\
0 \\
R_{i}(A) \\
0 \\
\vdots \\
0 \\
\end{pmatrix} = AE_{ii} = \begin{pmatrix}
\overset{ | }{ \underset{ | }{ 0 } } & \dots & \overset{ | }{ \underset{ | }{ 0 } } & \overset{ | }{ \underset{ | }{ C_{i}(A) } } & \overset{ | }{ \underset{ | }{ 0 } } & \dots & \overset{ | }{ \underset{ | }{ 0 } } \\
\end{pmatrix} \\
\text{For example:} \\
E_{11}A = \begin{pmatrix}
A_{11} & A_{12} & A_{13} \\
0 & 0 & 0 \\
0 & 0 & 0 \\
\end{pmatrix} = AE_{11} = \begin{pmatrix}
A_{11} & 0 & 0 \\
A_{21} & 0 & 0 \\
A_{31} & 0 & 0 \\
\end{pmatrix} \implies \left\{\begin{array}{}
A_{12} = 0 \\
A_{13} = 0 \\
A_{21} = 0 \\
A_{31} = 0 \\
\end{array}\right. \\
\implies \forall i \in [1, n]: \forall j \in [1, n]: [i \neq j \implies A_{ij} = 0] \implies \boxed{ A \text{ is diagonal} } \\
}
$$
# 5c
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n}: \forall B \in \mathbb{R}^{n \times n}: AB = BA \\
\text{Prove: } A \text{ is scalar } (\exists \alpha \in \mathbb{R}: A = \alpha I) \\
\\
\text{Proof:} \\
\forall i \in [2, n]: E_{1i}A = \begin{pmatrix}
R_{i}(A) \\
0 \\
\vdots \\
0 \\
\end{pmatrix} = AE_{1i} = \begin{pmatrix}
\overset{ | }{ \underset{ | }{ 0 } } & \dots & \overset{ | }{ \underset{ | }{ 0 } } & \overset{ | }{ \underset{ | }{ C_{1}(A) } } & \overset{ | }{ \underset{ | }{ 0 } } & \dots & \overset{ | }{ \underset{ | }{ 0 } } \\
\end{pmatrix} \\
\text{For example:} \\
E_{12}A = \begin{pmatrix}
A_{21} & A_{22} & A_{23} \\
0 & 0 & 0 \\
0 & 0 & 0 \\
\end{pmatrix} = AE_{12} = \begin{pmatrix}
0 & A_{11} & 0 \\
0 & A_{12} & 0 \\
0 & A_{13} & 0 \\
\end{pmatrix} \implies A_{22} = A_{11} \\
\implies \forall i \in [1, n]: A_{ii} = A_{11} \implies \boxed{ A_{11} \in \mathbb{R}, A = A_{11}I } \\
}
$$
# 5d
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \\
\text{Prove: } [\forall B \in \mathbb{R}^{n \times n}: AB = BA] \iff \exists \alpha \in \mathbb{R}: A = \alpha I \\
\\
\text{Proof:} \\
\text{One direction is proved in 5c} \\
\text{Let } \exists \alpha \in \mathbb{R}: A = \alpha I \\
\text{Let } B \in \mathbb{R}^{n \times n} \\
AB = \alpha IB = \alpha(IB) = \alpha B = (BI)\alpha = B\alpha I = BA \\
\implies \boxed{ \forall B \in \mathbb{R}^{n \times n}: AB = BA } \\
}
$$
---
