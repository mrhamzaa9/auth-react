import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'

import AdminHome from '../pages/AdminHome'
import Userhome from '../pages/Userhome'


const AdminLayout = () => {
    let routes = <>
        <Route path='/adminhome' element={< AdminHome />} />
        <Route path='/userhome' element={< Userhome />} />
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
