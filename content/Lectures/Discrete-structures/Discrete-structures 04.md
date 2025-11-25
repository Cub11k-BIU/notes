---
{"publish":true,"created":"18/11/25, 16:21","modified":"2025-11-25T12:12:59.335+02:00","tags":["Academia","Lecture","Discrete-structures"],"cssclasses":""}
---

$$
\displaylines{
\text{Let } f: S \to S \text{ be injective and not surjective} \\
\text{Then } S \text{ is non-finite} \\
\\
\text{Proof:} \\
\text{Let } a \in S \setminus f[S] \\
\text{Let } g: \mathbb{N} \to S, g(n) = f^{n}(a) \\
\\
\text{Let by contradiction } (m, n) \in \mathbb{N}^{2}, m \neq n \text{ and } m+n \text{ is minimum}: g(n) = g(m) \\
n = 0 \implies a = g(m) = f(g(m-1)) - \text{Contradiction!} \\
\implies n \neq 0, m \neq 0 \\
f(g(n-1)) = g(n) = g(m) = f(g(m-1)), f \text{ is injective} \\
\implies g(n-1) = g(m-1) - \text{Contradiction!} \\
\implies \forall m \neq n \in \mathbb{N}: g(n) \neq g(m) \implies g \text{ is injective} \\
\implies \mathbb{N} \preccurlyeq S \implies \boxed{ S \text{ is non-finite} } \\
}
$$
---
$$
\displaylines{
\text{Let } \mathcal{I} \text{ be countable} \\
\text{Let } \forall i \in I: S_{i} \text{ be countable} \\
\text{Then } S = \bigcup_{i \in \mathcal{I}} S_{i} \text{ is countable} \\
\\
\text{Proof:} \\
\text{Let } f: I \to \mathbb{N} \text{ be bijective} \\
\text{Let } \forall i \in I: g_{i}: S_{i} \to \mathbb{N} \text{ be bijective} \\
\text{Let } \forall x \in S: \mathcal{I}_{x} = \Set{ i | x \in S_{i} } \\
f[\mathcal{I}_{x}] \subseteq \mathbb{N} \\
\text{Let } i_{x} \in \mathcal{I}_{x}: f(i_{x}) = \min_{i \in \mathcal{I}_{x}}\{f[\mathcal{I}_{x}]\} \\
\text{Let } h: S \to \mathbb{N} \times \mathbb{N}, h(x) = (f(i_{x}), g_{i_{x}}(x)) \\
\text{Let } x \neq y \in S \\
i_{x} \neq i_{y} \implies h(x) \neq h(y) \implies h \text{ is injective} \\
i_{x} = i_{y} \implies g(i_{x}) = g(i_{y}) \text{ and } g_{i_{x}} = g_{i_{y}} \\
g_{i_{x}} \text{ is injective} \implies g_{i_{x}}(x) \neq g_{i_{x}}(y) \implies h(x) \neq h(y) \\
\implies h \text{ is injective} \implies S \preccurlyeq \mathbb{N} \times \mathbb{N} \preccurlyeq \mathbb{N} \\
\implies \boxed{ S \text{ is countable} } \\
}
$$
---
$$
\displaylines{
\mathbb{R} \sim \mathbb{R}^{2} \\
\\
\text{Proof:} \\
f: \mathbb{R} \to \mathbb{R}^{2}, f(x) = (x, 0) \\
f \text{ is injective} \implies \mathbb{R} \preccurlyeq \mathbb{R}^{2} \\
g: \mathcal{P}(\mathbb{N}) \times \mathcal{P}(\mathbb{N}) \to \mathcal{P}(\mathbb{N}), g(A, B) = \Set{ 2x | x \in A } \cup \Set{ 2x + 1 | x \in B } \\
\text{Let } (A, B) \neq (A', B') \in \mathcal{P}(\mathbb{N})^{2} \\
\implies A \neq A' \text{ or } B \neq B' \\
\text{Let } x \in A \setminus A' & WLOG \\
2x \in f(A, B) \setminus f(A', B') \\
\implies f(A, B) \neq f(A', B') \implies f \text{ is injective} \\
\implies \mathcal{P}(\mathbb{N})^{2} \preccurlyeq \mathcal{P}(\mathbb{N}) \\
\implies \mathbb{R}^{2} \preccurlyeq \mathcal{P}(\mathbb{N})^{2} \preccurlyeq \mathcal{P}(\mathbb{N}) \preccurlyeq \mathbb{R} \implies \mathbb{R}^{2} \preccurlyeq \mathbb{R} \\
\implies \boxed{ \mathbb{R} \sim \mathbb{R}^{2} } \\
}
$$
Corollary: $\forall k \in \mathbb{N}: \mathbb{R}^{k} \sim \mathbb{R}$

---
$$
\displaylines{
\text{Let } X : \abs{X} > 1 \text{ and } X \sim X^{2} \\
\text{Then } \mathcal{P}(X) \sim \mathcal{P}(X)^{2} \\
\\
\text{Proof:} \\
\text{Clearly, } \mathcal{P}(X) \preccurlyeq \mathcal{P}(X)^{2} \text{ as } X \neq \emptyset \\
\text{Let } f: X^{2} \to X \text{ be bijective} \\
\text{Let } a \neq b \in X \\
\text{Let } g: \mathcal{P}(X)^{2} \to \mathcal{P}(X), g(A, B) = f[A \times \Set{ a }] \cup f[B \times \Set{ b }] \\
\text{Let } (A, B) \neq (A', B') \in \mathcal{P}(X)^{2} \\
\text{Let } x \in A \setminus A' & WLOG \\
\implies (x, a) \in A \times \Set{ a } \setminus A' \times \Set{ a } \\
f \text{ is injective} \implies f(x, a) \in g(A, B) \setminus g(A', B') \\
\implies g \text{ is injective} \implies \mathcal{P}(X)^{2} \preccurlyeq \mathcal{P}(X) \implies \boxed{ \mathcal{P}(X)^{2} \sim \mathcal{P}(X) } \\
\\
\text{Corollary:} \\
\mathbb{N} \sim \mathbb{N}^{2} \implies \mathcal{P}(\mathbb{N}) \sim \mathcal{P}(\mathbb{N})^{2} \implies \mathbb{R} \sim \mathbb{R}^{2} \\
}
$$
---
## Iterated power set hierarchy #definition 
$$
\displaylines{
\mathcal{P} = \Set{ \mathcal{P}_{k}(\mathbb{N}) | k \in \mathbb{N} } \\
\text{Where } \mathcal{P}_{0}(\mathbb{N}) = \mathbb{N}, \mathcal{P}_{k+1}(\mathbb{N}) = \mathcal{P}(\mathcal{P}_{k}(\mathbb{N})) \\
}
$$
$$
\displaylines{
\forall X \in \mathcal{P}: X \sim X^{2} \\
\\
\text{Proof:} \\
\mathcal{P}_{k}(\mathbb{N}) \sim \mathcal{P}_{k}(\mathbb{N})^{2} \\
\implies \mathcal{P}_{k+1}(\mathbb{N}) = \mathcal{P}(\mathcal{P}_{k}(\mathbb{N})) \sim \mathcal{P}(\mathcal{P}_{k}(\mathbb{N}))^{2} = \mathcal{P}_{k+1}(\mathbb{N}) \\
}
$$

$$
\displaylines{
\forall A, B \in \mathcal{P}: A^{B} \sim \begin{cases}
A & B \precneqq A \\
\Set{ 0, 1 }^{B} & A \preccurlyeq B \\
\end{cases} \\
\\
\text{Proof:} \\
\text{Case 1. } B \preccurlyeq A \\
\exists C \in \mathcal{P}: B \preccurlyeq C \text{ and } A = \mathcal{P}(C) \sim \Set{ 0, 1 }^{C} \\
A^{B} \preccurlyeq (\Set{ 0, 1 }^{C})^{B} \preccurlyeq \Set{ 0, 1 }^{C \times B} \preccurlyeq \Set{ 0, 1 }^{C \times C} \preccurlyeq \Set{ 0, 1 }^{C} \preccurlyeq A \implies \boxed{ A^{B} \sim A } \\
\text{Case 2. } A \preccurlyeq B \\
\exists C \in \mathcal{P}: A = \mathcal{P}(C) \sim \Set{ 0, 1 }^{C} \preccurlyeq B \\
A^{B} \preccurlyeq (\Set{ 0, 1 }^{C})^{B} \preccurlyeq \Set{ 0, 1 }^{C \times B} \preccurlyeq \Set{ 0, 1 }^{B \times B} \preccurlyeq \Set{ 0, 1 }^{B} \implies \boxed{ A^{B} \sim \Set{ 0, 1 }^{B} } \\
}
$$
---
## Ore's theorem #theorem 
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a simple graph with } \abs{V} = n \geq 3 \\
\text{Let } \forall u, v \in V: \Set{ u, v } \not\in E: deg(u) + deg(v) \geq n \\
\text{Then } G \text{ contains a Hamilton cycle} \\
\\
\text{Proof:} \\
\text{Let } \mathcal{G}_{n} = \Set{ G | \abs{V} = n, G \text{ fulfills Ore's condition and has no Hamilton cycle} } \\
\text{Let by contradiction } \mathcal{G}_{n} \neq \emptyset \\
\text{Let } G \in \mathcal{G}_{n} \text{ be maximal in relation to inclusion order } \preccurlyeq \\
\\
K_{n} \text{ contains a Hamilton cycle} \implies G \neq K_{n} \\
\text{Let } u, v \in V: e = \Set{ u, v } \not\in E \\
\text{Let } G' = G  \cup \Set{ e } \\
\text{By maximality of } G, G' \text{ contains a Hamilton cycle } C \\
\text{And clearly, } e \in C \\
\text{Let } C = (x_{0} = u, x_{1}, \dots, x_{n-1} = v, x_{0} = u) \\
\text{Let } x_{i} \in \Gamma_{G}(u) \subseteq \Set{ x_{1}, \dots, x_{n-2} } \\
x_{i-1} \in \Gamma_{G}(v) \implies C' = (x_{i}, x_{i+1}, \dots, x_{n-1}, x_{i-1}, x_{i-2}, \dots, x_{0}, x_{i}) \\
\text{is a Hamilton cycle in } G - \text{Contradiction!} \\
\implies x_{i-1} \not\in \Gamma_{G}(v) \\
\text{Let } \mathcal{I} = \Set{ i | x_{i} \in \Gamma_{G}(u) } \subseteq \Set{ 1, 2, \dots, n-2 } \\
\text{Let } \mathcal{I}^{-} = \Set{ i-1 | i \in \mathcal{I} } \subseteq \Set{ 0, 1, \dots, n-3 } \\
\text{As shown above, } \forall j \in \mathcal{I}^{-}: x_{j} \not\in \Gamma_{G}(v) \\
deg_{G}(v) \leq (n-1) - \abs{\mathcal{I}^{-}} = (n-1) - \abs{\mathcal{I}} = n-1 - deg_{G}(u) \\
\implies deg_{G}(v) + deg_{G}(u) \leq n-1 < n - \text{Contradiction!} \\
}
$$
---
## Matching #definition 
$$
\displaylines{
\text{Given a graph } G = (V, E), \text{a matching is a subset } M \subseteq E \text{ without common vertices} \\
}
$$
Vertex $v$ is called $M\text{-saturated}$ iff it is incident to some edge in $M$
Otherwise vertex $v$ is called $M\text{-unsaturated}$
### Maximal matching #definition 
Matching $M$ is called maximal iff there is no matching $M'$ such that $M \subset M'$
### Maximum matching #definition 
Matching $M$ is called maximum iff there is no matching $M'$ such that $\abs{M} < \abs{M'}$
### Perfect matching #definition 
Matching $M$ is called perfect iff all vertices are $M\text{-saturated}$, in particular $\abs{M} = \frac{n}{2}$
$$
\displaylines{
\text{Perfect} \implies \text{Maximum} \implies \text{Maximal} \\
}
$$
How can we find a maximal matching?
We can greedily add edges to $M$ until there are no edges with both ends being $M\text{-unsaturated}$
How can we find a maximum matching?
#### Alternating path #definition 
A path $p = (e_{0}, e_{1}, \dots, e_{k-1})$ is called $M\text{-alternating}$ iff it alternates between edges in $M$ and not in $M$
#### Expanding path #definition 
Alternating path $p = (v_{0}, v_{1}, \dots, v_{k})$ with vertices $v_{0} \neq v_{k}$ both $M\text{-unsaturated}$ is called expanding
## Berge's theorem #theorem 
$$
\displaylines{
M \text{ is a maximum matching in } G \iff \not\exists P \text{ an expanding path in } G \\
\\
\text{Proof:} \\
\dots \\
}
$$
