import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TodosType {
    value : {id: string; title: string; contents: string; isDone: boolean;}[]
}

const initialState: TodosType = {
    value: []
}

const todoSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        initialData(state, action) {
            return {value: action.payload}
        },
        insertData(state, action) {
            return {value : [...state.value, action.payload]}
        },
        switchData(state, action: PayloadAction<string>) {
            return ({
                value : state.value.map((item) => {
                    return item.id === action.payload
                    ? {...item, isDone: !item.isDone}
                    : item;
                })
            })
        },
        deleteData(state: any, action: PayloadAction<string>) {
            return {value : state.value.filter((item: any) => item.id !== action.payload)}
        }
    }
});

export default todoSlice.reducer;
export const {initialData, insertData, switchData, deleteData} = todoSlice.actions;

