
import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Userhome from '../pages/Userhome'
import Sign from '../pages/Sign'



const UserLayout = () => {
    let routes = <>
        <Route path='/userhome' element={< Userhome/>} /> 
       
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