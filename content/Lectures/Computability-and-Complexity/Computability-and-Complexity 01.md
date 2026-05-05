---
{"publish":true,"created":"19/03/26, 11:30","modified":"2026-03-26T11:19:08.101+02:00","tags":["Academia","Lecture","Computability-and-Complexity"],"cssclasses":""}
---

## Search problem #definition 
$$
\displaylines{
\text{Search problem is then defined as a relation } R \subseteq \Set{ 0, 1 }^{*} \times \Set{ 0, 1 }^{*} \text{ such that:} \\
(x, y) \in R \iff x \text{ is the input and } y \text{ is the desired output} \\
\\
\text{For example:} \\
R_{sort} = \Set{ (A, B) \mid A, B \text{ are arrays with the same elements and } B \text{ is sorted} } \\
}
$$
## Search problem solution algorithm #definition
$$
\displaylines{
\text{Search problem solution for input } x \in \Set{ 0, 1 }^{*} \text{ is } y \in R(x) \\
\text{If } R(x) = \emptyset \text{ then there is no solution} \\
\text{Algorithm } A \text{ is said to solve search problem } R \text{ if} \\
\forall x \in \Set{ 0, 1 }^{*}: A \text{ returns the solution for input } x \\
\text{In other words, } \forall x \in \Set{ 0, 1 }^{*}: A(x) = \begin{cases}
y \in R(x) & R(x) \neq \emptyset \\
\perp & R(x) = \emptyset \\
\end{cases} \\
}
$$
---
## Complexity
$$
\displaylines{
\text{Complexity of an algorithm is dependent on the computational model,} \\
\text{but not strongly dependant} \\
}
$$
### Church-Turing thesis
$$
\displaylines{
\text{Function computable with a TM with a single input line is} \\
\text{computable with any general and reasonable computational model} \\
\\
\text{Where reasonable means that each step is simple} \\
\text{and general means the memory is not somehow limited} \\
\\
\text{In other words, Tthere is no computational model stronger than TM} \\
}
$$
### Cobham-Edmonds thesis
$$
\displaylines{
\text{Computational problems are feasibly computable with some computational model} \\
\text{only if they can be computed in polynomial time, that is, in } O(\abs{x}^{c}) \\
}
$$
### Complexity of an algorithm
$$
\displaylines{
\text{Let } R \text{ be the search problem and } A_{R} \text{ be an algorithm that solves } R \\
\text{Let } M_{R} \text{ be a TM that runs algorithm } A_{R} \\
\text{Let } S_{M_{R}} \text{ be the number of steps } M_{R} \text{ performs} \\
\text{Let } T_{M_{R}}: \mathbb{N} \to \mathbb{N}, T_{M_{R}}(n) = \max_{\abs{x} = n}\lrc{S_{M_{R}}(x)} \\
\text{Algorithm $A_{R}$ is called polynomial if} \\
\exists p \in \mathbb{F}_{c}[x]: \forall n \in \mathbb{N}: T_{M_{R}}(n) \leq p(n) \\
}
$$
---
## Decision problem #definition 
$$
\displaylines{
\text{Set } S = \Set{ x \mid x \text{ fulfills a certain property to be decided} } \subseteq \Set{ 0, 1 }^{*} \\
\text{is called a decision problem} \\
\\
\text{An algorithm } A_{S} \text{ solves the decision problem if} \\
\forall x \in \Set{ 0, 1 }^{*}: A(x) = \begin{cases}
1 & x \in S \\
0 & x \not\in S \\
\end{cases} \\
}
$$
---
### Polynomial bounded #definition 
$$
\displaylines{
\text{Relation } R \text{ is called polynomially bounded if} \\
\exists p \in \mathbb{F}_{c}[x]: \forall (x, y) \in R: \abs{y} \leq p(\abs{x}) \\
}
$$
### Polynomial algorithm #definition 
$$
\displaylines{
\text{An algorithm } A \text{ is called polynomial if} \\
\exists p \in \mathbb{F}_{c}[x]: \forall x \in I: A \text{ performs at most } p(\abs{x}) \text{ steps when running } A(x) \\
}
$$
---
## Classification of problems
### Complexity class Polynomial find of search problems #definition 
$$
\displaylines{
\text{Set of all polynomial bounded relations that can be solved with polynomial algorithm} \\
\text{is called polynomial find, or } PF \\
PF = \Set{ R \mid R \text{ is polynomial bound and $\exists$ polynomial algorithm } A \text{ that solves } R } \\
}
$$
### Complexity class Polynomial check of search problems #definition 
$$
\displaylines{
\text{Set of all polynomial bounded relations that can be validated} \\
\text{with polynomial algorithm is called polynomial check, or } PC \\
PC = \Set{ R \mid R \text{ is polynomial bound and $\exists$ polynomial algorithm } A \text{ that validates } R } \\
\\
\text{Algorithm validates } R \text{ if} \\
\forall (x, y) \in \Set{ 0, 1 }^{*} \times \Set{ 0, 1 }^{*}: A(x, y) = 1 \iff (x, y) \in R \\
}
$$
#### Exercise
$$
\displaylines{
\text{Prove/Disprove: } PF \subseteq PC \\
\\
\text{Disproof:} \\
\text{Let } R = \Set{ (\inp{M}{x}, 0) \mid M \text{ is a TM and } x \in \Set{ 0, 1 }^{*} } \\
\cup \Set{ (\inp{M}{x}, 1) \mid M \text{ is a TM}, x \in \Set{ 0, 1 }^{*} \text{ and } M \text{ terminates on } x } \\
\\
\text{Second part of } R \text{ is essentially equivalent to } HALT \text{ which is not decidable} \\
\implies R \not\in PC \\
\text{First part of } R \text{ allows us to solve } R \text{ in } O(1) \text{ which is polynomial} \\
\forall \inp{M}{x}: A_{R}(\inp{M}{x}) = 0 \\
\implies R \in PF \\
\implies \boxed{ PF \not\subseteq PC } \\
}
$$
#### Exercise
$$
\displaylines{
\text{Question: } PC \subseteq PF? \\
\\
\text{Solution:} \\
\text{This is an open question! The widespread belief is that the answer is no} \\
\text{But there is no proof/disproof} \\
}
$$
### Complexity class P of decision problems #definition 
$$
\displaylines{
P = \Set{ S \mid \exists \text{ polynomial algorithm } A \text{ that solves } S } \\
\\
\text{In other words, a set of "easily solvable" decision problems}
}
$$
### Complexity class NP of decision problems #definition 
$$
\displaylines{
NP = \Set{ S \mid \exists V \text{ an } NP \text{ verifier of } S } \\
\text{Where a verifier } V \text{ is called an } NP \text{ verifier if} \\
V \text{ is a polynomial algorithm and} \\
\exists p \in \mathbb{F}_{n}[x]: \forall x \in \Set{ 0, 1 }^{*}: \begin{cases}
\exists y \in \Set{ 0, 1 }^{*}, \abs{y} \leq p(\abs{x}): V(x, y) = 1 & x \in S \\
\forall y \in \Set{ 0, 1 }^{*}: V(x, y) = 0 & x \not\in S \\
\end{cases} \\
\\
\text{In other words, a set of "easily verifiable" decision problems} \\
\\
\text{Note that verification of a decision problem is different from} \\
\text{verification of a search problem} \\
}
$$
#### Exercise
$$
\displaylines{
\text{Prove: } P \subseteq NP \\
\\
\text{Proof:} \\
\text{Let } S \in P \\
\text{Let } A_{S} \text{ be a polynomial algorithm that solves } S \\
\text{Let } V: \Set{ 0, 1 }^{*} \times \Set{ 0, 1 }^{*} \to \Set{ 0, 1 }, V(x, y) = A_{S}(x) \\
\forall x, y \in \Set{ 0, 1 }^{*}: V(x, y) = 1 \iff A_{S}(x) = 1 \iff x \in S \\
\forall x, y \in \Set{ 0, 1 }^{*}: V(x, y) = 0 \iff A_{S}(x) = 0 \iff x \not\in S \\
\implies S \in NP \implies \boxed{ P \subseteq NP } \\
}
$$
#### Exercise
$$
\displaylines{
\text{Question: } NP \subseteq P? \\
\\
\text{Solution:} \\
\text{This is an open question! The widespread belief is that the answer is no} \\
\text{But there is no proof/disproof} \\
}
$$
