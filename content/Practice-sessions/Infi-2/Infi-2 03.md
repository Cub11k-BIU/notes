---
{"publish":true,"created":"31/03/25, 14:03","modified":"2025-11-21T21:10:24.857+02:00","tags":["Academia","Practice","Infi-2"],"cssclasses":""}
---

$$
\displaylines{
\int_{0}^{1} x \, dx = \left\{\begin{array}{}
\Delta x_{i} = \frac{1}{m} \\
x_{i} = \frac{i}{m} \\
\end{array}\right\} = \lim_{ m \to \infty } \sum_{i=1}^{m} \frac{f\left( \frac{i}{m} \right)}{m} = \lim_{ m \to \infty } \sum_{i=1}^{m} \frac{i}{m^{2}} = \lim_{ m \to \infty } \frac{1}{m^{2}}\sum_{i=1}^{m} i = \\
= \lim_{ m \to \infty } \frac{1}{m^{2}} \cdot \frac{m(m+1)}{2} = \lim_{ m \to \infty } \frac{m^{2}+m}{2m^{2}} = \frac{1}{2} \\
}
$$
---
$$
\displaylines{
\int_{0}^{5} (5-x) \, d = \left\{\begin{array}{}
\delta x_{i} = \frac{5}{m} \\
x_{i} = \frac{5i}{m} \\
\end{array}\right\} = \lim_{ m \to \infty } \sum_{i=1}^{m} \left( 5-\frac{5i}{m} \right) \cdot \frac{5}{m} = \\
= \lim_{ m \to \infty } \sum_{i=1}^{m} \frac{25}{m} - \sum_{i=1}^{m} \frac{25i}{m^{2}} = 25 - \lim_{ m \to \infty } \frac{25}{m^{2}}\sum_{i=1}^{m} i = \frac{25}{2} \\
}
$$
---
$$
\displaylines{
\int_{0}^{1} x^{2} \, dx = \left\{\begin{array}{}
\Delta x_{i} = \frac{1}{m} \\
x_{i} = \frac{i}{m} \\
\end{array}\right\} = \lim_{ m \to \infty } \sum_{i=1}^{m} \frac{i^{2}}{m^{3}} = \lim_{ m \to \infty } \frac{1}{m^{3}} \sum_{i=1}^{m} i^{2} = \\
= \lim_{ m \to \infty } \frac{m(m+1)(2m+1)}{6m^{3}} = \lim_{ m \to \infty } \frac{2m^{3} + 3m^{2} + m}{m^{3}} = \frac{1}{3} \\
}
$$
---
$$
\displaylines{
\int_{3}^{5} x \, d = \left\{\begin{array}{}
\Delta x_{i} = 3 + \frac{2}{m} \\
x_{i} = \frac{2i}{m} \\
\end{array}\right\} = \lim_{ m \to \infty } \sum_{i=1}^{m} \frac{6}{m} + \frac{4i}{m^{2}} = \lim_{ m \to \infty } 6 \sum_{i=1}^{m} \frac{1}{m} + \frac{4m^{2}+4m}{2m^{2}} = \\
= 6 + 2 = 8 \\
}
$$
---
$$
\displaylines{
\int_{0}^{1} \sqrt{ x } \, dx = \left\{\begin{array}{}
\Delta x_{i} = \frac{1}{m} \\
x_{i} = \frac{i}{m} \\
\end{array}\right\} = \lim_{ m \to \infty } \sum_{i=1}^{m} \sqrt{ \frac{i}{m} } \frac{1}{m} = \lim_{ m \to \infty } \frac{1}{m\sqrt{ m }} \sum_{i=1}^{m} \sqrt{ i } = ??? \\
\int_{0}^{1} \sqrt{ x } \, dx = \left\{\begin{array}{}
\Delta x_{i} = \frac{2i-1}{m^{2}} \\
x_{i} = \frac{i^{2}}{m^{2}} \\
\end{array}\right\} = \lim_{ m \to \infty } \sum_{i=1}^{m} \frac{i(2i-1)}{m^{3}} = \lim_{ m \to \infty } \frac{2}{m^{3}} \sum_{i=1}^{m} i^{2} - \frac{1}{m^{3}} \sum_{i=1}^{m} i = \\
= \lim_{ m \to \infty } \frac{2(2m^{3}+3m^{2}+m)}{6m^{3}} - \frac{m^{2}+m}{2m^{3}} = \lim_{ m \to \infty } \frac{4m^{3} + 3m^{2} - m}{6m^{3}} = \frac{2}{3} \\
}
$$
---
$$
\displaylines{
D(x) = \left\{\begin{array}{}
0 & x \in \mathbb{Q} \\
1 & x \not\in \mathbb{Q} \\
\end{array}\right. \\
x_{i} \in \mathbb{Q} \implies \sum_{i=1}^{m} \frac{1}{m} \cdot 0 \to 0 \\
x_{i} \not\in \mathbb{Q} \implies \sum_{i=1}^{m} \frac{1}{m} \cdot 1 \to 1 \\
\implies D(x) \text{ is not Riemann-integrable} \\
}
$$
---
$$
\displaylines{
f(x) = \left\{\begin{array}{}
\frac{1}{x^{2}} & x > 0 \\
0 & x = 0 \\
\end{array}\right. \text{ on } [0, 1] \\
f \text{ is not bounded at } 0 \implies f \text{ is not integrable on } [0, 1] \\
}
$$
---
$$
\displaylines{
\int_{1}^{4} \frac{1}{x^{3}} \, dx = \left\{\begin{array}{}
\Delta x_{i} = 4^{i/n}\left( 1 - \frac{1}{4^{1/n}} \right) \\
x_{i} = 4^{i/n}
\end{array}\right\} = \lim_{ n \to \infty } \sum_{i=1}^{n} \frac{1}{4^{3i/n}} \cdot 4^{i/n}\left( 1 - \frac{1}{4^{1/n}} \right) = \\
= \lim_{ n \to \infty } \left( 1 - \frac{1}{4^{1/n}} \right) \cdot \sum_{i=1}^{n} \frac{1}{4^{2i/n}} = \lim_{ n \to \infty } \left( 1 - \frac{1}{4^{1/n}} \right) \cdot \frac{1}{4^{2/n}} \cdot \frac{\left( \frac{1}{4^{2}} - 1 \right)}{\frac{1}{4^{2/n}} - 1} = \\
\lim_{ n \to \infty } \frac{\frac{1}{4^{2/n}}\left( 1-\frac{1}{16} \right)}{1 + 4^{1/n}} = \frac{15}{32} \\
}
$$
---
