import React, {useState, useReducer} from 'react';

import {initialState, todoReducer} from '../reducers/todoReducer';

const TodoForm = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [value, setValue] = useState('');

  const onInputChange = e => {
    setValue(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();

    dispatch({type: 'ADD_TODO', payload: value});
    console.log('Added to the state');
    setValue('');
  };

  return (
    <div>
      <form className='form' onSubmit={onFormSubmit}>
        <div className='inputBox'>
          <label>Add Item</label>
          <input type='text' value={value} placeholder='Add to do' onChange={onInputChange} />
        </div>
        <button>Add me</button>
      </form>
    </div>
  );
};

export default TodoForm;
