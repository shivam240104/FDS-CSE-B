console.log(a);
var a;
var b=6;
console.log(a);
{
    var c=7;
    let d=0;
    console.log(b);
}
console.log(c);
// console.log(d);

function f1(user="guest"){
    console.log(`Hello ${user}`);
}
f1();

 function waitforTwoSecond(){
    const ms = new Date().getTime()+2000;
    while(new Date().getTime()<ms);
}

function register(){
waitforTwoSecond();
console.log("register end");
}
function sendEmail(){
waitforTwoSecond();
console.log("Email send");
}
function login(){
waitforTwoSecond();
console.log("Enter in the app");
}
function getData(){
waitforTwoSecond();
console.log("Data gotted");
}
function DisplayData(){
waitforTwoSecond();
console.log("other Application");
}
register();
sendEmail();
login();
getData();
DisplayData();
console.log("hell0 wait");

function register1(){
    setTimeout(() => {
        console.log("register the code");
    },2300);
}
function getEmail1(){
    setTimeout(() => {
        console.log("Email gotted");
    },2300);
}
function Login1(){
    setTimeout(() => {
        console.log("Logged in");
    },2300);
}
function DisplayData1(){
    setTimeout(() => {
        console.log("AsyncWait");
    },2300);
}
register1();
getEmail1();
Login1();
DisplayData1();
