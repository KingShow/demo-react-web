import { ADD_TODO } from './types';

export addTodo = (text) => {
    return { type: ADD_TODO, text}
}