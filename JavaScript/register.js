function register1(){
    waitforTwoSecond();
    console.log("register end");
}
function sendEmail(){
     waitforTwoSecond();
    console.log("email send end");
}
function login(){
     waitforTwoSecond();
    console.log("login end");
}
function getMsg(){
     waitforTwoSecond();
    console.log("get msg end");
}
function DisplayData(){
     waitforTwoSecond();
    console.log("display msg");
}

function waitforTwoSecond(){
    const ms = new Date().getTime()+1000;
    while(new Date().getTime()<ms); 
}

register1();
sendEmail();
login();
getMsg()
DisplayData();
