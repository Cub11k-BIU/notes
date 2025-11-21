---
{"publish":true,"created":"18/12/24, 18:12","modified":"2025-11-21T21:10:25.010+02:00","tags":["Academia","Practice","Infi-1"],"cssclasses":""}
---

# Infi-1 8
$$
\displaylines{
\sum_{n=0}^{\infty} x^{n} \to \frac{1}{1-x} \iff \lvert x \rvert < 1 \\
}
$$
## Exercise
$$
\displaylines{
\sum \frac{2^{n}+n^{2}+n}{2^{n+1}n(n+1)} \\
a_{n} = \frac{2^{n}}{2^{n+1}n(n+1)} + \frac{n^{2}+n}{2^{n+1}n(n+1)} \\
a_{n} = \frac{1}{2} \cdot \frac{1}{n(n+1)} + \frac{1}{2^{n+1}} \\
\\
\sum \frac{1}{2^{n+1}} = \sum \frac{1}{4} \cdot \left( \frac{1}{2} \right)^{n-1} = \sum_{n=1}^{\infty} \frac{1}{4} \cdot \left( \frac{1}{2} \right)^{n} \to \frac{1}{4} \cdot \frac{1}{1-\frac{1}{2}} = \frac{1}{2} \\
\frac{1}{n(n+1)} = \frac{1}{n} - \frac{1}{n+1} \\
\sum \frac{1}{2} \frac{1}{n(n+1)} = \frac{1}{2} \sum \left( \frac{1}{n} - \frac{1}{n+1} \right) \to \frac{1}{2} \\
S_{N} = 1 - \frac{1}{N+1} \to 1 \\
\implies \sum \frac{2^{n}+n^{2}+n}{2^{n+1}n(n+1)} \to 1 \\
}
$$
---
