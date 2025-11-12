import React, { useEffect, useState } from "react";


export default function AdminHome() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/user/`, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const deleteUser = async (id) => {
    await fetch(`http://localhost:3000/user/delete/${id}`, { method: "DELETE" });
    setUsers(users.filter((u) => u._id !== id));
  };

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
    </div>
  );
}
