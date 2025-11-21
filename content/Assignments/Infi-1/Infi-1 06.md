---
{"publish":true,"created":"21/12/24, 13:12","modified":"2025-11-21T21:10:02.288+02:00","tags":["Academia","Assignment","Infi-1"],"cssclasses":""}
---

# 1a
$$
\displaylines{
a_{n} = \frac{1}{n} + \frac{1}{n+1} + \dots + \frac{1}{3n} \\
\text{Prove: } \lim_{ n \to \infty } a_{n} = L \geq \frac{2}{3} \\
\text{Proof: } \\
a_{n+1} - a_{n} = \frac{1}{3n+3} + \frac{1}{3n+2} + \frac{1}{3n+1} - \frac{1}{n} < \frac{3}{3n} - \frac{1}{n} = 0 \\
\implies a_{n} - \text{monotonically decreasing} \\
\frac{1}{3n} \leq \frac{1}{3n-1} \leq \dots \leq \frac{1}{n+1} \leq \frac{1}{n} \\
\implies \frac{2n+1}{3n} \leq \underbrace{ \frac{1}{n} }_{ \geq \frac{1}{3n} } + \underbrace{ \frac{1}{n+1} }_{ \geq \frac{1}{3n} } + \dots + \frac{1}{3n} \\
\frac{2}{3} = \frac{2n}{3n} \leq \frac{2n+1}{3n} \leq a_{n} \\
\implies a_{n} \text{ is lower-bounded by } \frac{2}{3} \implies \boxed{\lim_{ n \to \infty } a_{n} = L \geq \frac{2}{3}} \\
}
$$
# 1b
$$
\displaylines{
\text{Explain in short why } a_{n} \text{ from 1a does not converge to 0 as per the limit arithmetics} \\
\\
\text{Explanation:} \\
\text{As } n \text{ grows towards infinity, number of terms in the sum is also growing towards infinity,} \\
\text{even faster than } n \text{ does itself, and thus the limit arithmetics do not apply in this case} \\
}
$$
# 1c
$$
\displaylines{
a_{n} \to L \\
\text{1. Prove or disprove: } \forall n: a_{n} > x \implies \lim_{ n \to \infty } a_{n} > x \\
\text{2. Prove or disprove: } \forall n: a_{n} > x \implies \lim_{ n \to \infty } a_{n} \geq x \\
\\
\text{Disproof for 1.} \\
\text{Let } a_{n} = \frac{1}{n} \\
\forall n: a_{n} > 0 \\
\lim_{ n \to \infty } a_{n} = 0 \not> 0 \\
\implies \boxed{\forall n: a_{n} > x \centernot \implies \lim_{ n \to \infty } a_{n} > x} \\
\\
\text{Proof for 2.} \\
\text{Let } \lim_{ n \to \infty } a_{n} = L < x \\
\implies x - L > 0 \\
a_{n} > x \implies a_{n} - x > 0 \\
\text{Let } \varepsilon = \frac{x - L}{2} \\
\exists N: \forall n > N: \lvert a_{n} - L \rvert < \varepsilon \\
\lvert a_{n} - L \rvert = \lvert (a_{n} - x) + (x - L) \rvert \leq \lvert a_{n} - x \rvert + \lvert x - L \rvert < \varepsilon \\
\implies (a_{n} - x) + (x-L) < \frac{x-L}{2} \\
\implies \underbrace{ (a_{n} - x) }_{ > 0 } + \underbrace{ \frac{x-L}{2} }_{ > 0 } < 0 - \text{Contradiction!} \\
\implies \lim_{ n \to \infty } a_{n} \geq x \implies \boxed{\forall n: a_{n} > x \implies \lim_{ n \to \infty } a_{n} \geq x} \\
}
$$
---

# 2
$$
\displaylines{
a_{n}: \sqrt{ 2 }, \sqrt{ 2 + \sqrt{ 2 } }, \sqrt{ 2 + \sqrt{ 2 + \sqrt{ 2 } } }, \dots \\
}
$$
## 2a
$$
\displaylines{
\text{Write } a_{n} \text{ in the form or recursive formula:} \\
a_{n} = \begin{cases}
\sqrt{ 2 } & n = 1 \\
\sqrt{ 2 + a_{n-1} } & \text{otherwise} \\
\end{cases} \\
}
$$
## 2b
$$
\displaylines{
\text{Prove } a_{n} \text{ is upper-bounded and monotonically non-decreasing, find } \lim_{ n \to \infty } a_{n} \\
\\
\text{Proof:} \\
\text{Base case. } a_{1} = \sqrt{ 2 } \\
0 < \sqrt{ 2 } < 2 \implies 0 < a_{1} < 2 \\
\text{Induction step. Let } 0 < a_{n} < 2 \\
a_{n+1} = \sqrt{ 2 + a_{n} } < \sqrt{ 2 + 2 } = \sqrt{ 4 } = 2 \\
\implies a_{n+1} < 2 \\
\sqrt{ 2 + a_{n} } > \sqrt{ 2 } > 0 \implies a_{n+1} > 0 \\
\implies \boxed{\forall n \in \mathbb{N}: 0 < a_{n} < 2} & (1) \\
a_{n+1} \geq a_{n} \iff \sqrt{ 2 + a_{n} } \geq a_{n} \iff 2 + a_{n} \geq a_{n}^{2} \\
\iff a_{n}^{2} - a_{n} - 2 < 0 \iff -1 < a_{n} < 2 \\
\forall n \in \mathbb{N}: 0 < a_{n} < 2 \implies -1 < a_{n} < 2 \implies a_{n+1} \geq a_{n} \\
\implies \boxed{a_{n} \text{ is monotonically non-decreasing}} & (2) \\
(1) \land (2) \implies \boxed{\exists \lim_{ n \to \infty } a_{n} = L \in \mathbb{R}} \\
\text{Let } \lim_{ n \to \infty } a_{n} = L \\
L = \lim_{ n \to \infty } a_{n+1} = \lim_{ n \to \infty } \sqrt{ 2 + a_{n} } = \sqrt{ 2 + L } \\
L = \sqrt{ 2 + L } \implies L^{2} = 2 + L \implies L^{2} - L - 2 = 0 \\
\implies (L - 2)(L + 1) = 0 \implies \left[\begin{array}{}
L = 2 \\
L = -1 \\
\end{array}\right. \\
\forall n \in N: a_{n} > 0 \implies \lim_{ n \to \infty } a_{n} \geq 0 \implies L \geq 0 \implies L = 2 \\
\implies \boxed{\lim_{ n \to \infty } a_{n} = 2} \\
}
$$
---

# 3
$$
\displaylines{
a_{n} = \begin{cases}
1 & n = 1 \\
\sqrt{ 3a_{n-1} } & \text{otherwise} \\
\end{cases} \\
\text{Prove } a_{n} \text{ converges and find } \lim_{ n \to \infty } a_{n} \\
\\
\text{Proof:} \\
\text{Base case. } a_{1} = 1 \\
1 \leq 1 < 3 \implies 1 \leq a_{1} < 3 \\
\text{Induction step. Let } 1 \leq a_{n} < 3 \\
a_{n+1} = \sqrt{ 3a_{n} } < \sqrt{ 3 \cdot 3 } = 3 \implies a_{n+1} < 3 \\
\sqrt{ 3a_{n} } \geq \sqrt{ 3 } \geq 1 \implies a_{n+1} \geq 1 \\
\implies \boxed{\forall n \in \mathbb{N}: 1 \leq a_{n} < 3} & (1) \\
a_{n+1} > a_{n} \iff \sqrt{ 3a_{n} } > a_{n} \iff 3a_{n} > a_{n}^{2} \\
\iff a_{n}(a_{n} - 3) < 0 \iff 0 < a_{n} < 3 \\
\forall n > 1 \in \mathbb{N}: 1 \leq a_{n} < 3 \implies 0 < a_{n} < 3 \implies a_{n+1} > a_{n} \\
\implies \boxed{a_{n} \text{ is monotonically increasing}} & (2) \\
(1) \land (2) \implies \boxed{\exists \lim_{ n \to \infty } a_{n} = L \in \mathbb{R}} \\
\text{Let } \lim_{ n \to \infty } a_{n} = L \\
L = \lim_{ n \to \infty } a_{n+1} = \lim_{ n \to \infty } \sqrt{ 3a_{n} } = \sqrt{ 3L } \\
L = \sqrt{ 3L } \iff L^{2} = 3L \iff \left[\begin{array}{}
L = 0 \\
L = 3 \\
\end{array}\right. \\
\forall n \in \mathbb{N}: a_{n} \geq 1 \implies a_{n} > \frac{1}{2} \implies \lim_{ n \to \infty } a_{n} \geq \frac{1}{2} \implies \lim_{ n \to \infty } \neq 0 \\
\implies \boxed{\lim_{ n \to \infty } a_{n} = 3} \\
}
$$
---

# 4
$$
\displaylines{
a_{1} > 0 \\
a_{n+1} = a_{n} \cdot e^{a_{n}} \\
\text{Find } \lim_{ n \to \infty } a_{n} \\
\\
\text{Solution:} \\
\text{Base case. } a_{1} > 0 \\
\text{Induction step. Let } a_{n} > 0 \\ 
a_{n+1} = \underbrace{ a_{n} }_{ > 0 } \cdot \underbrace{ e^{a_{n}} }_{ > 0 } > 0 \implies a_{n+1} > 0 \\
\implies \boxed{\forall n \in \mathbb{N}: a_{n} > 0} \\
a_{n+1} > a_{n} \iff a_{n} \cdot e^{a_{n}} > a_{n} \iff e^{a_{n}} > 1 \iff a_{n} > 0 \\
\forall n \in \mathbb{N}: a_{n} > 0 \implies a_{n+1} > a_{n} \\
\implies \boxed{a_{n} \text{ is monotonically increasing}} \\
\text{Let } \lim_{ n \to \infty } a_{n} = L \in \mathbb{R} \\
L = \lim_{ n \to \infty } a_{n+1} = a_{n} \cdot e^{a_{n}} = L \cdot e^{L} \\
L = L \cdot e^{L} \iff L(e^{L} - 1) = 0 \iff \left[\begin{array}{}
L = 0 \\
e^{L} = 1 \\
\end{array}\right. \iff L = 0 \\
a_{n} \text{ is monotonocally increasing} \implies \exists \lim_{ n \to \infty } a_{n} \\
L \geq a_{1} > 0 \implies L \not\in \mathbb{R} \implies \boxed{\lim_{ n \to \infty } a_{n} = \infty} \\
}
$$
---
# 5a
$$
\displaylines{
\text{Let } a_{n} \text{ be a monotonically non-decreasing sequence} \\
\text{Let } C \in \mathbb{R} \\
\text{Prove: } a_{n} + C \text{ is monotonically non-decreasing} \\
\\
\text{Proof:} \\
\text{Let } b_{n} = a_{n} + C \\
\forall n: a_{n+1} \geq a_{n} \implies \forall n: a_{n+1} + C \geq a_{n} + C \implies b_{n+1} \geq b_{n} \\
\implies b_{n} \text{ is monotonically non-decreasing} \implies \boxed{a_{n} + C \text{ is monotonically non-decreasing}} \\
}
$$
# 5b
$$
\displaylines{
\text{Let } a_{n} \text{ be a monotonically non-decreasing sequence} \\
\text{Let } C \in \mathbb{R} \\
\text{Prove: } C > 0 \implies a_{n} \cdot C \text{ is monotonically non-decreasing} \\
\text{Prove: } C < 0 \implies a_{n} \cdot C \text{ is monotonically non-increasing} \\
\\
\text{Proof:} \\
\text{Let } b_{n} = a_{n} \cdot C, C > 0 \\
\forall n: a_{n+1} \geq a_{n} \underset{ C > 0 }{ \implies } a_{n+1} \cdot C \geq a_{n} \cdot C \implies b_{n+1} \geq b_{n} \\
\implies b_{n} \text{ is monotonically non-decreasing} \\
\implies \boxed{C > 0 \implies a_{n} \cdot C \text{ is monotonically non-decreasing}} \\
\text{Let } c_{n} = a_{n} \cdot C, C < 0 \\
\forall n: a_{n+1} \geq a_{n} \underset{ C < 0 }{ \implies } a_{n+1} \cdot C \leq a_{n} \cdot C \implies b_{n+1} \leq b_{n} \\
\implies c_{n} \text{ is monotonically non-increasing} \\
\implies \boxed{C < 0\implies a_{n} \cdot C \text{ is monotonically non-increasing}} \\
}
$$
# 5c
$$
\displaylines{
\text{Let } a_{n} \text{ be a monotonically non-decreasing sequence} \\
a_{n} > 0 \\
\text{Prove or disprove: } \frac{1}{a_{n}} \text{ is monotonically non-increasing} \\
\\
\text{Proof:} \\
\text{Let } b_{n} = \frac{1}{a_{n}} \\
\forall n: a_{n+1} \geq a_{n} \underset{ a_{n} > 0 }{ \implies } \forall n: \frac{1}{a_{n+1}} \leq \frac{1}{a_{n}} \implies b_{n+1} \leq b_{n} \\
\implies b_{n} \text{ is monotonically non-increasing} \implies \boxed{\frac{1}{a_{n}} \text{ is monotonically non-increasing}} \\
}
$$
# 5d
$$
\displaylines{
\text{Let } a_{n} \text{ be a monotonically non-decreasing sequence} \\
a_{n} \neq 0 \\
\text{Prove or disprove: } \frac{1}{a_{n}} \text{ is monotonically non-increasing} \\
\\
\text{Disproof:} \\
\text{Let } a_{1} = -1, a_{n} = n \\
\frac{1}{a_{n}}: -1, \frac{1}{2}, \frac{1}{3}, \dots \\
\frac{1}{a_{1}} < \frac{1}{a_{2}} > \frac{1}{a_{3}} \implies \boxed{\frac{1}{a_{n}} \text{ is not monotonically non-increasing}} \\
}
$$
# 5e
$$
\displaylines{
\text{Let } a_{n} \text{ be a monotonically non-decreasing sequence} \\
a_{n} \neq 0 \\
b_{n} = \frac{1}{a_{n}} \\
\text{Prove or disprove: } \exists N: \forall n > N: b_{n+1} \leq b_{n} \\
\\
\text{Proof:} \\
\text{Let } \exists N: \forall n > N: a_{n} < 0 \\
a_{n+1} \geq a_{n} \underset{ a_{n} < 0 }{ \implies } \frac{1}{a_{n+1}} \leq \frac{1}{a_{n}} \implies \boxed{\exists N: \forall n > N: b_{n+1} \leq b_{n}} \\
\text{Let } \not\exists N: \forall n > N: a_{n} < 0 \\
\implies \forall n: a_{n} > 0 \\
a_{n+1} \geq a_{n} \implies \frac{1}{a_{n+1}} \leq \frac{1}{a_{n}} \implies b_{n+1} \leq b_{n} \implies b_{n} \text{ is monotonically non-increasing} \\
\implies \boxed{\exists N = 1: \forall n > N: b_{n+1} \leq b_{n}} \\
}
$$
# 5f
$$
\displaylines{
\text{Let } a_{n}, b_{n} \text{ be a monotonically non-decreasing sequences} \\
\text{Prove or disprove: } a_{n} + b_{n} \text{ is monotonically non-decreasing} \\
\\
\text{Proof:} \\
\forall n: a_{n+1} \geq a_{n}, b_{n+1} \geq b_{n} \implies a_{n+1} + b_{n+1} \geq a_{n} + b_{n} \\
\implies \boxed{a_{n} + b_{n} \text{ is monotonically non-decreasing}} \\
}
$$
# 5g
$$
\displaylines{
\text{Let } a_{n}, b_{n} \text{ be a monotonically non-decreasing sequences} \\
a_{n} > 0, b_{n} > 0 \\
\text{Prove or disprove: } a_{n}b_{n} \text{ is monotonically non-decreasing} \\
\\
\text{Proof:} \\
\forall n: a_{n+1} \geq a_{n}, b_{n+1} \geq b_{n} \\
a_{n} > 0, b_{n} > 0 \implies a_{n}b_{n} > 0 \\
a_{n+1}b_{n+1} \underset{ b_{n+1} = b_{n} + x, x \geq 0 }{ \geq } a_{n+1}b_{n} \underset{ a_{n+1} = a_{n} + y, y \geq 0 }{ \geq } a_{n}b_{n} \\
\implies \boxed{a_{n}b_{n} \text{ is monotonically non-decreasing}} \\
}
$$
# 5h
$$
\displaylines{
\text{Let } a_{n}, b_{n} \text{ be monotonic} \\
a_{n} > 0, b_{n} > 0 \\
\text{Prove or disprove: } a_{n} + b_{n} \text{ is monotonic} \\
\\
\text{Disproof:} \\
a_{n} = n \\
b_{n}: 3, 1, 1, \dots \\
c_{n} = a_{n} + b_{n} = 4, 3, 4, 5, \dots \\
c_{1} > c_{2} < c_{3} \\
\implies \boxed{a_{n} + b_{n} \text{ is not monotonic}} \\
}
$$
---

# 6a
$$
\displaylines{
a_{n} = (-1)^{n+1} \cdot \frac{n+12}{n} \\
\text{Find } \overline{\lim} a_{n}, \underline{\lim} a_{n} \\
\\
\text{Solution:} \\
a_{2n} = (-1) \cdot \frac{n+6}{n} \to -1 \\
a_{2n-1} = 1 \cdot \frac{2n+11}{2n-1} \to 1 \\
\text{All elements of } a_{n} \text{ are either in } a_{2n} \text{ or in } a_{2n-1} \\
\implies \Set{ -1, 1 } \text{ is a set of partial limits of } a_{n} \\
\implies \boxed{\overline{\lim} a_{n} = 1, \underline{\lim} a_{n} = -1} \\
}
$$
# 6b
$$
\displaylines{
b_{n} = \cos\left( \frac{n \pi}{3} \right) \\
\text{Find } \overline{\lim} b_{n}, \underline{\lim} b_{n} \\
\\
\text{Solution:} \\
\text{Exist many partial limits of } b_{n} \\
\text{But they are all between } (-1) \text{ and } 1 \\
max(b_{n}) = 1, b_{6n} = \cos(2n \pi) = 1 \to 1 \implies \boxed{\overline{\lim} b_{n} = 1} \\
min(b_{n}) = -1, b_{9n} = \cos(3n \pi) = -1 \to -1 \implies \boxed{\underline{\lim} b_{n} = -1} \\
}
$$
# 6c
$$
\displaylines{
c_{n} = (-2)^{n} - 4 \\
\text{Find } \overline{\lim} a_{n}, \underline{\lim} a_{n} \\
\\
\text{Solution:} \\
c_{2n} = 2^{2n} - 4 \to \infty \\
c_{2n-1} = -2^{2n-1} - 4 \to -\infty \\
\text{All elements of } c_{n} \text{ are either in } c_{2n} \text{ or in } c_{2n-1} \\
\implies \Set{ -\infty, \infty } \text{ is a set of partial limits of } c_{n} \\
\implies \boxed{\overline{\lim} a_{n} = \infty, \underline{\lim} a_{n} = -\infty} \\
}
$$
---
