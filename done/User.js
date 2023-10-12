import React,{forwardRef} from 'react'

function User(props,inputref){
  return(
    <div>
      <h1>
        forward ref:
      </h1>
      <input typeof='text' ref={inputref}/>
    </div>
  )
}
export default forwardRef(User);