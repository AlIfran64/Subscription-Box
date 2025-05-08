import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import Copyrights from '../../Components/Copyrights/Copyrights';
import { ToastContainer } from 'react-toastify';

const Root = () => {
  const { state } = useNavigation();
  return (
    <div>
      <Navbar></Navbar>

      <section className='min-h-screen'>
        {state == 'loading' ? <div className='w-11/12 h-screen mx-auto flex justify-center items-center py-3 rounded-2xl'>
          <span className="loading loading-spinner loading-lg"></span>
        </div>
          :
          <Outlet></Outlet>}
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
      <ToastContainer></ToastContainer>
    </div>

  );
};

export default Root;