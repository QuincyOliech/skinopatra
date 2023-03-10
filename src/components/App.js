import React,{useState} from 'react';
import '../components/App.css'
import Navbar from './Navbar';
import Home from './Home';
import {Routes, Route} from 'react-router-dom';
import Products from './Products';
import Product from './Product';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Footer from './Footer';
import CreateProductForm from '../pages/CreateProductForm';
import Update from '../pages/Update';
import Login from '../pages/Login';
import Cart from '../pages/Cart';
import { ToastContainer } from 'react-toastify';



function App() {
  const [search,setSearch]=useState("");
 
  // function to search transaction in string format
  function setSearchString(str){
    setSearch(str);   
  }
  

  return (
    <div className="App">
      <header className="App-header">
      <Navbar setSearchString={setSearchString}/>
        <Routes>
          <Route exact path="/" element={<Home search={search}/>}/>
          <Route exact path="/products" element={<Products search={search}/>}/>
          <Route exact path="/products/:id" element={<Product/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/createproductform" element={<CreateProductForm/>}/>
          <Route exact path="/update/:id" element={<Update/>}/>
        </Routes>
        <Footer/>
      </header>
      <ToastContainer/>
    </div>
  );
}

export default App;
