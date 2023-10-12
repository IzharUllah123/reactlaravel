import { Link } from "react-router-dom";
function About(){
    return(
        <div>
            <h4>About</h4><br></br>
            this is aBout page
            <br />
            <Link to='/'>Go to Home Page</Link>
        </div>
    )
}
export default About;