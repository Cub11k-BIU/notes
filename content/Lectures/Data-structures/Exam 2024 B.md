---
{"publish":true,"created":"09/07/25, 18:07","modified":"2025-11-21T21:10:13.966+02:00","tags":["Academia","Lecture","Data-structures"],"cssclasses":""}
---

## Bonus
$$
\displaylines{
\text{Binary tree with } n \text{ internal nodes has } n+1 \text{ leaves} \\
\\
\text{Solution:} \\
No \\
}
$$
## 1
$$
\displaylines{
& \text{We want to implement a data structure with the following properties:} \\
1. & \text{Insert(x, y) in } O(\log n) \\
2. & \text{Delete(x, y) in } O(\log n) \\
3. & \text{SameFactor(a) in } O(k + \log n) \\
\\
& \text{Solution:} \\
}
$$
$$
\displaylines{
\text{We'll use an AVL tree where each node will contain a hash-table of points} \\
\text{with the same factor} \\
\text{We will compare nodes based on their factor } a = xy \\
\text{Insert(x, y) will first calculate } a = xy \text{ and find a place to insert the point into} \\
\text{which would either be an existing node or a new one, this is } O(\log n) \\
\text{Insertion into a hash-table is } O(1) \\
\text{Rebalancing, if we're inserting a new node is also } O(\log n) \\
\implies \text{Insert(x) is } O(\log n) + O(1) + O(\log n) = O(\log n) \\
\text{Delete(x, y) will first calculate } a = xy \text{ and find the node with this factor, this is } O(\log n) \\
\text{Deletion from a hash-table is } O(1) \\
\text{If hash-table becomes empty, we will also remove the node and rebalance, this is } O(\log n) \\
\implies \text{Delete(x) is } O(\log n) + O(1) + O(\log n) = O(\log n) \\
\text{SameFactor(a) will first find a node with the given factor } a \\
\text{and then return all elements of the hashtable, which is } k \cdot O(1) = O(k) \\
\implies \text{SameFactor(a) is } O(\log n) + O(k) = O(k + \log n) \\
}
$$
# 2
$$
\displaylines{
\text{Hate it} \\
\text{Probably two heaps, max heap for smaller half, min heap for largest half} \\
\text{will get amortized } O(\log n) \text{ for all} \\
\text{Maybe array, amortized } O(1) \text{ for insert, } O(n) \text{ for delete} \\
\text{Trees...? Eh, shitty question tbh} \\
}
$$
# 3a
$$
\displaylines{
\text{Given two sorted arrays of size $n$, rearrange their elements such that} \\
\text{first array contains all smaller elements and second all larger} \\
\text{Give an algorithm that runs in } O(n) \text{ time and space} \\
\\
\text{Solution:} \\
\text{We will create a new array } C \\
\text{We will iterate over } A \text{ and } B \text{ with two pointers} \\
\text{At each iteration, we will take the smaller of two and insert it into } C, \\
\text{increasing the relevant pointer} \\
\text{We now have a sorted version of } \text{"$A+B$"} \\
\text{Now we copy first half to } A \text{ and second to } B \\
}
$$
## 3b
$$
\displaylines{
\text{Give an algorithm that runs in } O(n\log n) \text{ time and } O(1) \text{ space} \\
\\
\text{Solution:} \\
\text{We can treat } A \text{ and } B \text{ as one array of size } 2n \\
\text{That is } n\text{-sorted, meaning that each element is at most } n \text{ steps far from it's sorted position} \\
\text{We will, for this reason, use the gap method} \\
\text{Let gap} = n \\
\text{We will run a while loop until gap is equal to } 0, \text{ gap will be divided by 2 at each step} \\
\text{We will then run another loop, } \forall i \in [0, 2n - gap - 1]: \\
\text{If } (A+B)[i] > (A+B)[i+gap] \text{ then we will swap them} \\
\\
\text{At first iteration, we will perform } 2n-n \text{ operations} \\
\text{At second, } 2n - \frac{n}{2} \\
\dots \\
\text{For the total of } \sum_{k=0}^{\log n} \left( 2n - \frac{n}{2^{k}} \right) = 2n(\log n + 1) - n\sum_{k=0}^{\log n} \frac{1}{2^{k}} \text{ operations} \\
n\sum_{k=0}^{\log n} \frac{1}{2^{k}} = 2n - \frac{n}{2^{\log n}} \\
\implies 2n(\log n + 1) - n\sum_{k=0}^{\log n} \frac{1}{2^{k}} = 2n\log n + \frac{n}{2^{\log n}} = \boxed{ O(n\log n) } \\
}
$$
## 4a
$$
\displaylines{
\text{Give an algorithm for finding maximum sub-array sum that runs in } O(n^{3}) \\
\\
\text{Solution:} \\
\text{Run two nested loops: } \forall i \in [1, n]: \forall j \in [i, n]: \\
\text{Calculate sum of sub-array } S_{i,j} \text{ which is } (j-i) \text{ additions} \\
\text{Keep track of max, return it in the end} \\
\text{Complexity is } \sum_{i=1}^{n} \sum_{j=i}^{n} (j-i) \leq \sum_{i=1}^{n} \sum_{j=i}^{n} j = \sum_{i=1}^{n} \frac{n(n+1)}{2} = \frac{n^{3} + n^{2}}{2} = O(n^{3}) \\
}
$$
## 4b and 4c
$$
\displaylines{
\text{Give an algorithm that runs in } O(n\log n) \\
\\
\text{Solution:} \\
\text{Let us take a divide-and-conquer approach:} \\
\text{mid = (start + end)/2} \\
\text{At each step of recursion, we will claculate three max sums:} \\
\text{maxLeftSum = F(start, mid)} \\
\text{maxRightSum = F(mid+1, end)} \\
\text{maxMidSum = G(start, end)} \\
\text{A recursive formula would then be as follows:} \\
\text{F(start, end)} = \left\{\begin{array}{}
\text{A[start]} & \text{start} = \text{end} \\
\text{max(F(start, mid), F(mid+1, end), G(start, end))} & \text{start} \neq \text{end} \\
\end{array}\right. \\
G \text{ will iterate from mid to start to calculate the max sum on the left} \\
\text{Then iterate from mid to end to calculate the max sum on the right} \\
\text{Sum of these two will be returned as maxMidSum} \\
\implies \text{G(start, end) takes } O(\text{end-start}) \text{ time} \\
\text{Let } n \text{ be the length of input, end - start} \\
\text{Let } T(n) \text{ be a runtime complexity of } F \\
\implies F(0, n) \text{ will run in:} \\
T(n) = 2T\left( \frac{n}{2} \right) + O(n) = 2^{2}T\left( \frac{n}{2^{2}} \right) + O(n) + 2O\left( \frac{n}{2} \right) = 2^{2}T\left( \frac{n}{2^{2}} \right) + 2O(n) \\
\dots = 2^{k}T\left( \frac{n}{2^{k}} \right) + \sum_{i=0}^{k} 2^{i}O\left( \frac{n}{2^{i}} \right) = 2^{k}T\left( \frac{n}{2^{k}} \right) + k \cdot O(n) \\
\text{Let } \frac{n}{2^{k}} = 1 \implies k = \log n \\
\implies T(n) = n \cdot O(1) + \log n \cdot O(n) = \boxed{ O(n\log n) } \\
}
$$
