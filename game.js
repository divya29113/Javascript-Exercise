//alert,prompt,confirm
function rockPaperscissorgame(){
let userChoice=prompt("Enter rock, paper or scissor:");
//console.log(userChoice);
let gameArray=["rock","paper","scissor"];
let computerChoice=Math.floor(Math.random()*3);
if(userChoice.toLowerCase()!=="rock" && userChoice.toLowerCase()!=="scissor" && userChoice.toLowerCase()!=="paper"){
    let askAgain=confirm("invalid input if you want to continue");
    if(askAgain==true){
       rockPaperscissorgame();
    }
    else{
        return;
    }
}

if(userChoice.toLowerCase()===gameArray[computerChoice]){
   alert( `you selected ${userChoice}\n computer selected ${gameArray[computerChoice]}\n Hence it is tie`);
}else if(gameArray[computerChoice]==="rock"  && userChoice.toLowerCase()==="scissor"){
    alert(`you selected ${userChoice}\n computer selected ${gameArray[computerChoice]}\n computer wins`);
}else if(gameArray[computerChoice]==="scissor"  && userChoice.toLowerCase()==="paper"){
    alert(`you selected ${userChoice}\n computer selected ${gameArray[computerChoice]}\n computer wins`);
}else if(gameArray[computerChoice]==="paper"  && userChoice.toLowerCase()==="rock"){
    alert(`you selected ${userChoice}\n computer selected ${gameArray[computerChoice]}\n computer wins`);    
}else{
    alert(`you selected ${userChoice}\n computer selected ${gameArray[computerChoice]}\n you win`);
}
return;
} 
rockPaperscissorgame();