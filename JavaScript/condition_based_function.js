// let decideFunc ="add";
// let decideFunc ="subtract";
// let decideFunc ="multiply";
 let decideFunc ="divide";
let getResult;
if(decideFunc=="add"){
    getResult=function(n1,n2){
        console.log("result=", n1+n2);
    }
}
    else if(decideFunc == "subtract"){
        getResult = function(n1,n2){
            console.log("result=", n1-n2);
        }  
}
   else if(decideFunc == "multiply"){
    getResult =function(n1,n2){
        console.log("result=", n1*n2);
    }
   }else{
    getResult =function(n1,n2){
        console.log("result=", n1/n2);
    }
   }
let num1= 8;
let num2 =3;
getResult(num1,num2);