import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ComponenteTest from './components/Tareas/ComponenteTest';
import { useState } from 'react';

function App() {
  const nombre = ["Nombre 1","Nombre 2","Nombre 3","Nombre 4","Nombre 5","Nombre 6"];
  const [cantCarrito, setCantCarrito] = useState(0);

  return (
    <div className="App">
      <NavBar cantCarrito={cantCarrito} />
      <ComponenteTest />
      <ItemListContainer grettings={nombre} setCantCarrito={setCantCarrito} />
      {/* <header className="App-header">
        <img src="/logo.png" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;