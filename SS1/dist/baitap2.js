"use strict";
function isValid(s) {
    const stack = [];
    const object = { ")": "(", "}": "{", "]": "[" }; //key:value phải cùng kiểu dữ liệu
    for (const element of s) {
        console.log(element);
        if (element in object) {
            const topElement = stack.pop();
            if (object[element] !== topElement)
                return false;
        }
        else {
            stack.push(element);
        }
    }
    return true;
}
const s = "{()}[()]";
if (isValid(s)) {
    console.log("Chuỗi ngoặc là hợp lệ.");
}
else {
    console.log("Chuỗi ngoặc không hợp lệ.");
}
