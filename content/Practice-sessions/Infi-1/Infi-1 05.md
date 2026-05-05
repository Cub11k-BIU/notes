---
{"publish":true,"created":"27/11/24, 16:11","modified":"2026-03-24T14:59:15.014+02:00","tags":["Academia","Practice","Infi-1"],"cssclasses":""}
---

# Infi-1 5
## Infinite sequence limit (sequence diverges)
$$
\displaylines{
\lim_{ n \to \infty } a_{n} = \infty \iff \forall M \exists N : \forall n > N: a_{n} > M \\
\\
\lim_{ n \to \infty } a_{n} = -\infty \iff \lim_{ n \to \infty } -a_{n} = \infty \\
\iff \forall m \exists N: \forall n > N: a_{n} < m \\
}
$$
---
## Exercise
$$
\displaylines{
\text{Prove: } \lim_{ n \to \infty } \sqrt{ \frac{n}{26} } = \infty \\
\\
\text{Proof:} \\
\text{Let } M \\
\sqrt{ \frac{n}{26} } \underset{ n > N }{ > } \sqrt{ \frac{N}{26} } \\
\text{Let } N = 26M^{2} \\
\sqrt{ \frac{n}{26} } > \sqrt{ \frac{26M^{2}}{26} } = \sqrt{ M^{2} } = M \\
\implies \forall M: \exists N = 26M^{2} : \forall n > N, n \in \mathbb{N}: \sqrt{ \frac{n}{26} } > M \\
\iff \boxed{\lim_{ n \to \infty } \sqrt{ \frac{n}{26} } = \infty} \\
}
$$
---
## Exercise
$$
\displaylines{
\text{Prove or disprove: } \lim_{ n \to \infty } a_{n} = 0 \implies \lim_{ n \to \infty } \frac{1}{a_{n}} = \pm \infty \\
\\
\text{Disproof:} \\
\lim_{ n \to \infty } (-1)^{n} \frac{1}{n} = 0 \\
a_{n} = (-1)^{n} \frac{1}{n} \\
\lim_{ n \to \infty } \frac{1}{a_{n}} = \lim_{ n \to \infty } \frac{1}{(-1)^{n} \frac{1}{n}} = \lim_{ n \to \infty } (-1)^{n}\cdot n \\
\not\exists \lim_{ n \to \infty } (-1)^{n}\cdot n \implies \boxed{\not\exists \lim_{ n \to \infty } \frac{1}{a_{n}}} \\
}
$$
---
## Exercise
$$
\displaylines{
\lim_{ n \to \infty } (n+1)\left( 1-\sqrt{ \frac{n}{n+1} } \right) = \lim_{ n \to \infty } \frac{(n+1)\left( 1-\sqrt{ \frac{n}{n+1} } \right)\left( 1+\sqrt{ \frac{n}{n+1} } \right)}{1+\sqrt{ \frac{n}{n+1} }} = \\
= \lim_{ n \to \infty } \frac{(n+1)\left( 1-\frac{n}{n+1} \right)}{1 + \sqrt{ \frac{n}{n+1} }} = \lim_{ n \to \infty } \frac{(n+1)\left( \frac{n+1-n}{n+1} \right)}{1+\sqrt{ \frac{n}{n+1} }} = \\
= \lim_{ n \to \infty } \frac{1}{1+\underbrace{ \sqrt{ \frac{n}{n+1} } }_{ \frac{n}{n+1} = \frac{1}{1+\frac{1}{n}} \to 1 }} = \frac{1}{2} \\
}
$$
---
## Exercise
$$
\displaylines{
\lim_{ n \to \infty } \frac{\sqrt{ n^{2}+n } - n}{\sqrt{ n^{2}-n }-n} = \lim_{ n \to \infty } \frac{\sqrt{ n^{2}+n } - n}{\sqrt{ n^{2}-n }-n} \cdot \frac{\sqrt{ n^{2}+n } + n}{\sqrt{ n^{2}+n } + n} \cdot \frac{\sqrt{ n^{2}-n } + n}{\sqrt{ n^{2}-n }+n} = \\
= \lim_{ n \to \infty } \frac{n^{2}+n-n^{2}}{n^{2}-n-n^{2}}\cdot \frac{\sqrt{ n^{2}-n }+n}{\sqrt{ n^{2}+n }+n} = \lim_{ n \to \infty } -\frac{\sqrt{ n^{2}-n }+n}{\sqrt{ n^{2}+n }+n} = \\
= \lim_{ n \to \infty } -\frac{n\left( \sqrt{ 1-\frac{1}{n} }+1 \right)}{n\left( \sqrt{ 1+\frac{1}{n} }+1 \right)} = \lim_{ n \to \infty } -\frac{\overbrace{ \sqrt{ 1-\frac{1}{n} } }^{ \to 1 }+1}{\underbrace{ \sqrt{ 1+\frac{1}{n} } }_{ \to 1 }+1} = \lim_{ n \to \infty } -\frac{2}{2} = -1 \\
}
$$
---
## Exercise
$$
\displaylines{
\sqrt[3]{ n+1 }-1 \\
a^{3}-b^{3} = (a-b)(a^{2}+ab+b^{2}) \\
\implies \sqrt[3]{ n+1 }-1 = \frac{(\sqrt[3]{ n+1 } - 1)(\sqrt[3]{ (n+1)^{2} } + \sqrt{ n+1 } + 1)}{\sqrt[3]{ (n+1)^{2} } + \sqrt{ n+1 } + 1} = \\
= \frac{n}{\sqrt[3]{ (n+1)^{2} } + \sqrt{ n+1 } + 1} \\
}
$$
---
## "Sandwich" theorem (Squeeze theorem)
$$
\displaylines{
\exists N: \forall n > N, n \in \mathbb{N}: a_{n} \leq b_{n} \leq c_{n} \\
a_{n} \to L, c_{n} \to L \implies b_{n} \to L \\
}
$$
---
## Exercise
$$
\displaylines{
\lim_{ n \to \infty } \frac{\sin^{2}(n^{2})}{n^{3}+1} = 0 \\
\underbrace{ -\frac{1}{n^{3}+1} }_{ \to 0 } \leq \frac{\sin^{2}(n^{2})}{n^{3}+1} \leq \underbrace{ \frac{1}{n^{3}+1} }_{ \to 0 } \\
\implies \frac{\sin^{2}(n^{2})}{n^{3}+1} \to 0 \\
}
$$
---
## Exercise
$$
\displaylines{
\lim_{ n \to \infty } \sqrt[n]{ 3^{n}+2^{n}+4^{n} } \\
\sqrt[n]{ 4^{n} } \leq \sqrt[n]{ 3^{n}+2^{n}+4^{n} } \leq \sqrt[n]{ 4^{n}+4^{n}+4^{n} } \\
\underbrace{ 4 }_{ \to 4 } \leq \sqrt[n]{ 3^{n}+2^{n}+4^{n} } \leq \underbrace{ \sqrt[n]{ 3 } }_{ \to 1 }\cdot \underbrace{ 4 }_{ \to 4 } \\
\implies \lim_{ n \to \infty } \sqrt[n]{ 3^{n}+2^{n}+4^{n} } = 4 \\
}
$$
---
## Exercise
$$
\displaylines{
\lim_{ n \to \infty } \left( \frac{1}{\sqrt[]{ n^{2}+1 }} + \frac{1}{\sqrt[]{ n^{2}+2 }} + \dots + \frac{1}{\sqrt[]{ n^{2}+n }}\right) \\
\frac{n}{\sqrt[]{ n^{2}+n }} \leq a_{n} \leq \frac{n}{\sqrt[]{ n^{2}+1 }} \\
\frac{n}{n\sqrt[]{ 1+\frac{1}{n} }} \leq a_{n} \leq \frac{n}{n\sqrt[]{ 1+\frac{1}{n^{2}} }} \\
\underbrace{ \frac{1}{\underbrace{ \sqrt[]{ 1+\frac{1}{n} } }_{ \to 1 }} }_{ \to \frac{1}{1} = 1 } \leq a_{n} \leq \underbrace{ \frac{1}{\underbrace{ \sqrt[]{ 1+\frac{1}{n^{2}} } }_{ \to 1 }} }_{ \to \frac{1}{1} = 1 } \\
\implies \lim_{ n \to \infty } \left( \frac{1}{\sqrt[]{ n^{2}+1 }} + \frac{1}{\sqrt[]{ n^{2}+2 }} + \dots + \frac{1}{\sqrt[]{ n^{2}+n }}\right) = 1 \\
}
$$
---
$$
\displaylines{
\forall n \in \mathbb{N}: a_{n+1} - a_{n} \geq 0 - \text{Monotonic non-descending} \\
\forall n \in \mathbb{N}: \frac{a_{n+1}}{a_{n}} \geq 1 - \text{Monotonic non-descending} \\
\forall n \in \mathbb{N}: a_{n+1} - a_{n} \leq 0 - \text{Monotonic non-ascending} \\
\forall n \in \mathbb{N}: 0 < \frac{a_{n+1}}{a_{n}} \leq 1 - \text{Monotonic non-descending} \\
}
$$
---
## Exercise
$$
\displaylines{
a_{n} = \frac{1}{n} + \frac{1}{n+1} + \dots + \frac{1}{3n} \\
\text{Prove: } \lim_{ n \to \infty } a_{n} = L \\
\\
\text{Proof: } \\
a_{n+1} - a_{n} = \frac{1}{3n+3} + \frac{1}{3n+2} + \frac{1}{3n+1} - \frac{1}{n} < \frac{3}{3n} - \frac{1}{n} = 0 \\
\implies a_{n} - \text{monotonically descending} \\
\frac{2}{3} \leq \frac{2n+1}{3n} \leq \frac{1}{n} + \frac{1}{n+1} + \dots + \frac{1}{3n} \\
\implies a_{n} \text{ is lower-bounded} \implies \lim_{ n \to \infty } a_{n} = L \geq \frac{2}{3} \\
}
$$
---
$$
\displaylines{
n \cdot \frac{n}{n^{2}+n} = \frac{n^{2}}{n^{2}+n} = \frac{1}{1 + \frac{1}{n}} \\
}
$$