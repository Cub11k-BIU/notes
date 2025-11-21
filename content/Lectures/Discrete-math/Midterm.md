---
{"publish":true,"created":"09/02/25, 12:02","modified":"2025-11-21T21:10:14.115+02:00","tags":["Academia","Lecture","Discrete-math"],"cssclasses":""}
---

# 1
$$
\displaylines{
\text{Let } A \text{ be a finite set} \\
\text{Let } R \text{ be a relation on } A \\
R^{0} = R \\
R^{i+1} = R^{i} \cup \Set{ (a, b) \in A \times A | \exists c \in A: (a, c), (b, c) \in R^{i} } \\
1. \quad \text{Prove or disprove: } R^{1} \text{ is transitive} \\
2. \quad \text{Prove: } \forall k \in \mathbb{N}_{0}: R^{k} \text{ is symmetric} \implies R^{k+1} \text{ is symmetric} \\
3. \quad \text{Prove: } \exists n \in \mathbb{N}_{0}: R^{n} \text{ is transitive} \\
}
$$
# 2
$$
\displaylines{
\text{Let } A, B \text{ be non-empty sets} \\
\text{Let } \preccurlyeq \text{ be an order relation on } B \\
\text{Let } R \text{ be a relation on } B^{A} \\
\forall f, g \in B^{A}: f R g \iff \forall a \in A: f(a) \preccurlyeq g(a) \\
1. \quad \text{Prove: } R \text{ is an order relation} \\
2. \quad \text{Prove: } \preccurlyeq \text{ has a maximum } \iff R \text{ has a maximum} \\
\text{Let } h \in B^{A} \text{ be surjective} \\
\text{Let } F: \preccurlyeq \to B^{A}: F((b, b')) = g \\
\text{Where } g(a) = \begin{cases}
b & h(a) \preccurlyeq b \\
b' & \text{otherwise} \\
\end{cases} \\
3. \quad \text{Prove: } \preccurlyeq \text{ is a total order } \implies F \text{ is injective} \\
}
$$
