import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from './Components.module.css';
import axios from "axios";

const EditUser = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ userName: "", mobile: "" });

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/");
      setUsers(res.data.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const startEdit = (user) => {
    setEditingId(user._id);
    setEditForm({ userName: user.userName, mobile: user.mobile });
  };

  const handleInputChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const saveEdit = async (_id) => {
    try {
      const updatedUser = { _id, ...editForm };
      await axios.put("http://localhost:3000/", updatedUser);
      setEditingId(null);
      fetchData(); // Refresh data
    } catch (err) {
      console.error("Error updating user:", err);
    }
  };

  return (
    <div className={Style.container1}>
      <button className={Style.btn1} onClick={() => navigate("/Adduser")}>Add User</button>
      <button className={Style.btn1} onClick={() => navigate("/")}>Home page</button>
      <h2>Edit User</h2>
      <br /><br />
      <table className={Style.table} >
        <thead className={Style.thread}>
          <tr className={Style.heading}>
            <th>Id</th>
            <th>Username</th>
            <th>Mobile no</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className={Style.body}>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>
                  {editingId === user._id ? (
                    <input
                      type="text"
                      name="userName"
                      value={editForm.userName}
                      onChange={handleInputChange}
                    />
                  ) : (
                    user.userName
                  )}
                </td>
                <td>
                  {editingId === user._id ? (
                    <input
                      type="text"
                      name="mobile"
                      value={editForm.mobile}
                      onChange={handleInputChange}
                    />
                  ) : (
                    user.mobile
                  )}
                </td>
                <td>
                  {editingId === user._id ? (
                    <button className={Style.btn1} onClick={() => saveEdit(user._id)}>Save</button>
                  ) : (
                    <button  className={Style.btn1}   onClick={() => startEdit(user)}>Edit</button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No data found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EditUser;