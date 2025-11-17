import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Isauth";
import APIURL from "../config";


export default function Userhome() {
  const {user} = useAuth();
 

  // const navigate = useNavigate();
  // useEffect(() => {
  //   fetch(`${APIURL}/get/`, { credentials: "include" })
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data));
  // }, []);
  // console.log(user)


  return (
    <div>
      <h2  className="text-blue-500  text-2xl text-center m-2">User Dashboard</h2>
  {/* <ul className="text-center text-md">
      {users.map((u) => (
        <p key={u._id}>{u.name} — {u.email}</p>
      ))}
      </ul>
        */}
        <h3 className="text-3xl text-blue-600 text-center"> WELCOME {user.name}</h3>
    </div>
    
  );
}
