import React from 'react'
import Button from '@mui/material/Button';
function Practice() {
    const [buttonOne, setbuttonOne] = React.useState("true")

    const handelbuttonOne = () => {
       setbuttonOne(!buttonOne)
    }
   return (
        <>
        <div style={{
                display: 'flex',
                height: '300px',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                width: '400px',
                textAlign: 'center',
                margin: '6%',
                marginLeft: '30%',
                }}>
                <div>{(buttonOne ? (
                 <>
                 <h2>hello😄</h2>
                  </>
                  )
                 :'')}</div>
           <button onClick= {handelbuttonOne} className = {(buttonOne ? 'toggle-close ': 'toggle-open ')}>
                 {buttonOne ? 'Open' : 'Close'}   
                </button>
            </div>
        </>
    )
}
export default Practice
