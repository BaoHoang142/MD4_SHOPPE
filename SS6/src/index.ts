// // tinh giai thua
// class GiaiThua {
//     tinhGiaiThua(n: number): number {
//         let result = 1;
//         for (let i = 1; i <= n; i++) {
//             result *= i;
//         }
//         return result;
//     }
// }
// let giaiThua = new GiaiThua();
// console.log(giaiThua.tinhGiaiThua(3));
// // ktra trùng lặp 
// class Arr {
//     checkArr(arr: number[]): boolean {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] == arr[i + 1]) {
//                 return true;
//             }
//         }
//         return false;
//     }
// }
/*
     Generic: chung chung (không cụ thể)
     Viết 1 function chấp nhận mọi tham số truyền vào và trả về 1 kết quả bất kỳ 
 */
// function sayHello(params:any):any {
//     return params
// }
// Viết theo kiểu generic
// function sayHello<T>(params:T):T {
//     return params
// }
// const say1 = sayHello<string>("xin chao")
// const say2 = sayHello(1)
// const say3 = sayHello(true)
// console.log("1111",say1);
// console.log("1111",say2);
// console.log("1111",say3);

// function typeParam<T, U>(first: T, second: U): [T, U] {
//   return [first, second];
// }
// let resultType = typeParam("hello", 10);
// console.log(resultType);

// /*
// clone object
// shalow clone: clone nông (chưa hết)
// 1.toán tử spread
// 2.object.assign

// deep clone: clone hết (clone sâu)
// 1. JSON.pare(JSON.stringify(obj))
//  */
// function merge<T extends object, U extends object>(obj1: T, obj2: U) {
//   return Object.assign(obj1, obj2);
// }
// let merge1 = merge({ name: "hoa" }, { age: 25, name: "hong" });
// console.log("merge1", merge1);

// function sayHello<T extends string>(params: T): T {
//   return params;
// }
// let say1 = sayHello<string>("hoa");

// class Box<T extends string> {
//   private value: T[] = [];
//   constructor(value: T[]) {
//     this.value = value;
//   }
//   getValue() {
//     return this.value;
//   }
// }
// const box = new Box<string>(["hello", "ssss"]);
// box.getValue();
// console.log(box.getValue());

// // áp dụng kiểu dữ liệu Generics, hãy xây dựng hàm myMap() có logic giống như hàm map() làm việc vơi mảng trong ES6
// function myMap<T>(arr: T[], callback: (item: T, index: number) => T) {
//   let result: T[] = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i], i));
//   }
//   return result;
// }
// const arr = [1, 2, 3, 4];
// const result = myMap(arr, (item, index) => {
//   return item * 2;
// });

function mySearch<T>(arr: T[], params: T):[T,number]|number {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === params) {
        return [arr[i], i];
      }
    }
    return -1;
  }
  console.log(mySearch([1,2,3,5,6], 3));