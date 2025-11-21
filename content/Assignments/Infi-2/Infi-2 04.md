---
{"publish":true,"created":"27/04/25, 14:04","modified":"2025-11-21T21:10:02.424+02:00","tags":["Academia","Assignment","Infi-2"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Let } r \in \mathbb{R} \\
\int_{-r}^{r} \sqrt{ r^{2}-x^{2} } \, dx \\
\\
\int_{-r}^{r} \sqrt{ r^{2}-x^{2} } \, dx = \left\{\begin{array}{}
x = r \cdot \sin t \\
dx = r \cdot \cos t dt \\
x = r \implies \sin t = 1 \implies t = \frac{\pi}{2} \\
x = -r \implies \sin t = -1 \implies t = -\frac{\pi}{2} \\
\end{array}\right\} = \\
= \int_{-\pi/2}^{\pi/2} r \cos t \sqrt{ r^{2} - r^{2}\sin^{2}t } \, dt = \int_{-\pi/2}^{\pi/2} r^{2}\cos^{2}t \, dt = \\
= \frac{r^{2}}{2} \int_{-\pi/2}^{\pi/2} \cos(2x)+1 \, dx = \frac{r^{2}}{2} \cdot \left( \frac{\sin(2x)}{2} + x \right) \Bigg|^{x=\pi/2}_{x=-\pi/2} = \\
= \frac{r^{2}}{2} \cdot \left( \frac{\pi}{2} + \frac{\pi}{2} \right) = \boxed{ \frac{\pi r^{2}}{2} } \\
\\
\text{Let } f(x) = \sqrt{ r^{2} - x^{2} } \\
\text{Let } y = f(x) \\
\implies y^{2} = r^{2} - x^{2} \implies x^{2} + y^{2} = r^{2}, y \geq 0 \\
\text{Which is a semi-circle or radius } \left\lvert r \right\rvert \\
\implies \int_{-r}^{r} f(x) \, dx \text{ is half the area of the circle of radius } \left\lvert r \right\rvert \\
\forall x \in [0, r]: f(-x) = f(x) \implies \int_{-r}^{r} f(x) \, dx = 2\int_{0}^{r} f(x) \, dx \\
\implies \boxed{ \text{Area of a circle of radius } \left\lvert r \right\rvert \text{ is equal to } 2\left( 2 \int_{0}^{r} f(x) \, dx  \right) = 4 \int_{0}^{r} \sqrt{ r^{2}-x^{2} } \, dx } \\
}
$$
# 2
$$
\displaylines{
\text{Calculate the area between a parabola } x = y^{2} + 1 \text{ and lines } y = 5, y = -5, x = 5 \\
\\
\text{Solution:} \\
\text{Assuming the area we're looking for is colored in purple:} \\
}
$$
![[Pasted image 20250428115655.png]]
$$
\displaylines{
\text{By changing the integration variable to $y$ (i.e. flipping the axes)} \\
\text{we get the following picture:} \\
}
$$
![[Pasted image 20250428183237.png]]
$$
\displaylines{
\text{Purple area for } 2 \leq y \leq 5 \text{ is area under parabola minus red(area under horizontal line (5)):} \\
\int_{2}^{5} y^{2} + 1 - 5 \, dy = \left( \frac{y^{3}}{3} - 4y \right)\Bigg|^{y=5}_{y=2} = \frac{125}{3} - 20 - \frac{8}{3} + 8 = 27 = \frac{81}{3} \\
\text{Purple area for } -2 \leq y \leq 2 \text{ is area under horizontal line (5) minus green:} \\
\int_{-2}^{2} 5 - (y^{2} + 1) \, dy = \left( 4y - \frac{y^{3}}{3} \right)\Bigg|^{y=2}_{y=-2} = 8 - \frac{8}{3} + 8 - \frac{8}{3} = 16 - \frac{16}{3} = \frac{32}{3} \\
\text{Purple area for } -5 \leq y \leq -2 \text{ is area under parabola} \\
\text{minus orange(area under horizontal line (5)):} \\
\int_{-5}^{-2} y^{2}+1 - 5 \, dy = \left( \frac{y^{3}}{3} - 4y \right)\Bigg|^{y=-2}_{y=-5} = -\frac{8}{3} + 8 + \frac{125}{3} - 20 = 27 = \frac{81}{3} \\
\implies \boxed{ \text{Total area enclosed between the parabola and the lines is } \frac{81}{3} + \frac{32}{3} + \frac{81}{3} = \frac{194}{3} } \\
}
$$
# 3
$$
\displaylines{
\text{Let } 0 < a \leq b \in \mathbb{R} \\
\text{Let } f(x) = \ln\left( \frac{e^{x}+1}{e^{x}-1} \right) \\
\text{Calculate the length of the arc of function } f \text{ on interval } [a, b] \\
\\
\text{Solution:} \\
f \text{ is defined on } (0, \infty) \\
f(x) \text{ is continuous on } (0, \infty) \\
f'(x) = \left( \frac{e^{x}+1}{e^{x}-1} \right)' \cdot \frac{e^{x}-1}{e^{x}+1} = \frac{(e^{x}-1) \cdot e^{x} - (e^{x}+1) \cdot e^{x}}{(e^{x}-1)^{2}} \cdot \frac{e^{x}-1}{e^{x}+1} = -\frac{2e^{x}}{e^{2x}-1} \\
f'(x) \text{ is continuous on } (0, \infty) \\
\implies f \text{ is continuously derivative on } (0, \infty) \\
\implies f \text{ is continuous derivative on } [a, b] \\
\implies L(f) = \int_{a}^{b} \sqrt{ 1 + (f'(x))^{2} } \, dx \\
\sqrt{ 1 + (f'(x))^{2} } = \sqrt{ 1 + \frac{4e^{2x}}{(e^{2x}-1)^{2}} } = \sqrt{ \frac{e^{4x}+2e^{2x}+1}{(e^{2x}-1)^{2}} } = \frac{e^{2x}+1}{e^{2x}-1} = \frac{e^{x}(e^{x}+e^{-x})}{e^{x}(e^{x}-e^{-x})} = \\
= \frac{\cosh(x)}{\sinh(x)} = \coth(x) \\
\implies L(f) = \int_{a}^{b} \coth(x) \, dx = \left\{\begin{array}{}
t = \sinh(x) \\
dt = \cosh(x)dx \\
x = b \implies t = \sinh(b) \\
x = a \implies t = \sinh(a) \\
\end{array}\right\} = \int_{\sinh(a)}^{\sinh(b)} \frac{1}{t} \, dt = \\
= \ln \left\lvert t \right\rvert \Bigg|^{t=\sinh(b)}_{t=\sinh(a)} = \ln \left\lvert \sinh(b) \right\rvert - \ln \left\lvert \sinh(a) \right\rvert \\
a, b > 0 \implies \sinh(a), \sinh(b) > 0 \\
\ln(\sinh(x)) = \ln(e^{x}-e^{-x}) - \ln(2) = \ln(e^{-x}) + \ln(e^{2x} - 1) - \ln(2) = \\
= \ln(e^{2x}-1) - x - \ln(2) \\
\implies \boxed{ L(f) = \ln(\sinh(b)) - \ln(\sinh(a)) = \ln(e^{2b}-1) - b - \ln(e^{2a}-1) + a } \\
}
$$
# 4a
$$
\displaylines{
\lim_{ x \to 0 } \frac{\int_{0}^{x} \frac{t}{\cos t} \, dt}{\sin ^{2}x} \\
\\
\lim_{ x \to 0 } \frac{\int_{0}^{x} \frac{t}{\cos t} \, dt}{\sin ^{2}x} \overset{ L }{ = } \lim_{ x \to 0 } \frac{\frac{x}{\cos x}}{\sin^{2}x} = \lim_{ x \to 0 } \underbrace{ \frac{x}{\sin x} }_{ \to 1 } \cdot \frac{1}{\sin x \cdot \underbrace{ \cos x }_{ \to 1 }} = \lim_{ x \to 0 } \frac{1}{\sin x} \\
\lim_{ x \to 0^{+} } \frac{1}{\sin x} = \infty \\
\lim_{ x \to 0^{-} } \frac{1}{\sin x} = -\infty \\
\implies \boxed{ \text{Two-sided limit does not exist} } \\
}
$$
# 4b
$$
\displaylines{
\lim_{ n \to \infty } \frac{n}{n^{2}+1} + \frac{n}{n^{2} + 4} + \dots + \frac{n}{2n^{2}} \\
\\
\lim_{ n \to \infty } \frac{n}{n^{2}+1} + \frac{n}{n^{2} + 4} + \dots + \frac{n}{2n^{2}} = \lim_{ n \to \infty } \sum_{i=1}^{n} \frac{n}{n^{2} + i^{2}} = \\
= \lim_{ n \to \infty } \sum_{i=1}^{n} \frac{n}{n^{2}\left( 1 + \frac{i^{2}}{n^{2}} \right)} = \lim_{ n \to \infty } \underbrace{ \frac{1}{n} }_{ \Delta x_{i} } \sum_{i=1}^{n} \frac{1}{1+\underbrace{ \frac{i^{2}}{n^{2}} }_{ x_{i}^{2} }} = \int_{0}^{1} \frac{1}{1+x^{2}} \, dx = \\
= \arctan(x)\Bigg|^{x=1}_{x=0} = \boxed{ \frac{\pi}{4} } \\
}
$$
# 4c
$$
\displaylines{
\lim_{ n \to \infty } \frac{1}{n} \left( \sin \frac{\pi}{n} + \sin \frac{2\pi}{n} + \dots + \sin \frac{(n-1)\pi}{n} \right) \\
\\
\lim_{ n \to \infty } \frac{1}{n} \left( \sin \frac{\pi}{n} + \sin \frac{2\pi}{n} + \dots + \sin \frac{(n-1)\pi}{n} \right) = \\
\overset{ \sin \pi = 0 }{ = } \lim_{ n \to \infty } \underbrace{ \frac{1}{n} }_{ \Delta x_{i} } \sum_{i=1}^{n} \sin\left( \underbrace{ \frac{i}{n} }_{ x_{i} }\pi \right) = \int_{0}^{1} \sin(\pi x) \, dx = \left( -\frac{1}{\pi}\cos(\pi x) \right)\Bigg|^{x=1}_{x=0} = \\
= \frac{1}{\pi} + \frac{1}{\pi} = \boxed{ \frac{2}{\pi} } \\
}
$$
# 4d
$$
\displaylines{
\lim_{ n \to \infty } \frac{1}{n^{2}}(e^{1/n^{2}} + 3e^{4/n^{2}} + \dots + (2n-1)e^{n^{2}/n^{2}}) \\
\\
\lim_{ n \to \infty } \frac{1}{n^{2}}(e^{1/n^{2}} + 3e^{4/n^{2}} + \dots + (2n-1)e^{n^{2}/n^{2}}) = \lim_{ n \to \infty } \frac{1}{n^{2}} \sum_{i=1}^{n} (2i-1)e^{i^{2}/n^{2}} = \\
= \left\{\begin{array}{}
\sum_{k=1}^{i} \frac{2k-1}{n^{2}} = \frac{i^{2}}{n^{2}}
\end{array}\right\}= \lim_{ n \to \infty } \sum_{i=1}^{n} \underbrace{ \frac{2i-1}{n^{2}} }_{ \Delta x_{i} } e^{\overbrace{ i^{2}/n^{2} }^{ x_{i} }} = \int_{0}^{1} e^{x} \, dx = \boxed{ e - 1 } \\
}
$$
# 5
$$
\displaylines{
\text{Find and classify local extremums of } f(x) = \int_{x}^{x+3} t(5-t) \, dt \\
\\
\text{Solution:} \\
f'(x) = (x+3)(5-(x+3)) - x(5-x) = - (x-2)(x+3) - 5x + x^{2} = \\
= -x^{2} - x + 6 - 5x + x^{2} = 6 - 6x \\
f''(x) = -6 \\
f \text{ has a local extremum } x_{0} \implies f'(x_{0}) = 0 \\
\implies \boxed{ \text{The only local extremum can be } x = 1 } \\
f''(1) = -6 \implies \boxed{ x = 1 \text{ is a local maximum of } f(x) } \\
\\
\text{Note: because there are no other extremums, } \boxed{ x = 1 \text{ is also a global maximum} } \\
\text{Note: } f(1) = \int_{1}^{4} 5t - t^{2} \, dt = \left( \frac{5t^{2}}{2} - \frac{t^{3}}{3} \right)\Bigg|^{t=4}_{t=1} = 40 - \frac{64}{3} - \frac{5}{2} + \frac{1}{3} = 19 - \frac{5}{2} = \frac{33}{2} \\
\implies \boxed{ \text{Global maximum is: } \left( 1, \frac{33}{2} \right) } \\
}
$$
# 6
$$
\displaylines{
\text{Given two different solutions:} \\
\int_{-1}^{1} \left( \arctan\left( \frac{1}{x} \right) \right)' \, dx = \arctan\left( \frac{1}{x} \right)\Bigg|^{x=1}_{x=-1} = \arctan(1) - \arctan(-1) = \frac{\pi}{2} \\
\int_{-1}^{1} \left( \arctan\left( \frac{1}{x} \right) \right)' \, dx = \int_{-1}^{1} \frac{-1}{1+x^{2}} \, dx = -(\arctan(1) - \arctan(-1)) = -\frac{\pi}{2} \\
\text{Determine which one is correct and explain why} \\
\\
\text{Solution:} \\
\boxed{ \text{Correct solution is the second one, } -\frac{\pi}{2} } \\
\text{First solution is using Fundamental theorem of Calculus} \\
\text{However one of it's conditions is that } F \text{ must be continuous on } [a, b] \\
\text{Whereas in this case there is a jump discontinuity at 0:} \\
\lim_{ x \to 0^{+} } \arctan\left( \frac{1}{x} \right) = \frac{\pi}{2} \\
\lim_{ x \to 0^{-} } \arctan\left( \frac{1}{x} \right) = -\frac{\pi}{2} \\
}
$$
