import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';import NavBar from './components/NavBar';
import Home from './components/Home/Home';
import Ofertas from './components/Ofertas/Ofertas';
import Productos from './components/Productos/Productos';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [cantCarrito, setCantCarrito] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar cantCarrito={cantCarrito} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Ofertas" element={<Ofertas />} />
          <Route path="/Productos" element={<Productos setCantCarrito={setCantCarrito} />} />
        </Routes>
      </BrowserRouter>
      {/*
        <ComponenteTest />
        <TestPromesas />
        <TestFetchAPI />
      */}

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