---
{"publish":true,"created":"26/10/25, 14:10","modified":"2025-11-21T21:10:24.762+02:00","tags":["Academia","Practice","Discrete-structures"],"cssclasses":""}
---

## Relations
$$
\displaylines{
R \subseteq A \times A \\
\begin{array}{}
\text{Reflexive: } & \forall x \in A: (x, x) \in R \\
\text{Symmetric: } & \forall x, y \in A: (x, y) \in R \implies (y, x) \in R \\
\text{Anti-symmetric: } & \forall x, y \in A: (x, y), (y, x) \in R \implies x = y \\
\text{Transitive: } & \forall x, y, z \in A: (x, y), (y, z) \in R \implies (x, z) \in R \\
\end{array} \\
}
$$
- Equivalence relation - reflexive, symmetric, transitive
- Partial order - reflexive, anti-symmetric, transitive
- Full order - partial order and $\forall a, b \in A: (a, b) \in R \text{ or } (b, a) \in R$
Examples or orders include $\leq, \subseteq$

## Function
$$
\displaylines{
f \subseteq A \times B \\
\text{Denoted } f : A \to B \\
\text{Complete: } \forall a \in A \exists b \in B: (a, b) \in f \\
\text{To-one: } \forall a \in A, b_{1}, b_{2} \in B: (a, b_{1}), (a, b_{2}) \in f \implies b_{1} = b_{2} \\
}
$$
- Injective - $\forall a_{1}, a_{2} \in A: f(a_{1}) = f(a_{2}) \implies a_{1} = a_{2}$
- Surjective - $\forall b \in B: \exists a \in A: f(a) = b$
- Bijective - injective and surjective
---
$$
\displaylines{
f : P(A) \to P(A) \\
f(B) = A \setminus B \\
U = A \implies f(B) = \overline{B} \\
\implies f \text{ is bijective} \\
}
$$
---
## Undirected graph
$$
\displaylines{
\text{Graph } G = (V, E) \\
V \text{ is a set of vertices} \\
E \subseteq V \times V \text{ is a set of edges} \\
\Set{ u, v } \text{ is one undirected edge} \\
}
$$
## Directed graph
$$
\displaylines{
\text{Graph } G = (V, E) \\
V \text{ is a set of vertices} \\
E \subseteq V \times V \text{ is a set of edges} \\
(u, v) \text{ is one directed graph} \\
}
$$
## Multi-graph
$$
\displaylines{
\text{Graph } G = (V, E) \\
V \text{ is a set of vertices} \\
E \subseteq V \times V \text{ is a multi-set of edges} \\
}
$$
---
## Clique #definition 
$$
\displaylines{
\text{Clique is a full graph, i.e. every vertice is connected to all others} \\
\text{Denoted } K_{n} \\
}
$$
---
## Graph traversals
- Walk - edges and vertices can be reused
- Path (or trail) - edges cannot be reused, vertices can be reused
- Simple path (or path if using trail terminology) - edges and vertices cannot be reused
---
## Connectivity
- Connected graph is a graph with a path between any two vertices
- Strongly connected graph is a directed graph with a directed path between any two vertices in both directions
- Weakly connected graph is a "not strongly connected" directed graph
- Graph diameter is the length of a largest path out of the shortest paths between any two vertices
---
