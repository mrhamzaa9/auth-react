import React, { useEffect, useState } from "react";


export default function Userhome() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/user/get/", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>User Dashboard</h2>
      {users.map((u) => (
        <p key={u._id}>{u.name} — {u.email}</p>
      ))}
    </div>
  );
}
