"use strict";
class Student {
    constructor(studentCode, studentName, age, address, phoneNumber) {
        this.studentCode = studentCode;
        this.studentName = studentName;
        this.age = age;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }
    ;
    inputData() {
        this.studentCode = Number(prompt("nhap ma sinh vien"));
        this.studentName = String(prompt("nhap ten sinh vien"));
        this.age = Number(prompt("nhap tuoi"));
        this.address = String(prompt("nhap dia chi"));
        this.phoneNumber = Number(prompt("nhap so dien thoai"));
    }
    displayData() {
        document.write("ma sinh vien: " + this.studentCode + "<br>");
        document.write("ten sinh vien: " + this.studentName + "<br>");
        document.write("tuoi: " + this.age + "<br>");
        document.write("dia chi: " + this.address + "<br>");
        document.write("so dien thoai: " + this.phoneNumber + "<br>");
    }
}
let students = [];
// function thêm sinh viên
function addStudent() {
    console.log(11111111111111111111);
    let studentCode = Number(prompt("nhap ma sinh vien"));
    let studentName = String(prompt("nhap ten sinh vien"));
    let age = Number(prompt("nhap tuoi"));
    let address = String(prompt("nhap dia chi"));
    let phoneNumber = Number(prompt("nhap so dien thoai"));
    //khởi tạo đối tượng mới
    let std = new Student(studentCode, studentName, age, address, phoneNumber);
    students.push(std);
}
// function in ra sinh viên
function showStudent() {
    for (let i = 0; i < students.length; i++) {
        console.log(students[i]);
    }
}
// function sua sinh viên\
function updateStudent(i, student) {
    students[i] = student;
}
function getUserByCurrentStudent(i) {
    let index = 0;
    let userCheck;
    for (let j = 0; j < students.length; j++) {
        if (students[j].studentCode == i) {
            index = j;
            userCheck = students[j];
        }
    }
    let result = {
        index: index,
        userCK: userCheck,
    };
    return result;
}
// function xóa sinh viên
function deleteStudent(studentCode) {
    // kiểm tra xem có mã nhập vào không
    console.log(5555, studentCode);
    let findIndex = students.findIndex(student => student.studentCode == studentCode);
    console.log("999999", findIndex);
    if (findIndex !== -1) {
        // xóa sinh viên
        students.splice(findIndex, 1);
        console.log(`xoa thanh cong ${studentCode}`);
        return;
    }
    else {
        console.log("không tồn tại sinh viên");
    }
}
//function out
function outStudent() {
}
let flag = true;
do {
    let option = String(prompt("Mời lựa chọn C/R/U/D/E"));
    switch (option) {
        case "c":
            // gọi hàm để thêm sinh viên
            addStudent();
            break;
        case "r":
            // gọi hàm để in ra sinh viên
            showStudent();
            break;
        case "u":
            // gọi hàm để sửa
            let studentCodeUpdate = Number(prompt("nhap ma sinh vien"));
            let studentUpdate = this.getUserByCurrentStudent(studentCodeUpdate);
            // updateStudent(studentUpdate)
            if (!studentUpdate.userCK) {
                alert("không tìm thấy sinh viên");
            }
            else {
                let std = studentUpdate.userCK;
                let index = studentUpdate.index;
                let update = Number(prompt("nhập 1 để thay đổi tên,2 để thay đổi tuổi,3 để thay đổi địa chỉ,4 để thay đổi sđt,5 để thoát"));
                switch (update) {
                    case 1:
                        let name = String(prompt("nhập tên"));
                        std.studentName = name;
                        break;
                    case 2:
                        let age = Number(prompt("nhập tuổi"));
                        std.age = age;
                        break;
                    case 3:
                        let address = String(prompt("nhập địa chỉ"));
                        std.address = address;
                        break;
                    case 4:
                        let phone = Number(prompt("nhập sđt"));
                        std.phoneNumber = phone;
                        break;
                    case 5:
                        break;
                }
                this.updateStudent(index, std);
            }
            break;
        case "d":
            // gọi hàm để xóa 
            let studentCode = Number(prompt("nhap ma sinh vien"));
            console.log("11111111", studentCode);
            deleteStudent(studentCode);
            break;
        case "e":
            // thoát chương trình
            flag = false;
            break;
        default:
            console.log("mời nhập lại để chạy chương trình");
    }
} while (flag);
