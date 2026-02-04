---
{"publish":true,"created":"28/01/26, 13:01","modified":"2026-01-28T15:17:44.507+02:00","tags":["Academia","Lecture","Probability"],"cssclasses":""}
---

# Inequalities for random variables
## Markov inequality #theorem 
$$
\displaylines{
\text{Let } X \text{ be a nonnegative random variable} \\
\text{Let } a > 0 \\
\text{Then } P(X \geq a) \leq \frac{E[X]}{a} \\
\\
\text{Proof:} \\
X = X \cdot 1_{\Set{ X < a }} + X \cdot 1_{\Set{ X \geq a }} \\
E[X] = E[X \cdot 1_{\Set{ X < a }} + X \cdot 1_{\Set{ X \geq a }}] = \underbrace{ E[X \cdot 1_{\Set{ X < a }}] }_{ \geq 0 } + \underbrace{ E[X \cdot 1_{\Set{ X \geq a }}] }_{ \geq aE[1_{\Set{ X \geq a }}] } \\
\implies E[X] \geq aP(X \geq a) \implies \boxed{ P(X \geq a) \leq \frac{E[X]}{a} } \\
}
$$
## Chebyshev inequality #theorem 
$$
\displaylines{
\text{Let } X \text{ be a random variable} \\
\text{Let } \mu = E[X], \sigma^{2} = Var(X) \\
\text{Let } k > 0 \\
\text{Then } P(\abs{X - \mu} \geq k\sigma) \leq \frac{1}{k^{2}} \\
\text{Equivalently } P(\abs{X - \mu} < k\sigma) \geq 1 - \frac{1}{k^{2}} \\
\\
\text{Proof:} \\
\sigma^{2} = E[(X-\mu)^{2}] \\
P(\abs{X - \mu} \geq k\sigma) = P((X-\mu)^{2} \geq k^{2}\sigma^{2}) \leq \frac{E[(X-\mu)^{2}]}{k^{2}\sigma^{2}} = \frac{1}{k^{2}} \\
}
$$
## Chernoff bounds #theorem 
$$
\displaylines{
\text{Let } t > 0 \\
P(X \geq a) = P(e^{tX} \geq e^{ta}) \leq \frac{E[e^{tX}]}{e^{ta}} \\
\text{Let } M_{X}(t) = E[e^{tX}] \\
M_{X} \text{ is then called a moment generating function (MGF) of } X \\
}
$$
### Example
$$
\displaylines{
\text{Let } X_{1}, \dots, X_{n} \text{ be independent Bernoulli variables} \\
\text{Let } \forall i \in [1, n]: P(X_{i} = 1) = p \\
\text{Let } S_{n} = \sum_{i=1}^{n} X_{i} \\
E[S_{n}] = np \\
\\
E[e^{tX_{i}}] = pe^{t} + (1-p) = 1 + p(e^{t}-1) \leq e^{p(e^{t}-1)} \\
P(S_{n} \geq a) \leq \frac{E[e^{tS_{n}}]}{e^{ta}} = \frac{\prod_{i=1}^{n} E[e^{tX_{i}}]}{e^{ta}} \leq \frac{e^{np(e^{t}-1)}}{e^{ta}} \\
\\
\text{Let } a = (1+\delta)np = (1+\delta)E[X] \\
\text{Let } t = \ln(1+\delta) \\
\implies P(X \geq (1+\delta)np) \leq \frac{e^{\delta np}}{e^{\ln(1+\delta)(1+\delta)np}} = \lrp{\frac{e^{\delta}}{(1+\delta)^{1+\delta}}}^{np} \\
}
$$
---
# Convergence of random variables
## Convergence in probability #definition 
$$
\displaylines{
\text{Let } \Set{ X_{n} } \text{ be a sequence of random variables on sample space } \Omega \\
\text{Such a sequence converges to random variable } X \text{ in probability:} \\
\Set{ X_{n} } \overset{ P }{ \to } X \iff \forall \varepsilon > 0: \lim_{ n \to \infty } P(\abs{X_{n} - X} \geq \varepsilon) = 0 \\
}
$$
## Almost sure convergence #definition 
$$
\displaylines{
\text{Let } \Set{ X_{n} } \text{ be a sequence of random variables on sample space } \Omega \\
\text{Such a sequence converges to random variable } X \text{ almost surely:} \\
\text{Let } A = \Set{ w \in \Omega \mid \lim_{ n \to \infty } X_{n}(\omega) = X(\omega) } \\
\Set{ X_{n} } \overset{ a.s. }{ \to } X \iff P\lrp{\lim_{ n \to \infty } X_{n} = X} = 1 \iff P(A) = 1 \\
}
$$
## Convergence in distribution #definition 
$$
\displaylines{
\text{Let } \Set{ X_{n} } \text{ be a sequence of random variables on sample space } \Omega \\
\text{Such a sequence converges to random variable } X \text{ in distribution:} \\
\Set{ X_{n} } \overset{ d }{ \to } X \iff \forall x : F_{X_{n}}(x) \to F_{X}(x) \\
}
$$
---
$$
\displaylines{
\text{The following hierarchy holds:} \\
\Set{ X_{n} } \overset{ a.s. }{ \to } X \implies \Set{ X_{n} } \overset{ P }{ \to } X \implies \Set{ X_{n} } \overset{ d }{ \to } X \\
\text{The other direction is not true} \\
}
$$
### Example
$$
\displaylines{
\text{Let } \Set{ I_{n} } \text{ be the sequence of intervals one right after another} \\
\text{Where } I_{1} = [0, 1) \text{ and } \forall n \in \mathbb{N}: \abs{I_{n}} = \frac{1}{n} \\
\text{Clearly, }  \bigcup_{n=1}^{\infty} I_{n} = [0, \infty) \\
\text{Let us now clip all intervals to } [0, 1), \text{ that is, take all of them by} \mod 1 \\
\\
\text{Clearly } \forall \omega \in [0, 1) \text{ we can find infinitely many intervals it belongs to} \\
\text{and infinitely many intervals it doesn't belong to} \\
\text{Let } X_{n}(w) = \begin{cases}
1 & \omega \in I_{n} \\
0 & \omega \not\in I_{n} \\
\end{cases} \\
\\
\text{Let } X \equiv 0 \\
\implies \lim_{ n \to \infty } P(\abs{X_{n} - X} \geq \varepsilon) = 0 \\
\text{But } P(\lim_{ n \to \infty } X_{n} = X) = 0 \\
\implies \Set{ X_{n} } \overset{ P }{ \to } X \text{ but not } \Set{ X_{n} } \overset{ a.s. }{ \to } X \\
}
$$
### Example
$$
\displaylines{
\text{Let } X \sim Unif[0, 1] \\
\text{Let } X_{n} = \begin{cases}
X & n \text{ is even} \\
1-X & n \text{ is odd} \\
\end{cases} \\
\forall n \in \mathbb{N}: X_{n} \sim Unif[0, 1] \\
\implies \forall x: F_{X_{n}}(x) \to F_{X}(x) \\
\\
\abs{X_{n} - X} = \begin{cases}
0 & n \text{ is even} \\
\abs{1-2X} & n \text{ is odd} \\
\end{cases} \\
P(\abs{1-2X} \geq \varepsilon) \neq 0 \\
\implies \lim_{ n \to \infty } P(\abs{X_{n} - X} \geq \varepsilon) \neq 0 \\
\implies \Set{ X_{n} } \overset{ d }{ \to } X \text{ but not } \Set{ X_{n} } \overset{ P }{ \to } X \\
}
$$
---
## Weak Law of Large numbers #theorem 
$$
\displaylines{
\text{Let } X_{1}, \dots, X_{n}, \dots \text{ be i.i.d. random variables} \\
\text{Let } \forall n: \mu = E[X_{n}] \text{ and } \sigma^{2} = Var(X_{n}) \text{ be finite} \\
\text{Note that finiteness of variance is optional, but it is used in our proof} \\
\text{Let } \hat{X}_{n} = \frac{1}{n}\sum_{i=1}^{n} X_{i} \\
\text{Then } \hat{X}_{n} \overset{ P }{ \to } \mu \\
\\
\text{Proof:} \\
\text{Let } \varepsilon > 0 \\
\text{Let } \forall n \in \mathbb{N}: S_{n} = \sum_{i=1}^{n} X_{i} \\
E[S_{n}] = \sum_{i=1}^{n} E[X_{i}] = n\mu \\
\implies \forall n \in \mathbb{N}: E[\hat{X}_{n}] = E\left[ \frac{S_{n}}{n} \right] = \mu \\
\forall n \in \mathbb{N}: Var(S_{n}) = \sum_{i=1}^{n} Var(X_{i}) = n\sigma^{2} \\
\implies \forall n \in \mathbb{N}: Var(\hat{X}_{n}) = \frac{1}{n^{2}}Var(S_{n}) = \frac{\sigma^{2}}{n} \\
\\
\forall n \in \mathbb{N}: P(\abs{\hat{X}_{n} - \mu} \geq \varepsilon) \leq \frac{Var(\hat{X}_{n})}{\varepsilon^{2}} = \frac{\sigma^{2}}{n\varepsilon^{2}} \\
\implies \lim_{ n \to \infty } P(\abs{\hat{X}_{n} - \mu} \geq \varepsilon) = 0 \implies \boxed{ \Set{ \hat{X}_{n} } \overset{ P }{ \to } \mu } \\
}
$$
## Strong Law of Large numbers #theorem 
$$
\displaylines{
\text{Let } X_{1}, \dots, X_{n}, \dots \text{ be i.i.d. random variables} \\
\text{Let } \forall n \in \mathbb{N}: \mu = E[X_{n}] \text{ be finite} \\
\text{Then } \Set{ \hat{X}_{n} } \overset{ a.s. }{ \to } \mu \\
\text{That is, } P\left( \lim_{ n \to \infty } \frac{\lrp{\sum_{i=1}^{n} X_{i}}}{n} = X \right) = 1 \\
}
$$
## Central Limit Theorem (CLT) #theorem 
$$
\displaylines{
\text{Let } X_{1}, \dots, X_{n}, \dots \text{ be i.i.d. random variables} \\
\text{Let } \forall n \in \mathbb{N}: \mu = E[X_{n}] \text{ and } \sigma^{2} = Var(X_{n}) \text{ be finite} \\
\text{Let } S_{n} = \sum_{i=1}^{n} X_{i} \\
\text{Let } Z_{n} = \frac{S_{n} - n\mu}{\sigma \sqrt{ n }} \\
\text{Clearly, } E[Z_{n}] = 0, Var(Z_{n}) = 1 \\
\text{Then } \Set{ Z_{n} } \overset{ d }{ \to } \mathcal{N}(0, 1) \\
\text{That is, } \lim_{ n \to \infty } P(Z_{n} \leq x) = \Phi(x) \\
}
$$
---
$$
\displaylines{
\text{Let } X \text{ be a random variable} \\
E[g(X)] = \int_{\mathbb{R}} g(x)f_{X}(x) \, dx \\
\text{What if we can't compute this integral analytically?} \\
\text{We can use Monte-Carlo method} \\
\text{Sample } n \text{ points:} \\
X_{1}, \dots, X_{n} \\
\text{Then, } \hat{\mu} = \frac{1}{n} \sum_{i=1}^{n} g(X_{i}) \text{ is a good approximation of } E[g(X)] \\
}
$$
