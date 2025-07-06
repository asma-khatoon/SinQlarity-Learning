function addNumbers(callby, n1,n2){
    console.log(callby ,":",n1+n2);
}
setImmediate(()=>{
    addNumbers("setImmediate:",6,7);
});
setTimeout(()=>{
    addNumbers("setTimeout",3,4);
}, 0);
addNumbers("direct:",4,8);