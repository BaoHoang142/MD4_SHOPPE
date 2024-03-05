class Contact {
    name: string;
    email: string;
    phoneNumber: number;
    constructor (name: string, email: string, phoneNumber: number) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

}
class PhoneBook <T extends Contact> {
    contacts: T[] = [];
    addContact(contact: T) {
        this.contacts.push(contact);
    }
    showContacts() {
        for (let i = 0; i < this.contacts.length; i++) {
            console.log(this.contacts[i]);
        }
    }
} 
let newContact = new Contact("hoang", "hoang@hoang", 123456);
let phoneBook = new PhoneBook();
phoneBook.addContact(newContact);
phoneBook.showContacts()