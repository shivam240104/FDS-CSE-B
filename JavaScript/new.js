function register(){
    waitforfivesecond();
    console.log("Register end");
}
function sendEmail(){
    waitforfivesecond();
    console.log("Send email end");
}
function Login(){
    waitforfivesecond();
    console.log("Login end");
}
function Data(){
    waitforfivesecond();
    console.log("Data end");
}
function DisplayData(){
    waitforfivesecond();
    console.log("Display Data end");
}
function waitforfivesecond(){
    const ms = new Date().getTime()+5000;
    while(new Date().getTime()<ms);
}
register();
sendEmail();
Login();
Data();
DisplayData();
console.log("call other Application");
