import Home from "../Component/Home";
import {connect} from "react-redux"
import { addToCart,removeToCart} from "../Services/Action/Action";

const mapStateToProps=state=>({
    data:state.cartItem
})
 const mapDispatchToProps=dispatch=>({
       addToStore:data=>dispatch(addToCart(data)),
       removefromStore:data=>dispatch(removeToCart(data))
       
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)

// export default Home;