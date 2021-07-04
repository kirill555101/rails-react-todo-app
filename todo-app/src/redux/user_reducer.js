import Cookies from 'js-cookie';

import {TOKEN_NAME, LOGIN_USER, LOGOUT_USER, CHECK_USER_AUTH} from './../logics/defines';

const initialState = {
    name: '',
    error: '',
    isRedirected: false
}

const userReducer = (state = initialState, action) => {
    let newState = Object.assign({}, initialState)

    switch (action.type) {
        case LOGIN_USER:
            if (action.name) {
                newState.name = action.name
            }
            if (action.error) {
                newState.error = action.error
            }
            if (action.isRedirected) {
                newState.isRedirected = action.isRedirected
            }
            return newState
        
        case LOGOUT_USER:
            Cookies.remove(TOKEN_NAME)
            newState.isRedirected = false
            return newState

        case CHECK_USER_AUTH:
            newState.name = action.name
            newState.isRedirected = action.isRedirected
            return newState

        default:
            return state
    }
}

export default userReducer;
