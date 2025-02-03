### Algorithm & Data Structure Questions

---

#### **1. 64 Horses Sorting Problem**  
**Prompt**: You have 64 horses and 8 race tracks. How do you determine the fastest horses without recording their speeds? What is the minimum number of races required?  
**Answer**:  
- **Step 1**: Race 8 groups of 8 horses (8 races).  
- **Step 2**: Race the 8 winners from Step 1 (1 race). The fastest horse is identified.  
- **Step 3**: Include the 2nd/3rd-place horses from the winner’s group, 2nd-place from the runner-up group, and 3rd-place from the third group in a final race (1 race).  
- **Total Races**: **11**.  

---

#### **2. Big O Notation**  
**Prompt**: What is the Big O notation for the 64-horse sorting problem?  
**Answer**:  
- **O(1)**. The number of races is constant (11) regardless of input size.  

---

#### **3. Stack**  
**Prompt**: What is a stack?  
**Answer**:  
A **Last-In-First-Out (LIFO)** data structure. Key operations: `push` (add to top), `pop` (remove from top).  

---

#### **4. Node Management Data Structure**  
**Prompt**: What data structure manages tree nodes (e.g., DOM)? Describe its implementation.  
**Answer**:  
- **Tree** with parent/child pointers.  
- **Implementation**:  
  ```javascript
  class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  }
  ```

---

#### **5. Hash Map for HTML Elements**  
**Prompt**: Modify a hash map to store HTML elements and enable horizontal movement.  
**Answer**:  
```javascript
const elementMap = new Map();
function moveHorizontally(id, pixels) {
  const element = elementMap.get(id);
  element.style.left = `${pixels}px`;
}
```

---

#### **6. Depth-First Search (DFS)**  
**Prompt**: Implement DFS for a tree.  
**Answer**:  
```javascript
function dfs(node) {
  if (!node) return;
  console.log(node.value);
  node.children.forEach(child => dfs(child));
}
```

---

#### **7. String Parsing & Encryption**  
**Prompt**: Encrypt a string by reversing words and shifting characters.  
**Answer**:  
```javascript
function encrypt(str) {
  return str.split(' ')
           .map(word => [...word].reverse().join(''))
           .join(' ');
}
```

---

#### **8. Time Complexity**  
**Prompt**: Time complexity of sorting algorithms and binary heap operations.  
**Answer**:  
| Algorithm/Operation | Time Complexity |  
|----------------------|-----------------|  
| Bubble Sort          | O(n²)           |  
| Merge Sort           | O(n log n)      |  
| Binary Heap Insert   | O(log n)        |  

---

#### **9. Binary Search Tree (BST)**  
**Prompt**: Define a BST.  
**Answer**:  
A tree where:  
- Left child < Parent < Right child.  
- Search/Insert/Delete: **O(h)** (height-dependent).  

---

#### **10. Tree/Graph Traversal**  
**Prompt**: Traverse a tree using BFS and DFS.  
**Answer**:  
- **BFS**: Use a queue.  
- **DFS**: Use recursion or a stack.  

---

#### **11. 2D Matrix Algorithms**  
**Prompt**: Rotate a 2D matrix 90° clockwise.  
**Answer**:  
- Transpose the matrix, then reverse rows.  

---

#### **12. Queue vs. Stack**  
**Prompt**: Compare queue and stack.  
**Answer**:  
- **Queue**: FIFO (e.g., BFS).  
- **Stack**: LIFO (e.g., DFS).  

---

#### **13. Best Deal in a Tree**  
**Prompt**: Find the best deal in a tree where nodes have deals.  
**Answer**:  
- Traverse paths from root to leaves, tracking the minimum deal.  

---

#### **14. Least Common Ancestor (LCA)**  
**Prompt**: Find LCA of two nodes in a tree.  
**Answer**:  
- Use recursive traversal to compare paths.  

---

#### **15. Matrix Chain Multiplication Brackets**  
**Prompt**: Print optimal brackets for matrix multiplication.  
**Answer**:  
- Use DP to track split points and reconstruct brackets.  

---

#### **16. Hash Table for HTML Elements**  
**Prompt**: Implement a hash table storing HTML elements.  
**Answer**:  
```javascript
class HashTable {
  constructor() {
    this.table = {};
  }
  set(key, element) {
    this.table[key] = element;
  }
}
```

---

#### **17. Playlist Tree Structure**  
**Prompt**: Model a playlist tree with songs.  
**Answer**:  
- **Tree Structure**:  
  ```json
  {
    "name": "Playlist",
    "children": [
      { "name": "Sub-Playlist", "children": [...] },
      { "name": "Song", "url": "..." }
    ]
  }
  ```  

