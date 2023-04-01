import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';

//ambil reducer dari todoSlice.js
export default configureStore({
    reducer: {
        todos: todoReducer
    }
});