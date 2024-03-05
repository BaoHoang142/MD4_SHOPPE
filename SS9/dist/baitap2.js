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
// Decorator validateEmail
function validateEmail(target, propertyKey) {
    let emailValue;
    // Getter function
    const getter = function () {
        return emailValue;
    };
    // Setter function
    const setter = function (newEmail) {
        // Kiểm tra tính hợp lệ của địa chỉ email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailRegex.test(newEmail);
        if (!isValidEmail) {
            throw new Error("Invalid email address!");
        }
        emailValue = newEmail;
    };
    // Replace getter và setter
    if (delete target[propertyKey]) {
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    }
}
// Lớp User
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}
__decorate([
    validateEmail,
    __metadata("design:type", String)
], User.prototype, "email", void 0);
// Tạo đối tượng User
const user = new User("validemail@example.com", "password");
console.log(user.email); // Output: validemail@example.com
// Thử tạo đối tượng User với địa chỉ email không hợp lệ
try {
    const invalidUser = new User("invalidemail", "password");
    console.log(invalidUser.email);
}
catch (error) {
    console.log("error.message"); // Output: Invalid email address!
}
