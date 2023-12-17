import { configureStore } from "@reduxjs/toolkit";
import todoList from "../modules/todoList";

const store = configureStore({
    reducer: {
        todoList,
    }
});

export default store;

export type AppDispatch = typeof store.dispatch; 
export type RootState = ReturnType<typeof store.getState>;

