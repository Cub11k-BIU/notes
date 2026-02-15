---
{"publish":true,"created":"20/01/26, 14:04","modified":"2026-02-12T13:08:57.497+02:00","tags":["Academia","Lecture","Algorithms-1"],"cssclasses":""}
---

# Concentration bounds
The question of interest is the probability, or rather a bound on the probability that the random variable (either runtime or correctness) of a randomized algorithm will behave as expected.
In this lecture we will talk about some inequalities that help us tighten this bound
## Markov's inequality
$$
\displaylines{
\text{Given } X \geq 0 \text{ and } a > 0 \\
P(X \geq k) \leq \frac{E[X]}{k} \\
\\
\text{Given a bounded random variable, } X < z \\
P(X \leq a) = P(z - X \geq z - a) \leq \frac{E[z-X]}{z-a} = \frac{z - E[X]}{z-a} \\
}
$$
## Chebyshev's inequality
$$
\displaylines{
P(\abs{X - E[X]} \geq a) \leq \frac{Var(X)}{a^{2}} \\
\\
\text{Proof:} \\
P(\abs{X - E[X]} \geq a) = P(\lrp{X - E[X]}^{2} \geq a^{2}) \leq \frac{E[(X-E[X])^{2}]}{a^{2}} = \frac{Var(X)}{a^{2}} \\
}
$$
### Higher moments
$$
\displaylines{
\text{Let } \mu = E[X] \\
\text{Then } \forall l \geq 1: P(\abs{X - \mu} \geq a) \leq \frac{E[(X-\mu)^{2l}]}{a^{2l}} \\
\text{For } l = 1 \text{ we obtain Chebyshev's inequality} \\
\text{For } l > 1 \text{ the bound becomes tighter as } l \text{ grows} \\
\\
\text{Proof:} \\
\text{Let } Y = \abs{X - E[X]}^{2l} = (X - \mu)^{2l} \\
P(Y \geq t) \leq \frac{E[Y]}{t} \\
\implies P(\abs{X - \mu} \geq t^{1/2l}) \leq \frac{E[(X - \mu)^{2l}]}{t} \\
\text{Let } a = t^{1/2l} \\
\implies P(\abs{X - \mu} \geq a) \leq \frac{E[(X-\mu)^{2l}]}{a^{2l}} \\
\text{This is also true for arbitrary power } n \\ 
}
$$
## Mill's inequality
Given the well known bounds on Gaussian distribution, we can see that Chebyshev's inequality is not tight. So we devise another.
$$
\displaylines{
\text{Let } X \sim \mathcal{N}(0, \sigma^{2}) \\
\text{Then } \forall t > 0: P(\abs{X} \geq t) \leq \sqrt{ \frac{2}{\pi} } \frac{\sigma}{t} \exp\left( -\frac{t^{2}}{2\sigma^{2}} \right) = O(e^{-t^{2}/2\sigma^{2}}) \\
}
$$
## Chernoff bounds
$$
\displaylines{
\text{A generic Chernoff bound is as follows:} \\
\text{Let } M(t) = E[e^{tX}] \\
t > 0 \implies P(X \geq a) = P(e^{tX} \geq e^{ta}) \leq \frac{E[e^{tX}]}{e^{ta}} = M(t)e^{-ta} \\
t < 0 \implies P(X \leq a) = P(e^{tX} \geq e^{ta}) \leq M(t)e^{-ta} \\
\text{Given that both hold for any } t \text{ in the relevant domain, we can take infimum} \\
P(X \geq a) \leq \inf_{t > 0} M(t)e^{-ta} \\
P(X \leq a) \leq \inf_{t < 0} M(t)e^{-ta} \\
\text{Note that } M(t)e^{-ta} = E[e^{tX}]e^{-ta} = E[e^{t(X-a)}] \\
\\
\text{By Jensen's inequality } E[e^{tX}] \geq e^{tE[X]} \\
\text{It follows then that } a \leq E[X] \implies \inf_{t > 0} M(t)e^{-ta} \geq \inf_{t > 0} e^{t(E[X]-a)} \geq 1 \\
\text{And similarly } a \geq E[X] \implies \inf_{t < 0} M(t)e^{-ta} \geq \inf_{t < 0} e^{t(E[X]-a)} \geq 1 \\
\text{Let } C(a) = \inf_{t} M(t)e^{-ta} \\
C(a) \text{ is then a two sided Chernoff bound} \\
\text{which provides an upper bound on the folded CDF of } X, \\
\text{(folded around mean, not median)} \\
}
$$
---
$$
\displaylines{
\text{Let } X_{1}, \dots, X_{n} \text{ be independent random variables} \\
\text{Let } X = \sum_{i=1}^{n} X_{i} \implies M(t) = E[e^{tX}] = E\left[ \prod_{i=1}^{n} e^{tX_{i}} \right] = \prod_{i=1}^{n} E[e^{tX_{i}}] \\
\implies P(X \geq a) \leq \inf_{t > 0} e^{-ta} \prod_{i=1}^{n} E[e^{tX_{i}}] \text{ and } P(X \leq a) \leq \inf_{t < 0} e^{-ta} \prod_{i=1}^{n} E[e^{tX_{i}}] \\
}
$$
---
$$
\displaylines{
\text{Let } X_{1}, \dots, X_{n} \text{ be independent Bernoulli random variables} \\
\text{Let } P(X_{i} = 1) = p \\
\text{Let } X = \sum_{i=1}^{n} X_{i} \\
\\
E[e^{tX_{i}}] = pe^{t} + (1-p) = 1 + p(e^{t}-1) \leq e^{p(e^{t}-1)} \\
P(X \geq a) \leq \frac{E[e^{tX}]}{e^{ta}} = \frac{\prod_{i=1}^{n} E[e^{tX_{i}}]}{e^{ta}} \leq \frac{e^{np(e^{t}-1)}}{e^{ta}} \\
\\
\text{Let } a = (1+\delta)np = (1+\delta)E[X] \\
\text{Let } t = \ln(1+\delta) \text{ where } \delta > 0 \\
\implies P(X \geq (1+\delta)np) \leq \frac{e^{\delta np}}{e^{\ln(1+\delta)(1+\delta)np}} = \lrp{\frac{e^{\delta}}{(1+\delta)^{1+\delta}}}^{np} \\
\\
\text{Let } \delta \in (0, 1) \\
\delta - (1+\delta)\ln(1+\delta) \leq -\frac{\delta^{2}}{3} \\
\implies \boxed{ P(X \geq (1+\delta)np) \leq e^{\frac{-\delta^{2}np}{3}} } \\
\text{Similarly, } \boxed{ P(X \leq (1-\delta)np) \leq e^{\frac{-\delta^{2}np}{2}} } \\
}
$$
