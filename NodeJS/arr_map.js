let arr =[1,2,3,4,5,6,7,8,9];
let nArr =[];
for(let i=0; i<=8; i++){
    nArr.push(arr[i]*2);
}
console.log(nArr);
let mArr= arr.map(element=>
    element*3);
    console.log(mArr);