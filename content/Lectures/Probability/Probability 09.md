---
{"publish":true,"created":"24/12/25, 12:44","modified":"2025-12-24T15:27:30.208+02:00","tags":["Academia","Lecture","Probability"],"cssclasses":""}
---

# Continuous random variables
## Sigma-algebra of reasonable events
$$
\displaylines{
\text{Let } \Omega \text{ be an uncountable sample space} \\
\text{We would like to define a function on } \Omega \\
\text{that assigns a non-negative real number to subsets of } \Omega \\
\text{Such function is called a measure} \\
\text{We would like this function to 'behave' well,} \\
\text{i.e. the union of disjoint sets should yield the sum of measures of these sets} \\
\text{However, some sets don't have this property, i.e. Vitali sets under the axiom of choice} \\
\text{For that purpose we define sigma-algebras} \\
\\
\text{Let } \mathcal{F} \subset \mathcal{P}(\Omega) (\text{ or } 2^{\Omega}) \text{ be a set of all measurable subsets of } \Omega \\
\begin{aeqsys}
& \emptyset \not\in \mathcal{F} \\
& \Omega \in \mathcal{F} \\
& A \in \mathcal{F} \implies A^{\complement} = \Omega \setminus A \in \mathcal{F} \\
& \Set{ A_{i} }_{i \in \kappa} \subseteq \mathcal{F} \implies \bigcup_{i \in \kappa} A_{i} \in \mathcal{F} \\
\end{aeqsys} \\
\text{Non-empty collections of measurable subsets are called } \sigma\text{-algebras} \\
\\
\Set{ A_{i} }_{i \in \kappa} \subseteq \mathcal{F} \implies \bigcap_{i \in \kappa} A_{i} \in \mathcal{F} \\
\text{By De Morgan laws: } \bigcap_{i \in \kappa} A_{i} = \Omega \setminus \bigcup_{i \in \kappa} (\Omega \setminus A_{i}) \in \mathcal{F} \\
\\
\Set{ A_{i} }_{i \in \kappa} \subseteq \mathcal{F}: \forall i \in \kappa: A_{i} \subseteq A_{i + 1} \\
\implies \bigcup_{i \in \kappa} A_{i} \in \mathcal{F} \\
}
$$
### Examples
$$
\displaylines{
\Set{ \emptyset, \Omega } \text{ is a } \sigma\text{-algebra} \\
\\
\Omega \text{ is countable} \implies \mathcal{F} = \mathcal{P}(\Omega) \\
\\
\text{Let } \Omega \subseteq \mathbb{R} \text{ be uncountable} \\
\text{The smallest } \sigma\text{-algebra containing all intervals (closed, open, semi-closed) of } \Omega \\
\text{is called a Borel } \sigma \text{-algebra (or subalgebra), } \mathcal{B} \\
\text{Elements of Borel } \sigma\text{-algebra are called Borel sets} \\
}
$$
## Probability space #definition 
$$
\displaylines{
\text{Let } \Omega \text{ be a sample space} \\
\text{Let } \mathcal{F} \text{ be a } \sigma\text{-algebra on } \Omega \\
(\Omega, \mathcal{F}, P) \text{ is then called a probability space} \\
P: \mathcal{F} \to [0, 1] \\
\begin{aeqsys}
& P(\Omega) = 1 \\
& \Set{ A_{i} }_{i \in \kappa}: \forall i \neq j \in \kappa: A_{i} \cap A_{j} = \emptyset \implies P\left( \bigcup_{i \in \kappa} A_{i} \right) = \sum_{i \in \kappa} P(A_{i}) \\
\end{aeqsys} \\
}
$$
## Random variable #definition 
$$
\displaylines{
\text{Let } X: \Omega \to \mathbb{R} \\
\text{Let } \forall t \in \mathbb{R}: \Set{ w \in \Omega \mid X(\omega) \leq t } \in \mathcal{F}, \text{or in our case}, \mathcal{B} \\
X \text{ is then called a random variable} \\
}
$$
## Distribution function #definition 
$$
\displaylines{
\text{Let } X \text{ be a random variable} \\
F_{X}: \mathbb{R} \to [0, 1], F_{X}(t) = P(X \leq t) \\
F_{X} \text{ is then called a cumulative distribution function, CDF} \\
\\
P(X \in [a, b]) = F_{X}(b) - F_{X}(a) \\
}
$$
## Continuous random variable #definition 
$$
\displaylines{
\text{Let } (\Omega, \mathcal{F}, P) \text{ be a probability space} \\
\text{Let } X \text{ be a random variable} \\
\text{Let } \exists p(X): \mathbb{R} \to [0, \infty): \forall B \in \mathcal{F}: P(X \in B) = \int_{B} p(x)dx \\
\text{Then } X \text{ is called a continuous random variable} \\
\text{Function } p \text{ is then called a probability density function, PDF} \\
}
$$
### Example
$$
\displaylines{
\text{Let } X \text{ be a continuous random variable} \\
\text{Let } p(x) = \begin{cases}
C(4x-2x^{2}) & x \in (0, 2) \\
0 & \text{otherwise} \\
\end{cases} \\
\text{Find } C \\
\text{Find } P(X < 1) \\
\\
\text{Solution:} \\
1 = \int_{-\infty}^{\infty} p(x) \, dx = \int_{0}^{2} p(x) \, dx = \int_{0}^{2} C(4x - 2x^{2}) \, dx = C\left( 2x^{2} - \frac{2x^{3}}{3} \right) \Bigg|^{2}_{0} = \\
= C\left( 8-\frac{16}{3} \right) = \frac{8C}{3} \implies \boxed{ C = \frac{3}{8} } \\
\\
P(X < 1) = \int_{-\infty}^{1} p(x) \, dx  = \int_{0}^{1} \frac{3}{8}(4x - 2x^{2}) \, dx = \frac{3}{8}\left( 2x^{2} - \frac{2x^{3}}{3} \right) \Bigg|^{1}_{0} = \frac{3}{8} \cdot \frac{4}{3} = \frac{1}{2} \\
}
$$
### Example
$$
\displaylines{
\text{Let } X \text{ be a continuous random variable} \\
\text{Let } p(x) = \begin{cases}
\lambda e^{-\lambda x} & x \geq 0 \\
0 & \text{otherwise} \\
\end{cases} \\
\text{Find } P(X \in [50, 150]) \\
\\
\text{Solution:} \\
P(X \in [50, 150]) = \int_{50}^{150} p(x) \, dx = \int_{50}^{150} \lambda e^{-\lambda x} \, dx = \sbs{
t = \lambda x \\
dt = \lambda dx \\
} = \int_{50\lambda}^{150\lambda} e^{-t} \, dt = \\
= -e^{-t} \Bigg|^{150\lambda}_{50\lambda} = e^{-50\lambda} - e^{-150\lambda} \\
}
$$
## Expected value of continuous random variable #definition
$$
\displaylines{
\text{Let } X \text{ be a continuous random variable} \\
E[X] = \int_{-\infty}^{\infty} xp(x) \, dx \\
}
$$
### Example
$$
\displaylines{
\text{Let } X \text{ be a continuous random variable} \\
\text{Let } p(x) = \begin{cases}
2x & x \in (0, 1) \\
0 & \text{otherwise} \\
\end{cases} \\
\text{Find } E[X] \\
\\
\text{Solution:} \\
E[X] = \int_{0}^{1} xp(x) \, dx = \int_{0}^{1} 2x^{2} \, dx = \frac{2x^{3}}{3}\Bigg|^{1}_{0} = \frac{2}{3} \\
}
$$
### Example
$$
\displaylines{
\text{Let } X \text{ be a continuous random variable} \\
\text{Let } p_{X}(x) = \begin{cases}
1 & x \in [0, 1] \\
0 & \text{otherwise} \\
\end{cases} \\
\text{Find } E[e^{X}] \\
\\
\text{Solution:} \\
\text{Let } Y = e^{X} \\
F_{Y}(t) = P(Y \leq t) = P(e^{X} \leq t) = P(X \leq \ln t) = \int_{-\infty}^{\ln t} p_{X}(x) \, dx = \int_{0}^{\ln t} 1 \, dx = \ln t \\
\implies F_{Y}(t) = \begin{cases}
0 & \ln t < 0 \iff t < 1 \\
\ln t & \ln t \in [0, 1] \iff t \in [1, e] \\
1 & \ln t > 1 \iff t > e \\
\end{cases} \\
F_{Y}(y) = \int p_{Y}(y) \, dy \implies p_{Y}(y) = F_{Y}'(y) = \begin{cases}
\frac{1}{y} & y \in [1, e] \\
0 & \text{otherwise} \\
\end{cases} \\
\implies E[e^{X}] = E[Y] = \int_{-\infty}^{\infty} yp(y) \, dy = \int_{1}^{e} 1 \, dy = e - 1 \\
}
$$
