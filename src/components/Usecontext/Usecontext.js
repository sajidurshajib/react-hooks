import React, {useState} from "react"
import {Link} from "react-router-dom"
import Profile from "./Profile"

export const Authentication = React.createContext()
export const Btn = React.createContext()

const Usecontext = ()=>{

    const [login, setLogin] = useState(false)

    return (
        <div>
            <Link className="HomeBtn" to="/">Home</Link>

            <Authentication.Provider value={login}>
                <Btn.Provider value={setLogin}>
                    <Profile />
                </Btn.Provider>
            </Authentication.Provider>
        </div>
    )
}

export default Usecontext