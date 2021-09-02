class Parent{
    constructor(){
        this.fateherName = "Habibur";
    }
}

class Child extends Parent{
    constructor(name){
        super(); //super add for
        this.name = name;
    }

    getFullName(){
        return this.name + " " + this.fateherName;
    }
}

const baby = new Child("Tarequr");
const baby2 = new Child("Tayebur");

console.log(baby, baby2);

console.log("Another Step");

console.log(baby.getFullName());
console.log(baby2.getFullName());