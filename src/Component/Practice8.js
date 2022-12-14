import React from 'react'

const Practice8 = () => {
  const [Input, setInput] = React.useState()
  const [Result, setResult] = React.useState([])
  const handelChangeSubmit = () => {
    setResult(...Result, Input)
  }
  setInput(" ");
}
const deleteItem = (id) => {
  const updateditem = Result.filter((elem, ind) => {
    return id!== ind
  })
}
return (
  <>
    <h2>TODO LIST</h2>
    <br />
    <input type="text" placeholder="Add to cart" value={Input} onChange={(e) => setInput(e.target.value)}
      style={{ width: "380px", height: "30px", marginLeft: "15px", marginTop: "2px" }} >
    </input>
    <button onClick={handelChangeSubmit} style={{ padding: "4px", marginLeft: "2px" }}>Add</button>
    <br />
    <br />
    <ol>
      {
        Result.map((val, ind) => {
          return (
            <div className='eachitem' key={ind}>
              <li> {val} <span><button onClick={() => deleteItem(ind)}>Dlt</button></span></li>
            </div>
            )
        }
        )
      }
    </ol>
  </>
)
    
export default Practice8
