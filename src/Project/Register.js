// import Header from './Project/Header';
import React,{ useEffect, useState} from "react"

import Header from "./Header";

import { Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
function Register(){

 useEffect(()=>{
    if (localStorage.getItem('user-info'))
    {
        navigate('/add')
    }
 },[])



    
        const [name,setName]=useState("")
        const [paswrd,setPaswrd]=useState("")
        const [email,setEmail]=useState("")
      
        const navigate=useNavigate()
    async function SignUp(){
            let item={name,paswrd,email}
       let result= await fetch("http://127.0.0.1:8000/api/register",
          {
            method:"Post",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
          }
          );
          result = await result.json()
          console.warn("result",result)

          localStorage.setItem("user-info",JSON.stringify(result));
          navigate('/')
        }

    return(
        <>
        <Header />
        <div className="col-sm-4 offset-sm-4">

            <h1>Register</h1>
            <br />
           <input type="text" value={name} 
           onChange={(e)=>setName(e.target.value) }className="form-control"
           placeholder="UserName"></input>
           <br />
           <br />
           <input type="text" value={email} 
           onChange={(e)=>setEmail(e.target.value) }className="form-control"
           placeholder="Email"></input>

           <br />
           <br />
           <input type={'password'} value={paswrd} className="form-control"
           onChange={(e)=>setPaswrd(e.target.value)}
           placeholder="Password"
           />
            <br />
            <br></br>
            <Button onClick={SignUp}>Sign up</Button>
     
        </div>
        </>
    )
}
export default Register;