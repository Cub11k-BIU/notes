---
{"publish":true,"created":"16/11/25, 15:11","modified":"2026-03-24T14:59:04.482+02:00","tags":["Academia","Practice","Discrete-structures"],"cssclasses":""}
---

## Cardinality arithmetic
$$
\displaylines{
\text{Let } a, b, c \text{ be cardinalities} \\
\\
\text{Then } \\
\abs{A} + \abs{B} = \abs{A \times \Set{ 0 } \cup B \times \Set{ 1 }} \\
\abs{A} \cdot \abs{B} = \abs{A \times B} \\
\abs{A}^{\abs{B}} = \abs{A^{B}} = \abs{\Set{ f: B \to A }} \\
\\
a \cdot b = b \cdot a \\
f: A \times B \to B' \times A', f(a, b) = (f_{B'}(b), f_{A'}(a)) \\
\\
a + b = b + a \\
f: A \times \Set{ 0 } \cup B \times \Set{ 1 } \to B' \times \Set{ 0 } \cup A' \times \Set{ 1 }, \begin{eqsys}
f(a, 0) = (f_{A'}(a), 1) \\
f(b, 1) = (f_{B'}(b), 0) \\
\end{eqsys} \\
\\
a(b + c) = ab + ac \\
\forall n \in \mathbb{N} : \begin{eqsys}
\underbrace{ a + a + \dots + a }_{ n \text{ times} } = n \cdot a \\
\underbrace{ a \cdot a \cdot \ldots \cdot a }_{ n \text{ times} } = a^{n} \\
\end{eqsys} \\
\\
(a \cdot b)^{c} = a^{c} \cdot b^{c} \\
\\
F: A^{C} \times B^{C} \to (A \times B)^{C} , F(f, g) = f_{g} \\
f_{g}: C \to A \times B, f_{g}(c) = (f(c), g(c)) \\
\\
a^{b} \cdot a^{c} = a^{b+c} \\
F: A^{B} \times A^{C} \to A^{B \times \Set{ 0 } \cup C \times \Set{ 1 }}, F(f, g) = f_{g} \\
f_{g}: B \times \Set{ 0 } \cup C \times \Set{ 1 } \to A, \begin{eqsys}
f_{g}(b, 0) = f(b) \\
f_{g}(c, 1) = g(c) \\
\end{eqsys} \\
}
$$
---
### Indicator function #definition 
$$
\displaylines{
\forall B \subseteq A: \mathcal{X}_{B}: A \to \Set{ 0, 1 }, \mathcal{X}_{B}(a) = \begin{cases}
1 & a \in B \\
0 & \text{otherwise} \\
\end{cases} \\
}
$$
---
$$
\displaylines{
\abs{\mathcal{P}(A)} = 2^{\abs{A}} \\
F: \mathcal{P}(A) \to \Set{ 0, 1 }^{A}, F(B) = \mathcal{X}_{B} \\
}
$$
---
$$
\displaylines{
\aleph_{0}^{\aleph_{0}} \leq 2^{\aleph_{0}} = \aleph \\
\\
\mathbb{N}^{\mathbb{N}} = \Set{ f: \mathbb{N} \to \mathbb{N} } \\
\Set{ 0, 1 }^{\mathbb{N}} = \Set{ g: \mathbb{N} \to \Set{ 0, 1 } } \\
F: \mathbb{N}^{\mathbb{N}} \to \Set{ 0, 1 }^{\mathbb{N}}, F(f) = g \\
\\
\text{Let } f \in \mathbb{N}^{\mathbb{N}} \\
f = \Set{ f(0), f(1), \dots } \\
\text{Let } b_{f} = \underbrace{ 1\dots1 }_{ f(0) + 1 \text{ times} }0\underbrace{ 1\dots1 }_{ f(1) + 1 \text{ times} }0\dots \\
\text{Let } g \in \Set{ 0, 1 }^{\mathbb{N}} \\
g = \Set{ b_{f}[0], b_{f}[1], \dots } \\
\\
\text{Let } \forall f \in \mathbb{N}^{\mathbb{N}}: 0_{f} = \Set{ \sum_{i=0}^{k} [f(i)+2] | k \in \mathbb{N} } \\
F(f) = g = \overline{\mathcal{X}_{0_{f}}}, \forall n \in \mathbb{N}: g(n) = \begin{cases}
0 & n \in 0_{f} \\
1 & \text{otherwise} \\
\end{cases} \\
f_{1} = f_{2} \implies 0_{f_{1}} = 0_{f_{2}} \implies F(f_{1}) = F(f_{2}) \\
\implies F \text{ is injective} \implies \mathbb{N}^{\mathbb{N}} \preccurlyeq \Set{ 0, 1 }^{\mathbb{N}} \\
\implies \text{By Cantor-Bernstein theorem } \mathbb{N}^{\mathbb{N}} \sim \Set{ 0, 1 }^{\mathbb{N}} \implies \aleph_{0}^{\aleph_{0}} = 2^{\aleph_{0}} = \aleph \\
}
$$
---
## Cantor sub-theorem #theorem 
$$
\displaylines{
\text{Let } A \in \Set{ \mathbb{N}, \mathbb{R} } \\
\text{Then } A \precneqq \mathcal{P}_{inf}(A) \\
\\
\text{Proof:} \\
\text{Let } B = \Set{ C \in \mathcal{P}(A) | C \text{ is finite} } \\
\text{Let } \forall k \in \mathbb{N}: B_{k} = \Set{ C \in \mathcal{P}(A) | \abs{C} = k } \\
\text{Let } \forall k \in \mathbb{N}: f_{k}: B_{k} \to A^{k}, f_{k}(C) = (c_{1}, \dots, c_{k}) \\
f_{k} \text{ is injective} \implies B_{k} \preccurlyeq A^{k} \\
B = \bigcup_{k \in \mathbb{N}} B_{k} \implies B \preccurlyeq \bigcup_{k \in \mathbb{N}} A^{k} \\
A = \mathbb{N} \implies B \preccurlyeq \bigcup_{k \in \mathbb{N}} \mathbb{N}^{k} \preccurlyeq \bigcup_{k \in \mathbb{N}} \mathbb{N} \times \Set{ k } \preccurlyeq \mathbb{N}^{2} = \aleph_{0} \\
A = \mathbb{R} \implies B \preccurlyeq \bigcup_{k \in \mathbb{N}} \mathbb{R}^{k} \preccurlyeq \bigcup_{k \in \mathbb{N}} \mathbb{R} \times \Set{ k } \preccurlyeq \mathbb{R} \times \mathbb{R} \preccurlyeq \mathbb{R}^{2} \preccurlyeq \mathbb{R} = \aleph \\
\implies B \preccurlyeq A \\
\mathcal{P}_{inf}(A) = A \setminus B \\
\dots \\
}
$$
---
