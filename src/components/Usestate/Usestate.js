import React, {useState} from "react"
import {Link} from "react-router-dom"

const Usestate = ()=>{
    const [count, setCount] = useState(0)
    return(
        <div>
            <Link className="HomeBtn" to="/">Home</Link>
            
            <h2>useState</h2>
            <h3>Count = {count}</h3>
            <button onClick={()=>setCount(count+1)}>Click</button>
        </div>
    )
}

export default Usestate