---
{"publish":true,"created":"12/11/24, 16:11","modified":"2026-03-24T14:58:58.012+02:00","tags":["Academia","Practice","Discrete-math"],"cssclasses":""}
---

# Discrete-math 2
### Exercise
$$
\text{Prove: } \lnot(\forall a \exists b (a \mid b \to ((a \leq b) \land (a + b < a*b))))
$$
$$
\displaylines{
\exists a \forall b \lnot((a \mid b \to ((a \leq b) \land (a + b < a*b)))) \\
\exists a \forall b (a \mid b \land \lnot((a \leq b) \land (a + b < a*b))) \\
\exists a \forall b (a \mid b \land (a > b \lor (a + b \geq a*b))) \\
\exists a \forall b (a \mid b \land (a + b \geq a*b)) \\
\exists a = 1 : \forall b (True \land (b + 1 \geq b)) \equiv True
}
$$
---
### Exercise
$$
\displaylines{
P, Q \text{  over } \mathbb{Z} \\
\text{Prove or disprove: } \forall a ((P(a) \lor Q(a)) \to ((\forall a : P(a))) \lor (\forall a : Q(a))) \\
\text{Let } P(a) \equiv 2 \mid a; Q(a) \equiv 2 \nmid a \\
\forall a : P(a) \equiv False; \forall a : Q(a) \equiv False \\
\forall a : P(a) \lor Q(a) \equiv True
}
$$
---
### Exercise
$$
\displaylines{
\text{Prove or disprove: } (\forall a : P(a)) \lor (\forall a : Q(a)) \to \forall a : P(a) \lor Q(a)\\
\text{Let } (\forall a : P(a)) \lor (\forall a : Q(a)) \equiv True \\
\text{Let } a \in \mathbb{Z} \\
\forall a : P(a) \implies \forall a : P(a) \lor Q(a) \\
\forall a : Q(a) \implies \forall a : P(a) \lor Q(a) \\
\implies (\forall a : P(a)) \lor (\forall a : Q(a)) \to \forall a : P(a) \lor Q(a)
}
$$
---
### Exercise
$$
\text{Prove: } \{ 6n \mid n \in \mathbb{N} \} \subseteq \{ 2n \mid n \in \mathbb{N} \}
$$
$$
\displaylines{
\forall x \in B : x = 6m = 2*3m \\
\exists n = 3m : x = 2n \\
n \in \mathbb{N} \implies x \in A \implies A \subseteq B
}
$$
---
### Exercise
$$
\displaylines{
A = \{ X | X \in \mathbb{N} \} \\
\text{Prove: } B = \{ 1, 2, 7 \} \in A
}
$$
$$
\displaylines{
\forall x \in B : x \in \mathbb{N} \implies B \subseteq \mathbb{N} \implies B \in A
}
$$
---
