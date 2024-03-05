/*  
    ABSTRACT CLASS

*/
abstract class Person {
    public userName; // thuoc tinh
    constructor (name:string) {
        this.userName = name; // tham so
    }
    // ghi nhung phuong thuc cua doi tuong
    abstract sayHello():void//phuong thuc
    abstract pay():void
}
class Child extends Person {
    public userId;
    constructor(name:string,userId:number) {// phai ghi dung thu tu theo nhu contructor khai bao ban dau
        super(name);
        this.userId = userId;
    }
    // ben thang con phai emplement: trien khai cac phuong thuc ben thang cha
    override sayHello():void{

    }
    override pay():void{
        
    }
    
}
let child = new Child("hoang",1);
console.log(child)
/* 
viet 1 phuong thuc abtract ben class cha
sau do trien khai 2 phuong thuc o tren 2 class con circle va square
*/
abstract class Shape{
    public length:number;
    constructor (length:number){
        this.length=length
    }
    abstract getArea():number
    abstract Perimeter():number
}
class caculatorSquare extends Shape{
    constructor(length:number){
        super(length)
    }
    override getArea():number{
        return this.length*this.length
    }
    override Perimeter():number{
        return this.length*4
    }
}
class caculatorCircle extends Shape{
    constructor(length:number){
        super(length)
    }
    getArea():number{
        return Math.PI*(this.length**2)
    }
    Perimeter():number{
        return Math.PI*this.length*2
    }
}
let caculatorSquare1 = new caculatorSquare(5)// truyen du lieu vao thang con, thang cha chi de khai bao
console.log(caculatorSquare1.getArea(),caculatorSquare1.Perimeter())
let caculatorCircle1 = new caculatorCircle(5)
console.log(caculatorCircle1.getArea(),caculatorCircle1.Perimeter())
/* 
Interface
*/
interface loc {
    name:string,
    showName():void
}
interface Hao {
    name:string,
    age:number,
    showName():void
}
class Hieu implements Hao,loc{
    public id:number;
    name:string;
    age:number;
    constructor(id:number,name:string,age:number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    showName():void{
        console.log(this.name)
    }
    showName1():void{

    }
}
let std = new Hieu(1,"hoang",18);
console.log(std.showName)
