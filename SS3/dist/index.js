"use strict";
/*
Frequency counter pattern
*/
let arr1 = [2, 2, 2];
let arr2 = [4, 1, 9];
function same(array1, array2) {
    // if (array1.length != array2.length) {
    //     return false;
    // }
    let checkarr1 = {};
    let checkarr2 = {};
    for (const key1 of array1) {
        checkarr1[(+key1)] = (checkarr1[(+key1)] || 0) + 1;
    }
    for (const key2 of array2) {
        checkarr2[(+key2)] = (checkarr2[(+key2)] || 0) + 1;
    }
    for (const key in checkarr1) {
        if (!((+key) ** 2 in checkarr2)) {
            return false;
        }
        if (checkarr1[(+key)] != checkarr2[(+key) ** 2]) {
            return false;
        }
    }
    return true;
}
console.log(same(arr1, arr2), "11111");
/*
Multiple pointers pattern
*/
/* Sliding window pattern */
function sum(arr, k) {
    let currentSum = 0;
    let maxSum = -Infinity;
    if (arr.length < k) {
        return null;
    }
    for (let i = 0; i < k; i++) {
        maxSum += arr[i];
    }
    currentSum = maxSum;
    return null;
}
