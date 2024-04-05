import './App.css';
import Header from './components/Header'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Categories from './components/Categories';
import Products from './components/Products';

import Signout from './components/Signout';

import Footer from './components/Footer';
import Search from './components/Search';
import Userdashboard from './user/Userdashboard';
import PrivateRoute from './Routes/Private';
import Orders from './user/Orders';
import Profile from './user/Profile';
import AdminRoute from './Routes/AdminRoute';
import Admindashboard from './Admin/Admindashboard';
import Createcategory from './Admin/Createcategory';
import Createproduct from './Admin/Createproduct';
import Users from './Admin/Users';
import Singleproduct from './components/Singleproduct';
import Cartpage from './components/Cartpage';
function App() {
  return (
    <div className="App">
     
     <Header/>
     <div style={{minHeight:"80vh"}}>
     <Routes>
     
      <Route path='/' element={<Home/>}/>
      <Route path='/Userdashboard' element={<PrivateRoute/>}>
      <Route path="user" element={<Userdashboard/>}/>
      <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
      </Route>
      <Route path="/Userdashboard" element={<AdminRoute/>}>
          <Route path="Admin/Admindashboard" element={<Admindashboard />} />
          <Route path="Admin/create-category" element={<Createcategory />} />
          <Route path="Admin/create-product" element={<Createproduct />} />
          <Route path="Admin/users" element={<Users/>} />
        </Route>
      <Route path='/Categories' element={<Categories/>}/>
      <Route path='/Cartpage' element={<Cartpage/>}/>
      <Route path='/Products' element={<Products/>}/>
      <Route path='/Search/:key' element={<Search/>}/>
      <Route path='/Singleproduct/:slug' element={<Singleproduct/>}/>
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Signout' element={<Signout/>}/>
     </Routes>
     </div>
     <Footer/>
     
    </div>
  );
}

export default App;
