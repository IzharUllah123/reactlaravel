import { useEffect } from "react";
import { useState } from "react";

import Header from "./Header";

function UpdateProdct(props){
 
  console.warn(props)


 
   
//    useEffect(async()=>{
// let result=await fetch('http://127.0.0.1:8000/api/product/'+id);
// result=await result.json();
// setData(result)
    

//    },[id]);








    return(
    
       
        <div>
             <Header />
           
            <h1>UpdateProdct</h1>
               
               {/* <input type={'text'} defaultValue={formData.name}  /> */}

               </div>
    )
}
export default UpdateProdct