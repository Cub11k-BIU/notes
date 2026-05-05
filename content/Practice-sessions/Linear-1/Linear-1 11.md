---
{"publish":true,"created":"22/01/25, 15:01","modified":"2026-03-24T14:59:27.067+02:00","tags":["Academia","Practice","Linear-1"],"cssclasses":""}
---

# Linear-1 11
## Properties of linear transformation matrix
$$
\displaylines{
1. \quad [T+S]^{B}_{C} = [T]^{B}_{C} + [S]^{B}_{C} \\
2. \quad T \text{ is invertible} \implies [T^{-1}]^{C}_{B} = ([T]^{B}_{C})^{-1} \\
3. \quad [ST]^{B}_{D} = [S]^{C}_{D} \cdot [T]^{B}_{C} \\
}
$$
---
## Exercise
$$
\displaylines{
S, S' \text{ are standard bases of } \mathbb{R}^{2}, \mathbb{R}_{2}[x] \\
T: \mathbb{R}_{2}[x] \to \mathbb{R}^{2} \\
T(a_{0}+a_{1}x+a_{2}x^{2}) = \begin{pmatrix}
2a_{2}+a_{1} \\
a_{0} \\
\end{pmatrix} \\
E = \Set{ 1, 1+x, x+x^{2} }, F = \Set{ \begin{pmatrix}
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
1 \\
\end{pmatrix} } \\
\text{Find } [T]^{S}_{S'} \\
\text{Find } [T]^{E}_{F} \\
\\
\text{Solution:} \\
S = \Set{ 1, x, x^{2} }, S' = \Set{ \begin{pmatrix}
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
\end{pmatrix} } \\
T(1) = \begin{pmatrix}
0 \\
1 \\
\end{pmatrix}, T(x) = \begin{pmatrix}
1 \\
0 \\
\end{pmatrix}, T(x^{2}) = \begin{pmatrix}
2 \\
0 \\
\end{pmatrix} \\
\implies [T]^{S}_{S'} = \begin{pmatrix}
0 & 1 & 2 \\
1 & 0 & 0 \\
\end{pmatrix} \\
[T]^{E}_{F} = [I]^{S'}_{F} \cdot [T]^{S}_{S'} \cdot [I]^{E}_{S} \\
[I]^{S'}_{F} = \begin{pmatrix}
1 & -1 \\
0 & 1 \\
\end{pmatrix} \\
[T]^{E}_{F} = \begin{pmatrix}
1 & -1 \\
0 & 1 \\
\end{pmatrix} \begin{pmatrix}
0 & 1 & 2 \\
1 & 0 & 0 \\
\end{pmatrix} \begin{pmatrix}
1 & 1 & 0 \\
0 & 1 & 1 \\
0 & 0 & 1 \\
\end{pmatrix} = \begin{pmatrix}
1 & -1 \\
0 & 1 \\
\end{pmatrix} \begin{pmatrix}
0 & 1 & 3 \\
1 & 1 & 0 \\
\end{pmatrix} = \begin{pmatrix}
-1 & 0 & 3 \\
1 & 1 & 0 \\
\end{pmatrix} \\
[T]^{E}_{F}[v]_{E} = [T(v)]_{F} \\
}
$$
---
$$
\displaylines{
[ker(T)]_{B} = N([T]^{B}_{C}) \\
[Im(T)]_{C} = C([T]^{B}_{C}) \\
}
$$
---
## Exercise
$$
\displaylines{
E = \Set{ \begin{pmatrix}
1 \\
2 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
0 \\
2 \\
\end{pmatrix} }, F = \Set{ \begin{pmatrix}
1 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
2 \\
\end{pmatrix} } \\
T: \mathbb{R}^{3} \to \mathbb{R}^{2} \\
[T]^{E}_{F} = \begin{pmatrix}
1 & -2 & 3 \\
2 & -4 & 6 \\
\end{pmatrix} \\
CF([T]^{E}_{F}) = \begin{pmatrix}
1 & -2 & 3 \\
0 & 0 & 0 \\
\end{pmatrix} \\
\implies N([T]^{E}_{F}) = sp(\Set{ \begin{pmatrix}
2 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
-3 \\
0 \\
1 \\
\end{pmatrix} }) \\
\implies C([T^{E}_{F}]) = sp(\Set{ \begin{pmatrix}
1 \\
2 \\
\end{pmatrix} }) \\
}
$$
---
## Exercise
$$
\displaylines{
V = \mathbb{R}^{n} \text{ over } \mathbb{R} \\
T: V \to V \\
A \in \mathbb{R}^{n \times n} \\
1. \quad \forall B, C \text{ bases of } V: [T]^{B}_{C} = A \\
2. \quad \forall B \text{ basis of } V: [T]^{B}_{B} = A \\
\\
\text{Solution for 1:} \\
T = 0 \\
\text{Solution for 2:} \\
T = 0 \\
T = I \\
T = \alpha I \\
}
$$
---
$$
\displaylines{
T = D + D^{2} + D^{3} \\
\implies [T]_{S} = [D]_{S} + [D^{2}]_{S} + [D^{3}]_{S} = [D]_{S} + ([D]_{S})^{2} + ([D]_{S})^{3} \\
}
$$
---
## Exercise
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
A = \begin{pmatrix}
1 & 1 & 0 \\
2 & 1 & 0 \\
1 & 0 & 1 \\
\end{pmatrix} \\
B \text{ basis of } \mathbb{R}^{3} \\
1. \quad \text{Find } [T]^{S}_{S} \\
2. \quad [T]^{S}_{B} = A, \text{ find } [I]^{B}_{S} \\
3. \quad \text{Find } B \\
4. \quad \text{Find basis } E \text{ of } \mathbb{R}^{3} \text{ such that } [T]^{E}_{E} \text{ is upper-triangle} \\
\\
\text{Solution:} \\
[T]^{S}_{S} = \begin{pmatrix}
1 & 0 & 0 \\
1 & 1 & 0 \\
1 & 1 & 1 \\
\end{pmatrix} \\
\\
[T]^{S}_{B} = [I]^{S}_{B}[T]^{S}_{S} \\
[I]^{B}_{S}A = [I]^{B}_{S}[I]^{S}_{B}[T]^{S}_{S} \\
\implies [I]^{B}_{S} = [T]^{S}_{S}A^{-1} \\
\\
B = \Set{ C_{1}([I]^{B}_{S}), C_{2}([I]^{B}_{S}), C_{3}([I]^{B}_{S}) } \\
\\
E = \Set{ \begin{pmatrix}
0 \\
0 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix} } \\
}
$$
---
## Exercise
$$
\displaylines{
V \text{ is a vector space of dimension } 2 \text{ over } \mathbb{R} \\
T: V \to V \\
T^{2} = -I \\
1. \quad \text{Prove: } \forall v \neq 0 \in V: \Set{ v, T(v) } \text{ is a linear independence} \\
2. \quad \text{Find basis } E \text{ of } V \text{ such that: } [T]^{E}_{E} = \begin{pmatrix}
0 & 1 \\
-1 & 0 \\
\end{pmatrix} \\
\\
\text{Solution:} \\
\dots
}
$$
---
## Exercise
$$
\displaylines{
T: \mathbb{R}^{2} \to \mathbb{R}^{2} \\
T(\begin{pmatrix}
x \\
y \\
\end{pmatrix}) = \begin{pmatrix}
x+2y \\
x+y \\
\end{pmatrix} \\
\text{If there exists basis } E \text{ such that } [T]^{E}_{E} \text{ is diagonal} \\
\\
\text{Solution:} \\
[T]^{S}_{S} = \begin{pmatrix}
1 & 2 \\
1 & 1 \\
\end{pmatrix} = A \\
(A - \lambda I)v = 0 \\
A - \lambda I = \begin{pmatrix}
1-\lambda & 2 \\
1 & 1-\lambda \\
\end{pmatrix} \\
\begin{pmatrix}
1-\lambda & 2 \\
1 & 1-\lambda \\
\end{pmatrix} \to \begin{pmatrix}
-\lambda & 1+\lambda \\
1 & 1-\lambda \\
\end{pmatrix} \underset{ \lambda \neq 0 }{ \to } \begin{pmatrix}
1 & \frac{-1-\lambda}{\lambda} \\
0 & 1-\lambda + \frac{1+\lambda}{\lambda} \\
\end{pmatrix} \\
}
$$
---
