console.log("Hello World");

let newVar='Divya';  //by using single quotation
let secVar="Sanju"; //by using double quotation
let tempLit=`My name is ${secVar}`; // template Literals
console.log(tempLit); 
 
//length
console.log(newVar.length);

//charAT and it shorcut method
console.log(newVar.charAt(1));
//or use latest method below instead of charAt
console.log(newVar[1]);

//toUpperCase and toLowerCase
console.log(newVar.toUpperCase());
console.log(newVar.toLowerCase()); 

//trim,trimstart,trimend
let trimText="  fruits  ";
let trimS="  fruits";
let trimE="fruits  ";
console.log(trimText.trim());
console.log(trimS.trimStart());
console.log(trimE.trimEnd());

//includes it means namma declare panniruka word text la iruka nu pakkum iruntha true illana false

let incl="we are learning javascript ";
console.log(incl.includes("learning"));

//indexOf(),lastIndexOf()

let indo="This is indexof string method";
console.log(indo.indexOf("h"));
console.log(indo.lastIndexOf("h"));

//slice
let str="This is slice method";
console.log(str.slice(2,9));
console.log(str.slice(2));
console.log(str.slice(-12,-2));  //this is not recommend

//substring  slice similar than  but one difference is there
//the dierence betweeen slice and substring is substringg not support the negative value

let myStr="This is substring method";
console.log(myStr.substring(2,12));
console.log(myStr.substring(5));

//replace(),replaceAll()

let repl="Hello world";
console.log(repl.replace("world","Sanju"));
console.log(repl.replaceAll("Hello world" , "Hi Sanju"));

//split important
let spil="This is split method";
console.log(spil.split(""));
console.log(spil.split(" "));
console.log(spil.split("s"));

//concat
let con="Hello";
console.log(con.concat(" world"," HI"," sanju"));
console.log(con+ " worlds");

//startsWith(),endsWith()

let starts="filename.js"
console.log(starts.startsWith("file"));
console.log(starts.endsWith(".js"));
console.log(starts.startsWith("fe"));

//repeat
let rep="sanju"
console.log(rep.repeat(5));

//oneline solution to reverse string
//reverse string is not have separate function in string method but we have to use split
console.log("This is reverse method".split("").reverse().join(""));
