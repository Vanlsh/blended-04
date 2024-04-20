import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: { items: [] },
};

const toDoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.todos.items.push(action.payload);
    },
    deleteTodos: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodos, deleteTodos } = toDoSlice.actions;

export default toDoSlice.reducer;
