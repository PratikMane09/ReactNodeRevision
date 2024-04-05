import React, { useReducer,useState } from 'react'
const initialstate=[{id:Date.now(),name:"AAA",email:"aa@gmail.com"},]


function reducer(state,action)
{
  switch(action.type)
  {
    case "add":
      return [...state,action.payload]
    case "delete":
        return state.filter((user)=>{
            return user.id!== action.payload.id
        })
    default:
      return
  }
}



function Person() {
    const[state,dispatch]=useReducer(reducer,initialstate)
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    function adduser(e)
    {
      e.preventDefault()
      setEmail("")
      setName("")
      const user={
        id:Date.now(),
        name,
        email
      }
      dispatch({type:"add",payload:user})
    }
  return (
    <div>
        <form onSubmit={adduser}>
            <input type='text' placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}/><br/>
            <input type='email' placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
            <button >add user</button>
        </form>
        {
            state.map((user)=>{
                return(
                    <li>
                        <h3>{user.name}</h3>
                        <h3>{user.email}</h3>
                        <button onClick={()=>dispatch({type:"delete",payload:{id:user.id}})}>Delete</button>
                    </li>
                )
            })
        }
    </div>
  )
}

export default Person
