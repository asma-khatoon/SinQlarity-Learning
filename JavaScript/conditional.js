var x =20;
var y= 30;
var z= 55;
if(x>y){
    console.log("x is greater than y");
    if (x>z) {
    console.log("x is greater than all");
    
    } else{
        console.log("z is greater than all");
    }
}
else {
    console.log("y is greater than x");
    if(y>z){
        console.log("y is greater than all");
    } 
    else
    {
        console.log("z is greater than all");
    }

   
}