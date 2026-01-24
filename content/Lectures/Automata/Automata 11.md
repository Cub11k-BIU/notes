---
{"publish":true,"created":"24/01/26, 14:09","modified":"2026-01-24T16:26:35.642+02:00","tags":["Academia","Lecture","Automata"],"cssclasses":""}
---

# Non-decidability
- Are there non-decidable languages?
- Are there non-acceptable languages?
## Software verification
Let there be a decision problem, does a program $P$ fulfill specification (requirements) $S$?
$$
\displaylines{
\text{This problem can be described as following:} \\
\text{Let } PS = \Set{ (P, S) \mid \text{program } P \text{ fulfills specification } S } \\
\text{Let us try to build a program that checks whether } (P, S) \in PS \\
\text{Let's call it } D-PS(P, S) \\
\text{Input is the pair } (P, S) \\
\text{Is } PS \text{ decidable? Is } PS \text{ acceptable?} \\
\\
\text{Let us solve a simpler problem, that is only check the return value} \\
\text{Let } ATM = \Set{ (P, w) \mid P(w) = 1 } \\
ATM \text{ is the set of pairs such that program } P \text{ terminates and returns } 1 \\
\text{But is } ATM \text{ decidable or acceptable?} \\
}
$$
### ATM is acceptable #lemma 
$$
\displaylines{
\text{Let us build a program that accepts (but not decides) ATM} \\
\\
\begin{align}
 & U(P, w): \\
1. & \quad \text{return } P(w) == 1 \\
\end{align} \\
\\
(P, w) \in L(U) \iff P(w) = 1 \iff (P, w) \in ATM \\
\\
U \text{ is also called a Universal program/Turing machine} \\
}
$$
### ATM is not decidable #theorem 
$$
\displaylines{
\text{Let by contradiction } ATM \text{ be decidable} \\
\text{Let } D\text{-}ATM(P, w) \text{ be a program that decides } ATM \\
\\
\text{Let there be the following program:} \\
\begin{align}
 & \text{stupid}(z): \\
1. & \quad a = D\text{-}ATM(z, z) \\
2. & \quad \text{return } !a
\end{align} \\
\\
\text{What is the result of stupid(stupid)?} \\
D\text{-}ATM \text{ decides ATM, so it always terminates} \\
\text{That is, stupid always terminates!} \\
\text{Let stupid(stupid) = 1} \\
\implies (\text{stupid, stupid}) \in ATM \\
\implies D\text{-}ATM(\text{stupid, stupid}) = 1 \implies \text{stupid(stupid)} = 0 \\
\text{Contradiction!} \\
\text{Let stupid(stupid) = 0} \\
\implies (\text{stupid, stupid}) \not\in ATM \\
\implies D\text{-}ATM(\text{stupid, stupid}) = 0 \implies \text{stupid(stupid)} = 1 \\
\text{Contradiction!} \\
\\
\implies \not\exists D\text{-}ATM \implies \boxed{ ATM \text{ is not decidable!} } \\
}
$$
This means that there is no general solution for the software verification problem!
But there are many methods that do solve the software verification problem under extra assumptions.
### Complement of ATM is non-acceptable #lemma 
$$
\displaylines{
\text{Let } \overline{ATM} \text{ be acceptable} \\
\text{Then both } ATM \text{ and } \overline{ATM} \text{ are acceptable} \\
\text{And } ATM \text{ us then decidable} - \text{Contradiction!} \\
\implies \overline{ATM} \text{ is not acceptable} \\
}
$$
---
## Termination problem #theorem 
$$
\displaylines{
\text{Let } HALT = \Set{ (P, w) \mid P(w) \downarrow } \\
\text{Then } HALT \text{ is not decidable} \\
\\
\text{Proof:} \\
\text{Let by contradiction } D\text{-}HALT \text{ be a program that decides } HALT \\
\text{Let us build } D\text{-}ATM \text{ via } D\text{-}HALT \\
\begin{align}
 & D\text{-}ATM(P, w): \\
1. & \quad \text{if } D\text{-}HALT(P, w) == 0: \\
2. & \qquad \text{return } 0 \\
3. & \quad \text{return } U(P, w) \\
\end{align} \\
\text{Clearly, if } D-\text{-}HALT \text{ decides } HALT \text{ then } D\text{-}ATM \text{ decides } ATM \\
\text{Contradiction!} \\
\implies \not\exists D\text{-}HALT \implies \boxed{ HALT \text{ is not decidable} } \\
}
$$
Similarly to $ATM$, $HALT$ is acceptable but not decidable
$$
\displaylines{
\begin{align}
 & A\text{-}HALT(P, w): \\
1. & \quad U(P, w) \\
2. & \quad \text{return } 1
\end{align} \\
\text{From this follows that } \overline{HALT} \text{ is not acceptable} \\
\\
\begin{array}{|c|c|}
\text{Acceptable} & \text{Decidable} \\
\text{Yes} & \text{No} & ATM \\
\text{No} & \text{No} & \overline{ATM} \\
\text{Yes} & \text{No} & HALT \\
\text{No} & \text{No} & \overline{HALT} \\
\end{array} \\
}
$$
---
$$
\displaylines{
\text{Let } E = \Set{ P \mid L(P) = \emptyset } \\
\\
E \text{ is not decidable} \\
\text{Let by contradiction } D\text{-}E \text{ decides } E \\
\begin{align}
 & D\text{-}\overline{ATM}(P, w): \\
1. & \quad Q = \text{"Q(x): return U(P, w)"} \\
2. & \quad a = D\text{-}E(Q) \\
3. & \quad \text{return } a \\
\end{align} \\
\\
L(Q) = \begin{cases}
\Sigma^{*} & P(w) == 1 \\
\emptyset & P(w) \neq 1 \\
\end{cases} \\
(P, w) \in \overline{ATM} \iff Q \in E - \text{Contradiction!} \\
\not\exists D\text{-}E \implies \boxed{ E \text{ is not decidable} } \\
}
$$
The structure of each of the proofs above is very similar - building an impossible program based on a given black-box that we assume to exist. This technique is called **Reduction**

---
$$
\displaylines{
E \text{ is also not acceptable} \\
\text{We will prove this by proving that } \overline{E} \text{ is acceptable} \\
\begin{align}
 & A\text{-}\overline{E}(Q): \\
1. & \quad \text{if } Q \text{ is not a program:} \\
2. & \qquad \text{return } 1 \\
3. & \quad \text{Let } w \in \Sigma^{*} \\
4. & \quad \text{return } U(Q, w) \\
\end{align} \\
\\
\overline{E} \text{ is acceptable} \implies \boxed{ E \text{ is not acceptable} } \\
\\
\begin{array}{|c|c|}
\text{Acceptable} & \text{Decidable} \\
\text{Yes} & \text{No} & ATM \\
\text{No} & \text{No} & \overline{ATM} \\
\text{Yes} & \text{No} & HALT \\
\text{No} & \text{No} & \overline{HALT} \\
\text{No} & \text{No} & E \\
\text{Yes} & \text{No} & \overline{E} \\
\end{array} \\
}
$$
---
$$
\displaylines{
\text{Let } EQ = \Set{ (Q_{1}, Q_{2}) \mid L(Q_{1}) = L(Q_{2}) } \\
\text{Then } EQ \text{ is not acceptable} \\
\\
\text{Proof:} \\
\text{Let by contradiction } A\text{-}EQ \text{ accepts } EQ \\
\begin{align}
 & A\text{-}E(Q): \\
1. & \quad Q_{1} = Q \\
2. & \quad Q_{2} = \text{"Q(x): return 0"} \\
3. & \quad \text{return } A\text{-}EQ(Q_{1}, Q_{2}) \\
\end{align} \\
Q \in E \iff L(Q) = \emptyset \iff L(Q_{1}) = L(Q_{2}) \iff (Q_{1}, Q_{2}) \in EQ \\
\iff A\text{-}E(Q) = 1 \iff E \text{ is acceptable} - \text{Contradiction!} \\
}
$$
---
$$
\displaylines{
\text{What about } \overline{EQ}? \\
\text{We will prove that } \overline{EQ} \text{ is not acceptable} \\
\\
\text{Solution:} \\
\text{Let by contradiction } A\text{-}\overline{EQ} \text{ accepts } \overline{EQ} \\
\begin{align}
 & A\text{-}\overline{ATM}(P, w): \\
1. & \quad Q_{1} = \text{"Q(x): return U(P, w)"} \\
2. & \quad Q_{2} = \text{"Q(x): return 1"} \\
3. & \quad \text{return } A\text{-}\overline{EQ}(Q_{1}, Q_{2}) \\
\end{align} \\
L(Q_{1}) = \begin{cases}
\Sigma^{*} & P(w) = 1 \\
\emptyset & P(w) \neq 1 \\
\end{cases} \\
A\text{-}\overline{ATM}(P, w) = 1 \iff L(Q_{1}) \neq L(Q_{2}) \iff L(Q_{1}) = \emptyset \iff P(w) \neq 1 \\
 \iff (P, w) \in \overline{ATM} \iff \overline{ATM} \text{ is acceptable} - \text{Contradiction!} \\
\\
\begin{array}{|c|c|}
\text{Acceptable} & \text{Decidable} \\
\text{Yes} & \text{No} & ATM \\
\text{No} & \text{No} & \overline{ATM} \\
\text{Yes} & \text{No} & HALT \\
\text{No} & \text{No} & \overline{HALT} \\
\text{No} & \text{No} & E \\
\text{Yes} & \text{No} & \overline{E} \\
\text{No} & \text{No} & EQ \\
\text{No} & \text{No} & \overline{EQ} \\
\end{array} \\
}
$$
---
## Reduction #definition 
$$
\displaylines{
\text{Let } \Omega_{1}, \Omega_{2} \\
\text{Let } L_{1} \subseteq Q_{1}, L_{2} \subseteq Q_{2} \\
\text{A many-one reduction is then a function } R: \Omega_{1} \to \Omega_{2} \\
\text{Such that } \forall x \in Q_{1}: x \in L_{1} \iff R(x) \in L_{2} \\
\\
\text{Reduction is commonly used as follows:} \\
\text{Let } L_{2} \text{ be known and } L_{1} \text{ be unknown} \\
\text{Then we can determine } L_{1} \text{ by applying reduction to all elements of } \Omega_{1} \\
\\
\text{Let } L_{1}, L_{2} \text{ be languages} \\
\text{Let } L_{2} \text{ be decidable} \\
\text{Let } \exists R \text{ a computable reduction from } L_{1} \text{ to } L_{2} \\
\text{Then } L_{1} \text{ is decidable} \\
\\
\text{Proof:} \\
\text{Let } D\text{-}L_{2} \text{ decide } L_{2} \\
\begin{align}
 & D\text{-}L_{1}(x): \\
1. & \quad y = R(x) \\
2. & \quad \text{return } D\text{-}L_{2}(y) \\
\end{align} \\
\\
\text{To denote the existence of such } R \text{ we will use } L_{1} \preccurlyeq_{m} L_{2} \\
}
$$
---
$$
\displaylines{
\text{The following statements are true} \\
\begin{align}
 & \begin{eqsys}
L_{2} \text{ is decidable} \\
L_{1} \preccurlyeq_{m} L_{2} \\
\end{eqsys} \implies L_{1} \text{ is decidable} \\
 & \begin{eqsys}
L_{1} \text{ is not decidable} \\
L_{1} \preccurlyeq_{m} L_{2} \\
\end{eqsys} \implies L_{1} \text{ is not decidable} \\
 & \begin{eqsys}
L_{2} \text{ is acceptable} \\
L_{1} \preccurlyeq_{m} L_{2} \\
\end{eqsys} \implies L_{1} \text{ is acceptable} \\
 & \begin{eqsys}
L_{1} \text{ is not acceptable} \\
L_{1} \preccurlyeq_{m} L_{2} \\
\end{eqsys} \implies L_{1} \text{ is not acceptable} \\
\end{align} \\
}
$$
---
$$
\displaylines{
\text{Let } A \text{ be decidable} \\
\text{Then } A \preccurlyeq_{m} ATM \\
\\
\text{Proof:} \\
\begin{align}
 & R(w): \\
1. & \quad \text{if } D\text{-}A(w) == 1: \\
2. & \qquad \text{return ("Q(x): return 1", "a")} \\
3. & \quad \text{else}: \\
4. & \qquad \text{return ("Q(x): return 0", "a")} \\
\end{align} \\
\text{Similarly, it is possible to show the following:} \\
\\
L_{1} \text{ is decidable}, L_{2} \text{ is not decidable} \implies L_{1} \preccurlyeq_{m} L_{2} \\
L_{1} \text{ is decidable}, L_{2} \text{ is not acceptable} \implies L_{1} \preccurlyeq_{m} L_{2} \\
\\
\text{From this we might conclude that there exists a computable reduction} \\
\text{from decidabl language to any language, but that's not true} \\
A \not\preccurlyeq_{m} \emptyset, A \not\preccurlyeq_{m} \Sigma^{*} \\
}
$$
---
$$
\displaylines{
\text{Let } NOT\text{-}REG = \Set{ Q \mid L(Q) \text{ is not regular} } \\
\text{Then } NOT\text{-}REG \text{ is not decidable} \\
\\
\text{Proof:} \\
\text{We will show } HALT \preccurlyeq_{m} NOT\text{-}REG \\
\begin{align}
R(P, w) = \ & Q(x): \\
1. & \quad U(P, w) \\
2. & \quad \text{return } Pal(x) \\ 
\end{align} \\
L(Q) = \begin{cases}
\emptyset & P(w) \uparrow \\
L(Pal) & P(w) \downarrow \\
\end{cases} \\
Q \in NOT\text{-}REG \iff P(w) \downarrow \iff (P, w) \in HALT \iff HALT \text{ is decidable} \\
\text{Contradiction!} \\
}
$$
---
$$
\displaylines{
\text{NOT}\text{-}\text{REG} \text{ is also not acceptable} \\
\\
\text{Proof:} \\
\text{We will show } \overline{ATM} \preccurlyeq_{m} NOT\text{-}REG \\
\begin{align}
R(P, w) = \ & Q(x): \\
1. & \quad \text{if } Pal(x) == 1: \\
2. & \qquad \text{return } 1 \\
3. & \quad \text{return } U(P, w) \\
\end{align} \\
L(Q) = \begin{cases}
\Sigma^{*} & P(w) = 1 \\
L(Pal) & P(w) \neq 1 \\
\end{cases} \\
Q \in NOT\text{-}REG \iff P(w) \neq 1 \iff (P, w) \in \overline{ATM} \iff \overline{ATM} \text{ is acceptable} \\
\text{Contradiction!} \\
\\
\begin{array}{|c|c|}
\text{Acceptable} & \text{Decidable} \\
\text{Yes} & \text{No} & ATM \\
\text{No} & \text{No} & \overline{ATM} \\
\text{Yes} & \text{No} & HALT \\
\text{No} & \text{No} & \overline{HALT} \\
\text{No} & \text{No} & E \\
\text{Yes} & \text{No} & \overline{E} \\
\text{No} & \text{No} & EQ \\
\text{No} & \text{No} & \overline{EQ} \\
\text{No} & \text{No} & NOT\text{-}REG \\
? & \text{No} & REG \\
\end{array} \\
}
$$
---
