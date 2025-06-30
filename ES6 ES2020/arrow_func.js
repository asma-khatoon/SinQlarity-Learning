let arr = [1,2,3,5,6,7];
arr.map(function(element){
    return element * 4;
})
console.log(arr);
const obj= (user_name, age)=>({user_name: user_name, age:age})
console.log(obj("ABC", 30));