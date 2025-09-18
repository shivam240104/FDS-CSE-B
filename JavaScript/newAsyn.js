function register() {
    return new Promise((resolve,reject)=>{
         setTimeout(() => {
    console.log("Register end");
    resolve();
  }, 5000);
    })
 
}
function sendEmail() {
    return new Promise((resolve,reject)=>{

        setTimeout(() => {
          console.log("Send email end");
          resolve();
        }, 5000);
    })
}
function Login() {
    return new Promise((resolve,reject)=>{
        
        setTimeout(() => {
          console.log("Login end");
          reject();

        }, 5000);
    })
}
function Data() {
    return new Promise((resolve,reject)=>{
        
        setTimeout(() => {
          console.log("Data end");
          resolve();
        }, 5000);
    })
}
function DisplayData() {
    return new Promise((resolve,reject)=>{
        
        setTimeout(() => {
          console.log("Display Data end");
          resolve();
        }, 5000);
    })
}

// register(function (){
//     sendEmail(function(){
//         Login(function(){
//             Data(function(){
//                 DisplayData();
//             })
//         })
//     })
// });
// // sendEmail();
// // Login();
// // Data();
// // DisplayData();

// register()
// .then(sendEmail()
// .then(Login()
// .then(Data()
// .then(DisplayData()
// .catch((err)=>{
//     console.log("Error",err);
// })))));
async function f1() {
    try{
        await register();
       await sendEmail();
       await  Login();
       await Data ();
       await DislayData();
    }
    catch (err){
        console.error("Login Error", err);
    }
    finally{

        console.log("call other Application");
    }
}
f1();