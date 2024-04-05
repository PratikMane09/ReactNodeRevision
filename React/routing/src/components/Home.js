import React from 'react'
import { useNavigate } from 'react-router-dom'

// function Home() {
//   const navigate=useNavigate()

//   return (
//     <div>
//       home page
//       <button onClick={()=>navigate('/About')}>Go to About Us Page</button>
//       <button>Go To Contact Page</button>
//     </div>
//   )
// }

function Home() {
  const navigate=useNavigate()
  function navto()
  {
    let val=true
    if(val)
    {
      navigate('/About')
    }
    else{
      navigate('/Contact')
    }
  }
  return (
    <div>
      home page
      <button onClick={()=>navto()}>Go to About Us Page</button>
      <button onClick={()=>navto()}>Go To Contact Page</button>
    </div>
  )
}

export default Home
