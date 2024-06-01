import React from 'react'

function CartReducer(state,action) {
  switch(action.type){
    case "SET_PRODUCTS":
      return {...state,products:[...action.payload],cart:[...state.cart]}
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
      case "ADD_QNTY":
        return{
          ...state,
          cart:state.cart.filter((c)=>c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty),
        };
  
  
  
  default:
    return state;
}
}
export const ProductReducer = (state,action)=>{
  switch(action.type){
    case"Sort_by_price":
    return{
     ...state,sort:action.payload
    }
    case"Filter_by_rating":
    return{
     ...state,byRating:action.payload
    }
    case"Filter_by_search":
    return{
        ...state,searchQuery:action.payload
    }
   
    case "FILTER_BY_AVAILABILITY":
      return {
        ...state, availabilityStatus: action.payload
      }
     case "FILTER_BY_DELIVERY_TIME":
        return {
          ...state, shippingInformation: action.payload
        }
     case"Clear_Filters": return {
    byRating:0,
    searchQuery:"",
    availabilityStatus:"",
    shippingInformation:"",

   };
   default:return state;
  } 
 
}
export default CartReducer