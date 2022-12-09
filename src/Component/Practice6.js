import React from 'react'

function Practice6() {
    const[userName, setuserName] = React.useState("");
    const[userEmail, setuserEmail] = React.useState("");
    const[userNumber, setuserNumber] = React.useState("");
    const[userPassword, setuserPassword] = React.useState("");
    const[Submit, setSubmit] =React.useState(false)
    const handelSubmit=()=>{
        setSubmit(true);
    }
    
return (
    <>
    <div style={{display:"flex",alignContent:"center",marginTop:"2%",width:"500px" ,textAlign:"center",marginLeft:"25%",padding:"2px",justifyContent:"space-evenly" }}>
     <input type= "text" placeholder="Name" value={userName} onChange={(e)=>setuserName(e.target.value)} style={{height:"30px",width:"200px",marginTop:"4px",padding:"5px"}}></input>
     <input type= "email" placeholder="Email"value={userEmail} onChange={(e)=>setuserEmail(e.target.value)} style={{height:"30px",width:"200px",marginTop:"4px",padding:"5px"}}></input>
     <input type= "number" placeholder="phone number" value={userNumber} onChange={(e)=>setuserNumber(e.target.value)}style={{height:"30px",width:"200px",marginTop:"4px"}}></input>
     <input type= "password" placeholder="passward" value={userPassword} onChange={(e)=>setuserPassword(e.target.value)} style={{height:"30px",width:"200px",marginTop:"4px"}}></input>
     </div>
     <button onClick={handelSubmit} style={{padding:"5px",width:"60px",height:"30px",textAlign:"center",display:"flex",justifyContent:"center",alignContent:"center",marginLeft:"43%",marginTop:"1%"}}>Submit</button>
     {
        Submit===true ?
     <div style={{display:"flex",alignContent:"center",marginTop:"2%",width:"500px" ,textAlign:"center",marginLeft:"25%",padding:"2px",justifyContent:"space-evenly" }}> userName::{userName} userEmail::{userEmail} userNumber::{userNumber} userPassword:::{userPassword}</div>
     :""
     }
    </>
  )
}

export default Practice6
