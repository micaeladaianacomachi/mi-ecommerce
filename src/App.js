import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let nombre = ["Nombre 1","Nombre 2","Nombre 3","Nombre 4","Nombre 5","Nombre 6"];

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer grettings={nombre}></ItemListContainer>
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