import React from 'react';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import TodoList from './components/TodoList';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
