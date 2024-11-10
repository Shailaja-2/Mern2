import React from 'react'

const AdminPageheader = ({name}) => {
  return (
    <div className='h-10 w-full flex justify-start items-center font-bold text-2xl text-purple-500 '>
        {name}
    </div>
  )
}

export default AdminPageheader