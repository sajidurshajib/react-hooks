import React, {useState, useMemo} from "react"
import {Link} from "react-router-dom"

const Usememo = ()=>{
    const [number, setNumber] = useState(0)
    const [pop, setPop] = useState(false)

    const doubleNumber =useMemo(()=>{
        return slowNumber(number)
    },[number]) 

    return (
        <div>
            <Link className="HomeBtn" to="/">Home</Link>
            
            <input type="number" value={number} onChange={e=> setNumber(parseInt(e.target.value))}/>
            <button onClick={()=>setPop(prevPop => !prevPop)}>PopUp</button>
            {pop ? <p>PopUp text</p>:null}
            <p>{doubleNumber}</p>
        </div>
    )
}

const slowNumber = (num)=>{
    console.log('Calling slow function')
    for (let i = 0; i<=1000000000; i++){}
    return num * 2
}

export default Usememo