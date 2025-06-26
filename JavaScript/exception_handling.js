function validateUser(name, password){
try{
    if(name.length<4){
        throw new Error("name is too short");
    }
    if(password.length<8){
        throw new Error("Password is too short");
    }
// console.log(x);
 console.log("working");
 return "in try;"
}
catch(error){
//console.log("Server is under maintainance");
console.log(error);
return "failed to catch";
}
finally{
    console.log("resolved");
    return "Inside finally";
}
}
// let username ="ABBmmmmmmm";
// let pwd ="yy8899jjhhgggjuj";
// let username ="ABBgg";
// let pwd ="yy8";
let username ="ABB";
let pwd ="yy8jjjjjjkkk";

let msg =validateUser(username,pwd);