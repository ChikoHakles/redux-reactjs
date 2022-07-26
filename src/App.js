import './App.css';
import Card from './components/card'
import tokoh from './utils/tokoh.json'

function App() {
  return (
    <div className="App">
      <h1 className="App-header">PARA PENCARI ILMU, ANJAY ILMU</h1>
      <div className="list">
        {
          tokoh.map((item) => {
            return <Card title={item.nama} image={item.image} desc={item.desc}/>
          })
        }
      </div>
    </div>
  );
}

export default App;