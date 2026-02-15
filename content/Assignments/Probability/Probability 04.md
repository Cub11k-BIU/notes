---
{"publish":true,"created":"25/01/26, 18:02","modified":"2026-02-07T00:08:53.286+02:00","tags":["Academia","Assignment","Probability"],"cssclasses":""}
---

## Exercise 0.1
### 1
$$
\displaylines{
\text{Let } X: \Omega \to [0, \infty) \\
\text{Given } E[X] = \int_{0}^{\infty} P(X > t) \, dt \\
\text{Show } E[X] \geq 0 \text{ and } E[X] = 0 \iff P(X = 0) = 1 \\
\\
\text{Solution:} \\
\forall t \in [0, \infty): P(X > t) \in [0, 1] \implies P(X > t) \geq 0 \\
\implies \forall b \geq 0 \in \mathbb{R}: \int_{0}^{b} P(X > t) \, dt \geq 0 \\
\implies \int_{0}^{\infty} P(X > t) \, dt = \lim_{ b \to \infty } \int_{0}^{b} P(X > t) \, dt \geq 0 \\
\implies \boxed{ E[X] \geq 0 } \\
\text{Let } P(X = 0) = 1 \\
\implies \forall t \geq 0: P(X > t) = 0 \implies E[X] = \int_{0}^{\infty} P(X > t) \, dt = \int_{0}^{\infty} 0 \, dt = 0 \\  
\text{Let } E[X] = 0 \\
P(X = 0) = 1 \iff P(X > 0) = 0 \\
P(X > 0) = P\left( \bigcup_{i=1}^{n} \left( X \geq \frac{1}{n} \right) \right) \\
\text{Let } n \in \mathbb{N} \\
\text{Let } A = \Set{ X \geq \frac{1}{n} } \in \bigcup_{i=1}^{n} \left( X \geq \frac{1}{n} \right) \\
\text{Let } Z_{n} = \frac{1}{n} \cdot 1_{A} \\
\implies 0 \leq Z_{n} \leq X \\
E[Z_{n}] = \frac{1}{n} P\left( Z_{n} = \frac{1}{n} \right) = \frac{1}{n} P(A) = \frac{1}{n} \cdot P\left( X \geq \frac{1}{n} \right) \\
Z_{n} \leq X \implies E[Z_{n}] \leq E[X] = 0 \\
\implies Z_{n} \geq 0 \implies E[Z_{n}] \geq 0 \implies E[Z_{n}] = 0 \\
\implies P\left( X \geq \frac{1}{n} \right) = 0 \implies P\left( \bigcup_{i=1}^{n} \left( X \geq \frac{1}{n} \right) \right) \leq \sum_{i=1}^{n} P\left( X \geq \frac{1}{n} \right) = 0 \\
\implies P(X > 0) = 0 \implies P(X = 0) = 1 \implies \boxed{ E[X] = 0 \iff P(X = 0) = 1 } \\
}
$$
### 2
$$
\displaylines{
\text{Let } X: \Omega \to \mathbb{R} \\
\text{Prove: } Var(X) = 0 \iff \exists c \in \mathbb{R}: P(X = c) = 1 \\
\\
\text{Solution:} \\
\text{Let } \exists c \in \mathbb{R}: P(X = c) = 1 \\
\implies \mathrm{Im}X = \Set{ c } \\
\implies E[X] = c \cdot P(X = c) = c \\
E[X^{2}] = c^{2} \cdot P(X = c) = c^{2} \\
\implies \boxed{ Var(X) = E[X^{2}] - E[X]^{2} = c^{2} - c^{2} = 0 } \\
\text{Let } Var(X) = 0 \\
Var(X) = E[(X-E[X])^{2}] \\
E[(X-E[X])^{2}] = 0 \iff P((X-E[X])^{2} = 0) = 1 \\
\iff P(X-E[X] = 0) = 1 \iff P(X = E[X]) = 1 \\
\text{Let } c = E[X] \in \mathbb{R} \\
\implies P(X = c) = 1 \\
\implies \boxed{ Var(X) = 0 \iff \exists c \in \mathbb{R}: P(X = c) = 1 } \\
}
$$
## Exercise 0.2
$$
\displaylines{
\text{Let } X, Y \sim (0, 1) \text{ independently} \\
\text{Find } P\left( \floor{\frac{Y}{X}} \text{ is even} \right) \\
\\
\text{Solution:} \\
f_{X}(t) = f_{Y}(t) = \begin{cases}
1 & t \in (0, 1) \\
0 & \text{otherwise} \\
\end{cases} \\
X, Y \text{ are independent} \implies f_{X,Y}(x, y) = f_{X}(x) \cdot f_{Y}(y) = \begin{cases}
1 & (x, y) \in (0, 1)^{2} \\
0 & \text{otherwise} \\
\end{cases} \\
X, Y > 0 \implies \floor{\frac{Y}{X}} \in \mathbb{N}_{0} \\
\implies P\left( \floor{\frac{Y}{X}} \text{ is even} \right) = \sum_{k=0}^{\infty} P\left( \floor{\frac{Y}{X}} = 2k \right) \\
i = 0 \implies P\left( \floor{\frac{Y}{X}} = i \right) = P(Y < X) = \int_{0}^{1} \int_{0}^{x} 1 \, dy \, dx = \int_{0}^{1} x \, dx = \frac{1}{2} \\
\text{Let } i \in \mathbb{N} \\
P\left( \floor{\frac{Y}{X}} = i \right) = P(iX \leq Y < (i+1)X) = \\
= \int_{0}^{1} P(iX \leq Y < (i+1)X \mid X = x)f_{X}(x) \, dx = \\
= \int_{0}^{1} P(ix \leq Y < (i+1)x) \, dx \\
x \geq \frac{1}{i} \implies ix \geq 1 \implies P(ix \leq Y < (i+1)x) = 0 \\
\implies P\left( \floor{\frac{Y}{X}} = i \right) = \int_{0}^{1/i} P(ix \leq Y < (i+1)x) \, dx \\
\text{Let } x < \frac{1}{i} \\
x \geq \frac{1}{i+1} \implies (i+1)x \geq 1 \implies P(ix \leq Y < (i+1)x) = P(ix \leq Y < 1) = \\
= F_{Y}(1) - F_{Y}(ix) = 1 - ix \\
x < \frac{1}{i+1} \implies (i+1)x < 1 \implies P(ix \leq Y < (i+1)x) = \\
= F_{Y}((i+1)x) - F_{Y}(ix) = x \\
\implies P\left( \floor{\frac{Y}{X}} = i \right) = \int_{0}^{1/i} P(ix \leq Y < (i+1)x) \, dx = \\
= \int_{0}^{1/(i+1)} x \, dx + \int_{1/(i+1)}^{1/i} (1-ix) \, dx = \\
= \frac{1}{2(i+1)^{2}} + \left( \frac{1}{i} - \frac{1}{i+1} \right) - i\left( \frac{1}{2i^{2}} - \frac{1}{2(i+1)^{2}} \right) = \\
= \frac{i^{2}}{2i^{2}(i+1)^{2}} + \frac{2i(i+1)}{2i^{2}(i+1)^{2}} - \frac{i(i+1)^{2}}{2i^{2}(i+1)^{2}} + \frac{i^{3}}{2i^{2}(i+1)^{2}} = \\
= \frac{i^{2}+2i^{2}+2i - i^{3} - 2i^{2} - i + i^{3}}{2i^{2}(i+1)^{2}} = \frac{1}{2i(i+1)} \\
\\
\implies P\left( \floor{\frac{Y}{X}} \text{ is even} \right) = \sum_{k=0}^{\infty} P\left( \floor{\frac{Y}{X}} = 2k \right) = \\
= \frac{1}{2} + \sum_{k=1}^{\infty} \frac{1}{2 \cdot 2k(2k+1)} \\
\sum_{k=1}^{\infty} \frac{1}{2k(2k+1)} = \sum_{k=1}^{\infty} \left( \frac{1}{2k} - \frac{1}{2k+1} \right) = \sum_{k=2}^{\infty} \frac{(-1)^{k}}{k} = 1 - \ln 2 \\
\implies \boxed{ P\left( \floor{\frac{Y}{X}} \text{ is even} \right) = \frac{1}{2} + \frac{1}{2}(1 - \ln 2) = 1 - \frac{\ln 2}{2} } \\
}
$$
## Exercise 0.3
Suppose that a narrow-beam flashlight is spun around its center,
which is located a unit distance from the X-axis. Consider the point
X at which the beam intersects the X-axis when the flashlight has stopped spinning.
(If the beam is not pointing toward the x-axis, repeat the experiment.)
### 1
$$
\displaylines{
\text{Find CDF and PDF of } X \\
\\
\text{Solution:} \\
\text{Let } \theta \text{ be the angle between Y-axis and the flashlight after it stops spinning} \\
\text{Assume } \theta \sim \left( -\frac{\pi}{2}, \frac{\pi}{2} \right) \\
X = \tan\theta \implies \mathrm{Im}X = (-\infty, \infty) \\
P(X \leq t) = P(\tan\theta \leq t) = P(\theta \in \tan^{-1}(-\infty, t]) = \\
= P\left( \theta \in \left( -\frac{\pi}{2}, \arctan t \right] \right) = \frac{\arctan t+\frac{\pi}{2}}{\pi} \\
\implies \boxed{ F_{X}(t) = \frac{\arctan t+\frac{\pi}{2}}{\pi} } \\
\implies \boxed{ f_{X}(t) = \frac{1}{\pi(t^{2}+1)} } \\
}
$$
### 2
$$
\displaylines{
\text{Find PDF and CDF of } \abs{X} \\
\\
\text{Solution:} \\
\text{Let } Y = \abs{X} \\
\mathrm{Im}X = (-\infty, \infty) \implies \mathrm{Im}Y = [0, \infty) \\
\implies F_{Y}(t) = \begin{cases}
0 & t < 0 \\
\dots & t \geq 0 \\
\end{cases} \\
\text{Let } t \geq 0 \\
F_{Y}(t) = P(Y \leq t) = P(\abs{X} \leq t) = P(-t \leq X \leq t) = F_{X}(t) - F_{X}(-t) = \\
= \frac{\arctan t+\frac{\pi}{2}}{\pi} - \frac{\arctan (-t)+\frac{\pi}{2}}{\pi} = \frac{\arctan t - \arctan(-t)}{\pi} = \frac{2\arctan t}{\pi} \\
\implies \boxed{ F_{Y}(t) = \begin{cases}
0 & t < 0 \\
\frac{2\arctan t}{\pi} & t \geq 0 \\
\end{cases} } \\
\implies \boxed{ f_{Y}(t) = \begin{cases}
0 & t < 0 \\
\frac{2}{\pi(t^{2}+1)} & t \geq 0 \\
\end{cases} } \\
}
$$
### 3
$$
\displaylines{
\text{Find } E[\abs{X}] \\
\\
\text{Solution:} \\
E[\abs{X}] = E[Y] = E[E[Y \mid \theta]] = \int_{-\pi/2}^{\pi/2} E[Y \mid \theta = a]f_{\theta}(a) \, da = \int_{-\pi/2}^{\pi/2} \frac{\abs{\tan a}}{\pi} \, da = \\
= \frac{2}{\pi} \int_{0}^{\pi/2} \tan a \, da \\
\int \tan x \, dx = -\ln \abs{\cos x} \\
\implies \int_{0}^{\pi/2} \tan a \, da = \lim_{ b \to \frac{\pi}{2} } \int_{0}^{b} \tan a \, da = \lim_{ b \to \frac{\pi}{2} } (-\ln \abs{\cos b}+\ln \abs{\cos 0}) = \\
= \lim_{ b \to \frac{\pi}{2} } -\ln \abs{\cos b} = \infty \\
\implies \boxed{ E[\abs{X}] = \frac{2}{\pi} \cdot \int_{0}^{\pi/2} \tan a \, da = \infty } \\
\\
\text{Alternatively, by LOTUS:} \\
E[\abs{X}] = \int_{-\infty}^{\infty} \abs{x}f_{X}(x) \, dx = \int_{-\infty}^{\infty} \frac{\abs{x}}{\pi(x^{2}+1)} \, dx = \frac{2}{\pi}\int_{0}^{\infty} \frac{x}{x^{2}+1} \, dx = \\
= \frac{1}{\pi}\int_{1}^{\infty} \frac{1}{t} \, dt = \frac{1}{\pi}\lim_{ b \to \infty } (\ln \abs{b} - \ln \abs{1}) = \frac{1}{\pi}\lim_{ b \to \infty } \ln \abs{b} = \infty \\
}
$$
## Exercise 0.4
$$
\displaylines{
\text{Let } X \sim \mathcal{N}(1, 2) \\
\text{Let } p(t) = t^{2} + Xt + 1 \\
}
$$
### 1
$$
\displaylines{
\text{Find probability that } p \text{ has 0/1/2 real roots} \\
\\
\text{Solution:} \\
\text{Let } Z = \frac{X-1}{\sqrt{ 2 }} \\
X \sim \mathcal{N}(1, 2) \implies Z \sim \mathcal{N}(0, 1) \\
\text{Let } N = \text{number of real roots of } p \\
\mathrm{Im}N = \Set{ 0, 1, 2 } \\
p(t) = t^{2} + Xt + 1 = \left( t+\frac{X}{2} \right)^{2} + \left( 1 - \frac{X^{2}}{4} \right) \\
\implies P(N = 0) = P\lrp{1 - \frac{X^{2}}{4} > 0} = P(X^{2} < 4) = P(-2 < X < 2) = \\
= P\left(-\frac{3}{\sqrt{ 2 }} < Z < \frac{1}{\sqrt{ 2 }} \right) = F_{Z}\left( \frac{1}{\sqrt{ 2 }} \right) - F_{Z}\left( -\frac{3}{\sqrt{ 2 }} \right) = \\
= \phi\left( \frac{1}{\sqrt{ 2 }} \right) - \left( 1-\phi\left( \frac{3}{\sqrt{ 2 }} \right) \right) = \phi\left( \frac{1}{\sqrt{ 2 }} \right) + \phi\left( \frac{3}{\sqrt{ 2 }} \right) - 1 \\
P(N = 1) = P\left( 1 - \frac{X^{2}}{4} = 0 \right) = P(X^{2} = 4) = P(X = 2 \cup X = -2) = \\
= P(X = 2) + P(X = -2) = 0 + 0 = 0 \\
P(N = 2) = P\left( 1 - \frac{X^{2}}{4} < 0 \right) = P(X^{2} > 4) = P(X > 2 \cup X < -2) = \\
= P(X > 2) + P(X < -2) = P\left( Z > \frac{1}{\sqrt{ 2 }} \right) + P\left( Z < -\frac{3}{\sqrt{ 2 }} \right) = \\
= 1 - F_{Z}\left( \frac{1}{\sqrt{ 2 }} \right) + F_{Z}\left( -\frac{3}{\sqrt{ 2 }} \right) = 1 - \phi\left( \frac{1}{\sqrt{ 2 }} \right) + 1 - \phi\left( \frac{3}{\sqrt{ 2 }} \right) \\
\\
\implies \boxed{ \begin{aeqsys}
& P(N = 0) = \phi\left( \frac{1}{\sqrt{ 2 }} \right) + \phi\left( \frac{3}{\sqrt{ 2 }} \right) - 1 \\
& P(N = 1) = 0 \\
& P(N = 2) = 2 - \phi\left( \frac{1}{\sqrt{ 2 }} \right) - \phi\left( \frac{3}{\sqrt{ 2 }} \right) \\
\end{aeqsys} } \\
}
$$
### 2
$$
\displaylines{
\text{Let } Y = \min_{t}\lrc{p(t)} \\
\text{Find } E[Y] \\
\\
\text{Solution:} \\
Y = \min_{t}\lrc{p(t)} = \min_{t}\lrc{t^{2}+Xt+1} = \frac{X^{2}}{4}-\frac{X^{2}}{2}+1 = 1 - \frac{X^{2}}{4} \\
\implies E[Y] = E\left[ 1 - \frac{X^{2}}{4} \right] = 1 - \frac{1}{4}E[X^{2}] \\
X \sim \mathcal{N}(1, 2) \implies Var(X) = 2 \\
\implies E[X^{2}] - E[X]^{2} = 2 \implies E[X^{2}] = 2 + E[X]^{2} = 2 + 1 = 3 \\
\implies \boxed{ E[Y] = 1 - \frac{1}{4}E[X^{2}] = 1 - \frac{3}{4} = \frac{1}{4} } \\
}
$$
## Exercise 0.5
$$
\displaylines{
\text{Let } Z \sim \mathcal{N}(0, 1) \\
\text{Let } X = e^{Z} \\
}
$$
### 1
$$
\displaylines{
\text{Find CDF and PDF of } X \\
\\
\text{Solution:} \\
X = e^{Z} \implies \mathrm{Im}X = (0, \infty) \\
\implies F_{X}(t) = \begin{cases}
0 & t \leq 0 \\
\dots & t > 0 \\
\end{cases} \\
P(X \leq t) = P(e^{Z} \leq t) = P(Z \leq \ln t) = F_{Z}(\ln t) = \begin{cases}
1-\phi(-\ln t) & 0 < t < 1 \\
\phi(\ln t) & t \geq 1 \\
\end{cases} \\
\implies \boxed{ F_{X}(t) = \begin{cases}
0 & t \leq 0 \\
1 - \phi(-\ln t) & t \in (0, 1) \\
\phi(\ln t) & t \geq 1 \\
\end{cases} } \\
\implies f_{X}(t) = \begin{cases}
0 & t \leq 0 \\
\frac{1}{t}f_{Z}(\ln t) & t \in (0, 1) \\
\frac{1}{t}f_{Z}(\ln t) & t \geq 1 \\
\end{cases} \implies \boxed{ f_{X}(t) = \begin{cases}
0 & t \leq 0 \\
\frac{1}{t\sqrt{ 2\pi }}e^{-(\ln^{2} t)/2} & t > 0 \\
\end{cases} } \\
}
$$
### 2
$$
\displaylines{
\text{Find } E[X], Var(X) \\
\\
\text{Solution:} \\
E[X] = E[e^{Z}] = \int_{-\infty}^{\infty} e^{x}f_{Z}(x) \, dx = \int_{-\infty}^{\infty} \frac{1}{\sqrt{ 2\pi }}e^{x}e^{-x^{2}/2} \, dx \\
x-\frac{x^{2}}{2} = -\frac{1}{2}(x^{2} - 2x + 1 - 1) = \frac{1}{2} - \frac{(x-1)^{2}}{2} \\
\implies E[X] = \int_{-\infty}^{\infty} \frac{1}{\sqrt{ 2\pi }}e^{1/2}e^{-(x-1)^{2}/2} \, dx = e^{1/2} \cdot \int_{-\infty}^{\infty} \frac{1}{\sqrt{ 2\pi }}e^{-(x-1)^{2}/2} \, dx \\
\\
\text{Let } Y \sim \mathcal{N}(1, 1) \\
\implies f_{Y}(t) = \frac{1}{\sqrt{ 2\pi }}e^{-(t-1)^{2}/2} \\
\implies \int_{-\infty}^{\infty} \frac{1}{\sqrt{ 2\pi }}e^{-(x-1)^{2}/2} \, dx = \int_{-\infty}^{\infty} f_{Y}(x) \, dx = 1 \\
\implies \boxed{ E[X] = e^{1/2} = \sqrt{ e } } \\
}
$$
## Exercise 0.6
Suppose that we have two independent Poisson processes, $P_{1}$ with rate $\lambda_{1}$ and $P_{2}$ with rate $\lambda_{2}$. We construct from them a new process $P_{3}$ in which an occurrence in $P_{3}$ means that we have an occurrence in $P_{1}$ or an occurrence in $P_{2}$
### 1
$$
\displaylines{
\text{Explain why } P_{3} \text{ is a Poisson process and find its rate} \\
\\
\text{Solution:} \\
\text{Let } X_{1} \sim Pois(\lambda_{1}) \\
\text{Let } X_{2} \sim Pois(\lambda_{2}) \\
X_{1}, X_{2} \text{ are independent} \implies P(X_{1} = t_{1}, X_{2} = t_{2}) = P(X_{1} = t_{1}) \cdot P(X_{2} = t_{2}) \\
\text{Let } X_{3} = X_{1} + X_{2} \\
\text{Clearly, } X_{3} \text{ represents } P_{3}, \text{ each occurence in } P_{3} \text{ is either an ocurence in } P_{1} \text{ or in } P_{2} \\
\text{So the total number of occurences in } P_{1} \text{ and in } P_{2} \text{ is the number of occurences in } P_{3} \\
P(X_{3} = n) = \sum_{k=0}^{n} P(X_{1} = k) \cdot P(X_{2} = n - k) = \sum_{k=0}^{n} e^{-\lambda_{1}-\lambda_{2}} \frac{\lambda_{1}^{k}\lambda_{2}^{n-k}}{k!(n-k)!} = \\
= \frac{e^{-\lambda_{1}-\lambda_{2}}}{n!} \cdot \sum_{k=0}^{n} \binom{n}{k} \lambda_{1}^{k}\lambda_{2}^{n-k} = e^{-(\lambda_{1}+\lambda_{2})}\frac{(\lambda_{1}+\lambda_{2})^{n}}{n!} \\
\implies \boxed{ X_{3} = X_{1}+X_{2} \sim Pois(\lambda_{1} + \lambda_{2}) } \\
}
$$
### 2
$$
\displaylines{
\text{Let } X \text{ be the time of the first occurence in } P_{1} \\
\text{Let } Y \text{ be the time of the first occurence in } P_{2} \\
\text{Let } Z = \min\lrc{X, Y} \\
\text{What is the distribution of } Z? \\
\\
\text{Solution:} \\
\text{By definition: } X \sim Exp(\lambda_{1}), Y \sim Exp(\lambda_{2}) \\
\mathrm{Im}Z = \mathbb{N}_{0} \\
P(Z \leq n) = 1 - P(Z > n) \\
P(Z > n) = P(\min\lrc{X, Y} > n) = P(X > n, Y > n) = \\
= P(X > n) \cdot P(Y > n) = e^{-\lambda_{1}n} \cdot e^{-\lambda_{2}n} = e^{-(\lambda_{1}+\lambda_{2})n} \\
\implies Z \sim Exp(\lambda_{1}+\lambda_{2}) \\
\text{This is consistent with the following informal explanation:} \\
Z \text{ is the time of the first occurence in } P_{3} \\
\implies Z \sim Exp(\lambda_{3}) = Exp(\lambda_{1}+\lambda_{2}) \\
}
$$
### 3
$$
\displaylines{
\text{Let } X \text{ be the time of the first occurence in } P_{1} \\
\text{Let } Y \text{ be the time of the first occurence in } P_{2} \\
\text{Find } P(Y > X) \\
\\
\text{Solution:} \\
P(Y > X) = \int_{0}^{\infty} P(Y > X \mid X = x)f_{X}(x) \, dx = \int_{0}^{\infty} P(Y > x)\lambda_{1}e^{-\lambda_{1}x} \, dx = \\
= \lambda_{1}\int_{0}^{\infty} e^{-(\lambda_{1}+\lambda_{2})x} \, dx = \sbs{
t = -(\lambda_{1}+\lambda_{2})x \\
dt = -(\lambda_{1}+\lambda_{2})dx \\
} = \frac{\lambda_{1}}{\lambda_{1}+\lambda_{2}}\int_{-\infty}^{0} e^{t} \, dt = \\
= \frac{\lambda_{1}}{\lambda_{1}+\lambda_{2}} \lim_{ a \to -\infty } (1 - e^{a}) = \frac{\lambda_{1}}{\lambda_{1}+\lambda_{2}} \\
}
$$
## Exercise 0.7
$$
\displaylines{
\text{Let } (X, Y) \text{ be apair of random variables} \\
f_{X,Y}(x, y) = \begin{cases}
C(x^{2}+2y+xy) & x, y \in [0, 2] \\
0 & \text{otherwise} \\
\end{cases} \\
}
$$
### 1
$$
\displaylines{
\text{Find } C \\
\\
\text{Solution:} \\
\iint_{R} f_{X,Y}(x, y) \, dxdy = 1 \\
\iint_{R} f_{X,Y}(x, y) \, dxdy = \int_{0}^{2} \int_{0}^{2} C(x^{2}+2y+xy) \, dy  \, dx = \int_{0}^{2} C\left( 2x^{2}+4+2x \right) \, dx = \\
= 2C\int_{0}^{2} (x^{2}+x+2) \, dx = 2C\left( \frac{8}{3} + 2 + 4 \right) = 2C\left( \frac{26}{3} \right) \\
\implies \boxed{ C = \frac{3}{52} } \\
}
$$
### 2
$$
\displaylines{
\text{Find } f_{X}, f_{Y} \\
\text{Are } X, Y \text{ independent?} \\
\\
\text{Solution:} \\
f_{X}(x) = \int_{-\infty}^{\infty} f_{X,Y}(x, y) \, dy = \int_{0}^{2} C(x^{2}+2y+xy) \, dy = 2Cx^{2} + 4C + 2Cx \\
f_{Y}(y) = \int_{-\infty}^{\infty} f_{X,Y}(x, y) \, dy = \int_{0}^{2} C(x^{2}+2y+xy) \, dx = \frac{8}{3}C + 4Cy + 2Cy \\
f_{X}(x) \cdot f_{Y}(y) = 2C(x^{2}+x+2) \cdot C\left( 6y + \frac{8}{3} \right) = \\
= 2C^{2}\left( 6x^{2}y + 6xy + 12y + \frac{8}{3}x^{2} + \frac{8}{3}x + \frac{16}{3} \right) \\
C \neq 0 \implies 12C^{2}x^{2}y \neq 0 \implies f_{X,Y}(x, y) \neq f_{X}(x) \cdot f_{Y}(y) \\
\implies \boxed{ X, Y \text{ are not independent} } \\
}
$$
### 3
$$
\displaylines{
\text{Find } E[X] \\
\text{Find } P(\abs{Y - X} \leq 1) \\
\\
\text{Solution:} \\
E[X] = \int_{-\infty}^{\infty} xf_{X}(x) \, dx = \int_{0}^{2} 2C(x^{3}+x^{2}+2x) \, dx = 2C\left( \frac{16}{4} + \frac{8}{3} + 4 \right) = \\
= \frac{64C}{3} = \frac{64}{52} = \frac{16}{13} \\
\implies \boxed{ E[X] = \frac{16}{13} } \\
\\
P(\abs{Y-X} \leq 1) = P(-1 \leq Y - X \leq 1) = P(X-1 \leq Y \leq X + 1) = \\
= 1 - P(Y < X - 1) - P(Y > X + 1) \\
P(Y < X - 1) = \int_{1}^{2} \int_{0}^{x-1} f_{X,Y}(x, y) \, dy  \, dx = \int_{1}^{2} \int_{0}^{x-1} C(x^{2}+2y+xy) \, dy  \, dx = \\
= \int_{1}^{2} Cx^{2}(x-1) + C(x-1)^{2} + \frac{Cx(x-1)^{2}}{2} \, dx = \\
= \int_{1}^{2} Cx^{3} - Cx^{2} + Cx^{2}-2Cx + C + \frac{Cx^{3}-2Cx^{2}+Cx}{2} \, dx = \\
= \left( \frac{Cx^{4}}{4} - Cx^{2} + Cx + \frac{Cx^{4}}{8} - \frac{Cx^{3}}{3} + \frac{Cx^{2}}{4} \right) \Bigg|^{2}_{1} = \\
= \left( 4C - 4C + 2C + 2C - \frac{8C}{3} + C \right) - \left( \frac{C}{4} - C + C + \frac{C}{8} - \frac{C}{3} + \frac{C}{4} \right) = \\
= \frac{7C}{3} - \frac{5C}{8} + \frac{C}{3} = \frac{8C}{3} - \frac{5C}{8} = \frac{64C-15C}{24} = \frac{49C}{24} = \boxed{ \frac{49 \cdot 3}{24 \cdot 52} } \\
P(Y > X + 1) = \int_{0}^{1} \int_{x+1}^{2} f_{X,Y}(x,y) \, dy  \, dx = \int_{0}^{1} \int_{x+1}^{2} C(x^{2}+2y+xy) \, dy  \, dx = \\
= \int_{0}^{1} \left( Cx^{2}y + Cy^{2} + \frac{Cxy^{2}}{2} \right)\Bigg|^{2}_{x+1} \, dx = \\
= \int_{0}^{1} (2Cx^{2} + 4C + 2Cx) - \left( Cx^{2}(x+1) + C(x+1)^{2} + \frac{Cx(x+1)^{2}}{2} \right) \, dx = \\
= C \int_{0}^{1} \frac{-3x^{3}}{2} - \frac{7x^{2}}{2} - \frac{x}{2} + 3 \, dx = C\left( -\frac{3}{8} - \frac{7}{6} - \frac{1}{4} + 3 \right) = C\left( \frac{11}{6}-\frac{5}{8} \right) = \\
= \frac{29C}{24} = \boxed{ \frac{29 \cdot 3}{24 \cdot 52} } \\
\\
\implies P(\abs{Y-X} \leq 1) = 1 - \frac{49C}{24} - \frac{29C}{24} = 1 - \frac{78C}{24} = 1 - \frac{3}{16} = \frac{13}{16} \\
\implies \boxed{ P(\abs{Y - X} \leq 1) = \frac{13}{16} } \\
}
$$
## Exercise 0.8
$$
\displaylines{
\text{Let } Z_{1}, Z_{2} \sim \mathcal{N}(0, 1) \text{ be independent} \\
\text{Let } \begin{pmatrix}
X_{1} \\
X_{2} \\
\end{pmatrix} = \begin{pmatrix}
1 & -3 \\
-2 & 2 \\
\end{pmatrix}\begin{pmatrix}
Z_{1} \\
Z_{2} \\
\end{pmatrix} + \begin{pmatrix}
-2 \\
5 \\
\end{pmatrix} \\
\text{Find } E[X_{1}], E[X_{2}], Var(X_{1}), Var(X_{2}), Cov(X_{1}, X_{2}) \\
\\
\text{Solution:} \\
\begin{pmatrix}
X_{1} \\
X_{2} \\
\end{pmatrix} = \begin{pmatrix}
1 & -3 \\
-2 & 2 \\
\end{pmatrix}\begin{pmatrix}
Z_{1} \\
Z_{2} \\
\end{pmatrix} + \begin{pmatrix}
-2 \\
5 \\
\end{pmatrix} = \begin{pmatrix}
Z_{1}-3Z_{2}-2 \\
2Z_{2}-2Z_{1}+5 \\
\end{pmatrix} \\
\implies \begin{eqsys}
X_{1} = Z_{1} - 3Z_{2} - 2 \\
X_{2} = 2Z_{2} - 2Z_{1} + 5 \\
\end{eqsys} \\
\implies E[X_{1}] = E[Z_{1} - 3Z_{2} - 2] = E[Z_{1}] - 3E[Z^{2}] - E[2] = 0 - 3 \cdot 0 - 2 = -2 \\
\implies E[X_{2}] = E[2Z_{2} - 2Z_{1} + 5] = 2E[Z_{2}] - 2E[Z_{1}] + E[5] = 2 \cdot 0 - 2 \cdot 0 + 5 = 5 \\
\implies \boxed{ E[X_{1}] = -2, E[X_{2}] = 5 } \\
Var(X_{1}) = Var(Z_{1} - 3Z_{2} - 2) = Var(Z_{1} - 3Z_{2}) = Var(Z_{1}) + 9Var(Z_{2}) = 10 \\
Var(X_{2}) = Var(2Z_{2} - 2Z_{1} + 5) = Var(2Z_{2} - 2Z_{1}) = 4Var(Z_{2}) + 4Var(Z_{1}) = 8 \\
\implies \boxed{ Var(X_{1}) = 10, Var(X_{2}) = 8 } \\
Var(X_{1} + X_{2}) = Var(-Z_{1}-Z_{2}+3) = Var(-Z_{1}-Z_{2}) = Var(Z_{1}) + Var(Z_{2}) = 2 \\
Var(X_{1} + X_{2}) = Var(X_{1}) + Var(X_{2}) + 2Cov(X_{1}, X_{2}) \\
\implies 2Cov(X_{1}, X_{2}) = Var(X_{1} + X_{2}) - Var(X_{1}) - Var(X_{2}) = 2 - 10 - 8 = -16 \\
\implies \boxed{ Cov(X_{1}, X_{2}) = -8 } \\
}
$$
