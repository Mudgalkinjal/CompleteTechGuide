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
def print_contact(name, details):
    phone = details['phone']
    email = details.get('email') or 'N/A'
    city = details.get('city') or 'N/A'
    print(f"{name}: Phone={phone}, Email={email}, City={city}")

def add_contact(contacts, phone_numbers):
    print('\n---ADD CONTACT---')
    name = input("Name: ").strip()
    while not name:
        print("Name cannot be empty")
        name = input("Name: ",strip())
    if name in contacts:
        print("Contact already exists")
        return
    phone = input("Phone: ").strip()
    while not phone:
        print("Phone cannot be empty")
        phone = input("Phone: ", strip())
    if phone in phone_numbers:
        print("Phone already exists")
        return
    email = input("Email (optional): ").strip() or None
    city = input("City (optional): ").strip() or None
    contacts[name]={
        'phone':phone,
        'email':email,
        'city':city
    }
    phone_numbers.add(phone)
    print(f"Contact for `{name}` added.")
    

def view_contacts(contacts):
    print("\n---VIEW CONTACTS---")
    if not contacts:
        print("No contacts found")
        return
    for name in contacts:
        print_contact(name, contacts[name])

def search_contact(contacts):
    print("\n---SEARCH CONTACT---")
    search_term = input("Enter name to search: ").strip().lower()
    found = False
    for name in contacts:
        if search_term in name.lower():
            print_contact(name, contacts[name])
            found = True
    if not found:
        print("No contacts found")

def update_contact(contacts, phone_numbers):
    print("\n---UPDATE CONTACT---")
    name = input("Enter contact name to update: ").strip()
    if name not in contacts:
        print('Contact not found')
        return
    current_details = contacts[name]
    current_phone = current_details['phone']
    print("Current details:")
    print_contact(name, current_details)
    field = input("Enter field to update (phone/email/city): ").strip().lower()
    valid_fields = ['phone', 'email', 'city']
    if field not in valid_fields:
        print('Invalid field')
        return
    if field == 'phone':
        new_phone = input("Enter new phone: ").strip()
        while not new_phone:
            print("Phone cannot be empty")
            new_phone = input("Enter new phone: ").strip()
        if new_phone == current_phone:
            print("Phone number is the same. No change.")
            return
        if new_phone in phone_numbers:
            print("Phone number already in use")
            return
        phone_numbers.remove(current_phone)
        phone.numbers.add(new_phone)
        current_details['phone']=new_phone
        print('Phone number updated')
    else:
        new_value = input(f"Enter new {field}: ").strip()
        current_details[field] = new_value if new_value else None
        print(f"{field.capitalize()} updated.")

def remove_contact(contacts, phone_numbers):
    print("\n---REMOVE CONTACT---")
    name = input("Enter contact name to remove ").strip()
    if name in contacts:
        phone = contacts[name]['phone']
        del contacts[name]
        phone_numbers.remove(phone)
        print("Contact removed")
    else:
        print('Contact not found')

def export_contacts(contacts):
    print("\n---EXPORT CONTACTS---")
    with open("contacts.txt", "w") as f:
        f.write("Name, Phone, Email, City\n")
        for name, details in contacts.items():
            phone = details['phone']
            email = details.get('email') or ''
            city = details.get('city') or ''
            line = f"{name}, {phone}, {email}, {city}\n"
            f.write(line)
    print("Contacts exported to contacts.txt.")

# MAIN FUNCTION 

def main():
    contacts = {}
    phone_numbers = set()
    while True:
        print("\n===== CONTACT MANAGER =====")
        print("1. Add Contact")
        print("2. View All Contacts")
        print("3. Search Contact")
        print("4. Update Contact")
        print("5. Remove Contact")
        print("6. Export to File")
        print("7. Exit")
        choice = input("Enter your choice: ").strip()
        if choice == '1':
            add_contact(contacts, phone_numbers)
        elif choice=='2':
            view_contacts(contacts)
        elif choice=='3':
            search_contact(contacts)
        elif choice=='4':
            update_contact(contacts, phone_numbers)
        elif choice=='5':
            remove_contact(contacts, phone_numbers)
        elif choice=='6':
            export_contacts(contacts)
        elif choice=='7':
            print('Exiting...')
            break
        else:
            print('Invalid choice. Please enter a number from 1 to 7')

if __name__=="__main__":
    main()