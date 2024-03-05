"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
console.log("first");
/*
    decorator: trang trí lại ( từ bản gốc mình có thể tùy chỉnh ra một bản khác theo ý của mình)
    decorator: gồm có :
        1. class decorator
        2. property decorator
        3. method decorator
        4. accessor decorator (các truy cập set get)
        5. parameter decorator
    - Sự khác nhau giữa hàm (function) và method
        + hàm khai báo, thực hiện chức năng khi gọi hàm thì gọi theo tên hàm
        + method cũng thực hiện chức năng nhưng khi gọi thì phải trỏ đến đối tượng gọi phương thức
        callback:
        1. là hàm
        2. hàm được truyền làm tham số của hàm khác
        đệ quy: hàm tự gọi lại chính nó
        -function return về 1 function đây là khái niệm closure
        + hàm con có thể sử dụng các thuộc tính của hàm cha
        + function cha trả về 1 function con

*/
//decorator
// khai báo 1 cái hàm khác nó sẽ đi decor lại cái hàm trong class Hao
function decorator(className, methodName, functionDecorator) {
    functionDecorator.value = function (a, b) {
        return a - b;
    };
}
class Hao {
    // thuoc tinh
    // phuong thuc
    add(a, b) {
        return a + b;
    }
}
__decorate([
    decorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], Hao.prototype, "add", null);
let hao1 = new Hao();
console.log(hao1.add(1, 2));
