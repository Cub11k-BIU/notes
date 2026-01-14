---
{"publish":true,"created":"13/01/26, 13:09","modified":"2026-01-14T13:02:24.750+02:00","tags":["Academia","Lecture","Algorithms-1"],"cssclasses":""}
---

# Breaking symmetry
Let there be $n$ players. Our goal is to choose one (or rather let each player decide whether he is to be chosen or not). Let each player follow the exact same algorithm.
Clearly, this algorithm cannot be deterministic, as all players will either all choose themselves or all not choose themselves.
A possible solution is to let each player perform a trial with chance of success $p$.
We'd like only one player to succeed, to choose him.
$$
\displaylines{
\text{Let } n_{i} = \text{number of players who succeeded} \\
n_{i} \sim Bin(n, p) \implies P(n_{i} = 1) = \binom{n}{1}p(1-p)^{n-1} = np(1-p)^{n-1} \\
\text{Differentiating this on } dp \text{ will yield maximum probability for } p = \frac{1}{n} \\
\implies P(n_{i} = 1) = n\frac{1}{n}\left( 1-\frac{1}{n} \right)^{n-1} = \frac{\left( 1-\frac{1}{n} \right)^{n}}{1-\frac{1}{n}} \leq \frac{1}{e} \cdot \frac{n}{n-1} \approx \frac{1}{e} \\
}
$$
## LOCAL model of distributed computation
Let there be a distributed computation network graph $G = (V, E)$ with $n$ vertices. Each vertex is a computer and each edge is a connection.
Each vertex has no unique ID and performs the exact same algorithm.
The runtime is defined as the number of "rounds"
Each round contains the following:
- Each vertex performs the local algorithms computation, we do not care about the cost of that algorithm. All computations are done in parallel.
- Each vertex can send messages of arbitrary size to its neighbors
- Each vertex can receive messages from its neighbors, but can only react in the next round(!)

What are the challenges?
- Vertices have no IDs, so they can't pass a list of their neighbors to other vertices
- Vertex is unaware of what happens outside of its immediate state
- Vertices need to be synchronized somehow
### LOCAL Random choice
Let each vertex choose an ID from $\Set{ 1, 2, \dots, n }$
What is the probability that there exist two vertices with the same ID?
$$
\displaylines{
\text{Let } n_{i} = \text{number of vertices with ID } i \\
n_{i} \sim Bin\left( n, \frac{1}{n} \right) \\
P(n_{i} = 0) = \binom{n}{0}\left( 1-\frac{1}{n} \right)^{n} \approx \frac{1}{e} \\
P(\exists i \in [1, n]: n_{i} = 0) = \bigcup_{i=1}^{n} P(n_{i} = 0) \leq \sum_{i=1}^{n} P(n_{i} = 0) \approx \frac{n}{e} \\
P(\exists i \in [1, n]: n_{i} = 0) = \frac{n^{n}-n!}{n^{n}} \underset{ n \to \infty }{ \to } 1 \\
\text{Probability that there exists an ID that is not chosen is relatively high} \\
\implies \text{Probability that there exist two vertices with the same ID is relatively high} \\
}
$$
What can we do? We can enlarge the interval!
Let each vertex choose an ID from $\Set{ 1, 2, \dots, n^{c} }$ for some constant $c$
$$
\displaylines{
P(ID(u) = ID(v)) = \frac{1}{n^{c}} \\
P(\exists u \neq v \in V: ID(u) = ID(v)) = \bigcup_{u \neq v \in V} P(ID(u) = ID(v)) \leq \sum_{u \neq v \in V} \frac{1}{n^{c}} = \\
= \frac{\binom{n}{2}}{n^{c}} < \frac{n^{2}}{n^{c}} = \frac{1}{n^{c-2}} \\
\implies \text{For some constant } c > 2 \text{ the chance is quite low} \\
}
$$
### Graph coloring problem
$$
\displaylines{
\text{Let } c: V \to C : \forall \Set{ u, v } \in E: c(u) \neq c(v) \\
\text{The goal is to find a minimum } C \text{ such that } c \text{ exists} \\
}
$$
An iterative greedy algorithm can find a coloring of any graph $G$ in $\Delta(G)+1$ colors
Let us examine a distributed algorithm that can color a graph in $2\Delta(G)$ colors
$$
\displaylines{
\text{Let } \Delta = \Delta(G) \\
\begin{align}
& Color(\Delta): \\ \\
1. & \quad p \leftarrow [2\Delta] \\
2. & \quad \text{while } True: \\
3. & \qquad \text{pick random color } c \in p \\
4. & \qquad \text{send } c \text{ to neighbors} \\
5. & \qquad \text{receive active neighbors' colors} \\
6. & \qquad \text{if no neighbors have color } c: \\
7. & \qquad \quad \text{send } c \text{ to neighbors as a chosen color} \\
8. & \qquad \quad \text{return} \\
9. & \qquad p \leftarrow p \setminus \Set{ c' \mid c' \text{ is chosen by a neighbor} } \\
\end{align} \\
\\
\text{What is the probability that we finish in } k \text{ iterations?} \\
\text{Let } u \in V \\
P(u \text{ is colored in } 1 \text{ iteration}) = \frac{2\Delta-deg(u)}{2\Delta} \geq \frac{\Delta}{2\Delta} = \frac{1}{2} \\
\\
\text{Let } V_{i} = \text{vertices not colored in $i$-th iteration} \\
\text{Let } n_{0} = \abs{V} \\
\text{Let } n_{i} = \abs{V_{i}} \\
E[n_{1}] = E[n_{0} - \text{number of colored vertices in 1 iteration}] \leq n_{0} - \frac{n_{0}}{2} = \frac{n_{0}}{2} \\
\\
\text{In each iteration, probability that vertex is not colored is at most } \frac{1}{2}: \\
P(u \text{ is colored in } i\text{-th iteration}) = \frac{2\Delta - deg_{i}(u)}{2\Delta - (deg(u) - deg_{i}(u))} \leq \frac{\Delta}{2\Delta} = \frac{1}{2} \\
\implies P(u \in V_{i}) \leq \frac{1}{2^{i}} \\
\implies E[n_{i}] = \sum_{v \in V} P(v \in V_{i}) \leq \frac{n_{0}}{2^{i}} \\
\text{From this follows that } E[n_{\log n_{0}+1}] \leq \frac{1}{2} < 1 \\
\text{But this function is not linear, so we cannot infer } E[k] \leq \log n_{0} + 1 \\
}
$$
---
$$
\displaylines{
\text{A useful inequality is Markov's one:} \\
P(X > t) < \frac{E[X]}{t} \\
P(X > tE[X]) < \frac{1}{t} \\
\\
\text{Let a "good" iteration be one that colors at least } \frac{1}{4} \text{ vertices} \\
P\left( n_{i} \geq \frac{3}{4}n_{i-1} \right) \leq \frac{E[n_{i}]}{\frac{3}{4}n_{i-1}} \leq \frac{\frac{1}{2}n_{i-1}}{\frac{3}{4}n_{i-1}} = \frac{2}{3} \\
\implies P\left( n_{i} < \frac{3}{4}n_{i-1} \right) \geq \frac{1}{3} \\
\implies \text{Probability of a good iteration is at least } \frac{1}{3} \\
\text{So how many "good" iterations do we need?} \\
n_{i} < \left( \frac{3}{4} \right)^{i}n_{0} \\
\left( \frac{3}{4} \right)^{i}n_{0} < 1 \implies i = \log_{\frac{4}{3}}n_{0} + 1 \text{ "good" iterations guarantees } n_{i} < 1 \\
\\
\text{Let } d_{i} = \text{number of iterations until the $i$-th "good" iteration since last one} \\
d_{i} \sim Geom(p) \text{ where } p \geq \frac{1}{3} \\
\implies E[d_{i}] = \frac{1}{p} \leq 3 \\
\text{Let } k = \text{number of iterations to finish} \\
E[k] = E\left[ \sum_{i=1}^{\log_{\frac{4}{3}}n + 1} d_{i}  \right] = \sum_{i=1}^{\log_{\frac{4}{3}}n + 1} E[d_{i}] \leq 3\left( \log_{\frac{4}{3}}n + 1 \right) \\
}
$$
Let us now calculate the probability that algorithm does terminate after $c \cdot \log n_{0}$ iterations for $c \geq 2$ 
$$
\displaylines{
P(n_{c\log n_{0}} < 1) = 1 - P(n_{c\log n_{0}} \geq 1) \geq 1 - \frac{E[n_{c\log n_{0}}]}{1} \geq 1 - \frac{n_{0}}{2^{c\log n_{0}}} = \\
= 1 - \frac{n_{0}}{n_{0}^{c}} = 1 - \frac{1}{n_{0}^{c-1}} \\
\text{This probability is relatively high} \\
}
$$
