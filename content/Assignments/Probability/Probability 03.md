---
{"publish":true,"created":"24/12/25, 16:03","modified":"2026-01-06T16:44:47.413+02:00","tags":["Academia","Assignment","Probability"],"cssclasses":""}
---

## Exercise 0.1
$$
\displaylines{
\text{Let } (\Omega, \mathcal{F}, P) \text{ be a probability space} \\
\text{Let } \forall E \in \mathcal{F}: 1_{E}(\omega) = \begin{cases}
1 & \omega \in E \\
0 & \omega \not\in E \\
\end{cases} \\
}
$$
### 1
$$
\displaylines{
\text{Show } \forall A, B \in \mathcal{F}: 1_{A} \cdot 1_{B} = 1_{A \cap B} \\
\\
\text{Solution:} \\
\forall \omega \in \Omega: (1_{A} \cdot 1_{B})(\omega) = \begin{cases}
1 \cdot 1 & \omega \in A, \omega \in B \\
0 \cdot 1 & \omega \not\in A, \omega \in B \\
1 \cdot 0 & \omega \in A, \omega \not\in B \\
0 \cdot 0 & \omega \in A, \omega \in B \\
\end{cases} = \begin{cases}
1 & \omega \in A \cap B \\
0 & \omega \not\in A \cap B \\
\end{cases} = 1_{A \cap B}(\omega) \\
\implies \boxed{ 1_{A} \cdot 1_{B} = 1_{A \cap B} } \\
}
$$
### 2
$$
\displaylines{
\text{Show } \forall A \in \mathcal{F}: 1_{A^{\complement}} = 1 - 1_{A} \\
\\
\text{Solution:} \\
\forall \omega \in \Omega: \begin{eqsys}{}
1_{A^{\complement}}(\omega) = \begin{cases}
1 & \omega \in A^{\complement} \\
0 & \omega \not\in A^{\complement} \\
\end{cases} = \begin{cases}
1 & \omega \not\in A \\
0 & \omega \in A \\
\end{cases} \\
(1 - 1_{A})(\omega) = \begin{cases}
1 - 1 & \omega \in A \\
1 - 0 & \omega \not\in A \\
\end{cases} = \begin{cases}
1 & \omega \not\in A \\
0 & \omega \in A \\
\end{cases} \\
\end{eqsys} \\
\implies \boxed{ 1_{A^{\complement}} = 1 - 1_{A} } \\
}
$$
### 3
$$
\displaylines{
\text{Let } A_{1}, \dots, A_{n} \in \mathcal{F} \\
\text{Prove: } 1_{\bigcup_{i=1}^{n} A_{i}} = \sum_{k=1}^{n} (-1)^{k+1} \sum_{1\leq i_{1} < \dots < i_{k} \leq n} 1_{\bigcap_{j=1}^{k} A_{i_{j}}} \\
\\
\text{Proof:} \\
\text{By De Morgan laws: } \bigcup_{i=1}^{n} A_{i} = \left( \bigcap_{i=1}^{n} A_{i}^{\complement} \right)^{\complement} \\
\implies 1_{\bigcup_{i=1}^{n} A_{i}} = 1_{\left( \bigcap_{i=1}^{n} A_{i}^{\complement} \right)^{\complement}} = 1 - 1_{\bigcap_{i=1}^{n} A_{i}^{\complement}} = 1 - \prod_{i=1}^{n} 1_{A_{i}^{\complement}} = 1 - \prod_{i=1}^{n} (1 - 1_{A_{i}}) \\
\text{Algebraically, } \prod_{i=1}^{n} (1 - 1_{A_{i}}) = \sum_{F \subseteq [1, n]} (-1)^{\abs{F}} \prod_{i \in F} 1_{A_{i}} \\
\sum_{F \subseteq [1, n]} (-1)^{\abs{F}} \prod_{i \in F} 1_{A_{i}} = \sum_{F \subseteq [1, n]} (-1)^{\abs{F}} 1_{\bigcap_{i \in F} A_{i}} \\
F = \emptyset \implies \bigcap_{i \in F} A_{i} = \Set{ \omega \in \Omega \mid \forall i \in \emptyset: \omega \in A_{i} } = \Omega \implies 1_{\bigcap_{i \in F} A_{i}} = 1 \\
\implies \prod_{i=1}^{n} (1 - 1_{A_{i}}) = 1 + \sum_{\emptyset \neq F \subseteq [1, n]} (-1)^{\abs{F}} 1_{\bigcap_{i \in F} A_{i}} \\
\implies 1 - \prod_{i=1}^{n} (1 - 1_{A_{i}}) = 1 - 1 - \sum_{F \subseteq [1, n]} (-1)^{\abs{F}} 1_{\bigcap_{i \in F} A_{i}} = \sum_{F \subseteq [1, n]} (-1)^{\abs{F}+1} 1_{\bigcap_{i \in F} A_{i}} \\
\text{Let } \abs{F} = k \\
F = \Set{ i_{1}, \dots, i_{k} } \subseteq [1, n] \\
\implies \sum_{F \subseteq [1, n]} (-1)^{\abs{F}+1} 1_{\bigcap_{i \in F} A_{i}} = \sum_{k=1}^{n} (-1)^{k+1} \sum_{1 \leq i_{1} < \dots < i_{k} \leq n} 1_{\bigcap_{j=1}^{k} A_{i_{j}}} \\
\implies \boxed{ 1_{\bigcup_{i=1}^{n} A_{i}} = \sum_{k=1}^{n} (-1)^{k+1} \sum_{1 \leq i_{1} < \dots < i_{k} \leq n} 1_{\bigcap_{j=1}^{k} A_{i_{j}}} } \\
}
$$
### 4
$$
\displaylines{
\text{Use expectation to prove: } P\left( \bigcup_{i=1}^{n} A_{i} \right) = \sum_{k=1}^{n} (-1)^{k+1} \sum_{1 \leq i_{1} < \dots < i_{k} \leq n} P\left( \bigcap_{j=1}^{k} A_{i_{j}} \right) \\
\\
\text{Proof:} \\
\text{Let there be indicator random variable $1_{A_{i}}$ for each } A_{i} \\
\implies P\left( \bigcup_{i=1}^{n} A_{i} \right) = P\left( 1_{ \bigcup_{i=1}^{n} A_{i}} = 1 \right) \\
\forall E \in \mathcal{F}: E\left[ 1_{E} \right] = 1 \cdot P\left( 1_{E} = 1 \right) + 0 \cdot P\left( 1_{E} = 0 \right) = P\left( 1_{E} = 1 \right) \\
1_{ \bigcup_{i=1}^{n} A_{i}} = \sum_{k=1}^{n} (-1)^{k+1} \sum_{1 \leq i_{1} < \dots < i_{k} \leq n} 1_{\bigcap_{j=1}^{k} A_{i_{j}}} \\
\implies P\left( 1_{ \bigcup_{i=1}^{n} A_{i}} = 1 \right) = E\left[ 1_{ \bigcup_{i=1}^{n} A_{i}} \right] = E\lrs{\sum_{k=1}^{n} (-1)^{k+1} \sum_{1 \leq i_{1} < \dots < i_{k} \leq n} 1_{\bigcap_{j=1}^{k} A_{i_{j}}}} = \\
= \sum_{k=1}^{n} (-1)^{k+1} \sum_{1 \leq i_{1} < \dots < i_{k} \leq n} E\left[ 1_{\bigcap_{j=1}^{k} A_{i_{j}}} \right] = \sum_{k=1}^{n} (-1)^{k+1} \sum_{1 \leq i_{1} < \dots < i_{k} \leq n} P\left( 1_{\bigcap_{j=1}^{k} A_{i_{j}}} = 1 \right) = \\
= \sum_{k=1}^{n} (-1)^{k+1} \sum_{1 \leq i_{1} < \dots < i_{k} \leq n} P\left( \bigcap_{j=1}^{k} A_{i_{j}} \right) \\
\implies \boxed{ P\left( \bigcup_{i=1}^{n} A_{i} \right) = \sum_{k=1}^{n} (-1)^{k+1} \sum_{1 \leq i_{1} < \dots < i_{k} \leq n} P\left( \bigcap_{j=1}^{k} A_{i_{j}} \right) } \\
}
$$
## Exercise 0.2
$$
\displaylines{
\text{Let } X \text{ be a random variable} \\
\text{Let } \mathrm{Im}X = \Set{ 1, 2, \dots } \\
\text{Show } E[X] = \sum_{i=1}^{\infty} P(X \geq i) \\
\\
\text{Solution:} \\
E[X] = \sum_{k=1}^{\infty} kP(X = k) = \sum_{k=1}^{\infty} \sum_{i=1}^{k} P(X = k) \\
k \in [1, \infty], i \in [1, k] \implies (i, k) \in \Set{ (i, k) \in \mathbb{N}^{2} \mid 1 \leq i \leq k } \implies i \in [1, \infty), k \in [i, \infty) \\
\implies \boxed{ E[X] = \sum_{i=1}^{\infty} \sum_{k=i}^{\infty} P(X = k) = \sum_{i=1}^{\infty} P(X \geq i) } \\
}
$$
## Exercise 0.3
A gambler plays independent rounds of a casino game. In each round he wins with probability $p$ and loses with probability $1-p$. He will definitely play at least 3 rounds. After that, if he accumulates a total of 2 wins (including wins he got in the first 3 rounds) before the 5th round, he stops playing immediately. Otherwise, he stops playing after the 5th round. For example, if he won in the first 2 rounds, he also play the third round and then he quits. If he lost the first round and won round 2 and round 3, then he quits immediately after round 3. If he won once or less in the first 3 rounds, he continues to play until he accumulates a total of 2 wins, or after the 5th round, whatever comes first.
1. Express the number of rounds in terms of Geometric random variables, and
max, min operators.
2. Find the probability mass function of the number of rounds.
3. What is the expectation and variance of the number of rounds?
$$
\displaylines{
(1) \\
\text{Let } X_{1} = \text{number of rounds played until the first win (including)} \\
\text{Let } X_{2} = \text{number of rounds played after the first win until the second win (including)} \\
\text{Clearly, } X_{1} \text{ and } X_{2} \text{ are geometric random variables} \\
\text{Let } X = \text{number of rounds played} \\
X \text{ can be expressed as } X = \max(3, \min(X_{1}+X_{2}, 5)) \\
\\
(2) \\
\mathrm{Im}X = \Set{ 3, 4, 5 } \\
\text{To play exactly 3 rounds, gambler needs to win 2 or more times out of 3} \\
P(X = 3) = \binom{3}{2}p^{2}(1-p) + \binom{3}{3}p^{3} \\
\text{To play exactly 4 rounds, gambler needs to win 1 time out of 3 and then win again} \\
P(X = 4) = \binom{3}{1}p(1-p)^{2} \cdot p \\
\text{To play exactly 5 rounds, gambler needs to win no more than 1 time in 4 rounds} \\
P(X = 5) = \binom{4}{0}(1-p)^{4} + \binom{4}{1}p(1-p)^{3} \\
\\
\implies \boxed{ p_{X}(n) = \begin{cases}
3p^{2}(1-p) + p^{3} & n = 3 \\
3p^{2}(1-p)^{2} & n = 4 \\
(1-p)^{4} + 4p(1-p)^{3} & n = 5 \\
0 & \text{otherwise} \\
\end{cases} } \\
\\
(3) \\
E[X] = \sum_{n=3}^{5} np_{X}(n) = \\
= 3(3p^{2}(1-p) + p^{3}) + 4(3p^{2}(1-p)^{2}) + 5((1-p)^{4} + 4p(1-p)^{3}) = \\
= 3(3p^{2}-2p^{3}) + 4(3p^{2} - 6p^{3} + 3p^{4}) + 5(1 - 6p^{2} + 8p^{3} - 3p^{4}) = \\
= 9p^{2} - 6p^{3} + 12p^{2} - 24p^{3} + 12p^{4} + 5 - 30p^{2} + 40p^{3} - 15p^{4} \\
\implies \boxed{ E[X] = 5 - 9p^{2} + 10p^{3} - 3p^{4} } \\
E[X^{2}] = \sum_{n=3}^{5} n^{2}p_{X}(n) = 9(3p^{2}-2p^{3}) + 16(3p^{2} - 6p^{3} + 3p^{4}) + 25(1 - 6p^{2} + 8p^{3} - 3p^{4}) = \\
= 25 - 75p^{2} + 86p^{3} - 27p^{4} \\
E[X]^{2} = (5 - 9p^{2} + 10p^{3} - 3p^{4})^{2} = \\
= 25 - 90p^{2} + 100p^{3} + 51p^{4} - 180p^{5} + 154p^{6} - 60p^{7} + 9p^{8} \\
\implies \boxed{ Var(X) = E[X^{2}] - E[X]^{2} = 15p^{2} - 14p^{3} - 78p^{4} + 180p^{5} - 154p^{6} + 60p^{7} - 9p^{8} } \\
}
$$
## Exercise 0.4
Five distinct numbers are randomly distributed to players numbered 1 through 5. Whenever two players compare their numbers, the one with the higher one is declared the winner. Initially, players 1 and 2 compare their numbers; the winner then compares her number with that of player 3, and so on. Let $X$ denote the number of times player 1 is a winner. Find $P(X = i), i = 0, 1, 2, 3, 4$.
$$
\displaylines{
\text{Let } n_{1} < n_{2} < n_{3} < n_{4} < n_{5} \text{ be the five numbers} \\
\text{Let } X_{k} = \text{number of } k\text{-th player} \\
\begin{align}
 & X_{1} = n_{1} \implies X = 0 \\
 & X_{1} = n_{2} \implies \begin{cases}
X = 1 & X_{2} = n_{1} \\
X = 0 & X_{2} \in \Set{ n_{3}, n_{4}, n_{5} } \\
\end{cases} \\
 & X_{1} = n_{3} \implies \begin{cases}
X = 2 & X_{2}, X_{3} \in \Set{ n_{1}, n_{2} } \\
X = 1 & X_{2} \in \Set{ n_{1}, n_{2} }, X_{3} \in \Set{ n_{4}, n_{5} } \\
X = 0 & X_{2} \in \Set{ n_{4}, n_{5} } \\
\end{cases} \\
 & X_{1} = n_{4} \implies \begin{cases}
X = 3 & X_{5} = n_{5} \\
X = 2 & X_{4} = n_{5} \\
X = 1 & X_{3} = n_{5} \\
X = 0 & X_{2} = n_{5} \\
\end{cases} \\
 & X_{1} = n_{5} \implies X = 4 \\
\end{align} \\
\forall i \in [1, 5]: P(X_{1} = n_{i}) = \frac{1}{5} \\
P(X = 0) = P(X_{1} = n_{1}) + P(X_{1} = n_{2} \cap X_{2} \in \Set{ n_{3}, n_{4}, n_{5} }) + \\
+ P(X_{1} = n_{3} \cap X_{2} \in \Set{ n_{4}, n_{5} }) + P(X_{1} = n_{4} \cap X_{2} = n_{5}) = \\
= \frac{1}{5} + \frac{1}{5} \cdot \frac{3}{4} + \frac{1}{5} \cdot \frac{2}{4} + \frac{1}{5} \cdot \frac{1}{4} = \frac{1}{2} \\
P(X = 1) = P(X_{1} = n_{2} \cap X_{2} = n_{1}) + P(X_{1} = n_{3} \cap X_{2} \in \Set{ n_{1}, n_{2} } \cap X_{3} \in \Set{ n_{4}, n_{5} }) + \\
+ P(X_{1} = n_{4} \cap X_{3} = n_{5}) = \\
= \frac{1}{5} \cdot \frac{1}{4} + \frac{1}{5} \cdot \frac{2}{4} \cdot \frac{2}{3} + \frac{1}{5} \cdot \frac{1}{4} = \frac{1}{10} + \frac{1}{15} = \frac{1}{6} \\
P(X = 2) = P(X_{1} = n_{3} \cap X_{2}, X_{3} \in \Set{ n_{1}, n_{2} }) + P(X_{1} = n_{4} \cap X_{4} = n_{5}) = \\
= \frac{1}{5} \cdot \frac{1}{6} + \frac{1}{5} \cdot \frac{1}{4} = \frac{1}{12} \\
P(X = 3) = P(X_{1} = n_{4} \cap X_{5} = n_{5}) = \frac{1}{5} \cdot \frac{1}{4} = \frac{1}{20} \\
P(X = 4) = P(X_{1} = n_{5}) = \frac{1}{5} \\
\implies \boxed{ p_{X}(i) = \begin{cases}
\frac{1}{2} & i = 0 \\
\frac{1}{6} & i = 1 \\
\frac{1}{12} & i = 2 \\
\frac{1}{20} & i = 3 \\
\frac{1}{5} & i = 4 \\
\end{cases} \\ }
}
$$
## Exercise 0.5
$$
\displaylines{
\text{Let } X \text{ be a random variable} \\
\text{Let } F_{X}(b) = \begin{cases}
0 & b < 0 \\
\frac{b}{4} & b \in [0, 1) \\
\frac{1}{2} + \frac{b-1}{4} & b \in [1, 2) \\
\frac{11}{12} & b \in [2, 3) \\
1 & b \geq 3 \\
\end{cases} \\
\text{Find } P(X = i), i \in \Set{ 1, 2, 3 } \\
\text{Find } P\left( \frac{1}{2} < X < \frac{3}{2} \right) \\
\\
\text{Solution:} \\
F_{X} \text{ has a total of 3 jump discontinuities at 1, 2 and 3} \\
\implies \forall i \in \Set{ 1, 2, 3 }: P(X = i) = F_{X}(i) - \lim_{ b \to i^{-} } F_{X}(b) \\
\begin{align}
& P(X = 1) = F_{X}(1) - \lim_{ b \to 1^{-} } \frac{b}{4} = \frac{1}{2} + \frac{0}{4} - \frac{1}{4} = \frac{1}{4} \\
& P(X = 2) = F_{X}(2) - \lim_{ b \to 2^{-} } \left( \frac{1}{2} + \frac{b-1}{4} \right) = \frac{11}{12} - \frac{1}{2} - \frac{1}{4} = \frac{1}{6} \\
& P(X = 3) = F_{X}(3) - \lim_{ b \to 3^{-} } \frac{11}{12} = 1 - \frac{11}{12} = \frac{1}{12} \\
\end{align} \\
\\
P\left( \frac{1}{2} < X < \frac{3}{2} \right) = P\left( \frac{1}{2} < X \leq \frac{3}{2} \right) - P\left( X = \frac{3}{2} \right) = \\
= F_{X}\left( \frac{3}{2} \right) - F_{X}\left( \frac{1}{2} \right) - \left( F_{X}\left( \frac{3}{2} \right) - \lim_{ b \to \frac{3}{2}^{-} } F_{X}(b) \right) = \\
= \lim_{ b \to \frac{3}{2}^{-} } F_{X}(b) - F_{X}\left( \frac{1}{2} \right) = \frac{1}{2} + \frac{1}{8} - \frac{1}{8} = \frac{1}{2} \\
\implies \boxed{ \begin{eqsys}
P(X = 1) = \frac{1}{4} \\
P(X = 2) = \frac{1}{6} \\
P(X = 3) = \frac{1}{12} \\
P\left( \frac{1}{2} < X < \frac{3}{2} \right) = \frac{1}{2} \\
\end{eqsys} } \\
}
$$
## Exercise 0.6
State your assumptions. Suppose that the average number of cars abandoned weekly on a certain highway is 2.2. Approximate the probability that there will be
- (a) no abandoned cars in the next week;
- (b) at least 2 abandoned cars in the next week.
$$
\displaylines{
\text{We assume that each week, number of abandoned cars is} \\
\text{independent of any other week} \\
\text{We assume that the maximum possible number of cars per week is infinite} \\
\\
\text{We then can consider each week as independent trials, where probability} \\
\text{that some car will be abandoned (one trial) is } p \\
\text{Each week is then a binomial distribution, with an expected value of } 2.2 \\
\text{Given that, we can approximate each week with a Poisson distribution, with } \lambda = 2.2 \\
\text{Let } X = \text{number of abandoned cars in a week} \\
\text{We assume } X \sim Pois(\lambda) \\
\implies \forall i \in \mathbb{N}_{0}: P(X = i) = e^{-\lambda} \frac{\lambda^{i}}{i!} \\
\\
(a) \\
P(\text{no abandoned cars this week}) = P(X = 0) = e^{-\lambda} = e^{-2.2} \approx \boxed{ 0.11 } \\
(b) \\
P(\text{at least 2 abandoned cars this week}) = P(X \geq 2) = 1 - P(X = 1) - P(X = 0) = \\
1 - e^{-\lambda}\lambda - e^{-\lambda} = 1 - 2.2e^{-2.2} - e^{-2.2} \approx 1 - 0.24 - 0.11 = \boxed{ 0.65 } \\
}
$$
## Exercise 0.7
A factory produces $10^{7}$ electronic components in a month. Each
component is defective with probability $p = 5 \cdot 10^{-7}$, independently of the others.
Let $X$ denote the number of defective components produced in a given month.
- (a) Find the probability that exactly 3 defective components are produced
- (b) Find probability that at least 2 defective components are produced
$$
\displaylines{
\text{Clearly, } X \sim Bin(10^{7}, 5 \cdot 10^{-7}) \\
p = 5 \cdot 10^{-7} \\
\\
(a) \\
\boxed{ P(X = 3) = \binom{10^{7}}{3}p^{3}(1-p)^{10^{7}-3} } \\
\\
(b) \\
\boxed{ P(X \geq 2) = 1 - P(X \leq 2) = 1 - \sum_{i=0}^{2} \binom{10^{7}}{i}p^{i}(1-p)^{10^{7}-i} } \\
\\
\text{Note } X \sim Pois(5) \\
P(X = 3) = e^{-5}\frac{5^{3}}{3!} \approx 0.14 \\
P(X \geq 2) = 1 - 5e^{-5} - e^{-5} \approx 0.96 \\
}
$$
## Exercise 0.8
### 1
$$
\displaylines{
\text{Let } X \sim Bin(n, p) \\
\text{Find } E[e^{X}] \\
\\
\text{Solution:} \\
\text{Let } Y = e^{X} \\
\mathrm{Im}X = \Set{ 0, 1, \dots, n } \implies \mathrm{Im}Y = \Set{ 1, e, e^{2}, \dots, e^{n} } \\
[Y = e^{k} \iff X = k] \implies P(Y = e^{k}) = P(X = k) \\
\implies E[e^{X}] = E[Y] = \sum_{k=0}^{n} e^{k}P(Y = e^{k}) = \sum_{k=0}^{n} e^{k}P(X = k) = \sum_{k=0}^{n} e^{k}\binom{n}{k}p^{k}(1-p)^{n-k} \\
\text{By Binomial theorem: }  \sum_{k=0}^{n} \binom{n}{k}(ep)^{k}(1-p)^{n-k} = (1-p+pe)^{n} \\
\implies \boxed{ E[e^{X}] = (1-p+pe)^{n} } \\
}
$$
### 2
Independent trials are performed, each with probability $p$ of success. Let $N$ denote the number of trials needed to obtain exactly $k$ successes. Compute the expectation and variance of $N$. (Hint: $N$ can be represented as a sum).
$$
\displaylines{
\forall i \in [1, k]: \text{Let } X_{i} = \text{number of trials after } (i-1)\text{-th success and before } i\text{-th success} \\
\implies N = \sum_{i=1}^{k} X_{i} \\
\forall i \in [1, k]: X_{i} \sim Geom(p) \\
\implies \boxed{ E[N] = E\left[ \sum_{i=1}^{k} X_{i} \right] = \sum_{i=1}^{k} E[X_{i}] = \sum_{i=1}^{k} \frac{1}{p} = \frac{k}{p} } \\
\\
N = i \implies k\text{-th success is obtained in } i\text{-th trial} \\
\implies P(N = i) = \binom{i-1}{k-1}p^{k}(1-p)^{i-k} \\
\implies E[N] = \sum_{i=k}^{\infty} i\binom{i-1}{k-1}p^{k}(1-p)^{i-k} = kp^{k} \sum_{i=k}^{\infty} \binom{i}{k}(1-p)^{i-k} = \\
= kp^{k}\sum_{m=0}^{\infty} \binom{m+k}{k}(1-p)^{m} \\
\sum_{m=0}^{\infty} \binom{m+k}{k}x^{m} = \frac{1}{(1-x)^{k+1}} \text{ when } \abs{x} < 1 \\
\implies \boxed{ E[N] = kp^{k} \cdot \frac{1}{p^{k+1}} = \frac{k}{p} } \\
Var(N) = E[N^{2}] - E[N]^{2} \\
E[N(N+1)] = \sum_{i=k}^{\infty} i(i+1)\binom{i-1}{k-1}p^{k}(1-p)^{i-k} = \\
= k(k+1)p^{k}\sum_{i=k}^{\infty} \binom{i+1}{k+1}(1-p)^{(i+1)-(k+1)} \\
\sum_{i=k}^{\infty} \binom{i+1}{k+1}(1-p)^{(i+1)-(k+1)} = \sum_{m=0}^{\infty} \binom{m+k+1}{k+1}(1-p)^{m} = \frac{1}{p^{k+2}} \\
\implies E[N(N+1)] = \frac{k(k+1)}{p^{2}} \\
\implies E[N^{2}] = E[N(N+1)] - E[N] = \frac{k(k+1)}{p^{2}} - \frac{k}{p} = \frac{k^{2}+k-kp}{p^{2}} \\
\implies \boxed{ Var(N) = E[N^{2}] - E[N]^{2} = \frac{k^{2}+k-kp}{p^{2}} - \frac{k^{2}}{p^{2}} = \frac{k(1-p)}{p^{2}} } \\
\\
\text{Note that the same can be derived by stating } \forall i \neq j: X_{i} \text{ is independent of } X_{j} \\
\implies Var(N) = Var\left( \sum_{i=1}^{k} X_{i} \right) = \sum_{i=1}^{k} Var(X_{i}) = k \cdot \frac{1-p}{p^{2}} \\
}
$$
