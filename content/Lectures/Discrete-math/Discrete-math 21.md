---
{"publish":true,"created":"14/01/25, 14:01","modified":"2025-11-21T21:10:14.061+02:00","tags":["Academia","Lecture","Discrete-math"],"cssclasses":""}
---

# Discrete-math 21
## Graph #definition 
$$
\displaylines{
\text{Graph is a set of points and lines} \\
\text{Graph is an ordered pair of set of vertices and set of edges} \\
G = (V, E) \\
E \subseteq \Set{ \Set{ v, u } | v, u \in V, v \neq u } \\
E \text{ is a set of unordered pairs of distinct vertices} \\
\text{In this case, } G \text{ is a simple undirected graph} \\
}
$$
---
## Adjacency #definition 
$$
\displaylines{
\text{Vertices } u, v \in V \text{ are called adjacent if they have a common edge} \\
\text{(if they are connected by some edge $e \in E$)} \\
e \text{ is then called incident on } u ,v \\
}
$$
---
$$
\displaylines{
\text{What is the max number of edges in a simple graph with } n \text{ vertices} \\
\binom{n}{2} = \frac{n!}{(n-2)!2!} = \frac{n(n-1)}{2} \\
}
$$
$$
\displaylines{
\text{What is the number of simple graphs with } n \text{ vectices?} \\
2^{\binom{n}{2}} = 2^{n(n-1)/2} \\
}
$$
---
$$
\displaylines{
\text{Let } G = (V, E), v \in V \\
}
$$
## Neighborhood of a vertex and of a set of vertices #definition 
$$
\displaylines{
\text{Neighborhood of vertice } v \text{ is a set of vertices which are adjacent to } v \\
\Gamma(v) = \Set{ u \in V | \Set{ u, v } \in E } \\
\text{Let } S \subseteq V \\
\text{Neighborhood of set of vertices } S \text{ is a set of vertices} \\
\text{which are adjacent to at least one of vertices in } S \\
\Gamma(S) = \Set{ u \in V | \exists v \in S: \Set{ u, v } \in E } \\
}
$$
## Degree of vertex #definition 
$$
\displaylines{
\text{Degree of vertice } v \text{ is a size of neighborhood of } v \\
deg(v) = \lvert \Gamma(v) \rvert \\
}
$$
---
## Hand-shaking lemma for graphs #lemma 
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a simple graph} \\
\text{Then } \sum_{v \in V} deg(v) = 2 \cdot \lvert E \rvert \\
\\
\text{Proof:} \\
\text{Each edge is counted twice in } \sum_{v \in V} deg(v) \\
\text{Each edge is counted twice in } 2 \cdot \lvert E \rvert \\
\implies \boxed{\sum_{v \in V} deg(v) = 2 \cdot \lvert E \rvert} \\
}
$$
### Corollary of this lemma
$$
\displaylines{
\text{In any simple graph, number of vertices with odd degree is even} \\
\\
\text{Proof:} \\
\text{Let } ODD = \Set{ v \in V | deg(v)  \text{ is odd} } \\
\text{Let } EVEN = \Set{ v \in V | deg(v) \text{ is even} } \\
ODD \cup EVEN = V, ODD \cap EVEN = \emptyset \\
\text{Let } \lvert ODD \rvert \text{ be odd} \\
\text{Then } 2 \cdot \lvert E \rvert = \sum_{v \in V} deg(v) = \sum_{v \in ODD} deg(v) + \sum_{v \in EVEN} deg(v) \\
\text{Sum of odd number of odd numbers is odd} \\
\text{Sum of even numbers is even} \\
\implies \begin{array}{}
\sum_{v \in ODD} deg(v) \text{ is odd} \\
\sum_{v \in EVEN} deg(v) \text{ is even} \\
\end{array} \implies \sum_{v \in ODD} deg(v) + \sum_{v \in EVEN} deg(v) = \sum_{v \in V} deg(v) \rvert \text{ is odd} \\
\implies 2 \cdot \lvert E \rvert \text{ is odd} - \text{Contradiction!} \\
\implies \boxed{\lvert ODD \rvert \text{ is even}} \\
}
$$
---
## Equal degree vertices #lemma 
$$
\displaylines{
\text{In each simple graph } G = (V, E) \\
\text{with at least 2 vertices there are two vertices } u \neq v \in V: deg(u) = deg(v) \\
\\
\text{Proof:} \\
\text{Case 1. There is a vertex } v: deg(v) = n-1 \\
\text{Then there is no vertex } u: deg(u) = 0 \\
\implies \text{Possible degrees are from } 1 \text{ to } n-1 \\
\text{The number of vertices is } n \text{, the number of different degrees is } n-1 \\
\implies \boxed{\text{By the pigeonhole principle there is at least two vertices with the same degree}} \\
\text{Case 2. There is no vertex } v: deg(v) = n-1 \\
\implies \text{Possible degrees are from } 0 \text{ to } n-2 \\
\text{The number of vertices is } n \text{, the number of different degrees is } n-1 \\
\implies \boxed{\text{By the pigeonhole principle there is at least two vertices with the same degree}} \\
}
$$
---
## Paths #definition 
$$
\displaylines{
\text{Let } G = (V, E) \\
\text{Path is a sequence of vertices } (v_{1}, v_{2}, \dots, v_{k+1}) \text{ such that } \forall i \in [1, k]: \Set{ v_{i}, v_{i+1} } \in E \\
\text{Path is called simple if no vertices appear in the path more than once} \\
\text{Length of the path } (v_{1}, v_{2}, \dots, v_{k+1}) \text{ is the number of edges in this path, which is } k \\
}
$$
## Cycle #definition 
$$
\displaylines{
\text{Path } (v_{1}, v_{2}, \dots, v_{k+1}) \text{ is called a cycle if } v_{1} = v_{k+1} \\
\text{Cycle is called simple if no vertices except } v_{1}, v_{k+1} \text{ appear in the cycle more than once} \\
}
$$
## Distance #definition 
$$
\displaylines{
\text{Let } v, u \in V \\
\text{Distance from } v \text{ to } u \text{ is the length of the shortest path from } v \text{ to } u \\
d(v, u) \\
\text{If there is no path between vertices } v, u \in V \text{ then } d(v, u) = \infty \\
}
$$
---
## Diameter of graph #definition 
$$
\displaylines{
\text{Diameter of graph } G = (V, E) \\
\text{is a minimal distance between two distinct vertices of the graph} \\
diam(G) = \underset{ u, v \in V }{ max }(d(v, u)) \\
}
$$
---
## Diameter of "tight" graph #lemma 
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a simple graph such that,} \\
\forall v \in V: deg(v) \geq \frac{n-1}{2} \\
\text{Then } diam(G) \leq 2 \\
\\
\text{Proof:} \\
\text{Let } v, u \in V \\
\text{Case 1. } v = u \implies d(v, u) = 0 \implies d(v, u) \leq 2 \\
\text{Case 2. } \Set{ v, u } \in E \\
\implies d(v, u) = 1 \implies d(v, u) \leq 2 \\
\text{Case 3. } \Gamma(v) \cap \Gamma(u) \neq \emptyset \\
\exists w \in V: w \in \Gamma(v) \cap \Gamma(u) \implies \exists \Set{ w, v }, \Set{ w, u } \in E \\
\implies (v, w, u) \text{ is a path} \implies d(v, u) \leq 2 \\
\text{Case 4. } \Gamma(v) \cap \Gamma(u) = \emptyset \\
u \not\in \Gamma(v), u \not\in \Gamma(u) \\
v \not\in \Gamma(u), v \not\in \Gamma(v) \\
n = \lvert V \rvert \geq \underbrace{ \lvert \Gamma(v) \rvert }_{ \geq \frac{n-1}{2} } + \lvert \Set{ v } \rvert + \underbrace{ \lvert \Gamma(u) \rvert }_{ \geq \frac{n-1}{2} } + \lvert \Set{ u } \rvert \geq (n-1) + 2 = n + 1 \\
n \geq n+1 - \text{Contradiction!} \\
\implies \forall v, u \in V: d(v, u) \leq 2 \implies diam(G) \leq 2 \\
}
$$
---
