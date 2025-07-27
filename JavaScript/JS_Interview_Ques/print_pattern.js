let res="*";
function printStar(n){
    if(n<=0){
        console.log("enter +ve no!");
    }
    let i=1;
    
    for(i;i<=n;i++){
        i=i.toString()
        res =res*i +",";
        //return res;
    }
}
printStar(5);
console.log(res);