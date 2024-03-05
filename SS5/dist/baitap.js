"use strict";
class BankAccount {
    getBalance() { }
}
let arr = [];
class SavingAccount extends BankAccount {
    constructor(id, balance) {
        super();
        this.id = id;
        this.balance = balance;
    }
    getBalance() {
        return arr;
    }
    saveAcc() {
        arr.push({ id: this.id, balance: this.balance });
    }
}
class CheckingAccount extends BankAccount {
    constructor(id) {
        super();
        this.id = id;
    }
    getBalance() {
        let index = arr.findIndex((item) => item.id === this.id);
        if (index !== -1) {
            return (`Số dư tài khoản ${this.id} là ${arr[index].balance}`);
        }
        else {
            return "khong tim thay";
        }
    }
}
let newAdd = new SavingAccount(4, 7000);
newAdd.saveAcc();
console.log("11111", newAdd.getBalance());
let newCheck = new CheckingAccount(4);
console.log(newCheck.getBalance());
