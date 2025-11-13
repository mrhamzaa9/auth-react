import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/isauth";
import PublicRoute from "./routes/PublicRoute";
import AdminLayout from "./layout/AdminLayout";
import UserLayout from "./layout/UserLayout";

function App() {
  const { isAuthenticated, user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!isAuthenticated) {
    return <PublicRoute />;
  }

  const role = user?.role || localStorage.getItem("role");

  return (
    <Routes>
      {role === "admin" ? (
        <Route path="/*" element={<AdminLayout />} />
      ) : (
        <Route path="/*" element={<UserLayout />} />
      )}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
