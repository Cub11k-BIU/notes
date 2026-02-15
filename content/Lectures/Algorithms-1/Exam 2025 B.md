---
{"publish":true,"created":"12/02/26, 19:38","modified":"2026-02-12T21:33:33.415+02:00","tags":["Academia","Lecture","Algorithms-1"],"cssclasses":""}
---

## 1a
$$
\displaylines{
\text{Define an augmenting path and its bottleneck in residual network} \\
\\
\text{Solution:} \\
\text{An augmenting path in residual network } G_{f} \text{ is any simple path from } s \text{ to } t \\
\text{Its bottleneck is defined as } c_{p} = \min_{e \in p}\lrc{c_{f}(e)} \\
\text{meaning the largest flow that can be pushed along this path} \\
}
$$
## 1b
$$
\displaylines{
\text{Let } \mathcal{F} = (G = (V, E), s, t, c) \text{ be a flow network} \\
\text{Let } \exists u \in V: deg(u) = 11 \\
\text{Show an algorithm for finding the max flow that uses at most 3 edges incident to } u \\
\\
\text{Solution:} \\
\text{Let } \Gamma(u) = \Set{ v_{1}, \dots, v_{11} } \\
\text{For each triplet } \Set{ v_{i}, v_{j}, v_{k} } \subseteq \Gamma(u) \\
\text{Define } c': V^{2} \to \mathbb{R}, c'(e) = \begin{cases}
0 & e = (u, v), v \not\in \Set{ v_{i}, v_{j}, v_{k} } \\
c(e) & \text{otherwise} \\
\end{cases} \\
\text{Meaning nullify capacity of all edges incident to } u \text{ except } (u, v_{i}), (u, v_{j}), (u, v_{k}) \\
\text{Then calculate max flow $f_{i,j,k}$ and return maximum among them, call it } f^{*} \\
\\
\text{Correctness:} \\
\text{Case 1. Let } \mathcal{F}': deg_{G'}(u) < 3 \\
\text{Let } f' \text{ be the max flow in this network} \\
\abs{f^{'}} > \abs{f^{*}} \text{ is impossible as } f^{*} \text{ is a maximum flow that can use all edges of } G' \\
\implies \abs{f'} \leq \abs{f^{*}} \text{ and we need not consider such networks} \\
\text{Case 2. Let } \mathcal{F}': deg_{G'}(u) > 3 \\
\text{Let } f' \text{ be the max flow in this network that uses at most 3 edges incident to } u \\
\text{Let these edges be } (u, v_{i}), (u, v_{j}), (u, v_{k}) \\
\text{Then } \abs{f'} \leq \abs{f_{i,j,k}} \text{ as } f_{i,j,k} \text{ is a max flow that can use all the same edges as } f' \\
\text{and we need not consider such networks} \\
\\
\text{Runtime:} \\
\text{Runtime is essntially } \binom{11}{3} \text{ times running max flow algorithm on } \mathcal{F} \\
\text{Transformation of } c \text{ to } c' \text{ can be done in } O(1) \\
\implies \text{Total runtime is } O(\abs{f^{*}}\abs{E}) \text{ for Ford-Fulkerson} \\
}
$$
## 1c
$$
\displaylines{
\text{Let us allow augmenting paths to contain cycles and use the same edge twice} \\
\text{Show why Ford-Fulkerson would then fail to solve max flow problem} \\
\\
\text{Solution:} \\
\text{Let } p \text{ be an augmenting path that uses edge } (u, v) \text{ twice} \\
\text{Clearly, there exists a cycle in it } (s, \dots, u, v, \dots, u, v, \dots, t) \\
\text{Let } c_{p} = c_{f}(u, v) \\
\text{Then standard augmentation along that path will violate capacity of } (u, v) \\
\text{That is, } f'(u, v) = f(u, v) + 2c_{f}(u, v) = c(u, v) + c_{f}(u, v) > c(u, v) \\
}
$$
## 2
$$
\displaylines{
\begin{align}
 & P(n): \\
1. & \quad P \leftarrow \text{Array of size } n \text{ filled with } 0 \\
2. & \quad \text{for } x \in [1, n]: \\
3. & \qquad i \leftarrow \text{random}(1, n) \\
4. & \qquad \text{while } P[i] \neq 0: \\
5. & \qquad \quad i \leftarrow \text{random}(1, n) \\
6. & \qquad P[i] = x \\
7. & \quad \text{return } P \\
\end{align} \\
}
$$
### 2a
$$
\displaylines{
\text{Give the runtime of this algorithm acihieved with relatively high probability} \\
\\
\text{Solution:} \\
\text{Let } \forall i \in [1, n]: X_{ij} = \begin{cases}
1 & P[j] = 0 \\
0 & P[j] \neq 0 \\
\end{cases} \text{ during } i \text{-th iteration} \\
E[X_{ij}] = P(X_{ij} = 1) = P(P[j] = 0) = \frac{n-i+1}{n} \\
\text{Let } \forall i \in [1, n]: C_{i} = \text{number of random choices made in } i\text{-th iteration} \\
C_{i} \text{ is a geometric variable with } p = \frac{n-i+1}{n} \\
\implies E[C_{i}] = \frac{1}{p} = \frac{n}{n-i+1} \\
\text{Let } C = \text{total number of random choices} \\
\implies C = \sum_{i=1}^{n} C_{i} \implies E[C] = \sum_{i=1}^{n} E[C_{i}] = \sum_{i=1}^{n} \frac{n}{n-i+1} = nH_{n} \leq n\ln n \\
\\
\text{Let us now prove that } C = O(n\log n) \text{ with relatively high probability} \\
\forall j \in [1, n]: P(P[j] = 0 \text{ after } M \text{ random choices}) = \left( 1-\frac{1}{n} \right)^{M} \\
\text{Let } A = \text{there exists } j \in [1, n]: P[j] = 0 \text{ after } M \text{ random choices} \\
P(C \geq M) = P(A) = P\left( \bigcup_{j=1}^{n} P(P[j] = 0 \text{ after } M \text{ random choices}) \right) \leq \\
\leq \sum_{j=1}^{n} P(P[j] = 0 \text{ after } M \text{ random choices}) = \sum_{j=1}^{n} \left( 1-\frac{1}{n} \right)^{M} = n\left( 1-\frac{1}{n} \right)^{M} \\
\\
\implies P(C \geq (c+1)n\ln n) \leq n\left( 1-\frac{1}{n} \right)^{(c+1)n\ln n} \leq n \cdot e^{-(c+1)\ln n} = \frac{1}{n^{c}} \\
\implies \boxed{ P(C = O(n\log n)) \geq 1 - \frac{1}{n^{c}} } \\
}
$$
### 2b
$$
\displaylines{
\text{Prove that the probability of each permutation is exactly } \frac{1}{n!} \\
\\
\text{Proof:} \\
\text{Let } \pi = (x_{1}, \dots, x_{n}) \\
\text{we want to show } P(\pi(n) = \pi) = \frac{1}{n!} \\
\\
\text{Proof intuitively} \\
\forall x \in [1, n]: P(P[i_{x}] = x) = \frac{1}{n-x+1} \\
\implies P(P(n) = \pi) = \prod_{x=1}^{n} P(P[i_{x}] = x) = \prod_{x=1}^{n} \frac{1}{n-x+1} = \frac{1}{n!} \\
}
$$
0