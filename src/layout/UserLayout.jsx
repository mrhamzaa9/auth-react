import React from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Userhome from '../pages/Userhome'
import Header from '../components/header'

const UserLayout = () => {
    let routes = <>
        <Route path='/userhome' element={< Userhome />} />
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

export default UserLayout