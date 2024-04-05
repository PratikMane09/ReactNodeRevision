
import { useReducer } from 'react';
import './App.css';
import Person from './Person';
let initialstate=0
function reducer(state,action)
{
  switch(action.type)
  {
    case "minus":
      return state-1
    case "add":
      return state+1
    default:
      return
  }
}
function App() {
  const[state,dispatch]=useReducer(reducer,initialstate)
  return (
    <div className="App">
      <button onClick={()=>dispatch({type:"minus"})}>-</button>
      {state}
      <button onClick={()=>dispatch({type:"add"})}>+</button>
      <Person/>
    </div>
  );
}

export default App;
