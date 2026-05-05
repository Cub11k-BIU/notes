---
{"publish":true,"created":"02/12/25, 13:07","modified":"2026-03-24T14:59:54.881+02:00","tags":["Academia","Lecture","Algorithms-1"],"cssclasses":""}
---

# Flow networks, maximum flow problem
### Input
$$
\displaylines{
G = (V, E) \text{ directed graph} \\
c: V^{2} \to \mathbb{R}^{+} \cup \Set{ 0 } \\
\epsilon = \Set{ (u, v) | c(u, v) > 0 } \\
s, t \in V: s \text{ is the source and } t \text{ is the sink} \\
\forall (u, v) \not\in E: c(u, v) = 0 \\
}
$$
### Output
$$
\displaylines{
f: V^{2} \to \mathbb{R}^{+} \cup \Set{ 0 } \\
\\
\text{Some important properties of } f: \\ 
\text{Non-negative: } \forall u, v \in E: 0 \leq f(u, v) \leq c(u, v) \\
\text{In-Out: } \forall v \in V \setminus \Set{ s, t }: \sum_{u \in V} f(u, v) = \sum_{u \in V} f(v, u) \\
\text{In other words, in all intermediate vertices, the incoming and outgoing flow are equal} \\
\text{The value of the flow is denoted as } \abs{f} = \sum_{v \in V} f(s, v) - \sum_{v \in V} f(v, s) \\
\\
\text{An alternative definition of a flow function is } f: V^{2} \to \mathbb{R} \\
\text{Capacity: } \forall u, v \in V: f(u, v) \leq c(u, v) \\
\text{Symmetry: } \forall u, v \in V: f(u, v) = -f(v, u) \\
\text{In-Out: } \forall v \in V \setminus \Set{ s, t }: \sum_{u \in V} f(v, u) = 0 \\
\text{The value of the flow is then denoted as } \abs{f} = \sum_{v \in V} f(s, v) \\
}
$$
Two definitions are equivalent, that is, there exists a flow by the first definition of value $N$ iff there exists a flow by the second definition of value $N$
#### Flow between subsets #definition 
$$
\displaylines{
\text{Let } X, Y \subseteq V \\
f(X, Y) = \sum_{x \in X} \sum_{y \in Y} f(x, y) \\
\\
\text{Properties:} \\
\forall X \subseteq V: f(X, X) = 0 \\
\forall X, Y \subseteq V: f(X, Y) = -f(Y, X) \\
\forall X, Y, Z \subseteq V: X \cap Y = \emptyset \implies \begin{array}{}
f(X \cup Y, Z) = f(X, Z) + f(Y, Z) \\
f(Z, X \cup Y) = f(Z, X) + f(Z, Y) \\
\end{array} \\
}
$$
#### Flow value via flow between subsets #lemma 
$$
\displaylines{
\abs{f} = f(V, \Set{ t }) \\
\\
\text{Proof:} \\
f(V, V) = f(\Set{ s }, V) + f(V \setminus \Set{ s }, V) \\
\text{By definition: } \abs{f} = f(\Set{ s }, V) = \underbrace{ f(V, V) }_{ = 0 } - f(V \setminus \Set{ s }, V) \\
\implies \abs{f} = -(f(V \setminus \Set{ s, t }, V) + f(\Set{ t }, V)) \\
f(V \setminus \Set{ s, t }, V) = \sum_{v \in V \setminus \Set{ s, t }} \underbrace{ \sum_{u \in V} f(v, u) }_{ = 0 } = 0 \\
\implies \abs{f} = -f(\Set{ t }, V) = f(V, \Set{ t }) \\
}
$$
#### $(s, t)$ Cut #definition 
$$
\displaylines{
\text{A cut is called } (s, t)\text{-cut iff } s \in S, t \in V \setminus S \\
\text{Cut is then denoted } C = (S, T) \\
}
$$
#### Flow in an $(s, t)$ cut #lemma 
$$
\displaylines{
\text{Let } (S, T) \text{ be an } (s, t)\text{-cut of } G \\
\text{Then } f(S, T) = \abs{f} \\
\\
\text{Proof:} \\
f(S, T) = f(S, V \setminus S) = f(S, V) - f(S, S) = f(S, V) = \\
= f(\Set{ s }, V) + f(S \setminus \Set{ s }, V) \\
f(S \setminus \Set{ s }, V) = \sum_{v \in S \setminus \Set{ s }}\underbrace{ \sum_{u \in V} f(v, u) }_{ = 0 } = 0 \\
\implies f(S, T) = f(\Set{ s }, V) = \abs{f} \\
}
$$
#### Capacity of a cut #definition 
$$
\displaylines{
\forall X, Y \subseteq V: c(X, Y) = \sum_{x \in X}\sum_{y \in Y}c(x, y) \\
\implies \forall S \subseteq V: c(S, V \setminus S) = \sum_{x \in S}\sum_{y \in V \setminus S}c(x, y) \\
}
$$
#### Upper bound on a flow in an $(s, t)$ cut #lemma 
$$
\displaylines{
f(S, T) \leq c(S, T) \\
\\
\text{Proof:} \\
f(S, T) = \sum_{v \in S} \sum_{u \in T} f(v, u) \leq \sum_{v \in S} \sum_{u \in T} c(v, u) = c(S, T) \\
}
$$
#### Upper bound of a maximum flow #lemma 
$$
\displaylines{
\forall f: \forall S, T = V \setminus S \subseteq V: f(S, T) \leq c(S, T) \\
\text{In particular, it is bounded by the capacity of a minimum } (s, t)\text{-cut} \\
\text{Max Flow} \leq \text{Min Cut} \\
}
$$
#### Saturated edge #definition 
$$
\displaylines{
f(u, v) = c(u, v) \implies (u, v) \in E \text{ is called saturated} \\
}
$$
#### Residual network #definition 
$$
\displaylines{
\text{Let } c_{f}: V^{2} \to \mathbb{R} \\
\forall u, v \in V: c_{f}(u, v) = c(u, v) - f(u, v) \\
\text{Let } E_{f} = \Set{ (u, v) | c_{f}(u, v) > 0 } \\
\text{Let } G_{f} = (V, E_{f}) \\
G_{f} \text{ is then a residual network of } f \\
}
$$
#### Augmenting path #definition 
$$
\displaylines{
\text{Let } f \text{ be a flow in } G \\
\text{Let } G_{f} \text{ be a residual network} \\
\text{A path in } G_{f} \text{ from } s \text{ to } t \text{ is called augmenting} \\
}
$$
#### Max-Flow Min-Cut #theorem 
$$
\displaylines{
\text{Let } f \text{ be a flow in } G \\
\begin{align}
1. & \quad f \text{ is a maximum flow in } G \\
2. & \quad G_{f} \text{ has no augmenting paths} \\
3. & \quad \abs{f} = c(S, T) \text{ for some } (s, t)\text{-cut in } G \\
\end{align} \\
\\
\text{Proof:} \\
\boxed{ 1 \implies 2 } \text{ Let } f \text{ be a maximum flow in } G \\
\text{Let by contradiction } G_{f} \text{ contains an augmenting path} \\
\text{Augmenting } f \text{ with } f_{p} \text{ will yield a larger flow} - \text{Contradiction!} \\
\implies G_{f} \text{ has no augmenting paths} \\
\boxed{ 2 \implies 3 } \text{ Let } G_{f} \text{ has no augmenting paths} \\
\text{Let } S = \Set{ v \in V | \exists p = s \leadsto v \in G_{f} }, T = V \setminus S \\
(S, T) \text{ is an } (s, t)\text{-cut of } G_{f} \\
\text{Let } u \in S, v \in T \\
c_{f}(u, v) = 0 \implies f(u, v) = c(u, v) \\
\implies \abs{f} = f(S, T) = \sum_{u \in S} \sum_{v \in T} f(u, v) = \sum_{u \in S} \sum_{v \in T} c(u, v) = c(S, T) \\
\boxed{ 3 \implies 1 } \text{ Let } \abs{f} = c(S, T) \\
\forall g: \abs{g} \leq c(S, T) \implies f \text{ is a maximum flow} \\
}
$$
#### Ford-Fulkerson algorithm
$$
\displaylines{
\begin{align}
 & Ford-Fulkerson(G = (V, E), s, t, c): \\
1. & \quad \text{for } \forall u, v \in V: \\
2. & \quad \quad f(u, v) = 0 \\
3. & \quad G_{f} \leftarrow G \\
4. & \quad c_{f} \leftarrow c \\
5. & \quad \text{while } \exists p = s \leadsto t \in G_{f}: \\
6. & \quad \quad c_{f}(p) = \min_{(u, v) \in p}\{c_{f}(u, v)\} \\
7. & \quad \quad \text{for } (u, v) \in p: \\
8. & \quad \quad \quad f(u, v) \leftarrow f(u, v) + c_{f}(p) \\
9. & \quad \quad \quad f(v, u) \leftarrow f(v, u) - c_{f}(p) \\
10. & \quad \quad \quad c_{f}(u, v) \leftarrow c_{f}(u, v) - c_{f}(p) \\
11. & \quad \quad \quad c_{f}(v, u) \leftarrow c_{f}(v, u) + c_{f}(p) \\
12. & \quad \quad \quad \text{update } E_{f} \\
13. & \quad \text{return } f \\
\end{align} \\
}
$$
If all capacities are integers, in each iteration of the while loop, the flow is increased by at least $1$
This means that there are at most $\abs{f^{*}}$ iterations where $f^{*}$ is the maximum flow
In each iteration, we can find a path using BFS/DFS in $O(V + E_{f}) = O(E)$
Note that for rational numbers, it is possible to multiply (and then divide) by a largest common denominator to obtain integer capacities once again.
For irrational numbers however, the algorithm is not guaranteed to converge to a maximum flow or even terminate.
