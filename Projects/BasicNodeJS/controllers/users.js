const userModel = require('../models/users');

module.exports.register = async (req,res)=>{
   let insertId = await userModel.insert(req.body);
   if(insertId>0){
    res.send({status:"success", data: {id:insertId}});
    //console.log(insertId);

   }
   else{
    res.send({status:"error", message:"user registration failed"});

   }
    
}
module.exports.get = async (req,res)=>{
    let data= await userModel.get(req.body);
    if(data){
    res.send({status:"success", data:data});
    }
    else{
     res.send({status:"error", data:"user not found"});   
    }
    
}
module.exports.update = async (req,res)=>{
    let status = await userModel.update(req.body);
   
    if(status){
         res.send({status:"success", message:"user data updated"});
    }
    else{
         res.send({status:"error", message:"user data not updated"});

    }
   
}
module.exports.delete = async (req,res)=>{
   let status = await userModel.delete(req.body);
   
    if(status){
         res.send({status:"success",message:"user data deleted!"});
    }
    else{
         res.send({status:"error",message:"user data not deleted"});

    }
}