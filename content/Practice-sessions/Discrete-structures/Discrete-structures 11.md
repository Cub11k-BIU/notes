---
{"publish":true,"created":"11/01/26, 15:03","modified":"2026-03-24T14:59:04.541+02:00","tags":["Academia","#Practice","Discrete-structures"],"cssclasses":""}
---

$$
\displaylines{
\text{Let } X, Y \text{ be random variables} \\
\forall \omega \in \Omega: X(\omega) \leq Y(\omega) \implies E[X] \leq E[Y] \\
}
$$
## Crossing number
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a graph} \\
CR(G) \text{ is a minimal number of crossings in a drawing of that graph on a 2D plane} \\
\\
G \text{ is planar} \iff CR(G) = 0 \\
}
$$
---
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a simple graph} \\
\text{Let } \abs{V} = n, \abs{E} = m \geq 4n \\
\text{Then } CR(G) \geq \frac{m^{3}}{64n^{2}} \\
\\
\text{Proof:} \\
\text{First, let us prove } CR(G) \geq \abs{E} - 3\abs{V} \\
\text{Proof is by induction on } CR(G) = k \\
\text{Base case. } k = 0 \\
\text{Graph is planar, } \abs{E} \leq 3\abs{V} - 6 \implies \abs{E} - 3\abs{V} \leq -6 \leq 0 = CR(G) \\
\text{Induction step.} \\
\text{Let } G: cr(G) = k \\
\text{Let } e_{1}, e_{2} \in E: e_{1} \text{ crosses } e_{2} \\
\text{Let } G' = G \setminus \Set{ e_{1} } \\
cr(G') \leq cr(G) - 1 \leq k - 1 \\
\implies cr(G') \geq \abs{E'} - 3\abs{V'} = \abs{E} - 3\abs{V} - 1 \\
\implies cr(G) \geq cr(G') + 1 \geq \abs{E} - 3\abs{V} \\
\\
\text{Let } p \in [0, 1] \\
\text{Let } V' \subseteq V: \forall v \in V: P(v \in V') = p \\
\text{Let } G' = G[V'] \\
\text{Let } X = \text{number of crossings in } G' \\
X \geq cr(G') \geq \abs{E(G')} - 3\abs{V(G')} \\
\text{Let } Y = \abs{E(G')} \\
\text{Let } Z = \abs{V(G')} \\
X \geq Y - 3Z \implies E[X] \geq E[Y - 3Z] = E[Y] - 3E[Z] \\
E[X] = CR(G)p^{4} \geq mp^{4} - 3np^{4} \\
E[Y] = mp^{2} \\
E[Z] = np \\
CR(G)p^{4} \geq mp^{2} - 3np \\
CR(G) \geq \frac{m}{p^{2}} - \frac{3n}{p^{3}} \\
\text{Let } p = \frac{4n}{m} \\
CR(G) \geq \frac{m^{3}}{16n^{2}} - \frac{3m^{3}}{64n^{2}} = \frac{m^{3}}{64n^{2}} \\
}
$$
---
$$
\displaylines{
\text{Let } G \text{ be an undirected graph with no triangles} \\
\text{Let } \abs{V} = n = 55 \\
\text{Prove: exists a coloring of } G \text{ that colors at least 10 vertices the same color} \\
\\
\text{Proof:} \\
R(3, 10) \leq \binom{3+10-2}{3-1} = \binom{11}{2} = 55 \\
\implies \text{Graph with 55 (or more) vertices either has a triangle} \\
\text{or an independent set of size } 10 \\
\text{Independent of size } 10 \text{ can be colored in one color} \\
}
$$
---
$$
\displaylines{
\text{Prove: } R(4, 3) = 9 \\
\\
\text{Proof:} \\
\text{Let us first prove that all red-blue colorings of } K_{9} \text{ contain a red } K_{4} \text{ or a blue } K_{3} \\
\text{Let all vertices have exactly 5 blue edges incident to them} \\
\implies \text{Blue subgraph of } K_{9} \text{ fulfills:} \\
2\abs{E} = 5 \cdot 9 = 45 - \text{Contradiction!} \\
\implies \exists v \in V(K_{9}): deg_{B}(v) \geq 6 \text{ or } deg_{R}(v) \geq 4 \\
\text{Let } deg_{B}(v) \geq 6 \\
R(3, 3) = 6 \implies \Gamma(v) \text{ has a red triangle or a blue triangle} \\
\implies K_{9} \text{ has a red triangle or a blue } K_{4} \\
\text{Let } deg_{R}(v) \geq 4 \\
\implies \Gamma(v) \text{ has a red } K_{2} \text{ or a blue } K_{4} \\
\implies K_{9} \text{ has a red triangle or a blue } K_{4} \\
\\
\text{Let us now prove that } K_{8} \text{ has a coloring with no red triangle and no blue } K_{4} \\
\text{Let } V = \Set{ 1, 2, \dots, 8 } \\
\text{Let } E_{R} = \Set{ \Set{ i, j } \mid \abs{i - j} \in \Set{ 1, 4, 7 } } \\
\text{Let } \exists \Set{ i, j, k } \text{ a red triangle} \\
\implies \begin{eqsys}
\abs{i - j} \in \Set{ 1, 4, 7 } \\
\abs{i - k} \in \Set{ 1, 4, 7 } \\
\abs{j - k} \in \Set{ 1, 4, 7 } \\
\end{eqsys} \\
\text{Let } \Set{ i, j }, \Set{ j, k } \in E_{R} \\
\abs{i - j} \in \Set{ 1, 4, 7 } \\
\abs{j - k} \in \Set{ 1, 4, 7 } \\
\implies \abs{i - k} = \abs{i - j + j - k} = 3m \not\in \Set{ 1, 4, 7 } - \text{Contradiction!} \\
\\
\text{Similarly for blue } K_{4} \\
\Set{ i+2, i+3 } \text{ and } \Set{ i+5, i+6 } \text{ are red} \\
}
$$
---
$$
\displaylines{
\text{Let } G \text{ be a graph without an independent set of size } 3 \\
\text{Find minimal } n \text{ such that } \abs{V} = n \text{ and } G \text{ is not planar} \\
\\
\text{Solution:} \\
\overline{G} \text{ has no triangles} \\
\text{If we take } n \geq R(5, 3) \text{ we will get that } G \text{ has } K_{5} \text{ and thus is not planar} \\
R(5, 3) = 14 \implies \boxed{ n \geq 14 } \\
\text{With Mantel's theorem, } \abs{E(\overline{G})} \leq \floor{\frac{n^{2}}{4}} \implies \abs{E(G)} \geq \binom{n}{2} - \floor{ \frac{n^{2}}{4}} \\
\text{Let } n \text{ be even} \\
\implies \abs{E(G)} \geq \binom{n}{2} - \frac{n^{2}}{4} = \frac{n^{2}-2n}{4} \\
\abs{E(G)} \geq \frac{n^{2} - 2n}{4} > 3n - 6 \implies G \text{ is not planar} \\
\frac{n^{2}-2n}{4} > 3n-6 \implies \boxed{ n \geq 14 } \\
\text{Let } n \text{ be odd} \\
\implies \abs{E(G)} \geq \binom{n}{2} - \frac{n^{2}-1}{4} = \frac{n^{2}-2n+1}{4} \\
\frac{n^{2}-2n+1}{4} > 3n - 6 \implies \boxed{ n \geq 13 } \\
\\
\text{Let } \chi(G) = k \\
G \text{ has no independent set of size } 3 \implies G \text{ has no more than 2 vertices of one color} \\
\implies k \geq \ceil{\frac{n}{2}} \\
k \geq 5 \implies G \text{ is not planar} \implies \boxed{ n \geq 9 } \\
\text{Let us prove that } n = 9 \\
\text{Let } n = 8 \\
\text{Let } G = 2K_{4} \\
G \text{ has no independent set and is planar} - \text{Contradiction!} \\
\implies \boxed{ n = 9 } \\
}
$$
---
