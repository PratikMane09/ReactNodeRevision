import React, {useState } from 'react'
 
function Empform(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [addr,setAddr]=useState("")
    const [stte,setst]=useState("")
    const[radio1,setRadio1]=useState(false)
    const[radio2,setRadio2]=useState(false)
    const[check1,setCheck1]=useState(false)
    const[check2,setCheck2]=useState(false)
    const[check3,setCheck3]=useState(false)
   

    function empinfo(e)
    {
        
      e.preventDefault()
        console.log(name,email,addr,stte,radio1,radio2,check1,check2,check3)
    }



    return (
      <div>
        <form onSubmit={empinfo}>
            <label>Name:</label>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/><br/>
             <label>Email:</label>
            <input type='email'value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
             <label>Address:</label>
             <textarea rows={5} cols={30} value={addr} onChange={(e)=>setAddr(e.target.value)}></textarea><br/>
             
             <label>State:</label>
             <select value={stte} onChange={(e)=>setst(e.target.value)}>
                <option>Maharshtra</option>
                <option>A.P</option>
                <option>M.P</option>
                <option >Gujrat</option>
             </select><br/>
              <label>Gender</label>
            <input type='radio' name='r1' value={radio1} onChange={(e)=>setRadio1(e.target.value)}/>Male
            <input type='radio' name='r2' value={radio2} onChange={(e)=>setRadio2(e.target.value)}/>Female<br/><br/>
             <label>Hobbies:</label>
            <input type='checkbox' value={check1} onChange={(e)=>setCheck1(e.target.value)}/>Reading
            <input type='checkbox'value={check2} onChange={(e)=>setCheck2(e.target.value)}/>Playing
            <input type='checkbox'value={check3} onChange={(e)=>setCheck3(e.target.value)}/>Listening music<br/>
            <input type='submit' value='Submit'/>
        </form>
      </div>
    )
  
    }
    export default Empform
