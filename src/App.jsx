import React from "react"
import UserLayout from "./layout/UserLayout"
import ProtectedRoute from "./routes/ProtectedRoute"
import AdminLayout from "./layout/AdminLayout"
import PublicRoute from "./routes/Publicroute"

function App() {
  return (
    <>

        <PublicRoute/>
      {/* <ProtectedRoute/> */}
      {/* <UserLayout/>
   <AdminLayout/>  */}
    </>
  )
}

export default App
