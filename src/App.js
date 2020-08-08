import React from 'react';
import ClaimSubmission from './components/ClaimSubmission'
import MemberEnrollment from './components/MemberEnrollment'
import Claims from './components/Claims'
import Header from './components/Header'
import Login from './components/Login'
import Test from './components/Test'
import Home from './components/Home'
import AppState from './context/app/AppState'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

const App = () => {

  return (
    <AppState>
      <Router>
        <div className="App">
          <h2>Welcome to AppName</h2>
          <Header />
          <Home />
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route path='/memberEnrollment' component={MemberEnrollment} />
            <Route path='/claimSubmission' component={ClaimSubmission} />
            <Route path='/claimAdjudication' component={Test} />
            <Route path='/Claim/:id' component={Claims} />
          </Switch>
        </div>
      </Router>
    </AppState>
  )
}


export default App;
