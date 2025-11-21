---
{"publish":true,"created":"31/03/25, 13:03","modified":"2025-11-21T21:10:13.957+02:00","tags":["Academia","Lecture","Data-structures"],"cssclasses":""}
---

# Amortized complexity #definition 
$$
\displaylines{
\text{Method of assessing algorithms performance based on it over-all complexity,} \\
\text{and not just worst edge-cases} \\
}
$$
## Aggregate analysis
$$
\displaylines{
\text{Compute total cost over multiple operations and find the average} \\
\text{Useful when operations have predictable, recurring costs (!!)} \\
\\
\text{Let's examine a dynamic array that doubles in size when full} \\
\text{Each insertion is either } O(1) \text{ or } (m) \text{ where } m \text{ is the current number of elements in array} \\
\text{Let's aggregate all insertions:} \\
\text{Assume array starts with size } 1 \\
\text{First insertion is } 1 \text{ itself} \\
\text{Secong insertion is } 1 \text{ itself} + 2 \text{ for resizing up to } 4 \\
\text{Third insertion is } 1 \text{ itself} \\
\text{Fourth insertion is } 1 \text{ itself} + 4 \text{ for resizing up to } 8 \\
\text{Fifth to seventh insertion are } 1 \text{ themselves} \\
\dots \\
\text{Let } n = 2^{k} \implies k = \log n \\
\text{Total number of operations for } n \text{ insertions is:} \\
T(n) = \left( 1 + 2 + 4 + 8 + 16 + \dots + n \right) + n = \\
= \frac{2^{\log n} - 1}{2 - 1} + n = 2n - 1 \sim 2n \\
\implies T(n) = O(n), T_{A}(n) = \frac{2n}{n} = O(1) \\
\implies \text{Amortized complexity of our insertions is } O(1) \\
\text{Although there are heavy operations like the last resizing, that costs } O(n) \text{ on itself,} \\
\text{these operations occur rarely and contribute less to the over-all complexity,} \\
\text{than myriads of simple } O(1) \text{ insertions} \\
}
$$
## Accounting method
$$
\displaylines{
\text{Assign pre-paid "credits" to balance cheap and expensive operations} \\
\text{Useful when future operations are clearly predictable and can be "pre-paid"} \\
\\
\text{Let's examine a stack with } push, pop \text{ and } multiPop \text{ methods} \\
\text{Each } push \text{ operation costs } O(1) \text{ as it is an insertion to an array} \\
\text{Each } pop \text{ operation costs } O(1) \text{ as it is a simple extraction from the end of array} \\
\text{Each } multiPop \text{ operation costs } O(m) \text{ as it is } m \text{ extractions} \\
\\
\text{Let's use a trick of overestimating } push \text{ operation, assume it costs } 2 \text{ operations} \\
\text{but store the unused "credit" for future use} \\
\text{Each } push \text{ would then contribute to a } +1 \text{ credit on the balance} \\
\text{Each } pop \text{ can then become "free" by using this stored "credit"} \\
\text{We can safely assume that when executing } pop \text{ there will be at least one "credit",} \\
\text{or the stack is empty and operation is simply } O(1) \\
multiPop \text{ then also becomes "free" as it is "pre-paid" for by all the } push \text{ operations} \\
\implies \text{Over-all cost over } n \ pushes \text{ and } pops/multiPops \text{ is } 2n \\
\text{Which gives us an amortized complexity of } O(1) \\
}
$$
## Potential method
$$
\displaylines{
\text{Use a potential function to track stored work and balance costs instead of "credits"} \\
\text{Useful when state changes over time and can be modeled using a function} \\
\\
\text{Let's examine a binary counter} \\
\text{Each increment the counter has to flip some number bits} \\
\text{For } 0000 \to 0001 \text{ it's one bit} \\
\text{For } 0111 \to 1000 \text{ it's four bits} \\
\text{Let us define a work function: } w(s) = \# \text{ of bit flips} \\
\text{Let us define a potential function: } \Phi(s) = \# \text{ of } 1's \text{ in } s \\
\text{Let us then define amortized cost of each increment as:} \\
f(s) = w(s) + (\Phi(s+1) - \Phi(s)) \\
\text{meaning that operations contributing to increase in $w$ will become more expensive} \\
\text{while operations, that are expensive on its own will be compensated for reducing potential} \\
f(0000) = 1 + (\Phi(0001) - \Phi(0000)) = 2 \\
f(0001) = 2 + (\Phi(0010) - \Phi(0001)) = 2 \\
f(0010) = 1 + (\Phi(0011) - \Phi(0010)) = 2 \\
\dots \\
f(0111) = 4 + (\Phi(1000) - \Phi(0111)) = 2 \\
f(1111) = 4 + (\Phi(0000) - \Phi(1111)) = 0 \\
\implies T(n) = \sum_{i=1}^{n} f(s_{i}) \leq \sum_{i=1}^{n} 2 = 2n \\
\implies T(n) = O(n) \\
}
$$
