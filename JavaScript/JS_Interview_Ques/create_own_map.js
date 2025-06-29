const map =function(arr, func){
    modifiedArray =[];
    for(let index in arr){
        modifiedArray.push(func(+arr[index], +index));
    }
    return modifiedArray;
}
   const userArr =[1,3,4,5];
   const plusOne= function(element, index){
    return element+1;
   }
   const addelementInIndex = function(element, index){
    return element + index;
   }
   const incrementbyTwo= function(element,index){
    return element+2;
   }
   const result = map(userArr, addelementInIndex);
   console.log(result);
   const result1 = map(userArr, plusOne)
   console.log(result1);
   const result2 = map(userArr, incrementbyTwo)
   console.log(result2);