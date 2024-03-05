class employee {
    employeeId: string;
    employeeName: string;
    age: number;
    gen: string; 
    rate:number;
    salary:number

    constructor (employeeId: string, employeeName: string, age: number, gen: string, rate:number) {
        this.employeeId = employeeId
        this.employeeName = employeeName
        this.age = age
        this.gen = gen
        this.rate = rate
        this.salary = 0
    }

}
class Main{
    arrEmployee: employee[] = [];
    
    addEmployee(){
        console.log(this.arrEmployee)
        
        console.log("111111")
        let employeeId = String(prompt("nhap id nhan vien"));
        let employeeName = String(prompt("nhap ten nhan vien"));
        let age = Number(prompt("nhap tuoi"));
        let gen = String(prompt("nhap gioi tinh"));
        let rate = Number(prompt("nhap he so luong"));
        let employee11 = new employee(employeeId, employeeName, age, gen, rate);
        this.arrEmployee.push(employee11);
        
        
    }
    showEmployee(){
        for(let i = 0; i < this.arrEmployee.length; i++){
            this.arrEmployee[i].salary = this.arrEmployee[i].rate * 1300000;
            console.log(this.arrEmployee[i]);
        }
    };
    main(){
        do {

            this.addEmployee();
        } while (this.arrEmployee.length<5);
            this.showEmployee()
    }

}
let newmain = new Main();
newmain.main()




