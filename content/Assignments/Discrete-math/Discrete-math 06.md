---
{"publish":true,"created":"15/12/24, 12:12","modified":"2025-11-21T21:10:02.086+02:00","tags":["Academia","Assignment","Discrete-math"],"cssclasses":""}
---

# 1
$$
\displaylines{
\forall (n_{1}, m_{1}), (n_{2}, m_{2}) \in \mathbb{N} \times \mathbb{N} \\
(n_{1}, m_{1}) R (n_{2}, m_{2}) \iff n_{1} \leq n_{2} \land m_{1} \leq m_{2} \\
}
$$
## 1a
$$
\displaylines{
\text{Prove: } R \text{ is an ordering relation} \\
\\
\text{Proof:} \\
\text{Let } (n, m) \in \mathbb{N} \times \mathbb{N} \\
n = n \land m = n \implies n \leq n \land m \leq m \implies (n, m) R (n, 
m) \\
\implies \boxed{R \text{ is reflexive}} \\
\text{Let } (n_{1}, m_{1}) R (n_{2}, m_{2}), (n_{2}, m_{2}) R (n_{1}, m_{1}) \\
\implies \left\{\begin{array}{}
n_{1} \leq n_{2} \\
m_{1} \leq m_{2} \\
n_{2} \leq n_{1} \\
m_{2} \leq m_{1} \\
\end{array}\right. \implies n_{1} = n_{2} \land m_{1} = m_{2} \iff (n_{1}, m_{1}) = (n_{2}, m_{2}) \\
\implies \boxed{R \text{ is anti-symmetric}} \\
\text{Let } (n_{1}, m_{1}) R (n_{2}, m_{2}), (n_{2}, m_{2}) R (n_{3}, m_{3}) \\
\implies \left\{\begin{array}{}
n_{1} \leq n_{2} \leq n_{3} \\
m_{1} \leq m_{2} \leq m_{3} \\
\end{array}\right. \implies n_{1} \leq n_{3} \land m_{1} \leq m_{3} \implies (n_{1}, m_{1}) R (n_{3}, m_{3}) \\
\implies \boxed{R \text{ is transitive}} \\
\implies \boxed{R \text{ is an ordering relation}} \\
}
$$
## 1b
$$
\displaylines{
\text{Prove or disprove: } (\mathbb{N} \times \mathbb{N}, R) \text{ is a total order ($R$ is linear)} \\
\\
\text{Disproof:} \\
\text{Let } x = (1, 3) \in \mathbb{N} \times \mathbb{N} \\
\text{Let } y = (5, 2) \in \mathbb{N} \times \mathbb{N} \\
3 > 2 \implies x \not R y \\
5 > 1 \implies y \not R x \\
\implies \exists (n_{1}, m_{1}), (n_{2}, m_{2}): \lnot[(n_{1}, m_{1}) R (n_{2}, m_{2}) \land (n_{2}, m_{2}) R (n_{1}, m_{1})] \\
\implies \boxed{(\mathbb{N} \times \mathbb{N}, R) \text{ is not a total order}} \\
}
$$
## 1c
$$
\displaylines{
B = \Set{ (1, n) | n \in \mathbb{N} } \\
\text{Find } inf(B) \text{ and } sup(B) \\
\\
\text{Solution:} \\
\text{Let } (x, y) \in \mathbb{N} \times \mathbb{N} \\
\forall b \in B: (x, y) R b \iff \forall n \in \mathbb{N}: x \leq 1 \land y \leq n \iff x \leq 1 \land y \leq 1 \\
\implies L_{B} = \Set{ (x, y) \in \mathbb{N} \times \mathbb{N} | x \leq 1 \land y \leq 1 } \implies max(L_{B}) = (1, 1) \implies \boxed{inf(B) = (1, 1)} \\
\forall b \in B: b R (x, y) \iff \forall n \in \mathbb{N}: 1 \leq x \land n \leq y \iff 1 \leq x \land \underbrace{ \exists sup(\mathbb{N}) }_{ \text{False} } \\
\implies U_{B} = \emptyset \implies \boxed{\not\exists sup(B)} \\
}
$$
## 1d
$$
\displaylines{
B = \Set{ (n, 1) | n \in \mathbb{N} } \\
\text{Find } inf(B) \text{ and } sup(B) \\
\\
\text{Solution:} \\
\text{Let } (x, y) \in \mathbb{N} \times \mathbb{N} \\
\forall b \in B: (x, y) R (n, 1) \iff \forall n \in N: x \leq n \land y \leq 1 \iff x \leq 1 \land y \leq 1 \\
\implies  L_{B} = \Set{ (x, y) \in \mathbb{N} \times \mathbb{N} | x \leq 1 \land y \leq 1} \implies max(L_{B}) = (1, 1) \implies \boxed{inf(B) = (1, 1)} \\
\forall b \in B: b R (x, y) \iff \forall n \in \mathbb{N}: n \leq x \land 1 \leq y \iff \underbrace{ \exists sup(\mathbb{N}) }_{ \text{False} } \land 1 \leq y \\
\implies U_{B} = \emptyset \implies \boxed{\not\exists sup(B)} \\
}
$$
---

# 2
$$
\displaylines{
\text{Let } (A, \preccurlyeq) \text{ be a poset}, \lvert A \rvert \geq 2 \\
(a_{1}, b_{1}) R (a_{2}, b_{2}) \iff a_{1} \preccurlyeq a_{2} \land b_{1} \preccurlyeq b_{2} \\
\text{Prove: } R \text{ is a non-linear relation on } A \times A \\
\\
\text{Proof:} \\
\text{Let } a_{1} \neq a_{2}, a_{1} \preccurlyeq a_{2} \land b_{2} \preccurlyeq b_{1}, b_{1} \neq b_{2} \\
\implies (a_{1}, b_{1}) \not R (a_{2}, b_{2}) \land (a_{2}, b_{2}) \not R (a_{1}, b_{1}) \\
\implies \exists (a_{1}, b_{1}), (a_{2}, b_{2}) \in A \times A : \lnot[(a_{1},b_{1}) R (a_{2}, b_{2}) \lor (a_{2}, b_{2}) R (a_{1}, b_{1})] \\
\implies \boxed{R \text{ is a non-linear relation}} \\
}
$$
---
# 3
$$
\displaylines{
\text{Let } (A, \leq), (B, \preccurlyeq) \text{ be posets}, A, B \neq \emptyset \\
\text{Lexicographic order }L \text{ on } A \times B: \\
(a_{1}, b_{1}) L (a_{2}, b_{2}) \iff (a_{1} < a_{2} \lor (a_{1} = a_{2} \land b_{1} \preccurlyeq b_{2})) \\
}
$$
## 3a
$$
\displaylines{
\text{Find posets } (A, \leq), (B, \preccurlyeq) \text{ such that } L \text{ is non-linear} \\
\\
\text{Solution:} \\
(A, \leq) = (\Set{ 2, 3 }, \mid) \\
(B, \preccurlyeq) = (\Set{ 5, 7 }, \mid) \\
2 \not\mid 3 \lor (2 \neq 3 \land 5 \not\mid 7) \equiv F \implies (2, 5) \not L (3, 7) \\
3 \not\mid 2 \lor (3 \neq 2 \land 7 \not\mid 5) \equiv F \implies (3, 7) \not L (2, 5) \\
\implies \boxed{L \text{ is non-linear}} \\
}
$$
## 3b
$$
\displaylines{
\text{Prove: } L \text{ is linear} \iff \leq, \preccurlyeq \text{ are linear} \\
\\
\text{Proof:} \\
\text{Let } a_{1}, a_{2} \in A, b_{1}, b_{2} \in B \implies (a_{1}, b_{1}), (a_{2}, b_{2}) \in A \times B \\
\text{Let } \leq, \preccurlyeq \text{ be linear} \\
\left\{\begin{array}{}
a_{1} \leq a_{2} \lor a_{2} \leq a_{1} \\
b_{1} \preccurlyeq b_{2} \lor b_{2} \preccurlyeq b_{1} \\
\end{array}\right. \implies \left\{\begin{array}{}
\left[\begin{array}{}
a_{1} < a_{2} \\
a_{2} < a_{1} \\
a_{1} = a_{2} \\
\end{array}\right. \\
b_{1} \preccurlyeq b_{2} \lor b_{2} \preccurlyeq b_{1} \\
\end{array}\right. \implies \left\{\begin{array}{}
\left[\begin{array}{}
(a_{1}, b_{1}) L (a_{2}, b_{2}) \\
(a_{2}, b_{2}) L (a_{1}, b_{1}) \\
a_{1} = a_{2} \\
\end{array}\right. \\
b_{1} \preccurlyeq b_{2} \lor b_{2} \preccurlyeq b_{1} \\
\end{array}\right. \\
\implies \left[\begin{array}{}
(a_{1}, b_{1}) L (a_{2}, b_{2}) \\
(a_{2}, b_{2}) L (a_{1}, b_{1}) \\
a_{1} = a_{2} \land (b_{1} \preccurlyeq b_{2} \lor b_{2} \preccurlyeq b_{1}) \\
\end{array}\right. \implies \left[\begin{array}{}
(a_{1}, b_{1}) L (a_{2}, b_{2}) \\
(a_{2}, b_{2}) L (a_{1}, b_{1}) \\
a_{1} = a_{2} \land b_{1} \preccurlyeq b_{2} \\
a_{1} = a_{2} \land b_{2} \preccurlyeq b_{1} \\
\end{array}\right. \implies \left[\begin{array}{}
(a_{1}, b_{1}) L (a_{2}, b_{2}) \\
(a_{2}, b_{2}) L (a_{1}, b_{1}) \\
(a_{1}, b_{1}) L (a_{2}, b_{2}) \\
(a_{2}, b_{2}) L (a_{1}, b_{1}) \\
\end{array}\right. \\
\implies \boxed{L \text{ is linear}} & (1) \\
\\
\text{Let } L \text{ be linear} \\
\left[\begin{array}{}
(a_{1}, b_{1}) L (a_{2}, b_{1}) \\
(a_{2}, b_{1}) L (a_{1}, b_{1}) \\
\end{array}\right. \implies \left[\begin{array}{}
a_{1} < a_{2} \lor (a_{1} = a_{2} \land b_{1} \preccurlyeq b_{1}) \\
a_{2} < a_{1} \lor (a_{2} = a_{1} \land b_{1} \preccurlyeq b_{1}) \\
\end{array}\right. \implies a_{1} \leq a_{2} \lor a_{2} \leq a_{1} \\
\implies \boxed{\leq \text{ is linear}} & (2) \\
\left[\begin{array}{}
(a_{1}, b_{1}) L (a_{1}, b_{2}) \\
(a_{1}, b_{2}) L (a_{1}, b_{1}) \\
\end{array}\right. \implies \left[\begin{array}{}
a_{1} < a_{1} \lor (a_{1} = a_{1} \land b_{1} \preccurlyeq b_{2}) \\
a_{1} < a_{1} \lor (a_{1} = a_{1} \land b_{2} \preccurlyeq b_{1}) \\
\end{array}\right. \implies b_{1} \preccurlyeq b_{2} \lor b_{2} \preccurlyeq b_{1} \\
\implies \boxed{\preccurlyeq \text{ is linear}} & (3) \\
(1) \land (2) \land (3) \implies \boxed{L \text{ is linear} \iff \leq, \preccurlyeq \text{ are linear}} \\
}
$$
---

# 4
$$
\displaylines{
\text{Let } (A, \preccurlyeq) \text{ be a poset, assume } \exists min(A) = a, \text{ let } B \subseteq A \\
}
$$
## 4a
$$
\displaylines{
\text{Prove or disprove: } a \in B \impliedby inf(B) = a \\
\\
\text{Proof:} \\
B \subseteq A \implies \forall b \in B: b \in A \implies \forall b \in B: a \preccurlyeq b \\
a \in B \implies a = min(B) \\
\exists min(B) \implies inf(B) = min(B) \\
\implies \boxed{inf(B) = a} \\
}
$$
## 4b
$$
\displaylines{
\text{Prove or disprove: } inf(B) = a \implies a \in B \\
\\
\text{Disproof:} \\
\text{Let } A = \Set{ x \in \mathbb{R} | x \geq 0 } \\
\text{Let } a_{1} \preccurlyeq a_{2} \iff a_{1} \leq a_{2} \\
\implies min(A) = 0 \\
\text{Let } B = \Set{ \frac{1}{n} | n \in \mathbb{N} } \\
inf(B) = 0 \land 0 \not\in B \quad \boxed{\text{Disproved}} \\
}
$$
---

# 5a
$$
\displaylines{
\text{Find a function } f: \mathbb{N} \to \mathbb{N} \text{ that is injective but not surjective} \\
\\
\text{Solution:} \\
f(n) = n+1 \\
\forall n_{1}, n_{2} \in \mathbb{N}: f(n_{1}) = f(n_{2}) \implies n_{1} + 1 = n_{2} + 1 \implies n_{1} = n_{2}  \implies \boxed{f \text{ is injective}} \\
\forall n \in \mathbb{N}: f(n) \neq 1 \implies \boxed{f \text{ is not surjective}} \\
}
$$
# 5b
$$
\displaylines{
\text{Find a function } f: \mathbb{N} \to \mathbb{N} \text{ that is surjective but not injective} \\
\\
\text{Solution:} \\
f(n) = \begin{cases}
n & n = 1 \\
n - 1 & \text{otherwise} \\
\end{cases} \\
f(1) = f(2) \implies \boxed{f \text{ is not injective}} \\
\forall n \in \mathbb{N}: \exists n+1 \in \mathbb{N}: f(n + 1) = n + 1 - 1 = n \implies \boxed{f \text{ is surjective}} \\
}
$$
# 5c
$$
\displaylines{
\text{Let } f: \mathbb{R} \to \mathbb{R}, f(x) = mx + b \\
\text{For which values of } m, b \in \mathbb{R}, \text{ function } f \text{ is bijective?} \\
\\
\text{Solution:} \\
\forall m, b, x_{1}, x_{2} \in \mathbb{R}: f(x_{1}) = f(x_{2}) \implies mx_{1} + b = mx_{2} + b \implies \left[\begin{array}{}
m = 0 \\
x_{1} = x_{2} \\
\end{array}\right. \\
\implies \boxed{m \neq 0 \implies f \text{ is injective}} \\
\text{Let } y \in \mathbb{R} \\
y = mx + b \iff x = \frac{y-b}{m} \\
\frac{y-b}{m} \in \mathbb{R} \iff m \neq 0 \\
\implies [\forall y \in \mathbb{R} \exists x \in \mathbb{R}: f(x) = y] \iff m \neq 0 \\
\implies \boxed{f \text{ is bijective} \iff  m \neq 0} \\
}
$$
---

# 6
$$
\displaylines{
\text{Define and prove whether the functions are injective, surjective or bijective} \\
}
$$
## 6a
$$
\displaylines{
f: \mathbb{Z} \to \mathbb{Z}, f(n) = \lvert n \rvert \\
\text{Also find } Im(f) \\
\\
\text{Solution:} \\
f(1) = f(-1) = 1 \implies \boxed{f \text{ is not injective}} \\
\forall n \in \mathbb{Z}: f(n) \neq -1 \implies \boxed{f \text{ is not surjective}} \\
Im(f) = \Set{ z \in \mathbb{Z} | z \geq 0 } \\
}
$$
## 6b
$$
\displaylines{
f: \mathbb{R} \to \Set{ 0, 1 }, f(x) = \begin{cases}
1 & x \in \mathbb{Q} \\
0 & x \not\in \mathbb{Q} \\
\end{cases} \\
\\
\text{Solution:} \\
f(1) = f(2) = 1 \implies \boxed{f \text{ is not injective}} \\
f(1) = 1, f(\sqrt{ 2 }) = 0 \implies Im(f) = \Set{ 0, 1 } \implies \boxed{f \text{ is surjective}} \\
}
$$
## 6c
$$
\displaylines{
f: P(A) \to P(A), f(B) = A \setminus B \\
\\
\text{Solution:} \\
\text{If there are no two different elements in } P(A), \text{ then } f \text{ is obviously injective} \\
\text{Let } B_{1}, B_{2} \subseteq A, B_{1} \neq B_{2} \\
\underset{ b \text{ can be in } B_{1} \text{ or in } B_{2} }{ \implies } \exists b \in B_{1}: b \not\in B_{2} \\
b \in B_{1} \implies b \in A \implies b \in A \setminus B_{2} \\
b \in B_{1} \implies b \not\in A \setminus B_{1} \implies A \setminus B_{1} \neq A \setminus B_{2} \\
\implies [B_{1} \neq B_{2} \implies f(B_{1}) \neq f(B_{2})] \implies \boxed{\forall A: f \text{ is injective}} \\
\\
\text{Let } C \subseteq A \\
\exists B \subseteq A: B = A \setminus C \\
f(B) = A \setminus (A \setminus C) = C \\
\implies \boxed{\forall A: f \text{ is surjective}} \\
}
$$
## 6d
$$
\displaylines{
A \neq \emptyset, B \subset A \\
f: P(A) \to P(B), f(C) = C \cap B \\
\\
\text{Solution:} \\
A \cap B = B = B \cap B \\
f(A) = f(B) = B \implies \boxed{f \text{ is not injective}} \\
\text{Let } B_{1} \subseteq B \\
B_{1} \subseteq B \subset A \implies B_{1} \in P(A) \\
f(B_{1}) = B_{1} \cap B = B_{1} \\
\implies \boxed{f \text{ is surjective}} \\
}
$$
## 6e
$$
\displaylines{
A \neq \emptyset, B \subset A \\
f: P(B) \to P(A), f(C) = C \cup (A \setminus B) \\
\\
\text{Solution:} \\
\text{Let } C_{1}, C_{2} \subseteq B, C_{1} \neq C_{2} \\
\underset{ c \text{ can be in } C_{1} \text{ or in } C_{2} }{ \implies } \exists c \in C_{1}: c \not\in C_{2} \\
c \in C_{1} \implies c \in B \implies c \not\in A \setminus B \\
c \not\in C_{2} \implies c \not\in C_{2} \cup (A \setminus B) \\
c \in C_{1} \implies c \in C_{1} \cup (A \setminus B) \\
\implies C_{1} \cup (A \setminus B) \neq C_{2} \cup (A \setminus B) \\
\implies [C_{1} \neq C_{2} \implies f(C_{1}) \neq f(C_{2})] \implies \boxed{f \text{ is injective}} \\
\\
B \subset A \implies A \setminus B \neq \emptyset
\implies \forall X: X \cup (A \setminus B) \neq \emptyset \\
\emptyset \subseteq A \land \forall C \subseteq B: f(C) \neq \emptyset \implies \boxed{f \text{ is not surjective}} \\
}
$$
---

# 7
$$
\displaylines{
\text{Let } A \text{ be a set} \\
\text{Let } f: A \to \mathbb{N} \\
\text{Let } R \text{ be a relation} \text{ on A} \\
a R b \iff f(a) \leq f(b) \\
\text{Prove: } R \text{ is an order relation } \iff f \text{ is injective} \\
\\
\text{Proof:} \\
\text{Let } a, b, c \in A \\
R \text{ is reflexive}: a R a \iff f(a) \leq f(a) \equiv T \\
R \text{ is transitive}: a R b \land b R c \iff f(a) \leq f(b) \leq f(c) \implies f(a) \leq f(c) \implies a R c \\
\text{Let } a \neq b, f(a) = f(b) \\
f(a) = f(b) \land a \neq b \implies f(a) \leq f(b) \land f(b) \leq f(a) \land a \neq b \implies a R b \land b R a \land a \neq b \\
\implies R \text{ is not an order relation} \\
\implies [f \text{ is not injection} \implies R \text{ is not an order relation}] \\
\implies \boxed{R \text{ is an order relation} \implies f \text{ is injective}} & (1) \\
\\
\text{Let } a \neq b, a R b, b R a \\
a R b \land b R a \land a \neq b \implies f(a) \leq f(b) \land f(b) \leq f(a) \land a \neq b \implies f(a) = f(b) \land a \neq b \\
\implies f \text{ is not injective} \implies [R \text{ is not an order relation} \implies f \text{ is not injective}] \\
\implies \boxed{f \text{ is injective} \implies R \text{ is an order relation}} & (2) \\
(1) \land (2) \implies \boxed{R \text{ is an order relation} \iff f \text{ is injective}} \\
}
$$
---

# 8
$$
\displaylines{
\text{Let } A, B \text{ be finite sets} \\
}
$$
## 8a
$$
\displaylines{
\text{Let } f: A \to B \\
\text{Prove: } \lvert A \rvert = \lvert B \rvert \implies [f \text{ is injective} \iff \text{ f is surjective}] \\
\\
\text{Proof:} \\
\text{Let } \lvert A \rvert = \lvert B \rvert = n \\
\text{Let } f \text{ be injective} \\
\forall a_{1}, a_{2} \in A: a_{1} \neq a_{2} \implies f(a_{1}) \neq f(a_{2}) \\
\text{There are } n \text{ unique sources in } A \implies \text{ there are } n \text{ unique images in } B \\
\implies \lvert Im(f) \rvert = \lvert A \rvert = n \\
Im(f) \subseteq B \land \lvert Im(f) \rvert = n \implies Im(f) = B \implies \boxed{f \text{ is surjective}} & (1) \\
\text{Let } f \text{ be surjective} \\
\forall b \in B: \exists a \in A: f(a) = b \\
\text{Let } a_{1}, a_{2} \in A: a_{1} \neq a_{2} \land f(a_{1}) = f(a_{2}) \\
\text{Let } b \in B: b = f(a_{1}) = f(a_{2}) \\
\lvert A \setminus \Set{ a_{1}, a_{2} } \rvert = n - 2 \\
\lvert B \setminus \Set{ b } \rvert = n - 1 \\
\forall b_{1} \in B \setminus \Set{ b }: b_{1} \neq b \implies f(a_{1}) \neq b_{1} \neq f(a_{2}) \\
\implies \text{There are } n -1 \text{ distinct images that have at least one source each,} \\
\text{however there are only } n-2 \text{ distinct sources} \\
\implies \exists a \in A, \exists b_{1}, b_{2} \in B: f(a) = b_{1} = b_{2} \implies f \text{ is not to one} - \text{ Contradiction!} \\
\implies [\forall a_{1}, a_{2} \in A: a_{1} \neq a_{2} \implies f(a_{1}) \neq f(a_{2})] \implies \boxed{f \text{ is injective}} & (2) \\
(1) \land (2) \implies \boxed{f \text{ is injective} \iff f \text{ is surjective}} \\
}
$$
## 8b
$$
\displaylines{
\text{Let } f: A \to B \\
\text{Prove: } [\exists f: f \text{ is injective} \iff f \text{ is surjective}] \iff \lvert A \rvert = \lvert B \rvert \\
\\
\text{Proof:} \\
\text{As proved in 8a, } \forall f: \lvert A \rvert = \lvert B \rvert \implies [f \text{ is injective} \iff f \text{ is surjective}] \\
\implies \boxed{\lvert A \rvert = \lvert B \rvert \implies [\exists f: f \text{ is injective} \iff f \text{ is surjective}]} & (1) \\
\text{Let } \exists f: f \text{ is injective} \iff f \text{ is surjective} \\
\text{Let } \lvert A \rvert > \lvert B \rvert = n \\
A = \Set{ a_{1}, a_{2}, \dots, a_{n}, a_{n+1}, \dots }, B = \Set{ b_{1}, b_{2}, \dots, b_{n} } \\
\text{Let } \forall i \in [1, n]: f(a_{i}) = b_{i} \implies f \text{ is surjective} \\
\text{By our assumption, } f \text{ is also injective, but there is no } b_{n+1} \\
\implies \exists i \in [1, n]: f(a_{n+1}) = b_{i} \implies \exists i \in [1, n]: a_{i} \neq a_{n+1} \land f(a_{i}) = f(a_{n+1}) \\
\implies f \text{ is not injective} - \text{Contradiction!} \\
\implies \lvert A \rvert \not> \lvert B \rvert \\
\text{Let } n = \lvert A \rvert < \lvert B \rvert \\
A = \Set{ a_{1}, a_{2}, \dots, a_{n} }, B = \Set{ b_{1}, b_{2}, \dots, b_{n}, b_{n+1}, \dots } \\
\text{Let } \forall i \in [1, n]: f(a_{i}) = b_{i} \implies f \text{ is injective} \\
\text{By our assumption, } f \text{ is also surjective, but there is no } a_{n+1} \\
\implies \not\exists i \in [1, n]: f(a_{i}) = b_{n+1} \implies f \text{ is not surjective} - \text{Contradiction!} \\
\implies \lvert A \rvert \not< \lvert B \rvert \\
\lvert A \rvert \not> \lvert B \rvert \land \lvert A \rvert \not< \lvert B \rvert \implies \boxed{\lvert A \rvert = \lvert B \rvert} \\
\implies \boxed{[\exists f: f \text{ is injective} \iff f \text{ is surjective}] \implies \lvert A \rvert = \lvert B \rvert} & (2) \\
(1) \land (2) \implies \boxed{[\exists f: f \text{ is injective} \iff f \text{ is surjective}] \iff \lvert A \rvert = \lvert B \rvert} \\
}
$$
---

# 9
$$
\displaylines{
\text{Let } X = P(\mathbb{N} \times \mathbb{N}) \\
S \text{ on } X \text{ is defined as following:} \\
R_{1} S R_{2} \iff R_{1} \cup R_{2} \text{ is an equivalence relation} \\
}
$$
## 9a
$$
\displaylines{
\text{Is } S \text{ an equivalence relation on } X? \\
\\
\text{Solution:} \\
\text{Let } R_{1} \in X \\
R_{1} S R_{1} \iff R_{1} \cup R_{1} \text{ is an equivalence relation} \\
R_{1} \cup R_{1} = R_{1} \implies [S \text{ is reflexive} \iff R_{1} \text{ is an equivalence relation}] \\
X \text{ is a set of all relations on } \mathbb{N} \\
\text{Let } R = \Set{ (n, m) \in \mathbb{N} \times \mathbb{N} | n < m } \\
R \subseteq \mathbb{N} \times \mathbb{N} \implies R \in P(\mathbb{N} \times \mathbb{N}) \\
R \text{ is not reflexive} \implies R \text{ is not an equivalence relation} \\
\implies S \text{ is not reflexive} \implies \boxed{S \text{ is not an equivalence relation}} \\
}
$$
## 9b
$$
\displaylines{
\text{Prove: } (S \circ S) \text{ is an equivalence relation} \\
\\
\text{Proof:} \\
\text{Let us define } (S \circ S) \\
R_{1} (S \circ S) R_{2} \iff \exists R_{3}: R_{1} S R_{3} \land R_{3} S R_{2} \\
\iff \exists R_{3}: R_{1} \cup R_{3} \text{ is an equivalence relation} \land R_{3} \cup R_{2} \text{ is an equivalence relation} \\
\\
\forall R_{1}, R_{2} \in P(\mathbb{N} \times \mathbb{N}): R_{1} \cup \mathbb{N} \times \mathbb{N} = R_{2} \cup \mathbb{N} \times \mathbb{N} = \mathbb{N} \times \mathbb{N} - \text{ an equivalence relation} \\
\implies \forall R_{1}, R_{2} \in P(\mathbb{N} \times \mathbb{N}): R_{1} (S \circ S) R_{2} \implies S \text{ is full} \\
\implies \boxed{(S \circ S) \text{ is an equivalence relation}} \\
}
$$
---
