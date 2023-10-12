import {ADD_TO_CART,Remove_TO_CART} from '../Constant' 

export const addToCart=(data)=>{
  // console.warn("action",data)
return{
    type:'ADD_TO_CART',
      data:data

}

}

export const removeToCart=()=>{
  // console.warn("action",data)
return{
    type:'Remove_TO_CART',
    

}

}
