import React,{useEffect} from 'react'
import useCount from './usecount'
function Counter() {
    const[count,add,minus,reset]=useCount()
    useEffect(()=>{
        document.title=count+"Hits on button"
    })
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={add}>Add</button>
      <button onClick={minus}>Minus</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter
