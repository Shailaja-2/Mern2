import React from 'react'
import { NavLink } from "react-router-dom"

const Navbar = () => {

  const Linksdata=[
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'Product',
      path: '/products'
    },
    {
      title: 'Contact',
      path: '/contacts'
    }
  ]
  return (

    <>

       <div className='w-screen h-14 shadow-purple-500 shadow-md flex flex-row justify-center items-center'>
          <div className='w-[40%] flex justify-start items-center font-bold text-2x1 text-purple-500 '>
            Max Store
          </div>
            <div className='w-[40%] h-full flex justify-end items-center'>
              <div className='w-full h-full flex flex-row justify-end items-center gap-8 font-bold'>
                {/* <li>Home</li>
                <li>Product</li>
                <li>Contact</li> */}
                  {Linksdata.map((link, index) => (
                    <NavLink to={link.path} key={index} className='h-[65%] w-20 hover:bg-purple-500 hover:text-white flex justify-center items-center rounded-sm'>
                      {link.title}
                    </NavLink>
                  ))
                  }
              </div>
            </div>
       </div>
    </>
  )
}

export default Navbar