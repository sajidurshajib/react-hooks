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
import Usecontext from "./components/Usecontext/Usecontext"
import Usereducer from "./components/Usereducer/Usereducer"
import Customhooks from "./components/Customhooks/Customhooks"

const App = ()=>{
    return (
        <div className="App">
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
                    <Route path="/usecontext">
                        <Usecontext />
                    </Route>
                    <Route path="/usereducer">
                        <Usereducer />
                    </Route>
                    <Route path="/customhooks">
                        <Customhooks />
                    </Route>
                </Switch>
        </Router>
    </div>
    );
}

export default App;
