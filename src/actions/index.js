import { ADD_TODO, SET_MENU_CURRENT } from './types';

export function addTodo(text) {
    return { type: ADD_TODO, text}
}

export function setMenuCurrent(key) {
    return { type: SET_MENU_CURRENT, key}
}