import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate, useParams } from 'react-router-dom';
export default function Singleproduct() {
   
  const [name,setName]=useState("")
  const [price,setPrice]=useState(0)
  const [quantity,setQuantity]=useState(1)
  const [description,setDescription]=useState("")
  const [photo,setPhoto]=useState("")
  const [categories,setCategories]=useState([])
  const [category,setCategory]=useState("")  
   const [id,setId]=useState("")
   const navigate=useNavigate()
   const params=useParams()
   function getcategories()
    {
      fetch("http://localhost:4000/api/category/getcategory").then((resp1)=>{
        resp1.json().then((resp2)=>{
          console.log(resp2)
          setCategories(resp2?.category)
          console.log(categories)
        })
      })
    }   
   function getsingleproduct()
   {
    
    fetch(`http://localhost:4000/api/product/getsingleproduct/${params.slug}`).then((resp1)=>{
        resp1.json().then((resp2)=>{
            console.log(resp2)            
            setCategory(resp2.product.category._id)
            setId(resp2.product._id)
            setName(resp2.product.name)
            setPrice(resp2.product.price)
            setQuantity(resp2.product.quantity)
            setPhoto(resp2.product.photo)
            setDescription(resp2.product.description)
        })
    })
   }
   function updateprod(e)
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
    
    fetch(`http://localhost:4000/api/product/update/${id}`,{      
        method:"put",
        body:prod
      }).then((resp1)=>{
        resp1.json().then((resp2)=>{
            console.log(resp2)       
        })
    })
  }
 
   useEffect(()=>{  
    
      getcategories()
      //eslint-disable-next-line
  },[])
  useEffect(()=>{
    getsingleproduct()
    //eslint-disable-next-line
  },[])
  function deleteprod()
  {
    fetch(`http://localhost:4000/api/product/delete/${id}`,{      
        method:"delete",
       
      }).then((resp1)=>{
        resp1.json().then((resp2)=>{
            console.log(resp2) 

        })
    })
    navigate('/products')
  }
  return (
    <div>
          <Form onSubmit={(e)=>updateprod(e)}>
              <Form.Select aria-label="Default select example" className='mb-3' name={category}
                  onChange={(e) => setCategory(e.target.value)} value={category.name}>
                  {
                      categories.map((c) => {
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
                          onChange={(e) => setName(e.target.value)} />
                  </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                  <Form.Label column sm={2}>
                      Price:
                  </Form.Label>
                  <Col sm={10}>
                      <Form.Control type="text" placeholder="Product Price" value={price}
                          onChange={(e) => setPrice(e.target.value)} />
                  </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                  <Form.Label column sm={2}>
                      Quantity:
                  </Form.Label>
                  <Col sm={10}>
                      <Form.Control type="text" placeholder="Quantity" value={quantity}
                          onChange={(e) => setQuantity(e.target.value)} />
                  </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                  <Form.Label column sm={2}>
                      Description:
                  </Form.Label>
                  <Col sm={10}>
                      <Form.Control type="text" placeholder="Description" value={description}
                          onChange={(e) => setDescription(e.target.value)} />
                  </Col>
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Upload Product Picture</Form.Label>
                  <Form.Control type="file" name='photo' accept='image/*'
                      onChange={(e) => setPhoto(e.target.files[0])} hidden />
              </Form.Group>
              {photo ? (
          <div className='text-center'>
            <img src={URL.createObjectURL(photo)}
            alt='product' height={"200px"}
            className='img-fluid'/>
          </div>
        ):<div className='text-center'>
        <img src={`http://localhost:4000/api/product/getphoto/${id}`}
        alt='product' height={"200px"}
        className='img-fluid'/>
      </div>}
              <Form.Group as={Row} className="mb-3">
                  <Col sm={{ span: 10, offset: 2 }}>
                      <Button type="submit">Update Product</Button>
                  </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                  <Col sm={{ span: 10, offset: 2 }}>
                      <Button onClick={deleteprod} className='btn-danger'>Delete Product</Button>
                  </Col>
              </Form.Group>
          </Form>
    </div>
  )
}
