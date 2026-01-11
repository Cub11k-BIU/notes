---
{"publish":true,"created":"31/12/25, 15:50","modified":"2025-12-31T20:12:29.550+02:00","tags":["Academia","Assignment","Algorithms-1"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a directed graph with a weight function } \omega: E \to \mathbb{R} \\
\text{Let } G \text{ have no negative cycles} \\
\text{Show an algorithm for finding } \forall v \in V: \delta^{*}(v) = \min\{\delta(u, v) \mid u \in V\} \text{ in } O(\abs{V} \cdot \abs{E}) \text{ time} \\
\\
\text{Solution:} \\
\text{This problem is very similar to solving } APSP \text{ using Johnson's algorithm} \\
\text{In this case, we add an auxilary vertex } s \text{ along with zero-edges to all other vertices} \\
\text{Then run Bellman-Ford and return the result} \\
\text{Assuming } \abs{E} \geq \abs{V}-1 \\
\text{Complexity is then } O(\abs{V} + \abs{V'}\cdot \abs{E'}) = O(\abs{V} \cdot (\abs{E} + \abs{V})) = O(\abs{V} \cdot \abs{E}) \\
\\
\text{Proof of correctness is by showing two-sided inequality of } \delta^{*}(v) \text{ and } \delta_{G'}(s, v) \\
}
$$
# 2
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a directed graph with no negative cycles} \\
\text{Let } \omega: E \to \mathbb{R} \text{ be a weight function} \\
\text{Let } D \in \mathbb{R}^{n \times n} \text{ be a matrix solution of APSP in } G \\
\text{Let } V = \Set{ 1, 2, \dots, n } \\
\text{Let } v = n+1, v_{in} \in \mathbb{R}^{n}, v_{out} \in \mathbb{R}^{n} \\
v \text{ is the vertex to add} \\
v_{in} \text{ is the set of weights for edges to be added going to } v \\
v_{out} \text{ is the set of weights for edges to be added going from } v \\
\text{Assume no negative cycles are created} \\
\text{Show an algorithm for calculating } D' \in \mathbb{R}^{(n+1)\times(n+1)} \text{ the new APSP matrix} \\
\\
\text{Solution:} \\
\text{Assuming we have to copy the existing matrix, the algorithm will run in } \Omega(n^{2}) \\
\text{We will first compute shortest paths to } v \\
\forall i \in [n]: d'_{i,v}: = \min\{d_{i,j} + v_{in}[j] \mid j \in [n]\} \\
\text{And then shortest paths from } v \\
\forall i \in [n]: d'_{v,i} = \min\{v_{out}[j] + d_{j,i} \mid j \in [n]\} \\
\text{After that, we have to check if addition of } v \text{ shortened any paths:} \\
\forall i, j \in [n]: d'_{i, j} = \min\{d'_{i,v} + d'_{v, j}, d_{i,j}\} \\
\text{Each of these steps takes } O(n^{2}) \text{ time} \\
\implies \text{Total algorithm runtime is exactly } O(n^{2}) \\
}
$$
# 3
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a directed graph} \\
\text{Let } \omega: E \to \mathbb{R}, \forall e \in E: \omega(e) > 1 \text{ be a weight function} \\
\text{Let } \omega^{*}(P) = \prod_{e \in P} \omega(e) \\
\text{Let } \forall s, t \in V: \delta^{*}(s, t) = \min\{\omega^{*}(P) \mid P(s, t)\} \\
\text{Find an algorithm for solving single source product-weight problem in } G \\
\forall u \in V: \delta^{*}(s, u) \\
\text{Hint: use function } \log \\
\\
\text{Solution:} \\
\text{Let } \forall e \in E: \omega'(e) = \log_{2}\omega(e) \\
\forall e \in E: \omega(e) > 1 \implies \omega' \text{ is well-defined} \\
\omega^{*}(P) = \prod_{e \in P} \omega(e) = 2^{\prod_{e \in P} \log_{2}\omega(e)} = 2^{\sum_{e \in P} \omega'(e)} = 2^{\omega'(P)} \\
\text{Note that } f(x) = 2^{x} \text{ is monotonically increasing} \\
\implies [\omega'(P_{1}) > \omega'(P_{2}) \iff \omega^{*}(P_{1}) > \omega^{*}(P_{2})] \\
\implies \forall u \in V: \delta^{*}(s, u) = 2^{\delta_{\omega'}(s, u)} \\
\text{Given that, finding the shortest paths by } \omega^{*} \text{ is equivalent to} \\
\text{finding the shortest paths by } \omega' \\
\text{Total runtime is } O(\abs{V}) \text{ to calculate new weights,} \\
O(\abs{E} + \abs{V}\log \abs{V}) \text{ for finding shortest paths using Dijkstra's algorithm} \\
\text{and } O(\abs{V}) \text{ for calculating final product-weights} \\
\text{In total, } O(\abs{E} + \abs{V}\log \abs{V}) \\
}
$$
# 4
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a connected undirected graph} \\
\text{Let } \omega: E \to \mathbb{R}_{+} \text{ be a weight function, all weights are distinct} \\
\text{Let } T_{MST} \text{ be an MST of } G \\
\text{Let } s \in V \\
\text{Let } T_{SSSP} \text{ be a shortest paths tree from } s \text{ in } G \\
\text{Prove or disprove: } T_{MST} \text{ and } T_{SSSP} \text{ have a common edge} \\
\\
\text{Proof:} \\
\text{Let } \Set{ s, v } \text{ be the lightest edge incident to } s \\
\text{We will prove that } \Set{ s, v } \in T_{SSSP} \cap T_{MST} \\
\Set{ s, v } \text{ is the lightest edge in the cut } (\Set{ s }, V \setminus \Set{ s }) \implies \Set{ s, v } \text{ is in every MST} \\
\implies \Set{ s, v } \in T_{MST} \\
\text{Let by contradiction } \Set{ s, v } \not\in T_{SSSP} \\
\implies \delta(s, v) \leq \omega(s, v) \text{ with the shortest path } P = (s, u_{1}, \dots, u_{k}, v) \\
\omega(s, v) < \omega(s, u_{1}) \text{ and } \forall e \in E: \omega(e) > 0 \\
\implies \omega(P) = \omega(s, u_{1}) + \underbrace{ C }_{ \geq 0 } > \omega(s, v) - \text{Contradiction!} \\
\implies \Set{ s, v } \in T_{SSSP} \\
\implies \boxed{ \Set{ s, v } \in T_{MST} \cap T_{SSSP} } \\
}
$$
# 5
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a directed graph} \\
\text{Let } \forall e \in E: e \text{ is either colored blue or red} \\
\text{Let } s \in V \\
\text{Show an algorithm for solving SSSP from } s \text{ with a limitation that each path} \\
\text{must have an even number of blue edges} \\
\\
\text{Solution:} \\
\text{Let } G' = (V', E') \\
V' = \Set{ v_{1}, v_{2} \mid v \in V } \\
E' = \Set{ (u_{1}, v_{1}), (u_{2}, v_{2}) \mid (u, v) \text{ is red in } E } \cup \Set{ (u_{1}, v_{2}), (u_{2}, v_{1}) \mid (u, v) \text{ is blue in } E } \\
\text{Essentially, we created two copies of } G, \text{ red edges are in both copies and} \\
\text{blue edges are between copies} \\
\text{This way, we can solve SSSP } \forall v \in V: \delta_{G'}(s_{1}, v_{1}) \text{ that would in turn solve} \\
\text{the initial problem, as returning to the same copy requires us to traverse even} \\
\text{number of blue edges (edges between copies)} \\
\text{Building the graph is } O(\abs{V} + \abs{E}) \\
\text{We can solve SSSP with BFS in } O(\abs{V'} + \abs{E'}) = O(2\abs{V} + 2\abs{E}) = O(\abs{V} + \abs{E}) \\
\implies \text{In total, } O(\abs{V}+\abs{E}) \\
}
$$
# 6
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a directed graph} \\
\text{Let } \omega: E \to \mathbb{R}_{+} \text{ be a weight function} \\
\text{Let } s, t \in V \\
\text{Let } H = (V, F) \text{ be a subgraph of } G \text{ obtained by removing edges from } E \\
\text{Show an algorithm for finding (at most) one edge to add to } F, \\
\text{such that the shortest path $\delta_{H}(s, t)$ becomes as short as possible} \\
\\
\text{Solution:} \\
\text{Let } G' = (V', E') \\
V' = \Set{ v_{1}, v_{2} \mid v \in V } \\
E' = \Set{ (u_{1}, v_{1}), (u_{2}, v_{2}) \mid (u, v) \in F } \cup \Set{ (u_{1}, v_{2}) \mid (u, v) \in E \setminus F } \cup \Set{ s_{1}, s_{2} } \\
\forall (u, v) \in E: \omega(u_{1}, v_{1}) = \omega(u_{2}, v_{2}) = \omega(u_{1}, v_{2}) = \omega(u_{2}, v_{1}) = \omega(u, v) \\
\omega(s_{1}, s_{2}) = 0 \\
\text{We can only cross between copies once (essentially adding one edge from $E \setminus F$)} \\
\implies \text{Shortest path of length $\delta_{G'}(s_{1}, t_{2})$ in } G' \text{ defines an edge we're looking for} \\
\text{Building the graph is } O(\abs{V}+\abs{E}) \\
\text{We can solve the SSSP using Dijkstra's algorithm in } O(\abs{E} + \abs{V}\log \abs{V}) \\
\implies \text{In total, } O(\abs{E} + \abs{V}\log \abs{V}) \\
}
$$
# 7
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a directed graph} \\
\text{Let } \omega: E \to \mathbb{R}_{+} \text{ be a weight function} \\
(u, v) \in E \text{ is  called a last edge iff} \\
\exists \text{ shortest path } P \text{ such that } (u, v) \text{ is the last edge in } P \\
\text{Show an algorithm for determining whether an edge } (u, v) \text{ is a last edge} \\
\\
\text{Solution:} \\
\text{Edge } (u, v) \text{ is the last one only if } \delta(u, v) = \omega(u, v) \\
\text{So the question can be reduced to finding } \delta(u, v) \text{ and comparing it to } \omega(u, v) \\
\text{We can run Dijkstra's algorithm to solve SSSP from } u \text{ and, in particular } \delta(u, v) \\
\text{This algorithm then takes } O(\abs{E} + \abs{V}\log \abs{V}) \\
}
$$
# 8
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a directed graph} \\
\text{Let } s, t \in V \\
}
$$
### 1
$$
\displaylines{
\text{Given } s, t \in V \text{ and an edge } (u, v) \in E \\
\text{Show an algorithm that determines whether there exists a shortest path} \\
\text{from } s \text{ to } t \text{ with this edge} \\
\\
\text{Solution:} \\
\text{Shortest path via edge } (u, v) \text{ has length } L = \delta(s, u) + 1 + \delta(v, t) \\
\text{In total, we need to run SSSP (i.e. BFS) two times, from } s \text{ and from } v \\
\text{Then compare } \delta(s, t) \text{ with } L \\
\text{Edge cases with } \delta(s, u) = \infty \text{ or } \delta(s, t) = \infty \text{ are handled separately} \\
\implies \text{In total, } O(\abs{E} + \abs{V}) \\
}
$$
### 2
$$
\displaylines{
\text{Given } s, t \in V \text{ and an edge } (u, v) \in E \\
\text{Show an algorithm that determines whether all shortest paths} \\
\text{from } s \text{ to } t \text{ contain this edge} \\
\\
\text{Solution:} \\
\text{First, run BFS from } s \text{ to calculate } \delta(s, t) \\
\text{Then, remove edge } (u, v) \text{ and run BFS from } s \text{ again on new graph } G' \\
\text{If } \delta_{G'}(s, t) > \delta(s, t) \text{ then all shortest paths from } s \text{ to } t \text{ must go through edge } (u, v) \\
\text{Otherwise, } \delta_{G'}(s, t) = \delta(s, t) \text{ and there exists a shortest path without edge } (u, v) \\
\text{Holds vacuously true for } \delta(s, t) = \infty \\
\text{Total cost is, again, } O(\abs{E} + \abs{V}) \\
}
$$
