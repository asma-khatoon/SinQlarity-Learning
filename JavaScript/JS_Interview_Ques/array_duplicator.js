let arr=[1,2,3];
Array.prototype.duplicator = function(){
    return [...this,...this];
}
console.log(arr.duplicator());