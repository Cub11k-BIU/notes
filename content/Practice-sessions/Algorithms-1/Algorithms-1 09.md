---
{"publish":true,"created":"11/02/26, 16:12","modified":"2026-03-24T14:58:08.268+02:00","tags":["Academia","#Practice","Algorithms-1"],"cssclasses":""}
---

## Reporting triangles in a graph
The goal is to return all triangles in a graph, that is, all triplets $v, u, w$ such that $\Set{ v, u }, \Set{ u, w }, \Set{ w, v } \in E$

The first algorithm to achieve this is a simple triple nested loop, with runtime of $O(\abs{V}^{3})$

The second algorithm will prove that this simple iteration is not the most efficient. The idea behind it is that first algorithm completely ignores number of edges and will always iterate through all vertices
$$
\displaylines{
\begin{align}
 & ALG_{2}(G = (V, E)): \\
1. & \quad \text{for } e = \Set{ u, v } \in E: \\
2. & \qquad \text{for } w \in V \setminus \Set{ u, v }: \\
3. & \qquad \quad \text{if } \Set{ u, w }, \Set{ w, v } \in E: \\
4. & \qquad \qquad \text{yield } (u, v, w) \\
\end{align} \\
}
$$
Note that order of loops doesn't matter, we can first iterate over vertices or over edges
Runtime of this algorithm is $O(\abs{V}\abs{E})$ which is in the worst case $O(\abs{V}^{3})$

The third algorithm relies on the fact that triangles with edge $\Set{ u, v }$ can only be formed with a third vertex being a neighbor of both $u, v$
$$
\displaylines{
\begin{align}
 & ALG_{3}(G = (V, E)): \\
1. & \quad \text{for } e = \Set{ u, v } \in E: \\
2. & \qquad S \leftarrow \Gamma(u) \cap \Gamma(v) \\
3. & \qquad \text{for } w \in S: \\
4. & \qquad \quad \text{yield } (u, v, w) \\
\end{align}
}
$$
Note that if the graph is represented via adjacency lists and vertices in all lists are sorted by some global order, it is possible to compute $\Gamma(u) \cap \Gamma(v)$ in $O(deg(u) + deg(v))$ time
This gives us a runtime of $O\left( \sum_{\Set{ u, v } \in E} (deg(u) + deg(v)) \right)$
### Lower bound
Note that in the worst case, the graph contains all $\binom{\abs{V}}{3}$ triangles, and in this case runtime of all three algorithms is $\Omega(\abs{V}^{3})$
That is, this lower bound is present if we consider the number of triangles as a function of $\abs{V}$ only. What if we consider it as a function of two parameters, $\abs{V}, \abs{E}$

One of the cases when all $\binom{\abs{V}}{3}$ triangles are present is a clique, and the following is true: $\abs{E} = \binom{\abs{V}}{2} = O(\abs{V}^{2})$
This gives us a lower bound of $\Omega(\abs{E}^{1.5})$ or $\Omega(\abs{V} \cdot \abs{E})$
In cases where $\abs{E} \ll \abs{V}^{2}$ it is possible to obtain a runtime that is much better than $O(\abs{V}^{3})$, in particular $O(\abs{V} \cdot \abs{E})$

Let us partition vertices of the graph into two categories:
$$
\displaylines{
V = L \cup H \\
\text{Light vertices: } L = \Set{ v \in V \mid deg(v) \leq \sqrt{ \abs{E} } } \\
\text{Heavy vertices: } H = \Set{ v \in V \mid deg(v) > \sqrt{ \abs{E} } } \\
\\
\abs{H} \cdot \sqrt{ \abs{E} } < \sum_{v \in H} deg(H) \leq \sum_{v \in V} deg(v) = 2\abs{E} \\
\implies \abs{H} < \frac{2\abs{E}}{\sqrt{ \abs{E} }} = 2\sqrt{ \abs{E} } \\
\\
\text{Let } E_{L} = \Set{ \Set{ u, v } \in E \mid u, v \in L } \\
}
$$
Each triangle can than be classified as
- Light, if it contains no heavy vertices
- Heavy, if it contains at least one heavy vertex

And the following algorithm is defined:
$$
\displaylines{
\begin{align}
 & ALG_{4}(G = (V, E)): \\
1. & \quad L \leftarrow \Set{ v \in V \mid deg(v) \leq \sqrt{ \abs{E} } } \\
2. & \quad H \leftarrow \Set{ v \in V \mid deg(v) > \sqrt{ \abs{E} } } \\
3. & \quad \text{for } w \in H: \\
4. & \qquad \text{for } \Set{ u, v } \in E: \\
5. & \qquad \quad \text{if } \Set{ u, w }, \Set{ w, v } \in E: \\
6. & \qquad \qquad \text{yield } (u, v, w) \\
7. & \quad \text{for } (u, v) \in E: \\
8. & \qquad \text{if } u, v \in L: \\
9. & \qquad \quad S \leftarrow \Gamma(v) \cap \Gamma(u) \\
10. & \qquad \quad \text{for } w \in S: \\
11. & \qquad \qquad \text{yield } (u, v, w) \\
\end{align} \\
\text{The algorithm uses } ALG_{2} \text{ on heavy vertices and } ALG_{3} \text{ on light edges} \\
\text{The runtime of this algorithm is:} \\
O\left( \abs{H} \cdot \abs{E} + \sum_{\Set{ u, v } \in E_{L}} (deg(u) + deg(v)) \right) \\
\abs{H} \cdot \abs{E} \leq 2\abs{E}^{1.5} \\
\sum_{\Set{ u, v } \in E_{L}} (deg(u) + deg(v)) \leq \sum_{\Set{ u, v } \in E_{L}} 2\sqrt{ \abs{E} } \leq \abs{E} \cdot 2\sqrt{ \abs{E} } = 2\abs{E}^{1.5} \\
\implies \text{Total runtime is } O(\abs{E}^{1.5}) \\
\text{which is much more efficient than } O(\abs{V}^{3}) \text{ on sparse graphs} \\
\text{and as eficient as } O(\abs{V}^{3}) \text{ on dense graphs} \\
}
$$
---
## Hamming distance
As seen in previous practice sessions, computing Hamming distance on small alphabets is most efficient using FFT polynomial multiplication.

However, if the alphabet is large, it is better to use another approach.
First option is to consider texts where each character appears at most $c$ times, we can count the number of matches using the following algorithm:
$$
\displaylines{
\begin{align}
 & ALG_{5}(T, P): \\
1. & \quad \text{Initialize array } I \text{ of empty linked lists for each } \sigma \in \Sigma \\
2. & \quad \text{for } i \in [1, m]: \\
3. & \qquad I[P[i]].append(i) \\
4. & \quad \text{Initialize array } M \text{ of size } n - m + 1 \\
5. & \quad \text{for } j \in [1, n]: \\
6. & \qquad \text{for } i \in I[T[j]]: \\
7. & \qquad \quad M[j-i+1] \leftarrow M[j-i+1] + 1 \\
8. & \quad \text{return } M \\
\end{align} \\
\\
\text{If } c \ll m \text{ then the runtime is } O(nc), \text{ otherwise it is } O(nm) \\
\text{which is worse than } FFT \text{ on small alphabets} \\
}
$$
Note that it is possible to apply light-heavy classification to the characters in $\Sigma$
$$
\displaylines{
\text{Let } c \text{ be a parameter} \\
\text{Let } \Sigma_{L} = \Set{ \sigma \in \Sigma \mid \#\sigma_{P} \leq c } \\
\text{Let } \Sigma_{H} = \Set{ \sigma \in \Sigma \mid \#\sigma_{P} > c } \\
\\
\text{Similarly to graphs, } \abs{\Sigma_{H}} \leq \frac{m}{c} \\
\\
\text{Now, we can apply } FFT \text{ to all characters in } \Sigma_{H} \\
\text{and } ALG_{5} \text{ to characters in } \Sigma_{L} \\
\text{The total runtime then comes to:} \\
O(\abs{\Sigma_{H}} \cdot n\log m + nc) = O\left( \frac{nm}{c}\log m + c \right) = O\left( n \cdot \max\lrc{\frac{m\log m}{c}, c} \right) \\
m\log m = c^{2} \implies c = \sqrt{ m\log m } \\
\implies \text{Optimal runtime is } O(n\sqrt{ m\log m }) \\
}
$$
