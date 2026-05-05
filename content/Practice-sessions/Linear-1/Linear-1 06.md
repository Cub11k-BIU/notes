---
{"publish":true,"created":"04/12/24, 15:12","modified":"2026-03-24T14:59:27.019+02:00","tags":["Academia","Practice","Linear-1"],"cssclasses":""}
---

# Linear-1 6
$$
\displaylines{
V \text{ is a vector space} \\
U, W \text{ are vector subspaces of } V \\
U \cap W \text{ is a vector subspace of } V \\
\text{Proved on lectures} \\
}
$$
---
## Exercise
$$
\displaylines{
V = \mathbb{R}_{2}[x] \\
U = \Set{ p(x) \in V | p(2) = 0 } \\
W = \Set{ p(x) \in V | p(x) = xp'(x) } \\
\text{Show: } U \cap W \text{ is a vector subspace} \\
\\
\text{Solution:} \\
U = \Set{ a_{0}+a_{1}x+a_{2}x^{2} | a_{0} + 2a_{1} + 4a_{2} = 0 } \\
W = \Set{ a_{0}+a_{1}x+a_{2}x^{2} | a_{0} + a_{1}x + a_{2}^{2} = x(a_{1}+2a_{2}x) = a_{1}x + 2a_{2}x^{2} } = \\
= \Set{ a_{0}+a_{1}x+a_{2}x^{2} | a_{0}-a_{2}x^{2}=0 } = \Set{ a_{0}+a_{1}x+a_{2}x^{2} | \begin{array}{}
a_{0}=0 \\
a_{2}=0 \\
\end{array}} \\
U \cap W = \Set{ a_{0}+a_{1}x+a_{2}x^{2} | \begin{array}{}
a_{0}=0 \\
a_{2}=0 \\
a_{1}=0 \\
\end{array} } = \Set{ 0 } \implies \boxed{U \cap W \text{ is a vector subspace of } V} \\
}
$$
---
$$
\displaylines{
V \text{ is a vector space} \\
U, W \text{ are vector subspaces of } V \\
U + W = \Set{ u + w | u \in U, w \in W } \text{ is a vector subspace of } V \\
\text{Proved in lectures} \\
}
$$
---
## Exercise
$$
\displaylines{
V = \mathbb{R}^{n \times n} \\
U = \Set{ A \in V | A = A^{T} } \\
W = \Set{ A \in V | A \text{ is a diagonal matrix} } \\
\text{Show: } U + W \text{ is a vector subspace of } V \\
\\
\text{Solution:} \\
W \subseteq U \implies U + W = U \implies \boxed{U + W \text{ is a vector subspace of } V} \\
}
$$
---
## Exercise
$$
\displaylines{
V = \mathbb{R}^{2 \times 2} \\
U = \Set{ A \in V | A = A^{T} } \\
W = \Set{ A \in V | A \text{ is an upper-triangle matrix} } \\
\text{Show: } U + W = V \\
\\
\text{Solution:} \\
\begin{pmatrix}
a & b \\
c & d \\
\end{pmatrix} = \begin{pmatrix}
1 & c \\
c & 1 \\
\end{pmatrix} + \begin{pmatrix}
a-1 & b-c \\
0 & d-1 \\
\end{pmatrix} \\
\forall A \in V: A = U_{1} + W_{1} \in U+W \\
\implies V \subseteq U+W \underset{ U+W \text{ is a vector subspace of } V }{ \implies } \boxed{U+W = V} \\
}
$$
---
$$
\displaylines{
V \text{ is a vector space} \\
U, W \text{ are vector subspaces of } V \\
U \oplus W = V \iff U + W = V \land U \cap W = \Set{ 0 } \\
\text{Proved in lectures} \\
}
$$
---
## Exercise
$$
\displaylines{
V = \mathbb{R}^{2 \times 2} \\
U = \Set{ A \in V | A = \alpha I } \\
W = \Set{ A \in V | tr(A) = 0 } \\
\text{Show: } U \oplus W = V \\
\\
\text{Solution:} \\
\text{Let } A \in V \\
A = \begin{pmatrix}
a & b \\
c & d \\
\end{pmatrix} = \underbrace{ \begin{pmatrix}
\frac{a+d}{2} & 0 \\
0 & \frac{a+d}{2} \\
\end{pmatrix} }_{ = \frac{a+d}{2} \cdot I } + \begin{pmatrix}
\frac{a-d}{2} & b \\
c & \frac{d-a}{2} \\
\end{pmatrix} \\
\forall A \in V: A = U_{1} + W_{1} \implies V \subseteq U + W \implies \boxed{V = U + W} \\
U \cap W = \Set{ A \in V | A = \alpha I \land tr(A) = 0 } = \Set{ 0 } \implies \boxed{V = U \oplus W} \\
}
$$
---
$$
\displaylines{
V \text{ is a vector space over } \mathbb{F}, S \subseteq V \\
S = \Set{ v_{1}, v_{2}, \dots, v_{n} } \\
\text{Linear combination of } S \text{ is a sum:} \\
\alpha_{1}v_{1} + \alpha_{2}v_{2} + \dots + \alpha_{n}v_{n} \\
\text{Sometimes denoted as: } (S, \Set{ \alpha_{1}, \alpha_{2}, \dots, \alpha_{n} }) \\
sp(S) \text{ is called span of } S \text{ and is a set of all linear combinations of } S \\
sp(S) = \Set{ \alpha_{1}v_{1}+\dots+\alpha_{n}v_{n} | \begin{array}{}
\alpha_{1}, \alpha_{2}, \dots, \alpha_{n} \in \mathbb{F} \\
v_{1}, v_{2}, \dots, v_{n} \in S \\
\end{array} } \\
}
$$
---
## Exercise
$$
\displaylines{
V = \mathbb{R}^{n \times n} \\
\text{Define: } sp(S = \Set{ \begin{pmatrix}
-1 & 0 \\
0 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 2 \\
0 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 0 \\
0 & -4 \\
\end{pmatrix} }) \\
\\
\text{Solution:} \\
sp(S) = \Set{ \begin{pmatrix}
-\alpha & 2\beta \\
0 & -4\gamma \\
\end{pmatrix} | \alpha, \beta, \gamma \in \mathbb{R}} \\
}
$$
---
## Exercise
$$
\displaylines{
V = \mathbb{R}_{2}[x] \\
8-3x+x^{2} \overset{ ? }{ \in } sp(S = \Set{ 1+x^{2},x+x^{2},3+x+2x^{2} }) \\
\\
\text{Solution:} \\
\left\{\begin{array}{}
\alpha + 3\gamma = 8 \\
\beta + \gamma = -3 \\
\alpha + \beta + 2\gamma = 1
\end{array}\right. \iff \left\{\begin{array}{}
\alpha + 3\gamma = 8 \\
\beta + \gamma = -3 \\
\beta - \gamma = -7 \\
\end{array}\right. \iff \left\{\begin{array}{}
\alpha + 3\gamma = 8 \\
\beta + \gamma = -3 \\
-2\gamma = -4 \\
\end{array}\right. \iff \left\{\begin{array}{}
\alpha = 2 \\
\beta = -5 \\
\gamma = 2 \\
\end{array}\right. \\
\left(\begin{array}{c|ccc|c}
 & v_{1} & v_{2} & v_{3} & p \\
1 & 1 & 0 & 3 & 8 \\
x & 0 & 1 & 1 & -3 \\
x^{2} & 1 & 1 & 2 & 1 \\
\end{array}\right) \\
\implies \boxed{8 - 3x + x^{2} \in sp(S)} \\
}
$$
---
## Exercise
$$
\displaylines{
V = \mathbb{R}^{3} \\
W = sp(\Set{ \begin{pmatrix}
1 \\
2 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
2 \\
3 \\
-1 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
1 \\
\end{pmatrix} }) \\
\text{Show: } W = \Set{ \begin{pmatrix}
x \\
y \\
z \\
\end{pmatrix} | 2x - y + z = 0} \\
\\
\text{Solution:} \\
W = \Set{ \begin{pmatrix}
x \\
y \\
z \\
\end{pmatrix} | \exists \alpha, \beta, \gamma: \alpha \begin{pmatrix}
1 \\
2 \\
0 \\
\end{pmatrix} + \beta \begin{pmatrix}
2 \\
3 \\
-1 \\
\end{pmatrix} + \gamma \begin{pmatrix}
0 \\
1 \\
1 \\
\end{pmatrix} = \begin{pmatrix}
x \\
y \\
z \\
\end{pmatrix}} = \\
= \Set{ \begin{pmatrix}
x \\
y \\
z \\
\end{pmatrix} | \left(\begin{array}{ccc|c}
1 & 2 & 0 & x \\
2 & 3 & 1 & y \\
0 & -1 & 1 & z \\
\end{array}\right) \text{ has a solution} } = \\
= \Set{ \begin{pmatrix}
x \\
y \\
z \\
\end{pmatrix} | \left(\begin{array}{ccc|c}
1 & 2 & 0 & x \\
0 & -1 & 1 & y-2x \\
0 & 0 & 0 & 2x-y+z \\
\end{array}\right) \text{ has a solution} } = \\
= \Set{ \begin{pmatrix}
x \\
y \\
z \\
\end{pmatrix} | 2x - y + z = 0 } \\
}
$$
---
