---
{"publish":true,"created":"30/07/25, 20:07","modified":"2026-03-24T15:00:40.069+02:00","tags":["Academia","Lecture","Infi-2"],"cssclasses":""}
---

# 2b
$$
\displaylines{
\int_{1}^{\infty} \sin\left( \frac{x+2}{x^{3}-2} \right) \, dx \\
\\
\text{Solution:} \\
\sin\left( \frac{x+2}{x^{3}-2} \right) \text{ is bounded and has a finite number of discontinuities on } [1, \infty) \\
\implies \text{It is integrable on } [1, \infty) \\
\\
\text{There is a singularity at } x = \sqrt[3]{ 2 } \text{ so we will divide the integral into two} \\
\text{Let } \varepsilon > 0 \\
\int_{1}^{\infty} f(x) \, dx = \int_{1}^{\sqrt[3]{ 2 } + \varepsilon} f(x) \, dx + \int_{\sqrt[3]{ 2 } + \varepsilon}^{\infty} f(x) \, dx \\
\\
\lim_{ x \to \infty } \frac{\sin\left( \frac{x+2}{x^{3}-2} \right)}{\frac{1}{x^{2}}} = \lim_{ x \to \infty } \frac{\sin\left( \frac{x+2}{x^{3}-2} \right)}{\frac{x+2}{x^{3}-2}} \cdot \frac{\frac{x+2}{x^{3}-2}}{\frac{1}{x^{2}}} = \lim_{ x \to \infty } \frac{\sin\left( \frac{x+2}{x^{3}-2} \right)}{\frac{x+2}{x^{3}-2}} \cdot \lim_{ x \to \infty } \frac{\frac{x+2}{x^{3}-2}}{\frac{1}{x^{2}}} = \\
= \left\{\begin{array}{}
t = \frac{x+2}{x^{3}-2} \\
x \to \infty \implies t \to 0 \\
\end{array}\right\} = \lim_{ t \to 0^{+} } \frac{\sin(t)}{t} \cdot \lim_{ x \to \infty } \frac{1+\frac{2}{x}}{1-\frac{2}{x^{3}}} = 1 \cdot 1 = 1 \\
\int_{\sqrt[3]{ 2 } + \varepsilon}^{\infty} \frac{1}{x^{2}} \, dx \text{ converges by p-test} \\
\implies \text{By limit comparison test: } \int_{\sqrt[3]{ 2 } + \varepsilon}^{\infty} \sin\left( \frac{x+2}{x^{3}-2} \right) \, dx \text{ converges} \\
\int_{1}^{\sqrt[3]{ 2 } + \varepsilon} f(x) \, dx \text{ converges as } f(x) \text{ is bounded on } [1, \sqrt[3]{ 2 } + \varepsilon] \\
}
$$
# 3a
$$
\displaylines{
\text{Let } f_{n}(x) = \sqrt{ n + 1 }\sin^{n}(x) \\
\text{Prove or disprove: } f_{n}(x) \text{ converges uniformly on } [0, \pi] \\
\\
\text{Disproof:} \\
x = 0, \pi \implies \sin^{n}(x) = 0 \implies f_{n}(x) = 0 \\
x = \frac{\pi}{2} \implies \sin^{n}(x) = 1 \implies f_{n}(x) = \sqrt{ n + 1 } \to \infty \\
\lim_{ n \to \infty } f_{n}(x) = \lim_{ n \to \infty } \frac{\sqrt{ n+1 }}{\left( \underbrace{ \frac{1}{\sin x} }_{ > 1 } \right)^{n}} = 0 \\
\implies f_{n}(x) \to f(x) = \left\{\begin{array}{}
\infty & x= \frac{\pi}{2} \\
0 & \text{ otherwise} \\
\end{array}\right. \text{ on } [0, \pi] \\
f(x) \text{ is not continuous at } \frac{\pi}{2} \implies \boxed{ f_{n} \text{ does not converge uniformly} } \\
}
$$
# 3b
$$
\displaylines{
S(x) = \sum_{n=0}^{\infty} \frac{\sin x}{(1+x)^{n}} \\
\text{Prove or disprove: } S(x) \text{ converges uniformly on } (0, \pi) \\
\\
\text{Disproof:} \\
S(x) = \sum_{n=0}^{\infty} \frac{\sin x}{(1+x)^{n}} = \sin x \sum_{n=0}^{\infty} \frac{1}{(1+x)^{n}} \\
x \in (0, \pi) \implies \frac{1}{1+x} \in \left( \frac{1}{1+\pi}, 1 \right) \subseteq (-1, 1) \\
\implies \sum_{n=0}^{\infty} \frac{1}{(1+x)^{n}} = \frac{1}{1-\frac{1}{1+x}} = \frac{1+x}{x} \\
\implies S(x) = \frac{\sin x(x+1)}{x} \\
S(0) = 0 \\
\lim_{ x \to 0^{+} } \frac{\sin x(x+1)}{x} = \lim_{ x \to 0^{+} } \frac{\sin x}{x} \cdot (x+1) = 1 \neq S(0) \\
\implies S(x) \text{ is not continuous at } 0 \implies S(x) \text{ does not converge uniformly on } [0, \pi) \\
\sup_{x \in [0, \pi)} \left\lvert R_{N}(x) \right\rvert = \max\{\left\lvert R_{N}(0) \right\rvert, \sup_{x \in (0, \pi) \left\lvert R_{N}(x) \right\rvert}\} \\
R_{N}(0) = 0 \implies \sup_{x \in [0, \pi)} \left\lvert R_{N}(x) \right\rvert = \sup_{x \in (0, \pi)} \left\lvert R_{N}(x) \right\rvert \\
\implies S(x) \text{ does not converge uniformly on } (0, \pi) \\
}
$$
# 4b
$$
\displaylines{
\text{Find } \int_{0}^{1} e^{-t^{2}} \, dt \text{ with } 10^{-4} \text{ accuracy} \\
\\
\text{Solution:} \\
e^{x} = \sum_{n=0}^{\infty} \frac{x^{n}}{n!} \implies e^{-t^{2}} = \sum_{n=0}^{\infty} \frac{(-1)^{n}t^{2n}}{n!} \\
\text{Maclaurin series of } e^{x} \text{ converge on } \mathbb{R} \\
\implies \int_{0}^{1} e^{-t^{2}} \, dt = \int_{0}^{1} \sum_{n=0}^{\infty} \frac{(-1)^{n}t^{2n}}{n!} \, dt = \sum_{n=0}^{\infty} \int_{0}^{1} \frac{(-1)^{n}t^{2n}}{n!} \, dt = \sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2n+1)n!}t^{2n+1} \Bigg|^{t=1}_{t=0} = \\
= \sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2n+1)n!} \\
\text{For alternating series:} \\
\left\lvert R_{k} \right\rvert \leq \left\lvert a_{k+1} \right\rvert = \left\lvert \frac{(-1)^{k+1}}{(2k+3)(k+1)!} \right\rvert = \frac{1}{(2k+3)(k+1)!} \\
\left\lvert R_{k} \right\rvert < 10^{-4} \iff (2k+3)(k+1)! > 10^{4} \\
k = 2 \implies (2k+3)(k+1)! = 7 \cdot 3! = 42 \\
k = 4 \implies (2k+3)(k+1)! = 11 \cdot 5! = 1320 \\
k = 5 \implies (2k+3)(k+1)! = 13 \cdot 6! = 9360 \\
k = 6 \implies (2k+3)(k+1)! = 15 \cdot 7! = 75600 \\
\implies \int_{0}^{1} e^{-t^{2}} \, dt = \sum_{n=0}^{6} \frac{(-1)^{n}}{(2n+1)n!} \pm 10^{-4} \\ 
}
$$
