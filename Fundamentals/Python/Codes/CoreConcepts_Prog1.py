"""
Challenge 1: Contact Manager
Overview
You’ll build a Contact Manager console application. It will allow users to:

Add new contacts (with name, phone number, and optionally other details).
List all contacts.
Search for contacts.
Update or remove existing contacts.
Optionally, export contacts to a text file.
By solving this, you’ll use:

Lists or dictionaries to store and manage contact information.
Sets to handle duplicates or quick membership checks (e.g., phone numbers).
Tuples for any immutable data you might want to store (optional).
String manipulation for searching and listing.
Possibly type conversions (e.g., if a phone number is stored as a string but later used numerically).

Suggested Data Structure
Use a dictionary where each key is the contact’s name (string), and each value is another dictionary of attributes, for example:

python
Copy
contacts = {
    "Alice": {
        "phone": "123-456-7890",
        "email": "alice@example.com",
        "city": "New York"
    },
    "Bob": {
        "phone": "987-654-3210",
        "email": "bob@sample.com",
        "city": "Los Angeles"
    }
    # ... more contacts ...
}
This allows easy updates (e.g., changing Alice’s phone number).

Feature Requirements
Add a New Contact

Prompt for the contact’s name, phone, email, city, etc.
Store the details in the contacts dictionary.
Check if the contact already exists to avoid duplicates.
If you want to track duplicates, consider using a set of phone numbers.
View All Contacts

Print each contact’s name and details in a formatted manner.
Handle the case where there are no contacts.
Search for a Contact

Prompt for a name (or partial name).
Find matching entries and print them out.
If no match, print an appropriate message.
Update Contact

Prompt for the contact’s name.
If it exists, ask what field to update (phone, email, city, etc.).
Overwrite the old value with the new value.
Remove Contact

Prompt for the contact’s name and remove it from the dictionary if found.
Otherwise, inform the user that the contact doesn’t exist.
Optional: Export Contacts to File

Create a simple text or CSV file containing all the contacts and their info.
Use with open("contacts.txt", "w") as f: pattern to write data.
Flow Example
sql
Copy
===== CONTACT MANAGER =====
1. Add Contact
2. View All Contacts
3. Search Contact
4. Update Contact
5. Remove Contact
6. Export to File
7. Exit
Enter your choice: 1

--- ADD CONTACT ---
Name: Alice
Phone: 123-456-7890
Email: alice@example.com
City: New York
Contact for 'Alice' added.

Enter your choice: 2

--- VIEW ALL CONTACTS ---
Alice: Phone=123-456-7890, Email=alice@example.com, City=New York
Bob:   Phone=987-654-3210, Email=bob@sample.com, City=Los Angeles

Enter your choice: 3

--- SEARCH CONTACT ---
Enter name to search: Ali
Found: Alice -> Phone=123-456-7890, Email=alice@example.com, City=New York
You get the idea—each menu option corresponds to an operation on the contacts dictionary.

Additional Challenges (If You Want More)
Validation: Ensure phone numbers or emails follow a certain format.
Case-insensitive Search: Convert names to lower case for matching.
Sorting: When viewing all contacts, sort them by name or city.
Multiple Phones: Let a user store multiple phone numbers for a single contact.
Error Handling: Gracefully handle user mistakes (e.g., non-numeric input where numeric is required).
Tips to Get Started
Initialize an empty dictionary: contacts = {}.
Write helper functions, such as add_contact(), view_contacts(), search_contact(), etc.
Use a simple while True loop with a menu to call these functions.
Test each feature thoroughly before moving on.
This project should be challenging enough to practice:

Multiple data types (str, dict, possibly set or tuple).
Control flow (loops, conditionals).
Basic error handling with try/except.
String manipulation and type conversions.
"""