import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sign from '../pages/Sign'
import Login from '../pages/Login'

function PublicRoute() {
   const routes
   =<>
       
       <Route path="/sign" element={<Sign />} />
        <Route path="/login" element={<Login />} />
      </>
  return (
    <>
 
      <Routes>
        {routes}
      </Routes>

    </>
  )
}

export default PublicRoute

