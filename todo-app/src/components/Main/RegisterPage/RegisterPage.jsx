import React from 'react';
import {Link, Redirect} from 'react-router-dom';

import {registerUser} from './../../../logics/ajax_user';

const RegisterPage = (props) => {
  let newEmail = React.createRef();
  let newName = React.createRef();
  let newPassword = React.createRef();
  let newAnotherPassword = React.createRef();

  const handleRegister = () => {
    const email = newEmail.current.value;
    const name = newName.current.value;
    const password = newPassword.current.value;
    const anotherPassword = newAnotherPassword.current.value;

    registerUser(email, name, password, anotherPassword)
  }

  if (props.user.isRedirected) {
    return <Redirect to='/' />
  }

  return (
    <div>
      <div className="header">
        <h1>Register</h1>
      </div>
      <div className="container" style={{width: 400}}>
        <div className="form-group">
          <label>Input email</label>
          <input type="email" ref={newEmail} name="email"
            className="form-control" autoFocus />
        </div>
        <br />
        <div className="form-group">
          <label>Input name</label>
          <input type="name" ref={newName} 
            name="name" className="form-control" />
        </div>
        <br />
        <div className="form-group">
          <label>Input password</label>
          <input type="password" ref={newPassword} 
            name="password" className="form-control" />
        </div>
        <br />
        <div className="form-group">
          <label>Input another password</label>
          <input type="password" ref={newAnotherPassword} 
            name="anotherPassword" className="form-control" />
        </div>
        <br />
        <button className="btn btn-primary" onClick={handleRegister}>Register</button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        or
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/login" className="btn btn-outline-primary">Login</Link>
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

export default RegisterPage;