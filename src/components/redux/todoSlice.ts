import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TodoState {
  items: string[];
}

const initialState: TodoState = {
  items: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
