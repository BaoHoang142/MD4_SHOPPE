/* 
map: trả về 1 mảng độ dài bằng độ dài ban đầu
*/

// let numbers = [1, 2, 5, 6];
// let text = "xu gao";
// let result = numbers.map((item, index, array) => {
//   return item * 2;
// });
// console.log(result);

// tao function custom lai map

function customMap(array,callBack) {
    // array la mang truyen vao
    // callBack la 
    if (!Array.isArray(array)) {
        throw new Error ('customMap is not function');
    }   
    let result = []
    for (let i = 0; i < array.length; i++) {
        result.push(callBack(array[i],i,array))        
    }
    return result;

}
let numbers = [1, 2, 5, 6];
console.log(customMap(numbers, function callBack(item) {
    return item*2
}));
Array.prototype.loc = customMap;
console.log(numbers);
// custom filter
function customFilter(array,callback) {
    if (!Array.isArray(array)) {
        throw new Error ('customFilter is not function');
    }
    let resultFilter = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (callback(element,i,array)) {
             resultFilter.push(element);
        }
    }
    return resultFilter 
}

let numbersFilter = [1, 2, 5, 6];
console.log(customFilter(numbersFilter, function callBack(item) {
    return item %2 === 0
}))


//custom forEach
/* Không tạo mảng mới, tương tác trực tiếp với mảng ban đầu
không nhận return
  */
let numbersForEach = [1, 2, 5, 6];
// let result = numbersForEach.forEach((item, index, array) => {
//     numbersForEach[index]=item*2
// })
// console.log(result)

function customForEach(array,callBack) {
    if (!Array.isArray(array)) {
        throw new Error (`${array}.forEach is not function`);
        
    }
    for (let i = 0; i < array.length; i++) {
        array[i]= callBack(array[i])
    }
    return;
}

    customForEach(numbersForEach,(item)=> item*2)

// custom reduce

function customReduce(arr, callback, initialValue) {
    let accumulator = initialValue === undefined ? arr[0] : initialValue;
    
    for (let i = initialValue === undefined ? 1 : 0; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
    
    return accumulator;
  }
  
  // Sử dụng hàm customReduce để tính tổng các số trong một mảng
  const numbers1 = [1, 2, 3, 4, 5];
  const sum1 = customReduce(numbers1, function(acc, current) {
    return acc + current;
  }, 0);
  
  console.log(sum1); // Kết quả: 15