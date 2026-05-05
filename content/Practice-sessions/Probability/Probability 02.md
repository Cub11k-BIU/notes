---
{"publish":true,"created":"2/11/25, 18:11","modified":"2026-03-24T14:59:39.078+02:00","tags":["Academia","Practice","Probability"],"cssclasses":""}
---

## Measure space #definition 
$$
\displaylines{
\text{Triplet } (\Omega, \mathcal{F}, \mu) \text{ is called a measure space} \\
\Omega - \text{set of elements} \\
\mathcal{F} - \text{collection of subsets of } \Omega \\
\mu: \mathcal{F} \to [0, \infty] - \text{a measure function} \\
\text{Where:} \\
}
$$
$$
\displaylines{
1. & \emptyset \in \mathcal{F} \\
2. & A \in \mathcal{F} \implies A^{\complement} \in \mathcal{F} \\
3. & A_{1}, A_{2}, \dots, A_{k} \in \mathcal{F} \implies \bigcup_{i=1}^{k} A_{i} \in \mathcal{F} \\
4. & \mu(\emptyset) = 0 \\
5. & A_{1}, \dots, A_{k} \in \mathcal{F}: \forall i \neq j \in [1, k]: A_{i} \cap A_{j} = \emptyset \implies \mu\left( \bigcup_{i=1}^{k} A_{i} \right) = \sum_{i=1}^{k} \mu(A_{i}) \\
}
$$
## Probability space #definition 
$$
\displaylines{
\text{A probability space is a measure space } (\Omega, \mathcal{F}, P) \\
\text{Such that } P(\Omega) = 1 \\
}
$$
