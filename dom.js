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
//attrributes means class ,id 
console.log(document.querySelector("#ptag").getAttribute("class"));//id ptag select athukula ulla class attribute ulla classname get panren
document.querySelector("#ptag").setAttribute("class", "queryselector");//overwrite the class name
console.log(document.querySelector("#ptag").getAttribute("class"));


//event listener
document.querySel

ector("#btn").addEventListener("click",function(){
    document.querySelector("#btn-text").textContent="Button Clicked";
});
