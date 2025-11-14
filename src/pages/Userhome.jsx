import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Isauth";
import APIURL from "../config";


export default function Userhome() {
  const [users, setUsers] = useState([]);
  const { logout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${APIURL}/get/`, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
   const buttonHandler = () => {
    logout()
    navigate("/");
  }


  return (
    <div>
      <h2>User Dashboard</h2>
  
      {users.map((u) => (
        <p key={u._id}>{u.name} — {u.email}</p>
      ))}
        <button onClick={() => buttonHandler()} className="p-1.5 bg-blue-800 text-amber-50 border-2 rounded-2xl">LOG OUT</button>
    </div>
    
  );
}
