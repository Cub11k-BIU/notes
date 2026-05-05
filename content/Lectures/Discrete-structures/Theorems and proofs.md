---
{"publish":true,"created":"04/02/26, 10:08","modified":"2026-03-24T15:00:28.617+02:00","tags":["Academia","Lecture","Discrete-structures"],"cssclasses":""}
---

## Cantor
$$
\displaylines{
\forall A: A \not\sim \mathcal{P}(A) \\
\\
\text{Proof:} \\
\text{Let } f: A \to \mathcal{P}(A) \\
\text{Let } C = \Set{ x \in A \mid x \not\in f(x) } \\
\forall x \in A: \begin{cases}
x \in f(x) \implies x \not\in C \\
x \not\in f(X) \implies x \in C \\
\end{cases} \implies f(x) \neq C \\
\implies f \text{ is not surjective} \implies A \not\sim \mathcal{P}(A) \\
\\
\text{Core idea:} \\
\text{Cantor's "diagonal" - an impossible set that differs from } f(x) \text{ for each } x \\
}
$$
## Euler cycle
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a connected multigraph} \\
G \text{ contains an Euler cycle} \iff \forall v \in V: deg(v) \text{ is even} \\
\\
\text{Proof:} \\
\boxed{ \implies } \text{ Let } G \text{ contains an Euler cycle} \\
\text{Let } C = (v_{0}, \dots, v_{k} = v_{0}) \text{ be an Euler cycle} \\
\forall i \in [0, k - 1]: \Set{ v_{i-1 \pmod{k}}, v_{i} }, \Set{ v_{i}, v_{i+1 \pmod{k}} } \in C \\
\text{And no other edges are found in } E \\
\implies \forall v \in V: deg(v) = 2 \cdot k_{v} \text{ where } k_{v} \text{ is the number of indexes } i \text{ such that } v_{i} = v \\
\\
\boxed{ \impliedby } \text{ Let } \forall v \in V: deg(v) \text{ is even} \\
\text{Case 0. } \abs{V} = 1 \\
\text{An Euler cycle } (v) \text{ exists} \\
\text{Let } \abs{V} > 1 \\
\\
\text{Proof is by induction on } m \text{ number of edges} \\
G \text{ is connected and not a tree (leaves are impossible)} \implies m \geq n \text{ and } G \text{ has a cycle} \\
\text{Note also } \forall v \in V: deg(v) \geq 2 \\
\text{Base case. } m = n \\
2m = \sum_{v \in V} deg(v) \implies 2n = \sum_{v \in V} deg(v) \implies \forall v \in V: deg(v) = 2 \\
\implies G = C_{n} \text{ and has an Euler cycle } (v_{1}, \dots, v_{n}, v_{1}) \\
\text{Inductive step. Let } \forall G': G' \text{ is connected, has less than $m$ edges} \\
\text{and all vertices have even degree} \implies G' \text{ has an Euler cycle} \\
\\
\text{Let } G = (V, E) \text{ be a connected multigraph with } m \text{ edges} \\
\text{Let } \forall v \in V: deg(v) \text{ is even} \\
2m = \sum_{v \in V} deg(v) \geq 2n \implies m \geq n \implies G \text{ has a cycle } C = (v_{1}, \dots, v_{k}, v_{1}) \\
\text{Let } G' = G \setminus C = (V, E \setminus C) \\
\forall u \in V: deg_{G'}(u) = \begin{cases}
deg_{G}(u) & u \neq v_{i} \\
deg_{G}(u) - 2 & u = v_{i} \\
\end{cases} \implies deg_{G'}(u) \text{ is even} \\
\text{Case 1. } E(G') = \emptyset \\
\implies C \text{ is an Euler cycle in } G \\
\text{Case 2. } E(G') \neq \emptyset \\
\text{Let } \mathcal{K_{1}}, \dots, \mathcal{K_{t}} \text{ be connected components of } G' \\
\forall i \in [1, t]: \mathcal{K_{i}} \text{ is a connected graph with less than } m \text{ edges and all even degrees} \\
\implies \mathcal{K_{i}} \text{ contains an Euler cycle } C_{i} \\
G \text{ is connected} \implies \forall i \in [1, k]: \exists! j \in [1, t]: v_{i} \in C \cap \mathcal{K_{j}} \\
\\
\text{Let } \forall j \in [1, t]: V_{j} = \Set{ v_{i} \in C \cap K_{j} } \\
\text{Let } \forall j \in [1, t]: u_{j} = v_{i} \in V_{j}: i \text{ is minimal} \\
\text{Let } \forall j \in [1, t]: \forall v_{i} \in V_{i}: C_{j_{i}} = \begin{cases}
(v_{i}, \dots, v_{i}) \text{ an Euler cycle in } \mathcal{K_{j}} & v_{i} = u_{j} \\
() & \text{otherwise} \\
\end{cases} \\
\text{This step prevents Euler cycles of each connected componenet to appear twice} \\
\text{Then } \\
C_{j_{1}} \circ (v_{1}, v_{2}) \circ C_{j_{2}} \circ (v_{2}, v_{3}) \circ \dots \circ (v_{k-1}, v_{k}) \circ C_{j_{k}} \circ (v_{k}, v_{1}) \text{ is an Euler cycle in } G \\
\\
\text{Core idea:} \\
\text{Induction on the number of edges, removing a cycle} \\
\text{and carefully including Euler cycle of each connected componenet} \\
}
$$
## Ore
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a simple graph with } n \geq 3 \text{ vertices} \\
\text{Let } \forall u, v \in V: \Set{ u, v } \not\in E: deg(u) + deg(v) \geq n \\
\text{Then } G \text{ contains a Hamilton cycle} \\
\\
\text{Proof:} \\
\text{Let } \mathcal{G}_{n} = \Set{ G \mid \abs{V} = n, G \text{ fulfills Ore's condition and has no Hamilton cycle} } \\
\text{Let by contradiction } \mathcal{G}_{n} \neq \emptyset \\
\text{Let } G \in \mathcal{G}_{n} \text{ be maximal in relation to inclusion order } \preccurlyeq \\
\\
K_{n} \text{ contains a Hamilton cycle} \implies G \neq K_{n} \\
\text{Let } u, v \in V: e = \Set{ u, v } \not\in E \\
\text{Let } G' = G  \cup \Set{ e } \\
\text{By maximality of } G, G' \text{ contains a Hamilton cycle } C \\
\text{And clearly, } e \in C \\
\text{Let } C = (x_{0} = u, x_{1}, \dots, x_{n-1} = v, x_{0} = u) \\
\text{Let } x_{i} \in \Gamma_{G}(u) \subseteq \Set{ x_{1}, \dots, x_{n-2} } \\
x_{i-1} \in \Gamma_{G}(v) \implies C' = (x_{i}, x_{i+1}, \dots, x_{n-1}, x_{i-1}, x_{i-2}, \dots, x_{0}, x_{i}) \\
\text{is a Hamilton cycle in } G - \text{Contradiction!} \\
\implies x_{i-1} \not\in \Gamma_{G}(v) \\
\text{Let } \mathcal{I} = \Set{ i | x_{i} \in \Gamma_{G}(u) } \subseteq \Set{ 1, 2, \dots, n-2 } \\
\text{Let } \mathcal{I}^{-} = \Set{ i-1 | i \in \mathcal{I} } \subseteq \Set{ 0, 1, \dots, n-3 } \\
\text{As shown above, } \forall j \in \mathcal{I}^{-}: x_{j} \not\in \Gamma_{G}(v) \\
deg_{G}(v) \leq (n-1) - \abs{\mathcal{I}^{-}} = (n-1) - \abs{\mathcal{I}} = n-1 - deg_{G}(u) \\
\implies deg_{G}(v) + deg_{G}(u) \leq n-1 < n - \text{Contradiction!} \\
\\
\text{Core idea:} \\
\text{Take all graphs that fulfill Ore's condition on } n \text{ vertices} \\
\text{Assume by contradiction there exists one without a Hamilton cycle} \\
\text{Take the largest, add edge $\Set{ v, u }$ (now it must have a Hamilton cycle)} \\
\text{Prove that number of neighbors of } v \text{ is less than needed} \\
\text{by taking neighbors of } u \text{ and proving that previous in the cycle are not neighbors of } v \\
}
$$
## Berge
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a graph and } M \text{ be a matching in } G \\
\text{Then } M \text{ is a maximum matching} \iff \text{There are no } M\text{-expanding paths} \\
\\
\text{Proof:} \\
\boxed{ \implies } \text{ Let } M \text{ be a maximum matching} \\
\text{Let by contradiction there exists an } M\text{-expanding path } P \\
\text{Then } M \triangle P \text{ is a matching larger than } M - \text{Contradiction!} \\
\text{More detailed:} \\
\text{Let by contradiction } \exists P: (v_{0} \dots, v_{2k+1}) \text{ expanding path} \\
\text{Note that an alternating path is necessarily of odd length} \\
\text{Let } \forall i \in [1, 2k+1]: e_{i} = \Set{ v_{i-1}, v_{i} } \\
\text{Let } P_{odd} = \Set{ e_{2i+1} | i \in [1, k] }, P_{even} = \Set{ e_{2i} | i \in [1, k] } \\
P_{even} \subseteq M, P_{odd} \cap M = \emptyset, P_{even} \cap P_{odd} = \emptyset \\
\text{Let } M' = (M \setminus P_{even}) \cup P_{odd} \\
u \not\in P \implies u \text{ is incident to a single edge in } M \implies \text{ it is incident to that edge in } M' \\
u \in \Set{ v_{0}, v_{2k+1} } \implies u \text{ is } M\text{-unsaturated and we added exactly one edge to it in } M' \\
u \in \Set{ v_{1}, \dots, v_{2k} } \implies u \text{ is incident to two edges in } P, \text{ one in } P_{even}, \text{ one in } P_{odd} \\
\text{We remove the edge from } P_{even}  \text{ and add an edge from } P_{odd} \text{ to } M' \\
\implies u \text{ is incident to exactly one edge in } M' \implies M' \text{ is a matching} \\
\abs{M'} > \abs{M} - \text{Contradiction!} \implies G \text{ has no $M$-expanding path} \\
\\
\boxed{ \impliedby } \text{ Let there be no } M\text{-expanding paths} \\
\text{Let } M' \text{ be a matching, } \abs{M'} > \abs{M} \\
\text{Let } G_{\triangle} = (V, M \triangle M') \\
\forall v \in V: deg_{G_{\triangle}}(v) \leq 2 \implies G \text{ is a collection of alternating paths and cycles} \\
\text{Cycles contain the same number of edges from } M \text{ and } M' \\
\abs{M} < \abs{M'} \implies \exists P \text{ a path containing more edges from } M' \text{ than from } M \\
P \text{ must be alternating} \implies P \text{ starts and ends with edges from } M' \\
\implies P \text{ is an $M$-expanding path} - \text{Contradiction!} \\
\implies M \text{ is a maximm matching} \\
}
$$
## Hall
$$
\displaylines{
\text{Let } G = (V = L \cup R, E) \text{ be a bipartite graph} \\
\text{Let } \abs{L} = \abs{R} \\
G \text{ contains a perfect matching} \iff \forall S \subseteq L: \abs{S} \leq \abs{\Gamma(S)} \\
\\
\text{Proof:} \\
\boxed{ \implies } \text{ Let } G \text{ has a perfect matching } M \\
\text{Let } S \subseteq L \\
\forall s \in S: \exists \Set{ s, r } \in M \text{ and } \forall s_{1} \neq s_{2} \in S: r_{1} \neq r_{2} \\
\implies \abs{\Gamma(S)} \geq \abs{S} \\
\\
\boxed{ \impliedby } \text{ Let } \forall S \subseteq L: \abs{S} \leq \abs{\Gamma(S)} \\
\text{Proof is by induction on } n \text{ size of } L \\
\text{Base case. } n = 1 \\
\text{Trivially, } \abs{\Gamma(L)} \geq \abs{L} = 1 \implies \text{There exists a single edge from } L \text{ to } R \\
\text{Inductive step. Let } \forall G \text{ bipartite}: \abs{L} = \abs{R} \leq n \text{ and } \forall S \subseteq L: \abs{S} \leq \abs{\Gamma(S)} \\
\implies G \text{ has a perfect matching} \\
\text{Let } G = (V = L \cup R, E) \text{ be a bipartite graph with } \abs{L} = \abs{R} = n+1 \\
\text{Let } \forall S \subseteq L: \abs{S} \leq \abs{\Gamma(S)} \\
\text{Clearly, } n + 1 = \abs{L} \leq \abs{\Gamma(L)} \leq \abs{R} = n + 1 \implies \abs{L} = \abs{\Gamma(L)} \\
\text{Case 1. } \forall \emptyset \neq S \subset L: \abs{S} < \abs{\Gamma(S)} \\
\text{Let } \emptyset \neq S \subset L \\
\abs{S} \leq \abs{\Gamma(S)} \implies \exists v \in \Gamma(S) \subseteq R \\
\text{Let } u \in S, v \in \Gamma(S) \\
\text{Let } G' = (V \setminus \Set{ u, v } = L' \cup R', E') \\
\forall S' \subseteq L': S' \subset L \implies \abs{S'} < \abs{\Gamma_{G}(S')} \leq \abs{\Gamma_{G}(S')} - 1 \\
\abs{\Gamma_{G'}(S')} = \abs{\Gamma_{G}(S') \setminus \Set{ u }} \geq \abs{\Gamma_{G}(S')} - 1 \\
\abs{S'} \leq \abs{\Gamma_{G}(S')} - 1 \leq \abs{\Gamma_{G'}(S')} \\
\implies \text{By inductive hypothesis } G' \text{ has a perfect matching } M' \\
\implies M = M' \cup \Set{ \Set{ u, v } } \text{ is a perfect matching in } G \\
\\
\text{Case 2. } \exists \emptyset \neq S \subset L: \abs{S} = \abs{\Gamma(S)} \\
\text{Let } G_{1} = G[S \cup \Gamma(S)], G_{2} = G[V \setminus (S \cup \Gamma(S))] \\
G_{1}, G_{2} \text{ are bipartite} \\
L_{1} = S, R_{1} = \Gamma(S) \implies \abs{L_{1}} = \abs{R_{1}} \leq n \\
L_{2} = L \setminus S, R_{2} = R \setminus \Gamma(S) \implies \abs{L_{2}} = \abs{R_{2}} \leq n \\
\\
\forall S_{1} \subseteq L_{1}: S_{1} \subseteq S \implies \Gamma_{G}(S_{1}) \subseteq \Gamma_{G}(S) \implies \Gamma_{G_{1}}(S_{1}) = \Gamma_{G}(S_{1}) \\
\implies \abs{\Gamma_{G_{1}}(S_{1})} = \abs{\Gamma_{G}(S_{1})} \geq \abs{S_{1}} \\
\implies \text{By inductive hypothesis } G_{1} \text{ has a perfect matching } M_{1} \\
\\
\forall S_{2} \subseteq L_{2}: \Gamma_{G_{2}}(S_{2}) \subseteq R \setminus \Gamma(S) \implies \Gamma_{G_{2}}(S_{2})  = \Gamma_{G}(S_{2}) \setminus \Gamma_{G}(S) \\
\Gamma_{G}(S_{2} \cup S) = \Gamma_{G}(S_{2}) \cup \Gamma_{G}(S) \\
\implies \Gamma_{G_{2}}(S_{2}) = \Gamma_{G}(S_{2} \cup S) \setminus \Gamma_{G}(S) \\
\implies \abs{\Gamma_{G_{2}}(S_{2})} = \abs{\Gamma_{G}(S_{2} \cup S) \setminus \Gamma_{G}(S)} = \\
= \abs{\Gamma_{G}(S_{2} \cup S)} - \abs{\Gamma_{G}(S)} \geq \abs{S_{2} \cup S} - \abs{S} = \abs{S_{2}} \\
\implies G_{2} \text{ has a perfect matching } M_{2} \\
\implies G \text{ has a perfect matching } M_{1} \cup M_{2} \\
\\
\text{Core idea:} \\
\text{Proof is by induction on size of a half} \\
\text{If there are no tight subsets } S \text{ then delete one pair of vertices} \\
\text{If there is, then take two disjoint induced subgraphs} \\
\text{and prove that they have perfect matchings} \\
}
$$
## Konig, Egervary
$$
\displaylines{
\text{Let } G = (V = L \cup R, E) \text{ be a bipartite graph} \\
\text{Then } MM(G) = VC(G) \\
\\
\text{Proof:} \\
\text{Let } M \text{ be the maximum matching} \\
\text{Let } A \text{ be the minimum vertex cover} \\
\forall \Set{ u, v } \in M: u \in A \text{ or } v \in A \\
\implies \abs{A} \geq \abs{M} \implies MM(G) \leq VC(G) \\
\text{Let us now prove that } MM(G) \geq VC(G) \\
\text{Let } L_{A} = L \cap A, R_{A} = R \cap A \\
\abs{A} = \abs{L_{A}} + \abs{R_{A}} \\
\\
\text{Let } H_{L} = G[L_{A} \cup (R \setminus R_{A})], H_{R} = G[R_{A} \cup (L \setminus L_{A})] \\
\\
\text{Consider } H_{L} (\text{symmetrically } H_{R}) \\
\text{Let by contradiction } \exists S \subseteq L_{A}: \abs{\Gamma_{H_{L}}(S)} < \abs{S} \\
\text{meaning } H_{L} \text{ does not fulfill Hall's condition} \\
\\
\text{Let us build } A' \text{ a vertex cover smaller than } A \\
\text{Let } A' = (A \setminus S) \cup \Gamma_{H_{L}}(S) \\
\text{All edges in } H_{R} \text{ are covered by } R_{A} \\
\text{All edges incident to } L_{A} \setminus S \text{ are covered by } L_{A} \setminus S \\
\text{All other edges in } H_{L} \text{ are incident to } S \text{ and so to } \Gamma_{H_{L}}(S) \text{ and are covered by } \Gamma_{H_{L}}(S) \\
\text{All edges not in } H_{L} \cup H_{R} \text{ are between } L_{A} \text{ and } R_{A} \text{ and are covered by } R_{A} \\ 
\implies A' \text{ is a vertex cover of } G \\
\abs{A'} = \abs{A} - \abs{S} + \abs{\Gamma_{H_{L}}(S)} < \abs{A} - \text{Contradiction!} \\
\implies H_{L} \text{ fulfills Hall's condition and so does } H_{R} \\
\implies \exists M_{L}, M_{R} \text{ matchings in } H_{L}, H_{R} \text{ saturating all vertices of } L_{A}, R_{A} \\
\implies MM(G) \geq \abs{M_{L} \cup M_{R}} = \abs{M_{L}} + \abs{M_{R}} = \abs{L_{A}} + \abs{R_{A}} = \abs{A} = VC(G) \\
\implies MM(G) \geq VC(G) \\
\\
\text{Core idea:} \\
\text{Take minimum vertex cover $A$, split } G \text{ into four quadrants} \\
\text{and prove that there exists a matching saturating both (left, right) halves of } A \\
}
$$
## Euler's formula
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a connected planar graph} \\
\text{Then } n + f - m = 2 \\
\abs{V} = n \\
\abs{E} = m \\
\abs{F} = f \\
\\
\text{Proof:} \\
\text{Proof is by induction on } m \text{ number of edges} \\
\text{Let } n \\
\text{Base case. } m = n - 1 \\
G \text{ is a tree} \implies f = 1 \implies n + f - m = n+1-n+1 = 2 \\
\text{Inductive step. Let } \forall G \text{ connected planar graph with } n \text{ vertices and } m \text{ edges}: \\
n + f - m = 2 \\
\text{Let } G \text{ be a connected planar graph with } n \text{ vertices and } m + 1 \text{ edges} \\
m + 1 \geq n \implies G \text{ has a cycle } C \\
\text{Let } e \in C \\
G' = G \setminus \Set{ e } \text{ is then a planar graph with } n \text{ vertices and } m \text{ edges} \\
\implies n + f' - m = 2 \\
C \text{ is not in } G' \implies \abs{F'} = \abs{F} - 1 \\
n + f - (m + 1) = n + (f' + 1) - (m + 1) = n + f' - m = 2 \\
\\
\text{Core idea:} \\
\text{Proof by induction on } m \text{ number of edges} \\
}
$$
## Brook's (main case)
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a connected graph} \\
\text{Let } \Delta(G) = k \geq 3 \\
\text{Then } G \text{ is } k\text{-colorable unless } G = K_{n} \\
\\
\text{Proof:} \\
\text{We will use the following procedure:} \\
\text{Suppose } G \text{ is partially colored in } k \text{ colors} \\
\text{Let } P = (v_{0}, \dots, v_{j}) \text{ be an uncolored path in } G \\
\text{We can then color vertices along } P \text{ sequentially,} \\
\text{as the neighbor $v_{i+1}$ of } v_{i} \text{ is not yet colored} \\
\text{We will call it a coloring procedure PathColor}(v_{0}, \dots, v_{j-1}; v_{j}) \\
\text{That colors } v_{0}, \dots, v_{j-1} \text{ and leaves } v_{j} \text{ uncolored} \\
\\
\text{Let } k \\
\text{Proof is by induction on } n \\
\text{Base case. } n \leq k + 1 \\
G \text{ is not a clique} \implies \exists u, v \in V: \Set{ u, v } \not\in E \\
\implies \text{We can color } u, v \text{ differently and everythng else with a unique color,} \\
k \text{ colors in total} \\
\\
\text{Inductive step. Let } \forall G: G \text{ has } n \text{ vertices and } \Delta(G) = k: G \text{ is } k\text{-colorable} \\
\text{Let } G = (V, E) \text{ be a graph on } n + 1 \text{ vertices} \\
\text{Let } \delta(G) < k \\
\implies \exists v \in V: deg(v) < k \\
\text{Let } G' = G \setminus \Set{ v } \\
G' \text{ is not a $(k+1)$-clique} \implies G' \text{ can be colored in } k \text{ colors} \\
\implies v \text{ will have an avialable color and we're done} \\
\text{Let } \delta(G) = k \\
\implies G \text{ is } k\text{-regular} \\
\\
\text{Let } v_{1} \in G \\
G \text{ does not contain a } (k+1)\text{-clique} \implies \exists v_{0}, v_{2} \in \Gamma(v_{1}): \Set{ v_{0}, v_{2} } \not\in E \\
\text{Let } P = (v_{0}, v_{1}, v_{2}, \dots, v_{r}) \text{ be a maximal simple path starting with } v_{0}, v_{1}, v_{2} \\
\text{Note that } \Gamma(v_{r}) \subseteq P \\
\\
\text{Case 1. } r = n - 1 \\
\implies P \text{ contains all vertices of } G \\
\text{Let } v_{j} \in \Gamma(v_{1}) \setminus \Set{ v_{0}, v_{2} } \\
\text{Let } v_{0}, v_{2} \text{ have the same color} \\
\text{Apply PathColor}(v_{3}, v_{4}, \dots, v_{j-1}; v_{j}) \\
\text{Apply PathColor}(v_{n}, v_{n-1}, v_{j}; v_{1}) \\
\text{Finally, color } v_{1} \text{ as it has two neighbors of the same color} \\
G \text{ is now colored in } k \text{ colors} \\
\\
\text{Case 2. } r < n - 1 \\
\text{Let } v_{j} \in \Gamma(v_{r}): j \text{ is minimal} \\
C = (v_{j}, v_{j+1}, \dots, v_{r}) \text{ is a cycle in } G \\
\text{Let } G' = G \setminus C \\
\text{By inductive hypothesis, } G' \text{ can be colored in } k \text{ colors} \\
G \text{ is connected} \implies \exists v_{q} \in C, u \in G': \Set{ v_{q}, u } \in E_{G'} \\
\text{Let } v_{q} \in C, u \in G': \Set{ v_{q}, u } \in E_{G'}: q \text{ is minimal} \\
\Gamma(v_{r}) \subseteq C \implies q < r \\
\text{Let } v_{q+1}, u \text{ have the same color} \\
\text{Apply PathColor}(v_{q+2}, \dots, v_{r}, v_{j}, \dots, v_{q-1}; v_{q}) \\
\text{Finally, color } v_{q} \text{ as it has two neighbors of the same color} \\
G \text{ is now colored in } k \text{ colors} \\
\\
\text{Core idea:} \\
\text{Using greedy path coloring procedure PathColor} \\
\text{Proof is by induction on } n \text{ number of vertices} \\
\text{Prove for a graph that is not } k \text{-regular } \\
\text{For a } k\text{-regular graph take the longest simple path} \\
\text{and analyze its endpoint } v_{r} \\
}
$$
## 5-color theorem
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a planar graph} \\
\text{Then } G \text{ is 5-colorable} \\
\\
\text{Proof:} \\
\text{Proof can be repeated for each connected component,} \\
\text{so we will assume } G \text{ to be connected} \\
\\
\text{Proof is by induction on } n \text{ number of vertices} \\
\text{Base case. } n \leq 5 \\
G \text{ is trivially } 5\text{-colorable} \\
\text{Inductive step. Let } \forall G: \text{planar graph on } n \text{ vertices be 5-colorable} \\
\text{Let } G = (V, E) \text{ be a planar graph on } n + 1 \text{ vertices} \\
\text{Let } v \in V: deg(v) = \delta(G) \\
\text{Note that } \delta(G) \leq 5 \\
\text{otherwise } 2m = \sum_{v \in V} deg(v) \geq 5n \\
\text{Upper bound on the the number of edges } m \leq 3n - 6 \text{ is not fulfilled} \\
\text{Let } G' = G \setminus \Set{ v } \\
G' \text{ is a planar graph with } n \text{ vertices} \\
\text{By inductive hypothesis } G' \text{ is 5-colorable by } \chi: V \setminus \Set{ v } \to [5] \\
deg(v) \leq 4 \implies v \text{ will have an available color and we can extend } \chi \\
\text{Let } deg(v) = 5 \\
\text{If two neighbors of } v \text{ have the same color, we can again extend } \chi \\
\text{Let all 5 neighbors of } v \text{ have different colors} \\
\text{Let } a,b,c,d,e \in V \text{ be the neighbors of } v \text{ ordered in a counter-clockwise order} \\
\text{with relation to respective edges in the planar embedding of } G \\
\text{Let } \chi(a) = 1, \chi(b) = 2, \chi(c) = 3, \chi(d) = 4, \chi(e) = 5 \qquad WLOG \\
\text{Let } V_{1,3} = \chi^{-1}[\Set{ 1, 3 }] \\
\text{Consider } G'[V_{1,3}] \\
\text{Let } C_{a}, C_{b} \text{ be the connected components of } a, c \text{ respectively} \\
C_{a} \neq C_{b} \implies \exists \chi'(x) = \begin{cases}
\chi(x) & x \not\in C_{c} \\
3 & x \in C_{c} \text{ and } \chi(x) = 1 \\
1 & x \in C_{c} \text{ and } \chi(x) = 3 \\
\end{cases} \\
\chi' \text{ is then a proper coloring of } G' \text{ and we can extend } \chi(v) = 3 \\
\text{Let } C_{a} = C_{c} \\
\implies \exists P_{a,c} = (a, \dots, c) \text{ an alternating path with vertices of colors 1, 3} \\
\text{Similarly to } G'[V_{1,3}] \text{ consider } G'[V_{2,4}] \text{ and } C_{b}, C_{d} \\
\text{Let } C_{b} = C_{d} \\
\implies \exists P_{b,d} = (b, \dots, d) \text{ an alternating path with vertices of colors 2, 4} \\
P_{a,c} \text{ and } P_{b,d} \text{ are disjoint} \\
b \text{ is encircled by } v \circ P_{a,c} \circ v \text{ while } d \text{ is outside this circle} - \text{Contradiction!} \\
\implies C_{b} \neq C_{d} \implies G \text{ is 5-colorable} \\
\\
\text{Core idea:} \\
\text{Proof is by induction on } n \\
\text{Consider all 5 neighbors of some } v, \text{ order them counter-clockise} \\
\text{Prove that there are two paths, 1-to-3 and 2-to-4 that must cross each other} \\
\text{Arrive to a contradiction, apply color-inverse to the second path}
}
$$
## Konig
$$
\displaylines{
\text{Let } G = (V = L \cup R, E) \text{ be a bipartite graph} \\
\text{Then } \chi'(G) = \Delta(G) \\
\\
\text{Proof:} \\
\text{By Vizing's theorem, } \chi'(G) \geq \Delta(G) \\
\text{We will prove } \chi'(G) \leq \Delta(G) \\
\text{Proof is by induction on } m \text{ number of edges} \\
\text{Base case. } m = 1 \\
\text{Trivially, } \chi'(G) \leq \Delta(G) = 1 \\
\text{Inductive step. Let } \forall G \text{ a bipartite graph with } m \text{ edges}: \chi'(G) = \Delta(G) \\
\text{Let } G = (V, E) \text{ be a bipartite graph with } m + 1 \text{ edges} \\
\text{Let } e = \Set{ u, v } \in E \\
\text{Let } G' = G \setminus \Set{ e } \\
G' \text{ is bipartite} \implies \chi'(G') \leq \Delta(G') \leq \Delta(G) \\
\text{Let } \chi': E \setminus \Set{ e } \to [\Delta(G)] \\
deg_{G'}(v) \leq \Delta(G) - 1 \implies \exists i \in [\Delta(G)]: \forall e' \in E_{v} \setminus \Set{ e }: \chi'(e') \neq i \\
deg_{G'}(u) \leq \Delta(G) - 1 \implies \exists j \in [\Delta(G)]: \forall e' \in E_{u} \setminus \Set{ e }: \chi'(e') \neq j \\
\text{If } i = j \text{ then } \chi'(e) = i \text{ and we're done} \\
\text{Let } i \neq j \\
\text{Let } G_{i,j} = (V, E_{i,j}) \\
E_{i,j} = \Set{ e \in E \mid \chi'(e) \in \Set{ i, j } } \\
\Delta(G_{i,j}) = 2 \\
\text{Let } C_{v} \text{ be a connected componenet in } G_{i,j} \\
\text{Let by contradiction } u \in C_{v} \\
\implies \exists P = (v_{0} = v, \dots, v_{k} = u) \in C_{v} \\
P \text{ must be a color-alternating path} \\
\begin{eqsys}
\chi'(v_{0}, v_{1}) = j \\
\chi'(v_{k-1}, v_{k}) = i \\
\end{eqsys} \implies \abs{P} \text{ is even} \\
\implies P \circ e \text{ is an odd cycle in } G - \text{Contradiction!} \\
\implies u \not\in C_{v} \\
\text{Let } \psi: E \setminus \Set{ e } \to [\Delta(G)]: \psi(e') = \begin{cases}
i & e' \in C_{v} \text{ and } \chi'(e') = j \\
j & e' \in C_{v} \text{ and } \chi'(e') = i \\
\chi'(e') & e' \not\in C_{v} \\
\end{cases} \\
\implies \forall e' \in (E_{v} \cup E_{u}) \setminus \Set{ e }: \psi(e') \neq i \\
\text{Let } \phi(e) = i \text{ and we're done} \\
\\
\text{Core idea:} \\
\text{Proof is by induction on } m \\
\text{Take an edge, look at its endpoints, get one unusedcolor from each} \\
\text{Take a subgraph with these colors only, prove that there is no path from } v \text{ to } u \\
\text{Flip the colors of } C_{v} \\
}
$$
## Ramsey number, Erdos, Szekeres
$$
\displaylines{
\forall s, t \geq 1: R(s, t) \leq \binom{s+t-2}{s-1} \\
\\
\text{Proof:} \\
\text{Proof is by induction on } s + t = n \\
\text{Base case. } n \leq 3 \\
\implies s = 1 \text{ or } t = 1 \\
\implies R(s, t) = 1 \leq \binom{s+t-2}{s-1} \\
\text{Inductive step. Let } \forall s, t \geq 1: s + t \leq n: R(s, t) \leq \binom{s+t-2}{s-1} \\
\text{Let } s, t \geq 2 \\
R(s, t) \underbrace{ \leq }_{ \text{Lemma} } R(s, t-1) + R(s-1, t) \leq \binom{s+t-3}{s-1} + \binom{s+t-3}{s-2} = \binom{s+t-2}{s-1} \\
\\
\text{Let us now prove } \forall s, t \geq 2: R(s, t) \leq R(s, t-1) + R(s-1, t) \\
\text{Let } R = R(s, t-1) + R(s-1, t) \\
\text{Let there be some red-blue coloring of } K_{R} \\
\text{Let } v \in V(K_{R}) \\
v \text{ has at least } R(s, t-1) \text{ red or } R(s-1, t) \text{ blue edges incident to it} \\
\text{Otherwise } deg(v) \leq R(s, t-1) - 1 + R(s-1, t) - 1 = R - 2 < R - 1 \text{ Contradiction!} \\
\text{Let } v \text{ is incident to } R(s-1, t) \text{ red edges (symmetrically for blue)} \\
\text{Let } V_{r} = \Set{ u \in V(K_{R}) \mid \Set{ u, v } \in E(K_{R}) \text{ is red} } \\
\abs{V_{red}} \geq R(s-1, t) \implies G[V_{red}] \text{ contains a red } K_{s-1} \text{ or a blue } K_{t} \\
\text{In both cases, } G \text{ contains either a red } K_{s} = G[V_{r} \cup \Set{ v }] \text{ or a blue } K_{t} \\
\\
\implies R(s, t) \leq R = R(s, t-1) + R(s-1, t) \\
\\
\text{Core idea:} \\
\text{Binomial decomposition and the lemma based on it} \\
}
$$
## Turan
$$
\displaylines{
\text{Let } r \geq 2 \\
\text{Let } G = (V, E) \text{ be a graph on } n \text{ vertices that does not contain } K_{r} \text{ as a subgraph} \\
\text{Then } \abs{E} \leq \frac{n^{2}}{2} \cdot \left( 1 - \frac{1}{r-1} \right) \\
\\
\text{Proof:} \\
\text{Proof is by induction on } n \\
\text{Base case. } n \leq r - 1 \\
\abs{E} \leq \binom{n}{2} = \frac{n(n-1)}{2} = \frac{n^{2}}{2} - \frac{n}{2} = \frac{n^{2}}{2}\left( 1 - \frac{1}{n} \right) \leq \frac{n^{2}}{2} \cdot \left( 1 - \frac{1}{r-1} \right) \\
\\
\text{Inductive step. Let } \forall G = (V, E) \text{ graph on } n - 1 \text{ vertices with no } K_{r} \text{ as a subgraph} \\
\abs{E} \leq \frac{n^{2}}{2} \cdot \left( 1 - \frac{1}{r-1} \right) \\
\\
\text{Let } n \geq r \\
\text{Let } G = (V, E) \text{ be a graph on } n \text{ vertices} \\
\text{with no } K_{r} \text{ as a subgraph} \\
\text{Let } G \text{ have a maximal number of edges} \\
\implies G \text{ contains } K_{r-1} \text{ as a subgraph, otherwise we can add an edge and have no } K_{r} \\
\text{Let } A \subset V: G[A] = K_{r-1} \\
\text{Let } B = V \setminus A \\
\text{Let } E_{A} = \Set{ \Set{ u, v } \in E \mid u, v \in A } \\
\text{Let } E_{B} = \Set{ \Set{ u, v } \in E \mid u, v \in B } \\
\text{Let } E_{AB} = \Set{ \Set{ u, v } \in E \mid u \in A, v \in B } \\
\implies E = E_{A} \cup E_{B} \cup E_{AB} \\
\abs{E_{A}} = \binom{r-1}{2} \\
G[B] \text{ contains no } K_{r} \text{ and has } n - (r-1) < n \text{ vertices} \\
\implies \text{By inductive hypothesis } \abs{E_{B}} \leq \frac{(n-(r-1))^{2}}{2} \cdot \left( 1 - \frac{1}{r-1} \right) \\
\text{Each vertex } v \in B \text{ can have at most } r-2 \text{ neighbors in } A, \text{ otherwise } G[A \cup \Set{ v }] = K_{r} \\
\implies \abs{E_{A,B}} \leq \abs{B} \cdot (r-2) = (n-(r-1)) \cdot (r-2) \\
\implies \abs{E} = \abs{E_{A}} + \abs{E_{B}} + \abs{E_{AB}} \leq \\
\leq \binom{r-1}{2} + \frac{(n-(r-1))^{2}}{2} \cdot \left( 1 - \frac{1}{r-1} \right) + (n - (r-1)) \cdot (r-2) = \\
= \frac{n^{2}}{2} \cdot \left( 1 - \frac{1}{r-1} \right) \\
\\
\text{Core idea:} \\
\text{Proof is by induction on } n \\
\text{Take maximal number of edges, take } G[A] = K_{r-1} \\
\text{And show three disjoint sets of edges} - E_{A}, E_{B = V \setminus A}, E_{AB} \\
}
$$
