import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Prices } from './Prices';

export default function Home() {
  const [aproducts,setAproducts]=useState([])
  const [pcategories,setPcategories]=useState([])
  const [checked,setChecked]=useState([])
  const [radio,setRadio]=useState([])
  const [cart,setCart]=useState([])
  function getcategories()
  {
    fetch("http://localhost:4000/api/category/getcategory").then((resp1)=>{
      resp1.json().then((resp2)=>{
        console.log(resp2)
        setPcategories(resp2.category)
        console.log(pcategories)
      })
    })
  }
  
  function getprods()
  {
    fetch("http://localhost:4000/api/product/getproducts").then((resp1)=>{
      resp1.json().then((resp2)=>{
        console.log(resp2)
        setAproducts(resp2.product)
        console.log(aproducts)
      }).catch((error)=>{
        console.log(error)
      })
    })
  }
  
  useEffect(()=>{
    
    getcategories()
    
  },[])
  const handleFilter=(value,id)=>{
    let all=[...checked]
    if(value)
    {
      all.push(id)
    }
    else
    {
      all.filter(c=>c!==id)
    }
    setChecked(all)
  }
  
  useEffect(()=>{
   if(!checked.length || !radio.length) getprods()
   
  },[checked.length,radio.length])
  useEffect(()=>{
  if(checked.length || radio.length) filterproduct()
  },[checked,radio])
  function filterproduct()
  {
    fetch("http://localhost:4000/api/product/filter",{
      method:"post",
     
      body:JSON.stringify({checked,radio})
    }).then((resp1)=>{
      resp1.json().then((resp2)=>{
        console.log(resp2)
        setAproducts(resp2.fproducts)
      })
    })
  }
  function addtocart(item)
  {
    console.log(item)
    fetch(`http://localhost:4000/api/cart/addtocart/${item._id}`,{
      method:"post", 
      headers:{
        'Accept':"application/json",
        'Content-Type':"application/json"
      },  
      body:JSON.stringify(item)
    }).then((resp1)=>{
      resp1.json().then((resp2)=>{
        setCart(resp2)
        console.log(resp2)
      })
    })
  }
  return (
    <div className='container'>    
      <h1 className='mt-4'>Welcome to Online Shopping</h1>
      
      <div className='row'>
        <div className='col-md-3 border border-2 d-flex flex-column p-4'>
       <h5 className='text-center'>Filter by Category</h5>
        {pcategories?.map((cat,i)=>{
          return (
          
        <div className="form-check" key={i}>
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"
        onChange={(e)=>handleFilter(e.target.checked,i)}/>
        <label className="form-check-label" for="flexCheckDefault">
         {cat.name}
        </label>
        </div>)
         })} 
         <h5 className='text-center mt-4'>Filter by Price</h5>
        {Prices?.map((p,pindex)=>{
          return (
            <div className="form-check" key={p._id}>
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                onChange={(e) => setRadio(e.target.value)} value={p.array} />
              <label className="form-check-label" for="flexRadioDefault1">
                {p.name}
              </label>
            </div>
          )
        })}
        </div>
        
        <div className='col-md-9'>
        
          <h3>All Products</h3>
          <div className="row row-cols-1 row-cols-md-3 g-4">
    {  aproducts?.map((item,index)=>{
        return (
          
          <div className="col" key={index}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" className='w-100 mx-auto d-block' src={`http://localhost:4000/api/product/getphoto/${item._id}`} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
               {item.description}
               
               <h4>₹ {item.price}</h4>
              </Card.Text>
              <Button variant="primary" className="ms-1">Details</Button>
              <Button variant="success" className="ms-1" 
              onClick={()=>{addtocart(item) }}>Add to Cart</Button>
            </Card.Body>
          </Card>
          </div>
          
        )
      })
    }
    </div>   
        </div>
      </div>
      
    </div>
  )
}
