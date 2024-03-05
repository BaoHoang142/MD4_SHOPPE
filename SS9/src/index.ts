console.log("first")
/* 
    decorator: trang trí lại ( từ bản gốc mình có thể tùy chỉnh ra một bản khác theo ý của mình)
    decorator: gồm có :
        1. class decorator
        2. property decorator
        3. method decorator
        4. accessor decorator (các truy cập set get)
        5. parameter decorator
    - Sự khác nhau giữa hàm (function) và method
        + hàm khai báo, thực hiện chức năng khi gọi hàm thì gọi theo tên hàm
        + method cũng thực hiện chức năng nhưng khi gọi thì phải trỏ đến đối tượng gọi phương thức
        callback: 
        1. là hàm
        2. hàm được truyền làm tham số của hàm khác
        đệ quy: hàm tự gọi lại chính nó
        -function return về 1 function đây là khái niệm closure
        + hàm con có thể sử dụng các thuộc tính của hàm cha
        + function cha trả về 1 function con

*/
//decorator
// khai báo 1 cái hàm khác nó sẽ đi decor lại cái hàm trong class Hao
function decorator(className:any,methodName:any,functionDecorator:any) {
   functionDecorator.value = function(a:number,b:number){ // kiểu dữ liệu phải giống ban đầu
    return a-b
   }
}
class Hao {
    // thuoc tinh
    // phuong thuc
    @decorator
    add(a: number, b: number) {
        return a + b
    }

}
let hao1 = new Hao()
console.log(hao1.add(1, 2))