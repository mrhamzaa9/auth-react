
import React from 'react'

import AdminHome from '../pages/AdminHome'
import Userhome from '../pages/Userhome'
import { Route, Routes } from 'react-router-dom'

function ProtectedRoute () {
  const routes = <>
      <Route path="/adminhome" element={<AdminHome />} />
      <Route path="/userhome" element={<Userhome />} />
        <Route path='*'
            element={
                <Navigate to={"/"} />
            } />
    </>
  return (
    <>

      <Routes>
        {routes}
      </Routes>

    </>
  )
}

export default ProtectedRoute

