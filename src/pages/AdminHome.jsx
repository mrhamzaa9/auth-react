import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Isauth";
import  { API_URL } from "../config";
import { MdOutlineDelete } from "react-icons/md";
import Swal from "sweetalert2";


export default function Adminhome() {

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);


  useEffect(() => {
    fetch(`${API_URL}/get`, { credentials: "include", method: "GET" })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);


 const deleteUser = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const res = await fetch(`${API_URL}/delete/${id}`, {
          method: "DELETE",
          credentials: "include",
        });

        if (!res.ok) throw new Error("Delete failed");

        // update UI
        setUsers((prev) => prev.filter((u) => u._id !== id));

        Swal.fire("Deleted!", "The user has been deleted.", "success");
      } catch (error) {
        Swal.fire("Error!", error.message, "error");
      }
    }
  });
};

 

  return (
     <div className="p-6">
      <h2 className="text-blue-500 text-3xl font-bold mb-6 text-center">Admin Dashboard</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((u) => (
          <div
            key={u._id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{u.name}</h3>
              <p className="text-gray-600">{u.email}</p>
            </div>
        <button
  onClick={() => deleteUser(u._id)}
  className="text-red-500 hover:text-red-700 p-1 rounded transition"
>
  <MdOutlineDelete size={24} />
</button>
           
          </div>
        ))}
      </div>
    </div>
  );
}
