import React ,{useCallback,memo}from 'react'



function Profile() {
  return (
    <div>
       <h2>Profile component</h2>
      <h3>{props.item}</h3>
      <button onClick={()=>props.changeitem()}>change props</button>
    </div>
  )
}

export default Profile


