import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import Copyrights from '../../Components/Copyrights/Copyrights';

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <section className='h-screen'>
        <Outlet></Outlet>
      </section>

      <footer>
        <Footer></Footer>
        <Copyrights></Copyrights>
      </footer>
    </div>
  );
};

export default Root;