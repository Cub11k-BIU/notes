---
{"publish":true,"created":"20/11/24, 17:11","modified":"2026-03-24T14:59:15.003+02:00","tags":["Academia","Practice","Infi-1"],"cssclasses":""}
---

# Infi-1 4
## Exercise
$$
\displaylines{
\lim_{ n \to \infty } \frac{n}{n^{2} + n - 9} = 0 \\
\left\lvert  \frac{n}{n^{2}+n-9} - 0 \right\rvert \underset{ n > N \geq 3 }{ = } \frac{n}{n^{2}+n-9} \underset{ n > N \geq 9 }{ < } \frac{n}{n^{2}} = \frac{1}{n} < \frac{1}{N} \\
N = max\left( 9, \frac{1}{\varepsilon} \right) \\
\left\lvert  \frac{n}{n^{2}+n-9} - 0 \right\rvert < \frac{1}{N} \underset{ N \geq \frac{1}{\varepsilon} }{ \leq } \frac{1}{\frac{1}{\varepsilon}}  = \varepsilon \\
\forall \varepsilon > 0 \exists N = max\left( 9, \frac{1}{\varepsilon} \right) : \forall n > N : \left\lvert  \frac{n}{n^{2}+n-9} - 0 \right\rvert < \varepsilon \\
}
$$
---
## Exercise
$$
\displaylines{
\text{Prove: } \not\exists \lim_{ n \to \infty } (-1)^{n} \\
\\
\text{If the finite limit exists: } \\
\forall \varepsilon > 0 \exists N : \forall n > N : \lvert (-1)^{n} - L \rvert < \varepsilon \\
\text{Negation: } \\
\exists \varepsilon > 0 : \forall N \exists n > N: \lvert (-1)^{n} - L \rvert \geq \varepsilon \\
\text{Does such $\varepsilon$ exist?} \\
\text{Yes, for example: } \varepsilon = \frac{1}{2} \\
\text{If } L \geq 0 : \\
\forall N \exists n = \lceil 2N \rceil + 1 > N : 1 + L \geq \frac{1}{2} \\
\text{If } L < 0 : \\
\forall N \exists n = \lceil 2N \rceil + 2 > N : 1 - L \geq \frac{1}{2} \\
sup((-1)^{n}) = 1 \implies \lim_{ n \to \infty } (-1)^{n} \neq \infty \\
inf((-1)^{n}) = -1 \implies \lim_{ n \to \infty } (-1)^{n} \neq -\infty \\
\text{Therefore, } \not\exists \lim_{ n \to \infty } (-1)^{n} \\
}
$$
---
## Exercise
$$
\displaylines{
\lim_{ n \to \infty } a_{n} = L < 1 \\
\text{Prove: } \exists 0 < q < 1 : \exists N : \forall n > N : a_{n} < q \\
\\
\text{Let } L < 0, \varepsilon = \frac{1}{2} > 0 \\
\exists N : \forall n > N: \lvert a_{n} - L \rvert < \frac{1}{2} \\
\exists N : \forall n > N: a_{n} < L + \frac{1}{2} \underset{ L < 0 }{ < } \frac{1}{2} = q < 1 \\
\implies \boxed{\exists 0 < q =  \frac{1}{2} < 1 : \exists N : \forall n > N: a_{n} < q} \\
\\
\\
\text{Let } L \geq 0, \varepsilon = \frac{1-L}{2} \underset{ L < 1 }{ > } 0 \\
\exists N : \forall n > N : \lvert a_{n} - L \rvert < \frac{1-L}{2} \\
L - \frac{1-L}{2} < a_{n} < L + \frac{1-L}{2} \\
\text{Let } q = L + \frac{1-L}{2} = \frac{L+1}{2} \underset{ \frac{1-L}{2} < (1-L) }{ < } 1 \\
\exists N : \forall n > N : \frac{L-1}{2} < a_{n} < q < 1 \\
L \geq 0 \implies q = \frac{L+1}{2} \geq \frac{1}{2} > 0 \\
\implies \boxed{\exists 0 < q =  \frac{L+1}{2} < 1 : \exists N : \forall n > N: a_{n} < q} \\
}
$$
---
## Exercise
$$
\displaylines{
\text{Prove or disprove: } \lim_{ n \to \infty } a_{n}+b_{n} = L \implies a_{n}, b_{n} \text{ converges} \\
\text{Disproof: } \\
a_{n} = (-1)^{n} \implies \not\exists \lim_{ n \to \infty } a_{n} \\
b_{n} = -(-1)^{n} \implies \not\exists \lim_{ n \to \infty } b_{n} \\
a_{n} + b_{n} = (-1)^{n} - (-1)^{n} = 0 \implies \lim_{ n \to \infty } a_{n}+b_{n} = 0 \\
\\
\\
\text{Prove or disprove: } \lim_{ n \to \infty } a_{n}+b_{n} = L, a_{n} \text{ diverges} \implies b_{n} \text{ diverges} \\
\text{Proof: } \\
\text{Let } \lim_{ n \to \infty } b_{n} = L_{b} \\
\implies \lim_{ n \to \infty } a_{n} = \lim_{ n \to \infty } a_{n}+b_{n}-b_{n} = \lim_{ n \to \infty } a_{n}+b_{n} - \lim_{ n \to \infty } b_{n} = L - L_{b} \\
\implies \lim_{ n \to \infty } a_{n} = L - L_{b} = L_{a} \\
\text{But } a_{n} \text{ diverges} \implies \text{Contradiction!} \\
\implies b_{n} \text{ diverges} \\
}
$$
---
## Exercise
$$
\displaylines{
\lim_{ n \to \infty } n(\sqrt{ n^{2}+1 } - n) = \lim_{ n \to \infty } n(\sqrt{ n^{2}+1 } - n) \cdot \frac{\sqrt{ n^{2}+1 }+n}{\sqrt{ n^{2}+1 }+n} = \\
= \lim_{ n \to \infty } n\frac{n^{2}+1-n^{2}}{\sqrt{ n^{2}+1 }+n} = \frac{n}{\sqrt{ n^{2}+1 }+n} = \lim_{ n \to \infty } \frac{n}{n\left( \sqrt{ 1+\frac{1}{n^{2}} }+1 \right)} = \\
= \lim_{ n \to \infty } \frac{1}{\sqrt{ 1+\frac{1}{n^{2}} }+1} \\
\lim_{ n \to \infty } \frac{1}{n^{2}} = 0 \implies \lim_{ n \to \infty } \sqrt{ 1 + \frac{1}{n^{2}} } = \sqrt{ 1 } \implies \lim_{ n \to \infty } \frac{1}{\sqrt{ 1 } + 1} = \frac{1}{2} \\
}
$$
---
## Exercise
$$
\displaylines{
\text{Prove or disprove: } \lim_{ n \to \infty } a_{n}b_{n} = L \implies \lim_{ n \to \infty } a_{n}, b_{n} \text{ converge} \\
\text{Disproof: } \\
a_{n} = b_{n} = (-1)^{n} \\
\lim_{ n \to \infty } a_{n}b_{n} = (-1)^{2n} = 1 \\
\text{But } a_{n}, b_{n} \text{ diverge} \\
\\
\\
\text{Prove or disprove: } \lim_{ n \to \infty } a_{n}b_{n} = L, a_{n} \text{ diverges} \implies b_{n} \text{ diverges} \\
\text{Disproof: } \\
a_{n} = (-1)^{n}, b_{n} = 0 \\
\lim_{ n \to \infty } a_{n}b_{n} = (-1)^{n}\cdot 0 = 0 \\
a_{n} \text{ diverges, but } b_{n} \text{ converges} \\
\\
\\
\text{Prove or disprove: } \lim_{ n \to \infty } a_{n}b_{n} = L, \lim_{ n \to \infty } b_{n} \neq 0, a_{n} \text{ diverges} \implies b_{n} \text{ diverges} \\
\text{Proof: } \\
\text{Let } \lim_{ n \to \infty } b_{n} = L_{b} \\
\implies \lim_{ n \to \infty } a_{n} = \lim_{ n \to \infty } \frac{a_{n}b_{n}}{b_{n}} = \frac{\lim_{ n \to \infty } a_{n}b_{n}}{\lim_{ n \to \infty } b_{n}} = \frac{L}{l_{b}} \\
\implies \lim_{ n \to \infty } a_{n} = \frac{L}{L_{b}} = L_{a} \\
\text{But } a_{n} \text{ diverges} \implies \text{Contradiction!} \\
\implies b_{n} \text{ diverges} \\
}
$$
---
## Exercise
$$
\displaylines{
\lim_{ n \to \infty } \frac{n^{3}-6n^{2}+5n+1}{3n^{3}+2n^{2}-1} = \lim_{ n \to \infty } \frac{n^{3}\left( 1-\frac{6}{n}+\frac{5}{n^{2}}+\frac{1}{n^{3}} \right)}{n^{3}\left( 3+\frac{2}{n}-\frac{1}{n^{3}} \right)} = \\
= \lim_{ n \to \infty } \frac{1 - \overset{ \to 0 }{ \frac{6}{n} } + \overset{ \to 0 }{ \frac{5}{n^{2}} } + \overset{ \to 0 }{ \frac{1}{n^{3}} }}{3+\underset{ \to 0 }{ \frac{2}{n} } - \underset{ \to 0 }{ \frac{1}{n^{3}} }} = \frac{1}{3} \\
}
$$
---
