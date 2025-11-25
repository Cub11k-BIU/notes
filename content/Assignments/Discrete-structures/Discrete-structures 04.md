---
{"publish":true,"created":"24/11/25, 16:43","modified":"2025-11-25T12:46:10.669+02:00","tags":["Academia","Assignment","Discrete-structures"],"cssclasses":""}
---

## 1
$$
\displaylines{
X \sim \aleph \\
}
$$
### 1a
$$
\displaylines{
\text{Calculate: } \abs{\mathbb{N} \times X} \\
\\
\text{Solution:} \\
X \sim \mathcal{P}(\mathbb{N}) \implies \mathbb{N} \times X \sim \mathbb{N} \times \mathcal{P}(\mathbb{N}) \subseteq \mathcal{P}(\mathbb{N})^{2} \sim \mathcal{P}(\mathbb{N}) \sim X \implies \mathbb{N} \times X \preccurlyeq X \\
X \sim \mathcal{P}(\mathbb{N}) \sim \mathcal{P}(\mathbb{N}) \times \Set{ 1 } \subseteq \mathcal{P}(\mathbb{N}) \times \mathbb{N} \sim \mathbb{N} \times \mathcal{P}(\mathbb{N}) \sim N \times X \implies X \preccurlyeq \mathbb{N} \times X \\
\implies \mathbb{N} \times X \sim X \implies \abs{N \times X} = \aleph \\
}
$$
### 1b
$$
\displaylines{
\text{Calculate: } \abs{\mathbb{N}^{X}} \\
\\
\text{Solution:} \\
X \sim \mathcal{P}(\mathbb{N}) \\
\implies \mathbb{N}^{X} \sim \mathbb{N}^{\mathcal{P}(\mathbb{N})} \sim \Set{ 0, 1 }^{\mathcal{P}(\mathbb{N})} \sim \mathcal{P}(\mathbb{R}) \implies \abs{\mathbb{N}^{X}} = 2^{\aleph} \\
}
$$
### 1c
$$
\displaylines{
\text{Calculate: } \abs{X^{\mathbb{N}}} \\
\\
\text{Solution:} \\
X \sim \mathcal{P}(\mathbb{N}) \\
\implies X^{\mathbb{N}} \sim \mathcal{P}(\mathbb{N})^{\mathbb{N}} \sim \mathcal{P}(\mathbb{N}) \implies \abs{X^{\mathbb{N}}} = \aleph \\
}
$$
### 1d
$$
\displaylines{
\text{Calculate: } \abs{\mathcal{P}(\mathbb{N})^{X}} \\
\\
\text{Solution:} \\
X \sim \mathcal{P}(\mathbb{N}) \\
\implies \mathcal{P}(\mathbb{N})^{X} \sim \mathcal{P}(\mathbb{N})^{\mathcal{P}(\mathbb{N})} \sim (\Set{ 0, 1 }^{\mathbb{N}})^{\mathcal{P}(\mathbb{N})} \sim \Set{ 0, 1 }^{\mathbb{N} \times \mathcal{P}(\mathbb{N})} \sim \Set{ 0, 1 }^{\mathcal{P}(\mathbb{N})} \\
\implies \abs{\mathcal{P}(\mathbb{N})^{X}} = 2^{\aleph} \\
}
$$
### 1e
$$
\displaylines{
\text{Calculate: } \abs{X^{\mathcal{P}(\mathbb{N})}} \\
\\
\text{Solution:} \\
X \sim \mathcal{P}(\mathbb{N}) \\
\implies X^{\mathcal{P}(\mathbb{N})} \sim \mathcal{P}(\mathbb{N})^{\mathcal{P}(\mathbb{N})} \sim \Set{ 0, 1 }^{\mathcal{P}(\mathbb{N})} \\
\implies \abs{X^{\mathcal{P}(\mathbb{N})}} = 2^{\aleph} \\
}
$$
## 2a
$$
\displaylines{
\text{Let } X = \Set{ f \in \Set{ 0, 1, 2 }^{\mathbb{N}} | \forall n \in \mathbb{N}: f(n) \neq f(n+1) } \\
\text{Prove: } X \text{ is not countable} \\
\\
\text{Proof:} \\
\text{Let } f: \mathbb{N} \to X, f(n) = f_{n} \\
\begin{array}{}
  & 0 & 1 & 2 & \dots \\
0 & f_{0}(0) & f_{0}(1) & f_{0}(2) \\
1 & f_{1}(0) & f_{1}(1) & f_{1}(2) \\
2 & f_{2}(0) & f_{2}(1) & f_{2}(2) \\
\vdots &  &  &  & \ddots \\
\end{array} \\
\text{Let } g: \forall n \in \mathbb{N}: g(n) = \begin{cases}
0 & f_{n}(n) = 2 \\
1 & f_{n}(n) = 0 \\
2 & f_{n}(n) = 1 \\
\end{cases} \\
\text{Let } n \in \mathbb{N} \\
f_{n} \in X \implies f_{n}(n) \neq f_{n}(n+1) \\
\implies \begin{cases}
g(n) = 1, g(n+1) = 2 & f(n) = 0, f(n+1) = 1 \\
g(n) = 1, g(n+1) = 0 & f(n) = 0, f(n+1) = 2 \\
g(n) = 2, g(n+1) = 1 & f(n) = 1, f(n+1) = 0 \\
g(n) = 2, g(n+1) = 0 & f(n) = 1, f(n+1) = 2 \\
g(n) = 0, g(n+1) = 1 & f(n) = 2, f(n+1) = 0 \\
g(n) = 0, g(n+1) = 2 & f(n) = 2, f(n+1) = 1 \\
\end{cases} \implies g(n) \neq g(n+1) \\
\implies g \in X \\
g(n) \neq f_{n}(n) \implies g \neq f_{n} \implies g \not\in f[\mathbb{N}] \implies f \text{ is not surjective} \\
\implies \mathbb{N} \precneqq X \\
}
$$
## 2b
$$
\displaylines{
F = (\mathbb{Q} \cap (0, 1))^{\mathbb{R}} \subseteq \mathbb{R}^{\mathbb{R}} \\
\text{Prove: } F \text{ is not countable} \\
\\
\text{Proof:} \\
\text{Let } f: \mathbb{N} \to F, f(n) = f_{n} \\
\text{Let } g: \forall x \in \mathbb{R}: g(x) = \begin{cases}
\frac{f_{x}(x)}{2} & x \in \mathbb{N} \\
\frac{1}{2} & \text{otherwise} \\
\end{cases} \\
\forall x \in \mathbb{R}: g(x) \in (0, 1) \cap \mathbb{Q} \implies g \in F \\
\forall n \in \mathbb{N}: g(n) = \frac{f_{n}(n)}{2} \neq f_{n}(n) \\
\implies g_{n} \not\in f[\mathbb{N}] \implies f \text{ is not surjective} \\
\implies \mathbb{N} \precneqq F \\
}
$$
### 2c
$$
\displaylines{
A \subseteq \mathbb{N} \text{ is called unbounded iff } \forall n \in \mathbb{N}: \exists n' \in A: n' > n \\
\text{Prove: } S = \Set{ A \subseteq \mathbb{N} | A \text{ is unbounded} } \text{ is uncountable} \\
\\
\text{Proof:} \\
\text{Let } f: \mathbb{N} \to S, f(n) = A_{n} \\
\text{Let } X = 2\mathbb{N} \cup \Set{ 2n - 1 \not\in A_{n} } \\
X \in S \\
\forall n \in \mathbb{N}: \begin{eqsys}
2n-1 \not\in A_{n} \implies 2n-1 \in X \\
2n-1 \in A_{n} \implies 2n-1 \not\in X \\
\end{eqsys} \implies X \neq A_{n} \\
\implies X \not\in f[\mathbb{N}] \implies f \text{ is not surjective} \\
\implies \mathbb{N} \precneqq S \\
}
$$
### 2d
$$
\displaylines{
F = \Set{ f \in \mathbb{R}^{\mathbb{R}} | \forall q \in \mathbb{Q}: f(q) = 0 } \\
\text{Prove: } F \text{ is uncountable} \\
\\
\text{Proof:} \\
\text{Let } f: \mathbb{N} \to F, f(n) = f_{n} \\
\text{Let } g: \forall x \in \mathbb{R}: g(x) = \begin{eqsys}
2 & f_{n}(x) = 1 \\
1 & f_{n}(x) \neq 1 \\
0 & x \in \mathbb{Q} \\
\end{eqsys} \\
g \in F, \forall n \in \mathbb{N}: f_{n}(x) = 1 \implies g(x) = 2 \implies g \neq f_{n} \\
\implies g \not\in f[\mathbb{N}] \implies f \text{ is nor surjective} \\
\implies \mathbb{N} \precneqq F \\
}
$$
## 3
$$
\displaylines{
\text{Let } A \text{ be a set of polygons on } \mathbb{R}^{2} \\
\forall a' \in A, a' \not\subseteq \bigcup_{a \neq a' \in A} a : \forall a \in A: \abs{\Set{ a } \setminus \bigcup_{a \neq a' \in A} a} = \varepsilon > 0 \\
\text{In other words, each polygon in $A$ has a unique surface of size } \varepsilon > 0 \\
}
$$
### 3a
$$
\displaylines{
\text{Prove or disprove: } A \sim \mathbb{N} \\
\\
\text{Proof:} \\
\text{Let } \forall a \in A: s_{a} \text{ be the unique surface of } a \\
\abs{s_{a}} = \varepsilon > 0 \implies \text{We can inscribe a non-empty circle into } s_{a} \\
\text{Let } S_{B} = \Set{ B((x_{0}, y_{0}), r) | \exists a \in A: B \text{ is inscribed into } s_{a} } \\
\text{Clearly, } S_{B} \text{ is an infinite set of disjoint circles} \\
\implies S_{B} \sim \mathbb{N} \text{ (as proved in assignment 2 using density of $\mathbb{Q}$ in $\mathbb{R}$)} \\
\text{Let } f: A \to S_{B}, f(a) = B((x_{0}, y_{0}), r) \text{ inscribed into } s_{a} \\
f \text{ is injective} \implies A \preccurlyeq S_{B} \preccurlyeq \mathbb{N} \implies A \sim \mathbb{N} \\
}
$$
### 3b
$$
\displaylines{
\text{Prove or disprove: } \exists S = \Set{ \text{polygons whose edges are disjoint in all points} } : S \sim \mathcal{P}(\mathbb{N}) \\
\\
\text{Proof:} \\
\text{Let } P_{r} \text{ be a square polygon parallel to xOy axes with edges of length } r \\
\text{and its center at } (0, 0) \\
\text{Let } r_{1} < r_{2} \in \mathbb{R} \\
\implies \begin{eqsys}
X_{P_{r_{1}}} = \frac{r_{1}}{2} < \frac{r_{2}}{2} = X_{P_{r_{2}}} \\
- X_{P_{r_{1}}} = -\frac{r_{1}}{2} > -\frac{r_{2}}{2} = -X_{P_{r_{2}}} \\
Y_{P_{r_{1}}} = \frac{r_{1}}{2} < \frac{r_{2}}{2} = Y_{P_{r_{2}}} \\
- Y_{P_{r_{1}}} = -\frac{r_{1}}{2} > -\frac{r_{2}}{2} = -Y_{P_{r_{2}}} \\
\end{eqsys} \implies \text{Edges of } P_{r_{1}}, P_{r_{2}} \text{ are disjoint} \\
\text{Let } S = \Set{ P_{r} | r \in (0, 1) } \\
\text{Let } f: (0, 1) \to S, f(r) = P_{r} \\
f \text{ is clearly bijective} \implies S \sim (0, 1) \sim \mathbb{R} \sim \mathcal{P}(\mathbb{N}) \implies \abs{S} = \aleph \\
}
$$
## 4
$$
\displaylines{
\text{Hourglass is a polygon consisting of two identical triangles} \\
\text{joined in a shape of an hourglass} \\
\text{Let } S \text{ be an infinite set of hourglasses whose edges are disjoint} \\
\text{Prove: } S \sim \mathbb{N} \\
\\
\text{Proof:} \\
\text{Let } \forall H \in S: q_{a} \neq q_{b} \in \mathbb{Q}^{2} : q_{a} \text{ lies in the first triangle and } q_{b} \text{ lies in the second} \\
\text{We can always choose such points by inscribing a circle into each of the triangles,} \\
\text{similarly to previous question} \\
\text{Let } H_{1}, H_{2} \text{ be two different hourglasses} \\
\text{Case 1. Hourglasses are fully disjoint, i.e. one is not inside the other} \\
\implies \text{All four circles in four triangles are disjoint} \implies \text{All four points are different} \\
\text{Case 2. Hourglasses intersect} \\
\text{If } H_{2} \text{ is not fully inside one of the triangles of } H_{1}, \text{their edges intersect} \\
\implies H_{2} \text{ is fully inside one of the triangles of } H_{1} \\
\implies q_{a_{2}} \neq q_{b_{2}} \text{ are both different from } q_{b_{1}} \\
\text{As there is only one point in each triangle, only one of } q_{a_{2}}, q_{b_{2}} \text{ can be equal to } q_{a_{1}} \\
\implies (q_{a_{1}}, q_{b_{1}}) \neq (q_{a_{2}}, q_{b_{2}}) \\
\implies \text{There exists an injective function } f: S \to (\mathbb{Q}^{2})^{2}, f(H) = (q_{a}, q_{b}) \\
\implies S \preccurlyeq (\mathbb{Q}^{2})^{2} \sim \mathbb{Q}^{4} \sim \mathbb{Q} \sim \mathbb{N} \implies S \sim \mathbb{N} \\
}
$$
