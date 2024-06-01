import React from 'react'
import { CartState } from '../../Context/Context'
import Filter from '../Filter/Filter';
import SingleProduct from '../SingleProduct/SingleProduct';
import "../Home/home.css";
function Home() {
  const {state:{products},productState:{byRating,sort,searchQuery,availabilityStatus,shippingInformation}} = CartState();
   const transformProducts = ()=>{
    let sortedProducts = products;
    if(sort){
      sortedProducts = sortedProducts.sort((a,b)=>
      sort ==="LowToHigh" ? a.price-b.price : b.price-a.price
      )
    }
    
    if(availabilityStatus){
      sortedProducts = sortedProducts.filter((prod)=>prod.availabilityStatus === availabilityStatus)
    }
    if(shippingInformation){
      sortedProducts = sortedProducts.filter((prod)=>prod.shippingInformation === shippingInformation)
    }
    if(byRating){
      sortedProducts = sortedProducts.filter((prod)=>prod.rating >= byRating)
    }
    if(searchQuery){
      sortedProducts = sortedProducts.filter((prod)=>prod.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return sortedProducts;
   }

  return (
    <div className='home'>
      <Filter/>
      <div className='products_container'>
        {transformProducts().map((p)=>{
          return <SingleProduct p={p} key={p.id}/>
         })}
      </div>
    </div>
  )
}

export default Home
