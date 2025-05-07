import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import Copyrights from '../../Components/Copyrights/Copyrights';

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>

      <section className='min-h-screen'>
        <Outlet></Outlet>
      </section>

      <footer className="relative">
        <div className="relative w-full">
          <img
            className="w-full object-cover"
            src="../../../images/flat-lay-vegetables-frame-with-copy-space.jpg"
            alt="Vegetables frame"
          />
          <div
            className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-white via-transparent to-transparent"
          ></div>
        </div>
        <Footer />
        <Copyrights />
      </footer>
    </div>
  );
};

export default Root;