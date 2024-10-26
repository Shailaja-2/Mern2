import React, { useState} from 'react'

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

  return (
    <>
    {appdata.appname}  {logo}
    </>
  )
}

export default Navbar