// enum Role {
//     admin, //0
//     mod, //1
//     user, //2
// }
// let user: {
//     userName: string,
//     age: number,
//     role: Role.mod
// } = {
//     userName: "Nguyen Van A",
//     age: 15,
//     role: 1
// }
//alias
type MyType = number | string | boolean | null;
// union
let c: MyType  ;
c = 1;

type Student = {
    name_student: string;
    age: number;
    class : string;
};
let creatStudent: Student = {
    name_student: "Hoang",
    age: 18,
    class : "12S4"
}
let d = "hello";
let e = 3;
let f = true;
function test3(a:number,b:string,c:boolean):void {
    console.log(a);
    console.log(b);
    console.log(c);
    return 
    
}
test3(e,d,f)

//mảng sẽ có 2 cách khai báo
// kiểu dữ liệu union
//Function 
let Students :(string|number)[] = ["hoang",18];
Students.push(5);
let students2 :Array<string|number> = ["hoang",18];

const sayHello = ():string => {
    return "hoa"
}
/* 
Viết chương trình nhập vào 2 số tính tổng 2 số đó
Nếu là số thì trả về số
Nếu có string trả về string

*/
// let input2: string[]=["15","20"];
function sum(a:number|string,b:number|string):number|string {
    if (typeof a === "number" && typeof b === "number") {
        return a+b
    } else {
       return String(a)+String(b)
    }
}
sum(5,"6")

enum Role {ADMIN,USER,CUSTOMER};

let person : {
    name: string,
    age: number,
    role: Role.ADMIN
} = {
    name: "Nguyen Van A",
    age: 15,
    role: 0
}
// Cách khai báo kiểu dữ liệu alias
// dùng type | interface

type User =  {name: string, age:number};

let users1 : any []= []
let user1:User = {
    name: "Nguyen Van A",
    age: 10
}
users1.push(user1)

// kiểu dữ liệu assertion
// dự đoán kiểu dữ liệu trả về nếu không phải kiểu dữ liệu đó thì lấy theo kết quả truyền vào
let assertion : any = "5";

let test = <boolean> assertion;

console.log(typeof test)
