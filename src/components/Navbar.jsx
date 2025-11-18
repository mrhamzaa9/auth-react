import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/Auth";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link to="/home" className="text-2xl font-bold">
          MyApp
        </Link>

        {/* Right Links */}
        <div className="flex items-center gap-6">

          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "font-semibold underline" : ""
            }
          >
            Home
          </NavLink>

          {/* Only show these when NOT logged in */}
          {!user && (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/sign">Signup</NavLink>
            </>
          )}

          {/* Logged-in View */}
          {user && (
            <>
              {user.role === "admin" && (
                <>
                  <NavLink to="/adminhome">Admin</NavLink>
                </>
              )}

              {user.role === "user" && (
                <>
                  <NavLink to="/userhome">User</NavLink>
                </>
              )}

              <button
                onClick={logout}
                className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          )}

        </div>
      </div>
    </nav>
  );
}
