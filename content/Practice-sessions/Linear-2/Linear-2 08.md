---
{"publish":true,"created":"20/05/25, 14:05","modified":"2025-11-21T21:10:25.282+02:00","tags":["Academia","Practice","Linear-2"],"cssclasses":""}
---

$$
\displaylines{
\text{Let } S \subseteq V \\
S^{\perp} = \Set{ v \in V | \forall u \in S: \langle v, u \rangle = 0 } \\
\\
S \subseteq (S^{\perp})^{\perp} \\
S = (S^{\perp})^{\perp} \iff S \text{ is a subspace of } V \\
}
$$
$$
\displaylines{
W \text{ is a subspace of } V \\
B \text{ is a basis of } W \\
v \in V \\
\forall u \in B: \langle v, u \rangle = 0 \implies v \in W^{\perp} \\
}
$$
---
$$
\displaylines{
S = \Set{ \begin{pmatrix}
1 \\
0 \\
1 \\
\end{pmatrix}, \begin{pmatrix}
1 \\
1 \\
0 \\
\end{pmatrix} } \\
S^{\perp} = \Set{ \begin{pmatrix}
v_{1} \\
v_{2} \\
v_{3} \\
\end{pmatrix} | \left\{\begin{array}{}
v_{1} + v_{3} = 0 \\
v_{1} + v_{2} = 0 \\
\end{array}\right. } = \Set{ \begin{pmatrix}
v_{1} \\
-v_{1} \\
-v_{1} \\
\end{pmatrix} } = sp\Set{ \begin{pmatrix}
1 \\
-1 \\
-1 \\
\end{pmatrix} } \\
}
$$
---
$$
\displaylines{
A \in \mathbb{F}^{m \times n} \\
\text{Find } C(A)^{\perp}, C(A^{T})^{\perp} \\
\\
\text{Solution:} \\
v \in C(A^{T})^{\perp} \iff \forall i \in [1, m]: \langle C_{i}(A^{T}), v \rangle = 0 \\
\iff \forall i \in [1, m]: \langle R_{i}(A), v \rangle = 0 \\
\iff Av = 0 \\
v \in C(A^{T})^{\perp} \iff v \in N(A) \\
v \in C(A)^{\perp} \iff v \in N(A^{T}) \\
}
$$
---
$$
\displaylines{
\text{Prove: } (U + W)^{\perp} = U^{\perp} \cap W^{\perp} \\
\\
\text{Proof:} \\
\boxed{ \supseteq } \text{ Let } v \in U^{\perp} \cap W^{\perp} \\
v \in U^{\perp} \\
v \in W^{\perp} \\
\implies \forall u + w \in U + W: \langle v, u+w \rangle = \langle v, u \rangle + \langle v, w \rangle = 0 + 0 = 0 \\
\implies v \in (U + W)^{\perp} \implies U^{\perp} \cap W^{\perp} = (U + W)^{\perp} \\
\boxed{ \subseteq } \text{ Let } v \in (U + W)^{\perp} \\
u \in U \implies u = u + 0 \in U + W \implies \langle v, u \rangle = 0 \implies v \in U^{\perp} \\
w \in W \implies w = 0 + w \in U + W \implies \langle v, w \rangle = 0 \implies v \in W^{\perp} \\
}
$$
---
$$
\displaylines{
\text{Let } B \text{ be a basis of } V \\
\forall v, u \in V: \langle v, u \rangle = [v]_{B}^{T}G_{B}\overline{[u]_{B}} \\
\\
\text{Proof:} \\
\text{Let } B = \Set{ v_{1}, \dots, v_{n} } \\
\text{Let } v, u \in V \\
v = \sum_{i=1}^{n} \alpha_{i}v_{i} \\
u = \sum_{i=1}^{n} \beta_{i}v_{i} \\
\langle v, u \rangle = \left\langle  \sum_{i=1}^{n} \alpha_{i}v_{i}, u  \right\rangle = \sum_{i=1}^{n} \alpha_{i}\langle v_{i}, u \rangle = \\
= \sum_{i=1}^{n} \alpha_{i}\left\langle  v_{i}, \sum_{j=1}^{n} \beta_{j}v_{j} \right\rangle = \boxed{ \sum_{i=1}^{n} \sum_{j=1}^{n} \alpha_{i}\overline{\beta_{j}}\langle v_{i}, v_{j} \rangle } \\
\\
[v]_{B}^{T}G_{B}\overline{[u]_{B}} = \begin{pmatrix}
\alpha_{1} & \dots & \alpha_{n} \\
\end{pmatrix}G_{B}\begin{pmatrix}
\overline{\beta_{1}} \\
\vdots \\
\overline{\beta_{n}} \\
\end{pmatrix} = \\
= \begin{pmatrix}
\alpha_{1} & \dots & \alpha_{n} \\
\end{pmatrix} \begin{pmatrix}
\sum_{i=1}^{n} \overline{\beta_{i}}(G_{B})_{1i} \\
\vdots \\
\sum_{i=1}^{n} \overline{\beta_{i}}(G_{B})_{ni} \\
\end{pmatrix} = \sum_{i=1}^{n} \sum_{j=1}^{n} \alpha_{i}\overline{\beta_{j}}(G_{B})_{ij} = \\
= \boxed{ \sum_{i=1}^{n} \sum_{j=1}^{n} \alpha_{i}\overline{\beta_{j}}\langle v_{i}, v_{j} \rangle } \\
}
$$
---
$$
\displaylines{
\text{Let } a_{1}, \dots, a_{n} \in \mathbb{R} \\
\text{Prove: } (a_{1} + \dots + a_{n})^{2} \leq n(a_{1}^{2} + \dots + a_{n}^{2}) \\
\\
\text{Proof:} \\
\langle v, 1 \rangle = a_{1} + \dots + a_{n} \\
\implies \left\lvert \langle v, 1 \rangle \right\rvert = \left\lvert a_{1} + \dots + a_{n} \right\rvert \\
\left\lvert \langle v, 1 \rangle \right\rvert \leq \lVert v \rVert \cdot \lVert 1 \rVert = \sqrt{ a_{1}^{2} + \dots + a_{n}^{2} } \cdot \sqrt{ n } \\
\implies \left\lvert \langle v, 1 \rangle \right\rvert^{2} = (a_{1} + \dots + a_{n})^{2} \leq n(a_{1}^{2} + \dots + a_{n}^{2}) \\
}
$$
---
$$
\displaylines{
\text{Let } B_{1} = \Set{ v \in V : \lVert v \rVert = 1 } \\
\text{Let } v \neq 0 \in V \\
\text{Prove: } \forall u \in B_{1}: \lVert v - u \rVert \geq \left\lVert  v - \frac{v}{\lVert v \rVert}  \right\rVert \\
\\
\text{Proof:} \\
\text{Let } v \neq 0 \in V \\
\lVert v-u \rVert^{2} = \langle v-u, v-u \rangle = \lVert v \rVert^{2} - \langle v, u \rangle - \overline{\langle v, u \rangle} + \lVert u \rVert^{2} = \lVert v \rVert^{2} - 2\mathrm{Re}(\langle v, u \rangle) + 1 \\
\left\lVert  v - \frac{v}{\lVert v \rVert} \right\rVert^{2} = \left\lvert 1 - \frac{1}{\lVert v \rVert} \right\rvert^{2} \cdot \lVert v \rVert^{2} = \left( 1 - \frac{2}{\lVert v \rVert} + \frac{1}{\lVert v \rVert^{2}} \right) \cdot \lVert v \rVert^{2} = \lVert v \rVert^{2} - 2 \lVert v \rVert + 1 \\
\\
\lVert v-u \rVert^{2} - \left\lVert  v-\frac{v}{\lVert v \rVert}  \right\rVert^{2} = 2(\lVert v \rVert - \mathrm{Re}(\langle v, u \rangle)) \\
\mathrm{Re}(\langle v, u \rangle) \leq \left\lvert \langle v, u \rangle \right\rvert \leq \lVert v \rVert \cdot \lVert u \rVert = \lVert v \rVert \\
\implies \lVert v \rVert - \mathrm{Re}(\langle v, u \rangle) \geq 0 \implies \lVert v-u \rVert^{2} - \left\lVert  v-\frac{v}{\lVert v \rVert}  \right\rVert^{2} \geq 0 \\
\implies \lVert v-u \rVert^{2} \geq \left\lVert  v-\frac{v}{\lVert v \rVert}  \right\rVert^{2} \implies \boxed{ \lVert v-u \rVert \geq \left\lVert  v-\frac{v}{\lVert v \rVert}  \right\rVert } \\
}
$$
---
$$
\displaylines{
W \text{ is a subspace of } V \\
\implies W \oplus W^{\perp} = V \\
\implies \dim W + \dim W^{\perp} = V \\
\implies dim W^{\perp} + \dim (W^{\perp})^{\perp} = \dim V \\
\implies \dim W = \dim (W^{\perp})^{\perp} \implies W = (W^{\perp})^{\perp} \\
}
$$
---
$$
\displaylines{
P_{W} : V \to V \text{ is a linear transformation} \\
\mathrm{Im} P_{W} = W \\
\ker P_{W} = W^{\perp} \\
v - P_{W}(v) \in W^{\perp} \\
P_{W}^{2} = P_{W} \\
B = \Set{ w_{1}, \dots, w_{k} } \text{ is an orthogonal basis of } W \\
\implies P_{W}(v) = \sum_{i=1}^{k} \frac{\langle v, w_{i} \rangle}{\lVert w_{i} \rVert^{2}}w_{i} \\
}
$$
---
$$
\displaylines{
\text{Let } W \text{ be a subspace of } V \\
\text{Let } v \in V \\
\forall w \in W: \lVert v - w \rVert \geq \lVert v - P_{W}(v) \rVert \\
}
$$
---
