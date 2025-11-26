---
{"publish":true,"created":"24/11/25, 13:00","modified":"2025-11-26T12:20:25.524+02:00","tags":["Academia","#Practice","Algorithms-1"],"cssclasses":""}
---

# APSP - All Pairs Shortest Paths and SSSP - Single Source Shortest Paths
$$
\displaylines{
\begin{array}{c|c}
 & SSSP & APSP \\
\text{Non-weighted} & \begin{array}{}
BFS \\
O(\abs{V} + \abs{E}) \\
\end{array} & \begin{array}{}
BFS \text{ from each, } O(\abs{V}^{2} + \abs{V}\abs{E}) \\
\end{array} \\
\text{Weighted} & \begin{array}{}
\text{Dijkstra}, O(\abs{V}\log \abs{V} + \abs{E}) \\
\text{Bellmann-Ford}, O(\abs{V}\abs{E}) \\
\end{array} & \begin{array}{}
\text{Bellmann-Ford from each}, O(\abs{V}^{2}\abs{E}) \\
\text{Floyd-Warshall}, O(\abs{V}^{3}) \\
\text{Johnson}, O(\abs{V}^{2}\log \abs{V} + \abs{V}\abs{E}) \\
\end{array} \\
\end{array} \\
}
$$
### Input
$$
\displaylines{
G = (V, E) \text{ directed or undirected graph with no negative cycles} \\
\omega: E \to \mathbb{R} \\
}
$$
### Output
$$
\displaylines{
D \text{ distances matrix} \\
\Pi \text{ paths matrix} \\
}
$$
## Floyd-Warshall
Let us enumerate all vertices from $1 \text{ to } n$. Consider a function $d(i, j, k)$ that returns the distance from $i$ to $j$ using only from the set $\Set{ 1, 2, \dots, k }$
Clearly, $d(i, j, k) \leq d(i, j, k-1)$ as we either use the same path using only vertices from $[k-1]$ or find a shorter path via vertex $k$
It is clear, that if $d(i, j, k) < d(i, j, k-1)$ then there must exist a path from $i$ to $k$ through $[k-1]$ vertices and another such path from $k$ to $j$
We can then conclude:
$$
\displaylines{
\forall i, j, k \in [n]: d(i, j, k) = \min\{d(i, j, k-1), d(i, k, k-1) + d(k, j, k-1) \} \\
}
$$
Formal proof is by induction on $k$ and contradiction
There are two ways to reconstruct actual shortest paths
- Fill them recursively during the distances calculation
- Calculate them solely from the distance matrix
The latter is as follows:
$$
\displaylines{
\forall i, j \in [n]: \exists (z, j) \in E: D[i][j] = D[z][j] + \omega(z, j) \\
}
$$
## Johnson-Dijkstra
1. First, a new node $q$ is added to the graph, connected by zero-weight edges to each of the other nodes
2. Second, the Bellman–Ford algorithm is used, starting from the new vertex $q$, to find for each vertex $v$ the minimum weight $h(v)$ of a path from $q$ to $v$. If this step detects a negative cycle, the algorithm is terminated
3. Next the edges of the original graph are reweighted using the values computed by the Bellman–Ford algorithm: an edge from $u$ to $v$, having weight ⁠$\omega(u, v)$, is given the new weight $w(u, v) + h(u) - h(v)$
4. Finally, $q$ is removed, and Dijkstra's algorithm is used to find the shortest paths from each node $s$ to every other vertex in the reweighted graph. The distance in the original graph is then computed for each distance $D(u, v)$, by adding $h(v) - h(u)$ to the distance returned by Dijkstra's algorithm.
