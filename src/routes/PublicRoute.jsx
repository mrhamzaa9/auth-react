import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Sign from '../pages/Sign'
import Login from '../pages/Login'
import Main from '../pages/Main'


function PublicRoute() {
  
  const routes = <>

    <Route path="/login" element={<Login />} />
    <Route path="/sign" element={<Sign />} />

    <Route path='*'
      element={ <Main/>
        // <Navigate to={""} />
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

export default PublicRoute

