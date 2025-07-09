import {addusertoDB, checkTypeandInterface} from '../models/users';
import {Request,Response} from 'express';
const registerUser =(req:Request,res:Response)=>{
    const username ="ABC";
    const password ="123";
    const age=30;
    const result = addusertoDB(username, password, age);
    res.send(result);
};
const updateUser= (req:Request, res:Response)=>{
    type lockedState = "locked"|"unlocked";
    let xstate:lockedState="locked";

    const myUser = {
       id:1,
       username:"Veena",
       password:"123egg",
       age:23,
       is_active:true,
       accountStatus:"unlocked"
    }
    const result = checkTypeandInterface(myUser);
    res.send(result);
}
export {registerUser, updateUser};