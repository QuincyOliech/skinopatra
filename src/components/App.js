import React from 'react';
import '../components/App.css'
import Navbar from './Navbar';
import Home from './Home';
import {Routes, Route} from 'react-router-dom';
import Products from './Products';
import Product from './Product';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/products" element={<Products/>}/>
          <Route exact path="/products/:id" element={<Product/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
