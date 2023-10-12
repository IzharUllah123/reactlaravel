import Header from './Header'
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap"

function Login(){
    useEffect(()=>{
        if (localStorage.getItem('user-info'))
        {
            navigate('/')
        }
     },[])



    var [email,setEmail]=useState("")
    var [password,setPaswrd]=useState("")
    const navigate=useNavigate()
  async  function submit(){
        console.warn("result",password,email)
        let item={password,email}

        let result= await fetch("http://127.0.0.1:8000/api/login",
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
          navigate('/add')
    }
    return(
        <> <Header />
        <div className="col-sm-4 offset-sm-4">
           
            <h1>Login Here</h1>
            <br />
            <input type="text" value={email} 
           onChange={(e)=>setEmail(e.target.value) }className="form-control"
           placeholder="Email"></input>
           <br />
           <br />

           <input type={'password'} value={password} className="form-control"
           onChange={(e)=>setPaswrd(e.target.value)}
           placeholder="Password"
           />
            <br />
            <br></br>
            <Button onClick={submit}>Login</Button>
        </div>
        </>
    )
}
export default Login