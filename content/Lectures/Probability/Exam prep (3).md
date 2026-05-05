---
{"publish":true,"created":"19/02/26, 13:49","modified":"2026-03-24T15:01:00.029+02:00","tags":["Academia","Lecture","Probability"],"cssclasses":""}
---

## 1
$$
\displaylines{
\text{Let } n \geq 2 \\
\text{Let } X_{1}, \dots, X_{n} \text{ be i.i.d. } \sim Unif(0, 1) \\
\text{Let } M = \max_{i \in [n]}\lrc{X_{i}} \\
\text{Let } m = \min_{i \in [n]}\lrc{X_{i}} \\
\text{Let } W = 1 - \sqrt[n]{ 1 - X_{1} } \\
\begin{align}
(a) & \quad \text{Compute } F_{M}(t), F_{m}(t) \\
(b) & \quad \text{Compute } F_{W}(t) \\
(c) & \quad \text{Determine which pairs among } \Set{ M, m, W } \text{ are equal in distribution} \\
(d) & \quad \text{Compute } E[M], E[m] \\
(e) & \quad \text{Prove } E[M] + E[m] = 1 \\
\end{align} \\
\\
\text{Solution:} \\
(a) \\
F_{M}(t) = P(M \leq t) = P\left( \bigcap_{i=1}^{n} X_{i} \leq t \right) = \prod_{i=1}^{n} P(X_{i} \leq t) = \prod_{i=1}^{n} F_{X_{i}}(t) = \begin{cases}
0 & t < 0 \\
t^{n} & t \in [0, 1) \\
1 & t \geq 1 \\
\end{cases} \\
F_{m}(t) = P(m \leq t) = 1 - P(m > t) = 1 - P\left( \bigcap_{i=1}^{n} X_{i} > t \right) = \begin{cases}
0 & t < 0 \\
1 - (1-t)^{n} & t \in [0, 1) \\
1 & t \geq 1 \\
\end{cases} \\
\\
(b) \\
F_{W}(t) = P(W \leq t) = P(1 - \sqrt[n]{ 1-X_{1} } \leq t) = P(\sqrt[n]{ 1 - X_{1} } \geq 1 - t) = \\
= P(1 - X_{1} \geq (1-t)^{n}) = P(X_{1} \leq 1 - (1-t)^{n}) = F_{X_{1}}(1-(1-t)^{n}) = \\
= \begin{cases}
0 & 1-(1-t)^{n} < 0 \\
1-(1-t)^{n} & 1-(1-t)^{n} \in [0, 1) \\
1 & 1-(1-t)^{n} \geq 1 \\
\end{cases} \\
\text{Note that } \sqrt[n]{ 1 - X_{1} } \geq 0, \text{ so } 1-t \text{ must also be positive} \\
\text{That is, } \begin{eqsys}
t < 0 \implies 1-t > 1 \implies P(W \leq t) = 0 \\
t > 1 \implies 1-t < 0 \implies P(W \leq t) = 1 \\
\end{eqsys} \\
\begin{eqsys}
t \in [0, 1) \\
1 - (1-t)^{n} \in [0, 1) \\
\end{eqsys} \implies t \in [0, 1) \\
\implies F_{W}(t) = \begin{cases}
0 & t < 0 \\
1-(1-t)^{n} & t \in [0, 1) \\
1 & t \geq 1 \\
\end{cases} \\
\\
(c) \\
m \overset{ d }{ = } W \\
n \geq 2 \implies t^{n} \neq 1 - (1-t)^{n} \implies M \overset{ d }{ \neq } m \\
\\
(d) \\
f_{M}(t) = \frac{dF_{M}}{dt}(t) = \begin{cases}
nt^{n-1} & t \in [0, 1) \\
0 & \text{otherwise} \\
\end{cases} \\
\implies E[M] = \int_{0}^{1} tf_{M}(t) \, dt = \int_{0}^{1} nt^{n} \, dt = \frac{n}{n+1} \\
f_{m}(t) = \frac{dF_{m}}{dt}(t) = \begin{cases}
n(1-t)^{n-1} & t \in [0, 1) \\
0 & \text{otherwise} \\
\end{cases} \\
\implies E[m] = \int_{0}^{1} tf_{m}(t) \, dt = \int_{0}^{1} nt(1-t)^{n-1} \, dt = \\
= \sbs{
u = 1-t \\
du = -dt \\
t = 0 \implies u = 1 \\
t = 1 \implies u = 0 \\
} = \int_{0}^{1} n u^{n-1}(1-u) \, du = 1 - \frac{n}{n+1} \\
\\
(e) \\
E[M] + E[m] = \frac{n}{n+1} + 1 - \frac{n}{n+1} = 1 \\
}
$$
---
## 2
$$
\displaylines{
\text{Let } X \sim Unif(0, 1) \\
\text{Let } Y = \begin{cases}
X & X \in \left[ 0, \frac{1}{2} \right] \\
2X-1 & X \in \left[ \frac{1}{2}, 1 \right] \\
\end{cases} \\
\begin{align}
(a) & \quad \text{Compute } E[Y], Var(Y) \\
(b) & \quad \text{Compute } F_{Y}(t) \\
(c) & \quad \text{Find } f_{Y}(t) \\
(d) & \quad \text{Prove/disprove: } Y \sim Unif(0, 1) \\
(e) & \quad \text{Compute } Cov(X, Y) \\
\end{align} \\
\\
\text{Solution:} \\
(a) \\
E[Y] = \int_{0}^{1/2} x \cdot 1 \, dx + \int_{\frac{1}{2}}^{1} (2x-1) \cdot 1 \, dx = \frac{1}{8} + \frac{1}{4} = \frac{3}{8} \\
E[Y^{2}] = \int_{0}^{1/2} x^{2} \, dx + \int_{\frac{1}{2}}^{1} (2x-1)^{2} \, dx = \frac{1}{24} + \lrs{\frac{4x^{3}}{3} - \frac{4x^{2}}{2} + x}^{1}_{\frac{1}{2}} = \\
= \frac{1}{24} + \lrp{\frac{4}{3} - \frac{4}{2} + 1} - \lrp{\frac{4}{24} - \frac{4}{8} + \frac{1}{2}} = \frac{1}{24} + \frac{1}{3} - \frac{1}{6} = \frac{1+8-4}{24} = \frac{5}{24} \\
\implies Var(Y) = E[Y^{2}] - E[Y]^{2} = \frac{5}{24} - \frac{9}{64} = \frac{40-27}{192} = \frac{13}{192} \\
\\
(b) \\
X \in \left[ 0, \frac{1}{2} \right] \implies Y \in \left[ 0, \frac{1}{2} \right] \\
X \in \left[ \frac{1}{2}, 1 \right] \implies Y \in [0, 1] \\
\\
\text{Let } t \in \left[ 0, \frac{1}{2} \right] \\
P(Y \leq t) = P\left( X \leq t \text{ and } X \in \left[ 0, \frac{1}{2} \right] \right) + P\left( (2X-1) \leq t \text{ and } X \in \left[ \frac{1}{2}, 1 \right] \right) = \\
= P(X \in [0, t]) + P\left( X \in \left[ \frac{1}{2}, \frac{t+1}{2} \right] \right) = t + \frac{t}{2} = \frac{3t}{2} \\
\text{Let } t \in \left[ \frac{1}{2}, 1 \right] \\
P(Y \leq t) = P\left( X \leq t \text{ and } X \in \left[ 0, \frac{1}{2} \right] \right) + P\left( (2X-1) \leq t \text{ and } X \in \left[ \frac{1}{2}, 1 \right] \right) = \\
= P\left( X \in \left[ 0, \frac{1}{2} \right] \right) + P\left( X \in \left[ \frac{1}{2}, \frac{t+1}{2} \right] \right) = \frac{1}{2} + \frac{t}{2} = \frac{t+1}{2} \\
\implies F_{Y}(t) = \begin{cases}
0 & t < 0 \\
\frac{3t}{2} & t \in \left[ 0, \frac{1}{2} \right) \\
\frac{t+1}{2} & t \in \left[ \frac{1}{2}, 1 \right) \\
1 & t \geq 1 \\
\end{cases} \\
\\
(c) \\
f_{Y}(t) = \frac{dF_{Y}}{dt}(t) = \begin{cases}
0 & t < 0 \\
\frac{3}{2} & t \in \left[ 0, \frac{1}{2} \right) \\
\frac{1}{2} & t \in \left[ \frac{1}{2}, 1 \right) \\
0 & t \geq 1 \\
\end{cases} \\
\\
(d) \\
\text{Disproof:} \\
\forall t \in [0, 1]: f_{Y}(t) \neq f_{X}(t) \implies Y \not\sim Unif(0, 1) \\
\\
(e) \\
Cov(X, Y) = E[XY] - E[X]E[Y] \\
E[XY] = \int_{0}^{1/2} x^{2} \, dx + \int_{\frac{1}{2}}^{1} x(2x-1) \, dx = \frac{1}{24} + \left[ \frac{2x^{3}}{3} - \frac{x^{2}}{2} \right]^{1}_{\frac{1}{2}} = \\
= \frac{1}{24} + \lrp{\frac{2}{3} - \frac{1}{2}} - \left( \frac{2}{24} - \frac{1}{8} \right) = \frac{1}{24} + \frac{16}{24} - \frac{12}{24} - \frac{2}{24} + \frac{3}{24} = \frac{1}{4} \\
\implies Cov(X, Y) = \frac{1}{4} - \frac{1}{2} \cdot \frac{3}{8} = \frac{1}{16} \\
}
$$
---
## 3
$$
\displaylines{
\text{A die is chosen, with probability } \theta \text{ a die of type } A, \\
\text{with probability } 1-\theta \text{ a die of type } B \\
\text{Type } A \text{ has 4 faces } \Set{ 1, 2, 3, 4 } \text{ and is fair} \\
\text{Type } B \text{ has 6 faces } \Set{ 1, 1, 3, 3, 5, 5 } \text{ and is fair} \\
\text{After choosing the die, we roll it, let } R \text{ be the result} \\
\begin{align}
(a) & \quad \text{Compute } P(A \mid R = 3) \\
(b) & \quad \text{Compute } P(A \mid R \neq 1) \\
 & \text{Now let us roll the same chosen die twice, independently} \\
 & \text{Let } X \text{ be the first result, } Y \text{ be the second} \\
(c) & \quad \text{Compute } E[X+Y], Var(X+Y) \\
(d) & \quad \text{Compute } Cov(X, Y) \\
\end{align} \\
\\
\text{Solution:} \\
(a) \\
P(A \mid R = 3) = \frac{P(A \cap R = 3)}{P(R = 3)} = \frac{P(R = 3 \mid A)P(A)}{P(R = 3 \mid A)P(A) + P(R = 3 \mid B)P(B)} = \\
= \frac{\frac{\theta}{4}}{\frac{\theta}{4} + \frac{1-\theta}{3}} = \frac{3\theta}{4-\theta} \\
\\
(b) \\
P(A \mid R \neq 1) = \frac{P(A \cap R \neq 1)}{P(R \neq 1)} = \frac{P(R \neq 1 \mid A)P(A)}{P(R \neq 1 \mid A)P(A) + P(R \neq 1 \mid B)P(B)} = \\
= \frac{\frac{3\theta}{4}}{\frac{3\theta}{4} + \frac{2(1-\theta)}{3}} = \frac{\theta}{\theta-\frac{8}{9}(1-\theta)} = \frac{9\theta}{8+\theta} \\
\\
(c) \\
\text{Let } X_{A}, X_{B} \text{ be the results of first throw given ie of type } A, B \text{ respectively} \\
\text{Let } Y_{A}, Y_{B} \text{ be the results of second throw given ie of type } A, B \text{ respectively} \\
\text{Let } D \text{ be the type of die we choose} \\
P(D = A) = \theta, P(D = B) = 1-\theta \\
E[X] = E[E[X \mid D]] = E[\theta X_{A} + (1-\theta)X_{B}] = \frac{10\theta}{4} + 3(1-\theta) \\
E[Y] = E[E[Y \mid D]] = E[\theta Y_{A} + (1-\theta)Y_{B}] = \frac{10\theta}{4} + 3(1-\theta) \\
E[X + Y] = E[X] + E[Y] = 5\theta + 6(1-\theta) = 6 - \theta \\
\\
(d) \\
E[XY] = E[E[XY \mid D]] = E[\theta X_{A}Y_{A} + (1-\theta)X_{B}Y_{B}] = \\
= \theta E[X_{A}]E[Y_{A}] + (1-\theta)E[X_{B}]E[Y_{B}] = \left( \frac{10\theta}{4} \right)^{2} + (1-\theta)3^{2} = \\
= \frac{100}{16}\theta + 9 - 9\theta = 9 - \frac{44\theta}{16} \\
\implies Cov(X, Y) = E[XY] - E[X]E[Y] = 9 - \frac{44\theta}{16} - \left( \frac{10\theta}{4} + 3(1-\theta) \right)^{2} = \\
= 9 - \frac{11\theta}{4} - \left( 3 - \frac{\theta}{2} \right)^{2} = 9 - \frac{11\theta}{4} - 9 + 3\theta - \frac{\theta^{2}}{4} = \frac{\theta-\theta^{2}}{4} \\
\theta < 1 \implies \theta^{2} < \theta \implies Cov(X, Y) \text{ is positive} \\
}
$$
---
## 4
$$
\displaylines{
\text{Let } n < m \\
\text{There are } m \text{ seats labeled } 1, 2, \dots, m \text{ and } n \text{ children labeled } 1, 2, \dots, n \\
\text{Children enter in order } 1, 2, \dots, n \\
\text{Each child chooses uniformly random among the seats that are still empty} \\
\forall i \in [1, n]: I_{i} = 1_{\Set{ \text{child } i \text{ seats in seat } i }} \\
\text{Let } X = \sum_{i=1}^{n} I_{i} \\
\begin{align}
(a) & \quad \text{Compute } P(I_{i} = 1), \text{ it should not depend on } i \\
(b) & \quad \text{Compute } E[X] \\
(c) & \quad \text{Compute } P(I_{i} = 1, I_{j} = 1), Cov(I_{i}, I_{j}) \text{ for } i \neq j \\
(d) & \quad \text{Compute } Var(X) \\
(e) & \quad \text{Evaluate } Var(X) \text{ for } n = 12, m = 30 \\
\end{align} \\
\\
\text{Solution:} \\
(a) \\
\text{Let } I_{ij} = \text{child } i \text{ sits in seat } j \\
P(I_{i} = 1) = P\left( I_{i} = 1 \cap \bigcap_{j=1}^{i-1} I_{ji} = 0 \right) + P\left( I_{i} = 1 \cap \bigcup_{j=1}^{i-1} I_{ji} = 1 \right) = \\
= P\left( I_{i} = 1 \mid \bigcap_{j=1}^{i-1} I_{ji} = 0 \right)P\left( \bigcap_{j=1}^{i-1} I_{ji} = 0 \right) = \\
= \frac{1}{m-(i-1)} \cdot P(I_{1i} = 0) \cdot \prod_{j=2}^{i-1} P\left( I_{ji} = 0 \mid \bigcap_{k=1}^{j-1} I_{ki} = 0 \right) = \\
= \frac{1}{m-(i-1)} \cdot \frac{m-1}{m} \cdot \frac{m-2}{m-1} \cdot \ldots \cdot \frac{m-(i-1)}{m-(i-2)} = \frac{1}{m} \\
\text{Same can be said "by symmetry"} \\
\\
(b) \\
E[X] = \sum_{i=1}^{n} E[I_{i}] = \sum_{i=1}^{n} P(I_{i} = 1) = \frac{n}{m} \\
\\
(c) \\
\text{Let } i \neq j \\
\text{Let } i < j \text{ WLOG} \\
P(I_{i} = 1, I_{j} = 1) = P\left( I_{i} = 1 \cap I_{j} = 1 \mid \bigcap_{k=1}^{i-1} I_{ki} = 0 \cap \bigcap_{k=i+1}^{j-1} I_{kj} = 0 \right) = \frac{1}{m(m-1)} \\
Cov(I_{i}, I_{j}) = E[I_{i}I_{j}] - E[I_{i}]E[I_{j}] = \frac{1}{m(m-1)} - \frac{1}{m^{2}} = \frac{1}{m^{2}(m-1)} \\
\\
(d) \\
Var(I_{i}) = E[I_{i}^{2}] - E[I_{i}]^{2} = \frac{1}{m} - \frac{1}{m^{2}} \\
Var(X) = \sum_{i=1}^{n} Var(I_{i}) + \sum_{i \neq j \in [n]} Cov(I_{i, I_{j}}) = \frac{n(m-1)}{m^{2}} + \frac{n(n-1)}{m^{2}(m-1)} \\
\\
(e) \\
n = 12, m = 30 \\
Var(X) = \frac{12 \cdot 29}{900} + \frac{12 \cdot 11}{900 \cdot 29} = \frac{12 \cdot 29 \cdot 29 + 12 \cdot 11}{29 \cdot 900} = \frac{10092 + 132}{26100} = \frac{284}{725} \\
}
$$
---
## 5
$$
\displaylines{
\text{Let } X \sim Unif(-1, 2) \\
\text{Let } Y = \abs{X} \\
\begin{align}
(a) & \quad \text{Compute } F_{Y}(t) \\
(b) & \quad \text{Find } f_{Y}(t) \\
(c) & \quad \text{Prove/disprove: } Y \sim Unif(0, 2) \\
(d) & \quad \text{Compute } E[Y] \\
(e) & \quad \text{Compute } P\left( Y \leq \frac{1}{2} \right) \text{ and } P(1 < Y < 2) \\
\end{align} \\
\\
\text{Solution:} \\
(a) \\
F_{Y}(t) = P(Y \leq t) = P(\abs{X} \leq t) = P(X \in [-t, t]) \\
t < 0 \implies P(Y \leq t) = 0 \\
t \in [0, 1) \implies [-t, t] \cap [-1, 2] = [-t, t] \implies P(Y \leq t) = \frac{2t}{3} \\
t \in [1, 2) \implies [-t, t] \cap [-1, 2] = [-1, t] \implies P(Y \leq t) = \frac{t+1}{3} \\
t \geq 2 \implies [-t, t] \cap [-1, 2] = [-1, 2] \implies P(Y \leq t) = 1 \\
\implies F_{Y}(t) = \begin{cases}
0 & t < 0 \\
\frac{2t}{3} & t \in [0, 1) \\
\frac{t+1}{3} & t \in [1, 2) \\
1 & t \geq 2 \\
\end{cases} \\
\\
(b) \\
f_{Y}(t) = \frac{dF_{Y}}{dt}(t) = \begin{cases}
0 & t < 0 \\
\frac{2}{3} & t \in [0, 1) \\
\frac{1}{3} & t \in [1, 2) \\
0 & t \geq 2 \\
\end{cases} \\
\\
(c) \\
\forall t \in [0, 2]: f_{Y}(t) \neq \frac{1}{2} \implies Y \not\sim Unif(0, 2) \\
\\
(d) \\
E[Y] = \int_{0}^{1} \frac{2}{3}y \, dy + \int_{1}^{2} \frac{1}{3}y \, dy = \frac{1}{3} + \frac{2}{3} - \frac{1}{6} = \frac{5}{6} \\
\\
(e) \\
P\left( Y \leq \frac{1}{2} \right) = F_{Y}\left( \frac{1}{2} \right) = \frac{1}{3} \\
P(1 < Y < 2) = F_{Y}(2) - F_{Y}(1) = 1 - \frac{2}{3} = \frac{1}{3} \\
}
$$
