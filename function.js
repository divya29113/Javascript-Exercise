  //function is mini ile to create logic why it use if created one logic we have use to many times
//Named function
function toMakeWordCapitalandTrim(userInput){
    let result=userInput.trim();
        result=result.toUpperCase();
        return result;
}
console.log(toMakeWordCapitalandTrim("  divya  "));

//way of creating functions
//function expression
let addTwoNumbers=function(a,b){
    return a+b;
}
console.log(addTwoNumbers(10,20));
 
//fat arrow method
let subTwoNum=(a,b)=>{
    return a-b;
}
console.log(subTwoNum(50,10));
//ES6 introduce fat arrow method
//using fat arrow and single line 
let multiTwoNum=(a,b)=> a*b;
console.log(multiTwoNum(2,3));

//default parameter
function printName(userName= "student"){ //when the user didnt give the value of parameter that time default parameter is work
    return userName;
}
console.log(printName());

//callback function

function greet(userName){
    return `hello ${userName} welcome to our academy`;
}

function process(callback){
    return callback("Divya");
}
console.log(process(greet));

//Higher order functions -  Function should accept function itself as an argument or returns a function
function createMultiplier(x){
    return function (y){//oru function ae return pannum
        return x*y;

    }
}

let double=createMultiplier(2); 
console.log(double(5));

//IIFE - Immediately Invoke Function Expression;
(function myFunc(){
    console.log("Hello world");
} )() ;

//rest parameters
function rest(...a){
    return a;
}
console.log(rest(10,20,30,400,780,900));

//Functions in javascript called as first class citizen
//We can pass function as an argument and also we can return function itself from antoher function.  For these reasons we call function as a first class citizen