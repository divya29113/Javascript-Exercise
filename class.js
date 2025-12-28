//object epdi irukanum oru template kudukurathu than class
//class is a blueprint to create object in javascript
class Student{
    static schoolName="Amali Girls Hr sec school";//class ku matum than sonthamanathu
    #age//private key
    constructor(name,age,place,address){ //default syntax ithu kuduthathan object create panna mudium
        this.name=name;    //why we use this class in object we have to multiple lines
        this.#age=age;   //ipdi kudutha value varthu because it private nammaku venum na method ah
        this.place=place; //create panni than use panna mudium student1.#age i wrong
        this.address=address;      //we create an object using class in single line
    }

    greet(){
        return `Hello ${this.name}, from ${this.place} ,${this.address} welcome to our academy`
    }

    tellAge(){
        return this.#age;
    }

}
console.log(Student.schoolName);
let student1= new Student("divya",25,"india","chennai");
let student2= new Student("sanju",22,"india","bangalore");
let student3= new Student("SD",15,"india","pondy" );
console.log(student1.greet());
console.log(student2.tellAge()); 
console.log(student3);

//class Example

class ucoBank{
    constructor(name,accountNumber,initialAmount,place){
        this.name=name;
        this.accountNumber=accountNumber;
        this.initialAmount=initialAmount;
        this.place=place;

    }

    checkBalance(){
        return `Hello ${this.name} HappyDay! your account balance is ${this.initialAmount}`

    }

    moneyDeposit(depositAmount){ //parameter use value vanganum user kita
        this.initialAmount=this.initialAmount+depositAmount;
        return `hey ${this.name} your money is deposited successfully and your new balance is ${this.initialAmount} `
    }

    withdrawMoney(withdrawAmount){
        this.initialAmount=this.initialAmount-withdrawAmount;
        return`Hey ${this.name} your money debited successfully your current balance is ${this.initialAmount}`;
    }
}

let person1=new ucoBank("divya",2345678,5000,"Trichy");
let person2=new ucoBank("sanju",3245679,3000,"chennai");
let person3=new ucoBank("saravanan",17896598,9000,"coimbatore");
console.log(person1.checkBalance());
console.log(person1.moneyDeposit(5000));
console.log(person1.withdrawMoney(2000));
console.log(person1.checkBalance());
//console.log(person2);//method call panni value vangurom
//console.log(person3);