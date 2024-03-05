class Circle {
    radius: number;
    color: string;
    constructor(radius: number, color: string) {
        this.radius = radius;
        this.color = color;
    }
   
    inputData(){
         this.radius = Number(prompt("nhap ban kinh"));
         this.color = String(prompt("nhap mau")) ;
    }
    displayData(){
        document.write("ban kinh la: " + this.radius + "<br>");
        document.write("mau la: " + this.color + "<br>");
        document.write("chu vi la: " + this.getPerimeter() + "<br>");
        document.write("dien tich la: " + this.getArea() + "<br>");
    }
    getPerimeter(){
        return 2 * Math.PI * this.radius
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
let newCircle = new Circle(5, "red");

newCircle.inputData();
newCircle.displayData();

