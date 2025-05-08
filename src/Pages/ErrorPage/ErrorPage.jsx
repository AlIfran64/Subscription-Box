import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <Helmet>
        <title>Error</title>
      </Helmet>
      <div>
        <img className='w-[400px]' src="../../../images/error.png" alt="error image" />
        <p className='text-center font-bold text-3xl'>Ops! Page not found.</p>
        <div className='my-20 mx-auto flex justify-center'>
          <Link to={'/'}><button className='py-3 px-6 bg-[#123524] text-white rounded-md cursor-pointer font-medium'>Back to homepage</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;