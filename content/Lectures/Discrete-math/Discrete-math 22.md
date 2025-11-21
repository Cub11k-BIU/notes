---
{"publish":true,"created":"20/01/25, 14:01","modified":"2025-11-21T21:10:14.058+02:00","tags":["Academia","Lecture","Discrete-math"],"cssclasses":""}
---

# Discrete-math 22
## Connected graph #definition 
$$
\displaylines{
\text{Simple graph } G = (V, E) \\
\text{Is called connected if } \forall u, v \in V: d(u, v) < \infty \iff diam(G) < \infty \\
\text{i.e. there is a path between any two vertices} \\
}
$$
## Subgraphs of a connected graph #lemma 
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a simple connected graph} \\
\text{Let } S \subset V, S \neq \emptyset \\
\text{Then } \exists x \in V \setminus S: x \in \Gamma(S) \\
\\
\text{Proof:} \\
S \neq \emptyset \implies \exists u \in S \\
S \subset V \implies \exists v \in V \setminus S \\
G \text{ is connected} \implies \text{exists a path from } u \text{ to } v \\
u = v_{1} \\
v = v_{k+1} \\
(v_{1}, v_{2}, v_{3}, \dots, v_{k}, v_{k+1}) \\
u \in S, v \not\in S \implies \exists i \in [1, k]: v_{i} \in S, v_{i+1} \not\in S \\
\text{Let } x = v_{i+1} \\
x \in V \implies x \in V \setminus S \\
v_{i} \in S \text{ and } \Set{ v_{i}, x } \in E \implies x \in \Gamma(S) \\
}
$$
---
## Properties of distance function #lemma 
$$
\displaylines{
d: V \times V \to \mathbb{N} \cup \Set{ 0 } \cup \Set{ \infty } \\
}
$$
### Metric #definition 
$$
\displaylines{
& \text{Let } u, v, w \in V \\
1. & d(u, v) \geq 0 \\
2. & d(u, v) = 0 \iff u = v \\
3. & d(u, v) = d(v, u) \\
4. & d(u, v) + d(v, w) \geq d(u, w) \\
\\
& \text{Any function that satisfies these properties} \\
& \text{is called a metric} \\
}
$$
---
## Relation on vertices #definition 
$$
\displaylines{
\text{Let relation } \sim \text{ on } V \\
\forall u, v \in V: u \sim v \iff d(u, v) < \infty \\
\text{This relation is:} \\
1. \quad \text{Reflexive: } v \sim v \\
2. \quad \text{Symmetric: } u \sim v \iff v \sim u \\
3. \quad \text{Transitive: } u \sim v \land v \sim w \implies u \sim w \\
\implies \sim \text{ is an equivalence relation} \\
\text{Let } u \in V \\
[u]_{\sim} = \Set{ v \in V | u \sim v } = \Set{ v \in V | d(u, v) < \infty } \\
}
$$
---
## Connected component #definition 
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a simple graph} \\
\text{Let } u \in V \\
\text{Connected component of } u \text{ is a sub-graph of } G, \\
\text{denoted as } G_{u} = ([u]_{\sim}, E_{u}) \\
\text{ where } E_{u} = \Set{ \Set{ x, y } | x, y \in [u]_{\sim} } \\
\\
{^{\displaystyle V}}\Big/{_{\displaystyle \sim}} \text{ divides } V \text{ into sets of vertices of graph's connected components} \\
}
$$
---
## Number of connected components #definition 
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a simple graph} \\
\text{Let } \lvert V \rvert = n, \lvert E \rvert = m \\
\text{Then the number of connected components is at least } n - m \\
\\
\text{Proof:} \\
\text{Base case. Let } m = 0 \\
\implies \text{There are no edges } \implies \text{Each vertex is a separate connected component} \\
\implies \text{There are } n \text{ components, } n \geq n - m = n - 0 \\
\\
\text{Induction step. Let the lemma hold for } m \text{ edges} \\
\text{Let } G' = (V', E'), \lvert V' \rvert = n, \lvert E' \rvert = m+1 \\
\lvert E' \rvert \geq 1 \implies E' \neq \emptyset \\
\text{Let } e \in E' \\
G' \setminus \Set{ e } = (V', E' \setminus \Set{ e }) \text{ has at least } n - m \text{ connected components} \\
\text{Case 1. } e \text{ connects two vertices in the same connected component of } G' \setminus \Set{ e } \\
\implies \# \text{ of connected components of } G' \text{ is also } \geq n - m \geq n - (m+1) \\
\text{Case 2. } e \text{ connects two vertices in two different connected components} \\
\implies \# \text{ of connected components of $G'$} = \# \text{ of connected components of } G' \setminus \Set{ e } - 1 \\
\text{meaning it is now} \geq (n-m) - 1 = n - (m+1) \\
\implies \boxed{ \text{Proved by Induction} } \\
}
$$
---
## Number of edges in a connected graph #lemma 
$$
\displaylines{
\text{In any connected graph with } n \text{ vertices there are at least } n-1 \text{ edges} \\
\\
\text{Proof:} \\
\text{Let there be } m < n-1 \text{ edges} \\
\text{Then there are at least } n - m > n - (n-1) = 1 \text{ connected components} \\
\implies \text{Graph is not connected} - \text{ Contradiction!} \\
}
$$
---
## Existence of a cycle by edges number #lemma 
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a simple graph with } n \geq 3 \text{ vertices and } m \geq n \text{ edges} \\
\text{Then } G \text{ has a cycle} \\
\\
\text{Proof:} \\
\text{Base case. Let } n = 3 \\
m \geq n = 3 \\
\text{The only possible graph with 3 vertices and 3 edges has a cycle} \\
\\
\text{Induction step. Let lemma hold for } n \text{ vertices} \\
\text{Let } G' = (V', E'), \lvert V' \rvert = n + 1, \lvert E' \rvert = m \geq n + 1 \\
\text{Let } x \in V' \text{ be a vertex with the minimal degree} \\
\text{Case 0. } deg(x) = 0 \\
\implies \text{In } G' \setminus \Set{ x } = (V' \setminus \Set{ x }, E') \text{ there are } n \text{ vertices and } m \geq n + 1 > n \text{ edges} \\
\implies \text{There is a cycle in } G' \setminus \Set{ x } \\
\text{We didn't remove any edges } \implies G' \text{ has a cycle} \\
\text{Case 1. } deg(x) = 1 \\
\implies \text{There is no cycle containing vertex } x \\
\implies G' \setminus \Set{ x } \text{ has } n \text{ vertices and } m-1 \geq n+1-1 = n \text{ edges} \\
\implies G' \setminus \Set{ x } \text{ has a cycle} \\
\text{We didn't remove any edges between vertices in this cycle} \implies G' \text{ has a cycle} \\
\text{Case 2. } deg(x) \geq 2 \\
\implies \text{Degree of any vertex in } G' \text{ is} \geq 2 \\
\text{Start with some edge } \Set{ u, v } \\
\text{And begin to build the path without using the same edge twice} \\
\text{Number of edges is finite} \implies \text{The process stops at some point} \\
\text{Let the process stop at vertex } v_{k} \\
deg(v_{k}) \geq 2 \implies \text{If } v_{k} \text{ is a new vertex, we can continue} \implies v_{k} \text{ is not a new vertex} \\
\implies \text{path } (v_{1}, v_{2}, \dots, v_{k}) \text{ contains a sub-path from } v_{k} \text{ to } v_{k} \\
\implies \text{There is a cycle from } v_{k} \text{ to } v_{k} \\
\implies \boxed{ \text{Proved by Induction} } \\
}
$$
---
