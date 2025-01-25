"""
Demonstration of Python fundamentals:
1. Data Type Identification
2. Type Conversion
3. List Operations
4. Tuple Immutability
5. Dictionary Manipulation
6. Set Operations
"""

# 1. Data Type Identification
# Create variables of different data types and print out their types.
var1 = 2
print("var1 =", var1, "->", type(var1))

var2 = 3.14
print("var2 =", var2, "->", type(var2))

var3 = False
print("var3 =", var3, "->", type(var3))

var4 = 'test'
print("var4 =", var4, "->", type(var4))

var5 = [1, 2, 3, 4]
print("var5 =", var5, "->", type(var5))

var6 = (1, 2, 3)
print("var6 =", var6, "->", type(var6))

var7 = {1: 'this', 2: 'is', 3: 'dict'}
print("var7 =", var7, "->", type(var7))

var8 = {1, 2, 3, 4, 5, 6}
print("var8 =", var8, "->", type(var8))

print("\n--------------------\n")

# 2. Type Conversion
# Convert an integer to a float, a float to an integer, and a string to an integer.

# Integer to float
var1 = 4
print("var1 (before):", var1, "->", type(var1))
var1_float = float(var1)
print("var1_float (after converting to float):", var1_float, "->", type(var1_float))
print()

# Float to integer
var2 = 3.14
print("var2 (before):", var2, "->", type(var2))
var2_int = int(var2)
print("var2_int (after converting to int):", var2_int, "->", type(var2_int))
print()

# String to integer
var3 = "42"
print("var3 (before):", var3, "->", type(var3))
var3_int = int(var3)
print("var3_int (after converting to int):", var3_int, "->", type(var3_int))

print("\n--------------------\n")

# 3. List Operations
# Initialize a list, add/remove elements, then slice the list to create a sub-list.

numbers = [10, 20, 30, 40, 50]
print("Original List:", numbers)

# Add elements
numbers.append(60)
numbers.insert(2, 25)
print("After Adding Elements:", numbers)

# Remove elements
numbers.remove(40)
popped_item = numbers.pop()
print("After Removing Elements:", numbers)
print("Popped Item:", popped_item)

# List slicing
sub_list = numbers[1:4]
print("Sub-List (numbers[1:4]):", sub_list)

print("\n--------------------\n")

# 4. Tuple Immutability
# Demonstrate that tuples cannot be modified after creation.

my_tuple = (10, 20, 30)
print("Original Tuple:", my_tuple)

try:
    my_tuple[0] = 99
except TypeError as e:
    print("Error encountered:", e)

print("Tuple After Attempted Modification:", my_tuple)

print("\n--------------------\n")

# 5. Dictionary Manipulation
# Create a dictionary, add/update key-value pairs, and print results.

person = {"name": "Alice", "age": 30}
print("Original Dictionary:", person)

person["city"] = "New York"
print("After Adding Key-Value:", person)

person["age"] = 31
print("After Updating 'age':", person)

print("\n--------------------\n")

# 6. Set Operations
# Create a set, add duplicates, then demonstrate union/intersection with another set.

my_set = {1, 2, 3}
print("Original Set:", my_set)

my_set.add(2)  # Adding a duplicate doesn't change the set
print("After Adding Duplicate (2):", my_set)

another_set = {3, 4, 5}
print("Another Set:", another_set)

union_set = my_set.union(another_set)
print("Union of my_set and another_set:", union_set)

intersection_set = my_set.intersection(another_set)
print("Intersection of my_set and another_set:", intersection_set)
