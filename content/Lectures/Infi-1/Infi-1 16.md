---
{"publish":true,"created":"23/12/24, 12:12","modified":"2025-11-21T21:10:14.207+02:00","tags":["Academia","Lecture","Infi-1"],"cssclasses":""}
---

# Infi-1 16
$$
\displaylines{
S_{N} = \sum_{n=1}^{N} \sin(n) = \sin(1) + \sin(2) + \dots + \sin(N) \\
2\sin(x)\sin(y) = \cos(x-y) - \cos(x+y) \\
2\sin(1)S_{N} = 2\sin(1)\sin(1) + 2\sin(1)\sin(2) + \dots + 2\sin(1)\sin(N) = \\
= \cos(0) - \cos(2) + \cos(1) - \cos(3) + \cos(2) - \cos(4) + \dots + \cos(N-1) - \cos(N+1) = \\
= \cos(0) + \cos(1) - \cos(N) - \cos(N+1) \\
\implies S_{N} = \frac{\cos(0) + \cos(1) - \cos(N) - \cos(N+1)}{2\sin(1)} \\
-2 \leq -\cos(N) - \cos(N+1) \leq 2 \implies \frac{\cos(0)+\cos(1)-2}{2\sin(1)} \leq S_{N} \leq \frac{\cos(0)+\cos(1)+2}{2\sin(1)} \\
}
$$
---
## Alternating series test (Leibniz criterion) #theorem 
$$
\displaylines{
\sum (-1)^{n} \\
a_{n} \text{ is monotonically non-increasing and } a_{n} \to 0 \\
\sum (-1)^{n}a_{n} \to M_{1} \\
}
$$
---
## Alternating series remainder #definition 
$$
\displaylines{
r_{N} = \sum a_{n} - S_{N} = \sum_{n=N+1}^{\infty} a_{n} \\
S_{N} \to \sum a_{n} \implies r_{N} \to 0 \\
}
$$
---
$$
\displaylines{
\sum \frac{(-1)^{n+1}}{n} = 1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \dots \\
S_{4} = 1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} \\
r_{4} = \frac{1}{5} - \frac{1}{6} + \frac{1}{7} - \dots \leq \frac{1}{5} \\
\lvert r_{N} \rvert \leq \lvert a_{N+1} \rvert \\
}
$$
---
## Somewhere in the future
$$
\displaylines{
\ln(2) = \sum \frac{(-1)^{n+1}}{n} \\
}
$$
---
$$
\displaylines{
\sum (-1)^{n} = - 1 + 1 - 1 + 1 - 1 + \dots = \\
= (-1 + 1) + (-1 + 1) + \dots = 0 = \\
= -1 + (1 - 1) + (1 - 1) + (1 - 1) + \dots = -1 = \\
= 1 + (- 1 + 1) + (- 1 + 1) + (- 1 + 1) + \dots = 1 \\
0 = -1 = 1 \quad ??? \\
\implies \text{In non-convergent series grouping or changing order is not allowed} \\
}
$$
---
$$
\displaylines{
\sum \frac{(-1)^{n+1}}{n} = a \\
a = 1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \dots \\
\left( 1 - \frac{1}{2} - \frac{1}{4} \right) + \left( \frac{1}{3} - \frac{1}{6} - \frac{1}{8} \right) + \dots + \left( \frac{1}{2n+1} - \frac{1}{4n+2} - \frac{1}{4n+4} \right) = \\
= \left( \frac{1}{2} - \frac{1}{4} \right) + \dots + \left( \frac{1}{4n+2} - \frac{1}{4n+4} \right) = \frac{1}{2}\left( 1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \frac{1}{5} - \dots \right) = \frac{1}{2}a \\
\implies \text{In convergent series changing order is not allowed} \\
}
$$
---
$$
\displaylines{
\sum \lvert a_{n} \rvert \to M_{1} \\
\text{It is allowed to change the order of terms in absolutely convergent series} \\
}
$$
---
# Riemann's theorem #theorem 
$$
\displaylines{
\text{If series converge conditionally, then for all } w \in \mathbb{R} \text{ exists an order of terms such that} \\
\sum a'_{n} \to w \\
}
$$
---
