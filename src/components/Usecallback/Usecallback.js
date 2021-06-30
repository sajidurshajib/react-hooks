import React, {useState, useCallback} from "react"
import {Link} from "react-router-dom"
import List from "./List"

const Usecallback = ()=>{
    const [number, setNumber] = useState(1)
    const [pop, setPop] = useState(false)

    const getItems = useCallback(()=>{
        return [number, number+1, number+2]
    },[number])

    return(
        <div>
            <Link className="HomeBtn" to="/">Home</Link>
            
            <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>
            <button onClick={()=>setPop(prevPop => !prevPop)}>PopUp</button>
            {pop ? <p>PopUp text</p>:null}
            <List getItems={getItems} />
        </div>
    )
}

export default Usecallback