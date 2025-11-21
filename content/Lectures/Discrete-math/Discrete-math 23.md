---
{"publish":true,"created":"21/01/25, 14:01","modified":"2025-11-21T21:10:14.065+02:00","tags":["Academia","Lecture","Discrete-math"],"cssclasses":""}
---

# Discrete-math 23
## Forest #definition
$$
\displaylines{
\text{Acyclic graph is called a forest} \\
}
$$
## Tree #definition 
$$
\displaylines{
\text{Connected acyclic graph is called a tree} \\
}
$$
### Leaf #definition 
$$
\displaylines{
\text{Vertex of degree } 1 \text{ is called a leaf} \\
}
$$
---
## Leaves of a tree #lemma 
$$
\displaylines{
\text{Let } T \text{ be a tree with } n \geq 2 \text{ vertices} \\
\text{Then } T \text{ has at least two leaves } \\
\\
\text{Proof:} \\
\text{Let } P \text{ be the longest simple path in } T \\
T \text{ has at least one edge} \implies \text{Length of this path is at least } 1 \\
P = (v_{0}, v_{1}, \dots, v_{k}), v_{0} \neq v_{1} \\
\text{Suppose by contradiction } deg(v_{0}) > 1 \\
\text{Then } v_{0} \text{ has at least one more neighbor, let's call it } v' \\
T \text{ has no cycles} \implies v' \text{ is not in } P \implies (v', v_{0}, \dots, v_{k}) \text{ is longer than } P - \text{ Contradiction!} \\
\text{The same can be done for } v_{k} \\
\implies deg(v_{0}) = deg(v_{k}) = 1 \implies v_{0}, v_{k} \text{ are leaves of } T \\
}
$$
---
## Paths between vertices #lemma 
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a simple graph} \\
\text{Let } v, u \in V \\
\text{Then there is a path from } v \text{ to } u \text{ iff there is a simple path from } v \text{ to } u \\
\\
\text{Proof:} \\
\text{One direction is trivial, a simple path is a path and we are done} \\
\text{Let } \exists P(v, u) = (v_{0}, v_{1}, \dots, v_{k}), v = v_{0}, u = v_{k} \\
\text{Let } w \text{ appear twice in the path, e.g. } v_{i} = w = v_{j}, i < j \\
\text{Then } \exists P'(v, u) = (v_{0}, v_{1}, \dots, v_{i}, v_{j+1}, \dots, v_{k}) \\
\text{This process can be repeated until there are no repeating vertices in the path} \\
\text{Namely, until we get a simple path} \\
}
$$
---
## Properties of the tree #theorem 
$$
\displaylines{
G = (V, E) \\
1. \quad G \text{ is a tree} \\
2. \quad G \text{ is maximal acyclic graph} \\
3. \quad \forall v, u \in V: \exists! P(v, u) \text{ that is simple} \\
4. \quad G \text{ is a minimal connected graph} \\
\text{Prove: } 1 \iff 2 \iff 3 \iff 4 \\
\\
\text{Proof for } 1 \implies 2 \\
\text{Let } G \text{ be a tree} \\
G \text{ is connected} \implies \text{It has at least } n-1 \text{ edges} \\
\text{Adding an edge would make } m \geq n \text{ which means that } G \cup \Set{ e } \text{ will have a cycle} \\
\implies G \text{ is a maximal acyclic graph} \\
\\
\text{Proof for } 2 \implies 3 \\
\text{Let } G \text{ be a maximal acyclic graph} \\
\text{Let } v, u \in V \\
\text{Suppose that there is no path between } v \text{ and } u \\
\text{Then adding edge } \Set{ v, u } \text{ will not create a cycle} - \text{Contradiction!} \\
\implies \exists P(v, u) \implies \exists P(v, u) \text{ that is simple} \\
\text{Suppose that there are two paths from } v \text{ to } u \\
(v_{0}, v_{1}, \dots, v_{k}) \\
(u_{0}, u_{1}, \dots, u_{k}) \\
v_{0} = u_{k} = v \\
u_{0} = v_{k} = u \\
\implies \exists P(v, v): (v_{0}, v_{1}, \dots, v_{k}, u_{1}, \dots, u_{k}) \text{ which is a cycle} - \text{Contradiction!} \\
\implies \exists! P(v, u) \text{ that is simple} \\
\\
\text{Proof for } 3 \implies 4 \\
\text{Let } \exists! P(v, u) \text{ that is simple} \\
\implies G \text{ is connected} \\
\text{Suppose } \exists \Set{ v, u } \in E: G \setminus \Set{ \Set{ v, u } } \text{ is connected} \\
\implies \exists P'(v, u) \neq P(v, u) \\
\implies \exists \text{Two simple paths from } v \text{ to } u - \text{Contradiction!} \\
\implies G \text{ is a minimal connected graph} \\
\\
\text{Proof for } 4 \implies 1 \\
\text{Let } G \text{ be a minimal connected graph} \\
\implies G \text{ is connected} \\
\text{Suppose } G \text{ has a cycle} \\
\text{Removing any edge from this cycle would still leave } G \text{ connected} - \text{Contradiction!} \\
\implies G \text{ has no cycles} \implies G \text{ is a tree} \\
1 \implies 2 \implies 3 \implies 4 \implies 1 \implies \boxed{ 1 \iff 2 \iff 3 \iff 4 } \\
}
$$
---
## Number of edges in a tree #theorem 
$$
\displaylines{
G = (V, E) \\
1. \quad G \text{ is a tree} \\
2. \quad G \text{ is acyclic, } \lvert E \rvert = n - 1 \\
3. \quad G \text{ is connected, } \lvert E \rvert = n - 1 \\
\text{Prove: } 1 \iff 2 \iff 3 \\
\\
\text{Proof:} \\
\text{Let } G \text{ be a tree} \\
G \text{ is a tree} \implies G \text{ is connected and acyclic} \implies \lvert E \rvert \geq n - 1 \\
\text{If } \lvert E \rvert \geq n \text{ then } G \text{ has a cycle} \implies \lvert E \rvert < n \\
\implies \lvert E \rvert = n - 1 \implies \boxed{1 \implies 2}, \boxed{1 \implies 3} \\
\text{Let } G \text{ be connected}, \lvert E \rvert = n - 1 \\
\text{Removing any edge will make the graph disconnected} \\
\implies G \text{ is a minimal connected graph} \implies G \text{ is a tree} \implies \boxed{3 \implies 1} \\
\text{Let } G \text{ be acyclic}, \lvert E \rvert = n - 1 \\
\text{Suppose } G \text{ is not connected} \\
\implies \text{\# of components is at least } 2 \\
\text{Let } G_{v}, G_{u} \text{ be two connected components of } G \\
\implies \text{There is no path from } v \text{ to } u \\
\implies \text{Adding edge } \Set{ v, u } \text{ will make number of edges equal to } n \text{ and not create a cycle} \\
\implies G \cup \Set{ \Set{ v, u } } \text{ has no cycle} - \text{Contradiction!} \\
\implies G \text{ is connected} \implies G \text{ is a tree} \implies \boxed{2 \implies 1} \\
1 \iff 2 \land 2 \iff 3 \implies \boxed{1 \iff 2 \iff 3} \\
}
$$
---
