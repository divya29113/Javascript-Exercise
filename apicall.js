//promise async await mostly api call make panna use panrathu
//browser la nadakura vishayam ellam frontend 
//front end la irunthu data va direct connect panamudiyathu apdi panna hacking easy ya nadanthurukum because browser data paka mudium ront end la oru action panna athu backend la irunthu than kondu varum
//front la irunthu  request backend ku pogum backend database la poi data fetch panum
//backend fetch data from database and to response to the frontend 
//backend means python or node js backend server run agitu irukum and then front end ku thevaiyana inormation ah kudukum
//frontend kum backend kum nadukura communication tool or method or protocol ethuvanalum sollalam that is API most ah use panrathu rest api
//front end epdi request backend ku send pannum na using url antha url ah hit panna namma host panni vachiruka backend url ku pogum
//Hotel scenario--dish(frontend)>Waiter (API)>kitchen coooking process(backend)
//intha waiter frontend la request vangi backend(database la eduthu) backend la response ah vangi api mula ma thirumba frontend ku kudukum



//async await--asynchronus function because code execution athae line la nadakathu microtask task queue ella synuchronus function  execute aanathuku aprom vanthu last ah microtaskqueue la irunthu call stack ku vanthu execute agum
//async function ethuku use ipo api call backend data eduthutu vara late agum so we use this function
let clickbtn=document.querySelector("#click-btn");
clickbtn.addEventListener("click",fetchData);//namma ipo inga function vaipom click pannathum intha function nadakanum nu but na inga function ae pass paniten excute pannala execute panna athu execute agum enna click pannathan execute aganum nu solrom 

function fetchData() {
    let getData = new Promise((resolve, reject) => {
      let getData = fetch("https://jsonplaceholder.typicode.com/posts");
      console.log(getData);
      return getData ? resolve(getData) : reject("error fetching data");
    });
    console.log(getData);
    getData
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        let lists = document.querySelector("#lists");
        lists.innerHTML = "";
        let formatResponse = data;
        formatResponse.forEach((post) => {
          let listItem = document.createElement("li");
          listItem.textContent = `Title: ${post.title} - Body: ${post.body}`;
          lists.appendChild(listItem);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
/*async function fetchData(){
    let response=await fetch("https://jsonplaceholder.typicode.com/posts");//async use panna kandipa await(must) kura keyword use pannanum await means function kula wait pannum microtask queue data vara varaikum wait panrathu
    //api call make fetch ku function javascript la available ah iruku
    //namma kuduturuka url la backend la host pani vachiruka data nammaku json format show agum
    
    //console.log(response); //console panni pakum pothu rendu visayam note pannanum first ok true second status 200 irunta means successful
    //ok: true means the HTTP request was successful(status code 200–299).
    let formatResponse= await response.json();
    console.log(formatResponse);
    //json -javascript object notation rombae popular aana data va format pannikura oru structure javascript mari yae key value pair ah show pannum {}javascript ipdi bracket potu thana object declare same as json so it may be name as json because look like javascript.but small difference between it javascript keys athavathu propeties ku namma quotation kuduka matom but json keys la compulsory double quotation irukum
    //JSON is a lightweight data format used to exchange data between frontend and backend.
//All programming languages support JSON.
//It is called JSON because it is based on JavaScript object syntax.

    //How JSON is used in Frontend & Backend (Short Format)

//Frontend:

//Sends user data to backend as JSON

//Receives server response in JSON

//Used in API calls (fetch / axios)

//Backend:

//Receives request data in JSON

//Processes & stores data in database

//Sends response back as JSON


//getdata click panna enaku data webpage show pannanum athuku first ul create panninathula li element create panni froeach method use panni ovaru method ah hydrate panni show agum 
//ovaru thadava get data kudutha add agitae poguthu atha stop pannanum na innner html blank ah declare pannanum

let lists=document.querySelector("#lists");
lists.innerHTML="";

 formatResponse.forEach((posts) => {
    let listItem=document.createElement("li")
    listItem.textContent=`Title ${posts.title}- Body ${posts.body}`;
    lists.appendChild(listItem);//ul kula nama create panna li append panna than show agum
    
 });
}*/