import React, { useState } from 'react'

function Postapi() {
    const[name,SetName]=useState("")
    const[email,SetEmail]=useState(" ")
   
    function adduser(e){
        let user={name,email}
        e.preventDefault()
        fetch("http://localhost:3000/emp",{
            method:"post",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(user)
        }).then((resp)=>{
            resp.json().then((resp1)=>{
                console.log(resp1)
            })
        })
    }
  return (
    <div>
      <h1>Add New Data</h1>
      <form onSubmit={adduser}>
        <input type='text' placeholder='Enter Name' value={name}
        onChange={(e)=>SetName(e.target.value)}/><br/>
        <input type='email' placeholder='Enter Email Address' value={email}
        onChange={(e)=>SetEmail(e.target.value)}/><br/>
        <button>Add Emplyoee</button>
      </form>
    </div>
  )
}

export default Postapi
