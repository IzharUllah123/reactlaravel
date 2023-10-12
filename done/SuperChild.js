import React,{useContext} from "react";
import { GlobalVar } from "./App";
function SuperChild(){
    let day="Sunday"
    let {appClr,theDay}=useContext(GlobalVar)
    return(
        <>
        <h4 style={{color:appClr}}>SuperChild Component:</h4>
        <button onClick={()=>theDay(day)}>Click Here</button>
        </>
    )
}
export default SuperChild;