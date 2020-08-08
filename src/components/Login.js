import React, { useEffect, useContext, useState } from "react"
import AppContext from '../context/app/appContext'

const Login = () => {
  const appContext = useContext(AppContext);
  const { userLogin, currentUser } = appContext
  const [login, setLogin] = useState({
    userID: '',
    password: '',
    userType: 'Provider'
  });

  useEffect(() => {
    if (currentUser != null)
      setLogin(currentUser)
    else {
      setLogin({
        userID: '',
        password: '',
        userType: 'Provider'
      })
    }
  }, [appContext, currentUser])

  const { userID, password, userType } = login;

  const onChange = e =>
    setLogin(
      {
        ...login,
        [e.target.name]: e.target.value
      }
    );


  const signin = e => {
    e.preventDefault();
    userLogin(login);
  }

  return (
    <div className="container login">
      <h1>Login</h1>
      <form>
        <div className="form-group row">
          <label htmlFor="userID"> UserID </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" name="userID" value={userID} onChange={onChange} placeholder="Enter your username" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="password"> Password </label>
          <div className="col-sm-10">
            <input type="Password" className="form-control" name="password" value={password} onChange={onChange} placeholder="Enter your password" />
          </div>
        </div>
        <div className="form-group row  ">
          <label htmlFor="userType">User Type</label>
          <div className="col-sm-10">
            <select className="form-control" value={userType || 'Provider'} onChange={onChange} name="userType">
              <option>Provider</option>
              <option>Carrier</option>
            </select>
          </div>
        </div>
        <button name="login" className="btn btn-primary mb-2" onClick={signin}>Sign-IN</button>
      </form>
    </div >
  )
}


export default Login