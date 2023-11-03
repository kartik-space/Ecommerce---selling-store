import React from 'react';
// import { styled } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Community from './Pages/Community';
import ContactUs from './Pages/ContactUs';
import Home from './Pages/Home';
import Login from './Pages/Login';
import OurCollection from './Pages/OurCollection';
import Signup from './Pages/Signup';


function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/home' element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/community' element={<Community />}/>
    <Route path='/our-collection' element={<OurCollection />}/>
    <Route path='/contact-us' element={<ContactUs/>}/>
    </Routes>
    </>
  );
}
export default App;
