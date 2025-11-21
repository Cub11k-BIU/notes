---
{"publish":true,"created":"28/11/24, 23:11","modified":"2025-11-21T21:10:02.259+02:00","tags":["Academia","Assignment","Infi-1"],"cssclasses":""}
---

# 1a
$$
\displaylines{
a_{n} = \frac{1}{n + 27} \\
\text{Prove: } \lim_{ n \to \infty } a_{n} = 0 \\
\\
\text{Proof:} \\
\left\lvert  \frac{1}{n+27} - 0  \right\rvert = \frac{1}{n+27} \underset{ n > N }{ < } \frac{1}{N+27} \\
\text{Let } N = \frac{1}{\varepsilon}, \varepsilon > 0 \\
\left\lvert  \frac{1}{n+27}-0  \right\rvert \underset{ n > N }{ < } \frac{1}{\frac{1}{\varepsilon}+27 } < \frac{1}{\frac{1}{\varepsilon}} = \varepsilon \\
\implies \forall \varepsilon > 0: \exists N: \forall n > N, n \in \mathbb{N}: \left\lvert  \frac{1}{n+27}-0  \right\rvert < \varepsilon \\
\iff \boxed{\lim_{ n \to \infty } a_{n} = 0} \\
}
$$
# 1b
$$
\displaylines{
a_{n} = \frac{n+3}{n+32} \\
\text{Prove: } \lim_{ n \to \infty } a_{n} = 1 \\
\\
\text{Proof:} \\
\left\lvert  \frac{n+3}{n+32} - 1  \right\rvert = \left\lvert  \frac{n+3-(n+32)}{n+32}  \right\rvert = \frac{29}{n+32} \underset{ n > N }{ < } \frac{29}{N+32} \\
\text{Let } N = \frac{29}{\varepsilon}, \varepsilon > 0 \\
\left\lvert  \frac{n+3}{n+32} - 1  \right\rvert \underset{ n > N }{ < } \frac{29}{\frac{29}{\varepsilon}+32} < \frac{29}{\frac{29}{\varepsilon}} = \varepsilon \\
\implies \forall \varepsilon > 0: \exists N: \forall n > N, n \in \mathbb{N}: \left\lvert  \frac{n+3}{n+32}-1  \right\rvert < \varepsilon \\
\iff \boxed{\lim_{ n \to \infty } a_{n} = 1} \\
}
$$
# 1c
$$
\displaylines{
a_{n} = \frac{4n^{2}-25}{n^{2}-16} \\
\text{Prove: } \lim_{ n \to \infty } a_{n} = 4 \\
\\
\text{Proof:} \\
\left\lvert  \frac{4n^{2}-25}{n^{2}-16}-4  \right\rvert = \left\lvert  \frac{4n^{2}-25 - 4(n^{2}-16)}{n^{2}-16}  \right\rvert = \frac{39}{n^{2}-16} \underset{ n > N }{ < } \frac{39}{n^{2}-16} \\
\text{Let } N = \sqrt[]{ \frac{39}{\varepsilon} + 16 } \\
\left\lvert  \frac{4n^{2}-25}{n^{2}-16}-4  \right\rvert \underset{ n > N }{ < } \frac{39}{\sqrt[]{ \frac{39}{\varepsilon}+16 }^{2}-16} = \frac{39}{\frac{39}{\varepsilon}+16-16} = \frac{39}{\frac{39}{\varepsilon}} = \varepsilon \\
\implies \forall \varepsilon > 0: \exists N: \forall n > N, n \in \mathbb{N}: \left\lvert  \frac{4n^{2}-25}{n^{2}-16}-4  \right\rvert < \varepsilon \\
\iff \boxed{\lim_{ n \to \infty } a_{n} = 4} \\
}
$$
---

# 2a
$$
\displaylines{
a_{n} = \frac{(-1)^{n}}{n^{8}} \\
\text{Find } \lim_{ n \to \infty } a_{n} \\
\\
\text{Solution:} \\
\text{Let's assume } \lim_{ n \to \infty } a_{n} = 0 \\
\left\lvert  \frac{(-1)^{n}}{n^{8}}-0  \right\rvert = \frac{1}{n^{8}} \underset{ n > N }{ < } \frac{1}{N^{8}} \\
\text{Let } N = \sqrt[8]{ \frac{1}{\varepsilon} } \\
\left\lvert  \frac{(-1)^{n}}{n^{8}}-0  \right\rvert < \frac{1}{\sqrt[8]{ \frac{1}{\varepsilon} }^{8}} = \frac{1}{\frac{1}{\varepsilon}} = \varepsilon \\
\implies \forall \varepsilon > 0: \exists N: \forall n > N, n \in \mathbb{N}: \left\lvert  \frac{(-1)^{n}}{n^{8}}-0  \right\rvert < \varepsilon \\
\iff \boxed{\lim_{ n \to \infty } a_{n} = 0} \\
}
$$
# 2b
$$
\displaylines{
a_{n} = \frac{1+(-1)^{n}}{2^{n}+24} \\
\text{Find } \lim_{ n \to \infty } a_{n} \\
\\
\text{Solution:} \\
\text{Let's assume } \lim_{ n \to \infty } a_{n} = 0 \\
\left\lvert  \frac{1+(-1)^{n}}{2^{n}+24} - 0  \right\rvert = \frac{1 + (-1)^{n}}{2^{n} + 24} \leq \frac{2}{2^{n} + 24} \underset{ n > N }{ < } \frac{2}{2^{N} + 24} \\
\text{Let } N = 1+\log_{2}\left( \frac{1}{\varepsilon} \right), \varepsilon > 0 \\
\left\lvert  \frac{1+(-1)^{n}}{2^{n}+24} - 0  \right\rvert \underset{ n > N }{ < } \frac{2}{2^{1+\log_{2}(1/\varepsilon)}+24} = \frac{2}{2\frac{1}{\varepsilon} + 24} < \frac{2}{2\frac{1}{\varepsilon}} = \varepsilon \\
\implies \forall \varepsilon > 0: \exists N: \forall n > N, n \in \mathbb{N}: \left\lvert  \frac{1+(-1)^{n}}{2^{n}+24} - 0  \right\rvert < \varepsilon \\
\iff \boxed{\lim_{ n \to \infty } a_{n} = 0} \\
}
$$
# 2c
$$
\displaylines{
a_{n} = \frac{n^{3}-n^{2}+\sqrt{ n }}{n^{3}+n^{2}-\sqrt{ n }} \\
\text{Find } \lim_{ n \to \infty } a_{n} \\
\\
\text{Solution:} \\
\text{Let's assume } \lim_{ n \to \infty } a_{n} = 1 \\
\left\lvert \frac{n^{3}-n^{2}+\sqrt{ n }}{n^{3}+n^{2}-\sqrt{ n }} - 1 \right\rvert = \left\lvert  \frac{n^{3}-n^{2}+\sqrt{ n } - (n^{3}+n^{2}-\sqrt{ n })}{n^{3}+n^{2}-\sqrt{ n }}  \right\rvert = \left\lvert  \frac{2(\sqrt{ n }-n^{2})}{n^{3}+n^{2}-\sqrt{ n }}  \right\rvert = \\
\underset{ n^{2} > \sqrt{ n } }{ = } \frac{2(n^{2} - \sqrt{ n })}{n^{3}+n^{2}-\sqrt{ n }} < \frac{2n^{2}}{n^{3}+n^{2}-\sqrt{ n }} \underset{ n^{2} - \sqrt{ n } > 0 }{ < } \frac{2n^{2}}{n^{3}} = \frac{2}{n} \underset{ n > N }{ < } \frac{2}{N}\\
\text{Let } N = \frac{2}{\varepsilon}, \varepsilon > 0 \\
\left\lvert \frac{n^{3}-n^{2}+\sqrt{ n }}{n^{3}+n^{2}-\sqrt{ n }} - 1 \right\rvert < \frac{2}{\frac{2}{\varepsilon}} = \varepsilon \\
\implies \forall \varepsilon > 0: \exists N: \forall n > N, n \in \mathbb{N}: \left\lvert \frac{n^{3}-n^{2}+\sqrt{ n }}{n^{3}+n^{2}-\sqrt{ n }} - 1 \right\rvert < \varepsilon \\
\iff \boxed{\lim_{ n \to \infty } a_{n} = 1} \\
}
$$
---

# 3
$$
\displaylines{
\text{Prove: } \lim_{ n \to \infty } \frac{\sqrt{ n }+n}{2n-7\sqrt{ n }} \neq \frac{1}{7} \\
\\
\text{Proof:} \\
\left\lvert  \frac{\sqrt{ n } + n}{2n-7\sqrt{ n }} - \frac{1}{7} \right\rvert = \left\lvert  \frac{\overbrace{ 7(\sqrt{ n }+n)-(2n-7\sqrt{ n }) }^{ 7\sqrt{ n }+7n-2n+7\sqrt{ n } = 5n+14\sqrt{ n } }}{7(2n-7\sqrt{ n })}  \right\rvert = \frac{5n+14\sqrt{ n }}{14n-49\sqrt{ n }} > \\
> \frac{5n}{14n - 49\sqrt{ n }} > \frac{5n}{14n} = \frac{5}{14} \\
\implies \exists \varepsilon > 0: \forall n \in \mathbb{N}: \left\lvert  \frac{\sqrt{ n } + n}{2n-7\sqrt{ n }} - \frac{1}{7} \right\rvert \geq \varepsilon \\
\iff \lim_{ n \to \infty } \frac{\sqrt{ n } + n}{2n-7\sqrt{ n }} \neq \frac{1}{7} \\
}
$$
---

# 4a
$$
\displaylines{
\text{Show that } \\
\forall a,b,c \in \mathbb{R}: (\lvert a-b \rvert < 7) \land (\lvert b - c \rvert < 48) \implies \lvert a-c \rvert < 55 \\
\\
\text{Solution:} \\
\lvert a-c \rvert = \lvert a-b + b-c \rvert \leq \underbrace{ \lvert a-b \rvert }_{ < 7 } + \lvert b-c \rvert < 7 + \underbrace{ \lvert b-c \rvert }_{ < 48 } < 7 + 48 = 55 \\
\lvert a-c \rvert < 55 \\
}
$$
# 4b
$$
\displaylines{
\text{Show that } \forall a,b,c,\epsilon,\zeta \in \mathbb{R}, \epsilon > 0, \zeta > 0: \\
(\lvert a-b \rvert < \epsilon) \land (\lvert b - c \rvert < \zeta) \implies \lvert a-c \rvert < \epsilon+\zeta \\
\\
\text{Solution:} \\
\lvert a-c \rvert = \lvert a-b + b-c \rvert \leq \underbrace{ \lvert a-b \rvert }_{ < \epsilon } + \lvert b-c \rvert < \epsilon + \underbrace{ \lvert b-c \rvert }_{ < \zeta } < \epsilon + \zeta \\
\lvert a-c \rvert < \epsilon+\zeta \\
}
$$
---
$$
\text{Given: } \lim_{ n \to \infty } a_{n} = L \iff \forall \varepsilon > 0 \exists N \in \mathbb{N}: \forall n \in \mathbb{N}, n > N: \lvert a_{n} - L \rvert < \varepsilon
$$
# 5a
$$
\displaylines{
\text{Show that definition } (1) \\
\lim_{ n \to \infty } a_{n} = L_{1} \iff \forall \varepsilon > 0 \exists N \in \mathbb{N}: \forall n \in \mathbb{N}, n > N: \lvert a_{n} - L_{1} \rvert < \varepsilon \\
\text{and definition } (2) \\
\lim_{ n \to \infty } a_{n} = L_{2} \iff \forall \varepsilon > 0 \exists N \in \mathbb{N}: \forall n \in \mathbb{N}, n \geq N: \lvert a_{n} - L_{2} \rvert < \varepsilon \\
\text{are equivalent and } L_{1} = L_{2} \\
\\
\text{Solution:} \\
\text{Let the definition } (1) \text{ be true} \\
\text{Let } \lim_{ n \to \infty } a_{n} = L_{1} \\
\text{Then } \forall \varepsilon > 0 \exists N_{1} \in \mathbb{N}: \forall n \in \mathbb{N}, n > N_{1}: \lvert a_{n} - L_{1} \rvert < \varepsilon \\
\text{Let } N_{2} = N_{1} + 1 \\
n > N_{1} \iff n > N_{2} - 1 \\
\left\{\begin{array}{}
n = N_{2}: n = N_{2} > N_{2} - 1 \\
n > N_{2}: n > N_{2} > N_{2} - 1 \\
\end{array}\right. \implies \boxed{n > N_{1} \iff n \geq N_{2}} \\
(\forall \varepsilon > 0 \exists N_{1} \in \mathbb{N}: \forall n \in \mathbb{N}, n > N_{1}: \lvert a_{n} - L_{1} \rvert < \varepsilon) \\ \implies (\forall \varepsilon > 0 \exists N_{2} \in \mathbb{N}: \forall n \in \mathbb{N}, n \geq N_{2}: \lvert a_{n} - L_{1} \rvert < \varepsilon) \\
\implies \boxed{(1) \implies (2)} \quad [1] \\
\text{Now let the definition } (2) \text{ be true} \\
\text{Let } \lim_{ n \to \infty } a_{n} = L_{2} \\
\text{Then } \forall \varepsilon > 0 \exists N_{1} \in \mathbb{N}: \forall n \in \mathbb{N}, n \geq N_{1}: \lvert a_{n} - L_{2} \rvert < \varepsilon \\
\text{Let } N_{2} = N_{1} - 1 \\
n \geq N_{1} \iff n \geq N_{2} + 1 > N_{2} \implies \boxed{n \geq N_{1} \iff n > N_{2}} \\
(\forall \varepsilon > 0 \exists N_{1} \in \mathbb{N}: \forall n \in \mathbb{N}, n \geq N_{1}: \lvert a_{n} - L_{2} \rvert < \varepsilon) \\
\implies (\forall \varepsilon > 0 \exists N_{2} \in \mathbb{N}: \forall n \in \mathbb{N}, n > N_{2}: \lvert a_{n} - L_{1} \rvert < \varepsilon) \\
\implies \boxed{(2) \implies (1)} \quad [2] \\
[1] \text{ and } [2] \implies \boxed{(1) \equiv (2)} \\
\text{Let } L_{1} \neq L_{2} \\
\text{Then } \zeta = \lvert L_{1} - L_{2} \rvert > 0, \text{ Let } \varepsilon = \frac{\zeta}{4} \\
\lvert L_{1}-L_{2} \rvert \leq \lvert L_{1} - a_{n} \rvert + \lvert a_{n} - L_{2} \rvert < 2\varepsilon = \frac{\zeta}{2} \\
\implies \zeta < \frac{\zeta}{2} - \text{Contradiction!} \implies \boxed{L_{1} = L_{2}} \\
}
$$
# 5b
$$
\displaylines{
\text{Show that definition } (1) \\
\lim_{ n \to \infty } a_{n} = L \iff \forall \varepsilon > 0 \exists N \in \mathbb{N}: \forall n \in \mathbb{N}, n > N: \lvert a_{n} - L \rvert < \varepsilon \\
\text{and definition } (2) \\
\lim_{ n \to \infty } a_{n} = L \iff \forall \varepsilon > 0 \exists N \in \mathbb{N}: \forall n \in \mathbb{N}, n > N: \lvert a_{n} - L \rvert \leq \varepsilon \\
\text{are equivalent} \\
\\
\text{Solution:} \\
\text{One direction is obvious, as } \forall r \in \mathbb{R}: r < \varepsilon \implies r \leq \varepsilon \\
\implies \boxed{(1) \implies (2)} \quad [1] \\
\text{Now let the definition } (2) \text{ be true} \\
\text{Let } \lim_{ n \to \infty } a_{n} = L \\
\text{Then } \forall \varepsilon > 0 \exists N \in \mathbb{N}: \forall n \in \mathbb{N}, n \geq N: \lvert a_{n} - L \rvert \leq \varepsilon \\
\text{Let } \varepsilon_{1} = \frac{\varepsilon}{2}, \varepsilon > 0 \\
\forall r \in \mathbb{R}: r \leq \varepsilon_{1} \implies r \leq \frac{\varepsilon}{2} < \varepsilon \\
(\forall \varepsilon_{1} > 0 \exists N_{1} \in \mathbb{N}: \forall n \in \mathbb{N}, n > N: \lvert a_{n} \rvert \leq \varepsilon_{1}) \\
\implies (\forall \varepsilon > 0 \exists N_{2} \in \mathbb{N}: \forall n \in \mathbb{N}, n > N_{2}: \lvert a_{n} - L_{1} \rvert < \varepsilon) \\
\implies \boxed{(2) \implies (1)} \quad [2] \\
[1] \text{ and } [2] \implies {\boxed{(1) \equiv (2)}} \\
}
$$
# 5c
$$
\displaylines{
\text{Show that definition } (1) \\
\lim_{ n \to \infty } a_{n} = L \iff \forall \varepsilon > 0 \exists N \in \mathbb{N}: \forall n \in \mathbb{N}, n > N: \lvert a_{n} - L \rvert < \varepsilon \\
\text{and definition } (2) \\
\lim_{ n \to \infty } a_{n} = L \iff \forall \varepsilon \geq 0 \exists N \in \mathbb{N}: \forall n \in \mathbb{N}, n > N: \lvert a_{n} - L \rvert < \varepsilon \\
\text{are not equivalent} \\
\\
\text{Solution:} \\
1. \quad \forall r \in \mathbb{R}: \lvert r \rvert \geq 0 \\
\varepsilon = 0 \implies \lvert a_{n} - L \rvert \not< \varepsilon = 0 \\
2. \quad \text{Let us replace } \lvert a_{n} - L \rvert < \varepsilon \text{ with } \lvert a_{n} - L \rvert \leq \varepsilon \text{ as per 5b} \\
\text{This wouldn't help either, for example:} \\
(1) \implies \lim_{ n \to \infty } \frac{1}{n} = 0 \\
\text{But } \forall n \in \mathbb{N}: \left\lvert  \frac{1}{n}  \right\rvert \not\leq 0 \implies \boxed{(2) \centernot\implies \lim_{ n \to \infty } \frac{1}{n} = 0} \\
\implies \boxed{(1) \not\equiv (2)} \\
}
$$
---

# 6
$$
\displaylines{
\text{Given: } \lim_{ n \to \infty } a_{n} = \pi \\
b_{n} = \begin{cases}
2a_{n} & n = 314 \\
a_{n} & \text{otherwise} \\
\end{cases} \\
\text{Prove: } \lim_{ n \to \infty } b_{n} = \pi \\
\\
\text{Proof:} \\
\lim_{ n \to \infty } a_{n} = \pi \iff \forall \varepsilon > 0: \exists N: \forall n \in \mathbb{N}, n > N: \lvert a_{n} - \pi \rvert < \varepsilon \\
\text{Let } N_{1} = max(N, 314) \\
\forall n \in \mathbb{N}, n > N_{1}: b_{n} = a_{n} \\
\forall \varepsilon > 0: \exists N_{1}: \forall n \in \mathbb{N}, n > N_{1}: \lvert a_{n} - \pi \rvert < \varepsilon \\
\implies \forall \varepsilon > 0: \exists N_{1}: \forall n \in \mathbb{N}, n > N_{1}: \lvert b_{n} - \pi \rvert < \varepsilon \iff \boxed{\lim_{ n \to \infty } b_{n} = \pi} \\
}
$$
---
