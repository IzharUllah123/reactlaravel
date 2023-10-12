import Header from "./Header";
import Phot from "./Phot";
import { useState } from "react";
import {Table} from "react-bootstrap";

function SearchProduct(){
    const [data,setData]=useState([])

async function search(key){
    console.warn("key",key)

    let result =await fetch("http://127.0.0.1:8000/api/search/"+key);
    result=await result.json();
    console.warn(result)
    setData(result)


}



return(
    <div>
     <Header/>
    <div className="col-sm-6 offset-sm-3">
       
        <h1>SearchProduct</h1>
        <br></br>

    <input type="text" className="form-control" placeholder="SearchProduct"
     onChange={(e)=>search(e.target.value)}
    /> <br />
   

   <Table striped border  hover>
         <thead>
<tr>
<th>Id</th>
<th>Name</th>
<th>Price</th>
<th>Image</th>
<th>description</th>


</tr>
</thead>
<tbody>
    {
        data.map((item)=>

    <tr>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.price}</td>
    
    <td>
    <img
    style={{ width: 80 }}
    src={Phot[item.name.toLowerCase()]}
    alt={`Product ${item.name}`}
  />
      
    </td>

    <td>{item.description}</td>
  
    </tr>
    )
    
}
</tbody>

       

        </Table>

    </div>
    </div>

)
}
export default SearchProduct