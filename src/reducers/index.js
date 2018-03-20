import { ADD_TODO } from '../actions/types';
import { combineReducers } from 'redux';

let defaultState = {
    todos: [{
        text: 'one',
        completed: false,
    }],
};

const todos = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,{
                        text: action.text,
                        completed: false,
                    }
                ],
            })
        default:
            return state
    }
}
let todoApp = combineReducers({
    todos
});

export default todoApp;