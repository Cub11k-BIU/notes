---
{"publish":true,"created":"26/12/24, 18:12","modified":"2025-11-21T21:10:02.591+02:00","tags":["Academia","Assignment","Linear-1"],"cssclasses":""}
---

# 1a
$$
\displaylines{
V_{1} = \Set{ \begin{pmatrix}
x \\
y \\
z \\
\end{pmatrix} \in \mathbb{R}^{3} | z = 2y \land y = x } \\
\text{Find the basis and dimension of } V_{1} \\
\\
\text{Solution:} \\
V_{1} = \Set{ \begin{pmatrix}
x \\
y \\
z \\
\end{pmatrix} \in \mathbb{R}^{3} | y = x \land z = 2x } = \Set{ \begin{pmatrix}
x \\
x \\
2x \\
\end{pmatrix} | x \in \mathbb{R}} = sp(\Set{ \begin{pmatrix}
1 \\
1 \\
2 \\
\end{pmatrix} }) \\
\Set{ \begin{pmatrix}
1 \\
1 \\
2 \\
\end{pmatrix} } \text{ is a linear independence} \\
\implies \text{Basis of } V_{1} \text{ is } \Set{ \begin{pmatrix}
1 \\
1 \\
2 \\
\end{pmatrix} } \text{ and } dim(V_{1}) = 1 \\
}
$$
# 1b
$$
\displaylines{
\displaylines{
V_{2} = \Set{ \begin{pmatrix}
x \\
y \\
z \\
\end{pmatrix} \in \mathbb{R}^{3} | y = z - x } \\
\text{Find the basis and dimension of } V_{2} \\
\\
\text{Solution:} \\
V_{2} = \Set{ \begin{pmatrix}
x \\
x-z \\
z \\
\end{pmatrix} | x, z \in \mathbb{R} } = \Set{ x\begin{pmatrix}
1 \\
1 \\
0 \\
\end{pmatrix} + z\begin{pmatrix}
0 \\
-1 \\
1 \\
\end{pmatrix} | x, z \in \mathbb{R}} = sp(\Set{ \begin{pmatrix}
1 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
-1 \\
1 \\
\end{pmatrix} }) \\
\Set{ \begin{pmatrix}
1 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
-1 \\
1 \\
\end{pmatrix} } \text{ is a linear independence} \\
\implies \text{Basis of } V_{2} \text{ is } \Set{ \begin{pmatrix}
1 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
-1 \\
1 \\
\end{pmatrix} } \text{ and } dim(V_{2}) = 2 \\
}
}
$$
# 1c
$$
\displaylines{
V_{3} = \Set{ A \in \mathbb{R}^{2 \times 2}  | A^{T} = A } \\
\text{Find the basis and dimension of } V_{3} \\
\\
\text{Solution:} \\
V_{3} = \Set{ \begin{pmatrix}
a & b \\
b & c \\
\end{pmatrix} | a, b, c \in \mathbb{R} } = \Set{ a\begin{pmatrix}
1 & 0 \\
0 & 0 \\
\end{pmatrix} + b\begin{pmatrix}
0 & 1 \\
1 & 0 \\
\end{pmatrix} + c\begin{pmatrix}
0 & 0 \\
0 & 1 \\
\end{pmatrix} | a, b, c \in \mathbb{R} } = \\
= sp(\Set{ \begin{pmatrix}
1 & 0 \\
0 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 1 \\
1 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 0 \\
0 & 1 \\
\end{pmatrix} }) \\
\Set{ \begin{pmatrix}
1 & 0 \\
0 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 1 \\
1 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 0 \\
0 & 1 \\
\end{pmatrix} } \text{ is a linear independence} \\
\implies \text{Basis of } V_{3} \text{ is } \Set{ \begin{pmatrix}
1 & 0 \\
0 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 1 \\
1 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 0 \\
0 & 1 \\
\end{pmatrix} } \text{ and } dim(V_{3}) = 3 \\
}
$$
---

# 2
$$
\displaylines{
V = R_{3}[x] \\
U = \Set{ p(x) \in V | p(x) = x \cdot p'(x) } \\
}
$$
## 2a
$$
\displaylines{
\text{Prove: } U \text{ is a vector subspace of } V \\
\\
\text{Proof:} \\
0_{V} = p_{0} \\
p_{0}(x) = 0 \implies p'_{0}(x) = 0 \implies p_{0}(x) = x \cdot p'_{0}(x) \implies 0_{V} \in U \\
\text{Let } p_{1}, p_{2} \in V, \alpha \in \mathbb{R} \\
(p_{1}(x) + \alpha p_{2}(x))' = p_{1}'(x) + \alpha p_{2}'(x) = xp_{1}(x) + \alpha xp_{2}(x) = x(p_{1}(x) + \alpha p_{2}(x)) \\
\implies \forall p_{1}, p_{2} \in V, \forall \alpha \in \mathbb{R}: p_{1} + \alpha p_{2} \in U \implies U \text{ is a vector space} \\
U \subseteq V \implies U \text{ is a vector subspace of } V \\
}
$$
## 2b
$$
\displaylines{
\text{Find the basis and dimension of } U \\
\\
\text{Solution:} \\
U = \Set{ a + bx + cx^{2} + dx^{3} | \begin{array}{}
a, b, c, d, x \in \mathbb{R} \\
a + bx + cx^{2} + dx^{3} = x(b + 2cx + 3dx^{2})
\end{array} } = \\
= \Set{ a+bx+cx^{2}+dx^{3} | \begin{array}{}
a,b,c,d,x \in \mathbb{R} \\
a = 0 \\
c = 2c \\
d = 3d \\
\end{array} } = \Set{ bx | b, x \in \mathbb{R} } \\
\forall p \in V: p(x) = \begin{pmatrix}
1 & x & x^{2} & x^{3}
\end{pmatrix} \cdot \begin{pmatrix}
a \\
b \\
c \\
d \\
\end{pmatrix} \\
\text{Let us denote } p(x) \text{ as } \begin{pmatrix}
a \\
b \\
c \\
d \\
\end{pmatrix} \in \mathbb{R}^{4} \\
\implies U = \Set{ b\begin{pmatrix}
0 \\
1 \\
0 \\
0 \\
\end{pmatrix} | b \in \mathbb{R} } = sp(\Set{ \begin{pmatrix}
0 \\
1 \\
0 \\
0 \\
\end{pmatrix} }) \\
\Set{ \begin{pmatrix}
0 \\
1 \\
0 \\
0 \\
\end{pmatrix} } \text{ is a linear independence} \\
\implies \text{Basis of } U \text{ is } \Set{ \begin{pmatrix}
0 \\
1 \\
0 \\
0 \\
\end{pmatrix} } \text{ and } dim(U) = 1 \\
}
$$
## 2c
$$
\displaylines{
\text{Find a vector subspace } W \text{ of } V \text{ such that } U \oplus W = V \\
\\
\text{Solution:} \\
\text{Let } U + W = V \\
\implies \forall v \in V: v = u + w \\
\text{Let us use notation from the previous solution:} \\
p(x) = \begin{pmatrix}
a \\
b \\
c \\
d \\
\end{pmatrix} \in \mathbb{R}^{4} \\
\implies \begin{pmatrix}
a \\
b \\
c \\
d \\
\end{pmatrix} = \underbrace{ \alpha\begin{pmatrix}
0 \\
1 \\
0 \\
0 \\
\end{pmatrix} }_{ u } + w \\
\implies w = \begin{pmatrix}
a \\
b \\
c \\
d \\
\end{pmatrix} - \begin{pmatrix}
0 \\
\alpha \\
0 \\
0 \\
\end{pmatrix} = \begin{pmatrix}
a \\
b-\alpha \\
c \\
d \\
\end{pmatrix} \\
\text{Let } U \cap W = \Set{ 0 } \\
\implies \forall u \in U, w \in W: [u = w \to u = w = 0] \\
\begin{pmatrix}
0 \\
\alpha \\
0 \\
0 \\
\end{pmatrix} = \begin{pmatrix}
a \\
b-\alpha \\
c \\
d \\
\end{pmatrix} \iff \left\{\begin{array}{}
a = 0 \\
\alpha = b-\alpha \\
c = 0 \\
d = 0 \\
\end{array}\right. \\
u = w = 0 \implies \alpha = 0 \implies b - \alpha = 0 \\
\text{For } U+W \text{ to be a direct sum, } b - \alpha \text{ should be zero} \\
\implies w = \begin{pmatrix}
a \\
0 \\
c \\
d \\
\end{pmatrix} \implies W = \Set{ a\begin{pmatrix}
1 \\
0 \\
0 \\
0 \\
\end{pmatrix} + c\begin{pmatrix}
0 \\
0 \\
1 \\
0 \\
\end{pmatrix} + d\begin{pmatrix}
0 \\
0 \\
0 \\
1 \\
\end{pmatrix} | a, c, d \in \mathbb{R} } \\
\boxed{W = sp(\Set{ \begin{pmatrix}
1 \\
0 \\
0 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
0 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
0 \\
0 \\
1 \\
\end{pmatrix} })} \\
}
$$
---

# 3
$$
\displaylines{
V = \mathbb{R}_{2}[x] \\
V \supseteq W_{1} = sp(\Set{ 1-x^{2}, x-x^{2} }) \\
V \supseteq W_{2} = \Set{ p(x) | p'(1) = 0 } \\
\text{Find the basis and dimension of } W_{1} \cap W_{2}, W_{1} + W_{2} \\
\\
W_{1} = sp(\Set{ \begin{pmatrix}
1 \\
0 \\
-1 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
-1 \\
\end{pmatrix} }) \\
W_{2} = \Set{ a+bx+cx^{2} | b + 2c = 0 } = \Set{ \begin{pmatrix}
a \\
b \\
c \\
\end{pmatrix} | \begin{array}{}
a, b, c \in \mathbb{R} \\
c = -\frac{b}{2} \\
\end{array} } = sp\left( \Set{ \begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
2 \\
-1 \\
\end{pmatrix} } \right) \\
\text{Solution for } W_{1} + W_{2} \\
v \in W_{1} + W_{2} \implies v \in sp(\Set{ \begin{pmatrix}
1 \\
0 \\
-1 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
-1 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
2 \\
-1 \\
\end{pmatrix} }) \\
\begin{pmatrix}
0 \\
2 \\
-1 \\
\end{pmatrix} = -1\begin{pmatrix}
1 \\
0 \\
-1 \\
\end{pmatrix} + 2\begin{pmatrix}
0 \\
1 \\
-1 \\
\end{pmatrix} + 1\begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix} \\
\implies W_{1} + W_{2} = sp(\Set{ \begin{pmatrix}
1 \\
0 \\
-1 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
-1 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
2 \\
-1 \\
\end{pmatrix} }) = sp(\Set{ \begin{pmatrix}
1 \\
0 \\
-1 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
-1 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix} }) \\
\Set{ \begin{pmatrix}
1 \\
0 \\
-1 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
-1 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix} } \text{ is a linear independence} \\
\implies \text{Basis of } W_{1} + W_{2} \text{ is } \Set{ \begin{pmatrix}
1 \\
0 \\
-1 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
-1 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix} } \text{ and } dim(W_{1} + W_{2}) = 3 \\
}
$$
$$
\displaylines{
\text{Solution for } W_{1} \cap W_{2} \\
v \in W_{1} \cap W_{2} \implies v = \alpha\begin{pmatrix}
1 \\
0 \\
-1 \\
\end{pmatrix} + \beta\begin{pmatrix}
0 \\
1 \\
-1 \\
\end{pmatrix} = \gamma\begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix} + \delta\begin{pmatrix}
0 \\
2 \\
-1 \\
\end{pmatrix} \\
\alpha\begin{pmatrix}
1 \\
0 \\
-1 \\
\end{pmatrix} + \beta\begin{pmatrix}
0 \\
1 \\
-1 \\
\end{pmatrix} = \gamma\begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix} + \delta\begin{pmatrix}
0 \\
2 \\
-1 \\
\end{pmatrix} \\
\implies \alpha\begin{pmatrix}
1 \\
0 \\
-1 \\
\end{pmatrix} + \beta\begin{pmatrix}
0 \\
1 \\
-1 \\
\end{pmatrix} - \gamma\begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix} - \delta\begin{pmatrix}
0 \\
2 \\
-1 \\
\end{pmatrix} = 0 \\
\left(\begin{array}{cccc|c}
1 & 0 & -1 & 0 & 0 \\
0 & 1 & 0 & -2 & 0 \\
-1 & -1 & 0 & 1 & 0 \\
\end{array}\right) \to \left(\begin{array}{cccc|c}
1 & 0 & -1 & 0 & 0 \\
0 & 1 & 0 & -2 & 0 \\
0 & -1 & -1 & 1 & 0 \\
\end{array}\right) \to \left(\begin{array}{cccc|c}
1 & 0 & -1 & 0 & 0 \\
0 & 1 & 0 & -2 & 0 \\
0 & 0 & -1 & -1 & 0 \\
\end{array}\right) \\
\text{Let } \delta = -s \\
\left\{\begin{array}{}
\alpha - \gamma = 0 \\
\beta - 2\delta = 0 \\
-\gamma - \delta = 0 \\
\end{array}\right. \implies \left\{\begin{array}{}
\alpha = s \\
\beta = -2s \\
\gamma = s \\
\delta = -s \\
\end{array}\right. \\
\implies v = s\begin{pmatrix}
1 \\
0 \\
-1 \\
\end{pmatrix} - 2s\begin{pmatrix}
0 \\
1 \\
-1 \\
\end{pmatrix} = \begin{pmatrix}
s \\
-2s \\
s \\
\end{pmatrix} \\
\implies W_{1} \cap W_{2} = sp(\Set{ \begin{pmatrix}
1 \\
-2 \\
1 \\
\end{pmatrix} }) \\
\Set{ \begin{pmatrix}
1 \\
-2 \\
1 \\
\end{pmatrix} } \text{ is a linear independence} \\
\implies \text{Basis of } W_{1} \cap W_{2} \text{ is } \Set{ \begin{pmatrix}
1 \\
-2 \\
1 \\
\end{pmatrix} } \text{ and } dim(W_{1} \cap W_{2}) = 1 \\
}
$$
---

# 4a
$$
\displaylines{
\text{Let } V \text{ be a vector space} \\
V = \Set{ A \in \mathbb{R}^{3 \times 3} | A = A^{T} } \\
\text{Are there four vector subspaces } V_{1}, V_{2}, V_{3}, V_{4} \text{ of } V \text{ such that} \\
\Set{ 0 } \subset V_{1} \subset V_{2} \subset V_{3} \subset V_{4} \subset V ? \\
\\
\text{Solution:} \\
\text{Yes, there are such vector subspaces of } V: \\
\text{Let } V_{1} = sp(\Set{ \begin{pmatrix}
1 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 0 \\
\end{pmatrix} }), V_{2} = sp(\Set{ \begin{pmatrix}
1 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 1 & 0 \\
1 & 0 & 0 \\
0 & 0 & 0 \\
\end{pmatrix} }) \\
V_{3} = sp(\Set{ \begin{pmatrix}
1 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 1 & 0 \\
1 & 0 & 0 \\
0 & 0 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 0 & 1 \\
0 & 1 & 0 \\
1 & 0 & 0 \\
\end{pmatrix} }) \\
V_{4} = sp(\Set{ \begin{pmatrix}
1 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 1 & 0 \\
1 & 0 & 0 \\
0 & 0 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 0 & 1 \\
0 & 1 & 0 \\
1 & 0 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 0 & 0 \\
0 & 0 & 1 \\
0 & 1 & 0 \\
\end{pmatrix} }) \\
\boxed{\Set{ 0 } \subset V_{1} \subset V_{2} \subset V_{3} \subset V_{4} \subset V} \\
}
$$
# 4b
$$
\displaylines{
\text{Let } V \text{ be a vector space} \\
V = \Set{ A \in \mathbb{R}^{2 \times 2} | A = A^{T} } \\
\text{Are there four vector subspaces } V_{1}, V_{2}, V_{3}, V_{4} \text{ of } V \text{ such that} \\
\Set{ 0 } \subset V_{1} \subset V_{2} \subset V_{3} \subset V_{4} \subset V ? \\
\\
\text{Solution:} \\
V = \Set{ \begin{pmatrix}
a & b \\
b & c \\
\end{pmatrix} | a, b, c \in \mathbb{R} } = sp(\Set{ \begin{pmatrix}
1 & 0 \\
0 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 1 \\
1 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 0 \\
0 & 1 \\
\end{pmatrix} }) \\
\implies dim(V) = 3 \\
\text{Let } U \subset V, B_{U} \text{ is a basis of } U \\
\text{Let } dim(U) = dim(V) = 3 \\
\lvert B_{U} \rvert = dim(V) \text{ and } B_{U} \text{ is a linear independence} \\
\implies sp(B_{U}) = V \implies U = V - \text{Contradiction!} \\
\implies [U \subset V \implies dim(U) < dim(V)] \\
V_{4} \subset V \implies dim(V_{4}) \leq 2 \\
V_{3} \subset V_{4} \implies dim(V_{3}) \leq 1 \\
V_{2} \subset V_{3} \implies dim(V_{2}) \leq 0 \implies V_{2} = \Set{ 0 } \\
\implies \boxed{\not\exists V_{1}, V_{2}, V_{3}, V_{4}: \Set{ 0 } \subset V_{1} \subset V_{2} \subset V_{3} \subset V_{4} \subset V} \\
}
$$
---

# 5
$$
\displaylines{
W = sp(\Set{ \begin{pmatrix}
0 \\
2 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
2 \\
0 \\
\end{pmatrix} }), V = sp(\Set{ \begin{pmatrix}
5 \\
4 \\
-5 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
0 \\
\end{pmatrix} }) \\
}
$$
## 5a
$$
\displaylines{
\text{Find } W + V \\
\\
\text{Solution:} \\
v \in W + V \implies v \in sp(\Set{ \begin{pmatrix}
0 \\
2 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
2 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
5 \\
4 \\
-5 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
0 \\
\end{pmatrix} }) \\
\begin{pmatrix}
5 \\
4 \\
-5 \\
\end{pmatrix} = -5\begin{pmatrix}
0 \\
2 \\
1 \\
\end{pmatrix} + 5\begin{pmatrix}
1 \\
2 \\
0 \\
\end{pmatrix} + 4\begin{pmatrix}
0 \\
1 \\
0 \\
\end{pmatrix} \\
\implies W + V = sp(\Set{ \begin{pmatrix}
0 \\
2 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
2 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
5 \\
4 \\
-5 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
0 \\
\end{pmatrix} }) = sp(\Set{ \begin{pmatrix}
0 \\
2 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
2 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
0 \\
\end{pmatrix} }) \\
\begin{pmatrix}
0 & 1 & 0 \\
2 & 2 & 1 \\
1 & 0 & 0 \\
\end{pmatrix} \to \begin{pmatrix}
0 & 1 & 0 \\
0 & 0 & 1 \\
1 & 0 & 0 \\
\end{pmatrix} \to I_{3} \\
\implies \Set{ \begin{pmatrix}
0 \\
2 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
2 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
0 \\
\end{pmatrix} } \text{ is a linear independence} \\
\implies \boxed{W + V = sp(\Set{ \begin{pmatrix}
0 \\
2 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
2 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
0 \\
\end{pmatrix} })} \\
}
$$
## 5b
$$
\displaylines{
\text{Find } W \cap V \\
\\
\text{Solution:} \\
v \in W \cap V \implies v = \alpha\begin{pmatrix}
0 \\
2 \\
1 \\
\end{pmatrix} + \beta \begin{pmatrix}
1 \\
2 \\
0 \\
\end{pmatrix} = \gamma \begin{pmatrix}
5 \\
4 \\
-5 \\
\end{pmatrix} + \delta \begin{pmatrix}
0 \\
1 \\
0 \\
\end{pmatrix} \\
\implies \alpha\begin{pmatrix}
0 \\
2 \\
1 \\
\end{pmatrix} + \beta \begin{pmatrix}
1 \\
2 \\
0 \\
\end{pmatrix} - \gamma \begin{pmatrix}
5 \\
4 \\
-5 \\
\end{pmatrix} - \delta \begin{pmatrix}
0 \\
1 \\
0 \\
\end{pmatrix} = 0 \\
\left(\begin{array}{cccc|c}
0 & 1 & -5 & 0 \\
2 & 2 & -4 & -1 \\
1 & 0 & 5 & 0 \\
\end{array}\right) \to \left(\begin{array}{cccc|c}
1 & 0 & 5 & 0 \\
0 & 1 & -5 & 0 \\
0 & 2 & -14 & -1 \\
\end{array}\right) \to \left(\begin{array}{cccc|c}
1 & 0 & 5 & 0 \\
0 & 1 & -5 & 0 \\
0 & 0 & 4 & 1 \\
\end{array}\right) \\
\text{Let } \gamma = s \\
\implies \left\{\begin{array}{}
\alpha = -5s \\
\beta = 5s \\
\gamma = s \\
\delta = -4s \\
\end{array}\right. \\
v = -5s \begin{pmatrix}
0 \\
2 \\
1 \\
\end{pmatrix} + 5s \begin{pmatrix}
1 \\
2 \\
0 \\
\end{pmatrix} = \begin{pmatrix}
5s \\
0 \\
-5s \\
\end{pmatrix} \\
\implies \boxed{W \cap V = sp(\Set{ \begin{pmatrix}
1 \\
0 \\
-1 \\
\end{pmatrix} })} \\
}
$$
## 5c
$$
\displaylines{
\text{Is } W + V \text{ a direct sum?} \\
\\
\text{Solution:} \\
W \cap V \neq \Set{ 0 } \\
\implies \boxed{W + V \text{ is not a direct sum}} \\
}
$$
---

# 6
$$
\displaylines{
W = sp(\Set{ \begin{pmatrix}
a \\
b \\
c \\
d \\
\end{pmatrix} \in \mathbb{R}^{4} | a = d, b = 2c }), V = sp(\Set{ \begin{pmatrix}
a \\
b \\
c \\
d \\
\end{pmatrix} \in \mathbb{R}^{4} | b - 2c + d = 0 }) \\
W = sp(\Set{ \begin{pmatrix}
a \\
2c \\
c \\
a \\
\end{pmatrix} | a, c \in \mathbb{R} }) = sp(sp(\Set{ \begin{pmatrix}
1 \\
0 \\
0 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
2 \\
1 \\
0 \\
\end{pmatrix} })) = sp(\Set{ \begin{pmatrix}
1 \\
0 \\
0 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
2 \\
1 \\
0 \\
\end{pmatrix} }) \\
V = sp(\Set{ \begin{pmatrix}
a \\
2c-d \\
c \\
d \\
\end{pmatrix} | a, c, d \in \mathbb{R} }) = sp(sp(\Set{ \begin{pmatrix}
1 \\
0 \\
0 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
2 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
-1 \\
0 \\
1 \\
\end{pmatrix} })) = \\
= sp(\Set{ \begin{pmatrix}
1 \\
0 \\
0 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
2 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
-1 \\
0 \\
1 \\
\end{pmatrix} })
}
$$
## 6a
$$
\displaylines{
\text{Find } W + V \\
\\
\text{Solution:} \\
v \in W + V \implies v \in sp(\Set{ \begin{pmatrix}
1 \\
0 \\
0 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
2 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
0 \\
0 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
2 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
-1 \\
0 \\
1 \\
\end{pmatrix} }) \\
sp(\Set{ \begin{pmatrix}
1 \\
0 \\
0 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
2 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
0 \\
0 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
2 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
-1 \\
0 \\
1 \\
\end{pmatrix} }) = sp(\Set{ \begin{pmatrix}
1 \\
0 \\
0 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
2 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
0 \\
0 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
-1 \\
0 \\
1 \\
\end{pmatrix} }) \\
\begin{pmatrix}
1 & 0 & 1 & 0 \\
0 & 2 & 0 & -1 \\
0 & 1 & 0 & 0 \\
1 & 0 & 0 & 1 \\
\end{pmatrix} \to \begin{pmatrix}
1 & 0 & 1 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & -1 & 1 \\
0 & 2 & 0 & -1 \\
\end{pmatrix} \to \begin{pmatrix}
1 & 0 & 1 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & -1 \\
0 & 0 & 0 & 1 \\
\end{pmatrix} \to I_{4} \\
\implies \Set{ \begin{pmatrix}
1 \\
0 \\
0 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
2 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
0 \\
0 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
-1 \\
0 \\
1 \\
\end{pmatrix} } \text{ is a linear independence} \\
\implies \boxed{W + V = sp(\Set{ \begin{pmatrix}
1 \\
0 \\
0 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
2 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
0 \\
0 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
-1 \\
0 \\
1 \\
\end{pmatrix} })} \\
}
$$
## 6b
$$
\displaylines{
\text{Find } W \cap V \\
\\
\text{Solution:} \\
v \in W \cap V \implies v = \alpha \begin{pmatrix}
1 \\
0 \\
0 \\
1 \\
\end{pmatrix} + \beta \begin{pmatrix}
0 \\
2 \\
1 \\
0 \\
\end{pmatrix} = \gamma \begin{pmatrix}
1 \\
0 \\
0 \\
0 \\
\end{pmatrix} + \delta \begin{pmatrix}
0 \\
2 \\
1 \\
0 \\
\end{pmatrix} + \omega \begin{pmatrix}
0 \\
-1 \\
0 \\
1 \\
\end{pmatrix} \\
\implies \alpha \begin{pmatrix}
1 \\
0 \\
0 \\
1 \\
\end{pmatrix} + \beta \begin{pmatrix}
0 \\
2 \\
1 \\
0 \\
\end{pmatrix} - \gamma \begin{pmatrix}
1 \\
0 \\
0 \\
0 \\
\end{pmatrix} - \delta \begin{pmatrix}
0 \\
2 \\
1 \\
0 \\
\end{pmatrix} - \omega \begin{pmatrix}
0 \\
-1 \\
0 \\
1 \\
\end{pmatrix} = 0 \\
\left(\begin{array}{ccccc|c}
1 & 0 & -1 & 0 & 0 & 0 \\
0 & 2 & 0 & -2 & 1 & 0 \\
0 & 1 & 0 & -1 & 0 & 0 \\
1 & 0 & 0 & 0 & -1 & 0 \\
\end{array}\right) \to \left(\begin{array}{ccccc|c}
1 & 0 & -1 & 0 & 0 & 0 \\
0 & 1 & 0 & -1 & 0 & 0 \\
0 & 0 & 1 & 0 & -1 & 0 \\
0 & 2 & 0 & -2 & 1 & 0 \\
\end{array}\right) \\
\to \left(\begin{array}{ccccc|c}
1 & 0 & -1 & 0 & 0 & 0 \\
0 & 1 & 0 & -1 & 0 & 0 \\
0 & 0 & 1 & 0 & -1 & 0 \\
0 & 0 & 0 & 0 & 1 & 0 \\
\end{array}\right) \\
\text{Let } \delta = s \\
\implies \left\{\begin{array}{}
\alpha = 0 \\
\beta = s \\
\gamma = 0 \\
\delta = s \\
\omega = 0 \\
\end{array}\right. \\
\implies v = s\begin{pmatrix}
0 \\
2 \\
1 \\
0 \\
\end{pmatrix} \implies \boxed{W \cap V = sp(\Set{ \begin{pmatrix}
0 \\
2 \\
1 \\
0 \\
\end{pmatrix} })} \\
}
$$
## 6c
$$
\displaylines{
\text{Is } W + V \text{ a direct sum?} \\
\\
\text{Solution:} \\
W \cap V \neq \Set{ 0 } \\
\implies \boxed{W + V \text{ is not a direct sum}} \\
}
$$
---

# 7a
$$
\displaylines{
\text{Prove or disprove: } V = U \oplus W \implies dim(V) = dim(U) + dim(W) \\
\\
\text{Proof:} \\
V = U \oplus W \implies U + W = V, U \cap W = \Set{ 0 } \\
dim(U+W) = dim(U) + dim(W) - dim(U \cap W) \\
U \cap W = \Set{ 0 } \implies dim(U \cap W) = 0 \\
\implies dim(U + W) = \boxed{dim(V) = dim(U) + dim(W)} \\
}
$$
# 7b
$$
\displaylines{
\text{Prove or disprove: } dim(V) = dim(U) + dim(W) \implies V = U \oplus W \\
\\
\text{Disproof:} \\
V = \mathbb{R}^{3}, U = sp(\Set{ \begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix} }), W = sp(\Set{ \begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
0 \\
\end{pmatrix} }) \\
dim(U) = 1, dim(W) = 2 \\
dim(V) = 3 = dim(U) + dim(W) \\
U + W = sp(\Set{ \begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
0 \\
\end{pmatrix} }) = sp(\Set{ \begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
0 \\
\end{pmatrix} }) = W \neq V \\
}
$$
---
