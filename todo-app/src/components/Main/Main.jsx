import {Route, Switch, Link} from 'react-router-dom'

import './Main.css';
import LoginPage from './LoginPage/LoginPage'
import RegisterPage from './RegisterPage/RegisterPage'
import TodosPage from './TodosPage/TodosPage'

const Main = (props) => {
  return (
    <div className="container">
      <Switch>
        <Route path="/login"><LoginPage user={props.state.user}/></Route>
        <Route path="/register"><RegisterPage user={props.state.user}/></Route>
        {props.state.user.name !== ''
          ? <TodosPage 
              todos={props.state.todos} dispatch={props.dispatch}
            />
          : <div className="header">
              <h2>You need to <Link className="p-2 text-dark" to="/login">login</Link> to access Todo App!</h2>
            </div>
        }
      </Switch>
    </div>
  );
}

export default Main;