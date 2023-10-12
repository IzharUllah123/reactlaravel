import { useEffect } from "react";
import { Link, NavLink, useNavigate} from "react-router-dom";
function Protected(props){
    const {Component}=props;
        const navi=useNavigate();
        useEffect(()=>
        {
            let Login=localStorage.getItem('Login');
            if (!Login){
                navi('/Login')
            }
        });

    return(
        <div>
            <h3>Protected page:</h3>
        
      <Component />
           </div>
    )
}
export default Protected;