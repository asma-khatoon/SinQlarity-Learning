function isTwoPassed(){
    if(Array.from(arguments).indexOf(2)>=0){
        console.log("Yes 2 is passed in the function");

    }
    else{
        console.log("No, 2 is not passed in the function");
    }

}
isTwoPassed(1,2);
