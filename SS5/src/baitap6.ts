class Student {
    studentID :  string;
    fullName: string;
    mathScore :number; 
    englishScore: number;
    computerScore: number;
    constructor(studentID: string, fullName: string, mathScore: number, englishScore: number, computerScore: number) {
        this.studentID = studentID;
        this.fullName = fullName;
        this.mathScore = mathScore;
        this.englishScore = englishScore;
        this.computerScore = computerScore;
    }
    // + Constructor (Khởi tạo): Nhận 5 tham số - Mã sinh viên, Họ tên, điểm Toán, điểm Tiếng Anh, và điểm Tin học.
    // + inputStudentInfo(): Phương thức để nhập thông tin sinh viên từ bàn phím.
    // + calculateAverageScore(): Phương thức tính điểm trung bình của sinh viên dựa trên điểm Toán, Tiếng Anh và Tin học.
    // + calculateCumulativeScore(): Phương thức tính điểm tích lũy của sinh viên dựa trên điểm trung bình và các quy tắc của trường (nếu có).
    // + printStudentInfo(): Phương thức in thông tin của sinh viên ra màn hình.
    // + Việc lấy và hiển thị dữ liệu sẽ được thao tác ngoài trình duyệt
    
    inputStudentInfo(): void {
        this.studentID = String(prompt("nhap ma sinh vien"));
        this.fullName = String(prompt("nhap ho ten"));
        this.mathScore = Number(prompt("nhap diem toan"));
        this.englishScore = Number(prompt("nhap diem anh"));
        this.computerScore = Number(prompt("nhap diem tin hoc"));
    };
    calculateAverageScore(): number {
        return (this.mathScore + this.englishScore + this.computerScore) / 3;
    };
    calculateCumulativeScore(){
        return this.calculateAverageScore()+10;
    };
    printStudentInfo(){
        console.log(this.studentID);
        console.log(this.fullName);
        console.log(this.mathScore);
        console.log(this.englishScore);
        console.log(this.computerScore);
        console.log(this.calculateCumulativeScore());
    }
}
let newStudent = new Student("", "", 0, 0, 0);
newStudent.inputStudentInfo();
newStudent.calculateAverageScore();
newStudent.calculateCumulativeScore();
