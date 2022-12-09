import React from 'react'

const Practice5 = () => {
    const[Name,setName] =React.useState("")
    const[Button,setButton] =React.useState(false)
    const handelClick=(e)=>{
        setName(e.target.value);
    }
    const handelSubmit=()=>{
      setButton(true)
}
    return (
    <>
    {
      Button===true ?
    <h2>Name::{Name}</h2>
    : " "
    }
   Name::<input type="text" value={Name} onChange={(e)=>handelClick(e)} style={{height:"30px"}}></input>
   <button onClick={handelSubmit}>Submit</button>
    </>
  )
}
export default Practice5
