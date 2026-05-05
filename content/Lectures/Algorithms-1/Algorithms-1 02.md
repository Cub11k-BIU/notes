---
{"publish":true,"created":"04/11/25, 13:11","modified":"2026-03-24T14:59:54.838+02:00","tags":["Academia","Lecture","Algorithms-1"],"cssclasses":""}
---

#### Recap graph definitions, properties, etc.
---
## Spanning tree #definition 
Sub-graph tree that contains all vertices of the graph
## Minimum spanning tree problem #definition 
### Input
$$
\displaylines{
G = (V, E) \text{ undirected, connected, weighted} \\
w: E \to \mathbb{R} \text{ a weight function} \\
w(T) = \sum_{i=1}^{\abs{E}} w(e_{i}) \\
}
$$
### Output
$$
\displaylines{
E_{T} \text{ such that } T = (V, E_{T}) \text{ is the minimum spanning tree (by weight)} \\
}
$$
##### Greedy algorithm
- Make a local solution and continue recursively to a sub-problem without changing the solution
Binary search is a simple example of a greedy algorithm
Hoffman code is another, a more complex one
##### Dynamic programming solution
- Recursively analyze all possible options
#### Greedy choice property
Exists an optimal solution that includes that choice, i.e. each choice does not affect the possibility of getting an optimal solution
#### Cut, Cut-set #definition 
$$
\displaylines{
\text{Cut is a partition of a graph into two disjoint sets of vertices} \\
C = (S, V \setminus S) \text{ wherer } \emptyset \subset S \subset V \\
\text{Cut-set is then a set of edges that have to be cut from the graph } \\
E_{C} = \Set{ \Set{ u, v } \in E | u \in S \land v \in V \setminus S } \\
}
$$
#### Edge in a cut-set belongs to some MST #lemma 
$$
\displaylines{
\text{Let } C \text{ be a cut of } G \\
\text{Let } e \in E_{C} : \forall e' \in E_{C}: w(e) \leq w(e') \\
\text{Then } \exists T = (V, E_{T}) : e \in E_{T} \text{ and } T \text{ is a MST} \\
\\
\text{Proof:} \\
\text{Let } e \in E_{C} \\
\text{Let } T = (V, E_{T}) \text{ be a MST} \\
\text{Case 1. } e \in E_{T} \text{ and we're done} \\
\text{Case 2. } e \not\in E_{T} \\
\text{Let } p \text{ be a simple path } p(u, v) \text{ in } T \\
\text{Let } e' \in E_{C} \text{ such that it is a first edge in a path that belongs to } E_{C} \\
p(u, v) = p_{1} + e' + p_{2} \\
\text{Let } T' = (V, E_{T'}) = (V, E_{T} \setminus \Set{ e' } \cup \Set{ e }) \\
\text{Let us prove that } T' \text{ is also a MST} \\
\abs{E_{T}} = \abs{V}-1 \implies \abs{E_{T'}} = \abs{E_{T} \setminus \Set{ e' } \cup \Set{ e }} = \abs{E_{T}} + 1 - 1 = \abs{V} - 1 \\
\text{Let } x, y \in V \\
\text{Case 1. } e' \not\in p(x, y) \in T \implies p(x, y) \in T' \\
\text{Case 2. } e' \in p(x, y) \in T \\
\text{Let } p(x, y) = p_{x} + e' + p_{y} \\
\text{Let } p'(x, y) = p_{x} + p_{1}^{R} + e + p_{2}^{R} + p_{y} \\
p'(x, y) \in T' \implies T' \text{ is a tree} \implies T' \text{ is a spanning tree} \\
w(T') = w(T) \underbrace{ - w(e') + w(e) }_{ \leq 0 } \leq w(T) \implies T' \text{ is a MST} \\
}
$$
#### Edge collapse/contraction #definition 
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a multi-graph} \\
\text{Let } e \in E \\
G / e = (V / e, E / e) \\
V / e = V \setminus \Set{ u, v } \cup \Set{ uv } \\
f : V \to V / e \\
f(x) = \begin{cases}
uv & x \in \Set{ u, v } \\
x & x \in V \setminus \Set{ u, v } \\
\end{cases} \\
E / e = \Set{ \Set{ f(x), f(y) } | \Set{ x, y } \in E \setminus \Set{ \Set{ u, v } } } \\
}
$$
### Generic solution
$$
\displaylines{
\begin{align}
& MST-Generic(G = (V, E), w : E \to \mathbb{R}) : \\
1. & \quad E_{T} \leftarrow \emptyset \\
2. & \quad \text{while } \abs{V} > 1 : \\
3. & \quad \quad e \leftarrow \text{Min edge in a } C(G) \\
4. & \quad \quad E_{T} \leftarrow E_{T} \cup \Set{ e } \\
5. & \quad \quad G \leftarrow G / e \\
6. & \quad \text{return } E_{T} \\
\end{align}
}
$$
#### Correctness of MST-Generic #lemma 
$$
\displaylines{
\text{Let } e \text{ be a min edge in } C(G) \\
\text{Let } T = (V / e, E_{T}) \text{ be a MST of } G / e \\
\text{Then } T' = (V, E_{T'}) = (V, E_{T} \cup \Set{ e }) \text{ is a MST of } G \\
\\
\text{Proof:} \\
\abs{E_{T} \cup \Set{ e }} = \abs{E_{T}} + 1 = \abs{V / e} \\
\abs{V} = \abs{V / e} + 1 \implies \abs{E_{T}} = \abs{V} - 1 \\
\\
\text{Let } e = \Set{ u, v } \\
x, y = u, v \implies p(x, y) = (u, v) \in T' \\
\text{Let } x, y \in V \setminus \Set{ u, v } \\
\text{Let } p(x, y) \in T \\
\text{Case 1. } uv \not\in p(x, y) \in T \implies p(x, y) \in T' \\
\text{Case 2. } uv \in p(x, y) \in T \implies p(x, y) = p(x, uv) + p(uv, y) \in T \\
\implies p'(x, y) = p(x, u) + e + p(v, y) \in T' \\
\implies T' \text{ is connected} \implies T' \text{ is a tree} \implies  T' \text{ is a spanning tree of } G \\
\\
\text{Let } \hat{T} \text{ be a MST of } G : e \in E_{\hat{T}} \\
\text{Let by contradiction } w(\hat{T}) < w(T') \\
\text{Let } \hat{T}' = \hat{T} / e \\
\abs{E_{\hat{T}'}} = \abs{E_{\hat{T}}} - 1 = \abs{V} - 2 \implies \hat{T}' \text{ is a tree} \implies \hat{T}' \text{ is a minimum spanning tree of } G / e \\
w(\hat{T}') = w(\hat{T}) - w(e) < w(T') - w(e) = w(T) - \text{Contradiction!} \\
\implies \forall \text{ MST } \hat{T} \text{ of } G: e \in \hat{T}: w(\hat{T}) \geq w(T') \implies T' \text{ is a MST of } G \\
}
$$
### Prim's algorithm
$$
\displaylines{
\begin{align}
& MST-Prim(G=(V, E), w: E \to \mathbb{R}): \\
1. & \quad E_{T} \leftarrow \emptyset \\
2. & \quad \text{for } u \in V: \\
3. & \quad \quad u.key \leftarrow \infty \\
4. & \quad \quad u.src \leftarrow \text{null} \\
5. & \quad \text{Set } r.key \leftarrow 0 \text{ for random } r \in V \\
6. & \quad Q.init(V) \\
7. & \quad \text{while } \text{not } Q.isEmpty() : \\
8. & \quad \quad u \leftarrow Q.extractMin() \\
9. & \quad \quad \text{if } u.src \neq \text{null}: \\
10. & \quad \quad \quad E_{T} \leftarrow E_{T} \cup \Set{ \Set{ u.src, u } } \\
11. & \quad \quad \text{for } v \in \Gamma(u): \\
12. & \quad \quad \quad \text{if } v \in Q \text{ and } w(\Set{ u, v }) < u.key: \\
13. & \quad \quad \quad \quad v.key \leftarrow w(\Set{ u, v }) \\
14. & \quad \quad \quad \quad v.src \leftarrow u \\
15. & \quad \text{return } E_{T} \\
\end{align} \\
}
$$
Complexity of this algorithm is (using Fibonacci Heap):
- $O(n)$ for init
- $n$ times
	- extractMin - $O(\log n)$
- $m$ times
	- decreaseKey - $O(1)$ amortized
All in all, $O(n\log n + m)$
### Kruskal's algorithm
$$
\displaylines{
\begin{align}
& MST-Kruskal(G=(V, E), w: E \to \mathbb{R}): \\
1. & \quad E_{T} \leftarrow \emptyset \\
2. & \quad \text{for } u \in V: \\
3. & \quad \quad U.makeSet(u) \\
4. & \quad E.sort(w) \\
5. & \quad \text{for } \Set{ u, v } \in E : \\
6. & \quad \quad \text{if } U.find(u) \neq U.find(v): \\
7. & \quad \quad \quad E_{T} \leftarrow E_{T} \cup \Set{ \Set{ u, v } } \\
8. & \quad \quad \quad U.union(u, v) \\
9. & \quad \text{return } E_{T} \\
\end{align} \\
}
$$
Complexity of this algorithm is:
- $O(n)$ for initialization
- $O(m\log m)$ for sort (or something else), note that for many graphs $\frac{n}{2} \leq m \leq n^{2} \implies \log(m) = \Theta(\log n)$
- $O(m \cdot \alpha(n))$ for find and union
All in all, $O(\text{Sort E} + m \cdot \alpha(n)) \underbrace{ = }_{ \text{almost always} } O(\text{Sort E})$
