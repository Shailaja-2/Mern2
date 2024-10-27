import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/products' element={<Product />}/>
                <Route path='/contacts' element={<Contact />}/>
                
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App