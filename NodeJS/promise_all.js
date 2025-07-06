function func1(){
    return new Promise((res,rej)=>{
        res("function1");
    });
}
function func2(){
    return new Promise((res,re)=>{
        rej("function2-rejected");
    });
}
function func3(){
    return new Promise((res,rej)=>{
        rej("function3-rejected");
    });
}
Promise.all([func1,func2,func3]).then((result)=>{

console.log(result);
}) .catch((error)=>{
    console.log(error);
});