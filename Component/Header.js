import { addToCart } from '../Services/Action/Action';

function Header(props){
    console.warn("home",props.data);
    return(
        <>
        
        <div className='addToCart'>
            <span className='counter'>{props.data.length}</span>
        <img src={require('/Users/Izhar/Desktop/react-tut/blog/src/crd.jpg')} height={200} />
             
        </div> 
            </>
    )
}
export default Header;