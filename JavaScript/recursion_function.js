function printNumRecur(num){
    if(num==0){
        return 0;
    }
    console.log(num);
    num--;
    printNumRecur(num);
}
printNumRecur(8);