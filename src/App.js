import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';import NavBar from './components/NavBar';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Ofertas from './components/Ofertas/Ofertas';
import ItemDetail from './components/ItemDetail/ItemDetail';

function App() {
  const [cantCarrito, setCantCarrito] = useState(0);

  return (
<div className='App'>
  <BrowserRouter>
    <NavBar cantCarrito={cantCarrito} />
    <Routes>
      <Route path="/" element={<ItemListContainer/>} />
      <Route path="/Home" element={<ItemListContainer/>} />
      <Route path="/Categoria/:categoria" element={<ItemListContainer/>} />
      <Route path="/Producto/:key" element={<ItemDetail setCantCarrito={setCantCarrito} />} />
    </Routes>
  </BrowserRouter>
</div>
  );
}

export default App;
