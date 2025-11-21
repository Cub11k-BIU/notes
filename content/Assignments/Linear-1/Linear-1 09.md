---
{"publish":true,"created":"09/01/25, 22:01","modified":"2025-11-21T21:10:02.626+02:00","tags":["Academia","Assignment","Linear-1"],"cssclasses":""}
---

# 1a
$$
\displaylines{
T: \mathbb{R}^{3} \to \mathbb{R}^{3} \\
T(\begin{pmatrix}
x \\
y \\
z \\
\end{pmatrix}) = \begin{pmatrix}
x \\
x+y \\
x+y+z \\
\end{pmatrix} \\
\text{Determine whether } T \text{ is a linear transformation} \\
\text{If yes, find basis and dim of } Im(T) \text{ and } ker(T) \\
\\
\text{Solution:} \\
\text{Let } u, v \in \mathbb{R}^{3}, \alpha \in \mathbb{R} \\
T(u) = \begin{pmatrix}
u_{1} \\
u_{1}+u_{2} \\
u_{1}+u_{2}+u_{3} \\
\end{pmatrix}, \alpha T(v) = \alpha\begin{pmatrix}
v_{1} \\
v_{1}+v_{2} \\
v_{1}+v_{2}+v_{3} \\
\end{pmatrix} \\
T(u) + \alpha T(v) = 
T(u + \alpha v) = \begin{pmatrix}
u_{1}+\alpha v_{1} \\
(u_{1}+u_{2})+\alpha(v_{1}+v_{2}) \\
(u_{1}+u_{2}+u_{3})+\alpha(v_{1}+v_{2}+v_{3}) \\
\end{pmatrix} \\
\implies T \text{ is a linear transformation} \\
Im(T) = \Set{ u \in \mathbb{R}^{3} | \exists v \in \mathbb{R}^{3}: T(v) = u } = \Set{ \begin{pmatrix}
x \\
x+y \\
x+y+z \\
\end{pmatrix} | x, y, z \in \mathbb{R} } = \\
= \Set{ x\begin{pmatrix}
1 \\
1 \\
1 \\
\end{pmatrix} + y\begin{pmatrix}
0 \\
1 \\
1 \\
\end{pmatrix} + z\begin{pmatrix}
0 \\
0 \\
1 \\
\end{pmatrix} | x, y, z \in \mathbb{R} } = sp(\Set{ \begin{pmatrix}
1 \\
1 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
0 \\
1 \\
\end{pmatrix} }) \\
\Set{ \begin{pmatrix}
1 \\
1 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
0 \\
1 \\
\end{pmatrix} } \text{ is a linear independence} \\
\implies \boxed{\Set{ \begin{pmatrix}
1 \\
1 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
0 \\
1 \\
\end{pmatrix} } \text{ is a basis of } Im(T) \text{ and } dim(Im(T)) = 3} \\
dim(Im(T)) + dim(ker(T)) = dim(\mathbb{R}^{3}) = 3 \implies dim(ker(T)) = 0 \\
\implies \boxed{\emptyset \text{ is a basis of } ker(T) \text{ and } dim(ker(T)) = 0} \\
}
$$
# 1b
$$
\displaylines{
T: \mathbb{R}_{2}[x] \to \mathbb{R}_{2} \\
T(P) = \begin{pmatrix}
P(0) \\
P'(0) \\
\end{pmatrix} \\
\text{Determine whether } T \text{ is a linear transformation} \\
\text{If yes, find basis and dim of } Im(T) \text{ and } ker(T) \\
\\
\text{Solution:} \\
P \in \mathbb{R}_{2}[x] \implies P(x) = a + bx + cx^{2} \\
P'(x) = b + 2cx \\
\implies P(0) = a, P'(0) = b \\
\text{Let } p_{1}, p_{2} \in \mathbb{R}_{2}[x], \alpha \in \mathbb{R} \\
T(p_{1}+\alpha p_{2}) = \begin{pmatrix}
(p_{1}+\alpha p_{2})(0) \\
(p_{1}+\alpha p_{2})'(0) \\
\end{pmatrix} = \begin{pmatrix}
p_{1}(0)+\alpha p_{2}(0) \\
p_{1}'(0)+\alpha p_{2}'(0) \\
\end{pmatrix} = \begin{pmatrix}
a_{1}+\alpha a_{2} \\
b_{1}+\alpha b_{2} \\
\end{pmatrix} = T(p_{1}) + \alpha T(p_{2}) \\
\implies T \text{ is a linear transformation} \\
Im(T) = \Set{ u \in \mathbb{R}^{2} | \exists P \in \mathbb{R}_{2}[x]: T(P) = u } = \Set{ \begin{pmatrix}
a \\
b \\
\end{pmatrix} | a, b \in \mathbb{R} } = \mathbb{R}^{2} \\
= sp(\Set{ \begin{pmatrix}
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
\end{pmatrix} }) \\
\Set{ \begin{pmatrix}
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
\end{pmatrix} } \text{ is a linear independence} \\
\implies \boxed{ \Set{ \begin{pmatrix}
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
\end{pmatrix} } \text{ is a basis of } Im(T) \text{ and } dim(Im(T)) = 2 } \\
ker(T) = \Set{ v \in \mathbb{R}_{2}[x] | T(v) = 0 } = \Set{ a+bx+cx^{2} | \left\{\begin{array}{}
a = 0 \\
b = 0 \\
a, b, c \in \mathbb{R} \\
\end{array}\right. } = \Set{ cx^{2} | c \in \mathbb{R} } \\
= sp(\Set{ x^{2} }) \\
\Set{ x^{2} } \text{ is a linear independence} \\
\implies \boxed{\Set{ x^{2} } \text{ is a basis of } ker(T) \text{ and } dim(ker(T)) = 1} \\
}
$$
# 1c
$$
\displaylines{
S = \Set{ \begin{pmatrix}
a & b \\
0 & c \\
\end{pmatrix} \in \mathbb{R}^{2 \times 2}} \\
B = \begin{pmatrix}
1 & 1 \\
1 & 1 \\
\end{pmatrix} \\
T: S \to \mathbb{R}^{2 \times 2} \\
T(A) = AB \\
\text{Determine whether } T \text{ is a linear transformation} \\
\text{If yes, find basis and dim of } Im(T) \text{ and } ker(T) \\
\\
\text{Solution:} \\
T(A) = AB = \begin{pmatrix}
a & b \\
0 & c \\
\end{pmatrix} \begin{pmatrix}
1 & 1 \\
1 & 1 \\
\end{pmatrix} = \begin{pmatrix}
a+b & a+b \\
c & c \\
\end{pmatrix} \\
\text{Let } A_{1}, A_{2} \in S, \alpha \in \mathbb{R} \\
T(A_{1}+\alpha A_{2}) = (A_{1}+\alpha A_{2})B = A_{1}B + \alpha A_{2}B = T(A_{1}) + \alpha T(A_{2}) \\
\implies T \text{ is a linear transformation} \\
Im(T) = \Set{ C \in \mathbb{R}^{2 \times 2} | \exists A \in S: T(A) = C } = \Set{ \begin{pmatrix}
a+b & a+b \\
c & c \\
\end{pmatrix} | a, b, c \in \mathbb{R} } = \\
= \Set{ (a+b)\begin{pmatrix}
1 & 1 \\
0 & 0 \\
\end{pmatrix} + c\begin{pmatrix}
0 & 0 \\
1 & 1 \\
\end{pmatrix} | a, b, c \in \mathbb{R} } = sp(\Set{ \begin{pmatrix}
1 & 1 \\
0 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 0 \\
1 & 1 \\
\end{pmatrix} }) \\
\Set{ \begin{pmatrix}
1 & 1 \\
0 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 0 \\
1 & 1 \\
\end{pmatrix} } \text{ is a linear independence} \\
\implies \boxed{\Set{ \begin{pmatrix}
1 & 1 \\
0 & 0 \\
\end{pmatrix}, \begin{pmatrix}
0 & 0 \\
1 & 1 \\
\end{pmatrix} } \text{ is a basis of } Im(T) \text{ and } dim(Im(T)) = 2} \\
ker(T) = \Set{ A \in S | T(A) = 0 } = \Set{ \begin{pmatrix}
a & b \\
0 & c \\
\end{pmatrix} | \left\{\begin{array}{}
a+b = 0 \\
c = 0 \\
a, b, c \in \mathbb{R} \\
\end{array}\right. } = \Set{ \begin{pmatrix}
a & -a \\
0 & 0 \\
\end{pmatrix} | a \in \mathbb{R} } = \\
\Set{ a\begin{pmatrix}
1 & -1 \\
0 & 0 \\
\end{pmatrix} | a \in \mathbb{R} } = sp(\Set{ \begin{pmatrix}
1 & -1 \\
0 & 0 \\
\end{pmatrix} }) \\
\Set{ \begin{pmatrix}
1 & -1 \\
0 & 0 \\
\end{pmatrix} } \text{ is a linear independence} \\
\implies \boxed{\Set{ \begin{pmatrix}
1 & -1 \\
0 & 0 \\
\end{pmatrix} } \text{ is a basis of } ker(T) \text{ and } dim(ker(T)) = 1} \\
}
$$
---

# 2a
$$
\displaylines{
\text{Prove or disprove: } \exists \text{ a non-invertible linear transformation } T: \mathbb{R}^{3} \to \mathbb{R}^{3} \text{ such that:} \\
T = T^{3} \neq T^{2} \\
\\
\text{Proof:} \\
A = \begin{pmatrix}
0 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & -1 \\
\end{pmatrix} \\
\text{Let } T(v) = Av \\
T^{2}(v) = T(T(v)) = AAv = A^{2}v \\
T^{3}(v) = T(T(T(v))) = AAAv = A^{3}v \\
A^{2} = \begin{pmatrix}
0 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1 \\
\end{pmatrix} \neq A \implies T \neq T^{2} \\
A^{3} = \begin{pmatrix}
0 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & -1 \\
\end{pmatrix} = A \implies T = T^{3} \\
}
$$
# 2b
$$
\displaylines{
\text{Prove or disprove: } \exists \text{ different non-invertible linear transformations } S, T: \mathbb{R}^{3} \to \mathbb{R}^{3} \\
\text{such that: } ST - TS = 0 \\
\\
\text{Proof:} \\
\text{Let } A = \begin{pmatrix}
0 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & -1 \\
\end{pmatrix}, B = \begin{pmatrix}
0 & 0 & 0 \\
0 & -1 & 0 \\
0 & 0 & 1 \\
\end{pmatrix} \\
\text{Let } T(v) = Av, S(v) = Bv \\
A \neq B \implies T \neq S \\
AB = BA = \begin{pmatrix}
0 & 0 & 0 \\
0 & -1 & 0 \\
0 & 0 & -1 \\
\end{pmatrix} \\
\implies \forall v \in \mathbb{R}^{3}: (ST - TS)(v) = BAv - ABv = (BA-AB)v = 0 \\
\implies ST - TS = 0 \\
}
$$
---

# 3
$$
\displaylines{
\text{Let } W = \mathbb{R}^{2 \times 2}, V = \mathbb{R}_{2}[x] \\
\text{Determine whether exists a linear transformation } T: V \to W \\
}
$$
## 3a
$$
\displaylines{
\text{Such that: } T(x^{2}+1) = \begin{pmatrix}
0 & 2 \\
0 & -5 \\
\end{pmatrix}, T(x-1) = \begin{pmatrix}
1 & 0 \\
0 & -2 \\
\end{pmatrix}, T(x+1) = \begin{pmatrix}
1 & 2 \\
3 & 4 \\
\end{pmatrix} \\
\\
\text{Solution:} \\
\text{Let } p(x) \in V \\
p(x) = a+bx+cx^{2} = \begin{pmatrix}
a \\
b \\
c \\
\end{pmatrix} \\
x^{2}+1 = \begin{pmatrix}
1 \\
0 \\
1 \\
\end{pmatrix}, x-1 = \begin{pmatrix}
-1 \\
1 \\
0 \\
\end{pmatrix}, x+1 = \begin{pmatrix}
1 \\
1 \\
0 \\
\end{pmatrix} \\
\Set{ \begin{pmatrix}
1 \\
0 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
-1 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
1 \\
0 \\
\end{pmatrix} } \text{ is a linear independence of size } 3 \\
\implies \Set{ x^{2}+1, x-1, x+1 } \text{ is a linear independence of size } 3 \\
dim(\mathbb{R}_{2}[x]) = 3 \implies \Set{ x^{2}+1, x-1, x+1 } \text{ is a basis of } \mathbb{R}_{2}[x] \\
\implies \boxed{\text{By the "definition theorem" there exists such unique linear transformation } T} \\
}
$$
## 3b
$$
\displaylines{
\text{Such that: } T(2x) = \begin{pmatrix}
1 & 2 \\
-3 & -5 \\
\end{pmatrix}, T(x-1) = \begin{pmatrix}
1 & 0 \\
0 & -2 \\
\end{pmatrix}, T(x+1) = \begin{pmatrix}
1 & 2 \\
3 & 4 \\
\end{pmatrix} \\
\\
\text{Solution:} \\
(x-1) + (x+1) = 2x \\
T(x-1) + T(x+1) = \begin{pmatrix}
2 & 2 \\
3 & 2 \\
\end{pmatrix} \neq T(2x) \\
\implies \boxed{T \text{ is not a linear tranformation}} \\
}
$$
## 3c
$$
\displaylines{
\text{Such that: } T(2x) = \begin{pmatrix}
2 & 2 \\
3 & 2 \\
\end{pmatrix}, T(x-1) = \begin{pmatrix}
1 & 0 \\
0 & -2 \\
\end{pmatrix}, T(x+1) = \begin{pmatrix}
1 & 2 \\
3 & 4 \\
\end{pmatrix} \\
\\
\text{Solution:} \\
(x-1) + (x+1) = 2x \\
T(x-1) + T(x+1) = T(2x) \\
x^{2} \text{ does not depend on } x-1, x+1, 2x \\
\implies T(x^{2}) \text{ does not depend on } T(x-1), T(x+1), T(2x) \\
\text{Let } T(x^{2}) = 0 \\
\Set{ x-1, x+1, x^{2} } \text{ is a basis of } \mathbb{R}_{2}[x] \\
\implies \boxed{\text{By the "definition theorem" there exists such linear transformation}} \\
}
$$
---

# 4
$$
\displaylines{
\text{Let } V, W \text{ be vector spaces over } \mathbb{F} \\
dim(V) \leq dim(W) \\
\text{Prove: } \exists \text{ a linear transformation } T: V \to W \text{ that is injective} \\
\\
\text{Proof:} \\
\text{Let } B_{V} = \Set{ v_{1}, v_{2}, \dots, v_{n} } \text{ be a basis of } V \\
\text{Let } B_{W} = \Set{ w_{1}, w_{2}, \dots, w_{m} } \text{ be a basis of } W \\
n \leq m \\
\text{Let } \forall i \in [1, n]: T(v_{i}) = w_{i} \\
\implies \text{ By the "definition theorem": } Im(T) = sp(\Set{ w_{1}, w_{2}, \dots, w_{n} }) \\
\Set{ w_{1}, w_{2}, \dots, w_{n} } \subseteq B_{W} \implies \Set{ w_{1}, w_{2}, \dots, w_{n} } \text{ is a linear independence} \\
T(v) = T\left( \sum_{i=1}^{n} \alpha_{i}v_{i} \right) = \sum_{i=1}^{n} \alpha_{i}T(v_{i}) = \sum_{i=1}^{n} \alpha_{i}w_{i} - \text{linear combination of } \Set{ w_{1}, w_{2}, \dots, w_{n} } \\
T(v) = 0 \implies \sum_{i=1}^{n} \alpha_{i}w_{i} = 0 \implies \alpha_{1} = \alpha_{2} = \dots = \alpha_{n} = 0 \\
\implies v = \sum_{i=1}^{n} \alpha_{i}v_{i} = 0 \\
\implies ker(T) = \Set{ 0 } \implies \boxed{T \text{ is injective}} \\
}
$$
---

# 5
$$
\displaylines{
\text{Let } V, W \text{ be vector spaces over } \mathbb{F} \\
dim(V) \geq dim(W) \\
\text{Prove: } \exists \text{ a linear transformation } T: V \to W \text{ that is surjective} \\
\\
\text{Proof:} \\
\text{Let } B_{V} = \Set{ v_{1}, v_{2}, \dots, v_{n} } \text{ be a basis of } V \\
\text{Let } B_{W} = \Set{ w_{1}, w_{2}, \dots, w_{m} } \text{ be a basis of } W \\
n \geq m \\
\text{Let } \forall i \in [1, m]: T(v_{i}) = w_{i} \\
\text{Let } \forall i \in [m+1, n]: T(v_{i}) = 0 \\
Im(T) = sp(\Set{ T(v_{1}), T(v_{2}), \dots, T(v_{n}) }) = sp(\Set{ w_{1}, w_{2}, \dots, w_{m}, 0, \dots, 0 }) \\
= sp(\Set{ w_{1}, w_{2}, \dots, w_{m} }) = W \\
Im(T) = W \implies \boxed{T \text{ is surjective}} \\
}
$$
---

# 6
$$
\displaylines{
\text{Let } V, W, U \text{ be vector spaces over } \mathbb{F} \\
S, R: V \to W, T: W \to U \text{ are linear transformations} \\
\text{Prove: } T \circ (S+R) = T \circ S + T \circ R \\
\\
\text{Proof:} \\
\text{Let } v \in V \\
(T \circ (S+R))(v) = T((S+R)(v)) = T(S(v)+R(v)) \\
S(v), R(v) \in W, \forall w_{1}, w_{2} \in W: T(w_{1}+w_{2}) = T(w_{1})+T(w_{2}) \\
\implies T(S(v)+R(v)) = T(S(v))+T(R(v)) = (T \circ S)(v) + (T \circ R)(v) \\
\implies \forall v \in V: (T \circ (S+R))(v) = (T \circ S)(v) + (T \circ R)(v) \\
\implies \boxed{T \circ (S+R) = T \circ S + T \circ R} \\
}
$$
---
