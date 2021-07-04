import React from 'react';
import ReactDOM from 'react-dom';

import store from './redux/redux_store';
import './index.css';
import App from './components/App';

const renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state ={state} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

export default renderEntireTree;