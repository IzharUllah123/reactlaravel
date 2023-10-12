import { ADD_TO_CART,Remove_TO_CART } from "../Constant";
const initialState={
    cartData:[]
}
export default function cartItem(state= [], action){

    switch (action.type) {
        
        case ADD_TO_CART:
            // console.warn("reducer",action)
            return[
               ...state,
              { cartData:action.data}
               
    ]

    case Remove_TO_CART:
            // console.warn("reducer",action)
            state.pop()
            return[
               ...state,
             
            ]
      
        default:
            return state
    }

}