import './App.css';
import CareerDashboard from './Components/CareerDashboard';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import JobRoleDesc from './Components/JobRoleDesc';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/submit">
                        <JobRoleDesc/>
                         </Route>
                    <Route path="/">
                        <CareerDashboard/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
