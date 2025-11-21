---
{"publish":true,"created":"20/01/25, 13:01","modified":"2025-11-21T21:10:02.336+02:00","tags":["Academia","Assignment","Infi-1"],"cssclasses":""}
---

# 1a
$$
\displaylines{
\text{Let } \sum_{n=1}^{\infty} a_{n}, \sum_{n=1}^{\infty} b_{n} > 0 \text{ diverge} \\
\text{Prove or disprove: } \sum_{n=1}^{\infty} a_{n}b_{n} \text{ diverges} \\
\\
\text{Disproof:} \\
\text{Let } a_{n} = b_{n} = \frac{1}{n} \\
\sum_{n=1}^{\infty} \frac{1}{n} \text{ diverges} \\
\sum_{n=1}^{\infty} a_{n}b_{n} = \sum_{n=1}^{\infty} \frac{1}{n^{2}} \text{ converges} \\
}
$$
# 1b
$$
\displaylines{
\text{Let } \sum_{n=1}^{\infty} a_{n}, \sum_{n=1}^{\infty} b_{n} > 0 \\
\sum_{n=1}^{\infty} a_{n}^{2}, \sum_{n=1}^{\infty} b_{n}^{2} \text{ converge} \\
\text{Prove or disprove: } \sum_{n=1}^{\infty} a_{n}b_{n} \text{ converges} \\
\\
\text{Proof:} \\
(a-b)^{2} \geq 0 \implies a^{2} + b^{2} \geq 2ab \implies \frac{a^{2}+b^{2}}{2} \geq ab \\
\text{Let } c_{n} = \frac{a_{n}^{2} + b_{n}^{2}}{2} \\
\sum_{n=1}^{\infty} a_{n}^{2} \text{ converges} \\
\sum_{n=1}^{\infty} b_{n}^{2} \text{ converges} \\
\implies \sum_{n=1}^{\infty} c_{n} = \frac{1}{2} \sum_{n=1}^{\infty} (a_{n}^{2}+b_{n}^{2}) \text{ converges} \\
c_{n} \geq a_{n}b_{n} \text{ and } \sum_{n=1}^{\infty} c_{n} \text{ converges} \\
\implies \text{By the direct comparison test: } \boxed{\sum_{n=1}^{\infty} a_{n}b_{n} \text{ converges}} \\
}
$$
# 1c
$$
\displaylines{
\text{Let } \sum_{n=1}^{\infty} a_{n}^{2} \text{ converge} \\
\text{Prove or disprove: } \sum_{n=1}^{\infty} \frac{a_{n}}{n} \text{ converges absolutely} \\
\\
\text{Proof:} \\
\text{Let } b_{n} = \frac{1}{n} \\
\sum_{n=1}^{\infty} \lvert a_{n} \rvert > 0 \\
\sum_{n=1}^{\infty} (\lvert a_{n} \rvert)^{2} = \sum_{n=1}^{\infty} a_{n}^{2} \text{ converges} \\ 
\sum_{n=1}^{\infty} b_{n}^{2} = \sum_{n=1}^{\infty} \frac{1}{n^{2}} \text{ converges} \\
\implies \sum_{n=1}^{\infty} \left\lvert \frac{a_{n}}{n} \right\rvert = \sum_{n=1}^{\infty} \lvert a_{n} \rvert \frac{1}{n} = \sum_{n=1}^{\infty} \lvert a_{n} \rvert b_{n} \text{ converges as proved in 1b} \\
\implies \boxed{ \sum_{n=1}^{\infty} \frac{a_{n}}{n} \text{ converges absolutely} } \\
}
$$
---

# 2
$$
\displaylines{
\text{Determine whether series converges absolutely, conditionally or diverges} \\
}
$$
## 2a
$$
\displaylines{
\sum_{n=1}^{\infty} \frac{\sin(n)\cos(n)\sin(n^{3})}{n\sqrt{ n }} \\
\\
\text{Solution:} \\
\lvert \sin(n)\cos(n)\sin(n^{3}) \rvert \leq 1 \\
\implies \left\lvert  \frac{\sin(n)\cos(n)\sin(n^{3})}{n\sqrt{ n }}  \right\rvert \leq \frac{1}{n\sqrt{ n }} \\
\sum_{n=1}^{\infty} \frac{1}{n\sqrt{ n }} \text{ converges} \\
\implies \text{By the direct comparison test: } \sum_{n=1}^{\infty} \left\lvert \frac{\sin(n)\cos(n)\sin(n^{3})}{n\sqrt{ n }} \right\rvert  \text{ converges} \\
\implies \boxed{ \sum_{n=1}^{\infty} \frac{\sin(n)\cos(n)\sin(n^{3})}{n\sqrt{ n }} \text{ converges absolutely} } \\
}
$$
## 2b
$$
\displaylines{
\sum_{n=1}^{\infty} (-1)^{n+1} \frac{n!}{3^{n}} \\
\\
\text{Solution:} \\
\lim_{ n \to \infty } \left\lvert  \frac{a_{n+1}}{a_{n}}  \right\rvert = \lim_{ n \to \infty } \frac{(n+1)! \cdot 3^{n}}{n! \cdot 3^{n+1}} = \lim_{ n \to \infty } \frac{n+1}{3} = \infty > 1 \\
\implies \text{By the ratio test: } \boxed{\sum_{n=1}^{\infty} (-1)^{n+1} \frac{n!}{3^{n}} \text{ diverges}} \\
}
$$
## 2c
$$
\displaylines{
\sum_{n=1}^{\infty} (-1)^{n} \frac{(n!)^{3}}{(3n)!} \\
\\
\text{Solution:} \\
\lim_{ n \to \infty } \left\lvert  \frac{a_{n+1}}{a_{n}}  \right\rvert = \lim_{ n \to \infty } \frac{((n+1)!)^{3} \cdot (3n)!}{(3n+3)! \cdot (n!)^{3}} = \lim_{ n \to \infty } \frac{(n+1)^{3}}{(3n+3)(3n+2)(3n+1)} = \\
= \lim_{ n \to \infty } \frac{(n+1)^{2}}{3(3n+2)(3n+1)} = \lim_{ n \to \infty } \frac{n^{2}+2n+1}{27n^{2}+27n+9} = \frac{1}{27} < 1 \\
\implies \text{By the ratio test: } \boxed{ \sum_{n=1}^{\infty} (-1)^{n} \frac{(n!)^{3}}{(3n)!} \text{ converges absolutely} } \\
}
$$
## 2d
$$
\displaylines{
\sum_{n=1}^{\infty} \frac{(-1)^{n}}{\ln(n!)} \\
\\
\text{Solution:} \\
\sum_{n=1}^{\infty} \left\lvert  \frac{(-1)^{n}}{\ln(n!)}  \right\rvert = \sum_{n=1}^{\infty} \frac{1}{\ln(n!)} \\
n^{n} > n! \implies \ln(n^{n}) > \ln(n!) \implies \frac{1}{\ln(n^{n})} < \frac{1}{\ln(n!)} \\
a_{n} = \frac{1}{\ln(n!)} \\
b_{n} = \frac{1}{\ln(n^{n})} = \frac{1}{n \cdot \ln(n)} \\
b_{2^{n}} = \frac{1}{2^{n} \cdot n \cdot \ln(2)} \\
\sum_{n=1}^{\infty} \frac{2^{n}}{2^{n} \cdot n \cdot \ln(2)} = \frac{1}{\ln(2)}\sum_{n=1}^{\infty} \frac{1}{n} \text{ diverges} \\
\implies \text{By the Cauchy's condensation test: } \sum_{n=1}^{\infty} b_{n} \text{ diverges} \\
a_{n} > b_{n} \implies \text{By the direct comparison test: } \sum_{n=1}^{\infty} a_{n} \text{ diverges} \\
\frac{1}{\ln(n!)} \text{ is monotonically non-increasing and } \lim_{ n \to \infty } \frac{1}{\ln(n!)} = 0 \\
\implies \text{By the Leibniz criterion: } \sum_{n=1}^{\infty} \frac{(-1)^{n}}{\ln(n!)} \text{ converges} \\
\implies \boxed{ \sum_{n=1}^{\infty} \frac{(-1)^{n}}{\ln(n!)} \text{ converges conditionally} } \\
}
$$
## 2e
$$
\displaylines{
\sum_{n=1}^{\infty} \frac{(-1)^{n}}{2^{n}} \cdot \left( 1-\cos\left( \frac{2}{n} \right) \right)^{n} \\
\\
\text{Solution:} \\
\text{Let } a_{n} = \frac{(-1)^{n}\left( 1-\cos\left( \frac{2}{n} \right) \right)^{n}}{2^{n}} \\
\lim_{ n \to \infty } \sqrt[n]{ \lvert a_{n} \rvert } = \lim_{ n \to \infty } \frac{\left( 1-\cos\left( \frac{2}{n} \right) \right)}{2} \\
n \geq 2 \implies 0 < \frac{2}{n} < \frac{\pi}{2} \implies 0 < \cos\left( \frac{2}{n} \right) < 1 \\
\implies \frac{\left( 1-\cos\left( \frac{2}{n} \right) \right)}{2} < \frac{1}{2} \\
\implies \lim_{ n \to \infty } \frac{\left( 1-\cos\left( \frac{2}{n} \right) \right)}{2} \leq \frac{1}{2} < 1 \\
\implies \text{By the root test: } \boxed{ \sum_{n=1}^{\infty} \frac{(-1)^{n}}{2^{n}} \cdot \left( 1-\cos\left( \frac{2}{n} \right) \right)^{n} \text{ converges absolutely} } \\
}
$$
## 2f
$$
\displaylines{
\sum_{n=1}^{\infty} \frac{\sin^{2}\left( \frac{n}{2} \right)}{n} \\
\\
\text{Solution:} \\
\cos(n) = 1 - 2\sin^{2}\left( \frac{n}{2} \right) \\
\sin^{2}\left( \frac{n}{2} \right) = \frac{1-\cos(n)}{2} \\
\implies \sum_{n=1}^{\infty} \frac{\sin^{2}\left( \frac{n}{2} \right)}{n} = \sum_{n=1}^{\infty} \frac{1-\cos(n)}{2n} = \frac{1}{2} \cdot \left( \sum_{n=1}^{\infty} \frac{1}{n} - \sum_{n=1}^{\infty} \frac{\cos(n)}{n} \right) \\
\sum_{n=1}^{\infty} \cos(n) \text{ is bounded}, \frac{1}{n} \text{ is monotonically decreasing and } \frac{1}{n} \to 0 \\
\implies \text{By the Dirichlet's test: } \sum_{n=1}^{\infty} \frac{\cos(n)}{n} \text{ converges} \\
\sum_{n=1}^{\infty} \frac{1}{n} \text{ diverges} \\
\implies \text{By the series arithmetics: } \sum_{n=1}^{\infty} \frac{1}{n} - \sum_{n=1}^{\infty} \frac{\cos(n)}{n} \text{ diverges} \\
\implies \boxed{ \sum_{n=1}^{\infty} \frac{\sin^{2}\left( \frac{n}{2} \right)}{n} \text{ diverges} } \\
}
$$
## 2g
$$
\displaylines{
\sum_{n=1}^{\infty} (-1)^{n} \left( \frac{n}{n+1} \right)^{n^{2}} \\
\\
\text{Solution:} \\
\lim_{ n \to \infty } \sqrt[n]{ \left\lvert  (-1)^{n}\left( \frac{n}{n+1} \right)^{n^{2}}  \right\rvert  } = \lim_{ n \to \infty } \left( \frac{n}{n+1} \right)^{n} = \lim_{ n \to \infty } \frac{1}{\left( 1+\frac{1}{n} \right)^{n}} = \frac{1}{e} < 1 \\
\implies \boxed{ \text{By the root test: } \sum_{n=1}^{\infty} (-1)^{n} \left( \frac{n}{n+1} \right)^{n^{2}} \text{ converges absolutely} } \\
}
$$
## 2h
$$
\displaylines{
\sum_{n=1}^{\infty} \frac{n^{n}}{(n+1)^{n+1}} \\
\\
\text{Solution:} \\
\text{Let } a_{n} = \frac{n^{n}}{(n+1)^{n+1}} \\
\text{Let } b_{n} = \frac{1}{n} \\
\lim_{ n \to \infty } \frac{a_{n}}{b_{n}} = \lim_{ n \to \infty } \frac{n^{n+1}}{(n+1)^{n+1}} = \lim_{ n \to \infty } \left( 1 - \frac{1}{n+1} \right)^{n+1} = \frac{1}{e} \\
\sum_{n=1}^{\infty} b_{n} \text{ diverges} \\
\implies \text{ By the limit comparison test: } \sum_{n=1}^{\infty} a_{n} \text{ diverges} \\
\implies \boxed{ \sum_{n=1}^{\infty} \frac{n^{n}}{(n+1)^{n+1}} \text{ diverges} } \\
}
$$
## 2i
$$
\displaylines{
\sum_{n=1}^{\infty} (-1)^{n}(\sqrt{ n+5 }-\sqrt{ n+4 }) \\
\\
\text{Solution:} \\
(-1)^{n}(\sqrt{ n+5 }-\sqrt{ n+4 }) = \frac{(-1)^{n}(n+5 - (n+4))}{\sqrt{ n+5 }+\sqrt{ n+4 }} = \frac{(-1)^{n}}{\sqrt{ n+5 }+\sqrt{ n+4 }} \\
\frac{1}{\sqrt{ n+5 }+\sqrt{ n+4 }} > \frac{1}{\sqrt{ 2n }+\sqrt{ 2n }} = \frac{1}{2\sqrt{ 2n }} \\
\sum_{n=1}^{\infty} \frac{1}{2\sqrt{ 2n }} \text{ diverges} \\
\implies \text{By the direct comparison test: } \sum_{n=1}^{\infty} \frac{1}{\sqrt{ n+5 }+\sqrt{ n+4 }} \text{ diverges} \\
\frac{1}{\sqrt{ n+5 }+\sqrt{ n+4 }} \text{ is monotonically decreasing and } \frac{1}{\sqrt{ n+5 }+\sqrt{ n+4 }} \to 0 \\
\implies \text{By the Leibniz criterion: } \sum_{n=1}^{\infty} \frac{(-1)^{n}}{\sqrt{ n+5 }+\sqrt{ n+4 }} \text{ converges} \\
\implies \boxed{ \sum_{n=1}^{\infty} (-1)^{n}(\sqrt{ n+5 }-\sqrt{ n+4 }) \text{ converges conditionally} } \\
}
$$
---

# 3
$$
\displaylines{
\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{(2n-1)^{\alpha}} \\
\text{Determine for which values of } \alpha \text{ series converges absolutely, conditionally or diverges} \\
\\
\text{Solution:} \\
\sum_{n=1}^{\infty} \left\lvert \frac{(-1)^{n+1}}{(2n-1)^{\alpha}} \right\rvert = \sum_{n=1}^{\infty} \frac{1}{(2n-1)^{\alpha}} \\
\lim_{ n \to \infty } \frac{\frac{1}{(2n-1)^{\alpha}}}{\frac{1}{n^{\alpha}}} = \lim_{ n \to \infty } \left( \frac{n}{2n-1} \right)^{\alpha} = \lim_{ n \to \infty } \left( \frac{1}{2-\frac{1}{n}} \right)^{\alpha} = \frac{1}{2^{\alpha}} \\
\implies \text{By the limit comparison test: } \sum_{n=1}^{\infty} \frac{1}{(2n-1)^{\alpha}} \text{ converges} \iff \sum_{n=1}^{\infty} \frac{1}{n^{\alpha}} \text{ converges} \\
\iff \alpha > 1 \\
\implies \boxed{\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{(2n-1)^{\alpha}} \text{ converges absolutely when } \alpha > 1} \\
\\
\frac{1}{(2n-1)^{\alpha}} \text{ is monotonically decreasing and } \frac{1}{(2n-1)^{\alpha}} \to 0 \text{ when } \alpha > 0 \\
\implies \text{By the Leibniz criterion: } \boxed{ \sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{(2n-1)^{\alpha}} \text{ converges when } \alpha > 0 } \\
\text{Let } \alpha \leq 0 \\
\text{Then } \not\exists \lim_{ n \to \infty } \frac{(-1)^{n}}{(2n-1)^{\alpha}} \implies \boxed{ \sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{(2n-1)^{\alpha}} \text{ diverges} } \\
\implies \boxed{ \begin{cases}
\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{(2n-1)^{\alpha}} \text{ converges absolutely} & \alpha > 1 \\
\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{(2n-1)^{\alpha}} \text{ converges conditionally} & 0 < \alpha \leq 1 \\
\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{(2n-1)^{\alpha}} \text{ diverges} & \alpha \leq 0 \\
\end{cases} } \\
}
$$
---

# 4a
$$
\displaylines{
\sum_{n=1}^{\infty} a_{n} > 0 \\
\exists p : \text{by the limit comparison test with } \frac{1}{n^{p}}, \sum_{n=1}^{\infty} a_{n} \text{ diverges} \\
\text{Show that it can be proved that the limit comparison test with } \frac{1}{n} \\
\text{will also show divergence} \\
\\
\text{Solution:} \\
\text{Let} \lim_{ n \to \infty } \frac{a_{n}}{\frac{1}{n^{p}}} = L \\
\text{By the limit comparison test } \sum_{n=1}^{\infty} a_{n} \text{ diverges} \\
\implies \sum_{n=1}^{\infty} \frac{1}{n^{p}} \text{ also diverges} \\
\implies L \text{ must be } > 0 \text{ or } \infty, \text{ otherwise test won't show divergence of } a_{n} \\
\text{If } L > 0 \text{ then } \sum_{n=1}^{\infty} \frac{1}{n^{p}} \text{ diverges by limit comparison test} \\
\text{If } L = \infty \text{ then } \sum_{n=1}^{\infty} \frac{1}{n^{p}} \text{ must diverge} \\
\text{otherwise limit comparison test won't show divergence} \\
\sum_{n=1}^{\infty} \frac{1}{n^{p}} \text{ diverges} \implies p \leq 1 \\
p \leq 1 \implies n^{p} \leq n \implies \frac{1}{n^{p}} \geq \frac{1}{n} \\
\implies \frac{a_{n}}{\frac{1}{n^{p}}} \leq \frac{a_{n}}{\frac{1}{n}} \implies L = \lim_{ n \to \infty } \frac{a_{n}}{\frac{1}{n^{p}}} \leq \lim_{ n \to \infty } \frac{a_{n}}{\frac{1}{n}} \\
\implies \lim_{ n \to \infty } \frac{a_{n}}{\frac{1}{n}} \geq L > 0 \\
\implies \boxed{ \text{Limit comparison test with } \frac{1}{n} \text{ will also show divergence of } \sum_{n=1}^{\infty} a_{n} } \\
}
$$
# 4b
$$
\displaylines{
\sum_{n=1}^{\infty} a_{n} > 0 \\
\exists p : \text{by the limit comparison test with } \frac{1}{n^{p}}, \sum_{n=1}^{\infty} a_{n} \text{ converges} \\
\text{Show that it can be proved that the limit comparison test with } \frac{1}{n^{q}}, 1 < q < p \\
\text{will also show convergence} \\
\\
\text{Solution:} \\
\text{Let } \lim_{ n \to \infty } \frac{a_{n}}{\frac{1}{n^{p}}} = L \\
\text{By the limit comparison test } \sum_{n=1}^{\infty} a_{n} \text{ converges} \\
\implies \sum_{n=1}^{\infty} \frac{1}{n^{p}} \text{ also converges} \\
\implies L \text{ must be } \geq 0 \text{ and } L \neq \infty, \text{ otherwise test won't show convergence of } a_{n} \\
\text{If } L = 0, \text{ then } \sum_{n=1}^{\infty} \frac{1}{n^{p}} \text{ converges} \\
\text{If } L > 0 \text{ and } L \neq \infty \text{ then } \sum_{n=1}^{\infty} \text{ must converge} \\
\text{otherwise limit comparison test won't show convergence} \\
\sum_{n=1}^{\infty} \frac{1}{n^{p}} \text{ converges} \implies p > 1 \\
p > 1 \land p \in \mathbb{R} \implies \exists q = \frac{p+1}{2}, 1 < q < p \\
1 < q < p \implies n^{q} < n^{p} \implies \frac{1}{n^{q}} > \frac{1}{n^{p}} \\
\implies \frac{a_{n}}{\frac{1}{n^{q}}} < \frac{a_{n}}{\frac{1}{n^{p}}} \implies \lim_{ n \to \infty } \frac{a_{n}}{\frac{1}{n^{q}}} \leq \lim_{ n \to \infty } \frac{a_{n}}{\frac{1}{n^{p}}} \\
\implies \lim_{ n \to \infty } \frac{a_{n}}{\frac{1}{n^{q}}} \geq 0 \text{ and } \neq \infty \\
\implies \boxed{ \text{Limit comparison test with } \frac{1}{n^{q}} \text{ will also show convergence of } \sum_{n=1}^{\infty} a_{n} } \\
}
$$
# 4c
$$
\displaylines{
\text{Give an example of divergent series, whose divergence cannot be proved} \\
\text{by the limit comparison test with } \frac{1}{n^{p}} \\
\\
\text{Solution:} \\
\text{Let } a_{n} = \frac{1}{n\ln n} \\
\sum_{n=1}^{\infty} a_{n} \text{ diverges by the Cauchy's condensation test} \\
\text{If the limit comparison test with } \frac{1}{n^{p}} \text{ will show divergence} \\
\text{then the limit comparison test with } \frac{1}{n} \text{ will also show divergence} \\
\lim_{ n \to \infty } \frac{a_{n}}{\frac{1}{n}} = \lim_{ n \to \infty } \frac{1}{\ln n} = 0 \\
\text{Which does not show divergence} \\
\implies \boxed{ \text{Limit comparison test with } \frac{1}{n^{p}} \text{ also doesn't show divergence} } \\
}
$$
# 4c
$$
\displaylines{
\text{Give an example of convergent series, whose divergence cannot be proved} \\
\text{by the limit comparison test with } \frac{1}{n^{p}} \\
\\
\text{Solution:} \\
\text{Let } a_{n} = \frac{1}{n(\ln n)^{2}} \\
\sum_{n=1}^{\infty} a_{n} \text{ converges by Cauchy's condensation test} \\
\lim_{ n \to \infty } \frac{a_{n}}{\frac{1}{n^{p}}} = \lim_{ n \to \infty } \frac{n^{p-1}}{(\ln n)^{2}} = \lim_{ n \to \infty } \left( \frac{n^{(p-1)/2}}{\ln n} \right)^{2} \underset{ p > 1 \implies \frac{p-1}{2} > 0 }{ = } \infty \\
\text{Which does not show convergence} \\
\implies \boxed{\text{Limit comparison test with } \frac{1}{n^{p}} \text{ doesn't show convergence}} \\
}
$$
---
