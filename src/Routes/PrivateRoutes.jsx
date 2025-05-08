import React, { useContext } from 'react';
import { AuthContext } from '../ContextProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({ children }) => {

  // get user data
  const { user, loading } = useContext(AuthContext);

  // get location
  const location = useLocation();

  if (loading) {
    return <div className='w-11/12 h-screen mx-auto flex justify-center items-center py-3 rounded-2xl'>
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={'/Login'}></Navigate>




};

export default PrivateRoutes;