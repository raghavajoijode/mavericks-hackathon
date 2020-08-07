import React from 'react';
import ClaimSubmission from './components/ClaimSubmission'
import MemberEnrollment from './components/MemberEnrollment'
import ClaimAdjudication from './components/ClaimAdjudication'
import Header from './components/Header'
import Login from './components/Login'
import AppState from './context/app/AppState'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

/* function App() {

} */


const App = () => (
  <AppState>
    <Router>
      <div className="App">
        <h2>Welcome to AppName</h2>
        <Header />
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/memberEnrollment' component={MemberEnrollment} />
          <Route path='/claimSubmission' component={ClaimSubmission} />
          <Route path='/claimAdjudication' component={ClaimAdjudication} />
        </Switch>
      </div>
    </Router>
  </AppState>
)


export default App;
