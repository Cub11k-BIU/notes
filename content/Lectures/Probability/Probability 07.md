---
{"publish":true,"created":"10/12/25, 13:02","modified":"2025-12-10T15:29:35.162+02:00","tags":["Academia","Lecture","Probability"],"cssclasses":""}
---

### Example
$$
\displaylines{
\text{Let there be } m \text{ days in a year} \\
\text{Each person is born on day } r \text{ with probability } p_{r} \\
\text{Let there be } n \text{ people} \\
\text{Let } A_{ij} = \text{person number } i \text{ and number } j \text{ were born on the same day} \\
\begin{align}
(a) & \quad P(A_{ij}) \\
(b) & \quad P(A_{13} \mid A_{12}) \\
(c) & \quad P(A_{13} \mid A_{12}) \geq P(A_{13}) \\
\end{align} \\
\\
\text{Let } A_{ij}^{r} = A_{ij} \text{ occured on day } r \\
P(A_{ij}^{r}) = p_{r}^{2} \\
P(A_{ij}) = P\left( \bigcup_{r = 1}^{m} A_{ij}^{r} \right) = \sum_{r=1}^{m} P(A_{ij}^{r}) = \sum_{r=1}^{m} p_{r}^{2} \\
\\
P(A_{13} \mid A_{12}) = \frac{P(A_{13} \cap A_{12})}{P(A_{12})} = \frac{\sum_{r=1}^{m} p_{r}^{3}}{\sum_{r=1}^{m} p_{r}^{2}} \\
\\
P(A_{13} \mid A_{12}) \geq P(A_{13}) \iff \sum_{r=1}^{m} p_{r}^{3} \geq \left( \sum_{r=1}^{m} p_{r}^{2} \right)^{2} \\
\\
\text{We can prove it by finding a random variable } X \text{ such that:} \\
\begin{eqsys}
E[X^{2}] = \sum_{r=1}^{m} p_{r}^{3} \\
E[X] = \sum_{r=1}^{m} p_{r}^{2} \\
\end{eqsys} \\
\text{Let } X(r) = p_{r} \text{ and } P(X = p_{r}) = p_{r} \\
\implies \begin{eqsys}
E[X^{2}] = \sum_{r=1}^{m} X^{2}(r)p_{X}(r) = \sum_{r=1}^{m} p_{r}^{3} \\
E[X] = \sum_{r=1}^{m} X(r)p_{X}(r) = \sum_{r=1}^{m} p_{r}^{2} \\
\end{eqsys} \\
}
$$
### Variance of linear functions #lemma 
$$
\displaylines{
Var(aX + b) = a^{2}Var(X) \\
\\
\text{Proof:} \\
\text{Let } \mu = E[X] \\
\implies E[aX+b] = a\mu + b \\
Var(aX+b) = E[(aX+b-a\mu - b)^{2}] = \\
= E[a^{2}(X-\mu)^{2}] = a^{2}E[(X-\mu)^{2}] = a^{2}Var(X) \\
\implies \boxed{ Var(aX + b) = a^{2}Var(X) } \\
}
$$
# Classical discrete distributions
## Uniform distribution #definition 
In a uniform discrete distribution, every outcome is equally likely
## Bernoulli distribution #definition 
$$
\displaylines{
\text{A random variable } X \sim Bern(p) \iff \begin{eqsys}
P(X = 1) = p \\
P(X = 0) = 1 - p \\
\end{eqsys} \\
\text{Is called a Bernoulli random variable} \\
\text{It also introduces a Bernoulli distribution} \\
\\
\text{In other words, Bernoulli random variable denotes the result of a single trial} \\
}
$$
## Binomial distribution #definition
$$
\displaylines{
\text{A random variable } X \sim Bin(n, p) \iff \forall i \in [0, n]: P(X = i) = \binom{n}{i}p^{i}(1-p)^{n-i} \\
\text{is called a Binomial random variable} \\
\text{Note that } Bern(p) = Bin(1, p) \\
\text{Note also that by the Binomial theorem:} \\
\sum_{i=0}^{\infty} p(i) = \sum_{i=0}^{n} \binom{n}{i}p^{i}(1-p)^{n-i} = (p+(1-p))^{n} = 1^{n} = 1 \\
\\
\text{In other words, Binomial random variable denotes the number of successes in } n \text{ trials} \\
}
$$
### Example
It is known that screws produced by a certain company will be defective with probability $0.01$, independently of one another. The company sells the screws in packages of 10 and offers a money-back guarantee that at most 1 of the 10 screws is defective. What proportion of packages sold must the company replace?
$$
\displaylines{
\text{Let } X = \text{ number of defective screws in a package} \\
P(X > 1) = 1 - P(X = 0) - P(X = 1) = \\
= 1 - \binom{10}{0}(0.01)^{0}(0.99)^{10} - \binom{10}{1}(0.01)^{1}(0.99)^{9} \approx 0.004 \\
}
$$
### Example
Player bets on one of the numbers 1 through 6. Three fair dice are rolled.
For each dice, if the result is the same as player's bet, player receives 1 unit.
If none of the dice have the player's bet, 1 unit is taken from the player. Is the game fair to the player?
$$
\displaylines{
\text{Let } X = \text{player's payout for one bet} \\
P(X = -1) = (1-p)^{3} = \left( \frac{5}{6} \right)^{3} = \frac{125}{216} \\
P(X = 1) = \binom{3}{1}p(1-p)^{2} = \frac{75}{216} \\
P(X = 2) = \binom{3}{2}p^{2}(1-p) = \frac{15}{216} \\
P(X = 3) = p^{3} = \frac{1}{216} \\
\\
E[X] = -\frac{125}{216} + \frac{75}{216} + \frac{30}{216} + \frac{3}{216} = -\frac{17}{216} \\
}
$$
### Properties of Binomial distribution
$$
\displaylines{
\text{Let } X \text{ be a binomial random variable} \\
E[X] = \sum_{i=0}^{n} i \cdot \binom{n}{i}p^{i}(1-p)^{n-i} = \sum_{i=1}^{n} i \cdot \binom{n}{i}p^{i}(1-p)^{n-i} \\
i\binom{n}{i} = n\binom{n-1}{i-1} \\
E[X] = n \sum_{i=1}^{n} \binom{n-1}{i-1}p^{i}(1-p)^{i} = np \sum_{i=1}^{n} \binom{n-1}{i-1}p^{i-1}(1-p)^{(n-1)-(i-1)} = \\
= np \sum_{j=0}^{n-1} \binom{n-1}{j}p^{j}(1-p)^{n-1-j} = np \cdot 1^{n-1} = np \\
\implies \boxed{ E[X] = np } \\
\\
E[X(X-1)] = \sum_{i=0}^{n} i(i-1)\binom{n}{i}p^{i}(1-p)^{n-i} = \sum_{i=2}^{n} i(i-1)\binom{n}{i}p^{i}(1-p)^{n-i} = \\
= n(n-1)\sum_{i=2}^{n} \binom{n-2}{i-2}p^{i}(1-p)^{n-i} = n(n-1)p^{2}\sum_{j=0}^{n-2} \binom{n-2}{j}p^{j}(1-p)^{n-2-j} = \\
n(n-1)p^{2} \\
\implies E[X^{2}] = E[X(X-1)+X] = n^{2}p^{2} - np^{2} + np \\
\implies Var(X) = E[X^{2}] - E[X]^{2} = np - np^{2} = np(1-p) \implies \boxed{ Var(X) = np(1-p) } \\
}
$$
#### Form of a binomial distribution
$$
\displaylines{
\text{Let } X \sim Bin(n, p) \text{ and } p \in (0, 1) \\
\text{Then, } X \text{ first increases monotonically, then decreases monotonically} \\
\text{And the maximum is achieved at } \floor{(n+1)p} \\
\\
\text{Proof:} \\
\text{Let } k \in [1, n] \\
\frac{p_{X}(k)}{p_{X}(k-1)} = \frac{\binom{n}{k}p^{k}(1-p)^{n-k}}{\binom{n}{k-1}p^{k-1}(1-p)^{n-k+1}} = \frac{n-k+1}{k} \cdot \frac{p}{1-p} \\
p_{X}(k) \geq p_{X}(k-1) \iff (n-k+1)p \geq k(1-p) \\
\iff np + p \geq k \iff \boxed{ k \leq (n+1)p } \\
}
$$
## Poisson distribution #definition 
$$
\displaylines{
\text{A random variable } X \sim Pois(\lambda), \lambda > 0 \in \mathbb{R} \iff \forall i \in \mathbb{N}_{0}: P(X = i) = e^{-\lambda}\frac{\lambda^{i}}{i!} \\
\text{is called a Poisson random variable} \\
\text{It also introduces a Poisson distribution} \\
\\
\text{Note that } \sum_{i=0}^{\infty} p_{X}(i) = e^{-\lambda}\sum_{i=0}^{\infty} \frac{\lambda^{i}}{i!} = e^{-\lambda}e^{\lambda} = 1 \\
}
$$
### Approximation of a binomial distribution with a Poisson distribution
$$
\displaylines{
\text{Let } \Set{ X_{i} }_{i \in \mathbb{N}} : \forall i \in \mathbb{N}: X_{i} \sim Bin(n_{i}, p_{i}) \text{ and } n_{i} \cdot p_{i} \approx \lambda \text{ and } n_{i} \to \infty \\
\text{Let } k \in \mathbb{N} \\
\\
\lim_{ i \to \infty } P(X_{i} = k) = \lim_{ i \to \infty } \binom{n_{i}}{k}p_{i}^{k}(1-p_{i})^{n_{i}-k} \approx \\
\approx \lim_{ i \to \infty } \frac{n_{i}!}{(n_{i}-k)!k!} \left( \frac{\lambda}{n_{i}} \right)^{k} \left( 1-\frac{\lambda}{n_{i}} \right)^{n_{i}-k} = \\
= \lim_{ i \to \infty } \underbrace{ \frac{n_{i}(n_{i}-1)\dots(n_{i}-k+1)}{n_{i}^{k}} }_{ \to 1 } \cdot \frac{\overbrace{ \left( 1-\frac{\lambda}{n_{i}} \right)^{n_{i}} }^{ \to e^{-\lambda} }}{\underbrace{ \left( 1-\frac{\lambda}{n_{i}} \right)^{k} }_{ \to 1 }} \cdot \frac{\lambda^{k}}{k!} = \\
= \frac{\lambda^{k}}{k!} \lim_{ i \to \infty } \left( 1-\frac{\lambda}{n_{i}} \right)^{n_{i}} = e^{-\lambda} \frac{\lambda^{k}}{k!} \\
\implies \boxed{ \lim_{ i \to \infty } Bin(n_{i}, p_{i}) \approx Pois(\lambda) } \\
}
$$
