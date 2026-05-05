---
{"publish":true,"created":"19/02/26, 18:43","modified":"2026-03-24T15:01:00.039+02:00","tags":["Academia","Lecture","Probability"],"cssclasses":""}
---

## 2
$$
\displaylines{
\text{Let } n \geq 1, p \in (0, 1) \\
\text{Let } X \sim Bin(n, p) \\
\begin{align}
(a) & \quad \text{Use Chebyshev's inequality to show } \forall t > 0: P(\abs{X - np} \geq t) \leq \frac{np(1-p)}{t^{2}} \\
(b) & \quad \text{Let } n = 1000, p = 0.1 \\
 & \quad \text{Find minimal } t \text{ such that guarantees } P(\abs{X - 100} \geq t) \leq 0.8 \\ 
\end{align} \\
\\
\text{Solution:} \\
(a) \\
X \sim Bin(n, p) \implies E[X] = np, Var(X) = np(1-p) \\
\text{By Chebyshev's inequality: } \\
\forall t > 0: P(\abs{X - E[X]} \geq t) \leq \frac{Var(X)}{t^{2}} \implies P(\abs{X - np} \geq t) \leq \frac{np(1-p)}{t^{2}} \\
\\
(b) \\
n = 1000, p = 0.1 \implies E[X] = 100, Var(X) = 90 \\
\forall t > 0: P(\abs{X - 100} \geq t) \leq \frac{90}{t^{2}} \\
\text{Substituting } \frac{90}{t^{2}} \leq 0.8 \text{ yields:} \\
t^{2} \geq \frac{900}{8} \implies t^{2} \geq \frac{225}{2} \\
t > 0 \implies t \geq \sqrt{ \frac{225}{2} } \\
\sqrt{ 100 } < \sqrt{ \frac{225}{2} } < \sqrt{ 121 } \implies t \geq 11 \\
}
$$
---
## 3
$$
\displaylines{
\text{Let } X_{1}, X_{2}, \dots \text{ be i.i.d. with} \\
P(X_{1} = 10) = \frac{1}{4}, P(X_{1} = 2) = \frac{3}{4} \\
\text{Let } \overline{X}_{n} = \frac{1}{n}\sum_{i=1}^{n} X_{i} \\
\begin{align}
(a) & \quad \text{Compute } \mu = E[X_{1}] \text{ and } \sigma^{2} = Var(X_{1}) \\
(b) & \quad \text{Let } n = 100, \text{ use Chebyshev's ineuqality to give a lower bound on} \\
 & \quad P(\abs{\overline{X}_{100} - \mu} \leq 0.5) \\
(c) & \quad \text{Find the smallest integer } n \text{ such that Chebyshev's inequality} \\
 & \quad \text{guarantees } P(\abs{\overline{X}_{n} - \mu} \leq 0.5) \geq 0.95 \\
\end{align} \\
\\
\text{Solution:} \\
(a) \\
\mu = E[X_{1}] = 10 \cdot \frac{1}{4} + 2 \cdot \frac{3}{4} = 4 \\
E[X_{1}^{2}] = 100 \cdot \frac{1}{4} + 4 \cdot \frac{3}{4} = 28 \\
\implies \sigma^{2} = Var(X_{1}) = 28 - 16 = 12 \\
\\
(b) \\
E[\overline{X}_{n}] = \frac{1}{n}\sum_{i=1}^{n} E[X_{i}] = \frac{4n}{n} = 4 = \mu \\
Var(\overline{X}_{n}) = \frac{1}{n^{2}}Var\left( \sum_{i=1}^{n} X_{i} \right) = \frac{1}{n^{2}}\sum_{i=1}^{n} Var(X_{i}) = \frac{12}{n} \\
\implies \text{By Chebyshev's inequality } P(\abs{\overline{X}_{100} - E[\overline{X}_{100}]} \leq 0.5) = \\
= 1 - P(\abs{\overline{X}_{100} - E[\overline{X}_{100}]} > 0.5) \geq 1 - \frac{Var(\overline{X}_{n})}{0.25} = 1 - \frac{48}{n} = \frac{52}{100} \\
\implies P(\abs{\overline{X}_{100} - \mu} \leq 0.5) \geq 0.52 \\
\\
(c) \\
\text{By Chebyshev's inequality: } P(\abs{\overline{X}_{n} - \mu} \leq 0.5) = 1 - P(\abs{\overline{X}_{n} - \mu} > 0.5) \geq \\
\geq 1 - \frac{Var(\overline{X}_{n})}{0.25} = \frac{n-48}{n} \\
\text{Substituting } \frac{n-48}{n} \geq 0.95 \text{ yields:} \\
100n-4800 \geq 95n \implies 5n \geq 4800 \implies n \geq 960 \\
}
$$
---
## 4
$$
\displaylines{
\text{Let } m \geq 2 \\
\text{Let } B_{1}, B_{2}, \dots, B_{n} \text{ be i.i.d uniform on } \Set{ 1, 2, \dots, m } \\
\text{Let } C = \sum_{i < j \in [n]} 1_{\Set{ B_{i} = B_{j} }} \\
\begin{align}
(a) & \quad \text{Compute } E[C] \\
(b) & \quad \text{Let } E = \Set{ \exists i < j: B_{i} = B_{j} } \\
 & \quad \text{Show } E = \Set{ C \geq 1 } \text{ and use Markov's inequality to prove } P(E) \leq E[C] \\
(c) & \quad \text{Let } m = 365 \\
 & \quad \text{Find largest integer } n \text{ such that bound from } (b) \text{ guarantees } P(E) \leq \frac{1}{2} \\
(d) & \quad \text{Show } \forall k \geq 1 \in \mathbb{N}: P(C \geq k) \leq \frac{E[C]}{k} \\
 & \quad \text{Compute this bound for } m = 365, n = 23, k = 2 \\
\end{align} \\
\\
\text{Solution:} \\
(a) \\
E[C] = E\left[ \sum_{i < j \in [n]} 1_{\Set{ B_{i} = B_{j} }} \right] = \frac{n(n-1)}{2} \cdot P(B_{i} = B_{j}) = \frac{n(n-1)}{2m} \\
\\
(b) \\
\mathrm{Im}C = \Set{ 0, 1, 2, \dots, \frac{n(n-1)}{2} } \\
C = \abs{\Set{ (i, j) \mid i < j \in [n]: B_{i} = B_{j} }} \\
\implies C \geq 1 \iff \exists i < j: B_{i} = B_{j} \iff E \\
\implies E = \Set{ C \geq 1 } \\
\implies P(E) = P(C \geq 1) \overset{ \text{Markov} }{ \leq } \frac{E[C]}{1} \implies P(E) \leq E[C] \\
\\
(c) \\
m = 365 \implies E[C] = \frac{n(n-1)}{2 \cdot 365} \\
\implies P(E) \leq \frac{n(n-1)}{730} \\
\text{Substituting } \frac{n(n-1)}{730} \leq \frac{1}{2} \text{ yields:} \\
2n^{2}-2n \leq 730 \implies n^{2}-n-365 \leq 0 \\
D = 1 + 4 \cdot 365 = 1461 \\
\implies n_{1,2} = \frac{1 \pm \sqrt{ 1461 }}{2} \\
\implies n \in \left[ \frac{1-\sqrt{ 1461 }}{2}, \frac{1+\sqrt{ 1461 }}{2} \right] \implies n \leq \frac{1+\sqrt{ 1461 }}{2} \\
19 = \frac{38}{2} < \frac{1+\sqrt{ 1461 }}{4} < \frac{40}{2} \\
\implies n \leq 19 \\
\\
(d) \\
\text{By Markov's inequality: } \forall k > 0: P(C \geq k) \leq \frac{E[C]}{k} = \frac{n(n-1)}{2mk} \\
\text{For } m = 365, n = 23, k = 2: \\
P(C \geq 2) \leq \frac{23 \cdot 22}{365 \cdot 4} = \frac{253}{730} \approx 0.35 \\
}
$$
