---
{"publish":true,"created":"11/11/25, 16:11","modified":"2025-11-25T12:12:18.413+02:00","tags":["Academia","Lecture","Discrete-structures"],"cssclasses":""}
---

## Cantor's theorem #theorem 
$$
\displaylines{
\forall A: A \not\sim \mathcal{P}(A) \\
\\
\text{Proof:} \\
\text{Let } f: A \to \mathcal{P}(A) \\
\text{Let } B = \Set{ x \in A | x \not\in f(x) } \\
B \subseteq A \implies B \in \mathcal{P}(A) \\
\forall a \in A: \begin{array}{}
a \in f(a) \implies a \not\in B \implies f(a) \neq B \\
a \not\in f(a) \implies a \in B \implies f(a) \neq B \\
\end{array} \\
\implies B \not\in f[A] \implies f \text{ is not onto} \implies f \text{ is not bijective} \\
\implies \boxed{ A \not\sim \mathcal{P}(A) } \\
}
$$
### Corollary
$$
\displaylines{
\text{There are infinitely many cardinalities} \\
\mathbb{N} \precneqq \mathcal{P}(\mathbb{N}) \precneqq \mathcal{P}(\mathcal{P}(\mathbb{N})) \precneqq \dots \\
}
$$
By Zermelo-Frankel set theory, no set can contain itself as it would contradict the Axiom of Regularity

---
### $\mathcal{P}(\mathbb{N}) \sim \mathbb{R}$ #theorem 
$$
\displaylines{
\mathcal{P}(\mathbb{N}) \sim \mathbb{R} \\
\\
\text{Proof:} \\
\text{We will show } \mathcal{P}(\mathbb{N}) \preccurlyeq \mathbb{R} \preccurlyeq \mathcal{P}(\mathbb{Q}) \preccurlyeq \mathcal{P}(\mathbb{N}) \\
}
$$
$$
\displaylines{
\text{Let } f: \mathcal{P}(\mathbb{N}) \to \mathbb{R} \\
\forall A \in \mathcal{P}(\mathbb{N}): f(A) = \sum_{n=0}^{\infty} 1_{n \in A} \cdot \frac{1}{3^{n}} \\
\forall A \in \mathcal{P}(\mathbb{N}): \sum_{n=0}^{\infty} 1_{n \in A} \cdot \frac{1}{3^{n}} \leq \sum_{n=0}^{\infty} \frac{1}{3^{n}} = \frac{3}{2} < \infty \\
\implies \forall A \in \mathcal{P}(\mathbb{N}): f(A) \in \mathbb{R} \\
\text{Let } A \neq B \in \mathcal{P}(\mathbb{N}) \\
\implies A \triangle B \neq \emptyset \\
\text{Let } x = \min\{A \triangle B\} \\
\text{Let } x \in A & WLOG \\
f(A) - f(B) = \sum_{n=0}^{\infty} 1_{n \in A} \cdot \frac{1}{3^{n}} - \sum_{n=0}^{\infty} 1_{n \in B} \cdot \frac{1}{3^{n}} = \\
= \sum_{n=x}^{\infty} 1_{n \in A} \cdot \frac{1}{3^{n}} - \sum_{n=x+1}^{\infty} 1_{n \in B} \cdot \frac{1}{3^{n}} \geq \frac{1}{3^{x}} - \sum_{n=x}^{\infty} \frac{1}{3^{n}} = \\
= \frac{1}{3^{x}} - \frac{3}{2} \cdot \frac{1}{3^{x+1}} = \frac{1}{2} \cdot \frac{1}{3^{x}} > 0 \\
\implies f(A) \neq f(B) \implies f \text{ is injective} \implies \boxed{ \mathcal{P}(\mathbb{N}) \preccurlyeq \mathbb{R} } \\
}
$$
$$
\displaylines{
\text{Let } f: \mathbb{R} \to \mathcal{P}(\mathbb{Q}) \\
\forall x \in \mathbb{R}: x = \sum_{n=0}^{\infty} \alpha_{n} \cdot \frac{1}{2^{n}} \\
\text{Let } \forall x \in \mathbb{R}: f(x) = \Set{ \frac{1}{2^{n}} | \alpha_{n} = 1 } \\
\text{Let } x \neq y \in \mathbb{R} \\
\implies (\alpha_{x_{0}}, \dots) \neq (\alpha_{y_{0}}, \dots) \\
\implies \exists n: \alpha_{x_{n}} \neq \alpha_{y_{n}} \implies \frac{1}{2^{n}} \in f(x), \frac{1}{2^{n}} \not\in f(y) \\
\implies f(x) \neq f(y) \implies f \text{ is injective} \implies \boxed{ \mathbb{R} \preccurlyeq \mathcal{P}(\mathbb{Q}) } \\
}
$$
$$
\displaylines{
\forall x \in \mathbb{Q}: \exists q \in \mathbb{Z}, p \in \mathbb{N}: x = \frac{p}{q} \text{ and } \not\exists q' \in \mathbb{Z}, p' \in \mathbb{N}: p' < p, \frac{q}{p} = \frac{q'}{p'} \\
\text{Let } f: \mathbb{Q} \to \mathbb{Z} \times \mathbb{N}, f(x) = (q, p) \\
\frac{q}{p} = f(x) = f(x') = \frac{q'}{p'} \implies p = p', q = q' \implies x = x' \\
\implies f \text{ is injective} \implies \boxed{ \mathbb{Q} \preccurlyeq \mathbb{Z} \times \mathbb{N} } \\

\text{Proved earlier: } \mathbb{N} \sim \mathbb{Z} \implies \mathbb{Z} \times \mathbb{N} \sim \mathbb{N} \times \mathbb{N} \\
\implies \boxed{ \mathbb{Z} \times \mathbb{N} \preccurlyeq \mathbb{N} \times \mathbb{N} } \\
\text{Proved earlier: } \mathbb{N} \sim \mathbb{N} \times \mathbb{N} \\
\implies \boxed{ \mathbb{N} \times \mathbb{N} \preccurlyeq \mathbb{N} }
\implies \mathbb{Q} \preccurlyeq \mathbb{Z} \times \mathbb{N} \preccurlyeq \mathbb{N} \times \mathbb{N} \preccurlyeq \mathbb{N} \implies \boxed{ \mathbb{Q} \preccurlyeq \mathbb{N} } \\
}
$$
#### Powerset of a dominant set is dominant #lemma 
$$
\displaylines{
\forall A, B: A \preccurlyeq B \implies P(A) \preccurlyeq P(B) \\
\\
\text{Proof:} \\
A \preccurlyeq B \implies \exists f: A \to B \text{ injective} \\
\text{Let } F: \mathcal{P}(A) \to \mathcal{P}(B), F(X) = \Set{ f(x) | x \in X } \\
\text{Let } X \neq X' \in \mathcal{P}(A) \\
\text{Let } x \in X \setminus X' & WLOG \\
x \not\in X' \implies \forall y \in X': f(y) \neq f(x) \\
\implies f(x) \not\in F(X') \implies F(X) \neq F(X') \implies F \text{ is injective} \\
\implies \boxed{ \mathcal{P}(A) \preccurlyeq \mathcal{P}(B) } \\
}
$$
$$
\displaylines{
\mathbb{Q} \preccurlyeq \mathbb{N} \implies \boxed{ \mathcal{P}(\mathbb{Q}) \preccurlyeq \mathcal{P}(\mathbb{N}) } \\
\implies \mathcal{P}(\mathbb{N}) \preccurlyeq \mathbb{R} \preccurlyeq \mathcal{P}(\mathbb{Q}) \preccurlyeq \mathcal{P}(\mathbb{N}) \implies \boxed{ \mathbb{R} \sim \mathcal{P}(\mathbb{N}) } \\
}
$$
---
## Euler & Hamiltonian cycles
### Euler cycle and Euler tour #definition 
$$
\displaylines{
\text{Given a (multi)-graph } G = (V, E) \text{ an Euler cycle is a cycle } C = (x_{0}, x_{1}, \dots, x_{n}) \text{ such} \\
\text{that every edge in the graph appears exactly once} \\
\text{An Euler tour is then a path } P = (x_{0}, x_{1}, \dots, x_{m}) \text{ such that every edge in the graph} \\
\text{appears exactly once} \\
}
$$
### Existence of an Euler cycle #lemma 
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a simple connected graph} \\
\text{Then } G \text{ has an Euler cycle} \iff \forall v \in V: deg(v) \text{ is even} \\
\\
\text{Let } G = (V, E) \text{ be a strongly connected digraph} \\
G \text{ has an Euler cycle} \iff \forall v \in V: deg_{in}(v) = deg_{out}(v) \\
\\
\text{This lemma also holds for multi-graphs} \\
\\
\text{Proof for simple graph:} \\
\boxed{ \implies } \text{ Let } G \text{ has an Euler cycle } C = (v_{0}, v_{1}, \dots, v_{m}) \\
\text{Let } u \neq v_{0} \in V \\
\text{Let } v_{i_{1}} = v_{i_{2}} = \dots = v_{i_{q}} = u \\
\implies \forall j \in [1, q]: \exists! e \in E: e = \begin{cases}
\Set{ v_{i_{j}-1}, v_{i_{j}} } \\
\Set{ v_{i_{j}}, v_{i_{j}+1} } \\
\end{cases} \\
\implies deg(u) = 2q \\
\forall i \in [1, m-1]: v_{i} = v_{0} \implies \exists! e = \begin{cases}
\Set{ v_{i-1}, v_{i} } \\
\Set{ v_{i}, v_{i+1} } \\
\end{cases} \\
\text{And add edges } \Set{ v_{0}, v_{1} } \text{ and } \Set{ v_{m-1}, v_{m} } \\
\implies deg(v_{0}) = 2k + 2 \\
\implies \boxed{ \forall v \in V: deg(v) \text{ is even} } \\
\boxed{ \impliedby } \text{ Let } \forall v \in V: deg(v) \text{ is even} \\
\text{Let by induction } \forall G': \forall v \in V': deg_{G'}(v) \text{ is even and} \\
G' \text{ is connected and has less than } m \text{ edges} \implies G' \text{ has an Euler cycle} \\
\text{Let } G \text{ has } m \text{ edges} \\
G \text{ is connected} \implies \delta(V) \geq 2 \implies 2m = \sum_{v \in V} deg(v) \geq 2n \\
\implies m \geq n \implies G \text{ has a cycle } C = (x_{0}, \dots, x_{q}) \\
\text{Let } G' = G \setminus C = (V, E \setminus C) \\
\text{Let } \mathcal{K}_{1}, \mathcal{K}_{2}, \dots, \mathcal{K}_{k} \text{ be connected components of } G' \\
\text{Let } \forall j \in [1, k]: x_{i_{j}} \in C \cap \mathcal{K}_{j} \\
\text{Let } i_{1} \leq i_{2} \leq \dots \leq i_{k} & WLOG \\
\forall j \in [1, k]: \mathcal{K}_{j} \text{ has an Euler cycle } C_{j} \\
\Set{ C, C_{1}, \dots, C_{k} } \text{ is a partition of } E \\
\implies C' = (x_{0}, \dots, \underbrace{ x_{i_{1}}, \dots, x_{i_{1}} }_{ C_{1} }, \dots, x_{i_{k}-1}, \underbrace{ x_{i_{k}}, \dots, x_{i_{k}} }_{ C_{k} }, \dots, x_{q}) \text{ is an Euler cycle} \\
}
$$
### Corollary
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a connected multi-graph} \\
\text{Then } G \text{ contains an Euler tour} \iff G \text{ has 0 or 2 vertices of odd degree} \\
\\
\text{Proof:} \\
\boxed{ \implies } \text{ Let } P = (v_{0},v_{1}, \dots, v_{m}) \text{ be an Euler tour in } G \\
P \text{ is a cycle} \implies P \text{ is an Euler cycle} \implies \forall i \in [0, m]: deg(v_{1}) = 2q \\
\text{Let } v_{0} \neq v_{m} \\
\text{Let } G' = (V, E \cup \Set{ v_{0}, v_{m} }) \\
\implies C = (v_{0}, \dots, v_{m}, v_{0}) \text{ is an Euler cycle} \\
\implies \forall i \in [0, m]: deg_{G'}(v_{i}) = 2q \\
\implies deg_{G}(v_{0}), deg_{G}(v_{m}) \text{ are odd} \\
\boxed{ \impliedby } \text{ Let } G \text{ has } 0 \text{ or } 2 \text{ vertices of odd degree} \\
0 \text{ vertices of odd degree} \implies G \text{ has an Euler cycle and we're done} \\
2 \text{ vertices of odd degree } u, v \implies G' = (V \cup \Set{ z }, E \cup \Set{ \Set{ v, z }, \Set{ u, z } }) \\
G' \text{ has an Euler cycle} \implies G \text{ has an Euler tour from } v \text{ to } u \\
}
$$
---
### Hamilton path & cycle #definition 
$$
\displaylines{
\text{Hamilton path is a simple path that visits all vertices} \\
\text{Hamilton cycle is a Hamilton path that ends in the same place it started} \\
}
$$
Determining whether a graph contains a Hamiltonian cycle/path is an **NP-hard** problem
Finding the minimal Hamiltonian cycle/path in the weighted graph is also an **NP-hard** problem
