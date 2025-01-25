# Interview Questions (Data Types & Variables) – Answers

1. **What does “dynamically typed” mean in Python?**  
   Python doesn’t require you to declare variable types in advance. The type is determined by the object a variable references. You can reassign a variable to a different type at any time (e.g., from an `int` to a `str`).

2. **What’s the difference between a `list` and a `tuple` in Python?**  
   - **List**: Mutable, meaning you can modify its contents (add/remove items).  
   - **Tuple**: Immutable, meaning once created, you cannot change its contents.  

3. **How do you create a dictionary, and how is it different from a list?**  
   - **Dictionary**: Created using curly braces and key-value pairs, for example:  
     ```python
     my_dict = {"key1": "value1", "key2": "value2"}
     ```
   - **Difference**:  
     - A dictionary stores items in key-value pairs for fast lookups by key.  
     - A list is an ordered collection accessed by integer indices.  

4. **When would you use a `set` instead of a `list`?**  
   - Use a set when you need **unique elements** and **fast membership checks** (`O(1)` on average).  
   - A set automatically discards duplicates and is unordered.  

5. **Explain how Python handles variable scope and reassignment.**  
   - Python uses the **LEGB** rule (Local, Enclosing, Global, Built-in) to determine variable scope.  
   - Reassignment binds a name to a new object. For example, `x = 10` can later become `x = "Hello"`.  
   - If modifying a global variable inside a function, you need to declare it as `global var_name`.

6. **What are some common pitfalls with data types in Python?**  
   - **String vs. Numeric Concatenation**: `"2" + "3"` vs. `2 + 3`.  
   - **Integer vs. Float Division**: `5 / 2` yields `2.5`, but `5 // 2` yields `2`.  
   - **Mutable Default Arguments**: Defaulting a function parameter to a mutable type (like `[]`) can cause unexpected behavior if not handled carefully.


