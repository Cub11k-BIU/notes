---
{"publish":true,"created":"08/04/25, 10:04","modified":"2025-11-21T21:10:14.502+02:00","tags":["Academia","Lecture","Linear-2"],"cssclasses":""}
---

## Polynomial division #theorem 
$$
\displaylines{
\text{Let } f(x), g(x) \in \mathbb{F}[x]: \deg(f(x)) \geq \deg(g(x)) \\
\text{Then } \exists q(x), r(x) \in \mathbb{F}[x]: \left\{\begin{array}{}
f(x) = q(x)g(x) + r(x) \\
\deg(r(x)) < \deg(g(x)) \\
\end{array}\right. \\
}
$$
## Divisibility of polynomial #lemma 
$$
\displaylines{
\text{Let } f(x) \in \mathbb{F}[x] \\
\text{Let } \alpha \in \mathbb{F} \\
\text{Then } (x-\alpha) \mid f(x) \iff f(\alpha) = 0 \\
\\
\text{Proof:} \\
\boxed{ \impliedby } \text{ Let } f(\alpha) = 0 \\
\deg(f(x)) \geq 1 = deg(x-\alpha) \\
\implies \exists q(x), r(x) \in \mathbb{F}[x]: \left\{\begin{array}{}
f(x) = q(x)(x-\alpha) + r(x) \\
\deg(r(x)) < 1 \\
\end{array}\right. \implies r(x) = \beta \\
f(\alpha) = q(\alpha) \cdot 0 + r(\alpha) = 0 \implies r(\alpha) = 0 \implies r(x) = 0 \\
\implies f(x) = q(x)(x-\alpha) \implies \boxed{ (x-\alpha) \mid f(x) } \\
\\
\boxed{ \implies } \text{ Let } (x-\alpha) \mid f(x) \\
\implies \exists q(x) \in \mathbb{F}[x]: f(x) = q(x)(x-\alpha) \\
\implies \boxed{ f(\alpha) = q(\alpha) \cdot 0 = 0 } \\
}
$$
## Algebraic and geometric multiplicities limits #lemma 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Let } \alpha \in \mathbb{F} \text{ be an eigenvalue of } A \\
\text{Then } 1 \leq \mu_{A}(\alpha), \gamma_{A}(\alpha) \leq n \\
\\
\text{Proof:} \\
\exists v \neq 0: (\alpha I-A)v = 0 \implies N(\alpha I-A) \neq 0 \\
\implies \gamma_{A}(\alpha) = \dim(N(\alpha I-A)) \geq 1 \\
A \in \mathbb{F}^{n \times n} \implies N(\alpha I-A) \subseteq \mathbb{F}^{n} \implies \dim(N(\alpha I-A)) \leq n \\
\implies \boxed{ 1 \leq \gamma_{A}(\alpha) \leq n } \\
(\lambda-\alpha)^{\mu_{A}(\alpha)} \mid P_{A}(\lambda) \\
\implies \deg((\lambda-\alpha)^{\mu_{A}(\alpha)}) \leq \deg(P_{A}(\lambda)) = n \implies \mu_{A}(\alpha) \leq n \\
P_{A}(\alpha) = 0 \implies (\lambda-\alpha) \mid P_{A}(\lambda) \\
\implies \mu_{A}(\alpha) \geq 1 \implies \boxed{ 1 \leq \mu_{A}(\alpha) \leq n } \\
}
$$
## Geometric multiplicity is at most algebraic multiplicity #theorem 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Let } \alpha \in \mathbb{F} \text{ be an eigenvalue of } A \\
\text{Then } \gamma_{A}(\alpha) \leq \mu_{A}(\alpha) \\
\\
\text{Proof:} \\
\text{Let } \gamma_{A}(\alpha) = t \geq 1 \\
\text{Let } B = \Set{ v_{1}, \dots, v_{t} } \text{ be a basis of eigenspace in respect to } \alpha \\
\text{Let } C = B \cup \Set{ u_{1}, \dots, u_{n-t} } \\
\text{Let } P = \begin{pmatrix}
\overset{ | }{ \underset{ | }{ v_{1} } } & \dots & \overset{ | }{ \underset{ | }{ v_{t} } } & \overset{ | }{ \underset{ | }{ u_{1} } } & \dots & \overset{ | }{ \underset{ | }{ u_{n-t} } } \\
\end{pmatrix} \\
P \text{ is invertible} \\
P^{-1}AP = P^{-1}\begin{pmatrix}
\overset{ | }{ \underset{ | }{ Av_{1} } } & \dots & \overset{ | }{ \underset{ | }{ Av_{t} } } & \overset{ | }{ \underset{ | }{ Au_{1} } } & \dots & \overset{ | }{ \underset{ | }{ A_{u_{n-t}} } } \\
\end{pmatrix} = \\
= P^{-1}\begin{pmatrix}
\alpha v_{1} & \dots & \alpha v_{n} & \overset{ | }{ \underset{ | }{ * } } & \dots & \overset{ | }{ \underset{ | }{ * } } \\
\end{pmatrix} = \begin{pmatrix}
\overset{ | }{ \underset{ | }{ \alpha P^{-1}v_{1} } } & \dots & \overset{ | }{ \underset{ | }{ \alpha P^{-1}v_{t} } } & \overset{ | }{ \underset{ | }{ * } } & \dots & \overset{ | }{ \underset{ | }{ * } } \\
\end{pmatrix} = \\
\underset{ \begin{array}{}
P^{-1}v_{i} = P^{-1}C_{i}(P) \\
P^{-1}C_{i}(P) = C_{i}(P^{-1}P) \\
C_{i}(P^{-1}P) = e_{i} \\
\end{array} }{ = } \begin{pmatrix}
\overset{ | }{ \underset{ | }{ \alpha e_{1} } } & \dots & \overset{ | }{ \underset{ | }{ \alpha e_{t} } } & \overset{ | }{ \underset{ | }{ * } } & \dots & \overset{ | }{ \underset{ | }{ * } } \\
\end{pmatrix} \\
\implies P^{-1}AP = \begin{pmatrix}
\alpha I_{t} & C \\
0 & B \\
\end{pmatrix} \\
A \sim P^{-1}AP \implies P_{A}(\lambda) = P_{P^{-1}AP}(\lambda) = \left\lvert \lambda I - P^{-1}AP \right\rvert = \begin{vmatrix}
(\lambda-\alpha)I_{t} & C \\
0 & \lambda I-B \\
\end{vmatrix} = \\
= \left\lvert (\lambda-\alpha)I_{t} \right\rvert \cdot \left\lvert \lambda I - B \right\rvert = (\lambda-\alpha)^{t} \cdot \left\lvert \lambda I - B \right\rvert \\
\implies \boxed{ \mu_{A}(\alpha) \geq t = \gamma_{A}(\alpha) } \\
}
$$
## Linear independency of eigenvectors in respect to distinct eigenvalues #lemma 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Let } \Set{ \lambda_{1}, \dots, \lambda_{t} } \text{ be eigenvalues of } A \\
\text{Let } \forall i \in [1, t]: Av_{i} = \lambda_{i}v_{i} \\
\text{Then } \Set{ v_{1}, \dots, v_{t} } \text{ is a linear independence} \\
\\
\text{Proof:} \\
\text{Base case. } \Set{ v_{t} } \text{ is a linear independence} \\
\text{Induction step. Let } \Set{ v_{2}, \dots, v_{t} } \text{ be a linear independence} \\
\text{Let } \sum_{i=1}^{t} \alpha_{i}v_{i} = 0 \\
\implies \left\{\begin{array}{}
\sum_{i=1}^{t} \alpha_{i}Av_{i} = \sum_{i=1}^{t} \alpha_{i}\lambda_{i}v_{i} = 0 \\
\sum_{i=1}^{t} \alpha_{i}\lambda_{1}v_{i} = 0 \\
\end{array}\right. \\
\implies \sum_{i=2}^{t} \alpha_{i}(\lambda_{i}-\lambda_{1})v_{i} = 0 \\
\forall i \in [2, n]: \lambda_{i} \neq \lambda_{1} \implies \alpha_{i} = 0 \\
\implies \text{By induction: } \boxed{ \Set{ v_{1}, \dots, v_{t} } \text{ is a linear independence} } \\
}
$$
## Union of Eigenspace bases #theorem 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Let } \Set{ \alpha_{i} }_{i \in [1, t]} \subseteq \mathbb{F} \text{ be eigenvalues of } A \\
\text{Let } \forall i \in [1, t]: B_{i} \text{ be a basis of eigenspace in respect to } \alpha_{i} \\
\text{Then } \bigcup_{i=1}^{t} B_{i} \text{ is a linear independence} \\
\\
\text{Proof:} \\
\text{Let } \forall i \in [1, t]: B_{i} = \Set{ v_{i_{1}}, \dots, v_{i_{k_{i}}} } \\
\text{Let } \Set{ \alpha_{i_{j}} }_{\begin{array}{}
i \in [1, t] \\
j \in [1, k_{i}] \\
\end{array}} \subseteq \mathbb{F} \\
\text{Let } \sum_{i=1}^{t} \sum_{j=1}^{k_{i}} \alpha_{i_{j}}v_{i_{j}} = 0 \\
\\
\text{Case 1. Let } \forall i \in [1, t]: \sum_{j=1}^{k_{i}} \alpha_{i_{j}}v_{i_{j}} = 0 \\
\implies \forall i \in [1, t]: B_{i} \text{ is a linear independence} \implies \forall j \in [1, k_{i}]: \alpha_{i_{j}} = 0 \\
\implies \boxed{ \bigcup_{i=1}^{t} B_{i} \text{ is a linear independence} } \\
\\
\text{Case 2. Let } \exists i \in [1, t]: \sum_{j=1}^{k_{i}} \alpha_{i_{j}}v_{i_{j}} \neq 0 \\
\text{Let } \forall i \in [1, t]: u_{i} = \sum_{j=1}^{k_{i}} \alpha_{i_{j}}v_{i_{j}} \\
\forall i \in [1, t]: u_{i} \in sp(B_{i}) \implies \left[\begin{array}{}
u_{i} = 0 \\
Au_{i} = \lambda_{i}u_{i} \\
\end{array}\right. \\
\sum_{i=1}^{t} u_{i} = 0 \underset{ \begin{array}{}
\Set{ u_{1}, \dots, u_{t} } \\
\text{ is a linear independence} \\
\end{array} }{ \implies } \forall i \in [1, t]: u_{i} = 0 - \text{Contradiction!} \\
\implies \boxed{ \text{Case 1.} } \\
}
$$
## Diagonalizability and geometric multiplicities #lemma 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Then } A \text{ is diagonalizable} \iff \sum_{i=1}^{t} \gamma_{A}(\lambda_{i}) = n \\
\\
\text{Proof:} \\
\boxed{ \implies } \text{ Let } A \text{ be diagonalizable} \\
\implies \exists B = \Set{ v_{1}, \dots, v_{n} } \text{ basis of } \mathbb{F}^{n}: \forall i \in [1, n]: Av_{i} = \lambda_{i}v_{i} \\
\implies t = n \implies n = \sum_{i=1}^{n} 1 \leq \sum_{i=1}^{n} \gamma_{A}(\lambda_{i}) \leq n \implies \boxed{ \sum_{i=1}^{n} \gamma_{A}(\lambda_{i}) = n } \\
\\
\boxed{ \impliedby } \text{ Let } \sum_{i=1}^{t} \gamma_{A}(\lambda_{i}) = n \\
\text{Let } \forall i \in [1, t]: B_{i} = \Set{ v_{i_{1}}, \dots, v_{i_{k_{i}}} } \\
\text{Let } P \in \mathbb{F}^{n \times n}: C_{i_{j}}(P) = v_{i_{j}} \\
P^{-1}AP = P^{-1}\begin{pmatrix}
\overset{ | }{ \underset{ | }{ \lambda_{1}v_{1_{1}} } } & \dots & \overset{ | }{ \underset{ | }{ \lambda_{1}v_{1_{k_{1}}} } } & \dots \ \dots & \overset{ | }{ \underset{ | }{ \lambda_{t}v_{t_{1}} } } & \dots &  \overset{ | }{ \underset{ | }{ \lambda_{t}v_{t_{k_{t}}} } } \\
\end{pmatrix} = \\
= \begin{pmatrix}
\lambda_{1}I_{k_{1}} & 0 & \dots & 0 \\
0 & \lambda_{2}I_{k_{2}} & \ddots & \vdots \\
\vdots & \ddots & \ddots & 0 \\
0 & \dots & 0 & \lambda_{t}I_{k_{t}} \\
\end{pmatrix} = D \\
\implies \boxed{ A \text{ is diagonalizable} } \\
}
$$
## Diagonalizability criterion #theorem 
$$
\displaylines{
\text{Let } A \in \mathbb{F}^{n \times n} \\
\text{Then } A \text{ is diagonalizable} \iff \left\{\begin{array}{}
\sum_{i=1}^{t} \mu_{A}(\lambda_{i}) = n \\
\forall i \in [1, t]: \mu_{A}(\lambda_{i}) = \gamma_{A}(\lambda_{i}) \\
\end{array}\right. \\
\\
\text{Proof:} \\
\boxed{ \implies } \text{ Let } A \text{ be diagonalizable} \\
\implies \sum_{i=1}^{t} \gamma_{A}(\lambda_{i}) = n \\
\forall i \in [1, t]: \gamma_{A}(\lambda_{i}) \leq \mu_{A}(\lambda_{i}) \\
\implies n =  \sum_{i=1}^{t} \gamma_{A}(\lambda_{i}) \leq \sum_{i=1}^{t} \mu_{A}(\lambda_{i}) \leq n \\
\implies \boxed{ \sum_{i=1}^{t} \mu_{A}(\lambda_{i}) = n } \\
\implies \sum_{i=1}^{t} \mu_{A}(\lambda_{i}) - \sum_{i=1}^{t} \gamma_{A}(\lambda_{i}) = 0 \implies \sum_{i=1}^{t} (\underbrace{ \mu_{A}(\lambda_{i}) - \gamma_{A}(\lambda_{i}) }_{ \geq 0 }) = 0 \\
\implies \boxed{ \forall i \in [1, t]: \mu_{A}(\lambda_{i}) = \gamma_{A}(\lambda_{i}) } \\
\\
\boxed{ \impliedby } \text{ Let } \left\{\begin{array}{}
\sum_{i=1}^{t} \mu_{A}(\lambda_{i}) = n \\
\forall i \in [1, t]: \mu_{A}(\lambda_{i}) = \gamma_{A}(\lambda_{i}) \\
\end{array} \right. \\
\left\{\begin{array}{}
\sum_{i=1}^{t} \mu_{A}(\lambda_{i}) = n \\
\forall i \in [1, t]: \mu_{A}(\lambda_{i}) = \gamma_{A}(\lambda_{i}) \\
\end{array}\right\} \implies \sum_{i=1}^{t} \gamma_{A}(\lambda_{i}) = n \\
\implies \boxed{ A \text{ is diagonalizable} } \\
}
$$
