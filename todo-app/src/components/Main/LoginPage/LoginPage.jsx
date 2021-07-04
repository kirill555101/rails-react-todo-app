import React from 'react';
import {Link, Redirect} from 'react-router-dom';

import {loginUser} from './../../../logics/ajax_user';

const LoginPage = (props) => {
  let newEmail = React.createRef();
  let newPassword = React.createRef();

  const handleLogin = () => {
    const email = newEmail.current.value;
    const password = newPassword.current.value;

    loginUser(email, password)
  }

  if (props.user.isRedirected) {
    return <Redirect to='/' />
  }

  return (
    <div>
      <div className="header">
        <h1>Login</h1>
      </div>
      <div className="container" style={{width: 400}}>
        <div className="form-group">
          <label>Input email</label>
          <input type="email" ref={newEmail} name="email"
            className="form-control" autoFocus/>
        </div>
        <br />
        <div className="form-group">
          <label>Input password</label>
          <input type="password" ref={newPassword} name="password"
            className="form-control"/>
        </div>
        <br />
        <button className="btn btn-primary" onClick={handleLogin}>Login</button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        or
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/register" className="btn btn-outline-primary">Register</Link>
        <br />
        { props.user.error !== '' &&
          <div className="alert alert-danger" style={{top: 20}}>
            {props.user.error}
          </div>
        }
      </div>
    </div>
  );
}

export default LoginPage;