

function validateUser(name,password){
    if(name===null || name.length =='0'){
        console.log("Please enter your name");
        return;
    }
    else if(password == "" || password.length<8){
        console.log("Enter valid password");
        return;
    }
}
let username= "ABC";
let user1= "";
let pwd = "";
let pwd1 ="mmmm122345hj";
validateUser(username,pwd);
validateUser(user1,pwd1);