---
{"publish":true,"created":"23/12/25, 16:05","modified":"2026-03-24T15:00:28.525+02:00","tags":["Academia","Lecture","Discrete-structures"],"cssclasses":""}
---

# Edge coloring and line graph
## Edge coloring #definition 
$$
\displaylines{
\text{Let } \chi': E \to [k]: \forall e, e' \in E: e \cap e' \neq \emptyset \implies \chi'(e) \neq \chi(e') \\
}
$$
## Line graph #definition 
$$
\displaylines{
\text{Let } G = (V, E) \\
\text{Let } L(E) = \Set{ \Set{ e, e' } \mid e, e' \in E: e \cap e' \neq \emptyset } \\
L(G) = (E, L(E)) \text{ is then called a line graph} \\
}
$$
Note that edge coloring of $G$ is equivalent to the vertex coloring of $L(G)$
## Chromatic index #definition 
$$
\displaylines{
\chi'(G) = \chi(L(G)) \\
}
$$
---
$$
\displaylines{
\text{A couple of observations:} \\
\text{Matching } M \subseteq E \text{ is an independent set in } L(G) \\
\\
\forall v \in V: E_{v} \subseteq E \text{ set of edges incident to } v \text{ forms a clique in } L(G) \\
\implies \chi'(G) = \chi(L(G)) \geq \omega(L(G)) \geq \Delta(G) \\
\\
\forall \Set{ u, v } \in E: deg_{L(G)}(\Set{ u, v }) = deg_{G}(u) - 1 + deg_{G}(v) - 1 = deg_{G}(u) + deg_{G}(v) - 2 \\
\implies \Delta(L(G)) \leq 2\Delta(G) - 2 \implies \chi(L(G)) \leq 2\Delta(G) - 1 \\
\implies \Delta(G) \leq \chi'(G) \leq 2\Delta(G) - 1 \\
}
$$
---
### Chromatic index of a tree #lemma 
$$
\displaylines{
\text{Let } T = (V, E) \text{ be a tree} \\
\text{Then } \chi'(T) = \Delta(T) \\
\\
\text{Proof:} \\
\text{Proof is by induction on } \abs{V} = n \\
\text{Base case. } n = 1 \text{ is trivial} \\
\text{Inductive step.} \\
\text{Let } v \in V: deg(v) = 1 \\
\text{Let } T' = T \setminus \Set{ v } \\
\Delta(T') = \Delta(T) \\
\implies \chi'(T') = \Delta(T') = \Delta(T) \\
\text{Let } u \in \Gamma_{T}(v) \\
\implies deg_{T'}(u) \leq \Delta(T) - 1 \implies \Set{ v, u } \text{ can be colored} \\
}
$$
### Chromatic index of a bipartite graph (Konig) #theorem 
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a bipartite graph} \\
\text{Then } \chi'(G) = \Delta(G) \\
\\
\text{Proof:} \\
\chi'(G) \geq \Delta(G) \\
\text{We will prove that } \chi'(G) \leq \Delta(G) \\
\text{Proof is by induction on } m = \abs{E} \\
\text{Base case. } m = 1 \text{ is trivial} \\
\text{Inductive step.} \\
\text{Let } G = (V, E) \text{ be a bipartite graph with } m + 1 \text{ edges} \\
\text{Let } e = \Set{ v, u } \in E \\
\text{Consider } G' = G \setminus \Set{ e } \\
G' \text{ is clearly bipartite} \implies \chi'(G') = \Delta(G') \leq \Delta(G) \\
\text{Let } \chi': E \setminus \Set{ e } \to \Set{ 1, \dots, \Delta(G) } \\
deg_{G'}(v) \leq \Delta(G) - 1 \implies \exists i: \forall e' \in E_{v} \setminus \Set{ e }: \chi'(e') \neq i \\
deg_{G'}(u) \leq \Delta(G) - 1 \implies \exists j: \forall e' \in E_{u} \setminus \Set{ e }: \chi'(e') \neq j \\
i = j \implies \chi'(e) = i \text{ and we're done} \\
\text{Let } i \neq j \\
\text{Let } G_{i,j} = (V, E_{i,j}) \\
E_{i,j} = \Set{ e \in E \mid \chi'(e) = i \text{ or } \chi'(e) = j } \\
\Delta(G_{i,j}) = 2 \\
\text{Let } C_{v} \text{ be a connected component in } G_{i,j} : v \in C_{v} \\
\text{Let by contradiction } u \in C_{v} \\
\implies \exists P = (v_{0} = v, \dots, v_{k} = u) \in C_{v} \\
P \text{ must be a color-alternating path} \\
\begin{eqsys}
\chi'(v_{0}, v_{1}) = j \\
\chi'(v_{k-1}, v_{k}) = i \\
\end{eqsys} \implies \abs{P} \text{ is even} \\
\implies P \circ \Set{ e } \text{ is an odd cycle in } G - \text{Contradiction!} \\
\implies u \not\in C_{v} \\
\text{Let } \psi': E \setminus \Set{ e } \to \Set{ 1, \dots, \Delta(G) }: \psi'(e') = \begin{cases}
i & e' \in C_{v} \text{ and } \chi'(e') = j \\
j & e' \in C_{v} \text{ and } \chi'(e') = i \\
\chi'(e') & \text{otherwise} \\
\end{cases} \\
\implies \forall e' \in E_{v} \cup E_{u} \setminus \Set{ e }: \psi'(e') \neq i \\
\text{Let } \psi'(e) = i \text{ and we're done} \\
}
$$
### Vizing theorem #theorem 
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a graph} \\
\text{Then } \Delta(G) \leq \chi'(G) \leq \Delta(G) + 1 \\
\\
\text{Proof:} \\
\text{Let } \Delta = \Delta(G) \\
\text{Let } n = \abs{V} \\
\text{Clearly } \chi'(G) \geq \Delta \\
\text{We will prove by induction on number of edges } m \\
\text{that for every graph } G' \text{ with } \Delta(G') \leq \Delta : \chi'(G') \leq \Delta(G) + 1 \\
\text{Base case. } m = 0 \text{ is trivial} \\
\text{Inductive step.} \\
\text{Let } G = (V, E) \text{ be a graph with } m + 1 \text{ edges and } \Delta(G) \leq \Delta \\
\text{Let } \Set{ x, y_{0} } \in E \\
\text{Let } G_{0} = G \setminus \Set{ \Set{ x, y_{0} } } \\
\text{By inductive hypothesis } \exists \chi_{0}': E \setminus \Set{ \Set{ x, y_{0} } } \to \Set{ 1, \dots, \Delta + 1 } \\
deg(x) \leq \Delta \text{ and } deg(y_{0}) \leq \Delta \\
\text{Let } \alpha \text{ be a color not incident to } x \\
\text{Let } \alpha_{0} \text{ be a color not incident to } y_{0} \\
\text{Let us construct a Kempe chain of edges and colors:} \\
\text{Let } \Set{ x, y_{1} } \text{ be an edge colored in } \alpha_{0} \text{ in } \chi_{0}' \text{ if exists} \\
\text{Let } \alpha_{1} \text{ be a color not incident to } y_{1} \\
\text{Mor egenerally, } \forall i \text{ Let } \Set{ x, y_{i} } \text{ be an edge colored in } \alpha_{i-1} \text{ in } \chi_{0}' \text{ if exists} \\
\text{This process stops when there is no previously unused edge } \Set{ x, y_{k+1} } \text{ colored in } \alpha_{k} \\
\text{Case 1. } x \text{ is not incident to an edge of color } \alpha_{k} \\
\text{Case 2. } x \text{ is only incident to previously used edges of color } \alpha_{k} \\
\forall i \in [0, k]: \text{Let } G_{i} = G \setminus \Set{ \Set{ x, y_{i} } } \text{ and } \chi_{i}' \text{ a coloring of } G_{i}: \\
\forall e \in E_{i}: \chi_{i}'(e) = \begin{cases}
\chi_{0}'(\Set{ x, y_{j+1} }) = a_{j} & e = \Set{ x, y_{j} } \text{ and } j < i \\
x_{0}'(e) & \text{otherwise} \\
\end{cases} \\
\text{Note that all } \chi_{i}' \text{ are proper colorings} \\
\\
\text{Consider } G_{k} \\
\text{Let } \beta = \alpha_{k} \\
\text{If the Kempe chain stopped in case 1, we can color } \Set{ x, y_{k} } \text{ in color } \alpha_{k} \text{ and we're done} \\
\text{If } y_{k} \text{ is not incident to color } \alpha \text{ we can color } \Set{ x, y_{k} } \text{ in color } \alpha \text{ and we're done} \\
\implies \text{Kempe chain stopped in case 2 and } y_{k} \text{ is incident to an edge of color } \alpha \\
\text{Let } \beta = \alpha_{i-1} = \alpha_{k} & WLOG \\
\text{Let } P \text{ be a } \alpha, \beta \text{ alternating path from } y_{k} \text{ of maximal length} \\
\text{Case 1. } x \not\in P \implies \text{We can flip colors in } P \ (\psi_{k}') \text{ and color } \Set{ x, y_{k} } \text{ in color } \alpha \\
\text{Case 2. } x \in P \\
x \text{ is not incident to an edge of color } \alpha \implies \Set{ y_{i-1}, x } \text{ is the last edge in } P \\
\\
\text{Consider } G_{i-1} \\
\text{Let } P' \text{ be a path from } y_{i-1} \text{ using colors } \alpha, \beta \text{ of maximal length} \\
P' = P \setminus \Set{ y_{i-1}, x } \\
\text{Note that } \chi_{k}' \text{ and } \chi_{i-1}' \text{ agree on colors of edges in } P \text{ except for } \Set{ x, y_{i-1} } \text{ not in } G_{i-1} \\
\implies \text{Last edge in } P', \Set{ v, y_{i-1} } \text{ is of color } \alpha \\
\text{We can flip colors in } P' \ (\psi_{i-1}') \\
\text{Now both } x, y_{i-1} \text{ are not incident to edges of color } \alpha \text{ and we can color } \Set{ x, y_{i-1} } \text{ in color } \alpha \\
}
$$
### Assadi, Behnezhad, Bhattacharya, Costa, Solomon, Zhang 2025 #theorem 
$$
\displaylines{
\text{There exists an algorithm for finding a } \Delta(G)+1 \text{ edge coloring in } O(m\log m) \text{ time} \\
}
$$
---
## Tournament digraph #definition 
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a directed graph} \\
\forall v, u \in V: (v, u) \in E \oplus (u, v) \in E \\
}
$$
## Transitive set #definition 
$$
\displaylines{
\text{Let } G = (V, E) \text{ a directed graph} \\
\text{Set } A \subseteq V \text{ is called transitive} \iff \forall x, y, z \in A: (x, y), (y, z) \in E \implies (x, z) \in E \\
}
$$
What is the minimal transitive set in a tournament digraph of size $n$?
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a tournament digraph} \\
\text{Then } G \text{ contains a transitive set of size } \floor{\log n} \\
\\
\text{Proof:} \\
\text{Proof is by induction on } n \\
\text{Base case. } n \leq 2 \text{ is trivial, } V \text{ is transitive} \\
\text{Inductive step.} \\
\text{Average } deg_{out} \text{ is } \frac{\binom{n}{2}}{n} = \frac{n-1}{2} \implies \exists v_{1} \in V: deg_{out}(v_{1}) \geq \frac{n-1}{2} \\
\text{Let } V' = \Set{ u \in V \mid (v_{1}, u) \in E } \\
V' \subset V \implies \text{By inductive hypothesis } G[V'] \text{ contains a transitive set} \\
A' \subseteq V' \text{ of size } \floor{\log \abs{V'}} \\
\text{Together with } v_{1} \text{ we get a transitive set } A = A' \cup \Set{ v_{1} } \text{ of size } \floor{\log \abs{V'}} + 1 \\
\text{Case 1. } n = 2m, \abs{V'} \geq m \\
\implies \abs{A} = \abs{A'} + 1 \geq \floor{\log m} + 1 \geq \floor{ \log(2m)} = \floor{ \log n} \\
\text{Case 2. } n = 2m + 1, \abs{V'} \geq m \\
\implies \abs{A} = \abs{A'} + 1 \geq \floor{ \log m} + 1 \geq \floor{ \log(2m)} = \floor{ \log(2m+1)} = \floor{ \log n} \\
}
$$
## Erdos theorem #theorem 
$$
\displaylines{
\text{Let } \binom{n}{k} \cdot \frac{k!}{2^{\binom{k}{2}}} < 1 \\
\text{Then there is a tournament digraph without a transitive subset of size } k \\
\\
\text{Proof:} \\
\text{Note: } k > \log(n) + 1 \implies \binom{n}{k} \cdot \frac{k!}{2^{\binom{k}{2}}} \leq \frac{n^{k}}{2^{k(k-1)/2}}  < \frac{n^{k}}{2^{k\log n}} = \frac{n^{k}}{n^{k}} = 1 \\
\\
\text{Let } G \text{ be a random tournament digraph out of } 2^{\binom{n}{2}} \text{ possible tournaments} \\
\forall u, v \in V: P((u, v) \in E) = P((v, u) \in E) = \frac{1}{2}
\\
\\
\text{Let } S \in \binom{V}{k} \text{ be a subset of } V \text{ of size } k \\
\text{Let } \Psi_{S} \text{ be the event that } S \text{ is transitive} \\
\text{A transitive set of size } k \text{ uniquely defines its edges relative to order of vertices} \\
\implies P(\Psi_{S}) = \frac{k! \cdot 2^{\binom{n}{2} - \binom{k}{2}}}{2^{\binom{n}{2}}} = \frac{k!}{2^{\binom{k}{2}}} \\
P(\exists \text{ a transitive subset of size } k) = P\left( \bigcup_{S \in \binom{V}{k}} \Psi_{S} \right) \leq \sum_{S \in \binom{V}{k}} P(\Psi_{S}) = \binom{n}{k} \cdot \frac{k!}{2^{\binom{k}{2}}} < 1 \\
\implies P(\not\exists \text{ a transitive subset of size } k) = 1 - P(\exists \text{ a transitive subset of size } k) > 0 \\
\implies \exists G \text{ tournament with no transitive set of size } k \\
}
$$
## Largest bipartite subgraph #theorem 
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a graph} \\
\text{Then } G \text{ contains a bipartite subgraph with } \frac{m}{2} \text{ edges} \\
\\
\text{Proof:} \\
\text{Note that if } E[X] \geq k \text{ then there must exist an instance in which } X \geq k \\
\\
\text{Let } V \text{ be of even size } 2n \\
\text{Let } L \in \binom{V}{n} \\
\text{Let } R = V \setminus L \\
\text{Let } H = (V, E_{H}) \\
E_{H} = \Set{ \Set{ v, u } \mid v \in L, u \in R } \\
\forall \Set{ u, v } \in E: \text{Let } \mathcal{X}_{e} = 1 \iff e \in E_{H} \\
P(\mathcal{X}_{e}) = \frac{2 \cdot \binom{2n-2}{n-1}}{\binom{2n}{n}} = 2 \cdot \frac{(2n-2)!}{(n-1)!(n-1)!} \cdot \frac{n!n!}{(2n)!} = 2\frac{n^{2}}{2n(2n-1)} = \frac{n}{2n-1} \\
\implies \boxed{ E[\abs{E_{H}}] = \sum_{e \in E} E[\mathcal{X}_{e}] = m \cdot \frac{n}{2n-1} } \\
\\
\text{Let } V \text{ is of odd size } 2n + 1 \\
P(\mathcal{X}(e) = 1) = \frac{2 \cdot \binom{2n-1}{n-1}}{\binom{2n + 1}{n}} = 2 \cdot \frac{(2n-1)!}{n!(n-1)!} \cdot \frac{(n+1)!n!}{(2n+1)!} = 2\frac{(n+1)n}{(2n+1)2n} = \frac{n+1}{2n+1} \\
\implies \boxed{ E[\abs{E_{H}}] = \sum_{e \in E} E[\mathcal{X}_{e}] = m \cdot \frac{n+1}{2n+1} } \\
}
$$
