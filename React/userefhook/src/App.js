
import './App.css';
import { useRef } from 'react';

function App() {
  const inputref=useRef(null)
  function update()
  {
    inputref.current.value="Sevenmentor"
    inputref.current.style.color="Red"
  }
  return (
    <div className="App">
      <h1>Userrefhook</h1>
      <input type='text' ref={inputref}/><br/>
      <button onClick={()=>update()}>Handle Input</button>
    </div>
  );
}

export default App;
