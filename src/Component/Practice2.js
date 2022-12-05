import React from 'react'
import Button from '@mui/material/Button';
const Practice2 = () => {
    const [Increment, setIncrement] = React.useState(3);
    const handleIncrement = () => {
        if(Increment===3 )
        {
            setIncrement(Increment+1);
        }
        else
        setIncrement(Increment-1)
    }
   
    return (
        <>
            <div>
                <h2 style={{ textAlign: 'center', }}>{Increment}</h2>

            </div>
            <div style={{
                display: 'flex',
                height: '250px',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                width: '400px',
                textAlign: 'center',
                margin: '6%',
                marginLeft: '30%'
            }}>
                <Button variant="contained" color="success" onClick={handleIncrement}>
                    Increment
                </Button>
               
            </div>
        </>
    )
}

export default Practice2
