import logo from './logo.svg';
import './App.css';
import Protected from './Project/Protected';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Register from './Project/Register'
import Login from './Project/Login';
import AddProdct from './Project/AddProdct';
import UpdateProdct from './Project/UpdateProdct';
import ProductList from './Project/ProductList';
import SearchProduct from './Project/SearchProduct';

// import User from './User'

function App(){ 
  return (
   
    <div className="App">
      
             <BrowserRouter>
            
  
             
      <Routes>  

        <Route path='/login' element={<Login />} />

        <Route path='/register' element={<Register />}/>
     
        <Route path='/update/:id' element={<Protected Cmp={UpdateProdct} />}   
        
        />

<Route path='/search' element={<Protected Cmp={SearchProduct} />} />


        <Route path='/add' element={<Protected Cmp={AddProdct}/>} />
        
        <Route path='/' element={<ProductList/>} />
      
     
      </Routes>
      
            </BrowserRouter>
   
  
        </div>
  )
  }
export default App;
