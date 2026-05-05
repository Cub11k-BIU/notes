---
{"publish":true,"created":"26/03/26, 11:18","modified":"2026-05-05T13:21:43.630+03:00","tags":["Academia","Lecture","Computability-and-Complexity"],"cssclasses":""}
---

## Equivalence of central open questions of search/decision problems #theorem 
$$
\displaylines{
PC \subseteq PF \iff NP \subseteq P \\
\\
\text{Proof:} \\
\boxed{ \impliedby } \text{ Let } NP \subseteq P \\
\text{Let } R \in PC \\
\implies \exists  \text{ polynomial } V_{R} \\
\text{Let } S_{R} = \Set{ x \mid \exists y \in \Set{ 0, 1 }^{*}: (x, y) \in R } \\
\text{Let } V_{S_{R}} = V_{R} \\
V_{S_{R}}(x, y) = 1 \iff V_{R}(x, y) = 1 \iff (x, y) \in R \iff x \in S_{R} \\
V_{S_{R}} = V_{R} \implies \text{It is clearly polynomial} \implies S_{R} \in NP \\
NP \subseteq P \implies S_{R} \in P \\
\text{Let } S_{R}' = \Set{ (x, y') \mid \exists y'' \in \Set{ 0, 1 }^{*}: (x, y' \circ y'') \in R } \\
\text{That is, all prefixes of all solutions of } x \\
\text{Proof that } S_{R}' \in NP \text{ is similar to the proof that } S_{R} \in NP \\
S_{R}' \in NP \implies S_{R}' \in P \\
\implies \exists \text{ polynomial } D_{S_{R}'} \\
\begin{align}
 & A_{R}(x): \\
1. & \quad \text{if } D_{S_{R}'}(x, \emptyset) == 0: \\
2. & \qquad \text{return } \perp \\
3. & \quad y' \leftarrow \emptyset \\
4. & \quad \text{while } V_{R}(x, y') == 0: \\
5. & \qquad \text{if } D_{S_{R}'}(x, y' \circ 0) == 0: \\
6. & \qquad \quad y' \leftarrow y' \circ 1 \\
7. & \qquad \text{else:} \\
8. & \qquad \quad y' \leftarrow y' \circ 0 \\
9. & \quad \text{return } y' \\
\end{align} \\
R \in PC \implies R \text{ is polynomial bound} \implies \abs{y} \leq p_{R}(\abs{x}) \\
D_{S_{R}'} \text{ is polynomial} \implies \text{Line 1 is polynomial} \\
\text{While loop will have at most } \abs{y} \leq p(\abs{x}) \text{ iterations} \\
\text{Each iteration of the loop is polynomial} \\
\implies \text{The whole loop is polynomial} \\
\implies A_{R}(x) \text{ is polynomial and solves } R \implies R \in PF \\
\implies \boxed{ PC \subseteq PF } \\
\\
\boxed{ \implies } \text{ Let } PC \subseteq PF \\
\text{Let } S \in NP \\
\implies \exists \text{ polynomial } V_{S} \\
\text{Let } R_{S} = \Set{ (x, y) \mid V_{S}(x, y) = 1 } \\
S \in NP \implies \abs{y} \leq p(\abs{x}) \implies R_{S} \text{ is polynomially bound} \\
V_{R_{S}} = V_{S} \text{ gives us } R_{S} \in PC \\
\implies R_{S} \in PF \implies \exists \text{ polynomial } A_{R_{S}} \\
\text{Let } A_{S}(x) = \begin{cases}
0 & A_{R_{S}}(x) = \perp \\
1 & \text{otherwise} \\
\end{cases} \\
A_{S} \text{ is polynomial and solves } S \implies S \in P \\
\implies \boxed{ NP \subseteq P } \\
}
$$
## Reductions
Reduction is a solution to the problem that uses a solution to some other problem.
Proof of the equivalence of central open questions is built on reduction(s)
### Karp reduction #definition 
$$
\displaylines{
\text{Let } S_{1}, S_{2} \text{ be decision problems} \\
\text{Let } f: \Set{ 0, 1 }^{*} \to \Set{ 0, 1 }^{*} \text{ be a computable function} \\
f \text{ is then called a Karp reduction from $S_{1}$ to $S_{2}$ if:} \\
\forall x \in \Set{ 0, 1 }^{*}: x \in S_{1} \iff f(x) \in S_{2} \\
\text{Such reduction is denoted } S_{1} \preccurlyeq^{P}_{m} S_{2} \\
\\
\text{Karp reduction allows us to decide } S_{1} \text{ by transforming the input and deciding } S_{2} \\
\text{But not otherwise!} \\
}
$$
#### Closure of Karp reduction under P #lemma 
$$
\displaylines{
S_{1} \preccurlyeq^{P}_{m} S_{2} \text{ and } S_{2} \in P \implies S_{1} \in P \\
\\
\text{Proof:} \\
\text{Let } f \text{ be a Karp reduction from } S_{1} \text{ to } S_{2} \\
\text{Let } D_{S_{2}} \text{ be a polynomial decider for } S_{2} \\
\forall x \in \Set{ 0, 1 }^{*}: x \in S_{1} \iff f(x) \in S_{2} \iff D_{S_{2}}(f(x)) = 1 \\
\implies (D_{S_{2}} \circ f) \text{ is a polynomial decider for } S_{1} \\
}
$$
#### Transitivity of Karp reduction #lemma 
$$
\displaylines{
S_{1} \preccurlyeq^{P}_{m} S_{2} \text{ and } S_{2} \preccurlyeq^{P}_{m} S_{3} \implies S_{1} \preccurlyeq^{P}_{m} S_{3} \\
\\
\text{Proof:} \\
\text{Let } f_{1} \text{ be a Karp reduction from } S_{1} \text{ to } S_{2} \\
\text{Let } f_{2} \text{ be a Karp reduction from } S_{2} \text{ to } S_{3} \\
\text{Then } (f_{2} \circ f_{1}) \text{ is a Karp reduction from } S_{1} \text{ to } S_{3}: \\
x \in S_{1} \iff f_{1}(x) \in S_{2} \iff f_{2}(f_{1}(x)) \in S_{3} \iff (f_{2} \circ f_{1})(x) \in S_{3} \\
}
$$
