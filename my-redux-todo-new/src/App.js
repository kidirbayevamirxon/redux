import React from 'react';
import './App.css';
import Todo from './Todo/Todo';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello Redux Todo</h1>
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
