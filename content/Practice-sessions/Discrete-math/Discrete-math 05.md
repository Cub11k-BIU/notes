---
{"publish":true,"created":"03/12/24, 16:12","modified":"2026-03-24T14:58:58.042+02:00","tags":["Academia","Practice","Discrete-math"],"cssclasses":""}
---

# Discrete-math 5
$$
\displaylines{
\text{Let } (A, R) \text{ be a partially ordered finite set} \\
\text{Prove: } \exists a \in A: a \text{ is a minimal element} \\
\\
\text{Proof:} \\
\text{Base case. Let } \lvert A \rvert = 1 \\
A = \Set{ a } \implies a \text{ is a minimal element} \\
\text{Induction step. Let } \lvert A \rvert = n + 1 \\
\text{Let } a \in A, B = A \setminus \Set{ a } \\
\text{Let } S = (B \times B) \cap R \implies S \text{ is a parital ordering relation (proved in HW 5)} \\
\lvert B \rvert = n, \text{ by induction assumption } \exists b \in B: b \text{ is a minimal element of } B \\
\text{If } a R b, \text{let } a \text{ be not minimal in } A : \exists x \in A : x R a \land x \neq a \\
x \neq a \implies x \in B \\
x R a \land a R b \implies x R b \land x \in B \implies x = b \implies b R a \land a R b \implies a = b - \text{ Contradiction!} \\
\implies a \text{ is a minimal element of } A \\
\text{If } a \not R b, \text{ let } b \text{ be not minimal in } A: \exists x \in A: x R b \land x \neq b \\
x R b \implies x \neq a \implies x \in B \implies [x R b \to x = b] \implies x = b - \text{Contradiction!} \\
\implies b \text{ is a minimal element of } A \\
\text{Base case + Induction step} \implies \text{Proved by induction} \\
}
$$
---
