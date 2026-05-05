---
{"publish":true,"created":"24/03/26, 14:57","modified":"2026-05-05T13:22:29.411+03:00","tags":["Academia","#Practice","Computability-and-Complexity"],"cssclasses":""}
---

## Representing search problem as a decision problem
$$
\displaylines{
\text{Let } R \text{ be a search problem} \\
\text{Let } S_{R} = \Set{ x \mid \exists y \in \Set{ 0, 1 }^{*}: (x, y) \in R } \\
S_{R} \text{ is then a decision problem corresponding to the search problem } R \\
}
$$
### Complexity of decision problems corresponding to search problems #lemma 
$$
\displaylines{
\text{Let } R \in PF \\
\text{Then } S_{R} \in P \\
\\
\text{Proof:} \\
R \in PF \implies \exists A_{R} \text{ polynomial algorithm that solves } R \\
\begin{align}
 & A_{S_{R}}(x): \\
1. & \quad \text{if } A_{R}(x) == \perp: \\
2. & \qquad \text{return } 0 \\
3. & \quad \text{return } 1 \\
\end{align} \\
A_{S_{R}} \text{ is polynomial as it only runs } A_{R} \text{ and performs one check} \\
x \in S_{R} \iff \exists y \in \Set{ 0, 1 }^{*}: (x, y) \in R \iff A_{R}(x) \neq \perp \iff A_{S_{R}}(x) = 1 \\
\implies A_{S_{R}} \text{ solves } S_{R} \\
\implies \boxed{ S_{R} \in P } \\
}
$$
## Karp reduction (many-one reduction) #definition 
$$
\displaylines{
\text{Let } f \text{ be a computable function} \\
\text{Let } S_{1}, S_{2} \text{ be decision problems} \\
f \text{ is called a Karp reduction from $S_{1}$ to $S_{2}$ if:} \\
\forall x \in \Set{ 0, 1 }^{*}: x \in S_{1} \iff f(x) \in S_{2} \\
\text{Such reduction is denoted } S_{1} \preccurlyeq^{P}_{m} S_{2} \\
}
$$
### Example
$$
\displaylines{
\text{Let } VC = \Set{ (G, k) \mid \exists S \subseteq V(G): \abs{S} = k \text{ and } S \text{ is a vertex cover in } G } \\
\text{Let } DS = \Set{ (G, k) \mid \exists S \subseteq V(G): \abs{S} = k \text{ and } S \text{ is a dominating set in } G } \\
\text{Show a Karp reduction from } VC \text{ to } DS \\
\\
\text{Solution:} \\
\text{Let } G = (V, E) \text{ be a graph} \\
\text{Let } k \in \mathbb{N} \\
\text{Let } f(G, k) = (G', k') \\
\text{Let } G' = (V', E') \\
\text{Let } k' = k \\
\text{Where } V' = (V \setminus \Set{ v \in V \mid deg(v) = 0 }) \cup \Set{ X_{uv} \mid \Set{ u, v } \in E } \\
\text{And } E' = E \cup \Set{ \Set{ u, X_{uv} } \mid \Set{ u, v } \in E } \cup \Set{ \Set{ v, X_{uv} } \mid \Set{ u, v } \in E } \\
\\
\boxed{ \implies } \\
\text{Let } (G, k) \in VC \\
\implies \exists S \subseteq V(G), \abs{S} = k \text{ is a vertex cover in } G \\
\text{Let } \forall v \in V(G): deg(v) = 0 \implies v \not\in S & WLOG \\
\text{If such vertex exists in } S, \text{ simply swap it for a non-isolated one} \\
\text{Let } w \in V' \\
\text{Case 1. } w \in V \\
\implies \exists x \in \Gamma_{G}(w) \implies x \in \Gamma_{G'}(w) \\
x \in \Gamma_{G}(w) \implies w \in S \text{ or } x \in S \\
\implies w \text{ is dominated by } S \\
\text{Case 2. } w \not\in V \\
\implies \exists u, v \in V: w = X_{uv} \\
\implies u, v \in \Gamma_{G'}(w) \\
\Set{ u, v } \in E \implies u \in S \text{ or } v \in S \implies w \text{ is dominated by } S \\
\implies \text{In both cases, } w \text{ is dominated by } S \\
\implies S \text{ is a dominating set in } G' \\
\implies (G', k') \in DS \\
\\
\boxed{ \impliedby } \\
\text{Let } (G', k') \in DS \\
\implies \exists S \subseteq V(G'), \abs{S} = k' \text{ is a dominating set in } G' \\
\text{Let } \forall X_{uv} \in V(G'): X_{uv} \not\in S & WLOG \\
\text{If such vertex exists in } S, \text{simply swap it for } u \text{ or } v \\
\text{Let } \Set{ u, v } \in E(G) \\
\implies \exists X_{uv} \in V(G') \setminus S: u \in S \text{ or } v \in S \\
\implies \Set{ u, v } \text{ is covered by } S \\
\implies S \text{ is a vertex cover in } G \text{ and } \abs{S} = k' = k \\
}
$$
## Cook reduction (polynomial-time reduction) #definition 
$$
\displaylines{
\text{Let } A, B \text{ be two computation problems} \\
\text{Cook reduction from } A \text{ to } B \text{ denoted by } A \preccurlyeq^{P}_{T} B \\
\text{is a polynomial algorithm that solves } A \text{ via an "oracle" that solves } B \\
\text{An "oracle" that solves $B$ is also an algorithm (a theoretical one), that accepts input} \\
\text{and returns correct output in } O(1) \text{ time} \\
}
$$
