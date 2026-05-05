---
{"publish":true,"created":"18/01/26, 15:02","modified":"2026-03-24T14:59:04.568+02:00","tags":["Academia","#Practice","Discrete-structures"],"cssclasses":""}
---

$$
\displaylines{
\text{Let there be a bipartite graph } G = (V, E) \\
\text{Let } \abs{L} = \abs{R} = n \\
\text{In particular, } G = K_{n,n} \\
\text{Let } \forall l \in L: >_{l} \text{ be an order on } R \\
\text{Let } \forall r \in R: >_{r} \text{ be an order on } L \\
\text{Let the perfect matching be } \mu: V \to V \\
\text{Let } (l, r) \in L \times R: \mu(l) = r, \mu(r) = l \\
(l, r) \text{ is called a blocking pair iff } \begin{eqsys}
r >_{l} \mu(l) \\
l >_{r} \mu(r) \\
\end{eqsys} \\
\text{A perfect stable matching is then a matching that has no blocking pairs} \\
}
$$
---
An algorithm for finding a perfect stable matching was proposed by Gale and Shapley (MPDA):
- Iterative, each iteration, until all vertices are paired
	- Vertices from $L$ ask their first unasked preference
	- Vertices from $R$ choose their first preference from the list of asks
	- If all vertices from $L$ are paired, terminate

----
A corollary of the MPDA algorithm is that every graph with a perfect matching also has a stable perfect matching, and this matching can be calculated in polynomial time, in $O(n^{2})$

---
