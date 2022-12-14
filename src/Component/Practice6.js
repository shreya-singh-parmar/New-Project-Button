import React from 'react'

function Practice6() {
    const[userRegistration, setuserRegistration] = React.useState({
        username:"",
        email:"",
        number:"",
        password:""
    });
    const[Record,setRecord]=React.useState([])
    const handelInput=(e)=>{
        const name = e.target.name;
       const value = e.target.value;
       console.log(name,value);
       setuserRegistration({...userRegistration, [name]:value})
    }
    const handelSubmit=(e)=>{
        e.preventDefault();
        const newRecord=({...userRegistration})
        setRecord([...Record, newRecord]);
        setuserRegistration({username:"", email:"", number:"", password:"" });
    }
return (
    <>
    <form action="" onSubmit={handelSubmit}>
    <div style={{display:"flex",alignContent:"center",
    marginTop:"2%",width:"500px" ,textAlign:"center",marginLeft:"25%",
    padding:"2px",justifyContent:"space-evenly" }}>
     <input type= "text" placeholder="Name" name="username" id="username" 
     value={userRegistration.username} onChange={handelInput}
      style={{height:"30px",width:"200px",marginTop:"4px",padding:"5px"}}></input>
     <input type= "email" placeholder="Email" name="email" id="email" 
      value={userRegistration.email} onChange={handelInput} 
      style={{height:"30px",width:"200px",marginTop:"4px",padding:"5px"}}></input>
     <input type= "number" placeholder="phone number" name="number" id="number" 
     value={userRegistration.number} onChange={handelInput}
     style={{height:"30px",width:"200px",marginTop:"4px"}}></input>
     <input type= "password" placeholder="passward" name="password" id="password" 
     value={userRegistration.password} onChange={handelInput} style={{height:"30px",width:"200px",marginTop:"4px"}}>
    </input>
    <input type= "password" placeholder="passward" name="password" id="password" 
     value={userRegistration.password} onChange={handelInput} style={{height:"30px",width:"200px",marginTop:"4px"}}>
    </input>
     </div>
     <button  style={{padding:"5px",width:"60px",height:"30px",textAlign:"center",
     display:"flex",justifyContent:"center",alignContent:"center",marginLeft:"43%",marginTop:"1%"}}>Submit</button> </form>545
     {
        Record.map((val)=>{
            return(
            <>
            <h2>{val.username}</h2>
            <h2>{val.email}</h2>
            <h2>{val.number}</h2>
            <h2>{val.password}</h2>
            </>
            )
        })
     }
    
    </>
  )
}

export default Practice6
