---
{"publish":true,"created":"31/07/25, 11:07","modified":"2025-11-21T21:10:14.339+02:00","tags":["Academia","Lecture","Infi-2"],"cssclasses":""}
---

# 1a
$$
\displaylines{
\int \sqrt{ \frac{1-\sqrt{ x }}{1+\sqrt{ x }} } \, dx \\
\\
\text{Solution:} \\
\sqrt{ \frac{1-\sqrt{ x }}{1+\sqrt{ x }} } = \sqrt{ \frac{(1-\sqrt{ x })^{2}}{1-x} } = \frac{1-\sqrt{ x }}{\sqrt{ 1-x }} \\
\implies \int \sqrt{ \frac{1-\sqrt{ x }}{1+\sqrt{ x }} } \, dx = \int \frac{1-\sqrt{ x }}{\sqrt{ 1-x }} \, dx = \left\{\begin{array}{}
t = \sqrt{ 1 - x } \\
\sqrt{ x } = \sqrt{ 1 - t^{2} } \\
dt = -\frac{1}{2\sqrt{ 1-x }}dx \\
\end{array}\right\} = -2\int 1-\sqrt{ 1-t^{2} } \, dt = \\
= -2t + 2\int \sqrt{ 1-t^{2} } \, dt \\
\int \sqrt{ 1-t^{2} } \, dt = \left\{\begin{array}{}
t = \sin u \\
dt = -\cos udu \\
\end{array}\right\} = -\int \cos^{2}u \, du = - \int \frac{1+\cos(2u)}{2} \, du = \\
= -\frac{1}{2} \left( u + \frac{1}{2}\sin(2u) \right) = -\frac{1}{2}\left( \arcsin t + \frac{1}{2}\sin(2\arcsin t) \right) \\
\implies \int \sqrt{ \frac{1-\sqrt{ x }}{1+\sqrt{ x }} } \, dx = -2\sqrt{ 1-x } - \arcsin \sqrt{ 1-x } - \sqrt{ 1-x } \cdot \cos(\arcsin \sqrt{ 1-x }) + C \\
}
$$
# 1b
$$
\displaylines{
\int x\tan^{2}x \, dx \\
\\
\text{Solution:} \\
f(x) = x \implies f'(x) = 1 \\
g'(x) = \tan^{2}(x) = \frac{1}{\cos^{2}x} - 1 \implies g(x) = \tan(x) - x \\
\implies \int f(x)g'(x) \, dx = f(x)g(x) - \int f'(x)g(x) \, dx = \\
= x\tan x - x^{2} - \int \tan x - x \, dx = x\tan x - x^{2} - \int \tan x \, dx + \frac{x^{2}}{2} = \\
= x\tan x - \frac{x^{2}}{2} - \int \tan x \, dx \\
\int \tan x \, dx = \left\{\begin{array}{}
t = \cos x \\
dt = -\sin xdx \\
\end{array}\right\} = - \int \frac{1}{t} \, dt = -\ln \left\lvert t \right\rvert = -\ln \left\lvert \cos x \right\rvert + C \\
\implies \int x\tan^{2}x \, dx = x\tan x - \frac{x^{2}}{2} + \ln \left\lvert \cos x \right\rvert + C \\
}
$$
# 2a
$$
\displaylines{
\text{Find length of graph of } f(x) = \ln\left( \frac{e^{x}+1}{e^{x}-1} \right) \text{ on } [1, e] \\
\\
\text{Solution:} \\
f'(x) = \left( \frac{e^{x}+1}{e^{x}-1} \right)' \cdot \frac{e^{x}-1}{e^{x}+1} \\
\left( \frac{e^{x}+1}{e^{x}-1} \right)' = \left( 1 + \frac{2}{e^{x}-1} \right)' = 2((e^{x}-1)^{-1})' = \frac{-2e^{x}}{(e^{x}-1)^{2}} \\
\implies f'(x) = \frac{-2e^{x}}{e^{2x}-1} \\
\implies \sqrt{ 1 + (f'(x))^{2} } = \sqrt{ 1 + \frac{4e^{x}}{(e^{2x}-1)^{2}} } = \sqrt{ \frac{(e^{2x}+1)^{2}}{(e^{2x}-1)^{2}} } = \frac{e^{2x}+1}{e^{2x}-1} \\
\implies L(f) = \int_{1}^{e} \frac{e^{2x}+1}{e^{2x}-1} \, dx = \left\{\begin{array}{}
t = e^{2x} \\
dt = 2e^{2x}dx \\
x = 1 \implies t = e^{2} \\
x = e \implies t = e^{2e} \\
\end{array}\right\} = \frac{1}{2}\int_{e^{2}}^{e^{2e}} \frac{t+1}{t(t-1)} \, dt = \\
\frac{1}{2}\int_{e^{2}}^{e^{2e}} \frac{1}{t} + \frac{2}{t(t-1)} \, dt = \frac{1}{2}\int_{e^{2}}^{e^{2e}} \frac{2}{t-1} - \frac{1}{t} \, dt = \\
= \frac{1}{2}(2\ln \left\lvert t-1 \right\rvert - \ln \left\lvert t \right\rvert)\Bigg|^{t=e^{2e}}_{t=e^{2}} = \\
= \frac{1}{2}(2\ln \left\lvert e^{2e}-1 \right\rvert - \ln \left\lvert e^{2e} \right\rvert - 2\ln \left\lvert e^{2}-1 \right\rvert + \ln \left\lvert e^{2} \right\rvert) = \\
= \ln(e^{2e}-1) - e - \ln(e^{2}-1) + 1 \\
}
$$
# 2b
$$
\displaylines{
\text{Find all value of } a, b \in \mathbb{R} \text{ such that} \\
\int_{0}^{\pi/2} \frac{1}{\sin^{a}(x^{2})\cos^{b}x} \, dx \text{ converges} \\
\\
\text{Solution:} \\
x = 0 \implies \sin^{a}(x^{2}) = 0 \\
x = \frac{\pi}{2} \implies \cos^{b}(x) = 0 \\
\implies \text{There are two problematic points on both ends} \\
x \to 0 \implies x^{2} \to 0 \implies \frac{\sin^{a}(x^{2})}{x^{2a}} \to 1^{a}, \cos^{b}(x) \to 1^{b} \\
\implies \lim_{ x \to 0 } \frac{\frac{1}{\sin^{a}(x^{2})\cos^{b}x}}{\frac{1}{x^{2a}}} = 1 \\
\int_{0}^{\pi/4} \frac{1}{x^{2a}} \, dx \text{ converges } \iff 2a < 1 \iff a < \frac{1}{2} \\
\implies \int_{0}^{\pi/4} \frac{1}{\sin^{a}(x^{2})\cos^{b}x} \, dx \text{ converges} \iff \boxed{ a < \frac{1}{2} } \\
x \to \frac{\pi}{2} \implies \forall b \in \mathbb{R}: \frac{\cos^{b}(x)}{\left( \frac{\pi}{2}-x \right)^{b}} \to 1^{b}, \sin^{a}(x^{2}) \to \sin^{a}\left( \frac{\pi^{2}}{4} \right) \\
\implies \lim_{ x \to \frac{\pi}{2} } \frac{\frac{1}{\sin^{a}(x^{2})\cos^{b}x}}{\frac{1}{\left( \frac{\pi}{2}-x \right)^{b}}} = \frac{1}{\sin^{a}\left( \frac{\pi^{2}}{4} \right)} \\
\int_{\frac{\pi}{4}}^{\pi/2} \frac{1}{\left( \frac{\pi}{2}-x \right)^{b}} \, dx \text{ converges} \iff b < 1 \\
\implies \int_{\frac{\pi}{4}}^{\pi/2} \frac{1}{\sin^{a}(x^{2})\cos^{b}(x)} \, dx \text{ converges} \iff b < 1 \\
\implies \forall a < \frac{1}{2}, b < 1 : \int_{0}^{\pi/2} \frac{1}{\sin^{a}(x^{2})\cos^{b}(x)} \, dx \text{ converges} \\ 
}
$$
# 3a
$$
\displaylines{
\text{Prove or disprove: } f_{n}(x) = x^{n}e^{-n^{2}x} \text{ converges uniformly on } (0, \infty) \\
\\
\text{Proof:} \\
x = 0 \implies f_{n}(x) = 0 \implies f(0) = 0 \\
\implies \sup_{x \in [0, \infty)} \left\lvert f_{n}(x) - f(x) \right\rvert = \max\{\left\lvert f_{n}(0)-f(0) \right\rvert, \sup_{x \in (0, \infty)} \left\lvert f_{n}(x) - f(x) \right\rvert\} = \\
= \sup_{x \in (0, \infty)} \left\lvert f_{n}(x) - f(x) \right\rvert \\
\implies f_{n}(x) \text{ converges uniformly on } [0, \infty) \iff \text{ it converges uniformly on } (0, \infty) \\
\\
x = 0 \implies f_{n}(x) = 0 \to 0 \\
0 < x < 1 \implies f_{n}(x) = \underbrace{ x^{n} }_{ \to 0 }e^{\underbrace{ -n^{2}x }_{ \to -\infty }} \to e^{-\infty} = 0 \\
x = 1 \implies f_{n}(x) = e^{-n^{2}} \to 0 \\
x > 1 \implies \lim_{ n \to \infty } \frac{f_{n+1}(x)}{f_{n}(x)} = \lim_{ n \to \infty } \frac{x^{n+1}e^{-(n+1)^{2}x}}{x^{n}e^{-n^{2}x}} = \lim_{ n \to \infty } xe^{-x((n+1)^{2}-n^{2})} = \\
= x\lim_{ n \to \infty } e^{-x(2n+1)} = x \cdot 0 = 0 \\
\implies f_{n}(x) \to 0 \\
d_{n} = \sup_{x \in (0, \infty)} \left\lvert f_{n}(x) - f(x) \right\rvert = \sup_{x \in (0, \infty)} \left\lvert f_{n}(x) \right\rvert = \sup_{x \in (0, \infty)} x^{n}e^{-n^{2}x} \\
\text{Let } g(x) = x^{n}e^{-n^{2}x} \\
g'(x) = nx^{n-1}e^{-n^{2}x} - n^{2}x^{n}e^{-n^{2}x} = x^{n-1}e^{-n^{2}x}(n-n^{2}x) \\
g'(x) = 0 \iff x = \frac{1}{n} \\
g''(x) = n(n-1)x^{n-2}e^{-n^{2}x} - n^{3}x^{n-1}e^{-n^{2}x} - n^{3}x^{n-1}e^{-n^{2}x} + n^{4}x^{n}e^{-n^{2}x} = \\
= x^{n-2}e^{-n^{2}x}(n(n-1) - 2n^{3}x + n^{4}x^{2}) \\
x = \frac{1}{n} \implies g''(x) = \frac{1}{n^{n-2}}e^{-n}(n(n-1) - 2n^{2} + n^{2}) = -\frac{1}{n^{n-1}}e^{-n} < 0 \\
\implies \frac{1}{n} \text{ is a maximum of } g(x) \\
\implies d_{n} = \sup_{x \in (0, \infty)} x^{n}e^{-n^{2}x} = g\left( \frac{1}{n} \right) = \frac{1}{n^{n}}e^{-n} \to 0 \\
\implies f_{n}(x) \rightrightarrows f(x) \\
}
$$
# 3b
$$
\displaylines{
\text{Prove or disprove: } S(x) = \sum_{n=0}^{\infty} \frac{n^{2}x}{n^{8}x^{2}+10} \text{ converges uniformly on } (-\infty, \infty) \\
\\
\text{Proof:} \\
\text{Let } g(x) = \frac{n^{2}x}{n^{8}x^{2}+10} \\
g'(x) = \frac{n^{2}(n^{8}x^{2}+10) - n^{2}x(2n^{8}x)}{(n^{8}x^{2} + 10)^{2}} = \frac{10n^{2} - n^{10}x^{2}}{(n^{8}x^{2}+10)^{2}} \\
g'(x) = 0 \iff x = \frac{\sqrt{ 10 }}{n^{4}} \\
g'(0) > 0, g'(\sqrt{ 10 }) < 0 \implies \frac{\sqrt{ 10 }}{n^{4}} \text{ is a global maximum} \\
\implies \forall x \in (-\infty, \infty): \left\lvert g(x) \right\rvert = g(x) \leq g\left( \frac{\sqrt{ 10 }}{n^{4}} \right) = \frac{\frac{\sqrt{ 10 }}{n^{2}}}{20} \leq \frac{1}{n^{2}} \\
\sum_{n=0}^{\infty} \frac{1}{n^{2}} \text{ converges} \\
\implies \text{By Weierstrass M-test: } \sum_{n=0}^{\infty} \frac{n^{2}x}{n^{8}x^{2}+10} \text{ converges uniformly on } (-\infty, \infty) \\
}
$$
# 4a
$$
\displaylines{
\text{Calculate } \sum_{n=0}^{\infty} n^{2}\sin^{n} x \text{ and find all values of } x \text{ for which it converges} \\
\\
\text{Solution:} \\
\text{Let } t = \sin x \\
\implies \sum_{n=0}^{\infty} n^{2}\sin^{n} x = \sum_{n=0}^{\infty} n^{2}t^{n} \\
\lim_{ n \to \infty } \frac{a_{n}}{a_{n+1}} = \lim_{ n \to \infty } \frac{n^{2}}{(n+1)^{2}} = 1 \\
\implies \text{Convergence radius is } 1 \text{ around } 0 \\
t = 1 \implies \sum_{n=0}^{\infty} n^{2}t^{n} = \sum_{n=0}^{\infty} n^{2} \text{ diverges} \\
t = -1 \implies \sum_{n=0}^{\infty} n^{2}t^{n} = \sum_{n=0}^{\infty} (-1)^{n}n^{2} \text{ diverges} \\
\implies \text{Convergence interval is } t \in (-1, 1) \\
\implies \forall x \in \mathbb{R}: \left\lvert \sin x \right\rvert < 1 \text{ series} \sum_{n=0}^{\infty} n^{2}\sin x \text{ converges} \\
\\
\text{Let } t \in (-1, 1) \\
\implies \sum_{n=0}^{\infty} t^{n} = \frac{1}{1-t} \\
\implies \sum_{n=0}^{\infty} nt^{n} = t \cdot \left( \frac{1}{1-t} \right)' = \frac{t}{(1-t)^{2}} \\
\implies \sum_{n=0}^{\infty} n^{2}t^{n} = t \cdot \left( \frac{t}{(1-t)^{2}} \right)' = t \cdot \frac{(1-t)^{2}+2t(1-t)}{(1-t)^{4}} = \frac{t(1+t)}{(1-t)^{3}} \\
\implies \forall k \in \mathbb{Z}: \forall x \neq \frac{\pi}{2} + \pi k: \sum_{n=0}^{\infty} n^{2}\sin^{n}x = \frac{\sin x(1 + \sin x)}{(1-\sin x)^{3}} \\
}
$$
# 4b
$$
\displaylines{
\text{Find Maclaurin series of } f(x) = \frac{1}{(x^{2}+x-2)} \\
\\
\text{Solution:} \\
\frac{1}{x^{2}+x-2} = \frac{1}{(x-1)(x+2)} = \frac{1}{3}\left( \frac{1}{x-1} - \frac{1}{x+2} \right) \\
\frac{1}{x-1} = -\frac{1}{1-x} = -\sum_{n=0}^{\infty} x^{n} \\
\frac{1}{x+2} = \frac{1}{2-(-x)} = \frac{1}{2} \frac{1}{1-\left( -\frac{x}{2} \right)} = \frac{1}{2}\sum_{n=0}^{\infty} \frac{(-1)^{n}}{2^{n}}x^{n} \\
\implies f(x) = -\frac{1}{3}\sum_{n=0}^{\infty} x^{n} - \frac{1}{6}\sum_{n=0}^{\infty} \frac{(-1)^{n}}{2^{n}}x^{n} = \\
= -\frac{1}{3} \sum_{n=0}^{\infty} \frac{2^{n+1} + (-1)^{n}}{2^{n+1}}x^{n} = \\
= \sum_{n=0}^{\infty} \frac{(-1)^{n+1}-2^{n+1}}{3 \cdot 2^{n+1}} x^{n} \\
}
$$

$$
\displaylines{

}
$$