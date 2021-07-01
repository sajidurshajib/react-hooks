import {Link} from "react-router-dom"
const Home = ()=>{
    return (
        <div>
            <h1>All React Hooks</h1>
            <h2>Home</h2>
            <p>Basic hooks</p>
            <Link to="/usestate">useState</Link>
            <br />
            <Link to="/useeffect">useEffect</Link>
            <p>Common hooks</p>
            <Link to="/useref">useRef</Link>
            <br/>
            <Link to="/usecallback">useCallback</Link>
            <br/>
            <Link to="/usememo">useMemo</Link>
            <br/>
            <Link to="/usecontext">useContext</Link>
            <br/>
            <Link to="/usereducer">useReducer</Link>
        </div>
    )
}

export default Home