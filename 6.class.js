class Student{
    constructor(studentId, studentName){ //constructor must need for class
        this.id = studentId;
        this.name = studentName;
        this.school = 'Batajore A.K Institute.'
    }
}

const studentOne = new Student(101, "Tarequr Rahman");
const studentTwo = new Student(102, "Tayebur Rahman");

console.log(studentOne, studentTwo);
console.log(studentOne.name, studentTwo.name);