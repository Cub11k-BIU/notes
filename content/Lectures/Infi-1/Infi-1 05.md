---
{"publish":true,"created":"13/11/24, 09:11","modified":"2025-11-21T21:10:14.172+02:00","tags":["Academia","Lecture","Infi-1"],"cssclasses":""}
---

# Infi-1 5
## Limit of the sequence #definition 
$$
\displaylines{
a_{n} \to L \\
\forall \varepsilon > 0 \exists n_{\varepsilon} : \forall n > n_{\varepsilon} |a_{n} - L| < \varepsilon \\
}
$$
---
### Operations on limits #lemma 
$$
a_{n} \to L; b_{n} \to M
$$
$$
\displaylines{
a_{n} \pm b_{n} \to L\pm M \\
a_{n} * b_{n} \to L*M \\
\frac{a_{n}}{b_{n}} \to \frac{L}{M} \mid M \neq 0 \\
C*a_{n} \to C*L \\
\sqrt{ a_{n} } \to \sqrt{ L } \mid a_{n} \geq 0 \\
|a_{n}| \to |L|
}
$$
---
## Triangle inequality #lemma 
$$
\text{Prove: } \forall x, y \in \mathbb{R} : |x + y| \leq |x| + |y|
$$
$$
\displaylines{
|x+y| \leq |x| + |y| \leftrightarrow |x+y|^{2} \leq (|x|+|y|)^{2} \\
\leftrightarrow (x+y)^{2} \leq x^{2} + 2|x|*|y| +  y^{2} \\
\leftrightarrow 2x*y \leq 2|x|*|y| \leftrightarrow 2x*y \leq |2x*y|
}
$$
$$
\text{Prove: } ||x| - |y|| \leq |x-y|
$$
---
$$
\text{Prove: } a_{n} + b_{n} \to L + M
$$
$$
\displaylines{
\exists n_{1} : \forall n > n_{1} : |a_{n} - L| < \varepsilon_{1} = \frac{\varepsilon}{2} \\
\exists n_{2} : \forall n > n_{2} : |b_{n} - L| < \varepsilon_{2} = \frac{\varepsilon}{2} \\
|a_{n} + b_{n} - (L+M)| = |a_{n} - L + b_{n} - M| \leq |a_{n} - L| + |b_{n} - M| \\
\exists n_{\varepsilon} = max(n_{1}, n_{2}) : \forall n > n_{\varepsilon}: |a_{n} + b_{n} - (L+M)| \leq |a_{n} - L| + |b_{n} - M| < \varepsilon_{1} + \varepsilon_{2} = \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon \\
\implies \exists n_{\varepsilon} = max(n_{1}, n_{2}) : \forall n > n_{\varepsilon}: |a_{n} + b_{n} - (L+M)| < \varepsilon \\
\implies a_{n} + b_{n} \to L+M
}
$$
---
## Infinite limits #definition 
$$
\lim_{ n \to +\infty } a_{n} = +\infty \leftrightarrow \exists M > 0 : \forall n > n_{M} : M < a_{n}
$$
$$
\lim_{ n \to \infty } a_{n} = -\infty \leftrightarrow \lim_{ n \to \infty } -a_{n} = +\infty 
$$
---
## Zero limit of absolute value #lemma 
$$
|a_{n}| \to 0 \leftrightarrow a_{n} \to 0
$$
---
## "Inverse" limit #lemma 
$$
\text{Prove: } a_{n} > 0, \frac{1}{a_{n}} \to 0 \implies a_{n} \to +\infty 
$$
$$
\displaylines{
\exists n_{\varepsilon} : \forall n > n_{\varepsilon} : |\frac{1}{a_{n}}| < \varepsilon \leftrightarrow  \frac{1}{|a_{n}|} < \varepsilon \leftrightarrow |a_{n}| > \frac{1}{\varepsilon} \\
\implies \exists M = \frac{1}{\varepsilon} : \forall n > n_{M} = n_{\varepsilon} : |a_{n}| > M \implies a_{n} \to \infty
}
$$
---
