import {
    CREATE_TODO,
    CREATE_TODO_ERROR,
    CREATE_TODO_SUCCESS,
    GET_TODO_LIST,
    GET_TODO_LIST_ERROR,
    GET_TODO_LIST_SUCCESS,
    IS_DONE_START,
    IS_DONE_ERROR,
    IS_DONE_SUCCESS
} from '../types';


import axiosClient from '../config/axios';

export function newTodo(todo) {
    return (dispatch) => {
        dispatch(createTodo());

        axiosClient.post('/todo', todo)
            .then(response => {
                dispatch(createTodoSuccess(todo));
            })
            .catch(error => {
                console.log(error);
                dispatch(createTodoError());
            })

    }
}

const createTodo = () => ({
    type: CREATE_TODO
})

const createTodoSuccess = todo => ({
    type: CREATE_TODO_SUCCESS,
    payload: todo
})

const createTodoError = error => ({
    type: CREATE_TODO_ERROR
})

export function getTodos() {
    return (dispatch) => {
        dispatch(getTodoList());

        axiosClient.get('/todos')
            .then(response => {
                dispatch(getTodoListSuccess(response.data));
            })
            .catch(error => {
                console.log(error);
                dispatch(getTodoListError());
            })

    }
}

const getTodoList = () => ({
    type: GET_TODO_LIST
})

const getTodoListSuccess = todos => ({
    type: GET_TODO_LIST_SUCCESS,
    payload: todos
})

const getTodoListError = error => ({
    type: GET_TODO_LIST_ERROR
})

export function setIsDone(todo) {
    return (dispatch) => {
        dispatch(startIsDone());

        axiosClient.post('/todos', todo)
            .then(response => {
                dispatch(isDoneSuccess(response.data));
            })
            .catch(error => {
                console.log(error);
                dispatch(isDoneError());
            })

    }
}

const startIsDone = () => ({
    type: IS_DONE_START
})

const isDoneSuccess = todo => ({
    type: IS_DONE_SUCCESS,
    payload: todo
})

const isDoneError = error => ({
    type: IS_DONE_ERROR
})