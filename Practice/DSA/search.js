function searchElement(arr,n ,key){
    for(let i=0; i<=arr.length; i++){
        if(arr[i]=key){
            return i;
        }
        else{
            return -1;
        }
    }
    let position=searchElement(()=>{
    if(position==-1){
        console.log("Element not found");
    }else{
        console.log("element is found at key",i);
    }
});
}
let arr=[2,4,5,6,3,2,1,9,10];

searchElement(arr,8 ,5);
console.log(position);