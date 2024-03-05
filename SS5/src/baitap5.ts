class Vehicle {
    name: string;
     engineCapacity: number;
     value: number;
    constructor(name: string, engineCapacity: number, value: number) {
        this.name = name;
        this.engineCapacity = engineCapacity;
        this.value = value;
    }
    // caculateTax(): Tính mức thuế trước bạ dựa trên các quy tắc sau:
    // Dưới 100cc: tương đương với 1% giá trị của xe
    // Từ 100cc đến 200c tương đương với 3% giá trị của xe
    // Trên 200c tương đương với 5% giá trị của xe
    caculateTax(): number {
        if (this.engineCapacity <= 100) {
            return this.value * 0.01;
        } else if (this.engineCapacity <= 200) {
            return this.value * 0.03;
        } else {
            return this.value * 0.05;
        }
    }
    // displayInfo(): Hiển thị thông tin về tên xe, dung tích xy lanh, giá trị và thuế trước bạ của xe
    displayInfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Engine capacity: ${this.engineCapacity}`);
        console.log(`Value: ${this.value}`);
        console.log(`Tax: ${this.caculateTax()}`);
    }
}
// main(): 
// ○	Nhập thông tin và tạo ra các đối tượng xe (xe1, xe2, xe3,...) từ lớp Vehicle
// ○	Sử dụng vòng lặp while để in menu lựa chọn công việc:
// ○	Lựa chọn 1: Nhập thông tin và tạo ra các đối tượng xe
// ○	Lựa chọn 2: Xuất bảng kê khai tiền thuế trước bạ của các xe
// ○	Lựa chọn 3: Thoát chương trình


class Main {
     arrVehicle: Vehicle[] = [];
    addVehicle() {
        let name = String(prompt("nhap ten xe"));
        let engineCapacity = Number(prompt("nhap dung tich xy lanh"));
        let value = Number(prompt("nhap giá trị"));
        let newVehicle1 = new Vehicle(name, engineCapacity, value);
        this.arrVehicle.push(newVehicle1);
    }
    showTable() {
        for (let i = 0; i < this.arrVehicle.length; i++) {
            this.arrVehicle[i].displayInfo();
        }
    }
    main() {
        let check = true;
        do {
        let key = Number(prompt("Một chọn dịch vụ: 1: nhap thong tin xe; 2: xuat bảng; 3: thoat chương trình "));
            switch (key) {
                case 1:
                    this.addVehicle();
                    break;
                case 2:
                    this.showTable();
                    break;
                case 3:
                    check = false;
                    break;
                default:
                    console.log("Mời nhập lại")
            }
        } while (check);
    }
}
let main = new Main();
main.main();

