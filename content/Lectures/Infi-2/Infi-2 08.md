---
{"publish":true,"created":"07/04/25, 12:04","modified":"2025-11-21T21:10:14.385+02:00","tags":["Academia","Lecture","Infi-2"],"cssclasses":""}
---

## Improper integrals
$$
\displaylines{
\int_{a}^{\infty} f(x) \, dx = ??? \\
\int_{-\infty}^{b} f(x) \, dx = ??? \\
\int_{-\infty}^{\infty} f(x) \, dx = ??? \\
}
$$
## Improper integral of the first type #definition 
$$
\displaylines{
\text{Function } f \text{ is called Riemann-integrable on } [a, \infty) \text{ iff} \\
\forall b > a: f \text{ is Riemann-integrable on } [a, b] \\
\\
\text{If function } f \text{ is Riemann-integrable on } [a, \infty) \\
\text{It's integral is called improper and is equal to} \\
\int_{a}^{\infty} f(x) \, dx = \lim_{ b \to \infty } \int_{a}^{b} f(x) \, dx \\
\text{Similarly, } \int_{-\infty}^{a} f(x) \, dx = \lim_{ b \to -\infty } \int_{b}^{a} f(x) \, dx = L \\
\text{If $L \in \mathbb{R}$, improper integral is said to converge} \\
}
$$
---
$$
\displaylines{
\int_{2}^{\infty} \frac{1}{x\ln x} \, dx = \lim_{ b \to \infty } \int_{2}^{b} \frac{1}{x\ln x} \, dx \\
\text{Let } t = \ln x \implies dt = \frac{dx}{x} \\
\implies \int \frac{1}{x\ln x} \, dx = \int \frac{1}{t} \, dt = \ln \left\lvert t \right\rvert = \ln \left\lvert \ln x \right\rvert + C \\
\implies \lim_{ b \to \infty } \int_{2}^{b} \frac{1}{x\ln x} \, dx = \lim_{ b \to \infty } \ln \left\lvert \ln b \right\rvert - \ln \left\lvert \ln 2 \right\rvert = \lim_{ b \to \infty } \ln(\ln b) = \infty \\
\implies \text{This integral diverges} \\
}
$$
$$
\displaylines{
\\
\sum_{n=2}^{\infty} \frac{1}{n\ln(n)} \text{ also diverges, is there a connection?} \\
}
$$
---
$$
\displaylines{
\int_{0}^{\infty} xe^{-x} \, dx \\
f(x) = x, g'(x) = e^{-x} \\
f'(x) = 1, g(x) = -e^{-x} \\
\int xe^{-x} \, dx = -xe^{-x} + \int e^{-x} \, dx = -xe^{-x} - e^{-x} + C \\
\implies \int_{0}^{\infty} xe^{-x} \, dx = \lim_{ b \to \infty } \int_{0}^{b} xe^{-x} \, dx = \lim_{ b \to \infty } (-be^{-b}-e^{-b} + e^{-0}) = \lim_{ b \to \infty } \frac{-b}{e^{b}} + 1 = \\
= -0 + 1 = 1 \\
\implies \text{This integral converges to } 1 \\
\\
\text{Note: } \forall n \in \mathbb{N}_{0}:  \int_{0}^{\infty} x^{n}e^{-x} \, dx = n! \\
\text{Proof:} \\
\text{Let } \Gamma(n) = \int x^{n}e^{-x} \, dx \\
\Gamma(n+1) = \int x^{n+1}e^{-x} \, dx = -x^{n+1}e^{-x} + (n+1)\int x^{n}e^{-x} \, dx = \\
= -x^{n+1}e^{-x} + (n+1)\Gamma(n) \\
\Gamma(0) = -e^{-x} \\
\implies \Gamma(n) = \sum_{i=0}^{n} \frac{n!}{(n-i)!}x^{n-i}(-e^{-x}) \\
\\
\implies \int_{0}^{\infty} x^{n}e^{-x} \, dx = \lim_{ b \to \infty } \Gamma(n) \bigg|^{x=b}_{x=0} = \\
= \lim_{ b \to \infty } \sum_{i=0}^{n} \underbrace{ \frac{(n)!}{(n-i)!}b^{n-i}(-e^{-b}) }_{ \to 0 } - n!(-e^{-0}) = n! \\
}
$$
## Improper integral from -inf to +inf #definition 
$$
\displaylines{
\int_{-\infty}^{\infty} f(x) \, dx = \int_{-\infty}^{a} f(x) \, dx + \int_{a}^{\infty} f(x) \, dx \\
\int_{-\infty}^{\infty} f(x) \, dx \text{ converges} \iff \text{Both } \int_{-\infty}^{a} f(x) \, dx, \int_{a}^{\infty} f(x) \, dx \text{ converge} \\
}
$$
---
$$
\displaylines{
\text{Note: } \int_{-\infty}^{\infty} f(x) \, dx \neq \lim_{ b \to \infty } \int_{-b}^{b} f(x) \, dx \\
\text{Example:} \\
\int_{-\infty}^{\infty} x^{7} \, dx = \int_{-\infty}^{a} x^{7} \, dx + \lim_{ b \to \infty } \int_{a}^{b} x^{7} \, dx = \int_{-\infty}^{a} x^{7} \, dx + \underbrace{ \lim_{ b \to \infty } \left( \frac{b^{8}}{8} - \frac{a^{8}}{8} \right) }_{ \infty } = \infty \\
\lim_{ b \to \infty } \int_{-b}^{b} x^{7} \, dx = \lim_{ b \to \infty } \left( \frac{b^{8}}{8} - \frac{(-b)^{8}}{8} \right) = 0 \\
}
$$
---
## Convergence tests
### p-Integral test for improper integrals of the first type #lemma 
$$
\displaylines{
\int_{a}^{\infty} \frac{1}{x^{p}} \, dx \text{ converges} \iff p > 1 \\
\\
\text{Proof:} \\
\int_{a}^{\infty} \frac{1}{x^{p}} \, dx = \lim_{ b \to \infty } \int_{a}^{b} \frac{1}{x^{p}} \, dx \\
\text{Let } p = 1 \\
\int_{a}^{b} \frac{1}{x^{p}} \, dx = \ln \left\lvert b \right\rvert - \ln \left\lvert a \right\rvert \implies \int_{a}^{\infty} \frac{1}{x^{p}} \, dx = \lim_{ b \to \infty } (\ln \left\lvert b \right\rvert - \ln \left\lvert a \right\rvert ) = \infty \\
\text{Let } p \neq 1 \\
\int_{a}^{b} \frac{1}{x^{p}} \, dx = \int_{a}^{b} x^{-p} \, dx = \frac{b^{1-p}}{1-p} - \frac{a^{1-p}}{1-p} \\
\implies \lim_{ b \to \infty } \int_{a}^{b} \frac{1}{x^{p}} \, dx = \lim_{ b \to \infty } \frac{1}{1-p} (b^{1-p} - a^{1-p}) \\
p < 1 \iff b^{1-p} \to \infty \iff \int_{a}^{\infty} \frac{1}{x^{p}} \, dx \text{ diverges} \\
p > 1 \iff b^{1-p} \to 0 \iff \int_{a}^{\infty} \frac{1}{x^{p}} \, dx \text{ converges} \\
}
$$
### Comparison test for improper integrals of the first type #lemma 
$$
\displaylines{
\text{Let } f, g \text{ be Riemann-integrable on } [a, \infty) \\
\text{Let } 0 \leq f \leq g \\
\text{Then } \int_{a}^{\infty} g(x) \, dx \text{ converges} \implies \int_{a}^{\infty} f(x) \, dx \text{ converges} \\
}
$$
### Limit comparison text for improper integrals of the first type #lemma 
$$
\displaylines{
\text{Let } f, g \text{ be Riemann-integrable on } [a, \infty) \\
\text{Let } 0 \leq f, g \\
L = \lim_{ x \to \infty } \frac{f(x)}{g(x)} \\
\begin{array}{}
L = \infty \implies & \left[ \int_{a}^{\infty} f(x) \, dx \text{ converges} \implies \int_{a}^{\infty} g(x) \, dx \text{ converges} \right] \\
L = 0 \implies & \left[ \int_{a}^{\infty} f(x) \, dx \text{ converges} \impliedby \int_{a}^{\infty} g(x) \, dx \text{ converges} \right] \\
0 < L < \infty \implies & \left[ \int_{a}^{\infty} f(x) \, dx \text{ converges} \iff \int_{a}^{\infty} g(x) \, dx \text{ converges} \right]
\end{array}
}
$$
