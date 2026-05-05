---
{"publish":true,"created":"17/12/25, 13:04","modified":"2026-03-24T15:01:00.144+02:00","tags":["Academia","Lecture","Probability"],"cssclasses":""}
---

## Poisson distribution continuation
### Example
$$
\displaylines{
\text{Let } X = \text{number of typographical errors on one page} \\
\text{Let there be } \frac{1}{2} \text{ typos on one page, on average} \\
\implies \lambda = \frac{1}{2} \text{ and } X \sim Pois(\lambda) \\
\implies P(X \geq 1) = 1 - P(X = 0) = 1 - e^{-1/2} \approx 0.393 \\
}
$$
### Example
$$
\displaylines{
\text{Let } X = \text{number of defective items in a sample of 10 items} \\
\text{Let an item be defective with probability } 0.1 \\
\text{What is the probability that sample has at most one defective item?} \\
\\
\implies X \sim Bin(10, 0.1) \\
\implies P(X \leq 1) = P(X = 0) + P(X = 1) = \\
= \binom{10}{0}(0.1)^{0}(0.9)^{10} + \binom{10}{1}(0.1)^{1}(0.9)^{9} \approx 0.7361 \\
\\
\text{Let } X \sim Pois(10 \cdot 0.1) = Pois(1) \\
\implies P(X \leq 1) = P(X = 0) + P(X = 1) = e^{-1}\left( 1 + \frac{1^{1}}{1!} \right) \approx 0.7358 \\
\\
\text{We can see that Poisson distribution approximates the probability pretty well} \\
}
$$
### Example (internet ad)
$$
\displaylines{
\text{Let there be an ad of company $A$ posted in Google} \\
\text{Exactly } 1000 \text{ users see it every day} \\
\text{Yesterday 50 of them clicked on it} \\
\text{What is the probability that at least 50 people will click on it today?} \\
\\
\text{Let } X = \text{number of clicks per day} \\
\text{Maybe } X \sim Bin\left( 1000, \frac{50}{1000} \right) ? \\
P(X \geq 50) = 1 - \sum_{k=0}^{49} \binom{1000}{k}0.05^{k}0.95^{1000-k} \approx 0.52 \\
\\
\text{Let the ad now be shown to } n \text{ people per day} \\
\text{And, on average, 50 people click on the ad each day} \\
\text{What is the probability that at least 50 people will click on it today?} \\
\text{Let } X = \text{number of clicks per day} \\
\text{Maybe } X \sim Bin\left( n, \frac{50}{n} \right) ? \\
\text{But what is } n \text{ and how can we calculate the probability now?} \\
X \sim Bin\left( n, \frac{50}{n} \right) \approx Pois(50) \\
\implies P(X \geq 50) = 1 - P(X \leq 49) = 1 - e^{-50}\sum_{k=0}^{49} \frac{50^{k}}{k!} \approx 0.519 \\
}
$$
### Properties of Poisson distribution
$$
\displaylines{
\text{Let } X \sim Pois(\lambda) \\
\\
E[X] = \sum_{i=0}^{\infty} ie^{-\lambda}\frac{\lambda^{i}}{i!} = \sum_{i=1}^{\infty} ie^{-\lambda}\frac{\lambda^{i}}{i!} = e^{-\lambda} \lambda \sum_{i=1}^{\infty} \frac{\lambda^{i-1}}{(i-1)!} = e^{-\lambda}\lambda e^{\lambda} = \lambda \\
\\
Var(X) = E[X^{2}] - E[X]^{2} \\
E[X(X-1)] = \sum_{i=0}^{\infty} i(i-1)e^{-\lambda} \frac{\lambda^{i}}{i!} = e^{-\lambda}\lambda^{2} \sum_{i=2}^{\infty} \frac{\lambda^{i-2}}{(i-2)!} = e^{-\lambda}\lambda^{2}e^{\lambda} = \lambda^{2} \\
E[X^{2}] = E[X(X-1)+X] = E[X(X-1)] + E[X] = \lambda^{2} + \lambda \\
Var(X) = E[X^{2}] - E[X]^{2} = \lambda^{2} + \lambda - \lambda^{2} = \lambda \\
\\
\implies \boxed{ E[X] = Var(X) = \lambda } \\
}
$$
Turns out, the Poisson distribution is not only suitable for independent trials, but also for weakly dependent trials!
#### Birthday problem
$$
\displaylines{
\text{Let there be } n \text{ people in the room} \\
\text{Let there be } 365 \text{ days in a year, birthday date is uniform} \\
\text{What is the probability that no two people have the same birthday?} \\
\\
\text{There are } \binom{n}{2} \text{ pairs of people} \\
\text{Let } E_{i,j} = \text{people } i, j \text{ have the same birthday} \\
P(E_{i,j}) = \frac{1}{365} \\
E_{i,j} \text{ and } E_{k,l} \text{ are two independent events} \\
\text{Pairwise independence is enough to call the set of events weakly dependent} \\
\\
\text{In that case, we can think of the Poisson distribution} \\
\text{Let } X = \text{number of people with the same birthday} \\
\lambda = \sum_{i,j} P(E_{i,j}) = \binom{n}{2} \cdot \frac{1}{365} = \frac{n(n-1)}{730} \\
P(X = 0) = e^{-\lambda} = e^{-n(n-1)/730} \\
e^{-n(n-1)/730} < \frac{1}{2} \iff e^{n(n-1)/730} > 2 \\
\iff \frac{n(n-1)}{730} > \ln(2) \iff n(n-1) > 730\ln(2) \\
\iff n \geq 23 \\
}
$$
#### Birthday problem, again
$$
\displaylines{
\text{Let there be } n \text{ people in the room} \\
\text{Let there be } 365 \text{ days in a year, birthday date is uniform} \\
\text{What is the probability that no three people have the same birthday?} \\
\\
\text{There are } \binom{n}{3} \text{ triples of people} \\
\text{Let } E_{i,j,k} = \text{people } i, j,k \text{ have the same birthday} \\
P(E_{i,j,k}) = \frac{1}{365^{2}} \\
\\
\text{We can again use Poisson distribution} \\
\lambda = \binom{n}{3} \cdot \frac{1}{365^{2}} = \frac{n(n-1)(n-2)}{6 \cdot 365^{2}} \\
\implies P(X = 0) = e^{-\lambda} = \exp\left( \frac{-n(n-1)(n-2)}{6 \cdot 365^{2}} \right) \\
P(X = 0) < \frac{1}{2} \iff \exp\left( \frac{-n(n-1)(n-2)}{6 \cdot 365^{2}} \right) < \frac{1}{2} \\
\iff \exp\left( \frac{n(n-1)(n-2)}{6 \cdot 365^{2}} \right) > 2 \iff n \geq 84 \\
}
$$
## Geometric distribution #definition 
$$
\displaylines{
\text{Let there be infinite independent trials with probability } p \\
\text{Trials stop after the first success} \\
\text{A random variable } X \sim Geom(p) \iff \forall n \geq 1 \in \mathbb{N}: P(X = n) = p(1-p)^{n-1} \\
\text{is called a Geometric random variable} \\
\text{It also introduces the Geometric distribution} \\
}
$$
### Example
$$
\displaylines{
\text{An urn contains } M \text{ black balls and } N \text{ white balls} \\
\text{We are selecting one ball, with replacement, until the black ball is selected} \\
\text{What is the probability that there will be } n \text{ selections?} \\
\text{What is the probability that there will be at least } k \text{ selections?} \\
\\
\text{Let } X = \text{number of selections} \\
p = \frac{M}{N+M} \\
P(X = n) = p(1-p)^{n-1} \\
P(X \geq k) = (1-p)^{k-1} \\
}
$$
### Example (internet ad)
$$
\displaylines{
\displaylines{
\text{Let there be an ad of company $A$ posted in Google} \\
\text{Users click on the ad with probability } p = 0.05 \\
\text{Today, company requires Google to obtain at least one click} \\
\text{To how many users does Google have to show the ad to be sure to obtain that click?} \\
\\
\text{Let } Q \text{ be the minimal probability to be sure that there is at least one click} \\
\text{Let } X = \text{number of users until the first click} \\
n \text{ be the number of users to ensure that there is at least one click} \iff \\
\iff P(X \leq n) \geq Q \iff p\sum_{k=1}^{n} (1-p)^{k-1} \geq Q \\
\iff p \cdot \frac{1-(1-p)^{n}}{1-(1-p)} \geq Q \iff 1 - 0.95^{n} \geq Q \\
\iff 0.95^{n} \leq 1 - Q \\
\text{Let } Q = 0.99 \\
\implies 0.95^{n} \leq 0.01 \implies n \geq \log_{0.95}(0.01) \approx 89.7811 \implies \boxed{ n \geq 90 } \\
}
}
$$
### Properties of Geometric distribution
$$
\displaylines{
\text{Let } X \sim Geom(p) \\
E[X] = \sum_{i=1}^{\infty} ipq^{i-1} = p\sum_{i=1}^{\infty} iq^{i-1} \\
\sum_{i=0}^{\infty} q^{i} = \frac{1}{1-q} \\
\sum_{i=1}^{\infty} iq^{i-1} = \sum_{i=0}^{\infty} iq^{i-1} = \left( \frac{1}{1-q} \right)' = \frac{1}{(1-q)^{2}} \\
\implies \boxed{ E[X] = \frac{p}{(1-q)^{2}} = \frac{p}{p^{2}} = \frac{1}{p} } \\
\\
Var(X) = E[X^{2}] - E[X]^{2} \\
E[X(X-1)] = \sum_{i=1}^{\infty} i(i-1)pq^{i-1} = p\sum_{i=1}^{\infty} i(i-1)q^{i-1} \\
\sum_{i=0}^{\infty} q^{i} = \frac{1}{1-q} \\
\sum_{i=1}^{\infty} iq^{i-1} = \sum_{i=0}^{\infty} iq^{i-1} = \left( \frac{1}{1-q} \right)' = \frac{1}{(1-q)^{2}} \\
\sum_{i=1}^{\infty} i(i-1)q^{i-2} = \left( \frac{1}{(1-q)^{2}} \right)' = \frac{2}{(1-q)^{3}} \\
\implies E[X(X-1)] = \frac{2pq}{(1-q)^{3}} = \frac{2(1-p)}{p^{2}} \\
\implies E[X^{2}] = E[X(X-1)+X] = \frac{2(1-p)}{p^{2}} + \frac{p}{p^{2}} = \frac{2-p}{p^{2}} \\
\implies \boxed{ Var(X) = E[X^{2}] - E[X]^{2} = \frac{2-p}{p^{2}} - \frac{1}{p^{2}} = \frac{1-p}{p^{2}} } \\
}
$$
