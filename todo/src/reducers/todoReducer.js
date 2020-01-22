export const initialState = {
  todo: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    },
    {
      item: 'Walk the dog',
      completed: false,
      id: 983943
    }
  ]
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };
      return {
        ...state,
        //Need to understand more Would {...state.todo} make
        //one big objext with everything in it then new object added to the array??

        todo: [{...state.todo}, newTodo]
      };

    default:
      return state;
  }
};
