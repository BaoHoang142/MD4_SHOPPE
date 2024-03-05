"use strict";
let text1 = "live";
let text2 = "evil";
let obj1 = {};
let obj2 = {};
function checkText(s, r) {
    if (text1.length != text2.length) {
        return false;
    }
    for (let i = 0; i < text1.length; i++) {
        const element = text1[i];
        obj1[element] = (obj1[element] || 0) + 1;
    }
    for (let i = 0; i < text2.length; i++) {
        const element = text2[i];
        obj2[element] = (obj2[element] || 0) + 1; // obj2[element]:key = value
    }
    for (let element in obj1) {
        if (obj1[element] !== obj2[element]) {
            return false;
        }
    }
    return true;
}
console.log(checkText(text1, text2));
