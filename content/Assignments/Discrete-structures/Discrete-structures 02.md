---
{"publish":true,"created":"09/11/25, 14:11","modified":"2025-11-21T21:10:02.219+02:00","tags":["Academia","Assignment","Discrete-structures"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Let } G \text{ be a non-connected graph} \\
\text{Find an upper bound for the diameter of } \overline{G} \\
\text{Show a case where the diameter of } \overline{G} \text{ is less than the upper-bound} \\
\\
\text{Solution:} \\
G \text{ is not connected} \implies \text{There are at least two connected components } G_{v}, G_{u} \\
\text{There are no edges from } G_{v} \text{ to other connected components} \\
\text{All sets of vertices in connected components are disjoint} \\
\text{Let there be two parts of the graph: } G_{v} = (V_{v}, E_{v}), G \setminus G_{v} = (V \setminus V_{v}, E \setminus E_{v}) \\
\forall u \in V_{v}, w \in V \setminus V_{v}: d(u, w)_{G} = \infty \\
\implies \not\exists \Set{ u, w } \in E \implies \Set{ u, w } \in \overline{E} \implies d(u, w)_{\overline{G}} = 1 \\
\forall u \in V_{v}, w \in V \setminus V_{v}: \Set{ u, w } \in \overline{E} \\
\implies \begin{array}{}
\forall u, u' \in V_{v}: \Set{ u, w }, \Set{ u', w } \in \overline{E} \implies d(u, u')_{\overline{G}} \leq 2 \\
\forall w, w' \in V \setminus V_{v}: \Set{ w, u }, \Set{ w', u } \in \overline{E} \implies d(w, w')_{\overline{G}} \leq 2 \\
\end{array} \\
\implies \boxed{ D(\overline{G}) \leq 2 } \\
\\
D(\overline{G}) = 1 < 2 \iff \overline{G} \text{ is a clique} \iff G \text{ is empty} \\
}
$$
---
# 2
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a graph with } k \text{ connected components with no cycles} \\
\text{Prove: } \abs{E} = \abs{V} - k \\
\\
\text{Proof:} \\
G \text{ is acyclic} \implies \text{Each connected component is acyclic} \\
\implies \text{Each acyclic component is a tree} \\
\implies \text{Each connected component has } \abs{V_{i}} - 1 \text{ edges} \\
\sum_{i=1}^{k} \abs{V_{i}} = \abs{V} \implies \abs{E} = \sum_{i=1}^{k} \abs{E_{i}} = \sum_{i=1}^{k} \abs{V_{i}} - k = \abs{V} - k \\
}
$$
---
# 3
$$
\displaylines{
\text{Let } A, B, C, D \text{ be sets} \\
\text{Let } A \sim C, B \sim D \\
}
$$
### 3a
$$
\displaylines{
\text{Prove or disprove: } A \times B \sim C \times D \\
\\
\text{Proof:} \\
A \sim C \implies \exists f: A \to C \text{ bijection} \\
B \sim D \implies \exists g: B \to D \text{ bijection} \\
\text{Let } h: A \times B \to C \times D, h(a, b) = (f(a), g(b)) \\
h \text{ is clearly bijective} \\
}
$$
### 3b
$$
\displaylines{
\text{Prove or disprove: } A \setminus B \sim C \setminus D \\
\\
\text{Disproof:} \\
\text{Let } A = B = C = \mathbb{Z} \\
\text{Let } D = \mathbb{N} \\
\implies A \setminus B = \emptyset, C \setminus D = \Set{ -1, -2, \dots } \\
\emptyset \not\sim \Set{ -1, -2, \dots } \\
}
$$
### 3c
$$
\displaylines{
\text{Prove or disprove: } A \cup B \sim C \cup D \\
\\
\text{Disproof:} \\
\text{Let } A = B = C = \Set{ 1, 2, 3 } \\
\text{Let } D = \Set{ 4, 5, 6 } \\
A \cup B = \Set{ 1, 2, 3 } \\
C \cup D = \Set{ 1, 2, 3, 4, 5, 6 } \\
\Set{ 1, 2, 3 } \not\sim \Set{ 1, 2, 3, 4, 5, 6 } \\
}
$$
---
## 4a
$$
\displaylines{
\text{Prove: } [0, 1] \sim (0, 1) \\
\\
\text{Proof:} \\
\text{Let } f: (0, 1) \to [0, 1], f(x) = \begin{eqsys}
0 & x = \frac{1}{2} \\
\frac{1}{n-2} & \exists n > 2 \in \mathbb{N}: x = \frac{1}{n} \\
x & \text{otherwise} \\
\end{eqsys} \\
\\
\text{Let } x_{1}, x_{2} \in (0, 1): f(x_{1}) = f(x_{2}) \\
f(x_{1}) = f(x_{2}) = 0 \implies x_{1} = x_{2} = \frac{1}{2} \\
f(x_{1}) = f(x_{2}) = \frac{1}{n-2} \text{ where } n > 2 \in \mathbb{N} \implies x_{1} = x_{2} = \frac{1}{n} \\
f(x_{1}) = x_{1} \text{ and } f(x_{2}) = x_{2} \implies x_{1} = x_{2} \\
\implies f \text{ is injective} \\
\text{Let } y \in [0, 1] \\
y = 0 \implies f\left( \frac{1}{2} \right) = y \\
\exists n \geq 1 \in \mathbb{N}: y = \frac{1}{n} \implies f\left( \frac{1}{n+2} \right) = \frac{1}{n} = y \\
\text{Otherwise } f(y) = y \\
\implies f \text{ is surjective} \\
\implies f \text{ is bijective} \implies \boxed{ (0, 1) \sim [0, 1] } \\
}
$$
## 4b
$$
\displaylines{
\text{Prove: } A \times A \sim A^{\Set{ 1, 2 }} \\
\\
\text{Proof:} \\
\text{Let } f: A \times A \to A^{\Set{ 1, 2 }}, f(a_{1}, a_{2}) = \Set{ (1, a_{1}), (2, a_{2}) } \\
\text{Let } (a_{1}, a_{2}), (a_{1}', a_{2}') \in A \times A : f(a_{1}, a_{2}) = f(a_{1}', a_{2}') \\
\implies \Set{ (1, a_{1}), (2, a_{2}) } =\Set{ (1, a_{1}'), (2, a_{2}') } \implies \begin{eqsys}
a_{1} = a_{1}' \\
a_{2} = a_{2}' \\
\end{eqsys} \\
\implies (a_{1}, a_{2}) = (a_{1}', a_{2}') \implies f \text{ is injective} \\
\text{Let } g \in A^{\Set{ 1, 2 }} \\
\implies g = \Set{ (1, a), (2, a') | a, a' \in A } \\
\implies f(a, a') = g \implies f \text{ is surjective} \\
\implies f \text{ is bijective} \implies \boxed{ A \times A \sim A^{\Set{ 1, 2 }} } \\
}
$$
## 4c
$$
\displaylines{
\text{Prove: } \mathcal{P}(A) \sim \Set{ 0, 1 }^{A} \\
\\
\text{Proof:} \\
\text{Let } f: \mathcal{P}(A) \to \Set{ 0, 1 }^{A}, f(B) = \Set{ (a, x) | a \in A, x = \begin{cases}
1 & a \in B \\
0 & a \not\in B \\
\end{cases} } \\
\text{Let } B_{1} \neq B_{2} \in \mathcal{P}(A) \\
\implies \exists a \in A: a \in B_{1}, a \not\in B_{2} \\
\implies f(B_{1})(a) \neq f(B_{2})(a) \implies f(B_{1}) \neq f(B_{2}) \\
\implies f \text{ is injective} \\
\text{Let } g \in \Set{ 0, 1 }^{A} \\
\text{Let } B = \Set{ a \in A | g(a) = 1 } \implies f(B) = g \\
\implies f \text{ is surjective} \implies f \text{ is bijective} \implies \boxed{ \mathcal{P}(A) \sim \Set{ 0, 1 }^{A} } \\
}
$$
## 4d
$$
\displaylines{
\text{Prove: } [0, 1] \sim A = \Set{ (x, y) \in \mathbb{R}^{2} | x^{2} + y^{2} = 1 } \\
\\
\text{Proof:} \\
\text{As shown in lectures and seminars, } [0, 1] \sim [0, 2\pi) \\
\text{Let } f: [0, 1] \to [0, 2\pi) \text{ be bijective} \\
\text{Let } g: [0, 2\pi) \to A, g(\theta) = (\cos\theta, \sin\theta) \\
g \text{ is bijective} \implies [0, 2\pi) \sim A \\
\implies [0, 1] \sim [0, 2\pi) \sim A \implies \boxed{ [0, 1] \sim A } \\
}
$$
---
## 5a
$$
\displaylines{
\text{Let } (x_{0}, y_{0}) \in \mathbb{R}^{2}, r > 0 \in \mathbb{R} \\
\text{Let } C((x_{0}, y_{0}), r) = \Set{ (x', y') \in \mathbb{R}^{2} | \sqrt{ (x_{0}-x')^{2} + (y_{0}-y')^{2} } = r } \\
\text{Let } B((x_{0}, y_{0}), r) = \Set{ (x', y') \in \mathbb{R}^{2} | \sqrt{ (x_{0}-x')^{2} + (y_{0}-y')^{2} } \leq r } \\
\text{Prove or disprove: a non-finite set of disjoint } B((x, y), r) \text{ is countable} \\
\\
\text{Proof:} \\
\text{Let } B^{\circ}((x, y), r) = \Set{ (x', y') \in \mathbb{R}^{2} | \sqrt{ (x_{0}-x')^{2} + (y_{0}-y')^{2} } < r } \\
\text{Let } S = \Set{ B_{i} }_{i \in I} \text{ be a non-finite collection of disjoint closed balls on } \mathbb{R}^{2} \\
\forall i \in I: B_{i}^{\circ}((x_{i}, y_{i}), r_{i}) \subseteq B_{i}((x_{i}, y_{i}), r_{i}) \\
\forall i \neq j \in I: B_{i} \cap B_{j} = \emptyset \implies B_{i}^{\circ} \cap B_{j}^{\circ} = \emptyset \\
\forall i \in I: B_{i}^{\circ} \subseteq (x_{i}-r, x_{i}+r) \times (y_{i}-r, y_{i}+r) \\
\implies \forall i \in I: \exists q_{i} \in \mathbb{Q}^{2}: q_{i} \in B_{i}^{\circ} \subseteq B_{i} \\
\\
\text{Let } f: S \to \mathbb{Q}^{2}, \forall i \in I: f(B_{i}) = q_{i} \\
\text{Let } B_{i}, B_{j}: f(B_{i}) = f(B_{j}) \\
\implies q_{i} = q_{j} \implies q_{i} = q_{j} \in B_{i} \cap B_{j} \\
\implies B_{i} \cap B_{j} \neq \emptyset \implies B_{i} = B_{j} \\
\implies f \text{ is injective} \implies S \preccurlyeq \mathbb{Q}^{2} \\
\mathbb{N} \sim \mathbb{Q} \implies \mathbb{N} \sim \mathbb{N}^{2} \sim \mathbb{Q}^{2} \\
\implies S \preccurlyeq \mathbb{N} \\
S \text{ is non-finite } \implies \boxed{ S \sim \mathbb{N} } \\
}
$$
## 5b
$$
\displaylines{
\text{Prove or disprove: } \exists S = \Set{ C_{i} }_{i \in I}: \forall i \neq j \in I: C_{i} \cap C_{j} = \emptyset \text{ and } S \sim \mathbb{R} \\
\\
\text{Proof:} \\
\text{Let } S = \Set{ C_{r} | C_{r} = \Set{ (x, y) | x^{2} + y^{2} = r^{2} }, r \in (0, 1) } \\
\\
\text{Let } f: (0, 1) \to S, f(x) = C_{x} \\
f \text{ is clearly bijective} \implies (0, 1) \sim S \implies \boxed{ \mathbb{R} \sim S } \\
}
$$
---
