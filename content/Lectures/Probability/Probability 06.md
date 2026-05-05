---
{"publish":true,"created":"03/12/25, 13:02","modified":"2026-03-24T15:01:00.122+02:00","tags":["Academia","Lecture","Probability"],"cssclasses":""}
---

# Random variables
## Discrete random variable #definition 
$$
\displaylines{
\text{Let } \Omega \text{ be the sample space} \\
\text{Let } f: \Omega \to \mathbb{R} \\
\text{In addition, } \Set{ a \in \mathbb{R} | P(f = a) > 0 } \preccurlyeq \mathbb{N} \\
\text{Meaning that the number of values that} \\
f \text{ admits with a positive probability is at most countable} \\
\\
f \text{ is then called a random variable} \\
\text{And the question of interest is } P(f(\omega) = a) \\
\text{Meaning the probability of } f \text{ being equal to some value,} \\
\text{without caring about the actual outcome} \\
\text{Clearly, sum of probabilities for each possible } a \in \mathrm{Im}(f) \text{ must be } 1 \\
\sum_{a \in \mathrm{Im}(f)} P(f(\omega) = a) = 1 \\
\\
\text{Note that this definition is indeed only suitable for countable "image",} \\ 
\text{as otherwise the probability of } f(\omega) = a \text{ is always zero, as opposed to } f(\omega) \in [a, b] \\
}
$$
#### Example
$$
\displaylines{
\text{Let } \Omega \text{ be the sample space of three fair coins being tossed} \\
\text{Let } f: \Omega \to \mathbb{R}, f(C_{1}, C_{2}, C_{3}) = \mathcal{X}_{H}(C_{1}) + \mathcal{X}_{H}(C_{2}) + \mathcal{X}_{H}(C_{3}) = \text{\# of heads} \\
\text{There are } 8 \text{ outcomes} \\
\text{And } f[\Omega] = \Set{ 0, 1, 2, 3 } \\
\begin{aeqsys}
 & P(f(\omega) = 0) = P(T, T, T) = \frac{1}{8} \\
 & P(f(\omega) = 1) = \binom{3}{1} \cdot P(T, T, H) = \frac{3}{8} \\
 & P(f(\omega) = 2) = \binom{3}{2} \cdot P(T, H, H) = \frac{3}{8} \\
 & P(f(\omega) = 3) = P(H, H, H) = \frac{1}{8} \\
\end{aeqsys} \\
}
$$
#### Example
$$
\displaylines{
\text{Let there be an urn with 20 balls numbered 1 through 20} \\
\text{We take out, without replacement, 4 balls} \\
\text{Let } X: \Omega \to \mathbb{R}, X(B_{1}, B_{2}, B_{3}, B_{4}) = \max\{B_{1}, B_{2}, B_{3}, B_{4}\} \\
\text{Find the random variable } X \\
\\
\text{Solution:} \\
\mathrm{Im}(X) = [4, 20] \subseteq \mathbb{N} \\
\forall i \in [4, 20]: P(X = i) = \frac{\binom{i-1}{3}}{\binom{20}{4}} \\
P(X \geq 10) = 1 - P(X < 10) = 1 - \frac{\binom{9}{4}}{\binom{20}{4}} \\
}
$$
#### Example
$$
\displaylines{
\text{Let there be trials} \\
\text{In each trial, we flip an asymmetrical coin } (p, 1-p) \text{ not more than } n \text{ times} \\
\text{until the first head} \\
\text{Let } X \text{ be the number of trials performed} \\
\text{Find the random variable } X \\
\\
\text{Solution:} \\
\mathrm{Im}(X) = [1, n] \subseteq \mathbb{N} \\
\forall k \in [1, n-1]: P(X = k) = (1-p)^{k-1}p \\
P(X = n) = (1-p)^{n-1} \\
}
$$
### Probability mass function #definition 
$$
\displaylines{
\text{Let } X \text{ be a discrete random variable} \\
\text{Then } p: \mathbb{R} \to [0, 1], p(a) = P(X = a) \text{ is a probability mass function} \\
}
$$
#### Example
$$
\displaylines{
\text{Let } X \text{ be a random variable} \\
\text{Let } \lambda \in \mathbb{R}^{+} \\
\text{Let } \forall i \in \mathbb{N}: p(i) = c\frac{\lambda^{i}}{i!} \\
\text{Find } P(X = 0) \text{ and } P(X \geq 2) \\
\\
\text{Solution:} \\
\sum_{i=1}^{\infty} \frac{c\lambda^{i}}{i!} = 1 \implies ce^{\lambda} = 1 \implies c = e^{-\lambda} \\
\implies P(X = 0) = p(0) = c = e^{-\lambda} \\
P(X \geq 2) = 1 - P(X = 0) - P(X = 1) = 1 - e^{-\lambda} - \lambda e^{-\lambda} \\
}
$$
### Cumulative distribution function #definition 
$$
\displaylines{
\text{Let } X \text{ be a random variable} \\
\text{Let } F: \mathbb{R} \to [0, 1], F(a) = P(X \leq a) = \sum_{\forall x \leq a} p(x) \\
F \text{ is then called a cumulative distribution function} \\
}
$$
### Expected value / Mathematical expectation #definition 
$$
\displaylines{
\text{Let } X \text{ be a discrete random variable} \\
\text{Then, } E[X] = \sum_{x: p(x) > 0} xp(x) \text{ is an expected value} \\
\\
\text{An interesting property is the linearity of } E: \\
\text{Let } \forall x \in \mathrm{Im}(X): cX = cx \iff X = x \\
\text{Let } \forall x \in \mathrm{Im}(X): X+a = x+a \iff X = x \\
\text{Then} \\
E[cX] = \sum cxp(x) = c \sum xp(x) = cE[X] \\
E[X + a] = \sum (x+a)p(x) = \sum xp(x) + a\sum p(x) = E[X] + a \\
}
$$
#### Example
$$
\displaylines{
\text{A contestant in a quiz has to answer two questions, he chooses the order} \\
\text{In order to answer the second question, he needs to answer the previous one correctly} \\
\text{Given rewards } V_{1}, V_{2} \text{ and correct answer probabilities } P_{1}, P_{2} \\
\text{Which question should he attempt first to maximize the reward?} \\
\\
\text{Solution:} \\
\text{Starting with } Q_{1} \text{ the possible rewards random variable is:} \\
\begin{eqsys}
p_{1}(0) = 1 - P_{1} \\
p_{1}(V_{1}) = P_{1}(1-P_{2}) \\
p_{1}(V_{1}+V_{2}) = P_{1}P_{2} \\
\end{eqsys} \implies E[X_{1}] = V_{1}P_{1}(1-P_{2}) + (V_{1}+V_{2})P_{1}P_{2} \\
\text{Symmetrically, } \begin{eqsys}
p_{2}(0) = 1 - P_{2} \\
p_{2}(V_{2}) = P_{2}(1-P_{1}) \\
p_{2}(V_{1}+V_{2}) = P_{2}P_{1} \\
\end{eqsys} \implies E[X_{2}] = V_{2}P_{2}(1-P_{1}) + (V_{1}+V_{2})P_{1}P_{2} \\
\\
E[X_{1}] \geq E[X_{2}] \iff V_{1}P_{1}(1-P_{2}) \geq V_{2}P_{2}(1-P_{1}) \iff V_{1} \frac{P_{1}}{1-P_{1}} \geq V_{2} \frac{P_{2}}{1-P_{2}} \\
}
$$
#### Example
$$
\displaylines{
\text{Let there be 120 students and three buses, with 36, 40 and 44 students respectively} \\
\text{When buses arrive, we randomly choose one student out of 120} \\
\text{Let } X \text{ be the number of students in this student's bus} \\
\\
\text{Solution:} \\
P(X = 36) = \frac{36}{120} \\
P(X = 40) = \frac{40}{120} \\
P(X = 44) = \frac{44}{120} \\
E[X] = \frac{36^{2}}{120} + \frac{40^{2}}{120} + \frac{44^{2}}{120} \approx 40.27 \\
}
$$
#### Expectation of a function of random variable #lemma 
$$
\displaylines{
\text{Let } X \text{ be a discrete random variable} \\
\text{Let } g: \mathbb{R} \to \mathbb{R} \\
\text{Let } \forall a \in \mathrm{Im}(X): g(X) = g(a) \iff X = a \\
\text{Note that } g(X) \text{ is also a random variable} \\
\text{To calculate } E[g(X)] \text{ we can calculate } p_{g} \text{ and then calculate } E[g(X)] \text{ by definition} \\
\\
\text{The better proposition is as follows:} \\
E[g(X)] = \sum_{i} g(x_{i})p(x_{i}) \\
\\
\text{Proof:} \\
\sum_{i} g(x_{i})p(x_{i}) = \sum_{j} \sum_{i: g(x_{i}) = y_{j}} y_{j}p(x_{i}) = \\
= \sum_{j} y_{j} \sum_{i:g(x_{i}) = y_{j}} p(x_{i}) = \sum_{j} y_{j}P(g(X) = y_{j}) = E[g(X)] \\
}
$$
### Variance #definition 
$$
\displaylines{
\text{Let } X \text{ be a discrete random variable} \\
\text{Let } E[X] = \mu \\
\text{Then, } Var(X) = E[\lrp{X - \mu}^{2}] \text{ is called variance and measures the average spread} \\
\text{of } X \text{ from its expected value} \\
\\
\text{Note an alternative formula:} \\
Var(X) = E[(X - \mu)^{2}] = \sum_{x} (x-\mu)^{2}p(x) = \sum_{x} (x^{2}-2x\mu+\mu^{2})p(x) = \\
= E[X^{2}] - 2\mu E[X] + E[X]^{2} = E[X^{2}] - E[X]^{2} \\
}
$$
#### Variance of a linear function on random variable #lemma 
$$
\displaylines{
\forall a, b \in \mathbb{R}: Var(aX + b) = a^{2}Var(X) \\
\\
\text{Proof:} \\
\text{Let } E[X] = \mu \\
E[aX+b] = a\mu + b \\
Var(aX+b) = E[(ax+b - a\mu-b)^{2}] = \\
= E[a^{2}(X-\mu)^{2}] = a^{2}E[(X-\mu)^{2}] = a^{2}Var(X) \\
\\
\text{This also yields an interesting corollary:} \\
Var(X) \geq 0 \implies E[X^{2}] - E[X]^{2} \geq 0 \implies E[X^{2}] \geq E[X]^{2} \\
}
$$
### Friendship paradox
$$
\displaylines{
\text{Let there be } n \text{ people} \\
\text{Let some people be friends to each other} \\
\text{Let } \forall i \in [1, n]: f(i) = \text{number of friends of person } i \\
\text{Let } X \text{ be the number of the random person} \\
\forall i \in [1,n]: P(X = i) = \frac{1}{n} \\
E[f(X)] = \sum_{i=1}^{n} f(i) \frac{1}{n} = \frac{\sum_{i=1}^{n} f(i)}{n} = \frac{S}{n} \\
\text{Everyone writes names of their friends on a piece of paper and puts on a table} \\
\text{There are } S \text{ such papers} \\
\text{Let } Y \text{ be the person written on a random paper} \\
P(Y = i) = \frac{f(i)}{S} \\
E[f(Y)] = \sum_{i=1}^{n} f(i) \frac{f(i)}{S} = \frac{\left( \sum_{i=1}^{n} f(i)^{2} \right)}{S} \\
E[f(Y)] - E[f(X)] = \frac{\left( \sum_{i=1}^{n} f(i)^{2} \right)}{S} - \frac{S}{n} = \frac{n}{S} \left( \frac{\left( \sum_{i=1}^{n} f(i)^{2} \right)}{n} - \frac{S^{2}}{n^{2}} \right) \\
\text{Let } P(Z = f_{i}) = \frac{1}{n} \\
\implies E[f(Y)] - E[f(X)] = \frac{n}{S} (E[Z^{2}] - E[Z]^{2}) \\
\implies E[f(Y)] \geq E[f(X)] \\
\\
\text{An important note is that in } X \text{ we included people who had no friends} \\
\text{and in } Y \text{ we didn't} \\
}
$$
