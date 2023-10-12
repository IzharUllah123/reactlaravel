import React,{useContext} from "react";
import { GlobalVar } from "./App";
import SuperChild from "./SuperChild";

function Child(){
    let {appClr}=useContext(GlobalVar)
    return(
        <>
        <h4 style={{color:appClr}}>Child Component:</h4>
        <SuperChild />
        </>
    )
}
export default Child;