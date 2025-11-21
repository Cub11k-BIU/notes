---
{"publish":true,"created":"11/05/25, 14:05","modified":"2025-11-21T21:10:02.459+02:00","tags":["Academia","Assignment","Infi-2"],"cssclasses":""}
---

# 1a
$$
\displaylines{
f_{n}(x) = \frac{1}{1 + 3^{n}x^{n}}, x \in [1, 4] \\
\\
\lim_{ n \to \infty } f_{n}(x) = \lim_{ n \to \infty } \frac{1}{1 + 3^{n}x^{n}} \\
x = 1 \implies x^{n} = 1 \implies \lim_{ n \to \infty } \frac{1}{1 + 3^{n}x^{n}} = \lim_{ n \to \infty } \frac{1}{1 + 3^{n}} = 0 \\
1 < x \leq 4 \implies x^{n} \to \infty \implies \lim_{ n \to \infty } \frac{1}{1 + 3^{n}x^{n}} = 0 \\
\implies \lim_{ n \to \infty } f_{n}(x) = f(x) = 0 \\
d_{n} = \sup_{x \in 1[, 4]} \left\lvert f_{n}(x) - f(x) \right\rvert = \max_{x \in [1, 4]} \frac{1}{1 + 3^{n}x^{n}} \\
(d_{n})' = \left( \frac{1}{1 + 3^{n}x^{n}} \right)' = -\frac{n \cdot 3^{n}x^{n-1}}{(1 + 3^{n}x^{n})^{2}} \\
\implies \forall x \in [1, 4]: (d_{n})' < 0 \\
\implies d_{n} = f_{n}(1) = \frac{1}{1 + 3^{n}} \to 0 \\
\implies \boxed{ f_{n} \rightrightarrows 0 } \\
}
$$
# 1b
$$
\displaylines{
f_{n}(x) = \frac{1}{1 + 3^{n}x^{n}}, x \in \left[ \frac{1}{4}, 4 \right] \\
\\
\lim_{ n \to \infty } f_{n}(x) = \lim_{ n \to \infty } \frac{1}{1 + (3x)^{n}} \\
\frac{1}{4} \leq x < \frac{1}{3} \implies 3x < 1 \implies (3x)^{n} \to 0 \implies \lim_{ n \to \infty } f_{n}(x) = 1 \\
x = \frac{1}{3} \implies 3x = 1 \implies (3x)^{n} = 1 \implies \lim_{ n \to \infty } f_{n}(x) = \frac{1}{2} \\
\frac{1}{3} < x \leq 4 \implies 3x > 1 \implies (3x)^{n} \to \infty \implies \lim_{ n \to \infty } f_{n}(x) = 0 \\
\implies \boxed{ f_{n}(x) \to f(x) = \left\{\begin{array}{}
1 & x \in \left[ \frac{1}{4}, \frac{1}{3} \right) \\
\frac{1}{2} & x = \frac{1}{3} \\
0 & x \in \left( \frac{1}{3}, 4 \right] \\
\end{array}\right. } \\
\forall n \in \mathbb{N}: f_{n}(x) \text{ is continuous} \\
f(x) \text{ is not continuous} \implies \boxed{ f_{n}(x) \not\rightrightarrows f(x) } \\
}
$$
# 1c
$$
\displaylines{
f_{n}(x) = \sin^{2n}(x), x \in \left[ -\frac{\pi}{2}, \frac{\pi}{2} \right] \\
\\
\lim_{ n \to \infty } f_{n}(x) = \lim_{ n \to \infty } \sin^{2n}(x) \\
x = -\frac{\pi}{2} \implies \sin(x) = -1 \implies \sin^{2n}(x) = (-1)^{2n} = 1 \\
x = \frac{\pi}{2} \implies \sin(x) = 1 \implies \sin^{2n}(x) = 1 \\
-\frac{\pi}{2} < x < \frac{\pi}{2} \implies \left\lvert \sin(x) \right\rvert < 1 \implies \sin^{2n}(x) \to 0 \\
\implies \boxed{ f_{n}(x) \to f(x) = \left\{\begin{array}{}
1 & x = \pm \frac{\pi}{2} \\
0 & x \in \left( -\frac{\pi}{2}, \frac{\pi}{2} \right) \\
\end{array}\right. } \\
\forall n \in \mathbb{N}: f_{n}(x) \text{ is continuous} \\
f(x) \text{ is not continuous} \implies \boxed{ f_{n} \not\rightrightarrows f(x) } \\
}
$$
# 1d
$$
\displaylines{
f_{n}(x) = n^{2}\sin\left( \frac{x^{2}}{n^{2}} \right), x \in \mathbb{R} \\
\\
\lim_{ n \to \infty } f_{n}(x) = \lim_{ n \to \infty } n^{2}\sin\left( \frac{x^{2}}{n^{2}} \right) = \lim_{ n \to \infty } x^{2} \frac{\sin\left( \frac{x^{2}}{n^{2}} \right)}{\frac{x^{2}}{n^{2}}} \underset{ \frac{x^{2}}{n^{2}} \to 0 }{ = } x^{2} \\
x = 0 \implies \sin\left( \frac{x^{2}}{n^{2}} \right) = 0 \implies f_{n}(x) \to 0 (= x^{2}) \\
\implies \boxed{ f_{n}(x) \to f(x) = x^{2} } \\
d_{n} = \sup_{x \in \mathbb{R}} \left\lvert f_{n}(x) - f(x) \right\rvert = \sup_{x \in \mathbb{R}} \left\lvert n^{2}\sin\left( \frac{x^{2}}{n^{2}} \right) - x^{2} \right\rvert \\
-n^{2} \leq n^{2}\sin\left( \frac{x^{2}}{n^{2}} \right) \leq n^{2} \\
x^{2} \text{ is not bounded} \\
\implies \left\lvert n^{2}\sin\left( \frac{x^{2}}{n^{2}} \right) - x^{2} \right\rvert \text{ is not bounded} \\
\implies d_{n} = \infty \implies \boxed{ f_{n} \not\rightrightarrows f(x) } \\
}
$$
# 1e
$$
\displaylines{
f_{n}(x) = nxe^{-n^{2}x}, x \in [0, \infty) \\
\\
\lim_{ n \to \infty } f_{n}(x) = \lim_{ n \to \infty } nxe^{-n^{2}x} = \frac{nx}{e^{n^{2}x}} = 0 \\
d_{n} = \sup_{x \in [0, \infty)} \left\lvert f_{n}(x) - f(x) \right\rvert = \sup_{x \in [0, \infty)} nxe^{-n^{2}x} \\
f_{n}(0) = 0 \\
(nxe^{-n^{2}x})' = ne^{-n^{2}x} - n^{3}xe^{-n^{2}x} = ne^{-n^{2}x}(1-n^{2}x) \\
(nxe^{-n^{2}x})' = 0 \iff x = \frac{1}{n^{2}} \\
(nxe^{-n^{2}x})'' = (ne^{-n^{2}x} - n^{3}xe^{-n^{2}x})' = -n^{3}e^{-n^{2}x} - (n^{3}e^{-n^{2}x} - n^{5}xe^{-n^{2}x}) = \\
= ne^{-n^{2}x}(n^{4}x - 2n^{2}) \\
\implies (nxe^{-n^{2}x})''\left( \frac{1}{n^{2}} \right) = -n^{3}e^{-1} < 0 \\
\implies \frac{1}{n^{2}} \text{ is a local maximum} \\
\frac{1}{n^{2}} \text{ is the only local extremum} \implies \text{It is also a global extremum} \\
\implies d_{n} = f_{n}\left( \frac{1}{n^{2}} \right) = \frac{1}{n}e^{-1} \to 0 \\
\implies \boxed{ f_{n}(x) \rightrightarrows 0 } \\
}
$$
# 1f
$$
\displaylines{
f_{n}(x) = x^{n}e^{-n^{2}x}, x \in (0, \infty) \\
\\
\lim_{ n \to \infty } f_{n}(x) = \lim_{ n \to \infty } x^{n}e^{-n^{2}x} = \lim_{ n \to \infty } \left( \frac{x}{e^{nx}} \right)^{n} = 0 \\
d_{n} = \sup_{x \in (0, \infty)} \left\lvert f_{n}(x) - f(x) \right\rvert = \sup_{x \in (0, \infty)} x^{n}e^{-n^{2}x} \\
(x^{n}e^{-n^{2}x})' = nx^{n-1}e^{-n^{2}x} - n^{2}x^{n}e^{-n^{2}x} = nx^{n-1}e^{-n^{2}x}(1 - nx) \\
(x^{n}e^{-n^{2}x})' = 0 \iff x = \frac{1}{n} \\
(x^{n}e^{-n^{2}x})'' = (nx^{n-1}e^{-n^{2}x} - n^{2}x^{n}e^{-n^{2}x})' = \\
= (n-1)nx^{n-2}e^{-n^{2}x} - 2n^{3}x^{n-1}e^{-n^{2}x} + n^{4}x^{n}e^{-n^{2}x} = \\
= nx^{n-2}e^{-n^{2}x}(-1 + n - 2n^{2}x + n^{3}x^{2}) \\
(x^{n}e^{-n^{2}x})''\left( \frac{1}{n} \right) = -n^{1-n}e^{-n} < 0 \\
\implies \frac{1}{n} \text{ is a local maximum} \\
\frac{1}{n} \text{ is the only local extremum} \implies \text{It is also a global extremum} \\
\implies d_{n} = f_{n}\left( \frac{1}{n} \right) = \frac{1}{n^{n}e^{n}} \to 0 \\
\implies \boxed{ f_{n}(x) \rightrightarrows 0 } \\
}
$$
# 1g
$$
\displaylines{
f_{n}(x) = \frac{2}{nx + 4}, x \in (0, \infty) \\
\\
\boxed{ \lim_{ n \to \infty } f_{n}(x) = \lim_{ n \to \infty } \frac{2}{nx + 4} = 0 } \\
d_{n} = \sup_{x \in (0, \infty)} \left\lvert f_{n}(x) - f(x) \right\rvert = \sup_{x \in (0, \infty)} \frac{2}{nx + 4} \\
\text{Let } x_{1} < x_{2} \\
\frac{2}{nx_{1} + 4} > \frac{2}{nx^{2} + 4} \implies \frac{2}{nx + 4} \text{ is monotonically decreasing} \\
\implies d_{n} = \lim_{ x \to 0^{+} } \frac{2}{nx + 4} = \frac{1}{2} \\
\implies \boxed{ f_{n}(x) \not\rightrightarrows 0 } \\
}
$$
# 1h
$$
\displaylines{
f_{n}(x) = \frac{\arctan(2x)}{n+\sin(2n)}, x \in \mathbb{R} \\
\\
\lim_{ n \to \infty } f_{n}(x) = \lim_{ n \to \infty } \frac{\arctan(2x)}{n+\sin(2n)} = 0 \\
d_{n} = \sup_{x \in \mathbb{R}} \left\lvert f_{n}(x) - f(x) \right\rvert = \sup_{x \in \mathbb{R}} \left\lvert \frac{\arctan(2x)}{n + \sin(2n)} \right\rvert = \\
= \frac{\sup_{x \in \mathbb{R}} \left\lvert \arctan(2x) \right\rvert}{n + \sin(2n)} = \frac{\frac{\pi}{2}}{n + \sin(2n)} \to 0 \\
\implies \boxed{ f_{n} \rightrightarrows 0 } \\
}
$$
# 2a
$$
\displaylines{
\text{Let } f_{n}(x) \to f(x) \text{ on } [a, b] \\
\text{Prove or disprove: } f(x) \text{ is not continuous} \implies f_{n} \not\rightrightarrows f(x) \\
\\
\text{Disproof:} \\
\text{Let } [a, b] = [1, 2] \\
f(x) \text{ has a jump discontinuity at } a \\
\text{Let } f_{n}(x) = \left\{\begin{array}{}
0 & x = a \\
\sqrt[n]{ x } & x \in (a, b] \\
\end{array}\right. \\
f_{n}(x) \to f(x) = \left\{\begin{array}{}
0 & x = a \\
1 & x \in (a, b] \\
\end{array}\right. \\
d_{n} = \sup_{x \in [a, b]} \left\lvert f_{n}(x) - f(x) \right\rvert = \max\{0, \sup_{x \in (a, b]} \left\lvert \sqrt[n]{ x } - 1 \right\rvert\} \\
\sup_{x \in (a, b]} \left\lvert \sqrt[n]{ x } - 1 \right\rvert = \left\lvert \sqrt[n]{ b } - 1 \right\rvert = \sqrt[n]{ 2 } - 1 > 0 \\
\implies d_{n} = \sqrt[n]{ 2 } - 1 \to 0 \implies \boxed{ f_{n}(x) \rightrightarrows f(x) } \\
}
$$
# 2b
$$
\displaylines{
\text{Let } f_{n}(x) \text{ be a sequence of non-continuous functions on } [a, b] \\
\text{Let } f_{n}(x) \rightrightarrows f(x) \\
\text{Prove or disprove: } f(x) \text{ is non-continuous on } [a, b] \\
\\
\text{Disproof:} \\
\text{Let } [a, b] = [0, 1] \\
\text{Let } f_{n}(x) = \left\{\begin{array}{}
\frac{1}{n} & x = 0 \\
0 & x \neq 0 \\
\end{array}\right. \\
f_{n}(x) \to 0 \\
d_{n} = \sup_{x \in [0, 1]} \left\lvert f_{n}(x) - f(x) \right\rvert = \frac{1}{n} \to 0 \\
\implies \boxed{ f_{n}(x) \rightrightarrows 0 } \\
}
$$
# 3a
$$
\displaylines{
\text{Let } f_{n}(x) \to f(x) \text{ on } I \\
\text{Let } f_{n}(x) \not\rightrightarrows f(x) \\
\text{Let } p \in I \\
\text{Prove: } f_{n}(x) \not\rightrightarrows f(x) \text{ on } I \setminus \Set{ p } \\
\\
\text{Proof:} \\
d_{n} = \sup_{x \in I} \left\lvert f_{n}(x) - f(x) \right\rvert = \max\left\{\left\lvert f_{n}(p) - f(p) \right\rvert, \sup_{x \in I \setminus \Set{ p }} \left\lvert f_{n}(x) - f(x) \right\rvert \right\} \not\to 0 \\
f_{n}(x) \to f(x) \underset{ x = p }{ \implies } \lim_{ n \to \infty } f_{n}(p) = f(p) \\
\implies \left\lvert f_{n}(p) - f(p) \right\rvert \to 0 \\
\implies d_{n} = \sup_{x \in I \setminus \Set{ p }} \left\lvert f_{n}(x) - f(x) \right\rvert \not\to 0 \\
\implies \boxed{ f_{n}(x) \not\rightrightarrows f(x) \text{ on } I \setminus \Set{ p } } \\
}
$$
# 3b
$$
\displaylines{
\text{Let } f_{n}(x) \to f(x) \text{ on } I \\
\text{Let } f_{n}(x) \not\rightrightarrows f(x) \\
\text{Let } A = \Set{ p_{1}, \dots, p_{k} } : \forall i \in [1, k]: p_{i} \in I \\
\text{Show by induction: } f_{n}(x) \not\rightrightarrows f(x) \text{ on } I \setminus A \\
\\
\text{Solution:} \\
\text{Base case. } A = \Set{ p_{1} } \\
\text{Proved in 3a} \\
\text{Induction step. Let } A' = \Set{ p_{1}, \dots, p_{k-1} }: f_{n} \not\rightrightarrows f(x) \text{ on } I \setminus A' \\
\text{Let } A = A' \cup \Set{ p_{k} } \\
d_{n} = \sup_{x \in I \setminus A} \left\lvert f_{n}(x) - f(x) \right\rvert = \max\left\{ \left\lvert f_{n}(p_{k}) - f(p_{k}) \right\rvert, \sup_{x \in I \setminus A'} \left\lvert f_{n}(x) - f(x) \right\rvert \right\} \not\to 0 \\
f_{n} \to f \underset{ x = p_{k} }{ \implies } \lim_{ n \to \infty } f_{n}(p_{k}) = f(p_{k}) \implies \left\lvert f_{n}(p_{k}) - f(p_{k}) \right\rvert \to 0 \\
d_{n} = \sup_{x \in I \setminus A'} \left\lvert f_{n}(x) - f(x) \right\rvert \not\to 0 \implies f_{n}(x) \not\rightrightarrows f(x) \text{ on } I \setminus A \\
\implies \text{By Induction: } \boxed{ \forall A \text{ finite}: f_{n}(x) \not\rightrightarrows f(x) \text{ on } I \setminus A } \\
}
$$
# 3c
$$
\displaylines{
\text{Let } f_{n}(x) \to f(x) \text{ on } [a, b] \\
\text{Let } f_{n}(x) \not\rightrightarrows f(x) \\
\text{Show: } f_{n}(x) \not\rightrightarrows f(x) \text{ on } (a, b) \\
\\
\text{Solution:} \\
\text{Let } I = [a, b] \\
\text{Let } A = \Set{ a, b } \\
\implies I \setminus A = (a, b) \\
f_{n}(x) \not\rightrightarrows f(x) \text{ on } I \implies \boxed{ f_{n}(x) \not\rightrightarrows f(x) \text{ on } I \setminus A } \\
\\
\text{Alternative:} \\
d_{n} = \sup_{x \in [a, b]} \left\lvert f_{n}(x) - f(x) \right\rvert = \max\left\{ \underbrace{ \left\lvert f_{n}(a) - f(a) \right\rvert }_{ \to 0 }, \underbrace{ \left\lvert f_{n}(b) - f(b) \right\rvert }_{ \to 0 }, \sup_{x \in (a, b)} \left\lvert f_{n}(x) - f(x) \right\rvert \right\} \\
\implies d_{n} = \sup_{x \in (a, b)} \left\lvert f_{n}(x) - f(x) \right\rvert \\
d_{n} \not\to 0 \implies \sup_{x \in (a, b)} \left\lvert f_{n}(x) - f(x) \right\rvert \not\to 0 \\
\implies \boxed{ f_{n}(x) \not\rightrightarrows f(x) \text{ on } (a, b) } \\
}
$$
# 4
$$
\displaylines{
\text{Let } f_{n}(x) = \sin^{n}(x) \text{ on } \left[ 0, \frac{\pi}{2} \right] \\
\text{Find: } \lim_{ n \to \infty } \int_{0}^{\pi/2} f_{n}(x) \, dx \\
\\
\text{Solution:} \\
0 \leq x \leq \frac{\pi}{2} \implies \sin(x) \geq 0 \\
0 \leq x < \frac{\pi}{2} \implies \sin(x) < 1 \implies f_{n}(x) \to 0 \\
x = \frac{\pi}{2} \implies f_{n}(x) = 1^{n} = 1 \implies f_{n}(x) \to 1 \\
\implies f_{n}(x) \to f(x) = \left\{\begin{array}{}
0 & x \in \left[ 0, \frac{\pi}{2} \right) \\
1 & x = \frac{\pi}{2} \\
\end{array}\right. \\
f_{n}(x) \text{ is continuous, } f(x) \text{ is not continuous } \implies f_{n}(x) \not\rightrightarrows f(x) \\
\text{Let } a \in \left( 0, \frac{\pi}{2} \right) \\
d_{n} = \sup_{x \in [0, a]} \left\lvert f_{n}(x) - f(x) \right\rvert = \max_{x \in [0, a]} \left\lvert \sin^{n}(x) \right\rvert = \sin^{n}(a) \to 0 \\
\implies f_{n}(x) \rightrightarrows f(x) \text{ on } \left[ 0, a \right]
\implies \lim_{ n \to \infty } \int_{0}^{\pi/2} f_{n}(x) \, dx = \int_{0}^{a} f(x) \, dx + \lim_{ n \to \infty } \int_{a}^{\pi/2} f_{n}(x) \, dx \\
\int_{0}^{a} f(x) \, dx = \int_{0}^{a} 0 \, dx = 0 \\
\forall x \in \left[ a, \frac{\pi}{2} \right]: f_{n}(x) \leq 1 \implies \int_{a}^{\pi/2} f_{n}(x) \, dx \leq \left( \frac{\pi}{2} - a \right) \\
\implies \lim_{ n \to \infty } \int_{a}^{\pi/2} f_{n}(x) \, dx \leq \lim_{ n \to \infty } \left( \frac{\pi}{2} - a \right) = \frac{\pi}{2} - a \\
\text{Let } \varepsilon > 0 \\
\text{Let } a = \left\{\begin{array}{}
\frac{\pi - \varepsilon}{2} & \varepsilon < \pi \\
\frac{\pi - 1}{2} & \varepsilon \geq \pi \\
\end{array}\right. \\
\implies \left\lvert \int_{a}^{\pi/2} f_{n}(x) \, dx \right\rvert \leq \frac{\pi}{2} - a = \left\{\begin{array}{}
\frac{\varepsilon}{2} & \varepsilon < \pi \\
\frac{1}{2} & \varepsilon \geq \pi \\
\end{array}\right\} < \varepsilon \\
\implies \boxed{ \lim_{ n \to \infty } \int_{a}^{\pi/2} f_{n}(x) \, dx = 0 } \\
}
$$
