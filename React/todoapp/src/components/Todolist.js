import React from 'react'
import {BsFillDashCircleFill} from"react-icons/bs";
function Todolist(props) {
  return (
    <div>
      <li>{props.item}
      <BsFillDashCircleFill onClick={()=>props.deletetask(props.index)} />
      
      </li>
    </div>

  )
}

export default Todolist
