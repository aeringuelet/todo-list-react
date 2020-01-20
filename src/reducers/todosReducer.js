import {
    CREATE_TODO,
    CREATE_TODO_ERROR,
    CREATE_TODO_SUCCESS,
    GET_TODO_LIST,
    GET_TODO_LIST_SUCCESS,
    GET_TODO_LIST_ERROR,
    IS_DONE_START,
    IS_DONE_SUCCESS,
    IS_DONE_ERROR
} from '../types';

const initialState = {
    todos: [],
    todo: {},
    error: null,
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case CREATE_TODO:
            return {
                ...state,
                error: false,
            }
    
        case CREATE_TODO_SUCCESS:
            return {
                ...state,
                error: false,
                todos: [...state.todos, action.payload]
            }

        case CREATE_TODO_ERROR:
            return {
                ...state,
                error: true 
            }

        case GET_TODO_LIST:
            return {
                ...state,
                error: false,
            }
    
        case GET_TODO_LIST_SUCCESS:
            return {
                ...state,
                error: false,
                todos: action.payload
            }

        case GET_TODO_LIST_ERROR:
            return {
                ...state,
                error: true 
            }

        case IS_DONE_START:
            return {
                ...state,
                error: false,
            }
    
        case IS_DONE_SUCCESS:
            return {
                ...state,
                error: false,
                todos: state.todos.map(todo => (todo._id === action.payload._id ? todo = action.payload : todo))
            }

        case IS_DONE_ERROR:
            return {
                ...state,
                error: true 
            }

        default:
            return state;
    }
}