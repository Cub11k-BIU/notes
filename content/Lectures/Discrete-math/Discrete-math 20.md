---
{"publish":true,"created":"13/01/25, 14:01","modified":"2025-11-21T21:10:14.055+02:00","tags":["Academia","Lecture","Discrete-math"],"cssclasses":""}
---

# Discrete-math 20
## Pigeonhole principle variations #theorem 
$$
\displaylines{
\text{There is } m \text{ pigeons and } k \text{ pigeonholes} \\
\text{Then there is a pigeonhole with at least } \left\lceil  \frac{m}{k}  \right\rceil \text{ pigeons} \\
\\
\text{Proof:} \\
\text{Let } c_{i} \text{ be the number of pigeons in each pigeonhole} \\
\text{Let } \forall i \in [1, n]: c_{i} < \left\lceil  \frac{m}{k}  \right\rceil \implies c_{i} \leq \left\lceil  \frac{m}{k}  \right\rceil - 1 \\
\text{Then } m = \sum_{i=1}^{k} c_{i} \leq \sum_{i=1}^{k} \left\lceil  \frac{m}{k}  \right\rceil - 1 < \sum_{i=1}^{k} \left( \frac{m}{k}+1-1 \right) = m - \text{ Contradiction!} \\
}
$$
---
$$
\displaylines{
\text{In any group of 6 people} \\
\text{there is a group of 3 people who are all friends of each other} \\
\text{or there is a group of 3 people who are all not friends of each other} \\
\\
\text{Proof:} \\
\text{Let } A \text{ be one of the 6 people} \\
\text{Let's consider two groups:} \\
1. \quad \text{ Friends of } A \\
2. \quad \text{ Not friend of } A \\
\text{By the pigeonhole principle, at least one of the groups has } \left\lceil  \frac{5}{2}  \right\rceil = 3 \text{ people} \\
\text{Case 1. There are at least 3 friends of } A \\
\text{Case 1.1 There are two people in this group that are friends} \\
\text{Then } A \text{ and these 2 people make a group of 3 people who are all friends of each other} \\
\text{Case 1.2 There are no two people in this group that are friends} \\
\text{Then this group is a group of at least 3 people that are all not friends of each other} \\
\text{Case 2. There are at least 3 people who are not friends of A} \\
\text{Case 2.1 There are two people who are not friends in this group} \\
\text{Then } A \text{ and these two people make a group where all are not friends of each other} \\
\text{Case 2.2 There are no such pair} \\
\text{Then this group is at least 3 people who are all friends of each other} \\
}
$$
---
## Normal forms of propositions #definition 
### DNF and CNF
$$
\displaylines{
\text{Literal: logical variable or it's negation} \\
\land \text{(AND) clause/term: } \land \text{ of literals} \\
\lor \text{(OR) clause/term: } \lor \text{ of literals} \\
\\
\text{Proposition } P \text{ is a disjuncitve normal form (DNF)} \\
\text{if it is } \lor \text{ of AND clauses} \\
\text{DNF is complete if in any AND clause, any variable appears exactly once} \\
\text{For example: } x_{1}, x_{2}, x_{3}: (x_{1} \land x_{2} \land x_{3}) \lor (\lnot x_{1} \land \lnot x_{2} \land \lnot x_{3}) \\
\\
\text{Proposition } P \text{ is a conjunctive normal form (CNF)} \\
\text{if it is } \land \text{ of OR clauses} \\
\text{CNF is complete if in any OR clause, any variable appears exactly once} \\
\text{For example: } x_{1}, x_{2}, x_{3}: (x_{1} \lor x_{2} \lor x_{3}) \land (\lnot x_{1} \lor \lnot x_{2} \lor \lnot x_{3}) \\
}
$$
---
## DNF existence #theorem 
$$
\displaylines{
\text{For any proposition } P \text{ which is not a contradiction} \\
\text{There is an equivalent proposition in complete DNF} \\
\\
\text{Proof:} \\
\text{Process of building the DNF:} \\
1. \quad \text{Compute the truth table} \\
2. \quad \text{Choose all substitutions that yield True. Each substitution will be an AND clause} \\
3. \quad \text{Each variable will appear in the clause as is if it's value is True} \\
4. \quad \text{Each variable will appear in the clause as a negation if it's value is False} \\
5. \text{Connect all chosen clauses with } \lor \\
\text{For example:} \\
\begin{pmatrix}
p & q & p \oplus q \\
0 & 0 & 0 \\
0 & 1 & 1 \\
1 & 0 & 1 \\
1 & 1 & 0 \\
\end{pmatrix} \to \left\{\begin{array}{}
\lnot p \land q \\
p \land \lnot q \\
\end{array}\right. \to \boxed{(\lnot p \land q) \lor (p \land \lnot q)} \\
}
$$
---
## CNF existence #theorem 
$$
\displaylines{
\text{For any proposition } P \text{ which is not a tautology} \\
\text{There is an equivalent proposition in complete } CNF \\
\\
\text{Proof:} \\
P \text{ is not a tautology} \implies \lnot P \text{ is not a contradiction} \\
\implies \exists \text{ a complete } DNF \text{ of } \lnot P \\
\lnot (\text{complete } DNF \text{ of } \lnot P) \text{ is a complete } CNF \text{ of } P \\
\implies \exists \text{ a complete } CNF \text{ of } P \\
}
$$
---
## Complete set of logical connectives #definition 
$$
\displaylines{
\text{Set of logical connectives is complete if we can express any proposition} \\
\text{using only this set} \\
}
$$
---
$$
\displaylines{
\text{Connective } NAND (\uparrow) \\
p \uparrow q = \lnot (p \land q) \\
\text{Connective } NOR (\downarrow) \\
p \downarrow q = \lnot (p \lor q) \\
}
$$
---
## Completeness #theorem 
$$
\displaylines{
\text{The following sets are complete:} \\
1. \quad \Set{ \lor, \land, \lnot } \\
2. \quad \Set{ \lor, \lnot } \\
3. \quad \Set{ \land, \lnot } \\
4. \quad \Set{ \to, \lnot } \\
5. \quad \Set{ \uparrow } \\
6. \quad \Set{ \downarrow } \\
\\
\text{Proof for 1} \\
\Set{ \lor, \land, \lnot } \text{ is complete because any proposition has an equivalent in } DNF \\
\text{Proof for 2} \\
p \land q = \lnot(\lnot p \lor \lnot q) \\
\implies \text{ By 1: } \Set{ \lor, \lnot } \text{ is complete} \\
\text{Proof for 3} \\
p \lor q = \lnot(\lnot p \land \lnot q) \\
\implies \text{ By 2: } \Set{ \land, \lnot } \text{ is complete} \\
\text{Proof for 4} \\
p \lor q = \lnot p \to q \\
\implies \text{ By 2: } \Set{ \to, \lnot } \text{ is complete} \\
\text{Proof for } 5 \\
\lnot p = p \uparrow p \\
p \land q = \lnot (p \uparrow q) = (p \uparrow q) \uparrow (p \uparrow q) \\
\implies \text{ By 3: } \Set{ \uparrow } \text{ is complete} \\
\text{Proof for 6} \\
\lnot p = p \downarrow p \\
p \lor q = \lnot(p \downarrow q) = (p \downarrow q) \downarrow (p \downarrow q) \\
\implies \text{ By 2: } \Set{ \downarrow } \text{ is complete} \\
}
$$
---
