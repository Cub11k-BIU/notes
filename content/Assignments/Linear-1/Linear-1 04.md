---
{"publish":true,"created":"28/11/24, 14:11","modified":"2025-11-21T21:10:02.543+02:00","tags":["Academia","Assignment","Linear-1"],"cssclasses":""}
---

# 1
$$
\displaylines{
A = \begin{pmatrix}
-4 & -2 & -4 \\
-5 & -3 & 2 \\
3 & 4 & 1 \\
\end{pmatrix} \\
\text{Find } PLU \text{ decomposition of } A \\
\\
\text{Solution:} \\
\left(\begin{array}{c|c|c}
A & I & I \\
\end{array}\right) = \left(\begin{array}{ccc|ccc|ccc}
-4 & -2 & -4 & 1 & 0 & 0 & 1 & 0 & 0 \\
-5 & -3 & 2 & 0 & 1 & 0 & 0 & 1 & 0 \\
3 & 4 & 1 & 0 & 0 & 1 & 0 & 0 & 1 \\
\end{array}\right) \\
\overset{ R_{3} \leftrightarrow R_{1} }{ \to } \left(\begin{array}{ccc|ccc|ccc}
3 & 4 & 1 & 1 & 0 & 0 & 0 & 0 & 1 \\
-5 & -3 & 2 & 0 & 1 & 0 & 0 & 1 & 0 \\
-4 & -2 & -4 & 0 & 0 & 1 & 1 & 0 & 0 \\
\end{array}\right) \\
\overset{ R_{2}+\frac{5}{3}R_{1} }{ \underset{ R_{3}+\frac{4}{3}R_{1} }{ \to } } \left(\begin{array}{ccc|ccc|ccc}
3 & 4 & 1 & 1 & 0 & 0 & 0 & 0 & 1 \\
0 & \frac{11}{3} & \frac{11}{3} & -\frac{5}{3} & 1 & 0 & 0 & 1 & 0 \\
0 & \frac{10}{3} & -\frac{8}{3} & -\frac{4}{3} & 0 & 1 & 1 & 0 & 0 \\
\end{array}\right) \\
\overset{ R_{3} - \frac{10}{11}R_{2} }{ \to } \left(\begin{array}{ccc|ccc|ccc}
3 & 4 & 1 & 1 & 0 & 0 & 0 & 0 & 1 \\
0 & \frac{11}{3} & \frac{11}{3} & -\frac{5}{3} & 1 & 0 & 0 & 1 & 0 \\
0 & 0 & -6 & -\frac{4}{3} & \frac{10}{11} & 1 & 1 & 0 & 0 \\
\end{array}\right) \\
P = \begin{pmatrix}
0 & 0 & 1 \\
0 & 1 & 0 \\
1 & 0 & 0 \\
\end{pmatrix}, L = \begin{pmatrix}
1 & 0 & 0 \\
-\frac{5}{3} & 1 & 0 \\
-\frac{4}{3} & \frac{10}{11} & 1 \\
\end{pmatrix}, U = \begin{pmatrix}
3 & 4 & 1 \\
0 & \frac{11}{3} & \frac{11}{3} \\
0 & 0 & -6 \\
\end{pmatrix} \\
}
$$
---
# 2
$$
\displaylines{
P = \begin{pmatrix}
0 & 0 & 1 \\
1 & 0 & 0 \\
0 & 1 & 0 \\
\end{pmatrix}, L = \begin{pmatrix}
1 & 0 & 0 \\
2 & 1 & 0 \\
4 & -1 & 1 \\
\end{pmatrix}, U = \begin{pmatrix}
4 & -3 & 2 \\
0 & 4 & 1 \\
0 & 0 & 8 \\
\end{pmatrix} \\
\text{Solve } Ax = \begin{pmatrix}
1 \\
2 \\
3 \\
\end{pmatrix} \\
\\
\text{Solution:} \\
Ax = \begin{pmatrix}
1 \\
2 \\
3 \\
\end{pmatrix} \implies PAx = P \begin{pmatrix}
1 \\
2 \\
3 \\
\end{pmatrix} = \begin{pmatrix}
3 \\
1 \\
2 \\
\end{pmatrix}\\
\implies LUx = \begin{pmatrix}
3 \\
1 \\
2 \\
\end{pmatrix}, Ux = \tilde{x} \\
\implies L\tilde{x} = \begin{pmatrix}
3 \\
1 \\
2 \\
\end{pmatrix} \implies \tilde{x} = \begin{pmatrix}
3 \\
-5 \\
-15 \\
\end{pmatrix} \\
\implies Ux = \begin{pmatrix}
3 \\
-5 \\
-15 \\
\end{pmatrix} \implies x = \begin{pmatrix}
\frac{141}{128} \\
-\frac{25}{32} \\
-\frac{15}{8} \\
\end{pmatrix} \\
}
$$
---
$$
\text{Matrix is called nilpotent, if } A, A^{2}, A^{3}, \dots, A^{k-1} \neq 0, A^{k} = 0 \\
$$
# 3a
$$
\displaylines{
\text{Prove: For all nilpotent matrices } A: \exists B \neq 0: AB = 0 \\
\\
\text{Proof:} \\
A^{k} = 0 \implies A \cdot A^{k-1} = 0, A^{k-1} \neq 0 \implies \boxed{\exists B = A^{k-1} \neq 0 : AB = 0} \\
}
$$
# 3b
$$
\displaylines{
\text{Prove: For all nilpotent matrices } A: \not\exists A^{-1} \\
\\
\text{Proof:} \\
\text{Let } \exists A^{-1} \\
\text{Then } A^{k} \cdot A^{-1} = A^{k-1} \cdot AA^{-1} = A^{k-1}I = A^{k-1} \\
A^{k} \cdot A^{-1} = 0, A^{k-1} \neq 0 - \text{Contradiction!} \implies \boxed{\not\exists A^{-1}} \\
}
$$
---

# 4a
$$
\displaylines{
W = \Set{ A \in \mathbb{R}^{n \times n} | \exists k \in \Set{ 0 } \cup \mathbb{N}: A^{k} = 0 } \\
\text{Prove or disprove: } W \text{ is a vector subspace of vector space } V = \mathbb{R}^{n \times n} \\
\\
\text{Disproof:} \\
\text{Let } n = 2 \\
\text{Let } A = \begin{pmatrix}
0 & 1 \\
0 & 0 \\
\end{pmatrix}, B = \begin{pmatrix}
0 & 0 \\
1 & 0 \\
\end{pmatrix} \\
A^{2} = B^{2} = 0 \implies A, B \in W \\
A + B = \begin{pmatrix}
0 & 1 \\
1 & 0 \\
\end{pmatrix} \text{ which is an invertible matrix} \implies A + B \not\in W \\
\implies \boxed{ W \text{ is not a vector subspace of } V } \\
}
$$
# 4b
$$
\displaylines{
W = \Set{ A \in \mathbb{R}^{n \times n} | \exists P \in \mathbb{R}^{n \times n}: P^{-1}AP = 0 } \\
\text{Prove or disprove: } W \text{ is a vector subspace of vector space } V = \mathbb{R}^{n \times n} \\
\\
\text{Proof:} \\
P^{-1}AP = 0 \iff PP^{-1}APP^{-1} = P\cdot 0^{n \times n} \cdot P^{-1} \\
\iff IAI = 0 \iff A = 0 \implies W = \Set{ 0 } \implies \boxed{W \text{ is a vector subspace of } V} \\
}
$$
# 4c
$$
\displaylines{
W = \Set{ A \in \mathbb{R}^{n \times n} | AA^{T} = I } \\
\text{Prove or disprove: } W \text{ is a vector subspace of vector space } V = \mathbb{R}^{n \times n} \\
\\
\text{Disproof:} \\
0^{T} = 0 \implies 0 \cdot 0^{T} = 0 \cdot 0 = 0 \neq I \implies 0 \not\in W \\
\implies \boxed{W \text{ is not a vector subspace of } V} \\
}
$$
# 4d
$$
\displaylines{
V = \Set{ f: \mathbb{R} \to \mathbb{R} | f \text{ is a function} } \\
W = \Set{ f \in V: f(1) = f(2) } \\
\text{Prove or disprove: } W \text{ is a vector subspace of vector space } V \\
\\
\text{Proof:} \\
1. \quad 0_{V} : f(x) = 0 \implies f(1) = 0, f(2) = 0 \implies f(1) = f(2) \implies 0_{V} \in W \\
2. \quad \text{Let} f(x) = (f_{1} + \alpha f_{2})(x) = f_{1}(x) + \alpha f_{2}(x) \\
f(1) = f_{1}(1) + \alpha f_{2}(1) = f_{1}(2) + \alpha f_{2}(2) \\
f(2) = f_{1}(2) + \alpha f_{2}(2) = f(1) \implies (f_{1} + \alpha f_{2})(x) \in W \\
\implies \boxed{W \text{ is a vector subspace of } V} \\
}
$$
# 4e
$$
\displaylines{
W = \Set{ \begin{pmatrix}
x \\
y \\
z \\
\end{pmatrix} \in \mathbb{R}^{3} | \left\{\begin{array}{}
x+y+z=0 \\
2x+y+z=0 \\
\end{array}\right.} \\
\text{Prove or disprove: } W \text{ is a vector subspace of } V = \mathbb{R}^{3} \\
\\
\text{Proof: } \\
1. \quad \begin{pmatrix}
0 \\
0 \\
0 \\
\end{pmatrix} : \left\{\begin{array}{}
0 + 0 + 0 = 0 \\
2 \cdot 0 + 0 + 0 = 0 \\
\end{array}\right. \implies 0 \in W \\
2. \quad w_{1} + \alpha w_{2} = \begin{pmatrix}
x_{1} + \alpha x_{2} \\
y_{1} + \alpha y_{2} \\
z_{1} + \alpha z_{2} \\
\end{pmatrix} \\
\left\{\begin{array}{}
\underbrace{ x_{1} + y_{1} + z_{1} }_{ =0 } + \underbrace{ \alpha x_{2} + \alpha y_{2} + \alpha z_{2} }_{ = \alpha \cdot 0 = 0 } = 0 \\
\underbrace{ 2x_{1} + y_{1} + z_{1} }_{ =0 } + \underbrace{ 2 \alpha x_{2} + \alpha y_{2} + \alpha z_{2} }_{ = \alpha \cdot 0 = 0 } = 0 \\
\end{array}\right. \implies w_{1} + \alpha w_{2} \in W \\
\implies \boxed{W \text{ is a vector subspace of } V} \\
}
$$
# 4f
$$
\displaylines{
W = \Set{ A \in \mathbb{R}^{n \times n} | \exists \alpha \in \mathbb{R}: A^{T} = \alpha A } \\
\text{Prove or disprove: } W \text{ is a vector subspace of } V = \mathbb{R}^{n \times n} \\
\\
\text{Disproof:} \\
1. \quad 0^{T} = 0 \implies \forall \alpha \in \mathbb{R}: 0^{T} = \alpha \cdot 0 \implies 0 \in W \\
2. \quad X = (W_{1} + \alpha W_{2}) \\
X^{T} = W_{1}^{T} + \alpha(W_{2}^{T}) = \alpha_{1} W_{1} + \alpha \cdot \alpha_{2} W_{2} \\
\text{Let } W_{1} = \begin{pmatrix}
0 & 1 \\
-1 & 0 \\
\end{pmatrix}, W_{2} = \begin{pmatrix}
0 & 1 \\
1 & 0 \\
\end{pmatrix} \\
W_{1}^{T} = -W_{1} \implies W_{1} \in W \\
W_{2}^{T} = W_{2} \implies W_{2} \in W \\
W_{1} + 2W_{2} = \begin{pmatrix}
0 & 3 \\
1 & 0 \\
\end{pmatrix} \neq (W_{1}+2W_{2})^{T} \implies (W_{1} + 2W_{2}) \not\in W \\
\implies \boxed{W \text{ is not a vector subspace of } V} \\
}
$$
# 4g
$$
\displaylines{
\alpha \in \mathbb{R}, W_{\alpha} = \Set{ A \in \mathbb{R}^{n \times n} | A^{T} = \alpha A } \\
\text{Prove or disprove: } W_{\alpha} \text{ is a vector subspace of } V = \mathbb{R}^{n \times n} \\
\\
\text{Proof:} \\
1. \quad 0^{T} = 0 \implies \forall \alpha \in \mathbb{R}: 0^{T} = \alpha \cdot 0 \implies 0 \in W \\
2. \quad X = W_{1} + \alpha W_{2} \\
X^{T} = W_{1}^{T} + \beta(W_{2}^{T}) = \alpha W_{1} + \beta \cdot \alpha W_{2} = \alpha X \\
\implies (W_{1} + \alpha W_{2}) \in W \implies \boxed{W \text{ is a vector subspace of } V} \\
}
$$
# 4h
$$
\displaylines{
\alpha \in \mathbb{R}, W_{\alpha} = \Set{ p(x) \in \mathbb{R}_{n}[x] | p'(x) = \alpha p(x + \alpha^{2}) } \\
\text{Prove or disprove: } W_{\alpha} \text{ is a vector subspace of } V = \mathbb{R}_{n}[x] \\
\\
\text{Proof:} \\
1. \quad p_{0}' = 0 = \alpha \cdot \underbrace{ p_{0}(x + \alpha^{2}) }_{ = 0 } \implies 0 \in W \\
2. \quad p(x) = p_{1}(x) + \beta p_{2}(x) \\
p'(x) = (p_{1}(x) + \beta p_{2}(x))' = p_{1}'(x) + \beta p_{2}'(x) = \alpha p_{1}(x+\alpha^{2}) + \alpha \cdot \beta p_{2}(x + \alpha^{2}) = \\
= \alpha(p(x + \alpha^{2})) \\
\implies (p_{1}(x) + \beta p_{2}x) \in W \implies \boxed{W \text{ is a vector subspace of } V} \\
}
$$
# 4i
$$
\displaylines{
W = \Set{ A \in \mathbb{C}^{n \times n} | A = A^{*} } \\
\text{Prove or disprove: } W \text{ is a vector subspace of } V = \mathbb{C}^{n \times n} \\
\\
\text{Disproof:} \\
\text{Let } n = 2 \\
\text{Let } A = \begin{pmatrix}
1 & 0 \\
0 & 1 \\
\end{pmatrix}, B = \begin{pmatrix}
0 & -i \\
i & 0 \\
\end{pmatrix} \\
A^{*} = A, B^{*} = \begin{pmatrix}
0 & i^{*} \\
(-i)^{*} & 0 \\
\end{pmatrix} = \begin{pmatrix}
0 & -i \\
i & 0 \\
\end{pmatrix} = B \\
\implies A, B \in W \\
A + iB = \begin{pmatrix}
1 & 1 \\
-1 & 1 \\
\end{pmatrix} \\
(A+iB)^{*} = \begin{pmatrix}
1 & -1 \\
1 & 1 \\
\end{pmatrix} \neq A + iB \implies A + iB \not\in W \\
\implies \boxed{ W \text{ is not a vector subspace of } V } \\
}
$$
---
