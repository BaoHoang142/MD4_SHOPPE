"use strict";
console.log("11111111111");
/*
    Cách khởi tạo đối tượng

*/
class Person {
    constructor(name, age, id, email) {
        // khởi tạo các thuộc tính của đối tượng
        this.userName = name;
        this.age = age;
        this.userId = id;
        this.email = email;
    }
    // khởi tạo các phương thức
    getName() {
        return this.userName;
    }
    setName(name) {
        this.userName = name;
    }
    set setUserName(name) {
        this.userName = name;
    }
    get getUserName() {
        return this.userName;
    }
}
let student1 = new Person("hoa", 25, 111, "xuanmike1@gmail.com");
let student2 = new Person("xuanmike", 20, 112, "xuanmike2@gmail.com");
// console.log(student1);
// console.log(student1.getName());
student2.setUserName = "hồng";
console.log("111", student2.getUserName);
// tạo đối tượng employee từ đối tượng person
class Employee extends Person {
    constructor(job, salary, userName, age, userId, email) {
        super(userName, age, userId, email);
        this.job = job;
        this.salary = salary;
    }
}
let employee1 = new Employee("dev", 1000, "hoa", 25, 111, "xuanmike1@gmail.com");
console.log(employee1);
