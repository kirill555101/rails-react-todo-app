import {combineReducers, createStore} from 'redux';

import todosReducer from './todos_reducer';
import userReducer from './user_reducer';

let reducers = combineReducers({
    todos: todosReducer,
    user: userReducer
})

let store = createStore(reducers);

export default store;
