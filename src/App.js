import React from 'react';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import TodoList from './components/TodoList';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="container">
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
