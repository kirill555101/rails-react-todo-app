import axios from 'axios';
import Cookies from 'js-cookie';

import store from '../redux/redux_store'
import {setError} from './funcs';
import {API_IP, TOKEN_NAME, LOGIN_USER, CHECK_USER_AUTH} from './defines';

const FIELDS_EMPTY_ERROR = 'Fields are empty';
const PASSWORDS_NOT_EQUAL_ERROR = 'Passwords are not equal';

const loginUser = (email, password) => {
  if (email === '' || password === '') {
    setError(FIELDS_EMPTY_ERROR)
    return
  }

  axios
    .post(API_IP + '/sessions/login', {
      email: email, password: password
    })
    .then((response) => {
      if (!response.data.name) {
        setError(response.data.message)
        return
      }

      Cookies.set(TOKEN_NAME, response.data.jwt)

      store.dispatch({ 
        type: LOGIN_USER, name: response.data.name,
        isRedirected: true
      })
    })
    .catch(error => console.log(error))
}

const registerUser = (email, name, password, anotherPassword) => {
  if (email === '' || name === '' ||
    password === '' || anotherPassword === '') {
      setError(FIELDS_EMPTY_ERROR)
      return
  }

  if (password !== anotherPassword) {
    setError(PASSWORDS_NOT_EQUAL_ERROR)
    return
  }

  axios
    .post(API_IP + '/sessions/register', {
      email: email, name: name,
      password: password, another_password: anotherPassword
    })
    .then((response) => {
      if (!response.data.name) {
        setError(response.data.message)
        return
      }

      Cookies.set(TOKEN_NAME, response.data.jwt)

      store.dispatch({ 
        type: LOGIN_USER, name: response.data.name,
        isRedirected: true
      })
    })
    .catch(error => console.log(error))
}

const checkUserAuth = () => {
  const token = Cookies.get(TOKEN_NAME)
  if (token) {
    axios
      .get(API_IP + '/sessions/auto_login', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        if (response.data.is_logged_in === false) {
          return
        }
        
        store.dispatch({ 
          type: CHECK_USER_AUTH, name: response.data.name,
          isRedirected: true
        })
      })
      .catch(error => console.log(error))
  }
}

export {loginUser, registerUser, checkUserAuth};
