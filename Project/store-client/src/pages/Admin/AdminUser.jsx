import React, { useEffect, useRef, useState } from 'react'

import { Loader2, Pencil,Plus, Trash, TriangleAlert, Users, X } from 'lucide-react'
import { getUsers, addUser, deleteUser } from '../../api/api'
import { toast } from 'sonner'
import AdminPageheader from '../../components/Admin/AdminPageHeader'


const AdminUsers = () => {
  const [users, setUsers] = useState(null)
  const [loading, setLoading] = useState(true)

  const [showAdd, setShowAdd] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const nameRef = useRef('')
  const emailRef = useRef('')
  const phoneRef = useRef(0)

  const fetchData = async () => {
    try {
      const res = await getUsers()
      if (res.status === 200) {
        console.log(res.data)
        setUsers(res.data)
      }

    } catch (error) {
      console.error(error)
    }
    finally {
      setLoading(false)
    }
  }

  const handleAdd = async (e) => {
    e.preventDefault()
    const product = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      
    }
    try {
      const response = await addUser(Users)
      if (response.status === 200) {
        console.log("User Added")
        setShowAdd(false)
        fetchData()
      }

    } catch (error) {
      console.error(error)
    }

  }
  const editHelper = () => {
    setShowEdit(true)
  }

  const handleDelete = async (id) => {
    try {
      const response = await deleteUser(id)
      if(response.status === 200) {
        console.log("User Deleted!")
        toast.success("User Delete")
        fetchData()
      }
    } catch (error) {
       toast.error("Error While adding")
       console.error(error)
    }

  }

  useEffect(() => {
    fetchData()
  }, [])
  
  if (loading) {
    return (
      <>
        <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
          <Loader2 className='text-purple-500 h-14 w-14 animate-spin' />
        </div>
      </>
    )
  }
  if (!users || users.length === 0) {
    return (
      <>
        <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
          <TriangleAlert className='text-orange-400 h-12 w-12' />
          <p>
            No Users Available !
          </p>
        </div>
      </>
    )
  }
  return (
    <div className='w-full flex flex-col justify-start items-start'>
      <div className='w-full flex flex-row justify-between items-center my-4 shadow-md rounded-md p-1 border'>
        <AdminPageheader title='Users' />
      </div>
      <table className='w-full h-full border-collapse border shadow-lg rounded-md'>
        <thead className='shadow-md font-bold text-purple-500 text-left rounded-md'>
          <tr>
            <th className='p-6'>ID</th>
            <th className='p-6'>Name</th>
            <th className='p-6'>Email</th>
            <th className='p-6'>Phone</th>
        
            
            <th className='p-6'>Actions</th>
          </tr>
        </thead>
        <tbody>

          {
            users.map((user, index) => (
              <tr key={index}>
                <td className='p-4'>{user._id}</td>
                <td className='p-4'>{user.name}</td>
                <td className='p-4'>{user.email}</td>
                <td className='p-4'>{user.phone} </td>
                
                <td className='p-4 flex h-full w-full flex-row justify-start items-center gap-4'>
                  <button className='h-15 w-15 border-blue-500 border-2 p-1 rounded-md text-blue-500 shadow-md
               hover:bg-blue-500 hover:text-white hover:shadow-blue-500'>
                    <Pencil />
                  </button>
                  <button className='h-15 w-15 border-red-500 border-2 p-1 rounded-md text-red-500 shadow-md
               hover:bg-red-500 hover:text-white hover:shadow-red-500' onClick={()=>{handleDelete(product._id) }}>
                    <Trash />
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

      {showAdd && (
        <>
          <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
            <div className='h-[85%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
              <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
                <div className="h-[20%] w-[80%] flex flex-row justify-center items-center">
                  <h1 className='w-1/2 text-left text-xl my-6 font-bold text-green-500'>Add Users</h1>
                  <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowAdd(!showAdd) }}>
                    <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
                  </div>
                </div>
                <form className='h-[70%] w-[80%] flex flex-col justify-center items-center gap-8' onSubmit={handleAdd}>
                  <input ref={nameRef} type="text" name="" id="name" placeholder='Name' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
                  <input ref={emailRef} type="text" name="" id="email" placeholder='email' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
                  <input ref={phoneRef} type="number" name="" id="phone" placeholder='Phone' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-purple-400 rounded-sm' required />
                
                  <button type="submit" className="w-full h-[3rem]  shadow-lg shadow-gray-400 hover:shadow-green-400 bg-green-500 text-white rounded-sm outline-none">Add</button>
                </form>
              </div>
            </div>
          </div>
        </>
      )

      }

    </div>
  )
}

export default AdminUsers