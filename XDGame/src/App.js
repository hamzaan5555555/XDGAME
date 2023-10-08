
import React from 'react'
import { ChakraProvider } from "@chakra-ui/react";
import { Auth } from 'firebase/auth';
import PagePrincipal from './PagePrincipal/PagePrincipal';
import {  Route ,Routes } from 'react-router-dom';
import Contact from '../src/contact/Contact';
import Navbar from '../src/componment/Navbar';
import Register from './Register/Register';
import Footer from './footer/Footer';
import Market from './MarketPlace.js/Market';
import Market2 from './Market2/Market2';
import Login from './Login/Login';
export default function App() {
  return (
    
    
    <div>
      <ChakraProvider>
      <Navbar/>
      <Routes>
      <Route path='/' element={<PagePrincipal/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/Market' element={<Market/>} />
      <Route path='/Market2' element={<Market2/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Register' element={<Register/>} />
      
      
    </Routes>
    <Footer/>
    </ChakraProvider>
    </div>
    
  )
}
