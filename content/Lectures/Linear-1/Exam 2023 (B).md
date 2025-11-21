---
{"publish":true,"created":"18/02/25, 18:02","modified":"2025-11-21T21:10:14.255+02:00","tags":["Academia","Lecture","Linear-1"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Dimension theorem:} \\
\text{Let } V \text{ be a finitey generated vector space over } \mathbb{F} \\
\text{Let } U, W \subseteq V \text{ be vector subspaces of } V \\
dim(U + W) = dim(U) + dim(W) - dim(U \cap W) \\
\\
\text{Proof:} \\
\text{Let } B = \Set{ v_{1}, v_{2}, \dots, v_{n} } \text{ be a basis of } U \cap W \\
\text{Let } B_{U} = B \cup \Set{ u_{1}, u_{2}, \dots, u_{k} } \text{ be a basis of } U \\
\text{Let } B_{W} = B \cup \Set{ w_{1}, w_{2}, \dots, w_{t} } \text{ be a basis of } W \\
\text{Let } \hat{B} = B_{U} \cup B_{W} \\
U + W = sp(B_{U} \cup B_{W}) = sp(\hat{B}) \\
\text{Let } \sum_{i=1}^{n} \alpha_{i}v_{i} + \sum_{i=1}^{k} \beta_{i}u_{i} + \sum_{i=1}^{t} \gamma_{i}w_{i} = 0 \\
\implies \sum_{i=1}^{n} \alpha_{i}v_{i} + \sum_{i=1}^{k} \beta_{i}u_{i} = -\sum_{i=1}^{t} \gamma_{i}w_{i} \\
\implies -\sum_{i=1}^{t} \gamma_{i}w_{i} \in sp(B_{U}) = U \\
-\sum_{i=1}^{t} \gamma_{i}w_{i} \in sp(B_{W}) = W \implies -\sum_{i=1}^{t} \gamma_{i}w_{i} \in U \cap W \\
\implies -\sum_{i=1}^{t} \gamma_{i}w_{i} = \sum_{i=1}^{n} \delta_{i}v_{i} \implies \underbrace{ \sum_{i=1}^{n} \delta_{i}v_{i} + \sum_{i=1}^{t} \gamma_{i}w_{i} }_{ \in sp(B_{W}) } = 0 \\
\implies \delta_{1} = \delta_{2} = \dots = \delta_{n} = \gamma_{1} = \gamma_{2} = \dots = \gamma_{t} = 0 \\
\implies \underbrace{ \sum_{i=1}^{n} \alpha_{i}v_{i} + \sum_{i=1}^{k} \beta_{i}u_{i} }_{ \in sp(B_{U}) } = 0 \\
\implies \alpha_{1} = \alpha_{2} = \dots = \alpha_{n} = \beta_{1} = \beta_{2} = \dots = \beta_{k} = 0 \\
\implies \hat{B} \text{ is a linear independence and a basis of } U + W \\
\implies dim(U+W) = \lvert \hat{B} \rvert = \lvert B_{U} \cup B_{W} \rvert = \lvert B_{U} \rvert + \lvert B_{W} \rvert - \underbrace{ \lvert B_{U} \cap B_{W} \rvert }_{ B } \\
\implies \boxed{ dim(U + W) = dim(U) + dim(W) - dim(U \cap W) } \\
}
$$
# 2a
$$
\displaylines{
\begin{pmatrix}
a \\
a \\
2a \\
\end{pmatrix}, \begin{pmatrix}
0 \\
a+1 \\
a+1 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
1 \\
2 \\
\end{pmatrix}, \begin{pmatrix}
a \\
a \\
a^{2}+2a+1 \\
\end{pmatrix} \\
\text{Find all values of } a \text{ such that } v_{4} \in sp(\Set{ v_{1}, v_{2}, v_{3} }) \\
\\
\left(\begin{array}{ccc|c}
a & 0 & 1 & a \\
a & a+1 & 1 & a \\
2a & a+1 & 2 & a^{2}+2a+1 \\
\end{array}\right) \to \left(\begin{array}{ccc|c}
a & 0 & 1 & a \\
0 & a+1 & 0 & 0 \\
0 & a+1 & 0 & a^{2}+1 \\
\end{array}\right) \\
\to \left(\begin{array}{ccc|c}
a & 0 & 1 & a \\
0 & a+1 & 0 & 0 \\
0 & 0 & 0 & a^{2}+1 \\
\end{array}\right) \\
a^{2} + 1 > 0 \implies \text{There are no solutions} \implies \boxed{ \forall a \in \mathbb{R}: v_{4} \not\in sp(\Set{ v_{1}, v_{2}, v_{3} }) } \\
\\
\\
\text{For all values of } a \text{ find dimension of } sp(\Set{ v_{1}, v_{2}, v_{3}, v_{4} }) \\
\\
v_{4} \not\in sp(\Set{ v_{1}, v_{2}, v_{3} }) \\
\text{Is } \Set{ v_{1}, v_{2}, v_{3} } \text{ linear independence?} \\
\begin{pmatrix}
a & 0 & 1 \\
a & a+1 & 1 \\
2a & a+1 & 2 \\
\end{pmatrix} \to \dots \to \begin{pmatrix}
a & 0 & 1 \\
0 & a+1 & 0 \\
0 & 0 & 0 \\
\end{pmatrix} \\
\text{Let } a = 0 \\
\begin{pmatrix}
0 & 0 & 1 \\
0 & 1 & 0 \\
0 & 0 & 0 \\
\end{pmatrix} \implies sp(\Set{ v_{1}, v_{2}, v_{3} }) = sp(\Set{ v_{2}, v_{3} }) \implies \boxed{ dim(sp(\Set{ v_{1}, v_{2}, v_{3}, v_{4} })) = 3 } \\
\text{Let } a = -1 \\
\begin{pmatrix}
-1 & 0 & 1 \\
0 & 0 & 0 \\
0 & 0 & 0 \\
\end{pmatrix} \implies sp(\Set{ v_{1}, v_{2}, v_{3} }) = sp(\Set{ v_{1} }) \implies \boxed{ dim(sp(\Set{ v_{1}, v_{2}, v_{3}, v_{4} })) = 2 } \\
\text{Let } a \neq 0, a \neq -1 \\
\left\{\begin{array}{}
a \neq 0 \\
a+1 \neq 0 \\
\end{array}\right. \implies \begin{pmatrix}
a & 0 & 1 \\
0 & a+1 & 0 \\
0 & 0 & 0 \\
\end{pmatrix} \implies sp(\Set{ v_{1}, v_{2}, v_{3} }) = sp(\Set{ v_{1}, v_{2} }) \\
\implies \boxed{ dim(sp(\Set{ v_{1}, v_{2}, v_{3}, v_{4} })) = 3 } \\
}
$$
# 2b
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Let } B \neq 0 \in \mathbb{F}^{n \times n} \text{ symmetric such that } AB = BA = 0 \\
\text{Prove: } dim(N(A) \cap N(A^{T})) \neq 0 \\
\\
\text{Proof:} \\
AB = 0 \implies C(B) \subseteq N(A) \\
BA = 0 \implies (BA)^{T} = A^{T}B^{T} = A^{T}B = 0 \implies C(B) \subseteq N(A^{T}) \\
\implies C(B) \subseteq N(A) \cap N(A^{T}) \\
B \neq 0 \text{ is symmetric} \implies \exists i \in [1, n]: C_{i}(B) \neq 0 \implies C(B) \neq \Set{ 0 } \\
\Set{ 0 } \subset C(B) \subseteq N(A) \cap N(A^{T}) \implies \boxed{ N(A) \cap N(A^{T}) \neq \Set{ 0 } } \\
\\
\text{Alternative proof:} \\
B \neq 0 \implies \exists v \neq 0 \in \mathbb{F}^{n}: Bv \neq 0 \\
\underbrace{ AB }_{ 0 }v = 0 \implies Bv \in N(A) \\
BA = 0 \implies (BA)^{T} = A^{T}B^{T} = A^{T}B = 0 \\
\implies \underbrace{ A^{T}B }_{ 0 }v = 0 \implies Bv \in N(A^{T}) \\
\implies Bv \in N(A) \cap N(A^{T}) \implies N(A) \cap N(A^{T}) \neq \Set{ 0 } \\
}
$$
# 3a
$$
\displaylines{
B = \Set{ 1, x+x^{2}, x^{3}, -x+x^{2} } \text{ basis of } \mathbb{R}_{3}[x] \\
C = \Set{ \begin{pmatrix}
1 & 0 \\
0 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 1 \\
0 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 0 \\
1 & 0 \\
\end{pmatrix}, \begin{pmatrix}
1 & 0 \\
0 & 1 \\
\end{pmatrix} } \text{ basis of } \mathbb{R}^{2 \times 2} \\
T: \mathbb{R}_{3}[x] \to \mathbb{R}^{2 \times 2} \\
[T]^{B}_{C} = \begin{pmatrix}
0 & 0 & 0 & 0 \\
0 & 0 & 0 & -2 \\
0 & 0 & 0 & 2 \\
0 & 0 & 0 & 0 \\
\end{pmatrix} \\
\text{Find } T \\
\\
[T(1)]_{C} = 0 \implies T(1) = 0 \\
[T(x+x^{2})]_{C} = 0 \implies T(x + x^{2}) = 0 \\
[T(x^{3})]_{C} = 0 \implies T(x^{3}) = 0 \\
[T(-x+x^{2})]_{C} = \begin{pmatrix}
0 \\
-2 \\
2 \\
0 \\
\end{pmatrix} \implies T(-x+x^{2}) = \begin{pmatrix}
0 & -2 \\
2 & 0 \\
\end{pmatrix} \\
T(x+x^{2}) + T(-x+x^{2}) = T(2x^{2}) = 2T(x^{2}) = \begin{pmatrix}
0 & -2 \\
2 & 0 \\
\end{pmatrix} \implies T(x^{2}) = \begin{pmatrix}
0 & -1 \\
1 & 0 \\
\end{pmatrix} \\
T(x+x^{2})-T(-x+x^{2}) = T(2x) = 2T(x) = \begin{pmatrix}
0 & 2 \\
-2 & 0 \\
\end{pmatrix} \implies T(x) = \begin{pmatrix}
0 & 1 \\
-1 & 0 \\
\end{pmatrix} \\
\implies \boxed{ T(a+bx+cx^{2}+dx^{3}) = 0 + bT(x) + cT(x^{2}) + 0 = \begin{pmatrix}
0 & b-c \\
c-b & 0 \\
\end{pmatrix} } \\
}
$$
# 3b
$$
\displaylines{
\text{Let } V \text{ be a finitely generated vector space, } dim(V) = n \\
\text{Let } T: V \to V, T \neq 0 \\
\text{Prove: } \exists B = \Set{ v_{1}, v_{2}, \dots, v_{n} } \text{ basis of } B: \forall i \in [1, n]: T(v_{i}) \neq 0 \\
\\
\text{Proof:} \\
T \neq 0 \implies \exists v_{1} \in V: T(v_{1}) \neq 0 \\
\text{Let } B = \Set{ v_{1}, v_{2}, \dots, v_{n} } \text{ be a basis of } V \\
\text{Let } \hat{B} = \Set{ u_{1}, u_{2}, \dots, u_{n} } : \forall i \in [1, n]: u_{i} = \begin{cases}
v_{i} & T(v_{i}) \neq 0 \\
v_{i} + v_{1} & T(v_{i}) = 0 \\
\end{cases} \\
\forall i \in [1, n]: T(v_{i}) = 0 \implies T(u_{i}) = T(v_{i}+v_{1}) = T(v_{i}) + T(v_{1}) = T(v_{1}) \neq 0 \\
\text{Let } k \in [1, n-1]: \forall i \in [1, k]: T(v_{i}) \neq 0 \text{ (WLOG)} \\
\text{Let } \sum_{i=1}^{n} \alpha_{i}u_{i} = 0 \\
\sum_{i=1}^{n} \alpha_{i}u_{i} = \sum_{i=1}^{k} \alpha_{i}v_{1} + \sum_{i=1}^{n} \alpha_{i}v_{i} = \underbrace{ \left( 2\alpha_{1}+\sum_{i=2}^{k} \alpha_{i} \right)v_{1} + \sum_{i=2}^{n} \alpha_{i}v_{i} }_{ \in sp(B) } = 0 \\
\implies \alpha_{2} = \alpha_{3} = \dots = \alpha_{n} = 0 \implies \alpha_{1} = 0 \\
\implies \hat{B} \text{ is a linear independence and a basis of } V \\
\boxed{ \forall u \in \hat{B}: T(u) \neq 0 } \\
}
$$
# 4a
$$
\displaylines{
\text{Let } A, B \in \mathbb{R}^{n \times n} \\
\text{Prove or disprove: } N(A) \cap C(B) = \Set{ 0 } \implies N(B) = N(AB) \\
\\
\text{Proof:} \\
\forall v \in \mathbb{R}^{n}: Bv \in C(B) \\
N(A) \cap C(B) = \Set{ 0 } \implies \forall v \neq 0 \in \mathbb{R}^{n}: ABv \neq 0 \implies N(AB) = \Set{ 0 } \\
Bv = 0 \implies ABv = 0 \implies N(B) \subseteq N(AB) \implies N(B) = \Set{ 0 } \\
\implies \boxed{ N(B) = N(AB) } \\
}
$$
# 4b
$$
\displaylines{
\text{Let } A \in \mathbb{C}^{n \times n} \\
\text{Prove or disprove: } AA^{T} = 0 \implies A = 0 \\
\\
\text{Disproof:} \\
A = \begin{pmatrix}
1+i & -1+i \\
0 & 0 \\
\end{pmatrix} \neq 0 \\
AA^{T} = \begin{pmatrix}
1+i & -1+i \\
0 & 0 \\
\end{pmatrix}\begin{pmatrix}
1+i & 0 \\
-1+i & 0 \\
\end{pmatrix} = \begin{pmatrix}
0 & 0 \\
0 & 0 \\
\end{pmatrix} = 0 \\
}
$$
# 4c
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times n} \\
\text{Prove or disprove: } AA^{T} = 0 \implies A = 0 \\
\\
\text{Proof:} \\
AA^{T} = 0 \implies \forall i \in [1, n]: (AA^{T})_{ii} = 0 \\
\implies \forall i \in [1, n]: (AA^{T})_{ii} = \sum_{k=1}^{n} A_{ik}A^{T}_{ki} = \sum_{k=1}^{n} A_{ik}^{2} = 0 \\
\implies \forall i \in [1, n]: \forall k \in [1, n]: A_{ik} = 0 \implies \boxed{ A = 0 } \\
}
$$
# 5a
$$
\displaylines{
\text{Let } T: \mathbb{R}^{3} \to \mathbb{R}^{3}, T\begin{pmatrix}
x \\
y \\
z \\
\end{pmatrix} = \begin{pmatrix}
y+z \\
z \\
0 \\
\end{pmatrix} \\
\text{Prove: } T \text{ is nilpotent} \\
\\
\text{Proof:} \\
T(\begin{pmatrix}
x \\
y \\
z \\
\end{pmatrix}) = 0 \\
T^{2}\begin{pmatrix}
x \\
y \\
z \\
\end{pmatrix} = T\begin{pmatrix}
y+z \\
z \\
0 \\
\end{pmatrix} = \begin{pmatrix}
z \\
0 \\
0 \\
\end{pmatrix} \\
T^{3}\begin{pmatrix}
x \\
y \\
z \\
\end{pmatrix} = T(T^{2}\begin{pmatrix}
x \\
y \\
z \\
\end{pmatrix}) = T\begin{pmatrix}
z \\
0 \\
0 \\
\end{pmatrix} = \begin{pmatrix}
0 \\
0 \\
0 \\
\end{pmatrix} \\
\implies \boxed{ T^{3} = 0 } \\
}
$$
# 5b
$$
\displaylines{
\text{Let } V \text{ be a vector space over } \mathbb{F}, dim(V) = n \\
\text{Let } T: V \to V \text{ be a nilpotent linear transformation} \\
\text{Let } \alpha \neq 0 \in \mathbb{F} \\
\text{Let } S = T - \alpha I \\
\text{Prove: } S \text{ is invertible} \\
\\
\text{Proof:} \\
\text{Let } v \in ker(S) \\
S(v) = 0 \implies (T-\alpha I)(v) = 0 \implies T(v) = \alpha v \\
\text{Let } k \in \mathbb{N} \cup \Set{ 0 }: T^{k} = 0 \\
T^{k}(v) = \alpha^{k}v = 0 \\
\alpha \neq 0 \implies \alpha^{k} \neq 0 \implies v = 0 \implies ker(S) = \Set{ 0 } \implies S \text{ is surjective} \\
S = (T-\alpha I): V \to V \implies S \text{ is injective} \\
\implies S \text{ is bijective} \implies \boxed{ S \text{ is invertible} } \\
}
$$
# 5c
$$
\displaylines{
T: \mathbb{R}^{3} \to \mathbb{R}^{3} \\
T^{2} \neq 0, T^{3} = 0 \\
T^{2} \neq 0 \implies \exists v_{3} \in V: T^{2}(v_{3}) \neq 0 \\
T^{2}(v_{3}) \neq 0 \implies T(v_{3}) \neq 0 \implies v_{3} \neq 0 \\
\text{Let } v_{1} = T^{2}(v_{3}) \neq 0 \\
\text{Let } v_{2} = T(v_{3}) \neq 0 \\
\text{Let } \alpha v_{1} + \beta v_{2} + \gamma v_{3} = 0 \\
\implies T(\alpha v_{1} + \beta v_{2} + \gamma v_{3}) = \alpha T(v_{1}) + \beta T(v_{2}) + \gamma T(v_{3}) = 0 \\
\implies \alpha T^{3}(v_{3}) + \beta T^{2}(v_{3}) + \gamma T(v_{3}) = 0 \\
\implies \beta T^{2}(v_{3}) + \gamma T(v_{3}) = 0 \implies T(\beta T^{2}(v_{3}) + \gamma T(v_{3})) = 0 \\
\implies \beta T^{3}(v_{3}) + \gamma T^{2}(v_{3}) = 0 \implies \gamma T^{2}(v_{3}) = 0 \implies \boxed{ \gamma = 0 } \\
\implies \beta T^{2}(v_{3}) = 0 \implies \boxed{ \beta = 0 } \\
\implies \alpha v_{1} = 0 \implies \boxed{ \alpha = 0 } \\
\implies B = \Set{ v_{1}, v_{2}, v_{3} } \text{ is a linear independence} \\
\implies \boxed{ B \text{ is a basis of } \mathbb{R}^{3} } \\
[T]^{B}_{B} = \begin{pmatrix}
\overset{ | }{ \underset{ | }{ [T(v_{1})]_{B} } } & \overset{ | }{ \underset{ | }{ [T(v_{2})]_{B} } } & \overset{ | }{ \underset{ | }{ [T(v_{3})]_{B} } } \\
\end{pmatrix} = \begin{pmatrix}
\overset{ | }{ \underset{ | }{ [T^{3}(v_{3})]_{B} } } & \overset{ | }{ \underset{ | }{ [T^{2}(v_{3})]_{B} } } & \overset{ | }{ \underset{ | }{ [T(v_{3})]_{B} } }
\end{pmatrix} = \\
= \begin{pmatrix}
\overset{ | }{ \underset{ | }{ [0]_{B} } } & \overset{ | }{ \underset{ | }{ [v_{1}]_{B} } } & \overset{ | }{ \underset{ | }{ [v_{2}]_{B} } } \\
\end{pmatrix} = \begin{pmatrix}
0 & 1 & 0 \\
0 & 0 & 1 \\
0 & 0 & 0 \\
\end{pmatrix} \\
}
$$
