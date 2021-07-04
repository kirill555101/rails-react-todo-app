import update from 'immutability-helper';

import {GET_TODOS, CREATE_TODO, UPDATE_TODO, DELETE_TODO} from './../logics/defines';

const todosReducer = (state = [], action) => {
    let newState = []
    let todoIndex = -1

    switch(action.type) {
        case GET_TODOS:
            newState = action.todos
            return newState
        
        case CREATE_TODO:
            newState = update(state, {
                $splice: [[0, 0, action.data]]
            })
            return newState

        case UPDATE_TODO:
            todoIndex = state.findIndex(x => x.id === action.data.id)
            newState = update(state, {
                [todoIndex]: {$set: action.data}
            })
            return newState

        case DELETE_TODO:
            todoIndex = state.findIndex(x => x.id === action.id)
            newState = update(state, {
                $splice: [[todoIndex, 1]]
            })
            return newState

        default:
            return state
    }
}

export default todosReducer;
