---
{"publish":true,"created":"30/12/24, 22:12","modified":"2025-11-21T21:10:02.312+02:00","tags":["Academia","Assignment","Infi-1"],"cssclasses":""}
---

# 1a
$$
\displaylines{
a_{n} = \left( 1 - \frac{1}{n^{2}+6} \right)^{2n^{2}+n+5} \\
\text{Find } \lim_{ n \to \infty } a_{n} \\
\\
\text{Solution:} \\
a_{n} = \left( \underbrace{ 1 - \frac{1}{n^{2}+6} }_{ \to 1 } \right)^{\underbrace{ 2n^{2}+n+5 }_{ \to \infty }} \\
\implies \lim_{ n \to \infty } a_{n} = e^{\lim_{ n \to \infty } -(2n^{2}+n+5)/(n^{2}+6)} \\
\lim_{ n \to \infty }- \frac{2n^{2}+n+5}{n^{2}+6} = -\lim_{ n \to \infty } \frac{2+\overbrace{ \frac{1}{n} }^{ \to 0 }+\overbrace{ \frac{5}{n^{2}} }^{ \to 0 }}{1+\underbrace{ \frac{6}{n^{2}} }_{ \to 0 }} = -2 \\
\implies \boxed{\lim_{ n \to \infty } a_{n} = e^{-2} = \frac{1}{e^{2}}} \\
}
$$
# 1b
$$
\displaylines{
b_{n} = \left( \frac{n^{5}-3n}{n^{5}+2n^{2}+n} \right)^{n^{2}-16} \\
\text{Find } \lim_{ n \to \infty } b_{n} \\
\\
\text{Solution:} \\
b_{n} = \left( \frac{n^{5}-3n}{n^{5}+2n^{2}+n} \right)^{n^{2}-16} = \left( \frac{n^{5}+2n^{2}+n-2n^{2}-4n}{n^{5}+2n^{2}+n} \right)^{n^{2}-16} = \\
= \left( 1-\frac{2n^{2}+4n}{n^{5}+2n^{2}+n} \right)^{n^{2}-16} = \left( \underbrace{ 1-\frac{2+\frac{4}{n}}{n^{3}+2+\frac{1}{n}} }_{ \to 1 } \right)^{\underbrace{ n^{2}-16 }_{ \to \infty }} \\
\implies \lim_{ n \to \infty } b_{n} = e^{\lim_{ n \to \infty } -(n^{2}-16)(2n^{2}+4n)/(n^{5}+2n^{2}+n)} \\
\lim_{ n \to \infty } -\frac{(n^{2}-16)(2n^{2}+4n)}{n^{5}+2n^{2}+n} = -\lim_{ n \to \infty } \frac{2n^{4}+4n^{3}-32n^{2}-64n}{n^{5}+2n^{2}+n} = \\
= -\lim_{ n \to \infty } \underbrace{ \frac{1}{n} }_{ \to 0 } \cdot \underbrace{ \frac{2+\frac{4}{n}-\frac{32}{n^{2}}-\frac{64}{n^{3}}}{1+\frac{2}{n^{3}}+\frac{1}{n^{4}}} }_{ \to 2 } = 0 \\
\implies \boxed{\lim_{ n \to \infty } b_{n} = e^{0} = 1} \\
}
$$
# 1c
$$
\displaylines{
c_{n} = \left( \frac{n^{5}-1}{n^{5}+2n} \right)^{n^{5}+3} \\
\text{Find } \lim_{ n \to \infty } c_{n} \\
\\
\text{Solution:} \\
c_{n} = \left( \frac{n^{5} + 2n - 2n - 1}{n^{5}+2n} \right)^{n^{5}+3} = \left( 1 - \frac{2n + 1}{n^{5}+2n} \right)^{n^{5}+3} = \left( \underbrace{ 1 - \frac{2 + \frac{1}{n}}{n^{4}+2} }_{ \to 1 } \right)^{\underbrace{ n^{5}+3 }_{ \to \infty }} \\
\implies \lim_{ n \to \infty } c_{n} = e^{\lim_{ n \to \infty } -(n^{5}+3)(2n+1)/(n^{5}+2n)} \\
\lim_{ n \to \infty } -\frac{(n^{5}+3)(2n+1)}{n^{5}+2n} = -\lim_{ n \to \infty } \frac{2n^{6}+n^{5}+6n+3}{n^{5}+2n} \\
= -\lim_{ n \to \infty } \underbrace{ n }_{ \to \infty } \cdot \underbrace{ \frac{2+\frac{1}{n}+\frac{6}{n^{5}}+\frac{3}{n^{6}}}{1+\frac{2}{n^{4}}} }_{ \to 2 } = -\infty \\
\implies \boxed{\lim_{ n \to \infty } c_{n} = e^{-\infty} = \frac{1}{e^{\infty}} = 0} \\
}
$$
# 1d
$$
\displaylines{
d_{n} = \left( \frac{n+2}{n} \right)^{n\sqrt{ n+1 }} \\
\text{Find } \lim_{ n \to \infty } d_{n} \\
\\
\text{Solution:} \\
d_{n} = \left( \underbrace{ 1 + \frac{2}{n} }_{ \to 1 } \right)^{\underbrace{ n\sqrt{ n+1 } }_{ \to \infty }} \\
\implies \boxed{\lim_{ n \to \infty } d_{n} = e^{\lim_{ n \to \infty } 2\sqrt{ n+1 }} = e^{\infty} = \infty} \\
}
$$
# 1e
$$
\displaylines{
p_{n} = \left( \frac{n\sqrt{ n }}{n^{2}-n+1} \right)^{16n^{2}-16n-3} \\
\text{Find } \lim_{ n \to \infty } p_{n} \\
\\
\text{Solution:} \\
(p_{1})_{n} = \frac{n\sqrt{ n }}{n^{2}-n+1} = \frac{1}{\underbrace{ \sqrt{ n } }_{ \to \infty }-\underbrace{ \frac{1}{\sqrt{ n }} }_{ \to 0 }+\underbrace{ \frac{1}{n\sqrt{ n }} }_{ \to 0 }} \to \frac{1}{\infty} = 0 \\
(p_{2})_{n} = 16n^{2}-16n-3 \to \infty \\
\implies p_{n} = (p_{1})_{n}^{(p_{2})_{n}} \to 0^{\infty} = 0 \\
\implies \boxed{\lim_{ n \to \infty } p_{n} = 0} \\
}
$$
# 1f
$$
\displaylines{
q_{n} = \left( \frac{n^{2}+\ln(n)}{\ln(n)+n} \right)^{\ln(n)} \\
\text{Find } \lim_{ n \to \infty } q_{n} \\
\\
\text{Solution:} \\
(q_{1})_{n} = \frac{n^{2}+\ln(n)}{n+\ln(n)} = \frac{\underbrace{ n }_{ \to \infty }+\underbrace{ \frac{\ln(n)}{n} }_{ \to 0 }}{1+\underbrace{ \frac{\ln(n)}{n} }_{ \to 0 }} \to \frac{\infty}{1} = \infty \\
(q_{2})_{n} = \ln(n) \to \infty \\
q_{n} = (q_{1})_{n}^{(q_{2})_{n}} \to \infty^{\infty} \implies \boxed{\lim_{ n \to \infty } q_{n} = \infty} \\
}
$$
---

# 2
$$
\displaylines{
a_{n} \to 1, b_{n} \to \infty \\
}
$$
## 2a
$$
\displaylines{
\text{Give an example of } a_{n}, b_{n} \text{ such that } a_{n}^{b_{n}} \to 0 \\
\\
\text{Solution:} \\
a_{n} = 1 - \frac{1}{n} \\
b_{n} = n^{2} \\
\lim_{ n \to \infty } a_{n}^{b_{n}} = e^{\lim_{ n \to \infty } b_{n}(a_{n}-1)} = e^{\lim_{ n \to \infty} -n^{2}/n } = e^{-\infty} = 0 \\
\lim_{ n \to \infty } a_{n}^{b_{n}} = 0 \\
}
$$
## 2b
$$
\displaylines{
\text{Give an example of } a_{n}, b_{n} \text{ such that } a_{n}^{b_{n}} \to L, 0 < L < 1 \\
\\
\text{Solution:} \\
a_{n} = 1 - \frac{1}{n} \\
b_{n} = 2n \\
\lim_{ n \to \infty } a_{n}^{b_{n}} = e^{\lim_{ n \to \infty } b_{n}(a_{n}-1)} = e^{\lim_{ n \to \infty } -2n/n} = e^{-2} = \frac{1}{e^{2}} \\
}
$$
## 2c
$$
\displaylines{
\text{Give an example of } a_{n}, b_{n} \text{ such that } a_{n}^{b_{n}} \to 1 \\
\\
\text{Solution:} \\
a_{n} = 1 + \frac{1}{n^{2}} \\
b_{n} = n \\
\lim_{ n \to \infty } a_{n}^{b_{n}} = e^{\lim_{ n \to \infty } b_{n}(a_{n}-1)} = e^{\lim_{ n \to \infty } n/n^{2}} = e^{0} = 1 \\
}
$$
## 2d
$$
\displaylines{
\text{Give an example of } a_{n}, b_{n} \text{ such that } a_{n}^{b_{n}} \to L, L > 1 \\
\\
\text{Solution:} \\
a_{n} = 1 + \frac{1}{n} \\
b_{n} = n \\
\lim_{ n \to \infty } a_{n}^{b_{n}} = e^{\lim_{ n \to \infty } b_{n}(a_{n}-1)} = e^{\lim_{ n \to \infty } n/n} = e \\
}
$$
## 2e
$$
\displaylines{
\text{Give an example of } a_{n}, b_{n} \text{ such that } a_{n}^{b_{n}} \to \infty \\
\\
\text{Solution:} \\
a_{n} = 1 + \frac{1}{n} \\
b_{n} = n^{2} \\
\lim_{ n \to \infty } a_{n}^{b_{n}} = e^{\lim_{ n \to \infty } b_{n}(a_{n}-1)} = e^{\lim_{ n \to \infty } n^{2}/n} = e^{\infty} = \infty \\
}
$$
## 2f
$$
\displaylines{
\text{Give an example of } a_{n}, b_{n} \text{ such that } \not\exists \lim_{ n \to \infty } a_{n}^{b_{n}} \\
\\
\text{Solution:} \\
a_{n} = 1 + \frac{(-1)^{n}}{n} \\
b_{n} = n \\
\lim_{ n \to \infty } a_{n}^{b_{n}} = e^{\lim_{ n \to \infty } b_{n}(a_{n}-1)} = e^{\lim_{ n \to \infty } (-1)^{n}n/n} = e^{\lim_{ n \to \infty } (-1)^{n}} \\
\not\exists \lim_{ n \to \infty } (-1)^{n} \implies \not\exists \lim_{ n \to \infty } a_{n}^{b_{n}} \\
}
$$
---

# 3a
$$
\displaylines{
\text{Prove: } \sum_{n=1}^{\infty} \frac{e^{n}}{n^{6}} \text{ is divergent} \\
\\
\text{Proof:} \\
\frac{e^{n}}{n^{6}} \to \infty \implies \frac{e^{n}}{n^{6}} \not\to 0 \\
\implies \boxed{\sum_{n=1}^{\infty} \frac{e^{n}}{n^{6}} \text{ is divergent}} \\
}
$$
# 3b
$$
\displaylines{
\text{Prove: } \sum_{n=1}^{\infty} \frac{n^{4}-2n+3e}{2n^{4}+12n^{2}-n-\pi} \text{ is divergent} \\
\\
\text{Proof:} \\
a_{n} = \frac{n^{4}-2n+3e}{2n^{4}+12n^{2}-n-\pi} = \frac{1-\frac{2}{n^{3}}+\frac{3e}{n^{4}}}{2+\frac{12}{n^{2}}-\frac{1}{n^{3}}-\frac{\pi}{n^{4}}} \to \frac{1}{2} \\
\implies a_{n} \not\to 0 \implies \boxed{\sum_{n=1}^{\infty} a_{n} \text{ is divergent}} \\
}
$$
# 3c
$$
\displaylines{
\text{Prove: } \sum_{n=1}^{\infty} \frac{n^{4}}{(n+1)\sqrt{ n+2 }\ln(n+3)} \text{ is divergent} \\
\\
\text{Proof:} \\
a_{n} = \frac{n^{4}}{(n+1)\sqrt{ n+2 }\ln(n+3)} = \underbrace{ \frac{n}{n+1} }_{ \to 1 } \cdot \underbrace{ \frac{n^{2}}{\sqrt{ n+2 }} }_{ \to \infty } \cdot \underbrace{ \frac{n}{\ln(n+3)} }_{  \to \infty } \to \infty \\
\implies a_{n} \not\to 0 \implies \boxed{\sum_{n=1}^{\infty} a_{n} \text{ is divergent}} \\ 
}
$$
---

# 4a
$$
\displaylines{
\text{Determine whether } \sum_{n=1}^{\infty} \sqrt{ n+1 }-\sqrt{ n } \text{ is convergent or divergent} \\
\text{And if convergent, find the value of the sum} \\
\\
\text{Solution:} \\
S_{1} = \sqrt{ 2 }-\sqrt{ 1 } \\
S_{2} = \sqrt{ 2 }-\sqrt{ 1 }+\sqrt{ 3 }-\sqrt{ 2 } \\
\dots \\
S_{N} = \sqrt{ 2 }-\sqrt{ 1 }+\sqrt{ 3 }-\sqrt{ 2 }+\dots+\sqrt{ N }-\sqrt{ N-1 }+\sqrt{ N+1 }-\sqrt{ N } \\
\implies S_{N} = \sqrt{ N+1 } - \sqrt{ 1 } \\
\implies S_{n} \to \infty \implies \boxed{\sum_{n=1}^{\infty} \sqrt{ n+1 }-\sqrt{ n } \text{ is divergent}} \\
}
$$
# 4b
$$
\displaylines{
\text{Determine whether } \sum_{n=1}^{\infty} \frac{1}{4n^{2}-1} \text{ is convergent or divergent} \\
\text{And if convergent, find the value of the sum} \\
\\
\text{Solution:} \\
\frac{1}{4n^{2}-1} = \frac{1}{(2n-1)(2n+1)} = \frac{(2n+1) - (2n-1)}{2(2n+1)(2n-1)} = \frac{1}{4n-2} - \frac{1}{4n+2} \\
\implies S_{1} = \frac{1}{4-2} - \frac{1}{4+2} = \frac{1}{2} - \frac{1}{6} \\
S_{2} = \frac{1}{4-2}-\frac{1}{4+2}+\frac{1}{8-2}-\frac{1}{8+2} = \frac{1}{2}-\frac{1}{6}+\frac{1}{6}-\frac{1}{10} \\
\dots \\
S_{N} = \frac{1}{2}-\frac{1}{6}+\frac{1}{6}-\frac{1}{10}+\dots+\frac{1}{4N-6}-\frac{1}{4N-2}+\frac{1}{4N-2}-\frac{1}{4N+2} \\
\implies S_{N} = \frac{1}{2} - \frac{1}{4N+2} \\
S_{n} = \frac{1}{2} - \frac{1}{4n+2} \to \frac{1}{2} \\
\implies \boxed{\sum_{n=1}^{\infty} \frac{1}{4n^{2}-1} = \frac{1}{2}} \\
}
$$
---

# 5a
$$
\displaylines{
\text{Determine whether } \sum_{n=0}^{\infty} \frac{2^{n}+(-3)^{n}}{6^{n}} \text{ is convergent or divergent} \\
\text{And if convergent, find the value of the sum} \\
\\
\text{Solution:} \\
\frac{2^{n}+(-3)^{n}}{6^{n}} = \left( \frac{1}{3} \right)^{n} + \left( -\frac{1}{2} \right)^{n} \\
\implies \sum_{n=0}^{\infty} \frac{2^{n}+(-3)^{n}}{6^{n}} = \underbrace{ \sum_{n=0}^{\infty} \left( \frac{1}{3} \right)^{n} }_{ \frac{1}{3} < 1 } + \underbrace{ \sum_{n=0}^{\infty} \left( -\frac{1}{2} \right)^{n} }_{ -\frac{1}{2} > -1 } = \frac{1}{1-\frac{1}{3}} + \frac{1}{1+\frac{1}{2}} = \frac{3}{2} + \frac{2}{3} = \frac{13}{6} \\
\implies \boxed{\sum_{n=0}^{\infty} \frac{2^{n}+(-3)^{n}}{6^{n}} = \frac{13}{6}} \\
}
$$
# 5b
$$
\displaylines{
\text{Determine whether } \sum_{n=0}^{\infty} \frac{2^{n}-3^{n}}{6^{n}} \text{ is convergent or divergent} \\
\text{And if convergent, find the value of the sum} \\
\\
\text{Solution:} \\
\frac{2^{n}+3^{n}}{6^{n}} = \left( \frac{1}{3} \right)^{n} - \left( \frac{1}{2} \right)^{n} \\
\implies \sum_{n=0}^{\infty} \frac{2^{n}-3^{n}}{6^{n}} = \underbrace{ \sum_{n=0}^{\infty} \left( \frac{1}{3} \right)^{n} }_{ \frac{1}{3} < 1 } - \underbrace{ \sum_{n=0}^{\infty} \left( \frac{1}{2} \right)^{n} }_{ \frac{1}{2} < 1 } = \frac{1}{1-\frac{1}{3}} - \frac{1}{1-\frac{1}{2}} = \frac{3}{2} - 2 = -\frac{1}{2} \\
\implies \boxed{\sum_{n=0}^{\infty} \frac{2^{n}-3^{n}}{6^{n}} = -\frac{1}{2}} \\
}
$$
# 5c
$$
\displaylines{
\text{Determine whether } \sum_{n=1}^{\infty} \frac{2^{n}-3^{n}}{6^{n}} \text{ is convergent or divergent} \\
\text{And if convergent, find the value of the sum} \\
\\
\text{Solution:} \\
\frac{2^{n}+3^{n}}{6^{n}} = \left( \frac{1}{3} \right)^{n} - \left( \frac{1}{2} \right)^{n} \\
\implies \sum_{n=1}^{\infty} \frac{2^{n}+(-3)^{n}}{6^{n}} = \underbrace{ \sum_{n=0}^{\infty} \left( \frac{1}{3} \right)^{n} }_{ \frac{1}{3} < 1 } - \underbrace{ \sum_{n=0}^{\infty} \left( \frac{1}{2} \right)^{n} }_{ \frac{1}{2} < 1 } - \frac{2^{0}-3^{0}}{6^{0}} = \\
= \frac{1}{1-\frac{1}{3}} - \frac{1}{1-\frac{1}{2}} - 0 = \frac{3}{2} - 2 = -\frac{1}{2} \\
\implies \boxed{\sum_{n=1}^{\infty} \frac{2^{n}-3^{n}}{6^{n}} = -\frac{1}{2}} \\
}
$$
# 5d
$$
\displaylines{
\text{Determine whether } \sum_{n=1}^{\infty} \frac{3^{n}+4^{n}}{n^{5}} \text{ is convergent or divergent} \\
\text{And if convergent, find the value of the sum} \\
\\
\text{Solution:} \\
a_{n} = \frac{3^{n} + 4^{n}}{n^{5}} = \underbrace{ \frac{3^{n}}{n^{5}} }_{ \to \infty } + \underbrace{ \frac{4^{n}}{n^{5}} }_{ \to \infty } \to \infty \\
\implies a_{n} \not\to 0 \implies \boxed{\sum_{n=1}^{\infty} a_{n} \text{ is divergent}} \\
}
$$
# 5e
$$
\displaylines{
\text{Determine whether } \sum_{n=0}^{\infty} e^{1-n} \text{ is convergent or divergent} \\
\text{And if convergent, find the value of the sum} \\
\\
\text{Solution:} \\
e^{1-n} = e \cdot \frac{1}{e^{n}} = e \cdot \left( \frac{1}{e} \right)^{n} \\
\implies \sum_{n=0}^{\infty} e^{1-n} = e \cdot \underbrace{ \sum_{n=0}^{\infty} \left( \frac{1}{e} \right)^{n} }_{ \frac{1}{e} < 1 } = e \cdot \frac{1}{1-\frac{1}{e}} = \frac{e^{2}}{e-1} \\
\implies \boxed{\sum_{n=0}^{\infty} e^{1-n} = \frac{e^{2}}{e-1}} \\
}
$$
# 5f
$$
\displaylines{
\text{Determine whether } \sum_{n=0}^{\infty} \left( 1+\frac{1}{n} \right)^{n/e} \text{ is convergent or divergent} \\
\text{And if convergent, find the value of the sum} \\
\\
\text{Solution:} \\
a_{n} = \left( 1+\frac{1}{n} \right)^{n/e} = \left( \left( 1+\frac{1}{n} \right)^{n} \right)^{1/e} \to e^{1/e} \\
\implies a_{n} \not\to 0 \implies \boxed{\sum_{n=1}^{\infty} a_{n} \text{ is divergent}} \\
}
$$
---
