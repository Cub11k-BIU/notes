---
{"publish":true,"created":"10/02/26, 16:42","modified":"2026-02-10T17:16:07.787+02:00","tags":["Academia","#Practice","Algorithms-1"],"cssclasses":""}
---

# Transitive closure
## Using BMM to compute transitive closure
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a directed unweighted graph} \\
\text{Then } A \text{ its adjacency matrix is a boolean matrix} \\
\\
\text{Using BMM, } A^{k} \text{ represents all paths of length exactly } k \text{ between vertices of } G \\
\\
\text{Expanding on this property, matrix } (A \lor I)^{k} \text{ represents all paths of length at most } k \\
(A \lor I)^{k} = A^{k} \lor A^{k-1} \lor \dots \lor A \lor I \\
\\
\text{The longest simple path in } G \text{ can be of length } \abs{V}-1 \\
\text{This means, that computing } (A \lor I)^{\abs{V}-1} \text{ is equivalent to computing transitive closure} \\
\text{Using fast power raising and FMM allows us to compute transitive closure} \\
\text{in } O(f(\abs{V})\log \abs{V}) \text{ time} \\
\text{Where } f(\abs{V}) \text{ is the time to multiply two matrices of size } \abs{V} \times \abs{V} \\
}
$$
Can we improve this result? Yes!
While we cannot remove matrix multiplication, we can remove logarithmic factor
$$
\displaylines{
\text{Let us first convert } G \text{ into a DAG by computing SCCs} \\
\text{Then, let us sort } V \text{ topologically} \\
\text{This makes } A \text{ upper-triangular} \\
\text{Assume } \abs{V} = 2^{k}, \text{ otherwise add at most } \abs{V}-1 \text{ dummy vertices} \\
\\
\text{Let } A \lor I = \begin{pmatrix}
X & Y \\
0 & Z \\
\end{pmatrix} \\
\text{Transitive closure } (A \lor I)^{*} \text{ is then } \begin{pmatrix}
X^{*} & X^{*}YZ^{*} \\
0 & Y^{*} \\
\end{pmatrix} \\
X \text{ represents all edges within the first half of vertices } V_{1} \\
Z \text{ represents all edges within the second half of vertices } V_{2} \\
Y \text{ represents all edges from } V_{1} \text{ to } V_{2} \\
\text{This means that transitive closure of } Y \text{ is simply edges from transitive closure of } X \\
\text{to transitive closure of } Z, \text{ which gives us } X^{*}YZ^{*} \\
\\
\text{Computing } (A \lor I)^{*} \text{ is then done in} \\
T(\abs{V}) = 2T\left( \frac{\abs{V}}{2} \right) + 2f\left( \frac{\abs{V}}{2} \right) \\
f\left( \frac{\abs{V}}{2} \right) = \Omega(\abs{V}^{2}) \\
\implies T(\abs{V}) \in O\left( f\left( \frac{\abs{V}}{2} \right) \right) = O(\abs{V}^{\omega}) \\
}
$$
## A* heuristics
### Perfect potential
$$
\displaylines{
\forall v \in V: p(v) = \delta(v, t) \\
\\
\text{For all vertices $u$ on the shortest path from } s \text{ to } t \\
\hat{\delta}(s, u) = \delta(s, u) + p(u) - p(s) = \delta(s, t) - \delta(s, t) = 0 \\
\text{For all vertices $v$ not on the shortest path} \\
\hat{\delta}(s, v) = \delta(s, v) + p(v) - p(s) = \delta(s, v) + \delta(v, t) - \delta(s, t) \geq 0 \\
\\
\text{This means that Dijkstra's algorithm will never visit any vertex } v \text{ before arriving to } t \\
\text{Which is the best case scenario} \\
}
$$
### Admissible potential
$$
\displaylines{
\forall v \in V: p(v) \leq \delta(v, t) \\
\\
\text{Let } v \text{ be a vertex on the shortest path from } s \text{ to } t \\
\implies \hat{\delta}(s, v) = \delta(s, v) + p(v) - p(s) \leq \delta(s, v) + \delta(v, t) - p(s) = \delta(s, t) - p(s) \\
\text{Let } u \text{ be a vertex not on the shortest path from } s \text{ to } t \text{ such that } \delta(s, u) + p(u) > \delta(s, t) \\
\implies \hat{\delta}(s, u) = \delta(s, u) + p(u) - p(s) > \delta(s, t) - p(s) \\
\\
\implies \text{Every vertex } v \text{ will be visited before any vertex} \\
u \text{ such that } \delta(s, u) + p(u) > \delta(s, t) \\
\text{This does not eliminate all irrelevant vertices, but does eliminate a lot of them} \\
}
$$
### Bounded error potential
$$
\displaylines{
\forall v \in V: p(v) \leq 2\delta(v, t) \\
\\
\text{Let } v \text{ be a vertex on the shortest path from } s \text{ to } t \\
\implies \hat{\delta}(s, v) = \delta(s, v) + p(v) - p(s) \leq \delta(s, v) + 2\delta(v, t) - p(s) = \\
= \delta(s, t) + \delta(v, t) - p(s) \leq 2\delta(s, t) - p(s) \\
\text{Let } u \text{ be a vertex not on the shortest path such that } \delta(s, u) + p(u) > 2\delta(s, t) \\
\implies \hat{\delta}(s, u) = \delta(s, u) + p(u) - p(s) > 2\delta(s, t) - p(s) \\
\\
\implies \text{Every vertex } v \text{ will be visited before any vertex } u \\
\text{This does not eliminate all irrelevant vertices, but does eliminate some of them} \\
}
$$
