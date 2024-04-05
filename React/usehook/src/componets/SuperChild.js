import React from 'react'
import {Info} from'../App'
function SuperChild() {
    const{elcolor,bcolor,chday}=useContext(Info)
    const day='Monday'
  return (
    <div>
        <h2 style={{color:elcolor,backgroundColor:bcolor}}> Super Child component</h2>
        <button onclick={()=>chday(day)}>Change Day</button>
    </div>
  )
}

export default SuperChild
