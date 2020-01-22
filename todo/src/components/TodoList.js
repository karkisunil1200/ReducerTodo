import React, {useReducer} from 'react';
import {initialState} from '../reducers/todoReducer';

const TodoList = () => {
  return (
    <div>
      <h5>Welcome to the todo list</h5>
      {initialState.todo.map(todo => {
        console.log('From todoList: ', todo);
        return <h4 key={todo.id}> Item: {todo.item}</h4>;
      })}
    </div>
  );
};

export default TodoList;
