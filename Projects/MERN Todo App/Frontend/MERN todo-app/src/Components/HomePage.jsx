import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from './Components.module.css'
import axios from "axios";

const HomePage=()=>{
const navigate=useNavigate();
const[user,setUser]=useState([]);
const[flag,setflag]=useState(false)
useEffect(()=>{
    axios
    .get("http://localhost:3000/")
    .then((res)=>{console.log(res)
       setUser(res.data.data); 
 })
    .catch((err)=>console.log(err));
},[flag]);
const deleteHandler=(_id)=>{
    console.log("id",_id);
    let Payload={
        _id,
    }
    axios.delete("http://Localhost:3000/",{data:Payload})
    .then((res)=>setflag(!flag))
    .catch((err)=>console.log(err))
};
console.log("user",user)
    return (
    <div className={Style.container1}>
        <button className={Style.btn1} onClick={()=>navigate("/Adduser")}>Add User</button>
        <button className={Style.btn1} onClick={()=>navigate("/Edituser")}>Edit User</button>
        <h2>Home Page</h2>
        <br/>
        <br/>
        <table className={Style.table}>
            <thead className={Style.thread}>
                <tr>
                <th>Id</th>
                <th>UserName</th>
                <th>Mobile</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody className={Style.body}>
                {user && user.map((post)=>{
                    return (
                        <tr key={post._id}>
                            <td>{post._id}</td>
                            <td>{post.userName}</td>
                            <td>{post.mobile}</td>
                            <td onClick={()=>deleteHandler(post._id)}>Delete</td>

                        </tr>
                    )
                })

                }
            </tbody>
        </table>
        
    </div>
    )
}
export default HomePage;