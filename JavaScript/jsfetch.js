const url = "https://dummyjson.com/users";
// const pr = fetch(url);
// pr.then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log("name =",data.users[0].firstName);
    // console.log("email =",data.users[0].email);
    // console.log("ip =",data.users[0].ip);
    // console.log("Mac Address =",data.users[0].macAddress);
// })


const f1 = async()=>{
    try{const res = await fetch(url);
    const jsondata = await res.json();
    jsondata.users.forEach((data)=>{
        console.log("Name =",data.firstName);
        console.log("email =",data.email);
    console.log("ip =",data.ip);
    console.log("Mac Address =",data.macAddress)
    console.log(" #####################################")
    })}
    catch(err){
        console.log("Error = ",err.message);
    }
}
f1();