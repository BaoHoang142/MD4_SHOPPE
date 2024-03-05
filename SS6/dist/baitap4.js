"use strict";
let arr = [1, 2, 4, 5, 13, 14];
let b = 6, ssss;
let result = 0;
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < b) {
        count++;
    }
    if (arr[i] == b) {
        result = i;
        break;
    }
}
if (result == 0) {
    result = count;
}
console.log(result);
