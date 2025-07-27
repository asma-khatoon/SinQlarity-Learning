const Sequelize =require('sequelize');
const sequelize =require('../util/database');
const user = sequelize.define(`user`,{
id:{
type:sequelize.INTEGER,
autoincrement:true,
allowNull:false,
primaryKey:true
},
name:{
type:sequelize.STRING,
allowNull:false, 
},
email:{
type:sequelize.STRING,
allowNull:false, 
},
password:{
type:sequelize.STRING,
allowNull:false, 
},
remark:{
type:sequelize.STRING,
allowNull:false, 
},
});
module.exports = user; 

