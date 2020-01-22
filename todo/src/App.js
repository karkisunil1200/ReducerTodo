import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <TodoList />
        <TodoForm />
      </header>
    </div>
  );
}

export default App;
