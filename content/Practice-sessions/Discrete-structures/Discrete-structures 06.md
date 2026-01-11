---
{"publish":true,"created":"30/11/25, 15:00","modified":"2025-12-25T13:38:01.147+02:00","tags":["Academia","#Practice","Discrete-structures"],"cssclasses":""}
---

## Matchings
### Berge's theorem
$$
\displaylines{
M \text{ is a maximum matching} \iff \not\exists P \text{ an expanding path in } G \\
}
$$
#### Finding maximum matching in a bipartite graph
It is possible to find a maximum matching in a bipartite graph in linear $O(\abs{E})$ time
#### Exercise
$$
\displaylines{
\text{Let } G = (V, E) \text{ be an undirected graph} \\
\text{Let } M \text{ be a matching, } M^{*} \text{ be a maximum matching in } G \\
\text{Prove: } G \text{ contains exactly } \abs{M^{*}} - \abs{M} \ M\text{-expanding vertex-disjoint paths} \\
\\
\text{Proof:} \\
\text{Let } G' = (V, M^{*} \triangle M) \\
\text{Clearly, } \Delta(G') \leq 2 \\
\text{because each vertex is incident to at most one edge in each of two matchings} \\
\implies \text{Each connected component is either a simple path or a simple cycle in } G' \\
\text{In each connected component:} \\
\text{In even cycles and paths, } \abs{M_{G'}} = \abs{M^{*}_{G'}} \\
\text{If there are more edges in } M \text{ than in } M^{*}, \\
\text{then there exists a } M^{*}\text{-expanding path} - \text{Contradiction! There are no such components} \\
\text{If there are more edge in } M^{*} \text{ than in } M, \\
\text{then the difference is } 1, \text{ as edges must alternate} \\
\implies \abs{M^{*}} - \abs{M} = k, \text{ number of connected components with edge-difference of } 1 \\
\text{Each such connected component is clearly an } M\text{-expanding path} \\
}
$$
### Hall theorem
$$
\displaylines{
\text{Let } G \text{ be an undirected bipartite graph, } \abs{L} = \abs{R} \\
G \text{ has a perfect matching} \iff \forall S \subseteq L: \abs{\Gamma(S)} \geq \abs{S} \\
}
$$
#### Exercise
$$
\displaylines{
\text{Let there be a regular deck of cards} \\
\text{Let us divide the deck into 13 stacks of 4 cards} \\
\text{Prove that it is possible to choose one card from each stack} \\
\text{such that there are all 13 values are chosen} \\
\\
\text{Proof:} \\
\text{Let } L = \Set{ S_{i} | i \in [1, 13] } \\
\text{Let } R = [1, 13] \\
\text{And let there be an edge from } S_{i} \text{ to } x \in R \text{ when the card with value } x \text{ is present in } S_{i} \\
\text{Let } S \subseteq L \\
\sum_{s \in S} deg(S) = 4\abs{S} \\
\forall x \in R: deg(x) \leq 4 \implies \abs{\Gamma(S)} \geq \frac{4\abs{S}}{4} = \abs{S} \\
}
$$
#### Exercise
$$
\displaylines{
\text{Find a necessary and sufficient condition for a bipartite graph for the following:} \\
\text{For each vertex in } L \text{ there exist two unique neighbours in } R \\
\\
\text{Solution:} \\
1. \quad \abs{R} \geq 2\abs{L} \\
2. \quad \forall S \subseteq L: \abs{\Gamma(S)} \geq 2\abs{S} \\
\text{Let } G' = (L' \cup R, E') \\
\text{Where } L' = L \cup \Set{ v' | v \in L } \\
E' = E \cup \Set{ \Set{ v', u } | v \in L, \Set{ v, u } \in E } \\
\\
\text{Let } \forall S' \subseteq L': S = \Set{ v | v' \in S' \text{ or } v \in S' } \implies \abs{S'} \leq 2\abs{S} \\
\forall S \subseteq L: \abs{\Gamma(S)} \geq 2\abs{S} \iff \forall S' \subseteq L': \abs{\Gamma(S')} = \abs{\Gamma(S)} \geq 2\abs{S} \geq \abs{S'} \\
\text{We get Hall theorem, which is necessary and sufficient} \\
}
$$
