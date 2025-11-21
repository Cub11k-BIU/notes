---
{"publish":true,"created":"15/01/25, 14:01","modified":"2025-11-21T21:10:25.153+02:00","tags":["Academia","Practice","Linear-1"],"cssclasses":""}
---

# Linear-1 10
## Change of basis
$$
\displaylines{
\text{Let } V \text{ vector space} \\
\text{Let } B, C \text{ bases of } V \\
\text{Then } \exists! A: \forall v \in V: A[v]_{B} = [v]_{C} \\
\text{Matrix } A \text{ is denoted as } [I]^{B}_{C} \\
[I]^{B}_{C} [v]_{B} = [v]_{C} \\
\\
\text{How do we find this matrix?} \\
B = \Set{ v_{1}, \dots, v_{n} } \\
C = \Set{ w_{1}, \dots, w_{n} } \\
[I]^{B}_{C} = \begin{pmatrix}
\vdots & & \vdots \\
[v_{1}]_{C} & \dots & [v_{n}]_{C} \\
\vdots & & \vdots \\
\end{pmatrix} \\
}
$$
## Example
$$
\displaylines{
\text{Let } V = \mathbb{R}_{1}[x] \\
B = \Set{ 2, x + 1 } \\
C = \Set{ x, 2x + 4 } \\
[2]_{C} = \begin{pmatrix}
-1 \\
\frac{1}{2} \\
\end{pmatrix} \\
[x+1]_{C} = \begin{pmatrix}
\frac{1}{2} \\
\frac{1}{4} \\
\end{pmatrix} \\
\implies [I]^{B}_{C} = \begin{pmatrix}
-1 & \frac{1}{2} \\
\frac{1}{2} & \frac{1}{4} \\
\end{pmatrix} \\
\implies \forall p(x) \in V: \begin{pmatrix}
-1 & \frac{1}{2} \\
\frac{1}{2} & \frac{1}{4} \\
\end{pmatrix}[p(x)]_{B} = [p(x)]_{C} \\
\\
\text{Let } p(x) = 3x + 1 \\
\implies [p(x)]_{B} = \begin{pmatrix}
-1 \\
3 \\
\end{pmatrix} \\
\implies [p(x)]_{C} = \begin{pmatrix}
-1 & \frac{1}{2} \\
\frac{1}{2} & \frac{1}{4} \\
\end{pmatrix} \cdot \begin{pmatrix}
-1 \\
3 \\
\end{pmatrix} = \begin{pmatrix}
\frac{5}{2} \\
\frac{1}{4} \\
\end{pmatrix} \\
}
$$
---
## Exercise
$$
\displaylines{
\text{Let } V = \mathbb{R}_{2}[x] \\
B = \Set{ 1+2x, 3+5x, v } \text{ is a basis of } V \\
[x^{2}+1]_{B} = \begin{pmatrix}
2 \\
-1 \\
1 \\
\end{pmatrix} \\
\text{Find } v \\
\\
\text{Solution:} \\
x^{2}+1 = 2 + 4x - 3-5x + v \\
\implies \boxed{v = x^{2} + x + 2} \\
}
$$
---
## Properties
$$
\displaylines{
1. \quad [I]^{B}_{B} = I \\
2. \quad [I]^{C}_{B}[I]^{D}_{C} = [I]^{D}_{B} \\
3. \quad [I]^{C}_{B} \text{ is invertible, } ([I]^{C}_{B})^{-1} = [I]^{B}_{C} \\
}
$$
---
## Exercise
$$
\displaylines{
\text{Let } V = \mathbb{F}^{n} \\
B = \Set{ v_{1}, \dots, v_{n} } \text{ basis of } V \\
S \text{ is a standard basis of } V \\
\text{Find } [I]^{B}_{S} \\
\\
\text{Solution:} \\
\forall v \in V: [v]_{S} = v \\
\implies [I]^{B}_{S} = = \begin{pmatrix}
\vdots &  & \vdots \\
[v_{1}]_{S} & \dots & [v_{n}]_{S} \\
\vdots &  & \vdots \\
\end{pmatrix} = \begin{pmatrix}
\vdots &  & \vdots \\
v_{1} & \dots & v_{n} \\
\vdots &  & \vdots \\
\end{pmatrix} \\
\implies [I]^{B}_{C} = [I]^{S}_{C} \cdot [I]^{B}_{S} = ([I]^{C}_{S})^{-1} [I]^{B}_{S} = \\
= \begin{pmatrix}
\vdots &  & \vdots \\
w_{1} & \dots & w_{n} \\
\vdots &  & \vdots \\
\end{pmatrix}^{-1} \cdot \begin{pmatrix}
\vdots &  & \vdots \\
v_{1} & \dots & v_{n} \\
\vdots &  & \vdots \\
\end{pmatrix} \\
}
$$
## Example
$$
\displaylines{
B = \Set{ \begin{pmatrix}
1 \\
2 \\
4 \\
\end{pmatrix}, \begin{pmatrix}
8 \\
6 \\
2 \\
\end{pmatrix}, \begin{pmatrix}
-1 \\
-2 \\
4 \\
\end{pmatrix} } \\
C = \Set{ \begin{pmatrix}
6 \\
-1 \\
4 \\
\end{pmatrix}, \begin{pmatrix}
2 \\
0 \\
5 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
0 \\
-1 \\
\end{pmatrix} } \\
[I]^{B}_{C} = \begin{pmatrix}
6 & 2 & 1 \\
-1 & 0 & 0 \\
4 & 5 & -1 \\
\end{pmatrix}^{-1} \cdot \begin{pmatrix}
1 & 8 & -1 \\
2 & 6 & -2 \\
4 & 2 & 4 \\
\end{pmatrix} \\
}
$$
---
## Exercise
$$
\displaylines{
A = \begin{pmatrix}
1 & 0 & 1 \\
0 & 3 & 0 \\
0 & 3 & 1 \\
\end{pmatrix} \\
B = \Set{ \begin{pmatrix}
1 \\
0 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
2 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
4 \\
6 \\
\end{pmatrix} } \text{ is a basis of } \mathbb{R}^{3} \\
\text{Find } C = \Set{ w_{1}, w_{2}, w_{3} } \text{ basis of } \mathbb{R}^{3} \\
\text{Such that } A = [I]^{C}_{B} \\
\\
\text{Solution:} \\
[w_{1}]_{B} = C_{1}([I]^{C}_{B}) = \begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix} \implies w_{1} = \begin{pmatrix}
1 \\
0 \\
1 \\
\end{pmatrix} \\
[w_{2}]_{B} = C_{2}([I]^{C}_{B}) = \begin{pmatrix}
0 \\
3 \\
3 \\
\end{pmatrix} \implies w_{2} = 3\begin{pmatrix}
1 \\
2 \\
0 \\
\end{pmatrix} + 3\begin{pmatrix}
0 \\
4 \\
6 \\
\end{pmatrix} = \begin{pmatrix}
3 \\
18 \\
18 \\
\end{pmatrix} \\
[w_{3}]_{B} = C_{3}([I]^{C}_{B}) = \begin{pmatrix}
1 \\
0 \\
1 \\
\end{pmatrix} \implies w_{3} = \begin{pmatrix}
1 \\
0 \\
0 \\
\end{pmatrix} + \begin{pmatrix}
0 \\
4 \\
6 \\
\end{pmatrix} = \begin{pmatrix}
1 \\
4 \\
6 \\
\end{pmatrix} \\
\\
\text{Another approach} \\
A = [I]^{B}_{C} = [I]^{S}_{B} \cdot [I]^{C}_{S} \\
\implies [I]^{C}_{S} = [I]^{B}_{S} \cdot A = \begin{pmatrix}
1 & 1 & 0 \\
0 & 2 & 4 \\
1 & 0 & 6 \\
\end{pmatrix} \cdot \begin{pmatrix}
1 & 0 & 1 \\
0 & 3 & 0 \\
0 & 3 & 1 \\
\end{pmatrix} = \begin{pmatrix}
1 & 3 & 1 \\
0 & 18 & 4 \\
1 & 18 & 6 \\
\end{pmatrix} = \begin{pmatrix}
w_{1} & w_{2} & w_{3} \\
\end{pmatrix} \\
\\
\text{Find } C = \Set{ w_{1}, w_{2}, w_{3} } \text{ basis of } \mathbb{R}^{3} \\
\text{Such that } A = [I]^{B}_{C} \\
\\
\text{Solution:} \\
A = [I]^{B}_{C} \\
A^{-1} = [I]^{C}_{B} = [I]^{S}_{B} \cdot [I]^{C}_{S} \\
\implies \begin{pmatrix}
w_{1} & w_{2} & w_{3} \\
\end{pmatrix} = [I]^{C}_{S} = [I]^{B}_{S} \cdot A^{-1} \\
}
$$
---
## Exercise
$$
\displaylines{
[I]^{B}_{C} = \begin{pmatrix}
0 & 0 & 2 \\
1 & 0 & 0 \\
0 & 1 & 1 \\
\end{pmatrix} \\
\text{Find connection between } B \text{ and } C \\
\\
\text{Solution:} \\
B = \Set{ v_{1}, v_{2}, v_{3} } \\
C = \Set{ w_{1}, w_{2}, w_{3} } \\
\\
[v_{1}]_{C} = C_{1}([I]^{B}_{C}) = \begin{pmatrix}
0 \\
1 \\
0 \\
\end{pmatrix} \implies v_{1} = w_{2} \\
[v_{2}]_{C} = C_{2}([I]^{B}_{C}) = \begin{pmatrix}
0 \\
0 \\
1 \\
\end{pmatrix} \implies v_{2} = w_{3} \\
[v_{3}]_{C} = C_{3}([I]^{B}_{C}) = \begin{pmatrix}
2 \\
0 \\
1 \\
\end{pmatrix} \implies v_{3} = 2w_{1}+w_{3} \\
}
$$
---
## Exercise
$$
\displaylines{
U, V, W \text{ vector spaces over } \mathbb{F} \\
T: U \to V \text{ linear transformation} \\
S: V \to W \text{ linear transformation} \\
\\
\text{Let } \hat{S}: Im(T) \to W, \forall v \in Im(T): \hat{S}(v) = S(v) \\
1. \quad \text{Prove: } ker(\hat{S}) = ker(S) \cap Im(T) \\
   Im(\hat{S}) = Im(ST) \\
2. \quad dim(ker(ST)) \leq dim(ker(S)) + dim(ker(T)) \\
3. \quad dim(ker(ST)) = dim(ker(S)) + dim(ker(T)) \iff ker(S) \subseteq Im(T) \\
}
$$
$$
\displaylines{
\text{Proof for 1.} \\
\text{Let } v \in ker(\hat{S}) \implies \hat{S}(v) = 0 = S(v) \implies v \in ker(S) \\
ker(\hat{S}) \subseteq Im(T) \implies v \in Im(T) \\
\implies v \in ker(S) \cap Im(T) \implies \boxed{ ker(\hat{S}) \subseteq ker(S) \cap Im(T) } \\
\text{Let } v \in ker(S) \cap Im(T) \implies v \in ker(S) \land v \in Im(T) \\
\implies S(v) = 0 \land \exists \hat{S}(v) = S(v) = 0 \\
\implies v \in ker(\hat{S}) \implies \boxed{ ker(S) \cap Im(T) \subseteq ker(\hat{S}) } \\
\implies \boxed{ ker(\hat{S}) = ker(S) \cap Im(T) } \\
\text{Let } w \in Im(\hat{S}) \\
\implies \exists v \in Im(T): \hat{S}(v) = w = S(v) \\
\implies \exists u \in U: T(u) = v \implies w = S(T(u)) = (ST)(u) \\
\implies w \in Im(ST) \implies \boxed{ Im(\hat{S}) \subseteq Im(ST) } \\
\text{Let } w \in Im(ST) \\
\implies \exists u \in U: (ST)(u) = w = S(T(u)) \\
\implies \exists v \in V: v = T(u) \implies v \in Im(T) \land S(v) = w \\
\implies \hat{S}(v) = w \implies w \in Im)\hat{S} \implies \boxed{ Im(ST) \subseteq Im(\hat{S}) } \\
\implies \boxed{ Im(\hat{S}) = Im(ST) } \\
}
$$
$$
\displaylines{
\text{Proof for 2.} \\
1. \quad dim(Im(T)) + dim(ker(T)) = dim(U) \\
2. \quad dim(Im(ST)) + dim(ker(ST)) = dim(U) \\
3. \quad dim(Im(\hat{S})) + dim(ker(\hat{S})) = dim(Im(T)) \\
\\
3. \implies dim(Im(ST)) + dim(ker(S) \cap Im(T)) = dim(Im(T)) \\
\\
(1. - 2.) \implies dim(ker(ST)) = dim(Im(T)) + dim(ker(T)) - dim(Im(ST)) = \\
= dim(Im(ST)) + dim(ker(S) \cap Im(T)) + dim(ker(T)) - dim(Im(ST)) = \\
= dim(ker(S) \cap Im(T)) + dim(ker(T)) \leq dim(ker(S)) + dim(ker(T)) \\
\implies \boxed{ dim(ker(ST)) \leq dim(ker(S)) + dim(ker(T)) } \\
\\
\text{Proof for 3.} \\
dim(ker(ST)) = dim(ker(S)) + dim(ker(T)) \\
\iff dim(ker(S) \cap Im(T)) + dim(ker(T)) = dim(ker(S)) + dim(ker(T)) \\
\iff dim(ker(S) \cap Im(T)) = dim(ker(S)) \iff ker(S) \cap Im(T) = ker(S) \\
\iff ker(S) \subseteq Im(T) \\
\implies \boxed{ dim(ker(ST)) = dim(ker(S)) + dim(ker(T)) \iff ker(S) \subseteq Im(T) } \\
}
$$
---
