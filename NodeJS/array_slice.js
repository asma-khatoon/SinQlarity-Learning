let arr =[1,2,5, 7,8];
let newArr= arr.slice();
Object.assign(newArr, arr);
console.log("Before:", newArr);
console.log("After:", newArr);