import { Provider } from 'react-redux';
import './App.css';
import store from './app/store';
import Input from './components/Input';

const todoList = [
  {
    item: 'todo',
    done: false,
    id: 39084092380958
  },
  {
    item: 'todo1',
    done: true,
    id: 34308504398949
  }
]

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <div className='container'>
          <Input/>
        </div>
      </div>
    </Provider>
  );
}

export default App;