import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"

const Useeffect = ()=>{
    const [count, setCount] = useState(0)

    useEffect(()=>{
        document.title = `Hit ${count} times`
    },[count])

    return(
        <div>
            <Link className="HomeBtn" to="/">Home</Link>
            
            <h2>useEffect</h2>
            <h3>Count = {count}</h3>
            <button onClick={()=>setCount(count+1)}>Click</button>
        </div>
    )
}

export default Useeffect