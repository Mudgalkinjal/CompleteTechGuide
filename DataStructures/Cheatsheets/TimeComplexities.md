# Time Complexity Cheat Sheet

## Data Structures

### Array
- **Access:** O(1)
- **Search:** O(n)
- **Insertion:** O(n)
- **Deletion:** O(n)

### Linked List
- **Access:** O(n)
- **Search:** O(n)
- **Insertion:** O(1) (given node reference)
- **Deletion:** O(1) (given node reference)

### Stack / Queue
- **Push/Enqueue:** O(1)
- **Pop/Dequeue:** O(1)

### Hash Table
- **Search/Insertion/Deletion:** Average: O(1), Worst: O(n) (collision cases)

### Binary Search Tree (BST)
- **Search/Insertion/Deletion:** Average: O(log n), Worst: O(n) (skewed tree)

### Balanced BST (AVL, Red-Black Tree)
- **Search/Insertion/Deletion:** O(log n)

### Heap (Binary Heap)
- **Insertion:** O(log n)
- **Deletion (Extract-Min/Max):** O(log n)
- **Peek (Min/Max):** O(1)

### Graph (Adjacency List)
- **Storage:** O(V + E)
- **DFS/BFS:** O(V + E)

---

## Algorithms

### Sorting

- **Bubble Sort:** O(n²)
- **Insertion Sort:** O(n²) *(Best case: O(n) for nearly sorted arrays)*
- **Selection Sort:** O(n²)
- **Merge Sort:** O(n log n)
- **Quick Sort:** Average: O(n log n), Worst: O(n²)
- **Heap Sort:** O(n log n)

### Searching

- **Linear Search:** O(n)
- **Binary Search:** O(log n) *(requires sorted array)*

### Divide & Conquer / Recurrences
- **Master Theorem:** For T(n) = aT(n/b) + f(n), complexity depends on f(n) vs. n^(log_b a)

### Dynamic Programming & Greedy
- **Dynamic Programming:** Varies (commonly polynomial, e.g., O(n²) or O(n·m))
- **Greedy Algorithms:** Varies (commonly O(n log n) or O(n))

---

*Note: Actual complexities may vary based on implementation details and assumptions.*
