const addusertoDB = (username:string, password:string, age:number)=>{
    console.log(username, password);
    return "user registration done";
}
interface user{
    id:number,
    username:string,
    password:string,
    age:number,
    is_active:true|false,
    accountStatus:string|number

}
const checkTypeandInterface =(objUser:user):String=>{
    interface Point {
       readonly x:number,
       readonly y:number
    }
    let x:Point = {x:1, y:7};
    console.log(x);
    console.log(objUser.username);
    return "user data updated"
};
export {addusertoDB, checkTypeandInterface};