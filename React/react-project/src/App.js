
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headerr from './components/Headerr';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from'./components/Home';
import Cart from'./components/Cart';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Headerr/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
