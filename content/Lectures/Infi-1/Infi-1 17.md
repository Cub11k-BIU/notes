---
{"publish":true,"created":"25/12/24, 10:12","modified":"2025-11-21T21:10:14.211+02:00","tags":["Academia","Lecture","Infi-1"],"cssclasses":""}
---

# Infi-1 17
## Functions #definition 
$$
\displaylines{
\text{We are interested in paticular functions:} \\
f: A \to \mathbb{R}, A \subseteq \mathbb{R} \\
\text{For example:} \\
f: \mathbb{R} \setminus \Set{ 0 } \to \mathbb{R}, f(x) = \frac{7}{3x} \\
}
$$
---
## Limit of the function
$$
\displaylines{
\lim_{ x \to a } f(x) \text{ is an answer to the question "to where does function tend} \\
\text{when } x \text{ tends to } a\text{?"} \\
}
$$
### Difference from the limit of the sequence
$$
\displaylines{
1. & \text{In sequences, } n \to \infty. \text{ In functions } x \to a \text{, where } a \in \mathbb{R} \cup \Set{ \infty, -\infty } \\
   & \text{ can be any number} \\
2. & x \text{ can tend to } a \text{ from the left(smaller than $a$) or from the right(greater than $a$)} \\
& f(x) = \begin{cases}
2 & x \leq 5 \\
1 & x > 5 \\
\end{cases} \implies \lim_{ x \to 5^{+} } f(x) = 1, \lim_{ x \to 5^{-} } f(x) = 2 \\
3. & \text{Value of } f(a) \text{ does not affect the value of the limit} \\
}
$$
### Formal definitions of the limit #definition 
#### Limit: Cauchy's definition
$$
\displaylines{
\forall \varepsilon > 0: \exists \zeta > 0: \forall x: [\lvert x-a \rvert < \zeta \implies \lvert f(x) - L \rvert < \varepsilon] \\
\implies \lim_{ x \to a } f(x) = L \\
}
$$
#### Limit: Heine's definition
$$
\displaylines{
L \text{ is called the limit of function } f(x) \\
\text{If, for every sequence } x_{n} \text{ convergent to } a \text{, sequence } f(x_{n}) \text{ converges to } L \\
\forall x_{n}: [x_{n} \to a \land x_{n} \neq a \implies f(x_{n}) \to L] \\
\implies \lim_{ x \to a } f(x) = L \\
}
$$
---
$$
\displaylines{
f(x) = \begin{cases}
2 & x \leq 5 \\
1 & x > 5 \\
\end{cases} \\
\text{Let } x_{n} = 5 - \frac{1}{n}, y_{n} = 5 + \frac{1}{n} \\
x_{n} \to 5, y_{n} \to 5 \\
\forall n: x_{n} < 5 \implies \forall n: f(x_{n}) = 1 \to 1 \\
\forall n: y_{n} > 5 \implies \forall n: f(y_{n}) = 2 \to 2 \\
\implies \underset{ \text{By Heine} }{ \not\exists } \lim_{ x \to 5 } f(x) \\
\text{Let } z_{n} = 5 + \frac{(-1)^{n}}{n} \\
z_{n} \to 5 \\
f(z_{n}) = 2, 1, 2, 1, 2, 1, \dots \implies \not\exists \lim_{ n \to \infty } f(z_{n}) \\
}
$$
---
## One-sided limits of the function #definition 
### Right-sided limit (right limit)
$$
\displaylines{
L \text{ is called a right-sided limit of } f \\
\text{If, for every sequence } x_{n} \to a, x_{n} > a \text{, sequence } f(x_{n}) \text{ converges to } L \\ 
\forall x_{n}: [x_{n} \to a \land x_{n} > a \implies f(x_{n}) \to L] \\
\implies \lim_{ x \to a^{+} } f(x) = L \\
}
$$
### Left-sided limit (left limit)
$$
\displaylines{
L \text{ is called a left-sided limit of } f \\
\text{If, for every sequence } x_{n} \to a, x_{n} < a \text{, sequence } f(x_{n}) \text{ converges to } L \\ 
\forall x_{n}: [x_{n} \to a \land x_{n} < a \implies f(x_{n}) \to L] \\
\implies \lim_{ x \to a^{-} } f(x) = L \\
}
$$
---
## Existence of the limit of the function #lemma 
$$
\displaylines{
\exists \lim_{ x \to a } f(x) = L \iff \lim_{ x \to a^{+} } f(x) = \lim_{ x \to a^{-} } f(x) = L \\
\\
\text{Proof:} \\
\lim_{ x \to a } f(x) = L \\
\iff \forall x_{n}: [x_{n} \to a \land x_{n} \neq a \implies f(x_{n}) \to L] \\
\iff \forall x_{n}: [x_{n} \to a \land (x_{n} < a \lor x_{n} > a) \implies f(x_{n}) \to L] \\
\iff \forall x_{n}: [(x_{n} \to a \land x_{n} < a) \lor (x_{n} \to a \land x_{n} > a) \implies f(x_{n}) \to L] \\
\iff \lim_{ x \to a^{+} } f(x) = L = \lim_{ x \to a^{-} } f(x) \\
}
$$
---
## Properties of the limit of the function #lemma 
$$
\displaylines{
\text{In general, properties of limits of the sequence also apply to the limits of the function} \\
}
$$
---
