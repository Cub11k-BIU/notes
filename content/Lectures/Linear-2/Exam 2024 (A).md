---
{"publish":true,"created":"21/07/25, 12:07","modified":"2026-01-06T16:44:32.685+02:00","tags":["Academia","Lecture","Linear-2"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Formulate and prove unitarity criterion} \\
}
$$
# 2a
$$
\displaylines{
\text{Let } T: \mathbb{R}_{2}[x] \to \mathbb{R}_{2}[x] \text{ be a linear operator} \\
T(p(x)) = p(x) + p(x+1) \\
\text{Find Jordan form of } T \\
\\
\text{Solution:} \\
p(x) = a + bx + cx^{2} \\
T(p(x)) = p(x) + p(x+1) = a + bx + cx^{2} + a + b(x+1) + c(x^{2}+2x+1) = \\
= (2a + b + c) + (2b+2c)x + 2cx^{2} \\
\implies T(1) = 2, T(x) = 2x + 1, T(x^{2}) = 2x^{2} + 2x + 1 \\
\implies A = [T]^{S}_{S} = \begin{pmatrix}
2 & 1 & 1 \\
0 & 2 & 2 \\
0 & 0 & 2 \\
\end{pmatrix} \\
\implies P_{T}(x) = (x-2)^{3} \\
A-2I = \begin{pmatrix}
0 & 1 & 1 \\
0 & 0 & 2 \\
0 & 0 & 0 \\
\end{pmatrix}, (A-2I)^{2} \neq 0 \implies m_{T}(x) = (x-2)^{3} \\
\implies \text{Maximal size of Jordan block is } 3 \\
\implies \boxed{ J_{T} = \begin{pmatrix}
2 & 1 & 0 \\
0 & 2 & 1 \\
0 & 0 & 2 \\
\end{pmatrix} } \\
}
$$
# 2b
$$
\displaylines{
\text{Let } \langle a+bx+cx^{2}, \alpha+\beta x+\gamma x^{2} \rangle = a\alpha + b\beta x + c\gamma x^{2} \\
\text{Find vector } v \in \mathrm{Im}T \text{ which is the closest to  } 1 - x^{2} \\
\\
\text{Solution:} \\
\mathrm{Im}T = \Set{ (2a+b+c) + (2b+2c)x + 2cx^{2} | a, b, c \in \mathbb{R} } \\
\text{Let } \left\{\begin{array}{}
a = \frac{1}{2} \\
b = \frac{1}{2} \\
c = -\frac{1}{2} \\
\end{array}\right. \\
\implies T(a + bx + cx^{2}) = T\left( \frac{1}{2} + \frac{1}{2}x - \frac{1}{2}x^{2} \right) = 1 - x^{2} \\
\implies 1 - x^{2} \in \mathrm{Im}T \implies \boxed{ \text{The closest vector to } 1-x^{2} \text{ in } \mathrm{Im}T \text{ is $1-x^{2}$ itself} } \\
}
$$
# 3a
$$
\displaylines{
\text{Let } T: V \to V \text{ be a linear operator such that} T = -T^{*} \\
\text{Let } \lambda \text{ be an eigenvalue of } T \\
\text{Prove: } \exists b \in \mathbb{R}: \lambda = bi \\
\\
\text{Proof:} \\
\text{Let } v \text{ be an eigenvector of eigenvalue } \lambda \\
\text{Let } a, b \in \mathbb{R}: \lambda = a + bi \\
Tv = \lambda v \implies -T^{*}v = \lambda v \implies T^{*}v = -\lambda v \\
\implies -\lambda \text{ is an eigenvalue of } T^{*} \\
\implies \overline{\lambda} = -\lambda \implies a - bi = -a - bi \\
\implies a = -a \implies a = 0 \implies \boxed{ \lambda = bi } \\
}
$$
# 3b
$$
\displaylines{
\text{Let } V \text{ be an inner product space over } \mathbb{C} \\
\text{Let } U, W \text{ be subspaces of } V \\
\text{Let } P_{U}, P_{W} \text{ be orthogonal projections on } U \text{ and } W \text{ accordingly} \\
\text{Prove: } P_{U}P_{W} = 0 \iff \forall u \in U, \forall w \in W: \langle u, w \rangle = 0 \\
\\
\text{Proof:} \\
\boxed{ \impliedby } \text{ Let } \forall u \in U, \forall w \in W: \langle u, w \rangle = 0 \\
\implies W = U^{\perp} \\
\text{Let } v \in V \\
\implies \text{Let } u^{\perp} = P_{W}(v) \\
W = U^{\perp} \implies u^{\perp} \in U^{\perp} \\
\implies \forall v \in V: P_{U}P_{W}(v) = P_{U}P_{U^{\perp}}(v) = P_{U}(u^{\perp}) = 0 \implies \boxed{ P_{U}P_{W} = 0 } \\
\\
\boxed{ \implies } \text{ Let } P_{U}P_{W} = 0 \\
\implies \forall v \in V: P_{U}P_{W}(v) = 0 \\
\implies \forall v \in V: P_{W}(v) \in U^{\perp} \\
\implies \forall w \in W: w = P_{W}(w) \in U^{\perp} \\
\implies W \subseteq U^{\perp} \implies \boxed{ \forall u \in U, \forall w \in W: \langle u, w \rangle = 0 } \\
}
$$
# 4a
$$
\displaylines{
\text{Let } A, B \in \mathbb{R}^{3 \times 3} \\
\text{Let } v_{1}, v_{2}, v_{3} \in \mathbb{R}^{3} \text{ linearly independent vectors which are all both eigenvector of } A \text{ and } B \\
\text{Prove or disprove: } \forall P: A = PD_{A}P^{-1} \implies B = PD_{B}P^{-1} \\
\\
\text{Disproof:} \\
\text{Let } A = I \\
\text{Let } v_{1}, v_{2}, v_{3} = e_{1}, e_{2}, e_{3} \\
\text{Let } B = \begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 0 \\
\end{pmatrix} \\
v_{1}, v_{2}, v_{3} \text{ are both eigenvectors of } A \text{ and } B \\
\text{Let } v = v_{1} + v_{2} + v_{3} \\
Av = v_{1} + v_{2} + v_{3} = v \implies v \text{ is an eigenvector of } A \\
Bv = v_{1} + v_{2} \neq v \implies v \text{ is not an eigenvector of } B \\
\text{Let } P = \begin{pmatrix}
\overset{ | }{ \underset{ | }{ v_{1} } } & \overset{ | }{ \underset{ | }{ v_{2} } } & \overset{ | }{ \underset{ | }{ v } } \\
\end{pmatrix} \\
A = P\underbrace{ D_{A} }_{ =I }P^{-1} \\
B \neq P\underbrace{ D_{B} }_{ =B }P^{-1} \\
}
$$
# 4b
$$
\displaylines{
\text{Let } A \in \mathbb{C}^{n \times n} \\
\text{Let } A^{2} = I \\
\text{Prove or disprove: } A \text{ is unitary} \\
\\
\text{Disproof:} \\
A^{2} = I \implies A^{-1} = A \\
A \text{ is not necessarily Hermitian} \implies \text{Not necessarily } A^{-1} = A^{*} \\
\text{Let us find an example:} \\
A = \begin{pmatrix}
1 & 1 \\
0 & -1 \\
\end{pmatrix} \\
A^{2} = \begin{pmatrix}
1 & 0 \\
0 & 1 \\
\end{pmatrix} = I \\
A^{*} = \begin{pmatrix}
1 & 0 \\
1 & -1 \\
\end{pmatrix} \neq A^{-1} \\
}
$$
# 4c
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Prove or disprove: } A \text{ is diagonalizable} \implies A^{T} \text{ is diagonalizable} \\
\\
\text{Proof:} \\
\text{Let } A \text{ be diagonalizable by matrix } P \\
\implies A = PDP^{-1} \\
\implies A^{T} = (PDP^{-1})^{T} = (P^{-1})^{T}DP^{T} \\
PP^{-1} = I \implies (PP^{-1})^{T} = I \implies (P^{-1})^{T}P^{T} = I \\
\implies \boxed{ A^{T} \text{ is diagonalizable by matrix } P^{T} } \\
}
$$
# 5
$$
\displaylines{
\text{Let } V \text{ be a vector space over } \mathbb{F} \\
\text{Let } T: V \to V \text{ be a linear operator} \\
\text{Let } \alpha \text{ be an eigenvalue of } T \\
\text{Let } K_{\alpha} = \ker((T-\alpha I)^{n}) = \Set{ v \in V | (T-\alpha I)^{n}(v) = 0 } \\
}
$$
## 5a
$$
\displaylines{
\text{Let } T \text{ be nilpotent over } \mathbb{C} \\
\text{Prove: } K_{0} = V \\
\\
\text{Proof:} \\
T \text{ is nilpotent} \implies \text{Its eigenvalues are all } 0 \\
\implies \alpha = 0 \implies K_{\alpha} = K_{0} = \Set{ v \in V | T^{n}(v) = 0 } \\
\text{Let } B \text{ be a basis of } V \\
P_{T}(x) = P_{[T]^{B}_{B}}(x) = x^{n} \\
\implies \text{By Cayley-Hamilton theorem: } ([T]^{B}_{B})^{n} = 0 \\
\implies T^{n} = 0 \implies \boxed{ K_{0} = \ker T^{n} = V } \\
}
$$
## 5b
$$
\displaylines{
\text{Let } T \text{ be a linear operator over } \mathbb{C} \text{ with a single eigenvalue } \alpha \\
\text{Prove: } K_{\alpha} = V \\
\\
\text{Proof:} \\
\text{Let } B \text{ be a basis of } V \\
\alpha \text{ is the only eigenvalue of } T \implies P_{T}(x) = (x-\alpha)^{n} \\
\implies \text{By Cayley-Hamilton theorem, } ([T]^{B}_{B} - \alpha I)^{n} = 0 \\
[\alpha I]^{B}_{B} = \alpha I \implies [T]^{B}_{B} - \alpha I = [T]^{B}_{B} - [\alpha I]^{B}_{B} = [T-\alpha I]^{B}_{B} \\
\implies ([T-\alpha I]^{B}_{B})^{n} = 0 \implies (T - \alpha I)^{n} = 0 \implies \boxed{ K_{\alpha} = \ker ((T-\alpha I)^{n}) = V } \\
}
$$
## 5c
$$
\displaylines{
\text{Let } T \text{ be a linear operator over } \mathbb{C} \\
\text{Let } \alpha, \mu \text{ be two different eigenvalues of } T \\
}
$$
#### 1
$$
\displaylines{
\text{Let } v \in K_{\alpha} \\
\text{Prove: } (T-\mu I)(v) \in K_{\alpha} \\
\\
\text{Proof:} \\
(T-\mu I)(T-\alpha I) = T^{2} - \mu T - \alpha T + \alpha\mu I \\
(T-\alpha I)(T-\mu I) = T^{2} - \alpha T - \mu T + \alpha\mu I \\
\implies (T-\mu I)(T-\alpha I) = (T-\alpha I)(T-\mu I) \\
(T-\alpha I)^{n}((T-\mu I)(v)) = (T-\alpha I)^{n}(T-\mu I)(v) = \\
= (T-\mu I)(T-\alpha I)^{n}(v) = (T-\mu I)(0) = 0 \\
\implies \boxed{ (T-\mu I)(v) \in \ker((T-\alpha I)^{n}) = K_{\alpha} } \\
}
$$
#### 2
$$
\displaylines{
\text{Let } v \neq 0 \in K_{\alpha} \\
\text{Prove: } (T-\mu I)(v) \neq 0 \\
\\
\text{Proof:} \\
\text{Let } (T-\mu I)(v) = 0 \implies T(v) = \mu v \\
v \in K_{\alpha} \implies (T-\alpha I)^{n}(v) = 0 \\
TI = IT \\
\implies (T-\alpha I)^{n}(v) = \left( \sum_{k=0}^{n} \binom{n}{k}T^{k}(-\alpha I)^{n-k} \right)(v) = \left( \sum_{k=0}^{n} \binom{n}{k}(-\alpha)^{n-k}T^{k} \right)(v) = \\
= \sum_{k=0}^{n} \binom{n}{k}(-\alpha)^{n-k}T^{k}(v) = \sum_{k=0}^{n} \binom{n}{k}(-\alpha)^{n-k}\mu^{k}v = (\mu-\alpha)^{n}v = 0 \\
v \neq 0 \implies (\mu-\alpha)^{n} = 0 \implies \mu = \alpha -\text{Contradiction!} \\
\implies \boxed{ (T-\mu I)(v) \neq 0 } \\
}
$$
#### 3
$$
\displaylines{
\text{Prove: } K_{\alpha} \cap K_{\mu} = \Set{ 0 } \\
\\
\text{Proof:} \\
\text{Let } v \in K_{\alpha} \cap K_{\mu} \\
\implies (T-\alpha I)^{n}(v) = 0 = (T-\mu I)^{n}(v) \\
\text{Let } v \neq 0 \\
\implies (T-\mu I)(v) \neq 0 \in K_{\alpha} \\
\implies \text{By Induction: } (T-\mu I)^{n}(v) \neq 0 \in K_{\alpha} -\text{Contradiction!} \\
\implies v = 0 \implies \boxed{ K_{\alpha} \cap K_{\mu} = \Set{ 0 } } \\
}
$$
