import { hover } from "@testing-library/user-event/dist/hover";
import { useEffect, useState } from "react"
import { Button, Form, Table } from "react-bootstrap"
import { Link } from "react-router-dom";
import Header from "./Header"
import Phot from "./Phot";



function ProductList(){

    const [data,setData]=useState([]);
    const [imges,setphoto]=useState(Phot)

console.log("PHt",imges)


    useEffect (  ()=>{

getData()
        
    },[])


 async   function deleteOperation(id){
          
     let result=await   fetch("http://127.0.0.1:8000/api/delete/"+id,{
            method:"DELETE"
        });


        result=result.json();
        console.warn(result)
        getData()

    }


    async function getData(){
        fetch('http://127.0.0.1:8000/api/list')
        .then(Response=>Response.json())
        .then (data=>setData(data));
    
    }


    return(
       <>
        <Header />
    <div>
    <div className="col-sm-8 offset-sm-2">
        <h1>ProductList</h1>
     
        <Table striped border  hover>
         <thead>
<tr>
<th>Id</th>
<th>Name</th>
<th>Price</th>
<th>Image</th>
<th>description</th>
<th>Operation</th>

</tr>
</thead>
<tbody>
    {
        data.map((item)=>

    <tr>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.price}   </td>

    <td> 

     {/* {
      imges.map((ok)=>           
        <img style={{width:80}} src={ok.photo} />
    ) } */}



{/* <img
                      style={{ width: 80 }}
                      src={imges.find((photo) => photo.id === item.id)?.photo}
                      alt={`Product ${item.id}`}
                    /> */}



<img
    style={{ width: 80 }}
    src={Phot[item.name.toLowerCase()]}
    alt={`Product ${item.name}`}
  />
                
</td>


  
    <td>{item.description}</td>
   <td>  <Button style={{margin:12, backgroundColor:"redish",color:"black"}  } onClick={()=>{deleteOperation(item.id)}}>Delete</Button> </td>
   {/* <td>
        <Link to={"update/"+item.id}>
      <Button style={{margin:12, backgroundColor:"redish",color:"black"}  } >Update</Button> 
      </Link>
      </td> */}
    </tr>
    )
    
}
</tbody>

       

        </Table>




           
          </div>
    </div>
    </>
  
    )
}
export default ProductList
