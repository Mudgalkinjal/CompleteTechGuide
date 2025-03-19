# Graph Problems Cheat Sheet (JavaScript)

## Graph Representations
- **Adjacency List:**  
  - Best for sparse graphs.  
  - Example:  
    ```js
    const graph = {
      A: ['B', 'C'],
      B: ['A', 'D'],
      C: ['A', 'D'],
      D: ['B', 'C']
    };
    ```
- **Adjacency Matrix:**  
  - Useful for dense graphs.  
  - Represented as a 2D array where `matrix[i][j]` indicates an edge.

## Graph Traversal

### Depth-First Search (DFS)
- **Purpose:** Explore as far as possible before backtracking.
- **Complexity:** O(V + E)
- **Recursive Example:**
  ```js
  function dfs(graph, start, visited = new Set()) {
    console.log(start);
    visited.add(start);
    for (let neighbor of graph[start] || []) {
      if (!visited.has(neighbor)) {
        dfs(graph, neighbor, visited);
      }
    }
  }

## Breadth-First Search (BFS)

- Purpose: Find shortest path in unweighted graphs.
- Complexity: O(V + E)

**Example**:

```js
function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];
  visited.add(start);
  while (queue.length) {
    const vertex = queue.shift();
    console.log(vertex);
    for (let neighbor of graph[vertex] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}
```

## Shortest Path Algorithms

**Dijkstra's Algorithm:**
- Suitable for weighted graphs with non-negative weights.
- Complexity: O((V + E) log V) using a priority queue.

**Bellman-Ford Algorithm:**
- Handles negative weights.
- Complexity: O(V * E).

**Floyd-Warshall:**
- Computes all-pairs shortest paths.
- Complexity: O(V³).

## Minimum Spanning Tree (MST)

* *   **Kruskal's Algorithm:*** *   Uses union-find data structure.
*     * *   Complexity: O(E log E).
* *   **Prim's Algorithm:*** *   Greedy approach starting from a vertex.
*     * *   Complexity: O((V + E) log V).

## Additional Concepts

* *   **Topological Sort (for DAGs):*** *   Kahn's Algorithm (using in-degree and a queue) or DFS-based approach.
* *   **Cycle Detection:*** *   DFS-based methods for directed and undirected graphs.
* *   **Advanced Topics:*** *   **Strongly Connected Components (SCC):** Algorithms like Kosaraju’s or Tarjan’s.
*     * *   **Graph Coloring:** Assign colors with constraints.

_Tips:_

* *   Choose the graph representation based on graph density and operations.
* *   Always consider edge cases such as disconnected graphs.


