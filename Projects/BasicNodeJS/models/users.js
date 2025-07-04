const db =require('../util/database');
module.exports.insert = async (usersData)=>{
  
    let id=0;
    try{
    let query = "INSERT into `users`(`name`,`email`,`password`,`remark`) Values(?,?,?,?)";
    let result= await db.execute(query, [usersData.name, usersData.email, usersData.password, usersData.remark]);
    id = result[0].insertId;
    }catch(error){
        console.log(error);
       // return false;
    }
    return id;
}
module.exports.get = async (usersData)=>{
  
    let retData = '';
    try{
    let query = "SELECT * from `users` where id=?";
    let result= await db.execute(query,[usersData.id]);
    retData = result[0][0];
    }
    catch(error){
        console.log(error);
       // return false;
    }
    return retData;
}

module.exports.update = async (usersData)=>{
    //console.log(usersData);
   
    try{
    let query = "UPDATE `users` SET `password`=? where id=?";
    let status= await db.execute(query,[usersData.password, usersData.id]);
    return true;
    }
    catch(error){
        console.log(error);
        return false;
    }
   
}
module.exports.delete = async (usersData)=>{
    //console.log(usersData);
   
    try{
    let query = "DELETE from `users` where id=?";
    await db.execute(query,[usersData.id]);
    return true;
    }
    catch(error){
        console.log(error);
        return false;
    }
   
}