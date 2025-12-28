
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

/*let myFunc1={
    myName: "Divya",
    greet: function(){
        console.log("hello",this);
    },

};

console.log(myFunc1);*/

let myObj2={
    name:"sanju",
    greet(age){ 
        return age; 
    },
};   
console.log(myObj2.greet(25));

let myQ={
    hobbies:["coding","dancing"],
    greet()
    {
        return myQ;
    }
};
console.log(myQ.greet());
let myFunc3 = {
    myName: "vignesh",
    greet: () => {
      return this;
    },
  };//this using this object it give empty

  console.log(myFunc3.greet());

  console.log(Object.keys(myObj).length);// the interview the given objects how many keys are there to use this method
  console.log(Object.values(myObj));
  console.log(Object.entries(myObj));

  //Object.freeze() & Object.seal()

//Object.freeze(myObj);
//Object.freeze() -  This method will freeze the object meaning we cannot add, edit or delete any of its elements.
//Object.seal() - This method will seal the object meaning we can edit but cannot add or delete its elements.
Object.seal(myObj);
delete myObj.place;

console.log(myObj);
