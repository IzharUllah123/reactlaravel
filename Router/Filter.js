import { useSearchParams } from "react-router-dom";
function Filter(){
    const [params,setparams]=useSearchParams();
    const age=params.get('age');
    return(
        <div>
            <h3>search params:</h3>
            <h4>{age}</h4>
            <button onClick={()=>setparams({age:50})}>params</button>
        </div>
    )
}
export default Filter;