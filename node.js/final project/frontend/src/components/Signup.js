import React, { useState,useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
export default function Signup() {
    const [firstName,setFname]=useState("")
    const [lastName,setLname]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [address,setAddress]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    useEffect(()=>{
      const auth=localStorage.getItem("user")
      if(auth)
      {
        navigate("/")
      }
    },[navigate])
    function submituser(e)
    {
      
      fetch("http://localhost:4000/api/signup",{
        method:"post",
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify({firstName,lastName,email,phone,address,password})
      }).then((res1)=>{
        res1.json().then((res2)=>{
          console.log(res2)
        })
      })
      e.preventDefault()
    }
  return (
    <div>
      <Container>
        <Row>
            <Col md={6}>
      <Form className='mt-5 text-start ms-5' onSubmit={(e)=>submituser(e)}>
        <h2 className='mb-3 text-center'>Signup Form</h2>
      <Row className='mb-3'>
        <Col>
        <Form.Label>First Name</Form.Label>
          <Form.Control placeholder="First name" value={firstName} onChange={(e)=>setFname(e.target.value)}/>
        </Col>
        <Col>
        <Form.Label>Last Name</Form.Label>
          <Form.Control placeholder="Last name" value={lastName} onChange={(e)=>setLname(e.target.value)}/>
        </Col>
      </Row>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Enter phone number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password}  onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Col>
    </Row>
    </Container>
    </div>
  )
}
