import React from "react"
export default class Dev extends React.Component{

    constructor()
   {
    super();
    this.state={
        data:"Data"
    }
   }
   stUpdate(){
    this.setState({data:"Update"})
   }

    render(){
        return(
            <div>
                <h1>{this.setState.data}</h1>
                <button onClick={()=>this.stUpdate()}>Update</button>
            </div>
        )
    }
}