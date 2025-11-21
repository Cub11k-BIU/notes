---
{"publish":true,"created":"20/11/25, 11:33","modified":"2025-11-21T21:10:01.914+02:00","tags":["Academia","Assignment","Automata"],"cssclasses":""}
---

## 1a
$$
\displaylines{
\text{Let } \Sigma = \Set{ 0, 1 } \\
\text{Let } L_{1} = \Set{ w | \#0_{w} \geq 3 } \\
\text{Let } L_{2} = \Set{ w | \#0_{w} \geq 1 } \\
\text{Let } L_{3} = \Set{ w | \abs{w} \geq 3 } \\
\text{Prove or disprove:} \\
L_{1} \cap L_{2} = L_{1} \\
L_{1} \circ L_{2} = L_{1} \\
L_{1} \circ L_{3} = L_{1} \\
L_{1} \circ L_{2} \subseteq L_{3} \\
L_{1} \cap L_{2} \supseteq L_{3} \\
\\
\text{Solution:} \\
L_{1} \subseteq L_{2} \implies L_{1} \cap L_{2} = L_{1} \\
000 \in L_{1}, 000 \not\in L_{1} \circ L_{2} \implies L_{1} \circ L_{2} \neq L_{1} \\
000 \in L_{1}, 000 \not\in L_{1} \circ L_{3} \implies L_{1} \circ L_{3} \neq L_{1} \\
w \in L_{1} \circ L_{2} \implies \#0_{w} \geq 1 + 3 = 4 \implies \abs{w} \geq 4 \implies w \in L_{3} \implies L_{1} \circ L_{2} \subseteq L_{3} \\
111 \in L_{3}, 111 \not\in L_{1} \cap L_{2} \implies L_{1} \cap L_{2} \not\supseteq L_{3} \\
}
$$
## 1b
$$
\displaylines{
\text{Prove or disprove:} \\
L \neq \emptyset \implies L^{*} \text{ is infinite} \\
L_{1} \neq \emptyset, L_{2} \neq \emptyset \text{ and } L_{1}, L_{2} \text{ are finite} \implies \abs{L_{1} \circ L_{2}} \geq \abs{L_{1}} \\
\\
\text{Solution:} \\
L = \Set{ \varepsilon } \implies L^{*} = \Set{ \varepsilon^{n} | n \in \mathbb{N}_{0} } = \Set{ \varepsilon } \implies L^{*} \text{ is finite} \\
\\
L_{1} \neq \emptyset \implies \exists w \in L_{1} \\
\exists v \in L_{2} \\
\implies \forall v \in L_{2}: wv \in L_{1} \circ L_{2} \\
\implies \abs{L_{1} \circ L_{2}} \geq \abs{wv | w \in L_{1}, v \in L_{2}} \geq \abs{L_{1}} \\
}
$$
## 2
$$
\displaylines{
\text{Let } L_{1}, L_{2}, L_{3} \text{ be languages over } \Sigma \\
\text{Prove or disprove: } (L_{1}L_{2})^{*}L_{1} = L_{1}(L_{2}L_{1})^{*} \\
\\
\text{Proof:} \\
w \in (L_{1}L_{2})^{*}L_{1} \implies \exists n: \exists w_{1}, \dots, w_{n} \in L_{1}L_{2}, v \in L_{1}: w = w_{1}\dots w_{n}v \\
\implies \exists n: \exists w_{1_{1}},\dots w_{n_{1}} \in L_{1}, w_{1_{2}}, \dots, w_{n_{2}} \in L_{2}, v \in L_{1}: w = w_{1_{1}}w_{1_{2}}\dots w_{n_{1}}w_{n_{2}}v \\
w_{1_{1}} \in L_{1}, w_{1_{2}}w_{2_{1}}\dots w_{n_{1}}w_{n_{2}}v \in (L_{2}L_{1})^{*} \\
\implies w \in L_{1}(L_{2}L_{1})^{*} \implies \boxed{ (L_{1}L_{2})^{*}L_{1} \subseteq L_{1}(L_{2}L_{1})^{*} } \\
\\
w \in L_{1}(L_{2}L_{1})^{*} \implies \exists n: \exists w_{1}, \dots, w_{n} \in L_{2}L_{1}, v \in L_{1}: w = vw_{1}\dots w_{n} \\
\implies \exists n: \exists w_{1_{2}},\dots w_{n_{2}} \in L_{2}, w_{1_{1}}, \dots, w_{n_{1}} \in L_{1}, v \in L_{1}: w = vw_{1_{2}}w_{1_{1}}\dots w_{n_{2}}w_{n_{1}} \\
vw_{1_{2}}w_{2_{1}}\dots w_{n_{2}} \in (L_{1}L_{2})^{*}, w_{n_{1}} \in L_{1} \\
\implies w \in (L_{1}L_{2})^{*}L_{1} \implies \boxed{ (L_{1}L_{2})^{*}L_{1} \supseteq L_{1}(L_{2}L_{1})^{*} } \\
\implies \boxed{ (L_{1}L_{2})^{*}L_{1} = L_{1}(L_{2}L_{1})^{*} } \\
}
$$
## 3
$$
\displaylines{
\text{Let } L_{1}, L_{2} \text{ be languages over } \Sigma \\
\text{Prove: } (L_{1}L_{2})^{r} = L_{2}^{r}L_{1}^{r} \\
\\
\text{Proof:} \\
w \in (L_{1}L_{2})^{r} \iff \exists w_{1} \in L_{1}, w_{2} \in L_{2}: w^{r} = w_{1}w_{2} \\
\iff \exists w_{1} \in L_{1}, w_{2} \in L_{2}: w = w_{2}^{r}w_{1}^{r} \iff w \in L_{2}^{r}L_{1}^{r} \\
}
$$
## 4
$$
\displaylines{
\text{Let } A \text{ be the deterministic finite automata} \\
\text{Let } L(A) \text{ be finite} \\
\text{Then } Q \setminus F \neq \emptyset \\
\\
\text{Proof:} \\
L(A) \text{ is finite} \implies L(A) \neq \Sigma^{*} \\
\text{Let } Q \setminus F = \emptyset \\
\text{Let } A^{\complement}: L(A^{\complement}) = L(A)^{\complement} \\
\implies F_{A^{\complement}} = Q \setminus F = \emptyset \\
\implies L(A)^{\complement} = L(A^{\complement}) = \emptyset \\
\implies L(A) = \Sigma^{*} \setminus L(A)^{\complement} = \Sigma^{*} - \text{Contradiction!} \\
\implies \boxed{ Q \setminus F \neq \emptyset } \\
}
$$
