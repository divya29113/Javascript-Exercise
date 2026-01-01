//Ways of doing conditional operations
//1.If,elseif,else

let check=22;
if(check>30){
    console.log("yes true");
    
} else if(check>=20){
    console.log("yes true it is");
}else if(check>=20){
    console.log("yes true it is");
}else if(check>=20){
    console.log("yes true it is");
}else if(check>=20){
    console.log("yes true it is");
}else{
    console.log("false");
}


//ternary operator
let age=20; 
age >= 30 ? console.log("yes"): age >= 20 ? console.log("yes more than 20") : console.log("false"); 


//switch
let day=2;
switch(day){
    case 1:
        console.log("Monday");
        console.log("first day of the week ");
        break;
    case 2:
        console.log("Tuesday");
        console.log("Second day of the week ");
        break;    
    case 3:
        console.log("Wednesday");
        console.log("Third  day of the week ");
        break;  
    default:
        console.log("Invalid day")       
}