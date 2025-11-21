---
{"publish":true,"created":"06/01/25, 16:01","modified":"2025-11-21T21:10:02.323+02:00","tags":["Academia","Assignment","Infi-1"],"cssclasses":""}
---

# 1
$$
\displaylines{
\sum_{n=1}^{\infty} \frac{n^{4}-n^{2}+6}{2n^{3}-n+4} \\
\text{Determine whether series converge or diverge} \\
\\
\text{Solution:} \\
a_{n} = \frac{n^{4}-n^{2}+6}{2n^{3}-n+4} = \frac{n-\overbrace{ \frac{1}{n} }^{ \to 0 }+\overbrace{ \frac{6}{n^{3}} }^{ \to 0 }}{2-\underbrace{ \frac{1}{n^{2}} }_{ \to 0 }+\underbrace{ \frac{4}{n^{3}} }_{ \to 0 }} \\
\implies \lim_{ n \to \infty } a_{n} = \lim_{ n \to \infty } \frac{n}{2} = \infty \neq 0 \\
\implies \boxed{\sum_{n=1}^{\infty} a_{n} \text{ diverge}} \\
}
$$
# 2
$$
\displaylines{
\sum_{n=1}^{\infty} \frac{4}{n \cdot 2^{\ln n}} \\
\text{Determine whether series converge or diverge} \\
\\
\text{Solution:} \\
2^{\ln n} = e^{\ln(2) \cdot \ln n} = e^{\ln n \cdot \ln(2)} = n^{\ln(2)} \\
\implies \sum_{n=1}^{\infty} \frac{4}{n \cdot 2^{\ln n}} = 4 \sum_{n=1}^{\infty} \frac{1}{n^{1+\ln(2)}} \\
1 + \ln(2) > 1 \implies \sum_{n=1}^{\infty} \frac{1}{n^{1+\ln(2)}} \text{ converge} \\
\implies \boxed{\sum_{n=1}^{\infty} \frac{4}{n \cdot 2^{\ln n}} \text{ converge}} \\
}
$$
# 3
$$
\displaylines{
\sum_{n=1}^{\infty} \frac{5n^{6}}{2^{n}} \\
\text{Determine whether series converge or diverge} \\
\\
\text{Solution:} \\
\sqrt[n]{ \frac{5n^{6}}{2^{n}} } = \frac{\sqrt[n]{ 5n^{6} }}{2} = \frac{\underbrace{ \sqrt[n]{ 5 } }_{ \to 1 } (\underbrace{ \sqrt[n]{ n } }_{ \to 1 })^{6}}{2} \to \frac{1 \cdot 1^{6}}{2} = \frac{1}{2} < 1 \\
\implies \text{By the root test, } \boxed{\sum_{n=1}^{\infty} \frac{5n^{6}}{2^{n}} \text{ converge}} \\
}
$$
# 4
$$
\displaylines{
\sum_{n=2}^{\infty} \frac{\sin^{4}\left( \frac{n\pi}{7} \right) + \cos^{2}\left( \frac{2n\pi}{9} \right)}{n^{2}-n} \\
\text{Determine whether series converge or diverge} \\
\\
\text{Solution:} \\
\frac{\sin^{4}\left( \frac{n\pi}{7} \right) + \cos^{2}\left( \frac{2n\pi}{9} \right)}{n^{2}-n} \leq \frac{1+1}{n^{2}-n} = \frac{2}{n^{2}-n} \\
\text{Let } a_{n} = \frac{2}{n^{2}-n} \geq 0 \\
\text{Let } b_{n} = \frac{1}{n^{2}} \geq 0 \\
\frac{a_{n}}{b_{n}} = \frac{\frac{1}{n^{2}-n}}{\frac{1}{n^{2}}} = \frac{n^{2}}{n^{2}-n} = \frac{1}{1 - \frac{1}{n}} \to 1 \\
\lim_{ n \to \infty } \frac{a_{n}}{b_{n}} = 1 > 0 \\
\implies \text{By the limit comparison test: } \sum_{n=1}^{\infty} a_{n} \text{ converge} \iff \sum_{n=1}^{\infty} b_{n} \text{ converge} \\
\sum_{n=1}^{\infty} b_{n} = \sum_{n=1}^{\infty} \frac{1}{n^{2}} \text{converge} \\
\implies \sum_{n=1}^{\infty} a_{n} = \sum_{n=1}^{\infty} \frac{2}{n^{2}-n} \text{ converge} \implies \sum_{n=2}^{\infty} \frac{2}{n^{2}-n} \text{ converge} \\
\frac{\sin^{4}\left( \frac{n\pi}{7} \right) + \cos^{2}\left( \frac{2n\pi}{9} \right)}{n^{2}-n} \leq \frac{2}{n^{2}-n} \\
\implies \text{By the direct comparison test: } \\
\sum_{n=2}^{\infty} \frac{2}{n^{2}-n} \text{ converge} \implies \boxed{\sum_{n=2}^{\infty} \frac{\sin^{4}\left( \frac{n\pi}{7} \right) + \cos^{2}\left( \frac{2n\pi}{9} \right)}{n^{2}-n} \text{ converge}} \\
}
$$
# 5
$$
\displaylines{
\sum_{n=1}^{\infty} \frac{1}{(\ln(n+3))^{n}} \\
\text{Determine whether series converge or diverge} \\
\\
\text{Solution:} \\
\text{Let } a_{n} = \frac{1}{(\ln(n+3))^{n}} \\
\lim_{ n \to \infty } \sqrt[n]{ \lvert a_{n} \rvert  } = \lim_{ n \to \infty } \sqrt[n]{ \frac{1}{(\ln(n+3))^{n}} } = \lim_{ n \to \infty } \frac{1}{\ln(n+3)} = 0 \\
\lim_{ n \to \infty } \sqrt[n]{ \lvert a_{n} \rvert  } = 0 < 1 \\
\implies \text{By the root test: } \boxed{\sum_{n=1}^{\infty} \frac{1}{(\ln(n+3))^{n}} \text{ converge}} \\
}
$$
# 6
$$
\displaylines{
\sum_{n=1}^{\infty} \frac{2n+5}{(n+2)^{2}(6n-5)^{3}} \\
\text{Determine whether series converge or diverge} \\
\\
\text{Solution:} \\
\text{Let } a_{n} = \frac{2n+5}{(n+2)^{2}(6n-5)^{3}} \\
\text{Let } b_{n} = \frac{1}{n^{4}} \\
\frac{a_{n}}{b_{n}} = \frac{(2n+5)n^{4}}{(n+2)^{2}(6n-5)^{3}} = \frac{n^{5}\left(  2+\frac{5}{n} \right)}{n^{2}\left( 1+\frac{2}{n} \right)^{2}n^{3}\left( 6-\frac{5}{n} \right)^{3}} = \frac{2+\frac{5}{n}}{\left( 1+\frac{2}{n} \right)^{2}\left( 6-\frac{5}{n} \right)^{3}} \to \frac{2}{6^{3}} = \frac{1}{108} \\
\implies \lim_{ n \to \infty } \frac{a_{n}}{b_{n}} = \frac{1}{108} < 1 \\
\sum_{n=1}^{\infty} b_{n} = \sum_{n=1}^{\infty} \frac{1}{n^{4}} \text{ converge} \\
\implies \text{By the limit comparison test: } \boxed{\sum_{n=1}^{\infty} \frac{2n+5}{(n+2)^{2}(6n-5)^{3}} \text{ converge}} \\
}
$$
# 7
$$
\displaylines{
\sum_{n=1}^{\infty} \frac{1}{n(\ln n)^{2}} \\
\text{Determine whether series converge or diverge} \\
\\
\text{Solution:} \\
\text{Let } a_{n} = \frac{1}{n(\ln n)^{2}} \\
a_{2^{n}} = \frac{1}{2^{n}(\ln(2^{n}))^{2}} = \frac{1}{2^{n}(n\ln(2))^{2}} = \frac{1}{2^{n}n^{2}(\ln(2))^{2}} \\
\sum_{n=1}^{\infty} \frac{2^{n}}{2^{n}n^{2}(\ln(2))^{2}} = \frac{1}{(\ln(2))^{2}}\sum_{n=1}^{\infty} \frac{1}{n^{2}} \\
\sum_{n=1}^{\infty} \frac{1}{n^{2}} \text{ converge} \implies \sum_{n=1}^{\infty} 2^{n}a_{2^{n}} \text{ converge} \\
a_{n} \geq 0 \\
n \text{ is monotonically increasing} \\
(\ln n)^{2} \text{ is monotonically increasing} \\
\implies n(\ln n)^{2} \text{ is monotonically increasing} \\
\implies a_{n} \text{ is monotonically decreasing} \\
\implies \text{By the condensation test: } \sum_{n=1}^{\infty} a_{n} \text{ converge} \\
\implies \boxed{\sum_{n=1}^{\infty} \frac{1}{n(\ln n)^{2}} \text{ converge}} \\
}
$$
# 8
$$
\displaylines{
\sum_{n=1}^{\infty} \frac{n^{6}}{3^{n^{2}}} \\
\text{Determine whether series converge or diverge} \\
\\
\text{Solution:} \\
\text{Let } a_{n} = \frac{n^{6}}{3^{n^{2}}} \\
\lim_{ n \to \infty } \sqrt[n]{ \lvert a_{n} \rvert  } = \lim_{ n \to \infty } \sqrt[n]{ \frac{n^{6}}{3^{n^{2}}} } = \lim_{ n \to \infty } \frac{(\overbrace{ \sqrt[n]{ n } }^{ \to 1 })^{6}}{\underbrace{ 3^{n} }_{ \to \infty }} = 0 \\
\lim_{ n \to \infty } \sqrt[n]{ a_{n} } = 0 < 1 \\
\implies \text{By the root test: } \boxed{\sum_{n=1}^{\infty} \frac{n^{6}}{3^{n^{2}}} \text{ converge}} \\
}
$$
# 9
$$
\displaylines{
\sum_{n=1}^{\infty} \frac{1-\sin^{2}(n^{6}+n^{4}+n^{2}+1)}{n\sqrt{ n }} \\
\text{Determine whether series converge or diverge} \\
\\
\text{Solution:} \\
0 \leq \sin^{2}(n^{6}+n^{4}+n^{2}+1) \leq 1 \\
\implies 0 \leq 1 - \sin^{2}(n^{6}+n^{4}+n^{2}+1) \leq 1 \\
\implies 0 \leq \frac{1-\sin^{2}(n^{6}+n^{4}+n^{2}+1)}{n\sqrt{ n }} \leq \frac{1}{n\sqrt{ n }} \\
\sum_{n=1}^{\infty} \frac{1}{n\sqrt{ n }} = \sum_{n=1}^{\infty} \frac{1}{n^{3/2}} \text{ converge} \\
\implies \text{By the direct comparison test: } \boxed{\sum_{n=1}^{\infty} \frac{1-\sin^{2}(n^{6}+n^{4}+n^{2}+1)}{n\sqrt{ n }} \text{ converge}} \\
}
$$
# 10
$$
\displaylines{
\sum_{n=1}^{\infty} \frac{8^{n} \cdot n!}{n^{n}} \\
\text{Determine whether series converge or diverge} \\
\\
\text{Solution:} \\
\text{Let } a_{n} = \frac{8^{n} \cdot n!}{n^{n}} \\
\frac{a_{n+1}}{a_{n}} = \frac{8^{n+1} \cdot (n+1)! \cdot n^{n}}{(n+1)^{n+1} \cdot 8^{n} \cdot n!} = 8(n+1) \cdot \frac{n^{n}}{(n+1)^{n+1}} = 8 \left( \frac{n}{n+1} \right)^{n} = \\
= \frac{8}{\left( \frac{n+1}{n} \right)^{n}} = \frac{8}{\left( 1+\frac{1}{n} \right)^{n}} \to \frac{8}{e} \\
\lim_{ n \to \infty } \frac{a_{n+1}}{a_{n}} = \frac{8}{e} > 1 \\
\implies \text{By the ratio test: } \boxed{\sum_{n=1}^{\infty} \frac{8^{n} \cdot n!}{n^{n}} \text{ diverge}} \\
}
$$
# 11
$$
\displaylines{
\sum_{n=1}^{\infty} \frac{(1+\sqrt{ 2 })(1+\sqrt{ 3 })\dots(1+\sqrt{ n })}{n!} \\
\text{Determine whether series converge or diverge} \\
\\
\text{Solution:} \\
\text{Let } a_{n} = \frac{(1+\sqrt{ 2 })(1+\sqrt{ 3 })\dots(1+\sqrt{ n })}{n!} \\
\frac{a_{n+1}}{a_{n}} = \frac{(1+\sqrt{ 2 })(1+\sqrt{ 3 })\dots(1+\sqrt{ n+1 }) \cdot n!}{(n+1)! \cdot (1+\sqrt{ 2 })(1+\sqrt{ 3 })\dots(1+\sqrt{ n })} = \frac{1+\sqrt{ n+1 }}{n+1} = \\
= \frac{\frac{1}{n} + \sqrt{ \frac{1}{n}+\frac{1}{n^{2}} }}{1+\frac{1}{n}} \to \frac{0}{1} = 0 \\
\lim_{ n \to \infty } \frac{a_{n+1}}{a_{n}} = 0 < 1 \\
\implies \text{By the ratio test: } \boxed{\sum_{n=1}^{\infty} \frac{(1+\sqrt{ 2 })(1+\sqrt{ 3 })\dots(1+\sqrt{ n })}{n!} \text{ converge}} \\
}
$$
# 12
$$
\displaylines{
\sum_{n=1}^{\infty} \frac{n^{2}+\sqrt{ n^{2}+n }+\sqrt{ n^{5}-n }}{\sqrt[3]{ n^{8}-5 }\sqrt{ n^{4}+n+1 }} \\
\text{Determine whether series converge or diverge} \\
\\
\text{Solution:} \\
\text{Let } a_{n} = \frac{n^{2}+\sqrt{ n^{2}+n }+\sqrt{ n^{5}-n }}{\sqrt[3]{ n^{8}-5 }\sqrt{ n^{4}+n+1 }} \\
\text{Dominant exponents are: } \frac{5}{2} - \frac{14}{3} = \frac{15-28}{6} = -\frac{13}{6} \\
\text{Let } b_{n} = \frac{1}{\sqrt[6]{ n^{13} }} \\
\frac{a_{n}}{b_{n}} = \frac{(n^{2}+\sqrt{ n^{2}+n }+\sqrt{ n^{5}-n })\sqrt[6]{ n^{13} }}{\sqrt[3]{ n^{8}-5 }\sqrt{ n^{4}+n+1 }} = \\
= \frac{n^{25/6} + \sqrt{ n^{38/6}+n^{32/6} } + \sqrt{ n^{56/6}-n^{32/6} }}{\sqrt[3]{ n^{8}-5 }\sqrt{ n^{4}+n+1 }} = \frac{\frac{n^{25/6}}{n^{28/6}} + \frac{\sqrt{ n^{38/6}+n^{32/6} }}{n^{28/6}} + \frac{\sqrt{ n^{56/6}-n^{32/6} }}{n^{28/6}}}{\frac{\sqrt[3]{ n^{8}-5 }}{n^{16/6}} \frac{\sqrt{ n^{4}+n+1 }}{n^{2}}} = \\
= \frac{\overbrace{ \frac{1}{\sqrt{ n }} }^{ \to 0 }+\overbrace{ \sqrt{ \frac{1}{n^{3}} + \frac{1}{n^{4}} } }^{ \to 0 } + \overbrace{ \sqrt{ 1 - \frac{1}{n^{4}} } }^{ \to 0 }}{\underbrace{ \sqrt[3]{ 1-\frac{5}{n^{8}} } }_{ \to \sqrt{ 1 }=1 }\underbrace{ \sqrt{ 1+\frac{1}{n^{3}}+\frac{1}{n^{4}} } }_{ \to \sqrt{ 1 }=1 }} \to \frac{0}{1 \cdot 1} = 0 \\
\lim_{ n \to \infty } \frac{a_{n}}{b_{n}} = 0 < 1 \\
\sum_{n=1}^{\infty} b_{n} = \sum_{n=1}^{\infty} \frac{1}{n^{13/6}} \text{ converge} \\
\implies \text{By the limit comparison test: } \boxed{\sum_{n=1}^{\infty} \frac{n^{2}+\sqrt{ n^{2}+n }+\sqrt{ n^{5}-n }}{\sqrt[3]{ n^{8}-5 }\sqrt{ n^{4}+n+1 }} \text{ converge}} \\
}
$$
---
