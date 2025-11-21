---
{"publish":true,"created":"13/11/24, 16:11","modified":"2025-11-21T21:10:24.966+02:00","tags":["Academia","Practice","Infi-1"],"cssclasses":""}
---

# Infi-1 3
### Sequence limit
$$
\displaylines{
\text{Number } L \text{ is a limit of sequence } a_{n} \text{(} a_{n} \text{ approaches } L \text{) if and only if:} \\
\forall \varepsilon > 0 \exists n_{\varepsilon} : \forall n > n_{\varepsilon} : \lvert a_{n} - L \rvert < \varepsilon \\
\text{The limit notation is as following:} \\
a_{n} \to L \text{ or } \lim_{ n \to \infty } a_{n} = L 
}
$$
---
### Exercise
$$
\text{Prove: } \lim_{ n \to \infty } \frac{1}{4n} = 0 
$$
$$
\displaylines{
\left\lvert  \frac{1}{4n} - 0  \right\rvert = \frac{1}{4n} < \frac{1}{4n_{\varepsilon}} \\
n_{\varepsilon} = \frac{1}{4\varepsilon} \\
\left\lvert  \frac{1}{4n} - 0  \right\rvert < \frac{1}{4n_{\varepsilon}} = \frac{1}{4\frac{1}{4\varepsilon}} = \varepsilon \\
\implies \forall \varepsilon > 0\exists n_{\varepsilon} = \frac{1}{4\varepsilon} : \forall n > n_{\varepsilon} : \left\lvert  \frac{1}{4n} - 0  \right\rvert < \varepsilon \\
\implies \lim_{ n \to \infty } \frac{1}{4n} = 0
}
$$
---
### Exercise
$$
\text{Prove: } \lim_{ n \to \infty } \frac{n^{2} + 1}{n^{2}} = 1
$$
$$
\displaylines{
\left\lvert  \frac{n^{2}+1}{n^{2}} - 1 \right\rvert = \left\lvert  \frac{n^{2}+1-n^{2}}{n^{2}}  \right\rvert = \frac{1}{n^{2}} < \frac{1}{n_{\varepsilon}^{2}} \\
n_{\varepsilon} = \sqrt{ \frac{1}{\varepsilon} } \\
\left\lvert  \frac{n^{2}+1}{n^{2}} - 1 \right\rvert < \frac{1}{n_{\varepsilon}^{2}} = \frac{1}{\sqrt{ \frac{1}{\varepsilon} }^{2}} = \varepsilon \\
\implies \forall \varepsilon > 0 \exists n_{\varepsilon} = \frac{1}{\sqrt{ \varepsilon }} : \forall n > n_{\varepsilon} : \left\lvert  \frac{n^{2}+1}{n^{2}} - 1 \right\rvert < \varepsilon \\
\implies \lim_{ n \to \infty } \frac{n^{2}+1}{n^{2}} = 1
}
$$
---
### Exercise
$$
\text{Prove: } \lim_{ n \to \infty } \frac{2n-1}{n} = 2 
$$
$$
\displaylines{
\left\lvert  \frac{2n-1}{n} - 2 \right\rvert = \left\lvert  \frac{2n-1-2n}{n}  \right\rvert = \left\lvert \frac{-1}{n}  \right\rvert = \frac{1}{n} < \frac{1}{n_{\varepsilon}} \\
n_{\varepsilon} = \left\lceil \frac{1}{\varepsilon} \right\rceil + 1 \\
\left\lvert  \frac{2n-1}{n} - 2 \right\rvert < \frac{1}{n_{\varepsilon}} = \frac{1}{\left\lceil  \frac{1}{\varepsilon}  \right\rceil + 1 } < \frac{1}{\left\lceil  \frac{1}{\varepsilon}  \right\rceil } \leq  \frac{1}{\frac{1}{\varepsilon}} = \varepsilon \\
\implies \forall \varepsilon > 0 \exists n_{\varepsilon} = \left\lceil  \frac{1}{\varepsilon}  \right\rceil + 1: \forall n > n_{\varepsilon} : \left\lvert  \frac{2n-1}{n} - 2 \right\rvert < \varepsilon \\
\implies \lim_{ n \to \infty } \frac{2n-1}{n} = 2
}
$$
---
### Exercise
$$
\text{Prove: } \lim_{ n \to \infty } \frac{1}{n+7} = 0
$$
$$
\displaylines{
\left\lvert  \frac{1}{n+7} - 0  \right\rvert = \frac{1}{n+7} < \frac{1}{n_{\varepsilon} + 7} \\
n_{\varepsilon} = \left\lceil  \frac{1}{\varepsilon} - 7 \right\rceil + 10 \\
\left\lvert  \frac{1}{n+7} - 0  \right\rvert < \frac{1}{n_{\varepsilon} + 7} = \frac{1}{\left\lceil  \frac{1}{\varepsilon} - 7 \right\rceil + 17} \leq \frac{1}{\frac{1}{\varepsilon} + 10} < \frac{1}{\frac{1}{\varepsilon}} = \varepsilon \\
\implies \forall \varepsilon > 0 \exists n_{\varepsilon} = \left\lceil  \frac{1}{\varepsilon} - 7 \right\rceil + 10 : \forall n > n_{\varepsilon} : \left\lvert  \frac{1}{n+7} - 0 \right\rvert < \varepsilon \\
\implies \lim_{ n \to \infty } \frac{1}{n+7} = 0
}
$$
---
### Exercise
$$
\text{Prove: } \lim_{ n \to \infty } \frac{n^{2}-1}{3n^{2}+n+1} = \frac{1}{3}
$$
$$
\displaylines{
\left\lvert  \frac{n^{2}-1}{3n^{2}+n+1}-\frac{1}{3} \right\rvert = \left\lvert  \frac{3n^{2}-3-(3n^{2}+n+1)}{9n^{2}+3n+3}  \right\rvert = \left\lvert  \frac{-n-4}{9n^{2}+3n+3}  \right\rvert = \\
= \frac{n+4}{9n^{2}+3n+3} \leq \frac{n+4n}{9n^{2}+3n+3} < \frac{5n}{9n^{2}} = \frac{5}{9n} < \frac{5}{5n} < \frac{1}{n_{\varepsilon}} \\
n_{\varepsilon} = \left\lceil  \frac{1}{\varepsilon}  \right\rceil \\
\left\lvert  \frac{n^{2}-1}{3n^{2}+n+1}-\frac{1}{3} \right\rvert < \frac{1}{n_{\varepsilon}} = \frac{1}{\left\lceil  \frac{1}{\varepsilon}  \right\rceil } \leq \frac{1}{\frac{1}{\varepsilon}} = \varepsilon \\
\implies \forall \varepsilon > 0 \exists n_{\varepsilon} = \left\lceil  \frac{1}{\varepsilon}  \right\rceil  : \forall n > n_{\varepsilon} : \left\lvert  \frac{n^{2}-1}{3n^{2}+n+1}-\frac{1}{3} \right\rvert < \varepsilon \\
\implies \lim_{ n \to \infty } \frac{n^{2}-1}{3n^{2}+n+1} =\frac{1}{3}
}
$$
---
### Exercise
$$
\text{Prove: } \lim_{ n \to \infty } a_{n} = 1 \implies \exists n_{\varepsilon} : \forall n > n_{\varepsilon} : \exists a_{n} > \frac{1}{2}
$$
$$
\displaylines{
\lim_{ n \to \infty } a_{n} = 1 \implies \forall \varepsilon > 0: \exists n_{\varepsilon} : \forall n > n_{\varepsilon} : \lvert a_{n} - 1 \rvert < \varepsilon \\
\text{Let } \varepsilon = \frac{1}{2} \\
\exists n_{\varepsilon} : \forall n > n_{\varepsilon} : \lvert a_{n} - 1 \rvert < \frac{1}{2} \\
\implies \exists n_{\varepsilon} : \forall n > n_{\varepsilon} : \frac{1}{2} < a_{n} < \frac{3}{2} \\
}
$$
---
### Exercise
$$
\text{Prove: } \lim_{ n \to \infty } a_{n} = L > 0 \implies \exists n_{\varepsilon} : \forall n > n_{\varepsilon} : \exists a_{n} < \frac{11}{10}L
$$
$$
\displaylines{
\lim_{ n \to \infty } a_{n} = L \implies \forall \varepsilon > 0: \exists n_{\varepsilon} : \forall n > n_{\varepsilon} : \lvert a_{n} - L \rvert < \varepsilon \\
\text{Let } \varepsilon = \frac{L}{10} \\
\exists n_{\varepsilon} : \forall n > n_{\varepsilon} : \lvert a_{n} - L \rvert < \frac{L}{10} \\
\implies \exists n_{\varepsilon} : \forall n > n_{\varepsilon} : \frac{9}{10}L < a_{n} < \frac{11}{10}L \\
}
$$
---
