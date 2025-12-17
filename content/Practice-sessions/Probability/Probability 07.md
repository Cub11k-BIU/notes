---
{"publish":true,"created":"07/12/25, 18:04","modified":"2025-12-16T10:13:25.026+02:00","tags":["Academia","#Practice","Probability"],"cssclasses":""}
---

# Random variables
### Exercise
Let there be two players playing chess with each other. The moment one of them wins the game, the competition stops with a winner. If there is no winner in the first 10 games, the competition also stops, with a draw.
The probability that the first player wins is $0.4$, the probability that the second wins is $0.3$ and for the draw it is $0.3$
$$
\displaylines{
\text{What is the probability that first player will win in a competition?} \\
\text{What is the pmf for the number of games played} \\
\\
\text{Solution:} \\
\text{Let } A = \text{First player wins} \\
\text{Let } A_{i} = \text{First player wins in game } i \\
P(A) = P\left( \bigcup_{i = 1}^{10} A_{i} \right) = \sum_{i=1}^{10} P(A_{i}) = 0.4 \cdot \sum_{i=0}^{9} 0.3^{i} = 0.4 \cdot \frac{1-0.3^{10}}{1-0.3} \\
\\
\text{Let } X = \text{number of games played, } \mathrm{Im}(X) = [1, 10] \subseteq \mathbb{N} \\
\forall i \in [1, 9]: p_{X}(i) = 0.3^{i-1} \cdot 0.7 \text{ and } p_{X}(10) = 0.3^{9} \\
}
$$
### Exercise
$$
\displaylines{
\text{The random variable } X \text{ is said to dollow the distrivution of Benford's law iff} \\
\forall i \in [1, 9]: p_{X}(i) = \log_{10}\left( \frac{i+1}{i} \right) \\
\text{This distribution has been shown to be a good fit for the distribution of the first digit} \\
\text{of many real life data values} \\
\\
\sum_{i=1}^{9} p_{X}(i) = \log_{10}\left( \frac{2}{1} \cdot \frac{3}{2} \cdot \ldots \cdot \frac{10}{9} \right) = \log_{10}(10) = 1 \\
\implies p_{X}(i) \text{ is a probability mass function} \\
\forall j < 1: P(X \leq j) = 0 \\
\forall j > 9: P(X \leq j) = 1 \\
\forall j \in [1, 9]: P(X \leq j) = \sum_{i=1}^{j} p_{X}(i) = \log_{10}(j+1) \\
}
$$
### Exercise
A deck of $n$ cards numbered 1 through $n$ is shuffled and is to be turned over one card at a time. Before each cards is shown you are to guess which card it will be.
The strategy that maximizes the expected number of guessed cards turns out to be guessing 1 continuously until correct, then go on to guessing 2, and so on.
$$
\displaylines{
\text{Let } G \text{ be the number of correct guesses} \\
\text{Determine } P(G = k) \\
\text{Let } E_{k} = \text{cards 1 through } k \text{ are sorted in ascending order} \\
P(G \geq k) = P(E_{k}) \\
P(G > k) = P(G \geq k+1) = P(E_{k+1}) \\
P(G = k) = P(G \geq k) - P(G > k) = P(E_{k}) - P(E_{k+1}) \\
P(E_{k}) = \binom{n}{k} \cdot \frac{(n-k)!}{n!} \\
\implies P(G = k) = \binom{n}{k} \cdot \frac{(n-k)!}{n!} - \binom{n}{k+1} \cdot \frac{(n-k-1)!}{n!} = \frac{1}{k!} - \frac{1}{(k+1)!} = \\
= \frac{(k+1)! - k!}{k!(k+1)!} = \frac{k}{(k+1)!} \\
E[G] = \sum_{k=0}^{n} kp_{G}(k) = \sum_{k=0}^{n} \frac{k^{2}}{(k+1)!}
}
$$
### Exercise
$$
\displaylines{
\text{Let } X \text{ be a discrete random variable} \\
\text{Let } F_{X}(a) = \begin{eqsys}
0 & a < 0 \\
\frac{1}{2} & a \in [0, 1) \\
\frac{3}{5} & a \in [1, 2) \\
\frac{4}{5} & a \in [2, 3) \\
\frac{9}{10} & a \in [3, 3.5) \\
1 & a \geq 3.5 \\
\end{eqsys} \\
\text{Calculate } p_{X}(a) \\
\forall \varepsilon > 0, t \not\in \Set{ 0, 1, 2, 3, 3.5 }: P(X = t) \leq P(x \in (t-\varepsilon, t+\varepsilon]) = \\
= P(x \leq t + \varepsilon) - P(t \leq t - \varepsilon) = F(t+\varepsilon) - F(t-\varepsilon) \underbrace{ = }_{ F \text{ is continuous at } t } F(t) - F(t) = 0 \\
supp(X) = \Set{ 0, 1, 2, 3, 3.5 } \\
p_{X}(0) = P(X = 0) = P(X \leq 0) = \frac{1}{2} = 0.5 \\
p_{X}(1) = P(X = 1) = P(X \leq 1) - P(X \leq 0) = 0.1 \\
p_{X}(2) = P(X = 2) = P(X \leq 2) - P(X \leq 1) = 0.2 \\
p_{X}(3) = P(X = 3) = P(X \leq 3) - P(X \leq 2) = 0.1 \\
p_{X}(2) = P(X = 2) = P(X \leq 3.5) - P(X \leq 3) = 0.1 \\
}
$$
### Exercise
A salesman has two appointments to sell vacuum cleaners. His first appointment will lead to a sale with probability $0.3$ and the second with probability $0.6$
Any sale is equally likely to be for $1000$$ or $500$$
$$
\displaylines{
\text{Let } X \text{ be the total value of sales} \\
\mathrm{Im}(X) = \Set{ 0, 500, 1000, 1500, 2000 } \\
\text{Determine } p_{X} \\
\\
\text{Solution:} \\
p_{X}(0) = (1 - 0.3)(1 - 0.6) = 0.28 \\
p_{X}(500) = \frac{0.3(1-0.6) + (1-0.3)0.6}{2} = 0.27 \\
p_{X}(1000) = \frac{0.3(1-0.6) + (1-0.3)0.6}{2} + \frac{0.3 \cdot 0.6}{4} = 0.315 \\
p_{X}(1500) = \frac{0.3 \cdot 0.6}{4} \cdot 2 = 0.09 \\
p_{X}(2000) = \frac{0.3 \cdot 0.6}{4} = 0.045 \\
}
$$
