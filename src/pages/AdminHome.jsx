import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Isauth";
import APIURL from "../config";


export default function AdminHome() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${APIURL}/get`, { credentials: "include", method: "GET" })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const deleteUser = async (id) => {
    await fetch(`http://localhost:3000/user/delete/${id}`, { method: "DELETE",  credentials: "include" });
    setUsers(users.filter((u) => u._id !== id));
  };
  const buttonHandler = () => {
    logout()
    navigate("/");
  }

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {users.map((u) => (
          <li key={u._id}>
            {u.name} — {u.email}
            <button onClick={() => deleteUser(u._id)}>Delete</button>
            
          </li>
        ))}
      </ul>
      <button onClick={() => buttonHandler()} className="p-1.5 bg-blue-800 text-amber-50 border-2 rounded-2xl">LOG OUT</button>
    </div>
  );
}
