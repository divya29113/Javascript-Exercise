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

//map
//Map method will return an array with all the elements computed inside the method
let mapExample=[1,2,3,4,5];
let multiplyBy10=mapExample.map((a) =>{ //map method inside call another function that is fat arrow function so it follows higher order function
    console.log(`This is an element ==>`,a);//it shows how the element hydrated .map return the value in the array
    return a*10;
})
console.log(multiplyBy10);

//foreach method
//Foreach method will always return undefined
let forEachex=[34,90,87,65];
let receive=forEachex.forEach((b) =>{
    console.log("This is for each method",b*2);
    
});
console.log(receive);
 //filter method 
 //same as perform method to give the value in the array format but we have to filter based on requirements
 let array1=[12,90,80,65,78,65,54,34,32];
 let array2=array1.filter((b)=>{ //chatgpt
    return b >= 20;
    
 });
 
console.log(array2);

//reduce--
//reduce() = combine all values into ONE value
let red=[,89,76,54,89,90,35];
let ans=red.reduce((accumulator,element)=>{//Accumulator starts with the initial value provided; otherwise, it starts with the first element of the array.
    return accumulator+element;
},0);
console.log(ans);

//just to know we have pass many parameter inside the method
let ex=[23,45,67,78];
let ex1=ex.filter((b,index,arr)=>{   
    console.log(b, " ",index," ",arr);
});


//find
let fin=[90,67,54,23,21];
let answ=fin.find((a)=>{
    return a===54; 
});
console.log(answ);

//find index
let finIn=[23,45,67,89,90];
let finIn1=finIn.findIndex((a)=>{
    return  a > 80;
});
console.log(finIn1);

//some
let ages=[12,34,15,17,18,20];
let Over18=ages.some((a)=>{
    return a>20; 
});
console.log(Over18);

//every
let vote=["yes","yes","yes","yes","yes"];
let isVote=vote.every((a)=>{
    return a==="yes";
});
console.log(isVote);

// '==' vs '===' .  Triple equal to operator is also called strict operator

let a = 68;
let b = "68";
console.log(a == b);//double == wil do type coersion check the value if it same
console.log(a === b);

//flat
let fla=[1,2,3,[4,5,6],[7,8,9]];
let flatted=fla.flat(2);
console.log(flatted); 