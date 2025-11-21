---
{"publish":true,"created":"18/05/25, 14:05","modified":"2025-11-21T21:10:02.472+02:00","tags":["Academia","Assignment","Infi-2"],"cssclasses":""}
---

# 1a
$$
\displaylines{
\text{Let } m \in \mathbb{N} \\
\text{Let } X_{1}, \dots, X_{m} \subseteq \mathbb{R} \\
\text{Let } X = \bigcup_{i \in [1, m]} X_{i} \\
\text{Let } \forall i \in [1, m]: f_{n}(x) \rightrightarrows f_{i}(x) \text{ on } X_{i} \\
\text{Prove: } f_{n}(x) \rightrightarrows f(x) \text{ on } X \\
\\
\text{Proof:} \\
\text{Let } \varepsilon > 0 \\
\forall i \in [1, m]: \forall x \in X_{i} : \exists N_{\varepsilon_{i}}: \forall n > N_{\varepsilon_{i}}: \left\lvert f_{n}(x) - f_{i}(x) \right\rvert < \varepsilon \\
\text{Let } N_{\varepsilon} = \max\{N_{\varepsilon_{1}}, \dots, N_{\varepsilon_{m}}\} \\
\text{Let } \forall i \in [1, m]: \forall x \in X_{i}: f(x) = f_{i}(x) \\
\implies \forall x \in X: \forall n > N_{\varepsilon}: \left\lvert f_{n}(x) - f(x) \right\rvert < \varepsilon \\
\implies \boxed{ f_{n}(x) \rightrightarrows f(x) \text{ on } X } \\
}
$$
# 1b
$$
\displaylines{
\text{Let } \forall m \in \mathbb{N}: X_{m} = \left[ 0, 1 - \frac{1}{m} \right] \\
X = \bigcup_{m \in \mathbb{N}} X_{m} = [0, 1) \\
\text{Let } f_{n}(x) = x^{n} \\
\text{Let } m \in \mathbb{N} \\
f_{n}(x) \to 0 \text{ on } X_{m} \\
d_{n_{m}} = \sup_{x \in X_{m}} \left\lvert f_{n}(x) - 0 \right\rvert = \max_{x \in X_{m}}\{x^{n}\} = \left( 1 - \frac{1}{m} \right)^{n} \to 0 \\
\implies \boxed{ \forall m \in \mathbb{N}: f_{n}(x) \rightrightarrows 0 \text{ on } X_{m} } \\
f_{n}(x) \to 0 \text{ on } X \\
d_{n} = \sup_{x \in X} \left\lvert f_{n}(x) - 0 \right\rvert = \left\lvert 1^{n} - 0 \right\rvert = 1^{n} \to 1 \\
\implies \boxed{ f_{n}(x) \not\rightrightarrows 0 \text{ on } X } \\
}
$$
# 1c
$$
\displaylines{
\text{Explain why proof from 1a doesn't work for an infinite number of subsets} \\
\\
\text{Explanation:} \\
\text{Proof in 1a is based on the fact that in any finite set of real numbers there is a maximum} \\
\text{In an infinite set there might not be a maximum, e.g.} \\
N_{\varepsilon} = \max\{1, 2, 3, \dots \} = \max\{\mathbb{N}\} \text{ which does not exist} \\
\text{And the proof fails} \\
}
$$
# 2a
$$
\displaylines{
\sum_{n=1}^{\infty} \frac{\sin(nx)\cos(x+n^{2}x^{2})}{n^{2}} \quad x \in (-\infty, \infty) \\
\\
\left\lvert \frac{\sin(nx)\cos(x+n^{2}x^{2})}{n^{2}} \right\rvert \leq \frac{1}{n^{2}} \\
\sum_{n=1}^{\infty} \frac{1}{n^{2}} \text{ converges} \implies \text{By Weierstrass M-test:} \\
\boxed{ \sum_{n=1}^{\infty} \frac{\sin(nx)\cos(x+n^{2}x^{2})}{n^{2}} \text{ converges uniformly on } (-\infty, \infty) } \\
}
$$
# 2b
$$
\displaylines{
\sum_{n=2}^{\infty} \ln\left( 1 + \frac{e^{x}}{n\ln^{3}(n)} \right) \quad x \in (-2, 2) \\
\\
\ln\left( 1 + \underbrace{ \frac{e^{x}}{n\ln^{3}(n)} }_{ > 0 } \right) \leq \frac{e^{x}}{n\ln^{3}(n)} \leq \frac{e^{2}}{n\ln^{3}(n)} \\
\sum_{n=2}^{\infty} \frac{e^{2}}{n\ln^{3}(n)} \text{ converges by Cauchy's condensation test} \\
\implies \text{By Weierstrass M-test } \boxed{ \sum_{n=2}^{\infty} \ln\left( 1 + \frac{e^{x}}{n\ln^{3}(n)} \right) \text{ converges uniformly on } (-2, 2) } \\
}
$$
# 2c
$$
\displaylines{
\sum_{n=1}^{\infty} \frac{x}{(1+x^{2})^{n}} \quad x \in [0, \infty) \\
\\
x = 0 \implies \sum_{n=1}^{\infty} \frac{x}{(1+x^{2})^{n}} = 0 \\
\sum_{n=1}^{\infty} \frac{x}{(1+x^{2})^{n}} = x \sum_{n=1}^{\infty} \left( \frac{1}{1+x^{2}} \right)^{n} \\
x > 0 \implies x^{2} + 1 > 1 \implies \left( \frac{1}{1+x^{2}} \right) < 1 \implies \sum_{n=1}^{\infty} \left( \frac{1}{1+x^{2}} \right)^{n} = \frac{1}{1 - \frac{1}{1+x^{2}}} - 1 \\
\implies \sum_{n=1}^{\infty} \frac{x}{(1+x^{2})^{n}} = x\left( \frac{1+x^{2}}{x^{2}} - 1 \right) = \frac{1}{x} \\
\implies \sum_{n=1}^{\infty} \frac{x}{(1+x^{2})^{n}} = \left\{\begin{array}{}
0 & x = 0 \\
\frac{1}{x} & x \in (0, \infty) \\
\end{array}\right. \\
\text{Series is continuous but the limit function is not} \\
\implies \boxed{ \sum_{n=1}^{\infty} \frac{x}{(1+x^{2})^{n}} \not\rightrightarrows \left\{\begin{array}{}
0 & x = 0 \\
\frac{1}{x} & x \in (0, \infty) \\
\end{array}\right. } \\
}
$$
# 2d
$$
\displaylines{
\sum_{n=1}^{\infty} \frac{n^{2}x}{n^{8}x^{2}+10} \quad x \in (-\infty, \infty) \\
\\
\text{Let } g(x) = \frac{n^{2}x}{n^{8}x^{2}+10} \\
g'(x) = \frac{n^{2}(n^{8}x^{2}+10) - n^{2}x(2n^{8}x)}{(n^{8}x^{2}+10)^{2}} = \frac{10n^{2} - n^{10}x^{2}}{(n^{8}x^{2}+10)^{2}} \\
g'(x) = 0 \iff n^{10}x^{2} = 10n^{2} \iff x^{2} = \frac{10}{n^{8}} \iff x = \pm \frac{\sqrt{ 10 }}{n^{4}} \\
x = \frac{4}{n^{4}} > \frac{\sqrt{ 10 }}{n^{4}} \implies g'(x) = -\frac{6n^{2}}{(n^{8}x^{2}+10)^{2}} < 0 \\
x = 0 \implies g'(x) = \frac{n^{2}}{10} > 0 \\
\implies x = \frac{\sqrt{ 10 }}{n^{4}} \text{ is a local maximum} \\
\text{The only extremums are } x = \pm \frac{\sqrt{ 10 }}{n^{4}} \\
\forall x : g(-x) = -g(x) \implies \left\lvert g(-x) \right\rvert = \left\lvert g(x) \right\rvert \\
\implies \left\lvert g\left( \frac{\sqrt{ 10 }}{n^{4}} \right) \right\rvert = \left\lvert g\left( -\frac{\sqrt{ 10 }}{n^{4}} \right) \right\rvert \text{ is then a global maximum of } \left\lvert g(x) \right\rvert \\
\left\lvert g\left( \frac{\sqrt{ 10 }}{n^{4}} \right) \right\rvert = \frac{\frac{\sqrt{ 10 }}{n^{2}}}{20} = \frac{\sqrt{ 10 }}{20} \cdot \frac{1}{n^{2}} \\
\implies \left\lvert g(x) \right\rvert \leq \frac{1}{n^{2}} \\
\implies \text{By Weierstrass M-test } \boxed{ \sum_{n=1}^{\infty} \frac{n^{2}x}{n^{8}x^{2}+10} \text{ converges uniformly on } (-\infty, \infty) } \\
}
$$
# 2e
$$
\displaylines{
\sum_{n=1}^{\infty} \frac{(n+2)(x^{n}+x^{-n})}{n!} \quad x \in [3, 8] \\
\\
\text{Let } g(x) = \frac{(n+2)(x^{n}+x^{-n})}{n!} \\
g'(x) = \frac{(n(n+2)x^{n-1} - n(n+2)x^{-n-1})n!}{n!^{2}} = \frac{n(n+2)(x^{n-1}-x^{-n-1})}{n!} \\
g'(x) = 0 \iff x^{n-1} = x^{-n-1} \iff x^{2n} = 1 \iff x = \pm 1 \\
x = 2 \implies g'(x) = \frac{n(n+2)(2^{n-1} - 2^{-n-1})}{n!} > 0 \\
\implies g(x) \text{ is monotonically increasing on } [3, 8] \\
\implies g(x) \leq g(8) \implies \left\lvert g(x) \right\rvert \leq \frac{(n+2)(8^{n}+8^{-n})}{n!} \\
\frac{(n+2)(8^{n}+8^{-n})}{n!} \leq \frac{2(n+2)8^{n}}{n!} \leq \frac{4n8^{n}}{n!} \\
\lim_{ n \to \infty } \frac{\frac{4(n+1)8^{n+1}}{(n+1)!}}{\frac{4n8^{n}}{n!}} = \lim_{ n \to \infty } \frac{8(n+1)}{n(n+1)} = \lim_{ n \to \infty } \frac{8}{n} = 0 \\
\implies \sum_{n=1}^{\infty} \frac{4n8^{n}}{n!} \text{ converges} \implies \sum_{n=1}^{\infty} \frac{(n+2)(8^{n}+8^{-n})}{n!} \text{ converges} \\
\implies \text{By Weierstrass M-test } \boxed{ \sum_{n=1}^{\infty} \frac{(n+2)(x^{n}+x^{-n})}{n!} \text{ converges uniformly on } [3, 8] } \\ 
}
$$
# 3
$$
\displaylines{
\text{Let } f(x) = \sum_{n=1}^{\infty} \frac{1}{n^{x}} \\
\text{Let } x \in [a, \infty), a > 1 \\
\text{Prove: } f'(x) = \sum_{n=1}^{\infty} -\frac{\ln(n)}{n^{x}} \\
\\
\text{Proof:} \\
x \geq a \implies \sum_{n=1}^{\infty} \frac{1}{n^{x}} \text{ converges by the p-test as } a > 1 \\
\left\lvert -\frac{\ln(n)}{n^{x}} \right\rvert \leq \frac{\ln(n)}{n^{a}} \\
\lim_{ n \to \infty } \frac{\frac{\ln(n)}{n^{a}}}{\frac{1}{n^{(a+1)/2}}} = \lim_{ n \to \infty } \frac{\ln(n)}{n^{(a-1)/2}} \underset{ a-1 > 0 }{ = } 0 \\
\sum_{n=1}^{\infty} \frac{1}{n^{(a+1)/2}} \text{ converges} \implies \sum_{n=1}^{\infty} \frac{\ln(n)}{n^{a}} \text{ converges} \\
\implies \text{By Weierstrass M-test } \sum_{n=1}^{\infty} -\frac{\ln(n)}{n^{x}} \text{ converges uniformly} \\
\implies \left( \sum_{n=1}^{\infty} \frac{1}{n^{x}} \right)' = \sum_{n=1}^{\infty} \left( \frac{1}{n^{x}} \right)' = \sum_{n=1}^{\infty} -\frac{\ln(n)}{n^{x}} \\
\implies \boxed{ f'(x) = \sum_{n=1}^{\infty} -\frac{\ln(n)}{n^{x}} } \\
}
$$
# 4
$$
\displaylines{
\text{Calculate } \sum_{n=0}^{\infty} n^{2}x^{n} \text{ on } \left[ -\frac{1}{2}, \frac{1}{2} \right] \\
\\
\text{Solution:} \\
\left[ -\frac{1}{2}, \frac{1}{2} \right] \subset (-1, 1) \text{ which is a convergence interval for } \sum_{n=0}^{\infty} x^{n} \\
\sum_{n=0}^{\infty} x^{n} = \frac{1}{1-x} \\
\text{Power series can be differentiated term-by-term inside the convergence interval} \\
\implies \sum_{n=0}^{\infty} (x^{n})' = \left( \frac{1}{1-x} \right)' = \frac{1}{(1-x)^{2}} \\
\implies \sum_{n=0}^{\infty} nx^{n-1} = \frac{1}{(1-x)^{2}} \\
\implies \sum_{n=0}^{\infty} nx^{n} = \frac{x}{(1-x)^{2}} \\
\sum_{n=0}^{\infty} nx^{n} \text{ is a power series with convergence radius } 1 \text{ and can be differentiated again} \\
\implies \sum_{n=0}^{\infty} (nx^{n})' = \sum_{n=0}^{\infty} n^{2}x^{n-1} = \left( \frac{x}{(1-x)^{2}} \right)' = \frac{1+x}{(1-x)^{3}} \\
\implies \boxed{ \sum_{n=0}^{\infty} n^{2}x^{n} = \frac{x(1+x)}{(1-x)^{3}} \text{ on } \left[ -\frac{1}{2}, \frac{1}{2} \right] } \\
}
$$
