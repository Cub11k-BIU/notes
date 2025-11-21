---
{"publish":true,"created":"22/01/25, 18:01","modified":"2025-11-21T21:10:02.637+02:00","tags":["Academia","Assignment","Linear-1"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Let } V = \mathbb{R}_{2}[x] \text{ over } \mathbb{R} \\
\text{Let } S \text{ be a standard basis of } V \\
\text{Let } B = \Set{ 1, 1+x, 1+x+x^{2} } \text{ basis of } V \\
}
$$
## 1a
$$
\displaylines{
\text{Find } [I]^{B}_{S} \\
\\
\text{Solution:} \\
[I]^{B}_{S} = \begin{pmatrix}
\overset{ \vert }{ \underset{ \vert }{ [1]_{S} } } & \overset{ \vert }{ \underset{ \vert }{ [1+x]_{S} } } & \overset{ \vert }{ \underset{ \vert }{ [1+x+x^{2}]_{S} } } \\
\end{pmatrix} \\
\implies \boxed{ [I]^{B}_{S} = \begin{pmatrix}
1 & 1 & 1 \\
0 & 1 & 1 \\
0 & 0 & 1 \\
\end{pmatrix} } \\
}
$$
## 1b
$$
\displaylines{
\text{Find } [v]_{B} \text{ for all } v \in V \\
\\
\text{Solution:} \\
[I]^{S}_{B} = ([I]^{B}_{S})^{-1} = \begin{pmatrix}
1 & 1 & 1 \\
0 & 1 & 1 \\
0 & 0 & 1 \\
\end{pmatrix}^{-1} \overset{ R_{1}-R_{2} }{ \underset{  R_{2}-R_{3} }{ = } } \begin{pmatrix}
1 & -1 & 0 \\
0 & 1 & -1 \\
0 & 0 & 1 \\
\end{pmatrix} \\
\implies [1]_{B} = \begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix}, [x]_{B} = \begin{pmatrix}
-1 \\
1 \\
0 \\
\end{pmatrix}, [x^{2}]_{B} = \begin{pmatrix}
0 \\
-1 \\
1 \\
\end{pmatrix} \\
\implies [v]_{B} = [a+bx+cx^{2}]_{B} = a[1]_{B} + b[x]_{B} + c[x^{2}]_{B} \\
\implies \boxed{ [v]_{B} = a\begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix} + b\begin{pmatrix}
-1 \\
1 \\
0 \\
\end{pmatrix} + c\begin{pmatrix}
0 \\
-1 \\
1 \\
\end{pmatrix} = \begin{pmatrix}
a-b \\
b-c \\
c \\
\end{pmatrix} } \\
}
$$
---

# 2
$$
\displaylines{
\text{Let } V \text{ be a vector space over } \mathbb{F} \\
\text{Let } B \text{ be a basis of } V \\
\text{Let } \Set{v_{1}, \dots, v_{n}} \subseteq V \\
\text{Prove: } \\
\Set{ v_{1}, \dots, v_{n} } \text{ is a linear independence} \iff \Set{ [v_{1}]_{B}, \dots, [v_{n}]B } \text{ is a linear independence} \\
\\
\text{Proof:} \\
\text{Let } \Set{ v_{1}, \dots, v_{n} } \text{ be a linear dependence} \\
\implies \exists \Set{ \alpha_{1}, \dots, \alpha_{n} } \neq \Set{ 0 }: \sum_{i=1}^{n} \alpha_{i}v_{i} = 0 \\
\sum_{i=1}^{n} \alpha_{i}v_{i} = 0 \implies \left[ \sum_{i=1}^{n} \alpha_{i}v_{i} \right]_{B} = 0 \implies \sum_{i=1}^{n} \alpha_{i}[v_{i}]_{B} = 0 \\
\implies \Set{ [v_{1}]_{B}, \dots, [v_{n}]_{B} } \text{ is a linear dependence} \\
\\
\text{Let } \Set{ [v_{1}]_{B}, \dots, [v_{n}]_{B} } \text{ be a linear dependence} \\
\implies \exists \Set{ \alpha_{1}, \alpha_{2}, \dots, \alpha_{n} } \neq \Set{ 0 }: \sum_{i=1}^{n} \alpha_{i}[v_{i}]_{B} = 0 \\
\sum_{i=1}^{n} \alpha_{i}[v_{i}]_{B} = 0 \implies \left[ \sum_{i=1}^{n} \alpha_{i}v_{i} \right]_{B} = 0 \implies \sum_{i=1}^{n} \alpha_{i}v_{i} = 0 \\
\implies \Set{ v_{1}, \dots, v_{n} } \text{ is a linear dependence} \\
\implies \boxed{ \Set{ v_{1}, \dots, v_{n} } \text{ is a linear dependence} \iff \Set{ [v_{1}]_{B}, \dots, [v_{n}]_{B} } \text{ is a linear dependence} } \\
\boxed{ \Set{ v_{1}, \dots, v_{n} } \text{ is a linear independence} \iff \Set{ [v_{1}]_{B}, \dots, [v_{n}]_{B} } \text{ is a linear independence} } \\
\\
\text{Another way to prove it:} \\
[\;]_{B} \text{ is an invertible linear transformation} \\
\implies \boxed{ \Set{ v_{1}, \dots, v_{n} } \text{ is linearly independent} \iff \Set{ [v_{1}]_{B}, \dots, [v_{n}]_{B} } \text{ is linearly independent} } \\
}
$$
---

# 3
$$
\displaylines{
\text{Let } V = \mathbb{R}^{3} \text{ over } \mathbb{R} \\
\text{Let } B = \Set{ \begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
1 \\
1 \\
\end{pmatrix} }, C = \Set{ \begin{pmatrix}
1 \\
0 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
1 \\
0 \\
\end{pmatrix} } \text{ be bases of } V \\
\text{Find } [I]^{B}_{C} \\
\\
\text{Solution:} \\
[I]^{B}_{C} = [I]^{S}_{C}[I]^{B}_{S} \\
[I]^{B}_{S} = \begin{pmatrix}
\overset{ \vert }{ \underset{ \vert }{ b_{1} } } & \overset{ \vert }{ \underset{ \vert }{ b_{2} } } & \overset{ \vert }{ \underset{ \vert }{ b_{3} } } \\
\end{pmatrix} = \begin{pmatrix}
1 & 1 & 1 \\
0 & 1 & 1 \\
0 & 0 & 1 \\
\end{pmatrix} \\
[I]^{C}_{S} = \begin{pmatrix}
1 & 0 & 1 \\
0 & 1 & 1 \\
1 & 0 & 0 \\
\end{pmatrix} \\
\left(\begin{array}{ccc|ccc}
1 & 0 & 1 & 1 & 0 & 0 \\
0 & 1 & 1 & 0 & 1 & 0 \\
1 & 0 & 0 & 0 & 0 & 1 \\
\end{array}\right) \to \left(\begin{array}{ccc|ccc}
1 & 0 & 1 & 1 & 0 & 0 \\
0 & 1 & 1 & 0 & 1 & 0 \\
0 & 0 & 1 & 1 & 0 & -1 \\
\end{array}\right) \to \left(\begin{array}{ccc|ccc}
1 & 0 & 0 & 0 & 0 & 1 \\
0 & 1 & 0 & -1 & 1 & 1 \\
0 & 0 & 1 & 1 & 0 & -1 \\
\end{array}\right) \\
[I]^{S}_{C} = ([I]^{C}_{S})^{-1} = \begin{pmatrix}
1 & 0 & 1 \\
0 & 1 & 1 \\
1 & 0 & 0 \\
\end{pmatrix}^{-1} = \begin{pmatrix}
0 & 0 & 1 \\
-1 & 1 & 1 \\
1 & 0 & -1 \\
\end{pmatrix} \\
\implies \boxed{ [I]^{B}_{C} = \begin{pmatrix}
0 & 0 & 1 \\
-1 & 1 & 1 \\
1 & 0 & -1 \\
\end{pmatrix} \begin{pmatrix}
1 & 1 & 1 \\
0 & 1 & 1 \\
0 & 0 & 1 \\
\end{pmatrix} = \begin{pmatrix}
0 & 0 & 1 \\
-1 & 0 & 1 \\
1 & 1 & 0 \\
\end{pmatrix} } \\
}
$$
---

# 4
$$
\displaylines{
\text{Let } V \text{ be a vector space} \\
\text{Let } B = \Set{ v_{1}, \dots, v_{n} } \text{ be a basis of } V \\
\text{Let } C = \Set{ w_{1}, \dots, w_{n} } \text{ be a basis of } V\text{ such that} \\
\forall i \in [1, n]: w_{i} = \sum_{k=1}^{i} v_{k} \\
\text{Find } [I]^{C}_{B} \\
\\
\text{Solution:} \\
[I]^{C}_{B} = \begin{pmatrix}
\overset{ \vert }{ \underset{ \vert }{ [I(w_{1})]_{B} } } & \dots &\overset{ \vert }{ \underset{ \vert }{ [I(w_{n})]_{B} } } \\
\end{pmatrix} \\
I(w_{1}) = I\left( \sum_{k=1}^{1} v_{k} \right) = I(v_{1}) = v_{1} \\
\implies [I(w_{1})]_{B} = [v_{1}]_{B} = e_{1} \\
I(w_{2}) = I\left( \sum_{k=1}^{2} v_{k} \right) = I(v_{1}+v_{2}) = v_{1}+v_{2} \\
\implies [I(w_{2})]_{B} = [v_{1}+v_{2}]_{B} = e_{1}+e_{2} \\
I(w_{i}) = I\left( \sum_{k=1}^{i} v_{k} \right) \implies [I(w_{i})]_{B} = \sum_{k=1}^{i} e_{k} \\
\implies \boxed{ [I]^{C}_{B} = \begin{pmatrix}
e_{1} & \sum_{k=1}^{2} e_{k} & \dots & \sum_{k=1}^{n} e_{k} \\
\end{pmatrix} = \begin{pmatrix}
1 & 1 & 1 & \dots & 1 \\
0 & 1 & 1 & \dots & 1 \\
0 & 0 & 1 & \dots & 1 \\
\vdots & \vdots & \ddots & \ddots & \vdots \\
0 & 0 & \dots & 0 & 1 \\
\end{pmatrix} = \begin{cases}
1 & i \leq j \\
0 & i > j \\
\end{cases} } \\
}
$$
---

# 5a
$$
\displaylines{
\text{Let } V \text{ be a vector space over } \mathbb{F}, dim(V) = n \\
\text{Let } A \in \mathbb{F}^{n \times n} \text{ be invertible} \\
\text{Prove: } \exists B, C \text{ bases of } V: [I]^{B}_{C} = A \\
\\
\text{Proof:} \\
\text{Let } A = \begin{pmatrix}
a_{11} & a_{12} & \dots & a_{1n} \\
a_{21} & a_{22} & \dots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{n1} & a_{n2} & \dots & a_{nn} \\

\end{pmatrix} \\
\text{Let } C = \Set{ v_{1}, \dots, v_{n} } \text{ be a basis of } V \\
\text{Let } B = \Set{ w_{1}, \dots, w_{n} } \text{ such that } \forall i \in [1, n]: w_{i} = \sum_{k=1}^{n} a_{ki}v_{k} \\
\implies \forall i \in [1, n]: [w_{i}]_{C} = \left[ \sum_{k=1}^{n} a_{ki}v_{k} \right]_{C} = \begin{pmatrix}
a_{1i} \\
a_{2i} \\
\vdots \\
a_{ni} \\
\end{pmatrix} = C_{i}(A) \\
A \text{ is invertible} \implies \Set{ C_{1}(A), \dots, C_{n}(A) } \text{ is a linear independence} \\
\implies \Set{ [w_{1}]_{C}, \dots, [w_{n}]_{C} } \text{ is a linear independence} \implies B \text{ is a linear independence} \\
B \subseteq V, B \text{ is a linear independence}, \lvert B \rvert = dim(V) \implies B \text{ is a basis of } V \\
\text{and } \boxed{ [I]^{B}_{C} = \begin{pmatrix}
\overset{ \vert }{ \underset{ \vert }{ [w_{1}]_{C} } } & \dots & \overset{ \vert }{ \underset{ \vert }{ [w_{n}]_{C} } } \\
\end{pmatrix} = \begin{pmatrix}
\overset{ \vert }{ \underset{ \vert }{ C_{1}(A) } } & \dots & \overset{ \vert }{ \underset{ \vert }{ C_{n}(A) } } \\
\end{pmatrix} = A } \\
}
$$
# 5b
$$
\displaylines{
\text{Let } V \text{ be a vector space over } \mathbb{F}, dim(V) = n \\
\text{Let } B, C, D \text{ be bases of } V \\
\text{Prove or disprove: } [I]^{B}_{C} = [I]^{D}_{C} \implies B = D \\
\\
\text{Proof:} \\
[I]^{B}_{D} = [I]^{C}_{D}[I]^{B}_{C} = ([I]^{D}_{C})^{-1}[I]^{B}_{C} = ([I]^{B}_{C})^{-1}[I]^{B}_{C} = I \\
\implies [I]^{B}_{B} = I = [I]^{B}_{D} \\
\text{Transformation matrix is unique} \\
\implies \boxed{ B = D } \\
}
$$
---
