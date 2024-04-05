import React,{useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate,Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Header() {
  const [cartel,setCartel]=useState([])
  const auth=JSON.parse(localStorage.getItem("user"))
    console.log(auth)
  const navigate=useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Logout Successfully");
  };
  const [values,setValues]=useState([])
  
    function handleSubmit(e)
    {
        e.preventDefault()
        
       
          fetch(`http://localhost:4000/api/search/${values}`).then((resp1)=>{
            resp1.json().then((resp2)=>{
                setValues(resp2)
                console.log(values)
                navigate(`/Search/:key`,{state:{values:resp2}})
            })
        })       
        

    }
  useEffect(()=>{
    function getcartitems()
    {
      fetch("http://localhost:4000/api/cart/getcart").then((resp1)=>{
        resp1.json().then((resp2)=>{
          console.log(resp2)
          setCartel(resp2.cartitem)
        })
      })
    }
    getcartitems()
  },[])
    
  function navto()
  {
    console.log(auth.user.role)
    if(auth.user.role==="admin")
    {
      navigate('/Admindashboard')
    }
    else
    {
      navigate('/Userdashboard')
    }
  }
  return (
    <div>
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
    <Container fluid>
      <Navbar.Brand to="#">Online Shopping</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          
          <div className='d-flex'>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Categories">Categories</Nav.Link>
          <Nav.Link href="/Products">Products</Nav.Link>
          
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={values}
              onChange={(e)=>setValues(e.target.value)}
              
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          {!localStorage.getItem("user")? (
              <>
                <li className="nav-item">
                  <Nav.Link href="/Signup" className="nav-link">
                    Signup
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link href="/Signin" className="nav-link">
                    Signin
                  </Nav.Link>
                </li>
              </>
            ) : (
              <>
               
                    <li>
                     {auth.user.role==="admin"?<Nav.Link href='/Admindashboard'                      
                        className="dropdown-item"
                      >
                        Dashboard
                      </Nav.Link>:<Nav.Link href='/Userdashboard'                      
                        className="dropdown-item"
                      >
                        Dashboard
                      </Nav.Link>}
                      
                    </li>
                    <li>
                      <Nav.Link
                        onClick={handleLogout}
                        href="/Signout"
                        className="dropdown-item"
                      >
                        Signout
                      </Nav.Link>
                    </li>
                  {/* </ul>
                </li> */}
              </>
            )}
         
         <li className="nav-item">
              <Nav.Link href="/Cartpage" className="nav-link">
                Cart <sup>{cartel?.length}</sup>
              </Nav.Link>
            </li>
          
         </div>
        </Nav>          
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  )
}

export default Header
