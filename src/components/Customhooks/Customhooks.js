import useLocalStorage from "../../hooks/useLoacalStorage"
import useUpdateLogger from "../../hooks/useUpdateLogger"

import {Link} from "react-router-dom"

const Customhooks = ()=>{
    const [name, setName] = useLocalStorage('name','')
    useUpdateLogger(name)

    return(
        <div>
            <Link className="HomeBtn" to="/">Home</Link>

            <input 
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
        </div>
    )
}

export default Customhooks