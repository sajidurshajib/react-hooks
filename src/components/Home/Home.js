import {Link} from "react-router-dom"
const Home = ()=>{
    return (
        <div>
            <h2>Home</h2>
            <p>Bacik hooks</p>
            <Link to="/usestate">useState</Link>
            <br />
            <Link to="/useeffect">useEffect</Link>
            <p>Common hooks</p>
            <Link to="/useref">useRef</Link>
            <br/>
            <Link to="/usecallback">useCallback</Link>
            <br/>
            <Link to="/usememo">useMemo</Link>
        </div>
    )
}

export default Home