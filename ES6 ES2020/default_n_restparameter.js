function addTwoNumber(n1,n2){
    return n1+n2;
}
console.log(addTwoNumber(5,6));
//--------rest parameters---//
console.log("rest parameter");

function addNumbers(...numbers){
    let sum =0;
    numbers.forEach((e)=>{
        sum =sum + e;
    });
    return sum;
}
let res = addNumbers(2,3,4,5,6);
console.log(res);