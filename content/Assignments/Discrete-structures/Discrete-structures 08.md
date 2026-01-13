---
{"publish":true,"created":"11/01/26, 17:22","modified":"2026-01-12T13:41:47.509+02:00","tags":["Academia","Assignment","Discrete-structures"],"cssclasses":""}
---

# 1a
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a planar graph} \\
\text{Prove: } IS(G) \geq \frac{\abs{V}}{4} \\
\\
\text{Proof:} \\
G \text{ is planar} \implies G \text{ is 4-colorable} \\
\text{Let } V_{1}, V_{2}, V_{3}, V_{4} \subseteq V \\
\forall i \in [1, 4]: V_{i} = \Set{ v \in V \mid \chi(v) = i } \\
\text{Let } IS(G) < \frac{\abs{V}}{4} \\
\implies \forall i \in [1, 4]: \abs{V_{i}} < \frac{\abs{V}}{4} \\
\implies \abs{V} = \sum_{i=1}^{4} \abs{V_{i}} < \frac{4\abs{V}}{4} = \abs{V} - \text{Contradiction!} \\
\implies \boxed{ IS(G) \geq \frac{\abs{V}}{4} } \\
}
$$
# 1b
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a graph} \\
\text{Let all odd cycles in $G$ intersect at one vertex} \\
\text{Prove: } G \text{ is 3-colorable} \\
\\
\text{Proof:} \\
\text{Let } v \in V \text{ be the vertex at which all odd cycles intersect} \\
\text{Let } G' = G \setminus \Set{ v } \\
G' \text{ has no odd cycles} \implies G' \text{ is bipartite} \implies G' \text{ is 2-colorable} \\
\implies \boxed{ G \text{ is 3-colorable} } \\
}
$$
# 2
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a planar 3-regular graph} \\
\text{Let } G \text{ has no cutting edges} \\
\text{Prove: } G \text{ is 3-edge-colorable} \\
\\
\text{Proof:} \\
\text{Let } G^{*} \text{ be the dual graph of } G \\
G^{*} \text{ is planar} \implies G^{*} \text{ is 4-colorable} \\
\text{Let } \chi: F \to \Set{ 1, 2, 3, 4 } \\
\text{Let } \chi': E \to \Set{ 1, 2, 3 } \\
\text{Let } e \in E \\
\text{If } e \text{ divides faces of colors 1-2 or 3-4, } \chi'(e) = 1 \\
\text{If } e \text{ divides faces of colors 1-4 or 2-3, } \chi'(e) = 2 \\
\text{If } e \text{ divides faces of colors 1-3 or 2-4, } \chi'(e) = 3 \\
\\
\text{Let } e = \Set{ u, v } \in E \\
e \text{ is not a cutting edge} \implies \exists p(u, v) : e \not\in p(u, v) \\
\implies p(u, v) \to e \text{ is a cycle} \implies e \text{ is incident to two faces} \\
\text{These faces must be of different colors as they're connected in } G^{*} \\
\text{Let } e_{1} = \Set{ u, v }, e_{2} = \Set{ v, w } \in E\\
\text{Let } F_{1} \text{ be the face incident to } e_{1}, e_{2} \\
\text{Let } F_{2}, F_{3} \text{ be two other faces incident to } v \\
\text{Clearly all three of these faces are connected in } G^{*} \\
\implies \text{Their colors are pairwise different} \\
\text{Let } \chi(F_{1}) = i & WLOG \\
\text{Let by contradiction } \chi'(e_{1}) = \chi'(e_{2}) \\
\chi(F_{1}) \text{ and } \chi'(e_{1}) \text{ uniquely defines } \chi(F_{2}) = j \\
\chi(F_{1}) \text{ amd } \chi'(e_{2}) \text{ uniquely defines } \chi(F_{3}) = k \\
(\chi(F_{1}), \chi'(e_{1})) = (\chi(F_{1}), \chi'(e_{2})) \implies \chi(F_{2}) = \chi(F_{3}) - \text{Contradiction!} \\
\implies \chi'(e_{1}) \neq \chi'(e_{2}) \\
\implies \boxed{ \chi' \text{ is the correct edge-coloring of } G } \\
}
$$
# 3
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a graph} \\
\text{Prove: } \chi(G) + \chi(\overline{G}) \leq \abs{V} + 1 \\
\\
\text{Proof:} \\
\text{Proof is by induction on } \abs{V} = n \\
\text{Base case. } n = 1 \\
G = \overline{G} = K_{1}, \chi(G) = \chi(\overline{G}) = 1 \\
\chi(G) + \chi(\overline{G}) = 2 \leq 2 = \abs{V} + 1 \\
\text{Inductive step. Let } \forall G, \abs{V(G)} < n: \chi(G) + \chi(\overline{G}) \leq \abs{V(G)} + 1 \\
\text{Let } G = (V, E), \abs{V} = n \\
\text{Let } v \in V \\
\text{Let } G' = G \setminus \Set{ v } \\
\text{By inductive hypothesis } \chi(G') + \chi(\overline{G'}) \leq \abs{V'} + 1 = \abs{V} - 1 + 1 = \abs{V} = n \\
\text{Clearly, } \begin{eqsys}
\chi(G') \leq \chi(G) \leq \chi(G') + 1 \\
\chi(\overline{G'}) \leq \chi(\overline{G}) \leq \chi(\overline{G'}) + 1
\end{eqsys} \\
\text{as we can either color } v \text{ with an existing color or add one} \\
\text{Case 1. } \chi(\overline{G}) = \chi(\overline{G'}) \\
\implies \boxed{ \chi(G) + \chi(\overline{G}) \leq \chi(G') + 1 + \chi(\overline{G'}) \leq n + 1 } \\
\text{Case 2. } \chi(G) = \chi(G') \\
\implies \boxed{ \chi(G) + \chi(\overline{G}) \leq \chi(G') + \chi(\overline{G'}) + 1 \leq n + 1 } \\
\text{Case 3. } \chi(G) = \chi(G') + 1, \chi(\overline{G}) = \chi(G) + 1 \\
\implies deg_{G}(v) \geq \chi(G'), deg_{\overline{G}}(v) \geq \chi(\overline{G'}) \\
\text{as otherwise } v \text{ has at least one free color} \\
\implies \chi(G') + \chi(\overline{G'}) \leq deg_{G}(v) + deg_{\overline{G}}(v) = n - 1 \\
\implies \boxed{ \chi(G) + \chi(\overline{G}) = \chi(G') + \chi(\overline{G'}) + 2 \leq n - 1 + 2 = n + 1 } \\
}
$$
# 4
$$
\displaylines{
\text{Let } G = Coprime(n) = (V, E) \text{ be a graph} \\
V = \Set{ 1, 2, \dots, n } \\
E = \Set{ \Set{ a, b } \mid a \neq b, gcd(a, b) = 1 } \\
\text{Find a coloring of } G \text{ and } \chi(G) \\
\\
\text{Solution:} \\
\forall k \in \mathbb{N}: gcd(1, k) = 1 \\
\implies \Gamma(1) = \Set{ 2, 3, \dots, n } \\
\forall p \neq q \text{ primes}: gcd(p, q) = 1 \\
\text{Let } \pi(n) \text{ denote the number of primes in } [n] \\
\text{Let } A = \Set{ p \mid p \leq n \text{ is prime} } \cup \Set{ 1 } \\
\implies G[A] \text{ is a clique of size } \pi(n)+1 \\
\implies \chi(G) \geq \pi(n) + 1 \\
\text{Let us find a } (\pi(n)+1)\text{-coloring} \\
G[A] \text{ can be colored arbitrarily into } \pi(n)+1 \text{ colors} \\
\text{Let } k \in V \setminus A \\
k \text{ can be uniquely decomposed into a product of primes: } k = p_{1}^{e_{1}}p_{2}^{e_{2}}\dots p_{m}^{e_{m}} \\
k \leq n \implies \forall i \in [1, m]: p_{i} \leq n \implies p_{i} \in A \\
\text{Let } \chi(k) = \chi(p_{i}) \\
\text{The choice of } i \text{ does not matter} \\
\text{Let } \Set{ a, b } \in E \\
\text{Case 1. } a = 1 & WLOG \\
b \in A \implies \chi(b) \neq \chi(1) = \chi(a) \\
b \not\in A \implies b = p_{1}^{e_{1}}p_{2}^{e_{2}}\dots p_{m}^{e_{m}} \\
\chi(b) = \chi(p_{i}), p_{i} \in A \implies \chi(p_{i}) \neq \chi(1) \implies \chi(b) \neq \chi(1) = \chi(a) \\
\text{Case 2. } a \neq 1, b \neq 1 \\
\text{Case 2.1. } a \in A & WLOG \\
b = q_{1}^{u_{1}}q_{2}^{u_{2}}\dots q_{l}^{u_{l}} \\
gcd(a, b) = 1 \implies \forall i \in [1, l]: q_{i} \neq a \implies \chi(a) \neq \chi(p_{i}) = \chi(b) \\
\text{Case 2.2. } a, b \not\in A \\
a = p_{1}^{e_{1}}p_{2}^{e_{2}}\dots p_{m}^{e_{m}} \\
b = q_{1}^{u_{1}}q_{2}^{u_{2}}\dots q_{l}^{u_{l}} \\
gcd(a, b) = 1 \implies \forall (i, j) \in [m] \times [l]: p_{i} \neq q_{j} \\
\implies \chi(a) = \chi(q_{i}) \neq \chi(p_{j}) = \chi(b) \\
\implies \boxed{ G \text{ is } (\pi(n)+1)\text{-colorable} \implies \chi(G) = \pi(n)+1 } \\
}
$$
# 5a
$$
\displaylines{
\text{Let } G, H \text{ be graphs} \\
\text{Prove: } \chi(G \square H) = \max\lrc{\chi(G), \chi H} \\
\\
\text{Proof:} \\
\text{Let } k = \max\lrc{\chi(G), \chi(H)} \\
\text{Clearly, } \chi(G \square H) \geq k \text{ as each copy of } G(\text{or } H) \text{ has to be colored in } k \text{ colors} \\
\\
\text{Let us color } G \square H \text{ in } k \text{ colors} \\
\text{Let } \chi_{G}: V(G) \to [k], \chi_{H}: V(H) \to [k] \\
\text{Let } \chi: V(G \square H) \to [k]: \chi(g, h) = \chi_{G}(g) + \chi_{H}(h) \pmod{k} \\
\text{Let } \Set{ (g_{1}, h_{1}), (g_{2}, h_{2}) } \in E(G \square H) \\
\text{Case 1. } g_{1} = g_{2} \\
\chi(g_{1}) = \chi(g_{2}) \implies \begin{eqsys}
\chi(g_{1}, h_{1}) = \chi_{G}(g_{1}) + \chi_{H}(h_{1}) \pmod{k} \\
\chi(g_{2}, h_{2}) = \chi_{G}(g_{1}) + \chi_{H}(h_{2}) \pmod{k} \\
\end{eqsys} \\
\Set{ h_{1}, h_{2} } \in E(H) \implies \chi_{H}(h_{1}) \neq \chi_{H}(h_{2}) \in [k] \implies \chi_{H}(h_{1}) \not\equiv \chi_{H}(h_{2}) \pmod{k} \\
\implies \chi_{G}(g_{1}) + \chi_{H}(h_{1}) \not\equiv \chi_{G}(g_{1}) + \chi_{H}(h_{2}) \pmod{k} \\
\implies \chi(g_{1}, h_{1}) \neq \chi(g_{2}, h_{2}) \\
\text{Case 2. } h_{1} = h_{2} \\
\chi(h_{1}) = \chi(h_{2}) \implies \begin{eqsys}
\chi(g_{1}, h_{1}) = \chi_{G}(g_{1}) + \chi_{H}(h_{1}) \pmod{k} \\
\chi(g_{2}, h_{2}) = \chi_{G}(g_{2}) + \chi_{H}(h_{1}) \pmod{k} \\
\end{eqsys} \\
\Set{ g_{1}, g_{2} } \in E(G) \implies \chi_{G}(g_{1}) \neq \chi_{G}(g_{2}) \in [k] \implies \chi_{G}(g_{1}) \not\equiv \chi_{G}(g_{2}) \pmod{k} \\
\implies \chi_{G}(g_{1}) + \chi_{H}(h_{1}) \not\equiv \chi_{G}(g_{2}) + \chi_{H}(h_{1}) \pmod{k} \\
\implies \chi(g_{1}, h_{1}) \neq \chi(g_{2}, h_{2}) \\
\implies \chi \text{ is a correct cologing of } G \square H \text{ and } \boxed{ \chi(G \square H) = k = \max\lrc{\chi(G), \chi(H)} } \\
}
$$
# 5b
$$
\displaylines{
\text{Let } G \text{ be a graph} \\
\text{Prove: } \chi'(G \square K_{2}) = \Delta(G \square K_{2}) \\
\\
\text{Proof:} \\
\text{By Vizing's theorem } \Delta(G \square K_{2}) \leq \chi'(G \square K_{2}) \leq \Delta(G \square K_{2}) + 1 \\
\text{Let } V(K_{2}) = \Set{ k_{1}, k_{2} } \\
\forall g \in V(G): \Set{ (g, k_{1}), (g, k_{2}) } \in E(G \square K_{2}) \\
\forall g \in V(G): deg_{G \square K_{2}}(g, k_{1}) = deg_{G \square K_{2}}(g, k_{2}) = deg_{G}(g) + 1 \\
\implies \Delta(G \square K_{2}) = \Delta(G) + 1 \\
\text{Let } \chi'_{G}: E(G) \to [\Delta(G) + 1] \text{ be a proper edge coloring of } G \\
\text{Let } \chi': E(G \square K_{2}) \to [\Delta(G) + 1] \\
\text{Let } \forall \Set{ g_{1}, g_{2} } \in E(G): \chi'((g_{1}, k_{1}), (g_{2}, k_{1})) = \chi'((g_{1}, k_{2}), (g_{2}, k_{2})) = \chi'_{G}(g_{1}, g_{2}) \\
\text{Let } g \in V(G) \\
deg_{G}(g) \leq \Delta(G) \implies \text{There exists at least one color that is not incident to } g \\
\text{Let this color be } C_{g} \\
\text{Let } \forall g \in V(G): \chi'((g, k_{1}), (g, k_{2})) = C_{g} \\
\implies \boxed{ \chi' \text{ is a proper edge coloring of } G \square K_{2} \text{ with } \Delta(G)+1 = \Delta(G \square K_{2}) \text{ colors} } \\ 
}
$$
