---
{"publish":true,"created":"20/05/25, 10:05","modified":"2025-11-21T21:10:14.521+02:00","tags":["Academia","Lecture","Linear-2"],"cssclasses":""}
---

## Orthogonal decomposition theorem #theorem 
$$
\displaylines{
\text{Let } W \subseteq V \text{ be a subspace of } V \\
\text{Then } W \oplus W^{\perp} = V \\
\\
\text{Proof:} \\
\text{Let } v \in W \cap W^{\perp} \\
\implies \langle v, v \rangle = 0 \implies v = 0 \implies W \cap W^{\perp} = \Set{ 0 } \\
\text{Let } v \in V \\
v = P_{W}(v) + (v - P_{W}(v)) \\
P_{W}(v) \in W \\
v - P_{W}(v) \in W^{\perp} \\
\implies v \in W + W^{\perp} \implies V \subseteq W + W^{\perp} \implies \boxed{ W \oplus W^{\perp} = V } \\
}
$$
---
$$
\displaylines{
W \oplus U = V \centernot\implies U = W^{\perp} \\
\\
\text{Example:} \\
V = \mathbb{R}^{2} \\
U = sp\Set{ \begin{pmatrix}
1 \\
0 \\
\end{pmatrix} },
W = sp\Set{ \begin{pmatrix}
1 \\
1 \\
\end{pmatrix} } \\
W \oplus U = \mathbb{R}^{2} = V \\
\begin{pmatrix}
1 \\
-1 \\
\end{pmatrix} \in W^{\perp}, \not\in U \\
}
$$
---
$$
\displaylines{
\text{Let } W \text{ be a subspeace of } V \\
\text{Let } B_{1}, B_{2} \text{ be orthogonal bases of } W \\
\text{Then } \forall v \in V: P_{W}^{B_{1}}(v) = P_{W}^{B_{2}}(v) \\
\\
\text{Proof:} \\
\text{Let } v \in V \\
W \oplus W^{\perp} = V \iff \exists! w \in W, w^{\perp} \in W^{\perp} : v = w + w^{\perp} \\
v = \underbrace{ P^{B_{1}}_{W}(v) }_{ w_{1} } + \underbrace{ (v - P_{W}^{B_{1}}(v)) }_{ w_{1}^{\perp} } \\
v = \underbrace{ P^{B_{2}}_{W}(v) }_{ w_{2} } + \underbrace{ (v - P_{W}^{B_{2}}(v)) }_{ w_{2}^{\perp} } \\
W \oplus W^{\perp} = V \implies w_{1} = w_{2}, w_{1}^{\perp} = w_{2}^{\perp} \\
\implies \boxed{ P_{W}^{B_{1}}(v) = P_{W}^{B_{2}}(v) } \\
}
$$
## Gram-Schmidt orthonormalization #definition 
$$
\displaylines{
\text{Let } B = \Set{ v_{1}, \dots, v_{n} } \text{ be a basis of } V \\
\text{Let } u_{1} = v_{1} \\
\text{Let } U_{k} = sp\Set{ u_{1}, \dots, u_{k} } \\
\text{Let } \forall k \in [2, n]: \boxed{ u_{k} = v_{k} - P_{U_{k-1}}(v_{k}) } \\
\forall i \in [1, k-1]: u_{i} \in U_{k-1} \\
u_{k} = v_{k} - \underbrace{ P_{U_{k-1}}(v_{k}) }_{ \in U_{k-1} } \in U_{k-1}^{\perp} \\
\implies \forall k \in [1, n]: U_{k} \text{ is on orthogonal set} \\
u_{1} = v_{1} \in sp\Set{ v_{1} } \implies U_{1} = sp\Set{ v_{1} } \\
u_{2} \in v_{2} + U_{1} = sp\Set{ v_{1}, v_{2} } \implies U_{2} = sp\Set{ v_{1}, v_{2} } \\
\implies \text{By induction:} \\
\forall k \in [1, n]: u_{k} \in v_{k} + U_{k-1} = sp\Set{ v_{1}, \dots, v_{k} } \implies U_{k} = sp\Set{ v_{1}, \dots, v_{k} } \\
\forall k \in [1, n]: v_{k} \not\in U_{k-1} \implies v_{k} \neq P_{U_{k-1}}(v_{k}) \implies u_{k} \neq 0 \implies \lVert u_{k} \rVert > 0 \\
\implies \boxed{ \Set{ u_{1}, \dots, u_{n} } \text{ is an orthogonal basis of } V } \\
\boxed{ \Set{ \frac{u_{1}}{\lVert u_{1} \rVert }, \frac{u_{2}}{\lVert u_{2} \rVert }, \dots, \frac{u_{n}}{\lVert u_{n} \rVert } } \text{ is then an orthonormal basis of } V } \\
}
$$
## Example
$$
\displaylines{
V = \mathbb{R}^{3} \\
U = sp\Set{ \begin{pmatrix}
1 \\
1 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
2 \\
3 \\
\end{pmatrix} } \\
\text{Find an orthonormal basis of } U \\
\\
\text{Solution:} \\
u_{1} = v_{1} = \begin{pmatrix}
1 \\
1 \\
1 \\
\end{pmatrix} \\
u_{2} = v_{2} - \frac{\langle v_{2}, u_{1} \rangle}{\lVert u_{1} \rVert^{2} }u_{1} = \begin{pmatrix}
1 \\
2 \\
3 \\
\end{pmatrix} - 2\begin{pmatrix}
1 \\
1 \\
1 \\
\end{pmatrix} = \begin{pmatrix}
-1 \\
0 \\
1 \\
\end{pmatrix} \\
\langle u_{1}, u_{2} \rangle = 0 \\
\implies \text{Orthonormal basis of } U \text{ is } \Set{ \frac{1}{\sqrt{ 3 }}\begin{pmatrix}
1 \\
1 \\
1 \\
\end{pmatrix}, \frac{1}{\sqrt{ 2 }}\begin{pmatrix}
-1 \\
0 \\
1 \\
\end{pmatrix} } \\
}
$$
---
$$
\displaylines{
\text{Note: we can extend any orthogonal basis by using Gram-Schmidt process} \\
\Set{ u_{1}, \dots, u_{k} } \to \Set{ u_{1}, \dots, u_{k}, v_{1}, \dots, v_{t} } \to \Set{ \hat{u_{1}}, \dots, \hat{u_{k}}, \hat{v_{1}}, \dots, \hat{v_{t}} } \\
\\
\text{Even more than that:} \\
\forall i \in [1, t]: \hat{v_{i}} \in \Set{ \hat{u_{1}}, \dots, \hat{u_{k}} }^{\perp} = U^{\perp} \\
\implies \Set{ \hat{v_{1}}, \dots, \hat{v_{t}} } \subseteq U^{\perp} \\
U \oplus U^{\perp} = V \\
\implies \underbrace{ \dim V }_{ k + t } = \dim U + \dim U^{\perp} = k + \dim U^{\perp} \\
\implies \dim U^{\perp} = t \\
\implies sp\Set{ \hat{v_{1}}, \dots, \hat{v_{t}} } = U^{\perp} \\
}
$$
---
## Orthogonal projection norm #lemma 
$$
\displaylines{
\text{Let } V \text{ be an inner product space} \\
\text{Let } W \subseteq V \text{ be a subspace of } V \\
\text{Then } \forall w \in W: \lVert v - w \rVert \geq \lVert v - P_{W}(v) \rVert \\
\text{And } \lVert v - w \rVert = \lVert P_{W}(v) - w \rVert \iff w = P_{W}(v) \\
\\
\text{Proof:} \\
\text{Let } v \in V \\
\text{Let } w \in W \\
\lVert v - w \rVert^{2} = \lVert \underbrace{ v - P_{W}(v) }_{ \in W^{\perp} } + \underbrace{ P_{W}(v) - w }_{ \in W } \rVert^{2} = \\
\overset{ \text{By Pythagorean theorem} }{ = } \lVert v - P_{W}(v) \rVert^{2} + \lVert P_{W}(v) - w \rVert^{2} \geq \lVert v - P_{W}(v) \rVert^{2} \\
\implies \lVert v - w \rVert^{2} \geq \lVert v - P_{W}(v) \rVert^{2} \implies \boxed{ \lVert  v - w \rVert \geq \lVert v - P_{W}(v) \rVert } \\
\\
\lVert v - w \rVert = \lVert v - P_{W}(v) \rVert \iff \lVert P_{W}(v) - w \rVert = 0 \\
\iff P_{W}(v) - w = 0 \iff \boxed{ P_{W}(v) = w } \\
}
$$
## Bessel's inequality #lemma 
$$
\displaylines{
\text{Let } V \text{ be an inner product space} \\
\text{Let } A =\Set{ v_{1}, \dots, v_{k} } \text{ be an orthonormal set} \\
\text{Let } v \in V \\
\lVert v \rVert^{2} \geq \sum_{i=1}^{k} \left\lvert \langle v, v_{i} \rangle \right\rvert^{2} \\
\lVert v \rVert^{2} = \sum_{i=1}^{k} \left\lvert \langle v, v_{i} \rangle \right\rvert^{2} \iff v \in sp A \\
\\
\text{Proof:} \\
\text{Let } v \in V \\
\text{Let } B = A \cup \Set{ v_{k+1}, \dots, v_{k+t} } \text{ be an orthonormal basis of } V \\
\implies v = \sum_{i=1}^{k+t} \alpha_{i}v_{i} \\
B \text{ is orthonormal} \implies \forall i \in [1, k+t]: \alpha_{i} = \langle v, v_{i} \rangle \\
\implies v = \sum_{i=1}^{k+t} \langle v, v_{i} \rangle v_{i} \\
\lVert v \rVert^{2} = \left\lVert  \sum_{i=1}^{k+t} \langle v, v_{i} \rangle v_{i}  \right\rVert^{2} = \sum_{i=1}^{k+t} \lVert \langle v, v_{i} \rangle v_{i} \rVert^{2} = \sum_{i=1}^{k+1} \left\lvert \langle v, v_{i} \rangle \right\rvert^{2} \lVert v_{i} \rVert^{2} = \sum_{i=1}^{k+t} \left\lvert \langle v, v_{i} \rangle  \right\rvert^{2} \geq \sum_{i=1}^{k} \left\lvert \langle v, v_{i} \rangle \right\rvert^{2} \\
\implies \boxed{ \lVert v \rVert^{2} \geq \sum_{i=1}^{k} \left\lvert \langle v, v_{i} \rangle \right\rvert^{2} } \\
\\
\lVert v \rVert^{2} = \sum_{i=1}^{k} \left\lvert \langle v, v_{i} \rangle \right\rvert^{2} \iff \sum_{i=k+1}^{k+t} \left\lvert \langle v, v_{i} \rangle  \right\rvert^{2} = 0 \iff \forall i \in [k+1, k+t]: \langle v, v_{i} \rangle = 0 \\
\iff v = \sum_{i=1}^{k+t} \langle v, v_{i} \rangle v_{i} = \sum_{i=1}^{k} \langle v, v_{i} \rangle v_{i} \iff \boxed{ v \in sp A } \\
}
$$
## Cauchy-Schwarz inequality #lemma 
$$
\displaylines{
\text{Let } V \text{ be an inner product space} \\
\text{Let } v, u \in V \\
\lVert v \rVert \cdot \lVert u \rVert \geq \left\lvert \langle v, u \rangle \right\rvert \\
\lVert v \rVert \cdot \lVert u \rVert = \left\lvert \langle v, u \rangle \right\rvert \iff u = \alpha v \\
\\
\text{Proof:} \\
\text{Case 1. } u = v = 0 \\
\underbrace{ \lVert v \rVert }_{ 0 } \cdot \underbrace{ \lVert u \rVert }_{ 0 } \geq \underbrace{ \left\lvert \langle v, u \rangle  \right\rvert }_{ 0 } \\
\text{Case 2. } \left[\begin{array}{}
v \neq 0 \\
u \neq 0 \\
\end{array}\right. \quad \text{Let } v \neq 0 \\
\text{Let } A = \Set{ \frac{v}{\lVert v \rVert } } \\
A \text{ is an orthonormal set} \\
\text{By Bessel's inequality: } \lVert u \rVert^{2} \geq \left\lvert \left\langle  u, \frac{v}{\lVert v \rVert }  \right\rangle  \right\rvert^{2} = \frac{1}{\lVert v \rVert^{2} } \left\lvert \langle u, v \rangle  \right\rvert^{2} \underset{ \left\lvert z \right\rvert = \left\lvert \overline{z} \right\rvert  }{ = } \frac{1}{\lVert v \rVert^{2} } \left\lvert \langle v, u \rangle  \right\rvert^{2} \\
\implies \lVert u \rVert^{2} \cdot \lVert v \rVert^{2} \geq \left\lvert \langle v, u \rangle \right\rvert^{2} \\
\implies \boxed{ \lVert v \rVert \cdot \lVert u \rVert \geq \left\lvert \langle v, u \rangle  \right\rvert } \\
\\
\lVert v \rVert \cdot \lVert u \rVert = \left\lvert \langle v, u \rangle \right\rvert \iff \underbrace{ \lVert u \rVert^{2} = \frac{1}{\lVert v \rVert^{2} } \left\lvert \langle v, u \rangle  \right\rvert^{2} }_{ \text{Bessel's equality case} } \\
\iff u \in spA \iff \boxed{ u = \alpha v  }\\
}
$$
## Root norm #lemma 
$$
\displaylines{
\text{Let } v \in V \\
\sqrt{ \langle v, v \rangle } = \lVert v \rVert \ (\text{or } \lVert v \rVert^{2} = \langle v, v \rangle ) \\
\\
\text{Proof:} \\
\sqrt{ \langle v, v \rangle  } \geq 0 \\
\sqrt{ \langle v, v \rangle  } = 0 \iff v = 0 \\
\sqrt{ \langle \alpha v, \alpha v \rangle } = \sqrt{ \alpha^{2}\langle v, v \rangle  } = \left\lvert \alpha \right\rvert \sqrt{ \langle v, v \rangle  } \\
\lVert v + u \rVert^{2} = \langle v+u, v+u \rangle = \langle v, v+u \rangle + \langle u, v+u \rangle = \langle v, v \rangle + \langle v, u \rangle + \langle u, v \rangle + \langle u, u \rangle = \\
= \lVert v \rVert^{2} + \langle v, u \rangle + \overline{\langle v, u \rangle } + \lVert u \rVert^{2} = \lVert v \rVert^{2} + 2\mathrm{Re}(\langle v, u \rangle) + \lVert u \rVert^{2} \leq \\
\leq \lVert v \rVert^{2} + 2\left\lvert \langle v, u \rangle \right\rvert + \lVert u^{2} \rVert \overset{ \text{By Cauchy-Schwarz inequality} }{ \leq } \lVert v \rVert^{2} + 2\lVert v \rVert \cdot \lVert u \rVert + \lVert u \rVert^{2} = (\lVert v \rVert + \lVert u \rVert)^{2} \\
\implies \lVert v + u \rVert \leq \lVert v \rVert + \lVert u \rVert \\
}
$$
