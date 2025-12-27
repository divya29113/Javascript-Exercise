let num1=12;
let num2=12.6;
console.log( typeof num1);
console.log( typeof num2); //end of the day it all are number not float vaalue

let a=0.1+0.2;
//now we expect the answer is 0.3 but javascript follows a 64 bit floating point  so it gives strange value
console.log(a); 

//Infinity -negative infinity--We know that

//type coercion
//let concat="hello"/6;
//console.log(concat);
  
//let concat="hello"+6;
//console.log(concat);

let concat="6"*6;
console.log(concat);

// division/ , multiplication*,Addition+,subtraction-,%modules operator
let e=10;
let f=20;

console.log(e+f);
console.log(e-f);
console.log(e*f);
console.log(e/f);
console.log(e%f);



let divide=35%2;  //modules gives remainder value division gives quotient value
console.log(divide);

//Number is the object provided by javascript to use number method

console.log(Number.isInteger(12));

let b=Number.parseInt("70");
let c=Number.parseInt("70");
console.log(b+c);

console.log(Number.parseFloat("15")+Number.parseFloat(15));

let i=13.980769;
console.log(i.toFixed(2));

//Math Methods
let j=15.5;
console.log(Math.round(j));
console.log(Math.floor(j));
console.log(Math.ceil(j));
console.log(Math.trunc(j));

console.log(Math.max(11,4,55,100));
console.log(Math.min(23,45,67,32));

console.log(Math.pow(5,3));
console.log(Math.sqrt(49)); 

//Math.random() will give you random number ranging from 0 to 1 without absolute 0 and absolute 1
let random= Math.trunc(Math.random() * 10 +1);
console.log(random);


