function addNumbers(callfrom, n1,n2){
    console.log(callfrom ,":",n1+n2);
}
setImmediate(()=>{
    addNumbers("setImmediate:",6,7);
});
setTimeout(()=>{
    addNumbers("setTimeout",3,4);
}, 0);
process.nextTick(()=>{
    addNumbers("nextTick:", 5,7);
})
addNumbers("direct:",4,8);