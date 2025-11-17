import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/Isauth";
import PublicRoute from "./routes/PublicRoute";
import AdminLayout from "./layout/AdminLayout";
import UserLayout from "./layout/UserLayout";
import Header from "./components/header";
import Footer from "./components/footer";
import { Spinner } from "react-bootstrap";

function App() {
  const { isAuthenticated, user, loading } = useAuth();
  const role = user?.role || localStorage.getItem("role");



 
  useEffect(() => {   
    console.log("isAuthenticated", isAuthenticated, "role", user?.role)
  }, [isAuthenticated, user])
  // if (!isAuthenticated) {
  //   return <PublicRoute />;
  // }
 if (loading) return <div><Spinner/></div>;
  return (
    <>
      <Header />
     <div className="min-h-[80vh]">
      {isAuthenticated ?(
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
     <Footer />
    </>
  );
}

export default App;
