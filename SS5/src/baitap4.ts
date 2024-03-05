class Accounts {
    private nameAccount: string;
    private numberAccount: string;
    private money: string;
    private rate:number;

    constructor(nameAccount: string, numberAccount: string) {
        this.nameAccount = nameAccount;
        this.numberAccount = numberAccount;
        this.money = "0";
        this.rate = 0.035;
    } 
   set setMoney (money: string) {
       this.money = money
   }
    get getMoney() {
        return this.money
    }
    deposit(money: string) {
        if (Number(money) < 0) {
           console.log('không nhận giá trị âm');

        } else {
            this.setMoney = (Number(money) + Number(this.getMoney)).toString();
            console.log(this.getMoney);
        }
        

    }
    withdraw(money: string) {
        if (Number(money) > Number(this.money) ) {
           console.log('không đủ tiền để rút')
        } else {
            this.setMoney = (Number(this.getMoney) - Number(money)).toString();
            console.log(this.getMoney);
        }
    }
    mature(money: string) {
        if (Number(money) < 0) {
            console.log('không nhận giá trị âm')
         } else {
            this.setMoney = (Number(money) + Number(this.getMoney) * this.rate).toString();
            console.log(this.getMoney);
         }
    }

}
let flag = true;
let newAction = new Accounts("nguyen van a", "123456");
do {
    let option = Number(prompt("Mời bạn chọn dịch vụ: 1: nạp tiền; 2: rút tiền; 3: đáo hạn, 4: thoát chương trình "));
    switch (option) {
        case 1:
            let a:string = String(prompt("nhap tien ban muon nap"));
            newAction.deposit(a);
            break;
        case 2:
            let b:string = String(prompt("nhap tien ban muon rut"));
            newAction.withdraw(b);
            break;
        case 3:
            let c:string = String(prompt("nhap tien ban muon dao han"));
            newAction.mature(c);
            break;
        case 4:
            // thoát chương trình
            flag = false;
            break;
        default:
            console.log("Mời nhập lại");
    }
} while (flag);
