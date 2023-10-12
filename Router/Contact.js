import { Link, NavLink, Outlet } from "react-router-dom";
function Contact(){
    
    return(
        <div>
            <h3>Contact page:</h3>
            <NavLink to='Company'>Company</NavLink>
            <Outlet />
           </div>
    )
}
export default Contact;