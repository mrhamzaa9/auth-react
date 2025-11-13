import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function AdminHome() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/user/get`, { credentials: "include" , method: "GET"})
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const deleteUser = async (id) => {
    await fetch(`http://localhost:3000/user/delete/${id}`, { method: "DELETE" });
    setUsers(users.filter((u) => u._id !== id));
  };

  return (
    <div>
       <Link to='/userhome' className="text-blue-500">User dash</Link>
      <h2>Admin Dashboard</h2>
      <ul>
        {users.map((u) => (
          <li key={u._id}>
            {u.name} — {u.email}
            <button onClick={() => deleteUser(u._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
