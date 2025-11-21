---
{"publish":true,"created":"18/11/24, 12:11","modified":"2025-11-21T21:10:14.176+02:00","tags":["Academia","Lecture","Infi-1"],"cssclasses":""}
---

# Infi-1 6
## Operations on infinites #lemma 
$$
\displaylines{
\infty + \infty = \infty \\
C > 0, C\cdot \infty = \infty \\
C < 0, C\cdot \infty = -\infty \\
\\
\dots \\
a_{n} \to \infty, b_{n} \to 0 \\
a_{n}\cdot b_{n} \to ? \\
\frac{0}{\infty}, \frac{\infty}{\infty}, \infty - \infty : \text{Special cases} \\
\\
\frac{a_{n}}{b_{n}} \to ? \\
a_{n} = 17n, b_{n} = 3n \\
\frac{a_{n}}{b_{n}} = \frac{17n}{3n} = \frac{17}{3} \to \frac{17}{3} \\
a_{n} = 17n, b_{n} = 3n^{2} \\
\frac{a_{n}}{b_{n}} = \frac{17n}{3n^{2}} = \frac{17}{3n} \to 0 \\
}
$$
---
## Sandwich theorem #theorem 
$$
\displaylines{
a_{n}, b_{n}, c_{n} \\
\\
\begin{cases}{}
a_{n} \leq b_{n} \leq c_{n} \\
a_{n} \to L, c_{n} \to L \\
\end{cases} \implies b_{n} \to L \\
\\
\begin{cases}
\forall \varepsilon > 0 \exists n_{\varepsilon_{a}} : \forall n > n_{\varepsilon_{a}} : \lvert a_{n} - L \rvert < \varepsilon \\
\forall \varepsilon > 0 \exists n_{\varepsilon_{c}} : \forall n > n_{\varepsilon_{c}} : \lvert c_{n} - L \rvert < \varepsilon \\
\end{cases} \\
\forall \varepsilon > 0 \exists n_{\varepsilon} = max(n_{\varepsilon_{a}}, n_{\varepsilon_{c}}) : \forall n > n_{\varepsilon} : \\
L - \varepsilon < a_{n} \leq b_{n} \leq c_{n} < L + \varepsilon \\
\implies \forall \varepsilon \exists n_{\varepsilon} = max(n_{\varepsilon_{a}}, n_{\varepsilon_{c}}) : \forall n > n_{\varepsilon} : \lvert b_{n} -  L \rvert < \varepsilon \\
\implies b_{n} \to L \\

}
$$
---
$$
\displaylines{
a_{n} \to L, a_{n} > 0 \implies L > 0? L \geq 0? \\
a_{n} = \frac{1}{n} \to 0 \implies \boxed{L \not> 0} \\
\\
a_{n} \leq b_{n}, a_{n} \to L, b_{n} \to M \implies L \leq M? \\
L - \varepsilon < a_{n} \leq b_{n} < M - \varepsilon \\
\implies \boxed{L < M} \\
\\
a_{n} \to 0, m \leq b_{n} \leq M \implies a_{n}*b_{n} \to 0? \\
m\cdot a_{n} \leq b_{n}a_{n} \leq M\cdot a_{n} \\
m\cdot a_{n} \to m*0 = 0 \\
M\cdot a_{n} \to M*0 = 0 \\
\implies \boxed{b_{n}a_{n} \to 0} \\
\\
\lvert a_{n} \rvert \to 0 \iff a_{n} \to 0 \\
-\varepsilon < \lvert a_{n} \rvert < \varepsilon \implies -\varepsilon < a_{n} < \varepsilon \\
\implies \boxed{\lvert a_{n} \rvert \to 0 \implies a_{n} \to 0} \\
-\varepsilon < a_{n} < \varepsilon \implies -\varepsilon < \lvert a_{n} \rvert < \varepsilon \\
\implies \boxed{a_{n} \to 0 \implies \lvert a_{n} \rvert \to 0}
\\
}
$$
---
$$
\displaylines{
a_{n} \to \infty, a_{n} \leq b_{n} \implies b_{n} \to \infty? \\
\forall M > 0 \exists n_{M} : \forall n > n_{M} : b_{n} \geq a_{n} > M \\
\implies \forall M > 0 \exists n_{M} : \forall n > n_{M} : b_{n} > M \\
\implies \boxed{b_{n} \to \infty} \\
\\
a_{n} \to -\infty, b_{n} \leq a_{n} \implies b_{n} \to -\infty \\
\forall M > 0 \exists n_{M} : \forall n > n_{M} : -b_{n} \geq -a_{n} > M \\
\implies \forall M > 0 \exists n_{M} : \forall n > n_{M} : -b_{n} > M \\
\implies \boxed{b_{n} \to -\infty} \\
}
$$
---
## Bernoulli #theorem 
$$
\displaylines{
x > -1 \implies (1+x)^{n} \geq 1 + nx
}
$$
---
$$
\displaylines{
W > 1 \implies W^{n} \to \infty \\
W = 1 \implies W^{n} = 1 \to 1 \\
-1 < W < 1 \implies W^{n} \to 0 \\
W \leq -1 \implies W^{n} \not\to L, \not\to \infty, \not\to -\infty 
}
$$
---
$$
\displaylines{
W > 1 \\
W^{n} = (1 + W - 1)^{n} \\
x = W - 1 \\
(1 + W - 1)^{n} \geq 1 + (W-1)n \\
W > 1 \implies (W - 1) > 0 \implies 1 + (W-1)n \to \infty \\
\implies \boxed{W^{n} \to \infty} \\
}
$$
---
$$
\displaylines{
-1 < W < 1 \\
W = 0 \implies W^{n} = 0 \to 0 \\
\lvert W \rvert ^{n} = \lvert W^{n} \rvert \\
\lvert W^{n} \rvert \to 0 \iff W^{n} \to 0 \\
\lvert W^{n} \rvert = \left( \frac{1}{\frac{1}{\lvert W \rvert }} \right)^{n} \\
\frac{1}{\lvert W \rvert } > 1 \implies \left( \frac{1}{\lvert W \rvert } \right)^{n} \to \infty \\
\frac{1}{\left( \frac{1}{\lvert W \rvert } \right)^{n}} \to 0 \\
\implies \lvert W^{n} \rvert \to 0 \iff W^{n} \to 0 \\
}
$$
---
