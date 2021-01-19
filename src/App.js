import { BrowserRouter as Router, Route} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Home from './containers/Home'
import Dashboard from './containers/Dashboard'
import Login from './components/Login.js'
import Signup from './components/Signup'
import NavBar from './components/Navbar';
import Tracker from './containers/Tracker';
import PrivateRoute from './containers/PrivateRoute';


function App() {
  const history = useHistory();
  return (
    <div className='App'>
      <Router>
      <NavBar />
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={3000}
            classNames='fade'
           >
          <Switch location={location}>
            <Route exact path='/login' component={Login} history={history}/>
            <Route exact path='/signup' component={Signup} history={history}/>
            <PrivateRoute exact path="/Dashboard" component={Dashboard} history={history}/>
            <PrivateRoute exact path="/Tracker" component={Tracker} history={history}/>
            <Route exact path="/" component={Home} history={history}/>
          </Switch>
          </CSSTransition>
          </TransitionGroup>
      )}/>
      </Router>
      </div>
  );
}

export default App;
