import React, { useEffect, useState } from 'react';''
import "./first.css"
const Another = () => {
    const [value,setValue]=useState(1)
    console.log(value);
    const handle=()=>{
        const newValue =value+1
        setValue(newValue)
        
    }
    const deletHandle=()=>{
        const newValue =value-1
        if(newValue<0){
            alert("ar jabe na")
            return
        }
        setValue(newValue)
        
    }
    const tayebastyle={
        backgroundColor:"blue",
        padding:"25px",
        color:"white",
        border:"1px solid red",
        borderRadius:"20px"
    }
    // useEffect(()=>{
    //     fetch("https://randomuser.me/api/?results=50")
    //     .then(res=>res.json())
    //     .then(data=>console.log(data))
    // },[])
    return (
        <div>
            <h1 style={{border:"2px solid ", padding:"20px", borderRadius:"10px"}}>Hi this is second</h1>
            <h2 style={tayebastyle}>hi this is from another component</h2>
            <p className='btn'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, error.</p><br></br>
           
<button class="btn btn-neutral" onClick={handle}>Added</button>
<button class="btn btn-primary" onClick={deletHandle}>Delete</button>
<button class="btn btn-neutral" onClick={()=>setValue(value+1)}>Added</button>
<button class="btn btn-primary" onClick={()=>setValue(value-1)}>Delete</button>



<p>{value}</p>
        </div>
    );
};

export default Another;