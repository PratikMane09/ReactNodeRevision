
import './App.css';
import { useState } from 'react';

function App() {
  const [count,setcount]=useState(0)

  return (
    <div className="App">
     <h1>Counter:{count}</h1>
     <button style={{fontSize:"30px",marginRight:"20px"}} onClick={()=>setcount(count+1)}>+</button>
     <button style={{fontSize:"30px",marginRight:"20px"}} onClick={()=>setcount(count-1)}>-</button>
    </div>
  );
}

export default App;
