import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todoList: []
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers : {

        //state nya initialState, action nya yaitu data yg dikirim pas reducer nya dipake di dispatch
        saveTodo: (state, action) => {
            state.todoList.push(action.payload);
        },
        setCheck: (state, action) => {
            state.todoList.map(todo=>{
                if (action.payload === todo.id) {
                    if(todo.done) {
                        todo.done = false;
                    }
                    else {
                        todo.done = true;
                    }
                }
            })
        }
    }
});

export const { saveTodo, setCheck } = todoSlice.actions;
export default todoSlice.reducer;