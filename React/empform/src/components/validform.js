import React, { useState } from 'react'

function Validform() {
    const[user,setUser]=useState("")
    const[Password,setPassword]=useState("")
    const[userrr,setUserrr]=useState(false)
    const[Passworderr,setPassworderr]=useState(false)

    function logininfo()
    {
        console.log(user,Password)
        if(user.length<4 || user.length>8 || Password.length<8 || Password.length>12)
        {
            alert("Enter Valid information")
        }
        else{
            alert("Login Succesful")
        }
    }
    function uservalid(e)
    {
        let uname=e.target.value
        if(uname.length<4 || uname.length>8)
        {
           setUserrr(true)
        }
        else{
            setUserrr(false)
        }
        setUser(uname)
    }
    function passwordvalid(e)
    {
        let pass=e.target.value
        if(pass.length<4 || pass.length>12)
        {
           setPassworderr(true)
        }
        else{
            setPassworderr(false)
        }
        setPassword(pass)
    }
   
  return (
    <div>
        <form onSubmit={logininfo}>
      <input type='text' placeholder='Enter Username'value={user} onChange={(e)=>uservalid(e)}/>{user.length==0?<span>Please Enter Username</span>:null}<br/>
      <input type='password' placeholder='Enter Password'value={Password} onChange={(e)=>passwordvalid(e)}/>{Password.length==0?<span>Please Enter Password</span>:null}<br/>
      <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Validform
