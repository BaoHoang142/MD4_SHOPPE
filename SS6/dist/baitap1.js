"use strict";
class Contact {
    constructor(name, email, phoneNumber) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}
class PhoneBook {
    constructor() {
        this.contacts = [];
    }
    addContact(contact) {
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
phoneBook.showContacts();
