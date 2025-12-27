//ethuku namma .vachi use panrom  oru object ah use panrathuku Math.round object key ah string ah cosider 
//objects in javascript
let myObj={
    "user Name":"Divya",
    userAge:22,
    hobbies:["coding","Dancing"],
    address:{
        place:"india",
        street:"padmavathi nagar",

    },

};

console.log(myObj);
myObj.userAge=25;
console.log(myObj);
delete myObj.hobbies;
console.log(myObj);
console.log(myObj.address.place);
console.log(myObj["user Name"]);

let anotherObj=new Object();
console.log(anotherObj);