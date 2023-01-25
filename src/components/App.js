import React from 'react';
import '../components/App.css'
import Navbar from './Navbar';
import Home from './Home';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
