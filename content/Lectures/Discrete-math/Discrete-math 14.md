---
{"publish":true,"created":"17/12/24, 14:12","modified":"2025-11-21T21:10:14.037+02:00","tags":["Academia","Lecture","Discrete-math"],"cssclasses":""}
---

# Discrete-math 14
## Image (partial Image) #definition 
$$
\displaylines{
\text{Let } f: A \to B \\
\text{Let } X \subseteq A \\
\text{Image of } X \text{ under } f \text{ is defined as following:} \\
f[X] = \Set{ f(x) | x \in X } \\
}
$$
## Inverse Image #definition 
$$
\displaylines{
\text{Let } f: A \to B \\
\text{Let } Y \subseteq B \\
\text{Inverse image of } Y \text{ under } f \text{ is defined as following:} \\
f^{-1}[Y] = \Set{ x \in A | f(x) \in Y } \\
}
$$
### Example
$$
\displaylines{
f: \mathbb{Z} \to \mathbb{Z} \\
f(x) = x^{2} \\
f[\Set{ 1, 2 }] = \Set{ 1, 4 } \\
f^{-1}[\Set{ 1, 4 }] = \Set{ -2, -1, 1, 2 } \\
f^{-1}[\Set{ 5 }] = \emptyset \\
}
$$
---
## Partial and Inverse Image properties #theorem 
$$
\displaylines{
& \text{Let } f: X \to Y \\
& \text{Then } \\
1. & \forall B \subseteq Y: f[f^{-1}[B]] \subseteq B \\
2. & f \text{ is surjective} \iff \forall B \subseteq Y: f[f^{-1}[B]] = B \\
}
$$
$$
\displaylines{
\text{Proof for 1.} \\
\text{Let } y \in f[f^{-1}[B]] \\
\exists x \in f^{-1}[B]: f(x) = y \iff \exists x \in X : f(x) \in B \land f(x) = y \\
f(x) \in B \land f(x) = y \implies y \in B \\
\implies \boxed{f[f^{-1}[B]] \subseteq B} \\
}
$$
$$
\displaylines{
\text{Proof for 2.} \\
\text{Let } f \text{ be surjective} \\
\text{Let } B \subseteq Y, y \in B \\
f \text{ is surjective} \implies \exists x \in X: f(x) = y \\
y \in B \land f(x) = y \implies x \in f^{-1}[B] \implies y = f(x) \in f[f^{-1}[B]] \implies B \subseteq f[f^{-1}[B]] \\
\implies \boxed{\forall B \subseteq Y: B = f[f^{-1}[B]]} & (1) \\
\text{Let } \forall B \subseteq Y: B = f[f^{-1}[B]] \\
\text{Let } y \in Y, B = \Set{ y } \\
y \in B \implies y \in f[f^{-1}[B]] \implies \exists x \in f^{-1}[B]: f(x) = y \\
f^{-1}[B] \subseteq X \implies \exists x \in X: f(x) = y \implies \boxed{f \text{ is surjective}} & (2) \\
(1) \land (2) \implies \boxed{f \text{ is surjective} \iff \forall B \subseteq Y: f[f^{-1}[B]] = B} \\
}
$$
---
## Finite set #definition 
$$
\displaylines{
\text{Set } A \text{ is called finite} \\
\text{If it is empty or if there exists $n \in \mathbb{N}$} \\
\text{such that there exists a bijective function } f: \mathbb{N} \to A \\
\text{Number of elements: } \lvert A \rvert = n \\
\text{We denote } \Set{ 1, 2, \dots, n } = [n] \\
}
$$
---
## Functions on finite sets #lemma 
$$
\displaylines{
\text{Let } A, B \neq \emptyset \text{ be finite sets} \\
\text{Then } \lvert A \rvert \leq \lvert B \rvert \iff \exists f: A \to B : f \text{ is injective} \\
\\
\text{Proof:} \\
\text{Let } \exists f: A \to B : f \text{ is injective} \\
f \text{ is injective} \implies \lvert A \rvert = \lvert Im(f) \rvert  \leq \lvert B \rvert \implies \boxed{\lvert A \rvert \leq \lvert B \rvert} & (1) \\
\text{Let } \lvert A \rvert \leq \lvert B \rvert \\
A = \Set{ a_{1}, \dots, a_{n} }, B = \Set{ b_{1}, \dots, b_{n}, \dots b_{n+k} } \\
f: A \to B, \forall i \in [n]: f(a_{i}) = b_{i} \\
\forall i, j \in [n]: a_{i} \neq a_{j} \implies i \neq j \implies b_{i} \neq b_{j} \implies f(a_{i}) \neq f(a_{j}) \\
\implies \boxed{\exists f: A \to B: f \text{ is injective}} & (2) \\
(1) \land (2) \implies \boxed{\lvert A \rvert \leq \lvert B \rvert \iff \exists f: A \to B : f \text{ is injective}} \\
}
$$
---
## Combinatorics
### Addition rule 
$$
\displaylines{
A \cap B = \emptyset \implies \lvert A \cup B \rvert = \lvert A \rvert + \lvert B \rvert \\
}
$$
---
