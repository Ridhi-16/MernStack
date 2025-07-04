import { useState } from "react"
export default function Counter(){
    var[count,setCount]=useState(0)

    const inc=()=>{
        setCount(count+1)
    }
    const dec=()=>{
        setCount(count-1)
    }
    return(
        <>

        <h1>Count {count}</h1>
        <div className="btn btn-group">
            <button className="btn btn-primary" onClick={inc}>+</button>
            <button className="btn btn-danger" onClick={dec}>-</button>
        </div>
        

        </>
    )
}