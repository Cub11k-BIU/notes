---
{"publish":true,"created":"16/05/25, 14:05","modified":"2025-11-21T21:10:02.741+02:00","tags":["Academia","Assignment","Linear-2"],"cssclasses":""}
---

# 1a
$$
\displaylines{
\text{Let } V = \mathbb{R}^{2} \\
\text{Let } v = \begin{pmatrix}
v_{1} \\
v_{2} \\
\end{pmatrix}, u = \begin{pmatrix}
u_{1} \\
u_{2} \\
\end{pmatrix} \\
\text{Let } \langle v, u \rangle = 5v_{1}u_{1} + 9v_{1}u_{2} + 9v_{2}u_{1} + 4v_{2}u_{2} \\
\text{Determine whether } \langle ,  \rangle \text{ is an inner product and if yes, calculate } \left\lVert \begin{pmatrix}
1 \\
2 \\
\end{pmatrix} \right\rVert \\
\\
\text{Solution:} \\
\text{Let } v = \begin{pmatrix}
1 \\
-1 \\
\end{pmatrix} \\
\langle v, v \rangle = 5v_{1}v_{1} + 9v_{1}v_{2} + 9v_{2}v_{1} + 4v_{2}v_{2} = 5v_{1}^{2} + 18v_{1}v_{2} + 4v_{2}^{2} = 9 - 18 = -9 < 0 \\
\implies \boxed{ \langle ,  \rangle \text{ is not an inner product on } V } \\
}
$$
# 1b
$$
\displaylines{
\text{Let } V = \mathbb{R}_{2}[x] \\
\text{Let } \langle f, g \rangle = \int_{-1}^{1} f(x)g(x) \, dx \\
\text{Determine whether } \langle ,  \rangle \text{ is an inner product and if yes, calculate } \lVert 5x^{2} - 2x + 5 \rVert \\
\\
\text{Solution:} \\
\text{Let } f, g, h \in V, \alpha \in \mathbb{R} \\
\langle f + \alpha g, h \rangle = \int_{-1}^{1} (f(x) + \alpha g(x))h(x) \, dx = \int_{-1}^{1} f(x)h(x) \, dx + \alpha \int_{-1}^{1} g(x)h(x) \, dx = \\
= \langle f, g \rangle + \alpha \langle g, h \rangle \\
\langle f, g \rangle - \overline{\langle g, f \rangle } = \int_{-1}^{1} f(x)g(x) \, dx - \overline{\underbrace{ \int_{-1}^{1} g(x)f(x) \, dx }_{ \in \mathbb{R} } } = 0 \\
\implies \langle f, g \rangle = \overline{\langle g, f \rangle } \\
\text{Let } f \in V \\
f = ax^{2} + bx + c \\
\langle f, f \rangle = \int_{-1}^{1} (f(x))^{2} \, dx = \int_{-1}^{1} (ax^{2}+bx+c)^{2} \, dx  = \\
= \int_{-1}^{1} \left(a^{2} x^{4} + 2abx^{3} + 2acx^{2} + b^{2} x^{2} + 2bcx + c^{2}\right) \, dx = \\
= \left( \frac{a^{2}}{5}x^{5} + \frac{ab}{2}x^{4} + \frac{2ac+b^{2}}{3}x^{3} + bcx^{2} + c^{2}x\right)\Bigg|^{x=1}_{x=-1} = \\
= \left( \frac{a^{2}}{5} + \frac{ab}{2} + \frac{2ac+b^{2}}{3} + bc + c^{2} \right) - \left( -\frac{a^{2}}{5} + \frac{ab}{2} - \frac{2ac+b^{2}}{3} + bc - c^{2} \right) = \\
= \frac{2a^{2}}{5} + \frac{4ac+2b^{2}}{3} + 2c^{2} = \frac{2a^{2}}{5} + \frac{4ac}{3} + 2c^{2} + \frac{2b^{2}}{3} \\
\frac{2a^{2}}{5} + \frac{4ac}{3} + 2c^{2} = \frac{2}{5}\left( a^{2} + \frac{10ac}{3} + 5c^{2} \right) = \frac{2}{5}\left( a + \frac{5}{3}c \right)^{2} + \frac{8}{9}c^{2} \\
\implies \langle f, f \rangle = \frac{2}{5}\left( a + \frac{5}{3}c \right)^{2} + \frac{8}{9}c^{2} + \frac{2b^{2}}{3} \geq 0 \\
\langle f, f \rangle = 0 \iff a = b = c = 0 \iff f = 0 \\
\implies \boxed{ \langle f, f \rangle \text{ is an inner product} } \\
\langle 5x^{2}-2x+5, 5x^{2}-2x+5 \rangle \underset{ \begin{array}{}
a = 5 \\
b = -2 \\
c = 5 \\
\end{array} }{ = } \frac{2}{5}\left( 5 + \frac{25}{3} \right)^{2} + \frac{200}{9} + \frac{8}{3} = \\
\frac{2}{5} \cdot \frac{1600}{9} + \frac{200}{9} + \frac{24}{9} = \frac{864}{9} = 96 \\
\implies \boxed{ \lVert 5x^{2}-2x+5 \rVert = \sqrt{ 96 } } \\
}
$$
# 2
$$
\displaylines{
\text{Let } V \text{ be an inner product space over } \mathbb{R} \\
\text{Let } v_{1}, v_{2}, v_{3}, v_{4} \in V \text{ be different vectors} \\
\text{Let } \langle v_{i}, v_{j} \rangle = \left\{\begin{array}{}
9 & i = j \\
-3 & i \neq j \\
\end{array}\right. \\
\text{Prove: } v_{1} + v_{2} + v_{3} + v_{4} = 0_{V} \\
\\
\text{Proof:} \\
\langle v_{1} + v_{2} + v_{3} + v_{4}, v_{1} + v_{2} + v_{3} + v_{4} \rangle = \sum_{i=1}^{4} \langle v_{i}, v_{1} + v_{2} + v_{3} + v_{4} \rangle = \\
= \sum_{i=1}^{4} \sum_{j=1}^{4} \langle v_{i}, v_{j} \rangle = \\
= \sum_{i=1}^{4} (9 + 3 \cdot (-3)) = 0 \\
\langle v_{1} + v_{2} + v_{3} + v_{4}, v_{1} + v_{2} + v_{3} + v_{4} \rangle = 0 \implies \boxed{ v_{1} + v_{2} + v_{3} + v_{4} = 0_{V} } \\
}
$$
# 3
$$
\displaylines{
\text{Let } V \text{ be an inner product space over } \mathbb{R} \\
\text{Let } v, u \in V \\
\text{Prove: } (u - v) \perp (u + v) \iff \lVert u \rVert = \lVert v \rVert \\
\\
\text{Proof:} \\
\boxed{ \implies } \text{ Let } (u - v) \perp (u + v) \\
\implies \langle u - v, u + v \rangle = 0 \implies \langle u, u + v \rangle - \langle v, u + v \rangle = 0 \\
\implies \langle u, u \rangle + \langle u, v \rangle - \langle v, u \rangle - \langle v, v \rangle = 0 \\
\langle v, u \rangle = \overline{\langle u, v \rangle } = \langle u, v \rangle \\
\implies \lVert u \rVert - \lVert v \rVert = 0 \implies \boxed{ \lVert u \rVert = \lVert v \rVert } \\
\\
\boxed{ \impliedby } \text{ Let } \lVert u \rVert = \lVert v \rVert \\
\implies \langle u, u \rangle = \langle v, v \rangle \\
\implies \langle u, u \rangle - \langle v, v \rangle = 0 \\
\implies \langle u, u + v - v \rangle - \langle v, v \rangle = 0 \\
\implies \langle u, u + v \rangle - \langle u, v \rangle - \langle v, v \rangle = 0 \\
\implies \langle u, u + v \rangle - (\langle u, v \rangle + \langle v, v \rangle ) = 0 \\
\implies \langle u, u + v \rangle - \langle v, u + v \rangle = 0 \\
\implies \langle u - v, u + v \rangle = 0 \implies \boxed{ (u - v) \perp (u + v) } \\
}
$$
# 4
$$
\displaylines{
\text{Let } \langle (x_{0}, x_{1}), (y_{0}, y_{1}) \rangle = x_{0}y_{0} - 3x_{0}y_{1} - 3x_{1}y_{0} + \alpha x_{1}y_{1} \\
\text{Find all values of } \alpha \in \mathbb{R} \text{ such that } \langle (x_{0}, x_{1}), (y_{0}, y_{1}) \rangle \text{ is an inner product} \\
\\
\text{Solution:} \\
\text{Let } x = (x_{0}, x_{1}), y = (y_{0}, y_{1}), z = (z_{0}, z_{1}), \beta \in \mathbb{R} \\
\langle x + \beta y, z \rangle = (x_{0} + \beta y_{0})z_{0} - 3(x_{0}+\beta y_{0})z_{1} - 3(x_{1}+\beta y_{1})z_{0} + \alpha(x_{1} + \beta y_{1})z_{1} = \\
= \underbrace{ x_{0}z_{0} }_{  } + \beta y_{0}z_{0} - \underbrace{ 3x_{0}z_{1} }_{  } - 3\beta y_{0}z_{1} - \underbrace{ 3x_{1}z_{0} }_{  } - 3\beta y_{1}z_{0} + \underbrace{ \alpha x_{1}z_{1} }_{  } + \alpha\beta y_{1}z_{1} = \\
= \langle x, z \rangle + \beta \langle y, z \rangle \\
\langle x, y \rangle - \overline{\langle y, x \rangle } = (x_{0}y_{0} - 3x_{0}y_{1} - 3x_{1}y_{0} + \alpha x_{1}y_{1}) - \overline{\underbrace{ (y_{0}x_{0} - 3y_{0}x_{1} - 3y_{1}x_{0} + \alpha y_{1}x_{1}) }_{ \in \mathbb{R} }} = 0 \\
\implies \langle x, y \rangle = \overline{\langle y, x \rangle } \\
\langle x, x \rangle = x_{0}^{2} - 6x_{0}x_{1} + \alpha x_{1}^{2} = \\
= (x_{0} - 3x_{1})^{2} + (\alpha-9)x_{1}^{2} \\
\langle x, x \rangle \geq 0 \iff \alpha - 9 \geq 0 \iff \boxed{ \alpha \geq 9 } \\
\langle x, x \rangle = 0 \iff \left\{\begin{array}{}
x_{0} = 3x_{1} \\
\left[\begin{array}{}
\alpha = 9 \\
x_{1} = 0 \\
\end{array}\right. \\
\end{array}\right. \\
\alpha = 9 \implies \langle (3, 1), (3, 1) \rangle = 9 - 9 - 9 + 9 = 0 \\
\implies \alpha \neq 9 \implies \boxed{ \alpha > 9 } \\
\boxed{ \text{Final answer: } \alpha > 9 } \\
}
$$
# 5a
$$
\displaylines{
\text{Let } V = \mathbb{R}^{3} \text{ with a standrad inner product} \\
\text{Let } v_{1} = \begin{pmatrix}
10 \\
20 \\
-16 \\
\end{pmatrix}, v_{2} = \begin{pmatrix}
4 \\
2 \\
5 \\
\end{pmatrix} \\
\text{Determine whether } v_{1} \perp v_{2} \\
\\
\text{Solution:} \\
\langle v_{1}, v_{2} \rangle = \sum_{i=1}^{3} (v_{1})_{i}(v_{2})_{i} = 40 + 40 - 80 = 0 \\
\implies \boxed{ v_{1} \perp v_{2} } \\
}
$$
# 5b
$$
\displaylines{
\text{Let } V = \mathbb{R}_{2}[x] \\
\text{Let } \langle f, g \rangle = \int_{-1}^{1} f(x)g(x) \, dx \\
\text{Let } f(x) = 4x^{2} + 5x + 4, g(x) = 4x - 2 \\
\text{Determine whether } f \perp g \\
\\
\text{Solution:} \\
\langle f, g \rangle = \int_{-1}^{1} (4x^{2}+5x+4)(4x-2) \, dx = \int_{-1}^{1} 16x^{3}+12x^{2}+6x-8 \, dx = \\
= (4x^{4}+4x^{3}+3x^{2}-8x)\Bigg|^{x=1}_{x=-1} = (4+4+3-8) - (4-4+3+8) = \\
= -8 \neq 0 \\
\implies \boxed{ f \not\perp g } \\
}
$$
# 5c
$$
\displaylines{
\text{Let } V = \mathbb{R}^{2 \times 2} \\
\text{Let } \langle A, B \rangle = tr(AB^{T}) \\
\text{Let } A = \begin{pmatrix}
1 & 2 \\
-1 & 0 \\
\end{pmatrix}, B = \begin{pmatrix}
-1 & 1 \\
0 & 1 \\
\end{pmatrix} \\
\text{Determine whether } A \perp B \\
\\
\text{Solution:} \\
\langle A, B \rangle = tr(AB^{T}) = tr(\begin{pmatrix}
1 & 2 \\
-1 & 0 \\
\end{pmatrix}\begin{pmatrix}
-1 & 0 \\
1 & 1 \\
\end{pmatrix}) = tr(\begin{pmatrix}
1 & 2 \\
1 & 0 \\
\end{pmatrix}) = 1 \neq 0 \\
\implies \boxed{ A \not\perp B } \\
}
$$
# 5d
$$
\displaylines{
\text{Let } V = \mathbb{C}^{3} \text{ with standard inner product} \\
\langle v, u \rangle = \sum_{i=1}^{3} v_{i}\overline{u_{i}} \\
\text{Let } v = \begin{pmatrix}
i \\
i \\
i \\
\end{pmatrix}, u = \begin{pmatrix}
1+i \\
-2-i \\
1 \\
\end{pmatrix} \\
\text{Determine whether } v \perp u \\
\\
\text{Solution:} \\
\langle v, u \rangle = i(1-i) + i(-2+i) + i(1) = i + 1 -2i - 1 + i = 0 \\
\implies \boxed{ v \perp u } \\
}
$$
# 6
$$
\displaylines{
\text{Let } V \text{ be an inner product space over } \mathbb{C} \\
\text{Let } \dim V = n \\
\text{Let } B \subseteq V \\
\text{Prove: } B \text{ is an orthonormal basis} \iff B \text{ is an orthonormal set with } n \text{ elements} \\
\\
\text{Proof:} \\
\boxed{ \implies } \text{ Let } B \text{ be an orthonormal basis} \\
\text{By definition, } \boxed{ B \text{ is an orthonormal set } } \\
\dim V = n \text{ and } B \text{ is a basis} \implies \boxed{ \left\lvert B \right\rvert = n } \\
\boxed{ \impliedby } \text{ Let } B \text{ be an orthonormal set with } n \text{ elements} \\
\text{Let } B = \Set{ v_{1}, \dots, v_{n} } \\
\text{Let } \sum_{i=1}^{n} \alpha_{i}v_{i} = 0 \\
\implies \left\langle  \sum_{i=1}^{n} \alpha_{i}v_{i}, \sum_{i=1}^{n} \alpha_{i}v_{i}  \right\rangle = \langle 0, 0 \rangle = 0 \\
\implies \left\langle  \sum_{i=1}^{n} \alpha_{i}v_{i}, \sum_{i=1}^{n} \alpha_{i}v_{i}  \right\rangle = \sum_{i=1}^{n} \sum_{j=1}^{n} \alpha_{i}\overline{\alpha_{j}}\langle v_{i}, v_{j} \rangle = \\
\underset{ i \neq j \implies \left\{\begin{array}{}
\langle v_{i}, v_{j} \rangle = 0 \\
\langle v_{i}, v_{i} \rangle = 1 \\
\end{array}\right. }{ = } \sum_{i=1}^{n} \alpha_{i}\overline{\alpha_{i}} = \sum_{i=1}^{n} \left\lvert \alpha_{i} \right\rvert^{2} = 0 \\
\sum_{i=1}^{n} \left\lvert \alpha_{i} \right\rvert^{2} = 0 \implies \left\lvert \alpha_{1} \right\rvert = \dots = \left\lvert \alpha_{n} \right\rvert = 0 \implies \alpha_{1} = \dots = \alpha_{n} = 0 \\
\implies B \text{ is a linear independence} \\
\left\lvert B \right\rvert = \dim V \implies B \text{ is a basis of } V \\
B \text{ is an orthonormal set and a basis } \implies \boxed{ B \text{ is an orthonormal basis} } \\
}
$$
# 7a
$$
\displaylines{
\text{Let } V \text{ be an inner product space over } \mathbb{C} \\
\text{Let } \dim V = n \\
\text{Let } B \text{ be a basis of } V \\
\text{Define an inner product on } V \text{ such that } B \text{ is an orthonormal set} \\
\\
\text{Solution:} \\
\text{Let } B = \Set{ v_{1}, \dots, v_{n} } \\
\text{We need to get: } \forall i, j \in [1, n]: \langle v_{i}, v_{j} \rangle = \left\{\begin{array}{}
1 & i = j \\
0 & i \neq j \\
\end{array}\right. \\
\text{Let } v, u \in V \\
v = \sum_{i=1}^{n} \alpha_{i}v_{i} \\
u = \sum_{i=1}^{n} \beta_{i}v_{i} \\
\langle v, u \rangle = \left\langle  \sum_{i=1}^{n} \alpha_{i}v_{i}, u  \right\rangle = \sum_{i=1}^{n} \alpha_{i}\langle v_{i}, u \rangle = \\
= \sum_{i=1}^{n} \alpha_{i}\left\langle  v_{i}, \sum_{j=1}^{n} \beta_{j}v_{j} \right\rangle = \sum_{i=1}^{n} \sum_{j=1}^{n} \alpha_{i}\overline{\beta_{j}}\langle v_{i}, v_{j} \rangle \\
\\
\text{To get } \langle v_{i}, v_{j} \rangle
= \left\{\begin{array}{}
1 & i = j \\
0 & i \neq j \\
\end{array}\right. \\
\text{Let } \boxed{ \langle v, u \rangle = \sum_{i=1}^{n} \alpha_{i}\overline{\beta_{i}} = [v]_{B}^{T}\overline{[u]_{B}} } \\
\text{Let us prove that this is in fact an inner product:} \\
\langle v + \alpha u, w \rangle = ([v + \alpha u]_{B})^{T}\overline{[w]_{B}} = [v]_{B}^{T}\overline{[w]_{B}} + \alpha[u]_{B}^{T}\overline{[w]_{B}} = \langle v, w \rangle + \alpha \langle u, w \rangle \\
\overline{\langle v, u \rangle } = \overline{[v]_{B}^{T}\overline{[u]_{B}}} = \overline{[v]_{B}^{T}}[u]_{B} = (\overline{[v]_{B}^{T}}[u]_{B})^{T} = [u]_{B}^{T}\overline{[v]_{B}} = \langle u, v \rangle \\
\text{Let } [v]_{B}^{T} = \begin{pmatrix}
\alpha_{1} & \dots & \alpha_{n} \\
\end{pmatrix} \\
\langle v, v \rangle = [v]_{B}^{T}\overline{[v]_{B}} = \sum_{i=1}^{n} \alpha_{i}\overline{\alpha_{i}} = \sum_{i=1}^{n} \left\lvert \alpha_{i} \right\rvert ^{2} \geq 0 \\
\langle v, v \rangle = 0 \iff \forall \in [1, n]: \alpha_{i} = 0 \iff [v]_{B} = 0 \iff v = 0 \\
\\
\text{Let us prove that } B \text{ is an orthonormal set in relation to this inner product:} \\
\forall i \neq j \in [1, n]: \left\{\begin{array}{}
\langle v_{i}, v_{i} \rangle = [v_{i}]_{B}^{T}\overline{[v_{i}]_{B}} = e_{i}^{T}e_{i} = 1 \\
\langle v_{i}, v_{j} \rangle = [v_{i}]_{B}^{T}\overline{[v_{j}]_{B}} = e_{i}^{T}e_{j} = 0 \\
\end{array}\right. \\
}
$$
# 7b
$$
\displaylines{
\text{Let } V = \mathbb{C}^{2} \\
\text{Let } B = \Set{ \begin{pmatrix}
i \\
i \\
\end{pmatrix}, \begin{pmatrix}
1 + i \\
-2 + i \\
\end{pmatrix} } \\
\text{Find an inner product such that } B \text{ is an orthonormal set} \\
\\
\text{Solution:} \\
\text{Let } v \in V \\
[v]_{B} = [I]^{S}_{B}[v]_{S} \\
[I]^{S}_{B} = ([I]^{B}_{S})^{-1} = \begin{pmatrix}
i & 1+i \\
i & -2+i \\
\end{pmatrix}^{-1} \\
\left(\begin{array}{cc|cc}
i & 1+i & 1 & 0 \\
i & -2+i & 0 & 1 \\
\end{array}\right) \to \left(\begin{array}{cc|cc}
0 & 1 & \frac{1}{3} & -\frac{1}{3} \\
i & -2+i & 0 & 1 \\
\end{array}\right) \to \left(\begin{array}{cc|cc}
0 & 1 & \frac{1}{3} & -\frac{1}{3} \\
i & 0 & \frac{1}{3}(2-i) & \frac{1}{3}(1+i) \\
\end{array}\right) \\
\to \left(\begin{array}{cc|cc}
1 & 0 & \frac{1}{3}(-2i-1) & \frac{1}{3}(-i+1) \\
0 & 1 & \frac{1}{3} & -\frac{1}{3} \\
\end{array}\right) \\
\implies [I]^{S}_{B} = \frac{1}{3}\begin{pmatrix}
-1-2i & 1-i \\
1 & -1 \\
\end{pmatrix} \\
\langle v, u \rangle = [v]_{B}^{T}\overline{[u]_{B}} = ([I]^{S}_{B}v)^{T}\overline{[I]^{S}_{B}u} = \\
= v^{T}([I]^{S}_{B})^{T}\overline{[I]^{S}_{B}}\overline{u} \\
([I]^{S}_{B})^{T}\overline{[I]^{S}_{B}} = \frac{1}{9}\begin{pmatrix}
-1-2i & 1 \\
1-i & -1 \\
\end{pmatrix}\begin{pmatrix}
-1+2i & 1+i \\
1 & -1 \\
\end{pmatrix} = \frac{1}{9}\begin{pmatrix}
6 & -3i \\
3i & 3 \\
\end{pmatrix} \\
\implies \langle v, u \rangle = \frac{1}{9}v^{T}\begin{pmatrix}
6 & -3i \\
3i & 3 \\
\end{pmatrix}\overline{u} = \\
= \frac{1}{9}\begin{pmatrix}
v_{1} & v_{2} \\
\end{pmatrix}\begin{pmatrix}
6 & -3i \\
3i & 3 \\
\end{pmatrix}\begin{pmatrix}
\overline{u_{1}} \\
\overline{u_{2}} \\
\end{pmatrix} = \frac{1}{9}\begin{pmatrix}
6v_{1}+3v_{2}i & 3v_{2}-3v_{1}i
\end{pmatrix}\begin{pmatrix}
\overline{u_{1}} \\
\overline{u_{2}} \\
\end{pmatrix} = \\
= \frac{1}{9}(6v_{1}\overline{u_{1}} + 3v_{2}\overline{u_{1}}i + 3v_{2}\overline{u_{2}}-3v_{1}\overline{u_{2}}i) = \frac{1}{3}(2v_{1}\overline{u_{1}} - v_{1}\overline{u_{2}}i + v_{2}\overline{u_{1}}i + v_{2}\overline{u_{2}}) \\
\implies \boxed{ \langle v, u \rangle = [v]_{B}^{T}\overline{[u]_{B}} = \frac{1}{3}(2v_{1}\overline{u_{1}} - v_{1}\overline{u_{2}}i + v_{2}\overline{u_{1}}i + v_{2}\overline{u_{2}}) } \\
}
$$
