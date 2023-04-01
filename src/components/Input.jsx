import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../styles/Input.css";
import { saveTodo } from "../features/todoSlice";

const Input = () => {
    //buat state namanya input
    const [input, setInput] = useState('');
    //dispatch buat eksekusi si reducer
    const dispatch = useDispatch();

    const addTodo = () => {
        console.log(`Adding ${input}`);

        dispatch(saveTodo({
            item: input,
            done: false,
            id: Date.now()
        }))
        //action.payload nya si saveTodo di todoSlice.js bakal berisi sebuah object {item, done, id}
    }

    return (
        <div className="input">
            <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
            {/*tiap kali input berubah, bakal ngelakuin setInput. e itu kejadian perubahan nya, target itu target perubahan nya (si input box), value nya itu nilai nya */}
            <button onClick={addTodo}>Add!</button>
        </div>
    )
}

export default Input;