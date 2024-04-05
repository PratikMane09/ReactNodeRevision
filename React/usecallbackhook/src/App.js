
import './App.css';
import Profile from './Profile';
import { useCallback, useState } from 'react';
function App() {
  const[count,setcount]=useState(0)
  const[item,setItem]=useState(2)
  function increment()
  {
    setcount(count+1)
  }
  let changeitem=useCallback(()=>
  {
    setItem(item+5)
  },[])
  return (
    <div className="App">
     <h1>App Componrnt</h1>
     <Profile item={item} changeitem={changeitem} />

     <h2> {count}</h2>
     <button onclick={increment}>increment</button>
     {/* <button onclick={changeitem}>changeitem</button> */}
    </div>
  );
}

export default App;
