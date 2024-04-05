import React, { useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import {Link} from 'react-router-dom'
function Products() {
  const [products,setProducts]=useState([])
  const [name,setName]=useState("")
  const [price,setPrice]=useState(0)
  const [quantity,setQuantity]=useState(1)
  const [description,setDescription]=useState("")
  const [photo,setPhoto]=useState("")
  const [categories,setCategories]=useState([])
  const [category,setCategory]=useState("")  
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

  function addproduct(e)
  {
    e.preventDefault()
    // const prod={name,description,price,quantity,photo,category}
    const prod=new FormData()
    prod.append("name",name)
    prod.append("description",description)
    prod.append("price",price)
    prod.append("quantity",quantity)
    photo && prod.append("photo",photo)
    prod.append("category",category)
    console.log(prod)
    
    fetch("http://localhost:4000/api/product/create",{      
        method:"post",
        // headers:{
        //   "Accept":'application/json',
        //   "Content-Type":"application/json"
        // },
        body:prod
      }).then((resp1)=>{
        resp1.json().then((resp2)=>{
        getprods()
        
        }).catch((error)=>{
          console.log(error)
        })
      
    })
  }
 
  useEffect(()=>{  
    
      getcategories()
      //eslint-disable-next-line
  },[])
  function getprods()
  {
    fetch("http://localhost:4000/api/product/getproducts").then((resp1)=>{
      resp1.json().then((resp2)=>{
        console.log(resp2)
        setProducts(resp2.product)
        console.log(products)
      }).catch((error)=>{
        console.log(error)
      })
    })
  }
  useEffect(()=>{     
    getprods()
    //eslint-disable-next-line
  },[])
  
  return (
    <div className='container'>
    <h1 className='mt-4'>Add New Product</h1>
    <Form onSubmit={(e)=>addproduct(e)}>
    <Form.Select aria-label="Default select example" className='mb-3' name={category}
    onChange={(e)=>setCategory(e.target.value)}>
      {
        categories?.map((c)=>{
          return (
          <option key={c._id} value={c._id}>{c.name}</option>)
        })
      }
    </Form.Select>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Product Name:
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Product Name" value={name}
          onChange={(e)=>setName(e.target.value)}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Price:
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Product Price"  value={price}
          onChange={(e)=>setPrice(e.target.value)}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
         Quantity:
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Quantity"  value={quantity}
          onChange={(e)=>setQuantity(e.target.value)}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
         Description:
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Description"  value={description}
          onChange={(e)=>setDescription(e.target.value)}/>
        </Col>
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload Product Picture</Form.Label>
        <Form.Control type="file" name='photo' accept='image/*'
        onChange={(e)=>setPhoto(e.target.files[0])} hidden/>
      </Form.Group>
      <div className='mb-3'>
        {photo && (
          <div className='text-center'>
            <img src={URL.createObjectURL(photo)}
            alt='product' height={"200px"}
            className='img-fluid'/>
          </div>
        )}
      </div>
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Add Product</Button>
        </Col>
      </Form.Group>
     
    </Form> 
    <div className="row row-cols-1 row-cols-md-3 g-4">
    {
      products.map((item,index)=>{
        return (
          <Link to={`/Singleproduct/${item.slug}`} key={item._id} className='product-link'>
          <div className="col">
          <Card style={{ width: '18rem' }} key={index}>
            <Card.Img variant="top" className='w-100 mx-auto d-block' src={`http://localhost:4000/api/product/getphoto/${item._id}`} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
               {item.description}
               
               <h4>₹ {item.price}</h4>
              </Card.Text>
                
            </Card.Body>
          </Card>
          </div>
          </Link>
        )
      })
    }
    </div>   
    </div>
  )
}

export default Products
