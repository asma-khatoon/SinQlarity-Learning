const express = require('express');
const app = express();
app.use(express.json());
app.get('/',(req,res)=>{
    //req.send("I am request");
    res.send("I am response");
    
});
app.get('/add',(req,res)=>{
    let n1= 10;
    let n2= 30;
    let sum= n1+n2;
    res.send(`sum =${sum}`);
    
});
app.post('/add',(req,res)=>{
    //console.log(req.body);
    let n1= req.body.num1;
    let n2 = req.body.num2;
    let sum=0;
    sum= n1+n2;
    res.send(`sum =${sum}`);
    //console.log(sum);

});
app.post('/sub',(req,res)=>{
    
    let n1= req.body.num1;
    let n2 = req.body.num2;
    let sub=0;
    sub= n1-n2;
    res.send(`sub =${sub}`);
   

});
app.post('/mul',(req,res)=>{

    let n1= req.body.num1;
    let n2 = req.body.num2;
    let mul=0;
    mul= n1*n2;
    res.send(`multiplication =${mul}`);
    

});
app.post('/divide',(req,res)=>{
   
    let n1= req.body.num1;
    let n2 = req.body.num2;
    let div=0;
    div= n1/n2;
    res.send(`division=${div}`);
    

});

app.listen(5500);

