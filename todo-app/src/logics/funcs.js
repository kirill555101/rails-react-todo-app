import store from "../redux/redux_store"

const LOGIN_USER = 'LOGIN_USER'

const setError = (error) => {
    store.dispatch({
        type: LOGIN_USER, error: error 
    })
    setTimeout(() => {
        store.dispatch({ 
            type: LOGIN_USER, error: '' 
        })
    }, 2000)
}

export { setError };
