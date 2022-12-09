import React from 'react'

function PracticeCards(props) {
    return (
        <>
            <div style={{ width: "400px", height: "300px", borderRadius: "10px", border: "2px solid red", marginTop: "2px" }}>
                <br />
                <h2>Name::{props.DisplayObj.Name}</h2>
                <h2>Value::{props.DisplayObj.Value}</h2>
            </div>
        </>
    )
}

export default PracticeCards
