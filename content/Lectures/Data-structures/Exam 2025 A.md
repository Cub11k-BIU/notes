---
{"publish":true,"created":"08/07/25, 17:07","modified":"2026-03-24T15:00:07.225+02:00","tags":["Academia","Lecture","Data-structures"],"cssclasses":""}
---

## Bonus
$$
\displaylines{
\text{Doos there exist a heap of height } h \text{ with } 2^{h} \text{ nodes?} \\
\\
\text{Solution:} \\
\text{Yes} \\
}
$$
## 1
$$
\displaylines{
& \text{We want to implement a dictionary-like data structure with the following properties:} \\
& \text{Data structure should be based on a tree} \\
1. & \text{Insert(x) - insert a new element x in amortized } O(1) \text{ time} \\
2. & \text{Find(x) - find element x in } O(\log n) \text{ time} \\
\\
& \text{We also know that insertions will only be made in an ascending order} \\
\\
& \text{Solution:} \\
}
$$
$$
\displaylines{
\text{Given that the elements are inserted in ascending order, we can store the max node} \\
\text{and always insert an element as its right child, which would be } O(1) \text{ time} \\
\text{Note, to maintain } O(\log n) \text{ lookup time, we'll have to make sure the tree stays balanced} \\
\text{Let us do the following:} \\
\text{We'll use a modified self-balancing tree} \\
\text{We'll always store number of nodes in the tree,} \\
\text{the unbalanced part of right spine as a dynamic array (it will always be sorted)} \\
\\
\text{Insert(x) will always be to the right spine (and the end of array), which is amortized } O(1) \\
\text{Rebalance will only be done when array has the same number of elements as} \\
\text{the balanced part of the tree} \\
\text{Let } N_{B} \text{ be the number of nodes in the balanced part of the tree} \\
\text{Let } N_{A} \text{ be the number of nodes in the right spine array} \\
\text{Assume we just rebalanced the tree} \\
\text{We perform } N \text{ and now need rebalancing} \\
\implies N_{A} = N = N_{B} \\
\text{Each insertion is done in } O(1) \text{ and will add 2 credits to our balance} \\
\text{Rebalancing requires } O(1) \text{ rotations for at most all nodes, which is } 2N \\
2N \text{ credits on our balance will pay for this rebalancing and make it amortized } O(1) \\
\implies \boxed{ \text{Insert(x) is amortized } O(1) } \\
\\
\text{Find(x) is performed as follows:} \\
x \text{ is first looked up in } N_{B} \text{ in } O(\log N_{B}) = O\left( \log \frac{n}{2} \right) \\
\text{Then, if not found, } x \text{ is looked up in } N_{A} \text{ with binary search in } O(\log N_{A}) = O\left( \log \frac{n}{2} \right) \\
\implies \boxed{ \text{Find(x) is } O\left( \log \frac{n}{2} \right) + O\left( \log \frac{n}{2} \right) = O(\log n) } \\
}
$$
# 2
$$
\displaylines{
\text{Let } S \text{ be a string of lowercase english letters} \\
\text{Let } f(S) \text{ be a sum of squares of frequences of each letter } \\
\text{e.g. } S = \text{"character"} \\
\implies \left|\begin{array}{c|c}
a & 2 \\
c & 2 \\
e & 1 \\
h & 1 \\
r & 2 \\
t & 1 \\
\end{array}\right| \implies f(S) = 2^{2}+2^{2}+1^{2}+1^{2}+2^{2}+1^{2} = 15 \\
\text{Write an algorithm, that finds string } S' \text{ obtained by removing } k \text{ characters from } S \\
\text{such that } f(S') \text{ is minimal} \\
\text{Input: string } S \text{ and number } k \\
\text{Output: string } S' \\
\text{Algorithm should find such a string in } O(n + \min(k\log n, k\log k)) \text{ time} \\
\\
\text{Solution:} \\
\text{We will first scan the string and store frequencies, which is } O(n) \\
\\
\text{We'll build a max heap of characters} \\
\text{where comparison is based on the frequency of a character} \\
\text{Building the heap is at most } O(m\log m) \text{ where } m \text{ is the number of distinct characters in } S \\
m \leq 26 \implies \text{we'll build the heap in } O(1) \\
\\
\text{Removing one character will reduce } f(S) \text{ by } \\
n^{2} - (n-1)^{2} = 2n - 1 \\
\implies \text{We will always remove one character with the highest frequency} \\
\\
\text{Each removal will be an extraction of maximum from heap and insertion of "what's left"} \\
\text{Extraction is } O(1) \\
\text{Insertion is } O(\log m) = O(1) \\
\text{We will repeat the operation } k \text{ times} \implies O(k) \\
\\
\text{We will now create string } S' \\
\text{Extract all characters from the heap, which is at most } O(m) = O(1) \\
\text{we will then append each character to the string } F \text{ times, where } F \text{ is the frequency} \\
\text{There are } n-k \text{ characters after } k \text{ removals} \implies O(n-k) \\
\implies \text{Algorithm total complexity is:} \\
O(n) + O(1) + O(k) + O(1) + O(n-k) = \boxed{ O(n+k) } \\
\text{This is better then the required complexity, but the requirement is not for } \Theta, \\
\text{ it is for } O, \text{ so it is fulfilled} \\
}
$$
# 3
$$
\displaylines{
\text{Write a linear algorithm, that is allowed to use } O(n) \text{ space to solve the following:} \\
\text{Input: array of integers and number } k = O(n) \\
\text{Output: True, if it is possible to divide the array into pairs, such that} \\
\text{each pairs sum is divisible by } k \text{ without remainder} \\
\text{False otherwise} \\
\\
\text{For example:} \\
arr = [9, 7, 5, 3, 6, 6], k = 6 \\
\text{True: } (9, 3), (7, 5), (6, 6) \\
\\
\text{Solution:} \\
\text{We can first check if } n \text{ is odd and return False if so, } O(1) \\
\text{Let } n \text{ be even} \\
\text{We will use an array of size } k = \boxed{ O(n) } \text{ to be the array of remainder counters, } cnt \\
\text{For each element $arr[i]$ of array, we will add one to the counter of remainders:} \\
\forall i \in [0, n-1]: cnt[arr[i] \ \% \ k] \text{ += } 1 \\
\text{This step is } O(n) \\
\text{We will then check: } \\
\forall i \in [0, k-1]: \left\{\begin{array}{}
cnt[i] \text{ is even} & i = 0 \\
cnt[i] \text{ is even} & 2i = k \\
cnt[i] = cnt[k-i] & \text{otherwise} \\
\end{array}\right. \\
\text{Which is } O(k) = O(n) \\
\implies \text{The total algorithm time complexity is } O(n) + O(n) = \boxed{ O(n) } \\
}
$$
# 4
$$
\displaylines{
\text{Given an array of integers } A \text{ of size } n \\
\text{Calculate number of transpositions(inversions) in } A \\
\\
\text{Solution:} \\
\text{We will sort the array using merge sort and count the inversions during merge} \\
\text{It works because two halves being merged are already sorted, so it is easy to count} \\
\text{inversions in relation to the entire half, not just one element} \\
\text{Runtime would be } O(n\log n), \text{ same as a clasic merge sort} \\
}
$$
