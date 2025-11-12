import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch(`http://localhost:3000/user/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
            credentials: "include",
        });

        const data = await res.json();

        if (res.ok) {
            const { token } = data;
            const decoded = JSON.parse(atob(token.split(".")[1]));
            localStorage.setItem("token", token);
            localStorage.setItem("role", decoded.role);
            localStorage.setItem("userId", decoded.id);

            if (decoded.role === "admin") navigate("/adminhome");
            else navigate("/userhome");
        } else {
            alert(data.message || "Login failed");
        }
        
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input
                    className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" name="email" placeholder="Email" onChange={handleChange} />
                <input
                    className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="password"
                    placeholder="Password"
                    type="password"
                    onChange={handleChange}
                />
                <button className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition-colors" type="submit">Login</button>
                <Link to='/sign' className="text-blue-500">Sign UP</Link>
            </form>
        </div>
    );
}
