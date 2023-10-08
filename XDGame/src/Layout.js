import React from 'react';
import Navbar from '../src/componment/Navbar';
import Footer from '../src/footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
