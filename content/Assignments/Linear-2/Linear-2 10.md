---
{"publish":true,"created":"11/06/25, 11:06","modified":"2025-11-21T21:10:02.777+02:00","tags":["Academia","Assignment","Linear-2"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Let } x, y, z, w \in [0, \infty): x + y + z + w = 4 \\
\text{Find: } \max\{\sqrt{ x } + \sqrt{ y } + \sqrt{ z } + \sqrt{ w }\} \\
\\
\text{Solution:} \\
(\sqrt{ x } + \sqrt{ y } + \sqrt{ z } + \sqrt{ w })^{2} \leq 4(x + y + z + w) = 16 \\
\implies \sqrt{ x } + \sqrt{ y } + \sqrt{ z } + \sqrt{ w } \leq 4 \\
\text{Let } x = y = z = w = 1 \\
\implies \sqrt{ x } + \sqrt{ y } + \sqrt{ z } + \sqrt{ w } = 4 \\
\implies \boxed{ \max\{\sqrt{ x } + \sqrt{ y } + \sqrt{ z } + \sqrt{ w }\} = 4 } \\
}
$$
# 2
$$
\displaylines{
\text{Let } V = \mathbb{R}^{2} \text{ with standrad inner product} \\
\text{Let } W = \mathbb{R}^{3} \text{ with standrad inner product} \\
\text{Let } T: V \to W \text{ be a linear operator} \\
T\begin{pmatrix}
x \\
y \\
\end{pmatrix} = \begin{pmatrix}
x+y \\
2y \\
2x-y \\
\end{pmatrix} \\
\text{Find } T^{*} \\
\\
\text{Solution:} \\
\text{Let } B, C \text{ be standard bases of } V, W \\
B, C \text{ are orthonormal} \\
\implies ([T]^{B}_{C})^{*} = [T^{*}]^{C}_{B} \\
[T]^{B}_{C} = \begin{pmatrix}
\overset{ | }{ \underset{ | }{ [T(e_{1})]_{C} } } & \overset{ | }{ \underset{ | }{ [T(e_{2})]_{C} } }
\end{pmatrix} = \begin{pmatrix}
1 & 1 \\
0 & 2 \\
2 & -1 \\
\end{pmatrix} \\
\implies [T^{*}]^{C}_{B} = \begin{pmatrix}
1 & 0 & 2 \\
1 & 2 & -1 \\
\end{pmatrix} \\
\implies [T^{*}(v)]_{B} = [T^{*}]^{C}_{B}[v]_{C} = \begin{pmatrix}
1 & 0 & 2 \\
1 & 2 & -1 \\
\end{pmatrix}\begin{pmatrix}
x \\
y \\
z \\
\end{pmatrix} = \begin{pmatrix}
x+2z \\
x+2y-z \\
\end{pmatrix} \\
\implies \boxed{ T^{*}\begin{pmatrix}
x \\
y \\
z \\
\end{pmatrix} = \begin{pmatrix}
x+2z \\
x+2y-z \\
\end{pmatrix} } \\
}
$$
# 3
$$
\displaylines{
\text{Let } V \text{ be an inner product space} \\
\text{Let } \dim V = n \\
\text{Let } W \leq V \text{ be a subspace of } V \\
\text{Let } \dim W = k \\
\text{Let } T: V \to V \\
T(v) = P_{W}(v) \\
\text{Find } T^{*} \\
\\
\text{Solution:} \\
\text{Let } v \in V \\ 
\text{Let } B_{W} = \Set{ w_{1}, \dots, w_{k} } \text{ be an orthonormal basis of } W \\
\implies P_{W}(v) = \sum_{i=1}^{k} \langle v, w_{i} \rangle w_{i} \\
\text{Let } B = \Set{ w_{1}, \dots, w_{k}, v_{k+1}, \dots, v_{n} } \text{ be an orthonormal basis of } V \\
T^{*}(v) = \sum_{i=1}^{k} \overline{\langle Tw_{i}, v \rangle}w_{i} + \sum_{i=k+1}^{n} \overline{\langle Tv_{i}, v \rangle}v_{i} \\
\forall i \in [1, k]: w_{i} \in W \implies T(w_{i}) = P_{W}(w_{i}) = w_{i} \\
\forall i \in [k+1, n]: v_{i} \in W^{\perp} \implies P_{W}(v_{i}) = 0 \\
\implies T^{*}(v) = \sum_{i=1}^{k} \overline{\langle w_{i}, v \rangle}w_{i} + \sum_{i=k+1}^{n} \overline{\langle 0, v \rangle}v_{i} = \\
= \sum_{i=1}^{k} \langle v, w_{i} \rangle w_{i} = P_{W}(v) = T(v) \\
\implies \boxed{ T^{*} = T } \\
}
$$
# 4
$$
\displaylines{
\text{Let } T: V \to W \text{ a linear operator} \\
\text{Prove: } (\mathrm{Im}T)^{\perp} = \ker T^{*} \\
\\
\text{Proof:} \\
\boxed{ \supseteq } \text{ Let } w \in \ker T^{*} \\
\implies \forall v \in V: \langle Tv, w \rangle = \langle v, T^{*}w \rangle = \langle v, 0 \rangle = 0 \\
\implies \forall u \in \mathrm{Im}T: \langle u, w \rangle = 0 \implies w \in (\mathrm{Im}T)^{\perp} \implies \boxed{ \ker T^{*} \subseteq (\mathrm{Im}T)^{\perp} } \\
\\
\boxed{ \subseteq } \text{ Let } w \in (\mathrm{Im}T)^{\perp} \\
\implies \forall v \in V: \langle Tv, w \rangle = \langle v, T^{*}w \rangle = 0 \\
\implies T^{*}w = 0 \implies w \in \ker T^{*} \implies \boxed{ (\mathrm{Im}T)^{\perp} \subseteq \ker T^{*} } \\
\\
\text{Alternatively:} \\
w \in (\mathrm{Im}T)^{\perp} \iff \forall v \in V: \langle Tv, w \rangle = \langle v, T^{*}w \rangle = 0 \iff T^{*}w = 0 \iff w \in \ker T^{*}
}
$$
# 5a
$$
\displaylines{
\text{Let } T: V \to W \text{ be a linear operator} \\
\text{Prove: } T \text{ is surjective} \iff T^{*} \text{ is injective} \\
\\
\text{Proof:} \\
\boxed{ \implies } \text{ Let } T \text{ be surjective} \\
\text{Let } T^{*}(w) = 0 \\
\implies \forall v \in V: \langle v, T^{*}(w) \rangle = \langle Tv, w \rangle = 0 \\
\forall u \in W: \exists v \in V: T(v) = u \implies \forall u \in W: \langle u, w \rangle = 0 \implies w = 0 \\
\implies \boxed{ T^{*} \text{ is injective} } \\
\\
\boxed{ \impliedby } \text{ Let } T^{*} \text{ be injective} \\
\text{Let } \exists w \in W: \forall v \in V: T(v) \neq w \\
\implies \mathrm{Im}T \subset W \implies \exists u \neq 0 \in (\mathrm{Im}T)^{\perp} \\
\implies \forall v \in V: \langle T(v), u \rangle = \langle v, T^{*}(u) \rangle = 0 \\
\implies T^{*}(u) = 0 \implies \ker T^{*} \neq \Set{ 0 } \\
\implies T^{*} \text{ is not injective} - \text{Contradiction!} \\
\implies \forall w \in W: \exists v \in V: T(v) = w \implies \boxed{ T \text{ is surjective} } \\
}
$$
# 5b
$$
\displaylines{
\text{Let } T: V \to W \text{ be a linear operator} \\
\text{Prove: } T \text{ is injective} \iff T^{*} \text{ is surjective} \\
\\
\text{Proof:} \\
T = (T^{*})^{*} \\
\implies \text{By 5a } \boxed{ T^{*} \text{ is surjective} \iff (T^{*})^{*} = T \text{ is injective} } \\
}
$$
# 6
$$
\displaylines{
\text{Let } V \text{ be an inner product space over } \mathbb{F} \\
\text{Let } \dim V = n \\
\text{Let } U, W \leq V \text{ subspaces of } V \\
\text{Let } U \oplus W = V \\
\text{Let } P: V \to V \\
\forall v \in V: \exists u \in U, w \in W: v = u + w \\
\text{Let } \forall v \in V: P(v) = P(u + w) = u \\
P \text{ is then denoted } P_{U}^{U, W} \text{ or } \pi_{U}^{U, W} \\
}
$$
## 6a
$$
\displaylines{
\text{Let } U \leq V \text{ be a subspace of } V \\
\text{Prove: } P_{U}^{U, U^{\perp}} = P_{U} \\
\\
\text{Proof:} \\
\text{Let } v \in V \\
\exists u \in U, w \in U^{\perp}: v = u + w \\
P(v) = P(u+w) = u \\
U \oplus U^{\perp} = V \\
\forall u \in U: P(u) = P(u + 0) = u = P_{U}(u) \\
\forall w \in U^{\perp} = P(w) = P(0 + w) = 0 = P_{U}(w) \\
\implies \forall v \in V: P(v) = P_{U}(v) \implies \boxed{ P = P_{U}^{U, U^{\perp}} = P_{U} } \\
}
$$
## 6b
$$
\displaylines{
\text{Let } V = \mathbb{R}^{4} \text{ with standard inner product} \\
\text{Let } U = sp\Set{ \begin{pmatrix}
1 \\
1 \\
1 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
1 \\
1 \\
0 \\
\end{pmatrix} }, W = sp\Set{ \begin{pmatrix}
1 \\
1 \\
0 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
0 \\
0 \\
0 \\
\end{pmatrix} } \\
\text{Find } P_{U}^{U, W} \text{ and } (P_{U}^{U, W})^{*} \\
\\
\text{Solution:} \\
\text{Let } \alpha \begin{pmatrix}
1 \\
1 \\
1 \\
1 \\
\end{pmatrix} + \beta \begin{pmatrix}
1 \\
1 \\
1 \\
0 \\
\end{pmatrix} + \gamma \begin{pmatrix}
1 \\
1 \\
0 \\
1 \\
\end{pmatrix} + \delta \begin{pmatrix}
1 \\
0 \\
0 \\
0 \\
\end{pmatrix} = 0 \\
\implies \left\{\begin{array}{}
\alpha+\beta+\gamma+\delta = 0 \\
\alpha+\beta+\gamma = 0 \\
\alpha+\beta = 0 \\
\alpha+\gamma = 0 \\
\end{array}\right. \implies \left\{\begin{array}{}
\delta = 0 \\
-\alpha = 0 \\
\beta = -\alpha \\
\gamma = -\alpha \\
\end{array}\right. \implies \alpha = \beta = \gamma = \delta = 0 \\
v \in U \cap W \implies \left(\begin{array}{cccc|c}
1 & 1 & -1 & -1 & 0 \\
1 & 1 & -1 & 0 & 0 \\
1 & 1 & 0 & 0 & 0 \\
1 & 0 & -1 & 0 & 0 \\
\end{array}\right) \overset{ R_{4} - R_{2} + R_{3} }{ \to } \left(\begin{array}{cccc|c}
1 & 1 & -1 & -1 & 0 \\
1 & 1 & -1 & 0 & 0 \\
1 & 1 & 0 & 0 & 0 \\
1 & 0 & 0 & 0 & 0 \\
\end{array}\right) \implies U \cap V = \Set{ 0 } \\
\implies U \oplus W = V \\
\forall v \in V: v = \begin{pmatrix}
x \\
y \\
z \\
w \\
\end{pmatrix} = \alpha (\begin{pmatrix}
1 \\
1 \\
1 \\
1 \\
\end{pmatrix} + \beta \begin{pmatrix}
1 \\
1 \\
1 \\
0 \\
\end{pmatrix}) + (\gamma \begin{pmatrix}
1 \\
1 \\
0 \\
1 \\
\end{pmatrix} + \delta \begin{pmatrix}
1 \\
0 \\
0 \\
0 \\
\end{pmatrix}) \\
\left(\begin{array}{cccc|c}
1 & 1 & 1 & 1 & x \\
1 & 1 & 1 & 0 & y \\
1 & 1 & 0 & 0 & z \\
1 & 0 & 1 & 0 & w \\
\end{array}\right) \to \left(\begin{array}{cccc|c}
1 & 1 & 1 & 1 & x \\
1 & 1 & 1 & 0 & y \\
1 & 1 & 0 & 0 & z \\
1 & 0 & 0 & 0 & w-y+z \\
\end{array}\right) \to \left(\begin{array}{cccc|c}
0 & 0 & 0 & 1 & x-y \\
0 & 0 & 1 & 0 & y-z \\
0 & 1 & 0 & 0 & y-w \\
1 & 0 & 0 & 0 & w-y+z \\
\end{array}\right) \\
\implies \left\{\begin{array}{}
\alpha = w - y + z \\
\beta = y - w \\
\gamma = y - z \\
\delta = x - y \\
\end{array}\right. \\
\implies \boxed{ P(v) = P\begin{pmatrix}
x \\
y \\
z \\
w \\
\end{pmatrix} = \alpha \begin{pmatrix}
1 \\
1 \\
1 \\
1 \\
\end{pmatrix} + \beta \begin{pmatrix}
1 \\
1 \\
1 \\
0 \\
\end{pmatrix} = \begin{pmatrix}
z \\
z \\
z \\
w-y+z \\
\end{pmatrix} } \\
\text{Let } B \text{ be a standard basis of } V \\
B \text{ is then orthonormal} \\
\implies [P]^{B}_{B} = \begin{pmatrix}
\overset{ | }{ \underset{ | }{ [P(e_{1})]_{B} } } & \overset{ | }{ \underset{ | }{ [P(e_{2})]_{B} } } & \overset{ | }{ \underset{ | }{ [P(e_{3})]_{B} } } & \overset{ | }{ \underset{ | }{ [P(e_{4})]_{B} } } \\
\end{pmatrix} = \begin{pmatrix}
0 & 0 & 1 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 1 & 0 \\
0 & -1 & 1 & 1 \\
\end{pmatrix} \\
\implies [P^{*}]^{B}_{B} = ([P]^{B}_{B})^{*} = \begin{pmatrix}
0 & 0 & 0 & 0 \\
0 & 0 & 0 & -1 \\
1 & 1 & 1 & 1 \\
0 & 0 & 0 & 1 \\
\end{pmatrix} \\
\implies [P^{*}(v)]_{B} = \begin{pmatrix}
0 & 0 & 0 & 0 \\
0 & 0 & 0 & -1 \\
1 & 1 & 1 & 1 \\
0 & 0 & 0 & 1 \\
\end{pmatrix}\begin{pmatrix}
x \\
y \\
z \\
w \\
\end{pmatrix} = \begin{pmatrix}
0 \\
-w \\
x+y+z+w \\
w \\
\end{pmatrix} \\
\implies \boxed{ P^{*}\begin{pmatrix}
x \\
y \\
z \\
w \\
\end{pmatrix} = \begin{pmatrix}
0 \\
-w \\
x+y+z+w \\
w \\
\end{pmatrix} } \\
}
$$
