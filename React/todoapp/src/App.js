import { useState } from 'react';
import './App.css';
import Todoinput from './components/Todoinput';
import 'bootstrap/dist/css/bootstrap.min.css';

import Todolist from './components/Todolist';
function App()
 {
  const [todolist,setTotdolist]=useState([])
  function addtask(inputtask)
   {
    if(inputtask!=="")
     {
      setTotdolist([...todolist,inputtask])
    }
     console.log(todolist)
    }
    function deletetask(key)
    {
      let newtodolist=[...todolist]
      newtodolist.splice(key,1)
      setTotdolist([...newtodolist])
    }
     return (
       <div className="App"> <Todoinput addtask={addtask}/>
       {
        todolist.map((item,index)=>{
          return(
            <Todolist item={item} key={index}/>
          )
        })
       }
       </div>);
       }
       export default App;