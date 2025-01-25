"""
Challenge 2: Word Frequency Analyzer
Goal
Create a console-based program that:

Accepts a block of text from the user.
Processes that text to:
Count how many times each word appears.
Ignore uppercase vs. lowercase differences (i.e., Hello and hello should be counted as the same word).
Optionally remove common punctuation so that word, and word are treated the same.
Displays:
A dictionary of all unique words and their frequency.
The total number of distinct words.
The top 5 most frequent words (with their counts).
Uses a set to handle any special words (e.g., “stop words”) that should not be counted.
Optionally, store punctuation or special symbols you want to remove in a tuple (since it won’t change).
Steps to Implement
User Input

Prompt the user to enter (or paste) a multi-line text.
Alternatively, read from a file if you want extra practice with file I/O.
Preprocessing

Convert all text to lowercase.
Remove punctuation (optional, but recommended). You could keep a tuple of punctuation symbols to remove:
python
Copy
PUNCTUATION = ('.', ',', '!', '?', ';', ':')
Split the text on whitespace to get individual words.
Stop Words (Optional)

Create a set of words you want to exclude from the count (e.g., {"a", "the", "and", "of"}).
Whenever you see a word in this set, skip it.
Counting Words

Use a dictionary to keep track of word frequencies:
python
Copy
word_counts = {}
For each word that isn’t in the stop-words set, increment its count in word_counts.
Analyze and Display Results

Print the total distinct words (size of word_counts.keys()).
Print the full dictionary of word counts.
Sort the dictionary by frequency and display the top 5 most frequent words. For example:
python
Copy
sorted_counts = sorted(word_counts.items(), key=lambda x: x[1], reverse=True)
top_five = sorted_counts[:5]
print("Top 5 most frequent words:", top_five)
Possible Extras

Ask the user if they want to save the results to a file (e.g., results.txt).
Implement a small menu (like your previous challenges) so the user can re-run the analysis with different text without restarting the program.
Add optional list manipulations, like removing certain words, then re-checking frequencies.
Example Interaction
vbnet
Copy
Enter your text (press Enter twice to finish):
Hello, hello! This is a test. 
The test is simple, isn't it?

(You press Enter twice here)

Removing punctuation...
Counting words...

Total distinct words (excluding stop words): 6

All Word Counts:
  hello: 2
  this: 1
  test: 2
  is: 2
  simple: 1
  isn't: 1
  it: 1

Top 5 Most Frequent Words:
  1) hello -> 2
  2) test -> 2
  3) is -> 2
  4) this -> 1
  5) simple -> 1
(Exact output will depend on how you handle punctuation and stop words.)

"""