import { Link,Navigate,useNavigate } from "react-router-dom";

function Home(){
    const nav=useNavigate();
    const x=(nabr)=>{
        nav(nabr)
    }
   

    return(
        <div>
            <h4>Home Page</h4>
            <p >This is Home PAge .....</p>
            <Link to='/About'>Go to About Page</Link><br />
            <button onClick={()=>x('/')}>go to home nav</button><br />
            <button onClick={()=>x('/about')}>go to about nav</button>

        </div>
    )
}
export default Home;