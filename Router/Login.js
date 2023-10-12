import { useEffect} from "react";
import { useNavigate } from "react-router-dom";
function Login(){
    const Login=()=>{
        localStorage.setItem('Login',true);
        navi('/')

    }
    const navi=useNavigate();
    useEffect(()=>
    {
        let Login=localStorage.getItem('Login');

        if (Login){
            navi('/')
        }
    });
    return(
        <div>
            <h3>Login page:</h3>
          <input type='text'></input><br />
          <button onClick={Login}>Login</button>
           </div>
    )
}
export default Login;