# Dynamic Programming Cheat Sheet (JavaScript)

## Key Concepts
- **Overlapping Subproblems:** Repeatedly solving the same subproblems.
- **Optimal Substructure:** Optimal solution built from optimal solutions of subproblems.

## Approaches

### 1. Memoization (Top-Down)
- **Idea:** Recursively solve subproblems and cache results.
- **Pattern:**
  1. Define a recursive function.
  2. Use a cache (object/array) to store computed results.
  3. Check cache before computing.

- **Example: Fibonacci**
```js
function fib(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n] !== undefined) return memo[n];
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}
```


### 2. Tabulation (Bottom-Up)
- **Idea:** Iteratively build a table from base cases up.
- - **Pattern:**
  1. Initialize an array with base cases.
  2. Fill the table using a loop.
  3. Return the table value for the desired result.
- - **Example**
  
```js
function fib(n) {
  if (n <= 1) return n;
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
```

## Common Patterns

### 1. 1D DP
- Use Cases: Fibonacci, Climbing Stairs, etc.
- **Example: Climbing Stairs**
  
```js
function climbStairs(n) {
  if (n <= 2) return n;
  const dp = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
```

### 2. 2D DP
- Use Cases: Grid problems, Longest Common Subsequence.
- **Example: Longest Common Subsequence**

```js
function lcs(str1, str2) {
  const m = str1.length, n = str2.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  
  return dp[m][n];
}
```

## Tips for DP in JavaScript 

- **Identify Subproblems** : Break the problem into smaller, overlapping pieces.
- **Select an Approach** : Use memoization for recursion-friendly problems; use tabulation for iterative builds.
- **Consider Complexity** : Balance time and space trade-offs.
- **Practice** : Build familiarity by solving various DP problems.


