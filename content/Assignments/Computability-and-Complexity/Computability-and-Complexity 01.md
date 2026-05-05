---
{"publish":true,"created":"04/05/26, 11:43","modified":"2026-05-05T13:22:33.607+03:00","tags":["Academia","Assignment","Computability-and-Complexity"],"cssclasses":""}
---

## 1
$$
\displaylines{
\text{Let } S \text{ be a decision problem} \\
\text{We define that a separation can be proven in problem } S \text{ if} \\
\text{there exists a polynomial algorithm } V \text{ and polynomial } p \\
\text{such that for all } x, x': \\
(x \in S \text{ and } x' \not\in S) \text{ or } (x' \in S \text{ and } x \not\in S) \iff \exists y, \abs{y} \leq p(\abs{x} + \abs{x'}) : V(x, x', y) = 1 \\
\\
\text{Prove, disprove or show equivalence to an open question the following:} \\
S, \overline{S} \in NP \iff \text{Separation can be proven in problem } S \\
\\
\text{Solution:} \\
\text{We will prove this statement} \\
\boxed{ \implies } \text{ Let } S, \overline{S} \in NP \\
S \in NP \implies \exists V_{S}, p_{S} \text{ such that } \forall x: x \in S \iff \exists y_{1}, \abs{y_{1}} \leq p_{S}(\abs{x}): V_{S}(x, y_{1}) = 1 \\
\overline{S} \in NP \implies \exists V_{\overline{S}}, p_{\overline{S}} \text{ such that } \forall x: x \in \overline{S} \iff \exists y_{2}, \abs{y_{2}} \leq p_{\overline{S}}(\abs{x}): V_{\overline{S}}(x, y_{2}) = 1 \\
\\
\text{Let } y_{1}, y_{2} \in \Set{ 0, 1 }^{*} \\
\text{Let } y = y_{1} \circ \$ \circ y_{2} \\
\begin{align}
 & V(x, x', y): \\
1. & \quad \text{if } \$ \not\in y: \\
2. & \qquad \text{return } 0 \\
3. & \quad \text{Read } y \text{ until \$, write to } y_{1} \\
4. & \quad \text{Skip \$, read } y \text{ until the end, write to } y_{2} \\
5. & \quad \text{return } (V_{S}(x, y_{1}) \text{ and } V_{\overline{S}}(x', y_{2})) \text{ or } (V_{S}(x', y_{1}) \text{ and } V_{\overline{S}}(x, y_{2})) \\
\end{align} \\
\abs{y} = \abs{y_{1}} + 1 + \abs{y_{2}} \leq p_{S}(\abs{x}) + p_{\overline{S}}(\abs{x'}) + 1 \leq p_{S}(\abs{x} + \abs{x'}) + p_{\overline{S}}(\abs{x} + \abs{x'}) + 1 \\
\text{Let } p(n) = p_{S}(n) + p_{\overline{S}}(n) + 1 \\
\implies \abs{y} \leq p(\abs{x} + \abs{x'}) \\
V \text{ is clearly polynomial as it only reads input } y \text{ and runs } V_{S}, V_{\overline{S}} \\
\implies \boxed{ \text{Separation can be proven in problem } S } \\
\\
}
$$
$$
\displaylines{
\boxed{ \impliedby } \text{ Let seperation can be proven in problem } S \\
\implies \exists V, p \text{ such that } \forall x, x': \\
(x \in S \text{ and } x' \not\in S) \text{ or } (x' \in S \text{ and } x \not\in S) \iff \exists y, \abs{y} \leq p(\abs{x} + \abs{x'}) : V(x, x', y) = 1 \\
\\
\text{Let } S = \emptyset \\
\implies \overline{S} = \Set{ 0, 1 }^{*} \\
\implies V_{S}(x, y) = 0 \text{ and } V_{\overline{S}}(x, y) = 1 \text{ are polynomial verifiers} \implies \boxed{ S, \overline{S} \in NP } \\
\text{Let } S = \Set{ 0, 1 }^{*} \\
\implies \overline{S} = \emptyset \\
\implies V_{S}(x, y) = 1 \text{ and } V_{\overline{S}}(x, y) = 0 \text{ are polynomial verifiers} \implies \boxed{ S, \overline{S} \in NP } \\
\\
\text{Let } S \neq \emptyset \text{ and } S \neq \Set{ 0, 1 }^{*} \\
\implies \exists x_{in} \in S, x_{out} \in \overline{S} \\
\\
\implies \forall x, y: \begin{eqsys}
V(x, x_{in}, y) = 1 \iff x \not\in S \iff x \in \overline{S} \\
V(x, x_{out}, y) = 1 \iff x \in S \\
\end{eqsys} \\
\text{Let } V_{\overline{S}}(x, y) = V(x_{in}, x, y) \\
\text{Let } V_{S}(x, y) = V(x, x_{out}, y) \\
\text{Let } p_{S}(n) = p_{\overline{S}}(n) = p(n + \max\lrc{\abs{x_{in}}, \abs{x_{out}}}) \\
\implies p_{S}(\abs{x}) = p_{\overline{S}}(\abs{x}) = p(\abs{x} + \max\lrc{\abs{x_{in}}, \abs{x_{out}}}) \\
\abs{y} \leq p(\abs{x} + \abs{x'}) \leq p(\abs{x} + \max\lrc{\abs{x_{in}}, \abs{x_{out}}}) = p_{S}(\abs{x}) = p_{\overline{S}}(\abs{x}) \\
\text{Both } V_{S}, V_{\overline{S}} \text{ are polynomial as they only run } V \\
\implies \boxed{ S, \overline{S} \in NP } \\
\\
\implies \boxed{ \text{The statement is proved} } \\
}
$$
## 2a
$$
\displaylines{
\text{Prove, disprove or show equivalence to an open question:} \\ S_{1} \in NP, S_{2} \in P \implies S_{1} \setminus S_{2} \in NP \\
\\
\text{Solution:} \\
\text{We will prove this statement} \\
\text{Let } S_{1} \in NP \\
\implies \exists V_{1}, p_{1} \text{ such that } \forall x: x \in S_{1} \iff \exists y_{1}, \abs{y_{1}} \leq p_{1}(\abs{x}) : V_{1}(x, y_{1}) = 1 \\
\text{Let } S_{2} \in P \\
\implies \exists A_{2} \text{ such that } \forall x: A_{2}(x) = \begin{cases}
1 & x \in S_{2} \\
0 & x \not\in S_{2} \\
\end{cases} \\
\\
x \in S_{1} \setminus S_{2} \iff x \in S_{1} \text{ and } x \not\in S_{2} \\
\iff \exists y_{1}, \abs{y_{1}} \leq p_{1}(\abs{x}): V_{1}(x, y_{1}) = 1 \text{ and } A_{2}(x) = 0 \\
\\
\text{Let } V_{1,2}(x, y) = V_{1}(x, y) \text{ and not } A_{2}(x) \\
\text{Let } p_{1,2} = p_{1} \\
\implies V_{1,2} \text{ is a polynomial NP verifier for } S_{1} \setminus S_{2} \\
\implies \boxed{ S_{1} \setminus S_{2} \in NP } \\
}
$$
## 2b
$$
\displaylines{
\text{Prove, disprove or show equivalence to an open question:} \\
A \in P \text{ and there exists a Karp reduction from } A \text{ to } B \implies B \in P \\
\\
\text{Solution:} \\
\text{We will disprove this statement} \\
\text{Let } A = \emptyset \\
\text{Let } B = HALT \\
A \text{ is trivial} \implies A \in P \\
B \text{ is non-decidable} \implies B \not\in P \\
B \neq \Set{ 0, 1 }^{*} \implies \exists y_{no} \not\in B \\
\text{Note that } \abs{y_{no}} \text{ is finite} \\
\text{Let } f(x) = y_{no} \\
f \text{ is clearly computable as it only needs to print } y_{no} \\
\implies \forall x: \begin{eqsys}
x \not\in A \\
f(x) \not\in B \\
\end{eqsys} \implies A \preccurlyeq^{P}_{m} B \\
\\
\text{All conditions are fulfilled but } B \not\in P \\
}
$$
## 2c
$$
\displaylines{
\text{Prove, disprove or show equivalence to an open question:} \\
NP \text{ is closed under union} \\
\\
\text{Solution:} \\
\text{We will prove the statement} \\
\text{Let } S_{1}, S_{2} \in NP \\
\implies \begin{eqsys}
\exists V_{1}, p_{1} \text{ such that } \forall x: x \in S_{1} \iff \exists y_{1}, \abs{y_{1}} \leq p_{1}(\abs{x}): V_{1}(x, y_{1}) = 1 \\
\exists V_{2}, p_{2} \text{ such that } \forall x: x \in S_{2} \iff \exists y_{2}, \abs{y_{2}} \leq p_{2}(\abs{x}): V_{2}(x, y_{2}) = 1 \\
\end{eqsys} \\
\text{Let } S = S_{1} \cup S_{2} \\
\text{Let } y_{1}, y_{2} \in \Set{ 0, 1 }^{*} \\
\text{Let } y = \begin{cases}
\$ \circ y_{1} & x \in S_{1} \\
y_{2} & x \in S_{2} \\
\end{cases} \\
\begin{align}
 & V(x, y): \\
1. & \quad \text{if } \$ \in y: \\
2. & \qquad \text{return } V_{1}(x, y) \\
3. & \quad \text{return } V_{2}(x, y) \\
\end{align} \\
\text{Let } p(n) = \max\lrc{p_{1}(n) + 1, p_{2}(n)} \\
\begin{eqsys}
\abs{y} \leq p_{1}(\abs{x}) + 1 \\
\abs{y} \leq p_{2}(\abs{x}) \\
\end{eqsys} \implies \abs{y} \leq p(\abs{x}) \\
V \text{ is polynomial as it only reads input and runs } V_{1} \text{ or } V_{2} \\
\implies V \text{ is an NP verifier for } S \implies \boxed{ S \in NP } \\
}
$$
## 3
$$
\displaylines{
\text{Let } NT\text{-}PA \text{ be a set of polynomially bound search problems $R$} \\
\text{Such that there exists a polynomial algorithm } A \\
\text{and polynomial } p \in \Omega(n) \text{ such that for all } x: \\
A(x) = \begin{cases}
\perp & \not\exists y: (x, y) \in R & (1) \\
y & \abs{\Set{ y \mid (x, y) \in R }} \leq p(\abs{x}) \text{ and } (x, y) \in R & (2) \\
\text{anything} & \abs{\Set{ y \mid (x, y) \in R }} > p(\abs{x}) & (3) \\
\end{cases} \\
\\
\text{Determine relation between } PF \text{ and } NT\text{-}PA \quad (=, \subset, \supset, \neq) \\
\\
\text{Solution:} \\
\text{Let } R \in PF \\
\implies R \text{ is polynomially bound and } \exists A_{R} \text{ polynomial algorithm that solves } R \\
\implies A_{R}(x) = \begin{cases}
y & (x, y) \in R \\
\perp & \not\exists y: (x, y) \in R \\
\end{cases} \\
\\
\text{Let } \forall x: A(x) = A_{R}(x) \\
(1) \implies A_{R}(x) = \perp \implies A(x) = \perp \\
(2) \implies \exists y : (x, y) \in R \implies A_{R}(x) = y \in \Set{ y \mid (x, y) \in R } \implies A(x) = y \\
(3) \implies A(x) = \perp \text{ or } A(x) = y \\
\text{All three cases are covered} \implies R \in NT\text{-}PA \implies \boxed{ PF \subseteq NT\text{-}PA } \\
\\
}
$$
$$
\displaylines{
\text{Let us now prove that } NT\text{-}PA \not\subset PF \\
\text{Let } R_{HALT} \text{ be a search problem corresponding to } HALT \\
(\inp{M}{w}, 1) \in R_{HALT} \iff \inp{M}{w} \in HALT \\
(\inp{M}{w}, 0) \in R_{HALT} \iff \inp{M}{w} \in \overline{HALT} \\
R_{HALT} \in PF \implies HALT \in P - \text{Contradiction!} \\
\implies R_{HALT} \not\in PF \\
\text{Let } R' = \Set{ (x, y \circ z) \mid (x, y) \in R_{HALT} \text{ and } z \in \Set{ 0, 1 }^{\abs{x}} } \\
\text{Let us show that } R' \in NT\text{-}PA \\
\text{Let } \forall x: A(x) = \perp \\
\text{Let } p(\abs{x}) = \abs{x} \\
\text{Let } x \in \Set{ 0, 1 }^{*} \\
\abs{\Set{ y \mid (x, y) \in R' }} = 2^{\abs{x}} > \abs{x} = p(\abs{x}) \\
\implies \text{Cases } (1), (2) \text{ never occur and are vacuously true} \\
\text{And case (3) is true always, whatever the output} \\
\implies \boxed{ R' \in NT\text{-}PA } \\
\\
\text{Let by contradiction } R' \in PF \\
\implies \exists B \text{ polynomial algorithm that solves } R' \\
\implies \text{Running } B(\inp{M}{w}) \text{ and reading first bit solves HALT in polynomial time} \\
\text{Contradiction!} \implies R' \not\in PF \implies \boxed{ NT\text{-}PA \not\subset PF } \\
\\
\implies \boxed{ PF \subset NT\text{-}PA } \\
}
$$
## 4
$$
\displaylines{
\text{Let } R_{VC} = \Set{ ((G, k), S) | \begin{array}{}
G \text{ is an undirected graph} \\
k \in \mathbb{N} \\
S \subseteq V(G) \text{ is a vertex cover in } G \\
\end{array} } \\
\text{Show a Cook reduction from } R_{VC} \text{ to } VC \\
\text{Where } VC \text{ is a corresponding decision problem} \\
\\
\text{Solution:} \\
\text{Let } O_{VC} \text{ be an Oracle for } VC \\
\begin{align}
 & T(G, k): \\
1. & \quad \text{if not } O_{VC}(G, k): \\
2. & \qquad \text{return } \perp \\
3. & \quad S \leftarrow \emptyset \\
4. & \quad V' \leftarrow V(G) \\
5. & \quad \text{for } v \in V': \\
6. & \qquad \text{if } O_{VC}(G \setminus \Set{ v }, k-1): \\
7. & \qquad \quad S \leftarrow S \cup \Set{ v } \\
8. & \qquad \quad G \leftarrow G \setminus \Set{ v } \\
9. & \qquad \quad k \leftarrow k - 1 \\
10. & \qquad \text{if } k == 0: \\
11. & \qquad \quad \text{break} \\
12. & \quad \text{return } S \\
\end{align} \\
\text{There are at most } \abs{V(G)} \text{ iterations} \\
\text{Each iteration is at most } O(\abs{V(G)} + \abs{E(G)}) \text{ or } O(\abs{V(G)}^{2}) \\
\implies T \text{ runs in polynomial time} \\
T \text{ also clearly solves } R_{VC} \\
\implies \boxed{ R_{VC} \preccurlyeq^{P}_{T} VC } \\
}
$$
