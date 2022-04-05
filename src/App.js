import './App.css';
import CareerPage1 from './Components/CareerPage1';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CareerPage2 from './Components/CareerPage2';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/submit">
                        <CareerPage2/>
                         </Route>
                    <Route path="/">
                        <CareerPage1/>
                        
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
