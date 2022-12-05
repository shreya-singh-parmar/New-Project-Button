import { DataArrayOutlined } from '@mui/icons-material';
import React from 'react'
import PracticeCard from './PracticeCard';

function Practice3() {
    const [Data, setData] = React.useState([
        {
            name: "Harshit",
            value: "100"
        },
        {
            name: "shreya",
            value: "50"
        },
        {
            name: "ratan",
            value: "40"
        }
    ]);
    const [On, setOn] = React.useState()


    const handelOnClick = () => {
        setOn(Data)
    }
    const handelOffClick = () => {
        setOn("")
    }
    return (
        <>
            <div>{On}</div>
            <button onClick={handelOnClick}>ON</button>
            <button onClick={handelOffClick}>OFF</button>

            '<div>
                {
                    Data.map((val) => (
                        <>
                            <PracticeCard DisplayObj={val} />
                        </>
                    ))
                }
            </div>

        </>

    )
}

export default Practice3

