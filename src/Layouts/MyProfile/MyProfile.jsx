import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router';

const MyProfile = () => {
  const location = useLocation();
  return (
    <div>
      <Helmet>
        <title>FreshiKart{location.pathname}</title>
      </Helmet>
      <h1>My profile</h1>
    </div>
  );
};

export default MyProfile;