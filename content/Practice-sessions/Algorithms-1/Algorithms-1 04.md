---
{"publish":true,"created":"17/11/25, 18:02","modified":"2025-11-21T21:10:24.472+02:00","tags":["Academia","Practice","Algorithms-1"],"cssclasses":""}
---

## Topological sorting problem
When talking about DFS, there are two correctness-related theorems (see lecture 3)
## Parenthesis theorem #theorem 
$$
\displaylines{
& \forall u, v \in V \text{ exactly one of the following is true:} \\
1. & [d[u], f[u]] \cap [d[v], f[v]] = \emptyset \text{ and } u, v \text{ are not the descendants of each other} \\
2. & [d[u], f[u]] \subset [d[v], f[v]] \text{ and } u \text{ is the descendant of } v \\
3. & [d[u], f[u]] \supset [d[v], f[v]] \text{ and } v \text{ is the descendant of } u \\
}
$$
## White path theorem #theorem 
$$
\displaylines{
v \text{ is the descendant of } u \iff \text{at the time } d[u]-1 \text{ there exists a path } p(v, u) \\
\text{consisting entirely of white vertices} \\
}
$$
---
### Input
$$
\displaylines{
G = (V, E) \text{ directed acyclic graph} \\
}
$$
### Output
$$
\displaylines{
\text{Topological ordering } V' \text{ such that } \forall (v_{i}, v_{j}) \in E: v_{i} \text{ appears in $V'$ before } v_{j} \\
}
$$
### Solution
Run $DFS(G)$ and return vertices in the descending order by their "finished" time $t$
$$
\displaylines{
\text{Proof of correctness:} \\
\text{Let } e = (v_{i}, v_{j}) \in E \\
\text{We will prove } t(v_{i}) > t(v_{j}) \\
\text{Case 1. } d(v_{i}) < d(v_{j}) \\
\text{By white path theorem ,there exists a path from } v_{i} \text{ to } v_{j} \text{ that is entirely white} \\
\implies v_{j} \text{ is white at the moment } v_{i} \text{ is visited} \implies v_{j} \text{ is visited before time } t(v_{i}) \\
\implies \text{By parenthesis theorem: } d(v_{i}) < d(v_{j}) < t(v_{j}) < t(v_{i}) \\
\text{Case 2. } d(v_{i}) > d(v_{j}) \\
\text{There is no cycle} \implies \text{There is no path from } v_{j} \text{ to } v_{i} \\
\implies v_{i} \text{ is discovered after } t(v_{j}) \implies d(v_{j}) < t(v_{j}) < d(v_{i}) < t(v_{i}) \\
\\
\implies \forall v_{i}, v_{j} \in V: (v_{i}, v_{j}) \in E \iff t(v_{j}) < t(v_{i}) \\
\implies \text{Algorithm is correct} \\
}
$$
---
## Strongly connected component (SCC) #definition 
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a directed graph} \\
C \subseteq V \text{ is called an SCC iff } \forall u, v \in V_{C}: \exists p(u, v) \\
}
$$
### Input
$$
\displaylines{
G \text{ directed graph} \\
}
$$
### Output
$$
\displaylines{
V_{SCC} = \Set{ V_{i} | V_{i} \text{ is a SCC in } G } \\
\\
\text{Note:} \\
E_{SCC} = \Set{ (C_{1}, C_{2}) | C_{1}, C_{2} \in V_{SCC} } \\
}
$$
$$
\displaylines{
\text{Observations:} \\
G_{SCC} = (V_{SCC}, E_{SCC}) \text{ is a directed acyclic multi-graph} \\
(G^{T})_{SCC} = G_{SCC} \\
}
$$
### Solution
Run $DFS(G)$, calculate $G^{T}$, run $DFS(G^{T})$ in the descending order by $t_{G}$ and return each resulting $DFS_{G^{T}}$-tree as a SCC
$$
\displaylines{
\text{Proof of correctness:} \\
\text{Let there be two SCC, } C_{1}, C_{2} \\
\text{Let } (C_{1}, C_{2}) \in E_{SCC} \\
\implies (C_{1}, C_{2}) \not\in E^{T}_{SCC} \\
\\
\max\{t(C_{1})\} > \max\{t(C_{2})\} \implies DFS_{G^{T}} \text{ will process } C_{1} \text{ before } C_{2} \\
(C_{1}, C_{2}) \not\in E^{T}_{SCC} \implies DFS_{G^{T}} \text{ will first yield a tree equivalent to } C_{1} \\
\text{and only then continue to } C_{2} \\
}
$$
---
## Partition of a bipartite graph
### Input
$$
\displaylines{
G \text{ undirected connected bipartite graph} \\
}
$$
### Output
$$
\displaylines{
L, R: L \sqcup R = V \\
}
$$
### Solution
Let $s \in V$, run $BFS(G, s)$, each vertex with even distance from $s$ is in $L$, each vertex with odd distance from $s$ is in $R$
$$
\displaylines{
\text{Proof of correctness:} \\
\text{Let } G \text{ be an undirected bipartite graph} \\
\text{Let } s \in L \\
\text{Then } \forall u \in V: u \in L \iff \delta(s, u) \text{ is even} \\
\\
\text{Proof:} \\
\text{Base case. } \delta(s, s) = 0 \\
\text{Induction step. Let } \delta(s, v) = k \\
\text{Case 1. } k \text{ is odd} \\
\text{Let } \Set{ u, v } \in E: p(s, v) = p(s, u) + \Set{ u, v } \\
\implies \delta(s, v) = \delta(s, u) + 1 \implies \delta(s, u) \text{ is even} \implies u \in L \implies v \in R \\
\text{Case 2. } k \text{ is even} \\
\text{Let } \Set{ u, v } \in E: p(s, v) = p(s, u) + \Set{ u, v } \\
\implies \delta(s, v) = \delta(s, u) + 1 \implies \delta(s, u) \text{ is odd} \implies u \in R \implies v \in L \\
\implies \text{Proved by induction} \\
}
$$
---
## Distances in a graph
### Input
$$
\displaylines{
G \text{ weighted directed acyclic graph} \\
}
$$
### Output
$$
\displaylines{
\text{Array } \delta: \forall i \in [1, \abs{V}]: \delta[i] = \delta(s, v_{i}) \\
}
$$
### Solution
Run topological sorting and then recursively (DP) calculate distances of vertices after $s$ in the topological ordering
