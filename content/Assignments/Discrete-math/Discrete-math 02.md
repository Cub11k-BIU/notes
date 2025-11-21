---
{"publish":true,"created":"16/11/24, 23:11","modified":"2025-11-21T21:10:02.038+02:00","tags":["Academia","Assignment","Discrete-math"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Which of the following is equivalent to the negation of the statement: } \\
\text{”For every chef, there exists a dish they make that is tasty."} \\
\\
C = \{ \text{ chef } \} \\
D = \{ \text{ dish } \} \\
M(c, d) = c \text{ makes } d \\
D_{c} = \{ d \mid d \in D \land M(c, d) \} \\
T(d) = d \text{ is tasty} \\
\text{Statement is: } \forall c \in C \exists d \in D_{c} : T(d) \\
\text{Negated statement is: } \\
\lnot(\forall c \in C \exists d \in D_{c} : T(d)) \equiv \boxed{\text{(h)}} \equiv \\
\equiv \exists c \in C \lnot(\exists d \in D_{c} : T(d)) \equiv \boxed{\text{(b)}} \equiv \\
\equiv \exists c \in C \forall d in D_{c} \lnot T(d) \equiv \boxed{\text{(f)}} \\
\boxed{\text{Answer: Statements (h), (b), (f)}} \\
}
$$
---

# 2
$$
\displaylines{
\text{Which of the following is equivalent to the negation of the proposition:} \\
\forall x \exists y \forall z (P(x,y,z) \land P(z,x,y)) \\
\\
\lnot (\forall x \exists y \forall z (P(x,y,z) \land P(z,x,y))) \equiv \\
\equiv \exists x \lnot(\exists y \forall z (P(x,y,z) \land P(z,x,y))) \equiv \\
\equiv \exists x \forall y \lnot(\forall z (P(x,y,z) \land P(z,x,y))) \equiv \boxed{(d)} \equiv \\
\equiv \exists x \forall y \exists z \lnot(P(x,y,z) \land P(z,x,y)) \equiv \\
\equiv \exists x \forall y \exists z (\lnot P(x,y,z) \lor \lnot P(z,x,y)) \equiv \boxed{(a)} \\
\boxed{\text{Answer: Statements (d), (a)}} \\
}
$$
---

# 3
$$
\displaylines{
Q \text{ over } \mathbb{R} \\
\text{Find a predicate $Q$ for which the statement} \\
(\forall x \exists y Q(x,y) \land \forall y \exists x Q(x, y)) \to \forall x \exists y (Q(x, y) \land Q(y, x)) \\
\text{is false} \\
\\
\boxed{Q(x, y) = x > y} \\
\\
\forall x \exists y Q(x, y) \equiv T \\
\forall x \exists y = x-1 : x > y \equiv T \\
\\
\forall y \exists x Q(x, y) \equiv T \\
\forall y \exists x = y + 1 : x > y \equiv T \\
\\
\forall x \exists y (Q(x, y) \land Q(y, x)) \equiv F \\
Q(x, y) \land Q(y, x) \equiv x > y \land y > x \equiv F \\
\\
(T \land T) \to F \equiv T \to F \equiv F \\
\text{Answer: } \boxed{Q(x, y) = x > y} \\
}
$$
---

# 4a
$$
\displaylines{
P(x, y) \text{ over } \mathbb{Z} \\
\\
\text{Disproof: } \\
S(x,y) \equiv \exists x \forall y P(x, y) \to \forall x \exists y P(x, y) \\
P(x, y) = (x > 0) \land (y > y - 1) \\
\exists x \forall y P(x, y) \equiv T \\
\forall x \exists y P(x, y) \equiv F \\
\implies \boxed{S(x,y) \equiv T \to F \equiv F} \\
}
$$
# 4b
$$
\displaylines{
P(x, y) \text{ over } \mathbb{Z} \\
\\
\text{Disproof: } \\
S(x, y) \equiv \forall x \exists y P(x, y) \to \exists x \forall y P(x, y) \\
P(x, y) = (y > 0) \land (x > x - 1) \\
\forall x \exists y P(x, y) \equiv T \\
\exists x \forall y P(x, y) \equiv F \\
\implies \boxed{S(x,y) \equiv T \to F \equiv F} \\
}
$$
# 4c
$$
\displaylines{
P(x), Q(x) \text{ over } \mathbb{Z} \\
\\
\text{Proof: } \\
S(x) \equiv \forall x (P(x) \land Q(x)) \to (\forall x P(x) \land \forall x Q(x)) \\
\text{Let } (\forall x P(x) \land \forall x Q(x)) \equiv F \\
\text{Then } \forall x P(x) \equiv F \text{ or } \forall x Q(x) \equiv F \\
\text{Then } \forall x (P(x) \land Q(x)) \equiv F \\
\text{Then the case where } \forall x (P(x) \land Q(x)) \equiv T \text{ and } (\forall x P(x) \land \forall x Q(x)) \equiv F \text{ is impossible} \\
\implies \boxed{S(x) \equiv \forall (P(x) \land Q(x)) \to \forall x P(x) \land \forall x Q(x) \equiv T} \\
}
$$
# 4d
$$
\displaylines{
P(x), Q(x) \text{ over } \mathbb{Z} \\
\\
S(x) \equiv (\forall x P(x) \land \forall x Q(x)) \to \forall x (P(x) \land Q(x)) \\
\\
\text{Proof:} \\
\text{Let } \forall x (P(x) \land Q(x)) \equiv F \\
\text{Then } \forall x P(x) \equiv F \text{ or } \forall x Q(x) \equiv F \\
\text{Which is equivalent to } (\forall x P(x) \land \forall x Q(x)) \equiv F \\
\text{Then the case where } (\forall x P(x) \land \forall x Q(x)) \equiv T \text{ and } \forall x (P(x) \land Q(x)) \equiv F \text{ is impossible} \\
\implies \boxed{S(x) \equiv (\forall x P(x) \land \forall x Q(x)) \to \forall x (P(x) \land Q(x)) \equiv T}
}
$$
---

# 5
$$
\displaylines{
P(x) \text{ over } \mathbb{Z} \\
\text{Prove or disprove: } S(P, a) \equiv \forall P(a) \exists a \in \mathbb{Z} : P(a) \to P(a+1) \\
\\
\text{Proof:} \\
\text{Let } S \equiv F : \\
\exists P(a) : \forall a : (P(a) \to P(a + 1)) \equiv F \iff (P(a) \equiv T) \land (P(a+1) \equiv F) \\
\text{Let } a = x \\
(P(a) \equiv P(x) \equiv T) \land (P(a+1) \equiv P(x+1) \equiv F) \\
\text{Now let } a = x + 1 \\
(P(a) \equiv P(x+1) \equiv T) \land (P(x+1) \equiv F) \\
\implies P(x + 1) \equiv T \equiv F \text{ - Contradiction!} \\
\implies S(P, a) \not\equiv F \implies \boxed{S(P, a) \equiv T} \\
}
$$
---

# 6
$$
\displaylines{
\text{Write an equivalent statement to the following without using negation:} \\
\lnot (\exists x \in \mathbb{Q}. \forall y \in \mathbb{Q}. ((y^{2} < 2 \to x > y) \land (\forall \varepsilon > 0. \exists z \in \mathbb{Q}. (z^{2} < 2 \land z > x - \varepsilon)))) \\
\equiv \forall x \in \mathbb{Q}. \lnot(\forall y \in \mathbb{Q}. ((y^{2} < 2 \to x > y) \land (\forall \varepsilon > 0. \exists z \in \mathbb{Q}. (z^{2} < 2 \land z > x - \varepsilon)))) \\
\equiv \forall x \in \mathbb{Q}. \exists y \in \mathbb{Q}. \lnot((y^{2} < 2 \to x > y) \land (\forall \varepsilon > 0. \exists z \in \mathbb{Q}. (z^{2} < 2 \land z > x - \varepsilon))) \\
\equiv \forall x \in \mathbb{Q}. \exists y \in \mathbb{Q}. (\lnot(y^{2} < 2 \to x > y) \lor \lnot(\forall \varepsilon > 0. \exists z \in \mathbb{Q}. (z^{2} < 2 \land z > x - \varepsilon))) \\
\equiv \forall x \in \mathbb{Q}. \exists y \in \mathbb{Q}. ((y^{2} < 2 \land x \leq y) \lor (\exists \varepsilon > 0. \lnot (\exists z \in \mathbb{Q}. (z^{2} < 2 \land z > x - \varepsilon)))) \\
\equiv \forall x \in \mathbb{Q}. \exists y \in \mathbb{Q}. ((y^{2} < 2 \land x \leq y) \lor (\exists \varepsilon > 0. \forall z \in \mathbb{Q}. \lnot(z^{2} < 2 \land z > x - \varepsilon))) \\
\equiv \boxed{\forall x \in \mathbb{Q}. \exists y \in \mathbb{Q}. ((y^{2} < 2 \land x \leq y) \lor (\exists \varepsilon > 0. \forall z \in \mathbb{Q}. (2 \leq z^{2} \lor z \leq x - \varepsilon)))} \\
}
$$
---

$$
\text{ In each of the following, find sets A, B, and C that satisfy the conditions of the clause:}
$$
# 7a
$$
\displaylines{
A \subseteq B, B \in C, A \not\in C \\
\boxed{A = \{ 1 \}, B = \{ 1,2 \}, C = \{ \{ 1,2 \} \}} \\
}
$$
# 7b
$$
\displaylines{
A \subseteq B, A \in C, B \not\in C \\
\boxed{A = \{ 1 \}, B = \{ 1, 2 \}, C = \{ \{ 1 \} \}} \\
}
$$
# 7c
$$
\displaylines{
A \in B, B \in C, A \not\in C \\
\boxed{A = \{ 1 \}, B = \{ \{ 1 \} \}, C = \{ \{ \{ 1 \} \} \}} \\
}
$$
# 7d
$$
\displaylines{
A \in B, B \in C, A \in C \\
\boxed{A = \{ 1 \}, B = \{ \{ 1 \} \}, C = \{ \{ 1 \}, \{ \{ 1 \} \} \}} \\
}
$$
# 7e
$$
\displaylines{
A \in B, A \subseteq B \\
\boxed{A = \{ 1 \}, B = \{ 1, \{ 1 \} \}} \\
}
$$
---

# 8a
$$
\displaylines{
\text{Prove or disprove: } \{ 2n-1 \mid n \in \mathbb{N} \} \subseteq \{ 2n+1 \mid n \in \mathbb{N} \} \\
\\
\text{Disproof:} \\
x = 1 \in \{ 2n-1 \mid n \in \mathbb{N} \} \\
x = 1 \not\in \{ 2n+1 \mid n \in \mathbb{N} \} \\
\implies \boxed{\{ 2n-1 \mid n \in \mathbb{N} \} \not\subseteq \{ 2n+1 \mid n \in \mathbb{N} \}} \\
}
$$
# 8b
$$
\displaylines{
\text{Prove or disprove: } \{ 2n-1 \mid n \in \mathbb{N} \} \supseteq \{ 2n+1 \mid n \in \mathbb{N} \} \\
\\
\text{Proof:} \\
\text{Let } x \in \{ 2n+1 \mid n \in \mathbb{N} \} \\
\text{Then } \exists m \in \mathbb{N} : x = 2m + 1 \\
\text{Let } n = m + 1 \\
n \text{ is a sum of two natural numbers, therefore } n \in \mathbb{N} \\
x = 2m + 1 = 2(n - 1) + 1 = 2n - 1 \\
\exists n \in \mathbb{N} : x = 2n - 1 \implies x \in \{ 2n-1 \mid n \in \mathbb{N} \} \\
\implies \{ 2n+1 \mid n \in \mathbb{N} \} \subseteq \{ 2n-1 \mid n \in \mathbb{N} \} \\
\iff \boxed{\{ 2n-1 \mid n \in \mathbb{N} \} \supseteq \{ 2n+1 \mid n \in \mathbb{N} \}}
}
$$
---
