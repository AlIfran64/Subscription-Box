import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {


  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">



            {/* Mobile view */}

            <NavLink to={'/'} className={({ isActive }) => isActive ? 'mx-1 px-6 py-2 bg-[#123524] text-white rounded-sm' : ' px-3 py-2'}>Home</NavLink>
            <NavLink to={'/subscription'} className={({ isActive }) => isActive ? 'mx-1 px-6 py-2 bg-[#123524] text-white rounded-sm' : ' px-3 py-2'}>Subscription Plans</NavLink>
            <NavLink to={'/thisWeeksBox'} className={({ isActive }) => isActive ? 'mx-1 px-6 py-2 bg-[#123524] text-white rounded-sm' : ' px-3 py-2'}>This Week's Box</NavLink>
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl">
          <img className='w-15' src="../../../images/logo.png" alt="logo" />
          <h1>FreshiKart</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">



          {/* Desktop view */}

          <NavLink to={'/'} className={({ isActive }) => isActive ? 'mx-1 px-6 py-2 bg-[#123524] text-white rounded-sm' : ' px-3 py-2'}>Home</NavLink>
          <NavLink to={'/subscription'} className={({ isActive }) => isActive ? 'mx-1 px-6 py-2 bg-[#123524] text-white rounded-sm' : ' px-3 py-2'}>Subscription Plans</NavLink>
          <NavLink to={'/thisWeeksBox'} className={({ isActive }) => isActive ? 'mx-1 px-6 py-2 bg-[#123524] text-white rounded-sm' : ' px-3 py-2'}>This Week's Box</NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;