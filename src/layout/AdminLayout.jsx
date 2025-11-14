import React from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import AdminHome from '../pages/AdminHome'
import Header from '../components/header'
const AdminLayout = () => {
    let routes = <>
        <Route path='/adminhome' element={< AdminHome />} />
        <Route path='*'
            element={
                <Navigate to={"/"} />
            } />
    </>
    return (
        <>
        <Header/>
            <Routes>
                {routes}
            </Routes>
        </>
    )
}

export default AdminLayout
