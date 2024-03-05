/* 
Frequency counter pattern
*/
let arr1:number[] = [2,2,2];
let arr2:number[] = [4,1,9];
function same(array1:number[],array2:number[]):boolean {
    // if (array1.length != array2.length) {
    //     return false;
    // }
   
    // for (let i = 0; i < array1.length; i++) {
    //     for (let j = 0; j < array2.length; j++) {
    //        if (array1[i]*array1[i]==array2[j]) {    
    //             array2.splice(j,1);
    //             break;
    //        }
    //     }
    // } 
    // if (array2.length==0) {
    //     return true;
    // }
    // else {
    //     return false;
    // }   
    type check = {[key:number]:number}
    let checkarr1:check = {}
    let checkarr2:check = {}
    for (const key1 of array1) {
        checkarr1[(+key1)]=(checkarr1[(+key1)]||0)+1
    }
    for (const key2 of array2) {
        checkarr2[(+key2)]=(checkarr2[(+key2)]||0)+1
     }
     for (const key in checkarr1) {
        if (!((+key)**2 in checkarr2)) {
            return false
        }
        if (checkarr1[(+key)] != checkarr2[(+key)**2]) {
            return false    
        }
     }
     return true

}
console.log(same(arr1,arr2),"11111")
/* 
Multiple pointers pattern
*/
/* Sliding window pattern */
function sum(arr:number[],k:number):null {
    let currentSum = 0;
    let maxSum = -Infinity;
    if (arr.length < k) {
        return null
    }
    for (let i = 0; i < k; i++) {
        maxSum += arr[i]
    }
    currentSum = maxSum;
    
    return null
}

