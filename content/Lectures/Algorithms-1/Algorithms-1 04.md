---
{"publish":true,"created":"18/11/25, 13:02","modified":"2025-11-21T21:10:13.909+02:00","tags":["Academia","Lecture","Algorithms-1"],"cssclasses":""}
---

# Shortest paths in a weighted graph
### Variations
- Single-destination shortest paths problem - find a shortest path to a given destination $t$ from every vertex $v$
- Single-pair shortest path problem - find a shortest path from source $s$ to destination $t$
- All-pairs shortest paths problem - find a shortest path between any two vertices $s, t$
We will focus on a single-destination variation
### Input
$$
\displaylines{
G = (V, E) \text{ directed or undirected graph} \\
\omega: E \to \mathbb{R} \text{ weights function} \\
\delta_{\omega}: V \times V \to \mathbb{R}, \delta_{\omega}(s, v) = \sum_{i=1}^{k} \omega(v_{i}, v_{j}) : \forall i, j \in [1, k]: \Set{ v_{i}, v_{j} } \in p(s, v) \\
\\
\text{For single-destination} - \text{destination } t \\
\text{For single-pair} - \text{source } s, \text{destination } t \\
}
$$
### Output
$$
\displaylines{
\text{For single-pair} - \text{the shortest path} \\
\text{For single-destination} - \text{the shortest paths tree} \\
\text{For all-pairs} - \abs{V} \text{ shortest paths trees} \\
}
$$
Shortest path lemma from previous lecture (BFS, DFS) also applies here in a more general form: $\delta_{\omega}(s, u) + \omega(u, v) \geq \delta_{\omega}(s, v)$

Let us first define a function calculating the minimal distance in the following way:
$$
\displaylines{
f(u) = \delta_{\omega}(s, u) \\
f(u) = \begin{cases}
0 & s = u \\
\min\{\min_{(v, u) \in E}\{f(v) + \omega(v, u)\}, \infty\} & \text{otherwise} \\
\end{cases} \\
}
$$
This function only works for acyclic(!) graphs, and runs in $O(\abs{V} + \abs{E})$
Similar solution with the same complexity is to first perform the topological sort and then go in that order instead of a random one.

What can we do with cycles?
Cycles can be classified:
- Negatively weighted cycle, this would mean that we can achieve $-\infty$ distance, problematic
- Zero-weighted cycle, this cycle can just be ignored as it doesn't affect the distance
- Positively-weighted cycle, a "regular" cycle, can also be ignored

Let's assume we have no negative cycles
#### Relaxation technique
Initialize all vertices to have a $\infty$ distance **estimate**
$$
\displaylines{
\begin{align}
& Init-Single-Source(G = (V, E), s): \\
1. & \quad \text{for } v \in V: \\
2. & \quad \quad d[v] \leftarrow \infty \\
3. & \quad \quad \pi[v] \leftarrow \text{null} \\
4. & \quad \quad d[s] \leftarrow 0 \\
\end{align} \\
}
$$
For each edge in $E$, **relaxing** an edge means checking whether an edge can improve the current shortest path, and thus should be used
$$
\displaylines{
\begin{align}
& Relax(u, v): \\
5. & \quad \text{if } d[v] > d[u] + \omega(u, v): \\
6. & \quad \quad d[v] = d[u] + \omega(u, v) \\
7. & \quad \quad \pi[v] = u \\
\end{align} \\
}
$$
#### No-path property #lemma 
$$
\displaylines{
\not\exists p(s, u) \implies d[u] = \infty \\
}
$$
#### Upper-bound property #lemma 
$$
\displaylines{
\forall v \in V: d[v] \geq \delta_{\omega}(s, v) \\
\text{Once } d[v] = \delta_{\omega}(s, v) \text{ is never changes anymore} \\
\\
\text{Proof:} \\
\text{Base case. } d[v] = \infty \geq \delta_{\omega}(s, v) \text{ after init} \\
\text{Induction step. Let } \forall v \in V: d[v] \geq \delta_{\omega}(s, v) \text{ after } k \text{ Relax-es} \\
\text{Let } k+1\text{-st} \text{ Relax be the relax of edge } (u, v) \\
d[u] \geq \delta_{\omega}(s, u) \\
\text{If Relax leaves } d[v] \text{ unchanged, we're done} \\
\text{Let Relax change } d[v] \\
d[v] = d[u] + \omega(u, v) \geq \delta_{\omega}(s, u) + \omega(u, v) \geq \delta_{\omega}(s, v) \\
\implies \text{Proved by induction} \\
\\
\text{Relax can only decrease } d[v], \\
\text{so when } d[v] = \delta_{\omega}(s, v) \text{ it can no longer decrease or increase} \\ 
}
$$
#### Convergence property #lemma 
$$
\displaylines{
\text{Let } p(s, v) = p(s, u) + (u, v) \\
\text{Let } Relax(u, v) \text{ be execute at some point} \\
\text{If } d[u] = \delta_{\omega}(s, u) \text{ at any time before } Relax(u, v), \\
\text{then } d[v] = \delta_{\omega}(s, v) \text{ at all times after the call} \\
\\
\text{Proof:} \\
\text{Let } d[u] = \delta_{\omega}(s, u) \text{ before the call} \\
\implies \text{After } Relax(u, v) \text{ the following is true:} \\
d[v] \leq d[u] + \omega(u, v) = \delta_{\omega}(s, u) + \omega(u, v) = \delta_{\omega}(s, v) \\
\implies \text{By upper-bound property } d[v] = \delta_{\omega}(s, v) \\
}
$$
#### Path-relaxation property #lemma 
$$
\displaylines{
\text{Let } p(s, u) = (v_{0} = s, v_{1}, \dots, v_{k} = u) \\
\text{If we relax edges in order } (v_{0}, v_{1}), \dots, (v_{1}, v_{2}), \dots, (v_{k-1}, v_{k}) \\
\text{Then } d[u] = \delta_{\omega}(s, u) \\
\text{Note that we can relax other edges anywhere between the edges of that path} \\
\\
\text{Proof:} \\
\text{Base case. } i = 0 \implies d[v_{0}] = d[s] = 0 = \delta_{\omega}(s, s) \\
\text{Induction step. Let } \forall j < i: d[v_{j}] = \delta_{\omega}(s, v_{j}) \\
\text{Let edge } (v_{i-1}, v_{i}) \text{ be relaxed now} \\
d[v_{j}] = \delta_{\omega}(s, v_{j}) \implies \text{By convergence property } d[v_{i}] = \delta_{\omega}(s, v_{i}) \text{ after the call} \\
\implies \text{Proved by strong(complete) induction} \\
}
$$
### Bellman-Ford algorithm (excluding negative cycles)
$$
\displaylines{
\begin{align}
& Bellman-Ford(G = (V, E), s): \\
1. & \quad Init-Single-Source(G, s) \\
2. & \quad \text{for } i \in [1, \abs{V}-1]: \\
3. & \quad \quad \text{for } (u, v) \in E: \\
4. & \quad \quad \quad Relax(u, v) \\
5. & \quad \text{return } d, \pi \\
\end{align} \\
}
$$
Algorithm runs in $O(\abs{V} \cdot \abs{E})$

---
### Dijkstra's algorithm
Assume we have no negative weighted edges.
Dijkstra's algorithm maintains a set $S$ of vertices that have their shortest paths from $s$ already determined. The algorithm then repeatedly selects $u \in V \setminus S$ with the minimum distance estimate (relaxation technique), adds $u$ to $S$ and relaxes all edges from $u$
$$
\displaylines{
\begin{align}
& Dijkstra(G = (V, E), s): \\
1. & \quad Init-Single-Source(G, s) \\
2. & \quad Q.build(V) \\
3. & \quad \text{while not } Q.isEmpty(): \\
4. & \quad \quad u = Q.extractMin() \\
5. & \quad \quad \text{for } (u, v) \in E: \\
6. & \quad \quad \quad Relax(u, v) \\
7. & \quad \text{return } d, \pi \\
\end{align} \\
}
$$
Note that $Relax(u, v)$ updates the key in $Q$, so it has to also call $Q.decreaseKey(v, d[v])$, which makes it $O(\log \abs{V})$ for binary heap min queue instead of $O(1)$
If using binary heap min queue, the runtime is $O(\abs{V}\log \abs{V} + \abs{E}\log \abs{V})$
If using Fibonacci heap min queue, the runtime is $O(\abs{V}\log \abs{V} + \abs{E})$
#### Correctness of Dijkstra's algorithm #theorem 
$$
\displaylines{
\text{Proof:} \\
\text{Base case. } S = \emptyset, \forall v \in S: d[v] = \delta_{\omega}(s, v) \text{ is vacuously true} \\
\text{Induction step. Let } \forall v \in S: d[v] = \delta_{\omega}(s, v) \\
\text{Let by contradiction } u \text{ be the first vertex such that } d[u] \neq \delta_{\omega}(s, u) \text{ when adding } u \text{ to } S \\
\implies u \neq s \implies S \neq \emptyset \\
\text{In addition, } \implies \exists p(s, u) \\
\text{Before adding } u \text{ to } S, \text{ path } p \text{ connectes vertex in } S \text{ to vertex in } V \setminus S \\
\text{Let } y \text{ be the first vertex in } p(s, u) \text{ such that } y \in V \setminus S \\
\text{Let } x \in V: p(s, y) = p(s, x) + (x, y) \\
\implies p(s, u) = p(s, x) + (x, y) + p(y, u) \\
x \in S \implies x \text{ was added to } S \text{ before } u \implies d[x] = \delta_{\omega}(s, x) \text{ when } x \text{ was added to } S \\
\text{Edge } (x, y) \text{ was relaxed at that moment} \implies d[y] = \delta_{\omega}(s, y) \text{ when } u \text{ was added to } S \\
d[y] = \delta_{\omega}(s, y) \leq \delta_{\omega}(s, u) \leq d[u] \\
y \text{ was still in } V \setminus S \text{ when choosing } u \text{ to be added to } S \\
\implies d[u] \leq d[y] \implies d[y] = d[u] \implies d[u] = \delta_{\omega}(s, u) - \text{Contradiction!} \\
\implies \forall v \in S: d[v] = \delta_{\omega}(s, v) \\
\text{In the end, } S = V \implies \text{Dijkstra's algorithm correctly returns shortest paths} \\
}
$$
