---
{"publish":true,"created":"09/12/25, 11:02","modified":"2025-12-11T12:41:23.307+02:00","tags":["Academia","Assignment","Discrete-structures"],"cssclasses":""}
---

## 1
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a strongly connected directed pseudo-graph} \\
\text{Prove: } \exists C \text{ Euler cycle in } G \iff \forall v \in V: deg_{in}(v) = deg_{out}(v) \\
\\
\text{Proof:} \\
\boxed{ \implies } \text{ Let } \exists C \text{ Euler cycle in } G \\
C = (v_{0}, v_{1}, \dots, v_{k} = v_{0}) \\
\text{Let } v \in V \\
\text{Let } \mathcal{I} = \Set{ i \in [0, k] \mid v_{i} = v } \\
\text{Let } E_{\mathcal{I}^{-}} = \Set{ (v_{i-1}, v_{i}) \mid i \in \mathcal{I} } \\
\text{Let } E_{\mathcal{I}^{+}} = \Set{ (v_{i}, v_{i+1}) \mid i \in \mathcal{I} } \\
\implies deg_{in}(v) = \abs{E_{\mathcal{I}^{-}}} = \abs{\mathcal{I}} \\
\implies deg_{out}(v) = \abs{E_{\mathcal{I}^{+}}} = \abs{\mathcal{I}} \\
\implies \boxed{ deg_{in}(v) = deg_{out}(v) } \\
\\
\boxed{ \impliedby } \text{ Let } \forall v \in V: deg_{in}(v) = deg_{out}(v) \\
\text{Proof by induction on } m = \abs{E} \\
\text{Let by induction } \forall G': \forall v \in V': deg_{in_{G'}}(v)  = deg_{out_{G'}}(v) \text{ and} \\
G' \text{ is strongly connected and has less than } m \text{ edges} \implies G' \text{ has an Euler cycle} \\
\text{Let } G \text{ has } m \text{ edges} \\
G \text{ is strongly connected} \implies \forall v \in V: deg_{out}(v) \geq 1 \implies m \geq \sum_{v \in V} deg_{out}(v) \geq n \\
\implies m \geq n \implies G \text{ has a directed cycle } C = (x_{0}, \dots, x_{q}) \\
\text{Let } G' = G \setminus C = (V, E \setminus C) \\
\forall v \in G': deg_{in_{G'}}(v) = deg_{out_{G'}}(v) \\
\text{Let } \mathcal{K}_{1}, \mathcal{K}_{2}, \dots, \mathcal{K}_{k} \text{ be connected components of } G' \\
G \text{ is strongly connected} \implies \forall j \in [1, k]: \exists x_{i_{j}} \in C \cap \mathcal{K}_{j} \\
\text{Let } \forall j \in [1, k]: x_{i_{j}} \in C \cap \mathcal{K}_{j} \\
\text{Let } i_{1} \leq i_{2} \leq \dots \leq i_{k} & WLOG \\
\forall j \in [1, k]: \mathcal{K}_{j} \text{ has an Euler cycle } C_{j} \\
\Set{ C, C_{1}, \dots, C_{k} } \text{ is a partition of } E' \\
\implies C' = (x_{0}, \dots, \underbrace{ x_{i_{1}}, \dots, x_{i_{1}} }_{ C_{1} }, \dots, x_{i_{k}-1}, \underbrace{ x_{i_{k}}, \dots, x_{i_{k}} }_{ C_{k} }, \dots, x_{q}) \text{ is an Euler cycle in } G \\
}
$$
## 2
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a graph} \\
\text{Let } M_{1}, M_{2} \text{ be matchings in } G \\
\text{Prove: } G' = (V, M_{1} \cup M_{2}) \text{ is bipartite} \\
\\
\text{Proof:} \\
G' \text{ has no cycles (all cycles are of length 0)} \implies G' \text{ is bipartite} \\
\\
\text{Let } C \text{ be a cycle in } G' \\
C = (v_{0}, v_{1}, \dots, v_{k+1} = v_{0}) \\
\text{Let } i \in [0, k]: (v_{i}, v_{i+1}) \in M_{1} & WLOG \\
\implies (v_{i+1}, v_{i+2}) \not\in M_{1} \implies (v_{i+1}, v_{i+2}) \in M_{2} \\
\implies C \text{ is an alternating cycle} \implies C \text{ is of even length} \\
\implies G' \text{ is bipartite} \\
}
$$
## 3
$$
\displaylines{
\text{Let } A = \Set{ 1, 2, \dots, 165 } \\
\text{Let } R \text{ be a relation on } A \\
\forall a, b \in A: aRb \iff a \equiv b \pmod{3} \lor a \equiv b \pmod{5} \lor a \equiv b \pmod{11} \\
\text{Prove: } \exists a_{1}, \dots, a_{165}: \forall i \in [1, 164]: a_{i}Ra_{i+1} \text{ and } a_{165}Ra_{1} \\
\\
\text{Proof:} \\
\text{This problem can be reinterpreted as an existence of a Hamilton cycle in } G \\
\text{Where } G = (A, E) \\
E = \Set{ \Set{ a, b } \mid aRb, a \neq b } \\
\text{Let } a, b \in A: \Set{ a, b } \not\in E \implies \begin{eqsys}
a \not\equiv b \pmod{3} \\
a \not\equiv b \pmod{5} \\
a \not\equiv b \pmod{11} \\
\end{eqsys} \\
\\
\implies \begin{eqsys}
a = 3i_{3} + k_{3_{1}}, b = 3j_{3} + k_{3_{2}} \\
a = 5i_{5} + k_{5_{1}}, b = 5j_{5} + k_{5_{2}} \\
a = 11i_{11} + k_{11_{1}}, b = 11j_{11} + k_{11_{2}} \\
k_{3_{1}} \neq k_{3_{2}} \\
k_{5_{1}} \neq k_{5_{2}} \\
k_{11_{1}} \neq k_{11_{2}} \\
\end{eqsys} \\
\text{The following holds for both } a, b: \\
a \text{ has } \frac{165}{3}-1=54 \text{ neighbors by mod 3} \\
a \text{ has } \frac{165}{5}-1=32 \text{ neighbors by mod 5} \\
a \text{ has } \frac{165}{11}-1=14 \text{ neighbors by mod 11} \\
a \text{ has } \frac{165}{15}-1=10 \text{ neighbors by mod 15} \\
a \text{ has } \frac{165}{33}-1=4 \text{ neighbors by mod 33} \\
a \text{ has } \frac{165}{55}-1=2 \text{ neighbors by mod 55} \\
a \text{ has no neighbors by mod 165 (except itself)} \\
\implies deg(a) = \abs{N_{3} \cup N_{5} \cup N_{11}} = \abs{N_{3}}+\abs{N_{5}}+\abs{N_{11}} - \underbrace{ \abs{N_{15}} }_{ \abs{N_{3} \cap N_{5}} } - \underbrace{ \abs{N_{33}} }_{ N_{3} \cap N_{11} } - \underbrace{ \abs{N_{55}} }_{ N_{5} \cap N_{11} } = \\
= 54+32+14-10-4-2 = 84 \\
\implies deg(a) + deg(b) = 168 > 165 \\
\implies \text{By Ore's theorem } G \text{ contains a Hamilton cycle} \\
}
$$
## 4
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a graph} \\
\abs{V} = n \geq 3, \abs{E} > \binom{n-1}{2} + 1 \\
\text{Prove: } G \text{ contains a Hamilton cycle} \\
\\
\text{Proof:} \\
\text{Let by contradiction } G \text{ has no Hamilton cycle} \\
\implies \exists v, u \in V: \Set{ v, u } \not\in E \text{ and } deg(v) + deg(u) < n \\
\text{Let } G' = G \setminus \Set{ v, u } \\
V' = V \setminus \Set{ v, u } \\
E' = E \setminus \Set{ \Set{ x, y } \in E \mid x = u \lor x = v } \\
\abs{E'} \leq \binom{n-2}{2} \\
\abs{E} = \abs{E'} + deg(v) + deg(u) < \binom{n-2}{2} + n = \frac{(n-2)(n-3) + 2n}{2} = \\
= \frac{n^{2}-3n+6}{2} \leq \frac{n^{2}-3n+4}{2} \\
\abs{E} > \binom{n-1}{2} + 1 = \frac{(n-1)(n-2)+2}{2} = \frac{n^{2}-3n + 4}{2} - \text{Contradiction!} \\
\implies \boxed{ G \text{ has a Hamilton cycle} } \\
} 
$$
## 5
$$
\displaylines{
\text{Let } G, H \text{ be graphs} \\
G \square H = (V', E') \\
V' = V_{G} \times V_{H} \\
\begin{align}
E' = & \Set{ \Set{ (g, h_{1}), (g, h_{2}) } \mid g \in V_{G}, \Set{ h_{1}, h_{2} } \in E_{H} } \\
& \cup \Set{ \Set{ (g_{1}, h), (g_{2}, h) } \mid h \in V_{H}, \Set{ g_{1}, g_{2} } \in E_{G} } \\
\end{align} \\
}
$$
### 5a
$$
\displaylines{
\text{Let } G, H \text{ be connected} \\
\text{Prove: } G \square H \text{ is connected} \\
\\
\text{Proof:} \\
\text{Let } (g_{1}, h_{1}), (g_{2}, h_{2}) \in V' \\
\text{Let } P_{G} = (v_{0} = g_{1}, v_{1}, \dots, v_{k} = g_{2}) \\
\text{Let } P_{H} = (u_{0} = h_{1}, u_{1}, \dots, u_{q} = h_{2}) \\
\forall i \in [0, k-1]: \Set{ v_{i}, v_{i+1} } \in E_{G} \implies \forall h \in V_{H}: \Set{ (v_{i}, h), (v_{i+1}, h) } \in E' \\
\forall i \in [0, q-1]: \Set{ u_{i}, u_{i+1} } \in E_{H} \implies \forall g \in V_{G}: \Set{ (g, u_{i}), (g, u_{i+1}) } \in E' \\
\text{Let } k < q & WLOG \\
\text{Let } P = ((v_{0}, u_{0}), (v_{0}, u_{1}), (v_{1}, u_{1}), (v_{1}, u_{2}), \dots, (v_{k}, u_{k}), (v_{k}, u_{k+1}), \dots, (v_{k}, u_{q})) \\
P \text{ is a path in } G \square H \text{ from } (v_{0}, u_{0}) = (g_{1}, h_{1}) \text{ to } (v_{k}, u_{q}) = (g_{2}, h_{2}) \\
\implies \boxed{ G \square H \text{ is connected} } \\
}
$$
### 5b
$$
\displaylines{
\text{Let } m, n > 1 \\
\text{Prove: } K_{m} \square K_{n} \text{ contains an Euler cycle} \iff n \equiv m \pmod{2} \\
\\
\text{Proof:} \\
\text{Let } (v, u) \in V_{K_{m} \square K_{n}} \\
\text{Let } E_{v} = \Set{ \Set{ (v, u), (v, u_{1}) } \mid \Set{ u, u_{1} } \in E_{K_{n}} } \\
\text{Let } E_{u} = \Set{ \Set{ (v, u), (v_{1}, u) } \mid \Set{ v, v_{1} } \in E_{K_{m}} } \\
E_{v} \cap E_{u} = \emptyset \\
deg(v, u) = \abs{E_{v}} + \abs{E_{u}} = deg(u) + deg(v) = m-1 + n-1 = m + n - 2 \\
\\
K_{m} \square K_{n} \text{ contains an Euler cycle} \iff deg(v, u) \text{ is even} \iff m + n \equiv 0 \pmod{2} \\
\iff m \equiv n \pmod{2} \\
}
$$
### 5c
$$
\displaylines{
\text{Let } G, H \text{ be graphs containing Hamilton cycles} \\
\text{Prove: } G \square H \text{ contains a Hamilton cycle} \\
\\
\text{Proof:} \\
\text{Let } G \square H = (V, E) \\
\text{Let } C_{G}, C_{H} \text{ be Hamilton cycles in } G, H \text{ respectively} \\
C_{G} = (g_{0}, g_{1}, \dots, g_{n}) \\
C_{H} = (h_{0}, h_{1}, \dots, h_{m}) \\
\text{It is enough to prove } C_{G} \square C_{H} \text{ contains a Hamilton cycle} \\
\forall i \in [0, n-1]: \forall j \in [0, m-1]: \begin{eqsys}
\Set{ (g_{i}, h_{j}), (g_{i}, h_{j+1}) } \in E \\
\Set{ (g_{i}, h_{j}), (g_{i+1}, h_{j}) } \in E \\
\end{eqsys} \\
\text{In addition, } \begin{eqsys}
\forall i \in [0, n]: \Set{ (g_{i}, h_{m}), (g_{i}, h_{0}) } \in E \\
\forall i \in [0, m]: \Set{ (g_{n}, h_{i}), (g_{n}, h_{i}) } \in E \\
\end{eqsys} \\
\text{Let us represent that graph as a matrix:} \\
\begin{array}{}
(g_{0}, h_{0}) & (g_{1}, h_{0}) & \dots & (g_{n}, h_{0}) \\
(g_{0}, h_{1}) & (g_{1}, h_{1}) & \dots & (g_{n}, h_{1}) \\
\vdots & \vdots & \vdots & \vdots \\
(g_{0}, h_{m}) & (g_{1}, h_{m}) & \dots & (g_{n}, h_{m}) \\
\end{array} \\
\text{Every row is a cycle and every column is a cycle} \\
\\
\text{Case 1. One of the dimensions is even} \\
\text{Let } C_{g_{i}} = ((g_{i}, h_{0}), (g_{i}, h_{1}), \dots, (g_{i}, h_{m})) - \text{ a column cycle} \\
\text{Let } C_{h_{j}} = ((g_{0}, h_{j}), (g_{1}, h_{j}), \dots, (g_{n}, h_{j})) - \text{ a row cycle} \\
\text{Let } C^{r} \text{ denote the "reversed" cycle (bottom to top, right to left)} \\
\text{Let } n \text{ be even} \\
\text{We will traverse the matrix in a snake pattern by columns} \\
\text{Then } C_{n} = C_{g_{0}} \to ((g_{0}, h_{m}),(g_{1}, h_{m})) \to C_{g_{1}}^{r} \to \dots \to C_{g_{n}}^{r} \to ((g_{n}, h_{0}), (g_{0}, h_{0})) \\
\text{is a Hamilton cycle in } C_{G} \square C_{H} \text{ and we're done} \\
\text{Let } m \text{ be even} \\
\text{We will traverse the matrix in a snake pattern by rows} \\
\text{Then, } C_{m} = C_{h_{0}} \to ((g_{n}, h_{0}),(g_{n}, h_{1})) \to C_{h_{1}}^{r} \to \dots \to C_{h_{m}}^{r} \to ((g_{0}, h_{m}), (g_{0}, h_{0})) \\
\text{is a Hamilton cycle in } C_{G} \square C_{H} \text{ and we're done} \\
\\
\text{Case 2. Both dimensions are odd} \\
\text{Let } C_{g_{i}} = ((g_{i}, h_{1}), (g_{i}, h_{2}), \dots, (g_{i}, h_{m})) - \text{ a column cycle except first row} \\
\text{Let } C^{r} \text{ denote the "reversed" cycle (bottom to top, right to left)} \\
\text{We will first traverse first column down,} \\
\text{then snake by columns everything except first row} \\
\text{and return to the start using the first row which was left unvisited} \\
\text{Then, } C = ((g_{0}, h_{0}), (g_{0}, h_{1})) \to C_{g_{0}} \to ((g_{0}, h_{m}), (g_{1}, h_{m})) \to C_{g_{1}}^{r} \to \dots \to \\
\to C_{g_{n}} \to ((g_{n}, h_{m}), (g_{n}, h_{0})) \to ((g_{n}, h_{0}), (g_{n-1}, h_{0})) \to \dots \to ((g_{1}, h_{0}), (g_{0}, h_{0})) \\
\text{is a Hamilton cycle in } C_{G} \square C_{H} \text{ and we're done} \\
}
$$
### 5d
$$
\displaylines{
\text{Prove: } Q_{n} \square Q_{m} = Q_{n+m} \text{ and conclude that } \forall n \geq 2: Q_{n} \text{ contains a Hamilton cycle} \\
\\
\text{Proof:} \\
\text{Let } G = Q_{n} \square Q_{m} = (V, E) \\
\text{Let } \begin{eqsys}{}
v = (v_{1}, \dots, v_{n}) \in V_{Q_{n}} \\
u = (u_{1}, \dots, u_{m}) \in V_{Q_{m}} \\
\end{eqsys} \\
((v_{1}, \dots, v_{n}), (u_{1}, \dots, u_{m})) \in V \iff (v_{1}, \dots, v_{n}, u_{1}, \dots, u_{m}) \in V_{Q_{n+m}} \\
\implies V = V_{Q_{n+m}} \\
\\
\text{Case 1. } v_{1} = v_{2} = v \\
\Set{ (v_{1}, u_{1}), (v_{2}, u_{2}) } \in E \iff \Set{ u_{1}, u_{2} } \in E_{Q_{m}} \iff \exists! i \in [1, m]: u_{1_{i}} \neq u_{2_{i}} \\
\iff \Set{ (v_{1}, \dots, v_{n}, u_{1_{1}}, \dots, u_{1_{m}}), (v_{1}, \dots, v_{n}, u_{2_{1}}, \dots, u_{2_{m}}) } \in E_{Q_{n+m}} \\
\text{Case 2. } u_{1} = u_{2} = u \\
\Set{ (v_{1}, u_{1}), (v_{2}, u_{2}) } \in E \iff \Set{ v_{1}, v_{2} } \in E_{Q_{n}} \iff \exists! i \in [1, n]: v_{1_{i}} \neq v_{2_{i}} \\
\iff \Set{ (v_{1_{1}}, \dots, v_{1_{n}}, u_{1}, \dots, u_{m}), (v_{2_{1}}, \dots, v_{2_{n}}, u_{1}, \dots, u_{m}) } \in E_{Q_{n+m}} \\
\implies E = E_{Q_{n+m}} \\
\implies \boxed{ Q_{n} \square Q_{m} = G = Q_{n+m} } \\
\\
\text{Let us prove that } Q_{n} \text{ has a Hamilton cycle for all } n \geq 2 \\
\text{Proof is by induction on } \abs{V} \\
\text{Base case. } n = 2 \\
\text{For simplicity, } 00 \text{ denotes } (0, 0), etc. \\
V_{Q_{2}} = \Set{ 00, 01, 10, 11 } \\
\Set{ \Set{ 00, 01 }, \Set{ 01, 11 }, \Set{ 11, 10 }, \Set{ 10, 00 } } \subseteq E_{Q_{2}} \\
C = (00, 01, 11, 10, 00) \text{ is a Hamilton cycle in } Q_{2} \\
n = 3 \\
V = \Set{ 000, 001, 010, 011, 100, 101, 110, 111 } \\
\begin{eqsys}
\Set{ \Set{ 000, 001 }, \Set{ 001, 011 }, \Set{ 011, 010 }, \Set{ 010, 110 } } \subseteq E_{Q_{3}} \\ 
\Set{ \Set{ 110, 111 }, \Set{ 111, 101 }, \Set{ 101, 100 }, \Set{ 100, 000 } } \subseteq E_{Q_{3}} \\
\end{eqsys} \\
C = (000, 001, 011, 010, 110, 111, 101, 100, 000) \text{ is a Hamilton cycle in } Q_{3} \\
\\
\text{Inductive step. } \\
\text{Let } \forall 2 \leq n' \leq n: Q_{n'} \text{ has a Hamilton cycle} \\
\text{Let } n \geq 4 \\
Q_{n} = Q_{2} \square Q_{n-2} \text{ as proved above} \\
n \geq 4 \implies n-2 \geq 2 \\
\text{By inductive hypothesis both } Q_{2}, Q_{n-2} \text{ have a Hamilton cycle} \\
\implies Q_{n} \text{ also has a Hamilton cycle, as proved in 5c} \\
\implies \boxed{ \forall n \geq 2: Q_{n} \text{ has a Hamilton cycle} } \\
}
$$
