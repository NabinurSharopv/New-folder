import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push ({
                id: Data.now(),
                text: action.payload,
            });
        },
        deleteTodo: (state, action) => {
            return state.filter((t) => t.d.id !== action.payload);
        },
    },
})

export const  ( addTodo , deleteTodo ) = todoSlice.actions;
export default todoSlice.reducer;