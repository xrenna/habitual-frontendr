import { BrowserRouter as Router, Route} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {Switch } from 'react-router-dom';
import Home from './containers/Home'
import Dashboard from './containers/Dashboard'
import Login from './components/Login.js'
import Signup from './components/Signup'
import NavBar from './components/Navbar';
import Tracker from './containers/Tracker';

function App() {
  const history = useHistory();
  return (
    <div className='App'>
      
      <Router>
      <NavBar />
        <Switch>
          <Route exact path='/login' component={Login} history={history}/>
          <Route exact path='/signup' component={Signup} history={history}/>
          <Route exact path="/" component={Home} history={history}/>
          <Route exact path="/Dashboard" component={Dashboard} history={history}/>
          <Route exact path="/Tracker" component={Tracker} history={history}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
