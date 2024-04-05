import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';

function Cartpage() {
    
    // const cartitm=JSON.parse(localStorage.getItem("cart"))
    const [cartel,setCartel]=useState([])
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
    
    
    const auth=JSON.parse(localStorage.getItem("user"))
    // console.log(auth.user.firstName)
    // const navigate=useNavigate()
    function totalprice()
    {
        let total=0
        cartel.map((item)=>{
            total=total+item.price
            console.log(total)
        })
        
        return total
    }
    function removecartitem(pid)
    {
        fetch(`http://localhost:4000/api/cart/deletecart/${pid}`,{
          method:"delete"
        }).then((resp1)=>{
          resp1.json().then((resp2)=>{
            console.log(resp2)
          })
        })
    }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
            <h1 className='text-secondary text-center p-2 mb-2'>
                Hello!!! {auth.user.firstName}
            </h1>
            <h4 className='text-center'>You have {cartel?.length} items in cart</h4>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-9'>
        {cartel?.map(p=>{
            return (
                <div className='row'>
                <div className='col-4'>
                 <img src={`http://localhost:4000/api/product/getphoto/${p._id}`} alt="" height={150} width={150}/>
                </div>    
                <div className='col-8'>
                    <p>{p.name}</p>
                    <p>{p.description}</p>
                    <p>Price: ₹ {p.price}</p>
                    <Button variant="danger" onClick={()=>removecartitem(p._id)}>Remove</Button>
                </div> 
                </div>
            )
        })}
        </div>
        <div className='col-md-3'>
            <h4>Cart Summary</h4>
            <p>Total | Checkout | Payment</p>
            <hr/>
            <h4>Total:₹ {totalprice()}</h4>
        </div>
      </div>
    </div>
  )
}

export default Cartpage
