import React from 'react'
import Filters from './Filters'
import {Cartstate} from './Context'
import Product from './Product'
function Home() {
 const {state:{products},productstate:{sort,stock,searchQuery}}=Cartstate()
 console.log(products)
 const transformproducts=()=>{
  let sortedproducts=products
  if(sort){
    sortedproducts=sortedproducts.sort((a,b)=>
    sort==="lowToHigh"?a.price-b.price:b.price-a.price)
  }
  if(!stock)
  {
    sortedproducts=sortedproducts.filter((prod)=>prod.stock)
  }
  if(searchQuery)
  {
    sortedproducts=sortedproducts.filter((prod)=>prod.name.toLowerCase().includes(searchQuery))
  }
  return sortedproducts
 }
 return (
  <div>
   <div className='row'>
    <div className='col-2 bg-dark'>
      <Filters/>
    </div>
    <div className='col-10'>
     <div className='row row-cols-1 row-cols-sm-4 gap-4 ms-4'>
      {
       transformproducts().map((item,index)=>{
        return (
         <Product item={item} key={index}/>
        )
       })
      }

     </div>

    </div>
   </div>
  </div>
 )
}

export default Home
// export const reducer=(state,action)=>{
//     switch(action.type)
//     {
//       default:
//       return state
//     }
//   }