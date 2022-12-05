import React from 'react'

export default function (props) {
  return (
    <div style={{width:"400px", height:"250px",border:"2px solid red",marginTop:"1%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:'column'}}>
    <h1>This Is cardData</h1>
    <br/>
      <h2>Name:{props.DisplayObj.name}</h2>
      <h2>Value:{props.DisplayObj.value}</h2>
    </div>
  )
}
