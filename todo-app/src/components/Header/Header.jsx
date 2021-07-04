import {Link} from 'react-router-dom';

import {LOGOUT_USER} from '../../logics/defines';

const Header = (props) => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 className="my-0 mr-md-auto font-weight-normal">Todo App</h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <Link className="p-2 text-dark" to="/">Home</Link>
        {props.user.name !== '' &&
          <span className="p-2 text-info">You are logged as {props.user.name}</span>
        }
      </nav>
      {props.user.name !== ''
        ? <button onClick={() => props.dispatch({ type: LOGOUT_USER })} className="btn btn-outline-primary">Logout</button>
        : <Link className="btn btn-outline-primary" to="/login">Login</Link>
      }
    </div>
  );
}

export default Header;