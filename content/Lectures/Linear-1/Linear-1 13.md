---
{"publish":true,"created":"29/01/25, 12:01","modified":"2025-11-21T21:10:14.311+02:00","tags":["Academia","Lecture","Linear-1"],"cssclasses":""}
---

# Linear-1 13
$$
\displaylines{
W = sp(\Set{ 1+x+x^{2}, x+x^{2} }) \\
U = \Set{ p(x) \in \mathbb{R}_{2}[x] | \begin{array}{}
p(1) = 0 \\
p'(1) = 0 \\
\end{array} } \\
\text{Find basis and dimension of } U + W, U \cap W \\ 
\\
\text{Solution:} \\
\text{Let } p(x) \in U \\
p(x) = a + bx + cx^{2} \\
p(1) = a + b + c \implies a + b + c = 0 \\
p'(x) = b + 2cx \\
p'(1) = b + 2c \implies b + 2c = 0 \\
\left\{\begin{array}{}
a+b+c = 0 \\
b+2c = 0 \\
\end{array}\right. \implies \left\{\begin{array}{}
a = c \\
b = -2c \\
\end{array}\right. \implies U = sp(\Set{ 1-2x+x^{2} }) \\
\implies U + W = sp(\Set{ 1-2x+x^{2}, 1+x+x^{2}, x+x^{2} }) \\
\begin{pmatrix}
1 & -2 & 1 \\
1 & 1 & 1 \\
0 & 1 & 1 \\
\end{pmatrix} \to  \begin{pmatrix}
1 & -2 & 1 \\
0 & 3 & 0 \\
0 & 1 & 1 \\
\end{pmatrix} \to \begin{pmatrix}
1 & -2 & 1 \\
0 & 1 & 0 \\
0 & 0 & 1 \\
\end{pmatrix} \\
\implies \Set{ 1-2x+x^{2}, 1+x+x^{2}, x+x^{2} } \text{ is a linear independence} \implies U + W = \mathbb{R}_{2}[x] \\
dim(U+W) = dim(U) + dim(W) - dim(U \cap W) \\
\implies 3 = 1 + 2 - dim(U \cap W) \\
\implies dim(U \cap W) = 0 \implies U \cap W = \Set{ 0 } \\
}
$$
---
$$
\displaylines{
A, B \in \mathbb{F}^{n \times n} \\
\text{Prove: } dim(N(AB)) \leq dim(N(A)) + dim(N(B)) \\
\\
\text{Proof:} \\
\text{Let } v \in N(B) \\
Bv = 0 \implies ABv = 0 \\
\implies N(B) \subseteq N(AB) \\
\implies dim(N(B)) \leq dim(N(AB)) \\
\text{Let } B = \Set{ v_{1}, \dots, v_{k} } \text{ be a basis of } N(B) \\
\text{Let us add vectors } \Set{ u_{1}, \dots, u_{t} } \text{ to } B \text{ such that} \\
B' = \Set{ v_{1}, \dots, v_{k}, u_{1}, \dots, u_{t} } \text{ is a basis of } N(AB) \\
\forall i \in [1, t]: ABu_{i} = 0 \\
\implies \Set{ Bu_{1}, Bu_{2}, \dots, Bu_{t} } \subseteq N(A) \\
\text{Let } \alpha_{1}, \dots, \alpha_{t} \in \mathbb{F} \\
\alpha_{1}Bu_{1} + \dots + \alpha_{t}Bu_{t} = 0 \\
\implies B(\alpha_{1}u_{1} + \dots + \alpha_{t}u_{t}) = 0 \\
\implies \alpha_{1}u_{1} + \dots + \alpha_{t}u_{t} \in N(B) \\
\implies \exists \Set{ \beta_{1}, \dots, \beta_{k} } \subseteq \mathbb{F}: \alpha_{1}u_{1} + \dots + \alpha_{t}u_{t} = \sum_{i=1}^{k} \beta_{k}v_{k} \\
\implies \alpha_{1}u_{1} + \dots + \alpha_{t}u_{t} - \sum_{i=1}^{k} \beta_{k}v_{k} = 0 \\
\Set{ v_{1}, \dots, v_{k}, u_{1}, \dots, u_{t} } \text{ is a linear independence} \\
\implies \alpha_{1} = \dots = \alpha_{t} = \beta_{1} = \dots = \beta_{k} = 0 \\
\implies \Set{ Bu_{1}, \dots, Bu_{t} } \text{ is a linear independence} \\
\implies dim(N(A)) \geq t \\
\implies dim(N(A)) + dim(N(B)) \geq k + t = dim(N(AB)) \\
}
$$
---
$$
\displaylines{
B = \Set{ 1, 1+x, 1+x^{2} } \text{ is a basis of } \mathbb{R}_{2}[x] \\
C = \Set{ \begin{pmatrix}
0 & 0 \\
0 & -1 \\
\end{pmatrix}, \begin{pmatrix}
1 & 0 \\
0 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 2 \\
0 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 0 \\
1 & 1 \\
\end{pmatrix} } \text{ is basis of } \mathbb{R}^{2 \times 2} \\
\text{Let } T: \mathbb{R}_{2}[x] \to \mathbb{R}^{2 \times 2} \text{ be a linear transformation} \\
[T]^{B}_{C} = \begin{pmatrix}
1 & 0 & 2 \\
0 & 1 & 3 \\
1 & 1 & 5 \\
1 & -1 & -1 \\
\end{pmatrix} \\
\text{Find basis and dimension of } Im(T), ker(T) \\
\\
\text{Solution:} \\
[T(1)]_{C} = \begin{pmatrix}
1 \\
0 \\
1 \\
1 \\
\end{pmatrix} \implies T(1) = \begin{pmatrix}
0 & 2 \\
1 & 0 \\
\end{pmatrix} \\
[T(1+x)]_{C} = \begin{pmatrix}
0 \\
1 \\
1 \\
-1 \\
\end{pmatrix} \implies T(1+x) = \begin{pmatrix}
1 & 2 \\
-1 & -1 \\
\end{pmatrix} \\
[T(1+x^{2})]_{C} = \begin{pmatrix}
2 \\
3 \\
5 \\
-1 \\
\end{pmatrix} \implies T(1+x^{2}) = \begin{pmatrix}
3 & 5 \\
-1 & -3 \\
\end{pmatrix} \\
\\
\text{Another way (right way):} \\
[ker(T)]_{B} = N([T]^{B}_{C}) \\
\begin{pmatrix}
1 & 0 & 2 \\
0 & 1 & 3 \\
1 & 1 & 5 \\
1 & -1 & -1 \\
\end{pmatrix} \to \begin{pmatrix}
1 & 0 & 2 \\
0 & 1 & 3 \\
0 & 1 & 3 \\
0 & -1 & -3 \\
\end{pmatrix} \to \begin{pmatrix}
1 & 0 & 2 \\
0 & 1 & 3 \\
0 & 0 & 0 \\
0 & 0 & 0 \\
\end{pmatrix} \\
\implies [ker(T)]_{B} = sp(\Set{ \begin{pmatrix}
-2 \\
-3 \\
1 \\
\end{pmatrix} }) \\
[u]_{B} = \begin{pmatrix}
-2 \\
-3 \\
1 \\
\end{pmatrix} \implies u = -4-3x+1 \implies \boxed{ ker(T) = sp(\Set{ -4-3x+1 }) } \\
[Im(T)]_{C} = C([T]^{B}_{C}) = sp(\Set{ \begin{pmatrix}
1 \\
0 \\
1 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
1 \\
-1 \\
\end{pmatrix} }) \\
[v]_{C} = \begin{pmatrix}
1 \\
0 \\
1 \\
1 \\
\end{pmatrix} \implies v = \begin{pmatrix}
0 & 2 \\
1 & 0 \\
\end{pmatrix} \\
[w]_{C} = \begin{pmatrix}
0 \\
1 \\
1 \\
-1 \\
\end{pmatrix} \implies w = \begin{pmatrix}
1 & 2 \\
-1 & -1 \\
\end{pmatrix} \\
\implies \boxed{ Im(T) = sp(\Set{ \begin{pmatrix}
0 & 2 \\
1 & 0 \\
\end{pmatrix}, \begin{pmatrix}
1 & 2 \\
-1 & -1 \\
\end{pmatrix} }) } \\
}
$$
---
$$
\displaylines{
\text{Let } V, W \text{ be vector spaces} \\
\text{Let } T, S: V \to W \text{ be linear transformations} \\
\text{Let } S \text{ be invertible} \\
\text{Let } TS^{-1} \text{ be injective} \\
\text{Prove or disprove: } T \text{ is invertible} \\
\\
\text{Proof:} \\
TS^{-1}: W \to W \text{ is a linear transformation} \\
TS^{-1} \text{ is injective and } dim(W) = dim(W) \\
\implies TS^{-1} \text{ is invertible} \\
TS^{-1} \text{ is surjective} \implies T \text{ is surjective} & (1) \\
S \text{ is invertible} \implies dim(V) = dim(W) & (2) \\
(1) \text{ and } (2) \implies \boxed{ T \text{ is invertible} } \\
}
$$
---
$$
\displaylines{
\text{Let } A, B \in \mathbb{F}^{n \times n} \\
\text{Prove or disprove:} \\
1. \quad rank(A) < \frac{n}{2} \text{ and } rank(B) < \frac{n}{2} \implies AB = 0 \\
2. \quad AB = 0 \implies rank(A) \leq \frac{n}{2} \text{ or } rank(B) \leq \frac{n}{2} \\ 
\\
\text{Disproof for 1:} \\
A = B = \begin{pmatrix}
1 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 0 \\
\end{pmatrix} \\
AB = \begin{pmatrix}
1 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 0 \\
\end{pmatrix} \neq 0 \\
\text{Proof for 2:} \\
AB = 0 \implies rank(AB) = 0 \implies dim(N(AB)) = n \\
n \leq dim(N(A)) + dim(N(B)) \\
\forall v \in N(AB): ABv = 0 \implies Bv \in N(A) \\
\forall v \in \mathbb{F}^{n}: Bv \in C(B) \\
\implies C(B) \subseteq N(A) \\
\implies dim(C(B)) \leq dim(N(A)) \implies rank(B) \leq n - rank(A) \\
\implies rank(A) + rank(B) \leq n \\
\implies \left[\begin{array}{}
rank(A) < \frac{n}{2} \\
rank(B) < \frac{n}{2} \\
\end{array}\right. \\
}
$$
---
$$
\displaylines{
\text{Let } A \in \mathbb{R}^{3 \times 3} \text{ be anti-symmetric} \\
\text{Prove: } A\begin{pmatrix}
1 \\
1 \\
1 \\
\end{pmatrix} = \begin{pmatrix}
a \\
b \\
c \\
\end{pmatrix} \implies a + b + c = 0 \\
\\
\text{Proof:} \\
\begin{pmatrix}
0 & a_{2} & a_{3} \\
-a_{2} & 0 & a_{5} \\
-a_{3} & -a_{5} & 0 \\
\end{pmatrix}\begin{pmatrix}
1 \\
1 \\
1 \\
\end{pmatrix} = \begin{pmatrix}
a_{2}+a_{3} \\
a_{5}-a_{2} \\
-a_{3}-a_{5} \\
\end{pmatrix} \\
\left\{\begin{array}{}
a_{2}+a_{3} = a \\
a_{5}-a_{2} = b \\
-a_{3}-a_{5} = c \\
\end{array}\right. \implies a + b + c = a_{2}+a_{3}+a_{5}-a_{2}-a_{3}-a_{5} = 0 \\
\text{Note: this doesn't work in } \mathbb{Z}_{2} \\
\text{Because } \begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 \\
\end{pmatrix} \in \mathbb{Z}_{2}^{3 \times 3} \text{ is anti-symmetric} \\
}
$$
---
$$
\displaylines{
\text{Let } V, W \text{ be finitely generated vector space over } \mathbb{F} \\
\text{Let } T: V \to W \text{ be a linear transformation} \\
\text{Let } S: W \to V \text{ be a linear transformation such that } TST = T \\
\text{Prove or disprove:} \\
1. \quad ker(S) = \Set{ 0 } \\
2. \quad ker(S) \cap Im(T) = \Set{ 0 } \\
3. \quad \text{Prove that such } S \text{ exists} \\
\\
\text{Disproof for 1:} \\
\text{Let } T = S = 0 \\
\implies TST = T \text{ and } ker(S) = W \neq \Set{ 0 } \\
\\
\text{Proof for 2:} \\
\text{Let } w \in ker(S) \cap Im(T) \\
S(w) = 0, \exists v \in V: T(v) = w \\
\implies \exists v \in V: (ST)(v) = 0 \implies (TST)(v) = 0 \implies T(v) = 0 \implies w = 0 \\
\implies ker(S) \cap Im(T) \subseteq \Set{ 0 } \implies \boxed{ ker(S) \cap Im(T) = \Set{ 0 } } \\
\\
\text{Proof for 3:} \\
\text{Let } \Set{ w_{1}, \dots, w_{k} } \text{ be a basis of } Im(T) \\
\implies \forall i \in [1, k]: \exists v_{i} \in V: T(v_{i}) = w_{i} \\
\text{Let } \Set{ w_{1}, \dots, w_{k}, u_{1}, \dots, u_{t} } \text{ be a basis of } W \\
\text{By the "definition theorem" exists linear transformation } S: W \to V \text{ such that} \\
\text{Let } S: W \to V, \forall i \in [1, k+t]: S(w_{i}) = \begin{cases}
v_{i} & i \leq k \\
0 & i > k \\
\end{cases} \\
\text{Let } v \in V \\
T(v) = w \\
(TST)(v) = (TS)(T(v)) = (TS)(w) = (TS)\left( \sum_{i=1}^{k} \alpha_{i}w_{i} \right) = T\left( \sum_{i=1}^{k} \alpha_{i}S(w_{i}) \right) = \\
= T\left( \sum_{i=1}^{k} \alpha_{i}v_{i} \right) = \sum_{i=1}^{k} \alpha_{i}T(v_{i}) = \sum_{i=1}^{k} \alpha_{i}w_{i} = w = T(v) \\
}
$$
---
