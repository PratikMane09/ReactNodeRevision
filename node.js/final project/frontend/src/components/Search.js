import React,{useEffect, useState} from 'react'

import Card from 'react-bootstrap/Card';
import { useLocation } from 'react-router-dom';

function Search() {
    // const [values,setValues]=useState()
    const location=useLocation()
    console.log(location.state)
    // useEffect(()=>{
    //   function getsearchedprod()
    //   {
    //   fetch("http://localhost:4205/api/search/:key").then((resp1)=>{
    //     resp1.json().then((resp2)=>{
    //       console.log(resp2)
    //     })
    //   })
    //   }
    //   getsearchedprod()
    // },[])
  return (
    <div className='container'>
      <div className='text-center'>
        <h1>Search Results</h1>
        <h6>{location.state.values.length<1?"No results found":`Found ${location.state.values.length}`}</h6>
        <div className="row row-cols-1 row-cols-md-3 g-4">
    {
      location.state.values.map((item,index)=>{
        return (
          
          <div className="col">
          <Card style={{ width: '18rem' }} key={index}>
            <Card.Img variant="top" className='w-100 mx-auto d-block' src={`http://localhost:4205/api/product/getphoto/${item._id}`} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
               {item.description}
               
               <h4>₹ {item.price}</h4>
              </Card.Text>
                
            </Card.Body>
          </Card>
          </div>
          
        )
      })
    }
    </div>   
      </div>
    </div>
  )
}

export default Search
