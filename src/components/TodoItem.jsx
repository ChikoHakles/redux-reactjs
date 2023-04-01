import { Checkbox } from '@material-ui/core';
import '../styles/TodoItem.css';
import { setCheck } from '../features/todoSlice';
import { useDispatch } from 'react-redux';

const TodoItem = ({item, done, id}) => {
    const dispatch = useDispatch();
    const handleCheck = () => {
        dispatch(setCheck(id));
        //action.payload si setCheck di todoSlice.js bakal berisi id doang, karena yang dikirim cuma id
    }
    return (
        <div className='todoItem' key={id}>
            <Checkbox checked={done} color='primary' onChange={handleCheck} inputProps={{"aria-label" : "secondary checkbox"}}/>
            {/* done && done artinya if done == true, ngeluarin 'done'*/}
            <p className={done ? 'done' : undefined}>{item}</p>
        </div>
    )
}

export default TodoItem;