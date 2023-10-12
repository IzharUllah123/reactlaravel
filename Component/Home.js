import { addToCart } from '../Services/Action/Action';

function Home(props){
    console.warn("home",props.data);
    return(
        <>
                <h3>Home:</h3>
           <div className="Cart-wrapper">
            <div className="img-wrapper item">
            <img src={require('/Users/Izhar/Desktop/react-tut/blog/src/phone.jpg')} height={100} />
                <div className="text-wrapper item">
                   <span>Price:$1000 </span>
                    <span>iphone:</span>
                    <div className="Button-wrapper">
                        <button onClick={()=>props.addToStore({price:1000,nam:"iphone"})}>Add to</button><br />
                        <button onClick={()=>props.removefromStore()}>Remove to</button>     
                     </div>
                     
                </div>
            </div>
            </div>    
            </>
    )
}
export default Home;