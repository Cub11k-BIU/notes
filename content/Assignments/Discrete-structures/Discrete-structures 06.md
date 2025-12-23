---
{"publish":true,"created":"11/12/25, 12:44","modified":"2025-12-22T15:03:59.561+02:00","tags":["Academia","Assignment","Discrete-structures"],"cssclasses":""}
---

## 1
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a bipartite } k\text{-regular graph} \\
\text{Prove: } G \text{ contains } k \text{ disjoint perfect matchings} \\
\\
\text{Proof:} \\
\text{Proof is by induction on } k \\
\text{Base case. } k \leq 0 \implies 0 \text{ perfect matchings always exist} \\
k = 1 \implies \text{Each vertex has exactly one neighbor} \implies M = E \text{ is a perfect matching} \\
\text{Inductive step. Let } \forall G \text{ bipartite } k\text{-regular graph}: G \text{ has } k \text{ disjoint perfect matchings} \\
\text{Let } G = (L \cup R, E) \text{ be a } (k+1)\text{-regular bipartite graph} \\
\sum_{v \in L} deg(v) = \abs{L} \cdot k = \abs{E} = \sum_{v \in R} deg(v) = \abs{R} \cdot k \\
\implies \abs{L} = \abs{R} \\
\text{Let } S \subseteq L \\
\text{Let } E_{A} = \Set{ \Set{ v, u } \mid v \in A } \\
\abs{E_{S}} = \abs{S} \cdot k \\
\abs{E_{\Gamma(S)}} = \abs{\Gamma(S)} \cdot k \\
E_{S} \subseteq E_{\Gamma(S)} \implies \abs{S} \cdot k \leq \abs{\Gamma(S)} \cdot k \implies \abs{S} \leq \abs{\Gamma(S)} \\
\implies \text{By Hall's theorem, there exists a perfect matching $M$ in } G \\
\text{Let } G' = (L \cup R, E \setminus M) \\
G' \text{ is clearly } k\text{-regular as } M \text{ contains exactly one edge incident to each vertex} \\
\text{By inductive hypothesis } G' \text{ contains } k \text{ disjoint perfect matchings} \\
\text{None of these matching intersect with } M \\
\implies G \text{ contains } k+1 \text{ disjoint perfect matchings} \\
\implies \boxed{ \forall k: G \text{ contains } k \text{ disjoint perfect matchings} } \\
}
$$
## 2
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a graph} \\
\text{Let } M \text{ be a matching in } G, M^{*} \text{ be a maximum matching in } G \\
\text{Let } \abs{M^{*}} = k \\
\text{Prove: } \abs{M} < k - \sqrt{ k } \implies \exists P \ M\text{-expanding path}: \abs{P} \leq 2\sqrt{ k } - 1 \\
\\
\text{Proof:} \\
\text{As proved in practice sessions, } G \text{ contains } \abs{M^{*}} - \abs{M} \ M\text{-expanding paths} \\
\abs{M^{*}} - \abs{M} = k - \abs{M} > \sqrt{ k } \\
\text{Let } G' = (V, M^{*} \triangle M) \\
G' \text{ contains } \abs{M^{*}} - \abs{M} \text{ connected components which are } M\text{-expanding paths} \\
(\text{part of the proof from practice-sessions}) \\
\implies G' \text{ contains more than } \sqrt{ k } \text{ such connected components} \\
\text{Let by contradiction } \forall P_{i} \ M\text{-expanding path}: \abs{E_{P_{i}}} > 2\sqrt{ k } - 1 \\
\text{Then, } \abs{M^{*} \triangle M} \geq \sum_{i} \abs{E_{P_{i}}} > \sqrt{ k }(2\sqrt{ k }-1) = 2k-\sqrt{ k } \\
\abs{M^{*} \triangle M} \leq \abs{M^{*}} + \abs{M} < 2k - \sqrt{ k } - \text{Contradiction!} \\
\implies \exists P_{i} \ M\text{-expanding path}: \abs{E_{P_{i}}} \leq 2\sqrt{ k }-1 \\
}
$$
## 3
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a graph} \\
\text{Let } M \text{ be a non-maximum matching in } G \\
\text{Let } P \text{ be the shortest } M\text{-expanding path in } G \\
\text{Let } P' \text{ be an } M \triangle E(P)\text{-expanding path in } G \\
}
$$
### 3a
$$
\displaylines{
\text{Let } N = M \triangle E(P) \triangle E(P') \\
\text{Let } G' = (V, N \triangle M) \\
\text{Prove: there exist at least 2 vertex disjoint } M \text{-expanding paths in } G' \\
\\
\text{Proof:} \\
N \text{ is clearly a matching in } G \\
\abs{N} = \abs{M \triangle E(P) \triangle E(P')} = \abs{M} + 2 \\
\implies \abs{N \triangle M} \geq \abs{N \setminus M} \geq \abs{N} - \abs{M} = 2 \\
\\
\text{Clearly, } \Delta(G') \leq 2 \\
\text{because each vertex is incident to at most one edge in each of two matchings} \\
\implies \text{Each connected component is either a simple path or a simple cycle in } G' \\
\implies \text{Each connected component is an $M$-alternating path} \\
\text{Let } \mathcal{K} \text{ be a connected component in } G' \\
\text{Case 1. } \abs{\mathcal{K}} = 2k \\
\implies \mathcal{K} \text{ is an even cycle/path} \implies \abs{M_{\mathcal{K}}} = \abs{N_{\mathcal{K}}} \implies \mathcal{K} \text{ is not an $M$-expanding path} \\
\text{Case 2. } \abs{\mathcal{K}} = 2k+1, \mathcal{K} \text{ is an $N$-expanding path} \\
\implies \abs{M_{\mathcal{K}}} = \abs{N_{\mathcal{K}}} + 1 \text{ and } \mathcal{K} \text{ is not an } M \text{-expanding path} \\
\text{Case 3. } \abs{\mathcal{K}} = 2k+1, \mathcal{K} \text{ is an $M$-expanding path} \\
\implies \abs{M_{\mathcal{K}}} = \abs{N_{\mathcal{K}}} - 1 \\
\begin{eqsys}
\abs{M_{G'}} = \sum_{\mathcal{K}} \abs{M_{\mathcal{K}}} \\
\abs{N_{G'}} = \sum_{\mathcal{K}} \abs{N_{\mathcal{K}}} \\
\end{eqsys} \implies \abs{N_{G'}} - \abs{M_{G'}} = \sum_{\mathcal{K}} \lrp{\abs{N_{\mathcal{K}}} - \abs{M_{\mathcal{K}}}} = k_{M} - k_{N} \\
\text{Where } k \text{ denotes the number of expanding paths} \\
\abs{N_{G'}} = \abs{N} - \abs{N \cap M} \\
\abs{M_{G'}} = \abs{M} - \abs{N \cap M} \\
\implies \abs{N} - \abs{M} = k_{M} - k_{N} = 2 \\
\implies k_{M} = 2 + k_{N} \geq 2 \\
\text{Clearly, all connected components $\mathcal{K}$ are vertex disjoint and we're done} \\
}
$$
### 3b
$$
\displaylines{
\text{Conclude: } \abs{E(P')} \geq \abs{E(P)} + 2\abs{E(P) \cap E(P')} \\
\\
\text{Solution:} \\
\text{Let } P_{1}, P_{2} \text{ be two } M \text{-expanding paths in } G' \text{ from 3a} \\
\implies P_{1}, P_{2} \text{ are } M\text{-expanding paths in } G \\
P \text{ is the shortest such path} \implies \abs{E(P_{1})} \geq \abs{E(P)}, \abs{E(P_{2})} \geq \abs{E(P)} \\
N \triangle M = M \triangle E(P) \triangle E(P') \triangle M = E(P) \triangle E(P') \\
\implies \abs{E(P) \triangle E(P')} = \abs{N \triangle M} \geq \abs{E(P_{1}) \cup E(P_{2})} = \abs{E(P_{1})} + \abs{E(P_{2})} \geq 2\abs{E(P)} \\
\abs{E(P) \triangle E(P')} = \abs{(E(P) \cup E(P')) \setminus (E(P) \cap E(P'))} = \\
= \abs{E(P)} + \abs{E(P')} - 2\abs{E(P) \cap E(P')} \\
\implies \abs{E(P)} + \abs{E(P')} - 2\abs{E(P) \cap E(P')} \geq 2\abs{E(P)} \\
\implies \boxed{ \abs{E(P')} \geq \abs{E(P)} + 2\abs{E(P) \cap E(P')} } \\
}
$$
## 4
$$
\displaylines{
\text{Let } T = (V, E) \text{ be a tree} \\
\text{Prove: } T \text{ has a perfect matching} \iff \forall v \in V: o(T \setminus \Set{ v }) = 1 \\
\\
\text{Proof:} \\
\boxed{ \implies } \text{ Let } T \text{ has a perfect matching} \\
\implies \abs{V} \text{ is even} \\
\implies \text{By Tutte's theorem } \forall S \subseteq V: o(T \setminus S) \leq \abs{S} \\
\implies \forall v \in V: o(T \setminus \Set{ v }) \leq \abs{\Set{ v }} = 1 \\
\text{Let } v \in V: o(T \setminus \Set{ v }) = 0 \\
\implies \text{All connected components in } T \setminus \Set{ v } \text{ are of even size} \\
\implies \abs{V \setminus \Set{ v }} = 2k \implies \abs{V} = 2k + 1 - \text{Contradiction!} \\
\implies \boxed{ \forall v \in V: o(T \setminus \Set{ v }) = 1 } \\
\\
\boxed{ \impliedby } \\
\text{Proof is by induction on } n = \abs{V} \\
\text{Base case. } n = 2 \\
\text{The only tree is } K_{2}, \text{ it fulfills the condition} \text{ and it has a perfect matching} \\
\text{Inductive step. Let } \forall T': \abs{V'} < n; \forall v \in V': o(T' \setminus \Set{ v }) = 1 \implies T' \text{ has a perfect matching} \\
\text{Let } T = (V, E), \abs{V} = n > 2 \text{ such that } \forall v \in V: o(T \setminus \Set{ v }) = 1 \\
\text{Let } n \text{ be odd} \\
\implies \forall v \in V: \abs{V \setminus \Set{ v }} \text{ is even} \implies o(T \setminus \Set{ v }) \text{ is even} - \text{Contradiction!} \\
\implies n \text{ is even} \\
\text{Let } v, u \in V: deg(v) = 1, u \in \Gamma(v) \\
\text{Let } w \neq v \in \Gamma(u): deg(w) = 1 \\
\implies o(T \setminus \Set{ u }) \geq 2 - \text{Contradiction!} \\
\implies v \text{ is the only leaf in } \Gamma(u) \\
\implies o(T \setminus \Set{ u }) = 1 \text{ and the odd sized connected component is } \Set{ v } \\
\text{Let } G = T \setminus \Set{ v, u } \\
G \text{ is clearly a forest} \\
\forall \mathcal{K}_{i} \text{ connected component in } G: \abs{\mathcal{K}_{i}} \text{ is even } \\
\text{Let } x \in V(G) \implies \exists i: x \in V(\mathcal{K}_{i}) \\
x \not\in \Set{ u, v } \implies \Set{ u, v } \subseteq \mathcal{K} \text{ some connected component in } T \setminus \Set{ x } \\
\text{Removal of two vertices from a connected component doesn't change its parity} \\
\implies o(G \setminus \Set{ x }) = o(T \setminus \Set{ x }) = 1 \\
\implies \forall j: \forall x \in V(\mathcal{K}_{j}): o(\mathcal{K}_{j} \setminus \Set{ x }) = 1 \\
\implies \forall j : \abs{\mathcal{K}_{j}} \leq n - 2 \implies \text{By inductive hypothesis } \mathcal{K}_{j} \text{ has a perfect matching } M_{j} \\
\implies \boxed{ M = \bigcup_{j} M_{j} \cup \Set{ u, v } \text{ is a perfect matching in } T } \\
}
$$
