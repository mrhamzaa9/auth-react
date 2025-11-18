import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/Auth";
import PublicRoute from "./routes/PublicRoute";
import AdminLayout from "./layout/AdminLayout";
import UserLayout from "./layout/UserLayout";

import { Spinner } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Foter from "./components/Foter"
function App() {
  const { Authenticated, user, loading } = useAuth();
  const role = user?.role || localStorage.getItem("role");



 
  useEffect(() => {   
    console.log("Authenticated", Authenticated, "role", user?.role)
  }, [Authenticated, user])
  // if (!isAuthenticated) {
  //   return <PublicRoute />;
  // }
 if (loading) return <div><Spinner/></div>;
  return (
    <>
      <Navbar/>
     <div className="min-h-[80vh]">
      {Authenticated ?(
        role === "admin" ? (
          <>
        <Routes>
            <Route path="/*" element={<AdminLayout />} />
            </Routes>
          </>
        ) : (
          <>
            <Routes>
            <Route path="/*" element={<UserLayout />} />
            </Routes>
          </>
        )) : (<PublicRoute />)}
      {/* // <Route path="*" element={<Navigate to="/" />} /> */}
      </div>
     <Foter />
    </>
  );
}

export default App;
