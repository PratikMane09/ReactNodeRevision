import React, { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Categories() {
  const [categories,setCategories]=useState([])
  const [name,setName]=useState("")
  
  function getcategories()
  {
    fetch("http://localhost:4000/api/category/getcategory").then((resp1)=>{
      resp1.json().then((resp2)=>{
        console.log(resp2)
        setCategories(resp2.category)
        console.log(categories)
      })
    })
  }
  useEffect(()=>{
    getcategories()
  },[])
  function addcategory()
  {
    const cat={name}
    console.log(cat)
    fetch("http://localhost:4000/api/category/create",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(cat)
    }).then((resp1)=>{
      resp1.json().then((resp2)=>{
        getcategories()
      })
    })
  }
  return (
    <div className='container mt-5'>
      <h2>List of Categories</h2>
     <ListGroup>
      {
        categories.map((item,index)=>{
          return (
            <ListGroup.Item variant="primary" key={index} className='d-flex justify-content-between align-items-center'>
            <span>{item.parentId}</span>
            <span>{item.name}</span>
            <span>{item.type}</span>
            </ListGroup.Item>
          )
        })
      }    
    
    </ListGroup>
    <h1 className='mt-4'>Add New Category</h1>
    <Form>
      

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Category Name:
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Product Name"  value={name}
          onChange={(e)=>setName(e.target.value)}/>
        </Col>
      </Form.Group>

      
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit" onClick={addcategory}>Add Category</Button>
        </Col>
      </Form.Group>
      
    </Form>
    </div>
  )
}

export default Categories
