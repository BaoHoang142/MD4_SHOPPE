"use strict";
/*
    ABSTRACT CLASS

*/
class Person {
    constructor(name) {
        this.userName = name; // tham so
    }
}
class Child extends Person {
    constructor(name, userId) {
        super(name);
        this.userId = userId;
    }
    // ben thang con phai emplement: trien khai cac phuong thuc ben thang cha
    sayHello() {
    }
    pay() {
    }
}
let child = new Child("hoang", 1);
console.log(child);
/*
viet 1 phuong thuc abtract ben class cha
sau do trien khai 2 phuong thuc o tren 2 class con circle va square
*/
class Shape {
    constructor(length) {
        this.length = length;
    }
}
class caculatorSquare extends Shape {
    constructor(length) {
        super(length);
    }
    getArea() {
        return this.length * this.length;
    }
    Perimeter() {
        return this.length * 4;
    }
}
class caculatorCircle extends Shape {
    constructor(length) {
        super(length);
    }
    getArea() {
        return Math.PI * (this.length ** 2);
    }
    Perimeter() {
        return Math.PI * this.length * 2;
    }
}
let caculatorSquare1 = new caculatorSquare(5); // truyen du lieu vao thang con, thang cha chi de khai bao
console.log(caculatorSquare1.getArea(), caculatorSquare1.Perimeter());
let caculatorCircle1 = new caculatorCircle(5);
console.log(caculatorCircle1.getArea(), caculatorCircle1.Perimeter());
class Hieu {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    showName() {
        console.log(this.name);
    }
    showName1() {
    }
}
let std = new Hieu(1, "hoang", 18);
console.log(std.showName);
