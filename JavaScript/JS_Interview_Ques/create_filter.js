const filter =(arr, callbackFunc)=>{
const filteredArr =[];
for(let index in arr){
    const element =arr[index];
    let isValid = callbackFunc(element,index);
    if(isValid){
        filteredArr.push(element);
    }
}
  return filteredArr;
}
const arr =[1,5,6,7,8];
const callbackFunc = function compareValue(value, index){
    if(value < 7){
    return true;
    }else{
        return false;
    }
}
const newArray = filter(arr,callbackFunc);
console.log(newArray);