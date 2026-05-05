---
{"publish":true,"created":"11/02/26, 11:31","modified":"2026-03-24T14:58:08.246+02:00","tags":["Academia","#Practice","Algorithms-1"],"cssclasses":""}
---

## Finding min-cut in a flow network
$$
\displaylines{
\text{Let } \mathcal{F} = (G=(V, E), c, s, t) \text{ be a flow network} \\
\text{Find } (S, V \setminus S) \text{ a minimum $(s,t)$-cut in } \mathcal{F} \\
\\
\text{Solution:} \\
\begin{align}
 & \text{find-min-cut}(G=(V, E), c, s, t): \\
1. & \quad \text{Find max flow } f \\
2. & \quad \text{Compute residual network } G_{f} \\
3. & \quad \text{Compute } S_{f} = \Set{ u \in V \mid \exists p \in G_{f}: s \overset{ p }{ \leadsto } u } \\
4. & \text{return } (S_{f}, V \setminus S_{f}) \\
\end{align} \\
\text{This algorithm follows} \\
\text{from the proof of the max-flow-min-cut theorem from the lectures} \\
\\
\text{Proof of correctness is as follows:} \\
\text{Let } C = (S, T) = \text{find-min-cut}(\mathcal{F}) \\
s \leadsto s \implies s \in S \\
f \text{ is a max flow} \implies s \not\leadsto t \implies t \in T \\
\implies C \text{ is an } (s, t)\text{-cut} \\
\text{Let } u \in S, v \in T \\
c_{f}(u, v) = 0 \implies f(u, v) = c(u, v) \\
\implies \abs{f} = f(S, T) = \sum_{u \in S} \sum_{v \in T} f(u, v) = \sum_{u \in S} \sum_{v \in T} c(u, v) = c(S, T) \\
\implies \text{By max-flow-min-cut theorem } C \text{ is a minimum cut} \\
\\
\text{Runtime is composed of finding the max flow and the residual network with } S_{f} \\
\text{Residual network and $S_{f}$ can be found in linear time using BFS/DFS} \\
\implies \text{Total runtime is that of finding the max flow} \\
}
$$
## Determining whether min-cut is unique
$$
\displaylines{
\text{Let } \mathcal{F} = (G=(V, E), c, s, t) \text{ be a flow network} \\
\text{Determine whether there exists a unique min $(s, t)$-cut in } \mathcal{F} \\ 
\\
\text{Solution:} \\
\begin{align}
 & \text{unique-min-cut}(G=(V, E), c, s, t): \\
1. & \quad \text{Find max flow } f \\
2. & \quad \text{Compute residual network } G_{f} \\
3. & \quad \text{Compute } S_{f} = \Set{ u \in V \mid \exists p \in G_{f}: s \overset{ p }{ \leadsto } u } \\
4. & \quad \text{Compute } T_{f} = \Set{ u \in V \mid \exists p \in G_{f}: u \overset{ p }{ \leadsto } t } \\
5. & \quad \text{return } S_{f} \cup T_{f} == V \\
\end{align} \\
\\
\text{Proof of correctness:} \\
\text{Let } C = (S, T) \text{ be a minimum } (s, t)\text{-cut in } \mathcal{F} \\
\forall u \in S, v \in T: f(u, v) = c(u, v) \\
\\
\text{Let by contradiction } u \in S_{f} \setminus S \\
u \neq s, u \not\in S \implies u \in T \\
\begin{eqsys}
u \in S_{f} \implies \exists p \in G_{f}: s \overset{ p }{ \leadsto } u \\
u \in T \implies \exists e = (x, y) \in p: x \in S, y \in T \\
\end{eqsys} \\
\implies c_{f}(x, y) \neq 0 - \text{Contradiction!} \\
\implies \forall S: S_{f} \subseteq S \\
\text{Similarly, } \forall T: T_{f} \subseteq T \\
\\
\boxed{ \implies } \text{ Let } S_{f} \cup T_{f} = V \\
\implies V = S_{f} \cup T_{f} \subseteq S \cup T = V \\
\implies S_{f} \cup T_{f} = S \cup T \implies S_{f} = S, T_{f} = T \\
\implies \exists! \text{ minimum }(s, t)\text{-cut } (S_{f}, T_{f}) \\
\\
\boxed{ \impliedby } \text{ Let } \exists! \text{ minimum }(s, t)\text{-cut } (S, T) \\
\text{Let } v \not\in S_{f} \cup T_{f} \\
\text{Let } S' = S_{f} \cup \Set{ v } \\
\implies (S', V \setminus S') \text{ is a minimum } (s,t)\text{-cut} - \text{Contradiction!} \\
\implies S_{f} \cup T_{f} = V \\
}
$$
## Finding maximum matching in bipartite graphs
This problem seems completely unrelated, but it is not! Let us see how one can solve it using max flow algorithms
### Reduction from finding the maximum matching to finding the max flow
$$
\displaylines{
\text{Let } G = (L \cup R, E) \text{ be a bipartite undirected graph} \\
\text{Let us build a flow network } G' = (V', E') \\
V' = V \cup \Set{ s, t } \\
E' = \Set{ (s, u) \mid u \in L } \cup \Set{ (u, v) \mid \Set{ u, v } \in E, u \in L, v \in R } \cup \Set{ (v, t) \mid v \in R } \\
\text{And } \forall e \in E': c(e) = 1 \\
}
$$
The following lemma then holds
$$
\displaylines{
\text{Let } M \text{ be a matching in } G \\
\text{Then } \exists f \text{ a flow in } G': \abs{M} = \abs{f} \\
\\
\text{Let } f \text{ be a flow in $G'$ with integer values} \\
\text{Then there exists a matching } M \text{ in } G: \abs{f} = \abs{M} \\
\\
\text{Proof:} \\
\text{Let } M \text{ be a matching in } G \\
\text{Let } f: E \to \mathbb{R} \\
\forall \Set{ u, v } \in M, u \in L, v \in R: f(u, v) = 1 \\
\forall u \in L, u \text{ is } M\text{-saturated}: f(s, u) = 1 \\
\forall v \in R, v \text{ is } M\text{-saturated}: f(v, t) = 1 \\
\text{The minimum } (s, t)\text{-cut is then } (L \cup \Set{ s }, R \cup \Set{ t }) \\
\text{And } \abs{f} = \abs{M} \\
\\
\text{Let } f \text{ be a flow with integer values in } G' \\
\text{Let } M = \Set{ \Set{ u, v } \in E \mid f(u, v) > 0, u \in L, v \in R } \\
\text{Note that each vertex vertex } u \in L \text{ has exactly one edge that flows into it} \\
\text{And capacity of each edge is } 1 \implies \exists! \Set{ u, v } \in E: f(u, v) > 0 \\
\text{Similar logic applies to vertex } v \in R \\
\implies M \text{ is a matching in } G \text{ and } \abs{M} = f(L, R) = \\
= f(L, V') - f(L, L) - f(L, s) - f(L, t) = 0 - 0 + f(s, L) - 0 = \\
= f(s, V') - f(s, R) - f(s, t) = f(s, V') - 0 - 0 = \abs{f} \\
}
$$
And one more
$$
\displaylines{
\forall (u, v) \in E: c(u, v) \in \mathbb{N} \implies \exists f \text{ max flow}: \forall (u, v) \in V^{2}: f(u, v) \in \mathbb{Z} \\
\\
\text{Proof:} \\
\text{Follows from the correctness of Ford-Fulkerson algorithm} \\
f \text{ is exactly the flow returned by Ford-Fulkerson algorithm} \\
}
$$
In total, this gives us a way to compute maximum matching using max flow algorithms, namely Hopcroft-Karp that is specifically designed for flow networks with capacities of 1. The runtime is then $O(\abs{E}\sqrt{ \abs{V} })$
Solving max flow with Ford-Fulkerson will yield $O(\abs{E} \abs{f^{*}}) = O(\abs{E}\abs{V})$
