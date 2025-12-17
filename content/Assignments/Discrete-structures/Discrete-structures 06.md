---
{"publish":true,"created":"11/12/25, 12:44","modified":"2025-12-11T13:35:23.485+02:00","tags":["Academia","Assignment","Discrete-structures"],"cssclasses":""}
---

## 1
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a bipartite } k\text{-regular graph} \\
\text{Prove: } G \text{ contains } k \text{ disjoint perfect matchings} \\
\\
\text{Proof:} \\
\text{Proof is by induction on } k \\
\text{Base case. } k \leq 0 \implies 0 \text{ perfect matchings always exist} \\
k = 1 \implies \text{Each vertex has exactly one neighbor} \implies M = E \text{ is a perfect matching} \\
\text{Inductive step. Let } \forall G \text{ bipartite } k\text{-regular graph}: G \text{ has } k \text{ disjoint perfect matchings} \\
\text{Let } G = (L \cup R, E) \text{ be a } (k+1)\text{-regular perfect matching} \\
\sum_{v \in L} deg(v) = \abs{L} \cdot k = \abs{E} = \sum_{v \in R} deg(v) = \abs{R} \cdot k \\
\implies \abs{L} = \abs{R} \\
\text{Let } S \subseteq L \\
\text{Let } E_{A} = \Set{ \Set{ v, u } \mid v \in A } \\
\abs{E_{S}} = \abs{S} \cdot k \\
\abs{E_{\Gamma(S)}} = \abs{\Gamma(S)} \cdot k \\
E_{S} \subseteq E_{\Gamma(S)} \implies \abs{S} \cdot k \leq \abs{\Gamma(S)} \cdot k \implies \abs{S} \leq \abs{\Gamma(S)} \\
\implies \text{By Hall's theorem, there exists a perfect matching $M$ in } G \\
\text{Let } G' = (L \cup R, E \setminus M) \\
G' \text{ is clearly } k\text{-regular as } M \text{ contains exactly one edge incident to each vertex} \\
\text{By inductive hypothesis } G' \text{ contains } k \text{ disjoint perfect matchings} \\
\text{None of these matching intersect with } M \\
\implies G \text{ contains } k+1 \text{ disjoint perfect matchings} \\
\implies \boxed{ \forall k: G \text{ contains } k \text{ disjoint perfect matchings} } \\
}
$$
## 2
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a graph} \\
\text{Let } M \text{ be a matching in } G, M^{*} \text{ be a maximum matching in } G \\
\text{Let } \abs{M^{*}} = k \\
\text{Prove: } \abs{M} < k - \sqrt{ k } \implies \exists P \ M\text{-expanding path}: \abs{P} \leq 2\sqrt{ k } - 1 \\
\\
\text{Proof:} \\
\text{As proved in practice sessions, } G \text{ contains } \abs{M^{*}} - \abs{M} \ M\text{-expanding paths} \\
\abs{M^{*}} - \abs{M} = k - \abs{M} > \sqrt{ k } \\
\text{Let } G' = (V, M^{*} \triangle M) \\
G' \text{ contains } \abs{M^{*}} - \abs{M} \text{ connected components which are } M\text{-expanding paths} \\
(\text{part of the proof from practice-sessions}) \\
\implies G' \text{ contains more than } \sqrt{ k } \text{ such connected components} \\
\text{Let by contradiction } \forall P_{i} \ M\text{-expanding path}: \abs{E_{P_{i}}} > 2\sqrt{ k } - 1 \\
\text{Then, } \abs{M^{*} \triangle M} \geq \sum_{i} \abs{E_{P_{i}}} > \sqrt{ k }(2\sqrt{ k }-1) = 2k-\sqrt{ k } \\
\abs{M^{*} \triangle M} \leq \abs{M^{*}} + \abs{M} < 2k - \sqrt{ k } - \text{Contradiction!} \\
\implies \exists P_{i} \ M\text{-expanding path}: \abs{E_{P_{i}}} \leq 2\sqrt{ k }-1 \\
}
$$
## 3
$$
\displaylines{
\dots \\
}
$$
## 4

$$
\displaylines{
\dots \\
}
$$
