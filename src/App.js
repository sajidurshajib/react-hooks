import './App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import Home from "./components/Home/Home"
import Usestate from "./components/Usestate/Usestate"
import Useeffect from "./components/Useeffect/Useeffect"
import Useref from "./components/Useref/Useref"
import Usecallback from "./components/Usecallback/Usecallback"
import Usememo from "./components/Usememo/Usememo"


const App = ()=>{
    return (
        <div className="App">
            <h1>All React Hooks</h1>
            <Router>
                <Switch>
                    <Route path="/" exact={true}>
                        <Home />
                    </Route>
                    <Route path="/usestate">
                        <Usestate />
                    </Route>
                    <Route path="/useeffect">
                        <Useeffect />
                    </Route>
                    <Route path="/useref">
                        <Useref />
                    </Route>
                    <Route path="/usecallback">
                        <Usecallback />
                    </Route>
                    <Route path="/usememo">
                        <Usememo />
                    </Route>
                </Switch>
        </Router>
    </div>
    );
}

export default App;
