---
{"publish":true,"created":"16/02/25, 23:02","modified":"2025-11-21T21:10:14.319+02:00","tags":["Academia","Lecture","Linear-1"],"cssclasses":""}
---

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
\implies B \text{ is a basis of } \mathbb{R}^{3} \\
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
---
$$
\displaylines{
A \in \mathbb{C}^{2 \times 2} \\
AA^{T} = 0 \overset{ ? }{ \implies } A = 0 \\
A = \begin{pmatrix}
a+bi & c+di \\
e+fi & g+hi \\
\end{pmatrix} \\
\implies AA^{T} = \begin{pmatrix}
(a+bi)^{2} + (c+di)^{2} & (a+bi)(e+fi)+(c+di)(g+hi) \\
(a+bi)(e+fi)+(c+di)(g+hi) & (e+fi)^{2} + (g+hi)^{2} \\
\end{pmatrix} \\
(a+bi)^{2} = (a+bi)(a+bi) = a^{2} + 2abi - b^{2} \\
\implies \left\{\begin{array}{}
a^{2} + 2abi - b^{2} + c^{2} + 2cdi - d^{2} = 0 \\
ae + (af+be)i -bf = 0 \\
e^{2} + 2efi - f^{2} + g^{2} + 2ghi - h^{2} = 0 \\
\end{array}\right. \implies \left\{\begin{array}{}
a^{2} + c^{2} - b^{2} - d^{2} = 0 \\
ab + cd = 0 \\
ae - bf = 0 \\
af + be = 0 \\
e^{2} + g^{2} - f^{2} - h^{2} = 0 \\
ef+gh = 0 \\
\end{array}\right. \\
\text{Let } A = \begin{pmatrix}
1+i & -1+i \\
0 & 0 \\
\end{pmatrix} \\
\implies AA^{T} = 0, A \neq 0 \\
}
$$
---
$$
\displaylines{
\text{Let } V \text{ be a finitely generated vector space} \\
\text{Let } T: V \to V \text{ be a linear transformation such that} \\
\forall \text{ linear transformations } S: V \to V: ST = TS \\
\text{Prove: } \forall B = \Set{ v_{1}, v_{2}, \dots, v_{n} } \text{ bases of } V : \forall i \in [1, n]: \Set{ T(v_{i}), v_{i} } \text{ is a linear dependence} \\
\\
\text{Proof:} \\
\text{Let } B = \Set{ v_{1}, v_{2}, \dots, v_{n} } \text{ be a basis of } V \\
\text{Let by contradiction } \exists i \in [1, n]: \Set{ T(v_{i}), v_{i} } \text{ is a linear independence} \\
\implies \exists \hat{B} = \Set{ v_{i}, T(v_{i}), u_{3}, u_{4}, \dots, u_{n} } \text{ basis of } V \\
\implies \text{By the defining theorem exists linear transformation } S: V \to V \text{ such that} \\
\left\{\begin{array}{}
S(v_{i}) = S(T(v_{i})) = v_{i} \\
\forall j \in [3, n]: S(u_{j}) = 0 \\
\end{array}\right. \\
ST = TS \implies v_{i} = ST(v_{i}) = TS(v_{i}) = T(v_{i}) \\
\implies \Set{ v_{i}, T(v_{i}) } \text{ is a linear dependence} - \text{Contradiction!} \\
\implies \boxed{ \forall i \in [1, n]: \Set{ v_{i}, T(v_{i}) } \text{ is a linear dependence} } \\
}
$$
---
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
---
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
---
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
---
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
---
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{n \times m}, B \in \mathbb{R}^{n \times k} \\
\text{Prove or disprove: } \exists! C \in \mathbb{R}^{k \times m}: A = BC \implies rank(B) = k \\
\\
\text{Proof:} \\
\text{Let} \exists i \neq j \in [1, k]: \Set{ C_{i}(B), C_{j}(B) } \text{ is a linear dependence} \\
\text{CANT USE JUST TWO! But the idea is correct} \\
\text{Let } \Set{ C_{1}(B), C_{2}(B) } \text{ be a linear dependence (WLOG)} \\
\implies C_{2}(B) = \alpha C_{1}(B) \\
C_{1}(A) = C_{1}(BC) = C_{1}(B)C_{11} + \alpha C_{1}(B)C_{12} + x \\
\text{Let } C_{11} = \beta, C_{12} = \gamma \\
\beta C_{1}(B) + \alpha\gamma C_{1}(B) + x = C_{1}(A) \\
\text{Let } \alpha = 0 \implies \gamma \text{ can be anything} \implies C \text{ is not unique} - \text{Contradiction!} \\
\implies \alpha \neq 0 \\
\text{Let } C_{11} = \beta + 1, C_{12} = \gamma - \frac{1}{\alpha} \\
\beta C_{1}(B) + C_{1}(B) + \alpha\gamma C_{1}(B) - C_{1}(B) + x = \beta C_{1}(B) + \alpha\gamma C_{1}(B) + x = C_{1}(A) \\
\implies C \text{ is not unique} - \text{Contradiction!} \\
\implies \forall i \neq j \in [1, k]: \Set{ C_{i}(B), C_{j}(B) } \text{ is a linear independence} \\
\implies \boxed{ rank(B) = dim(C(B)) = k } \\
}
$$
$$
\displaylines{
\text{Let } T, S: V \to V \text{ be linear transformations} \\
\text{Prove or disprove: } Im(T) \oplus Im(S) = V \implies T + S \text{ is injective} \\
\\
\text{Disproof:} \\
\text{Let } Im(T) \oplus Im(S) = V \\
Im(T+S) \subseteq Im(T) + Im(S) \\
T(\begin{pmatrix}
x \\
y \\
\end{pmatrix}) = \begin{pmatrix}
x \\
0 \\
\end{pmatrix} \\
S(\begin{pmatrix}
x \\
y \\
\end{pmatrix}) = \begin{pmatrix}
0 \\
x \\
\end{pmatrix} \\
(T + S)\begin{pmatrix}
x \\
y \\
\end{pmatrix} = \begin{pmatrix}
x \\
x \\
\end{pmatrix} \\
(T+S)(\begin{pmatrix}
1 \\
2 \\
\end{pmatrix}) = (T+S)(\begin{pmatrix}
1 \\
3 \\
\end{pmatrix}) \\
\implies T+S \text{ is not injective} \\
}
$$
$$
\displaylines{
\text{Let } T, S: V \to V \text{ be linear transformations} \\
\text{Prove or disprove: } T + S \text{ is injective} \implies Im(T) + Im(S) = V \\
\\
\text{Proof:} \\
T+S \text{ is injective} \implies T+S \text{ is surjective} \\
\implies V = Im(T+S) \subseteq Im(T) + Im(S) \subseteq V \implies \boxed{ Im(T) + Im(S) = V } \\
}
$$
---
