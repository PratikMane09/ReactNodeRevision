import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
function Todoinput(props) 
{
   const [inputtask,setInputtask]=useState("")
   return (
     <div className='mt-5'>
       <input type='text' value={inputtask} placeholder='Enter task' onChange={(e)=>setInputtask(e.target.value)}/>
        <Button variant="primary" className='ms-4 p-2 fs-5 rounded' onClick={()=>{props.addtask(inputtask) }}>Add Task</Button>
        </div>
        )
      }
      export default Todoinput