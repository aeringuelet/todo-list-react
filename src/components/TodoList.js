import React, { useEffect } from 'react';
import { getTodos, setIsDone } from '../actions/todoActions'
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';

const TodoList = () => {
    const dispatch = useDispatch();

	useEffect(() => {
		const loadTodos = () => dispatch(getTodos());
		loadTodos();
    }, [ dispatch ]);
    
    const setDone = (todo) => {
        dispatch(setIsDone(todo));
    }

	const loading = useSelector(state => state.loading);
	const error = useSelector(state => state.error);
	const todos = useSelector(state => state.todos.todos);

    return (
        <div className='row'>
            {todos.map(todo => (
                <TodoItem 
                    key={todo._id}
                    data={todo} 
                    setDone={setDone}
                />
            ))}
        </div>
    );
}
 
export default TodoList;