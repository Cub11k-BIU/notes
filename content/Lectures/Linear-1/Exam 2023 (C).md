---
{"publish":true,"created":"18/02/25, 16:02","modified":"2025-11-21T21:10:14.259+02:00","tags":["Academia","Lecture","Linear-1"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Let } L = \Set{ x | Ax = b, b \neq 0 } \\
\text{Let } H = \Set{ x | Ax = 0 } \\
\text{Let } v_{0} \in L \\
\text{Prove: } H + v_{0} = L \\
\\
\text{Proof:} \\
\text{Let } v \in H + v_{0} \\
\implies \exists h \in H: v = h + v_{0} \\
Av = A(h+v_{0}) = Ah + Av_{0} = 0 + b = b \implies v \in L \implies H + v_{0} \subseteq L \\
\text{Let } v \in L \\
A(v-v_{0}) = Av - Av_{0} = b - b = 0 \implies (v-v_{0}) \in H \\
\implies (v-v_{0}) + v_{0} \in H+v_{0} \implies v \in H+v_{0} \implies L \subseteq H + v_{0} \\
\implies \boxed{ H + v_{0} = L } \\
}
$$
# 2a
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
# 2b
$$
\displaylines{
\text{Let } A, B \in \mathbb{F}^{n \times n} \\
\text{Prove: } dim(N(AB)) \leq dim(N(A)) + dim(N(B)) \\
\\
\text{Proof:} \\
\text{Let } v \in N(B) \\
Bv = 0 \implies ABv = 0 \implies v \in N(B) \implies N(B) \subseteq N(AB) \\
\text{Let } B_{k} = \Set{ v_{1}, v_{2}, \dots, v_{k} } \text{ be a basis of } N(B), dim(N(B)) = k \\
\text{Let } B_{k+t} = \Set{ v_{1}, v_{2}, \dots, v_{k}, u_{1}, u_{2}, \dots, u_{t} } \text{ be a basis of } N(AB), dim(N(AB)) = k + t \\
\forall i \in [1, t]: ABu_{i} = 0 \implies Bu_{i} \in N(A) \\
\implies \Set{ Bu_{1}, Bu_{2}, \dots, Bu_{t} } \subseteq N(A) \\
\text{Let } \sum_{i=1}^{t} \alpha_{i}Bu_{i} = 0 \\
\implies \sum_{i=1}^{t} B\alpha_{i}u_{i} = B\sum_{i=1}^{t} \alpha_{i}u_{i} = 0 \\
\implies \sum_{i=1}^{t} \alpha_{i}u_{i} \in N(B) \implies \sum_{i=1}^{t} \alpha_{i}u_{i} = \sum_{i=1}^{k} \beta_{i}v_{i} \\
\implies \underbrace{ \sum_{i=1}^{t} \alpha_{i}u_{i} - \sum_{i=1}^{k} \beta_{i}v_{i} }_{ \text{Linear combination of } B_{k+t} } = 0 \\
B_{k+t} \text{ is a linear independence} \implies \alpha_{1} = \alpha_{2} = \dots = \alpha_{t} = \beta_{1} = \beta_{2} = \dots = \beta_{k} = 0 \\
\implies \Set{ Bu_{1}, Bu_{2}, \dots, Bu_{t} } \text{ is a linear independence} \\
\implies dim(N(A)) \geq t \implies dim(N(B)) + dim(N(A)) \geq k + t = dim(N(AB)) \\
\implies \boxed{ dim(N(AB)) \leq dim(N(A)) + dim(N(B)) } \\
}
$$
# 3a
$$
\displaylines{
\text{Let } B = \Set{ 1,1+x,1+x^{2} } \text{ be a basis of } \mathbb{R}_{2}[x] \\
\text{Let } C = \Set{ \begin{pmatrix}
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
\end{pmatrix} } \text{ be a basis of } \mathbb{R}^{2 \times 2} \\
\text{Let } T: \mathbb{R}_{2}[x] \to \mathbb{R}^{2 \times 2} \text{ be a linear transformation} \\
\text{Let } [T]^{B}_{C} = \begin{pmatrix}
1 & 0 & 2 \\
0 & 1 & 3 \\
1 & 1 & 5 \\
1 & -1 & -1 \\
\end{pmatrix} \\
\text{Find basis and dimension of } Im(T), ker(T) \\
\\
\text{Solution:} \\
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
[ker(T)]_{B} = N([T]^{B}_{C}) = sp\Set{ \begin{pmatrix}
-2 \\
-3 \\
1 \\
\end{pmatrix} } \implies \boxed{ \left\{\begin{array}{}
ker(T) = sp\Set{ -4-3x+x^{2} } \\
dim(ker(T)) = 1 \\
\end{array}\right. } \\
[Im(T)]_{C} = C([T]^{B}_{C}) = sp\Set{ \begin{pmatrix}
1 \\
0 \\
1 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
1 \\
-1 \\
\end{pmatrix} } \implies \boxed{ \left\{\begin{array}{}
Im(T) = sp\Set{ \begin{pmatrix}
0 & 2 \\
1 & 0 \\
\end{pmatrix}, \begin{pmatrix}
1 & 2 \\
-1 & -1 \\
\end{pmatrix} } \\
dim(Im(T)) = 2 \\
\end{array}\right. } \\
}
$$
# 3b
$$
\displaylines{
\text{Let } V, W \text{ be finitely generated vector spaces} \\
\text{Let } T, S: V \to W \text{ be linear transformations, } S \text{ is invertible} \\
TS^{-1} \text{ is injective} \\
\text{Is } T \text{ neccessarily invertible?} \\
\\
\text{Solution:} \\
TS^{-1}: W \to W \text{ is injective} \\
dim(W) = dim(W) \implies TS^{-1} \text{ is surjective} \\
\implies T \text{ is surjective} \\
S \text{ is invertible} \implies V \cong W \implies dim(V) = dim(W) \\
\implies T \text{ is injective} \implies T \text{ is bijective} \\
\implies \boxed{ T \text{is invertible} } \\
}
$$
# 4a
$$
\displaylines{
\text{Let } A, B \in \mathbb{F}^{n \times n} \\
\text{Let } rank(A) < \frac{n}{2}, rank(B) < \frac{n}{2} \\
\text{Prove or disprove: } AB = 0 \\
\\
\text{Disproof:} \\
A = B = \begin{pmatrix}
1 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 0 \\
\end{pmatrix} \implies AB = \begin{pmatrix}
1 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 0 \\
\end{pmatrix} \neq 0 \\
rank(A) = rank(B) = 1 < \frac{3}{2} \\
}
$$
# 4b
$$
\displaylines{
\text{Let } A, B \in \mathbb{F}^{n \times n}, AB = 0 \\
\text{Prove or disprove: } rank(A) \leq \frac{n}{2} \lor rank(B) \leq \frac{n}{2} \\
\\
\text{Proof:} \\
AB = 0 \implies rank(AB) = 0 \implies dim(N(AB)) = n \\
\forall v \in \mathbb{F}^{n}: ABv = 0v = 0 \\
\forall v \in \mathbb{F}^{n}: Bv \in C(B) \implies C(B) \subseteq N(A) \\
\implies dim(C(B)) \leq dim(N(A)) \\
\implies rank(B) \leq n - rank(A) \implies rank(A) + rank(B) \leq n \\
\text{Let } rank(A) = k > \frac{n}{2} \\
\implies k + rank(B) \leq n \implies \frac{n}{2} + rank(B) \leq n \implies \boxed{ rank(B) \leq \frac{n}{2} } \\
\text{Let } rank(B) = k > \frac{n}{2} \\
\implies k + rank(A) \leq n \implies \frac{n}{2} + rank(A) \leq n \implies \boxed{ rank(A) \leq \frac{n}{2} } \\
}
$$
# 4c
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
\end{array}\right. \implies \boxed{ a + b + c = a_{2}+a_{3}+a_{5}-a_{2}-a_{3}-a_{5} = 0 } \\
\text{Note: this doesn't work in } \mathbb{Z}_{2} \\
\text{Because } \begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 \\
\end{pmatrix} \in \mathbb{Z}_{2}^{3 \times 3} \text{ is anti-symmetric} \\
}
$$
# 5
$$
\displaylines{
\text{Let } V, W \text{ be finitely generated vector spaces over } \mathbb{F} \\
\text{Let } T: V \to W \text{ be a linear transformation} \\
\text{Let } S: W \to V \text{ be a linear transformation}, TST = T \\
}
$$
## 5a
$$
\displaylines{
\text{Show that not neccesserily } ker(S) = \Set{ 0 } \\
\\
\text{Solution:} \\
\text{Let } T = S = 0 \\
TST = T = 0 \\
ker(S) = W \neq \Set{ 0 } \\
}
$$
## 5b
$$
\displaylines{
\text{Prove: } ker(S) \cap Im(T) = \Set{ 0 } \\
\\
\text{Proof:} \\
\text{Let } w \in ker(S) \cap Im(T) \\
\implies S(w) = 0, \exists v \in V: T(v) = w \\
S(T(v)) = S(w) = 0 \implies T(S(T(v))) = T(0) = 0 = T(v) = w \\
\implies ker(S) \cap Im(T) = \Set{ 0 } \\
}
$$
## 5c
$$
\displaylines{
\text{Prove: } \forall T: V \to W: \exists S: W \to V : TST = T \\
\\
\text{Proof:} \\
\text{Let } B_{T} = \Set{ w_{1}, w_{2}, \dots, w_{k} } \text{ be a basis of } Im(T) \\
\implies \forall i \in [1, k]: \exists v_{i} \in V: T(v_{i}) = w_{i} \\
Im(T) \subseteq W \implies \exists B = B_{T} \cup \Set{ w_{k+1}, w_{k+2}, \dots, w_{k+t} } \text{ basis of } W \\
\implies \text{By the defining theorem } \exists S: W \to V, S(w_{i}) = \begin{cases}
v_{i} & i \leq k \\
0 & i > k \\
\end{cases} \\
\text{Let } v \in V \\
\implies \exists \Set{ \alpha_{i} }_{i \in [1, n]} \subseteq \mathbb{F}: v = \sum_{i=1}^{n} \alpha_{i}v_{i} \\
\text{Let } T(v) = w \in W \\
w \in Im(T) \implies \exists \Set{ \beta_{j} }_{j \in [1, k]} \subseteq \mathbb{F}: w = \sum_{j=1}^{k} \beta_{j}w_{j} \\
TST(v) = TS(w) = TS\left( \sum_{i=1}^{k} \beta_{j}w_{j} \right) = T\left( \sum_{i=1}^{k} \beta_{j}S(w_{j}) \right) = T\left( \sum_{i=1}^{k} \beta_{j}v_{j} \right) = \sum_{j=1}^{k} \beta_{j}T(v_{j}) = \\
= \sum_{i=1}^{k} \beta_{j}w_{j} = w = T(v) \\
\implies \boxed{ TST = T } \\
}
$$
