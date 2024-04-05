import { useState } from "react";

export default function useCount()
{
const[count,setCount]=useState(0)

function add()
{
  setCount(count+1)
}
 function minus()
 {
    setCount(count-1)
 }
 function reset()
 {
    setCount(0)
 }
 return[count,add,minus,reset]
}

