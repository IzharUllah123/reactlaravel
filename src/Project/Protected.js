import Header from './Header'
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom";


function Protected(props){
    const Cmp=props.Cmp

const navigate=useNavigate()

    useEffect(()=>{
        if (!localStorage.getItem('user-info'))
        {
            navigate('./register')
        }
     },[])
    
    return(
        <div>
          <Cmp />
           
        </div>
    )
}
export default Protected