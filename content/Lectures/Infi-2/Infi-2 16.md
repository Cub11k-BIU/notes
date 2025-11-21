---
{"publish":true,"created":"18/05/25, 11:05","modified":"2025-11-21T21:10:14.413+02:00","tags":["Academia","Lecture","Infi-2"],"cssclasses":""}
---

## Power series #definition 
$$
\displaylines{
\sum_{n=0}^{\infty} a_{n}(x - a)^{n} \\
\text{Where } a_{n} \text{ does not depend on } x \\
\text{is called a power series in the neighborhood of } a \\
}
$$
## Convergence domain(interval) #definition 
$$
\displaylines{
\text{Convergence domain is a set } X \text{ such that:} \\
\forall I \subseteq X: \sum_{n=0}^{\infty} f_{n}(x) \text{ converges pointwise on } I \\
}
$$
## Convergence domain of a power series #lemma 
$$
\displaylines{
\text{Convergence domain of } \sum_{n=0}^{\infty} a_{n}(x-a)^{n} \text{ can be one of three options:} \\
1. \quad \mathbb{R}, \text{ for example } \sum_{n=0}^{\infty} \frac{x^{n}}{n!} \\
2. \quad \Set{ a }, \text{ for example } \sum_{n=0}^{\infty} n!x^{n} \\
3. \quad \text{Interval, that is symmetric around } a \\
}
$$
## Convergence radius #lemma 
$$
\displaylines{
\text{Let } R \in \mathbb{R} : \sum_{n=0}^{\infty} a_{n}(x-a)^{n} \text{ converges on } (a - R, a + R) \\
\text{and diverges if } x \in (-\infty, a-R) \cup (a + R, \infty) \\
R \text{ is then called a convergence radius of power series} \\
\text{And there are no "holes" in the convergence domain} \\
\text{Note: endpoints of convergence might be included or excluded} \\ 
\\
\text{Proof:} \\
\text{Let } b \in (a - R, a + R) \\
\text{Let } \left\lvert c - a \right\rvert < \left\lvert b - a \right\rvert \\
\text{Let } \sum_{n=0}^{\infty} a_{n}(b-a)^{n} \text{ converges} \\
\sum_{n=0}^{\infty} \left\lvert a_{n}(c-a)^{n} \right\rvert = \sum_{n=0}^{\infty} \left\lvert a_{n}(c-a)^{n} \frac{(b-a)^{n}}{(b-a)^{n}} \right\rvert = \\
= \sum_{n=0}^{\infty} \left\lvert a_{n}(b-a)^{n} \right\rvert \cdot \left\lvert \frac{c-a}{b-a} \right\rvert^{n} \\
a_{n}(b-a)^{n} \underset{ n \to \infty }{ \to } 0 \\
\implies \left\lvert a_{n}(b-a)^{n} \right\rvert \underset{ n \to \infty }{ \to } 0 \implies \forall n > N: \left\lvert a_{n}(b-a)^{n} \right\rvert < 1 \\
\forall n > N: \left\lvert a_{n}(b-a)^{n} \right\rvert \cdot \left\lvert \frac{c-a}{b-a} \right\rvert^{n} < \left\lvert \frac{c-a}{b-a} \right\rvert^{n} \\
\left\lvert \frac{c-a}{b-a} \right\rvert < 1 \implies \sum_{n=0}^{\infty} \left\lvert \frac{c-a}{b-a} \right\rvert^{n} \text{ converges} \\
\implies \sum_{n=0}^{\infty} \left\lvert a_{n}(b-a)^{n} \right\rvert \cdot \left\lvert \frac{c-a}{b-a} \right\rvert^{n} \text{ converges} \\
\implies \sum_{n=0}^{\infty} \left\lvert a_{n}(c-a)^{n}  \right\rvert \text{ converges} \implies \\
}
$$
## Determining convergence radius
$$
\displaylines{
\text{Let } \sum_{n=0}^{\infty} a_{n}(x-a)^{n} \\
\text{Let } L = \lim_{ n \to \infty } \left\lvert \frac{a_{n+1}(x-a)^{n+1}}{a_{n}(x-a)^{n}} \right\rvert = \\
= \lim_{ n \to \infty } \left\lvert \frac{a_{n+1}}{a_{n}} \right\rvert \cdot \left\lvert x-a \right\rvert = \left\lvert x - a \right\rvert \cdot \lim_{ n \to \infty } \left\lvert \frac{a_{n+1}}{a_{n}} \right\rvert \\
\text{Let } t = \lim_{ n \to \infty } \left\lvert \frac{a_{n+1}}{a_{n}} \right\rvert \\
t \cdot \left\lvert x - a \right\rvert < 1 \implies \text{Series converges} \\
t \cdot \left\lvert x - a \right\rvert > 1 \implies \text{Series diverges} \\
\implies \text{Series converges} \iff \left\lvert x - a \right\rvert < \frac{1}{t} \\
\implies R = \frac{1}{t} = \frac{1}{\lim_{ n \to \infty } \left\lvert \frac{a_{n+1}}{a_{n}} \right\rvert } \\
\text{Note: } \\
\text{We can also write } R = \frac{1}{\lim_{ n \to \infty } \sqrt[n]{ \left\lvert a_{n} \right\rvert }} \\
}
$$
$$
\displaylines{
\lim_{ n \to \infty } \left\lvert \frac{a_{n+1}}{a_{n}} \right\rvert = 0 \implies R = \infty \\
\lim_{ n \to \infty } \left\lvert \frac{a_{n+1}}{a_{n}} \right\rvert = \infty \implies R = 0 \\
\not\exists \lim_{ n \to \infty } \left\lvert \frac{a_{n+1}}{a_{n}} \right\rvert \implies ? \\
}
$$
$$
\displaylines{
\sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2n)!}x^{2n} \\
\\
a_{n} = \left\{\begin{array}{}
0 & n = 2k - 1 \\
\frac{(-1)^{n}}{(2n)!} & n = 2k \\
\end{array}\right. \\
??? \\
\text{Let } t = x^{2} \\
\sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2n)!}t^{n} \\
R = \lim_{ n \to \infty } \frac{1}{2n+1} = 0 \\
}
$$
