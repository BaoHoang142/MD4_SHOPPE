abstract class BankAccount {
 getBalance():void{}
 
}


let arr :newAcc[] = [];
type newAcc = {
    id: number,
    balance: number}
class SavingAccount extends BankAccount {
    id:number;
    balance:number;
    constructor(id:number,balance:number) {
        super();
        this.id = id;
        this.balance = balance;
    }
    override getBalance(): any {
        return arr;
    } 
    saveAcc():any {
        arr.push({id:this.id,balance:this.balance})
    }
}
class CheckingAccount extends BankAccount {
    id:number;
    constructor(id:number) {
        super()
        this.id = id;
    }
    override getBalance(): any {
        let index = arr.findIndex((item) => item.id === this.id);
        if (index !== -1) {
            return (`Số dư tài khoản ${this.id} là ${arr[index].balance}`);
        } else {
            return "khong tim thay";
        }
    }
}
let newAdd = new SavingAccount(4,7000);
newAdd.saveAcc();
console.log("11111",newAdd.getBalance());
let newCheck = new CheckingAccount(4);
console.log(newCheck.getBalance());
