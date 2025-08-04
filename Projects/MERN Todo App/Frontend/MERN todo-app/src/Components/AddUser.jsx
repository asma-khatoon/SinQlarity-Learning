import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from './Components.module.css'
import axios from "axios";

const AddUser = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [mobile, setMobile] = useState("");

  const adduserHandler = () => {
    if (!userName || !mobile) {
      alert("Please fill all fields");
      return;
    }

    const payload = { userName, mobile };
    axios.post("http://localhost:3000/", payload)
      .then((res) => {
        console.log(res);
        setUserName("");
        setMobile("");
        alert("User added successfully!");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={Style.Container}>
      <button className={Style.btn}   onClick={() => navigate("/")}>Home page</button>
      <button className={Style.btn} onClick={() => navigate("/Edituser")}>Edit User</button>
      <h2 className={Style.h1} >Add User</h2>
      <br /><br />
      <label className={Style.label}>User Name</label>
      <input className={Style.input}
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <label className={Style.label}>Mobile No</label>
      <input className={Style.input}
        type="text"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button className={Style.Addbtn} onClick={adduserHandler}>Add User</button>
    </div>
  );
};

export default AddUser;