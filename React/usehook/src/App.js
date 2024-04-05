import logo from './logo.svg';
import './App.css';
import Child from './componets/Child';
import SuperChild from './componets/SuperChild';
const Info=createContext()
function App() {
  return (
    <Info.Provider>
    <div className="App">
     <h1>App component</h1>
     <Child/>
     <SuperChild/>
    </div>
    </Info.Provider>
  );
}

export default App;
