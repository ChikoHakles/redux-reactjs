import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem';
import { useSelector } from 'react-redux';

function App() {
  //slice todos ini disimpan di state, makanya harus ambil di state dlu (state.todos) baru abis itu ambil state todoList yg di dalem nya
  const todoList = useSelector((state) => state.todos.todoList);
  return (
      <div className='app'>
        <div className='container'>
          <div className='todo-container'>
            {todoList.map((todo) => {
              return(<TodoItem item={todo.item} done={todo.done} id={todo.id}/>)
            })}
          </div>
          <Input/>
        </div>
      </div>
  );
}

export default App;