---
{"publish":true,"created":"22/12/24, 11:12","modified":"2025-11-21T21:10:02.099+02:00","tags":["Academia","Assignment","Discrete-math"],"cssclasses":""}
---

# 1a
$$
\displaylines{
\text{If invertible, find the inverse of } f: \mathbb{Z} \to \mathbb{N}_{0}, f(n) = \lvert n \rvert \\
\\
\text{Solution:} \\
\text{Let } n \in \mathbb{N}_{0} \\
\mathbb{N}_{0} \subseteq \mathbb{Z} \\
\implies n \in \mathbb{Z} \implies \exists (-n) \in \mathbb{Z}: f(-n) = \lvert -n \rvert = n \implies f \text{ is surjective} \\
f(1) = f(-1) \implies f \text{ is not injective} \implies f \text{ is not bijective} \\
\implies \boxed{f \text{ is not invertible}} \\
}
$$
# 1b
$$
\displaylines{
\text{If invertible, find the inverse of } f: \mathbb{R} \to \mathbb{R}^{+}, f(x) = 10^{2-x} \\
\\
\text{Solution:} \\
\text{Let } f^{-1}: \mathbb{R}^{+} \to \mathbb{R}, f^{-1}(x) = 2 - \log(x) \\
\text{Let } x \in \mathbb{R}: (f^{-1} \circ f)(x) = f^{-1}(f(x)) = 2 - \log(10^{2-x}) = 2 - (2 - x) = x \\
\implies (f^{-1} \circ f) = Id_{\mathbb{R}} & (1) \\
\text{Let } x \in \mathbb{R}^{+}: (f \circ f^{-1})(x) = f(f^{-1}(x)) = 10^{2-(2 - \log(x))} = 10^{\log(x)} = x \\
\implies (f \circ f^{-1}) = Id_{\mathbb{R}^{+}} & (2) \\
(1) \land (2) \implies \boxed{f^{-1}: \mathbb{R}^{+} \to \mathbb{R}, f^{-1}(x) = 2 - \log(x) \text{ is an inverse of } f} \\
}
$$
---

# 2
$$
\displaylines{
\text{Let } A = \mathbb{R} \setminus \Set{ 1 } \\
}
$$
## 2a
$$
\displaylines{
f: A \to \mathbb{R}, f(x) = \frac{x+1}{x-1} \\
\text{Is $f$ injective? Is it surjective?} \\
\\
\text{Solution:} \\
\text{Let } x_{1}, x_{2} \in A \\
f(x_{1}) = f(x_{2}) \implies \frac{x_{1} + 1}{x_{1} - 1} = \frac{x_{2} + 1}{x_{2} - 1} \implies (x_{1} + 1)(x_{2} - 1) = (x_{2} + 1)(x_{1} - 1) \\
\implies x_{1}x_{2} + x_{2} - x_{1} - 1 = x_{1}x_{2} + x_{1} - x_{2} - 1 \implies 2x_{2} = 2x_{1} \implies x_{1} = x_{2} \\
\implies \boxed{f \text{ is injective}} \\
\forall x \in \mathbb{R}: x + 1 \neq x - 1 \implies f(x) = \frac{x + 1}{x-1} \neq 1 \in \mathbb{R} \implies \boxed{f \text{ is not surjective}} \\
}
$$
## 2b
$$
\displaylines{
f: A \to A, f(x) = \frac{x+1}{x-1} \\
\text{Prove that } f \text{ is invertible and find an inverse} \\
\\
\text{Proof:} \\
\text{Let } y \in A: f(x) = y \\
f(x) = \frac{x+1}{x-1} \implies y = \frac{x+1}{x-1} \implies yx - y = x+1 \\
\implies x = \frac{y + 1}{y-1} \\
\text{Let } f^{-1}: A \to A, f^{-1}(x) = \frac{x+1}{x-1} \\
(f^{-1} \circ f)(x) = \frac{\frac{x+1}{x-1} + 1}{\frac{x+1}{x-1} - 1} = \frac{\frac{x+1+x-1}{x-1}}{\frac{x+1-x+1}{x-1}} = \frac{2x}{2} = x \\
\implies \boxed{(f^{-1} \circ f) = Id_{A}} & (1) \\
(f \circ f^{-1})(x) = \frac{\frac{x+1}{x-1} + 1}{\frac{x+1}{x-1} - 1} = \frac{\frac{x+1+x-1}{x-1}}{\frac{x+1-x+1}{x-1}} = \frac{2x}{2} = x \\
\implies \boxed{(f \circ f^{-1}) = Id_{A}} & (2) \\
(1) \land (2) \implies \boxed{f^{-1} = f} \\
}
$$
---

# 3
$$
\displaylines{
\text{Let } f: A \to A \\
\text{Let } f^{n} = \underbrace{ (f \circ f \circ \dots \circ f) }_{ n \text{ times} } \text{ where } n \in \mathbb{N} \\
\text{Let } f^{0} = Id_{A} \\
}
$$
## 3a
$$
\displaylines{
\text{Prove: } [\exists n \in \mathbb{N}: \forall x \in A: f^{n}(x) = x] \implies f \text{ is invertible} \\
\\
\text{Proof:} \\
\exists n \in \mathbb{N}: \forall x \in A: f^{n} = (f^{n-1} \circ f) = (f \circ f^{n-1}) = Id_{A} \\
\implies f^{n-1} = f^{-1} \implies \boxed{f \text{ is invertible}} \\
}
$$
## 3b
$$
\displaylines{
\text{Prove: } \forall x \in A: \exists n \in \mathbb{N}: f^{n}(x) = x \implies f \text{ is invertible} \\
\\
\text{Proof:} \\
\text{Let } x_{1}, x_{2} \in A, f(x_{1}) = f(x_{2}) \\
\exists n, m \in \mathbb{N}: f^{n}(x_{1}) = x_{1}, f^{m}(x_{2}) = x_{2} \\
f(x_{1}) = f(x_{2}) \implies f^{n \cdot m-1}(f(x_{1})) = f^{n \cdot m-1}(f(x_{2})) \\
f^{n \cdot m - 1}(f(x_{1})) = f^{n \cdot m}(x_{1}) = (\underbrace{ f^{n} \circ f^{n} \circ \dots \circ f^{n} }_{ m \text{ times} })(x_{1}) = x_{1} \\
f^{n \cdot m - 1}(f(x_{2})) = f^{n \cdot m}(x_{2}) = (\underbrace{ f^{m} \circ f^{m} \circ \dots \circ f^{m} }_{ n \text{ times} })(x_{2}) = x_{2} \\
\implies x_{1} = x_{2} \implies \boxed{f \text{ is injective}} \\
\text{Let } y \in A \\
\exists n \in \mathbb{N}: f^{n}(y) = y \\
f^{n}(y) = f(f^{n-1}(y)) = y \implies \forall y \in A: \exists x = f^{n-1}(y) : f(x) = y \\
\implies \boxed{f \text{ is surjective}} \implies f \text{ is bijective} \implies \boxed{f \text{ is invertible}} \\
}
$$
---

# 4
$$
\displaylines{
\text{Let } g: \mathbb{N} \to \mathbb{N} \\
\text{Let } F: \mathbb{N}^{\mathbb{N}} \to \mathbb{N}^{\mathbb{N}}, F(f) = (g \circ f) \\
\text{Prove: } F \text{ is injective} \iff g \text{ is injective} \\
\\
\text{Proof:} \\
\text{Let } g \text{ be injective} \\
\text{Let } f_{1}, f_{2} \in \mathbb{N}^{\mathbb{N}} \\
F(f_{1}) = F(f_{2}) \implies (g \circ f_{1}) = (g \circ f_{2}) \implies \forall n \in \mathbb{N}: g(f_{1}(n)) = g(f_{2}(n)) \\
g \text{ is injective} \implies \forall n \in \mathbb{N}: f_{1}(n) = f_{2}(n) \implies f_{1} = f_{2} \implies F \text{ is injective} \\
\implies \boxed{g \text{ is injective} \implies F \text{ is injective}} & (1) \\
\text{Let } F \text{ be injective} \\
\text{Let } x_{1}, x_{2} \in \mathbb{N}: g(x_{1}) = g(x_{2}) \\
\text{Let } f_{1}, f_{2} \in \mathbb{N}^{\mathbb{N}}: f_{1}(n) = x_{1}, f_{2}(n) = x_{2} \\
\text{Let } n \in \mathbb{N} \\
F(f_{1})(n) = (g \circ f_{1})(n) = g(f_{1}(n)) = g(x_{1}) \\
F(f_{2})(n) = (g \circ f_{2})(n) = g(f_{2}(n)) = g(x_{2}) \\
g(x_{1}) = g(x_{2}) \implies \forall n \in \mathbb{N}: F(f_{1})(n) = F(f_{2})(n) \\
F(f_{1}) = F(f_{2}) \underset{ F \text{ is injective} }{ \implies } f_{1} = f_{2} \\
\implies \forall n \in \mathbb{N}: f_{1}(n) = f_{2}(n) \implies x_{1} = x_{2} \\
\implies g \text{ is injective} \implies \boxed{F \text{ is injective} \implies g \text{ is injective}} & (2) \\
(1) \land (2) \implies \boxed{F \text{ is injective} \iff g \text{ is injective}} \\
}
$$
---

# 5
$$
\displaylines{
\backsim \text{ on } \mathbb{N}^{\mathbb{N}} \\
f \backsim g \iff \exists k \in \mathbb{N}: \forall n > k: f(n) = g(n) \\
}
$$
## 5a
$$
\displaylines{
\text{Prove: } \backsim \text{ is an equivalence relation} \\
\\
\text{Proof:} \\
\text{Let } f \in \mathbb{N}^{\mathbb{N}} \\
\forall n > 1 \in \mathbb{N}: f(n) = f(n) \implies f \backsim f \implies \boxed{\backsim \text{ is reflexive}} \\
\text{Let } f, g \in \mathbb{N}^{\mathbb{N}} \\
f \backsim g \implies \exists k \in \mathbb{N}: \forall n > k: f(n) = g(n) \implies \exists k \in \mathbb{N}: \forall n > k: g(n) = f(n) \\
\implies g \backsim f \implies \boxed{\backsim \text{ is symmetric}} \\
\text{Let } f, g, h \in \mathbb{N}^{\mathbb{N}}, f \backsim g, g \backsim h \\
f \backsim g \implies \exists k_{1} \in \mathbb{N}: \forall n > k_{1}: f(n) = g(n) \\
g \backsim h \implies \exists k_{2} \in \mathbb{N}: \forall n > k_{2}: g(n) = h(n) \\
\implies \exists k = max(k_{1}, k_{2}): \forall n > k: f(n) = g(n) = h(n) \implies f \backsim h \\
\implies \boxed{\backsim \text{is transitive}} \\
\backsim \text{ is reflexive, symmetric and transitive} \implies \boxed{\backsim \text{ is an equivalence relation}} \\
}
$$
## 5b
$$
\displaylines{
\text{Find } g \in \mathbb{N}^{\mathbb{N}} \text{such that } \forall f \in [g]_{\backsim} : f \text{ is not surjective} \\
\\
\text{Solution:} \\
\boxed{\text{Let } g: \mathbb{N} \to \mathbb{N}, g(n) = 1} \\
f \backsim g \implies \exists k \in \mathbb{N}: \forall n > k: f(n) = g(n) = 1 \\
\text{Let } K = [k+1] \\
f(k+1) = 1 \implies f[K] = f[[k]] \cup \Set{ 1 } \\
\forall n > k: f(n) = 1 \implies Im(f) = f[[k]] \cup \Set{ 1 } = f[K] \\
f[K] \text{ is a finite set}, f[K] \subseteq \mathbb{N} \implies f[K] \subset \mathbb{N} \implies Im(f) \subset \mathbb{N} \\
\implies \boxed{f \text{ is not surjective}} \\
}
$$
---

# 6
$$
\displaylines{
\text{Let } A = \mathbb{R}^{\mathbb{R}} \\
R, S, T \text{ are relations on } A \\
}
$$
## 6a
$$
\displaylines{
f R g \iff (f \circ g) = (g \circ f) \\
\text{Determine and prove whether } R \text{ is an equivalence relation} \\
\\
\text{Disproof:} \\
\text{Let } f, g, h \in A \\
\text{Let } f(x) = x + 1 \\
\text{Let } g = Id_{\mathbb{R}} \\
\text{Let } h(x) = x^{3} \\
(g \circ f) = (f \circ g) = f \implies f R g \\
(h \circ g) = (g \circ h) = h \implies g R h \\
\text{Let } x = 1 \\
(h \circ f)(x) = (x+1)^{3} = 8, (f \circ h)(x) = x^{3} + 1 = 2 \\
\implies (h \circ f) \neq (f \circ h) \implies f \not R h \implies R \text{ is not transitive} \\
\implies \boxed{R \text{ is not an equivalence relation}} \\
}
$$
## 6b
$$
\displaylines{
f S g \iff \forall y \in \mathbb{R}: \exists x \in \mathbb{R}: (x > y) \land (f(x) = g(x)) \\
\text{Determine and prove whether } S \text{ is an equivalence relation} \\
\\
\text{Disproof:} \\
\text{Let } f(x) = \sin(x) \\
\text{Let } g(x) = 0 \\
\text{Let } h(x) = \sin(x) - 1 \\
\forall y \in \mathbb{R}: \exists x \in \mathbb{R}: x > y \land \sin(x) = 0 \implies f S g \\
\forall y \in \mathbb{R}: \exists x \in \mathbb{R}: x > y \land 0 = \sin(x) - 1 \implies g S h \\
\forall x \in \mathbb{R}: \sin(x) \neq \sin(x) - 1 \implies f \not S h \\
\implies S \text{ is not transitive} \implies \boxed{S \text{ is not an equivalence relation}} \\
}
$$
## 6c
$$
\displaylines{
f T g \iff \exists y \in \mathbb{R}: \forall x \in \mathbb{R}: (x > y) \to (f(x) = g(x)) \\
\text{Determine and prove whether } T \text{ is an equivalence relation} \\
\\
\text{Proof:} \\
\text{Let } f \in A \\
\forall f \in A: \forall x > 0 \in \mathbb{R}: f(x) = f(x) \implies f T f \implies \boxed{T \text{ is reflexive}} \\
\text{Let } f, g \in A: f T g \\
f T g \implies \exists y \in \mathbb{R}: \forall x \in \mathbb{R}: (x > y) \to (f(x) = g(x)) \\
\implies \exists y \in \mathbb{R}: \forall x \in \mathbb{R}: (x > y) \to (g(x) = f(x)) \implies g T f \implies \boxed{T \text{ is symmetric}} \\
\text{Let } f, g, h \in A: f T g, g T h \\
f T g \implies \exists y_{1} \in \mathbb{R}: \forall x \in \mathbb{R}: (x > y_{1}) \to (f(x) = g(x)) \\
g T h \implies \exists y_{2} \in \mathbb{R}: \forall x \in \mathbb{R}: (x > y_{2}) \to (g(x) = h(x)) \\
\implies \exists y = max(y_{1}, y_{2}): \forall x \in \mathbb{R}: [(x > y) \equiv (x > y_{1} \land x > y_{2})] \to (f(x) = g(x) = h(x)) \\
\implies f T h \implies \boxed{T \text{ is transitive}} \\
T \text{ is reflexive, symmetric and transitive} \implies \boxed{T \text{ is an equivalence relation}} \\
}
$$
---

# 7
$$
\displaylines{
\text{Let } f: A \to B \\
}
$$
## 7a
$$
\displaylines{
\text{Prove or disprove: } \forall X \subseteq A: f[X^{c}] \subseteq (f[X])^{c} \\
\\
\text{Disproof:} \\
\text{Let } A = B = \Set{ 1, 2, 3, 4 }, X = \Set{ 1, 2 }, f(x) = 1 \\
f[X^{c}] = f[\Set{ 3, 4 }] = \Set{ 1 } \\
f[X] = \Set{ 1 } \implies (f[X])^{c} = \Set{ 2, 3, 4 } \\
\implies \boxed{f[X^{c}] \not\subseteq (f[X])^{c}} \\
}
$$
## 7b
$$
\displaylines{
\text{Prove or disprove: } \forall X, Y \subseteq A: f[X \triangle Y] = f[X] \triangle f[Y] \iff f \text{ is injective} \\
\\
\text{Proof: } \\
\text{Let } \forall X, Y \subseteq A: f[X \triangle Y] = f[X] \triangle f[Y] \\
\text{Let } a_{1}, a_{2} \in A: f(a_{1}) = f(a_{2}) \\
\text{Let } X = \Set{ a_{1} }, Y = \Set{ a_{2} } \\
f[X \triangle Y] = f[X] \triangle f[Y] \\
f[X] \triangle f[Y] = f[\Set{ a_{1} }] \triangle f[\Set{ a_{2} }] = \Set{ f(a_{1}) } \triangle \Set{ f(a_{2}) } = \emptyset \\
\implies f[X \triangle Y] = \emptyset \implies X \triangle Y = \emptyset \implies a_{1} = a_{2} \\
\implies f \text{ is injective} \implies \boxed{\forall X, Y \subseteq A: f[X \triangle Y] = f[X] \triangle f[Y] \implies f \text{ is injective}} & (1) \\
}
$$
$$
\displaylines{
\text{Let } f \text{ be injective} \\
\text{Let } X, Y \subseteq A \\
\text{Let } y \in f[X \triangle Y] \\
\implies \exists x \in X \triangle Y: f(x) = y \\
\implies x \in (X \setminus Y) \cup (Y \setminus X) \\
\text{Let } x \in X \setminus Y \\
x \in X \implies y = f(x) \in f[X] \\
\text{Let } y \in f[Y] \implies \exists x_{1} \in Y: f(x_{1}) = y \\
f(x_{1}) = y = f(x) \underset{ f \text{ is injective} }{ \implies } x_{1} = x \not\in Y - \text{Contradiction!} \\
\implies x \not\in Y \underset{ f \text{ is injective} }{ \implies } y = f(x) \not\in f[Y] \implies y \in f[X] \land y \not\in f[Y] \\
\implies \boxed{y \in f[X] \triangle f[Y]} & [1] \\
\text{Let } x \in Y \setminus X \\
x \in Y \implies y = f(x) \in f[Y] \\
\text{Let } y \in f[X] \implies \exists x_{1} \in X: f(x_{1}) = y \\
f(x_{1}) = y = f(x) \underset{ f \text{ is injective} }{ \implies } x_{1} = x \not\in X - \text{Contradiction!} \\
\implies x \not\in X \underset{ f \text{ is injective} }{ \implies } y = f(x) \not\in f[X] \implies y \in f[Y] \land y \not\in f[X] \\
\implies \boxed{y \in f[X] \triangle f[Y]} & [2] \\
[1] \land [2] \implies \boxed{f[X \triangle Y] \subseteq f[X] \triangle f[Y]} & (2) \\
}
$$
$$
\displaylines{
\text{Let } y \in f[X] \triangle f[Y] \\
\implies y \in (f[X] \setminus f[Y]) \cup (f[Y] \setminus f[X]) \\
\text{Let } y \in f[X] \setminus f[Y] \\
y \in f[X] \implies \exists x \in X: f(x) = y \\
y \not\in f[Y] \implies \forall x \in Y: f(x) \neq y \implies [f(x) = y \to x \not\in Y] \\
\implies \exists x \in X \setminus Y : f(x) = y \implies \boxed{y \in f[X \triangle Y]} & [3] \\
\text{Let } y \in f[Y] \setminus f[X] \\
y \in f[Y] \implies \exists x \in Y: f(x) = y \\
y \not\in f[X] \implies \forall x \in X: f(x) \neq y \implies [f(x) = y \to x \not\in X] \\
\implies \exists x \in Y \setminus X : f(x) = y \implies \boxed{y \in f[X \triangle Y]} & [4] \\
[3] \land [4] \implies \boxed{f[X] \triangle f[Y] \subseteq f[X \triangle Y]} & (3) \\
(2) \land (3) \implies \boxed{\forall X, Y \subseteq A: f[X \triangle Y] = f[X] \triangle f[Y] \impliedby f \text{ is injective}} & (4) \\
\\
(1) \land (4) \implies \boxed{\forall X, Y \subseteq A: f[X \triangle Y] = f[X] \triangle f[Y] \iff f \text{ is injective}} \\
}
$$
## 7c
$$
\displaylines{
\text{Prove or disprove: } \forall X \subseteq A: X \subseteq f^{-1}[f[X]] \\
\\
\text{Proof:} \\
\text{Let } X \subseteq A \\
\text{Let } x \in X \\
x \in X \implies f(x) \in f[X] \implies x \in f^{-1}[f[X]] \\
\implies \boxed{X \subseteq f^{-1}[f[X]]} \\
}
$$
## 7d
$$
\displaylines{
\text{Prove or disprove: } \forall X \subseteq A: X = f^{-1}[f[X]] \iff f \text{ is injective} \\
\\
\text{Proof:} \\
\text{Let } f \text{ is injective} \\
\text{Let } a \in f^{-1}[f[X]] \\
a \in f^{-1}[f[X]] \implies f(a) \in f[X] \\
\text{Let } a_{1} \in A: f(a_{1}) = f(a) \\
f(a_{1}) = f(a) \in f[X] \implies a_{1} \in X \\
f \text{ is injective: } f(a_{1}) = f(a) \implies a_{1} = a \implies a \in X \\
\implies f^{-1}[f[X]] \subseteq X \\
\forall X \subseteq A: X \subseteq f^{-1}[f[X]] \land f^{-1}[f[X]] \subseteq X \implies \boxed{\forall X \subseteq A: f^{-1}[f[X]] = X} & (1) \\
\\
\text{Let } \forall X \subseteq A: f^{-1}[f[X]] = X \\
\text{Let } a_{1} \neq a_{2} \in A \\
\text{Let } X = \Set{ a_{1} } \\
f[X] = \Set{ f(a_{1}) } \\
f^{-1}[f[X]] = X \implies a_{2} \not\in f^{-1}[f[X]] \implies f(a_{2}) \not\in f[X] \implies f(a_{2}) \neq f(a_{1}) \\
\implies \boxed{f \text{ is injective}} & (2) \\
(1) \land (2) \implies \boxed{\forall X \subseteq A: X = f^{-1}[f[X]] \iff f \text{ is injective}} \\
}
$$
---
