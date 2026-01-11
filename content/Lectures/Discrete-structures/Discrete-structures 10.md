---
{"publish":true,"created":"06/01/26, 16:02","modified":"2026-01-06T18:16:34.602+02:00","tags":["Academia","Lecture","Discrete-structures"],"cssclasses":""}
---

## Sum-free subset #definition 
$$
\displaylines{
X \subseteq \mathbb{Z} \text{ is called sum-free iff} \\
\not\exists a, b, c \in X: a + b = c \\
\text{For example, } X = \Set{ 1, 3, 5, \dots } \text{ is a sum-free subset} \\
}
$$
---
$$
\displaylines{
\text{Given a set } A \subseteq \mathbb{Z} \\
\text{What is the largest sum-free subset } B \subseteq A? \\
}
$$
## Erdos theorem (sum-free subset) #theorem 
$$
\displaylines{
\text{Every set of } n \text{ nonzero integers contains a sum-free subset of size } \geq \frac{n}{3} \\
\\
\text{Proof:} \\
\text{Let } A \text{ be a set of $n$ nonzero integers} \\
\text{Let } \theta \in (0, 1) \text{ uniformly at random} \\
\text{Let } A_{\theta} = \Set{ k \in A \mid \theta \cdot k \mod 1 \in \left( \frac{1}{3}, \frac{2}{3} \right) } \\
\text{Let } k, m \in A_{\theta} \\
\text{Let } \begin{eqsys}
\alpha = \theta \cdot k \mod 1 \\
\beta = \theta \cdot m \mod 1 \\
\end{eqsys} \\
\implies \alpha + \beta \in \left( \frac{2}{3}, \frac{4}{3} \right) \implies \theta(k+m) \mod 1 \in \left[ 0, \frac{1}{3} \right) \cup \left[ \frac{2}{3}, 1 \right) \\
\implies k+m \not\in A_{\theta} \implies \boxed{ A_{\theta} \text{ is sum-free} } \\
\\
\text{Let } k \in A \\
P(k \in A_{\theta}) = P\left( \theta \in \left( \frac{1}{3k}, \frac{2}{3k} \right) \cup \left( \frac{4}{3k}, \frac{5}{3k} \right) \cup \dots \cup \left( \frac{3k-2}{3k}, \frac{3k-1}{3k} \right) \right) = \\
= P\left( \theta \in \left( \frac{3i+1}{3k}, \frac{3i+2}{3k} \right), i \in [0, n-1] \right) = \frac{1}{3} \\
\implies E[\abs{A_{\theta}}] = \frac{n}{3} \implies \boxed{ \abs{A_{\theta}} \geq \frac{n}{3} } \\
}
$$
## Eberhard, Green, Manners theorem #theorem 
$$
\displaylines{
\forall \varepsilon > 0: \exists A \subseteq \mathbb{Z}: \forall B \text{ sum-free subset of } A: \abs{B} \leq n\left( \frac{1}{3} + \varepsilon \right) \\
}
$$
---
$$
\displaylines{
\text{Let } G \text{ be a } d\text{-regular graph} \\
\text{An independent set of size } IS(G) \geq \frac{n}{d+1} \text{ can be constructed greedily} \\
}
$$
## Large Independent set #theorem 
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a graph} \\
\text{Then } IS(G) \geq \sum_{v \in V} \frac{1}{deg(v)+1} \\
\\
\text{Proof:} \\
\text{Let } \pi: V \to [n] \text{ uniformly at random} \\
\text{Let } I \subseteq V: I = \Set{ v \in V \mid \forall u \in \Gamma(v): \pi(v) \leq \pi(u) } \\
\text{Let } u, v \in I \\
\pi(u) < \pi(v) \text{ or } \pi(v) < \pi(u) \implies \Set{ u, v } \not\in E \\
\implies I \text{ is an independent set} \\
\\
\text{Let } \forall v \in V: X_{v} = \begin{cases}
1 & v \in I \\
0 & v \not\in I \\
\end{cases} \\
\text{Let } v \in V \\
\forall u \in \Set{ v } \cup \Gamma(v): P(X_{u} = 1) = P(\forall w \in \Set{ v } \cup \Gamma(v): \pi(u) \leq \pi(w) ) = \frac{1}{deg(v) + 1} \\
v \in \Set{ v } \cup \Gamma(v) \implies P(X_{v}) = \frac{1}{deg(v)+1} \\
\implies E[\abs{I}] = \sum_{v \in V} E[X_{v}] = \sum_{v \in V} P(X_{v} = 1) = \sum_{v \in V} \frac{1}{deg(v)+1} \\
\implies \abs{I} \geq \sum_{v \in V} \frac{1}{deg(v)+1} \\
\\
\text{Alternative proof by induction:} \\
\text{Proof is by induction on } \abs{V} = n \\
\text{Base case. } n = 1 \text{ is trivial} \\
\text{Inductive step.} \\
\text{Let } G = (V, E) \text{ be a graph with } n+1 \text{ vertices} \\
\text{Let } v \in V: deg(v) = \delta(G) \\
\text{Let } G' = (V \setminus (\Set{ v } \cup \Gamma(v)), E') \\
\abs{V'} = \abs{V} - 1 - \delta(G) = n - 1 - \delta(G) \\
\text{By inductive hypothesis } IS(G') \geq \sum_{u \in V'} \frac{1}{deg_{G'}(u)+1} \\
\sum_{u \in \Gamma(v) \cup \Set{ v }} \frac{1}{deg_{G}(u)+1} \leq \delta(G)+1 \cdot \frac{1}{\delta(G)+1} = 1 \\
\implies IS(G) = 1 + IS(G') \geq \sum_{u \in \Gamma(v) \cup \Set{ v }} \frac{1}{deg_{G}(u)+1} + \sum_{u \in V'} \frac{1}{deg_{G'}(u)+1} \geq \sum_{u \in V} \frac{1}{deg_{G}(u)+1} \\
}
$$
From this immediately follows:
$$
\displaylines{
MC(G) = IS(\overline{G}) \geq \sum_{v \in V} \frac{1}{deg_{\overline{G}}(v)+1} = \sum_{v \in V} \frac{1}{n-deg_{G}(v)} \\
}
$$
## Dominating set #definition 
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a graph} \\
U \subseteq V \text{ is called dominating} \iff \forall v \in V \setminus U: \exists u \in U: \Set{ u, v } \in E \\
}
$$
## Large dominating set
$$
\displaylines{
\text{Let } G = (V, E) \text{ be a graph} \\
\text{Let } \delta = \delta(G) \\
\text{Then } DS(G) \leq \frac{\ln(\delta+1)+1}{\delta+1}n \\
\\
\text{Proof:} \\
\text{Let } p \in (0, 1) \\
\text{Let } A_{p} \subseteq V: \forall v \in V: P(v \in A_{p}) = p \\
\text{Let } B_{p} = V \setminus (A_{p} \cup \Gamma_{G}(A_{p})) \\
A_{p} \cup B_{p} \text{ is a dominating set} \\
P(v \in A_{p} \cup B_{p}) = P(v \in A_{p}) + P(v \in B_{p}) = p + (1-p)^{1+deg(v)} \\
\\
deg(v) \geq \delta \\
\forall x \geq 0: e^{-x} \geq 1 - x \\
\implies (1-p)^{1+deg(v)} \leq (1-p)^{1+\delta} \leq e^{-p(1+\delta)} \\
\text{Let } p = \frac{\ln(\delta+1)}{\delta+1} \\
\implies P(v \in A_{p} \cup B_{p}) \leq \frac{\ln(\delta+1)}{\delta+1} + e^{-\ln(\delta+1)} = \frac{\ln(\delta+1)+1}{\delta+1} \\
\implies E[\abs{A_{p} \cup B_{p}}] \leq \frac{\ln(\delta+1)+1}{\delta+1}n \\
\implies \boxed{ DS(G) \leq \frac{\ln(\delta+1)+1}{\delta+1}n } \\
}
$$
---
## Ramsey numbers #definition 
$$
\displaylines{
\text{Let } s, t \in \mathbb{N} \\
\text{A Ramsey number } R(s, t) \text{ is the minimal integer } R \\
\text{such that in every coloring of the edges of } K_{R} \text{ in red and blue,} \\
\text{there is either a red } K_{s} \text{ or a blue } K_{t} \text{ as a subgraph} \\
\\
\text{Equivalently, } R(s, t) \text{ is the minimal integer } R \text{ such that every } R\text{-vertex graph} \\
\text{contains either a clique of size } s \text{ or an independent set of size } t \\
}
$$
Some observations
$$
\displaylines{
\forall s, t \geq 1: R(s, 1) = R(1, t) = 1 \\
\text{This follows from the fact that every graph contains } K_{1} \\
\\
\forall s, t: R(s, t) = R(t, s) \\
\text{This follows from the fact that } MC(G) = IS(\overline{G}) \\
\\
\forall s \geq 2: R(s, 2) = s \\
G \text{ either has a blue edge or it is a red clique} \\
}
$$
## Ramsey number decomposition #lemma
$$
\displaylines{
\forall s, t \geq 2: R(s, t) \leq R(s, t-1) + R(s-1, t) \\
\\
\text{Proof:} \\
\text{Let } R = R(s, t-1) + R(s-1, t) \\
\text{Let there be a random red-blue edge coloring of } K_{R} \\
\text{Let } v \in V(K_{R}) \\
v \text{ is incident to } R - 1 \text{ edges} \\
\implies v \text{ is incident to at least } R(s-1, t) \text{ red edges or } R(s, t-1) \text{ blue edges} \\
\text{Otherwise, } v \text{ is incident to at most } R(s-1, t) - 1 + R(s, t-1) - 1 = R - 2 \text{ edges} \\
\text{Let } v \text{ is incident to at least } R(s-1, t) \text{ red edges} \\
\text{Let } V_{red} = \Set{ u \in V(K_{R}) \setminus \Set{ v } \mid \Set{ u, v } \text{ is red} } \subseteq \Gamma(v) \\
\abs{V_{red}} \geq R(s-1, t) \implies G[V_{red}] \text{ contains a red } K_{s-1} \text{ or a blue } K_{t} \\
\text{Both cases give us either a red } K_{s} \text{ or a blue } K_{t} \text{ in } G \\
\text{Similarly for } R(s, t-1) \text{ blue edges} \\
}
$$
## Erdos, Szekeres theorem #theorem 
$$
\displaylines{
\forall s, t \geq 1: R(s, t) \leq \binom{s+t-2}{s-1} \\
\text{In words, } \forall R \geq \binom{s+t-2}{s-1}: K_{R} \text{ either has a red } K_{s} \text{ or a blue } K_{t} \\
\\
\text{Proof:} \\
\text{Proof is by induction on } s+t \\
\text{Base case. } s+t \leq 3 \implies s = 1 \text{ or } t = 1 \implies R(s, t) = 1 \leq \binom{s+t-2}{s-1} \\
\text{Inductive step. Let } R(s, t) \leq \binom{s+t-2}{s-1} \\
\text{Let } s, t \geq 2 \\
\implies R(s, t) \leq R(s-1, t) + R(s, t-1) \leq \binom{(s-1)+t-2}{(s-1)-1} + \binom{s+(t-1)-2}{s-1} = \\
= \binom{s+t-3}{s-2} + \binom{s+t-3}{s-1} = \binom{s+t-2}{s-1} \\
}
$$
From this follows:
$$
\displaylines{
R(3, 3) \leq \binom{4}{3} = 6 \\
R(3, 3) > 5 \implies \boxed{ R(3, 3) = 6 } \\
}
$$
