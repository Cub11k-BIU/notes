---
{"publish":true,"created":"09/01/25, 13:01","modified":"2025-11-21T21:10:02.113+02:00","tags":["Academia","Assignment","Discrete-math"],"cssclasses":""}
---

# 1
$$
\displaylines{
A \neq \emptyset \neq B \\
\text{Prove: } f: A \to B \text{ is surjective} \implies \pi_{f} = \Set{ f^{-1}[\Set{ b }] | b \in B } \text{ is a partition of } A \\
\\
\text{Proof:} \\
\text{Let } f \text{ be surjective} \\
\text{Let } R = \Set{ (a, b) | f(a) = f(b) }, R \subseteq A \times A \\
\forall a \in A: f(a) = f(a) \implies aRa \implies R \text{ is reflexive} \\
aRb \implies f(a) = f(b) \implies f(b) = f(a) \implies bRa \implies R \text{ is symmetric} \\
aRb \land bRc \implies f(a) = f(b) = f(c) \implies f(a) = f(c) \implies aRc \implies R \text{ is transitive} \\
\implies R \text{ is an equivalence relation} \\
f \text{ is surjective} \implies \forall b \in B: \exists c \in A: f(c) = b \\
\text{Let } c \in A, b \in B: f(c) = b \\
[c]_{R} = \Set{ a \in A | f(a) = f(c) = b } \\
f^{-1}[\Set{ b }] = \Set{ a \in A | f(a) = b } \\
\implies \forall c \in A: [c]_{R} = f^{-1}[\Set{ b }] \implies \boxed{\pi_{f} = {^{\displaystyle A}}\Big/{_{\displaystyle R}}} \\
}
$$
---
# 2a
$$
\displaylines{
f: \mathbb{N} \to \mathbb{N} \\
\text{Prove or disprove: } \forall A \neq B \subseteq \mathbb{N}: f^{-1}[A] \neq f^{-1}[B] \implies f \text{ is injective} \\
\\
\text{Disproof:} \\
\text{Let } f(n) = \left\lceil  \frac{n}{2}  \right\rceil \\
\text{Meaning: } f(2n-1) = f(2n) = n \\
f(1) = f(2) \implies f \text{ is not injective} \\
\text{Let } A \neq B \subseteq \mathbb{N} \\
\implies \exists n \in \mathbb{N}: n \in A \setminus B \\
\forall n \in \mathbb{N}: f^{-1}[\Set{ n }] = \Set{ 2n, 2n-1 } \\
\forall n \neq m \in \mathbb{N}: \lvert n-m \rvert \geq 1 \implies \lvert 2n-2m \rvert = 2\lvert n-m \rvert \geq 2 \implies 2m \neq 2n \neq 2m-1 \\
\implies \forall n \neq m \in \mathbb{N}: 2n \not\in f^{-1}[\Set{ m }] \\
\implies \left\{\begin{array}{}
n \in A \implies 2n \in f^{-1}[A] \\
n \not\in B \implies 2n \not\in f^{-1}[B] \\
\end{array}\right. \implies f^{-1}[A] \neq f^{-1}[B] \\
\boxed{\forall A \neq B: f^{-1}[A] \neq f^{-1}[B] \text{ and } f \text{ is not injective}} \\
}
$$
# 2b
$$
\displaylines{
f: \mathbb{N} \to \mathbb{N} \\
\text{Prove or disprove: } \forall A \neq B \subseteq \mathbb{N}: f^{-1}[A] \neq f^{-1}[B] \implies f \text{ is surjective} \\
\\
\text{Proof:} \\
\text{Let } \forall A \neq B \subseteq \mathbb{N}: f^{-1}[A] \neq f^{-1}[B] \\
\text{Let } f \text{ be not surjective} \\
\implies \exists m \in \mathbb{N}: m \not\in Im(f) \\
\text{Let } A = \Set{ m }, B = \emptyset \\
A \neq B \\
f^{-1}[B] = \emptyset \\
f^{-1}[A] = \Set{ n \in \mathbb{N} | f(n) = m } = \emptyset \\
\implies f^{-1}[A] = f^{-1}[B] - \text{Contradiction!} \\
\implies \boxed{f \text{ is surjective}} \\
}
$$
---

# 3
$$
\displaylines{
\text{Let } R \text{ be a relation on } A \\
\text{Let } f: A \to A \\
f \text{ respects } R \text{ if:} \\
\forall a, b \in A: aRb \implies f(a) = f(b) \\
\\
\text{Given } f, \text{ define } \hat{f}: {^{\displaystyle A}}\Big/{_{\displaystyle R}} \to A \\
\forall [a]_{R} \in {^{\displaystyle A}}\Big/{_{\displaystyle R}}: \hat{f}([a]_{R}) = f(a) \\
}
$$
## 3a
$$
\displaylines{
f \text{ respects } R \\
\text{Prove: } \hat{f} \text{ is well-defined (it is unique and complete)} \\
\text{it actually should be called to-one, because unique means that there is only one function,} \\
\text{not only one image for each source} \\
\\
\text{Proof:} \\
\forall a \in A: [a]_{R} = \Set{ b \in A | bRa } = \Set{ b \in A | f(b) = f(a) } \\
\forall [a]_{R} \in {^{\displaystyle A}}\Big/{_{\displaystyle R}}: a \in A \implies \exists f(a) \implies \exists \hat{f}([a]_{R}) = f(a) \\
\implies \boxed{\hat{f} \text{ is complete}} \\
\text{Let } [a]_{R}, [b]_{R} \in {^{\displaystyle A}}\Big/{_{\displaystyle R}}: [a]_{R} = [b]_{R} \\
\hat{f}([a]_{R}) = f(a) \\
\hat{f}([b]_{R}) = f(b) \\
[a]_{R} = [b]_{R} \implies aRb \implies f(a) = f(b) \implies \hat{f}([a]_{R}) = f(a) = f(b) = \hat{f}([b]_{R}) \\
\implies \boxed{\hat{f} \text{ is "unique" (to-one)}} \\
\hat{f} \text{ is "unique" (to-one) and complete} \implies \boxed{\hat{f} \text{ is well-defined}} \\
}
$$
## 3b
$$
\displaylines{
f \text{ respects } R \\
\\
\text{Let } f \text{ be injective} \\
\forall a, b \in A: aRb \implies f(a) = f(b) \implies a = b \\
\forall a, b \in A: aRb \implies a = b \implies \boxed{R = Id_{a}} \\
\\
\text{Let } C, D \subseteq {^{\displaystyle A}}\Big/{_{\displaystyle R}}, \text{ prove } \hat{f}[C \cup D] = \hat{f}[C] \cup \hat{f}[D] \\
\text{Proof:} \\
\text{Let } a \in A \\
f(a) \in \hat{f}[C \cup D] \iff [a]_{R} \in C \cup D \iff [a]_{R} \in C \lor [a]_{R} \in D \\
\iff f(a) \in \hat{f}[C] \lor f(a) \in \hat{f}[D] \iff f(a) \in \hat{f}[C] \cup \hat{f}[D] \\
\implies \boxed{\hat{f}[C \cup D] = \hat{f}[C] \cup \hat{f}[D]} \\
\\
\text{Let } C, D \subseteq {^{\displaystyle A}}\Big/{_{\displaystyle R}}, \text{ show that it's not necessarily true that } \hat{f}[C \cap D] = \hat{f}[C] \cap \hat{f}[D] \\
\text{Solution:} \\
\text{Let } A = \Set{ 1, 2, 3 } \\
\text{Let } f(1) = f(2) = f(3) = 1 \\
\text{Let } R = Id_{A} \cup \Set{ (1, 2), (2, 1) } \\
\implies [1]_{R} = \Set{ 1 }, [2]_{R} = \Set{ 2 } \\
\text{Let } C = \Set{ [1]_{R} }, D = \Set{ [2]_{R} } \\
\hat{f}[C \cap D] = \hat{f}[\emptyset] = \emptyset \\
\hat{f}[C] = \Set{ \hat{f}([1]_{R}) } = \Set{ f(1) } = \Set{ 1 } \\
\hat{f}[D] = \Set{ \hat{f}([3]_{R}) } = \Set{ f(2) } = \Set{ 1 } \\
\hat{f}[C] \cap \hat{f}[D] = \Set{ 1 } \neq \emptyset \\
\implies \boxed{\hat{f}[C \cap D] \neq \hat{f}[C] \cap \hat{f}[D]} \\
}
$$
## 3c
$$
\displaylines{
\text{Let } f, g: A \to A \\
\\
\text{Prove or disprove: } (g \circ f) \text{ respects } R \implies f \text{ respects } R \\
\text{Disproof:} \\
\text{Let } A = \Set{ 1, 2, 3 } \\
\text{Let } \forall a \in A: g(a) = 1 \\
\text{Let } f = Id_{A} \\
\text{Let } R = Id_{A} \cup \Set{ (1, 2), (2, 1) } \\
g(f(1)) = g(f(2)) \implies (g \circ f) \text{ respects } R \\
f(1) \neq f(2) \implies \boxed{f \text{ doesn't respect } R} \\
\\
\text{Prove or disprove: } f \text{ respects } R \implies (g \circ f) \text{ respects } R \\
\text{Proof:} \\
\text{Let } a, b \in A \\
\text{Let } f \text{ respects } R \\
aRb \implies f(a) = f(b) \implies g(f(a)) = g(f(b)) \text{ as $g$ is to-one} \\
\implies \boxed{(g \circ f) \text{ respects } R} \\
}
$$
---

# 4
$$
\displaylines{
X, Y, Z \text{ are sets} \\
f: X \to Y \\
g: Y \to Z \\
h = (g \circ f) \\
}
$$
## 4a
$$
\displaylines{
\text{Prove or disprove: } C \subseteq X, h \text{ is injective} \implies f^{-1}[f[C]] = C \\
\\
\text{Proof:} \\
h \text{ is injective} \implies f \text{ is injective} \\
\text{Let } c \in C \\
c \in C \implies f(c) \in f[C] \implies c \in f^{-1}[f[C]] \implies C \subseteq f^{-1}[f[C]] \\
\text{Let } c \in f^{-1}[f[C]] \\
c \in f^{-1}[f[C]] \implies f(c)\in f[C] \underbrace{ \implies }_{ f \text{ is injective} } c \in C \\
\implies \boxed{C = f^{-1}[f[C]]} \\
}
$$
## 4b
$$
\displaylines{
\text{Prove or disprove: } C \subseteq Y, h \text{ is surjective} \implies f[f^{-1}[C]] = C \\
\\
\text{Disproof:} \\
\text{Let } X = \Set{ 1, 2 }, Y = \Set{ 3, 4 }, Z = \Set{ 5 } \\
f(1) = f(2) = 3 \\
g(3) = g(4) = 5 \\
\implies h(1) = 5, h(2) = 5, h \text{ is surjective} \\
\text{Let } C = \Set{ 3, 4 } \\
f^{-1}[3, 4] = \Set{ 1, 2 } \\
f[f^{-1}[C]] = f[\Set{ 1, 2 }] = \Set{ 3 } \neq C \\
\implies \boxed{f[f^{-1}[C]] \neq C} \\
}
$$
## 4c
$$
\displaylines{
\text{Prove or disprove: } C, D \subseteq Y, h \text{ is surjective} \implies g[C \cap D] = g[C] \cap g[D] \\
\\
\text{Disproof:} \\
\text{Let } X = \Set{ 1, 2, 3 }, Y = \Set{ 4, 5, 6 }, Z = \Set{ 7, 8 } \\
\text{Let } f(x) = x + 3, g(4) = g(6) = 7, g(5) = 8 \\
h(1) = h(3) = 7, h(2) = 8, h \text{ is surjective} \\
\text{Let } C = \Set{ 4, 5 }, D = \Set{ 5, 6 } \\
g[C \cap D] = g[\Set{ 5 }] = \Set{ 8 } \\
g[C] \cap g[D] = g[\Set{ 4, 5 }] \cap g[\Set{ 5, 6 }] = \Set{ 7, 8 } \cap \Set{ 7, 8 } = \Set{ 7, 8 } \\
\implies \boxed{g[C \cap D] \neq g[C] \cap g[D]} \\
}
$$
---

# 5
$$
\displaylines{
f: A \to A \\
B \subseteq A \\
B_{1} = B, B_{n+1} = f^{-1}[B_{n}] \\
x \text{ is called a fixed point of $f$ if } f(x) = x \\ 
}
$$
## 5a
$$
\displaylines{
\text{Prove or disprove: } \forall B \subseteq A: \bigcap_{n \in \mathbb{N}} B_{n} = \emptyset \implies f \text{ has no fixed points} \\
\\
\text{Proof:} \\
\text{Let } \exists x_{0} \in A: f(x_{0}) = x_{0} \\
\text{Let } B = \Set{ x_{0} } \\
\text{Base case. } B_{1} = B = \Set{ x_{0} } \implies x_{0} \in B_{1} \\
\text{Induction step. Let } x_{0} \in B_{n} \\
x_{0} \in B_{n} \implies x_{0} \in f^{-1}[B_{n}] \implies x_{0} \in B_{n+1} \\
\implies \text{By induction: } x_{0} \in \bigcap_{n \in \mathbb{N}} B_{n} \implies \bigcap_{n \in \mathbb{N}} B_{n} \neq \emptyset \\
\implies \exists B \subseteq A: \bigcap_{n \in \mathbb{N}} B_{n} \neq \emptyset \\
\implies \boxed{\forall B \subseteq A: \bigcap_{n \in \mathbb{N}} B_{n} = \emptyset \implies f \text{ has no fixed points}} \\
}
$$
## 5b
$$
\displaylines{
\text{Prove or disprove: } f \text{ has no fixed points} \implies \forall B \subseteq A: \bigcap_{n \in \mathbb{N}} B_{n} = \emptyset \\
\\
\text{Disproof:} \\
\text{Let } A = \Set{ 1, 2 } \\
f(1) = 2, f(2) = 1 \\
f \text{ has no fixed points} \\
\text{Let } B = \Set{ 1, 2 } \\
\forall n \in \mathbb{N}: B_{n} = \Set{ 1, 2 } \\
\implies \bigcap_{n \in \mathbb{N}} B_{n} = \Set{ 1, 2 } \neq \emptyset \implies \exists B \subseteq A: \bigcap_{n \in \mathbb{N}} B_{n} \neq \emptyset \\
\implies \boxed{f \text{ has no fixed points} \centernot\implies \forall B \subseteq A: \bigcap_{n \in \mathbb{N}} B_{n} = \emptyset}
}
$$
---

# 6
$$
\displaylines{
f: \mathbb{N} \to \mathbb{N} \text{ is called periodic if} \\
\exists p > 1 \in \mathbb{N}: \forall n \in \mathbb{N}: f(n) = f(n+p) \\
}
$$
## 6a
$$
\displaylines{
\text{Prove or disprove: } f \text{ is periodic} \implies f \text{ is not surjective} \\
\\
\text{Proof:} \\
\text{Let } f \text{ be periodic} \\
\implies \exists p > 1 \in \mathbb{N}: \forall n \in \mathbb{N}: f(n) = f(n+p) \\
\text{Let } p > 1 \in \mathbb{N} \\
\text{Let } P = f[[p]] = \Set{ f(1), f(2), \dots, f(p) } \\
\lvert P \rvert \leq p \implies P \text{ is finite} \\
\text{Let } n \in \mathbb{N} \\
\text{If } n \in [p], \text{ then } f(n) \in P \\
\text{If } n > p, \text{ then } \exists n_{1}, n_{2} \in \mathbb{N}: n_{1} < p, n = n_{1} + n_{2}p \\
\implies f(n) = f(n_{1} + n_{2}p) = f(n_{1}) \in P \\
\implies \forall n \in \mathbb{N}: f(n) \in P \\
\implies Im(f) = P \implies Im(f) \text{ is finite} \implies Im(f) \neq \mathbb{N} \implies \boxed{f \text{ is not surjective}} \\
}
$$
## 6b
$$
\displaylines{
\text{Prove or disprove: } \forall f: f^{2} \text{ is periodic} \implies f \text{ is periodic} \\
\\
\text{Disproof:} \\
f = \begin{cases}
1 & n \text{ is odd} \\
n+1  & n \text{ is even} \\
\end{cases} \\
\text{Let } n \in \mathbb{N} \\
\text{If } n \text{ is odd}, \text{ then } f(n) = 1 \implies f(f(n)) = 1 \\
\text{If } n \text{ is even}, \text{ then } f(n) = \underbrace{ n+1 }_{ \text{odd} } \implies f(f(n)) = 1 \\
\implies \forall n \in \mathbb{N}: f(f(n)) = 1 \implies f^{2} \text{ is periodic} \\
\text{Let } p > 1 \in \mathbb{N} \\
\text{Let } n \in \mathbb{N} \text{ be even} \\
\text{If } p \text{ is even}, \text{ then } f(n+p) = n+p+1 \neq n + 1 \implies f(n) \neq f(n+p) \\
\text{If } p \text{ is odd}, \text{ then } f(n+p) = 1 \neq n + 1 \implies f(n) \neq f(n+p) \\
\implies \forall p > 1 \in \mathbb{N}: \exists n \in \mathbb{N}: f(n) \neq f(n+p) \implies f \text{ is not periodic} \\
\implies \boxed{ \exists f: f^{2} \text{ is periodic and } f \text{ is not periodic} } \\
}
$$
---
