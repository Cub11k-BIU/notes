---
{"publish":true,"created":"02/12/24, 12:12","modified":"2025-11-21T21:10:14.187+02:00","tags":["Academia","Lecture","Infi-1"],"cssclasses":""}
---

# Infi-1 10
## Cauchy's sequence #definition 
$$
\displaylines{
\forall \varepsilon > 0 \exists N_{\varepsilon} : \forall n, m > N_{\varepsilon} : \lvert a_{n} - a_{m} \rvert < \varepsilon \\
}
$$
## Cauchy's criterion #theorem 
$$
\displaylines{
\Set{ a_{n} } \subseteq R \\
a_{n} \text{ converges} \iff a_{n} \text{ is a Cauchy's sequence} \\
\\
\text{Proof:} \\
\text{Let } a_{n} \to L \\
\forall \varepsilon > 0 \exists N_{\varepsilon} : \forall n > N_{\varepsilon}: \lvert a_{n} - L \rvert < \frac{\varepsilon}{2} \\
\text{Let } m \geq n \\
\lvert a_{n} - a_{m} \rvert = \lvert a_{n} - L - a_{m} + L \rvert \leq \underbrace{ \lvert a_{n} - L \rvert }_{ < \frac{\varepsilon}{2} } + \underbrace{ \lvert L - a_{m} \rvert }_{ = \lvert a_{m} - L \rvert < \frac{\varepsilon}{2} } \\
\implies \lvert a_{n} - a_{m} \rvert < \varepsilon \iff \boxed{a_{n} \text{ is a Cauchy's sequence}} \\
}
$$
$$
\displaylines{
& \text{Let } a_{n} \text{ be a Cauchy's sequence} \\
\\
1. & \text{Cauchy's sequence is bounded} \\
& \text{Proof:} \\
& \text{By definition of the limit: } \exists \varepsilon = 7: \exists N_{\varepsilon} : \forall n,m > N_{\varepsilon} : \lvert a_{n} - a_{m} \rvert < 7 \\
& \text{Let } z = a_{\lceil N_{\varepsilon} \rceil + 1} \\
& \text{Then } -7 < a_{n} - z < 7 \iff \forall n > N_{\varepsilon}: z - 7 \leq a_{n} \leq z + 7 \\
& A = \Set{ a_{1},a_{2},a_{3}, \dots, a_{\lceil N_{\varepsilon} \rceil } } \text{ is a finite set} \implies \exists m = min(A), M = max(A) \\
& \implies \boxed{\forall n \in \mathbb{N}: min(m, z-7) \leq a_{n} \leq max(M, z+7)} - \text{sequence is bounded} \\
2. & \text{If sequence is bounded, then there exists a convergent subsequence } a_{k_{n}} \\
& \boxed{\exists a_{k_{n}} \to L_{k}} \\
3. & \text{Limit of a subsequence is a limit of the whole sequence, if such exists} \\
& \forall \varepsilon > 0 \exists N_{a} : \forall n,m > N_{a} : \lvert a_{n} - a_{m} \rvert < \frac{\varepsilon}{2} \\
& \forall \varepsilon > 0 \exists N_{k} : \forall n > N_{k} : \lvert a_{k_{n}} - L_{k} \rvert < \frac{\varepsilon}{2} \\
& \text{Let } n > N_{\varepsilon} = max(N_{a}, N_{k}) \\
& \lvert a_{n} - L_{k} \rvert = \lvert a_{n} - a_{k_{n}} - L_{k} + a_{k_{n}} \rvert \leq \underbrace{ \lvert a_{n} - a_{k_{n}} \rvert }_{ < \frac{\varepsilon}{2} } + \underbrace{ \lvert a_{k_{n}}-L_{k} \rvert }_{ < \frac{\varepsilon}{2} } < \varepsilon \\
& \iff \boxed{a_{n} \to L_{k}} \\
4. & \text{Proof for 3. via } \overline{\lim} a_{n} \\
& \text{Let } \overline{\lim} a_{n} = T > L_{k} \\
& \text{Then } \exists a_{m_{n}} \to T \\
& \exists N_{1} : \forall n > N_{1}: \lvert a_{k_{n}} - L_{k} \rvert < \frac{T-L}{4} \\
& \exists N_{2} : \forall n > N_{2}: \lvert a_{m_{n}} - T \rvert < \frac{T-L}{4} \\
& \exists N_{3} : \forall n,m > N_{3}: \lvert a_{n}-a_{m} \rvert < \frac{T-L}{4} \\
& \exists N_{\varepsilon} = max(N_{1}, N_{2}, N_{3}) : \forall n, m > N_{\varepsilon} : \\
& \lvert a_{k_{n}} - L_{k} \rvert < \frac{T-L}{4}, \lvert a_{m_{n}} - T \rvert < \frac{T-L}{4}, \lvert a_{n}-a_{m} \rvert < \frac{T-L}{4} \\
& L - \frac{T-L}{4} < a_{k_{n}} < L + \frac{T-L}{4} \\
& T - \frac{T-L}{4} < a_{m_{n}} < T + \frac{T-L}{4} \\
& \frac{5L-T}{4} < a_{k_{n}} < \frac{T+3L}{4} \\
& \frac{3T+L}{4} < a_{m_{n}} < \frac{5T-L}{4} \\
& a_{m_{n}} - a_{k_{n}} > \frac{3T+L}{4} - a_{k_{n}} > \frac{3T+L}{4} - \frac{T+3L}{4} = \frac{T-L}{2} > \frac{T-L}{4} \\
}
$$
---
## Series (טורים) #definition 
$$
\displaylines{
\text{Series are infinite sums, corresponding to sequences} \\
\text{For example:} \\
a_{n} = \frac{1}{2^{n}} \\
S_{n} = 9\sum_{n=1}^{\infty} \frac{1}{2^{n}} = \frac{1}{2}+\frac{1}{4}+\frac{1}{8}+\dots \\
}
$$
---
