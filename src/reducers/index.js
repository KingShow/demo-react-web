import { ADD_TODO, SET_MENU_CURRENT } from '../actions/types';
import { combineReducers } from 'redux';

let defaultState = {
    todos: [{
        text: 'one',
        completed: false,
    }],
    menuCurrent: '1',
};

const appStates = (state = defaultState, action) => {
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
        case SET_MENU_CURRENT:
            return Object.assign({}, state, {
                todos: state.todos,
                menuCurrent: action.key,
            })
        default:
            return state
    }
}

let appReducers = combineReducers({
    appStates
});

export default appReducers;