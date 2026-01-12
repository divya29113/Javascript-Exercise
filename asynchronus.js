 //Synchronous vs asynchronous javascript 

//line by line code execute (synchronus)


setTimeout(function a() {
    console.log("a");
  }, 500);
  
  setTimeout(function b() {
    console.log("b");
  }, 1000);
  
  setTimeout(function c() {
    console.log("c");
  }, 0);
  
  /*setInterval(function(){
    console.log("Im set interval");
  },1000);*/
  
  function d() {
    console.log("d");
  }
  
  d();

  function a(func){ 
    let num=0;
    for (let i=0;i<10;i++){
        num++;
    }
    return setTimeout(()=>{
        func(num);
  },2000);
}
  a(function(result){
    console.log(result);
  });

  //Promises - resolve and reject and pending(default promise pending after consider logic either resolve or reject)
  let promise= new Promise (function(resolve,reject){;
    let a=true;

    if(a){
        resolve("promise resolved successfully")

    }else{
        reject("promise rejected");
    }
  });
  promise
     .then((response)=>{
         console.log(response);
     })
     .catch(()=>{
        console.log("promise rejected")
     });
