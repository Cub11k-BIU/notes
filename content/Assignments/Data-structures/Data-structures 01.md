---
{"publish":true,"created":"22/03/25, 12:03","modified":"2025-11-21T21:10:01.938+02:00","tags":["Academia","Assignment","Data-structures"],"cssclasses":""}
---

# 1a
$$
\displaylines{
\text{Prove or disprove: } 2^{\sqrt{ \log n }} \in \Theta(n) \\
\\
\text{Disproof:} \\
\text{Let } 2^{\sqrt{ \log n }} \in \Omega(n) \\
\implies \exists c > 0, n_{0} \geq 0: \forall n > n_{0}: 2^{\sqrt{ \log n }} \geq cn \\
2^{\sqrt{ \log n }} \geq cn \implies \sqrt{ \log n } \geq \log(cn) \implies \log n \geq (\log c + \log n)^{2} \\
\text{Let } t = \log n \\
\implies t \geq \log^{2}c + 2\log(c)t + t^{2} \\
\implies t^{2} + (2\log c - 1)t + \log^{2}c \leq 0 \\
D = (2\log c-1)^{2} - 4\log^{2}c = 1 - 4\log c \\
1 - 4\log c < 0 \implies D < 0 \implies \forall t: t^{2} + (2\log c - 1)t + \log^{2}c > 0 \\
\implies \boxed{ \forall n: 2^{\sqrt{ \log n }} < cn - \text{ Contradiction!} } \\
\implies 1 - 4\log c \geq 0 \\
\implies t_{1, 2} = \frac{(2\log c - 1) \pm \sqrt{ 1-4\log c }}{2} \\
\text{Let } t_{0} = \max\left\{\frac{(2\log c - 1) \pm \sqrt{ 1-4\log c }}{2}, 0\right\} \\
\forall t > t_{0}: t^{2} + (2\log c - 1)t + \log^{2}c > 0 \implies 2^{\sqrt{ \log n }} < cn \\
t > t_{0} \iff n > 2^{t_{0}} \implies \boxed{ \forall n > \max\{n_{0}, 2^{t_{0}}\}: 2^{\sqrt{ \log n }} < cn - \text{Contradiction!} } \\
\implies 2^{\sqrt{ \log n }} \not\in \Omega(n) \implies \boxed{ 2^{\sqrt{ \log n }} \not\in \Theta(n) } \\
}
$$
$$
\displaylines{
\text{Alternative disproof:} \\
\lim_{ n \to \infty } \frac{2^{\sqrt{ \log n }}}{n} = \lim_{ n \to \infty } 2^{\sqrt{ \log n } - \log n} = 2^{\lim_{ n \to \infty } \sqrt{ \log n } - \log n} \\
\lim_{ n \to \infty } \sqrt{ \log n } - \log n = \lim_{ n \to \infty } \underbrace{ \sqrt{ \log n } }_{ \infty }\underbrace{ (1 - \sqrt{ \log n }) }_{ \to -\infty } = -\infty \\
\implies \lim_{ n \to \infty } \frac{2^{\sqrt{ \log n }}}{n} = 2^{-\infty} = 0 \\
\implies 2^{\sqrt{ \log n }} \in o(n) \\
\text{Let } 2^{\sqrt{ \log n }} \in \Omega(n) \\
\implies \exists c > 0, n_{0} \geq 0: \forall n > n_{0}: 2^{\sqrt{ \log n }} \geq cn \\
2^{\sqrt{ \log n }} \in o(n) \implies \exists n_{1}: \forall n > n_{1}: 2^{\sqrt{ \log n }} < cn \\
\implies \forall n > \max\{n_{0}, n_{1}\}: 2^{\sqrt{ \log n }} < cn - \text{Contradiction!} \\

\implies 2^{\sqrt{ \log n }} \not\in \Omega(n) \implies \boxed{ 2^{\sqrt{ \log n }} \not\in \Theta(n) } \\
}
$$
# 1b
$$
\displaylines{
\text{Prove or disprove: } n^{4 + \cos(n)} \in \Omega(n^{6}) \\
\\
\text{Disproof:} \\
-1 \leq \cos(n) \leq 1 \\
\implies \frac{n^{3}}{n^{6}} \leq \frac{n^{4+\cos n}}{n^{6}} \leq \frac{n^{5}}{n^{6}} \\
\implies \frac{1}{n^{3}} \leq \frac{n^{4+\cos n}}{n^{6}} \leq \frac{1}{n} \\
\frac{1}{n^{3}} \to 0, \frac{1}{n} \to 0 \implies \frac{n^{4+\cos(n)}}{n^{6}} \to 0 \\
\implies n^{4+\cos(n)} \in o(n^{6}) \\
\text{Let } n^{4+\cos(n)} \in \Omega(n^{6}) \\
\implies \exists c > 0, n_{0} \geq 0: \forall n > n_{0}: n^{4+\cos(n)} \geq cn^{6} \\
n^{4+\cos(n)} \in o(n^{6}) \implies \exists n_{1}: \forall n > n_{1}: n^{4+\cos(n)} < cn^{6} \\
\implies \forall n > \max\{n_{0}, n_{1}\}: n^{4+\cos(n)} < cn^{6} - \text{Contradiction!} \\
\implies \boxed{ n^{4+\cos(n)} \not\in \Omega(n^{6}) } \\
}
$$
# 1c
$$
\displaylines{
\text{Prove or disprove: } \frac{n}{2}\log\left( \frac{n}{2} \right) \in O(n^{2}) \\
\\
\text{Proof:} \\
\text{Let } c = 1, n_{0} = 1 \\
\frac{n}{2}\log\left( \frac{n}{2} \right) = \frac{1}{2}(n\log n - n) \leq n\log n - n \leq n\log n \leq n^{2} \\
\implies \boxed{ \frac{n}{2}\log\left( \frac{n}{2} \right) \in O(n^{2}) } \\
}
$$
# 2a
$$
\displaylines{
\text{Calculate } \Theta \text{ of } T(n) = 3T(n-4) + 2 \\
\\
\text{Solution:} \\
\text{Let } T(0) = T(1) = T(2) = T(3) = 2 \\
T(n) = 3T(n-4) + 2 = 3^{2}T(n - 4 \cdot 2) + 2(1 + 3) = \dots = 3^{k}T(n-4k) + 2 \sum_{i=0}^{k-1} 3^{i} \\
n - 4k = 0 \implies k = \frac{n}{4} \\
\implies T(n) = 3^{n/4}T(0) + 2 \sum_{i=0}^{n/4-1} 3^{i} = 2 \cdot 3^{n/4} + \frac{2(3^{n/4}-1)}{3-1} = 3 \cdot 3^{n/4} - 1 \\
\\
\text{Base case. } T(0) = T(1) = T(2) = T(3) = 2 = 3 \cdot 3^{0} - 1 \\
\text{Strong induction step. Let } \forall 4 \leq n' < n: T(n') = 3 \cdot 3^{n'/4} - 1 \\
T(n) = 3T(n - 4) + 2 = 3 \cdot (3 \cdot 3^{(n-4)/4} - 1) + 2 = 3 \cdot 3^{n/4} - 1 \\
\implies \text{By strong induction: } \forall n \in \mathbb{N}_{0} : T(n) = 3 \cdot 3^{n/4} - 1 \\
n \geq 4 \implies 2 \cdot 3^{n/4} \leq T(n) \leq 3 \cdot 3^{n/4} \\
\implies \boxed{ T(n) = \Theta(3^{n/4}) } \\
}
$$
# 2b
$$
\displaylines{
\text{Calculate } \Theta \text{ of } T(n) = 7T\left( \frac{n}{2} \right) + n^{3} \\
\\
\text{Solution:} \\
\log_{2} 7 < \log_{2} 8 = 3 \\
\text{Let } \varepsilon = \frac{3 - \log_{2} 7}{2} \\
\implies \log_{2} 7 + \varepsilon < 3 \implies n^{\log_{2} 7 + \varepsilon} < n^{3} \implies n^{3} \in \Omega(n^{\log_{2} 7 + \varepsilon}) \\
\implies \text{By master theorem: } \boxed{ T(n) = \Theta(n^{3}) } \\
}
$$
# 2c
$$
\displaylines{
\text{Calculate } \Theta \text{ of } T(n) = 2T\left( \frac{n}{4} \right) + T\left( \frac{n}{2} \right) + 5n \\
\\
\text{Solution:} \\
\text{We'll try to prove that } T(n) = \Theta(n \log n) \\
\\
\text{Base case. } T(2) = 10 = \Theta(1) = \Theta(2\log(2)) \\
T(3) = 15 = \Theta(1) = \Theta(3\log(3)) \\
\text{Strong induction step. Let } \forall 2 \leq n' < n: T(n') = \Theta(n'\log n') \\
\implies \exists 0 < c_{1} \leq c_{2}, n_{0} \geq 0: \forall n' > n_{0}: c_{1}n'\log n' \leq T(n') \leq c_{2}n'\log n' \\
\forall n > n_{1}: c_{1}\frac{n}{4}\log \frac{n}{4} \leq T\left( \frac{n}{4} \right) \leq c_{2}\frac{n}{4}\log \frac{n}{4} \\
\forall n > n_{2}: c_{1}'\frac{n}{2}\log \frac{n}{2} \leq T\left( \frac{n}{2} \right) \leq c_{2}'\frac{n}{2}\log \frac{n}{2} \\
\text{Let } n > \max\{n_{1}, n_{2}, 4\} \\
T(n) = 2T\left( \frac{n}{4} \right) + T\left( \frac{n}{2} \right) + 5n \\
T(n) \leq 2c_{2} \frac{n}{4}\log\left( \frac{n}{4} \right) + c'_{2} \frac{n}{2}\log\left( \frac{n}{2} \right) + 5n = \\
= \frac{c_{2}}{2}n\log n - c_{2}n + \frac{c'_{2}}{2}n\log n - \frac{c'_{2}}{2}n + 5n \leq \\
\leq \frac{c_{2}+c_{2}'}{2}n\log n + 5n \underset{ n \geq 2 }{ \leq } \left( \frac{c_{2}+c'2}{2} + 5 \right)n\log n \\
\implies T(n) = O(n\log n) \\
\\
T(n) \geq 2c_{1} \frac{n}{4}\log\left( \frac{n}{4} \right) + c'_{1} \frac{n}{2}\log\left( \frac{n}{2} \right) + 5n = \\
= \frac{c_{1}}{2}n\log n - c_{1}n + \frac{c'_{1}}{2}n\log n - \frac{c'_{1}}{2}n + 5n \geq \\
\underset{ n \geq 4 }{ \geq } \frac{c_{1}}{2}n\log n - \frac{c_{1}}{2}n\log n + \frac{c'_{1}}{2}n\log n - \frac{c'_{1}}{4}n\log n + 5n = \\
= \frac{c_{1}'}{4} n\log n + 5n \geq \frac{c_{1}'}{4}n\log n \\
\implies T(n) = \Omega(n\log n) \implies T(n) = \Theta(n\log n) \\
\implies \text{By strong induction: } \forall n \geq 2: \boxed{ T(n) = \Theta(n\log n) } \\
}
$$
# 2d
$$
\displaylines{
\text{Calculate } \Theta \text{ of } T(n) = 4T(\sqrt{ n }) + \log^{2}n \\
\\
\text{Solution:} \\
\text{Let } m = \log n \implies n = 2^{m} \\
\implies \sqrt{ n } = 2^{m/2} \\
\text{Let } S(m) = T(n) = T(2^{m}) \\
\implies S(m) = 4T(2^{m/2}) + m^{2} = 4S\left( \frac{m}{2} \right) + m^{2} \\
m^{2} \in \Theta(m^{\log_{2}4}) = \Theta(m^{2}) \\
\implies \text{By master theorem: } S(m) \in \Theta(m^{2}\log m) \\
\implies \boxed{ T(n) = \Theta(\log^{2}n \cdot \log \log n) } \\
}
$$
# 2e
$$
\displaylines{
\text{Let } a, b > 0, a + b < 1 \\
\text{Let } T(n) = T(an) + T(bn) + n \\
\text{Prove: } T(n) = O(n) \\
\\
\text{Proof:} \\
\text{Base case. } T(1) = 1 = O(1) \\
\text{Strong induction step. Let } \forall n' < n: T(n') = O(n') \\
\implies \exists c >0, n_{0} \geq 0: T(n') \leq cn' \\
T(n) = T(an) + T(bn) + n \\
\exists c_{a}, c_{b} > 0, n_{a}, n_{b} \geq 0 : \forall n > \max\{n_{a}, n_{b}\}: T(an) + T(bn) + n \leq c_{a}n + c_{b}n + n = \\
= (c_{a}+c_{b}+1)n \\
\implies T(n) \leq (c_{a}+c_{b}+1)n \implies T(n) \in O(n) \\
\implies \text{By strong induction: } \forall n \in \mathbb{N}: \boxed{ T(n) = O(n) } \\
}
$$
# 3
$$
\displaylines{
\text{Let } f(n), g(n), h(n) \text{ be positive functions } \\
}
$$
## 3a

$$
\displaylines{
\text{Prove or disprove: } f(n) \in O(g(n)) \text{ and } g(n) \in O(h(n)) \implies f(n) \in O(h(n)) \\
\\
\text{Proof:} \\
f(n) \in O(g(n)) \implies \exists c_{1} > 0, n_{1} \geq 0: \forall n > n_{1}: f(n) \leq c_{1}g(n) \\
g(n) \in O(h(n)) \implies \exists c_{2} > 0, n_{2} \geq 0: \forall n > n_{2}: g(n) \leq c_{2}h(n) \\
\implies \forall n > \max\{n_{1}, n_{2}\}: f(n) \leq c_{1}g(n) \leq c_{1}c_{2}h(n) \\
\text{Let } c = c_{1}c_{2}, n_{0} = \max\{n_{1}, n_{2}\} \\
\implies \exists c > 0, n_{0} \geq 0: \forall n > n_{0}: f(n) \leq ch(n) \implies \boxed{ f(n) \in O(h(n)) } \\
}
$$
## 3b
$$
\displaylines{
\text{Prove or disprove: } \Theta(f(n) + g(n)) = \Theta(\max\{f(n), g(n)\}) \\
\\
\text{Proof:} \\
\max\{f(n), g(n)\} = \left\{\begin{array}{}
f(n) & f(n) > g(n) \\
g(n) & \text{otherwise} \\
\end{array}\right. \\
\\
\max\{f(n), g(n)\} \leq f(n) + g(n) \\
f(n) + g(n) \leq 2\max\{f(n), g(n)\} \\
\implies \left\{\begin{array}{}
\frac{1}{2}(f(n) + g(n)) \leq \max\{f(n), g(n)\} \leq f(n) + g(n) \\
\max\{f(n), g(n)\} \leq f(n) + g(n) \leq 2\max\{f(n), g(n)\} \\
\end{array}\right. \\
\\
\text{Let } h(n) \in \Theta(f(n)+g(n)) \\
\implies \exists 0 < c_{1} \leq c_{2}, n_{0} \geq 0: \forall n > n_{0}: c_{1}(f(n)+g(n)) \leq h(n) \leq c_{2}(f(n)+g(n)) \\
\\
c_{1}\max\{f(n), g(n)\} \leq c_{1}(f(n)+g(n)) \leq h(n) \leq c_{2}(f(n)+g(n)) \leq 2c_{2}\max\{f(n), g(n)\} \\
\\
\implies h(n) \in \Theta(\max\{f(n), g(n)\}) \implies \boxed{ \Theta(f(n)+g(n)) \subseteq \Theta(\max\{f(n), g(n)\}) } \\
\\
\text{Let } h(n) \in \Theta(\max\{f(n), g(n)\}) \\
\implies \exists 0 < c_{1} \leq c_{2}, n_{0} \geq 0: \forall n > n_{0}: c_{1}\max\{f(n), g(n)\} \leq h(n) \leq c_{2}\max\{f(n), g(n)\} \\
\\
\frac{c_{1}}{2}(f(n)+g(n)) \leq c_{1}\max\{f(n), g(n)\} \leq h(n) \leq c_{2}\max\{f(n), g(n)\} \leq c_{2}(f(n)+g(n)) \\
\\
\implies h(n) \in \Theta(f(n)+g(n)) \implies \boxed{ \Theta(\max\{f(n), g(n)\}) \subseteq \Theta(f(n)+g(n)) } \\
\\
\implies \boxed{ \Theta(f(n) + g(n)) = \Theta(\max\{f(n), g(n)\}) } \\
}
$$
## 3c
$$
\displaylines{
\text{Prove or disprove: } f(n) \in \Theta(g(n)) \implies \omega(f(n)) = \omega(g(n)) \\
\\
\text{Proof:} \\
\text{Let } f(n) \in \Theta(g(n)) \\
\exists 0 < c_{1} < c_{2}, n_{0} \geq 0: \forall n > n_{0}: c_{1}g(n) \leq f(n) \leq c_{2}g(n) \\
\text{Let } h(n) \in \omega(f(n)) \\
\forall c > 0: \exists n_{1} \geq 0: \forall n > n_{0}: h(n) > cf(n) \\
\text{Let } c > 0 \\
\text{Let } c' = \frac{c}{c_{1}} > 0 \\
\exists n_{2} = \max\{n_{0}, n_{1}\}: \forall n > n_{2}: h(n) > c'f(n) \geq \frac{c}{c_{1}}c_{1}g(n) = cg(n) \\
\implies \forall c > 0: \exists n_{2} \geq 0: \forall n > n_{2}: h(n) > cg(n) \\
\implies h(n) \in \omega(g(n)) \implies \boxed{ \omega(f(n)) \subseteq \omega(g(n)) } \\
\\
\text{Let } h(n) \in \omega(g(n)) \\
\forall c > 0: \exists n_{1} \geq 0: \forall n > n_{0}: h(n) > cg(n) \\
\text{Let } c > 0 \\
\text{Let } c' = cc_{2} \\
\exists n_{2} = \max\{n_{0}, n_{1}\}: \forall n > n_{2}: h(n) > c'g(n) \geq \frac{cc_{2}}{c_{2}}f(n) = cf(n) \\
\implies \forall c > 0: \exists n_{2} \geq 0: \forall n > n_{2}: h(n) > cf(n) \\
\implies h(n) \in \omega(f(n)) \implies \boxed{ \omega(f(n)) \subseteq \omega(f(n)) } \\
\implies \boxed{ \omega(f(n)) = \omega(g(n)) } \\
}
$$
---
# 4a
```c
for (i = 0; i <= n; i++)
  for (j = 1; j <= i; j=j*3)
    basic_step();
```
$$
\displaylines{
\text{Calculate } \Theta \text{ of the code above given that the size of input is } n \\
\\
\text{Solution:} \\
\text{Outer loop has } n+1 \text{ iterations} \\
\text{Inner loop has } \log_{3}(i) \text{ iterations} \\
i = 0 \text{ gives us zero iterations, let's skip it} \\
\implies T(n) = \sum_{i=1}^{n} \sum_{j=1}^{\log_{3}(i)} 1 = \sum_{i=1}^{n} \log_{3}(i) = \log_{3}\left( \prod_{i=1}^{n} i \right) = \\
= \log_{3}(n!) = \frac{\log(n!)}{\log(3)} \\
\frac{\log(n!)}{\log(3)} \leq \frac{\log(n^{n})}{\log(3)} = \frac{1}{\log(3)} n\log n \\
\implies T(n) = O(n \log n) \\
\frac{1}{4\log(3)} n\log n = \frac{1}{2\log(3)}\left( n\log n - \frac{n\log n}{2} \right) \underset{ n \geq 4 }{ \leq } \dots \\
\dots \leq \frac{1}{2\log(3)} (n\log n - n) \leq \frac{\log\left( \left( \frac{n}{2} \right)^{n/2} \right)}{\log(3)} \leq \frac{\log(n!)}{\log(3)} \\
\implies T(n) = \Omega(n\log n) \implies \boxed{ T(n) = \Theta(n\log n) } \\
}
$$
# 4b
```c
for (i = 0; i <= n; i++)
  for (j = 0; j <= i^2; j++)
    for (k = 0; k <= j; k++)
	  basic_step();
```
$$
\displaylines{
\text{Calculate } \Theta \text{ of the code above given that the size of input is } n \\
\\
\text{Solution:} \\
\text{Outer loop has } n+1 \text{ iterations} \\
\text{Middle loop has } i^{2} + 1 \text{ iterations} \\
\text{Inner loop has } j + 1 \text{ iterations} \\
\implies T(n) = \sum_{i=0}^{n} \sum_{j=0}^{i^{2}} \sum_{k=0}^{j} 1 = \sum_{i=0}^{n} \sum_{j=0}^{i^{2}} j+1 = \sum_{i=0}^{n} \left( \frac{i^{2}(i^{2}+1)}{2} + (i^{2}+1) \right) = \\
= \sum_{i=0}^{n} \frac{(i^{2}+1)(i^{2}+2)}{2} = \sum_{i=0}^{n} \frac{i^{4}+3i^{2}+2}{2} = \frac{1}{2} \left( \sum_{i=0}^{n} i^{4} + 3\sum_{i=0}^{n} i^{2} \right) + (n+1) \\
}
$$
$$
\displaylines{
\text{Let us first find a closed formula for } \sum_{i=0}^{n} i^{2} \\
(x+1)^{3} = x^{3} + 3x^{2} + 3x + 1 \\
\implies (x+1)^{3} - x^{3} = 3x^{2} + 3x + 1 \\
\implies \sum_{x=0}^{n} ((x+1)^{3} - x^{3}) = \sum_{x=0}^{n} (3x^{2} + 3x + 1) \\
\text{This is also a telescopic sum: } \sum_{x=0}^{n} ((x+1)^{3} - x^{3}) = (n+1)^{3} \\
\implies (n+1)^{3} = \sum_{x=0}^{n} (3x^{2} + 3x + 1) = 3\sum_{x=0}^{n} x^{2} + 3\sum_{x=0}^{n} x + (n+1) \\
\sum_{x=0}^{n} x = \frac{n(n+1)}{2} \\
\implies 3\sum_{x=0}^{n} x^{2} = (n+1)^{3} - \frac{3n(n+1)}{2} - (n+1) = \\
= \frac{2n^{3}+6n^{2}+6n+2-3n^{2}-3n-2n-2}{2} = \\
= \frac{2n^{3}+3n^{2}+n}{2} = \frac{n(2n^{2}+3n+1)}{2} = \frac{n(n+1)(2n+1)}{2} \\
\implies \boxed{ \sum_{i=0}^{n} i^{2} = \frac{n(n+1)(2n+1)}{6} } \\
}
$$
$$
\displaylines{
\text{Let us do the same for } \sum_{i=0}^{n} i^{3} \\
(x+1)^{4} = x^{4} + 4x^{3} + 6x^{2} + 4x + 1 \\
(x+1)^{4} - x^{4} = 4x^{3} + 6x^{2} + 4x + 1 \\
\sum_{x=0}^{n} [(x+1)^{4} - x^{4}] = \sum_{x=0}^{n} [4x^{3} + 6x^{2} + 4x + 1] \\
(n+1)^{4} = 4 \sum_{x=0}^{n} x^{3} + 6 \sum_{x=0}^{n} x^{2} + 4 \sum_{x=0}^{n} x + \sum_{x=0}^{n} 1 \\
\sum_{x=0}^{n} 1 = n + 1 \\
4 \sum_{x=0}^{n} x = 2n(n+1) \\
6 \sum_{x=0}^{n} x^{2} = n(n+1)(2n+1) \\
4 \sum_{x=0}^{n} x^{3} = (n+1)^{4} - n(n+1)(2n+1) - 2n(n+1) - (n+1) = \\
= (n+1)((n+1)^{3} - n(2n+1) - 2n - 1) = \\
= (n+1)(n^{3}+3n^{2}+3n+1-2n^{2}-n-2n-1) = \\
= n^{2}(n+1)^{2} \\
\implies \boxed{ \sum_{i=0}^{n} i^{3} = \frac{n^{2}(n+1)^{2}}{4} } \\
}
$$
$$
\displaylines{
\text{And for } \sum_{i=0}^{n} i^{4} \\
(x+1)^{5} = x^{5} + 5x^{4} + 10x^{3} + 10x^{2} + 5x + 1 \\
(x+1)^{5} - x^{5} = 5x^{4} + 10x^{3} + 10x^{2} + 5x + 1 \\
\sum_{x=0}^{n} [(x+1)^{5} - x^{5}] = \sum_{x=0}^{n} [5x^{4} + 10x^{3} + 10x^{2} + 5x + 1] \\
(n+1)^{5} = 5 \sum_{x=0}^{n} x^{4} + 10 \sum_{x=0}^{n} x^{3} + 10 \sum_{x=0}^{n} x^{2} + 5 \sum_{x=0}^{n} x + \sum_{x=0}^{n} 1 \\
\sum_{x=0}^{n} 1 = n + 1 \\
5 \sum_{x=0}^{n} x = \frac{5n(n+1)}{2} \\
10 \sum_{x=0}^{n} x^{2} = \frac{5n(n+1)(2n+1)}{3} \\
10 \sum_{x=0}^{n} x^{3} = \frac{5n^{2}(n+1)^{2}}{2} \\
5 \sum_{x=0}^{n} x^{4} = (n+1)^{5} - \frac{5n^{2}(n+1)^{2}}{2} - \frac{5n(n+1)(2n+1)}{3} - \frac{5n(n+1)}{2} - (n+1) = \\
= \frac{(n+1)(6(n+1)^{4} - 15n^{2}(n+1) - 10n(2n+1) - 15n - 6)}{6} = \\
= \frac{(n+1)(6n^{4} + 24n^{3} + 36n^{2} + 24n + 6 - 15n^{3} - 15n^{2} - 20n^{2} - 10n - 15n - 6)}{6} = \\
= \frac{n(n+1)(6n^{3} + 9n^{2} + n - 1)}{6} = \frac{n(n+1)(2n+1)(3n^{2}+3n-1)}{6} \\
\implies \boxed{ \sum_{i=0}^{n} i^{4} = \frac{n(n+1)(2n+1)(3n^{2}+3n-1)}{30} } \\
}
$$
$$
\displaylines{
T(n) = \frac{1}{2}\left(\frac{n(n+1)(2n+1)(3n^{2}+3n-1)}{30} + \frac{n(n+1)(2n+1)}{2}\right) + (n+1) = \\
= \frac{(n+1)(6n^{4}+9n^{3}+n^{2}-n)}{60} + \frac{2n^{3}+3n^{2}+n}{4} + (n+1) = \\
= \frac{6n^{5} + 15n^{4} + 40n^{3} + 45n^{2} + 74n + 60}{60} \\
\implies T(n) \leq \frac{1}{60} (6n^{5} + 15n^{5} + 40n^{5} + 45n^{5} + 74n^{5} + 60n^{5}) = \frac{25}{6}n^{5} \\
\frac{1}{10} n^{5} \leq T(n) \leq \frac{25}{6}n^{5} \\
\implies \boxed{ T(n) = \Theta(n^{5}) } \\
}
$$
