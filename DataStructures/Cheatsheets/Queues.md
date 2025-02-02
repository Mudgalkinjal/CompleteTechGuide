# JavaScript Queues: Complete Guide

## **1. What is a Queue?**
- **FIFO (First In, First Out)** data structure.
- Elements are added (`enqueue`) to the **rear** and removed (`dequeue`) from the **front**.
- **Key Operations**:
  - `enqueue`: Add an element to the rear.
  - `dequeue`: Remove the front element.
  - `peek`: View the front element without removing it.
  - `isEmpty`: Check if the queue is empty.
  - `size`: Get the number of elements.

---

## **2. Implementation in JavaScript**
### **Array-Based Queue**
```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  // Enqueue: O(1) amortized (dynamic array resizing)
  enqueue(value) {
    this.items.push(value);
  }

  // Dequeue: O(n) (shifts elements)
  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift();
  }

  // Peek: O(1)
  peek() {
    if (this.isEmpty()) return null;
    return this.items[0];
  }

  // Check if empty: O(1)
  isEmpty() {
    return this.items.length === 0;
  }

  // Get size: O(1)
  size() {
    return this.items.length;
  }

  // Clear queue: O(1) (truncates array)
  clear() {
    this.items = [];
  }
}
```

### **Linked List-Based Queue (Optimized)**
```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListQueue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  // Enqueue: O(1)
  enqueue(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
    this.size++;
  }

  // Dequeue: O(1)
  dequeue() {
    if (this.isEmpty()) return null;
    const removed = this.front.value;
    this.front = this.front.next;
    this.size--;
    if (this.isEmpty()) this.rear = null; // Reset rear if empty
    return removed;
  }

  // Peek: O(1)
  peek() {
    return this.front?.value ?? null;
  }

  // Check if empty: O(1)
  isEmpty() {
    return this.size === 0;
  }

  // Clear queue: O(1)
  clear() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }
}
```

---

## **3. Core Operations & Big O**

| Operation | Method | Array-Based | Linked List-Based | Description |
|-----------|--------|-------------|-------------------|-------------|
| **Enqueue** | `enqueue()` | O(1)* | O(1) | Add element to the rear |
| **Dequeue** | `dequeue()` | O(n) | O(1) | Remove front element |
| **Peek** | `peek()` | O(1) | O(1) | View front element |
| **isEmpty** | `isEmpty()` | O(1) | O(1) | Check if queue is empty |
| **Size** | `size()` | O(1) | O(1) | Get number of elements |
| **Clear** | `clear()` | O(1) | O(1) | Reset the queue |

_*Amortized O(1) for dynamic arrays (occasional O(n) resizing)._

---

## **4. Why Use Queues?**
### **Use Cases**:
1. **Breadth-First Search (BFS)**: Graph/tree traversal.
2. **Task Scheduling**: Print jobs, CPU scheduling.
3. **Buffering**: Streaming data, message queues.
4. **Event Handling**: UI event processing (e.g., click handlers).

### **Advantages**:
- Predictable FIFO order.
- Efficient for ordered processing.

### **Avoid When**:
- You need random access to elements (use arrays).
- LIFO (Last In, First Out) behavior is required (use stacks).

---

## **5. Queue Variants**
### **1. Priority Queue**
- Elements are processed by priority (higher priority first).
- Often implemented with a **heap** (O(log n) insertion/deletion).

**Example**:
```javascript
class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this.heap = [];
    this.comparator = comparator;
  }

  enqueue(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  dequeue() {
    if (this.isEmpty()) return null;
    const root = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.sinkDown();
    }
    return root;
  }

  // Heap helper methods (bubbleUp, sinkDown) omitted for brevity
}
```

### **2. Circular Queue (Fixed-Size)**
- Reuses empty spaces created after dequeues.
- **Use Case**: Memory-efficient buffering (e.g., traffic systems).

**Example**:
```javascript
class CircularQueue {
  constructor(k) {
    this.size = k;
    this.queue = new Array(k);
    this.front = -1;
    this.rear = -1;
  }

  enqueue(value) {
    if (this.isFull()) return false;
    if (this.isEmpty()) this.front = 0;
    this.rear = (this.rear + 1) % this.size;
    this.queue[this.rear] = value;
    return true;
  }

  dequeue() {
    if (this.isEmpty()) return false;
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }
    return true;
  }
}
```

---

## **6. Common Patterns**
### **1. BFS (Breadth-First Search)**
```javascript
function bfs(graph, startNode) {
  const queue = new Queue();
  const visited = new Set();
  queue.enqueue(startNode);
  visited.add(startNode);

  while (!queue.isEmpty()) {
    const node = queue.dequeue();
    console.log(node); // Process node
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.enqueue(neighbor);
      }
    }
  }
}
```

### **2. Recent Calls Counter (LeetCode 933)**
```javascript
class RecentCounter {
  constructor() {
    this.queue = new Queue();
  }

  ping(t) {
    this.queue.enqueue(t);
    while (this.queue.peek() < t - 3000) {
      this.queue.dequeue();
    }
    return this.queue.size();
  }
}
```

### **3. Circular Buffer**
```javascript
class CircularBuffer {
  constructor(size) {
    this.size = size;
    this.buffer = new Array(size);
    this.front = 0;
    this.rear = 0;
    this.count = 0;
  }

  write(value) {
    if (this.isFull()) return false;
    this.buffer[this.rear] = value;
    this.rear = (this.rear + 1) % this.size;
    this.count++;
    return true;
  }

  read() {
    if (this.isEmpty()) return null;
    const value = this.buffer[this.front];
    this.front = (this.front + 1) % this.size;
    this.count--;
    return value;
  }
}
```

---

## **7. Gotchas**
1. **Underflow**: Calling `dequeue()` or `peek()` on an empty queue. Always check `isEmpty()` first.
2. **Array Performance**: Avoid array-based queues for frequent `dequeue` operations (use linked lists).
3. **Priority Queue Order**: Ensure the comparator is correctly defined (defaults to max-heap behavior).

---

## **8. Performance Tips**
1. **Use Linked List Queues** for frequent enqueues/dequeues.
2. **Avoid Array Shifts**: Prefer linked lists or circular queues.
3. **Preallocate Memory**: For fixed-size queues (e.g., circular queues).

---

## **9. Comparison: Queue vs Stack**

| Feature | Queue | Stack |
|---------|-------|-------|
| Order | FIFO | LIFO |
| Use Case | Ordered processing | Backtracking |
| Key Methods | `enqueue`, `dequeue` | `push`, `pop` |
| BFS/DFS | BFS uses queues | DFS uses stacks |

---

## **10. Edge Cases**
- **Empty Queue**: Handle `dequeue()` and `peek()` gracefully.
- **Single-Element Queue**: Ensure `dequeue()` resets the queue to empty.
- **Full Circular Queue**: Prevent overwriting unread data.

---

## **11. Real-World Analogy**
- **JavaScript Event Loop**: Uses a **task queue** (macro tasks) and **microtask queue** to manage asynchronous operations.

---