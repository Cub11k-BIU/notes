---
{"publish":true,"created":"09/12/25, 13:13","modified":"2026-03-24T14:59:54.891+02:00","tags":["Academia","Lecture","Algorithms-1"],"cssclasses":""}
---

# Flow networks, maximum flow problem
## Edmonds-Karp algorithm (EK)
Edmonds-Karp algorithm is a special case of the Ford-Fulkerson algorithm.
The only change is that instead of choosing a random augmenting path, we will choose the shortest one by the number of edges, found, for example, by BFS. Correctness is already proved, as it is a special case of the Ford-Fulkerson algorithm.
The only thing there is to prove is the runtime complexity, which we will prove to be $O(VE^{2})$
### Minimum distance from source in the residual network #lemma 
$$
\displaylines{
\text{Let } G \text{ be a flow network with source } s \text{ and sink } t \\
\text{Let } f \text{ be a flow in } G \\
\text{Let } \delta_{f}(s, v) \text{ denote the minimum distance (number of edges) in } G_{f} \\
\text{Then, } \forall v \in V: \delta_{f}(s, v) \text{ monotonically increases with each flow augmentation} \\
\\
\text{Proof:} \\
\text{Let by contradiction } \exists v \in V \setminus \Set{ s, t } : \delta_{f}(s, v) \text{ is decreased in some flow augmentation} \\
\text{Let } f \text{ be the flow just before that augmentation} \\
\text{Let } f' \text{ be the flow just after that augmentation} \\
\text{Let } v \in V: \delta_{f}(s, v) < \delta_{f'}(s, v) \\
\text{Clearly, } \forall f: \delta_{f}(s, s) = 0 \implies v \neq s \\
\text{Let } p = s \leadsto u \to v \text{ be the shortest path from } s \text{ to } v \text{ in } G_{f'}: (u, v) \in E_{f'} \text{ and} \\
\delta_{f'}(s, u) = \delta_{f'}(s, v) - 1 \\
\text{Because of the way we chose } v, \delta_{f'}(s, u) \geq \delta_{f}(s, u) \\
(u, v) \in E_{f} \implies \delta_{f}(s, v) \leq \delta_{f}(s, u) + 1 \leq \delta_{f'}(s, u) + 1 = \delta_{f'}(s, v) - \text{Contradiction!} \\
\implies (u, v) \not\in E_{f} \\
(u, v) \not\in E_{f}, (u, v) \not\in E_{f'} \implies \text{The augmentation increased flow from } v \text{ to } u \\
\text{Augmentations only happen along the shortest path in } G_{f} \\
\implies (v, u) \text{ is the last edge in the shortest path from } s \text{ to } u \\
\implies \delta_{f}(s, v) = \delta_{f}(s, u) - 1 \leq \delta_{f'}(s, u) - 1 = \delta_{f'}(s, v) - 2 \\
\implies \delta_{f'}(s, v) > \delta_{f}(s, v) - \text{Contradiction!} \\
\implies \boxed{ \forall v \in V \setminus \Set{ s, t }: \delta_{f}(s, v) \leq \delta_{f'}(s, v) } \\
}
$$
### Minimum distance to sink in the residual network #lemma 
$$
\displaylines{
\text{Let } G \text{ be a flow network with source } s \text{ and sink } t \\
\text{Let } f \text{ be a flow in } G \\
\text{Let } \delta_{f}(s, v) \text{ denote the minimum distance (number of edges) in } G_{f} \\
\text{Then, } \forall v \in V: \delta_{f}(v, t) \text{ monotonically increases with each flow augmentation} \\
\\
\text{Proof:} \\
\text{Similar to the proof of the lemma above} \\
}
$$
### Existence of an augmenting path in the pre-augmented residual network #lemma 
$$
\displaylines{
\text{Let } G_{f} \text{ be the residual network} \\
\text{Let } G_{f'} \text{ be the residual network after augmenting } f \\
\text{Let } \delta_{f'}(s, t) = \delta_{f}(s, t) \\
\text{Then the shortest augmenting path in } G_{f'} \text{ is also necessarily in } G_{f} \\
\\
\text{Proof:} \\
\text{Let } p \text{ be the shortest augmenting path in } G_{f'} \\
\text{Let by contradiction } p \not\in G_{f} \\
\implies \text{Augmentation of } f \text{ created some new edges in } f' \\
(u, v) \text{ is a new edge} \implies (v, u) \in G_{f} \text{ and the shortest augmenting path in } G_{f} \\
\text{contained } (v, u) \\
\implies \delta_{f}(s, u) = \delta_{f}(s, v) + 1 \\
\delta_{f'}(s, u) \geq \delta_{f}(s, u) \text{ and } \delta_{f'}(u, t) \geq \delta_{f}(u, t) \\
\abs{p} = \delta_{f'}(s, t) \\
p = s \leadsto v \to u \leadsto t \\
\implies \delta_{f'}(s, t) = \delta_{f'}(s, u) + 1 + \delta_{f'}(v, t) \geq \delta_{f}(s, v) + 2 + \delta_{f}(v, t) = \\
= \delta_{f}(s, t) + 2 > \delta_{f}(s, t) - \text{Contradiction!} \\
\implies p \in G_{f} \\
}
$$
### Saturation of an edge in the residual network #lemma 
$$
\displaylines{
\text{Let } G \text{ be a flow network with flow } f \\
\text{Suppose algorithm iteratively augments on a (currently) shortest augmenting path} \\
\text{Then, as long as } \delta_{f}(s, t) \text{ is preserved, a saturated edge will no longer be in any} \\
\text{shortest augmenting path until } \delta_{f}(s, t) \text{ changes} \\
\text{Let us call one such sequence of iteration a phase} \\
\\
\text{Proof:} \\
\text{Similar to the proof of lemma above} \\
}
$$
A corollary of this lemma is that there can be at most $\abs{E}$ iterations in each phase.
The number of phases is at most $\abs{V}$
Finding the shortest augmented path takes $O(\abs{V} + \abs{E}) = O(\abs{E})$
All in all, the runtime complexity of Edmonds-Karp algorithm is $O(\abs{V}\abs{E}^{2})$
## Dinic's algorithm
Dinic's algorithm operates with layers/levels, where during the $l$-th phase, there are $l+1$ layers.
### The layer graph #definition 
$$
\displaylines{
G_{L} = (V_{L}, E_{L}) \\
\text{Where } E_{L} = \Set{ (u, v) \in E_{f} | \delta_{f}(s, v) = \delta_{f}(s, u) + 1 } \\
\text{This divides the graph into layers, by the distance from source} \\
\\
\forall v \in V_{L}: v \in L_{i} \iff \delta_{f}(s, v) = i \text{ and } \delta_{f}(v, t) = \delta_{f}(s, t) - i \\
}
$$
Building a layer graph requires running a BFS from $s$ and a BFS on inverted graph from $t$, in total $O(\abs{V} + \abs{E}) = O(\abs{E})$
The layer graph contains all possible shortest augmenting paths in $G_{f}$, thus we can choose arbitrary edge between each pair of layers and find a shortest path in $O(l)$ time.
### Updating the layer graph #lemma 
During one phase, edge can become saturated, and thus should be removed from the layer graph. Vertices, as a result, can become dead-ends (either no incoming edges or no outgoing edges) and should also be removed. We can efficiently perform deletions by storing two counters for each vertex, for $deg_{in}(v)$ and $deg_{out}(v)$
Each vertex can become a dead-end only once per phase, and each edge can be removed only once per phase, consequently, there will be at most $O(\abs{V}+\abs{E})$ deletions in one phase.
$$
\displaylines{
\begin{align}
& Dinic(G = (V, E), s, t, c): \\
1. & \quad \text{for } \forall u, v \in V: \\
2. & \quad \quad f(u, v) \leftarrow 0 \\
3. & \quad \quad c_{f}(u, v) = c(u, v) \\
4. & \quad G_{f} \leftarrow G \\
5. & \quad \text{while } \exists p(s, t) \in G_{f}: \\
6. & \quad \quad \text{Build } G_{L} \\
7. & \quad \quad \text{while } \exists p_{L}(s, t) \in G_{L}: \\
8. & \quad \quad \quad \text{Augment } f \text{ using } p_{L} \\
9. & \quad \quad \quad \text{Update } L \text{ by removing saturated edges and dead-ends} \\
10. & \quad \quad \text{Update } G_{f} \text{ with augmentations in } f \\
11. & \quad \text{return } f \\ 
\end{align} \\
\\
\text{Number of phases is bounded by number of vertices, } O(\abs{V}) \\
\text{In each phase, number of iterations is bounded by the number of edges,} \\
\text{as each edge is used(saturated) at most once per phase} \\ 
\text{All in all, } O(\abs{V}) \text{ phases, in each phase } O(\abs{V}+\abs{E}) \cdot O(l) = O(\abs{E}\abs{V}) \\
\implies O(\abs{V}^{2}\abs{E}) \\
}
$$
## Hopcroft-Karp
Suppose there is also a vertex capacity function
$$
\displaylines{
b: V \setminus \Set{ s, t } \to \mathbb{R}^{+} \\
\text{That is, at most $b(v)$ units can enter/leave } v \\
}
$$
This new problem can be reduced to the regular edge-only capacity max flow problem with the following:
$$
\displaylines{
G' = (V', E'), s_{out}, t_{in}, c' \\
V' = \Set{ s_{out}, t_{in} } \cup \Set{ v_{in}, v_{out} | v \in V \setminus \Set{ s, t } } \\
E' = \Set{ (u_{out}, v_{in}) | (u, v) \in E } \cup \Set{ (u_{out}, u_{in}) | u \in V \setminus \Set{ s, t } } \\
\forall u, v \in V \setminus \Set{ s, t }: c'(u_{out}, v_{in}) = c(u, v) \\
\forall u \in V \setminus \Set{ s, t }: c'(u_{out}, u_{in}) = b(u) \\
\\
\abs{V'} = 2\abs{V} - 2 \\
\abs{E'} = \abs{E} + \abs{V} - 2 < 2\abs{E} \\
\\
\text{In homework assignments, you will be asked} \\
\text{to prove the equivalence of flow values in } G \text{ and } G' \\
}
$$
Assume now, $\forall v \in V \setminus \Set{ s, t }: b(v) = 1$. We will call such flow networks, the networks with unit vertex-capacities.
### Upper bound on the flow value in unit vertex-capacities networks #lemma 
$$
\displaylines{
\text{Let } G \text{ be a flow network with unit vertex-capacities} \\
\text{Let } l \text{ be the length of the shortest path from } s \text{ to } t \text{ in } G \\
\text{Then, } \forall f: \abs{f} \leq \frac{\abs{V}}{l} \\
}
$$
Running the Dinic algorithm on such a flow network yields the same (for now) runtime.
Note however, once an edge $(u_{in}, u_{out})$ is used in an augmenting path, it is immediately saturated and both $u_{in}, u_{out}$ become dead-ends. This means that all augmenting paths in $G_{L}$ will be vertex-disjoint. It is possible to find the maximum set of vertex-disjoint augmenting paths in $O(\abs{E})$. This gives us an upper bound of $O(\abs{V}\abs{E})$ for the whole algorithm.
Given the parameter $P$ for the number of phases, we can use the following algorithm
$$
\displaylines{
\text{Run } P \text{ phases of Dinic and then run FF or EK} \\
\text{Note that } \delta_{f}(s, t) \geq P \implies \abs{f} \leq \frac{\abs{V}}{P} \\
\implies \text{By Ford-Fulkerson, the runtime complexity is } O(P \cdot \abs{E}) + O\left( \frac{\abs{V}}{P}\abs{E} \right) \\
\text{Taking } P = \sqrt{ \abs{V} } \text{ yields the optimal (in this algorithm) runtime of } O\lrp{\sqrt{ \abs{V} }\abs{E}} \\
}
$$
