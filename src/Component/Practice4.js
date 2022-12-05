import { OnDeviceTraining } from '@mui/icons-material'
import React from 'react'

export default function Practice4() {
    const[On, setOn] = React.useState("")
    

    const handelOnClick =()=>{
     setOn("This is button One")
    }
    const handelOffClick=()=>{
        setOn("")
    }

  return (
    <>
    <div>{On}</div>
      <button onClick={handelOnClick}>ON</button>
      <button onClick={handelOffClick}>OFF</button>
    </>
  )
}
