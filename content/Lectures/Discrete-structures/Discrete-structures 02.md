---
{"publish":true,"created":"04/11/25, 16:11","modified":"2026-03-24T15:00:28.437+02:00","tags":["Academia","Lecture","Discrete-structures"],"cssclasses":""}
---

## Proof that $\aleph_{0} < \aleph$
$$
\displaylines{
\text{Let by contradiction } f : \mathbb{N} \to (0, 1) \text{ be surjective} \\
\text{Let } \forall n \in \mathbb{N}: f(n) = 0.\alpha_{n_{1}}\alpha_{n_{2}}\dots\alpha_{nn}\dots \\
\text{Let } p = 0.p_{1}p_{2}\dots p_{n}\dots : \forall n \in \mathbb{N}: p_{n} = \begin{cases}
7 & \alpha_{nn} = 6 \\
6 & \text{otherwise} \\
\end{cases} \\
p \in (0, 1) \text{ and } p \not\in f(\mathbb{N}) \implies f \text{ is not surjective} \\
\implies \forall f: \mathbb{N} \to (0, 1) : f \text{ is not surjective} \implies f \text{ is not bijective} \implies \mathbb{N} \not\sim (0, 1) \sim \mathbb{R} \\
}
$$
---
## $\preccurlyeq$ is a partial or a total order?
$$
\displaylines{
\preccurlyeq \text{ is an order, proved by the Cantor-Schroder-Bernstein theorem} \\
\text{Assuming axiom of choice, } \preccurlyeq \text{ is a total order on } \mathcal{P}(X) \text{ for all sets } X \\
}
$$
---
## Cantor-Schroder-Bernstein lemma #lemma 
$$
\displaylines{
\text{Let } A \supseteq B \text{ and } A \preccurlyeq B \\
\text{Then } A \sim B \\
\\
\text{Proof:} \\
A \preccurlyeq B \implies \exists f: A \to B \text{ injective} \\
\text{Let } A_{0} = A, B_{0} = B \\
\text{Let } \forall n \geq 1: A_{n} = f[A_{n-1}], B_{n} = f[B_{n-1}] \text{ or } A_{n} = f^{(n)}[A], B_{n} = f^{(n)}[B] \\
\\
\text{Let us prove } \forall n \geq 0 : B_{n} \subseteq A_{n} \\
\text{Base case. } B_{0} = B \subseteq A = A_{0} \\
\text{Induction step. } B_{n} \subseteq A_{n} \\
B_{n+1} = \Set{ f(x) | x \in B_{n} } \\
A_{n+1} = \Set{ f(x) | x \in A_{n} } \\
y = f(x) \in B_{n+1} \implies x \in B_{n} \implies x \in A_{n} \implies f(x) \in A_{n+1} \implies \boxed{ B_{n+1} \subseteq A_{n+1} } \\
\\
\text{Let us now prove } \forall n \geq 0, f[A_{n} \setminus B_{n}] = A_{n+1} \setminus B_{n+1} \\
f[A_{n} \setminus B_{n}] = \Set{ f(x) | x \in A_{n} \setminus B_{n} } \\
y = f(x) \in f(A_{n} \setminus B_{n}) \implies x \in A_{n} \setminus B_{n} \implies \begin{eqsys}
x \in A_{n} \implies f(x) \in A_{n+1} \\
x \not\in B_{n} \implies f(x) \not\in B_{n+1} \\
\end{eqsys} \\
\implies f(x) \in A_{n+1} \setminus B_{n+1} \implies \boxed{ f[A_{n} \setminus B_{n}] \subseteq A_{n+1} \setminus B_{n+1} } \\
\text{Let } y \in A_{n+1} \setminus B_{n+1} \implies \exists x \in A_{n} : y = f(x) \not\in B_{n+1} \implies x \not\in B_{n} \\
\implies y \in f[A_{n} \setminus B_{n}] \implies \boxed{ A_{n+1} \setminus B_{n+1} \subseteq f[A_{n} \setminus B_{n}] } \\
\\
\text{Let } C = \bigcup_{n\geq_{0}} A_{n} \setminus B_{n} \\
\text{Let } \forall x \in A: g(x) = \begin{cases}
f(x) & x \in C \\
x & x \not\in C \\
\end{cases} \\
\forall x \in C: g(x) = f(x) \in B \\
\forall x \not\in C: x \not\in A_{0} \ B_{0} = A \ B \text{ but } x \in A \implies x \in B \implies g(x) = x \in B \\
\implies \boxed{ g: A \to B } \\
\text{Let } x \neq y \in A \\
\text{Case 1. } x, y \in C \text{ or } x, y \not\in C \implies g(x) = f(x) \neq f(y) = g(y) \text{ or } g(x) = x \neq y = g(y) \\
\text{Case 2. } x \in C, y \not\in C \\
x \in C \implies \exists n : x \in A_{n} \setminus B_{n} \implies g(x) = f(x) \in A_{n+1} \setminus B_{n+1} \subseteq C \\
g(x) \in C, g(y) \not\in C \implies g(x) \neq g(y) \\
\implies \boxed{ g \text{ is injective} } \\
\text{Let } x \in B = B_{0} \\
\text{Case 1. } x \not\in C \implies g(x) = x \\
\text{Case 2. } x \in C \implies \exists n \geq 1 : x \in A_{n} \setminus B_{n} \\
f[A_{n-1} \setminus B_{n-1}] = A_{n} \setminus B_{n} \implies \exists y \in A_{n-1} \setminus B_{n-1} : g(y) = f(y) = x \\
\implies g \text{ is surjective} \implies g \text{ is bijective} \implies \boxed{ A \sim B } \\
}
$$
## Cantor-Schroder-Bernstein theorem #theorem 
$$
\displaylines{
\text{Let } A \preccurlyeq B \text{ and } B \preccurlyeq A \\
\text{Then } A \sim B \\
\\
\text{Proof:} \\
A \preccurlyeq B \implies \exists f : A \to B \text{ injective} \\
B \preccurlyeq A \implies \exists g : B \to A \text{ injective} \\
\text{Let } B' = g[B] \subseteq A \\
\text{Let } g' : B \to B', \forall b \in B: g'(b) = g(b) \\
\implies g' \text{ is injective} \\
g'[B] = g[B] = B' \implies g' \text{ is surjective} \implies g' \text{ is bijective} \implies B \sim B' \\
\\
\text{Let } h = (g' \circ f) : A \to B' \\
\text{Let } a, a' \in A: g'(f(a)) = g'(f(a')) \implies f(a) = f(a') \implies a = a' \implies h \text{ is injective} \\
\implies \text{By Cantor-Schroder-Bernstein lemma, } B' \sim A \\
\implies B \sim B' \sim A \implies \boxed{ B \sim A } \\
}
$$
---
## $\preccurlyeq$ order on graphs (Inclusion relation)
$$
\displaylines{
\preccurlyeq \text{ is an order on a vertex set } \mathcal{G}_{V} \\
G_{1} = (V, E_{1}) \preccurlyeq G_{2} = (V, E_{2}) \iff E_{1} \subseteq E_{2} \\
}
$$
---
$$
\displaylines{
1. & T \text{ is a tree} \\
2. & T \text{ is a maximal acyclic graph with relation to } \preccurlyeq \text{ on } \mathcal{G}_{V} \\
3. & T \text{ is a minimal connected graph with relation to } \preccurlyeq \text{ on } \mathcal{G}_{V} \\
& \text{Prove: } 1 \iff 2 \iff 3 \\
}
$$
$$
\displaylines{
\text{Proof:} \\
\dots \\
}
$$
---
## Spanning tree #definition 
$$
\displaylines{
\text{Subgraph } T = (V, E_{T}) \text{ of } G = (V, E) \text{ is called a spanning tree if it is a tree} \\
\text{Note: spanning property follows from the equality of vertex sets} \\ 
}
$$
$$
\displaylines{
G \text{ is connected} \implies G \text{ has a spanning tree} \\
\\
\text{Proof:} \\
\text{Let } \mathcal{H} \text{ be a set of all connected subgraphs of } G \text{ with set of vertices } V \\
G \in \mathcal{H} \implies \mathcal{H} \neq \emptyset \\
\text{Let } T \text{ be a minimal graph in } \mathcal{H} \\
T = (V, E_{T}) \text{ is a minimal connected graph} \implies T \text{ is a tree} \\
\implies T \text{ is a spanning tree} \\
}
$$
---
## Bipartite graph #definition 
$$
\displaylines{
\text{Graph } G \text{ is called bipartite iff it can be partitioned into disjoint sets} \\
L \sqcup R \text{ such that } E \subseteq \Set{ \Set{ u, v } | u \in L, v \in R } \\
}
$$
$$
\displaylines{
\text{Every tree is bipartite} \\
\\
\text{Proof:} \\
\text{Let } r \text{ be the root of the tree} \\
\text{Let } L = \Set{ v \in V | v \text{ is on the even level of the tree} } \\
\text{Let } R = \Set{ v \in V | v \text{ is on the odd level of the tree} } \\
\text{The rest is trivial} \\
}
$$
## Konig's theorem #theorem 
$$
\displaylines{
G \text{ is bipartite} \iff \text{every simple cycle in } G \text{ has even length} \\
\\
\text{Proof:} \\
\text{Let us first prove } G \text{ is bipartite} \iff \text{every cyclic walk in } G \text{ has even length} \\
\\
\boxed{ \implies } \text{ Let } G \text{ be bipartite} \\
\implies \exists L, R : L \sqcup R = V \\
\text{Let } w = (v_{0}, \dots, v_{k+1} = v_{0}) \text{ be a cyclic walk} \\
\forall i \in [0, k]: \begin{cases}
v_{i} \in L \implies v_{i+1} \in R \\
v_{i} \in R \implies v_{i+1} \in L \\
\end{cases} \\
\text{Let } v_{0} \in L & WLOG \\
\implies v_{k+1} \in L \implies k \mod 2 \equiv 0 \\
\\
\boxed{ \impliedby } \text{ Let every cyclic walk in } G \text{ has even length} \\
\text{Let } G \text{ be connected (trivially expands on connected components)} \\
\text{Let } v \in V \\
\text{Let } L = \Set{ u \in V | \text{shortest path from } u \text{ to } v \text{ has even length} } \\
R = \Set{ u \in V | \text{shortest path from } u \text{ to } v \text{ has odd length} } \\
L \sqcup R = V \\
\text{Let by contradiction } e = \Set{ u, v } \in E: u, v \in L & WLOG \\
\text{Let } P_{x}, P_{y} \text{ be the shortest path from } v \text{ to } x, y \\
P_{x}, P_{y} \text{ have even length} \\
\implies P_{x} + e + P_{y} = (v, \dots, v) \text{ has odd length} - \text{Contradiction!} \\
} 
$$
$$
\displaylines{
\text{Let us now prove} \\
\text{every cyclic walk has even length} \iff \text{every simple cycle has even length} \\
\\
\boxed{ \implies } \text{ is trivial} \\
\boxed{ \impliedby } \text{ Let every simple cycle has even length} \\
\text{Let by contradiction } \exists \text{ cyclic walk of odd length} \\
\text{Let } C \text{ be a minimal cyclic walk of odd length} \\
C \text{ is not a simple cycle} \implies \exists v \in C \text{ that is visited at least twice} \\
C = (x_{0}x_{1}\dots x_{i}=v,x_{i+1}\dots x_{k}=v,x_{k+1}\dots x_{q}=x_{0}) \\
\text{Let } C_{1} = (x_{0}x_{1}\dots x_{i}x_{k+1}x_{k+2}\dots x_{q}=x_{0}) \\
\text{Let } C_{2} = (x_{i}x_{i+1}\dots x_{k}) \\
C_{1}, C_{2} \text{ are cyclic walks of length } (i+(q-k)) \text{ and } (k-i) \\
(i+(q-k)) + (k-i) \text{ is odd} \\
\implies \text{Exactly one of } C_{1}, C_{2} \text{ is a cyclic walk of odd length} - \text{Contradiction!} \\
}
$$
---
