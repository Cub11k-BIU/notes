---
{"publish":true,"created":"17/03/26, 15:09","modified":"2026-03-26T11:19:13.023+02:00","tags":["Academia","#Practice","Computability-and-Complexity"],"cssclasses":""}
---

## Search problem #definition 
$$
\displaylines{
\text{Let } I \text{ be the set of inputs and } O \text{ be the set of outputs} \\
\text{Search problem is then defined as a relation } R \subseteq I \times O \text{ such that:} \\
(x, y) \in R \iff x \text{ is the input and } y \text{ is the desired output} \\
\\
\text{Note that } I, O \text{ can be defined as } \Set{ 0, 1 }^{*} \\
\\
\text{For example:} \\
R_{sort} = \Set{ (A, B) \mid A, B \text{ are arrays with the same elements and } B \text{ is sorted} } \\
}
$$
## Search problem solution algorithm #definition
$$
\displaylines{
\text{Search problem solution for input } x \in I \text{ is } y \in R(x) \\
\text{If } R(x) = \emptyset \text{ then there is no solution} \\
\text{Algorithm } A \text{ is said to solve search problem } R \text{ if } \forall x \in I: A \text{ returns the solution for } x \\
\text{In other words, } \forall x \in I: A(x) = \begin{cases}
y \in R(x) & R(x) \neq \emptyset \\
\perp & R(x) = \emptyset \\
\end{cases} \\
}
$$
### Polynomial bounded #definition 
$$
\displaylines{
\text{Relation } R \text{ is called polynomially bounded if} \\
\exists p \in \mathbb{F}_{n}[x]: \forall (x, y) \in R: \abs{y} \leq p(\abs{x}) \\
}
$$
### Polynomial algorithm #definition 
$$
\displaylines{
\text{An algorithm } A \text{ is called polynomial if} \\
\exists p \in \mathbb{F}_{n}[x]: \forall x \in I: A \text{ performs at most } p(\abs{x}) \text{ steps when running } A(x) \\
}
$$
---
## Classification of search problems
### Polynomial find #definition 
$$
\displaylines{
\text{Set of all polynomial bounded relations that can be solved with polynomial algorithm} \\
\text{is called polynomial find, or } PF \\
PF = \Set{ R \mid R \text{ is polynomial bound and $\exists$ polynomial algorithm } A \text{ that solves } R } \\
}
$$
### Polynomial check #definition 
$$
\displaylines{
\text{Set of all polynomial bounded relations that can be validated} \\
\text{with polynomial algorithm is called polynomial check, or } PC \\
PC = \Set{ R \mid R \text{ is polynomial bound and $\exists$ polynomial algorithm } A \text{ that validates } R } \\
\text{Algorithm validates } R \text{ if} \\
\forall (x, y) \in I \times O: A(x, y) = 1 \iff (x, y) \in R \\
}
$$
---
$$
\displaylines{
\text{Let } R_{4-clique} = \Set{ (G, S) \mid G \text{ is an undirected graph and } G[S] = K_{4} } \\
\text{Show that } R_{4-clique} \in PF \\
\\
\text{Solution:} \\
\text{First, } \forall S \subseteq V(G): \abs{S} < \abs{G} \implies R_{4-clique} \text{ is polynomial bound} \\
\text{Let us now define a polynomial algorithm $A$ that solves } R_{4-clique}: \\
\begin{align}
 & A(G): \\
1. & \quad \forall S \subseteq V(G), \abs{S} = 4: \\
2. & \qquad \text{if } \forall u \neq v \in S: \Set{ u, v } \in E(G): \\
3. & \qquad \quad \text{return } S \\
4. & \quad \text{return } \perp \\
\end{align} \\
\text{Clearly, } A \text{ solves } R_{4-clique} \\
\text{In the worst case scenario, which is when the solution for } G \text{ is} \perp, \\
\text{algorithm will iterate over } \binom{\abs{V}}{4} \text{ subsets of } V \text{ and do } \binom{4}{2} \text{ comparisons for each} \\
\binom{\abs{V}}{4} = \frac{\abs{V}!}{(\abs{V}-4)!4!} \leq \abs{V}^{4} \\
\abs{V} \leq \abs{G} \implies A \text{ will perform at most } 6 \cdot \abs{G}^{4} \text{ steps} \\
\implies A \text{ is polynomial} \\
\implies \boxed{ R_{4-clique} \in PF } \\
}
$$
---
$$
\displaylines{
\text{Let } R_{clique} = \Set{ ((G, k), S) \mid G \text{ is an undirected graph, } k \in \mathbb{N} \text{ and } G[S] = K_{k} } \\
\text{Show that } R_{clique} \in PC \\
\\
\text{Solution:} \\
\text{As in the previous exercise, } \abs{S} \leq \abs{G} \leq \abs{(G, k)} \implies R_{\text{clique}} \text{ is polynomial bounded} \\
\text{Let us define a polynomial algorithm $A$ that validates } R_{clique}: \\
\begin{align}
 & A((G, k), S): \\
1. & \quad \text{if } \abs{S} \neq k: \\
2. & \qquad \text{return } 0 \\
3. & \quad \text{if } \forall u \neq v \in S: \Set{ u, v } \in E(G): \\
4. & \qquad \text{return } 1 \\
5. & \quad \text{return } 0 \\
\end{align} \\
\text{Clearly, } A \text{ validates } R_{clique} \\
\text{Moreover, } A \text{ performs } \binom{\abs{S}}{2} \leq \abs{S}^{2} \text{ comparisons} \\
\implies A \text{ is polynomial} \\
\implies \boxed{ R_{clique} \in PC } \\
}
$$
---
## P and NP
### Decision problem #definition 
$$
\displaylines{
\text{Set } S = \Set{ x \mid x \text{ fulfills a certain property to be decided} } \subseteq I \\
\text{is called a decision problem} \\
\\
\text{An algorithm } A \text{ solves the decision problem if} \\
\forall x \in I: A(x) = \begin{cases}
1 & x \in S \\
0 & x \not\in S \\
\end{cases} \\
}
$$
### Complexity class P of decision problems #definition 
$$
\displaylines{
P = \Set{ S \mid \exists \text{ polynomial algorithm } A \text{ that solves } S } \\
}
$$
### Complexity class NP of decision problems #definition 
$$
\displaylines{
NP = \Set{ S \mid \exists V \text{ an } NP \text{ verifier of } S } \\
\text{Where a verifier } V \text{ is called an } NP \text{ verifier if} \\
V \text{ is polynomial and} \\
\exists p \in \mathbb{F}_{n}[x]: \forall x \in I: \begin{cases}
\exists y \in O, \abs{y} \leq p(\abs{x}): V(x, y) = 1 & x \in S \\
\forall y \in O: V(x, y) = 0 & x \not\in S \\
\end{cases} \\
\\
\text{In other words, all decision problems that can be verified in polynomial time} \\
}
$$
---
