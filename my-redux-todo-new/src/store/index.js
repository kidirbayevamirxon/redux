import { createStore } from "redux";

const initialState = {
  todos: [],
  showCompleted: true,
};

const countReducer = (state = initialState, action) => {
  return state;
};

const store = createStore(countReducer);

export default store;
