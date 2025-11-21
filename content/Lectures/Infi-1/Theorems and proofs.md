---
{"publish":true,"created":"25/02/25, 12:02","modified":"2025-11-21T21:10:14.252+02:00","tags":["Academia","Lecture","Infi-1"],"cssclasses":""}
---

# Limit comparison
$$
\displaylines{
L = \lim_{ n \to \infty } \left\lvert  \frac{a_{n+1}}{a_{n}}  \right\rvert \\
\\
\begin{array}{}
1. & L < 1 \implies a_{n} \to 0 \\
2. & L > 1 \implies a_{n} \to \infty \\
3. & L = 1 \text{ or } \not\exists L \implies \text{Inconclusive} \\
4. & \sqrt[n]{ \lvert a_{n} \rvert } \to L \\
\end{array} \\
}
$$
# Bernoulli
$$
\displaylines{
x > -1 \implies (1+x)^{n} \geq 1 + nx
}
$$
# Bolzano-Weierstrass theorem
$$
\displaylines{
\text{Every bounded sequence has a convergent subsequence} \\
\\
\text{Proof:} \\
\exists a_{k_{n}} : a_{k_{n}} \text{ monotonic and bounded} \\
\implies a_{k_{n}} \text{ converges} \\
}
$$
# Cauchy's criterion
$$
\displaylines{
\Set{ a_{n} } \subseteq R \\
a_{n} \text{ converges} \iff a_{n} \text{ is a Cauchy's sequence} \\
\\
\text{Proof:} \\
\text{Let } a_{n} \to L \\
\forall \varepsilon > 0 \exists N_{\varepsilon} : \forall n > N_{\varepsilon}: \lvert a_{n} - L \rvert < \frac{\varepsilon}{2} \\
\text{Let } m \geq n \\
\lvert a_{n} - a_{m} \rvert = \lvert a_{n} - L - a_{m} + L \rvert \leq \underbrace{ \lvert a_{n} - L \rvert }_{ < \frac{\varepsilon}{2} } + \underbrace{ \lvert L - a_{m} \rvert }_{ = \lvert a_{m} - L \rvert < \frac{\varepsilon}{2} } \\
\implies \lvert a_{n} - a_{m} \rvert < \varepsilon \iff \boxed{a_{n} \text{ is a Cauchy's sequence}} \\
}
$$
$$
\displaylines{
& \text{Let } a_{n} \text{ be a Cauchy's sequence} \\
\\
1. & \text{Cauchy's sequence is bounded} \\
& \text{Proof:} \\
& \text{By definition of the limit: } \exists \varepsilon = 7: \exists N_{\varepsilon} : \forall n,m > N_{\varepsilon} : \lvert a_{n} - a_{m} \rvert < 7 \\
& \text{Let } z = a_{\lceil N_{\varepsilon} \rceil + 1} \\
& \text{Then } -7 < a_{n} - z < 7 \iff \forall n > N_{\varepsilon}: z - 7 \leq a_{n} \leq z + 7 \\
& A = \Set{ a_{1},a_{2},a_{3}, \dots, a_{\lceil N_{\varepsilon} \rceil } } \text{ is a finite set} \implies \exists m = min(A), M = max(A) \\
& \implies \boxed{\forall n \in \mathbb{N}: min(m, z-7) \leq a_{n} \leq max(M, z+7)} - \text{sequence is bounded} \\
2. & \text{If sequence is bounded, then there exists a convergent subsequence } a_{k_{n}} \\
& \boxed{\exists a_{k_{n}} \to L_{k}} \\
3. & \text{Limit of a subsequence is a limit of the whole sequence, if such exists} \\
& \forall \varepsilon > 0 \exists N_{a} : \forall n,m > N_{a} : \lvert a_{n} - a_{m} \rvert < \frac{\varepsilon}{2} \\
& \forall \varepsilon > 0 \exists N_{k} : \forall n > N_{k} : \lvert a_{k_{n}} - L_{k} \rvert < \frac{\varepsilon}{2} \\
& \text{Let } n > N_{\varepsilon} = max(N_{a}, N_{k}) \\
& \lvert a_{n} - L_{k} \rvert = \lvert a_{n} - a_{k_{n}} - L_{k} + a_{k_{n}} \rvert \leq \underbrace{ \lvert a_{n} - a_{k_{n}} \rvert }_{ < \frac{\varepsilon}{2} } + \underbrace{ \lvert a_{k_{n}}-L_{k} \rvert }_{ < \frac{\varepsilon}{2} } < \varepsilon \\
& \iff \boxed{a_{n} \to L_{k}} \\
4. & \text{Proof for 3. via } \overline{\lim} a_{n} \\
& \text{Let } \overline{\lim} a_{n} = T > L_{k} \\
& \text{Then } \exists a_{m_{n}} \to T \\
& \exists N_{1} : \forall n > N_{1}: \lvert a_{k_{n}} - L_{k} \rvert < \frac{T-L}{4} \\
& \exists N_{2} : \forall n > N_{2}: \lvert a_{m_{n}} - T \rvert < \frac{T-L}{4} \\
& \exists N_{3} : \forall n,m > N_{3}: \lvert a_{n}-a_{m} \rvert < \frac{T-L}{4} \\
& \exists N_{\varepsilon} = max(N_{1}, N_{2}, N_{3}) : \forall n, m > N_{\varepsilon} : \\
& \lvert a_{k_{n}} - L_{k} \rvert < \frac{T-L}{4}, \lvert a_{m_{n}} - T \rvert < \frac{T-L}{4}, \lvert a_{n}-a_{m} \rvert < \frac{T-L}{4} \\
& L - \frac{T-L}{4} < a_{k_{n}} < L + \frac{T-L}{4} \\
& T - \frac{T-L}{4} < a_{m_{n}} < T + \frac{T-L}{4} \\
& \frac{5L-T}{4} < a_{k_{n}} < \frac{T+3L}{4} \\
& \frac{3T+L}{4} < a_{m_{n}} < \frac{5T-L}{4} \\
& a_{m_{n}} - a_{k_{n}} > \frac{3T+L}{4} - a_{k_{n}} > \frac{3T+L}{4} - \frac{T+3L}{4} = \frac{T-L}{2} > \frac{T-L}{4} \\
}
$$
# e
$$
\left( 1 + \frac{a}{n} \right)^{n} \to e^{a} \\
$$
# Harmonic series
$$
\sum_{n=1}^{\infty} \frac{1}{n^{a}} \to L \iff a > 1 \\
$$
# Convergence of series
$$
\displaylines{
\sum_{n=1}^{\infty} a_{n} \to L \iff S_{N} \text{ is a Cauchy's sequence} \\
(\forall \varepsilon > 0: \exists N_{\varepsilon} : \forall N, M > N_{\varepsilon} : \lvert S_{N} - S_{M} \rvert < \varepsilon) \\
\\
\text{If } M > N : \\
S_{M} = S_{N} + \sum_{n=N+1}^{M} a_{n} \\
\lvert S_{N} - S_{M} \rvert < \varepsilon \\
\left\lvert  \sum_{n=N+1}^{M} a_{n}  \right\rvert < \varepsilon \\
}
$$
# Direct comparison test
$$
\displaylines{
\sum a_{n}, \sum b_{n} : \\
0 \leq a_{n} \leq b_{n} \\
\sum b_{n} \to L \implies \sum a_{n} \to M \\
\sum a_{n} \not\to M \implies \sum b_{n} \not\to L \\
\\
\text{Proof:} \\
0 \leq a_{n} \implies A_{N} - A_{N-1} = a_{N} \geq 0 \\
A_{N} > A_{N} \implies A_{N} \text{ is monotonically non-descending} \\
\sum_{n=1}^{N} b_{n} = B_{N} \\
\sum b_{n} \to L \implies \exists C : B_{N} \leq C \\
A_{N} \leq B_{N} \leq C \implies A_{N} < C \\
\implies A_{N} \text{ is monotonically non-descending and upper-boundeed} \implies A_{N} \to M \\
}
$$
# Limit comparison test
$$
\displaylines{
\sum a_{n}, \sum b_{n} \\
0 \leq a_{n}, b_{n} \\
\exists \lim_{ n \to \infty } \frac{a_{n}}{b_{n}} = L \\
L > 0 \implies \left( \sum a_{n} \to M_{1} \iff \sum b_{n} \to M_{2} \right) \\
L = 0 \implies \left( \sum a_{n} \to M_{1} \impliedby \sum b_{n} \to M_{2} \right) \\
L = \infty \implies \left( \sum a_{n} \to M_{1} \implies \sum b_{n} \to M_{2} \right) \\
\\
\text{Proof:} \\
\text{Let } 0 \leq a_{n}, b_{n} \\
\text{Let } \lim_{ n \to \infty } \frac{a_{n}}{b_{n}} = L
}
$$
$$
\displaylines{
\text{Proof for 1.} \\
L > 0 \\
\implies \frac{1}{e}L < \frac{a_{n}}{b_{n}} < eL \\
\frac{1}{e}Lb_{n} \leq a_{n} \leq eLb_{n} \\
1. \sum a_{n} \to M_{1} \implies \sum \frac{1}{e}b_{n} \to M' \implies \sum b_{n} \to M_{2} \\
2. \sum b_{n} \to M_{2} \implies \sum eLb_{n} \to M' \implies \sum a_{n} \to M_{1} \\
1. \text{ and } 2. \implies \sum a_{n} \to M_{1} \iff \sum b_{n} \to M_{2} \\
}
$$
$$
\displaylines{
\text{Proof for 2.} \\
L = 0, \sum b_{n} \to M_{2} \\
\frac{a_{n}}{b_{n}} \to 0 \implies \frac{a_{n}}{b_{n}} < 7 \implies a_{n} < 7b_{n} \\
\sum b_{n} \to M_{2} \implies \sum 7b_{n} \to 7M_{2} \implies \sum a_{n} \to M_{1} \\
}
$$
$$
\displaylines{
\text{Proof for 3.} \\
L = \infty, \sum a_{n} \to M_{1} \\
\frac{a_{n}}{b_{n}} \to \infty \implies \frac{a_{n}}{b_{n}} > 420 \implies a_{n} > 420b_{n} \\
\sum a_{n} \to M_{1} \implies \sum 420b_{n} \to M' \implies \sum b_{n} \to M_{2} \\
}
$$
# Root test (nth root test, Cauchy's criterion)
$$
\displaylines{
\text{Let } L = \lim_{ n \to \infty } \sqrt[n]{ \lvert a_{n} \rvert  } \\
L > 1 \implies \sum a_{n} \not\to M \\
L < 1 \implies \sum \lvert a_{n} \rvert \to M \\
L = 1 \implies \text{Test is inconclusive} \\
\\
\text{Proof:} \\
\text{Let } \overline{\lim_{ n \to \infty }} \sqrt[n]{ \lvert a_{n} \rvert  } \\
\implies \exists a_{k_{n}}: \sqrt[k_{n}]{ \lvert a_{k_{n}} \rvert  } \to L \\
\text{If } L > 1 \implies L > \frac{L+1}{2} > 1 \\
\implies \sqrt[k_{n}]{ \lvert a_{k_{n}} \rvert  } \geq \frac{L+1}{2} \iff \lvert a_{k_{n}} \rvert \geq \left( \frac{L+1}{2} \right)^{k_{n}} \\
\frac{L+1}{2} > 1 \implies \left( \frac{L+1}{2} \right)^{k_{n}} \to \infty \implies \lvert a_{k_{n}} \rvert \to \infty \\
\implies a_{k_{n}} \not\to 0 \implies a_{n} \not\to 0 \implies \sum a_{n} \not\to M \\
\\
\text{If } L < 1 \implies L < \frac{L+1}{2} \\
\sqrt[k_{n}]{ \lvert a_{k_{n}} \rvert  } \to L \implies \sqrt[n]{ \lvert a_{n} \rvert  } \leq \frac{L+1}{2} \implies \lvert a_{n} \rvert \leq \left( \frac{L+1}{2} \right)^{n} \\
\sum \left( \frac{L+1}{2} \right)^{n} \to M' \implies \sum \lvert a_{n} \rvert \to M \\
}
$$
# Ratio test (d'Alembert's criterion)
$$
\displaylines{
\text{Let } L = \lim_{ n \to \infty } \left\lvert  \frac{a_{n+1}}{a_{n}}  \right\rvert \\
L > 1 \implies \sum a_{n} \not\to M \\
L < 1 \implies \sum \lvert a_{n} \rvert  \to M \\
}
$$
# Cauchy's condensation test
$$
\displaylines{
\text{Let } a_{n} \geq 0, a_{n} \text{ is monotonically non-increasing} \\
\sum a_{n} \to M_{1} \iff \sum_{n=0}^{\infty} 2^{n}a_{2^{n}} \to M_{2} 
\\
\\
\text{Corollary:} \\
\sum \frac{1}{n^{p}} \to M_{1} \iff p > 1 \\
\sum \frac{1}{n^{p}} \to M_{1} \iff \sum 2^{n} \frac{1}{(2^{n})^{p}} \to M_{2} \\
\sum 2^{n} \frac{1}{(2^{n})^{p}} = \sum 2^{n-np} = \sum (2^{1-p})^{n} \\
\implies \sum \frac{1}{n^{p}} \to M_{1} \iff 2^{1-p} < 1 \iff 1-p < 0 \iff p > 1 \\
}
$$
# Dirichlet's test
$$
\displaylines{
\sum b_{n} \text{ is bounded} \\
a_{n} \text{ monotonically non-increasing}, a_{n} \to 0 \\
\text{Then} \sum b_{n}a_{n} \to M_{1} \\
}
$$
$$
\displaylines{
\text{Example:} \\
\sum \frac{(-1)^{n}}{n} = \sum (-1)^{n} \cdot \frac{1}{n} \\
\left\lvert  \sum (-1)^{n}  \right\rvert \leq 1 \\
\frac{1}{n} \to 0 \\
\implies \sum \frac{(-1)^{n}}{n} \to M_{1} \\
}
$$
$$
\displaylines{
\text{Proof:} \\
a_{n} \to 0 \text{ and } a_{n} \text{ is monotonically non-increasing} \\
\implies \forall n \in \mathbb{N}: a_{n} \geq 0 \\
\sum b_{n} \text{ is bounded} \implies S_{N} = \sum_{n=1}^{N} b_{n} \text{ is bounded} \\
\sum a_{n}b_{n} \to L \iff \forall \varepsilon > 0: \exists N_{\varepsilon}: \forall N, M > N_{\varepsilon} \in \mathbb{N}: \left\lvert  \sum_{n=M+1}^{N} a_{n}b_{n}  \right\rvert < \varepsilon \\
\left\lvert  \sum_{n=M+1}^{N} a_{n}b_{n}  \right\rvert = \left\lvert  \sum_{n=M+1}^{N} a_{n}(S_{n}-S_{n-1})  \right\rvert = \left\lvert  \sum_{n=M+1}^{N} a_{n}S_{n} - \sum_{n=M+1}^{N} a_{n}S_{n-1}  \right\rvert = \\
= \left\lvert -S_{M}a_{M+1} + \sum_{n=M+1}^{N-1} S_{n}(a_{n}-a_{n+1}) + S_{N}a_{N} \right\rvert \leq \\
\leq \lvert -S_{M}a_{M+1} \rvert + \sum_{n=M+1}^{N-1} \lvert S_{n}(a_{n}-a_{n+1}) \rvert + \lvert S_{N}a_{N} \rvert = \\
= \lvert S_{M} \rvert \cdot \lvert a_{M+1} \rvert + \sum_{n=M+1}^{N-1} \lvert S_{n} \rvert \cdot \lvert (a_{n}-a_{n+1}) \rvert + \lvert S_{N} \rvert \cdot \lvert a_{N} \rvert \\
\\
\lvert S_{n} \rvert \leq K \\
a_{N}, a_{M+1} \geq 0 \\
a_{M+1} \geq a_{M+2} \geq \dots \\
\implies a_{M+1} - a_{M+2} \geq 0 \\
\implies \lvert S_{M} \rvert \cdot \lvert a_{M+1} \rvert + \sum_{n=M+1}^{N-1} \lvert S_{n} \rvert \cdot \lvert (a_{n}-a_{n+1}) \rvert + \lvert S_{N} \rvert \cdot \lvert a_{N} \rvert \leq \\
K \cdot \left( a_{M+1} + \sum_{n=M+1}^{N} (a_{n}-a_{n+1}) + a_{N} \right) \\
\implies \left\lvert  \sum_{n=M+1}^{N} a_{n}b_{n}  \right\rvert \leq K \cdot (a_{M+1} + a_{M+1} - a_{M+2} + \dots + a_{N-1} - a_{N} + a_{N}) = \\
= K \cdot 2a_{M+1} \\
\left\lvert  \sum_{n=M+1}^{N} a_{n}b_{n}  \right\rvert \leq 2K \cdot a_{M+1} \\
\forall \varepsilon > 0: \exists N_{\varepsilon}: \forall M > N_{\varepsilon}: \lvert a_{M+1} \rvert < \frac{\varepsilon}{2K} \\
\implies \forall \varepsilon > 0: \exists N_{\varepsilon}: \forall M > N_{\varepsilon}: \left\lvert  \sum_{n=M+1}^{N} a_{n}b_{n} \right\rvert \leq 2K \cdot a_{m+1} < 2K \cdot \frac{\varepsilon}{2K} = \varepsilon \\
}
$$
---
$$
\displaylines{
\sum (-1)^{n}, \sum \sin(n), \sum \cos(n) \text{ are bounded series} \\
}
$$
$$
\displaylines{
\sum \sin(n) \text{ is bounded} \implies \sum \frac{\sin(n)}{n} = \sum \left( \sin(n) \cdot \underbrace{ \frac{1}{n} }_{ \to 0 } \right) \to M_{1} \\
}
$$
$$
\displaylines{
S_{N} = \sum_{n=1}^{N} \sin(n) = \sin(1) + \sin(2) + \dots + \sin(N) \\
2\sin(x)\sin(y) = \cos(x-y) - \cos(x+y) \\
2\sin(1)S_{N} = 2\sin(1)\sin(1) + 2\sin(1)\sin(2) + \dots + 2\sin(1)\sin(N) = \\
= \cos(0) - \cos(2) + \cos(1) - \cos(3) + \cos(2) - \cos(4) + \dots + \cos(N-1) - \cos(N+1) = \\
= \cos(0) + \cos(1) - \cos(N) - \cos(N+1) \\
\implies S_{N} = \frac{\cos(0) + \cos(1) - \cos(N) - \cos(N+1)}{2\sin(1)} \\
-2 \leq -\cos(N) - \cos(N+1) \leq 2 \implies \frac{\cos(0)+\cos(1)-2}{2\sin(1)} \leq S_{N} \leq \frac{\cos(0)+\cos(1)+2}{2\sin(1)} \\
}
$$
# Alternating series test (Leibniz criterion)
$$
\displaylines{
\sum (-1)^{n} \\
a_{n} \text{ is monotonically non-increasing and } a_{n} \to 0 \\
\sum (-1)^{n}a_{n} \to M_{1} \\
}
$$
# Inverse derivative
$$
\displaylines{
\text{Let } f: [a, b] \to [c, d] \text{ be continuous and invertible} \\
\text{Let } y \in (c, d) \\
\text{Let } f \text{ be differentiable at } f^{-1}(y) \text{ and } f'(f^{-1}(y)) \neq 0 \\
\text{Then } f^{-1} \text{ is differentiable at } y \text{ and } (f^{-1})'(y) = \frac{1}{f'(f^{-1}(y))} \\
\\
\text{Proof:} \\
(f^{-1})'(y) = \lim_{ t \to y } \frac{f^{-1}(t)-f^{-1}(y)}{t-y} \\
\\
\text{Let } x = f^{-1}(y), z = f^{-1}(t) \\
y = f(x), t = f(z) \\
t \to y \implies f(z) \to f(x) \\
\implies f^{-1}(f(z)) \to f^{-1}(f(x)) \implies z \to x \\
(f^{-1})'(y) = \lim_{ t \to y } \frac{f^{-1}(t)-f^{-1}(y)}{t-y} = \\
= \lim_{ z \to x } \frac{z-x}{f(z)-f(x)} = \lim_{ z \to x } \frac{1}{\frac{f(z)-f(x)}{z-x}} \\
f'(x) = f'(f^{-1}(y)) = \lim_{ z \to x } \frac{f(z)-f(x)}{z-x} \neq 0 \\
\implies (f^{-1})'(y) = \lim_{ z \to x } \frac{1}{\frac{f(z)-f(x)}{z-x}} = \frac{1}{f'(x)} = \frac{1}{f'(f^{-1}(y))} \\
}
$$
# Intermediate value theorem
$$
\displaylines{
\text{Let } f \text{ be a continuous function on } [a, b] \\
\text{Then } f(a) \cdot f(b) < 0 \implies \exists x \in [a, b]: f(x) = 0 \\
}
$$
# Weierstrass boundedness theorem
$$
\displaylines{
\text{Let } f \text{ be a continuous function on } [a, b] \\
\text{Then } \exists m, M: \forall x \in [a, b]: m \leq f(x) \leq M \\
\\
\text{Proof:} \\
\text{Let } f \text{ be unbounded from above on } [a, b] \\
\forall n \in \mathbb{N}: \exists x_{n}: f(x_{n}) > n \\
[a, b] \text{ is bounded} \implies \text{By Bolzano-Weierstrass theorem } \exists x_{n_{k}} \to x: x \in [a, b] \\
f \text{ is continuous on } [a, b] \implies f(x_{n_{k}}) \to f(x) \in \mathbb{R} \\
f(x_{n}) \to \infty \implies f(x_{n_{k}}) \to \infty - \text{Contradiction!} \\
\text{Similar proof for bounded from below} \\
\implies f \text{ is bounded on } [a, b] \\
}
$$
# Weierstrass extreme value theorem
$$
\displaylines{
\text{Let } f \text{ be a continuous function on } [a, b] \\
\text{Then } \exists c, d \in [a, b]: \forall x \in [a, b]: f(c) \leq f(x) \leq f(d) \\
\\
\text{Proof:} \\
f \text{ is bounded from above} \implies \exists M = sup(f(x)) \text{ on } [a, b] \\
\text{Let } n \in \mathbb{N} \\
M - \frac{1}{n} \text{ is not an upper bound of } f \text{ on } [a, b] \\
\implies \exists d_{n} \in [a, b]: M - \frac{1}{n} < f(d_{n}) \\
\forall n \in \mathbb{N}: M - \frac{1}{n} < f(d_{n}) \leq M \\
\implies f(d_{n}) \to M \\
\text{By Bolzano-Weierstrass theorem: } \exists d_{n_{k}} \to d \in [a, b] \\
f \text{ is continuous} \implies f(d_{n_{k}}) \to f(d) \\
\implies f(d_{n}) \to f(d) \implies M = f(d) \\
\text{Similar proof for minimum} \\
}
$$
# Fermat's theorem (stationary points)
$$
\displaylines{
\text{Let } f \text{ be defined on } (a, b) \\
\text{Let } x_{0} \in (a, b) \\
\text{If } f \text{ has a local extremum at } x_{0} \text{ and } f \text{ is differentiable at } x_{0} \\
\text{Then } f'(x_{0}) = 0 \\
\\
\text{Proof:} \\
\text{Let } x \text{ be a local minimum} \\
f'(x_{0}) = \lim_{ x \to x_{0} } \frac{f(x)-f(x_{0})}{x-x_{0}} \\
\lim_{ x \to x_{0}^{+} } \frac{f(x)-f(x_{0})}{x-x_{0}} \geq 0 \\
\lim_{ x \to x_{0}^{-} } \frac{f(x)-f(x_{0})}{x-x_{0}} \leq 0 \\
\lim_{ x \to x_{0}^{+} } \frac{f(x)-f(x_{0})}{x-x_{0}} = \lim_{ x \to x_{0}^{-} } \frac{f(x)-f(x_{0})}{x-x_{0}} \\
\implies f'(x_{0}) = 0 \\
\text{Similar proof for local maximum} \\
}
$$
# Rolle's theorem
$$
\displaylines{
\text{Let } f \text{ be continuous on } [a, b] \text{ and differentiable on } (a, b) \\
\text{Let } f(a) = f(b) \\
\text{Then } \exists c \in (a, b): f'(c) = 0 \\
\\
\text{Proof:} \\
f \text{ is continuous at } [a, b] \implies \exists c, d \in [a, b]: \forall x \in [a, b]: f(c) \leq f(x) \leq f(d) \\
\dots \\
}
$$
# Darboux's theorem
$$
\displaylines{
\text{Let } f \text{ be a differentiable function on } [a, b] \\
\text{Then } \forall a_{1} < b_{1} \in [a, b]: \forall y \in [f'(a_{1}), f'(b_{1})] \exists x \in [a, b]: f'(x) = y \\
\text{In other words, $f'$ has intermediate value property} \\
\\
\text{Note: } f' \text{ does not have to be differentiable on } [a, b] \\
\text{If it is not continuous, then the discontinuities will be essential} \\
}
$$
# L'Hopital's theorem/rule
$$
\displaylines{
\text{Let } f, g \text{ be differentiable functions in the locality of } a \\
\text{Let } \exists \lim_{ x \to a } \frac{f'(x)}{g'(x)} \\
\text{Let } \lim_{ x \to a } f(x) = \lim_{ x \to a } g(x) = 0 \text{ or } \pm \infty \\
\text{Then } \lim_{ x \to a } \frac{f(x)}{g(x)} = \lim_{ x \to a } \frac{f'(x)}{g'(x)} \\
}
$$
# Lagrange's mean value theorem
$$
\displaylines{
\text{This is a generalization of Rolle's theorem} \\
\text{Let } f \text{ be continuous on } [a, b] \text{ and differentiable on } (a, b) \\
\text{Then } \exists \xi \in (a, b): f'(\xi) = \frac{f(b)-f(a)}{b-a} \\
}
$$
# Cauchy's theorem
$$
\displaylines{
\text{Let } f, g \text{ be continuous on } [a, b] \\
\text{and differentiable on } (a, b) \\
\text{Let } \forall x \in (a, b): g'(x) \neq 0 \\
\text{Then } \exists c \in (a, b): \frac{f'(c)}{g'(c)} = \frac{f(b)-f(a)}{g(b)-g(a)} \\
}
$$
