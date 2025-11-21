---
{"publish":true,"created":"24/11/24, 12:11","modified":"2025-11-21T21:10:02.247+02:00","tags":["Academia","Assignment","Infi-1"],"cssclasses":""}
---

# 1a
$$
\displaylines{
\text{Prove or disprove: For every non-empty subset of real numbers} \\
\text{there is at least one upper bound or at least one lower bound} \\
\\
\text{Disproof:} \\
\text{Let } S = \mathbb{R} \\
S \neq \emptyset, S \subseteq \mathbb{R} \\
\forall M \exists x = M+1 : x \in S \land x > M \implies \boxed{\not\exists M : \forall x \in S: x \leq M} \\
\forall m \exists x = m-1 : x \in S \land x < m \implies \boxed{\not\exists m : \forall x \in S: x \geq m} \\
}
$$
# 1b
$$
\displaylines{
\text{Prove or disprove: For every non-empty subset of real numbers,} \\
\text{if there is at least one upper bound, then there is at least one lower bound} \\
\\
\text{Disproof:} \\
\text{Let } S = \{ x \in \mathbb{R} \mid x < 0 \} \\
S \neq \emptyset, S \subseteq \mathbb{R} \\
\exists M = 0 : \forall x \in S : x \leq M \\
\forall m \exists x = m-1 : x \in S \land x < m \implies \boxed{\not\exists m : \forall x \in S : x \geq m} \\
}
$$
# 1c
$$
\displaylines{
\text{Prove or disprove: For every non-empty subset of real numbers,} \\
\text{if there is at least one lower bound, then there is at least one upper bound} \\
\\
\text{Disproof:} \\
\text{Let } S = \{ x \in \mathbb{R} \mid x > 0 \} \\
S \neq \emptyset, S \subseteq \mathbb{R} \\
\exists m=0 : \forall x \in S : x \geq m \\
\forall M \exists x = M+1: x \in S \land x > M \implies \boxed{\not\exists M : \forall x \in S : x \leq M} \\
}
$$
# 1d
$$
\displaylines{
\text{Prove or disprove: For every non-empty subset of rational numbers} \\
\text{with a maximum, there is a rational upper bound.}
\\
\\
\text{Proof:} \\
\text{Let } S \neq \emptyset, S \subseteq \mathbb{Q} \\
\text{Let } M_{S} = max(S) \\
M_{S} \in S, S \subseteq \mathbb{Q} \implies M \in \mathbb{Q} \\
\text{Let } M = M_{S}, \text{ note that } M \in \mathbb{Q} \\
M = max(S) \implies \forall x \in S: x \leq M \\
\implies \boxed{\exists M \in \mathbb{Q} : \forall x \in S : x \leq M} \\
}
$$
# 1e
$$
\displaylines{
\text{There exists a non-empty subset of real numbers} \\
\text{whose upper bound is equal to its lower bound} \\
\\
\text{Proof:} \\
\text{Let } S = \{ 0 \} \\
S \neq \emptyset, S \subseteq \mathbb{R} \\
\text{Let } M = m = 0 \\
\forall x \in S: 0 = m \leq x \leq M = 0 \\
\implies \boxed{\exists m = M : \forall x \in S: m \leq x \leq M} \\
}
$$
# 1f
$$
\displaylines{
\text{There exists a non-empty subset of real numbers} \\
\text{whose upper bound is equal to its lower bound and which has no maximum} \\
\\
\text{Disproof:} \\
\text{Let } S \neq \emptyset, S \subseteq \mathbb{R} \\
\exists m, M = m : \forall x \in S: m \leq x \leq M \\
\implies \exists m, M = m : \forall x \in S: x = m = M \implies M \in S \\
\implies \exists M \in S : \forall x \in S : x \leq M \iff \boxed{\exists max(S)} \\
}
$$
---

# 2
$$
\displaylines{
\text{Given: } A \subseteq \mathbb{R}, A \text{ has an upper-bound} \\
\text{Prove or disprove: } B = \{ -a \mid a \in A \} \implies B \text{ has a lower-bound}, inf(B) = -sup(A) \\
\\
\text{Proof:} \\
A \text{ has an upper-bound} \implies \exists sup(A) \\
\text{Let } sup(A) = M \\
\iff \forall \varepsilon > 0 \exists M : (\forall a \in A: a \leq M) \land (\exists a \in A: a > M - \varepsilon) \\
\iff \forall \varepsilon > 0 \exists m = -M : (\forall a \in A: m \leq -a) \land (\exists a \in A: -a < m + \varepsilon) \\
\iff \forall \varepsilon > 0 \exists m = -M : (\forall b \in B: m \leq b) \land (\exists b \in B : b < m + \varepsilon) \\
\iff \boxed{\exists inf(B), inf(B) = -M = -sup(A)} \\
\exists inf(B) \implies \boxed{B \text{ has a lower-bound}} \\
}
$$
---

# 3
$$
\displaylines{
\text{Given: } A, B \subseteq \mathbb{R} \text{ have upper-bounds} \\
\text{Prove or disprove: } A+B = \{ a+b \mid a \in A, b \in B \} \\ \implies A+B \text{ has an upper-bound}, sup(A+B) = sup(A) + sup(B) \\
\\
\text{Proof:} \\
A \text{ has an upper-bound} \implies \exists sup(A) \\
\iff \forall \varepsilon > 0 \exists M_{A} : (\forall a \in A: a \leq M_{A}) \land (\exists a \in A: a > M_{A}-\varepsilon) \\
B \text{ has an upper-bound} \implies \exists sup(B) \\
\iff \forall \varepsilon > 0: \exists M_{B} : (\forall b \in B: b \leq M_{B}) \land (\exists b \in B: b > M_{B}-\varepsilon) \\
\\
\text{Let } sup(A) = M_{A}, sup(B) = M_{B} \\
(\exists sup(A) \land \exists sup(B)) \iff \forall \varepsilon > 0 \exists M_{A}, M_{B} :\\
(\forall a \in A, \forall b \in B: a \leq M_{A} \land b \leq M_{B}) \land (\exists a \in A, b \in B: a > M_{A} - \varepsilon \land b > M_{B} - \varepsilon) \\
\\
\iff \forall \varepsilon > 0 \exists M_{A}, M_{B} : \\
(\forall a \in A, \forall b \in B: a+b \leq M_{A}+M_{B}) \land (\exists a \in A, b \in B: a+b > M_{A}+M_{B}-2\varepsilon) \\
\\
\iff \forall \varepsilon_{1} = 2\varepsilon > 0 \exists M=M_{A}+M_{B} : \\
(\forall a+b \in A+B: a+b \leq M) \land (\exists a+b \in A+B: a+b > M - \varepsilon_{1}) \\
\\
\iff \boxed{\exists sup(A+B), sup(A+B) = M_{A}+M_{B} = sup(A)+sup(B)} \\
\exists sup(A+B) \implies \boxed{A+B \text{ has an upper-bound}} \\
}
$$
---

# 4a
$$
A = \left\{  \frac{1}{4} - \left( \frac{1}{3} \right)^{n} \mid n \in \mathbb{N} \right\} = \left\{  \frac{1}{4} - \frac{1}{3^{n}} \mid n \in \mathbb{N}  \right\}
$$
$$
\displaylines{
\text{Let us prove that } sup(A) = \frac{1}{4} \\
\forall n \in \mathbb{N}: \frac{1}{3^{n}} > 0 \implies \forall n \in \mathbb{N}: \frac{1}{4} - \frac{1}{3^{n}} \leq \frac{1}{4} \\
\forall n \in \mathbb{N}: 3^{n} > n \quad , \quad \forall r \in \mathbb{R}: \exists n \in \mathbb{N}: n > r \\
\implies \forall \varepsilon > 0 \exists n \in \mathbb{N}: 3^{n} > n > \frac{1}{\varepsilon} \iff \forall \varepsilon > 0 \exists n \in \mathbb{N}: \frac{1}{4} - \frac{1}{3^{n}} > \frac{1}{4} - \varepsilon \\
\implies \boxed{sup(A) = \frac{1}{4}} \\
\text{Let us also prove that } \not\exists max(A) \\
\exists max(A) \iff \exists M \in A: \forall a \in A: a \leq M \\
\text{Let } \exists max(A) = x, x \in A \\
\text{Then } \exists n \in \mathbb{N}: x = \frac{1}{4} - \frac{1}{3^{n}} \\
\text{Let } m = n + 1 \\
m \in \mathbb{N} \implies \frac{1}{4} - \frac{1}{3^{m}} \in A \\
\frac{1}{4} - \frac{1}{3^{m}} = \frac{1}{4} - \frac{1}{3^{n+1}} > \frac{1}{4} - \frac{1}{3^{n}} \\
\implies \exists m \in \mathbb{N}: a_{m} \in A \land a_{m} > x \\
\implies x \neq max(A) - \text{Contradiction!} \implies \boxed{\not\exists max(A)} \\
\\
\text{Let } a_{n} = \frac{1}{4} - \frac{1}{3^{n}} \\
\forall n \in \mathbb{N}: \\
a_{n+1} > a_{n} \iff \frac{1}{4} - \frac{1}{3^{n+1}} > \frac{1}{4} - \frac{1}{3^{n}} \\
\iff \frac{-1}{3^{n+1}} > \frac{-1}{3^{n}} \iff \frac{1}{3\cdot 3^{n}} < \frac{1}{3^{n}} \\
\iff \frac{1}{3} < 1 \\
\implies \text{Sequence } a_{n} \text{ is monotonically ascending} \implies \exists min(a_{n}) = a_{1} \\
a_{1} = \frac{1}{4} - \frac{1}{3} = \frac{-1}{12} \implies \exists min(a_{n}) = \frac{-1}{12} \\
min(a_{n}) = \boxed{min(A) = \frac{-1}{12}} \\
\exists min(A) \implies \boxed{inf(A) = min(A) = \frac{-1}{12}} \\
}
$$
# 4b
$$
\displaylines{
B = \left\{  \frac{3n-1}{n} \mid n \in \mathbb{N} \right\} = \left\{  3-\frac{1}{n} \mid n \in \mathbb{N} \right\}\\
\text{Let } b_{n} = 3 - \frac{1}{n} \\
\forall n \in \mathbb{N}: \\
b_{n+1} > b_{n} \iff 3 - \frac{1}{n+1} > 3 - \frac{1}{n} \iff \frac{1}{n+1} < \frac{1}{n} \iff n+1 > n \\
\iff 1 > 0 \\
\implies \text{ Sequence } b_{n} \text{ is monotonically ascending} \\
\implies \lim_{ n \to \infty } b_{n} = sup(b_{n}) = sup(B) \\
\lim_{ n \to \infty } b_{n} = \lim_{ n \to \infty } 3-\frac{1}{n} = \lim_{ n \to \infty } 3 - \lim_{ n \to \infty } \frac{1}{n} = 3 - 0 = 3 \\
\implies sup(b_{n}) = \boxed{sup(B) = 3} \\
\text{Let us also prove that } \not\exists max(B) \\
\exists max(B) \iff \exists M \in B: \forall b \in B: b \leq M \\
\text{Let } \exists max(B) = x, x \in B \\
\text{Then } \exists n \in \mathbb{N}: x = 3 - \frac{1}{n} \\
\text{Let } m = n + 1 \\
m \in \mathbb{N} \implies 3 - \frac{1}{m} \in A \\
3 - \frac{1}{m} = 3 - \frac{1}{n+1} > 3 - \frac{1}{n} \\
\implies \exists m \in \mathbb{N}: b_{m} \in B \land b_{m} > x \\
\implies x \neq max(B) - \text{Contradiction!} \implies \boxed{\not\exists max(B)} \\
\\
b_{n} \text{ is a monotonically ascending sequence} \implies \exists min(b_{n}) = b_{1} \\
b_{1} = 3 - \frac{1}{1} = 2 \\
\implies \exists min(b_{n}) = 2 \\
min(b_{n}) = \boxed{min(B) = 2} \\
\exists min(B) \implies \boxed{inf(B) = min(B) = 2} \\
}
$$
# 4c
$$
\displaylines{
C = \{ (-1)^{n} \cdot n \mid n \in \mathbb{N} \} \\
\text{Let us prove that } C \text{ has no upper-bound and thus } \not\exists max(C), \not\exists sup(C) \\
C \text{ has an upper-bound} \iff \exists M: \forall c \in C: c \leq M \\
\text{Let } x \text{ be an upper-bound of } C \\
\forall r \in \mathbb{R} \exists n \in \mathbb{N} : n \geq \lceil r \rceil + 1 > r \\
\implies \exists n, m = 2n \in \mathbb{N} : (-1)^{m}\cdot m = 2n > n \geq \lceil x \rceil + 1 > x \\
\implies \exists c \in C: c > x \implies x \text{ is not an upper-bound - Contradiction1} \\
\implies C \text{ has no upper-bound} \implies \boxed{\not\exists max(C), \not\exists sup(C)} \\
\\
\text{Let us also prove that } C \text{ has no lower-bound and thus } \not\exists min(C), \not\exists inf(C) \\
C \text{ has a lower-bound} \iff \exists m: \forall c \in C: c \geq m \\
\text{Let } x \text{ be a lower-bound of } C \\
\forall r \in \mathbb{R} \exists n \in \mathbb{N} : -n \leq \lceil r \rceil - 1 < r \\
\implies \exists n, m = 2n+1 \in \mathbb{N} : (-1)^{m}\cdot m = -2n-1 < -n \leq \lceil x \rceil - 1 < x \\
\implies \exists c \in C: c < x \implies x \text{ is not a lower-bound - Contradiction1} \\
\implies C \text{ has no lower-bound} \implies \boxed{\not\exists min(C), \not\exists inf(C)} \\
}
$$
# 4d
$$
\displaylines{
D = \left\{  n + \frac{1}{m} \mid n,m \in \mathbb{N}  \right\} \\
\text{Let us prove that } D \text{ has no upper-bound and thus } \not\exists max(D), \not\exists sup(D) \\
D \text{ has an upper-bound} \iff \exists M: \forall d \in D: d \leq M \\
\text{Let } x \text{ be an upper-bound of } D \\
\forall r \in \mathbb{R} \exists n \in \mathbb{N} : n \geq \lceil r \rceil + 1 > r \\
\implies \exists n,m=1 \in \mathbb{N}: n + \frac{1}{m} > n \geq \lceil x \rceil + 1 > x \\
\implies \exists d \in D: d > x \implies x \text{ is not an upper-bound - Contradiction!} \\
\implies D \text{ has no upper-bound} \implies \boxed{\not\exists max(D), \not\exists sup(D)} \\
\\
\text{Let us prove that } \not\exists min(D), inf(D) = 1 \\
\text{Let } x \in D \\
\text{Then } \exists n,m \in \mathbb{N}: x = n + \frac{1}{m} \\
x = n + \frac{1}{m} > n + \frac{1}{2m} \in D \\
\implies \forall x \in D \exists d \in D : d < x \\
\implies \boxed{\not\exists min(D)} \\
\text{Let } \exists inf(D) = 1 \\
\text{Then } \forall \varepsilon > 0: \underbrace{ (\forall d \in D: d \geq 1) }_{ True, n \geq 1, \frac{1}{m} > 0 } \land (\exists d \in D: d < 1+\varepsilon) \\
\text{Let } n = 1, m = \left\lceil  \frac{1}{\varepsilon}  \right\rceil + 1 \\
n \in \mathbb{N}, m \in \mathbb{N} \implies d = n + \frac{1}{m} \in D \\
d = 1 + \frac{1}{\left\lceil  \frac{1}{\varepsilon}  \right\rceil + 1} \leq 1 + \frac{1}{\frac{1}{\varepsilon} + 1} < 1 + \frac{1}{\frac{1}{\varepsilon}} = 1 + \varepsilon \\
\implies \forall \varepsilon > 0 \exists d \in D: d < 1 + \varepsilon \iff \boxed{inf(D) = 1} \\
}
$$
---
