class Person1 {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getName() {
        return this.name;
    }

}
class Students extends Person1 {
    scoreMath: number;
    scoreEnglish: number;
    scoreLiterature: number;
    constructor (name: string, age: number, address: string, scoreMath: number, scoreEnglish: number, scoreLiterature: number) {
        super(name, age, address);
        this.scoreMath = scoreMath;
        this.scoreEnglish = scoreEnglish;
        this.scoreLiterature = scoreLiterature;
    }
    average():void {
        let avg:number = (this.scoreMath + this.scoreEnglish + this.scoreLiterature) / 3;
        if (avg > 9) {
            console.log(`${this.name} là học sinh xuất sắc`) 
        } else if (avg>8) {
            console.log(`${this.name} là học sinh giỏi`) 
        } else if (avg>7) {
            console.log(`${this.name} là học sinh khá`) 
        } else if (avg>5) {
            console.log(`${this.name} là học sinh trung bình`) 
        }else if (avg>4) {
            console.log(`${this.name} là học sinh yếu`) 
        } else {
            console.log(`${this.name} là học sinh kém`)  
        }
    }   
}
let student1 = new Students("Nguyen Van A", 18, "HCM", 10, 10, 9);
student1.average()



