
//class is a blueprint to create object in javascript
class Student{
     static schoolName="Amali Girls Hr sec school";
    #age//private key
    constructor(name,age,place,address){ 
        this.name=name;    //why we use this class in object we have to declare multiple object in one line
        this.#age=age;   
        this.place=place;
        this.address=address;     
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

    #validateBalance(amount){
        if(amount > this.initialAmount){
            return true;
        }
    }

    checkBalance(){
        return `Hello ${this.name} HappyDay! your account balance is ${this.initialAmount}`

    }

    moneyDeposit(depositAmount){ 
        this.initialAmount=this.initialAmount+depositAmount;
        return `hey ${this.name} your money is deposited successfully and your new balance is ${this.initialAmount} `
    }

    withdrawMoney(withdrawAmount){
        if(this.#validateBalance(withdrawAmount)){ 
            return `sorry you cannot withdraw amount more than your account please check your balance`;
        }
        this.initialAmount=this.initialAmount-withdrawAmount;
        return`Hey ${this.name} your money debited successfully your current balance is ${this.initialAmount}`;
    }
}

let person1=new ucoBank("divya",2345678,5000,"Trichy");
let person2=new ucoBank("sanju",3245679,3000,"chennai");
let person3=new ucoBank("saravanan",17896598,9000,"coimbatore");
console.log(person1.checkBalance());
console.log(person1.moneyDeposit(5000));
console.log(person1.withdrawMoney(12000));
console.log(person1.checkBalance());
//console.log(person2);
//console.log(person3);

//OOPs-Object Oriented Programing(Everything Stand arounds an object) It Follows four core concepts
//  1.abstraction-Hidden complex logic ,explore only what needs
//  2.Encapsulation-Bundling the data and its logic together as what we are doing while creating an object using class
//  3.Inheritance-We can create new class and extend already existing class
//  4.Polymorphism-Polymorphism - The behaviour of creating many classes using single parent class and adapting parent's method is called polymorphism.
   //Polymorphism in javascript only supports methodoverride



//Inheritance example
class Animal {
    speaks(){
        return "All animals are speak their own language"
    }
}

class Dog extends Animal{  

    dogBarks(){
        return "Dogs Usually Barks" 
    }

}
class Cat extends Animal{ 
    speaks(){
        return "Cats Usually Meows"
    }
}
let dog1=new Dog();
let cat1=new Cat();

console.log(dog1);
console.log(dog1.dogBarks());
console.log(dog1.speaks());//parent methods also work in the clild that is called inheritance
console.log(cat1.speaks());