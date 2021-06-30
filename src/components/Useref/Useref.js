import React, {useRef} from "react"
import {Link} from "react-router-dom"

const Useref = ()=> {

    // useRef work without rendered 
    const pColor = useRef()

    const colorGreen = ()=>{
        pColor.current.style.color = "Green"
    }


    const colorRed = ()=>{
        pColor.current.style.color = "red"
    }


    console.log('Rendered')
    return (
        <div>
            <Link className="HomeBtn" to="/">Home</Link>
            
            <button onClick={colorGreen}>Green</button>
            <button onClick={colorRed}>Red</button>

            <p ref={pColor}>My name is Sajidur.</p>
        </div>
    )
}

export default Useref