import React, { createContext, useContext, useEffect, useReducer } from 'react'
import axios from "axios";
import CartReducer from "./Reducers"
import { ProductReducer } from './Reducers';
const Cart = createContext();
function Context({children}) {
  const initialState = {
    products: [],
    cart: [],
  };
  const [state,dispatch] =useReducer(CartReducer,initialState);
  const fetchProducts = async()=>{
  const response = await axios("https://dummyjson.com/products");
  const Data =  response.data.products;
  console.log(Data);
  dispatch({ type: 'SET_PRODUCTS', payload: Data });
 
  
}
useEffect(()=>{
  fetchProducts();
},[])
const[productState,productDispatch]=useReducer(ProductReducer,{
  byRating:0,
  searchQuery:"",
  availabilityStatus:"",
  shippingInformation:"",
})

return (
 <Cart.Provider value={{state,dispatch,productState,productDispatch}}>{children}</Cart.Provider>
   
)}


export const CartState=()=>{
  return useContext(Cart);
}

export default Context;