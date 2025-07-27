const userModel = require('../models/users');

module.exports.register = async (req,res)=>{
   let result = await userModel.create(req.body);
   if(result.dataValues.id>0){
    res.send({status:"success", data: {id:insertId}});
    //console.log(insertId);

   }
   else{
    res.send({status:"error", message:"user registration failed"});

   }
    
}
module.exports.get = async (req,res)=>{
    let data= await userModel.findByPk(req.body.id);
    if(data){
    res.send({status:"success", data:data});
    }
    else{
     res.send({status:"error", data:"user not found"});   
    }
    
}
module.exports.update = async (req,res)=>{
    try{
     let user = await userModel.findByPk(req.body.id);
    user.password =req.body.id;
    await user.save();

    res.send({status:"success", message:"user data updated"});
    
   }
   catch(error){ 
     res.send({status:"error", message:"user data not updated"});
}
  
   
}
module.exports.delete = async (req,res)=>{
   try{
     let user = await userModel.findByPk(req.body.id);
    user.password =req.body.id;
    await user.destroy();

    res.send({status:"success", message:"user data deleted"});
    
   }
   catch(error){ 
     res.send({status:"error", message:"user data not deleted"});
}
}