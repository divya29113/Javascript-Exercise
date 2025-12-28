//Famous Interview question
//Difference between double equal to operator and strict operator(triple equal to operator)

console.log(1=="1");
console.log(1==="1");

//Arrays in javascript
//Array is an index based ordered and dynamic data structure in javascript and it supports all datatypes why it dynamic b
//because we able to change it
let myarray=[4,true,"hello",null];
console.log(myarray.length);

//Array methods-push,pop,shift,unshift
//push is insert element in the last position of the array
myarray.push("klm");
console.log(myarray);

////pop is remove element in the last position of the array
myarray.pop();
console.log(myarray);
//it means push the element in the first position of the array
myarray.unshift(2);
console.log(myarray);

//it means remove the element in the first position of the array
myarray.shift();
console.log(myarray);

//splice important method
let myArray1=[23,56,"pol","moh",true];
console.log(myArray1.length);
myArray1.splice(0,2,"cat","hat",9);
console.log(myArray1);
 
//slice
let myArray3=[23,56,"pol","moh",true];
console.log(myArray3.slice(1,3));

//sort
let myNum=[23,12,7,4,-2];
console.log(myNum.sort((a,b)=> a-b)); 

//concat Array
let arrayA=[1,2,3];
let arrayB=[4,5,6,7];
console.log(arrayA.concat(arrayB));              

//Higher Order method in array
let mapExample=[1,2,3,4,5];
let multiplyBy10=mapExample.map((a) =>{ 
    return a*10;
})
console.log(multiplyBy10);