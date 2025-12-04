---
{"publish":true,"created":"03/12/25, 17:02","modified":"2025-12-03T19:12:05.197+02:00","tags":["Academia","Assignment","Algorithms-1"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Let } G = (V, E) \text{ be an undirected graph} \\
F \subseteq E \text{ is called a dominating iff } \forall C \text{ cycle in } G: \exists e \in C: e \in F \\
}
$$
## 1a
$$
\displaylines{
\text{Show an algorithm for finding a dominating set for all cycles of the smallest size} \\
\\
\text{Solution:} \\
\text{We will assume } G \text{ to be connected} \\
\text{Note that a minimum dominating set is a complement of a spanning tree} \\
\text{Let } F = E \setminus T \\
\text{Indeed, every cycle has at least one edge not in the tree} \\ \implies \text{At least one edge from each cycle would be in } F \\
\\
\text{Let us prove that } F \text{ is miimum} \\
\text{Let by contradiction } F': \abs{F'} < \abs{F} = \abs{E} - \abs{V} + 1 \\
\implies F' \text{ lacks at least } \abs{V} \text{ edges from } E \\
\implies G' = (V, E \setminus F') \text{ has a cycle} \\
\implies \text{Exists a cycle in } G \text{ such that } F' \text{ has no edges from that cycle} - \text{Contradiction!} \\
\implies F \text{ is in fact minimum} \\
\\
\text{In order to find it, we can run DFS once to build a spanning tree, } O(\abs{V} + \abs{E}) \\
\text{and then take complement in } O(\abs{E}) \\
\implies T(G) = O(\abs{V} + 2\abs{E}) = O(\abs{V} + \abs{E}) \\
}
$$
## 1b
$$
\displaylines{
\text{Let in addition } \omega: E \to \mathbb{R} \text{ a weights function} \\
\text{Show an algorithm for finding a dominating set for all cycles of the largest weight} \\
\\
\text{Solution:} \\
\text{Clearly, a set of all nonnegative edges must be in } F \\
\text{As for negative edges, we can invert them to be positive, find the MST and invert back} \\
\text{Let } G' = (V, E \setminus P) \text{ where } P = \Set{ e \in E | \omega(e) \geq 0 } \\
\text{For each connected component in } G', \text{ find MST - } T_{C} \text{ and take its complement} \\
\implies F = P \cup \bigcup_{C \in G'} E_{C} \setminus T_{C} \\
\\
\text{The runtime is} T(G) = O\left( \abs{E} + \sum_{C \in G'} (\abs{E'_{C}} + \abs{V_{C}}\log \abs{V_{C}}) \right) = O(\abs{E} + \abs{V}\log \abs{V}) \\
}
$$
## 1c
$$
\displaylines{
\text{Let in addition } \omega: E \to \mathbb{R} \text{ a weights function} \\
\text{Show an algorithm for finding a dominating set for all cycles of the smallest weight} \\
\\
\text{Solution:} \\
\text{Let } \forall \Set{ u, v } \in E: \omega'(u, v) = -\omega(u, v) \\
\text{Solution is now identical to 1b} \\
\text{Same runtime complexity } + O(\abs{E}) \implies O(\abs{E} + \abs{V}\log \abs{V}) \\
}
$$
# 2
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a graph} \\
\text{Let } \omega: E \to \Set{ 1, 2 } \text{ be the weights function} \\
\text{Show an algorithm for finding MST of } G \\
\\
\text{Solution:} \\
\text{Sorting edges in } E \text{ can be done in } O(\abs{E}) \text{ using counting sort} \\
\text{Thus, finding an MST using Kruskal's algorithm can be done in } O(\abs{E} \cdot \alpha(\abs{V})) \\
\\
\text{Another algorithm is to store edges in a full-}O(1) \text{ data structure imitating min heap:} \\
\text{Three doubly linked lists for } V_{1}, V_{2} \text{ and } V_{\infty} \\
\text{Allmin-heap operations are done in } O(1) \\
\implies \text{Prim's algorithm will run in } O(\abs{V} + \abs{E}) \\
}
$$
# 3
$$
\displaylines{
\text{Let } G = (V, E) \text{ be an undirected connected graph} \\
\text{Let } \omega: V \to \mathbb{R} \text{ be the vertex weights function} \\
\text{Weight of a tree } T \text{ is then defined as } \omega(T) = \sum_{v \in T} \omega(v) \cdot deg_{T}(v) \\
\text{Show an algorithm for finding the MST with this weight function} \\
\\
\text{Solution:} \\
\text{Note: } \sum_{v \in V} \omega(v)deg(v) = \sum_{\Set{ u, v } \in E} \omega(u) + \omega(v) \\
\text{Let } \omega': E \to \mathbb{R}: \omega'(u, v) = \omega(u) + \omega(v) \\
\implies \forall T: \omega(T) = \sum_{v \in T} \omega(v)deg_{T}(v) = \sum_{\Set{ u, v } \in E_{T}} \omega(u) + \omega(v) = \sum_{\Set{ u, v } \in E_{T}} \omega'(u, v) = \omega'(T) \\
\text{And with this new weight function, an MST can be found using Prim/Kruskal} \\
}
$$
# 4
$$
\displaylines{
\text{Let } G =(V, E) \text{ be an undirected connected graph} \\
\text{Let } \omega: E \to \mathbb{R} \text{ be an injective weights function} \\
\text{Prove/Disprove: } G \text{ has a unique MST} \\
\\
\text{Proof:} \\
\text{Let by contradiction } T_{1} \neq T_{2} \text{ be MST's of } G \\
\text{Let } e_{1} \in E_{T_{1}} \setminus E_{T_{2}} \text{ be the lightest edge in } T_{1} \text{ and not in } T_{2} \\
\text{Such an edge must exist as all edges are of different weight} \\
\text{and at least one edge is not in } T_{1} \cap T_{2} \text{ because they're different} \\
\text{Let } G' = T_{2} \cup \Set{ e_{1} } \\
G' \text{ contains a cycle $C$ with edge } e_{1} \\
\text{Let } e_{2} \text{ be another edge in } C \text{ and not in } T_{1} \\
e_{2} \in T_{2} \setminus T_{1} \implies \omega(e_{2}) > \omega(e_{1}) \\
T = T_{2} \cup \Set{ e_{1} } \setminus \Set{ e_{2} } \text{ is an MST of smaller weight} - \text{Contradiction!} \\
\implies T_{1} = T_{2} \\
}
$$
# 5
$$
\displaylines{
\text{Let } G = (V, E) \text{ be an undirected connected weighted graph} \\
\text{Let } \exists \in V: deg(s) = 8 \\
\text{Show an algorithm finding an MST that contains exactly two of edges incident to } s \\
\text{Show an algorithm finding an MST that contains at least two of edges incident to } s \\
\\
\text{Solution:} \\
\text{For each pair of edges incident to } s, \text{ "delete" the other 6 edges} \\
\text{and find an MST using Prim/Kruskal} \\
\text{Choose the smallest out of all } \binom{8}{2} \text{ such MST's} \\
\
\text{The runtime complexity is } \binom{8}{2} \cdot O(\text{Prim/Kruskal}) = O(\text{Prim/Kruskal}) \\
\\
\text{For the "at least" problem, we will instead contract every pair of edges out of } \binom{8}{2} \\
\text{And then find an MST, complexity is still the same} \\
}
$$
