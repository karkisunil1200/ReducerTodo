import React, {useState} from 'react';

const TodoForm = () => {
  const [value, setValue] = useState('');

  const onInputChange = e => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <form className='form'>
        <div className='inputBox'>
          <label>Add Item</label>
          <input type='text' value={value} placeholder='Add to do' onChange={onInputChange} />
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
