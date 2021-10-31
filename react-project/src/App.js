import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Markets from './components/Markets';
import Landing from './components/Landing'; 
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/markets">
            <Nav />
            <Markets />
          </Route>
          <Route path="/portfolio">
            <Nav />
            <Portfolio/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
