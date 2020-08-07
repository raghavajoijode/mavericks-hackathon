import React from "react"

const Login = () => (
  <div className="container login">
    <h1>Login</h1>
    <form>
      <div className="form-group row">
        <label htmlFor="userID"> UserID </label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="userID" placeholder="Enter your username" />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="password"> Password </label>
        <div className="col-sm-10">
          <input type="Password" className="form-control" id="password" placeholder="Enter your password" />
        </div>
      </div>
      <div className="form-group row  ">
        <label htmlFor="userType">User Type</label>
        <div className="col-sm-10">
          <select className="form-control" id="userType">
            <option>Provider</option>
            <option>Carrier</option>
          </select>
        </div>
      </div>
      <button type="submit" id="login" className="btn btn-primary mb-2">Sign-In</button>
    </form>
  </div >
)


export default Login