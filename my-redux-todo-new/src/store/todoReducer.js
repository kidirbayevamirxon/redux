const initialState = {
    todos: [],
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, { id: Date.now(), text: action.text }],
        };
      case 'REMOVE_TODO':
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.id),
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;
  