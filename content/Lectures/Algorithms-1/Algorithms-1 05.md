---
{"publish":true,"created":"02/12/25, 16:01","modified":"2026-02-10T14:58:45.244+02:00","tags":["Academia","Lecture","Algorithms-1"],"cssclasses":""}
---

## $A^{*}$ pathfinding algorithm
Let us consider a problem that is similar to SPSP - finding distance from $s$ to $p$, and if possible with the same runtime - finding distance for all pairs, namely APSP.
In the proof of correctness for Dijkstra's algorithm, we proved that after a vertex is removed from the priority queue, $d[v] = \delta(s, v)$.
First, when solving the SSSP we can simply stop the moment vertex $t$ is removed from the queue.
We can try to improve further and imagine an expanding circle of radius $r$ that encloses all visited vertices, which in turn means $\delta(s, v) \implies \delta(s, v) = d[v]$.
Using this we can arrive to the following improvement, namely called the $A^{*}$ algorithm.
We'd like to not simply expand the circle in all directions but try to direct it in a way that makes us closer to the destination vertex $t$.
To try to achieve this, let us make the key of every vertex in the priority queue a sum: $d'(v) = d(v) + p(v)$ where $p$ is a function called potential. We'd like to choose a function that assigns higher potential to the vertices far away from $t$. Note that this change is rather intuitive, but actually nullifies the proof of correctness of this modification of Dijkstra.
Instead, one should modify the weights of edges of the graph, ensuring that for any path:
$$
\displaylines{
\forall e = \Set{ u, v } \in E: \omega'(u, v) = p(v) + \omega(u, v) - p(u) \\
P = (v_{1}, \dots, v_{k}) \\
\omega'(P) = \sum_{i=1}^{k-1} \omega'(v_{i}, v_{i+1}) = \sum_{i=1}^{k-1} \lrp{p(v_{i+1}) - p(v_{i})} + \omega(P) = \\
= p(v_{k}) + \omega(P) - p(v_{1}) \\
}
$$
Clearly, a shortest path by the adjusted $\omega'$ weights is also the shortest path by the initial $\omega$ weights.
It is important to note that not every function is feasible as a potential, that is, produces adjusted weights that allow for Dijkstra's execution.
$$
\displaylines{
\text{Given } \omega: E \to \mathbb{R}^{+} \\
p: V \to \mathbb{R} \text{ is called feasible} \iff \forall e \in E: \omega'(e) \geq 0 \\
}
$$
Correctness of this algorithm follows from correctness of Dijkstra and the runtime is, in the worst case, the same.
But, with a proper potential function one can terminate the algorithm much faster by only searching through "potentially good" vertices.

An excellent example of this is route searching in navigation apps. There exists a map of roads and intersections, which defines the edges and vertices of the graph, and each road has some weight, for example the average time it takes to traverse it. A potential then can be all kinds of functions, a simple choice is to take the Euclidian distance from the intersection to the destination and factor it into the weights, making the navigator prefer roads that lead to the destination directionally and only choose others if the weight of direct ones is too high.
## Seidel's algorithm
$$
\displaylines{
\text{Let } G = (V, E) \text{ be an undirected unweighted graph} \\
\text{If } G \text{ is not connected we will run the algorithm for each connected component} \\
\text{Thus we assume } G \text{ to be connected} \\
\text{Let } A \text{ be its adjacency matrix, it is a boolean matrix} \\
\text{Consider } A^{2} \text{ as a result of BMM (boolean matrix multiplication)} \\
\text{but we always zero out the diagonal to account for self-loops} \\
\text{Consider the graph } G' = (V, E') \text{ with adjacency matrix } A^{2} \lor A \\
\text{That is, a graph that contains all edges of } G \text{ and in addition all edges} \\
\text{corresponding to paths of length 2, without multi-edges} \\
\text{It is worthy of note that there is a clear connection between } \delta \text{ and } \delta' \\
\\
\text{Namely, } \forall u, v \in V: \delta'(u, v) = \ceil{\frac{\delta(u, v)}{2}} \\
\text{Proof:} \\
\text{Let } P \text{ be the shortest path from } u \text{ to } v \text{ in } G \\
\text{Case 1. } P \text{ is of length } 2k \\
\text{Then there exists a path of length at most } k \text{ in } G' \\
\text{that uses only edges defined by } A^{2} \\
\text{If there exists a shorter path in } G' \text{ of length } k' < k \\
\text{Then there exists a path of length at most } 2k' < 2k \text{ in } G - \text{Contradiction!} \\
\text{Case 2. } P \text{ is of length } 2k+1 \\
\text{Then there exists a path of length at most } k + 1 \text{ in } G' \\
\text{that uses only edges defined by } A^{2} \text{ and a single edge defined by } A \\
\text{Similarly, we prove that it is the shortest} \\
\\
\text{Suppose we could determine the parity of distance between any two vertices in } G \\
\text{Then we could define a recursive algorithm } APSP(A) \\
\text{Base case of the algorithm is } A = 1 - I \\
\text{In this case every edge is present and } A \text{ itself is the solution} \\
\text{The recurisve step is as follows:} \\
\begin{align}
 & ALG_{1}(A): \\
1. & \quad \text{if } A = 1 - I: \\
2. & \qquad \text{return } A \\
3. & \quad \text{else}: \\
4. & \qquad \Delta' \leftarrow ALG_{1}(A^{2} \lor A) \\
5. & \qquad \text{for } u, v \in V: \\
6. & \qquad \quad \text{if } \delta(u, v) \text{ is odd}: \\
7. & \qquad \qquad \delta(u, v) = 2\delta'(u, v) - 1 \\
8. & \qquad \quad \text{else}: \\
9. & \qquad \qquad \delta(u, v) = 2\delta'(u, v) \\
10. & \qquad \text{return } \Delta \\
\end{align} \\
\text{Where } \Delta, \Delta' \text{ is a matrix of values of } \delta, \delta' \text{ respectively} \\
\text{The challenge is determining the parity of } \delta(u, v) \text{ before the value of } \delta(u, v) \text{ is known} \\
}
$$
#### Determining the parity
$$
\displaylines{
\text{Let } u, v \in V \\
\text{Let } w \in \Gamma(v) \\
\text{By triangle inequality } \delta(u, v) - 1 \leq \delta(u, w) \leq \delta(u, v) + 1 \\
\\
\text{Case 1. } \delta(u, v) \equiv \delta(u, w) \pmod{2} \\
\text{Parities are the same, which means } \delta(u, v) = \delta(u, w) \\
\text{Which in turn means that } w \text{ is not on the shortest path from } u \text{ to } v \\
\text{and } v \text{ is not on the shortest path from } u \text{ to } w \\
\\
\text{Case 2. } \delta(u, v) \text{ is even and } \delta(u, w ) \text{ is odd} \\
\text{Then } \delta'(u, w) = \ceil{\frac{\delta(u, w)}{2}} = \frac{\delta(u, w)+1}{2} \geq \frac{(\delta(u, v) - 1) + 1}{2} = \frac{\delta(u, v)}{2} = \delta'(u, v) \\
\\
\text{Case 3. } \delta(u, v) \text{ is odd and } \delta(u, w) \text{ is even} \\
\text{Then } \delta'(u, w) = \ceil{\frac{\delta(u, w)}{2}} = \frac{\delta(u, w)}{2} \leq \frac{\delta(u, v)+1}{2} = \ceil{\frac{\delta(u,v)}{2}} = \delta'(u, v) \\
\text{Another useful observation in this case is:} \\
\text{Let } x \in \Gamma(v) \text{ such that } x \text{ is on the shortest path from } u \text{ to } v \text{ in } G \\
\text{Then } \delta(u, x) = \delta(u, v) - 1 \\
\delta'(u, x) = \ceil{\frac{\delta(u, x)}{2}} = \frac{\delta(u, v)-1}{2} < \frac{\delta(u, v) + 1}{2} = \ceil{\frac{\delta(u, v)}{2}} = \delta'(u, v) \\
\delta'(u, x) = \delta'(u, v) - 1 \\
\implies \text{For at least one neighbor of } v, \text{ the inequality } \delta'(u, w) \leq \delta'(u, v) \text{ is strict} \\
\\
\text{The following claim can then be proved:} \\
\delta(u, v) \text{ is even} \iff \sum_{W \in \Gamma(v)} \delta'(u, w) \geq deg(v)\delta'(u, v) \\
\text{Proof:} \\
\boxed{ \implies } \text{ Let } \delta(u, v) \text{ be even} \\
\implies \forall w \in \Gamma(v): \delta'(u, w) \geq \delta'(u, v) \\
\implies \boxed{ \sum_{w \in \Gamma(v)} \delta'(u, w) \geq \sum_{w \in \Gamma(v)} \delta'(u, v) = deg(v)\delta'(u, v) } \\
\\
\boxed{ \impliedby } \text{ Let } \delta(u, v) \text{ be odd} \\
\implies \forall w \in \Gamma(v): \delta'(u, w) \leq \delta'(u, v) \text{ and } \exists x \in \Gamma(v): \delta'(u, x) = \delta'(u, v) - 1 \\
\implies \sum_{w \in \Gamma(v)} \delta'(u, w) = \delta'(u, x) + \sum_{w \in \Gamma(v) \setminus \Set{ x }} \delta'(u, w) = \\
= \delta'(u, v) - 1 + \sum_{w \in \Gamma(v) \setminus \Set{ x }} \delta'(u, w) \leq \delta'(u, v) - 1 + \sum_{w \in \Gamma(v) \setminus \Set{ x }} \delta'(u, v) = \\
= deg(v) \delta'(u, v) - 1 < deg(v)\delta'(u, v) \\
\implies \boxed{ \delta(u, v) \text{ is even} \impliedby \sum_{W \in \Gamma(v)} \delta'(u, w) \geq deg(v)\delta'(u, v) } \\
}
$$
#### Putting it all together
$$
\displaylines{
\text{With the claim proved, if we can effciently compute } deg(v)\delta'(u, v) \text{ and } \sum_{w \in \Gamma(v)}\delta'(u, w) \\
\text{Then we can efficiently determine parity of } \delta(u, v) \\
\\
\text{Computing } deg(v) \text{ can be done in } O(\abs{V}^{2}) \text{ by scanning } A \\
\\
\text{Let us now prove that we can compute } \sum_{w \in \Gamma(v)} \delta'(u, w) \text{ in } O(\abs{V}^{\omega}) \text{ using FMM} \\
\text{Proof:} \\
\text{Let } M = \Delta'A \text{ where matrix multiplication is not BMM} \\
\text{Then } M_{u,v} = \sum_{w \in \Gamma(v)} \delta'(u, w) \\
M_{u,v} = \sum_{w \in V} \delta'(u, w)A_{w,v} = \sbs{
A_{w,v} = 1 \iff w \in \Gamma(v) \\
} = \sum_{w \in \Gamma(v)} \delta'(u, w) \\
\\
\text{The Seidel's algorithm is then:} \\
\begin{align}
 & Seidel(A): \\
1. & \quad \text{if } A = 1 - I: \\
2. & \qquad \text{return } A \\
3. & \quad \text{else}: \\
4. & \qquad \Delta' \leftarrow Seidel(A^{2} \lor A) \\
5. & \qquad M \leftarrow \Delta' \cdot A \\
6. & \qquad \text{for } u, v \in V: \\
7. & \qquad \quad \text{if } M_{u,v} < deg(v)\delta'(u, v): \\
8. & \qquad \qquad \delta(u, v) = 2\delta'(u, v) - 1 \\
9. & \qquad \quad \text{else}: \\
10. & \qquad \qquad \delta(u, v) = 2\delta'(u, v) \\
11. & \qquad \text{return } \Delta \\
\end{align} \\
\\
\text{The runtime of this algorithm is then:} \\
\text{Let } d = \max_{u,v \in V}\lrc{\delta(u,v)} \\
\text{Then, after } \ceil{\log d} \text{ recursive steps, all paths of length } 2^{\ceil{\log d}} \geq d \text{ are covered} \\
\text{Cost of eahc recursion step is } O(\abs{V}^{2} + \abs{V}^{\omega}) \\
\implies \text{Total runtime is } O(\abs{V}^{\omega}\log d) \\
}
$$
