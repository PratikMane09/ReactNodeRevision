
import './App.css';
import Funcomp from './components/Funcomp';
import Classcomp from './components/Classcomp';
function App() {
 var a="Hello Everyone!!!"
 function add()
{
 return 65+89
 }
  return (
 <div className="App">
<h1 style={{color:"red",fontSize:"50px"}}>My First App</h1>
<Funcomp a={a} add={add}/>
 <Classcomp/>
 </div>
 );
}

export default App;


