---
{"publish":true,"created":"03/02/25, 14:02","modified":"2025-11-21T21:10:14.076+02:00","tags":["Academia","Lecture","Discrete-math"],"cssclasses":""}
---

# Discrete-math 26
## Exam 2024 (2)
$$
\displaylines{
A \text{ is a set}, \lvert A \rvert \geq 1 \\
\text{Let } f: P(A) \times P(A) \to P(P(A)) \\
\forall B, C \subseteq A: f(B, C) = \Set{ D | D \subseteq B \cap C } \\
\text{Prove or disprove:} \\
1. \quad \text{It is possible that } f \text{ is injective} \\
2. \quad \text{It is possible that } f \text{ is surjective} \\
\\
\text{Disproof for 1:} \\
\text{Let } A \\
A \neq \emptyset \implies \exists a \in A \\
f(\emptyset, \Set{ a }) = f(\Set{ a }, \emptyset) = P(\emptyset) = \Set{ \emptyset } \\
\implies \boxed{ \forall A: f \text{ is not injective} } \\
\text{Disproof for 2:} \\
\text{Let } A \\
A \neq \emptyset \implies \exists a \in A \\
\implies \Set{ a } \in P(A) \implies \Set{ \Set{ a } } \in P(P(A)) \\
\forall X: \emptyset \in P(X) \\
\forall B, C \subseteq A: f(B, C) = P(B \cap C) \implies \emptyset \in f(B, C) \\
\implies f(B, C) \neq \Set{ \Set{ a } } \implies \boxed{\forall A: f \text{ is nor surjective} } \\
}
$$
---
## Exam 2024 (3)
$$
\displaylines{
\text{Let } A \text{ be a set} \\
\text{Let } f: A \to A \\
\text{Let } B \subseteq A \\
\text{Let } B_{1} = B, \forall n \in \mathbb{N}: B_{n+1} = f^{-1}[B_{n}] \\
1. \quad \text{Prove: if for any } B \subseteq A: \bigcap_{n \in \mathbb{N}} B_{n} = \emptyset \text{ then } f \text{ has no fixed points} \\
2. \quad \text{Prove or disprove: } f \text{ has no fixed points} \implies \forall B \subseteq A: \bigcap_{n \in \mathbb{N}} B_{n} = \emptyset \\
\\
\text{Proof for 1:} \\
\text{If } A \text{ is an empty set, then } f \text{ is an empty function which has no fixed points} \\
\text{Let } A \neq \emptyset \\
\text{Let } \forall B \subseteq A: \bigcap_{n \in \mathbb{N}} B_{n} = \emptyset \\
\text{Let } f \text{ has a fixed point } x \\
\text{Let } B = \Set{ x } \\
\implies x \in f[B] \\
\text{Base case. Let } n = 1 \\
x \in B \implies x \in B_{1} \\
\text{Induction step. Let } x \in B_{n} \\
B_{n+1} = f^{-1}[B_{n}] \\
x \in B_{n}, f(x) = x \implies x \in f^{-1}[B_{n}] = B_{n+1} \\
\implies \text{By induction: } x \in \bigcap_{n \in \mathbb{N}} B_{n} \implies \bigcap_{n \in \mathbb{N}} B_{n} \neq \emptyset - \text{Contradiction!} \\
\implies \boxed{ f \text{ has no fixed points} } \\
\\
\text{Disproof for 2:} \\
\text{Let } A = \mathbb{N} \\
\text{Let } f(n) = 2n \\
\text{Let } B = \mathbb{N} \\
\text{Base case. Let } n = 1 \\
B_{1} = B = \mathbb{N} \\
\text{Induction step. Let } B_{n} = \mathbb{N} \\
B_{n+1} = f^{-1}[B_{n}] = f^{-1}[\mathbb{N}] \\
\text{Let } x \in f^{-1}[\mathbb{N}] \implies x \in \mathbb{N} \implies \boxed{ f^{-1}[\mathbb{N}] \subseteq \mathbb{N} } \\
\text{Let } x \in \mathbb{N} \implies 2x \in \mathbb{N} \implies f(x) = 2x \implies x \in f^{-1}[\Set{ 2x }] \subseteq f^{-1}[\mathbb{N}] \implies \boxed{ \mathbb{N} \subseteq f^{-1}[\mathbb{N}] } \\
\implies B_{n+1} = f^{-1}[\mathbb{N}] = \mathbb{N} \\
\implies \text{By Induction } \forall n \in \mathbb{N}: B_{n} = \mathbb{N} \implies \boxed{ \bigcap_{n \in \mathbb{N}} B_{n} = \mathbb{N} } \\
}
$$
---
## Exam 202?
$$
\displaylines{
\text{Let } A = [n], n \in \mathbb{N} \\
\text{Let } G = (V, E) \text{ be a simple graph} \\
V = P(A) \\
E = \Set{ \Set{ X, Y } | X, Y \subseteq A \land [(X \subset Y) \lor (Y \subset X)]} \\
1. \quad \text{Find } \lvert V \rvert \\
2. \quad \text{Find } \lvert E \rvert \\
3. \quad \text{ Show that there are exactly two vertices with odd degree} \\
\\
\text{Solution for 1:} \\
\lvert V \rvert = \lvert P(A) \rvert = 2^{\lvert A \rvert } = 2^{n} \\
\text{Solution for 2:} \\
\text{Let } k \in [n] \\
\text{Let } X \in V \\
\lvert P(X) \rvert = 2^{k} \\
\text{Number of supersets of } X \text{ is } 2^{n-k} \\
X \in P(X), X \text{ is a superset of } X \\
\implies deg(X) = 2^{k} + 2^{n-k} - 2 \\
\sum_{X \in V} deg(X) = \sum_{k=0}^{n} \binom{n}{k}(2^{k}+2^{n-k}-2) \\
\implies \lvert E \rvert = \frac{1}{2} \cdot \sum_{k=0}^{n} \binom{n}{k}(2^{k}+2^{n-k}-2) = \frac{1}{2}\left( \sum_{k=0}^{n} 2^{k}\binom{n}{k} + \sum_{k=0}^{n} 2^{n-k}\binom{n}{k} - 2\sum_{k=0}^{n} \binom{n}{k} \right) \\
\text{By binomial theorem: } \lvert E \rvert = \frac{1}{2}(3^{n} + 3^{n} - 2^{n+1}) = 3^{n} - 2^{n} \\
\text{Solution for 2:} \\
deg(X) = 2^{k} + 2^{n-k} - 2 \\
\text{Let } k \neq 0, k \neq n \\
\implies deg(X) \text{ is even} \\
\text{Let } k = 0 \\
\implies X = \emptyset, deg(X) = 2^{n} - 1 \\
\text{Let } k = n \\
X = [n], deg(X) = 2^{n} - 1 \\
\implies \text{There are exactly two vertices of odd degree: } \emptyset, [n] \\
}
$$
---
