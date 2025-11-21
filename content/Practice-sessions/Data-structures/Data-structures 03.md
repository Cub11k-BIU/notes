---
{"publish":true,"created":"03/04/25, 12:04","modified":"2025-11-21T21:10:24.576+02:00","tags":["Academia","Practice","Data-structures"],"cssclasses":""}
---

## Dynamic array
$$
\displaylines{
\text{This array doubles in size each time an insertion is made but the array is full} \\
\text{Resizing is an } O(n) \text{ operation as it requires copying all elements} \\
\text{Let } \Phi(D_{i}) = 2n_{i} - l_{i} \\
\text{Let } P(n_{i}) = c_{i} + (\Phi(D_{i}) - \Phi(D_{i-1})) \\
\sum_{i=1}^{n} P(n_{i}) = \sum_{i=1}^{n} c_{i} + \Phi(D_{n}) - \Phi(D_{0}) = \\
= n + (2n - n) - \left( 0 - k \right) = 2n + k \sim 2n \\
\implies \text{Amortized complexity is } O\left( \frac{2n}{n} \right) = O(1) \\
}
$$
