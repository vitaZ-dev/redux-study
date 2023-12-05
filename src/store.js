import { createStore } from 'redux';
import { createAction, createReducer } from "@reduxjs/toolkit";

const addTodo = createAction("ADD");
const deleteTodo = createAction("DELETE");

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addTodo.type:
//       console.log(action);
//       return [{text: action.payload, id: Date.now()}, ...state];
//     case deleteTodo.type:
//       console.log(action);
//       return state.filter(todo => todo.id !== action.payload);
//     default:
//       return state;
//   }
// }

const reducer = createReducer([], (builder) => {
  builder
  .addCase(addTodo, (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  })
  .addCase(deleteTodo, (state, action) => {
    return state.filter((toDo) => toDo.id !== action.payload);
  })
})

const store = createStore(reducer);

export const actionCreators = { addTodo, deleteTodo };
export default store;