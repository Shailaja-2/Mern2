import { ChartBar, MonitorCheck, ShoppingCart, User } from 'lucide-react'
import React from 'react'

const AdminDashboardHomeCards = () => {
  return (
    <div className=' w-full flex flex-row justify-center items-center gap-6' >
        <div className=' w-1/4 h-[10vh] flex flex-row justify-center items-center px-2 shadow-md rounded-md hover:shadow-purple-300 hover:text-purple-400 ' >
        <div className='w-[70%] h-full fex flex-col justify-center items-start px-4'>
            <p className='text-3xl font-bold'>
                100
            </p>
            <p className='text-sm font-semibold px-1'>
                Users
            </p>
        </div >
        <div className='w-[70%] h-full fex justify-center items-center'>
            <User className='w-9 h-9' />
        </div>
        </div>
        
        <div className=' w-1/4 h-[10vh] flex flex-row justify-center items-center px-2 shadow-md rounded-md hover:shadow-purple-300 hover:text-purple-400 ' >
        <div className='w-[70%] h-full fex flex-col justify-center items-start px-4'>
            <p className='text-3xl font-bold'>
                100
            </p>
            <p className='text-sm font-semibold px-1'>
                Products
            </p>
        </div >
        <div className='w-[70%] h-full fex justify-center items-center'>
            <MonitorCheck className='w-9 h-9' />
        </div>
        </div>
        <div className=' w-1/4 h-[10vh] flex flex-row justify-center items-center px-2 shadow-md rounded-md hover:shadow-purple-300 hover:text-purple-400 ' >
        <div className='w-[70%] h-full fex flex-col justify-center items-start px-4'>
            <p className='text-3xl font-bold'>
                100
            </p>
            <p className='text-sm font-semibold px-1'>
                Orders
            </p>
        </div >
        <div className='w-[70%] h-full fex justify-center items-center'>
        {/* <ChartBar className='w-9 h-9' /> */}
            <ShoppingCart className='w-9 h-9' />
        </div>
        </div>

    </div>
  )
}

export default AdminDashboardHomeCards