// import React from 'react'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';

// function Todo() {
//   const [userName, setuserName] = React.useState("")
//   const [userEmail, setuserEmail] = React.useState("")
//   const [userPassword, setuserPassword] = React.useState("")
//   const handelchangeName = (e) => {
//     setuserName(e.target.value);
//   }
//   const handelchangeEmail = (e) => {
//     setuserEmail(e.target.value);
//   }
//   const handelchangePassword = (e) => {
//     setuserPassword(e.target.value);
//   }
//   const handelSubmit = () => {
//     console.log("userName:::",userName);
//     console.log("userEmail:::",userEmail);
//     console.log("userPassword:::",userPassword);
//  }
//  const handelReset =()=>{
//   setuserName("");
//   setuserEmail("");
//   setuserPassword("");
//  }
//  return (
//     <>
//       <div style={{
//         display: 'flex',
//         height: '250px',
//         justifyContent: 'space-evenly',
//         alignItems: 'center',
//       }}>
//         <TextField label="Name" variant="outlined" value={userName} onChange={(e) => handelchangeName(e)} />
//         <TextField label="Email" variant="outlined" value={userEmail} onChange={(e) => handelchangeEmail(e)} />
//         <TextField label="Password" type="password" value={userPassword} onChange={(e) => handelchangePassword(e)} />
//         <Button variant="contained" color="success" onClick={handelSubmit}>
//           Submit
//         </Button>
//         <Button variant="contained" color="error" onClick={handelReset}>
//           Reset
//         </Button>
//       </div>
//     </>
//   )
// }
// export default Todo;






import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Todo() {

  const userName = React.useRef();
  const userEmail = React.useRef();
  const userPassword = React.useRef();


  const handelSubmit = () => {
    console.log("userName:::", userName.current.value);
    console.log("userEmail:::", userEmail.current.value);
    console.log("userPassword:::", userPassword.current.value);
  }
  return (
    <>
      <div style={{
        display: 'flex',
        height: '250px',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
        <TextField label="Name" variant="outlined" ref={userName} />
        <TextField label="Email" variant="outlined" ref={userEmail} />
        <TextField label="Password" type="password" ref={userPassword} />
        <Button variant="contained" color="success" onClick={handelSubmit}>
          Submit
        </Button>
        {/* <Button variant="contained" color="error" onClick={handelReset}>
          Reset
        </Button> */}
      </div>
    </>
  )
}
export default Todo;