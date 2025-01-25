# Core Concepts at a Glance

## Variables and Data Types
- Dynamically typed (no need to declare types).
- Common types: `int`, `float`, `bool`, `str`, `list`, `tuple`, `dict`, `set`.

## Control Flow
- Indentation-based scoping instead of braces.
- Standard constructs: `if`, `elif`, `else`, `for`, `while`, `try/except`, `raise`.

## Functions
- Defined with `def`.
- Support default values, keyword arguments, and variable-length args (`*args`, `**kwargs`).

## Collections and Comprehensions
- Lists (`[]`), Tuples (`()`), Dictionaries (`{}`), Sets.
- Powerful list/dict comprehensions for concise, readable transformations.

## Modules and Imports
- Organize code into modules/files.
- Import via `import module` or `from module import func`.

## Object-Oriented Programming
- Classes defined with `class`.
- Supports inheritance, method overriding, special (dunder) methods (e.g., `__init__`, `__str__`).

## Error Handling
- Use `try`, `except`, `finally`, `raise`.
- Built-in exceptions (like `ValueError`, `KeyError`, etc.).

## Virtual Environments
- `venv` for dependency isolation.
- Essential to keep different project libraries separate.


# Variables and Data Types

## Overview
- **Dynamically Typed**: No need to explicitly declare a variable’s type.
- **Variable Assignment**: Simply use `=` to assign values (e.g., `x = 10`).

## Common Data Types
1. **int**  
   - Whole numbers (e.g., `42`).
2. **float**  
   - Decimal values (e.g., `3.14`).
3. **bool**  
   - Boolean values (`True` or `False`).
4. **str**  
   - Strings, can use single or double quotes (e.g., `"Hello"`).
5. **list**  
   - Ordered, mutable sequence (e.g., `[1, 2, 3]`).
6. **tuple**  
   - Ordered, **immutable** sequence (e.g., `(1, 2, 3)`).
7. **dict**  
   - Key-value pairs, mutable (e.g., `{"name": "Alice", "age": 30}`).
8. **set**  
   - Unordered collection of **unique** items (e.g., `{1, 2, 3}`).

## Examples

```python
# Integer assignment
age = 30

# Floating-point assignment
price = 19.99

# Boolean
is_member = True

# String
greeting = "Hello, Python!"

# List
numbers = [1, 2, 3, 4]

# Tuple
coordinates = (10.5, 5.0)

# Dictionary
person = {
    "name": "Alice",
    "age": 30
}

# Set
unique_values = {1, 2, 3}


