import {useReducer} from "react"
import {Link} from "react-router-dom"

const initialState = {count : 0}

const reducer = (state, action)=>{
    switch(action.type){
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1}
        default:
            return state
    }
}

const Usereducer = ()=>{
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <Link className="HomeBtn" to="/">Home</Link>

            <button onClick={()=> dispatch({type: 'increment'})}>+</button>
            <h3>{state.count}</h3>
            <button onClick={()=> dispatch({type: 'decrement'})}>-</button>
        </div>
    )
}

export default Usereducer