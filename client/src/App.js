import React, { Fragment, useEffect } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import CreateProfile from './components/profile-form/CreateProfile';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';

import Register from './components/auth/register';
import Login from './components/auth/login';
import Landing from './components/layout/Landing';
import './App.css';
import Alert from './components/layout/Alert';
import setAuthToken from './utils/setAuthToken';


if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return(
  <Provider store={store}>
    <Router>
    <Fragment>
    <Navbar/>
    <Route exact path='/' component={Landing}/>
    <section className="container">
    <Alert/>
      <Switch>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute path="/dashboard" component={Dashboard}/>
        <PrivateRoute path="/create-profile" component={CreateProfile}/>

      </Switch>
    </section>
  </Fragment>
  </Router> 
  </Provider>
)};

export default App;
