---
{"publish":true,"created":"10/06/25, 14:06","modified":"2025-11-21T21:10:25.304+02:00","tags":["Academia","Practice","Linear-2"],"cssclasses":""}
---

## Conjugate linear operator
$$
\displaylines{
T: V \to W \\
T^{*}: W \to V \\
\forall v \in V, w \in W: \langle Tv, w \rangle = \langle v, T^{*}w \rangle \\
}
$$
### Properties
$$
\displaylines{
1. & T^{*} \text{ is a linear operator and unique} \\
2. & I^{*} = I \\
3. & (T+S)^{*} = T^{*} + S^{*} \\
4. & (T^{*})^{*} = T \\
5. & B, C \text{ orthonormal bases} \implies [T^{*}]^{C}_{B} = ([T]^{B}_{C})^{*} \\
6. & (ST)^{*} = T^{*}S^{*} \\
}
$$
---
$$
\displaylines{
\text{Proofs go as follows:} \\
2. \\
\forall v \in V: \langle v, v \rangle = \langle Iv, v \rangle = \langle v, I^{*}v \rangle \implies I^{*} = I \\
\\
3. \\
\forall v \in V: \langle v, (T+S)^{*}w \rangle = \langle (T+S)v, w \rangle = \langle Tv, w \rangle + \langle Sv, w \rangle = \langle v, T^{*}w \rangle + \langle v, S^{*}w \rangle = \\
= \langle v, (T^{*}+S^{*})w \rangle \implies (T+S)^{*} = T^{*} + S^{*} \\
\\
4. \\
\forall w \in W: \langle Tv, w \rangle = \langle v, T^{*}w \rangle = \overline{\langle T^{*}w, v \rangle} = \overline{\langle w, (T^{*})^{*}v \rangle} = \langle (T^{*})^{*}v, w \rangle \\
\implies (T^{*})^{*} = T \\
5. \text{ and } 6. \text{ in lecture } 10 \\
}
$$
---
$$
\displaylines{
V = \mathbb{R}^{2} \text{ with inner product } \langle v, u \rangle = 2v_{1}u_{1} + v_{2}u_{2} \\
W = \mathbb{R}^{2} \text{ with standrad inner product} \\
\\
T: V \to W \\
T\begin{pmatrix}
x \\
y \\
\end{pmatrix} = \begin{pmatrix}
2x + 3y \\
2y \\
\end{pmatrix} \\
\text{Find } T^{*} \\
\\
\text{Solution:} \\
\text{Let } B = \Set{ \begin{pmatrix}
\frac{1}{\sqrt{ 2 }} \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
\end{pmatrix} } \\
\text{Let } C = \Set{ \begin{pmatrix}
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
0 \\
1 \\
\end{pmatrix} } \\
[T]^{B}_{C} = \begin{pmatrix}
\sqrt{ 2 } & 3 \\
0 & 2 \\
\end{pmatrix} \\
\implies [T^{*}]^{C}_{B} = ([T]^{B}_{C})^{*} = ([T]^{B}_{C})^{T} = \begin{pmatrix}
\sqrt{ 2 } & 0 \\
3 & 2 \\
\end{pmatrix} \\
[T^{*}\begin{pmatrix}
1 \\
0 \\
\end{pmatrix}]_{B} = \begin{pmatrix}
\sqrt{ 2 } \\
3 \\
\end{pmatrix} \implies T^{*}\begin{pmatrix}
1 \\
0 \\
\end{pmatrix} = \begin{pmatrix}
1 \\
3 \\
\end{pmatrix} \\
[T^{*}\begin{pmatrix}
0 \\
1 \\
\end{pmatrix}]_{B} = \begin{pmatrix}
0 \\
2 \\
\end{pmatrix} \implies T^{*}\begin{pmatrix}
0 \\
1 \\
\end{pmatrix} = \begin{pmatrix}
0 \\
2 \\
\end{pmatrix} \\
\implies \boxed{ T^{*}\begin{pmatrix}
x \\
y \\
\end{pmatrix} = \begin{pmatrix}
x \\
3x+2y \\
\end{pmatrix} } \\
\text{Alternative solution:} \\
[T^{*}\begin{pmatrix}
x \\
y \\
\end{pmatrix}]_{B} = [T^{*}]^{C}_{B}[\begin{pmatrix}
x \\
y \\
\end{pmatrix}]_{C} = \begin{pmatrix}
\sqrt{ 2 } & 0 \\
3 & 2 \\
\end{pmatrix}\begin{pmatrix}
x \\
y \\
\end{pmatrix} = \begin{pmatrix}
\sqrt{ 2 } \cdot x \\
3x + 2y \\
\end{pmatrix} \\
\implies \boxed{ T^{*}\begin{pmatrix}
x \\
y \\
\end{pmatrix} = \begin{pmatrix}
x \\
3x+2y \\
\end{pmatrix} } \\
}
$$
---
$$
\displaylines{
\text{Let } V, W \text{ be inner product spaces over } \mathbb{F} \\
\text{Let } B \text{ be an orthonormal basis of } V \\
\text{Let } T: V \to W \\
\text{Prove: } \forall w \in W: T^{*}w = \sum_{i=1}^{n} \overline{\langle Tv_{i}, w \rangle}v_{i} \\
\\
\text{Proof:} \\
\text{Let } w \in W \\
\text{Let } v \in V \\
v = \sum_{i=1}^{n} \alpha_{i}v_{i} \left( = \sum_{i=1}^{n} \langle v, v_{i} \rangle v_{i} \right) \\
\left\langle  v, \sum_{i=1}^{n} \overline{\langle Tv_{i}, w \rangle}v_{i} \right\rangle = \left\langle  \sum_{i=1}^{n} \alpha_{i}v_{i}, \sum_{i=1}^{n} \overline{\langle Tv_{i}, w \rangle}v_{i} \right\rangle = \\
= \sum_{i=1}^{n} \alpha_{i}\langle Tv_{i}, w \rangle\langle v_{i}, v_{i} \rangle = \sum_{i=1}^{n} \alpha_{i}\langle Tv_{i}, w \rangle = \left\langle  \sum_{i=1}^{n} \alpha_{i}Tv_{i}, w  \right\rangle = \\
= \left\langle  \sum_{i=1}^{n} T(\alpha_{i}v_{i}), w \right\rangle = \left\langle  T\left( \sum_{i=1}^{n} \alpha_{i}v_{i} \right), w  \right\rangle = \langle Tv, w \rangle \\
\text{Alternative solution:} \\
\left\langle  v, \sum_{i=1}^{n} \overline{\langle Tv_{i}, w \rangle}v_{i}  \right\rangle = \sum_{i=1}^{n} \langle Tv_{i}, w \rangle\langle v, v_{i} \rangle = \sum_{i=1}^{n} \langle \langle v, v_{i} \rangle Tv_{i} , w \rangle = \\
= \sum_{i=1}^{n} \langle T(\langle v, v_{i} \rangle v_{i}), w \rangle = \left\langle  \sum_{i=1}^{n} T(\langle v, v_{i} \rangle v_{i}), w  \right\rangle = \left\langle  T\left( \sum_{i=1}^{n} \langle v, v_{i} \rangle v_{i} \right), w  \right\rangle = \langle Tv, w \rangle \\
\text{Because of: } v = \sum_{i=1}^{n} \langle v, v_{i} \rangle v_{i} \\
\implies \langle Tv, w \rangle = \left\langle  v, \sum_{i=1}^{n} \overline{\langle Tv_{i}, w \rangle}v_{i}  \right\rangle = \langle v, T^{*}w \rangle \\
\implies \boxed{ T^{*}w = \sum_{i=1}^{n} \overline{\langle Tv_{i}, w \rangle}v_{i} } \\
}
$$
---
$$
\displaylines{
\text{Let } V = \mathbb{R}^{2 \times 2} \text{ with standard inner product } \langle A, B \rangle = tr(AB^{*}) \\
\text{Let } W = \mathbb{R}^{2} \text{ with inner product } \langle v, w \rangle = v^{T}\begin{pmatrix}
1 & -1 \\
-1 & 2 \\
\end{pmatrix}w \\
\text{Let } T: V \to W \\
T(A) = C_{1}(A) + C_{2}(A) \\
\text{Find } T^{*} \\
\\
\text{Solution:} \\
\text{Let } B \text{ be a standard basis of } V \\
T^{*}(w) = \sum_{i=1}^{4} \overline{\langle TE_{i}, w \rangle}E_{i} \\
\forall i \in [1, 4:] T(E_{i}) = C_{1}(E_{i}) + C_{2}(E_{i}) = \left\{\begin{array}{}
\begin{pmatrix}
1 \\
0 \\
\end{pmatrix} & i \leq 2 \\
\begin{pmatrix}
0 \\
1 \\
\end{pmatrix} & i > 2 \\
\end{array}\right. \\
i = 1, 2 \implies \langle TE_{i}, w \rangle = \langle \begin{pmatrix}
1 \\
0 \\
\end{pmatrix}, \begin{pmatrix}
x \\
y \\
\end{pmatrix} \rangle = \begin{pmatrix}
1 & 0 \\
\end{pmatrix}\begin{pmatrix}
1 & -1 \\
-1 & 2 \\
\end{pmatrix}\begin{pmatrix}
x \\
y \\
\end{pmatrix} = x - y \\
i = 3, 4 \implies \langle TE_{i}, w \rangle = \begin{pmatrix}
0 & 1 \\
\end{pmatrix}\begin{pmatrix}
1 & -1 \\
-1 & 2 \\
\end{pmatrix}\begin{pmatrix}
x \\
y \\
\end{pmatrix} = -x + 2y \\
\implies \boxed{ T^{*}(w) = (x-y)(E_{1} + E_{2}) + (-x+2y)(E_{3}+E_{4}) = \begin{pmatrix}
x-y & x-y \\
-x+2y & -x+2y \\
\end{pmatrix} } \\
}
$$
---
$$
\displaylines{
&\text{Let } W \text{ be } T\text{-invariant} \\
& \text{Prove or disprove:} \\
1. & W^{\perp} \text{ is } T\text{-invariant} \\
2. & W^{\perp} \text{ is } T^{*}\text{-invariant} \\
}
$$
$$
\displaylines{
\text{Disproof for 1:} \\
T\begin{pmatrix}
0 \\
1 \\
\end{pmatrix} = \begin{pmatrix}
0 \\
1 \\
\end{pmatrix} \\
T\begin{pmatrix}
1 \\
0 \\
\end{pmatrix} = \begin{pmatrix}
1 \\
1 \\
\end{pmatrix} \\
W = sp\Set{ \begin{pmatrix}
0 \\
1 \\
\end{pmatrix} } \\
\\
\text{Proof for 2:} \\
T: V \to V \\
T[W] \subseteq W \\
\text{Let } v \in W^{\perp} \\
\text{Let } w \in W \\
\langle w, v \rangle = 0 \\
0 \underset{ Tw \in W }{ = } \langle Tw, v \rangle = \langle w, T^{*}v \rangle \\
\implies T^{*}v \in W^{\perp} \implies T^{*}[W^{\perp}] \subseteq W^{\perp} \\
}
$$
---
