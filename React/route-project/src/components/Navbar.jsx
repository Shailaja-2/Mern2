import React from 'react'

const Navbar = () => {

  const Linksdata=[
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'Product',
      path: '/'
    },
    {
      title: 'Contact',
      path: '/'
    },
      ]
  return (
    <>
       <div className='w-screen h-14 shadow-purple-500 shadow-md flex flex-row justify-center items-center'>
          <div className='w-[40%] flex justify-start items-center font-bold text-2x1 text-purple-500 '>
            Max Store
          </div>
            <div className='w-[40%] flex justify-end items-center'>
              <div className='w-full flex flex-row justify-end items-center gap-8 font-semibold'>
                {/* <li>Home</li>
                <li>Product</li>
                <li>Contact</li> */}
                
              </div>
            </div>
       </div>
    </>
  )
}

export default Navbar