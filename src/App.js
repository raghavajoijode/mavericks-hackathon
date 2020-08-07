import React from 'react';
import ClaimSubmission from './components/ClaimSubmission'
import MemberEnrollment from './components/MemberEnrollment'
import Header from './components/Header'
import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Welcome to AppName</h2>
        <Header />
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/memberenrollment' component={MemberEnrollment} />
          <Route path='/claimsubmission' component={ClaimSubmission} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
