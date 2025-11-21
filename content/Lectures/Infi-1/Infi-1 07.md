---
{"publish":true,"created":"20/11/24, 10:11","modified":"2025-11-21T21:10:14.184+02:00","tags":["Academia","Lecture","Infi-1"],"cssclasses":""}
---

# Infi-1 7
## Division tools #theorem 
$$
\displaylines{
L = \lim_{ n \to \infty } \left\lvert  \frac{a_{n+1}}{a_{n}}  \right\rvert \\
\\
\begin{array}{}
1. & L < 1 \implies a_{n} \to 0 \\
2. & L > 1 \implies a_{n} \to \infty \\
3. & L = 1 \text{ or } \not\exists L \implies \text{Inconclusive} \\
4. & \sqrt[n]{ \lvert a_{n} \rvert } \to L \\
\end{array} \\
}
$$
---
$$
\displaylines{
\lim_{ n \to \infty } \sqrt[n]{ n } \\
a_{n} = n \\
\lim_{ n \to \infty } \sqrt[n]{ \lvert a_{n} \rvert  } = \lim_{ n \to \infty } \left\lvert  \frac{a_{n+1}}{a_{n}}  \right\rvert =  \lim_{ n \to \infty } \left\lvert  \frac{n+1}{n}  \right\rvert = 1 \\
}
$$
---
## Monotonically non-descending sequence (עולה) #definition 
$$
\forall n \in \mathbb{N} : a_{n} \leq a_{n+1}
$$
## Monotonically ascending sequence (עולה ממש) #definition 
$$
\forall n \in \mathbb{N} : a_{n} < a_{n+1}
$$
## Monotonically non-ascending sequence (ירדת) #definition 
$$
\forall n \in \mathbb{N} : a_{n+1} \leq a_{n}
$$
## Monotonically descending sequence (ירדת ממש) #definition 
$$
\forall n \in \mathbb{N} : a_{n+1} < a_{n}
$$
---
## Note
$$
\text{Monotonic sequence always converges in the broadest sense}
$$
---
## Properties of monotonic sequences #lemma 
$$
\displaylines{
\text{Let } a_{n} \text{ be a monotonic sequence} \\
\begin{array}{}
1. & \text{Non-descending: } \\
 & 1.1 & \text{Top-limited: } \lim_{ n \to \infty } a_{n} = sup(a_{n}) \\
 & 1.2 & \text{Not top-limited: } \lim_{ n \to \infty } a_{n} = \infty \\
2. & \text{Non-ascending: } \\
 & 2.1 & \text{Bottom-limited: } \lim_{ n \to \infty } a_{n} = inf(a_{n}) \\
 & 2.2 & \text{Not bottom-limited: } \lim_{ n \to \infty } a_{n} = -\infty \\
\end{array} \\
\\
\text{Proof for 1.1: } \\
L = sup(a_{n}) \\
a_{n} \leq L \implies \forall \varepsilon > 0: a_{n} < L + \varepsilon \\
\forall \varepsilon > 0 \exists N : L -\varepsilon < a_{N} \\
\implies \forall n \geq N : L - \varepsilon < a_{N} \leq a_{n} \\
L - \varepsilon < a_{N} \leq a_{n} < L + \varepsilon \implies \lim_{ n \to \infty } a_{n} = L \\
\\
\text{Proof for 2.1: } \\
L = inf(a_{n}) \\
L \leq a_{n} \implies \forall \varepsilon > 0: L - \varepsilon < a_{n} \\
\forall \varepsilon > 0: \exists N : a_{N} < L + \varepsilon \\
\implies \forall n \geq N : a_{n} \leq a_{N} < L + \varepsilon \\
L - \varepsilon < a_{n} \leq a_{N} < L+\varepsilon \implies \lim_{ n \to \infty } a_{n} = L \\
}
$$
---
$$
\displaylines{
a_{n} = \sum_{k=n}^{3n} \frac{1}{k} \\
a_{n} = \frac{1}{n}+\frac{1}{n+1}+\dots+\frac{1}{3n} \\
\\
a_{n+1} \leq a_{n} \iff \frac{1}{3n+1}+\frac{1}{3n+2}+\frac{1}{3n+3} \leq \frac{1}{n} \\
\frac{1}{3n+1}+\frac{1}{3n+2}+\frac{1}{3n+3} \leq \frac{1}{3n}+\frac{1}{3n}+\frac{1}{3n} = \frac{1}{n} \\
\implies a_{n+1} \leq a_{n} \\
\implies \lim_{ n \to \infty } a_{n} = inf(a_{n}) \\
}
$$
---
