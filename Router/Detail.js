import { useParams } from "react-router-dom";

function Detail(){
 const params=useParams();
const {name}=params
    return(
        <>
        <h2>this is {name} Detail:</h2>
        </>
    )
}
export default Detail;