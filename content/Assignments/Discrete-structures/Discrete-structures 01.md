---
{"publish":true,"created":"26/10/25, 15:10","modified":"2025-11-21T21:10:02.196+02:00","tags":["Academia","Assignment","Discrete-structures"],"cssclasses":""}
---

# 1a
$$
\displaylines{
\text{Let } (A, \leq) \text{ be an ordered set} \\
\text{Let } R \text{ be a relation on } A^{n} \times A^{n} \\
\text{Let } \forall (a_{1}, \dots, a_{n}), (a_{1}', \dots, a_{n}') \in A^{n} \\
: ((a_{1}, \dots, a_{n}), (a_{1}', \dots, a_{n}')) \in R \\
\iff (\forall i \in [1, n]: a_{i} = a_{i}') \lor a_{1} < a_{1}' \lor (a_{1} = a_{1}', a_{2} < a_{2}') \lor \dots \\
\dots \lor (\forall i \in [1, n-1]: a_{i} = a_{i}', a_{n} < a_{n}') \\
\\
\text{Prove: } R \text{ is a total order} \\
\\
\text{Proof:} \\
\text{Reflexivity:} \\
\forall (a_{1}, \dots, a_{n}) \in A^{n}: \forall i \in [1, n]: a_{i} = a_{i} \implies ((a_{1}, \dots, a_{n}), (a_{1}, \dots, a_{n})) \in R \\
\\
\text{Anti-symmetry:} \\
\text{Let } (a_{1}, \dots, a_{n}), (a_{1}', \dots, a_{n}') \in A^{n} \\
\text{Let } (a_{1}, \dots, a_{n}) R (a_{1}', \dots, a_{n}') \text{ and } (a_{1}', \dots, a_{n}') R (a_{1}, \dots, a_{n}) \\
\implies \left[\begin{array}{}
\left\{\begin{array}{}
\exists i_{1} \in [1, n]: a_{i_{1}} < a_{i_{1}}' \text{ and } \forall j \in [1, i_{1}-1]: a_{j} = a_{j}' \\
\exists i_{2} \in [1, n]: a_{i_{2}}' < a_{i_{2}} \text{ and } \forall j \in [1, i_{2}-1]: a_{j} = a_{j}' \\
\end{array}\right. \\
(a_{1}, \dots, a_{n}) = (a_{1}', \dots, a_{n}') \\
\end{array}\right. \\
\text{Let } i_{1} = i_{2} \implies a_{i_{1}} < a_{i_{1}}' \land a_{i_{1}}' < a_{i_{1}} - \text{Contradiction!} \\
\text{Let } i_{1} < i_{2} \implies \forall j \in [i_{1}, i_{2}]: a_{j} = a_{j}' \land a_{i_{1}} < a_{i_{1}}' - \text{Contradiction!} \\
\text{Let } i_{2} < i_{i} \implies \forall j \in [i_{2}, i_{1}]: a_{j} = a_{j}' \land a_{i_{2}}' < a_{i_{2}} - \text{Contradiction!} \\
\implies \not\exists i_{1}, i_{2} \implies (a_{1}, \dots, a_{n}) = (a_{1}', \dots, a_{n}') \\
\\
\text{Transitivity:} \\
\text{Let } (a_{1}, \dots, a_{n}), (b_{1}, \dots, b_{n}), (c_{1}, \dots, c_{n}) \in A^{n} \\
\text{Let } (a_{1}, \dots, a_{n}) R (b_{1}, \dots, b_{n}), (b_{1}, \dots, b_{n}) R (c_{1}, \dots, c_{n}) \\
(a_{1}, \dots, a_{n}) = (b_{1}, \dots, b_{n}) \text{ or } (b_{1}, \dots, b_{n}) = (c_{1}, \dots, c_{n}) \text{ are trivial} \\
\implies \left\{\begin{array}{}
\exists i_{1} \in [1, n]: a_{i_{1}} < b_{i_{1}} \text{ and } \forall j \in [1, i_{1}-1]: a_{j} = b_{j} \\
\exists i_{2} \in [1, n]: b_{i_{2}} < c_{i_{2}} \text{ and } \forall j \in [1, i_{2}-1]: b_{j} = c_{j} \\
\end{array}\right. \\
\text{Let } i_{1} \leq i_{2} \\
\implies \forall i \in [1, i_{1} - 1]: a_{i} = b_{i} = c_{i} \land a_{i_{1}} < b_{i_{1}} = c_{i_{1}} \implies (a_{1}, \dots, a_{n}) R (c_{1}, \dots, c_{n}) \\
\text{Let } i_{1} > i_{2} \\
\implies \forall i \in [1, i_{1} - 1]: a_{i} = b_{i} = c_{i} \land a_{i_{1}} < b_{i_{1}} \leq c_{i_{1}} \implies (a_{1}, \dots, a_{n}) R (c_{1}, \dots, c_{n}) \\
R \text{ is reflexive, anti-symmetric and transitive} \implies R \text{ is an order} \\
\text{Let } (a_{1}, \dots, a_{n}), (b_{1}, \dots, b_{n}) \in A^{n} \\
\text{Let } (a_{1}, \dots, a_{n}) \not R (b_{1}, \dots, b_{n}) \\
\implies \left\{\begin{array}{}
(a_{1}, \dots, a_{n}) \neq (b_{1}, \dots, b_{n}) \\
\not\exists i \in [1, n]: a_{i} < b_{i} \land \forall j \in [1, i - 1] : a_{j} = b_{j} \\
\end{array}\right. \\
\implies \left\{\begin{array}{}
\exists i \in [1, n]: a_{i} \neq b_{i} \land \forall j \in [1, i-1]: a_{j} = b_{j} \\
\forall k \in [1, n]: b_{k} \leq a_{k} \\
\end{array}\right. \\
\implies \exists i \in [1, n]: b_{i} < a_{i} \land \forall j \in [1, i-1]: a_{j} = b_{j} \\
\implies (b_{1}, \dots, b_{n}) R (a_{1}, \dots, a_{n}) \implies \boxed{ R \text{ is a total order} } \\
}
$$
---
# 1b
$$
\displaylines{
\text{Let } X = \Set{ 1, 2, \dots, 10 } \\
\text{Let } O = \Set{ R | R \text{ is an equivalence relation on } X } \\
\text{Let } \leq \text{ be a relation on } O \\
\forall R_{1}, R_{2} \in O: R_{1} \leq R_{2} \iff \left(\left\lvert {^{\displaystyle X}}\Big/{_{\displaystyle R_{1}}} \right\rvert < \left\lvert {^{\displaystyle X}}\Big/{_{\displaystyle R_{2}}} \right\rvert\right) \lor (R_{1} = R_{2}) \\
\text{Prove: } \leq \text{ is an order} \\
\text{Prove or disprove: } \leq \text{ is a total order} \\
\text{Find, if exists, a minimum and a maximum of } (O, \leq) \\
\\
\text{Solution:} \\
\text{Reflexivity:} \\
\text{Let } R_{1} \in O \\
R_{1} = R_{1} \implies R_{1} \leq R_{1} \\
\\
\text{Anti-symmetry:} \\
\text{Let } R_{1}, R_{2} \in O \\
\text{Let } R_{1} \leq R_{2} \text{ and } R_{2} \leq R_{1} \\
\implies \left[\begin{array}{}
\left\{\begin{array}{}
\left\lvert {^{\displaystyle X}}\Big/{_{\displaystyle R_{1}}} \right\rvert < \left\lvert {^{\displaystyle X}}\Big/{_{\displaystyle R_{2}}} \right\rvert \\
\left\lvert {^{\displaystyle X}}\Big/{_{\displaystyle R_{2}}} \right\rvert < \left\lvert {^{\displaystyle X}}\Big/{_{\displaystyle R_{1}}} \right\rvert \\
\end{array}\right. \\
R_{1} = R_{2} \\
\end{array}\right. \implies \left[\begin{array}{}
False \\
R_{1} = R_{2} \\
\end{array}\right. \implies R_{1} = R_{2} \\
\\
\text{Transitivity:} \\
\text{Let } R_{1}, R_{2}, R_{3} \in O \\
\text{Let } R_{1} \leq R_{2} \text{ and } R_{2} \leq R_{3} \\
R_{1} = R_{2} \text{ or } R_{2} = R_{3} \text{ are trivial} \\
\implies \left\{\begin{array}{}
\left\lvert {^{\displaystyle X}}\Big/{_{\displaystyle R_{1}}} \right\rvert < \left\lvert {^{\displaystyle X}}\Big/{_{\displaystyle R_{2}}} \right\rvert \\
\left\lvert {^{\displaystyle X}}\Big/{_{\displaystyle R_{2}}} \right\rvert < \left\lvert {^{\displaystyle X}}\Big/{_{\displaystyle R_{3}}} \right\rvert \\
\end{array}\right. \implies \left\lvert {^{\displaystyle X}}\Big/{_{\displaystyle R_{1}}} \right\rvert < \left\lvert {^{\displaystyle X}}\Big/{_{\displaystyle R_{3}}} \right\rvert \implies R_{1} \leq R_{3} \\
\leq \text{ is reflexive, anti-symmetric and transitive} \implies \leq \text{ is an order} \\
\text{Let } R_{1} = I_{X} \cup \Set{ (1, 2), (2, 1) } \in O \\
\text{Let } R_{2} = I_{X} \cup \Set{ (2, 3), (3, 2) } \in O \\
{^{\displaystyle X}}\Big/{_{\displaystyle R_{1}}} = \Set{ \Set{ 1, 2 }, \Set{ 3 }, \Set{ 4 }, \dots, \Set{ 10 } } \\
{^{\displaystyle X}}\Big/{_{\displaystyle R_{2}}} = \Set{ \Set{ 1 }, \Set{ 2, 3 }, \Set{ 4 }, \Set{ 5 }, \dots, \Set{ 10 } } \\
\implies \left\lvert {^{\displaystyle X}}\Big/{_{\displaystyle R_{1}}} \right\rvert = \left\lvert {^{\displaystyle X}}\Big/{_{\displaystyle R_{2}}} \right\rvert \\
(R_{1} \neq R_{2}) \land \left(\left\lvert {^{\displaystyle X}}\Big/{_{\displaystyle R_{1}}} \right\rvert \not< \left\lvert {^{\displaystyle X}}\Big/{_{\displaystyle R_{2}}} \right\rvert\right) \land \left(\left\lvert {^{\displaystyle X}}\Big/{_{\displaystyle R_{2}}} \right\rvert \not< \left\lvert {^{\displaystyle X}}\Big/{_{\displaystyle R_{1}}} \right\rvert\right) \\
\implies R_{1} \not\leq R_{2} \land R_{2} \not\leq R_{1} \implies \leq \text{ is not a total order} \\
\\
\text{Let } R_{M} = I_{X} \in O \\
\text{Let } R_{m} = X \times X \in O \\
\text{Let } R \in O: R \neq R_{m} \text{ and } R \neq R_{M} \\
R \neq R_{M} \implies \exists x_{1} \neq x_{2} \in X: (x_{1}, x_{2}) \in R \text{ and } (x_{2}, x_{1}) \in R \\
\implies x_{2} \in [x_{1}]_{R} \implies [x_{2}]_{R} = [x_{1}]_{R} \implies \left\lvert {^{\displaystyle X}}\Big/{_{\displaystyle R}} \right\rvert < \left\lvert X \right\rvert = \left\lvert {^{\displaystyle X}}\Big/{_{\displaystyle R_{M}}} \right\rvert \\
\implies \boxed{ \forall R \in O: R \leq R_{M} } \\
R \neq R_{m} \implies \exists x_{1} \neq x_{2} \in X: (x_{1}, x_{2}) \not\in R \text{ and } (x_{2}, x_{1}) \not\in R \\
\implies x_{2} \not\in [x_{1}]_{R} \implies [x_{2}]_{R} \neq [x_{1}]_{R} \implies \left\lvert {^{\displaystyle X}}\Big/{_{\displaystyle R_{m}}} \right\rvert = 1 < \left\lvert {^{\displaystyle X}}\Big/{_{\displaystyle R}} \right\rvert \\
\implies \boxed{ \forall R \in O: R_{m} \leq R } \\
}
$$
---
# 1c
$$
\displaylines{
\text{Let } \leq \text{ be an order relation on } \mathbb{R}^{n} \\
\forall v, u \in \mathbb{R}^{n}: v \leq u \iff \forall i \in [1, n]: v_{i} \leq u_{i} \\
\text{Prove: } \leq \text{ is a partial/total order} \\
\\
\text{Proof:} \\
\text{Let } v = \begin{pmatrix}
1 \\
2 \\
v_{3} \\
\vdots \\
v_{n} \\
\end{pmatrix}, u = \begin{pmatrix}
2 \\
1 \\
u_{3} \\
\vdots \\
u_{n} \\
\end{pmatrix} \\
v_{2} > u_{2} \implies v \not\leq u \\
u_{1} > v_{1} \implies u \not\leq v \\
\implies \boxed{ \leq \text{ is a partial order} } \\
}
$$
---
# 2
$$
\displaylines{
\text{Prove: in every undirected graph there exist two vertices with the same degree} \\
\\
\text{Proof:} \\
\text{Let there be } n \text{ vertices} \\
\text{Let us try to assign different degrees to all vertices} \\
\text{Case 1. Let there be a vertex with degree } n-1 \\
\implies \text{There are no vertices with degree } 0 \\
\implies \text{There are } n-1 \text{ other vertices left and degrees from } 1 \text{ to } n-2 \\
\implies \text{By Pigeonhole principle there are at least two vertices with the same degree} \\
\text{Case 2. Let there be no vertex with degree } n-1 \\
\implies \text{There are } n \text{ vertices and degrees from } 0 \text{ to } n-2 \\
\implies \text{By Pigeonhole principle there are at least two vertices with the same degree} \\
}
$$
---
# 3
$$
\displaylines{
\text{Let } G = (V, E) \text{ be an undirected graph} \\
\text{Prove: } G \text{ has } n-1 \text{ edges and no cycles} \iff \forall u, v \in V: \exists! p(v, u) \\
\\
\text{Proof:} \\
\text{Let } G \text{ has } n-1 \text{ edges and no cycles} \\
\implies G \text{ is connected} \implies \forall v, u \in V : \exists p(v, u) \\
\text{Let } \exists p_{1}(v, u) \neq p_{2}(v, u) \\
\implies \exists p(v, v) = p_{1}(v, u) + p_{2}'(u, v) - \text{ Contradiction!} \\
\implies \forall v, u \in V : \exists! p(v, u) \\
\\
\text{Let } \forall v, u \in V : \exists! p(v, u) \\
\implies G \text{ is connected and } G \text{ has no cycles} \\
\implies G \text{ is a tree} \implies G \text{ has } n-1 \text{ edges} \\
}
$$
---
# 4a
$$
\displaylines{
\text{Prove: a complete binary tree has } \frac{n+1}{2} \text{ leaves} \\
\\
\text{Proof:} \\
\text{Let by induction: the statement holds for } T_{L}, T_{R} \\
T = (r + V_{L} + V_{R}, E_{L} \cup E_{R} \cup \Set{ \Set{ r, r_{L} }, \Set{ r, r_{R} } }) \\
T_{L} \text{ is a complete binary tree of size } \frac{n-1}{2} \\
T_{R} \text{ is a complete binary tree of size } \frac{n-1}{2} \\
\implies T_{L} \text{ and } T_{R} \text{ have } \frac{\left( \frac{n-1}{2}+1 \right)}{2} \text{ leaves} \\
\implies T \text{ has } 2 \cdot \frac{\left( \frac{n-1}{2}+1 \right)}{2} \text{ leaves} \implies T \text{ has } \frac{n+1}{2} \text{ leaves} \\
}
$$
---
# 4b
$$
\displaylines{
\text{Prove: a tree with maximal degree } k \text{ has at least } k \text{ leaves} \\
\\
\text{Proof:} \\
\text{Let } G = (V, E) \\
\text{Let } v \text{ be a vertex with degree } k \\
\text{Let } \Gamma(v) = \Set{ v, v_{1}, \dots, v_{k} } \\
\text{Case 1. Let } \forall i \in [1, k]: v_{i} \text{ is a leaf} \\
\implies G \text{ has at least } k \text{ leaves} \\
\text{Case 2. Let } \exists j \in [1, k]: v_{i} \text{ is not a leaf} \\
\text{Let } i \in [1, k] : v_{j} \text{ is not a leaf} \\
\implies \exists u \neq v \in V: \Set{ u, v_{i} } \in E \\
\text{Let } G' = (V, E \setminus \Set{ \Set{ u, v_{i} } }) \\
G'_{u} \text{ is a connected component} \\
G \text{ has no cycles} \implies G' \text{ has no cycles} \implies G'_{u} \text{ has no cycles} \\
\implies G'_{u} \text{ is a tree} \implies G'_{u} \text{ has at least 2 leaves} \\
\implies \exists w \neq u \in V : deg_{G'}(w) = 1 \\
\implies deg_{G}(w) = 1 \implies w \text{ is a leaf in } G \implies G \text{ has at least } k \text{ leaves} \\
}
$$
---
# 5
$$
\displaylines{
\text{Let } G \text{ be an undirected graph with } n > 1 \text{ vertices and } m \text{ edges} \\
\text{Let there be no triangles in } G \\
\text{Let } n \text{ be even} \\
}
$$
## 5a
$$
\displaylines{
\text{Prove: } m \leq \frac{n^{2}}{4} \\
\\
\text{Proof:} \\
G = (V, E) \\
\text{Let } \Set{ v, u } \in E \implies \Gamma(v) \cap \Gamma(u) = \emptyset \\
\implies \left\lvert \Gamma(v) \cup \Gamma(u) \right\rvert = \left\lvert \Gamma(v) \right\rvert + \left\lvert \Gamma(u) \right\rvert = d(v) + d(u) \\
\Gamma(v) \cup \Gamma(u) \subseteq V \implies d(v) + d(u) \leq n \\
\implies \sum_{\Set{ v, u } \in E} (d(v)+d(u)) \leq mn \\
\forall v \in V: d(v) \text{ is counted } d(v) \text{ times in } \sum_{\Set{ v, u } \in E} (d(v)+d(u)) \\
\implies \sum_{\Set{ v, u } \in E} (d(v)+d(u)) = \sum_{v \in V} d(v)^{2} \\
\implies \sum_{v \in V} d(v)^{2} \leq mn \\
\text{Let } \vec{v} = \begin{pmatrix}
d(v_{1}) \\
\vdots \\
d(v_{n}) \\
\end{pmatrix}, \vec{u} = \vec{1} \\
\text{By Cauchy-Schwarz inequality: } \left\lvert \langle v, u \rangle \right\rvert^{2} \leq \lVert v \rVert^{2} \cdot \lVert u \rVert^{2} \\
\implies \left( \sum_{v \in V} d(v) \right)^{2} \leq n \cdot \sum_{v \in V} d(v)^{2} \\
\implies 4m^{2} \leq mn^{2} \implies m \leq \frac{n^{2}}{4} \\
}
$$
## 5b
$$
\displaylines{
\text{Show the structure of a graph with } m = \frac{n^{2}}{4} \\
\\
\text{Solution:} \\
\text{As shown in 5a, } m \leq \frac{n^{2}}{4} \text{ by Cauchy-Schwarz inequality} \\
\text{Equality case is achieved when } v = \alpha u \implies \forall v \in V: d(v) = \alpha \\
\implies \left( \sum_{v \in V} d(v) \right)^{2} = (\alpha n)^{2} \\
\implies \alpha^{2}n^{2} = mn^{2} = \frac{n^{4}}{4} \implies \alpha^{2} = \frac{n^{2}}{4} \implies \alpha = \frac{n}{2} \\
\implies \forall v \in V: d(v) = \frac{n}{2} \\
\forall \Set{ v, u } \in E: d(v) + d(u) = 2\frac{n}{2} = n \implies \Gamma(v) \cup \Gamma(u) = V \\
\text{Let } v_{1} \in V \\
\text{Let } V_{2} = \Gamma(v_{1}) \implies \left\lvert V_{2} \right\rvert = \frac{n}{2} \\
\text{Let } V_{1} = V \setminus V_{2} \implies \left\lvert V_{1} \right\rvert = \frac{n}{2} \\
\text{Let } x, y \in V_{2} \\
\Set{ v_{1}, x }, \Set{ v_{1}, y } \in E \implies \Set{ x, y } \not\in E \\
\implies V_{2} \text{ is an independent set} \\
\text{Let } v_{2} \in V_{2} \\
\implies \Set{ v_{1}, v_{2} } \in E \implies \Gamma(v_{1}) \cup \Gamma(v_{2}) = V \implies V_{2} \cup \Gamma(v_{2}) = V \\
\underset{ V_{1} \subseteq \Gamma(v_{2}) \text{ and } d(v_{2}) = \left\lvert V_{1} \right\rvert }{ \implies } V_{1} = \Gamma(v_{2}) \\
\implies \forall v_{2} \in V_{2}: \forall v_{1} \in V_{1}: \Set{ v_{2}, v_{1} } \in E \\
\text{Let } x, y \in V_{1}, v_{2} \in V_{2} \\
\Set{ v_{2}, x }, \Set{ v_{2}, y } \in E \implies \Set{ x, y } \not\in E \implies V_{1} \text{ is an independent set} \\
V_{1} \text{ and } V_{2} \text{ are independent sets where each vertex in } V_{1} \text{ is adjacent to each vertex in } V_{2} \\
\implies G \text{ is a bipartite graph with equal halves, or so called } K_{\frac{n}{2}, \frac{n}{2}} \\
}
$$
## 5c
$$
\displaylines{
\text{Prove without using 5a: graph with } n = 2k \text{ and } m = k^{2} + 1 \text{ edges has a triangle} \\
\\
\text{Proof:} \\
\text{Base case. Let } n = 4 \\
m = 5 \implies \text{There is a triangle (trivial)} \\
\text{Induction step. Let } \forall n' < n: \forall G_{n'}: \text{Statement holds} \\
\text{Let } G = (V, E) \text{ such that } n = 2k, m = k^{2} + 1 \\
\text{Let us remove } 2 \text{ connected vertices } v, u \\
G' = (V \setminus \Set{ v, u }, E') \\
\left\lvert E \right\rvert = k^{2} + 1 \\
\left\lvert E' \right\rvert = k^{2} + 1 - d(v) - d(u) + 1 \\
\text{Let us prove that there is a triangle in } G \text{ involving } v, u \text{ or there is a triangle in } G' \\
\text{Case 1. Let } \left\lvert E' \right\rvert \geq (k-1)^{2} + 1 \\
\implies G' \text{ has a triangle} \implies G \text{ has a triangle} \\
\text{Case 2. Let } \left\lvert E' \right\rvert < (k-1)^{2} + 1 \\
\implies k^{2} + 2 - d(v) - d(u) < k^{2} - 2k + 2 \implies d(v) + d(u) > 2k = n \\
\implies \text{By pigeonhole principle } \exists w \in V : \Set{ v, w }, \Set{ u, w } \in E \\
\implies G \text{ has a triangle } (v, u, w, v) \\
\implies \text{Statement is proved by induction} \\
}
$$
---
