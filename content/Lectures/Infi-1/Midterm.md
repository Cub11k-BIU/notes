---
{"publish":true,"created":"09/01/25, 11:01","modified":"2025-11-21T21:10:14.248+02:00","tags":["Academia","Lecture","Infi-1"],"cssclasses":""}
---

# Midterm
# 1
$$
\displaylines{
a_{n} \to \infty \\
b_{n} \text{ is bottom-limited/bottom-bounded} (b_{n} \geq B) \\
\text{Prove by definition: } a_{n} + b_{n} \to \infty \\
\\
\text{Proof:} \\
a_{n} \to \infty \implies \forall M_{1} \in \mathbb{R}: \exists N \in \mathbb{N}: \forall n > N: a_{n} > M_{1} \\
b_{n} \text{ is bottom-bounded/lower-bounded/bottomo-limited/etc.} \\ \implies \exists B \in \mathbb{R}: \forall n \in \mathbb{N}: b_{n} \geq B \\
\text{Let } B \in \mathbb{R}: b_{n} \geq B \\
\implies \forall n \in \mathbb{N}: a_{n} + b_{n} \geq a_{n} + B \\
\text{Let } M \in \mathbb{R} \\
\text{Let } M_{1} = M - B \\
\forall M_{1}: \exists N: \forall n > N: a_{n} > M_{1} \\
\implies a_{n} > M - B \implies a_{n} + b_{n} \geq a_{n} + B > M - B + B = M \\
\implies \forall M: \exists N: \forall n > N: a_{n} + b_{n} > M \\
\implies \boxed{\lim_{ n \to \infty } a_{n}+b_{n} = \infty} \\
}
$$
# 2
$$
\displaylines{
a_{n} = \begin{cases}
a_{1} > 1 \\
a_{n+1} = 2a_{n} - 1
\end{cases} \\
\text{Prove: } a_{n} \text{ is monotonically strictly increasing} \\
\text{Find } \lim_{ n \to \infty } a_{n} \\
\\
\text{Solution:} \\
\text{Base case. } a_{1} > 1 \\
\text{Induction step. Let } a_{n} > 1 \\
\implies a_{n+1} = 2a_{n} - 1 > 2 - 1 = 1 \implies a_{n+1} > 1 \\
\implies \text{By induction: } \forall n \in \mathbb{N}: a_{n} > 1 \\
a_{n+1} - a_{n} = 2a_{n} - 1 - a_{n} = a_{n} - 1 > 0 \\
\implies a_{n+1} > a_{n} \implies a_{n} \text{ is monotonically strictly increasing} \\
\text{Let } \lim_{ n \to \infty } a_{n} = L \in \mathbb{R} \\
\implies \lim_{ n \to \infty } a_{n+1} = \lim_{ n \to \infty } a_{n} = L \\
\implies L = \lim_{ n \to \infty } 2a_{n} - 1 = 2L - 1 \\
L = 2L - 1 \implies L = 1 \\
a_{1} > 1 \implies a_{1} = 1 + \alpha, \alpha > 0 \\
\forall n \in \mathbb{N}: a_{n+1} > a_{1} \implies a_{n+1} > 1 + \alpha \implies \lim_{ n \to \infty } a_{n+1} \geq 1+\alpha > 1 \\
\implies \lim_{ n \to \infty } a_{n} \neq 1 \implies L \neq 1 \implies L \not\in \mathbb{R} \\
a_{n} \text{ is monotonically strictly increasing and } a_{n} > 0 \\
\implies a_{n} \text{ converges in the broadest sense} \implies \boxed{\lim_{ n \to \infty } a_{n} = \infty} \\
}
$$
# 3
$$
\displaylines{
\text{Find } \lim_{ n \to \infty } \frac{\sqrt{ (n+1)^{3} } - \sqrt{ n^{3} }}{\sqrt{ n+1 }} \\
\\
\text{Solution:} \\
a^{3} - b^{3} = (a-b)(a^{2}+ab+b^{2}) \\
\lim_{ n \to \infty } \frac{\sqrt{ (n+1)^{3} } - \sqrt{ n^{3} }}{\sqrt{ n+1 }} = \lim_{ n \to \infty } \frac{(\sqrt{ (n+1) } - \sqrt{ n })(\sqrt{ (n+1)^{2} }+\sqrt{ n(n+1) }+\sqrt{ n^{2} })}{\sqrt{ n+1 }} = \\
= \lim_{ n \to \infty } \frac{(\sqrt{ (n+1) } - \sqrt{ n })(\sqrt{ (n+1) } + \sqrt{ n })(n+1+\sqrt{ n(n+1) }+n)}{\sqrt{ n+1 }(\sqrt{ (n+1) } + \sqrt{ n })} = \\
= \lim_{ n \to \infty } \frac{(n+1-n)(n+1+\sqrt{ n(n+1) }+n)}{n+1+\sqrt{ n(n+1) }} = \lim_{ n \to \infty } \frac{2n+1+\sqrt{ n^{2}+n }}{n+1+\sqrt{ n^{2}+n }} = \\
= \lim_{ n \to \infty } \frac{2 + \overbrace{ \frac{1}{n} }^{ \to 0 } + \overbrace{ \sqrt{ 1 + \frac{1}{n} } }^{ \to 1 }}{1+\underbrace{ \frac{1}{n} }_{ \to 0 }+\underbrace{ \sqrt{ 1+\frac{1}{n} } }_{ \to 1 }} = \frac{2 + 1}{1 + 1} = \frac{3}{2} \\
\implies \boxed{\lim_{ n \to \infty } \frac{\sqrt{ (n+1)^{3} } - \sqrt{ n^{3} }}{\sqrt{ n+1 }} = \frac{3}{2}} \\
}
$$
# 4
$$
\displaylines{
a_{n} \text{ is monotonically non-increasing} \\
a_{n} > 0 \\
b_{n} = \frac{a_{2n}}{a_{2n-1}}(a_{2n-1}-a_{2n}) \\
\text{Prove that } b_{n} \text{ converges and find } \lim_{ n \to \infty } b_{n} \\
\\
\text{Solution:} \\
\text{Let } c_{n} = \frac{a_{2n}}{a_{2n-1}} \\
0 < a_{2n} \leq a_{2n-1} \implies 0 < \frac{a_{2n}}{a_{2n-1}} \leq 1 \implies 0 < c_{n} \leq 1 \implies \lvert c_{n} \rvert \leq 1 \\
\text{Let } d_{n} = a_{2n-1} - a_{2n} \\
a_{n} \text{is monotonically non-increasing and bottom-bounded} \\
\implies \exists \lim_{ n \to \infty } a_{n} = L \in \mathbb{R} \text{ and } L \geq 0 \\
\exists \lim_{ n \to \infty } a_{n} \implies \lim_{ n \to \infty } a_{2n} = \lim_{ n \to \infty } a_{2n-1} = L \\
\implies \lim_{ n \to \infty } d_{n} = \lim_{ n \to \infty } a_{2n-1} - a_{2n} = \lim_{ n \to \infty } a_{2n-1} - \lim_{ n \to \infty } a_{2n} = L - L = 0 \\
\lim_{ n \to \infty } b_{n} = \lim_{ n \to \infty } c_{n} \cdot d_{n} \\
\left\{\begin{array}{}
c_{n} \text{ is both top- and bottom-bounded} \\
d_{n} \to 0 \\
\end{array}\right. \implies \lim_{ n \to \infty } c_{n} \cdot d_{n} = 0 \\
\implies \boxed{\lim_{ n \to \infty } b_{n} = 0} \\
}
$$
# 5
$$
\displaylines{
\sum_{n=1}^{\infty} a_{n} \text{ converges} \\
\sum_{n=1}^{\infty} a_{n} > 0 \\
a_{n} = S^{2}_{n} + S_{n} - 6 \\
\text{Find } \sum_{n=1}^{\infty} a_{n} \\
\\
\text{Solution:} \\
S_{n+1} - S_{n} = a_{n+1} \\
\implies S_{n+1} - S_{n} = S_{n+1}^{2} + S_{n+1} - 6 \\
\implies S_{n} = 6 - S_{n+1}^{2} \\
\sum_{n=1}^{\infty} a_{n} \text{ converges} \implies \exists \lim_{ n \to \infty } S_{n} = L \in \mathbb{R} \\
\lim_{ n \to \infty } S_{n+1} = \lim_{ n \to \infty } S_{n} = L \\
\implies \lim_{ n \to \infty } S_{n} = \lim_{ n \to \infty } (6 - \underbrace{ S_{n+1}^{2} }_{ \to L^{2} }) \\
\implies L = 6 - L^{2} \\
L^{2} + L - 6 = 0 \implies (L+3)(L-2) = 0 \implies \left[\begin{array}{}
L = -3 \\
L = 2 \\
\end{array}\right. \\
\sum_{n=1}^{\infty} a_{n} > 0 \implies \lim_{ n \to \infty } S_{n} = L > 0 \\
\implies L = 2 \implies \lim_{ n \to \infty } S_{n} = 2 \implies \boxed{\sum_{n=1}^{\infty} a_{n} = 2} \\
}
$$
---
