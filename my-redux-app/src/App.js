// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions';

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Sanagich: {count}</h1>
      <button onClick={() => dispatch(increment())}>
        +1
      </button>
    </div>
  );
}

export default App;
