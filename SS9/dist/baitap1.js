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
// Decorator logMethod
function logMethod(target, propertyKey, descriptor) {
    descriptor.value = function () {
        const date = new Date();
        console.log(`[${new Date().toLocaleTimeString()}] Method ${propertyKey} executed in ${date}`);
    };
    return descriptor;
}
class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
}
__decorate([
    logMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Person.prototype, "setName", null);
__decorate([
    logMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Person.prototype, "setAge", null);
const person = new Person("John Doe", 25, "123 Main Street");
person.setName("Jane Doe");
person.setAge(30);
