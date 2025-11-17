import React from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Userhome from '../pages/Userhome'
import Header from '../components/header'
import Home from '../pages/Home'

const UserLayout = () => {
    let routes = <>
        <Route path='/userhome' element={< Userhome />} />
        <Route path='/home' element={< Home />} />

        <Route path='*'
            element={
                <Navigate to={"/"} replace />
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

export default UserLayout