module.exports.add = (req,res)=>{
   
    let n1= req.body.num1;
    let n2 = req.body.num2;
    let sum=0;
    sum= n1+n2;
    res.send(`sum =${sum}`);
    

};
module.exports.subtract = (req,res)=>{
    
    let n1= req.body.num1;
    let n2 = req.body.num2;
    let sub=0;
    sub= n1-n2;
    res.send(`sub =${sub}`);
   

};
module.exports.multiply = (req,res)=>{

    let n1= req.body.num1;
    let n2 = req.body.num2;
    let mul=0;
    mul= n1*n2;
    res.send(`multiplication =${mul}`);
    

};
module.exports.divide = (req,res)=>{
   
    let n1= req.body.num1;
    let n2 = req.body.num2;
    let div=0;
    div = n1/n2;
    res.send(`division=${div}`);
    

};