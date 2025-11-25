---
{"publish":true,"created":"23/11/25, 15:00","modified":"2025-11-24T16:39:54.184+02:00","tags":["Academia","Assignment","Discrete-structures"],"cssclasses":""}
---

## 1
$$
\displaylines{
\text{Let } A = \Set{ f: \mathbb{N} \to \Set{ 0, 1 } | \forall n \in \mathbb{N}: f(n) = 1, f(n+1) = 0 \implies f(n+2) = 0 } \\
\text{Find } \abs{A} \\
\\
\text{Solution:} \\
A \subseteq \Set{ 0, 1 }^{\mathbb{N}} \implies A \preccurlyeq \Set{ 0, 1 }^{\mathbb{N}} \implies \abs{A} \leq \aleph \\
\text{Let } f: \mathcal{P}(3\mathbb{N}) \to A, f(X) = f_{X} \\
f_{X}: \mathbb{N} \to \Set{ 0, 1 }, f_{X}(n) = \begin{cases}
0 & n \not\mid 3 \\
\mathcal{X}_{X}(n) & \text{otherwise} \\
\end{cases} \\
\text{Let } X_{1} = X_{2} \in \mathcal{P}(3\mathbb{N}) \\
\implies \forall n \in X_{1}: f_{X_{1}}(n) = \mathcal{X}_{X_{1}}(n) = \mathcal{X}_{X_{2}}(n) = f_{X_{2}}(n) \\
\implies \forall n \in \mathbb{N}: f_{X_{1}}(n) = f_{X_{2}}(n) \implies f(X_{1}) = f_{X_{1}} = f_{X_{2}} = f(X_{2}) \implies f \text{ is injective} \\
\implies \mathcal{P}(3\mathbb{N}) \preccurlyeq A \preccurlyeq \Set{ 0, 1 }^{\mathbb{N}} \implies \abs{A} = \aleph \\
}
$$
## 2
$$
\displaylines{
\text{Let } T \text{ be a tree} \\
\text{Let } \exists v \in T: deg(v) = k \\
\text{Prove: } T \text{ has at least } k \text{ leaves} \\
\\
\text{Proof:} \\
\text{Let } T = (V, E) \\
\text{Let } v \text{ be a vertex with degree } k \\
\text{Let } \Gamma(v) = \Set{ v, v_{1}, \dots, v_{k} } \\
\text{Case 1. Let } \forall i \in [1, k]: v_{i} \text{ is a leaf} \\
\implies T \text{ has at least } k \text{ leaves} \\
\text{Case 2. Let } \exists i \in [1, k]: v_{i} \text{ is not a leaf} \\
\text{Let } i \in [1, k] : v_{i} \text{ is not a leaf} \\
\implies \exists u \neq v \in V: \Set{ u, v_{i} } \in E \\
\text{Let } T' = (V, E \setminus \Set{ \Set{ u, v_{i} } }) \\
T'_{u} \text{ is a connected component} \\
T \text{ has no cycles} \implies T' \text{ has no cycles} \implies T'_{u} \text{ has no cycles} \\
\implies T'_{u} \text{ is a tree} \implies T'_{u} \text{ has at least 2 leaves} \\
\implies \exists w \neq u \in V : deg_{T'}(w) = 1 \\
\implies deg_{T}(w) = 1 \implies w \text{ is a leaf in } T \implies G \text{ has at least } k \text{ leaves} \\
}
$$
## 3
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a } k\text{-regular non-connected graph} \\
\text{Prove: } k \text{ is odd} \implies \text{Every connected component has even number of vertices} \\
\\
\text{Proof:} \\
\text{Let } C \text{ be a connected component in } G \\
\text{Hand-shaking lemma holds for } C \text{ too} \\
\sum_{v \in V_{C}} deg(v) = 2\abs{E_{C}} \\
\forall v \in V_{C}: deg(v) = k \\
\implies 2\abs{E_{C}} = k\abs{V_{C}} \\
k \text{ is odd} \implies \abs{V_{C}} \text{ must be even} \\
}
$$
## 4a
$$
\displaylines{
\text{Let } G \text{ be } 2\text{-regular and has even number of vertices} \\
\text{Prove or disprove: } G \text{ is bipartite} \\
\\
\text{Disproof:} \\
\text{Let } G = (V, E) \\
V = \Set{ v_{1}, \dots, v_{6} } \\
E = \Set{ \Set{ v_{1}, v_{2} }, \Set{ v_{1}, v_{3} }, \Set{ v_{2}, v_{3} }, \Set{ v_{4}, v_{5} }, \Set{ v_{4}, v_{6} }, \Set{ v_{5}, v_{6} } } \\
G \text{ is a graph with two triangles} \implies \text{By Konig's theorem } G \text{ is not bipartite} \\
}
$$
## 4b
$$
\displaylines{
\text{Prove or disprove: There exists a connected bipartite graph with more than } 4 \text{ vertices} \\
\text{such that } \exists v \in V: deg(v) \geq \frac{3}{4}\abs{V} \\
\\
\text{Proof:} \\
\text{Let } G = (V, E) \\
V = \Set{ v_{1} } \cup V' \\
E = \Set{ \Set{ v_{1}, u } | u \in V' } \\
G \text{ is connected} \\
G \text{ is bipartite: } L = \Set{ v_{1} }, R = V' \\
deg(v_{1}) = \abs{V'} = \abs{V} - 1 \geq \frac{3}{4}\abs{V} \\
}
$$
## 4c
$$
\displaylines{
\text{Let } n \geq 3 \\
\text{Let } G = (V, E), \abs{V} = n, \abs{E} = m \\
\text{Prove or disprove: } m \geq n \implies G \text{ has a cycle} \\
\\
\text{Proof:} \\
\text{Let } G \text{ be connected} & WLOG \\
\text{If it is not connected, prove separately for each connected component} \\
\text{Let } G \text{ have no cycles} \\
\implies G \text{ is a tree} \implies \abs{E} = \abs{V} - 1 - \text{Contradiction!} \\
\implies \boxed{ G \text{ has a cycle} } \\
}
$$
## 5
$$
\displaylines{
\text{Let } G = (L \sqcup R, E) \text{ be a bipartite graph} \\
\text{Let } \forall x \in R: deg(x) \geq d \\
\text{Prove: } \abs{L} \geq \frac{\abs{R} \cdot d}{\Delta(L)} \\
\\
\text{Proof:} \\
G \text{ is bipartite} \implies \forall \Set{ v, u } \in E: v \in L, u \in R \\
\implies \sum_{u \in R} deg(u) = \sum_{v \in L} deg(v) \\
\forall x \in R: deg(x) \geq d \implies \abs{L} \geq d \\
\abs{R} \cdot d \leq \sum_{u \in R} deg(u) = \sum_{v \in L} deg(v) \leq \abs{L}\Delta(L) \\
\implies \boxed{ \abs{L} \geq \frac{\abs{R} \cdot d}{\Delta(L)} } \\
}
$$
## 6
$$
\displaylines{
\text{Let } G = (V, E) \text{ be an undirected graph with } \abs{V} = n > 1 \\
\text{Let } \forall v \in V: deg(v) < \sqrt{ n - 1 } \\
\text{Prove: } diam(G) \geq 3 \\
\\
\text{Proof:} \\
\text{Let } G \text{ be connected, otherwise } diam(G) = \infty > 3 \\
\text{Let by contradiction } diam(G) < 3 \\
\text{Case 1. } diam(G) = 1 \implies G \text{ is a clique} \implies \forall v \in V: deg(v) = n - 1 \geq \sqrt{ n - 1 } \\
\text{Contradiction!} \\
\text{Case 2. } diam(G) = 2 \\
\text{Let } v \in V \\
\forall u \neq v \in V \setminus \Gamma(v) : d(v, u) = 2 \\
\implies \forall u \in V : \exists w \in \Gamma(v): \Set{ v, w }, \Set{ w, u } \in E \\
\text{Let } U = \Set{ u \neq v | u \in V \setminus \Gamma(v) } \\
\abs{U} = \abs{V} - \abs{\Gamma(v)} - 1 = n - 1 - deg(v) \\
\forall u \in U: \exists w \in \Gamma(v): \Set{ w, u } \in E \\
\sum_{w \in \Gamma(v)} deg(w) < \sqrt{ n-1 }^{2} = n - 1 \\
\text{Let } E_{\Gamma(v)} = \Set{ \Set{ v_{1}, v_{2}} | v_{1} \in \Gamma(v) } \\
\implies \abs{E_{\Gamma(v)}} < n-1 \\
\text{Let } E_{U} = \Set{ \Set{ v_{1}, v_{2} } | v_{1} \in U } \\
\text{Each vertex in } U \text{ has at least one edge from } \Gamma(v) \\
\implies \abs{E_{U}} \geq \abs{U} \geq n - 1 - deg(v) > \abs{E_{\Gamma(v)}} - deg(v) \\
\implies \text{There aren't enough edges coming from } \Gamma(v) \text{ to connect each vertex in } U \\
\implies diam(G) \geq 3 - \text{Contradiction!} \\
}
$$
## 7
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a bipartite graph} \\
\text{Let } G \text{ be } k\text{-regular where } k \geq 2 \in \mathbb{N} \\
\text{Prove: } G \text{ has no cutting edges} \\
\\
\text{Proof:} \\
\text{Let by contradiction } e = \Set{ u, v } \in E \text{ be a cutting edge} \\
\text{Let } G' = G \setminus \Set{ e } \\
\implies C_{1}, C_{2} \text{ are two distinct connected components in } G' \\
deg(v) = deg(u) = k-1 \\
\forall w \in V \setminus \Set{ u, v }: deg(w) = k \\
G \text{ is bipartite} \implies G' \text{ is also bipartite} \\
C_{1}, C_{2} \text{ are themselves bipartite, let } L_{1}, R_{1}, L_{2}, R_{2} \text{ be their partitions} \\
\text{Let } u \in L_{1} & WLOG \\
\implies \sum_{w \in L_{1}} deg(w) = (\abs{L_{1}}-1)k + k - 1 = \abs{L_{1}}k - 1 \\
\sum_{w \in R_{1}} deg(w) = \abs{R_{1}}k \implies \abs{L_{1}}k - 1 = \abs{R_{1}}k \implies \abs{L_{1}} - \abs{R_{1}} = \frac{1}{k} \\
\abs{L_{1}} \text{ and } \abs{R_{1}} \text{ are integers} \implies \frac{1}{k} \text{ is also integer} \implies k = 1 \\
\text{Contradiction!} \\
}
$$
