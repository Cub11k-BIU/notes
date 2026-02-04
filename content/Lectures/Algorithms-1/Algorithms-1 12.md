---
{"publish":true,"created":"27/01/26, 13:07","modified":"2026-01-27T17:34:18.510+02:00","tags":["Academia","Lecture","Algorithms-1"],"cssclasses":""}
---

# MST - continuation
$$
\displaylines{
\text{Let there exist a function } ID: E \to \mathbb{N} \\
\text{There exists a total order on } E \\
\forall e, e' \in E: e \preccurlyeq e' \iff (\omega(e), ID(e)) \preccurlyeq_{lex} (\omega(e'), ID(e')) \\
\\
\text{If we sort the edges according to this order, we can get the same MST in every run} \\
}
$$
---
$$
\displaylines{
\text{The properties we used in previous algorithms are:} \\
e \in E \text{ is the lightest cutting edge} \implies \exists MST: e \in MST \\
e \in E \text{ is the heaviest edge in a loop} \implies \exists MST: e \not\in MST \\
}
$$
---
## Boruvka / Sollin algorithm
$$
\displaylines{
\text{We begin with an the empty graph} \\
\text{Each vertex 'chooses' an incident edge which is the smallest according to the order} \\
\\
\text{Clearly, these choices cannot lead to a cycle} \\
\text{Otherwise the total order would be violated} \\
\text{Now, we can add all of the edges chosen to the forest} \\
\text{And continue recursively, treating each tree in the forest as a vertex (or contracting)} \\
\text{Each iteration reduces number of trees in the forest by at least half,} \\
\text{so there are at most } \log \abs{V} \text{ iterations} \\
\text{In each iteration we check at most } \abs{E} \text{ edges} \\
\implies \text{Total cost is } O(\abs{E}\log \abs{V}) \\
}
$$
### Yao's improvement
$$
\displaylines{
\text{Let } v \in V \\
\text{Let } E_{v} = \Set{ \Set{ u, v } \mid u \in \Gamma(v) } \\
\text{Let } E_{v} = E_{v}^{(1)} \cup E_{v}^{(2)} \cup \dots \cup E_{v}^{(k)} \\
\text{Such that } \forall e \in E_{v}^{(i)}, e' \in E_{v}^{(j)}: i < j \implies e \preccurlyeq e' \\
\text{When looking for lightest edges in the iteration of Boruvka's algorithm we} \\
\text{can look for it in the current } E_{(v)}^{i} \text{ and ignore all others until this one is exhausted} \\
\text{When it is exhausted, we increase } i \text{ by } 1, \text{ so we never look for the same edge twice} \\
\text{This } i \text{ is per } v \text{ and is preserved across phases} \\
\text{In each iteration, we have to check amortized } \sum_{v \in V} \ceil{\frac{deg(v)}{k}} \text{ edges} \\
\sum_{v \in V} \ceil{\frac{deg(v)}{k}} \leq \frac{2\abs{E}}{k} + \abs{V} \\
\text{What is the cost of partitioning the edges into } E_{v}^{(1)}, \dots, E_{v}^{(k)}? \\
\text{Using quick select (equivalently quick sort until $k$ blocks of roughly equal size)} \\
\text{We can do this in } O\left( \abs{E}\log k \right) \\
\text{Setting } k = \log \abs{V} \text{ yields the runtime:} \\
O\left( \abs{E}\log \log \abs{V} + 2\abs{E} + \abs{V}\log \abs{V} \right) = O\left( \abs{E}\log \log \abs{V} + \abs{V}\log \abs{V} \right) \\
\text{To improve this, we can do the following:} \\
\text{Run the first } \log \log \abs{V} \text{ iterations in} \\
O\left( \abs{E}\log \log \abs{V} + \abs{V}\log \log \abs{V} \right) = 
O\left( \abs{E}\log \log \abs{V} \right) \\
\abs{V'} \leq \frac{\abs{V}}{2^{\log \log \abs{V}}} = \frac{\abs{V}}{\log \abs{V}} \\
\text{Partitioning again and running the iterations left yields:} \\
O\left( \abs{E}\log \log \abs{V'} + \abs{V'}\log \abs{V'} \right) \\
\abs{V'}\log \abs{V'} \leq \frac{\abs{V}}{\log \abs{V}}\log \abs{V} = \abs{V} \\
\implies O\left( \abs{E}\log \log \abs{V'} + \abs{V'}\log \abs{V'} \right) = O(\abs{E}\log \log \abs{V} + \abs{V}) = O(\abs{E}\log \log \abs{V}) \\
}
$$
---
## KKT algorithm
$$
\displaylines{
\text{First, let us note the following lemma:} \\
\text{Let } G = (V, E) \text{ be an undirected connected weighted graph} \\
\text{Let } A \subseteq E: G(V, A) \text{ is acyclic} \\
\text{Let } e \in E: \begin{cases}
A \cup \Set{ e } \text{ is acylic} \\
\exists e' \text{ in the unique cycle in } A \cup \Set{ e }: e \preccurlyeq e' \\
\end{cases} \\
e \text{ is then called $A$-light} \\
MST(G) \text{ is then contained in } \Set{ e \mid e \text{ is $A$-light} } \\
\text{Furthermore, } MST(G) = A \iff \not\exists e \in E: e \text{ is $A$-light and } e \not\in A \\
\\
\text{Another important theorem is:} \\
\text{Let } A \subseteq E \text{ be acyclic} \\
\text{Then it is possible to compute all $A$-light edges in } O(\abs{E} + \abs{V}) \text{ time deterministically} \\
\\
\text{Now, let } F \text{ be the set of edges contracted during Boruvka's algorithm} \\
\text{The algorithm is then as follows:} \\
\text{Run Boruvka's algorithm with three iterations} \\
\text{Let } G_{1} = (V_{1}, E_{1}) \text{ be the resulting graph} \\
\text{Let } F_{1} \text{ be the set of contracted edges} \\
\text{Note that } \abs{V_{1}} \leq \frac{\abs{V}}{8} \text{ and } F_{1} \text{ is clearly acyclic} \\
\text{Let } R \subseteq E_{1}: \abs{R} = \frac{\abs{E_{1}}}{2} \text{ be uniformly random} \\
\\
\text{Compute MST recursively for } G' = (V_{1}, R) \\
\text{Let } F_{2} \text{ be the result, it is clearly acylic} \\
\text{We use theorem above to compute all } F_{2}\text{-light edges in } G_{1}, \text{ denote this as } L \\
\text{Now, we compute MST for } G'' = (V_{1}, L) \\
\text{Let } F_{3} \text{ be the result, it is clearly acylic} \\
\text{Finally, we return } F_{1} \cup F_{3} \\
\\
\text{Correctness of the algorithm follows immediately from} \\
\text{correctness of Boruvka's algorithm and lemma above} \\
}
$$
TO BE CONTINUED
