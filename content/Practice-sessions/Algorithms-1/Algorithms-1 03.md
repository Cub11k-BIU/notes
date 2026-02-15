---
{"publish":true,"created":"10/02/26, 16:08","modified":"2026-02-10T16:30:09.231+02:00","tags":["Academia","#Practice","Algorithms-1"],"cssclasses":""}
---

# MST
### Cut property #lemma
$$
\displaylines{
\text{Let } G = (V, E) \text{ be an undirected weighted graph} \\
\text{Let } S \subseteq V \\
(S, V \setminus S) \text{ is then a cut} \\
\text{Let } e = \Set{ u, v } \text{ be the lightest edge such that } u \in S, v \in V \setminus S \\
\text{Then there must exist an MST containing } e \\
}
$$
### Cycle property #lemma 
$$
\displaylines{
\text{Let } G = (V, E) \text{ be an undirected weighted graph} \\
\text{Let } C \text{ by a cycle in } G \\
\text{Let } e \text{ be the heaviest edge in } C \\
\text{Then there must exists an MST that does not contain } e \\
}
$$
### Reverse-delete algorithm
From the cycle property follows an algorithm that is different from the one learned in the lectures. We can iterate over edges of the graph and delete the heaviest edge from each cycle
$$
\displaylines{
\begin{align}
 & \text{Reverse-delete}(G = (V, E), \omega): \\
1. & \quad \text{Sort } E \text{ in descending order by } \omega \\
2. & \quad \text{for } i \in [1, \abs{E}]: \\
3. & \qquad E \leftarrow E \setminus \Set{ e_{i} } \\
4. & \qquad \text{if } G \text{ is now disconnected}: \\
5. & \qquad \quad E \leftarrow E \cup \Set{ e_{i} } \\
6. & \quad \text{Return } E \\
\end{align} \\
\text{Correctness of this algorithm follows from the fact that the heaviest edge,} \\
\text{which is the current edge, is always going to be deleted if it is part of a cycle} \\
\text{If it was part of a cycle but no longer is, a heavier edge was deleted from that cycle} \\
}
$$
### Producing different MSTs by sorting edges differently in Kruskal's algorithm #lemma 
$$
\displaylines{
\forall T = (V, E_{T}): T \text{ is an MST of } G \\
\text{There exists a sorting } \pi_{E} \text{ of edges such that Kruskal's algorithm returns } T \\
\\
\text{Proof:} \\
\text{Let } T = (V, E_{T}) \text{ be an MST of } G \\
\text{Let } \pi_{E} \text{ be a sorting of } E \text{ such that edges are sorted in ascending order by } \omega \\
\text{and among edges with the same weight, edges of } E_{T} \text{ appear first} \\
\text{Running Kruskal's algorithm on that sorting then yields exactly } T \\
}
$$
