---
{"publish":true,"created":"09/12/25, 16:05","modified":"2025-12-10T13:02:46.216+02:00","tags":["Academia","Lecture","Discrete-structures"],"cssclasses":""}
---

#### Interval graphs are perfect #lemma 
$$
\displaylines{
G \text{ is an interval graph} \\
\text{Then } \chi(G) = \omega(G) \\
\\
\text{In general, a graph is perfect} \iff \forall A \subseteq V: \chi(G[A]) = \omega(G[A]) \\
\\
\text{Proof:} \\
\text{Clearly, } \chi(G) \geq \omega(G), \text{ as we need } \omega(G) \text{ colors to color the maximum clique in } G \\
\text{It is enough to show that } \omega(G) \text{ colors is enough to color the whole graph} \\
\text{Proof by induction on } n, \text{ number of vertices} \\
\text{Base case. } n = 1 \implies \omega(G) = 1 \implies \chi(G) = \omega(G) \\
\text{Induction step. Let } \forall G \text{ interval graph with } n \text{ vertices}: \chi(G) \leq \omega(G) \\
\text{Let } G = (V, E) \text{ an interval graph with } n + 1 \text{ vertices} \\
\text{Let } v_{i} \text{ be the vertex such that } r_{i} \text{ is the leftmost right endpoint of } r_{i} \\
\text{That is, } \forall j: r_{i} \leq r_{j} \\
\text{Consider the interval graph } G' = G \setminus \Set{ v_{i} } \\
\text{By inductive hypothesis, } \chi(G') \leq \omega(G') \leq \omega(G) \\
\forall v_{j} \in \Gamma(v_{i}): r_{i} \leq r_{j} \implies l_{j} < r_{i} \implies r_{i} \in [l_{j}, r_{j}] \\
\implies \Gamma(v_{i}) \text{ form a clique} \implies deg_{G}(v_{i}) \leq \omega(G) - 1 \\
\implies \text{There exists a color unused by any of the neighbors of } v_{i} \implies v_{i} \text{ can be colored} \\
\implies G \text{ can be colored with } \omega(G) \text{ colors} \\
\implies \chi(G) \leq \omega(G) \implies \boxed{ \chi(G) = \omega(G) } \\
}
$$
## Mycielski graphs (Mycielskians) #theorem 
$$
\displaylines{
\forall k \geq 1 \in \mathbb{N}: \exists M_{k} \text{ graph with no triangles such that } \chi(M_{k}) = k \\
\\
\text{Proof:} \\
\text{Proof is by inductive construction of such graphs} \\
M_{1} = (\Set{ v }, \emptyset) \\
M_{2} = (\Set{ v, u }, \Set{ \Set{ v, u } }) \\
\text{Induction step. Let } M_{k} \\
M_{k+1} = (V_{k+1}, E_{k+1}), \abs{V_{k}} = n \\
V_{k+1} = V_{k} \cup \Set{ u_{1}, \dots, u_{n}, w } \\
E_{k+1} = E_{k} \cup \Set{ \Set{ u_{i}, v } | i \in [1, n], v \in \Gamma_{M_{k}}(v_{i}) } \cup \Set{ \Set{ u_{i}, w } | i \in [1, n] } \\
\text{Let by contradiction } \mathcal{T} = \Set{ x, y, z } \text{ be a triangle in } M_{k+1} \\
M_{k} \text{ has no triangles} \implies \text{At most two vertices in } \mathcal{T} \text{ are from } \Set{ v_{1}, \dots, v_{n} } & WLOG \\
\text{All vertices } \Set{ u_{1}, \dots, u_{n} } \text{ are disjoint} \\
\implies \text{At most one vertex in } \mathcal{T} \text{is from } \Set{ u_{1}, \dots, u_{n} } \\
\Gamma(w) = \Set{ u_{1}, \dots, u_{n} } \implies w \not\in \mathcal{T} \\
\implies \mathcal{T} = \Set{ v_{i}, v_{j}, u_{k} } \\
\implies \Set{ v_{i}, v_{j}, v_{k} } \text{ is a triangle in } M_{k} - \text{Contradiction!} \\
\implies M_{k+1} \text{ has no triangles} \\
\\
\text{Let } \chi_{k}: V_{k} \to [1, k] \text{ be the coloring of } M_{k} \\
\text{Let } \chi_{k+1}: V_{k+1} \to [1, k+1], \chi_{k+1}(v) = \begin{cases}
\chi_{k}(v_{i}) & v = u_{i} \\
k+1 & v = w \\
\end{cases} \\
(u_{i}, v_{j}) \in E_{k+1} \implies \Set{ v_{i}, v_{j} } \in E_{k} \\
\implies \chi_{k+1}(u_{i}) = \chi_{k}(v_{i}) \neq \chi_{k}(v_{j}) = \chi_{k+1}(v_{j}) \\
\implies M_{k+1} \text{ is } (k+1) \text{-colorable} \\
\\
\text{Let by contradiction } \exists \chi_{k+1}: V_{k+1} \to [1, k] \\
\text{Let } \chi_{k+1}(w) = k & WLOG \\
\text{Let } A = \Set{ v_{i} | \chi_{k+1}(v_{i}) = k } \\
\text{Let } \chi_{k}(v_{i}) = \begin{cases}
\chi_{k+1}(u_{i}) & v_{i} \in A \\
\chi_{k+1}(v_{i}) & v_{i} \not\in A \\
\end{cases} \\
\text{Let } \Set{ v_{i}, v_{j} } \in E_{k} \\
\text{Both } v_{i}, v_{j} \text{ clearly can't be in } A \\
\text{Let } v_{i} \in A, v_{j} \not\in A & WLOG \\
\chi_{k}(v_{i}) = \chi_{k+1}(u_{i}) \neq \chi_{k+1}(v_{j}) = \chi_{k}(v_{j}) \\
\implies \chi_{k} \text{ is a coloring with } k-1 \text{ colors} - \text{Contradiction!} \\
\implies M_{k+1} \text{ is not } k\text{-colorable} \\
}
$$
## Coloring sparse graphs
$$
\displaylines{
\text{Let } m \ll n^{2} \\
\text{Clearly, } n \text{ colors is always sufficient} \\
\text{Can we use less than } n \text{ colors?} \\
\\
\text{Yes!} \\
\text{Prove: } \forall G = (V, E), \chi(G) \leq O(\sqrt{ m }) \\
\\
\text{Proof:} \\
\text{Let } \chi: V \to [1, \chi(G)] \\
\text{Let } E(S, T) = \Set{ \Set{ u, v } \in E | u \in S, v \in T } \\
\forall i, j: E(\chi^{-1}[i], \chi^{-1}[j]) \neq \emptyset, \text{ otherwise we could merge two colors into one} \\
\implies \binom{\chi(G)}{2} \leq m \implies m \geq \binom{\chi(G)}{2} \geq \frac{(\chi(G)-1)^{2}}{2} \implies \chi(G) \leq \sqrt{ 2m } + 1 \\
\\
\text{This bound is tight!} \\
\text{Let } G \text{ be a union of clique of size } \sqrt{ m } \text{ and } n-\sqrt{ m } \text{ isolated vertices} \\
}
$$
---
$$
\displaylines{
\text{From the previous lecture, } \forall G: \chi(G) \leq \Delta(G) + 1 \\
\text{This bound is tight, an odd cycle and clique for example} \\
\text{Surprisingly, they are the only examples} \\
}
$$
---
### Brook's theorem #theorem 
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a connected graph} \\
\text{Let } \Delta(G) = k \\
\text{Then, } G \text{ is } k\text{-colorable, unless it is an odd cycle or a clique} \\
\\
\text{Proof:} \\
\text{Consider the case } k = 2 \\
\implies G \text{ is either a path or a cycle (proof is left as an exercise)} \\
\text{If } G \text{ is a path or an even cycle, it is bipartite and we're done} \\
\text{If} G \text{ is an odd cycle, we're done} \\
\\
\text{Let } k \geq 3 \\
\text{We will make use of the following obvious observation.} \\
\text{Let $G$ be a graph whose maximum degree is at most $k$.} \\
\text{Suppose that $G$ is partially colored using at most $k$ colors.} \\
\text{Let $P = (v_{0}, v_{1}, \dots, v_{j})$ be a path in $G$, and assume that the vertices of $P$ are uncolored.} \\
\text{Then we may color all vertices from $v_{1}$ up to $v_{j-1}$ consecutively along $P$,} \\
\text{since at the moment of coloring the vertex $v_{1}$ its neighbor $v_{i+1}$ is yet uncolored.} \\
\text{We denote this sequential coloring procedure by PathColor$(v_{0}, v_{1}, \dots, v_{j-1}; v_{j} )$.} \\
\text{Note that after its execution, the last vertex $v_{j}$ of the path P remains uncolored,} \\
\text{in particular PathColor does nothing if $j = 0$.} \\
\\
\text{The proof is by induction on } \abs{V} = n, k \text{ is fixed} \\
\text{Base case. } n \leq k + 1 \\
G \text{ is not a clique} \implies \exists u, v \in V: \Set{ u, v } \not\in E \\
\implies \text{We can color } u, v \text{ the same color and everything else is a unique color} \\
\text{Inductive step.} \\
\text{Let } v \in V: deg(v) < k \\
\text{Let } G' = G \setminus v \\
G' \text{ is not a } (k+1)\text{-clique} \text{ and } v \text{ will have an available color, and we're done} \\
\implies G \text{ can be assumed } k\text{-regular} \\
\text{Let } v_{1} \in G \\
G \text{ does not contain a } (k+1)\text{-clique} \implies \exists v_{0}, v_{2} \in \Gamma(v_{1}) : \Set{ v_{0}, v_{2} } \not\in E \\

}
$$