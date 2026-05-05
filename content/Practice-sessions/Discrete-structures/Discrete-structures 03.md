---
{"publish":true,"created":"09/11/25, 15:11","modified":"2026-03-24T14:59:04.473+02:00","tags":["Academia","Practice","Discrete-structures"],"cssclasses":""}
---

$$
\displaylines{
\delta(V) = \min\Set{ deg(v) | v \in V } \\
\Delta(V) = \max\Set{ deg(v) | v \in V } \\
\text{Prove: } \delta(V) \leq \frac{2\abs{E}}{\abs{V}} \leq \Delta(V) \\
\\
\text{Proof:} \\
\abs{V}\delta(V) \leq \sum_{v \in V} deg(v) = 2\abs{E} \leq \abs{V}\Delta(V) \\
\implies \delta(V) \leq \frac{2\abs{E}}{\abs{V}} \leq \Delta(V) \\
}
$$
---
$$
\displaylines{
\text{Prove that if a graph has exactly two vertices with an odd degree,} \\
\text{there exists a path between them} \\
\\
\text{Proof:} \\
\forall G_{u} \text{ connected component of } G: \sum_{v \in V_{u}} deg(v) = 2\abs{E_{u}} \\
\text{Let } v, w \text{ be vertices with odd degrees} \\
\implies \sum_{u \in V_{v}} deg(u) = 2\abs{E_{v}} = deg(v) + \underbrace{ \dots }_{ \text{Even degrees} } + \ deg(w) \\
}
$$
---
$$
\displaylines{
\text{Let } G \text{ be a clique } K_{100} \\
\text{Let there be } k \text{ colors, define the set of colors to be } \mathcal{K} \\
\text{Let all one-color cycles in $G$ be of even length} \\
\text{Prove: } \abs{\mathcal{K}} > \log_{2}(100) \\
\\
\text{Proof:} \\
\text{Let } \forall i \in [1, k]: G_{i} = (V, E_{i}) \\
E = \bigcup_{ i \in [1, k]} E_{i} \\
\text{Each color defines a bipartite graph } G_{c} \\
\text{Let } \forall v \in V: b(v) = (b_{1}, \dots, b_{k}) : \forall i \in [1, k]: x_{k} = \begin{cases}
1 & v \in L_{i} \\
0 & v \in R_{i} \\
\end{cases} \\
\text{Let } v \neq u \in V \\
\Set{ v, u } \in E \implies \exists i \in [1, k]: \Set{ v, u } \in E_{i} \implies v \in L_{i}, u \in R_{i} \\
\implies b(v) \neq b(u) \implies \abs{b[V]} = \abs{V} = 100 \\
\abs{Range(b)} = 2^{k} \implies 100 \leq 2^{k} \implies k \geq \log_{2}(100) \\
k \in \mathbb{N} \implies k > \log_{2}(100) \\
}
$$
---
$$
\displaylines{
\text{Prove: maximum number of edges in a bipartite graph is } \floor{\frac{n^{2}}{4}} \\
\\
\text{Proof:} \\
\text{Let } V = L \sqcup R \\
\text{Let } \abs{L} = m, \abs{R} = l \\
\abs{E} = m \cdot l \\
\text{Let } f(m) = \abs{E} = m \cdot l = m(n-m) = nm - m^{2} \\
f'(m) = n - 2m \\
f'(m) = 0 \iff m = \frac{n}{2} \\
f\left( \frac{n}{2} \right) = \frac{n^{2}}{4} \\
}
$$
---
