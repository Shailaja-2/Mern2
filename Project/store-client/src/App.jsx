//import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import Products from './pages/Product'
import WebLayout from './layout/WebLayout'

import AdminDashboard from './pages/Admin/AdminDashboard'
import AdminProducts from './pages/Admin/AdminProduct'
import AdminUsers from './pages/Admin/AdminUser'
import AdminOrders from './pages/Admin/AdminOrders'
import Adminsettings from './pages/Admin/AdminSetting'
import AdminLayout from './layout/adminLayout'
import Contacts from './pages/Contacts'
import Twclasses from './pages/Twclasses'


// import {} from 'react'
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<WebLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/products' element={<Products />} />
                        <Route path='/contacts' element={<Contacts />} />
                        <Route path='/Temp' element={<Twclasses />} />
                    </Route>
                    <Route element={<AdminLayout />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard/>} />
                        <Route path='/admin/products' element={<AdminProducts />} />
                        <Route path='/admin/users' element={<AdminUsers />} />
                        <Route path='/admin/settings' element={<Adminsettings />} />
                        <Route path='/admin/orders' element={<AdminOrders />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App