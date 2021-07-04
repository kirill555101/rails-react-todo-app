import axios from 'axios';
import Cookies from 'js-cookie';

import store from '../redux/redux_store';
import {API_IP, TOKEN_NAME, GET_TODOS, CREATE_TODO, UPDATE_TODO, DELETE_TODO} from './defines';

const getHeader = (token) => {
	return {
		headers: {
			Authorization: `Bearer ${token}`
		}
	}
}

const getTodos = () => {
    const token = Cookies.get(TOKEN_NAME)
    if (!token) {
      return
    }

    axios
        .get(API_IP + '/api/todos', getHeader(token))
        .then((response) => {
            store.dispatch({ 
                type: GET_TODOS, todos: response.data
            })
        })
        .catch(error => console.log(error))
}

const createTodo = (e) => {
    const newTitle = e.target.value
    const token = Cookies.get(TOKEN_NAME)
    if (!token) {
        return
    }
    
    if (e.key !== 'Enter' || newTitle === '') {
        return
    }

    e.target.value = ''
    axios
        .post(API_IP + '/api/todos', {todo: {title: newTitle}}, getHeader(token))
        .then((response) => {
            store.dispatch({
                type: CREATE_TODO, data: response.data
            })
        })
        .catch(error => console.log(error))
}

const updateTodo = (e, id) => {
    const token = Cookies.get(TOKEN_NAME)
    if (!token) {
        return
    }

    axios
        .put(API_IP + `/api/todos/${id}`, {todo: {done: e.target.checked}}, getHeader(token))
        .then((response) => {
            store.dispatch({
                type: UPDATE_TODO, data: response.data
            })
        })
        .catch(error => console.log(error))      
}

const deleteTodo = (id) => {
    const token = Cookies.get(TOKEN_NAME)
    if (!token) {
        return
    }

    axios
        .delete(`/api/todos/${id}`, getHeader(token))
        .then((response) => {
            store.dispatch({
                type: DELETE_TODO, id: id
            })
        })
        .catch(error => console.log(error))
}

export {getTodos, createTodo, updateTodo, deleteTodo}