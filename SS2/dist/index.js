"use strict";
// union
let c;
c = 1;
let creatStudent = {
    name_student: "Hoang",
    age: 18,
    class: "12S4"
};
let d = "hello";
let e = 3;
let f = true;
function test3(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    return;
}
test3(e, d, f);
//mảng sẽ có 2 cách khai báo
// kiểu dữ liệu union
//Function 
let Students = ["hoang", 18];
Students.push(5);
let students2 = ["hoang", 18];
const sayHello = () => {
    return "hoa";
};
/*
Viết chương trình nhập vào 2 số tính tổng 2 số đó
Nếu là số thì trả về số
Nếu có string trả về string

*/
// let input2: string[]=["15","20"];
function sum(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return String(a) + String(b);
    }
}
sum(5, "6");
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["CUSTOMER"] = 2] = "CUSTOMER";
})(Role || (Role = {}));
;
let person = {
    name: "Nguyen Van A",
    age: 15,
    role: 0
};
let users1 = [];
let user1 = {
    name: "Nguyen Van A",
    age: 10
};
users1.push(user1);
// kiểu dữ liệu assertion
// dự đoán kiểu dữ liệu trả về nếu không phải kiểu dữ liệu đó thì lấy theo kết quả truyền vào
let assertion = "5";
let test = assertion;
console.log(typeof test);
