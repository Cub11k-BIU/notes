---
{"publish":true,"created":"04/12/24, 17:12","modified":"2025-11-21T21:10:24.999+02:00","tags":["Academia","Practice","Infi-1"],"cssclasses":""}
---

# Infi-1 6
$$
\displaylines{
a_{n} > 0 \\
\lim_{ n \to \infty } \frac{a_{n+1}}{a_{n}} = L \implies \lim_{ n \to \infty } \sqrt[n]{ a_{n} } = L \\
}
$$
---
## Exercise
$$
\displaylines{
\lim_{ n \to \infty } \sqrt[n]{ n } = ? \\
a_{n} = n \\
\lim_{ n \to \infty } \sqrt[n]{ n } \underset{ \sqrt[n]{ n } > 0 }{ = } \lim_{ n \to \infty } \frac{n+1}{n} = \lim_{ n \to \infty } 1 + \underbrace{ \frac{1}{n} }_{ \to 0 } = 1 \\
}
$$
---
## Exercise
$$
\displaylines{
\text{Prove or disprove: } \lim_{ n \to \infty } a_{n} = \infty \implies a_{n} \text{ is monotonically non-descending} \\
\\
\text{Disproof:} \\
\text{Let } a_{n} = n + (-1)^{n} \\
a_{n+1} - a_{n} = 1 + (-1)^{n+1} - (-1)^{n} = 1 - 2(-1)^{n} \not< 0 \\
\lim_{ n \to \infty } a_{n} = \infty \implies \boxed{\text{Disproved}} \\
}
$$
---
## Exercise
$$
\displaylines{
\text{Prove or disprove: } \lim_{ n \to \infty } a_{n} = 0 \implies \lim_{ n \to \infty } \frac{1}{a_{n}} = \infty \\
\text{Proved in seminar Infi-1 5} \\
}
$$
---
## Exercise
$$
\displaylines{
\text{Prove or disprove: } \lim_{ n \to \infty } a_{n}b_{n} = 0 \implies a_{n} \text{ is bounded or } b_{n} \text{ is bounded} \\
\text{Disproof:} \\
a_{n} = \begin{cases}
0 & n = 2k \\
n & \text{otherwise} \\
\end{cases}, b_{n} = \begin{cases}
0 & n = 2k + 1 \\
n & \text{otherwise} \\
\end{cases} \\
a_{n}b_{n} = 0 \\
}
$$
---
## Exercise
$$
\displaylines{
x > 0 \\
a_{n} = \frac{6n + \sqrt{ \lfloor x^{2}n^{2} \rfloor  }}{3n + \sqrt{ 2 }} \\
\text{Prove or disprove: } \lim_{ n \to \infty } a_{n} > 2 \\
\\
\text{Proof:} \\
\frac{6n + \sqrt{ x^{2}n^{2} - 1  }}{3n + \sqrt{ 2 }} < \frac{6n + \sqrt{ \lfloor x^{2}n^{2} \rfloor  }}{3n + \sqrt{ 2 }} < \frac{6n + \sqrt{ x^{2}n^{2} }}{3n + \sqrt{ 2 }} \\
2 + \frac{x}{3} \leftarrow \frac{6 + \overbrace{ \sqrt{ x^{2} - \overbrace{ \frac{1}{n^{2}} }^{ \to 0 } } }^{ \to x }}{3 + \underbrace{ \frac{\sqrt{ 2 }}{n} }_{ \to 0 }} < a_{n} < \frac{6+x}{3 + \underbrace{ \frac{\sqrt{ 2 }}{n} }_{ \to 0 }} \to 2 + \frac{x}{3} \\
\implies \lim_{ n \to \infty } a_{n} = 2 + \underbrace{ \frac{x}{3} }_{  > 0 } \implies \boxed{\lim_{ n \to \infty } a_{n} > 2} \\
}
$$
---
## Exercise
$$
\displaylines{
& \text{Prove or disprove: } \\
1. & \quad \exists a_{n} : \lim_{ n \to \infty } a_{n} = \infty \land \lim_{ n \to \infty } \frac{a_{n+1}}{a_{n}} = 0 \\
2. & \quad \exists a_{n} : \lim_{ n \to \infty } a_{n} = \infty \land \lim_{ n \to \infty } \frac{a_{n+1}}{a_{n}} = 4 \\
3. & \quad \exists a_{n} : \lim_{ n \to \infty } a_{n} = \infty \land \lim_{ n \to \infty } \frac{a_{n+1}}{a_{n}} = \infty \\
4. & \quad \exists a_{n} : \lim_{ n \to \infty } a_{n} = \infty \land \not\exists \lim_{ n \to \infty } \frac{a_{n+1}}{a_{n}} \\
}
$$
$$
\displaylines{
1. \quad \text{Disproof:} \\
\text{Let } \lim_{ n \to \infty } \frac{a_{n+1}}{a_{n}} = 0 \\
\implies \exists N: \forall n > N: \frac{a_{n+1}}{a_{n}} < 1 \implies a_{n} \text{ is monotonically descending after } N \\
\implies \lim_{ n \to \infty } a_{n} \neq \infty \\
}
$$
$$
\displaylines{
2. \quad \text{Proof:} \\
a_{n} = 4^{n} \implies \frac{a_{n+1}}{a_{n}} = 4 \to 4 \\
}
$$
$$
\displaylines{
3. \quad \text{Proof:} \\
a_{n} = n! \implies \frac{a_{n+1}}{a_{n}} = n+1 \to \infty \\
}
$$
$$
\displaylines{
4. \text{Proof:} \\
a_{n} = \begin{cases}
n  & n = 2k \\
n^{2} & \text{otherwise} \\
\end{cases} \\
a_{n} \geq n \to \infty \implies a_{n} \to \infty \\
\frac{a_{n+1}}{a_{n}} = \begin{cases}
\frac{1}{n} + \frac{1}{n^{2}} & n = 2k \\
n + 2 + \frac{1}{n} & \text{otherwise} \\
\end{cases} \implies \not\exists \lim_{ n \to \infty } \frac{a_{n+1}}{a_{n}} \\
}
$$
---
## Exercise
$$
\displaylines{
\left\{\begin{array}{}
a_{1} = 5 \\
a_{n+1} = a_{n} \cdot \frac{6+a_{n}}{3+2a_{n}} \\
\end{array}\right. \\
\text{Base case.} a_{1} = 5 \geq 3 \\
\text{Induction step. Let } a_{n} \geq 3 \\
a_{n+1} = a_{n} \cdot \frac{6 + a_{n}}{3 + 2a_{n}} \geq a_{n} \cdot \frac{6+3}{3 + 2a_{n}} = \frac{9a_{n}}{3 + 2a_{n}} \geq \frac{9a_{n}}{a_{n} + 2a_{n}} = 3 \\
\implies a_{n+1} \geq 3 \\
\text{By induction: } a_{n} \geq 3 \\
a_{n+1} - a_{n} = a_{n} \frac{3-a_{n}}{3+2a_{n}} < 0 \implies a_{n} \text{ is monotonically descending} \\
\implies a_{n} \text{ converges} \\
\text{Let } \lim_{ n \to \infty } a_{n} = L \\
L = \lim_{ n \to \infty } a_{n+1} = \lim_{ n \to \infty } a_{n} \cdot \frac{6+a_{n}}{3+2a_{n}} = L \cdot \frac{6 + L}{3 + 2L} \\
\implies \left[\begin{array}{}
L = 0 \\
L = 3 \\
\end{array}\right. \\
a_{n} \geq 3 \implies \lim_{ n \to \infty } a_{n} \neq 0
\implies \boxed{\lim_{ n \to \infty } a_{n} = 3} \\
}
$$
---
