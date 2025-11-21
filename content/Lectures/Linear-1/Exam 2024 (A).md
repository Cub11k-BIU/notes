---
{"publish":true,"created":"16/02/25, 13:02","modified":"2025-11-21T21:10:14.263+02:00","tags":["Academia","Lecture","Linear-1"],"cssclasses":""}
---

# 1a
$$
\displaylines{
\text{State and prove the theorem of three} \\
\\
\text{Theorem:} \\
\text{Let } V \text{ be a vector space} \\
\text{Let } B \subseteq V \\
1. \quad sp(B) = V \\
2. \quad \lvert B \rvert = dim(V) \\
3. \quad B \text{ is a linear independence} \\
\text{If any two properties are true, then the third one is also true} \\
\\
\text{Proof:} \\
\boxed{ 1 \text{ and } 3 \implies 2 } \text{ by definition of basis} \\
\text{Let } 2 \text{ and } 3 \\
\text{Let } sp(B) \neq V \implies \exists v \in V: v \not\in sp(B) \\
\implies B \cup \Set{ v } \text{ is a linear independence} \\
\text{Let } C \text{ be a basis of } V \\
dim(V) = \lvert C \rvert < \lvert B \cup \Set{ v } \rvert \\
\text{But } C \text{ is a maximal linear independence of } V - \text{Contradiction!} \\
\implies sp(B) = V \implies \boxed{ 2 \text{ and } 3 \implies 1 } \\
\text{Let } 1 \text{ and } 2 \\
\text{Let } C \text{ be a basis of } V \\
\text{Let } B \text{ be a linear dependence} \\
\implies \exists v \in B: sp(B \setminus \Set{ v }) = sp(B) = V \\
\implies dim(V) = \lvert C \rvert \leq \lvert B \setminus \Set{ v } \rvert = dim(V) - 1 - \text{Contradiction!} \\
\implies B \text{ is a linear independence} \implies \boxed{ 1 \text{ and } 2 \implies 3 } \\
}
$$
# 1b
$$
\displaylines{
B = \Set{ \begin{pmatrix}
1 \\
3 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
2 \\
\end{pmatrix} } \\
\alpha \begin{pmatrix}
1 \\
3 \\
\end{pmatrix} + \beta \begin{pmatrix}
1 \\
2 \\
\end{pmatrix} = \begin{pmatrix}
2 \\
1 \\
\end{pmatrix} \\
\alpha + \beta = 2 \\
3\alpha + 2\beta = 1 \\
\begin{pmatrix}
1 & 1 & 2 \\
3 & 2 & 1 \\
\end{pmatrix} \overset{ R_{2} - 2R_{1} }{ \to } \begin{pmatrix}
1 & 1 & 2 \\
1 & 0 & -3 \\
\end{pmatrix} \\
\alpha = -3 \\
\beta = 5 \\
\implies [\begin{pmatrix}
2 \\
1 \\
\end{pmatrix}]_{B} = \begin{pmatrix}
-3 \\
5 \\
\end{pmatrix} \\
\\
[v]_{B} = \begin{pmatrix}
1 \\
1 \\
\end{pmatrix} \implies \alpha \begin{pmatrix}
1 \\
3 \\
\end{pmatrix} + \beta \begin{pmatrix}
1 \\
2 \\
\end{pmatrix} = \begin{pmatrix}
2 \\
5 \\
\end{pmatrix} \\
}
$$
# 2a
$$
\displaylines{
\begin{pmatrix}
2 & -2 & 2 \\
1 & -1 & 1 \\
-1 & 1 & -1 \\
\end{pmatrix} \to \begin{pmatrix}
1 & -1 & 1 \\
1 & -1 & 1 \\
1 & -1 & 1 \\
\end{pmatrix} \to \begin{pmatrix}
1 & -1 & 1 \\
0 & 0 & 0 \\
0 & 0 & 0 \\
\end{pmatrix} \\
3 = rank(A) + dim(N(A)) \implies 3 = 1 + dim(N(A)) \\
\left\{\begin{array}{}
x - y + z = 0 \\
0 = 0 \\
0 = 0 \\
\end{array}\right. \\
\implies C(A) = sp\Set{ \begin{pmatrix}
2 \\
1 \\
-1 \\
\end{pmatrix} } \\
\left(\begin{array}{ccc|c}
1 & -1 & 1 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 \\
\end{array}\right) \implies \left\{\begin{array}{}
x = s - t \\
y = s \\
z = t \\
\end{array}\right. \implies \begin{pmatrix}
s \\
s \\
0 \\
\end{pmatrix} + \begin{pmatrix}
-t \\
0 \\
t \\
\end{pmatrix} \\
\implies N(A) = sp\Set{ \begin{pmatrix}
1 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
-1 \\
0 \\
1 \\
\end{pmatrix} } \\
\\
v \in C(A) \cap N(A) \implies v = \alpha \begin{pmatrix}
2 \\
1 \\
-1 \\
\end{pmatrix} = \beta \begin{pmatrix}
1 \\
1 \\
0 \\
\end{pmatrix} + \gamma \begin{pmatrix}
-1 \\
0 \\
1 \\
\end{pmatrix} \\
\implies \left\{\begin{array}{}
2\alpha - \beta + \gamma = 0 \\
\alpha - \beta = 0 \\
\alpha + \gamma = 0 \\
\end{array}\right. \\
\left(\begin{array}{ccc|c}
2 & -1 & 1 & 0 \\
1 & -1 & 0 & 0 \\
1 & 0 & 1 & 0 \\
\end{array}\right) \to \left(\begin{array}{ccc|c}
2 & -1 & 1 & 0 \\
0 & -1 & -1 & 0 \\
0 & 0 & 0 & 0 \\
\end{array}\right) \implies C(A) \cap N(A) = sp\Set{ \begin{pmatrix}
-1 \\
-1 \\
1 \\
\end{pmatrix} } \\
\implies C(A) \cap N(A) = \Set{ 0 } \implies \text{dim } = 0, \text{Basis } \emptyset \\
C(A) + N(A) = \Set{ u + w | u \in C(A), w \in N(A) } \\
\alpha \begin{pmatrix}
2 \\
1 \\
-1 \\
\end{pmatrix} + \beta \begin{pmatrix}
1 \\
1 \\
0 \\
\end{pmatrix} + \gamma \begin{pmatrix}
-1 \\
0 \\
1 \\
\end{pmatrix} \\
U + W = sp\Set{ U \cup W } \\
\implies C(A) + N(A) = sp\Set{ \begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
-1 \\
0 \\
1 \\
\end{pmatrix} } = \mathbb{R}^{3} \\
v \text{ does not exist} \\
v \in \mathbb{R}^{3} : v \not\in C(A) + N(A) \\
}
$$