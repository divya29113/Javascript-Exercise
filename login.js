let btn=document.querySelector("#btn");
btn.addEventListener("click",function(event){
    event.preventDefault();
    console.log("login succesful");
 
    let inputEmail=document.querySelector("#email");
    let emailValue=inputEmail.value;
    let inputPassword=document.querySelector("#password");
    let passwordValue=inputPassword.value;
    let alertElement=document.querySelector("#alert");
    
    if(!emailValue.trim().includes("@")){
        alertElement.textContent="please enter valid email address";
        alertElement.style.color="red";
        return;
    }
    if(passwordValue.trim().length<8){
        alertElement.textContent="please enter valid password";
        alertElement.style.color="red";
        return;
    }

    alertElement.textContent="login successful";
    alertElement.style.color="green";
});