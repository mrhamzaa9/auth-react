import React from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Adminhome from '../pages/AdminHome'
const AdminLayout = () => {
    let routes = <>
   
        <Route path='/adminhome' element={<Adminhome/>} />
    
        <Route path='*'
            element={
                <Navigate to={"/adminhome"} />
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

export default AdminLayout
