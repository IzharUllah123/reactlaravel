import { Link, NavLink } from "react-router-dom";
function Lnks(){
    return(
        <div>
            <ul className="navb">
            <li> <NavLink className="navtext" to='/'>Home</NavLink></li>
           <li> <NavLink className="navtext" to='/about' >About </NavLink><br /></li> 
           <li><NavLink className="navtext" to='/detail/anil'>Anil</NavLink></li>
            <li><NavLink className="navtext" to='/detail/siddu'>Siddu</NavLink></li>
            <li><NavLink className="navtext" to='/contact'>Contact</NavLink></li>
            <li><NavLink className="navtext" to='/login'>Login</NavLink></li>
             </ul>
        </div>
    )
}
export default Lnks;