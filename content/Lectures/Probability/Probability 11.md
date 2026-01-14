---
{"publish":true,"created":"14/01/26, 12:58","modified":"2026-01-14T15:30:06.690+02:00","tags":["Academia","Lecture","Probability"],"cssclasses":""}
---

## Normal distribution aka Gaussian #definition 
$$
\displaylines{
\text{A random variable } X \sim \mathcal{N}(\mu, \sigma^{2}) \text{ is called a normal random variable} \\
\text{It also introduces a Normal distribution} \\
\\
\forall x \in \mathbb{R}: f(x) = \frac{1}{\sqrt{ 2\pi\sigma^{2} }}\exp\left( - \frac{(x-\mu)^{2}}{2\sigma^{2}} \right) \\
}
$$
```tikz
\usepackage{tikz}

\begin{document}
\begin{tikzpicture}

\def\normaltwo{\x,{4*1/exp(((\x-3)^2)/2)}}

\draw[color=blue,domain=0:6] plot (\normaltwo) node[right] {};

\draw[dashed] (3,4) -- (3,0) node[below] {$\mu$};
%% \draw (3,0) node[below] {$\mu$}; %%

\draw[->] (0,0) -- (6.2,0) node[right] {};
\draw[->] (0,0) -- (0,5) node[above] {};

\end{tikzpicture}
\end{document}
```
$$
\displaylines{
\text{Let us prove that } f \text{ is in fact a correct PDF} \\
\int_{-\infty}^{\infty} \frac{1}{\sqrt{ 2\pi\sigma^{2} }}\exp\left( - \frac{(x-\mu)^{2}}{2\sigma^{2}} \right) \, dx = \sbs{
y = \frac{x-\mu}{\sigma} \\
dy = \frac{1}{\sigma} dx \\
} = \int_{-\infty}^{\infty} \frac{1}{\sqrt{ 2\pi }}\exp\left( -\frac{y^{2}}{2} \right) \, dy \\
\\
\text{Let } I = \int_{-\infty}^{\infty} e^{\frac{-y^{2}}{2}} \, dy \\
e^{\frac{-y^{2}}{2}} > 0 \implies I \geq 0 \\
I^{2} = \iint_{\mathbb{R}^{2}} e^{\frac{-(x^{2}+y^{2})}{2}} \, dxdy = \sbs{
x = r\cos \phi \\
y = r\sin \phi \\
r = \sqrt{ x^{2}+y^{2} } \\
} = \int_{0}^{2\pi} \int_{0}^{\infty} re^{\frac{-r^{2}}{2}} \, dr  \, d\phi = \\
= \sbs{
u = \frac{r^{2}}{2} \\
du = r \\
} = 2\pi \int_{0}^{\infty} e^{-u} \, du = 2\pi \\
\implies I^{2} = 2\pi \implies I = \sqrt{ 2\pi } \\
\implies \int_{-\infty}^{\infty} \frac{1}{\sqrt{ 2\pi }}\exp\left( -\frac{y^{2}}{2} \right) \, dy = \frac{1}{\sqrt{ 2\pi }}I = 1 \\
}
$$
---
$$
\displaylines{
\text{Let } X \sim \mathcal{N}(\mu, \sigma^{2}) \\
\text{Let } Y = aX + b \\
\text{Prove: } Y \text{ is normal} \\
\\
\text{Proof:} \\
F_{Y}(y) = P(Y \leq y) = P(aX+b \leq y) \\
\text{Let } a > 0 \\
\implies P(aX + b \leq y) = P\left( X \leq \frac{y-b}{a} \right) = F_{X}\left( \frac{y-b}{a} \right) \\
f_{Y}(y) = \frac{dF_{Y}}{dy}(y) = \frac{dF_{X}\left( \frac{y-b}{a} \right)}{dy} (y) = \frac{1}{a}f_{X}\left( \frac{y-b}{a} \right) \\
\implies f_{Y}(y) = \frac{1}{a\sqrt{ 2\pi\sigma^{2} }}\exp\left( - \frac{\left( \frac{y-b}{a}-\mu \right)^{2}}{2\sigma^{2}} \right) = \\
= \frac{1}{\sqrt{ 2\pi(a\sigma)^{2} }}\exp\left( - \frac{\left( y-(a\mu+b) \right)^{2}}{2(a\sigma)^{2}} \right) \\
\implies \boxed{ Y \sim \mathcal{N}(a\mu+b, (a\sigma)^{2}) } \\
\\
\text{Let } a < 0 \\
\implies F_{Y}(y) = P(aX + B \leq y) = P\left( X > \frac{y-b}{a} \right) = 1 - P\left( X \leq \frac{y-b}{a} \right) \\
\dots \implies f_{Y}(y) = \frac{1}{-a\sqrt{ 2\pi\sigma^{2} }}\exp\left( - \frac{\left( \frac{y-b}{a}-\mu \right)^{2}}{2\sigma^{2}} \right) \\
a < 0 \implies -a > 0 \\
\implies \text{In both cases } \frac{1}{\abs{a}\sqrt{ 2\pi\sigma^{2} }}\exp\left( - \frac{\left( \frac{y-b}{a}-\mu \right)^{2}}{2\sigma^{2}} \right) \\
}
$$
---
$$
\displaylines{
\text{A corollary of this is:} \\
\text{Let } X \sim \mathcal{N}(\mu, \sigma^{2}) \\
\text{Let } Z = \frac{X-\mu}{\sigma} \\
\implies Z \sim \mathcal{N}(0, 1), \text{also called Standard Normal distribution} \\
\text{Which is very useful when normalizing data} \\
}
$$
---
$$
\displaylines{
\text{Let } X \sim \mathcal{N}(0, 1) \\
\text{Prove: } E[X] = 0, Var(X) = 1 \\
\\
\text{Proof:} \\
f(x) = \frac{1}{\sqrt{ 2\pi }}e^{\frac{-x^{2}}{2}} \\
E[X] = \int_{-\infty}^{\infty} x\frac{1}{\sqrt{ 2\pi }}e^{\frac{-x^{2}}{2}} \, dx \\
xe^{\frac{-x^{2}}{2}} \text{ is an odd function} \implies \int_{-\infty}^{\infty} xe^{\frac{-x^{2}}{2}} \, dx = 0 \implies E[X] = 0 \\
\\
Var(X) = E[X^{2}] - E[X]^{2} = E[X^{2}] \\
E[X^{2}] = \frac{1}{\sqrt{ 2\pi }}\int_{-\infty}^{\infty} x^{2}e^{\frac{-x^{2}}{2}} \, dx \\
\int_{-\infty}^{\infty} x^{2}e^{\frac{-x^{2}}{2}} \, dx = \text{Integration by parts,} \ldots = 1 \\
\implies Var(X) = 1 \\
\\
\text{Corollary of this is} \\
X \sim \mathcal{N}(\mu, \sigma^{2}) \implies E[X] = \mu, Var(X) = \sigma^{2} \\
}
$$
---
## Joint distribution
$$
\displaylines{
\text{Let } X, Y \text{ be random variables} \\
X, Y: \Omega \to \mathbb{R} \\
\text{Then } (X, Y) \text{ can be thought of as a multi-valued function, } (X, Y): \Omega \to \mathbb{R}^{2} \\
}
$$
### Joint CDF #definition 
$$
\displaylines{
\forall a, b \in \mathbb{R}: F_{X,Y}(a, b) = P(X \leq a, Y \leq b) \\
\\
P(X \in (a_{1}, a_{2}], Y \in (b_{1}, b_{2}]) = F_{X,Y}(a_{2}, b_{2}) - F_{X,Y}(a_{1}, b_{2}) - F_{X,Y}(a_{2}, b_{1}) + F_{X,Y}(a_{1}, b_{1}) \\
\\
\text{In discrete case:} \\
\text{Let } X, Y \text{ be discrete random variables} \\
\text{Then we can define } p_{x_{i},y_{j}} = P(X = x_{i}, Y = y_{j}) \\
\\
\text{In jointly continuous case:} \\
\text{Let } X, Y \text{ be continuous random variables} \\
\text{Let } \exists f_{X,Y}: \mathbb{R}^{2} \to \mathbb{R}_{+} \cup \Set{ 0 } \text{ such that } \forall C \subseteq \mathbb{R}^{2}: P((x, y) \in C) = \iint_{C} f_{X,Y}(x, y) \, dxdy \\
f_{X,Y} \text{ is then called a joint PDF (JPDF) or simply joint density} \\
\text{In this case, } (X, Y) \text{ is a called a jointly continuous random variable} \\
}
$$
### Example
$$
\displaylines{
\text{Let } (X, Y) \sim Uni([0, 1]^{2}) \\
\text{Let } f_{X, Y}(x, y) = \begin{cases}
1 & 0 \leq x, y \leq 1 \\
0 & \text{otherwise} \\
\end{cases} \\
\text{Clearly, } \forall C \subseteq [0, 1]^{2}: \iint_{C} f_{X,Y}(x, y) \, dxdy = \text{area of } C = P((X, Y) \in C) \\
}
$$
---
## Marginal distribution
$$
\displaylines{
\text{Let } (X, Y) \text{ be a joint distribution} \\
\\
\text{Discrete case:} \\
\text{Let } X, Y \text{ be discrete random variables} \\
\text{Let } p_{ij} = P(X = x_{i}, Y = y_{j}) \\
\sum_{i,j=1}^{\infty} p_{ij} = 1 \\
p_{i} = P(X = x_{i}) \coloneqq \sum_{j=1}^{\infty} p_{ij} \\
p_{1}, p_{2}, \dots \text{ is then a marginal distribution of } X \\
\text{Symmetrically for } Y \\
\\
\text{Joint continuous case:} \\
\text{Let } (X, Y) \text{ be jointly continuous variables} \\
\iint_{\mathbb{R}^{2}} f_{X,Y}(x, y) \, dxdy = 1 \\
f_{X}(x) \coloneqq \int_{-\infty}^{\infty} f_{X,Y}(x, y) \, dy \\
f_{X} \text{ is then a marginal PDF of } X \\
\text{Symmetrically for } Y \\
}
$$
### Example
$$
\displaylines{
\text{Let } f_{X, Y}(x, y) = e^{-x-y} \quad x, y > 0 \\
\text{Find } f_{X} \text{ and } f_{Y} \\
\\
\text{Solution:} \\
f_{X}(x) = \int_{0}^{\infty} e^{-x-y} \, dy = e^{-x} \int_{0}^{\infty} e^{-y} \, dy = e^{-x} \\
f_{Y}(y) = \int_{0}^{\infty} e^{-x-y} \, dx = e^{-y} \int_{0}^{\infty} e^{-x} \, dx = e^{-y} \\
}
$$
---
## Independence of joint distribution
$$
\displaylines{
\text{Let } (X, Y) \text{ be a joint distribution} \\
X, Y \text{ are called independent if} \\
\\
\text{Discrete case:} \\
P(X \in A, Y \in B) = P(X \in A) \cdot P(Y \in B) \\
\forall x, y: p_{ij}(x, y) = p_{i}(x) \cdot p_{j}(y) \\
\\
\text{Jointly continuous case:} \\
\forall x, y: f_{X,Y}(x, y) = f_{X}(x) \cdot f_{Y}(y) \\
}
$$
---
## Linearity of expectation
$$
\displaylines{
\text{Let } X, Y: \Omega \to \mathbb{R} \\
X + Y: \Omega \to \mathbb{R}: (X+Y)(\omega) = X(\omega) + Y(\omega) \\
\text{Then } E[X+Y] = E[X] + E[Y] \\
\\
\text{Proof:} \\
\text{Discrete case:} \\
E[X+Y] = \sum_{x,y} (x+y)P(X = x, Y = y) = \\
= \sum_{x,y} xP(X = x, Y = y) + \sum_{x,y} yP(X = x, Y = y) = \\
= \sum_{x} x \sum_{y} p(x, y) + \sum_{y} y \sum_{x} p(x, y) = \\
= \sum_{x} x p_{X}(x) + \sum_{y} y p_{Y}(y) = E[X] + E[Y] \\
\\
\text{Jointly continuous case:} \\
E[X+Y] = \iint_{\mathbb{R}^{2}} (x+y)f_{X,Y}(x, y) \, dxdy = \\
= \iint_{R^{2}} xf_{X,Y}(x, y) \, dxdy + \iint_{R^{2}} yf_{X,Y}(x, y) \, dxdy = \\
= \int_{-\infty}^{\infty} x \int_{-\infty}^{\infty} f_{X,Y}(x, y) \, dy  \, dx + \int_{-\infty}^{\infty} y \int_{-\infty}^{\infty} f_{X,Y}(x, y) \, dx  \, dy = \\
= \int_{-\infty}^{\infty} x f_{X}(x) \, dx + \int_{-\infty}^{\infty} yf_{Y}(y) \, dy = E[X] + E[Y] \\
}
$$
---
## Covariance
$$
\displaylines{
\text{Let } X, Y: \Omega \to \mathbb{R} \\
\text{Covariance is then defined} \\
Cov(X, Y) = E[(X - E[X])(Y - E[Y])] = E[XY] - E[X]E[Y] \\
\text{Note } Var(X) = Cov(X, X) \\
\\
\text{In some sense, covariance is a measure of degree of dependence} \\
}
$$
## Linearity of variance for independent variables
$$
\displaylines{
\text{Let } X, Y: \Omega \to \mathbb{R} \text{ be independent} \\
\text{Then } Var(X + Y) = Var(X) + Var(Y) \\
\\
\text{Proof:} \\
Var(X + Y) = E[(X+Y)^{2}] - E[X+Y]^{2} = \\
= E[X^{2}] + 2E[XY] + E[Y^{2}] - E[X]^{2} - 2E[X]E[Y] - E[Y]^{2} = \\
= Var(X) + 2Cov(X, Y) + Var(Y) \\
X, Y \text{ are independent} \implies Cov(X, Y) = 0 \\
\implies Var(X + Y) = Var(X) + Var(Y) \\
}
$$
