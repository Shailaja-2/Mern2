import React, { useEffect, useState} from 'react'

const Navbar = ({appdata,logo}) => {
    
    const [numberstate, setNumberstate]=useState(0)
    const [stringstate, setStringstate]=useState("a")
    const [arraystate, setArraystate]=useState([
        "shailu", true,21
    ])
    //const[data, setData]=useState(0)
    console.log(numberstate)
    console.log(stringstate)
    console.log(arraystate)
    
    const [count, setCount]=useState(0);
    useEffect(()=>{
      //alert('effect rendered')
      console.log('effect rendered')
      console.log('count is '+count)
    },[count])

  return (
    <>
      {appdata.appname}  {logo}
      <button className='w-[6rem] h-[4rem] bg-blue-500 text-white' onClick={() => {setCount(count + 1)}} >
        Count {count}
    </button>
    </>
  )
}

export default Navbar