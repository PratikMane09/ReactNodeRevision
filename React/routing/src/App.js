
import './App.css';
import {BrowserRouter,Link,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
//import Logout from './components/Logout';

function App() {
  let user="snbcnm"
  return (  
    <div className="App">
      <BrowserRouter>
      <Link to='/'>Home</Link>
      <Link to='/About'>About us</Link>
      <Link to='/Contact'>Contact us</Link>
      {!user?<Link to='/Login'>Login</Link>: <Link to='/Logout'>Logout</Link>}
      
     
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/User/:name' element={<User/>}/>
        <Route path='/About' element={<About us/>}/>
        <Route path='/Contact' element={<Contact us/>}/>
        <Route path='/Login' element={<Login/>}/>
        {/* <Route path='/Logout' element={<Logout/>}/> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
