import { ADD_TODO } from '../actions/types';
import { combineReducers } from 'redux';


function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false,
                    }
                ]
            })
        default:
            return false
    }
}
let todoApp = combineReducers({
    todos
});

export default todoApp;