---
{"publish":true,"created":"16/12/25, 10:13","modified":"2026-03-24T14:59:39.155+02:00","tags":["Academia","#Practice","Probability"],"cssclasses":""}
---

## Exercise
Suppose that two teams play a series of games that ends when one of them has won $i$ games. Suppose that each game played is, independently, won by team $A$ with probability $p$. Find the expected number of games that are played when
- (a) $i = 2$
- (b) $i = 3$
Also, show in both cases that this number is maximized when $p = \frac{1}{2}$
$$
\displaylines{
(a) \\
\text{Let } i = 2 \\
\text{Let } X = \text{ number of games played} \\
\text{Let } \Omega = \Set{ (a_{1}, a_{2}, a_{3}) \mid a_{1}, a_{2}, a_{3} \in \Set{ 0, 1 } } \\
a_{i} = 1 \iff A \text{ won game } i \\
X(1, 1, -) = 2 \\
X(0, 0, -) = 2 \\
X(1, 0, -) = 3 \\
X(0, 1, -) = 3 \\
\\
P(X = 0) = 0 \\
P(X = 1) = 0 \\
P(X = 2) = P(1, 1, -) + P(0, 0, -) = p^{2} + (1-p)^{2} \\
P(X = 3) = P(1, 0, -) + P(0, 1, -) = 2p(1 - p) \\
E[X] = 2 \cdot (p^{2}+(1-p)^{2}) + 3 \cdot (2p(1-p)) = \\
= 2p^{2} + 2 - 4p + 2p^{2} + 6p - 6p^{2} = 2 + 2p - 2p^{2} = 2(1+p-p^{2}) \\
\text{Let } f(p) = -2p^{2} + 2p + 2 \\
f'(p) = -4p + 2 \\
f'(p) = 0 \iff p = \frac{1}{2} \\
\implies \max_{p}\{E[X]\} = 2.5 \text{ when } p = \frac{1}{2} \\
}
$$
## Exercise
A sample of 3 items is selected at random from a box containing 20 items of which 4 are defective. Find the expected number of defective items in the sample.
$$
\displaylines{
\text{Let } X = \text{number of defective items in the sample} \\
P(X = 0) = \frac{\binom{16}{3}}{\binom{20}{3}} \\
P(X = 1) = \frac{\binom{4}{1} \cdot \binom{16}{2}}{\binom{20}{3}} \\
P(X = 2) = \frac{\binom{4}{2} \cdot \binom{16}{1}}{\binom{20}{3}} \\
P(X = 3) = \frac{\binom{4}{3}}{\binom{20}{3}} \\
E[X] = \frac{\binom{4}{1} \cdot \binom{16}{2}}{\binom{20}{3}} + 2 \cdot \frac{\binom{4}{2} \cdot \binom{16}{1}}{\binom{20}{3}} + 3 \cdot \frac{\binom{4}{3}}{\binom{20}{3}} \\
}
$$
## Exercise
Suppose $X, Y$ are discrete random variables over $\Omega$. Then $Z = X + Y$ is also a random variable.
Show $E[X+Y] = E[X] + E[Y]$
$$
\displaylines{
\forall \omega \in \Omega: Z(\omega) = X(\omega) + Y(\omega) \\
E[X+Y] = E[Z] = \sum_{\omega \in \Omega} Z(\omega) \cdot P(\Set{ \omega }) = \sum_{\omega \in \Omega} X(\omega)P(\Set{ \omega }) + \sum_{\omega \in \Omega} Y(\omega)P(\Set{ \omega }) = \\
= E[X] + E[Y] \\
}
$$
## Exercise
$$
\displaylines{
\text{Let } X \sim Bin(n, p) \\
\text{Find } E[X], Var(X) \text{ using the previous exercise} \\
\\
\text{Solution:} \\
P(X = i) = \binom{n}{i}p^{i}(1-p)^{n-i} \\
\text{Let } \mathcal{X}_{i} = \begin{cases}
1 & \text{succeess in trial } 1 \\
0 & \text{otherwise} \\
\end{cases} \\
\mathcal{X}_{i} \sim Bern(p) \\
\sum_{i=1}^{n} \mathcal{X}_{i} = X \\
\implies E[X] = E\left[ \sum_{i=1}^{n} \mathcal{X}_{i} \right] = \sum_{i=1}^{n} E[\mathcal{X}_{i}] = \sum_{i=1}^{n} p = np \\
\\
Var(X) = E[X^{2}] - E[X]^{2} \\
E[X^{2}] = E\left[ \left( \sum_{i=1}^{n} \mathcal{X}_{i} \right)^{2} \right] = E\left[ \sum_{i,j = 1}^{n} \mathcal{X}_{i}\mathcal{X}_{j} \right] = \sum_{i,j=1}^{n} E[\mathcal{X}_{i}\mathcal{X}_{j}] \\
\text{Let } Y_{i,j} = \mathcal{X}_{i}\mathcal{X_{j}} \\
Y_{i,j} = \begin{cases}
1 & i \text{ and } j \text{ are both successes} \\
0 & \text{otherwise} \\
\end{cases} \\
\implies E[X^{2}] = \sum_{i,j=1}^{n} E[Y_{i,j}] = \sum_{i\neq j} E[Y_{i,j}] + \sum_{i=1}^{n} E[Y_{i,i}] = \sum_{i\neq j} p^{2} + \sum_{i=1}^{n} p = \\
= n(n-1)p^{2} + np \\
\implies Var(X) = n^{2}p^{2}-np^{2}+np - n^{2}p^{2} = np(1-p) \\
}
$$
## Exercise
A box contains 5 red and 5 blue marbles. Two marbles are withdrawn randomly. If they are the same color, then you win $1.10; if they are different colors, then you
win −$1.00. (That is, you lose $1.00.)
Calculate
- (a) the expected value of the amount you win;
- (b) the variance of the amount you win.
$$
\displaylines{
\text{Let } X = \text{amount of money won} \\
P(X = 1.10) = 2 \cdot \frac{\binom{5}{2}}{\binom{10}{2}} \\
P(X = -1) = \frac{\binom{5}{1} \cdot \binom{5}{1}}{\binom{10}{2}} = 1 - 2 \cdot \frac{\binom{5}{2}}{\binom{10}{2}} \\
E[X] = 1.1 \cdot 2 \cdot \frac{\binom{5}{2}}{\binom{10}{2}} - 1\left( 1-2 \cdot \frac{\binom{5}{2}}{\binom{10}{2}} \right) = \\
= 2.1 \cdot 2 \cdot \frac{\binom{5}{2}}{\binom{10}{2}} - 1 = -\frac{24}{45} \\
E[X^{2}] = (1.1)^{2} \cdot P(X = 1.1) + (-1)^{2} \cdot P(X = -1) = \\
= 1.21 \cdot 2 \cdot \frac{\binom{5}{2}}{\binom{10}{2}} + \left( 1-2 \cdot \frac{\binom{5}{2}}{\binom{10}{2}} \right) = 0.21 \cdot 2 \cdot \frac{\binom{5}{2}}{\binom{10}{2}} + 1 = \frac{471}{450} \\
Var(X) = E[X^{2}] - E[X]^{2} = \frac{471}{450} - \frac{24^{2}}{45^{2}} = \frac{471}{450} - \frac{576}{450} \cdot \frac{10}{45} = \frac{1029}{1350} \\
}
$$
