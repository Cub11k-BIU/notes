---
{"publish":true,"created":"11/12/24, 14:12","modified":"2025-11-21T21:10:02.566+02:00","tags":["Academia","Assignment","Linear-1"],"cssclasses":""}
---

# 1
$$
\displaylines{
U = \Set{ \begin{pmatrix}
b \\
-c \\
c \\
\end{pmatrix} | b, c \in \mathbb{R}}, W = \Set{ \begin{pmatrix}
a \\
2a \\
0 \\
\end{pmatrix} | a \in \mathbb{R}} \\
}
$$
## 1a
$$
\displaylines{
\text{Prove: } U, W \text{ are vector spaces over } \mathbb{R} \\
\\
\text{Proof:} \\
1. \quad \text{Let } b = 0, c = 0 \implies \begin{pmatrix}
b \\
-c \\
c \\
\end{pmatrix} = \begin{pmatrix}
0 \\
0 \\
0 \\
\end{pmatrix} \implies 0 \in U \\
\text{Let } a = 0 \implies \begin{pmatrix}
a \\
2a \\
0 \\
\end{pmatrix} = \begin{pmatrix}
0 \\
0 \\
0 \\
\end{pmatrix} \implies 0 \in W \\
2. \quad \text{Let } u_{1}, u_{2} \in U, w_{1}, w_{2} \in W, \alpha, \beta \in \mathbb{R} \\
u_{1} + \alpha u_{2} = \begin{pmatrix}
b_{1} + \alpha b_{2} \\
-c_{1} - \alpha c_{2} \\
c_{1} + \alpha c_{2} \\
\end{pmatrix} \overset{ -c_{1}-\alpha c_{2} = -(c_{1}+\alpha c_{2}) }{ \implies } u_{1} + \alpha u_{2} \in U \\
\implies \boxed{U \text{ is a vector space}} \\
w_{1} + \beta w_{2} = \begin{pmatrix}
a_{1} + \beta a_{2} \\
2a_{1} + \beta 2a_{2} \\
0 + \beta \cdot 0 \\
\end{pmatrix} \overset{ 2a_{1} + \beta 2a_{2} = 2(a_{1} + \beta a_{2}) }{ \implies } w_{1} + \beta w_{2} \in W \\
\implies \boxed{W \text{ is a vector space}} \\
}
$$
## 1b
$$
\displaylines{
\text{Prove: } U \oplus W = \mathbb{R}^{3} \\
\\
\text{Proof: } \\
U + W = \Set{ \begin{pmatrix}
b \\
-c \\
c \\
\end{pmatrix} + \begin{pmatrix}
a \\
2a \\
0 \\
\end{pmatrix} | a, b, c \in \mathbb{R}} = \Set{ \begin{pmatrix}
b + a \\
-c + 2a \\
c \\
\end{pmatrix} | a, b, c \in \mathbb{R}} \\
\text{Let } a, b, c \in \mathbb{R}, x, y, z \in \mathbb{R} \\
\begin{pmatrix}
b + a \\
-c + 2a \\
c \\
\end{pmatrix} = \begin{pmatrix}
x \\
y \\
z \\
\end{pmatrix} \iff \left\{\begin{array}{}
a + b + 0c = x \\
2a + 0b - c = y \\
0a + 0b + c = z \\
\end{array}\right. \\
\left(\begin{array}{ccc|c}
1 & 1 & 0 & x \\
2 & 0 & -1 & y \\
0 & 0 & 1 & z \\
\end{array}\right) \to \left(\begin{array}{ccc|c}
1 & 1 & 0 & x \\
0 & -2 & -1 & y-2x \\
0 & 0 & 1 & z \\
\end{array}\right) \to \left(\begin{array}{ccc|c}
1 & 1 & 0 & x \\
0 & -2 & 0 & y-2x+z \\
0 & 0 & 1 & z \\
\end{array}\right) \\
\to \left(\begin{array}{ccc|c}
1 & 0 & 0 & \frac{y+z}{2} \\
0 & 1 & 0 & \frac{2x-y-z}{2} \\
0 & 0 & 1 & z \\
\end{array}\right) \implies \left\{\begin{array}{}
a = \frac{y+z}{2} \\
b = \frac{2x-y-z}{2} \\
c = z \\
\end{array}\right. \\
\implies \forall v \in \mathbb{R}^{3}: \exists u \in U, w \in W: u + w = v \implies \boxed{U + W = \mathbb{R}^{3}} \quad (1) \\
\begin{pmatrix}
b \\
-c \\
c \\
\end{pmatrix} = \begin{pmatrix}
a \\
2a \\
0 \\
\end{pmatrix} \iff \left\{\begin{array}{}
c = 0 \\
-c = 2a \\
b = a \\
\end{array}\right. \iff \left\{\begin{array}{}
a = 0 \\
b = 0 \\
c = 0 \\
\end{array}\right. \iff \boxed{U \cap W = \Set{ 0 }} \quad (2) \\
(1) \text{ and } (2) \implies \boxed{U \oplus W = \mathbb{R}^{3}} \\
}
$$
---

# 2
$$
\displaylines{
V \text{ is a vector space over } \mathbb{F} \\
U, W - \text{ vector subspaces of } V \\
U \oplus W = V \\
\text{Prove or disprove: } U \cup W = V \\
\\
\text{Disproof:} \\
\text{Let } V = \mathbb{R}^{2} \\
U = \Set{ \begin{pmatrix}
a \\
0 \\
\end{pmatrix} | a \in \mathbb{R} }, W = \Set{ \begin{pmatrix}
0 \\
b \\
\end{pmatrix} | b \in \mathbb{R} } \\
U \oplus W = V \\
U \cup W = \Set{ \begin{pmatrix}
a \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
b \\
\end{pmatrix} | a, b \in \mathbb{R}} \\
\begin{pmatrix}
1 \\
1 \\
\end{pmatrix} \not\in U \cup W \implies \boxed{U \cup W \neq V} \\ 
}
$$
---
# 3
$$
\displaylines{
V \text{ is a vector space over } \mathbb{F} \\
U, W - \text{ vector subspaces of } V \\
\text{Prove or disprove: } \forall V : \exists U, W : U \oplus W = V \\
\\
\text{Proof:} \\
\text{Let } V \text{ be a vector space over } \mathbb{F} \\
V \text{ is also a vector subspace of } V \\
\Set{ 0 } \text{ is also a vector subspace of } V \\
\text{Then } \boxed{\forall V : \exists U = V, W = \Set{ 0 } : U \oplus W = V} \\
}
$$
---

# 4a
$$
\displaylines{
B_{1} = \Set{ x^{2} + x + 1, x^{2} - 2x + 1 } \\
x \overset{ ? }{ \in } sp(B_{1}) \\
1 \cdot (x^{2} + x + 1) + (-1) \cdot (x^{2} - 2x + 1) = 3x \\
\alpha (x^{2} + x + 1) + \beta (x^{2} - 2x + 1) = x \implies \left\{\begin{array}{}
\alpha = \frac{1}{3} \\
\beta = -\frac{1}{3} \\
\end{array}\right. \\
\implies \boxed{x \in sp(B_{1})} \\
}
$$
# 4b
$$
\displaylines{
B_{2} = \Set{ \begin{pmatrix}
1 \\
1 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
2 \\
1 \\
\end{pmatrix} } \\
\begin{pmatrix}
0 \\
1 \\
2 \\
\end{pmatrix} \overset{ ? }{ \in } sp(B_{2}) \\
\alpha \begin{pmatrix}
1 \\
1 \\
1 \\
\end{pmatrix} + \beta \begin{pmatrix}
1 \\
2 \\
1 \\
\end{pmatrix} = \begin{pmatrix}
0 \\
1 \\
2 \\
\end{pmatrix} \iff \left\{\begin{array}{}
\alpha + \beta = 0 \\
\alpha + 2\beta = 1 \\
\alpha + \beta = 2 \\
\end{array}\right. \iff \emptyset \\
\implies \boxed{\begin{pmatrix}
0 \\
1 \\
2 \\
\end{pmatrix} \not\in sp(B_{2})} \\
}
$$
# 4c
$$
\displaylines{
B_{3} = \Set{ \begin{pmatrix}
1 \\
0 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
2 \\
1 \\
\end{pmatrix} } \\
\begin{pmatrix}
-1 \\
1 \\
-1 \\
\end{pmatrix} \overset{ ? }{ \in } sp(B_{3}) \\
\alpha \begin{pmatrix}
1 \\
0 \\
1 \\
\end{pmatrix} + \beta \begin{pmatrix}
1 \\
2 \\
1 \\
\end{pmatrix} = \begin{pmatrix}
-1 \\
1 \\
-1 \\
\end{pmatrix} \iff \left\{\begin{array}{}
\alpha + \beta = -1 \\
2\beta = 1 \\
\alpha + \beta = -1
\end{array}\right. \implies \left\{\begin{array}{}
\alpha = -\frac{3}{2} \\
\beta = \frac{1}{2} \\
\end{array}\right. \\
\implies \boxed{\begin{pmatrix}
-1 \\
1 \\
-1 \\
\end{pmatrix} \in sp(B_{3})} \\
}
$$
# 4d
$$
\displaylines{
B_{4} = \Set{ \begin{pmatrix}
1 & 2 \\
3 & 4 \\
\end{pmatrix}, \begin{pmatrix}
2 & 3 \\
4 & 1 \\
\end{pmatrix}, \begin{pmatrix}
3 & 4 \\
1 & 2 \\
\end{pmatrix}, \begin{pmatrix}
4 & 1 \\
2 & 3 \\
\end{pmatrix} } \\
\begin{pmatrix}
30 & 24 \\
22 & 24 \\
\end{pmatrix} \overset{ ? }{ \in } sp(B_{4}) \\
\alpha \begin{pmatrix}
1 & 2 \\
3 & 4 \\
\end{pmatrix} + \beta \begin{pmatrix}
2 & 3 \\
4 & 1 \\
\end{pmatrix} + \gamma \begin{pmatrix}
3 & 4 \\
1 & 2 \\
\end{pmatrix} + \delta \begin{pmatrix}
4 & 1 \\
2 & 3 \\
\end{pmatrix} = \begin{pmatrix}
30 & 24 \\
22 & 24 \\
\end{pmatrix} \\
\iff \left\{\begin{array}{}
\alpha + 2\beta + 3\gamma + 4\delta = 30 \\
2\alpha + 3\beta + 4\gamma + \delta = 24 \\
3\alpha + 4\beta + \gamma + 2\delta = 22 \\
4\alpha + \beta + 2\gamma + 3\delta = 24 \\
\end{array}\right. \\
\left(\begin{array}{cccc|c}
1 & 2 & 3 & 4 & 30 \\
2 & 3 & 4 & 1 & 24 \\
3 & 4 & 1 & 2 & 22 \\
4 & 1 & 2 & 3 & 24 \\
\end{array}\right) \to \left(\begin{array}{cccc|c}
1 & 2 & 3 & 4 & 30 \\
0 & 1 & 2 & 7 & 36 \\
0 & 2 & 8 & 10 & 68 \\
0 & 7 & 10 & 13 & 96 \\
\end{array}\right)
\to \left(\begin{array}{cccc|c}
1 & 2 & 3 & 4 & 30 \\
0 & 1 & 2 & 7 & 36 \\
0 & 0 & 4 & -4 & -4 \\
0 & 0 & 4 & 36 & 156 \\
\end{array}\right) \\
\to \left(\begin{array}{cccc|c}
1 & 2 & 3 & 4 & 30 \\
0 & 1 & 2 & 7 & 36 \\
0 & 0 & 1 & -1 & -1 \\
0 & 0 & 0 & 40 & 160 \\
\end{array}\right) \to \left(\begin{array}{cccc|c}
1 & 2 & 3 & 4 & 30 \\
0 & 1 & 2 & 7 & 36 \\
0 & 0 & 1 & -1 & -1 \\
0 & 0 & 0 & 1 & 4 \\
\end{array}\right) \to \left(\begin{array}{cccc|c}
1 & 2 & 3 & 0 & 14 \\
0 & 1 & 2 & 0 & 8 \\
0 & 0 & 1 & 0 & 3 \\
0 & 0 & 0 & 1 & 4 \\
\end{array}\right) \\
\to \left(\begin{array}{cccc|c}
1 & 2 & 0 & 0 & 5 \\
0 & 1 & 0 & 0 & 2 \\
0 & 0 & 1 & 0 & 3 \\
0 & 0 & 0 & 1 & 4 \\
\end{array}\right) \to \left(\begin{array}{cccc|c}
1 & 0 & 0 & 0 & 1 \\
0 & 1 & 0 & 0 & 2 \\
0 & 0 & 1 & 0 & 3 \\
0 & 0 & 0 & 1 & 4 \\
\end{array}\right) \\
\implies \left\{\begin{array}{}
\alpha = 1 \\
\beta = 2 \\
\gamma = 3 \\
\delta = 4 \\
\end{array}\right. \implies \boxed{\begin{pmatrix}
30 & 24 \\
22 & 24 \\
\end{pmatrix} \in sp(B_{4})} \\
}
$$
---

# 5a
$$
\displaylines{
B_{2} = \Set{ \begin{pmatrix}
1 \\
1 \\
2 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
2 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
2 \\
1 \\
1 \\
\end{pmatrix} } \\
\begin{pmatrix}
1 \\
1 \\
1 \\
\end{pmatrix} \overset{ ? }{ \in } sp(B_{2}) \\
\alpha \begin{pmatrix}
1 \\
1 \\
2 \\
\end{pmatrix} + \beta \begin{pmatrix}
1 \\
2 \\
1 \\
\end{pmatrix} + \gamma \begin{pmatrix}
2 \\
1 \\
1 \\
\end{pmatrix} = \begin{pmatrix}
1 \\
1 \\
1 \\
\end{pmatrix} \\
\left(\begin{array}{ccc|c}
1 & 1 & 2 & 1 \\
1 & 2 & 1 & 1 \\
2 & 1 & 1 & 1 \\
\end{array}\right) \to \left(\begin{array}{ccc|c}
1 & 1 & 2 & 1 \\
0 & 1 & -1 & 0 \\
0 & 1 & 3 & 1 \\
\end{array}\right) \to \left(\begin{array}{ccc|c}
1 & 1 & 2 & 1 \\
0 & 1 & -1 & 0 \\
0 & 0 & 4 & 1 \\
\end{array}\right) \\
\implies \text{System has exactly one solution} \\
\begin{pmatrix}
1 \\
1 \\
2 \\
\end{pmatrix} + \begin{pmatrix}
1 \\
2 \\
1 \\
\end{pmatrix} + \begin{pmatrix}
2 \\
1 \\
1 \\
\end{pmatrix} = \begin{pmatrix}
4 \\
4 \\
4 \\
\end{pmatrix} \\
\implies \frac{1}{4} \cdot \left(\begin{pmatrix}
1 \\
1 \\
2 \\
\end{pmatrix} + \begin{pmatrix}
1 \\
2 \\
1 \\
\end{pmatrix} + \begin{pmatrix}
2 \\
1 \\
1 \\
\end{pmatrix} \right) = \begin{pmatrix}
1 \\
1 \\
1 \\
\end{pmatrix} \\
\implies \left\{\begin{array}{}
\alpha = \frac{1}{4} \\
\beta = \frac{1}{4} \\
\gamma = \frac{1}{4} \\
\end{array}\right. \implies \boxed{\begin{pmatrix}
1 \\
1 \\
1 \\
\end{pmatrix} \in sp(B_{2})} \\
}
$$
# 5b
$$
\displaylines{
\left\{\begin{array}{}
x + y + 2z = 1 \\
x + 2y + z = 1 \\
2x + y + z = 1 \\
\end{array}\right. \iff x \begin{pmatrix}
1 \\
1 \\
2 \\
\end{pmatrix} + y \begin{pmatrix}
1 \\
2 \\
1 \\
\end{pmatrix} + z \begin{pmatrix}
2 \\
1 \\
1 \\
\end{pmatrix} = \begin{pmatrix}
1 \\
1 \\
1 \\
\end{pmatrix} \\
\implies \boxed{\left\{\begin{array}{}
x = \frac{1}{4} \\
y = \frac{1}{4} \\
z = \frac{1}{4} \\
\end{array}\right.} \\
}
$$
---

# 6
$$
\displaylines{
V \text{ is a vector space over } \mathbb{F} \\
\text{Let } u, v, w \in V, u \neq 0 \\
sp(\Set{ u }) \overset{ ? }{ = } sp(\Set{ u, v }) \cap sp(\Set{ u, w }) \\
\\
sp(\Set{ u, v }) = \Set{ \alpha u + \beta v | \alpha, \beta \in \mathbb{F} } = \Set{ \alpha u + \beta v + 0 w | \alpha, \beta \in \mathbb{F} } \\
sp(\Set{ u, w }) = \Set{ \gamma u + \delta w | \gamma, \delta \in \mathbb{F} } = \Set{ \gamma u + \delta w + 0 v | \alpha, \beta \in \mathbb{F} } \\
\text{Let } v \neq w \\
\implies sp(\Set{ u, v }) \cap sp(\Set{ u, w }) = \Set{ \alpha_{1} u + \alpha_{2} v + \alpha_{3} w | \begin{array}{}
\alpha_{1}, \alpha_{2}, \alpha_{3} \in \mathbb{F} \\
\left\{\begin{array}{}
\alpha_{1} = \alpha = \gamma \\
\alpha_{2} = \beta = 0 \\
\alpha_{3} = \delta = 0 \\
\end{array}\right.
\end{array} } = \\
= \Set{ \alpha_{1}u | \alpha_{1} \in \mathbb{F} } = sp(\Set{ u }) \\
\text{Let } v = w \\
sp(\Set{ u, v }) \cap sp(\Set{ u, w }) = sp(\Set{ u, v }) \cap sp(\Set{ u, v }) = sp(\Set{ u, v }) \\
\implies \boxed{\begin{cases}
sp(\Set{ u }) = sp(\Set{ u, v }) \cap sp(\Set{ u, w }) & v \neq w \lor u = v = w \\
sp(\Set{ u }) \neq sp(\Set{ u, v }) \cap sp(\Set{ u, w }) & u \neq v = w \\
\end{cases}} \\
}
$$
---

# 7
$$
\displaylines{
V \text{ is a vector space over } \mathbb{F} \\
S_{1}, S_{2} \subseteq V \\
\text{Prove: } S_{1} \subseteq S_{2} \implies sp(S_{1}) \subseteq sp(S_{2}) \\
\\
\text{Proof:} \\
\text{Let } v_{1} \in sp(S_{1}) \\
\implies \exists \Set{ \alpha_{1}, \dots, \alpha_{n} } \subseteq \mathbb{F}, \Set{ s_{1}, \dots, s_{n} } \subseteq S_{1}: v_{1} = \sum_{i=1}^{n} \alpha_{i}s_{i} \\
\Set{ s_{1}, \dots, s_{n} } \subseteq S_{1} \subseteq S_{2} \implies \Set{ s_{1}, \dots, s_{n} }  \subseteq S_{2} \\
\implies \exists \Set{ \alpha_{1}, \dots, \alpha_{n} } \subseteq \mathbb{F}, \Set{ s_{1}, \dots, s_{n} } \subseteq S_{2}: v_{1} = \sum_{i=1}^{n} \alpha_{i}s_{i} \iff v_{1} \in sp(S_{2}) \\
\implies \boxed{sp(S_{1}) \subseteq sp(S_{2})} \\
}
$$
---

# 8
$$
\displaylines{
V \text{ is a vector space over } \mathbb{F} \\
A, B \subseteq V \\
W \subseteq V - \text{ vector subspace of } V \\
}
$$
## 8a
$$
\displaylines{
\text{Prove or disprove: } sp(A \cup W \cup B) = sp(A) \cup sp(W) \cup sp(B) \\
\\
\text{Disproof:} \\
V = \mathbb{R}^{2} \\
A = \Set{ \begin{pmatrix}
1 \\
0 \\
\end{pmatrix} }, B = \Set{ \begin{pmatrix}
0 \\
1 \\
\end{pmatrix} }. W = \Set{ \begin{pmatrix}
0 \\
0 \\
\end{pmatrix} } \\
A \cup B \cup W = \Set{ \begin{pmatrix}
0 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
\end{pmatrix} } \implies sp(A \cup W \cup B) = \mathbb{R}^{2} \\
sp(A) = \Set{ \begin{pmatrix}
a \\
0 \\
\end{pmatrix} | a \in \mathbb{R}}, sp(B) = \Set{ \begin{pmatrix}
0 \\
b \\
\end{pmatrix} | b in \mathbb{R}}, sp(W) = \Set{ \begin{pmatrix}
0 \\
0 \\
\end{pmatrix} } \\
\implies sp(A) \cup sp(W) \cup sp(B) = \Set{ \begin{pmatrix}
a \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
b \\
\end{pmatrix}, \begin{pmatrix}
0 \\
0 \\
\end{pmatrix} | a, b \in \mathbb{R}} \\
\begin{pmatrix}
1 \\
1 \\
\end{pmatrix} \not\in sp(A) \cup sp(W) \cup sp(B) \\
\implies sp(A) \cup sp(W) \cup sp(B) \neq \mathbb{R}^{2} = sp(A \cup W \cup B) \\
\implies \boxed{sp(A \cup W \cup B) \neq sp(A) \cup sp(W) \cup sp(B)} \\
}
$$
## 8b
$$
\displaylines{
\text{Prove or disprove: } sp(A \cup W \cup B) = (sp(A) + sp(B)) \cup sp(W) \\
\\
\text{Disproof:} \\
V = \mathbb{R}^{3} \\
A = \Set{ \begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix} }, B = \Set{ \begin{pmatrix}
0 \\
1 \\
0 \\
\end{pmatrix} }, W = \Set{ \begin{pmatrix}
0 \\
0 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
0 \\
x \\
\end{pmatrix} | x \in \mathbb{R}} \\
A \cup W \cup B = \Set{ \begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
0 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
0 \\
x \\
\end{pmatrix} | x \in \mathbb{R}} \implies sp(A \cup W \cup B) = \mathbb{R}^{3} \\
sp(A) = \Set{ \begin{pmatrix}
a \\
0 \\
0 \\
\end{pmatrix} }, sp(B) = \Set{ \begin{pmatrix}
0 \\
b \\
0 \\
\end{pmatrix} | b \in \mathbb{R}} \implies sp(A) + sp(B) = \Set{ \begin{pmatrix}
a \\
b \\
0 \\
\end{pmatrix} | a, b \in \mathbb{R}} \\
sp(W) = \Set{ \begin{pmatrix}
0 \\
0 \\
x \\
\end{pmatrix} | x \in \mathbb{R}} \implies (sp(A) + sp(B)) \cup sp(W) = \Set{ \begin{pmatrix}
a \\
b \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
0 \\
x \\
\end{pmatrix} | a, b, x \in \mathbb{R}} \\
\begin{pmatrix}
1 \\
1 \\
1 \\
\end{pmatrix} \not\in (sp(A) + sp(B)) \cup sp(W) \\
\implies (sp(A) + sp(B)) \cup sp(W) \neq R^{3} = sp(A \cup W \cup B) \\
\implies \boxed{sp(A \cup W \cup B) \neq (sp(A) + sp(B)) \cup sp(W)}
}
$$
---
