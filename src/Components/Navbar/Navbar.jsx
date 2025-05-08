import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../ContextProvider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';


const Navbar = () => {


  const { user, userLogout } = useContext(AuthContext);


  // Log out
  const handleLogout = () => {
    userLogout().then(() => {
      toast.success("Logout Successful!");
    }).catch((error) => {
      toast.error(error);
    });
  }


  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">



            {/* Mobile view */}

            <NavLink to={'/'} className={({ isActive }) => isActive ? 'px-4 py-2 bg-[#123524] text-white rounded-sm' : ' px-4 py-2'}>Home</NavLink>
            <NavLink to={'/SubscriptionPlans'} className={({ isActive }) => isActive ? ' px-4 py-2 bg-[#123524] text-white rounded-sm' : ' px-4 py-2'}>Subscription Plans</NavLink>
            <NavLink to={'/ThisWeeksBox'} className={({ isActive }) => isActive ? ' px-4 py-2 bg-[#123524] text-white rounded-sm' : ' px-4 py-2'}>This Week's Box</NavLink>
            {
              user && <NavLink to={'/MyProfile'} className={({ isActive }) => isActive ? ' px-4 py-2 bg-[#123524] text-white rounded-sm' : ' px-4 py-2'}>My Profile</NavLink>
            }
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl">
          <img className='w-15' src="../../../images/logo.png" alt="logo" />
          <h1 className='text-2xl'>FreshiKart</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">



          {/* Desktop view */}

          <NavLink to={'/'} className={({ isActive }) => isActive ? 'mx-1 px-4 py-2 bg-[#123524] text-white rounded-sm' : ' px-4 py-2'}>Home</NavLink>
          <NavLink to={'/SubscriptionPlans'} className={({ isActive }) => isActive ? 'mx-1 px-4 py-2 bg-[#123524] text-white rounded-sm' : ' px-4 py-2'}>Subscription Plans</NavLink>
          <NavLink to={'/ThisWeeksBox'} className={({ isActive }) => isActive ? 'mx-1 px-4 py-2 bg-[#123524] text-white rounded-sm' : ' px-4 py-2'}>This Week's Box</NavLink>
          {
            user && <NavLink to={'/MyProfile'} className={({ isActive }) => isActive ? 'mx-1 px-4 py-2 bg-[#123524] text-white rounded-sm' : ' px-4 py-2'}>My Profile</NavLink>
          }
        </ul>
      </div>

      {/* buttons */}
      <div className="navbar-end">
        {
          user && <img className='w-11 h-11 mr-3 rounded-full' src={user.
            photoURL
          } alt="user image" title={user.displayName} />

        }

        {
          user ?
            <button onClick={handleLogout} className="px-6 py-2 border-2 font-medium border-[#123524] hover:bg-[#123524] hover:text-white rounded-sm text-[#123524] text-sm cursor-pointer">Logout</button>


            :

            <Link to={'/Login'} className="px-6 py-2 border-2 font-medium border-[#123524] hover:bg-[#123524] hover:text-white rounded-sm text-[#123524] text-sm">Login</Link>
        }



      </div>

    </div>
  );
};

export default Navbar;