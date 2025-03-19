# Space Complexity Cheat Sheet

## Data Structures

### Array
- **Space:** O(n) (stores n elements)

### Linked List
- **Space:** O(n) (n nodes plus pointer overhead)

### Stack / Queue
- **Space:** O(n) (n elements)

### Hash Table
- **Space:** O(n) (based on the number of stored elements)

### Binary Search Tree (BST)
- **Space:** O(n) (n nodes)

### Balanced BST (AVL, Red-Black Tree)
- **Space:** O(n)

### Heap (Binary Heap)
- **Space:** O(n)

### Graph
- **Adjacency List:** O(V + E) (V vertices, E edges)
- **Adjacency Matrix:** O(V²)

---

## Algorithms

### Sorting

- **In-Place Sorts (Bubble, Insertion, Selection, Heap Sort):** O(1) auxiliary space
- **Merge Sort:** O(n) auxiliary space
- **Quick Sort:** 
  - Average: O(log n) (recursion stack)
  - Worst-case: O(n)

### Searching

- **Linear Search:** O(1)
- **Binary Search:** 
  - Iterative: O(1)
  - Recursive: O(log n) (recursion stack)

### Divide & Conquer
- **Auxiliary Space:** Typically O(log n) (recursion overhead, varies by algorithm)

### Dynamic Programming
- **Space Complexity:** Varies (commonly O(n) to O(n·m)); can often be optimized with space reduction techniques

### Greedy Algorithms
- **Space Complexity:** Generally O(1) to O(n), depending on problem-specific data structures
