---
{"publish":true,"created":"27/01/26, 16:30","modified":"2026-03-24T15:00:28.566+02:00","tags":["Academia","Lecture","Discrete-structures"],"cssclasses":""}
---

## Chain and antichain #definition 
$$
\displaylines{
A_{1}, \dots, A_{n} \subseteq A \text{ is a chain} \iff A_{1} \subset A_{2} \subset \dots \subset A_{n} \\
\\
\mathcal{F} \text{ is an antichain} \iff \forall A, B \in \mathcal{F}: A \not\subset B \\
}
$$
## YBLM inequality #theorem 
$$
\displaylines{
\mathcal{F} \text{ is an antichain of } [n] \implies \sum_{A \in \mathcal{F}} \binom{n}{\abs{A}}^{-1} \leq 1 \\
\\
\text{Proof:} \\
\text{Let } \mathcal{F} \text{ be an antichain of } [n] \\
\text{Let } \pi: [n] \to [n] \text{ be a uniformly random permutation} \\
C_{\pi} = \Set{ \emptyset, \Set{ \pi(1) }, \Set{ \pi(1), \pi(2) }, \dots, [n] } \text{ is a chain} \\
\text{Let } A \in \mathcal{F} \\
\text{Let } \psi_{A} = A \in C_{\pi} \\
A \in C_{\pi} \iff \text{Elements of } A \text{ are a prefix of } \pi \\
\implies P(\psi_{A}) = \frac{\abs{A}! \cdot (n-\abs{A})!}{n!} = \binom{n}{\abs{A}}^{-1} \\
\forall A \neq B \in \mathcal{F}: A \not\subset B \implies \psi_{A} \cap \psi_{B} = \emptyset \\
\implies P\left( \bigcup_{A \in \mathcal{F}} \psi_{A} \right) = \sum_{A \in \mathcal{F}} P(\psi_{A}) = \sum_{A \in \mathcal{F}} \binom{n}{\abs{A}}^{-1} \\
\implies \boxed{ \sum_{A \in \mathcal{F}} \binom{n}{\abs{A}}^{-1} \leq 1 } \\
}
$$
## Intersecting family #definition 
$$
\displaylines{
\mathcal{F} \text{ is an intersecting family} \iff \forall A, B \in \mathcal{F}: A \cap B \neq \emptyset \\
}
$$
## Erdos-Ko-Rado #theorem 
$$
\displaylines{
\text{For } n \geq 2k \text{ every intersecting family of } k\text{-element subsets of } [n] \\
\text{has at most size } \binom{n-1}{k-1} \\
\\
\text{Proof:} \\
\text{Let } \mathcal{F} \subseteq \binom{[n]}{k} \text{ be an intersecting family of } k\text{-element subsets of } [n] \\
\text{Let } C_{n} \text{ be uniformly random on } [n] \\
\text{That is, } C_{n} = (v_{0}, \dots, v_{n-1}, v_{0}) \text{ where } v_{i} \in [n] \text{ and } v_{i} \neq v_{j} \\
A = \Set{ a_{1}, \dots, a_{m} } \in \mathcal{F} \text{ is called contiguous} \iff \\
\iff \exists i \in [0, n-1]: (v_{i}, v_{i+1}, \dots, v_{i + m \pmod{n}}) = (a_{i_{1}}, \dots, a_{i_{m}}) \\
\text{Let } \forall A \in \mathcal{F}: X_{A} = \begin{cases}
1 & A \text{ is contiguous} \\
0 & \text{otherwise} \\
\end{cases} \\
P(X_{A} = 1) = \frac{n \cdot k! \cdot (n-k)!}{n!} = \frac{n}{\binom{n}{k}} \\
\text{Let } X = \text{number of contiguous sets in } \mathcal{F} \\
E[X] = \sum_{A \in \mathcal{F}} E[X_{A}] = \sum_{A \in \mathcal{F}} \frac{n}{\binom{n}{k}} = \abs{\mathcal{F}} \cdot \frac{n}{\binom{n}{k}} \\
\\
\text{Let us prove that } \max\lrc{X} = k \\
\text{Let } A_{i} \text{ be the set of numbers mapped to the vertices } \Set{ v_{i}, \dots, v_{i+k-1 \pmod{n}} } \\
\text{Let } A_{i} \in \mathcal{F} \\
n \geq 2k \implies \text{Only } A_{i-(k-1)}, \dots, A_{i-1}, A_{i+1}, \dots, A_{i+(k-1)} \text{ intersect } A_{i} \\
\implies \abs{\mathcal{F}} \leq 2k \\
\forall j \in [1, k-1]: A_{i-j} \text{ or } A_{i-j+k} \text{ can be in } \mathcal{F}, \text{ not both} \\
\implies \abs{\mathcal{F}} \leq k \\
\implies \abs{\mathcal{F}} \cdot \frac{n}{\binom{n}{k}} = E[X] \leq k \implies \boxed{ \abs{\mathcal{F}} \leq \binom{n}{k} \cdot \frac{k}{n} = \binom{n-1}{k-1} } \\
}
$$
## Chromatic number and girth #theorem 
$$
\displaylines{
\forall k, g \geq 1: \exists G: \text{girth of } G \text{ is larger than } g \text{ and } \chi(G) > k \\
\\
\text{Proof:} \\
\text{Let } n \text{ be large} \\
\text{Let } \varepsilon = \frac{1}{2g}, p = n^{\varepsilon-1} \\
\text{Let } G = (V, E) \text{ be a random graph where } \forall u \neq v \in V: P(\Set{ u, v } \in E) = p \\
\text{Let } l \in [3, g] \\
\text{There are } \binom{n}{l} \cdot (l-1)! \cdot \frac{1}{2} = \frac{n(n-1)\dots(n-l+1)}{2l} < n^{l} \text{ potential cycles} \\
\text{of length } l \text{ in } G \\
\text{Probability that any fixed cycle of length } l \text{ is in } G \text{ is } p^{l} \\
\text{Let } X = \text{number of cycles of length at most } g  \text{ in } G \\
E[X] < \sum_{l=3}^{g} n^{l}p^{l} = \sum_{l=3}^{g} n^{\varepsilon l} = (g-3) \cdot n^{g/2g} \leq g \cdot \sqrt{ n } \underbrace{ < }_{ n \geq (4g)^{2} } \frac{n}{4} \\
P\left( X \geq \frac{n}{2} \right) \leq \frac{E[X]}{\frac{n}{2}} < \frac{1}{2} \\
\text{Let } a = \ceil{1 + \frac{4}{p} \cdot \ln n} < 8 \cdot n^{1-\varepsilon} \cdot \ln n \\
\text{Let } IS(G) \text{ be the size of the largest independent set in } G \\
P(IS(G) \geq a) = \binom{n}{a} \cdot (1-p)^{\binom{a}{2}} \leq n^{a} \cdot e^{-p\binom{a}{2}} = e^{a\ln n - p \cdot \frac{a(a-1)}{2}} = \\
= e^{a(\ln n - (a-1)/2)} \leq e^{a\ln n - 2\ln n} = n^{-a} < \frac{1}{4} \\
\text{We conclude that with positive probability we sampled graph } G \\
\text{with at most } \frac{n}{2} \text{ cycles of length } g \\
\text{and no independent set of size } a \\
\text{Let } G \text{ be such a graph} \\
\text{Let } G' = G[V'] \text{ where } V' = V \setminus \Set{ v \mid v \text{ is in a cycle of length at most } g } \\
\text{Girth of } G' \text{ is larger than } g \\
IS(G') \leq IS(G) < a \\
\implies \chi(G') > \frac{\abs{V'}}{a} > \frac{\frac{n}{2}}{8 \cdot n^{1-\varepsilon}\ln n} = \frac{1}{16\ln n} \cdot n^{\varepsilon} = \frac{1}{16\ln n} \cdot n^{1/2g} \underbrace{ > }_{ \text{For large enough } n } k \\
\text{Last inequality holds as } k \text{ is fixed and } \lim_{ n \to \infty } \frac{1}{16\ln n} \cdot n^{1/2g} = \infty \\
}
$$
