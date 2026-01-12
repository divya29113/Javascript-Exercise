
let grandparent=document.querySelector("#grand-parent");
let parent=document.querySelector("#parent");
let child=document.querySelector("#child");

grandparent.addEventListener("click",function(event){ 
    console.log("Grandparent clicked");
    console.log(event.target.id);
});

/*parent.addEventListener("click",function(){
    console.log("parent clicked");
},true);

child.addEventListener("click",function(event){
    console.log("child clicked"); 
    //event.stopPropagation();
});*/                          
//js deault behaviour event bubbling
//event capturing and event trickling is same


//Event delegation is a technique of using event bubbling to handle events at a higher level in the DOM rather than attaching event listeners to individual elements.

