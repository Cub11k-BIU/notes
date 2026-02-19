---
{"publish":true,"created":"16/02/26, 14:59","modified":"2026-02-18T14:36:02.627+02:00","tags":["Academia","Lecture","Probability"],"cssclasses":""}
---

## 1
$$
\displaylines{
\text{Let } X, Y, Z \text{ be the results of three independent rolls of a fair 5-sided die} \\
\text{with faces } \Set{ 1, 2, 3, 4, 5 } \\
\text{Let } A = \Set{ X = Y = Z } \\
\text{Let } B = \Set{ \text{exactly two of } X, Y, Z \text{ are equal} } \\
\text{Let } C = \text{all three outcomes are different} \\
\\
\begin{align}
(a) & \quad \text{Compute } P(A), P(B), P(C) \\
(b) & \quad \text{Compute } P(\max\lrc{X, Y, Z} = 5 \mid B) \\
(c) & \quad \text{Let } D \text{ be the number of distinct values among } \Set{ X, Y, Z } \\
 & \quad \text{Compute } E[D] \text{ and } Var(D) \\
\end{align} \\
\\
\text{Solution:} \\
(a) \\
P(A) = \bigcup_{k=1}^{5} P(X = k \cap Y = k \cap Z = k) = \sum_{k=1}^{5} P(X = k)P(Y = k)P(Z = k) = \\
= 5 \cdot \frac{1}{5^{3}} = \frac{1}{25} \\
\\
\text{Let } \Set{ X_{1}, X_{2}, X_{3} } = \Set{ X, Y, Z } \\
P(B) = \bigcup_{m=1}^{5} \bigcup_{i, j \in [3], k \in [3] \setminus \Set{ i, j }} P(X_{i} = m \cap X_{j} = m \cap X_{k} \neq m) = \\
= \sum_{m=1}^{5} \binom{3}{2} P(X_{i} = m \cap X_{j} = m \cap X_{k} \neq m) = \\
= 5 \cdot \binom{3}{2} \cdot \frac{1}{5} \cdot \frac{1}{5} \cdot \frac{4}{5} = \frac{12}{25} \\
\\
P(C) = \bigcup_{m_{1}, m_{2}, m_{3} \in [5]} \bigcup_{i,j,k=\pi[3]} P(X_{i} = m_{1} \cap X_{j} = m_{2} \cap X_{k} = m_{3}) = \\
= \binom{5}{3} \cdot 3! \cdot \frac{1}{5} \cdot \frac{1}{5} \cdot \frac{1}{5} = \frac{60}{125} \\
\\
(b) \\
P(\max\lrc{X, Y, Z} = 5 \mid B) = \frac{P(\max\lrc{X, Y, Z} = 5 \cap B)}{P(B)} \\
\dots \\
\\
(c) \\
\mathrm{Im}D = \Set{ 1, 2, 3 } \\
P(D = 1) = P(A) = \frac{1}{25} \\
P(D = 2) = P(B) = \frac{60}{125} \\
P(D = 3) = P(C) = \frac{60}{125} \\
E[D] = \frac{1}{25} + \frac{120}{125} + \frac{180}{125} = \frac{61}{25} = 2.44 \\
E[D^{2}] = \frac{1}{25} + \frac{240}{125} + \frac{540}{125} = \frac{785}{125} = \frac{785}{25} = 6.28 \\
\implies Var(D) = 6.28 - 5.9536 = 0.3264
}
$$
---
## 2
$$
\displaylines{
X \text{ is uniform on } \Set{ 0, 1, \dots, 10 } \\
P(S = 0) = p \\
P(S = 10) = 1-p \\
Y = \abs{S-X} \\
\begin{align}
(a) & \quad \text{Show that } \forall p \in (0, 1): E[Y] = 5 \\
(b) & \quad \text{Compute } Var(Y) \\
(c) & \quad \text{Find value(s) of } p \text{ that minimize } Var(Y) \\
\end{align} \\
\\
\text{Solution:} \\
S = 0 \implies Y = X \\
S = 10 \implies Y = 10 - X \\
E[X] = \sum_{i=0}^{10} \frac{i}{11} = 5 \\
E[X^{2}] = \sum_{i=0}^{10} \frac{i^{2}}{11} = 35 \\
\implies E[Y] = E[E[Y \mid S]] = E[E[X] \cdot P(S = 0) + E[10-X] \cdot P(S = 10)] = \\
= E[5 \cdot p + 5 \cdot (1-p)] = 5 \\
E[Y^{2}] = E[E[Y^{2} \mid S]] = E[E[X^{2}] \cdot P(S = 0) + E[(10-X)^{2}] \cdot P(S = 10)] = \\
= E[35p + E[100-20X + X^{2}](1-p)] = 35p + (100 - 20E[X]+E[X^{2}])(1-p) = \\
= 35p + 100 - 100p - 100 + 100p + 35 - 35p = 35 \\
\implies Var(Y) = E[Y^{2}] - E[Y]^{2} = 35 - 25 = 10 \\
\implies \forall p \in (0, 1): Var(Y) = 10 \\
}
$$
---
## 3
$$
\displaylines{
\text{Let } X \text{ be uniform on } \Set{ -2, -1, 0, 1, 2 } \\
\text{Let } S \in \Set{ -1, 1 } \\
P(S = 1) = p, P(S = -1) = 1-p \\
\text{Let } Y = S \cdot X + 1 \\
\\
\begin{align}
(a) & \quad \text{Compute } E[X], Var(X) \\
(b) & \quad \text{Compute } E[Y], Var(Y) \\
(c) & \quad \text{Compute } Cov(X, Y) \\
(d) & \quad \text{Let } Cov(X, Y) = -\frac{4}{5} \\
 & \quad \text{Find } p \\
\end{align} \\
\\
\text{Solution:} \\
(a) \\
E[X] = \frac{1}{5}(-2-1+0+1+2) = 0 \\
E[X^{2}] = \frac{1}{5}(4+1+0+1+4) = 2 \\
\implies Var(X) = 2 \\
\\
(b) \\
E[Y] = E[E[Y \mid S]] = E[p(X+1) + (1-p)(1-X)] = E[pX+p+1-p-X+pX] \\
= E[(2p-1)X + 1] = (2p-1)E[X] + 1 = 1 \\
\\
(c) \\
Cov(X, Y) = E[XY] - E[X]E[Y] = E[XY] = E[E[XY \mid S]] = \\
= E[pX(X+1) + (1-p)X(1-X)] = E[pX^{2}+pX + X-X^{2} - pX+pX^{2}] = \\
= E[(2p-1)X^{2}+X] = (2p-1)E[X^{2}] + E[X] = 2(2p-1) = 4p-2 \\
\\
(d) \\
\text{Let } Cov(X, Y) = -\frac{4}{5} \\
\implies 4p-2 = -\frac{4}{5} \implies p = \frac{3}{10} \\
}
$$
---
## 4
$$
\displaylines{
\text{An urn is chosen at random:} \\
\text{With probability } \theta \text{ urn } A \text{ is chosen, which contains 3 red balls and 1 blue} \\
\text{With probability } 1-\theta \text{ urn } B \text{ is chosen, which contains 1 red ball and 3 blue} \\
\text{After choosing an urn, two balls are drawn with replacement} \\
\text{Let } X = \text{number of red balls drawn} \\
\begin{align}
(a) & \quad \text{Compute } P(X = 2) \\
(b) & \quad \text{Compute } P(A \mid X = 2) \\
(c) & \quad \text{Compute } E[X], Var(X) \\
(d) & \quad \text{Let } P(X = 2) = 0.3 \\
 & \quad \text{Find } \theta \\
\end{align} \\
\\
\text{Solution:} \\
(a) \\
P(X = 2) = P(X = 2 \mid A)P(A) + P(X = 2 \mid B)P(B) = \\
= P(X = 2 \mid A) \cdot \theta + P(X = 2 \mid B)(1-\theta) \\
P(X = 2 \mid A) = \left( \frac{3}{4} \right)^{2} = \frac{9}{16} \\
\implies P(X = 2) = \frac{9\theta}{16} \\
P(X = 2 \mid B) = \left( \frac{1}{4} \right)^{2} = \frac{1}{16} \\
\implies P(X = 2) = \frac{9\theta}{16} + \frac{1}{16} - \frac{\theta}{16} = \frac{8\theta + 1}{16} \\
\\
(b) \\
P(A \mid X = 2) = \frac{P(A \cap X=2)}{P(X = 2)} = \frac{P(X = 2 \mid A)P(A)}{P(X = 2)} = \frac{9\theta}{8\theta+1} \\
\\
(c) \\
P(X = 1) = P(X = 1 \mid A)P(A) + P(X = 1 \mid B)P(B) = \\
= 2 \cdot \frac{3}{4} \cdot \frac{1}{4} \cdot \theta + 2 \cdot \frac{3}{4} \cdot \frac{1}{4} \cdot (1-\theta) = \frac{3}{8} \\
E[X] = P(X=1) + 2P(X=2) = \frac{3}{8} + \frac{8\theta+1}{8} = \theta + \frac{1}{2} \\
E[X^{2}] = P(X=1) + 4P(X=2) = \frac{3}{8} + \frac{8\theta+1}{4} = 2\theta + \frac{5}{8} \\
Var(X) = E[X^{2}] - E[X]^{2} = \theta + \frac{1}{8} \\
\\
(d) \\
\text{Let } P(X = 2) = 0.3 \\
\implies \frac{8\theta+1}{16} = \frac{3}{10} \implies 8\theta = \frac{38}{10} \implies \theta = \frac{38}{80} \\
}
$$
---
## 5
$$
\displaylines{
\text{Three coins are given} \\
\text{Coins 1, 2, 3 land heads with probability } p, q, r \text{ respectively} \\
\text{The game is played as follows:} \\
\begin{align}
1. & \quad \text{Flip coin 1, if the result is T, game is lost} \\
2. & \quad \text{If the result is H, flip coin 2, if the result is H, game is won} \\
3. & \quad \text{If the result is T, flip coin 3, if the result is H, game is won, otherwise game is lost} \\
\end{align} \\
\text{Let probability to reach flip 3 is } 0.3 \\
\text{Conditional on reaching third flip, probability to lose is } \frac{3}{2} \text{ times probability to win} \\
\text{Probability to win the game is } 0.42 \\
\\
(a) \text{ Find } p, q, r \\
(b) \text{ Find probability to win without using coin 3} \\
(c) \text{ Given that player won, find probability that coin 3 was used} \\
(d) \text{ Let three players play, it is known that all three got H in the first} \\
\text{Let } T \text{ be the total number of flips performed by three players} \\
\text{Compute } E[T \mid \text{all three passed the first flip}] \\
\\
\text{Solution:} \\
(a) \\
\text{Let } E \text{ be the event that third flip is reached} \\
\text{Let } W \text{ be the event that player won} \\
\text{Let } L \text{ be the event tat player lost} \\
\text{Let } X_{1}, X_{2}, X_{3} \text{ be the results of each flip} \\
P(E) = 0.3 \\
P(E) = P(X_{1} = H \cap X_{2} = T) = P(X_{1} = H)P(X_{2} = T) = p(1-q) \\
\implies \boxed{ p - pq = 0.3 } \\
P(L \mid E) = \frac{3}{2}P(W \mid E) \implies P(X_{3} = T) = \frac{3}{2}P(X_{3} = H) \\
\implies 1-r = \frac{3}{2}r \implies \boxed{ r = \frac{2}{5} } \\
P(W) = 0.42 \\
P(W) = P(W \mid E)P(E) + P(W \mid E^{\complement})P(E^{\complement}) \\
P(W \mid E^{\complement})P(E^{\complement}) = P(W \cap E^{\complement}) = P(X_{1} = H \cap X_{2} = H) = pq \\
\implies 0.12 + pq = 0.42 \implies pq = 0.3 \implies p = 0.6 \implies \boxed{ q = \frac{1}{2} } \\
\implies \boxed{ \begin{eqsys}
p = 0.6 \\
q = 0.5 \\
r = 0.4 \\
\end{eqsys} } \\
\\
(b) \\
P(W \mid E^{\complement}) = \frac{P(W \cap E^{\complement})}{P(E^{\complement})} = \frac{pq}{0.7} = \frac{0.3}{0.7} = \frac{3}{7} \\
\\
(c) \\
P(E \mid W) = \frac{P(E \cap W)}{P(W)} = \frac{P(W \mid E)P(E)}{P(W)} = \frac{0.12}{0.42} = \frac{2}{7} \\
\\
(d) \\
\text{Let } A = \begin{cases}
1 & \text{all players passed the first flip} \\
0 & \text{otherwise} \\
\end{cases} \\
P(A = 1) = 1 \\
\implies \mathrm{Im}T = \Set{ 6, 7, 8, 9 } \\
\text{Let } \forall i, j \in [3]: X_{i_{j}} \text{ be the result of $j$-th flip by player } i \\
P(T = 6 \mid A) = P(X_{1_{2}} = H \cap X_{2_{2}} = H \cap X_{3_{2}} = H) = q^{3} = 0.125 \\
P(T = 7 \mid A) = \binom{3}{1}q^{2}(1-q) = \frac{3}{8} = 0.375 \\
P(T = 8 \mid A) = \binom{3}{2}q(1-q)^{2} = \frac{3}{8} = 0.375 \\
P(T = 9 \mid A) = (1-q)^{3} = 0.125 \\
\implies E[T \mid A] = \sum_{k=6}^{9} kP(T = k \mid A) = \frac{60}{8} = 7.5 \\
}
$$
