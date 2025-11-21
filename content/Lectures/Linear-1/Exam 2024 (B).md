---
{"publish":true,"created":"18/02/25, 13:02","modified":"2025-11-21T21:10:14.267+02:00","tags":["Academia","Lecture","Linear-1"],"cssclasses":""}
---

# 1a
$$
\displaylines{
\text{Let } V, W \text{ be finitely generated vector spaces over } \mathbb{F} \\
\text{Let } T: V \to W \text{ be a linear transformation} \\
\text{Prove: } T \text{ is invertible } \iff T \text{ is bijective} \\
\\
\text{Proof:} \\
\text{Let } T \text{ be invertible} \\
\implies \exists \text{linear transformation } T^{-1}: W \to V, TT^{-1} = I_{W}, T^{-1}T = I_{V} \\
TT^{-1} = I_{W} \implies TT^{-1} \text{ is surjective} \implies T \text{ is surjective} \\
T^{-1}T = I_{V} \implies T^{-1}T \text{ is injective} \implies T \text{ is injective} \\
\implies \boxed{ T \text{ is bijective} } \\
\text{Let } T \text{ be bijective} \\
T \text{ is a function} \implies \exists \text{ function } S: V \to W, TS = I_{W}, ST = I_{V} \\
\text{Let } w_{1}, w_{2} \in W, \alpha \in \mathbb{F} \\
S(w_{1} + \alpha w_{2}) = ST(S(w_{1}+\alpha w_{2})) = S(TS(w_{1} + \alpha w_{2})) = S(TS(w_{1}) + \alpha TS(w_{2})) = \\
= S(T(S(w_{1}) + \alpha S(w_{2}))) = ST(S(w_{1}) + \alpha S(w_{2})) = S(w_{1}) + \alpha S(w_{2}) \\
\implies S \text{ is a linear transformation} \implies \boxed{ T \text{ is invertible} } \\
}
$$
# 1b
$$
\displaylines{
\text{Let } T: \mathbb{R}^{2} \to \mathbb{R}^{2} \\
T(\begin{pmatrix}
x \\
y \\
\end{pmatrix}) = \begin{pmatrix}
2x \\
x+y \\
\end{pmatrix} \\
\text{Let } B = \Set{ \begin{pmatrix}
1 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
2 \\
1 \\
\end{pmatrix} } \text{ basis of } \mathbb{R}^{2} \\
\text{Find } [T]^{B}_{B} \\
\\
\text{Solution:} \\
[T]^{B}_{B} = \begin{pmatrix}
[T\begin{pmatrix}
1 \\
1 \\
\end{pmatrix}]_{B} & [T\begin{pmatrix}
2 \\
1 \\
\end{pmatrix}]_{B} \\
\end{pmatrix} = \begin{pmatrix}
[\begin{pmatrix}
2 \\
2 \\
\end{pmatrix}]_{B} & [\begin{pmatrix}
4 \\
3 \\
\end{pmatrix}]_{B} \\
\end{pmatrix} = \begin{pmatrix}
2 & 2 \\
0 & 1 \\
\end{pmatrix} \\
}
$$
# 2
$$
\displaylines{
U = sp\Set{ \begin{pmatrix}
0 & 0 \\
0 & 1 \\
\end{pmatrix}, \begin{pmatrix}
1 & 1 \\
0 & 1 \\
\end{pmatrix} } \\
W = \Set{ \begin{pmatrix}
a & b \\
c & d \\ 
\end{pmatrix} | \begin{array}{}
a - d = 0 \\
a + b + c - 2d = 0 \\
\end{array} } \\
\text{Find basis and dimension of } U+W, U \cap W \\
\\
\text{Solution:} \\
W = \Set{ \begin{pmatrix}
a & b \\
c & d \\ 
\end{pmatrix} | \begin{array}{}
a - d = 0 \\
a + b + c - 2d = 0 \\
\end{array} } = \Set{ \begin{pmatrix}
d & b \\
c & d \\
\end{pmatrix} | b + c = d } = \Set{ \begin{pmatrix}
b+c & b \\
c & b+c \\
\end{pmatrix} } = \\
= sp\Set{ \begin{pmatrix}
1 & 1 \\
0 & 1 \\
\end{pmatrix}, \begin{pmatrix}
1 & 0 \\
1 & 1 \\
\end{pmatrix} } \\
\implies U + W = sp\Set{ U \cup W } = sp\Set{ \begin{pmatrix}
0 & 0 \\
0 & 1 \\
\end{pmatrix}, \begin{pmatrix}
1 & 1 \\
0 & 1 \\
\end{pmatrix}, \begin{pmatrix}
1 & 0 \\
1 & 1 \\
\end{pmatrix} } \\
\boxed{ \Set{ \begin{pmatrix}
0 & 0 \\
0 & 1 \\
\end{pmatrix}, \begin{pmatrix}
1 & 1 \\
0 & 1 \\
\end{pmatrix}, \begin{pmatrix}
1 & 0 \\
1 & 1 \\
\end{pmatrix} } } \text{ is a linear independence and is a basis of } U+W \\
\implies \boxed{ dim(U + W) = 3 } \\
\text{Let } v \in U \cap W \implies \alpha \begin{pmatrix}
0 & 0 \\
0 & 1 \\
\end{pmatrix} + \beta \begin{pmatrix}
1 & 1 \\
0 & 1 \\
\end{pmatrix} = \gamma \begin{pmatrix}
1 & 1 \\
0 & 1 \\
\end{pmatrix} + \delta \begin{pmatrix}
1 & 0 \\
1 & 1 \\
\end{pmatrix} \\
\implies \begin{pmatrix}
\beta-\gamma-\delta & \beta-\gamma \\
\delta & \alpha+\beta-\gamma-\delta \\
\end{pmatrix} = \begin{pmatrix}
0 & 0 \\
0 & 0 \\
\end{pmatrix} \\
\implies \delta = 0 \implies \beta = \gamma \implies \alpha = 0 \\
\implies v = \begin{pmatrix}
\beta & \beta \\
0 & \beta \\
\end{pmatrix} \implies U \cap W = sp\Set{ \begin{pmatrix}
1 & 1 \\
0 & 1 \\
\end{pmatrix} } \\
\implies \boxed{ \Set{ \begin{pmatrix}
1 & 1 \\
0 & 1 \\
\end{pmatrix} } \text{ is a basis of } U \cap W \text{ and } dim(U \cap W) = 1 } \\
\text{Alternative solution:} \\
sp\Set{ \begin{pmatrix}
0 & 1 \\
1 & 1 \\
\end{pmatrix} } \subseteq U \text{ and } sp\Set{ \begin{pmatrix}
0 & 1 \\
1 & 1 \\
\end{pmatrix} } \subseteq W \\
\implies sp\Set{ \begin{pmatrix}
0 & 1 \\
1 & 1 \\
\end{pmatrix} } \subseteq U \cap W \\
\underbrace{ dim(U+W) }_{ 3 } = \underbrace{ dim(U) }_{ 2 } + \underbrace{ dim(W) }_{ 2 } - dim(U \cap W) \\
\implies dim(U \cap W) = 1 \implies sp\Set{ \begin{pmatrix}
0 & 1 \\
1 & 1 \\
\end{pmatrix} } = U \cap W \\
}
$$
# 3a
$$
\displaylines{
\text{Let } T: \mathbb{R}^{3} \to \mathbb{R}^{3} \text{ be a linear transformation} \\
T\begin{pmatrix}
1 \\
0 \\
-1 \\
\end{pmatrix} = \begin{pmatrix}
1 \\
2 \\
1 \\
\end{pmatrix}, T\begin{pmatrix}
1 \\
2 \\
3 \\
\end{pmatrix} = \begin{pmatrix}
1 \\
1 \\
1 \\
\end{pmatrix}, T\begin{pmatrix}
2 \\
2 \\
2 \\
\end{pmatrix} = \begin{pmatrix}
2 \\
3 \\
2 \\
\end{pmatrix} \\
\text{How many linear transformations } T \text{ satisfy these conditions?} \\
\\
\text{Solution:} \\
\begin{pmatrix}
2 \\
2 \\
2 \\
\end{pmatrix} = \begin{pmatrix}
1 \\
0 \\
-1 \\
\end{pmatrix} + \begin{pmatrix}
1 \\
2 \\
3 \\
\end{pmatrix} \\
T\begin{pmatrix}
2 \\
2 \\
2 \\
\end{pmatrix} = T\begin{pmatrix}
1 \\
0 \\
-1 \\
\end{pmatrix} + T\begin{pmatrix}
1 \\
2 \\
3 \\
\end{pmatrix} \\
\implies \text{Such } T \text{ exists} \\
\text{Let } B = \Set{ \begin{pmatrix}
1 \\
0 \\
-1 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
2 \\
3 \\
\end{pmatrix}, v_{3} } \text{ be a basis of } \mathbb{R}^{3} \\
\implies \text{By the defining theorem } \forall u \in \mathbb{R}^{3}: \exists! T: \left\{\begin{array}{}
T\begin{pmatrix}
1 \\
0 \\
-1 \\
\end{pmatrix} = \begin{pmatrix}
1 \\
2 \\
1 \\
\end{pmatrix} \\
T\begin{pmatrix}
1 \\
2 \\
3 \\
\end{pmatrix} = \begin{pmatrix}
1 \\
1 \\
1 \\
\end{pmatrix} \\
T(v_{3}) = u \\
\end{array}\right. \\
\implies \boxed{ \text{There exists an infinite number of such linear transformations} } \\
}
$$
# 3b
$$
\displaylines{
\text{Let } V \text{ be a finitely generated vector space} \\
\text{Let } T, S: V \to V \text{ be linear transformations} \\
\text{Prove: } dim(ker(TS)) \leq dim(ker(T)) + dim(ker(S)) \\
\\
\text{Proof:} \\
\text{Let } R: ker(TS) \to V, R(v) = S(v) \\
v \in ker(ST) \implies \begin{cases}
T(S(v)) = T(0) = 0 & v \in ker(S) \\
T(S(v)) = 0 \implies S(v) \in ker(T) & v \not\in ker(S)
\end{cases} \\
\implies Im(R) = ker(T) \\
v \in ker(R) \implies R(v) = S(v) = 0 \implies v \in ker(S) \implies ker(R) = ker(ST) \cap ker(S) \\
\implies dim(ker(ST)) = dim(ker(R)) + dim(Im(R)) = \\
= dim(ker(S) \cap ker(ST)) + dim(ker(T)) \\
ker(S) \cap ker(TS) \subseteq ker(S) \implies dim(ker(S) \cap ker(TS)) \leq dim(ker(S)) \\
\implies \boxed{ dim(ker(TS)) \leq dim(ker(S)) + dim(ker(T)) } \\
}
$$
# 4
$$
\displaylines{
\text{Let } V \text{ be a finitely generated vector space, } dim(V) \geq 2 \\
\text{Let } T, S: V \to V \text{ be linear transformations} \\
}
$$
# 4a
$$
\displaylines{
\text{Prove or disprove: } TS \text{ is surjective} \implies T \text{ is an isomorphism} \\
\\
\text{Proof:} \\
\text{Let } TS \text{ be surjective} \\
TS \text{ is surjective} \implies T \text{ is surjective} \\
dim(V) = dim(V) \implies T \text{ is injective} \implies T \text{ is bijective} \\
\implies \boxed{ T \text{ is invertible (an isomorphism)} } \\
}
$$
## 4b
$$
\displaylines{
\text{Prove or disprove: } Im(T+S) \subseteq Im(T) \implies Im(S) \subseteq Im(T) \\
\\
\text{Proof:} \\
\text{Let } Im(T+S) \subseteq Im(T) \\
\text{Let } u \in Im(S) \\
\exists v \in V: S(v) = u \\
(T+S)(v) = T(v) + S(v) \in Im(T) \\
\implies \exists w \in V: T(w) = T(v) + S(v) \implies u = S(v) = T(w-v) \implies u \in Im(T) \\
\implies \boxed{ Im(S) \subseteq Im(T) } \\
}
$$
# 4c
$$
\displaylines{
\text{Prove or disprove: } ker(T+S) \subseteq ker(T) \implies ker(S) \subseteq ker(T) \\
\\
\text{Disproof:} \\
\text{Let } T = I_{V} \\
\text{Let } S = 0_{V} \\
T+S = T \implies ker(T+S) = ker(T) \subseteq ker(T) \\
ker(T) = \Set{ 0 } \\
ker(S) = V \\
dim(V) \geq 2 \implies \boxed{ V \not\subseteq \Set{ 0 } } \\
}
$$
# 5
$$
\displaylines{
\text{Let } V \text{ be a finitely generated vector space} \\
\text{Let } T: V \to V \text{ be a linear transformation} \\
U \text{ is called } T\text{-invariant} \text{ if } T[U] \subseteq U \\
\text{In other words } \forall u \in U: T(u) \in U \\
}
$$
## 5a
$$
\displaylines{
\text{Let } T: V \to V \text{ be a linear transformation} \\
\text{Let } U, W \subseteq V \text{ be } T\text{-invariant} \\
}
$$
### 5a.i
$$
\displaylines{
\text{Prove: } U + W \text{ is } T\text{-invariant} \\
\\
\text{Proof:} \\
\text{Let } v \in U+W \\
\implies \exists u \in U, w \in W: v = u + w \\
\implies T(v) = T(u+w) = \underbrace{ T(u) }_{ \in U } + \underbrace{ T(w) }_{ \in W } \in U+W \\
\implies \boxed{ U+W \text{ is } T\text{-invariant} } \\
}
$$
### 5a.ii
$$
\displaylines{
\text{Prove: } T[U] + T[W] = V \implies U + W = V \\
\\
\text{Proof:} \\
U \subseteq V, W \subseteq V \implies U + W \subseteq V \\
\text{Let } v \in V \\
T[U] + T[W] = V \implies \exists u \in U, w \in W: T(u) + T(w) = v \\
T(u) \in U, T(w) \in W \implies T(u) + T(w) \in U + W \implies v \in U + W \implies V \subseteq U + W \\
\implies \boxed{ U + W = V } \\
}
$$
## 5b
$$
\displaylines{
\text{Let } T, S: V \to V \text{ be linear transformations} \\
\text{Let } TS = ST \\
}
$$
### 5b.i
$$
\displaylines{
\text{Prove: } Im(S) \text{ is } T\text{-invariant} \\
\\
\text{Proof:} \\
\text{Let } u \in Im(S) \\
\implies \exists v \in V: S(v) = u \\
S(v) = u \implies T(S(v)) = T(u) \implies S(T(v)) = T(u) \implies T(u) \in Im(S) \\
\implies \boxed{ Im(S) \text{ is } T\text{-invariant} } \\
}
$$
### 5b.ii
$$
\displaylines{
\text{Prove: } ker(S) \text{ is } T\text{-invariant} \\
\\
\text{Proof:} \\
\text{Let } v \in ker(S) \\
\implies S(v) = 0 \implies T(S(v)) = T(0) = 0 \\
\implies S(T(v)) = T(S(v)) = 0 \implies T(v) \in ker(S) \\
\implies \boxed{ ker(S) \text{ is } T\text{-invariant} } \\
}
$$
## 5c
$$
\displaylines{
\text{Let } T: V \to V \text{ be an isomorphism} \\
\text{Let } U \subseteq V \text{ be } T\text{-invariant} \\
\text{Prove: } U \text{ is } T^{-1}\text{-invariant} \\
\\
\text{Proof:} \\
\text{Let } B = \Set{ u_{1}, u_{2}, \dots, u_{k} } \text{ be a basis of } U \\
\implies S = \Set{ T(u_{1}), T(u_{2}), \dots, T(u_{k}) } \subseteq U \\
\text{Let } S \text{ be a linear dependence} \\
\implies \exists i \in [1, k]: T(u_{i}) \in sp(S \setminus \Set{ T(u_{i}) }) \\
\text{Let } T(u_{1}) \in sp(S \setminus \Set{ T(u_{1}) }) \quad \quad \text{(WLOG)} \\
\implies \exists \Set{ \alpha_{j} }_{j \in [2, k]}: \alpha_{j}T(u_{1}) = \sum_{j=2}^{k} T(u_{j}) \\
\implies u_{1} = T^{-1}T(u_{1}) = T^{-1}\left( \sum_{j=2}^{k} \alpha_{j}T(u_{j}) \right) = T^{-1}T\left( \sum_{j=2}^{k} \alpha_{j}u_{j} \right) = \sum_{j=2}^{k} \alpha_{j}u_{j} \\
\implies u_{1} \in sp(B \setminus \Set{ u_{1} }) - \text{Contradiction!} \\
\implies S \text{ is a linear independence} \\
\implies sp(S) = U \implies T[U] = U \\
\text{Let } u \in U \\
T[U] = U \implies \exists v \in U: T(v) = u \\
\implies T^{-1}(u) = T^{-1}(T(v)) = v \in U \implies \boxed{ U \text{ is } T^{-1}\text{-invariant} } \\
}
$$
