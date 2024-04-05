import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Signout() {
    const navigate=useNavigate()
    useEffect(()=>{
        localStorage.clear()
        navigate('/Signin')
    },[])
    
  return (
    <div>
     
    </div>
  )
}

export default Signout
