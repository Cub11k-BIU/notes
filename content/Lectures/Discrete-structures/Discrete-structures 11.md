---
{"publish":true,"created":"21/01/26, 16:31","modified":"2026-03-24T15:00:28.545+02:00","tags":["Academia","Lecture","Discrete-structures"],"cssclasses":""}
---

## Bounding Ramsey numbers
$$
\displaylines{
\text{Can we find an upper bound on } R(n, n)? \\
\text{Recall Stirling's approximation} \\
n! = \sqrt{ 2\pi n } \left( \frac{n}{e} \right)^{n} \cdot \left( 1 + O\left( \frac{1}{n} \right) \right) \\
R(n, n) \leq \binom{2n-2}{n-1} < \binom{2n}{n} = \frac{(2n)!}{n!n!} = \\
= \frac{\sqrt{ 4\pi n }\left( \frac{2n}{e} \right)^{2n}}{2\pi n \left( \frac{n}{e} \right)^{2n}} \cdot \left( 1 + O\left( \frac{1}{n} \right) \right) = \frac{4^{n}}{\sqrt{ \pi n }} \cdot \left( 1 + O\left( \frac{1}{n} \right) \right) \\
\implies \boxed{ R(n, n) \leq \frac{4^{n}}{\sqrt{ \pi n }} \cdot \left( 1 + O\left( \frac{1}{n} \right) \right) } \\
\\
\text{Can we now find a lower bound?} \\
\text{In order to do this, we need to find } m \\
\text{such that there is a coloring of } K_{m} \text{ without blue/red } K_{n} \\
\text{Let } m = (n-1)^{2} \\
\text{Let us divide } K_{(n-1)^{2}} \text{ into } n-1 \text{ copies of } K_{n-1} \\
\text{Let all edges within one } K_{n-1} \text{ be blue and all edges between copies red} \\
\text{This coloring contains no blue/red } K_{n} \\
\implies R(n, n) \geq (n-1)^{2} \\
\text{Can we find an exponential lower bound?} \\
}
$$
### Ramsey number lower bound #theorem 
$$
\displaylines{
R(n, n) \geq 2^{n/2} \\
\\
\text{Proof:} \\
\text{Let us first prove } \binom{m}{n} \cdot 2^{1-\binom{n}{2}} < 1 \implies R(n, n) > m \\
\text{Let } K_{m} \text{ have some blue-red coloring at random} \\
\text{Let } \mathcal{A} \text{ be an event that we obtained a monochromatic } K_{n} \\
\text{For every fixed subset } S \subseteq V(K_{m}) : \abs{S} = n \\
\text{Let } \mathcal{A}_{S} \text{ be the event that the induced graph } K_{m}[S] \text{ is monochromatic} \\
\text{Clearly, } \mathcal{A} = \bigcup_{S \subseteq V, \abs{S} = n} \mathcal{A}_{S} \\
\text{Fix } S \subseteq V, \abs{S} = n \\
\text{There are } 2^{\binom{n}{2}} \text{ different colorings of } K_{m}[S] \\
\text{Only two of these colorings are monochromatic} \\
\implies P(\mathcal{A}_{S}) = 2^{1-\binom{n}{2}} \\
\implies P(\mathcal{A}) \leq \sum_{S \subseteq V, \abs{S} = n} P(\mathcal{A}_{S}) = \binom{m}{n} \cdot 2^{1-\binom{n}{2}} \\
\binom{m}{n} \cdot 2^{1-\binom{n}{2}} < 1 \implies P(\mathcal{A}) < 1 \\
\implies \text{There exists a coloring with no monochromatic } K_{n} \\
\implies R(n, n) > m \\
\\
\text{For } n \geq 3: \binom{m}{n} < \frac{m^{n}}{n!} \\
2^{1-\binom{n}{2}} = \frac{2}{2^{n(n-1)/2}} = \frac{2^{1+n/2}}{2^{n^{2}/2}} \\
\implies \text{For } n \geq 3 \text{ and } m = \floor{2^{n/2}} \\
\binom{m}{n} \cdot 2^{1-\binom{n}{2}} < \frac{2^{1+n/2}}{n!} \cdot \frac{m^{n}}{2^{n^{2}/2}} \leq \frac{2^{1+n/2}}{n!} < 1 \\
\implies R(n, n) > \floor{2^{n/2}} \implies \boxed{ R(n, n) \geq 2^{n/2} } \\
}
$$
---
$$
\displaylines{
\text{As a conclusion we get} \\
2^{n/2} \leq R(n, n) \leq 4^{n} \\
\text{or} \\
2^{n/2} \leq R(n, n) \leq (2^{n/2})^{4} \\
}
$$
---
## Turan numbers
$$
\displaylines{
\text{Let } H \\
\text{What is the maximum number of edges in } n\text{-vertex graph } G \\
\text{such that } H \text{ is not a subgraph of } G? \\
\\
\text{Consider } H = K_{r} \\
r = 2 \implies G \text{ has no edges} \\
e = 3 \implies G \text{ has no triangles} \\
K_{\ceil{\frac{n}{2}},\floor{\frac{n}{2}}} \text{ has no triangles and has approximately } \frac{n^{2}}{4} \text{ edges} \\
\text{What about general } r? \\
\\
\text{Let } K_{n_{1}, n_{2}, \dots, n_{r-1}} \text{ be a } (r-1)\text{-partite clique} \\
\text{That is}, V = V_{1} \cup V_{2} \cup \dots \cup V_{r-1} \\
\abs{V_{i}} = n_{i}, \Set{ u, v } \in E \iff u \in V_{i}, v \in V_{j}, i \neq j \\
\text{Clearly, any subset of } r \text{ vertices will have at least two vertices from } V_{i} \\
\implies \text{This graph doesn't contain } K_{r} \\
\\
\text{Number of edges in } K_{n_{1}, \dots, n_{r-1}} \text{ is} \\
\frac{1}{2} \sum_{i=1}^{r-1} n_{i} \cdot (n-n_{i}) = \frac{n}{2} \sum_{i=1}^{r-1} n_{i} - \frac{1}{2} \sum_{i=1}^{r-1} n_{i}^{2} = \frac{1}{2}\left( n^{2} - \sum_{i=1}^{r-1} n_{i}^{2} \right) \\
\text{If } r-1 \text{ divides } n \text{ then the formula becomes} \\
\frac{1}{2}\left( n^{2} - \sum_{i=1}^{r-1} \left( \frac{n}{r-1} \right)^{2} \right) = \frac{n^{2}}{2} \left( 1 - \frac{1}{r-1} \right) \\
}
$$
### Turan theorem #theorem 
$$
\displaylines{
\text{If } G = (V, E), \abs{V} = n \text{ contains no } K_{r} \text{ then } \abs{E} \leq \frac{n^{2}}{2} \cdot \left( 1-\frac{1}{r-1} \right) \text{ for } r \geq 2 \\
\\
\text{Original Turan's proof:} \\
r = 2 \implies \abs{E} = 0 \\
\text{Let } r \geq 3 \\
\text{Proof is by induction on } n \\
\text{Base case. } n \leq r-1 \\
\abs{E} \leq \binom{n}{2} = \frac{n(n-1)}{2} = \frac{n^{2}}{2}\left( 1-\frac{1}{n} \right) \leq \frac{n^{2}}{2} \cdot \left( 1-\frac{1}{r-1} \right) \\
\text{Inductive step. Let } n \geq r \\
\text{Let } G = (V, E) \text{ be a graph without } K_{r} \text{ as a subgraph and maximal number of edges} \\
G \text{ then must contain } K_{r-1}, \text{ otherwise we can add an edge and still have no } K_{r} \\
\text{Let } A \subset V: G[A] = K_{r-1} \\
\text{Let } B = V \setminus A \\
\text{Let } E = E_{A} \cup E_{B} \cup E_{A,B} \\
E_{A} = \Set{ \Set{ u, v } \mid u, v \in A }, \abs{E_{A}} = \binom{r-1}{2} \\
E_{B} = \Set{ \Set{ u, v } \mid u, v \in B } \\
G[B] \text{ has no } K_{r} \text{ and has } n - (r-1) \text{ vertices} \\
\text{Using inductive hypothesis, } \abs{E_{B}} \leq \frac{(n-(r-1))^{2}}{2} \left( 1 - \frac{1}{r-1} \right) \\
E_{A,B} = \Set{ \Set{ u, v } \mid u \in A, v \in B } \\
\text{Each vertex } v \in B \text{ can have at most } r-2 \text{ neighbors in } A, \\
\text{otherwise } G[A \cup \Set{ u }] = K_{r} \\
\implies \abs{E_{A,B}} \leq \abs{B} \cdot (r-2) = (n-(r-1))(r-2) \\
\implies \abs{E} = \abs{E_{A}} + \abs{E_{B}} + \abs{E_{A,B}} \leq \\
\leq \binom{r-1}{2} + \frac{(n-(r-1))^{2}}{2} \left( 1 - \frac{1}{r-1} \right) + (n-(r-1))(r-2) = \\
= \binom{r-1}{2} + \frac{(n-(r-1))^{2}}{2} \left( 1 - \frac{1}{r-1} \right) + (n-(r-1))(r-1)\left( 1-\frac{1}{r-1} \right) = \\
= \binom{r-1}{2} + \frac{(n-(r-1))^{2} + 2(n-(r-1))(r-1)}{2} \cdot \left( 1 - \frac{1}{r-1} \right) = \\
= \binom{r-1}{2} + \frac{(n-(r-1))(n+(r-1))}{2} \cdot \left( 1 - \frac{1}{r-1} \right) = \\
= \frac{(r-1)(r-2)}{2} \cdot \frac{r-1}{r-2} \cdot \left( 1-\frac{1}{r-1} \right) + \frac{n^{2}-(r-1)^{2}}{2} \cdot \left( 1 - \frac{1}{r-1} \right) = \\
= \boxed{ \frac{n^{2}}{2} \cdot \left( 1 - \frac{1}{r-1} \right) } \\
}
$$
An alternative proof of this theorem uses probabilistic method and was devised by Alon Spencer
$$
\displaylines{
\text{First, we prove a lemma} \\
\text{Let } MC(G) \text{ denote the size of the largest clique in } G \\
\text{Let } \forall v_{i} \in V: d_{i} = deg(v_{i}) \\
\text{Then } MC(G) \geq \sum_{i=1}^{n} \frac{1}{n-d_{i}} \\
\\
\text{Let } \pi \text{ be a uniformly random permutation of vertices of } V \\
P(\pi) = \frac{1}{n!} \\
\text{Let } C_{\pi} = \Set{ v_{i} \mid \forall v_{j}: \pi(v_{j}) < \pi(v_{i}) \implies \Set{ v_{i}, v_{j} } \in E } \\
\text{In words,} \\
v_{i} \in C_{\pi} \iff \text{all the vertices who precede $v_{i}$ in the permutation $\pi$ are neighbors of $v_{i}$} \\
\text{Note that for every permutation } \pi, G[C_{\pi}] \text{ is a clique} \\
\text{Let } \forall v_{i} \in V: X_{i} = \begin{cases}
1 & v_{i} \in C_{\pi} \\
0 & \text{otherwise} \\
\end{cases} \\
\text{Let } X = \sum_{i=1}^{n} X_{i} \implies X = \abs{C_{\pi}} \\
\text{Let } A_{i} = V \setminus (\Gamma(v_{i}) \\
v_{i} \in C_{\pi} \iff \forall u \in A_{i}: \pi(v_{i}) \leq \pi(u) \\
\text{Let } a_{i} = \abs{A_{i}} = n - d_{i} \\
\text{By symmetry, } P(X_{i}) = \frac{1}{a_{i}} \\
E[X] = \sum_{i=1}^{n} E[X_{i}] = \sum_{i=1}^{n} \frac{1}{a_{i}} = \sum_{i=1}^{n} \frac{1}{n-d_{i}} \\
\implies \exists \pi: \abs{C_{\pi}} \geq \sum_{i=1}^{n} \frac{1}{n-d_{i}} \implies \boxed{ MC(G) \geq \sum_{i=1}^{n} \frac{1}{n-d_{i}} } \\
\\
\text{Recall Cauchy-Schwartz inequality: } \left( \sum_{i=1}^{n} a_{i}b_{i} \right)^{2} \leq \sum_{i=1}^{n} a_{i}^{2} \cdot \sum_{i=1}^{n} b_{i}^{2} \\
\text{Let } a_{i} = \sqrt{ n-d_{i} }, b_{i} = \frac{1}{\sqrt{ n-d_{i} }} \\
n^{2} = \left( \sum_{i=1}^{n} a_{i}b_{i} \right)^{2} \leq \sum_{i=1}^{n} a_{i}^{2} \cdot \sum_{i=1}^{n} b_{i}^{2} = \sum_{i=1}^{n} \frac{1}{n-d_{i}} \cdot \sum_{i=1}^{n} (n-d_{i}) \leq \\
\leq MC(G) \cdot \lrp{n^{2} - \sum_{i=1}^{n} d_{i}} = MC(G) \cdot (n^{2} - 2\abs{E}) \\
G \text{ doesn't contain } K_{r} \implies MC(G) \leq r-1 \\
\implies n^{2} \leq (n^{2} - 2\abs{E})(r-1) \\
\implies \boxed{ \abs{E} \leq \frac{n^{2}}{2}\left( 1-\frac{1}{r-1} \right) } \\
}
$$
---
## Counting labeled trees
$$
\displaylines{
\text{A labeled tree over } [n] \text{ is a tree with the vertex set } V = [n] \\
\text{How many such trees exist with } n \text{ vertices?} \\
\text{For } n = 1 \text{ there is only one - isolated vertex} \\
\text{For } n = 2 \text{ there is only one - an edge} \\
\text{For } n = 3 \text{ there are } 3 \\
\text{For } n = 4 \text{ there are } 16 \\
\text{For } n = 5 \text{ there are } 125 \\
\text{What is the general formula? Is there one?} \\
\begin{array}{c|c}
2 & 1 = 2^{2-2} \\
3 & 3 = 3^{3-2} \\
4 & 16 = 4^{4-2} \\
5 & 125 = 5^{5-2} \\
\end{array} \\
\text{It looks like } n^{n-2} - \text{can we prove it?} \\
}
$$
### Cayley's formula #theorem 
$$
\displaylines{
\text{Number of labeled trees with } n \text{ vertices is } n^{n-2} \\
\\
\text{Proof:} \\
\text{We will see a beautiful proof via Prufer sequences} \\
\text{A Prufer sequence is a specific encoding of a lbelebed tree} \\
\text{using a sequence over } [n] \text{ of length } n-2 \\
\\
\text{Let } \mathcal{T}_{n} \text{ be the set of labeled trees with } n \text{ vertices} \\
\text{We will construct an encoding function } f_{e}: \mathcal{T}_{n} \to [n]^{n-2} \\
\text{And a decoding function } f_{d}: [n]^{n-2} \to \mathcal{T}_{n} \\
\text{We will show that } f_{e}, f_{d} \text{ are injective and Cayley's formula will follow} \\
\begin{align}
\text{Prufer encode} = \ & f_{e}(T): \\
1. & \quad s \leftarrow \text{array of length } n-2 \\
2. & \quad \text{for } i \in [n-2]: \\
3. & \qquad v \leftarrow \text{leaf with the smallest label} \\
4. & \qquad s[i] \leftarrow \text{neighbor of } v \\
5. & \qquad T \leftarrow T \setminus \Set{ v } \\
6. & \quad \text{return } s \\
\end{align} \\
\text{Let us prove that } f_{e} \text{ is injective} \\
\text{Proof is by induction on } n \\
\text{Base case. } n = 2 \\
\text{There is only one tree $T$, } f_{e}(T) = () \\
\text{Inductive step. Let } f_{e} \text{ be injective on labeled trees with } n-1 \text{ vertices} \\
\text{Let } T \neq \hat{T} \in \mathcal{T}_{n} \\
\text{Let } f_{e}(T) = (s_{1}, \dots, s_{n-2}), \quad f_{e}(\hat{T}) = (\hat{s}_{1}, \dots, \hat{s}_{n-2}) \\
\text{Let } v (\hat{v}) \text{ be the leaf with the smallest label in } T(\hat{T}) \\
\text{and } s_{1}(\hat{s}_{1}) \text{ the neighbor of } v(\hat{v}) \\
\text{Case 1. Let } s_{1} \neq \hat{s}_{1} \\
\implies f_{e}(T) \neq f_{e}(\hat{T}) \implies \boxed{ f_{e} \text{ is injective} } \\
\text{Case 2. Let } s_{1} = \hat{s}_{1} \text{ and } v = \hat{v} \\
T \neq \hat{T} \implies T \setminus \Set{ v } \neq \hat{T} \setminus \Set{ \hat{v} } \\
\text{By the inductive hypothesis} \\
f_{e}(T \setminus \Set{ v }) = (s_{2}, \dots, s_{n-2}) \neq (\hat{s}_{2}, \dots, \hat{s}_{n-2}) = f_{e}(\hat{T} \setminus \Set{ \hat{v} }) \\
\implies f_{e}(T) = (s_{1}, \dots, s_{n-2}) \neq (\hat{s}_{1}, \dots, \hat{s}_{n-2}) = f_{e}(\hat{T}) \\
\implies \boxed{ f_{e} \text{ is injective} } \\
\text{Case 3. Let } v \neq \hat{v} \\
\text{Let } v < \hat{v} & WLOG \\
\implies v \text{ is not the leaf in } \hat{T} \\
\implies v \in (\hat{s}_{1}, \dots, \hat{s}_{n-2}) \\
v \not\in (s_{1}, \dots, s_{n-2}) \implies f_{e}(T) = (s_{1}, \dots, s_{n-2}) \neq (\hat{s}_{1}, \dots, \hat{s}_{n-2}) = f_{e}(\hat{T}) \\
\implies \boxed{ f_{e} \text{ is injective} } \\
}
$$
---
$$
\displaylines{
\begin{align}
\text{Prufer decode} = \ & f_{d}(s_{1}, \dots, s_{n-2}): \\
1. & \quad P \leftarrow [n] \\
2. & \quad T \leftarrow (P, \emptyset) \text{ empty graph over } P \\
3. & \quad \text{for } i \in [n-2]: \\
4. & \qquad v \leftarrow \text{minimum element in } P \setminus \Set{ s_{i}, \dots, s_{n-2} } \\
5. & \qquad E(T) \leftarrow E(T) \cup \Set{ \Set{ s_{i}, v } } \\
6. & \qquad P \leftarrow P \setminus \Set{ v } \\
7. & \quad E(T) \leftarrow E(T) \cup \Set{ P } \text{ where } P = \Set{ u, w } \\
8. & \quad \text{return } T \\
\end{align} \\
\text{First, let us prove that } f_{d} \text{ indeed returns a tree} \\
\text{Proof is by induction on } n \\
\text{Base case. } n = 2 \\
\implies S = \emptyset \implies f_{d}(S) \text{ is in fact a tree} \\
\text{Inductive step. Let for } n, f_{d}(S) \text{ returns a tree} \\
\text{Let } P = [n+1], S = (s_{1}, \dots, s_{n-1}) \\
\text{Let minimum } v \in P \setminus \Set{ s_{1}, \dots, s_{n-1} } \\
\text{By inductive hypothesis} \\
f_{d}(s_{2}, \dots, s_{n-1}) \text{ that is run on } P \setminus \Set{ v } \text{ returns a tree } T \\
\text{We add an edge } \Set{ v, s_{1} } \text{ and obtain a tree on } n+1 \text{ vertices} \\
\\
\text{Let us now prove that } f_{d} \text{ is injective} \\
\text{Let } (s_{1}, \dots, s_{n-2}) = S \neq \hat{S} = (\hat{s}_{1}, \dots, \hat{s}_{n-2}) \\
\text{Let } T = f_{d}(S), \hat{T} = f_{d}(\hat{S}) \\
\text{Let } v_{i} (\hat{v}_{i}) \text{ be the vertex } v \text{ from the } i\text{'th iteration} \\
\text{of the Prufer decode algorithm on } S(\hat{S}) \\
\text{Let } i \text{ be the minimal index such that } (s_{i}, v_{i}) \neq (\hat{s}_{i}, \hat{v}_{i}) \\
\text{In the first } i-1 \text{ steps of Prufer decode,} \\
\text{algorithm acts the same on both } S \text{ and } \hat{S} \\
\text{Case 1. Let } v_{i} \neq \hat{v}_{i} \\
\text{Let } v_{i} < \hat{v}_{i} & WLOG \\
\implies v_{i} \in (\hat{s}_{i}, \dots, \hat{s}_{n-2}) \\
\text{From step } i \text{ onward, the algorithm will add only one edge} \\
\text{incident to } v_{i} \text{ in } E(T) \text{ and at least two edges incident to } v_{i} \text{ in } E(\hat{T}) \\
\implies deg_{T}(v_{i}) \neq deg_{\hat{T}}(v_{i}) \implies T \neq \hat{T} \implies f_{d}(S) \neq f_{d}(\hat{S}) \\
\implies \boxed{ f_{d} \text{ is injective} } \\
\text{Case 2. Let } v_{i} = \hat{v}_{i} \\
\implies s_{i} \neq \hat{s}_{i} \\
\Set{ v_{i}, s_{i} } \in E(T) \text{ by definition of the algorithm} \\
\text{In the first } i-1 \text{ steps } \Set{ s_{i}, v_{i} } \text{ was not added to } E(\hat{T}) \\
\text{In the } i\text{-th step vertex } v_{i} \text{ is removed from } P \text{ for both } S \text{ and } \hat{S} \\
\implies \text{No edges incident to } v_{i} \text{ will be added to } E(\hat{T}) \text{ in steps } i+1 \text{ onward} \\
\hat{s}_{i} \neq s_{i} \implies \Set{ s_{i}, v_{i} } \text{ is not added to } E(\hat{T}) \text{ during the } i\text{'th step} \\
\implies \Set{ v_{i}, s_{i} } \not\in \hat{T} \implies T \neq \hat{T} \\
\implies f_{d}(S) \neq f_{d}(\hat{S}) \implies \boxed{ f_{d} \text{ is injective} } \\
}
$$
---
$$
\displaylines{
f_{e}: \mathcal{T}_{n} \to [n]^{n-2} \text{ is injective} \\
f_{d}: [n]^{n-2} \to \mathcal{T}_{n} \text{ is injective} \\
\implies \text{By Cantor-Bernstein theorem } \boxed{ \abs{\mathcal{T}_{n}} = \abs{[n]^{n-2}} = n^{n-2} } \\
}
$$
