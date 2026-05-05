---
{"publish":true,"created":"27/03/25, 12:03","modified":"2026-03-24T14:58:43.040+02:00","tags":["Academia","Practice","Data-structures"],"cssclasses":""}
---

$$
\displaylines{
T(n) = 2T(n-3) + 2 = \\
= 2^{2}T(n-3 \cdot 2) + 2^{2} + 2 = \\
= 2^{3}T(n-3 \cdot 3) + 2^{3} + 2^{2} + 2 = \\
\dots = 2^{i}T(n-3i) + 2^{i+1} - 2 \\
\text{Base case. } i = 1 \\
T(n) = 2^{i}T(n-3i) + 2^{i+1} - 2 = 2T(n-3) + 2 \\
\text{Induction step. Let } T(n) = 2^{i-1}T(n-3(i-1)) + 2^{i-1+1} - 2 \\
T(n) = 2^{i-1}(2T(n-3i) + 2) + 2^{i-1+1} - 2 = 2^{i}T(n-3i) + 2^{i+1} - 2 \\
\implies \forall 1 \leq i \leq \frac{n}{3}: T(n) = 2^{i}T(n-3i) + 2^{i+1} - 2 \\
T(n) = 2^{n/3}T(0) + 2^{n/3 + 1} - 2 = 3 \cdot 2^{n/3} - 2 \\
\implies \boxed{ T(n) = \Theta(2^{n/3}) } \\
}
$$
---
$$
\displaylines{
T(n) = 2T\left( \frac{n}{2} \right) + n \\
\text{Base case. } \forall c \geq 1: T(1) \leq c \cdot 1^{2} \implies T(1) \in O(1) \\
\text{Induction step. Let } \forall n' < n: T(n') = O(n'^{2}) \\
T(n) = 2T\left( \frac{n}{2} \right) + n \leq \frac{n^{2}}{2} + n \leq 2n^{2} \\
\implies \forall n \geq 1: T(n) \leq 2n^{2} \implies \boxed{ T(n) = O(n) } \\
}
$$
---
$$
\displaylines{
T(n) = T\left( \frac{n}{2} \right) + T\left( \frac{n}{3} \right) + n \\
\text{Base case. } \forall c \geq 1: T(1) \leq c \cdot 1 \\
\text{Induction step. Let } \forall n' < n: T(n') = O(n') \\
T(n) = T\left( \frac{n}{2} \right) + T\left( \frac{n}{3} \right) + n \leq \frac{c_{1}}{2}n + \frac{c_{2}}{3}n + n = \left( \frac{c_{1}}{2} + \frac{c_{2}}{3} + 1 \right)n \\
\implies \forall n : T(n) \leq \left( \frac{c_{1}}{2} + \frac{c_{2}}{3} + 1 \right)n \implies \boxed{ T(n) = O(n) } \\
}
$$
---
$$
\displaylines{
0 < \alpha < 1 \\
T(n) = T(\alpha n) + T((1-\alpha)n) + n \\
\text{Let } \forall n' < n: T(n') = O(n'\log n') \\
\text{Induction shortcut:} \\
T(n) \leq \hat{c}\alpha n \log(\alpha n) + c(1-\alpha)n\log((1-\alpha)n) + n = \\
= \hat{c}\alpha n\log n + \hat{c}\alpha n\log \alpha + c(1-\alpha)n\log n + c(1-\alpha)n\log(1-\alpha) = \\
= c_{1}n + c_{2}n\log n \underset{ n \geq 2 }{ \leq } (c_{1}+c_{2})n\log n \\
\implies \boxed{ T(n) = O(n\log n) } \\
}
$$
---
$$
\displaylines{
T(n) = 2T(\sqrt{ n }) + \log n \\
\text{Let } m = \log n \implies n = 2^{m} \\
\text{Let } S(m) = T(2^{m}) = T(n) \\
S(m) = 2S\left( \frac{m}{2} \right) + m \\
S(m) = \Theta(m\log m) \implies \boxed{ T(n) = \Theta(\log n \log \log n) } \\
}
$$
---
$$
\displaylines{
T(n) = T(\sqrt{ n }) + 1 \\
m = \log n \implies n = 2^{m} \\
S(m) = S\left( \frac{m}{2} \right) + 1 \\
\log_{2}(1) = 0 \\
\implies \text{By master theorem: } S(m) = \Theta(m^{0}\log m) = \Theta(\log m) \\
\implies \boxed{ T(n) = \Theta(\log \log n) } \\
}
$$
---
