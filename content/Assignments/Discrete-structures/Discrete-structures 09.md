---
{"publish":true,"created":"12/01/26, 15:31","modified":"2026-01-12T18:45:25.288+02:00","tags":["Academia","Assignment","Discrete-structures"],"cssclasses":""}
---

# 1a
$$
\displaylines{
\text{Find the closed formula for } a_{n} = 2a_{n-1} + a_{n-2} \\
\text{Calculate exact solution given } a_{0} = 0, a_{1} = 1 \\
\\
\text{Solution:} \\
a_{n} = 2a_{n-1} + a_{n-2} \implies \text{Characteristic polynomial is} \\
x^{2} - 2x - 1 = (x-1)^{2} - 2 = (x-1-\sqrt{ 2 })(x-1+\sqrt{ 2 }) \\
\implies \boxed{ a_{n} = A \cdot (1+\sqrt{ 2 })^{n} + B \cdot (1-\sqrt{ 2 })^{n} } \\
a_{0} = 0 \implies A + B = 0 \\
a_{1} = 1 \implies A + \sqrt{ 2 }A + B - \sqrt{ 2 }B = 1 \\
\implies A - B = \frac{\sqrt{ 2 }}{2} \implies A = \frac{\sqrt{ 2 }}{4}, B = \frac{-\sqrt{ 2 }}{4} \\
a_{0} = 0, a_{1} = 1 \implies \boxed{ a_{n} = \frac{\sqrt{ 2 }}{4}(1+\sqrt{ 2 })^{n} - \frac{\sqrt{ 2 }}{4}(1-\sqrt{ 2 })^{n} } \\

}
$$
# 1b
$$
\displaylines{
\text{Find a closed formula for } a_{n} = (2+2\sqrt{ 3 })a_{n-1} - (3+4\sqrt{ 3 })a_{n-2} + 6a_{n-3} \\
\\
\text{Solution:} \\
\text{Characteristic polynomial is} \\
x^{3} - (2+2\sqrt{ 3 })x^{2} + (3+4\sqrt{ 3 })x - 6 = x^{3} - 2x^{2} - 2\sqrt{ 3 }x^{2} + 3x + 4\sqrt{ 3 }x - 6 = \\
= x^{2}(x-2) - 2\sqrt{ 3 }x(x-2) + 3(x-2) = (x^{2}-2\sqrt{ 3 }x+3)(x-2) = \\
= (x-\sqrt{ 3 })^{2}(x-2) \\
\implies \boxed{ a_{n} = A_{1} \cdot 2^{n} + A_{2} \cdot \sqrt{ 3 }^{n} + A_{3} \cdot n \cdot \sqrt{ 3 }^{n} } \\
}
$$
# 1c
$$
\displaylines{
\text{Find a closed formula for } a_{n} = -a_{n-2} \\
\\
\text{Solution:} \\
\text{Charcteristic polynomial is} \\
x^{2} + 1 = (x-i)(x+i) \\
\implies a_{n} = A_{1} \cdot i^{n} + A_{2} \cdot (-i)^{n} \\
}
$$
# 2a
$$
\displaylines{
\text{How many } n \text{ long words over } \Set{ x, y, z } \text{ are there that do not have a sequence } xx \\
\\
\text{Solution:} \\
\text{Let } a_{n} = \text{number of such words} \\
a_{0} = 1 \\
a_{1} = 3 \\
\text{Let us examine the beginning of the word} \\
\text{If the word starts with } y \text{ or } z \text{ it can be anything afterwards} \\
\implies 2 \cdot a_{n-1} \\
\text{If the word starts with an } x, \text{ it must start with either } xy \text{ or } xz \\
\implies 2 \cdot a_{n-2} \\
\implies a_{n} = 2a_{n-1} + 2a_{n-2} \\
\text{Characteristic polynomial is } x^{2} - 2x - 2 = (x-1)^{2} - 3 = (x-1-\sqrt{ 3 })(x-1+\sqrt{ 3 }) \\
\implies a_{n} = A_{1} \cdot (1+\sqrt{ 3 })^{n} + A_{2} \cdot (1-\sqrt{ 3 })^{n} \\
a_{0} = 1 \implies A_{1} + A_{2} = 1 \\
a_{1} = 3 \implies A_{1} + A_{2} + \sqrt{ 3 }(A_{1}-A_{2}) = 3 \\
\implies A_{1} - A_{2} = \frac{2\sqrt{ 3 }}{3} \implies A_{1} = \frac{2\sqrt{ 3 } + 3}{6} \implies A_{2} = \frac{3-2\sqrt{ 3 }}{6} \\
\implies \boxed{ a_{n} = \frac{3+2\sqrt{ 3 }}{6}(1+\sqrt{ 3 })^{n} + \frac{3-2\sqrt{ 3 }}{6}(1-\sqrt{ 3 })^{n} } \\
}
$$
# 2b
$$
\displaylines{
\text{How many } n \text{ long words over } \Set{ x, y, z } \text{ are there that do not have sequences } xy, zy \\
\\
\text{Solution:} \\
a_{0} = 1 \\
a_{1} = 3 \\
\text{Let } b_{n} = \text{number of such words starting with } x \text{ or } z \\
y \to a_{n-1} \\
x, z \to b_{n-1} \\
\implies \begin{eqsys}
a_{n} = a_{n-1} + 2b_{n-1} \\
b_{n} = 2b_{n-1} \\
\end{eqsys} \\
2b_{n-1} = a_{n} - a_{n-1} \\
\implies b_{n} = a_{n} - a_{n-1} \implies a_{n} = a_{n-1} + 2(a_{n-1} - a_{n-2}) = 3a_{n-1} - 2a_{n-2} \\
x^{2} - 3x + 2 = (x-2)(x-1) \\
\implies a_{n} = A_{1}2^{n} + A_{2}1^{n} \\
a_{0} = 1 \implies A_{1} + A_{2} = 1 \\
a_{1} = 3 \implies 2A_{1} + A_{2} = 3 \\
\implies A_{1} = 2 \implies A_{2} = -1 \\
\implies \boxed{ a_{n} = 2^{n+1} - 1 } \\
}
$$
# 2c
$$
\displaylines{
\text{How many } n \text{ long words over } \Set{ x, y, z } \text{ are there that do not have sequences } xy, yz \\
\\
\text{Solution:} \\
a_{0} = 1 \\
a_{1} = 3 \\
a_{2} = 7 \\
\text{Let } a_{n} = \text{number of such words} \\
\text{Let } b_{n} = \text{number of such words starting with } x \\
\text{Let } c_{n} = \text{number of such words starting with } y \\
z\dots \to a_{n-1} \\
xz\dots \to a_{n-2} \\
xx\dots \to b_{n-1} \\
yx\dots \to b_{n-1} \\
yy\dots \to c_{n-1} \\
\implies \begin{eqsys}
a_{n} = a_{n-1} + b_{n} + c_{n} & (1) \\
b_{n} = a_{n-2} + b_{n-1} & (2) \\
c_{n} = b_{n-1} + c_{n-1} & (3) \\
\end{eqsys} \\
(1) \implies c_{n} = a_{n} - a_{n-1} - b_{n} \\
(3) \implies (a_{n} - a_{n-1} - b_{n}) = b_{n-1} + (a_{n-1} - a_{n-2} - b_{n-1}) \\
\implies b_{n} = a_{n} - 2a_{n-1} + a_{n-2} \\
(2) \implies b_{n} = a_{n-2} + (a_{n-1}-2a_{n-2}+a_{n-3}) = a_{n-1} - a_{n-2} + a_{n-3} \\
\implies a_{n} - 2a_{n-1} + a_{n-2} = a_{n-1} - a_{n-2} + a_{n-3} \\
\implies \boxed{ a_{n} = 3a_{n-1} - 2a_{n-2} + a_{n-3} } \\
}
$$
# 3a
$$
\displaylines{
\text{Find a recurrence relation and starting conditions of the following:} \\
\text{Number of sequences over } \Set{ 1, 2, 3, 4 } \text{ such that sum of characters is } n \\
\\
\text{Solution:} \\
\text{Let } a_{n} = \text{number of such sequences} \\
1\dots \to a_{n-1} \\
2\dots \to a_{n-2} \\
3\dots \to a_{n-3} \\
4\dots \to a_{n-4} \\
\implies \boxed{ a_{n} = a_{n-1} + a_{n-2} + a_{n-3} + a_{n-4} } \\
\begin{aeqsys}
& a_{0} = \abs{\Set{ \varepsilon }} & = 1 \\
& a_{1} = \abs{\Set{ 1 }} & = 1 \\
& a_{2} = \abs{\Set{ 11, 2 }} & = 2 \\
& a_{3} = \abs{\Set{ 111, 12, 21, 3 }} & = 4 \\
& a_{4} = \abs{\Set{ 1111, 112, 121, 211, 13, 31, 22, 4 }} & = 8 \\
\end{aeqsys} \\
}
$$
# 3b
$$
\displaylines{
\text{Find a recurrence relation and starting conditions of the following:} \\
\text{Number of sequences over } \Set{ 1, 2, 3, 4, 5 } \text{ of length $n$ such that sum of characters is odd} \\
\text{Solve the sequence} \\
\\
\text{Solution:} \\
\text{Let } a_{n} = \text{number of such sequences} \\
\text{Let } b_{n} = \text{number od such sequences with even sum of characters} \\
\implies \begin{eqsys}
a_{n} = 2a_{n-1} + 3b_{n-1} \\
b_{n} = 2b_{n-1} + 3a_{n-1} \\
\end{eqsys} \\
\implies b_{n-1} = \frac{a_{n}-2a_{n-1}}{3} \implies \frac{a_{n+1}-2a_{n}}{3} = \frac{2(a_{n}-2a_{n-1})}{3} + 3a_{n-1} \\
\implies a_{n+1} - 2a_{n} = 2a_{n} - 4a_{n-1} + 9a_{n-1} \\
\implies a_{n+1} = 4a_{n} + 5a_{n-1} \implies \boxed{ a_{n} = 4a_{n-1} + 5a_{n-2} } \\
a_{0} = \abs{\emptyset} = 0 \\
a_{1} = \abs{\Set{ 1, 3, 5 }} = 3 \\
\\
x^{2} - 4x - 5 = (x-5)(x+1) \\
\implies a_{n} = A_{1} \cdot 5^{n} + A_{2} \cdot (-1)^{n} \\
a_{0} = 0 \implies A_{1} + A_{2} = 0 \\
a_{1} = 3 \implies 5A_{1} - A_{2} = 3 \implies A_{1} = \frac{1}{2}, A_{2} = -\frac{1}{2} \\
\implies \boxed{ a_{n} = \frac{5^{n}-(-1)^{n}}{2} } \\
}
$$
# 3c
$$
\displaylines{
\text{Find a recurrence relation and starting conditions of the following:} \\
\text{Number of subsets of } [n] \text{ that do not have 3 consecutive numbers} \\
\\
\text{Solution:} \\
\text{Let } a_{n} = \text{numebr of such subsets} \\
\text{Let } A \subseteq [n] \\
n \in A, n-1 \in A \implies n-2 \not\in A \implies a_{n-3} \\
n \in A, n-1 \not\in A \implies a_{n-2} \\
n \not\in A \implies a_{n-1} \\
\implies \boxed{ a_{n} = a_{n-1} + a_{n-2} + a_{n-3} } \\
a_{0} = 1 \\
a_{1} = 2 \\
a_{2} = 4 \\
a_{3} = 7 \\
}
$$
# 4
$$
\displaylines{
a_{n} = 9a_{n-1} - 27a_{n-2} + 27a_{n-3} - 8 \\
a_{0} = 19, a_{1} = -2, a_{2} = 2 \\
\\
\text{Solution:} \\
\text{A non-homogeneous solution:} \\
a_{n} = c \\
\implies c = 9c - 27c + 27c - 8 \implies 8c = -8 \implies c = -1 \\
\text{A homogeneous solution:} \\
a_{n} = 9a_{n-1} - 27a_{n-2} + 27a_{n-3} \\
x^{3} - 9x^{2} + 27x - 27 = (x-3)^{3} \\
\implies a_{n} = A_{1} \cdot 3^{n} + A_{2} \cdot n \cdot 3^{n} + A_{3} \cdot n^{2} \cdot 3^{n} \\
\text{Final solution:} \\
\boxed{ a_{n} = A_{1} \cdot 3^{n} + A_{2} \cdot n \cdot 3^{n} + A_{3} \cdot n^{2} \cdot 3^{n} - 1 } \\
a_{0} = 19 \implies A_{1} - 1 = 19 \implies A_{1} = 20 \\
a_{1} = -2 \implies 3A_{1} + 3A_{2} + 3A_{3} - 1 = -2 \implies 3(A_{2}+A_{3}) = -61 \\
a_{2} = 2 \implies 9A_{1} + 18A_{2} + 36A_{3} - 1 = 2 \implies 18(A_{2} + A_{3}) + 18A_{3} = -177 \\
\implies 18A_{3} = -177 + 366 = 189 \implies A_{3} = \frac{189}{18} = \frac{21}{2} \\
\implies A_{2} = -\frac{61}{3} - \frac{21}{2} = -\frac{185}{6} \\
\implies \boxed{ a_{n} = 20 \cdot 3^{n} - \frac{185}{6} \cdot n \cdot 3^{n} + \frac{21}{2} \cdot n^{2} \cdot 3^{n} - 1 } \\
}
$$
# 5
$$
\displaylines{
\text{Given a graph as on the illustration,} \\
\text{find number of walks starting from } v_{0} \text{ of length } n \\
}
$$
```tikz
\usepackage{tikz}

\begin{document}
\begin{tikzpicture}[scale=2]
    % Define coordinates
    % v0 is at the center
    \coordinate (v0) at (0,0);
    % v1 through v6 form a hexagon.
    % Angles match the clock positions: v1 is top-right (60 deg), v2 is right (0 deg), etc.
    \coordinate (v1) at (60:1.5);
    \coordinate (v2) at (0:1.5);
    \coordinate (v3) at (-60:1.5);
    \coordinate (v4) at (-120:1.5);
    \coordinate (v5) at (180:1.5);
    \coordinate (v6) at (120:1.5);

    % Draw the outer hexagon
    \draw (v1) -- (v2) -- (v3) -- (v4) -- (v5) -- (v6) -- cycle;

    % Draw the internal spokes connecting through v0
    % Note: v1 and v4 are NOT connected to v0 in the image.
    \draw (v5) -- (v2); % Horizontal line through center
    \draw (v6) -- (v3); % Diagonal line through center

    % Draw the vertices (dots)
    \foreach \point in {v0,v1,v2,v3,v4,v5,v6}
        \fill (\point) circle (1.5pt);

    % Add labels
    \node[below right] at (v0) {$v_0$};
    \node[above] at (v1) {$v_1$};
    \node[right] at (v2) {$v_2$};
    \node[below] at (v3) {$v_3$};
    \node[below] at (v4) {$v_4$};
    \node[left] at (v5) {$v_5$};
    \node[above] at (v6) {$v_6$};

\end{tikzpicture}
\end{document}
```
$$
\displaylines{
\text{Solution:} \\
\text{Let } a_{n} = \text{number of such walks from } v_{0} \\
\text{Let } b_{n}, c_{n}, d_{n}, e_{n}, f_{n}, g_{n} = \text{number of such walks from } v_{1}, v_{2}, v_{3}, v_{4}, v_{5}, v_{6} \text{ respectively} \\
\\
\begin{eqsys}
a_{n} = c_{n-1} + d_{n-1} + f_{n-1} + g_{n-1} & (1) \\
b_{n} = c_{n-1} + g_{n-1} & (2) \\
c_{n} = a_{n-1} + b_{n-1} + d_{n-1} & (3) \\
d_{n} = a_{n-1} + c_{n-1} + e_{n-1} & (4) \\
e_{n} = d_{n-1} + f_{n-1} & (5) \\
f_{n} = a_{n-1} + e_{n-1} + g_{n-1} & (6) \\
g_{n} = a_{n-1} + b_{n-1} + f_{n-1} & (7) \\
\end{eqsys} \\
(2), (5) \implies b_{n} + e_{n} = c_{n-1} + d_{n-1} + f_{n-1} + g_{n-1} = a_{n} \\
\\
(1), (3), (4), (6), (7) \implies a_{n+1} = c_{n} + d_{n} + f_{n} + g_{n} = (a_{n-1} + b_{n-1} + d_{n-1}) + \\
+ (a_{n-1} + c_{n-1} + e_{n-1}) + (a_{n-1} + e_{n-1} + g_{n-1}) + (a_{n-1} + b_{n-1} + f_{n-1}) \\
\\
\implies a_{n+1} = 4a_{n-1} + 2(b_{n-1}+e_{n-1}) + (c_{n-1}+d_{n-1}+f_{n-1}+g_{n-1}) = \\
= 4a_{n-1} + 2a_{n-1} + a_{n} \\
\implies \boxed{ a_{n} = a_{n-1} + 6a_{n-2} } \\
x^{2} - x - 6 = (x-3)(x+2) \\
\implies a_{n} = A_{1} \cdot 3^{n} + A_{2} \cdot (-2)^{n} \\
a_{0} = 1 \implies A_{1} + A_{2} = 1 \\
a_{1} = 4 \implies 3A_{1} -2A_{2} = 4 \\
\implies 5A_{1} = 6 \implies A_{1} = \frac{6}{5} \implies A_{2} = -\frac{1}{5} \\
\implies \boxed{ a_{n} = \frac{6}{5} 3^{n} - \frac{1}{5} (-2)^{n} } \\
}
$$
