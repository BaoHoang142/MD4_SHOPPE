"use strict";
class QuadraticEquation {
    constructor() {
        this.a = 0;
        this.b = 0;
        this.c = 0;
        this.delta = 0;
    }
    inputData(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    set setDataa(a) {
        this.a = a;
    }
    set setDatab(b) {
        this.b = b;
    }
    set setDatac(c) {
        this.c = c;
    }
    get getData() {
        return this.a, this.b, this.c;
    }
    getDiscriminant(a, b, c) {
        return this.delta = (b * b) - (4 * a * c);
    }
    getRoot1() {
        return (-this.b + Math.sqrt(this.delta)) / (2 * this.a);
    }
    getRoot2() {
        return (-this.b - Math.sqrt(this.delta)) / (2 * this.a);
    }
    displayData() {
        let delta = this.getDiscriminant(this.a, this.b, this.c);
        if (delta < 0) {
            document.write("The equation has no roots");
        }
        else if (delta == 0) {
            document.write("phuong trinh co nghiem kep la: " + this.getRoot1());
        }
        else {
            document.write("phuong trinh co hai nghiem phan biet la: " + this.getRoot1() + " va " + this.getRoot2());
        }
    }
}
let equation = new QuadraticEquation();
let a = Number(prompt("nhap a"));
let b = Number(prompt("nhap b"));
let c = Number(prompt("nhap c"));
equation.setDataa = a;
equation.setDatab = b;
equation.setDatac = c;
equation.displayData();
