function register1(){
   setTimeout(()=>{
       console.log("register end");

   },3000)
}
function sendEmail(){
     setTimeout(()=>{

         console.log("email send end");
     },3000)
}
function login(){
     setTimeout(()=>{

         console.log("login end");
     },3000)
}
function getMsg(){
    setTimeout(()=>{

        console.log("get msg end");
    },3000)
}
function DisplayData(){
    setTimeout(()=>{

        console.log("display msg");
    },3000)
}


register1(()=>{
    sendEmail(()=>{
        login(()=>{
            getMsg(()=>{
                DisplayData();
            });
        });
    });
});
sendEmail();
login();
getMsg()
DisplayData();
