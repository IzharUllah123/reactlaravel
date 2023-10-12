import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
function Header(){

  const user=JSON.parse(localStorage.getItem('user-info'));
  const navigate=useNavigate()
 function logout()
 {
  localStorage.clear()
  navigate('/register')
 }

    return(
        <div >
          <Navbar bg='dark' variant='dark'>
            <Navbar.Brand href='#home'>Mobile Store</Navbar.Brand>
 


            <Nav className="mr-auto lnk">  

            {
               localStorage.getItem('user-info') ?
               <>
               <Link to='/add'>AddProdct</Link>
            <Link to='/update'>UpdateProdct</Link>
            <Link to='/'>ProdectList</Link>
            <Link to='/search'>SearchProduct</Link>
            </>
            :
            <>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            </>
                 }
                   
            
            

            </Nav>

           
            <Nav>
             <div className='nv'> 
             {localStorage.getItem('user-info') ?

            <NavDropdown title={user&&user.name}>
             <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item> 
             <NavDropdown.Item>Profile</NavDropdown.Item>
            </NavDropdown>
            :null
          }
           </div>
            </Nav>
            
           </Navbar>
           
           
           </div>
    )
}

export default Header