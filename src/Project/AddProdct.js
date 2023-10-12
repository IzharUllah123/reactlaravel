import Header from "./Header";
import { Button} from "react-bootstrap";
import { useState } from "react";

function AddProdct(){
    const [name,setName]=useState("")
    const [filee,setFile]=useState(null)
    const [price,setPrice]=useState("")
    const [description,setDisription]=useState("")




async function addproduct(){
    console.warn(name,filee,price,description)
const formData = new FormData();
formData.append('filee', filee);
formData.append('name', name);
formData.append('price', price);
formData.append('description', description);
let result=await fetch("http://127.0.0.1:8000/api/addproduct", {
    method:'POST',
    body:formData

})
alert("Data has been saved")
}

// fetch("http://127.0.0.1:8000/api/addproduct",
//        {

//        method:"POST",
//         body:formData
//  }  )
//        .then(Response=>Response.json())
//        .then(data=>console.log(data))
//        .catch(error=>console.error(error));
//       }

 



    

        return(
        <div>
         <Header/>
        <div className="col-sm-4 offset-sm-4">
           
            <h1>AddProdct</h1>

        <input type="text" className="form-control" placeholder="Name"
         onChange={(e)=>setName(e.target.value)}
        /> <br />
       
        <input type="file"  className="form-control" placeholder="File"
         onChange={(e)=>setFile(e.target.files[0])} /> <br />
       
        <input type="text"  className="form-control" placeholder="Price"
         onChange={(e)=>setPrice(e.target.value)}/> <br />

        <input type="text" className="form-control" placeholder="Description"
        onChange={(e)=>setDisription(e.target.value)} /> 
        <br />
        <Button onClick={addproduct}>AddProdct</Button> 
    
        </div>
        </div>

    )
}
export default AddProdct