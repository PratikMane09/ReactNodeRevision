import React, {useState, useEffect } from 'react'

function Getapi() {
  const[name,SetName]=useState("")
  const[email,SetEmail]=useState(" ")
  const[id,SetId]=useState(" ")
  const[data,SetData]=useState([])
  
    useEffect(()=>{
      getemp()
    },[])
    function selectuser(id)
    {
      const item=data[id-1]
      SetName(item.name)
      SetEmail(item.email)
      SetId(item.id)
    }
    function updateuser()
    {
      let user={name,email,id}
      fetch(`http://localhost:3000/emp/${user.id}`,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(user)
    }).then((resp)=>{
        resp.json().then((resp1)=>{
            console.log(resp1)
            getemp()
        })
    })
    }
    function deleteuser(id){
     
      fetch(`http://localhost:3000/emp/${id}`,{
         method:"delete",
      }).then((res1)=>{
        res1.json().then((res2)=>{
          console.log(res2)
          getemp()
        })
      })

    }
    function getemp()
    {
      fetch("http://localhost:3000/emp").then((result1)=>{
        result1.json().then((result2)=>{
            console.log(result2)
            SetData(result2)
            SetName(result2[0].name)
            SetEmail(result2[0].email)
            SetId(result2[0].id)
            

        })
    })
    }
  return (
    <div>
      <table border="2">
        <thead>
            <tr><th>ID</th><th>NAME</th><th>EMAIL</th><th>Operations</th></tr>
        </thead>
        <tbody>
            {
                data.map((item,index)=>{
                  return(
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                      
                        <td><button onClick={()=>selectuser(item.id)}>Update</button></td>
                        <td><button onClick={()=>deleteuser(item.id)}>Delete</button></td>
                    </tr>
                  )
                })
            }
        </tbody>

      </table>
      <form onSubmit={updateuser}>
        <h1>Update Employee</h1>
      <input type='text' placeholder='Enter Name' value={name}
        onChange={(e)=>SetName(e.target.value)}/><br/>
        <input type='email' placeholder='Enter Email Address' value={email}
        onChange={(e)=>SetEmail(e.target.value)}/><br/>
        <button>Update</button>
      </form>
    </div>
  )
}

export default Getapi
