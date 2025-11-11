import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Sign() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    async function handleSubmit(e) {
        // e.preventDefault();
        try {
            const res = await fetch("http://localhost:3000/user/sign", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    password: form.password,
                    age: form.age,
                }),
            });

            if (!res.ok) {
                throw new Error(`HTTP error: ${res.status}`);
            }

            const data = await res.json();
            console.log("Response:", data);

            navigate("/login");
        } catch (error) {
            console.error("Fetch error:", error);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>

                <input
                    name="name"
                    placeholder="Name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    required
                    onChange={handleChange}
                    className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    name="password"
                    placeholder="Password"
                    type="password"
                    required
                    value={form.password}
                    onChange={handleChange}
                    className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    name="age"
                    placeholder="Age"
                    required
                    value={form.age}
                    onChange={handleChange}
                    className="w-full p-3 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition-colors"
                >
                    Register
                </button>
            </form>
        </div>
    );
}


