import React, {useContext} from "react"
import {Authentication, Btn} from "./Usecontext"

const Profile = ()=>{
    const user = useContext(Authentication)
    const btn = useContext(Btn)

    const auth = ()=>{
        btn(prevLogin => !prevLogin)
    }

    return(
        <div>
            <button onClick={auth}>{user? 'Logout':'Login'}</button>
            {user ? <p>You are logged in</p>:<p>Authentication required.</p>}
        </div>
    )
}

export default Profile