import {useEffect} from 'react';
import './App.css';
import User from './components/User';

function App() {
  useEffect(()=>{
    console.log("useeffect Called")
  })
  return (
    <div className="App">
      <User/>
    </div>
  );
}

export default App;
