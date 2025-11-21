---
{"publish":true,"created":"13/05/25, 14:05","modified":"2025-11-21T21:10:25.270+02:00","tags":["Academia","Practice","Linear-2"],"cssclasses":""}
---

$$
\displaylines{
T: V \to V \text{ is injective} \\
\langle \, ,  \rangle_{T} : V \times V \to \mathbb{F} \\
\\
\text{Show that } \langle \, ,  \rangle_{T} \text{ is an inner product} \\
\\
\text{Solution:} \\
\langle v + u, w \rangle_{T} = \langle T(v+u), T(w) \rangle = \langle T(v) + T(u), T(w) \rangle = \langle T(v), T(w) \rangle + \langle T(u), T(w) \rangle \\
\langle \alpha v, u \rangle_{T} = \langle T(\alpha v), T(u) \rangle = \langle \alpha T(v), T(u) \rangle = \alpha \langle T(v), T(u) \rangle = \alpha \langle v, u \rangle_{T} \\
\langle v, u \rangle_{T} = \langle T(v), T(u) \rangle = \overline{\langle T(u), T(v) \rangle } = \overline{\langle u, v \rangle_{T} } \\
\langle v, v \rangle_{T} = \langle T(v), T(v) \rangle \geq 0 \\
\langle v, v \rangle_{T} = 0 \iff \langle T(v), T(v) \rangle = 0 \iff T(v) = 0 \iff v \in ker(T) \\
\underline{T \text{ is injective}} \iff ker(T) = \Set{ 0 } \implies \langle \, ,  \rangle_{T} \text{ is an inner product} \\
}
$$
---
$$
\displaylines{
\text{Let } V \text{ be an inner product space} \\
\text{Let } \Set{ v_{1}, \dots, v_{n} } \subseteq V \\
\\
\text{Prove or disprove: } \sum_{i=1}^{n} \sum_{j=1}^{n} \langle v_{i}, v_{j} \rangle \geq 0 \\
\\
\text{Proof:} \\
\sum_{i=1}^{n} \sum_{j=1}^{n} \langle v_{i}, v_{j} \rangle = \sum_{j=1}^{n} \sum_{i=1}^{n} \langle v_{i}, v_{j} \rangle = \sum_{j=1}^{n} \left\langle \sum_{i=1}^{n} v_{i}, v_{j} \right\rangle = \\
= \sum_{j=1}^{n} \overline{\left\langle v_{j}, \sum_{i=1}^{n} v_{i} \right\rangle} = \overline{\sum_{j=1}^{n} \left\langle v_{j}, \sum_{i=1}^{n} v_{i} \right\rangle} = \overline{\left\langle  \sum_{j=1}^{n} v_{j}, \sum_{i=1}^{n} v_{i} \right\rangle } = \langle v, v \rangle \geq 0 \\
}
$$
---
$$
\displaylines{
\text{Prove: } v = 0 \iff \forall u \in V: \langle v, u \rangle = 0 \\
\\
\text{Let } B \text{ be a basis of } V \\
\text{Prove: } \forall i \in [1, n]: \langle v, v_{i} \rangle = \langle u, v_{i} \rangle \iff v = u \\
\\
\text{Proof:} \\
\text{Let } u \in V \\
v = 0 \implies \langle v, u \rangle = \langle 2v, u \rangle = \langle v, u \rangle + \langle v, u \rangle \implies \langle v, u \rangle = 0 \\
\forall u \in V: \langle v, u \rangle = 0 \underset{ u = v }{ \implies } \langle v, v \rangle = 0 \implies v = 0 \\
\\
\text{Proof:} \\
\langle v, v_{i} \rangle = \langle u, v_{i} \rangle \implies \langle v - u, v_{i} \rangle = 0 \\
\text{Let } w \in V \\
w = \sum_{i=1}^{n} \alpha_{i}v_{i} \\
\langle v - u, w \rangle = \left\langle  v - u, \sum_{i=1}^{n} \alpha_{i}v_{i}  \right\rangle = \overline{\left\langle  \sum_{i=1}^{n} \alpha_{i}v_{i}, v-u  \right\rangle } = \sum_{i=1}^{n} \overline{\alpha_{i}}\overline{\langle v - u, v_{i} \rangle} = 0 \\
}
$$
## Gram-Schmidt matrix
$$
\displaylines{
\text{Let } S = \Set{ v_{1}, \dots, v_{n} } \subseteq V \\
G_{S} \in \mathbb{F}^{n \times n}: (G_{S})_{ij} = \langle v_{i}, v_{j} \rangle \\
}
$$
---
$$
\displaylines{
\text{Prove: } G_{S} \text{ is non-invertible} \iff S \text{ is a linear dependence} \\
\\
\text{Proof:} \\
\text{Let } G_{S} \text{ be non-invertible} \\
\implies \exists \sum_{j=1}^{n} \alpha_{j}C_{j}(G_{S}) = 0 : \exists j \in [1, n]: \alpha_{j} \neq 0 \\
\implies 0 = \sum_{j=1}^{n} \alpha_{j}C_{j}(G_{S}) = \sum_{j=1}^{n} \alpha_{j}\begin{pmatrix}
\langle v_{1}, v_{j} \rangle \\
\langle v_{2}, v_{j} \rangle \\
\vdots \\
\langle v_{n}, v_{j} \rangle \\
\end{pmatrix} \\
\forall i \in [1, n]: \implies \sum_{j=1}^{n} \alpha_{j}\langle v_{i}, v_{j} \rangle = 0 \\
\implies \sum_{j=1}^{n} \langle v_{i}, \overline{\alpha_{j}}v_{j} \rangle = 0 \\
\implies \sum_{j=1}^{n} \overline{\langle \overline{\alpha_{j}}v_{j}, v_{i} \rangle } = \overline{ \sum_{j=1}^{n} \langle \overline{\alpha_{j}}v_{j}, v_{i} \rangle } = 0 \\
\implies \left\langle  \underbrace{ \sum_{j=1}^{n} \overline{\alpha_{j}}v_{j} }_{ u }, v_{i} \right\rangle = 0 \\
\langle u, u \rangle = \left\langle  \sum_{j=1}^{n} \overline{\alpha_{j}}v_{j}, u \right\rangle = \sum_{j=1}^{n} \overline{\alpha_{j}}\left\langle  v_{j}, u \right\rangle = 0 \\
\implies u = 0 \implies \sum_{i=1}^{n} \overline{\alpha_{i}}v_{i} = 0 \\
\exists j \in [1, n]: \alpha_{j} \neq 0 \implies \overline{\alpha_{j}} \neq 0 \\
\implies \boxed{ S \text{ is a linear dependence} } \\
}
$$
---
