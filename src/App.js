import logo from './logo.svg';
import React from 'react';
import './index.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Services from './Service';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';


const App =()=>{
  
return(
  <>

    <Navbar/>
  <Routes>

  <Route exact path="/" element={<Home />} />
  <Route exact path="/about" element={<About />} />
  <Route exact path="/service" element={<Services />} />
  <Route exact path="/contact" element={<Contact />} />
</Routes>
  
  
  </>
  

);
  
}


export default App;
