import React,{useState} from 'react';
import '../components/App.css'
import Navbar from './Navbar';
import Home from './Home';
import {Routes, Route} from 'react-router-dom';
import Products from './Products';
import Product from './Product';
import About from '../pages/About';
import Login from '../pages/Login';
import Footer from './Footer';
import Cart from '../pages/Cart';
import CreateProductForm from '../pages/CreateProductForm';
import Update from '../pages/Update';


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
      {/* <Cart/> */}
         {/* {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      } */}
        <Routes>
          <Route exact path="/" element={<Home search={search}/>}/>
          <Route exact path="/products" element={<Products search={search}/>}/>
          <Route exact path="/products/:id" element={<Product/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/createproductform" element={<CreateProductForm/>}/>
          <Route exact path="/update/:id" element={<Update/>}/>
        </Routes>
        
        <Footer/>
      </header>
    </div>
  );
}

export default App;
