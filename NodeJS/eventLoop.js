let n1= 5;
let n2= 6;
function add(a, b){
    console.log(a+b);
}
setImmediate(()=>{
    add(n1,n2);
});
console.log("inside event loop 1");