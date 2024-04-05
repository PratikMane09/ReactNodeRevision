import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  let params=useParams()
  const{name}=params
  return (
    <div>
     <h1> user {name} Logged  page</h1>
    </div>
  )
}

export default User

