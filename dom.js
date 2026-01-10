//We link HTML and JavaScript to add interactivity and dynamic behavior to a webpage.
console.log(document);
console.log(document.getElementById("ptag"));
console.log(document.getElementsByClassName("select"));
console.log(document.getElementsByTagName("p"));

//selectors(suggestable)
console.log(document.querySelector("#ptag"));
console.log(document.querySelectorAll(".select"));

//InnerText vs text content 
// important innerText returns only visible text and respects CSS, whereas textContent returns all text including hidden content and is faster.
//inner text--wont show output if visibilty is hidden
console.log(document.querySelector("#ptag").innerText);
//inner text overwrite   
document.querySelector("#ptag").innerText="The text is modified"; 

console.log(document.querySelector("#ptag").textContent); 
document.querySelector("#ptag").textContent = "The text is modified";

//inner html
console.log(document.querySelector("#div").innerHTML);
//innerhtml overwrite 
document.querySelector("#div").innerHTML = '<h2 style="color:red"> This is second level of heading</h2>';

//style
let ptag=document.querySelector("#ptag");
ptag.style.color = "blue";
ptag.style.backgroundColor = "black";
ptag.style.fontSize = "30px";

//remove and add 
console.log(document.querySelector("#div").innerHTML);
//console.log(document.querySelector(".remove").classList.remove("remove"));
console.log(document.querySelector("#div").innerHTML);

//set and get attributes
//attrributes means class ,id ,style
console.log(document.querySelector("#ptag").getAttribute("class")); 
document.querySelector("#ptag").setAttribute("class", "queryselector");//overwrite the class name
console.log(document.querySelector("#ptag").getAttribute("class"));


//event listener
let btn=document.querySelector("#btn");
let bttext=document.querySelector("#btn-text");
btn.addEventListener("click",function(){
    bttext.textContent="Button Clicked";
});
 
let mouse=document.querySelector("#mouseover");
mouse.addEventListener("mouseover",function(){//mouseover is action unction is reaction
    mouse.style.color="red";
    mouse.style.backgroundcolor="black";
});

mouse.addEventListener("mouseout",function(){
    mouse.style.color="black";
    mouse.style.backgroundcolor="white";

});


//create element ,append child,remove child
let newElement=document.createElement("ul");
let firstChild=document.createElement("li");
let secondChild=document.createElement("li");
let thirdChild=document.createElement("li");
let fourthChild=document.createElement("li");

firstChild.textContent="HTML";
secondChild.textContent="CSS";
thirdChild.textContent="JAVASCRIPT";
fourthChild.textContent="REACT";
 
let body=document.querySelector("body");
body.appendChild(newElement);
newElement.appendChild(firstChild);
newElement.appendChild(secondChild);
newElement.appendChild(thirdChild);
newElement.appendChild(fourthChild);

let createp=document.createElement("p");
createp.textContent="Html is the basic foundation of web development";
firstChild.appendChild(createp);

//if you want individual collor of list use this method
/*firstChild.style.color="blue";
secondChild.style.color="red";
thirdChild.style.color="yellow";
fourthChild.style.color="orange";*/

//if you have same color of all list element use this
//loop to style li elements
let liElement=document.querySelectorAll("li");
for(i=0;i<liElement.length;i++){
    liElement[i].style.color="purple";
}

//style by selecting nth child;
console.log(liElement[0]);

console.log(newElement.children[0]);
console.log(btn.nextElementSibling);
console.log(btn.parentElement);
console.log(btn.previousElementSibling);
console.log(newElement.childNodes);



