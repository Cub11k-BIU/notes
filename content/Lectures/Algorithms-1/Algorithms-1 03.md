---
{"publish":true,"created":"11/11/25, 13:11","modified":"2025-11-21T21:10:13.905+02:00","tags":["Academia","Lecture","Algorithms-1"],"cssclasses":""}
---

## Breadth First Search
### Input
$$
\displaylines{
G = (V, E) \text{ directed or undirected graph} \\
s \in V \\
}
$$
### Output
$$
\displaylines{
\text{Array } d, \forall v \in V: d[v] = \delta(s, v) \\
\text{Where } \forall v, u \in V: \delta(v, u) = \begin{cases}
\min\{\abs{p(v, u)}\} & \exists p(v, u) \\
\infty & \text{otherwise} \\
\end{cases} \\
\\
\forall v \in V: (v_{0} = s, v_{1}, \dots, v_{k} = v) \\
\text{Can be stored as: } (e_{1}, \dots, e_{k}) \\
\text{One such simple path is at most } \abs{V} \text{ long} \implies \text{Each path takes } O(\abs{V}) \text{ space} \\
\implies \text{All input then takes } O(\abs{V}^{2}) \text{ space} \\
}
$$
### Shortest sub-path #lemma 
$$
\displaylines{
\text{Let } v \in V, p(s, v) \text{ be the shortest path from } s \text{ to } v \\
\implies \forall p'(s, v') \subseteq p(s, v): p'(s, v') \text{ is the shortest path from } s \text{ to } v' \\
\text{Proof: trivial by contradiction} \\
}
$$
### Updated output
$$
\displaylines{
\text{Let array } \pi[s] \text{ store the tree of shortest paths from } s \text{ to all vertices of } G \\
\implies \text{Output takes } O(\abs{V}) \text{ space instead of } O(\abs{V}^{2}) \\
}
$$
### Solution, BFS
$$
\displaylines{
\begin{align}
& BFS(G=(V, E), s): \\
1. & \quad \text{for } v \in V: \\
2. & \quad \quad d[v] \leftarrow \infty \\
3. & \quad \quad \pi[v] \leftarrow null \\
4. & \quad \quad c[v] \leftarrow white \\
5. & \quad d[s] \leftarrow 0 \\
6. & \quad c[s] \leftarrow gray \\
7. & \quad Q.enqueue(s) \\
8. & \quad \text{while not } Q.isEmpty(): \\
9. & \quad \quad u = Q.dequeue() \\
10. & \quad \quad \text{for } v \in \Gamma(u): \\
11. & \quad \quad \quad \text{if } c[v] == white: \\
12. & \quad \quad \quad \quad c[v] \leftarrow gray \\
13. & \quad \quad \quad \quad d[v] \leftarrow d[u] + 1 \\
14. & \quad \quad \quad \quad \pi[v] \leftarrow u \\
15. & \quad \quad \quad \quad Q.enqueue(v) \\
16. & \quad \quad \quad c[u] \leftarrow black \\
17. & \quad \text{return } d, \pi \\
\end{align} \\
\\
\text{Lines 1-4 take } O(\abs{V}) \\
\text{Lines 5-8 take } O(1) \\
\text{Lines 10, 11-16 take } O(1) \text{ and are run } deg(u) \text{ times for each } u  \\
\implies T_{9-16}(V, E) = \sum_{v \in V} deg(v) = 2\abs{E} = O(\abs{E}) \\
\implies \text{The algorithm runs in } O(\abs{V} + \abs{E}) \\ 
}
$$
### Shortest path #lemma 
$$
\displaylines{
\forall u \in V: \exists p(s, u) \implies \forall v \in \Gamma(u): \delta(s, v) \leq \delta(s, u) + 1 \\
\forall u \in V: \not\exists p(v, u) \implies \delta(s, u) = \infty \implies \forall v \in V: \delta(s, v) \leq \infty + 1 =\delta(s, u) + 1 \\
\implies \forall u, v \in \Gamma(u): \delta(s, v) \leq \delta(s, u) + 1 \\
}
$$
### Proof of correctness of BFS
$$
\displaylines{
\text{First lemma:} \\
\text{Let } s \in V \\
\forall v \in V: d[v] \geq \delta(s, v) \\
\\
\text{Proof:} \\
\text{By induction on sequence of operations on } Q \\
\text{Base case. } Q = (s), d[s] = 0 = \delta(s, s), \forall v \neq s \in V: d[v] = \infty \geq \delta(s, v) \\
\text{Induction step. Let } u \text{ be the next vertex from } Q.dequeue(), \text{ let } v \in \Gamma(u) \\
\forall w \neq v \in V: d[w] \geq \delta(s, w) \text{ by induction hypothesis} \\
\text{The only change to } d \text{ at this step is } d[v] = d[u] + 1 \\
\implies \text{After this step } \forall w \in V: d[w] = \begin{cases}
d[w] \geq \delta(s, w) & w \neq v \\
d[u] + 1 \geq \delta(s, u) + 1 \geq \delta(s, v) & w = v \\
\end{cases} \\
\text{Proved by induction} \\
}
$$
$$
\displaylines{
\text{Second lemma:} \\
\text{Let } Q = (v_{1}, \dots, v_{r}) \text{ where } v_{1} \text{ is the head and } v_{r} \text{ is the tail} \\
\text{Then } d[v_{r}] \leq d[v_{1}] + 1 \text{ and } \forall i \in [1, r-1]: d[v_{i}] \leq d[v_{i+1}] \\
\\
\text{Proof:} \\
\text{By induction on sequence of operations on } Q \\
\text{Base case. } Q = (s), \text{ lemma holds} \\
\text{Induction step. Let } Q = (v_{1}, \dots, v_{r}) \\
Q.dequeue() \text{ removes } u = v_{1} \\
Q = (v_{2}, \dots, v_{r}) \\
d[v_{1}] \leq d[v_{2}] \text{ by induction hypothesis} \\
d[v_{r}] \leq d[v_{1}] + 1 \leq d[v_{2}] + 1 \\
\forall i \in [2, r-1]: d[v_{i}] \leq d[v_{i+1}] \text{ is unchanged} \\
\implies \text{Lemma holds for } Q = (v_{2}, \dots, v_{r}) \\
\text{What happends when we enqueue } v \in \Gamma(u = v_{1})? \\
Q = (v_{2}, \dots, v_{r}, v_{r+1}=v) \\
d[v_{2}] \geq d[v_{1}] = d[u] \implies d[v_{r+1}] = d[v] = d[u] + 1 \leq d[v_{2}] + 1 \\
d[v_{r}] \leq d[u] + 1 = d[v] = d[v_{r+1}] \text{ by induction hypothesis} \\
\implies \text{Lemma holds for } Q = (v_{2}, \dots, v_{r+1} = v) \\
\implies \text{Proved by induction} \\
}
$$
$$
\displaylines{
\text{Corollary of the second lemma:} \\
\forall v_{i}, v_{j}: v_{i} \text{ is enqueued before } v_{j}: d[v_{i}] \leq d[v_{j}] \\
\\
\text{Proof:} \\
\text{Follows from the fact that } \forall v \in V: d[v] \text{ is changed at most once and second lemma} \\
}
$$
$$
\displaylines{
\text{Proof of correctness of BFS:} \\
\text{Let by contradiction } \exists v \in V: d[v] \neq \delta(s, v) \\
\text{By the first lemma } d[v] \geq \delta(s, v) \implies d[v] > \delta(s, v) \\
\text{Clearly, } v \neq s \\
\delta(s, v) = \infty \implies d[v] > \infty - \text{Contradiction!} \\
\implies \delta(s, v) < \infty \implies \exists p(s, v) \\
\text{Let } u \text{ be the vertex immediately before } v \text{ in the shortest path } p(s, v) \\
\implies \delta(s, v) = \delta(s, u) + 1 \\
\text{Shortest path } p(s, u) \text{ is the subpath of } p(s, v) \text{ without the last vertex} \\
\delta(s, u) < \delta(s, v) \implies d[u] = \delta(s, u) \\
\implies d[v] > \delta(s, v) = \delta(s, u) + 1 = d[u] + 1 \\
\text{Consider the moment when we dequeue } u \text{ from } Q \\
\text{At this moment, } v \text{ is either white, gray or black} \\
\text{If } v \text{ is white, } d[v] = d[u] + 1 - \text{Contradiction!} \\
\text{If } v \text{ is black, we have already dequeued } v \text{ from } Q \\
\implies d[v] \leq d[u] \text{ by the second lemma} - \text{Contradiction!} \\
\text{If } v \text{ is gray, then it painted so when we dequeued some vertex } w \text{ from } Q \\
\implies d[v] = d[w] + 1, d[w] \leq d[u] \implies d[v] \leq d[u] + 1 - \text{Contradiction!} \\
\implies \forall v \in V: d[v] = \delta(s, v) \\
\text{All vertices } v \text{ reachable from } s \text{ must've been discovered, otherwise } d[v] = \infty > \delta(s, v) \\
\forall v \in V: \pi[v] = u \implies d[v] = d[u] + 1 \text{ and shortest path } p(s, v) = p(s, \pi[v]) + \Set{ \pi[v], v } \\
}
$$
---
## Solution to a similar problem, DFS
$$
\displaylines{
\begin{align}
& DFS(G=(V, E)): \\
1. & \quad \text{for } v \in V: \\
2. & \quad \quad \pi[v] \leftarrow null \\
3. & \quad \quad c[v] \leftarrow white \\
4. & \quad t \leftarrow 0 \\
5. & \quad \text{for } u \in V: \\
6. & \quad \quad \text{if } c[v] == white: \\
7. & \quad \quad \quad DFS-Visit(u) \\
\end{align} \\
}
$$
$$
\displaylines{
\begin{align}
 & DFS-Visit(u): \\
8. & \quad d[u] \leftarrow t \leftarrow t + 1 \\
9. & \quad c[u] \leftarrow gray \\
10. & \quad \text{for } v \in \Gamma(u): \\
11. & \quad \quad \text{if } c[v] == white: \\
12. & \quad \quad \quad \pi[v] \leftarrow u \\
13. & \quad \quad \quad DFS-Visit(v) \\
14. & \quad c[u] \leftarrow black \\
15. & \quad f[u] \leftarrow t \leftarrow t + 1 \\
\end{align} \\
\\
\text{Lines 1-3 and 5-7 take } O(\abs{V}) \\
\text{For each vertex } u \in V, DFS-Visit(u) \text{ is called exactly once} \implies O(\abs{E}) \\
\implies \text{The algorithms runs in } O(\abs{V} + \abs{E}) \\
}
$$
### Properties of DFS
#### Parenthesis theorem #theorem 
$$
\displaylines{
& \forall u, v \in V \text{ exactly one of the following is true:} \\
1. & [d[u], f[u]] \cap [d[v], f[v]] = \emptyset \text{ and } u, v \text{ are not the descendants of each other} \\
2. & [d[u], f[u]] \subset [d[v], f[v]] \text{ and } u \text{ is the descendant of } v \\
3. & [d[u], f[u]] \supset [d[v], f[v]] \text{ and } v \text{ is the descendant of } u \\
}
$$
$$
\displaylines{
\text{Proof:} \\
\text{Case 3. } d[u] < d[v] < f[v] < f[u] \\
\implies v \text{ was visited as one of the neighbors of } u \\
\implies v \text{ is the descendant of } u \\
\text{Case 2. } d[v] < d[u] < f[u] < f[v] \\
\implies u \text{ was visited as one of the neighbors of } v \\
\implies u \text{ is the descendant of } v \\
\text{Case 1. } d[u] < f[u] < d[v] < f[v] \\
\implies v \text{ was fisited after } u \text{ was already finished} \\
\implies v \text{ is not the descendant of } u \text{ and } u \text{ is not the descendant of } v \\
\text{Non-existent case } d[u] < d[v] < f[u] < f[v] & WLOG \\
\implies v \text{ was visited before } u \text{ was finished} \\
\implies v \text{ was finished as a neighbor of } u \implies v \text{ must've been finished} \\
\text{before backtracking to } u - \text{Contradiction!} \\
}
$$
#### White path theorem #theorem 
$$
\displaylines{
v \text{ is the descendant of } u \iff \text{at the time } d[u]-1 \text{ there exists a path } p(v, u) \\
\text{consisting entirely of white vertices} \\
\\
\text{Proof:} \\
\boxed{ \implies } \\
v = u \implies \text{There exists a path } (u) \text{ where } u \text{ is still white} \\
\text{Let } v \neq u \text{ and } v \text{ is a descendant of } u \\
\implies \text{By the parenthesis theorem, } d[u] < d[v] < f[v] < f[u] \\
\implies v \text{ is white at the time } d[u] \\
\text{Let } \forall p(v, u): w \in p(v, u) \\
\implies w \text{ is the descendant of } u \implies w \text{ is white at the time } d[u] \\
\\
\boxed{ \impliedby } \\
\text{Let } \exists p(u, v) \text{ white path at the time } d[u] \\
\text{Let by contradiction } v \text{ is not the descendant of } u \\
\text{Let } \forall w \neq u, v \in p(u, v): w \text{ is the descendant of } u & WLOG \\
(\text{otherwise choose $v$ the first vertex in } p(u, v) \text{ that's not the descendant of } u) \\
\text{Let } w \text{ be the predecessor of } v \text{ in } p(u, v) \\
w \text{ is the descendant of } u \text{ or } w = u \implies f[w] \leq f[u] \\
v \text{ is visited after } u \text{ is visited but before } w \text{ is finished} \\
\implies d[u] < d[v] < f[w] \leq f[u] \\
\implies \text{By parenthesis theorem } f[v] < f[u] \\
\implies v \text{ is the descendant of } u - \text{Contradiction!} \\
}
$$
