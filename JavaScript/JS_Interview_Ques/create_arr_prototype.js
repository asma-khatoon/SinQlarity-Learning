//Create Array.prototype.last() 
Array.prototype.last = function(){
    return this.length===0?-1:this[this.length-1];
}
const arr =[2,9,8,0];
console.log(arr.last());
