"use strict";
// // // tinh chuoi dai nhat
// // let a = "abaabdfwerw";
// // let c = "";
// // let d = "";
// // for (let i = 0; i < a.length; i++) {
// //     if (a[i]===a[i+1]) {
// //         d = a.slice(0,i)
// //         c = a.slice(i+1,a.length-i+2)
// //        for (let j = 0; j < c.length; j++) {
// //        }
// //     }
// // }
// // console.log(c)
// // console.log(d)
// let input = "acccdcvfd"
// let longestSubstring = "";
// let currentSubstring = "";
//   for (let i = 0; i < input.length; i++) {
//     console.log(i)
//     // Nếu ký tự hiện tại khác ký tự tiếp theo, kết thúc chuỗi con hiện tại
//     if (i === input.length - 1 || input[i] === input[i + 1]) {
//         currentSubstring += input[i];
//         if (currentSubstring.length > longestSubstring.length) {
//           longestSubstring = currentSubstring;
//         }
//         currentSubstring = "";
//       } else {
//         // Nếu ký tự hiện tại giống ký tự tiếp theo, tiếp tục xây dựng chuỗi con
//         currentSubstring += input[i];
//       }
// }
// console.log(longestSubstring)
function findZeroSumArrays(arr) {
    const result = [];
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    const tempArray = [arr[i], arr[j], arr[k]];
                    const isUnique = checkUnique(tempArray, result);
                    if (isUnique) {
                        result.push(tempArray);
                    }
                }
            }
        }
    }
    return result;
}
function checkUnique(array, result) {
    for (let i = 0; i < result.length; i++) {
        const currentArray = result[i];
        if (array.every((value, index) => value === currentArray[index])) {
            return false;
        }
    }
    return true;
}
const a = [1, 2, -1, 0, -1, 9, -8, -1];
const zeroSumArrays = findZeroSumArrays(a);
console.log(zeroSumArrays); // Output: [[1, 2, -1], [1, 0, -1], [2, -1, -1]]
