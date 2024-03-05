"use strict";
let nums = [2, 7, 11, 15];
let target = 9;
let sum = 0;
for (let i = 0; i < nums.length - 1; i++) {
    let number1 = nums[i];
    for (let j = 1; j < nums.length; j++) {
        let number2 = nums[j];
        if (number1 + number2 == target) {
            console.log(i, j);
        }
        else {
            break;
        }
    }
}
