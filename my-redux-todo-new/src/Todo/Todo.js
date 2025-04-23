import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Todo.module.css';

const Todo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const addTodoHandler = () => {
    if (input.trim() === '') return;
    dispatch({ type: 'ADD_TODO', text: input });
    setInput('');
  };

  const removeTodoHandler = (id) => {
    dispatch({ type: 'REMOVE_TODO', id });
  };

  return (
    <div className={classes.container}>
      <h2>My Todo List</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTodoHandler}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodoHandler(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
