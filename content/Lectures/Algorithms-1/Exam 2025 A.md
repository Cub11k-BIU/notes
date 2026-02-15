---
{"publish":true,"created":"12/02/26, 14:16","modified":"2026-02-12T18:22:11.074+02:00","tags":["Academia","Lecture","Algorithms-1"],"cssclasses":""}
---

## 1a
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a connected undirected graph} \\
\text{Let } \omega: E \to \mathbb{R} \\
\text{Define } MST \text{ of } G \\
\\
\text{Solution:} \\
\text{First, let us define } \omega: \mathcal{P}(E) \to \mathbb{R}, \omega(E') = \sum_{e \in E'} \omega(e) \\
\text{Let } \mathcal{G} \text{ be a set of graphs on } V \\
\text{Similarly, } \omega: \mathcal{G} \to \mathbb{R}, \omega(G') = \omega(E(G')) \\
\text{Graph } T = (V, E_{T}) \text{ is called an MST if} \\
\begin{align}
1. & \quad T \text{ is a tree} \\
2. & \quad \forall E' \subseteq E, G[E'] \text{ is a tree}: \omega(T) = \omega(E_{T}) \leq \omega(E') = \omega(G[E']) \\
\end{align} \\
\\
\text{Problems:} \\
\text{Defining ST (spanning tree) first is important(!)} \\
}
$$
## 1b
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a graph} \\
\text{Let } \exists s \in V: deg(s) = 8 \\
\text{Show an algorithm that finds MST of } G \text{ such that} \\
\text{at most } 2 \text{ edges incident to } s \text{ are in the MST} \\
\text{Explain correctness and give runtime complexity} \\
\\
\text{Solution:} \\
\text{Consider } \binom{8}{2} \text{ copies of graph } G \text{ where:} \\
\text{Each copy removes edges of incident to $s$ such that } deg(s) = 2 \\
\\
\text{In every one of these copies, it is possible to find its MST if the copy is connected} \\
\text{and in each one of these copies, an MST contains at most 2 edges incident to } s \\
\text{and is an ST of } G \\
\text{There are no other STs of } G \text{ that fulfill that property} \\
\implies \text{Minimum of these STs is an MST of } G \text{ that fulfills that property} \\
\text{The algorithm is then:} \\
\begin{align}
1. & \quad \text{for each copy } G' \text{ of } G: \\
2. & \qquad \text{Run DFS to check whether } G' \text{ is connected} \\
3. & \qquad \text{if connected}: \\
4. & \qquad \quad \text{Run Prim/Kruskal/Boruvka/Yao/KKT to find MST of } G' \\
5. & \quad \text{Return minimum of these STs} \\
\end{align} \\
\\
\text{Runtime is then } O(k \cdot (T_{DFS} + T_{MST})) = O(T_{MST}) = O(\abs{E}\log \log \abs{V}) \text{ for Yao} \\
\text{or expected } O(\abs{E} + \abs{V}) \text{ for KKT} \\
}
$$
## 1c
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a graph} \\
\text{Let } \exists s \in V: deg(s) = 8 \\
\text{Show an algorithm that finds MST of } G \text{ such that} \\
\text{at least } 2 \text{ edges incident to } s \text{ are in the MST} \\
\text{Explain correctness and give runtime complexity} \\
\\
\text{Solution:} \\
\text{Consider } \binom{8}{2} \text{ pairs of edges incident to } s, e_{i}, e_{j} \\
\text{We will run a modified MST algorithm that always starts from the graph with } e_{i},e_{j} \\
\text{instead of an empty graph (this can be achieved by contradcting these two edges)} \\
\text{And then take the minimum ST of $\binom{8}{2}$ STs that are returned} \\
\text{Correctness follows from the fact that no other STs fulfill th desired property} \\
\text{Runtime is the same as for finding an MST once} \\
}
$$
## 2
$$
\displaylines{
\text{Given a task of collecting } n \text{ types of coupons, there are two options:} \\
\text{For the cost of 1 unit it is possible to buy a random coupon} \\
\text{For the cost of 5 units it is possible to buy a random missing coupon} \\
\text{The goal is to collect all types for as little cost as possible} \\
\\
\text{You are given an algorithm:} \\
\begin{align}
 & ALG(n, k): \\
1. & \quad \text{while less than } k \text{ types collected}: \\
2. & \qquad \text{buy a random coupon} \\
3. & \quad \text{while less than } n \text{ types collected}: \\
4. & \qquad \text{buy a random missing coupon} \\
\end{align} \\
}
$$
### 2a
$$
\displaylines{
\text{Compute its expected cost as a function of } n, k \\
\\
\text{Solution:} \\
\text{Let } X = \text{number of coupons bought} \\
\text{Let } \forall i \in [1, n]: X_{i} \text{ be the number of coupons bought after} \\
(i-1)\text{-th type was collected and until } i\text{-th type is collected} \\
\forall i \in [1, k]: X_{i} \text{ is a geometric variable with } p = \frac{n-i+1}{n} \implies E[X_{i}] = \frac{n}{n-i+1} \\
\forall i \in [k+1, n]: X_{i} = 1 \\
\\
\text{Clearly, } X = \sum_{i=1}^{n} X_{i} = \sum_{i=1}^{k} X_{i} + (n-k) \\
\text{In addition, cost is } S = \sum_{i=1}^{k} X_{i} + 5(n-k) \\
\implies E[X] = \sum_{i=1}^{k} E[X_{i}] + 5(n-k) = \sum_{i=1}^{k} \frac{n}{n-i+1} + 5(n-k) = \\
= n \cdot \sum_{j=n-k+1}^{n} \frac{1}{j} + 5(n-k) = n(H_{n} - H_{n-k}) + 5(n-k) \leq \\
\leq n(\ln n - \ln(n-k)) + 5(n-k) = n\ln\left( \frac{n}{n-k} \right) + 5(n-k) \\
}
$$
## 2b
$$
\displaylines{
\text{Find } k \text{ such that } E[S] \text{ is minimal} \\
\\
\text{Solution:} \\
E[S] \leq n\ln\left( \frac{n}{n-k} \right) + 5(n-k) \\
\text{Let } f(k) = n\ln\left( \frac{n}{n-k} \right) + 5(n-k) \\
\frac{df}{dk}(k) = \frac{n}{n-k} - 5 \\
\frac{n}{n-k} - 5 = 0 \iff n-k = \frac{n}{5} \iff k = \frac{4n}{5} \\
\implies \min_{k}\lrc{E[S]} = n(\ln(5) + 4) \\
}
$$
## 3
$$
\displaylines{
\text{Input: } r_{1},r_{2},\dots,r_{n},c_{1},\dots,c_{m} \in \mathbb{N} \\
\text{Output: whether there exists a matrix } A \in \mathbb{B}^{n \times m} \text{ such that} \\
\begin{eqsys}
\forall i \in [1, n]: \sum_{j=1}^{m} A_{ij} = r_{i} \\
\forall j \in [1, m]: \sum_{i=1}^{n} A_{ij} = c_{j} \\
\end{eqsys} \\
\\
\text{Show an algorithm that solves this problem, explain correctness and give runtime} \\
\text{Hint: flow networks} \\
\\
\text{Solution:} \\
\text{Let } \mathcal{F} = (G = (V, E), s, t, c) \text{ be a flow netowork} \\
\text{Let } V_{1} = \Set{ v_{i} \mid i \in [n] }, V_{2} = \Set{ u_{j} \mid j \in [m] } \\
V = V_{1} \cup V_{2} \cup \Set{ s, t } \\
E = \Set{ (s, v_{i}) \mid v_{i} \in V_{1} } \cup \Set{ (v_{i}, u_{j}) \mid v_{i} \in V_{1}, u_{j} \in V_{2} } \cup \Set{ (u_{j}, t) \mid u_{j} \in V_{2} } \\
\text{Let } c(e) = \begin{cases}
r_{i} & e = (s, v_{i}) \\
1 & e = (v_{i}, u_{j}) \\
c_{j} & e = (u_{j}, t) \\
0 & \text{otherwise} \\
\end{cases} \\
\\
\text{Algorithm will find maximum flow } f^{*} \text{ in } \mathcal{F} \\
\text{And return } \abs{f^{*}} = \sum_{i=1}^{n} r_{i} = \sum_{j=1}^{m} c_{j} \\
\\
\text{Correctness:} \\
\text{First, note that the flow in } \mathcal{F} \text{ corresponds to the binary matrix:} \\
\forall i, j: A_{ij} = f(v_{i}, u_{j}) \\
\\
\text{Second, any flow in } \mathcal{F} \text{ has the following properties:} \\
f(s, v_{i}) = \sum_{j=1}^{m} f(v_{i}, u_{j}) = \sum_{j=1}^{m} A_{ij} \\
f(u_{j}, t) = \sum_{i=1}^{n} f(v_{i}, u_{j}) = \sum_{i=1}^{n} A_{ij} \\
\text{Clearly, } \abs{f^{*}} = \sum_{i=1}^{n} f(s, v_{i}) = \sum_{j=1}^{m} f(u_{j}, t) \\
\implies \begin{eqsys}
\abs{f^{*}} \leq \sum_{i=1}^{n} r_{i} \\
\abs{f^{*}} \leq \sum_{j=1}^{m} c_{j} \\
\end{eqsys} \\
\text{The equality is achieved} \iff \begin{eqsys}
\forall i \in [n]: f(s, v_{i}) = \sum_{j=1}^{m} f(v_{i}, u_{j}) = \sum_{j=1}^{m} A_{ij} = r_{i} \\
\forall j \in [m]: f(u_{j}, t) = \sum_{i=1}^{n} f(v_{i}, u_{j}) = \sum_{i=1}^{n} A_{ij} = c_{j} \\
\end{eqsys} \\
\text{There can be no larger flow and so the algorithm is proven to be correct} \\
\text{Note that } \abs{V} = n + m, \abs{E} = O(n \cdot m) \\
\implies \abs{f^{*}} \leq \abs{E} \\
\text{Runtime of Ford-Fulkerson will be } O(\abs{f^{*}}\abs{E}) = O(\abs{E}^{2}) = O(n^{2}m^{2}) \\
\text{Runtime of Edmonds-Karp will be } O(\abs{V}\abs{E}^{2}) = O((n+m)n^{2}m^{2}) \\
\text{Runtime of Dinic will be } O(\abs{V}^{2}\abs{E}) = O((n+m)^{2}nm) \\
}
$$
## 4
$$
\displaylines{
\text{Let } M \in \mathbb{N} \\
\text{Input: } A, B \in ([M] \cup \Set{ \infty })^{n \times n} \\
\text{Output: } C = A \star B \text{ is defined as:} \\
\forall i, j \in [n]: c_{ij} = \min_{k \in [n]}\lrc{a_{ik} + b_{kj}} \\
}
$$
### 4a
$$
\displaylines{
\text{Solve the problem for } M = 1 \\
\\
\text{Solution:} \\
\text{We will define matrices} \\
\hat{A}: \hat{a}_{ij} = \begin{cases}
1 & a_{ij} = 1 \\
0 & a_{ij} = \infty \\
\end{cases} \\
\hat{B} = \hat{b}_{ij} = \begin{cases}
1 & b_{ij} = 1 \\
0 & b_{ij} = \infty \\
\end{cases} \\
\text{Then compute } \hat{C} = \hat{A} \cdot \hat{B} \text{ using BMM} \\
\text{And return } C: c_{ij} = \begin{cases}
2 & \hat{c}_{ij} = 1 \\
\infty & \hat{c}_{ij} = 0 \\
\end{cases} \\
\\
\text{Correctness:} \\
\begin{array}{c|cc}
. & 1 & 0 \\
\hline
1 & 1 & 0 \\
0 & 0 & 0 \\
\end{array} \text{ is the multiplication matrix of BMM} \\
\begin{array}{c|cc}
+ & 1 & \infty \\
\hline
1 & 2 & \infty \\
\infty & \infty & \infty \\
\end{array} \text{ is the multiplication matrix of } A \star B \\
\text{It is clear that } 0 \text{ in BMM is equivalent to } \infty \text{ in } A \star B \\
\\
\text{Runtime:} \\
\text{Converting matrices is done in } O(n^{2}), \text{ BMM is performed in } O(n^{\omega}) \\
\text{Total runtime is } O(n^{\omega}) \\
}
$$
### 4b
$$
\displaylines{
\text{Solve for } M \in \mathbb{N} \\
\\
\text{Solution:} \\
\text{Similarly to 4a, define matrices } \forall r \in [M]: \\
A_{r}: (a_{r})_{ij} = \begin{cases}
1 & a_{ij} = r \\
0 & a_{ij} = \infty \\
\end{cases} \\
B_{r}: (b_{r})_{ij} = \begin{cases}
1 & b_{ij} = r \\
0 & b_{ij} = \infty \\
\end{cases} \\
\\
\text{And compute } \forall r_{1}, r_{2} \in [M]: C_{r_{1},r_{2}} = A_{r_{1}} \cdot B_{r_{2}} \text{ using BMM} \\
\text{Then, } C_{ij} = \min_{r_{1},r_{2} \in [M]}\lrc{r_{1} + r_{2} \mid (c_{r_{1},r_{2}})_{ij} = 1} \\
\\
\text{Correctness follows from the fact that:} \\
\forall r_{1}, r_{2} \in [M]: (c_{r_{1},r_{2}})_{ij} = 1 \iff (a_{r_{1}})_{ij} = 1 = (b_{r_{2}})_{ij} \iff a_{ij} = r_{1}, b_{ij} = r_{2} \\
\text{And } c_{ij} \text{ is the minimum of all these, or $\infty$ if none are true} \\
\\
\text{Runtime is the runtime of 4a performed } M^{2} \text{ times} \\
\text{Which is } O(M^{2} \cdot n^{\omega}) \\
}
$$
