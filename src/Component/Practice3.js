import React from 'react'
import PracticeCards from './PracticeCards';
const Practice3 = () => {
    const [Data, setData] = React.useState([
        {
            Name:"Harshit",
            Value:"455"
        },
        {
            Name:"Shreya",
            Value:"88"
        },
        {
            Name:"Ratan",
            Value:"99"
        }
    ]);
   const[Search,setSearch]=React.useState("")
   const[Button , setButton] = React.useState(false)
const handelButton =()=>{
    setButton(true);
}
   const searchItem = Data.filter((item)=>{
   if(Search==="" )
    {
        return item
    }
    else if(item.Name.toLowerCase().includes(Search.toLowerCase())){
        return item;
    }
   })
   
console.log("Searchitems",searchItem);
    return (
        <>
        <input type="text" placeholder="Search..." value={Search} onChange={(e)=>setSearch(e.target.value)}/>
       <button onClick={handelButton}>Submit</button>
       {
        Button===true ?
           <div>
            {
            searchItem.map((val)=>
            (
                    <>
                    <h2><PracticeCards DisplayObj ={val}/></h2>
                    </>
            ))
            } 
           </div> : "" 
}
        </>
    )
}

export default Practice3

