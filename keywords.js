//Let Var Const
var a=10;
let b=20;
const c=30;

//var
var a=40;//redeclaring is allowed with var
console.log(a); 

//let
//let b=30;//redeclaring is not allowed with let
b=30;//reassigning is allowed with let
console.log(b);

//const c = 60; //redeclaring or reassigning is not allowed with const
//c = 200;
console.log(c);
 
//using non-primitive types to able to insert,modify,delete the variable or element
myarray4=[1,2,3,4,5,6];
myarray4.push(7);
console.log(myarray4);
myobj={name :"divya",place:"india"}
myobj.name="sanju";
delete myobj.place;
console.log(myobj);

//hoisting -- 
//var a=10;  
//let b=20;  
//const c=30;

console.log(a);
var a=10;


//cosole.log(b);
//let b=20;

//perfect example
console.log(func());
function func(){
console.log('hello');
};

