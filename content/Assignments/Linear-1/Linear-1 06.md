---
{"publish":true,"created":"19/12/24, 07:12","modified":"2025-11-21T21:10:02.580+02:00","tags":["Academia","Assignment","Linear-1"],"cssclasses":""}
---

# 1
$$
\displaylines{
\Set{ u, v } \text{ is a linear independence} \\
w \in sp(\Set{ u, v }) \\
\text{Prove or disprove: } \Set{ u, v, w } \text{ is a linear dependence} \\
\\
\text{Proof:} \\
w \in sp(\Set{ u, v }) \\
\implies \exists \alpha_{1}, \alpha_{2} \in \mathbb{F}: w = \alpha_{1}u + \alpha_{2}v \\
\Set{ u, v } \text{ is a linear independence} \\
\alpha_{1}u + \alpha_{2}v = 0 \implies \alpha_{1} = \alpha_{2} = 0 \\
\text{Let } \beta_{1}u + \beta_{2}v + \beta_{3}w = 0 \\
\beta_{1}u + \beta_{2}v + \beta_{3}(\alpha_{1}u + \alpha_{2}v) = 0 \\
\implies \beta_{1} + \beta_{3}\alpha_{1} = \beta_{2} + \beta_{3}\alpha_{2} = 0 \\
\implies \left\{\begin{array}{}
\beta_{1} = -\beta_{3}\alpha_{1} \\
\beta_{2} = -\beta_{3}\alpha_{2} \\
\end{array}\right. \centernot\implies \left\{\begin{array}{}
\beta_{1} = 0 \\
\beta_{2} = 0 \\
\beta_{3} = 0 \\
\end{array}\right. \\
\text{For example:} \\
\text{Let } \alpha_{1} = 1, \alpha_{2} = 2, \beta_{3} = 3 \\
\left\{\begin{array}{}
\beta_{1} = -\beta_{3} = -3 \\
\beta_{2} = -2\beta_{3} = -6 \\
\end{array}\right. \\
\implies \boxed{\Set{ u, v, w } \text{ is a linear dependence}} \\
}
$$
---

# 2
$$
\displaylines{
\text{Let } V \text{ be a vector space over } \mathbb{F} \\
\text{Let } \Set{ v_{1}, v_{2} }, \Set{ v_{2}, v_{3} }, \Set{ v_{1}, v_{3} } \text{ be linear independences} \\
\text{Prove or disprove: } \Set{ v_{1}, v_{2}, v_{3} } \text{ is a linear independence} \\
\\
\text{Disproof:} \\
\text{Let } V = \mathbb{R}^{2} \\
\text{Let } v_{1} = \begin{pmatrix}
1 \\
0 \\
\end{pmatrix}, v_{2} = \begin{pmatrix}
0 \\
1 \\
\end{pmatrix}, v_{3} = \begin{pmatrix}
1 \\
1 \\
\end{pmatrix} \\
\Set{ v_{1}, v_{2} } \text{ is a linear independence} \\
\Set{ v_{2}, v_{3} } \text{ is a linear independence} \\
\Set{ v_{1}, v_{3} } \text{ is a linear independence} \\
v_{3} = v_{1} + v_{2} \implies v_{3} \in sp(\Set{ v_{1}, v_{2} }) \implies \Set{ v_{1}, v_{2}, v_{3} } \text{ is a linear dependence} \\
\boxed{\text{Disproved}} \\
}
$$
---

# 3
$$
\displaylines{
\text{Let } S = \Set{ v_{1}, v_{2}, v_{3} } \text{ be a linear independence} \\
\text{Let } S^{*} = \Set{ v_{1}, v_{1} + v_{2}, v_{1} + v_{2} + v_{3} } \\
\text{Is } S^{*} \text{ necessarily/always a linear independence?} \\
\\
\text{Solution:} \\
\alpha_{1}v_{1} + \alpha_{2}v_{2} + \alpha_{3}v_{3} = 0 \implies \alpha_{1} = \alpha_{2} = \alpha_{3} = 0 \\
\beta_{1}v_{1} + \beta_{2}(v_{1} + v_{2}) + \beta_{3}(v_{1} + v_{2} + v_{3}) = 0 \\
\underbrace{ (\beta_{1} + \beta_{2} + \beta_{3})v_{1} + (\beta_{2} + \beta_{3})v_{2} + \beta_{3}v_{3} }_{ \text{Linear combination of } S } = 0 \\
\implies \left\{\begin{array}{}
\beta_{1} + \beta_{2} + \beta_{3} = 0 \\
\beta_{2} + \beta_{3} = 0 \\
\beta_{3} = 0 \\
\end{array}\right. \implies \left\{\begin{array}{}
\beta_{1} = 0 \\
\beta_{2} = 0 \\
\beta_{3} = 0 \\
\end{array}\right. \\
\implies \boxed{S^{*} \text{ is always a linear indendence}} \\
}
$$
---
# 4
$$
\displaylines{
\text{Let } V \text{ be a vector space over } \mathbb{F} \\
U, W \subseteq V - \text{ vector subspaces of } V \\
\text{Let } u, v, w \in V \setminus \Set{ 0 } \\
u \in U, u \not\in W \\
w \in W \\
v \in W, \not\exists \alpha \in \mathbb{F}: v = \alpha w \\
\text{Prove: } \not\exists \alpha_{1}, \alpha_{2} \in \mathbb{F}: v = \alpha_{1}u + \alpha_{2}w \\
\\
\text{Proof:} \\
W \text{ is a vector subspace} \implies \forall w_{1}, w_{2}: w_{1} + \alpha w_{2} \in W \\
\text{Let } \exists \alpha_{1}, \alpha_{2} \in \mathbb{F}: v = \alpha_{1}u + \alpha_{2}w \\
\text{Let } \alpha_{1} = 0 \implies v = \alpha_{2}w - \text{ Contradiction!} \\
\implies \alpha_{1} \neq 0 \implies u = \frac{v - \alpha_{2}w}{\alpha_{1}} \\
v \in W, w \in W \implies v + (-\alpha_{2})w \in W \implies \frac{1}{\alpha_{1}}(v + (-\alpha_{2})w) \in W \\
\implies u \in W - \text{ Contradiction!} \\
\implies \boxed{\not\exists \alpha_{1}, \alpha_{2} \in \mathbb{F}: v = \alpha_{1}u + \alpha_{2}w} \\
}
$$
---

# 5
$$
\displaylines{
S = \Set{ \begin{pmatrix}
k \\
1 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
k \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
1 \\
\end{pmatrix} } \\
\text{Find } k \text{ such that } S \text{ is a linear dependence} \\
\\
\text{Solution:} \\
\alpha_{1} \cdot \begin{pmatrix}
k \\
1 \\
1 \\
\end{pmatrix} + \alpha_{2} \cdot \begin{pmatrix}
0 \\
1 \\
k \\
\end{pmatrix} + \alpha_{3} \cdot \begin{pmatrix}
0 \\
1 \\
1 \\
\end{pmatrix} = 0 \\
\implies \left\{\begin{array}{}
\alpha_{1}k = 0 \\
\alpha_{1} + \alpha_{2} + \alpha_{3} = 0 \\
\alpha_{1} + \alpha_{2}k + \alpha_{3} = 0 \\
\end{array}\right. \\
\left(\begin{array}{ccc|c}
k & 0 & 0 & 0 \\
1 & 1 & 1 & 0 \\
1 & k & 1 & 0 \\
\end{array}\right) \to \left(\begin{array}{ccc|c}
k & 0 & 0 & 0 \\
0 & 1-k & 1-k & 0 \\
0 & 0 & 1-k & 0 \\
\end{array}\right) \to \left(\begin{array}{ccc|c}
k & 0 & 0 & 0 \\
0 & 1-k & 0 & 0 \\
0 & 0 & 1-k & 0 \\
\end{array}\right) \\
\left\{\begin{array}{}
\alpha_{1}k = 0 \\
\alpha_{2}(1 - k) = 0 \\
\alpha_{3}(1 - k) = 0 \\
\end{array}\right. \implies \begin{cases}
\alpha_{2} = \alpha_{3} = 0 & k = 0 \\
\alpha_{1} = 0 & k = 1 \\
\alpha_{1} = \alpha_{2} = \alpha_{3} = 0 & \text{otherwise} \\
\end{cases} \\
\boxed{k \in \Set{ 0, 1 } \implies S \text{ is a linear dependence}} \\
}
$$
---

# 6
$$
\displaylines{
\text{Let } V \text{ be a vector space over } \mathbb{F} \\
\Set{ v_{1}, v_{2}, v_{3} } \text{ is a linear independence} \\
\text{Prove: } \Set{ v_{1} + v_{2}, v_{2} - v_{3}, v_{3} - 2v_{1} } \text{ is a linear independence} \\
\\
\text{Proof:} \\
\alpha_{1}v_{1} + \alpha_{2}v_{2} + \alpha_{3}v_{3} = 0 \implies \alpha_{1} = \alpha_{2} = \alpha_{3} = 0 \\
\beta_{1}(v_{1} + v_{2}) + \beta_{2}(v_{2} - v_{3}) + \beta_{3}(v_{3} - 2v_{1}) = 0 \\
\underbrace{ (\beta_{1} - 2\beta_{3})v_{1} + (\beta_{1} + \beta_{2})v_{2} + (\beta_{3} - \beta_{2})v_{3} }_{ \text{Linear combination of } \Set{ v_{1}, v_{2}, v_{3} } } = 0 \\
\implies \left\{\begin{array}{}
\beta_{1} - 2\beta_{3} = 0 \\
\beta_{1} + \beta_{2} = 0 \\
\beta_{3} - \beta_{2} = 0 \\
\end{array}\right. \\
\left(\begin{array}{ccc|c}
1 & 0 & -2 & 0 \\
1 & 1 & 0 & 0 \\
0 & -1 & 1 & 0 \\
\end{array}\right) \to \left(\begin{array}{ccc|c}
1 & 0 & -2 & 0 \\
0 & 1 & 2 & 0 \\
0 & -1 & 1 & 0 \\
\end{array}\right) \to \left(\begin{array}{ccc|c}
1 & 0 & -2 & 0 \\
0 & 1 & 2 & 0 \\
0 & 0 & 3 & 0 \\
\end{array}\right) \\
\left\{\begin{array}{}
\beta_{1} -2\beta_{3} = 0 \\
\beta_{2} + 2\beta_{3} = 0 \\
3\beta_{3} = 0 \\
\end{array}\right. \implies \left\{\begin{array}{}
\beta_{1} = 0 \\
\beta_{2} = 0 \\
\beta_{3} = 0 \\
\end{array}\right. \\
\implies \boxed{\Set{ v_{1} + v_{2}, v_{2} - v_{3}, v_{3} - 2v_{1} } \text{ is a linear independence}} \\
}
$$
---

# 7
$$
\displaylines{
\text{Let } v = \begin{pmatrix}
a \\
b \\
\end{pmatrix}, w = \begin{pmatrix}
c \\
d \\
\end{pmatrix} \in \mathbb{R} \\
\text{Prove: } \Set{ v, w } \text{ is a linear dependence} \implies ad - bc = 0 \\
\\
\text{Proof:} \\
\exists \alpha_{1} \neq \alpha_{2}: \alpha_{1}v + \alpha_{2}w = 0 \\
\alpha_{1} = 0, \alpha_{2} \neq 0 \implies \alpha_{2} w = 0 \implies c = d = 0 \implies \boxed{ad - bc = 0} \\
\alpha_{1} \neq 0, \alpha_{2} = 0 \implies \alpha_{2} v = 0 \implies a = b = 0 \implies \boxed{ad - bc = 0} \\
\text{Let } \alpha_{1} \neq 0, \alpha_{2} \neq 0 \\
\implies \left\{\begin{array}{}
a\alpha_{1} + c\alpha_{2} = 0 \\
b\alpha_{1} + d\alpha_{2} = 0 \\
\end{array}\right.\\
a = 0 \implies c = 0 \implies \boxed{ad - bc = 0} \\
\text{Let } a \neq 0 \\
\left(\begin{array}{cc|c}
a & c & 0 \\
b & d & 0 \\
\end{array}\right) \to \left(\begin{array}{cc|c}
a & c & 0 \\
0 & d - c \cdot \frac{b}{a} & 0 \\
\end{array}\right) \\
\left\{\begin{array}{}
a\alpha_{1} + c\alpha_{2} = 0 \\
\left( d - c \cdot \frac{b}{a} \right)\alpha_{2} = 0 \\
\end{array}\right. \implies d - c \cdot \frac{b}{a} = 0 \implies \boxed{ad -bc = 0} \\
}
$$
---

# 8
$$
\displaylines{
\text{Let } V \text{ be a vector space over } \mathbb{F} \\
S_{1} \cap S_{2} = \emptyset \\
S_{1} \cup S_{2} \text{ is a linear independence over } \mathbb{F} \\
\text{Prove: } sp(S_{1} \cup S_{2}) = sp(S_{1}) \oplus sp(S_{2}) \\
\\
\text{Proof:} \\
\text{Let } S_{1} = \Set{ v_{1}, v_{2}, \dots, v_{n} } \\
\text{Let } S_{2} = \Set{ u_{1}, u_{2}, \dots, u_{m} } \\
S_{1} \cup S_{2} = \Set{ v_{1}, \dots, v_{n}, u_{1}, \dots, u_{m} } \\
\text{Let } s \in sp(S_{1} \cup S_{2}) \\
s = \underbrace{ \underbrace{ \sum_{i=1}^{n} \alpha_{i}v_{i} }_{ \text{Linear combination of } S_{1} } + \underbrace{ \sum_{i=1}^{m}  \beta_{i}u_{i} }_{ \text{Linear combination of } S_{2} } }_{ \text{Linear combination of } S_{1} \cup S_{2} } \\
\sum_{i=1}^{n} \alpha_{i}v_{i} \in sp(S_{1}) \\
\sum_{i=1}^{m}  \beta_{i}u_{i} \in sp(S_{2}) \\
\implies s \in sp(S_{1}) + sp(S_{2}) \implies \boxed{sp(S_{1} \cup S_{2}) \subseteq sp(S_{1}) + sp(S_{2})} & (1) \\
\text{Let } s \in sp(S_{1}) + sp(S_{2}) \\
\implies \exists v \in S_{1}, u \in S_{2}: s = v + u \\
v \in sp(S_{1}) \implies v = \sum_{i=1}^{n} \alpha_{i}v_{i} \\
u \in sp(S_{2}) \implies u = \sum_{i=1}^{m} \beta_{i}u_{i} \\
s = v + u = \underbrace{ \sum_{i=1}^{n} \alpha_{i}v_{i} + \sum_{i=1}^{m} \beta_{i}u_{i} }_{ \text{Linear combination of } S_{1} \cup S_{2} } \\
\implies s \in sp(S_{1} \cup S_{2}) \implies \boxed{sp(S_{1}) + sp(S_{2}) \subseteq sp(S_{1} \cup S_{2})} & (2) \\
(1) \land (2) \implies \boxed{sp(S_{1} \cup S_{2}) = sp(S_{1}) + sp(S_{2})} \\
}
$$
$$
\displaylines{
sp(S_{1} \cup S_{2}) \text{ is a vector space} \implies \boxed{sp(S_{1}) + sp(S_{2}) \text{ is a vector space}} & (3) \\
\text{Let } s \in sp(S_{1}) \cap sp(S_{2}) \\
s \in sp(S_{1}) \implies s = \sum_{i=1}^{n} \alpha_{i}v_{i} \\
s \in sp(S_{2}) \implies s = \sum_{i=1}^{m} \beta_{i}u_{i} \\
\implies \sum_{i=1}^{n} \alpha_{i}v_{i} = \sum_{i=1}^{m} \beta_{i}u_{i} \implies \underbrace{ \sum_{i=1}^{n} \alpha_{i}v_{i} - \sum_{i=1}^{m} \beta_{i}u_{i} }_{ \text{Linear combination of } S_{1} \cup S_{2} } = 0 \\
\implies \alpha_{1} = \alpha_{2} = \dots = \alpha_{n} = -\beta_{1} = -\beta_{2} = \dots = -\beta_{m} = 0 \\
\implies s = \sum_{i=1}^{n} \alpha_{i}v_{i} = 0 \\
\implies \boxed{sp(S_{1}) \cap sp(S_{2}) = \Set{ 0 }} & (4) \\
(3) \land (4) \implies sp(S_{1}) + sp(S_{2}) = sp(S_{1}) \oplus sp(S_{2}) \\
\implies \boxed{sp(S_{1} \cup S_{2}) = sp(S_{1}) \oplus sp(S_{2})} \\
}
$$
---
