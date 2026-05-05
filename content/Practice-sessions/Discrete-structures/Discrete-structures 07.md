---
{"publish":true,"created":"07/12/25, 15:05","modified":"2026-03-24T14:59:04.519+02:00","tags":["Academia","#Practice","Discrete-structures"],"cssclasses":""}
---

### Maximum independent set size #definition 
$$
\displaylines{
IS(G) \text{ denotes a maximum size of an independent set in graph } G \\
}
$$
---
$$
\displaylines{
\text{Let } G \text{ be a bipartite graph with } 2n \text{ vertices} \\
\text{Let } IS(G) = n \\
\text{Prove: } G \text{ has a perfect matching} \\
\\
\text{Proof:} \\
IS(G) = n \implies \abs{L} = \abs{R} = n \\
\text{Let } S \subseteq L \\
S \cup (R \setminus \Gamma(S)) \text{ is an independent set} \\
\implies \abs{S \cup (R \setminus \Gamma(S))} \leq n \\
\implies \abs{S} + \abs{R \setminus \Gamma(S)} = \abs{S} + n - \abs{\Gamma(S)} \leq n \\
\implies \abs{S} - \abs{\Gamma(S)} \leq 0 \implies \abs{S} \leq \abs{\Gamma(S)} \\
\implies \text{By Hall's theorem } G \text{ has a perfect matching} \\
}
$$
---
### Edge cover #definition 
$$
\displaylines{
\text{An edge cover is a set $E' \subseteq E$ such that } \forall v \in V: \exists \Set{ v, u } \in E' \\
\text{Meaning a set of edges that is incident to all vertices in a graph} \\
EC(G) \text{ denotes the minimum size of an edge cover} \\
\\
\text{Clearly, } EC(G) \geq \frac{n}{2} \\
}
$$
### Gallai theorem #theorem 
$$
\displaylines{
\text{Let } G \text{ be a graph with } n \text{ vertices with no vertices without incident edges} \\
\text{Then } MM(G) + EC(G) = n \\
\\
\text{Proof:} \\
\text{Let } M \text{ be a maximum matching in } G \\
MM(G) = \abs{M} \\
\text{For each unsaturated vertex } v, \text{ choose one edge incident to it} \\
\text{Let the set of these edges be } U \\
\text{Let } E' = M \cup U \\
\abs{E'} = \abs{M} + \abs{U} \leq \abs{M} + n - 2\abs{M} = n - MM(G) \\
\implies MM(G) + EC(G) \leq n \\
\\
\text{Let } E' \text{ be a minimum edge cover, } \abs{E'} = EC(G) \\
\text{Let } G' = (V, E') \\
G' \text{ is clearly a forest, otherwise it would contradict the minimality} \\
\text{Let } k \text{ be the number of connected components in } G' \\
\implies G' \text{ has } n - k \text{ edges} \\
\text{We can choose one edge from each connected component and get } M \text{ with } k \text{ edges} \\
\implies MM(G) \geq k \implies MM(G) + EC(G) \geq n + k - k = n \\
\implies \boxed{ MM(G) + EC(G) = n } \\
}
$$
