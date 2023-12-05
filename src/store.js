import { configureStore, createSlice } from "@reduxjs/toolkit";

const todo = createSlice({
  name: 'todoReducer',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload);
    }
  }
})

// const store = configureStore({ reducer: todo.reducer });
// console.log(todo.actions);
export const { add, remove } = todo.actions;
// export default store;
export default configureStore({ reducer: todo.reducer });