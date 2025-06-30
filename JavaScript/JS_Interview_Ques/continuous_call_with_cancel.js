function cancellable(func, args, t){
    let id = setInterval(()=>{
        func(...args);
    },t);
    return function(){
        console.log("called");
    };
}
const cancelTime= 10;
function fourTimes(x){
    console.log(x*4);
}
const cancelFunc=cancellable(fourTimes, [2], 2);
setTimeout(cancelFunc, cancelTime);