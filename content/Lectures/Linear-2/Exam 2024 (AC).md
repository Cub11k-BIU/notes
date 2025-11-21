---
{"publish":true,"created":"20/08/25, 19:08","modified":"2025-11-21T21:10:14.464+02:00","tags":["Academia","Lecture","Linear-2"],"cssclasses":""}
---

# 5a
$$
\displaylines{
\text{Let } A \in \mathbb{C}^{n \times n} \text{ be invertible} \\
\text{Prove: } \text{All eigenvalues of } A^{*}A \text{ are real and strictly positive} \\
\\
\text{Proof:} \\
\text{Let } \lambda \text{ be an eigenvalue of } A \text{ with eigenvector } v \\
\implies \overline{\lambda} \text{ is an eigenvalue of } A^{*} \text{ with eigenvector } v \\
A \text{ is invertible} \implies \lambda \neq 0 \\
\implies A^{*}Av = \lambda A^{*}v = \lambda \overline{\lambda}v = \underbrace{ \left\lvert \lambda \right\rvert^{2} }_{ > 0, \in \mathbb{R} } v \\
}
$$
# 5b
$$
\displaylines{
\text{Let } A \in \mathbb{C}^{n \times n} \text{ be invertible} \\
\text{Let } AA^{*} \text{ be diagonal} \\
\text{Prove: } \exists U \text{ unitary and } P \text{ hermitian} : A = UP \\
\\
\text{Proof:} \\
A^{*}A = A^{-1}AA^{*}A \\
\implies AA^{*} \sim A^{*}A \\
\implies \text{All eigenvalues of } AA^{*} \text{ are real and strictly positive} \\
AA^{*} = D = \begin{pmatrix}
\lambda_{1} \\
 & \ddots \\
 &  & \lambda_{n} \\
\end{pmatrix} \in \mathbb{R}^{n \times n} \\
\text{Let } \forall i \in [1, n]: v_{i} \text{ be an eigenvector of } AA^{*} \text{ with eigenvalue } \lambda_{i} \\
AA^{*}v_{i} = \lambda_{i}v_{i} \\
\lambda_{i} \neq 0, v_{i} \neq 0 \implies AA^{*}v_{i} \neq 0 \implies A^{*}v_{i} \neq 0 \\
\implies A^{*}AA^{*}v_{i} = \lambda_{i}A^{*}v_{i} \implies A^{*}v_{i} \text{ is an eigenvector of } A^{*}A \text{ with eigenvalue } \lambda_{i} \\

}
$$