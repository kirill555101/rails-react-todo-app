import React, {useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header/Header';
import Main from './Main/Main';
import { checkUserAuth } from '../logics/ajax_user';

const App = (props) => {
  useEffect(() => {
    checkUserAuth()
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Header 
          user={props.state.user} dispatch={props.dispatch}
        />
        <Main 
          state={props.state} dispatch={props.dispatch} 
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
