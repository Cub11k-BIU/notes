---
{"publish":true,"created":"11/02/25, 15:02","modified":"2025-11-21T21:10:14.092+02:00","tags":["Academia","Lecture","Discrete-math"],"cssclasses":""}
---

# 5
$$
\displaylines{
\text{Sets } A, B \text{ are called equivalent if } \exists f: A \to B : f \text{ is bijective} \\
}
$$
## 5a
$$
\displaylines{
\text{Are these sets equivalent?} \\
A = \Set{ n \in \mathbb{N} | n \text{ is even} } \\
B = \Set{ n \in \mathbb{N} | n \text{ is odd} } \\
\\
\text{Solution:} \\
\text{Let } f: A \to B, f(n) = n - 1 \\
\text{Let } n \neq m \in A \\
\text{Let } n < m \text{ WLOG} \\
\implies f(m) = m - 1 > f(n) = n - 1 \implies f \text{ is injective} \\
\text{Let } k \in B \\
k \in \mathbb{N} \implies k + 1 \in \mathbb{N} \\
k \text{ is odd} \implies k + 1 \text{ is even} \implies k + 1 \in A \\
f(k+1) = k+1-1 = k \implies f \text{ is surjective} \\
\implies f \text{ is bijective} \implies \boxed{ A, B \text{ are equivalent} } \\
}
$$
## 5b
$$
\displaylines{
\text{Let } A \text{ be a set} \\
\text{Let } R \text{ be a relation on } P(A) \\
\forall B, C \in P(A): (B, C) \in R \iff B \text{ is equivalent to } C \\
\text{Prove: } R \text{ is an equivalence relation} \\
\\
\text{Proof:} \\
\text{Let } B \in P(A) \\
I_{B}: B \to B \text{ is biejctive} \\
\implies B \text{ is equivalent to } B \implies (B, B) \in R \implies R\text{ is reflexive} \\
\text{Let } B, C \in P(A) \\
(B, C) \in R \implies \exists f: B \to C: f \text{ is bijective} \implies \exists f^{-1}: C \to B: f^{-1} \text{ bijective} \\
\implies C \text{ is equivalent to } B \implies (C, B) \in R \implies R \text{ is symmetric} \\
\text{Let } B, C, D \in P(A) \\
(B, C), (C, D) \in R \implies \exists f: B \to C: f \text{ is bijective}, \exists g: C \to D: g \text{ is bijective} \\
f \text{ is bijective} \implies (g \circ f): B \to D \text{ is bijective} \\
\implies (B, D) \in R \implies R \text{ is transitive} \\
\implies \boxed{ R \text{ is an equivalence relation} } \\
}
$$
## 5c
$$
\displaylines{
\text{Prove: } \Set{ 0, 1 }^{A}, P(A) \text{ are equivalent} \\
\\
\text{Proof:} \\
\text{Let } F: P(A) \to \Set{ 0, 1 }^{A}, F(X) = \Set{ (x, f_{X}(x)) | x \in A } \\
\text{Where } f_{X}: A \to \Set{ 0, 1 }, f_{X}(x) = \begin{cases}
1 & x \in X \\
0 & x \not\in X \\
\end{cases} \\
\text{Let } X \neq Y \in P(A) \\
X \neq Y \implies \exists x \in X: x \not\in Y \text{ (WLOG)} \\
\implies (x, 1) \in F(X), (x, 1) \not\in F(Y) \implies F(X) \neq F(Y) \\
\implies F \text{ is injective} \\
\text{Let } g \in \Set{ 0, 1 }^{A} \\
\forall x \in A: \exists y \in \Set{ 0, 1 }: (x, y) \in g \\
\text{Let } X = \Set{ x \in A | (x, 1) \in g } \\
F(X) = \Set{ (x, f_{X}(x)) | x \in A } = \Set{ (x, 1) | x \in X } \cup \Set{ (x, 0) | x \in A \setminus X } = g \\
\implies F \text{ is surjective} \implies F \text{ is bijective} \\
\implies \boxed{ \Set{ 0, 1 }^{A}, P(A) \text{ are equivalent} } \\
}
$$
