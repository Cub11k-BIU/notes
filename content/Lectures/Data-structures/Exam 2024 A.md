---
{"publish":true,"created":"09/07/25, 14:07","modified":"2026-03-24T15:00:07.204+02:00","tags":["Academia","Lecture","Data-structures"],"cssclasses":""}
---

## Bonus
$$
\displaylines{
\text{Number of elements in a heap of height } h \text{ is } 2^{h+1} \\
\\
\text{Solution:} \\
\text{No} \\
}
$$
## 1a
$$
\displaylines{
& \text{We want to implement a data-structure:} \\
1. & \text{Init() in } O(1) \\
2. & \text{Insert(x) in } O(\log n) \\
3. & \text{ExtractMin() in } O(1) \\
4. & \text{DeleteMin() in } O(\log n) \\
5. & \text{Delete(x) in } O(\log n) \\
\\
& \text{Solution:} \\
}
$$
$$
\displaylines{
\text{These properties are fulfilled by a standard min heap based on array and a hash-table} \\
\text{Insert(x) is a standrad insert into a heap and then} \\
\text{index in the array is inserted into the hash-table with key x} \\
\text{Heapify is modified to update indices stored in hash-table, this does not affect complexity} \\
\text{ExtractMin() is standard} \\
\text{DeleteMin() is standard and deletion of min from hash-table} \\
\text{Delete(x) is getting index of x from hash-table in } O(1) \text{ and then heapify (up or down)} \\
}
$$
## 1b
$$
\displaylines{
\text{Given array } A \text{ of size } n \\
\text{Give an algorithm for finding all minimal elements of continuous sub-arrays of size } k \\
\text{Algorithm should run in } O(n\log k) \\
\\
\text{Solution:} \\
\text{If } k \geq n - \text{algorithm will return none or } min(A) \text{ which is done in } O(n) \\
\text{Let } k < n \\
\text{We will use a data structure from 1a} \\
\text{First sub-array } A[0..k] \text{ will be inserted fully} \\
\text{ which is } \sum_{i=1}^{k} \log i = \log k! = O(k\log k) \\
\text{ExtractMin() will be done in } O(1) \text{ to get first minimum} \\
\text{For each next sub-array } \forall i \in [1, n-k]: A[i..i+k] \text{ the following is done:} \\
\text{Element } A[i-1] \text{ is delete in } O(\log k) \\
\text{Element } A[i+k-1] \text{ is inserted in } O(\log k) \\
\text{ExtractMin() will be done in } O(1) \text{ to get } i+1 \text{-th minimum} \\
i \in [1, n-k] \implies \text{Total number of calls to Delete(x) and Insert(x) in the loop will be} \\
(n-k) \cdot (O(\log k) + O(\log k)) \\
\implies \text{Total complexity of the algorithm is:} \\
O(k\log k) + (n-k) \cdot O(\log k) = \boxed{ O(n\log k) } \\
}
$$
## 2
$$
\displaylines{
& \text{Build a data structure implementing a monotonic priority queue:} \\
1. & \text{Init(n) - initialize queue will all keys from 1 to } n \\
2. & \text{Delete(x) - delete element x from the queue if present} \\
3. & \text{DeleteMin() - delete minimum element from the queue} \\
& \text{Calculate amortized complexity of } n + 1 \text{ calls where the first one is Init(n)} \\
& \text{and the following are deletions (order of deletion or type of call is unknown)} \\
\\
& \text{Solution:} \\
}
$$
$$
\displaylines{
\text{We can use data structure from 1a to get:} \\
\text{Init(n) = Init() + } \forall i \in [1, n]: \text{Insert(i) which is } O(\log n!) = O(n\log n) \\
\text{DeleteMin() and Delete(x) are both } O(\log n), \text{ so } n \text{ deletions will result in:} \\
\sum_{i=1}^{n} O(\log i) = O(n\log n) \implies \text{Amortized cost among } n+1 \text{ operations is:} \\
\frac{O(n\log n) + O(n\log n)}{n+1} = O(\log n) \\
\\
\text{Can we make it better?} \\
\text{We'll initialize an array of n+1 booleans, where true means present and false means abscent} \\
\text{Minimum will initially point to } 1, min = 1 \\
\text{Init(n) is } n+3 \text{ operations (allocate, set each element to true, set min to 1)} \\
\text{Any deletion will then be done as following:} \\
4. \quad A[x] = false \\
5. \quad min \text{ is incremented until } A[min] == true \text{ or } min == n \\
\text{Over } n \text{ deletions, min is only moving forard, so it can increment at most } n \text{ times} \\
\implies \text{Over n deletions, cost is } n \cdot O(1) + n \\
\implies \boxed{ \text{Amortized cost is } \frac{n+3 + n + n}{n} = \frac{3n+3}{n} = O(1) } \\
}
$$
# 3
$$
\displaylines{
\text{Given a binomial tree } TB^{(k)} \text{ of rank } k \\
\text{Prove by induction: } TB^{(k)} \text{ is a tree of height } k \\
\text{Prove by induction: } TB^{(k)} \text{ is a tree with } 3^{k} \text{ nodes} \\
\\
\text{Solution:} \\
\text{Base case. } TB^{(0)} \text{ has only root, so it is of height } 0 \text{ and has } 1 = 3^{0} \text{ nodes} \\
\text{Induction step. Let } TB^{(n)} \text{ be a tree of height } n \text{ with } 3^{n} \text{ nodes} \\
TB^{(n+1)} \text{ is then a tree composed of three sub-trees } TB^{(n)}_{1}, TB^{(n)}_{2}, TB^{(n)}_{3} \\
\text{Each of these sub-trees has } 3^{n} \text{ nodes} \implies TB^{(n+1)} \text{ has } 3 \cdot 3^{n} = 3^{n+1} \text{ nodes} \\
\text{Sub-trees } TB^{(n)}_{1}, TB^{(n)}_{2} \text{ are children of root of } TB^{(n)}_{3} \\
\implies \text{Height of } TB^{(n+1)}, h(TB^{(n+1)}) \text{ is equal to } \\
\max\{h(TB^{(n)}_{1}) + 1, h(TB^{(n)}_{2}) + 1, h(TB^{(n)}_{3})\} = \max\{n + 1, n + 1, n\} = n + 1 \\
\implies \text{By induction, } \forall n \in \mathbb{N}_{0}: h(TB^{(n)}) = n \text{ and } TB^{(n)} \text{ has } 3^{n} \text{ nodes} \\
}
$$
# 4a
$$
\displaylines{
\text{Given array } A \text{ of } n \text{ natural integers and integer } k \\
\text{Give an algorithm that would determine if a } k\text{-th arithmetic exists in the array} \\
k\text{-th arithmetic is a set of } k \text{ numbers s.t. difference between any two neighbors is the same} \\
\text{Give an algorithm that runs in } O(n^{k}) \text{ time} \\
\\
\text{Solution:} \\
\text{Let us choose all possible subsets of size } k \text{ from the array} \\
\binom{n}{k} = \frac{n!}{(n-k)!k!} \text{ sets} \\
\text{For each set, we'll linearly check if it's an arithmetic progression} \\
\implies k \cdot \binom{n}{k} = \frac{n!}{(n-k)!(k-1)!} \leq \frac{n!}{(n-k)!} \leq n^{k} \implies O(n^{k}) \\
}
$$
## 4b
$$
\displaylines{
\text{Give an algorithm that runs in } O(kn^{2}) \text{ time} \\
\\
\text{Solution:} \\
\text{First, we will insert elements (as number of their appearances in array) into the hashtable } H \\
\text{If element is already present in the table, we will add } 1 \text{ to its count} \\
\text{This takes } O(n) \text{ time} \\
\text{Then we will sort the array, this takes } O(n\log n) \text{ time} \\
\text{Then, we will iterate over all ordered pairs of elements in } A, \\
\text{there are } \sum_{i=1}^{n} (n-i) = n^{2} - \frac{n(n+1)}{2} = \frac{n^{2}-n}{2} = O(n^{2}) \text{ such pairs} \\
\forall i \in [0, n-1]: \forall j \in [i+1, n-1]: x = A[i], y = A[j] \\
\text{For each pair, say x and y, we will check if } H \text{ contains } k \text{ elements:} \\
\text{If } x = y \text{ then we will just check if } H[x] \geq k \\
\text{Otherwise, we will check if } H \text{ contains} \\
x, x + (y-x), x + 2(y-x), \dots, x + (k-1)(y-x) \\
\text{A total of } k \text{ accesses to hash-table will take } O(k) \text{ time} \\
\implies \text{Total algorithm complexity is } O(n) + O(n\log n) + O(n^{2}) \cdot O(k) = O(kn^{2}) \\
}
$$
